import { Metadata } from "next";
import { authors } from "@/data/authors";
import { howOftenToChangeCatLitterContent } from "@/data/content/how-often-to-change-cat-litter";
import { generatePageMetadata } from "@/lib/metadata";
import { SupportPage } from "@/components/pages/support-page";

const content = howOftenToChangeCatLitterContent;
const author = authors.find((a) => a.slug === content.authorSlug)!;

export const metadata: Metadata = generatePageMetadata({
  title: content.title,
  description: content.description,
  slug: content.slug,
});

export default function HowOftenToChangeCatLitterPage() {
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
      breadcrumbLabel="How Often to Change Cat Litter"
      estimatedTime={content.estimatedTime}
    />
  );
}
