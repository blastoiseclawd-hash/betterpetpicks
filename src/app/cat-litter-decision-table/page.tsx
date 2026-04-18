import type { Metadata } from "next";
import Link from "next/link";

import { generatePageMetadata } from "@/lib/metadata";
import {
  articleSchema,
  breadcrumbSchema,
  JsonLd,
} from "@/lib/schema";
import { siteConfig } from "@/config/site";
import { CatLitterDecisionTable } from "@/components/linkable-assets/cat-litter-decision-table";
import { getLitterTableRows } from "@/data/linkable-assets/cat-litter-table-data";

const slug = "cat-litter-decision-table";
const title = "Cat Litter Decision Table (Filterable by Dust, Tracking, Odor)";
const description =
  "Filter 18 cat litters by material, clumping, dust, tracking, odor control, scent, and price. The quick way to narrow down which litter fits your household before you buy.";
const publishedDate = "2026-04-18";
const url = `${siteConfig.url}/${slug}`;

export const metadata: Metadata = generatePageMetadata({
  title,
  description,
  slug,
});

export default function CatLitterDecisionTablePage() {
  const products = getLitterTableRows();

  return (
    <>
      <JsonLd
        data={articleSchema({
          title,
          description,
          url,
          datePublished: publishedDate,
          dateModified: publishedDate,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Cat Litter Decision Table", url },
        ])}
      />

      <section className="relative overflow-hidden bg-[#1d2a24] text-[#f0f5ef]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(94,111,120,0.24),transparent_36%)]" />
        <div className="site-shell relative py-8 text-sm text-[#c4d1c6]">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white">Cat Litter Decision Table</li>
            </ol>
          </nav>
        </div>
        <div className="site-shell relative pb-12">
          <p className="eyebrow text-[#c4d1c6]">Free filterable reference</p>
          <h1 className="display-title mt-2 max-w-4xl text-[#f6fbf6]">
            Cat Litter Decision Table
          </h1>
          <p className="mt-4 max-w-2xl text-[1.08rem] leading-8 text-[#c4d1c6]">
            Filter 18 cat litters by the attributes that actually matter in a real household. Narrow the list by material, clumping, dust, tracking, odor control, scent, and price tier. Sort, compare, and jump straight to the current price.
          </p>
        </div>
      </section>

      <section className="section-space-sm bg-[#fcfdfb]">
        <div className="site-shell">
          <div className="prose-editorial space-y-10 text-[1.05rem] leading-8 text-[#1d2a24]">

            <div>
              <h2 className="font-[family-name:var(--font-source-serif)] text-[1.8rem] font-semibold text-[#1d2a24]">
                How to use this table
              </h2>
              <p className="mt-4">
                Each row is one of the 18 cat litters we track. Attributes are a mix of manufacturer positioning, reviewer and owner reports, and subcategory defaults. Treat them as a narrowing tool, not a lab verdict. Once the list is short enough, read the full review of a litter you are seriously considering.
              </p>
              <p className="mt-4">
                If you have no constraints yet, start with <em>low or better dust</em> and <em>strong clumping</em>. Those two filters alone cut the list to the litters most households are happiest with long-term.
              </p>
            </div>

            <CatLitterDecisionTable products={products} />

            <div>
              <h2 className="font-[family-name:var(--font-source-serif)] text-[1.8rem] font-semibold text-[#1d2a24]">
                Attribute definitions
              </h2>
              <dl className="mt-4 space-y-4">
                <div>
                  <dt className="font-semibold text-[#1d2a24]">Material</dt>
                  <dd className="mt-1">Clay (bentonite), natural (plant-based: corn, walnut, pine, wheat, grass, paper), crystal (silica gel), or pellet (sifted system with absorbent pad).</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#1d2a24]">Clumping</dt>
                  <dd className="mt-1">Strong means waste forms scoopable clumps that hold together. Moderate clumps may break on scoop. None does not clump at all; requires a different cleanup workflow.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#1d2a24]">Dust</dt>
                  <dd className="mt-1">Very low means little to no visible dust cloud when pouring or scooping. Moderate means a visible cloud is normal. Based on manufacturer formulation plus reviewer consensus, not a lab measurement.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#1d2a24]">Tracking</dt>
                  <dd className="mt-1">How much litter ends up outside the box on cat paws. Pellet systems and large-grain naturals tend to track the least; fine-clay clumpers track more.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#1d2a24]">Odor control</dt>
                  <dd className="mt-1">Strong means active odor-fighting formula (carbon, probiotics, baking soda, or scented bases). Baseline means no added odor technology beyond material default.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#1d2a24]">Scent</dt>
                  <dd className="mt-1">Unscented uses no fragrance. Light has a low-intensity scent. Scented is actively perfumed. Scent-sensitive cats often reject scented litters even when odor control is otherwise strong.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#1d2a24]">Price tier</dt>
                  <dd className="mt-1">$ is budget (roughly under $0.80 per pound), $$ is mainstream ($0.80 to $1.40), $$$ is premium (over $1.40). Actual prices move; see the current price link on each row.</dd>
                </div>
              </dl>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-source-serif)] text-[1.8rem] font-semibold text-[#1d2a24]">
                Common filter combinations
              </h2>
              <ul className="mt-4 space-y-3 pl-6 list-disc">
                <li><strong>Apartment with one cat and a sensitive nose:</strong> unscented + strong odor + low or very-low tracking.</li>
                <li><strong>Multi-cat household on a budget:</strong> material = clay + strong clumping + price tier $ or $$.</li>
                <li><strong>Allergy-prone household:</strong> max dust = very-low, scent = unscented.</li>
                <li><strong>Automatic litter box:</strong> clumping = strong + material = clay (most auto-boxes are tuned for clay).</li>
                <li><strong>Environmentally conscious:</strong> material = natural, clumping = strong or moderate.</li>
                <li><strong>Zero-daily-maintenance setup:</strong> material = crystal or pellet, clumping = none.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-source-serif)] text-[1.8rem] font-semibold text-[#1d2a24]">
                Related reading
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <RelatedLink href="/best-cat-litter" title="Best Cat Litter" />
                <RelatedLink href="/best-cat-litter-for-multiple-cats" title="Best Cat Litter for Multiple Cats" />
                <RelatedLink href="/best-cat-litter-mat" title="Best Cat Litter Mats" />
                <RelatedLink href="/how-much-cat-litter-to-use" title="How Much Cat Litter to Use" />
                <RelatedLink href="/how-often-to-change-cat-litter" title="How Often to Change Cat Litter" />
              </div>
            </div>

            <p className="text-[0.9rem] italic text-[#4a5a55]">
              Attributes in this table reflect manufacturer positioning, product subcategory, and reviewer and owner consensus. They are not lab-measured. Treat the table as a narrowing tool, not a verdict.
            </p>

          </div>
        </div>
      </section>
    </>
  );
}

function RelatedLink({ href, title }: { href: string; title: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between rounded-sm border border-[#dde4de] bg-white px-4 py-3 text-[0.98rem] font-medium text-[#1d2a24] transition-colors hover:border-[#365d50] hover:bg-[#f5f8f3]"
    >
      <span>{title}</span>
      <span aria-hidden="true" className="text-[#365d50] transition-transform group-hover:translate-x-0.5">→</span>
    </Link>
  );
}
