import { Metadata } from "next";
import { authors } from "@/data/authors";
import { howToRemovePetHairFromClothesContent } from "@/data/content/how-to-remove-pet-hair-from-clothes";
import { generatePageMetadata } from "@/lib/metadata";
import { SupportPage } from "@/components/pages/support-page";

const content = howToRemovePetHairFromClothesContent;
const author = authors.find((a) => a.slug === content.authorSlug)!;

export const metadata: Metadata = generatePageMetadata({
  title: content.title,
  description: content.description,
  slug: content.slug,
});

export default function HowToRemovePetHairFromClothesPage() {
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
      breadcrumbLabel="How to Remove Pet Hair From Clothes"
      estimatedTime={content.estimatedTime}
    />
  );
}
