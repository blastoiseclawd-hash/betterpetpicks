/**
 * JSON-LD schema generators for scaffolded affiliate sites.
 *
 * Generates structured data for Google rich results.
 * Schema types: Product, Review, FAQPage, BreadcrumbList, Article, WebSite, Organization, Person
 *
 * RULE: Only generate schema for data that ACTUALLY EXISTS on the page.
 * Never fabricate AggregateRating or Review schema without real content.
 */

import { siteConfig } from "@/config/site";
import type { Product } from "@/data/products";
import { editor, publisher, reviewer } from "@/data/publisher";

function publisherOrganization() {
  return {
    "@type": "Organization",
    name: publisher.name,
    url: publisher.url,
    logo: {
      "@type": "ImageObject",
      url: publisher.logo,
      width: 512,
      height: 512,
    },
    ...(publisher.foundingDate ? { foundingDate: publisher.foundingDate } : {}),
    ...(publisher.sameAs && publisher.sameAs.length ? { sameAs: publisher.sameAs } : {}),
  };
}

function editorPerson() {
  if (editor.sameAs.length === 0) {
    throw new Error("editor.sameAs must not be empty; Person schema without verifiable identity is worse than none.");
  }
  return {
    "@type": "Person",
    name: editor.name,
    jobTitle: editor.jobTitle,
    image: `${publisher.url}${editor.headshot}`,
    url: `${publisher.url}/about`,
    sameAs: editor.sameAs,
    description: editor.bio,
    hasCredential: editor.hasCredential.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: c.credentialCategory,
      name: c.name,
      ...(c.identifier ? { identifier: c.identifier } : {}),
      ...(c.url ? { url: c.url } : {}),
      recognizedBy: {
        "@type": "Organization",
        name: c.issuingBody,
      },
    })),
    worksFor: {
      "@type": "Organization",
      name: publisher.name,
      url: publisher.url,
    },
  };
}

function reviewerPerson() {
  const r = reviewer;
  if (!r) return null;
  return {
    "@type": "Person",
    name: r.name,
    image: `${publisher.url}${r.headshot}`,
    sameAs: r.sameAs,
    description: r.bio,
    hasCredential: r.credentials.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      name: c,
      url: r.credentialVerificationUrl,
    })),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    ...publisherOrganization(),
  };
}

export function publisherSchema() {
  return organizationSchema();
}

export function editorPersonSchema() {
  return {
    "@context": "https://schema.org",
    ...editorPerson(),
  };
}

export function reviewerPersonSchema() {
  const p = reviewerPerson();
  if (!p) return null;
  return {
    "@context": "https://schema.org",
    ...p,
  };
}

// ─── WebSite Schema (homepage only) ─────────────────────────────

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: publisherOrganization(),
  };
}

// ─── BreadcrumbList Schema ──────────────────────────────────────

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ─── Article Schema (for hub/spoke/guide pages) ─────────────────

export function articleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  imageUrl,
  isYmyl,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  authorName?: string;
  authorUrl?: string;
  imageUrl?: string;
  isYmyl?: boolean;
}) {
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    dateModified,
    author: editorPerson(),
    editor: editorPerson(),
    publisher: publisherOrganization(),
    ...(imageUrl ? { image: imageUrl } : {}),
  };
  if (isYmyl) {
    const reviewerP = reviewerPerson();
    if (reviewerP) {
      base.reviewedBy = reviewerP;
    }
  }
  return base;
}

// ─── Product Schema (for individual product mentions) ───────────
// Only use when the product has REAL data shown on the page.

export function webPageSchema({
  title,
  description,
  url,
  type = "WebPage",
}: {
  title: string;
  description: string;
  url: string;
  type?: "WebPage" | "AboutPage" | "CollectionPage";
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name: title,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: publisherOrganization(),
  };
}

export function productSchema(product: Product) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    description: product.verdict || `${product.brand} ${product.model}`,
    ...(product.images.length > 0 ? { image: product.images[0].url } : {}),
  };

  // Only add offers if we have a real price
  if (product.price !== null) {
    schema.offers = {
      "@type": "Offer",
      url: product.affiliateLinks[0]?.url || "",
      priceCurrency: product.priceCurrency,
      price: product.price,
      availability:
        product.status === "active"
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
      seller: {
        "@type": "Organization",
        name: "Amazon",
      },
    };
  }

  return schema;
}

// ─── FAQ Schema ─────────────────────────────────────────────────

export function faqSchema(
  questions: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

// ─── HowTo Schema (for how-to/support pages) ──────────────────

export function howToSchema({
  title,
  description,
  url,
  steps,
  estimatedTime,
}: {
  title: string;
  description: string;
  url: string;
  steps: { name: string; description: string }[];
  estimatedTime?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: title,
    description,
    url,
    ...(estimatedTime ? { totalTime: estimatedTime } : {}),
    step: steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.description,
    })),
  };
}

// ─── JSON-LD Script Component ───────────────────────────────────

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
