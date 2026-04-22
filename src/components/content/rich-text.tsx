import { Fragment, type ReactNode } from "react";
import Link from "next/link";

type Token =
  | { type: "text"; value: string }
  | { type: "bold"; value: string }
  | { type: "link"; text: string; href: string }
  | { type: "footnote"; n: string };

function tokenize(input: string): Token[] {
  const tokens: Token[] = [];
  // Matches **bold**, [text](url), OR [N] footnote (standalone bracket-wrapped integer NOT followed by `(`).
  const pattern = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)|\[(\d+)\](?!\()/g;
  let cursor = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(input)) !== null) {
    if (match.index > cursor) {
      tokens.push({ type: "text", value: input.slice(cursor, match.index) });
    }
    if (match[1] !== undefined) {
      tokens.push({ type: "bold", value: match[1] });
    } else if (match[2] !== undefined && match[3] !== undefined) {
      tokens.push({ type: "link", text: match[2], href: match[3] });
    } else if (match[4] !== undefined) {
      tokens.push({ type: "footnote", n: match[4] });
    }
    cursor = match.index + match[0].length;
  }

  if (cursor < input.length) {
    tokens.push({ type: "text", value: input.slice(cursor) });
  }

  return tokens;
}

function renderTokens(input: string): ReactNode[] {
  return tokenize(input).map((token, i) => {
    if (token.type === "text") {
      return <Fragment key={i}>{token.value}</Fragment>;
    }
    if (token.type === "bold") {
      return <strong key={i}>{token.value}</strong>;
    }
    if (token.type === "footnote") {
      return (
        <sup key={i} className="text-[0.72em] leading-none">
          <a
            href={`#source-${token.n}`}
            className="ml-[1px] text-[#1c1210] no-underline hover:underline"
            aria-label={`Source ${token.n}`}
          >
            [{token.n}]
          </a>
        </sup>
      );
    }
    const isInternal = token.href.startsWith("/") && !token.href.startsWith("//");
    if (isInternal) {
      return (
        <Link key={i} href={token.href} className="underline decoration-[#2a5a8a]/40 underline-offset-2 hover:decoration-[#1a3d5c]">
          {token.text}
        </Link>
      );
    }
    const isAbsolute = /^https?:\/\//i.test(token.href);
    return (
      <a
        key={i}
        href={token.href}
        {...(isAbsolute ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="underline decoration-[#2a5a8a]/40 underline-offset-2 hover:decoration-[#1a3d5c]"
      >
        {token.text}
      </a>
    );
  });
}

export function RichText({ text }: { text: string }) {
  const paragraphs = text.split("\n\n");
  return (
    <>
      {paragraphs.map((paragraph, i) => (
        <p key={i}>{renderTokens(paragraph)}</p>
      ))}
    </>
  );
}

export function RichInline({ text }: { text: string }) {
  return <>{renderTokens(text)}</>;
}
