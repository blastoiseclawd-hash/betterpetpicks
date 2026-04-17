import { Metadata } from "next";
import { authors } from "@/data/authors";
import { howToCleanCatPeeFromCarpetContent } from "@/data/content/how-to-clean-cat-pee-from-carpet";
import { generatePageMetadata } from "@/lib/metadata";
import { SupportPage } from "@/components/pages/support-page";

const content = howToCleanCatPeeFromCarpetContent;
const author = authors.find((a) => a.slug === content.authorSlug)!;

export const metadata: Metadata = generatePageMetadata({
  title: content.title,
  description: content.description,
  slug: content.slug,
});

export default function HowToCleanCatPeeFromCarpetPage() {
  return (
    <SupportPage
      title={content.title}
      description={content.description}
      slug={content.slug}
      publishedDate={content.publishedDate}
      modifiedDate={content.modifiedDate}
      intro={content.intro}
      heroImage={content.heroImage}
      editorialLabel="Cleaning guide"
      author={author}
      sections={content.sections}
      faqs={content.faqs}
      relatedLinks={content.relatedLinks}
      breadcrumbLabel="How to Clean Cat Pee from Carpet"
      estimatedTime={content.estimatedTime}
    />
  );
}
