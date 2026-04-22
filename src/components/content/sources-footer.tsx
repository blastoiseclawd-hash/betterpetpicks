import { RichText } from "@/components/content/rich-text";

export interface SourceEntry {
  id: number;
  label: string; // Outlet + short context, e.g. "Cats.com — 2026 33-model automatic litter box panel"
  url: string;
}

export interface SourcesFooterData {
  title?: string;
  body?: string; // Optional lead-in prose. Supports inline markdown.
  sources: SourceEntry[];
}

// Standalone sources list with `id="source-N"` anchors matching `[N]` footnote links
// from rich-text.tsx. Renders above or independent of the author-bio footer so
// each site's existing trust block stays intact.
export function SourcesFooter({ data }: { data: SourcesFooterData }) {
  if (!data.sources || data.sources.length === 0) return null;

  return (
    <section className="border-t border-[#e8e0d3] bg-[#faf7f2] py-12">
      <div className="site-shell">
        <div className="max-w-3xl">
          <h2 className="font-[family-name:var(--font-heading-family)] text-[1.6rem] font-semibold text-[#1c1210] sm:text-[1.75rem]">
            {data.title ?? "Sources + methodology"}
          </h2>
          {data.body && (
            <RichText text={data.body} />
          )}
          <ol className="mt-6 space-y-3 text-[0.9rem] leading-6 text-[#6b5643]">
            {data.sources.map((source) => (
              <li key={source.id} id={`source-${source.id}`} className="flex gap-3 scroll-mt-24">
                <span className="min-w-[1.75rem] text-right font-mono tabular-nums text-[#8b7355]">
                  {source.id}.
                </span>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-[#1c1210]/30 underline-offset-2 hover:decoration-[#1c1210] hover:text-[#1c1210]"
                >
                  {source.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
