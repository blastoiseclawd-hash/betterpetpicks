import { siteConfig } from "@/config/site";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, JsonLd, webPageSchema } from "@/lib/schema";

export const metadata = generatePageMetadata({
  title: "Terms of Service",
  description: "Pre-launch terms summary for BetterPetPicks before the full legal terms are published.",
  slug: "terms",
  type: "website",
});

export default function TermsPage() {
  const pageUrl = `${siteConfig.url}/terms`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Terms of Service", url: pageUrl },
          ]),
          webPageSchema({
            title: "Terms of Service",
            description: "Pre-launch terms summary for BetterPetPicks.",
            url: pageUrl,
          }),
        ]}
      />

      <section className="section-space-sm">
        <div className="site-shell max-w-4xl">
          <span className="editorial-rule">Terms</span>
          <h1 className="mt-6 font-[family-name:var(--font-heading-family)] text-[3rem] font-semibold leading-[0.98] text-[#23150f] sm:text-[3.8rem]">
            Terms of Service
          </h1>
          <div className="mt-8 space-y-5 text-[1.02rem] leading-8 text-[#46525b]">
            <p>
              BetterPetPicks will publish a full set of legal terms before public launch. This placeholder explains the
              topics that will be covered once the site moves from foundation setup into public publishing.
            </p>
            <p>
              The final terms will cover acceptable use, general informational-only disclaimers, limits of liability,
              affiliate-link disclosure relationships, and the correct contact details for the publication.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
