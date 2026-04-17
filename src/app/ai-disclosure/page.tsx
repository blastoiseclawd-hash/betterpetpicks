import Link from "next/link";

import { siteConfig } from "@/config/site";
import { editor } from "@/data/publisher";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, JsonLd, webPageSchema } from "@/lib/schema";

const title = "AI & Editorial Transparency";
const description =
  "How Better Pet Picks uses AI-assisted drafting, where humans sign off, and what we refuse to do with AI.";

export const metadata = generatePageMetadata({
  title,
  description,
  slug: "ai-disclosure",
  type: "website",
});

export default function AiDisclosurePage() {
  const pageUrl = `${siteConfig.url}/ai-disclosure`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "AI & Editorial Transparency", url: pageUrl },
          ]),
          webPageSchema({ title, description, url: pageUrl }),
        ]}
      />

      <section className="section-space-sm">
        <div className="site-shell max-w-4xl">
          <span className="editorial-rule">Transparency</span>
          <h1 className="mt-6 font-[family-name:var(--font-heading-family)] text-[3rem] font-semibold leading-[0.98] text-[#1c1210] sm:text-[3.8rem]">
            {title}
          </h1>
          <p className="mt-6 text-[1.1rem] leading-9 text-[#5a4a3e]">
            Better Pet Picks uses AI-assisted drafting as part of our editorial workflow. We think disclosing
            that is more honest than hiding it.
          </p>
          <div className="mt-8 space-y-6 text-[1.02rem] leading-8 text-[#5a4a3e]">
            <div>
              <h2 className="text-[1.6rem] font-semibold text-[#1c1210]">Where AI helps</h2>
              <p className="mt-3">
                AI tools help us process thousands of real owner reports about dust, tracking, smell, shedding,
                and cleanup hassle. We cross-reference Amazon review patterns, Reddit pet-owner threads, and
                manufacturer spec sheets so the tradeoffs we call out are grounded in actual household
                experience — not marketing copy.
              </p>
            </div>
            <div>
              <h2 className="text-[1.6rem] font-semibold text-[#1c1210]">Where humans sign off</h2>
              <p className="mt-3">
                Every page is edited and fact-checked by {editor.name} before publication. Product picks are
                set by the editor, not by the model. AI is not credited as an author. Editorial desks
                (Cat Care Essentials, Multi-Cat Home, Upgrade &amp; Automation, Pet Cleanup, Dog Comfort) are
                internal voice frameworks that keep tone consistent across categories — not fictional people.
              </p>
            </div>
            <div>
              <h2 className="text-[1.6rem] font-semibold text-[#1c1210]">What we refuse to do with AI</h2>
              <ul className="mt-3 space-y-3">
                <li>Fabricate testing or pet-household measurements.</li>
                <li>Invent reviewer personas or anonymous &quot;veterinarian&quot; quotes.</li>
                <li>Generate synthetic customer reviews or owner reports.</li>
                <li>Publish pet-health, supplement, or medical-claim content — those are excluded from scope entirely.</li>
                <li>Manufacture source citations the page cannot back up.</li>
                <li>Use AI-generated imagery without labeling it as such.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-[1.6rem] font-semibold text-[#1c1210]">Why the disclosure matters</h2>
              <p className="mt-3">
                Pet-home products are a daily-life category, not a health category, and we keep it that way on
                purpose. If you ever find a claim on Better Pet Picks that is not clearly sourced, email the
                editor and we will correct or remove it.
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/about" className="button-primary">
              Meet the editor
            </Link>
            <Link href="/disclosure" className="button-secondary">
              Affiliate disclosure
            </Link>
            <Link href="/how-we-review" className="button-secondary">
              Review methodology
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
