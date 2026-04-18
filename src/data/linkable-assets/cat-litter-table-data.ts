import { products } from "@/data/products";

export type LitterMaterial = "clay" | "natural" | "crystal" | "pellet";
export type LitterClumping = "strong" | "moderate" | "none";
export type LitterDust = "very-low" | "low" | "moderate";
export type LitterTracking = "very-low" | "low" | "moderate" | "high";
export type LitterOdor = "strong" | "moderate" | "baseline";
export type LitterScent = "unscented" | "light" | "scented";
export type LitterPriceTier = "$" | "$$" | "$$$";

export interface LitterTableRow {
  slug: string;
  material: LitterMaterial;
  clumping: LitterClumping;
  dust: LitterDust;
  tracking: LitterTracking;
  odor: LitterOdor;
  scent: LitterScent;
  priceTier: LitterPriceTier;
  bestForShort: string;
}

const litterAttributes: Record<string, Omit<LitterTableRow, "slug">> = {
  "boxiepro-probiotic-cat-litter": {
    material: "clay",
    clumping: "strong",
    dust: "low",
    tracking: "low",
    odor: "strong",
    scent: "unscented",
    priceTier: "$$",
    bestForShort: "Best overall; automatic boxes",
  },
  "dr-elseys-ultra-unscented": {
    material: "clay",
    clumping: "strong",
    dust: "low",
    tracking: "moderate",
    odor: "moderate",
    scent: "unscented",
    priceTier: "$",
    bestForShort: "Best value unscented staple",
  },
  "arm-hammer-slide-multi-cat": {
    material: "clay",
    clumping: "strong",
    dust: "moderate",
    tracking: "low",
    odor: "strong",
    scent: "light",
    priceTier: "$",
    bestForShort: "Easy cleanup; no-stick pans",
  },
  "fresh-step-heavy-duty-odor-block": {
    material: "clay",
    clumping: "strong",
    dust: "moderate",
    tracking: "moderate",
    odor: "strong",
    scent: "scented",
    priceTier: "$",
    bestForShort: "Apartment odor control",
  },
  "worlds-best-low-tracking-dust-control": {
    material: "natural",
    clumping: "strong",
    dust: "very-low",
    tracking: "very-low",
    odor: "moderate",
    scent: "unscented",
    priceTier: "$$",
    bestForShort: "Corn-based; low-tracking",
  },
  "tidy-cats-24-7-performance": {
    material: "clay",
    clumping: "strong",
    dust: "moderate",
    tracking: "moderate",
    odor: "strong",
    scent: "scented",
    priceTier: "$",
    bestForShort: "Budget multi-cat bulk",
  },
  "arm-hammer-clump-seal-platinum": {
    material: "clay",
    clumping: "strong",
    dust: "low",
    tracking: "low",
    odor: "strong",
    scent: "light",
    priceTier: "$$",
    bestForShort: "Moisture-sealing multi-cat",
  },
  "boxiecat-extra-strength-probiotic": {
    material: "clay",
    clumping: "strong",
    dust: "low",
    tracking: "low",
    odor: "strong",
    scent: "unscented",
    priceTier: "$$$",
    bestForShort: "Probiotic ammonia control",
  },
  "naturally-fresh-ultra-odor-control": {
    material: "natural",
    clumping: "strong",
    dust: "very-low",
    tracking: "low",
    odor: "strong",
    scent: "unscented",
    priceTier: "$$",
    bestForShort: "Walnut; low-dust; strong odor",
  },
  "fresh-step-clean-paws-unscented": {
    material: "clay",
    clumping: "strong",
    dust: "low",
    tracking: "very-low",
    odor: "moderate",
    scent: "unscented",
    priceTier: "$$",
    bestForShort: "Charcoal; low-tracking",
  },
  "prettylitter-health-monitoring": {
    material: "crystal",
    clumping: "none",
    dust: "very-low",
    tracking: "very-low",
    odor: "strong",
    scent: "unscented",
    priceTier: "$$$",
    bestForShort: "Health-signal crystal; no scoop",
  },
  "sustainably-yours-large-grain": {
    material: "natural",
    clumping: "strong",
    dust: "very-low",
    tracking: "very-low",
    odor: "moderate",
    scent: "unscented",
    priceTier: "$$",
    bestForShort: "Eco; low-dust clumping alt",
  },
  "arm-hammer-cloud-control-platinum": {
    material: "clay",
    clumping: "strong",
    dust: "low",
    tracking: "moderate",
    odor: "strong",
    scent: "light",
    priceTier: "$$",
    bestForShort: "Low-dust clay multi-cat",
  },
  "smartcat-all-natural-grass": {
    material: "natural",
    clumping: "moderate",
    dust: "very-low",
    tracking: "low",
    odor: "moderate",
    scent: "unscented",
    priceTier: "$$",
    bestForShort: "Grass-seed; chemical-free",
  },
  "feline-pine-original": {
    material: "natural",
    clumping: "none",
    dust: "very-low",
    tracking: "low",
    odor: "moderate",
    scent: "light",
    priceTier: "$",
    bestForShort: "Budget pine non-clumping",
  },
  "tuft-paw-really-great-charcoal": {
    material: "natural",
    clumping: "strong",
    dust: "very-low",
    tracking: "very-low",
    odor: "strong",
    scent: "unscented",
    priceTier: "$$$",
    bestForShort: "Severe-allergy ultra-low dust",
  },
  "naturally-fresh-quick-clumping-walnut": {
    material: "natural",
    clumping: "strong",
    dust: "very-low",
    tracking: "low",
    odor: "moderate",
    scent: "unscented",
    priceTier: "$$",
    bestForShort: "Walnut quick-clumping",
  },
  "tidy-cats-breeze-system": {
    material: "pellet",
    clumping: "none",
    dust: "very-low",
    tracking: "very-low",
    odor: "moderate",
    scent: "light",
    priceTier: "$$",
    bestForShort: "Pellet system; zero dust",
  },
};

export interface LitterTableProduct {
  slug: string;
  name: string;
  brand: string;
  price: number | null;
  priceLastChecked: string;
  rating: number | null;
  reviewCount: number | null;
  imageUrl: string;
  affiliateUrl: string;
  attrs: Omit<LitterTableRow, "slug">;
}

export function getLitterTableRows(): LitterTableProduct[] {
  return products
    .filter((p) => p.category === "cat-litter" && litterAttributes[p.slug])
    .map((p) => {
      const attrs = litterAttributes[p.slug];
      const primary = p.affiliateLinks.find((l) => l.priority === 1) ?? p.affiliateLinks[0];
      return {
        slug: p.slug,
        name: p.name,
        brand: p.brand,
        price: p.price,
        priceLastChecked: p.priceLastChecked,
        rating: p.rating,
        reviewCount: p.reviewCount,
        imageUrl: p.images[0]?.url ?? "",
        affiliateUrl: primary?.url ?? "#",
        attrs,
      };
    });
}
