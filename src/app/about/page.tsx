import Image from "next/image";
import Link from "next/link";

import { authors } from "@/data/authors";
import { siteConfig } from "@/config/site";
import { aboutContent } from "@/data/content/trust-pages";
import { editor, publisher } from "@/data/publisher";
import { generatePageMetadata } from "@/lib/metadata";
import {
  breadcrumbSchema,
  editorPersonSchema,
  JsonLd,
  publisherSchema,
  webPageSchema,
} from "@/lib/schema";

export const metadata = generatePageMetadata({
  title: aboutContent.title,
  description: aboutContent.description,
  slug: aboutContent.slug,
  type: "website",
});

export default function AboutPage() {
  const pageUrl = `${siteConfig.url}/about`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "About", url: pageUrl },
          ]),
          webPageSchema({
            title: aboutContent.title,
            description: aboutContent.description,
            url: pageUrl,
            type: "AboutPage",
          }),
          publisherSchema(),
          editorPersonSchema(),
        ]}
      />

      <section className="section-space-sm">
        <div className="site-shell max-w-5xl">
          <span className="editorial-rule">About</span>
          <h1 className="mt-6 font-[family-name:var(--font-heading-family)] text-[3rem] font-semibold leading-[0.98] text-[#1c1210] sm:text-[3.8rem]">
            {aboutContent.title}
          </h1>
          <p className="mt-6 text-[1.1rem] leading-9 text-[#5a4a3e]">{aboutContent.intro}</p>
          <div className="mt-8 space-y-5 text-[1.02rem] leading-8 text-[#5a4a3e]">
            <p>{aboutContent.whatWeDo}</p>
            <p>{aboutContent.howWeWork}</p>
          </div>
        </div>
      </section>

      <section id="meet-the-editor" className="section-space-sm bg-[#faf3ea]">
        <div className="site-shell max-w-5xl">
          <span className="editorial-rule">Meet the editor</span>
          <div className="mt-6 grid gap-8 lg:grid-cols-[220px_1fr] lg:items-start">
            <div className="mx-auto w-[220px] lg:mx-0">
              <Image
                src={editor.headshot}
                alt={editor.name}
                width={220}
                height={220}
                className="rounded-md border border-[#d8c9b4] bg-white object-cover"
                priority
              />
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-heading-family)] text-[2.4rem] font-semibold leading-[1.02] text-[#1c1210]">
                {editor.name}
              </h2>
              <p className="mt-2 text-[0.95rem] font-semibold uppercase tracking-[0.18em] text-[#7a5a3e]">
                {editor.jobTitle} · {publisher.name}
              </p>
              <p className="mt-5 text-[1.02rem] leading-8 text-[#5a4a3e]">{editor.visibleBio ?? editor.bio}</p>
              <ul className="mt-5 flex flex-wrap gap-4 text-[0.95rem]">
                <li>
                  <a
                    href={editor.sameAs[0]}
                    rel="me noopener"
                    target="_blank"
                    className="font-semibold text-[#7a5a3e] underline underline-offset-4 hover:text-[#1c1210]"
                  >
                    LinkedIn profile
                  </a>
                </li>
                {editor.hasCredential.map((c) => (
                  <li key={c.name}>
                    <a
                      href={c.url}
                      rel="me noopener"
                      target="_blank"
                      className="font-semibold text-[#7a5a3e] underline underline-offset-4 hover:text-[#1c1210]"
                    >
                      {c.name} · License #{c.identifier}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space-sm bg-[#f2ebe3]">
        <div className="site-shell">
          <div className="grid gap-5 lg:grid-cols-3">
            {authors.map((desk) => (
              <article key={desk.slug} id={desk.slug} className="sand-panel p-7">
                <p className="eyebrow">{desk.title}</p>
                <h2 className="mt-4 text-[2rem] font-bold leading-[1.02] text-[#1c1210]">
                  {desk.name}
                </h2>
                <p className="mt-4 text-[1rem] leading-8 text-[#5a4a3e]">{desk.bio}</p>
                <p className="mt-4 text-[0.95rem] leading-7 text-[#6b5d52]">{desk.audience}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space-sm">
        <div className="site-shell max-w-4xl">
          <h2 className="font-[family-name:var(--font-heading-family)] text-[2.4rem] font-semibold text-[#1c1210]">
            {aboutContent.closingSection.heading}
          </h2>
          <p className="mt-5 text-[1.02rem] leading-8 text-[#5a4a3e]">
            {aboutContent.closingSection.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/best-cat-litter" className="button-primary">
              Read Best Cat Litter
            </Link>
            <Link href="/how-we-review" className="button-secondary">
              Review the methodology
            </Link>
            <Link href="/disclosure" className="button-secondary">
              Read the disclosure
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
