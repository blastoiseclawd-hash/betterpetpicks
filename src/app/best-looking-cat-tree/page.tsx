import { Metadata } from "next";
import { authors } from "@/data/authors";
import { bestLookingCatTreeContent } from "@/data/content/best-looking-cat-tree";
import { generatePageMetadata } from "@/lib/metadata";
import { SupportPage } from "@/components/pages/support-page";

const content = bestLookingCatTreeContent;
const author = authors.find((a) => a.slug === content.authorSlug)!;

export const metadata: Metadata = generatePageMetadata({
  title: content.title,
  description: content.description,
  slug: content.slug,
});

export default function BestLookingCatTreePage() {
  return (
    <SupportPage
      title={content.title}
      description={content.description}
      slug={content.slug}
      publishedDate={content.publishedDate}
      modifiedDate={content.modifiedDate}
      intro={content.intro}
      editorialLabel={content.editorialLabel}
      author={author}
      sections={content.sections}
      faqs={content.faqs}
      relatedLinks={content.relatedLinks}
      breadcrumbLabel={content.breadcrumbLabel}
      sourcesFooter={content.sourcesFooter}
      evidenceSummary={content.evidenceSummary}
    />
  );
}
