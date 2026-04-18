import type { Metadata } from "next";

import { authors } from "@/data/authors";
import { products } from "@/data/products";
import { bestCordlessVacuumForPetHairGuide } from "@/data/content/best-cordless-vacuum-for-pet-hair";
import { generatePageMetadata } from "@/lib/metadata";
import { HubPage } from "@/components/pages/hub-page";

const content = bestCordlessVacuumForPetHairGuide;
const author = authors.find((a) => a.slug === content.author)!;

export const metadata: Metadata = generatePageMetadata({
  title: content.title,
  description: content.description,
  slug: content.slug,
  publishedTime: content.publishedDate,
  modifiedTime: content.modifiedDate,
  authorName: author.name,
});

export default function BestCordlessVacuumForPetHairPage() {
  const orderedProducts = content.productOrder
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean) as typeof products;

  return (
    <HubPage
      title={content.title}
      description={content.description}
      slug={content.slug}
      publishedDate={content.publishedDate}
      modifiedDate={content.modifiedDate}
      quickAnswer={content.quickAnswer}
      directAnswer={content.directAnswer}
      author={author}
      productOrder={content.productOrder}
      orderedProducts={orderedProducts}
      displayNames={content.displayNames}
      badges={content.badges}
      curatedSpecs={content.curatedSpecs}
      comparisonTable={content.comparisonTable}
      comparisonColumns={content.comparisonColumns}
      reviews={content.reviews}
      buyingGuide={content.buyingGuide}
      faqs={content.faqs}
      breadcrumbLabel={content.breadcrumbLabel}
      lastUpdatedNote={content.lastUpdatedNote}
      relatedLinks={[
        { href: "/best-vacuum-for-pet-hair", title: "Best Vacuums for Pet Hair (All Types)" },
        { href: "/best-cat-litter-mat", title: "Best Cat Litter Mat" },
        { href: "/how-to-get-rid-of-cat-pee-smell", title: "How to Get Rid of Cat Pee Smell" },
        { href: "/how-we-review", title: "How We Review" },
        { href: "/disclosure", title: "Affiliate Disclosure" },
      ]}
    />
  );
}
