import { siteConfig } from "@/config/site";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, JsonLd, webPageSchema } from "@/lib/schema";

export const metadata = generatePageMetadata({
  title: "Privacy Policy",
  description: "Pre-launch privacy summary for BetterPetPicks and the systems the site expects to use before public rollout.",
  slug: "privacy",
  type: "website",
});

export default function PrivacyPage() {
  const pageUrl = `${siteConfig.url}/privacy`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Privacy Policy", url: pageUrl },
          ]),
          webPageSchema({
            title: "Privacy Policy",
            description: "Pre-launch privacy summary for BetterPetPicks.",
            url: pageUrl,
          }),
        ]}
      />

      <section className="section-space-sm">
        <div className="site-shell max-w-4xl">
          <span className="editorial-rule">Privacy</span>
          <h1 className="mt-6 font-[family-name:var(--font-heading-family)] text-[3rem] font-semibold leading-[0.98] text-[#23150f] sm:text-[3.8rem]">
            Privacy Policy
          </h1>
          <div className="mt-8 space-y-5 text-[1.02rem] leading-8 text-[#46525b]">
            <p>
              BetterPetPicks will publish a full privacy policy before public launch. Until then, treat this page as a
              pre-launch summary of the privacy topics the site will disclose clearly once analytics, affiliate tooling,
              and contact workflows are fully configured.
            </p>
            <p>
              The final policy will cover analytics, affiliate-network tracking, cookies, any email collection, and the
              reader rights or contact methods attached to those systems.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
