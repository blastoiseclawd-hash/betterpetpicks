import { Metadata } from "next";
import { authors } from "@/data/authors";
import { howToGetCatToUseScratchingPostContent } from "@/data/content/how-to-get-cat-to-use-scratching-post";
import { generatePageMetadata } from "@/lib/metadata";
import { SupportPage } from "@/components/pages/support-page";

const content = howToGetCatToUseScratchingPostContent;
const author = authors.find((a) => a.slug === content.authorSlug)!;

export const metadata: Metadata = generatePageMetadata({
  title: content.title,
  description: content.description,
  slug: content.slug,
});

export default function HowToGetCatToUseScratchingPostPage() {
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
      breadcrumbLabel="How to Get Cat to Use Scratching Post"
      estimatedTime={content.estimatedTime}
    />
  );
}
