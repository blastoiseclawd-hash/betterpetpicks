import { Metadata } from "next";
import { authors } from "@/data/authors";
import { lowDustCatLitterContent } from "@/data/content/low-dust-cat-litter";
import { generatePageMetadata } from "@/lib/metadata";
import { SupportPage } from "@/components/pages/support-page";

const content = lowDustCatLitterContent;
const author = authors.find((a) => a.slug === content.authorSlug)!;

export const metadata: Metadata = generatePageMetadata({
  title: content.title,
  description: content.description,
  slug: content.slug,
});

export default function LowDustCatLitterPage() {
  return (
    <SupportPage
      title={content.title}
      description={content.description}
      slug={content.slug}
      publishedDate={content.publishedDate}
      modifiedDate={content.modifiedDate}
      intro={content.intro}
      heroImage={content.heroImage}
      editorialLabel="Guide"
      author={author}
      sections={content.sections}
      faqs={content.faqs}
      relatedLinks={content.relatedLinks}
      breadcrumbLabel="Low-Dust Cat Litter"
      estimatedTime={content.estimatedTime}
      sourcesFooter={content.sourcesFooter}
      evidenceSummary={content.evidenceSummary}
    />
  );
}
