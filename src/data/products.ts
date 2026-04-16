export interface ProductImage {
  url: string;
  alt: string;
}

export interface AffiliateLink {
  retailer: string;
  url: string;
  tag?: string;
  priority: number;
}

export interface Product {
  id: string;
  slug: string;
  asin: string;
  name: string;
  brand: string;
  model: string;
  category: string;
  subcategory?: string;
  bestFor: string[];
  price: number | null;
  priceCurrency: "USD";
  priceLastChecked: string;
  priceSource: string;
  rating: number;
  reviewCount: number;
  ratingLastChecked: string;
  images: ProductImage[];
  thumbnailUrl: string;
  specs: Record<string, string>;
  pros: string[];
  cons: string[];
  verdict: string;
  authorSlug: string; // Legacy-compatible field name for the owning editorial desk.
  affiliateLinks: AffiliateLink[];
  lastUpdated: string;
  updateNotes: string;
  status: "active" | "discontinued" | "out-of-stock";
}

export const categorySpecs: Record<string, string[]> = {
  "cat-litter": [
    "Weight",
    "Material",
    "Scent",
    "Dust Claim",
    "Best Fit",
    "Odor Positioning",
  ],
};

export function buildAmazonLink(asin: string, tag = "betterpetpicks-20"): string {
  return `https://www.amazon.com/dp/${asin}?tag=${tag}`;
}

export function priceDisplay(product: Product): string {
  if (product.price === null) {
    return "Check current price";
  }
  return `$${product.price.toFixed(2)}`;
}

export function preferredAffiliateLink(product: Product): AffiliateLink | undefined {
  const candidates = product.affiliateLinks.filter((link) => Boolean(link.url));
  if (candidates.length === 0) return undefined;

  return candidates.reduce((best, link) =>
    link.priority < best.priority ? link : best
  );
}

export const products: Product[] = [
  {
    id: "boxiepro-probiotic-cat-litter",
    slug: "boxiepro-probiotic-cat-litter",
    asin: "B07DK2BQGF",
    name: "Boxie Probiotic Cat Litter",
    brand: "BoxiePro",
    model: "Probiotic",
    category: "cat-litter",
    subcategory: "clumping-clay",
    bestFor: ["Best overall", "Automatic litter boxes", "Low-fragrance households"],
    price: 23.99,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-15",
    priceSource: "amazon",
    rating: 4.2,
    reviewCount: 11165,
    ratingLastChecked: "2026-04-15",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/717lrmpiFJL._AC_SL1500_.jpg",
        alt: "Boxie Probiotic Cat Litter bag front view",
      },
      {
        url: "https://m.media-amazon.com/images/I/41FSD9WasoL.jpg",
        alt: "Boxie Probiotic Cat Litter packaging side panel",
      },
      {
        url: "https://m.media-amazon.com/images/I/41HzfifOX5L.jpg",
        alt: "Boxie Probiotic Cat Litter odor control callouts",
      },
    ],
    thumbnailUrl: "https://m.media-amazon.com/images/I/717lrmpiFJL._AC_SL1500_.jpg",
    specs: {
      Weight: "16 lb",
      Material: "Clay",
      Scent: "Unscented",
      "Dust Claim": "99.9% dust-free",
      "Best Fit": "Premium all-around clumping performance",
      "Odor Positioning": "40-day odor control with probiotics",
    },
    pros: [
      "Strong clumps and good box behavior for a premium clay litter",
      "Unscented positioning is easier for fragrance-sensitive homes",
      "Works well for shoppers also considering automatic litter boxes",
    ],
    cons: [
      "Costs more per pound than bulk mainstream clay options",
      "Still gets mixed owner feedback on dust and tracking",
    ],
    verdict:
      "This is the strongest premium-clay default in the current BetterPetPicks litter lineup. It earns the top spot when you want better clumping and a cleaner-feeling formula without drifting into novelty-only litter territory.",
    authorSlug: "cat-care-essentials-desk",
    affiliateLinks: [
      {
        retailer: "Amazon",
        url: buildAmazonLink("B07DK2BQGF"),
        tag: "betterpetpicks-20",
        priority: 1,
      },
    ],
    lastUpdated: "2026-04-15",
    updateNotes: "Initial product data from Amazon scrape for the best-cat-litter lineup.",
    status: "active",
  },
  {
    id: "dr-elseys-ultra-unscented",
    slug: "dr-elseys-ultra-unscented",
    asin: "B0009X29WK",
    name: "Dr. Elsey's Ultra Unscented Clumping Clay Cat Litter",
    brand: "Dr. Elsey's",
    model: "Ultra Unscented",
    category: "cat-litter",
    subcategory: "clumping-clay",
    bestFor: ["Best value", "Unscented default", "High review-volume staple"],
    price: 20.99,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-15",
    priceSource: "amazon",
    rating: 4.3,
    reviewCount: 94544,
    ratingLastChecked: "2026-04-15",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/71gV7T7iW-L._AC_SL1444_.jpg",
        alt: "Dr. Elsey's Ultra Unscented cat litter 40 pound bag",
      },
      {
        url: "https://m.media-amazon.com/images/I/51aLRVazcoL.jpg",
        alt: "Dr. Elsey's Ultra Unscented litter side panel",
      },
      {
        url: "https://m.media-amazon.com/images/I/51gFMp9Wk9L.jpg",
        alt: "Dr. Elsey's Ultra Unscented litter clumping and dust claims",
      },
    ],
    thumbnailUrl: "https://m.media-amazon.com/images/I/71gV7T7iW-L._AC_SL1444_.jpg",
    specs: {
      Weight: "40 lb",
      Material: "Clay",
      Scent: "Unscented",
      "Dust Claim": "99.9% dust-free",
      "Best Fit": "Broad default for one-cat or multi-cat homes",
      "Odor Positioning": "Natural odor control for routine daily use",
    },
    pros: [
      "Excellent value per pound for a widely trusted clay default",
      "Unscented formula fits buyers who want less perfume in the room",
      "Huge review base makes it one of the most proven mainstream options",
    ],
    cons: [
      "Heavy bag is less friendly for small-space carry and storage",
      "Recent owner reports still mention dust and formula inconsistency",
    ],
    verdict:
      "Dr. Elsey's remains the easiest value recommendation for shoppers who want one dependable answer without paying premium-clay prices. It is the practical fallback when you want mainstream availability and an unscented formula first.",
    authorSlug: "cat-care-essentials-desk",
    affiliateLinks: [
      {
        retailer: "Amazon",
        url: buildAmazonLink("B0009X29WK"),
        tag: "betterpetpicks-20",
        priority: 1,
      },
    ],
    lastUpdated: "2026-04-15",
    updateNotes: "Initial product data from Amazon scrape for the best-cat-litter lineup.",
    status: "active",
  },
  {
    id: "arm-hammer-slide-multi-cat",
    slug: "arm-hammer-slide-multi-cat",
    asin: "B081S9SDBN",
    name: "Arm & Hammer Slide Cat Litter",
    brand: "Arm & Hammer",
    model: "Slide Multi-Cat",
    category: "cat-litter",
    subcategory: "clumping-clay",
    bestFor: ["Easy cleanup", "No-stick pans", "Automatic-box shoppers"],
    price: 20.03,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-15",
    priceSource: "amazon",
    rating: 4.7,
    reviewCount: 410,
    ratingLastChecked: "2026-04-15",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/81umRoPX8XL._AC_SL1500_.jpg",
        alt: "Arm and Hammer Slide Multi-Cat cat litter box packaging",
      },
      {
        url: "https://m.media-amazon.com/images/I/51rF8SO5y5L.jpg",
        alt: "Arm and Hammer Slide cat litter cleanup callout graphic",
      },
    ],
    thumbnailUrl: "https://m.media-amazon.com/images/I/81umRoPX8XL._AC_SL1500_.jpg",
    specs: {
      Weight: "38 lb",
      Material: "Clay",
      Scent: "Fresh scent",
      "Dust Claim": "100% dust free",
      "Best Fit": "Homes that hate scrubbing stuck litter from the pan",
      "Odor Positioning": "7-day odor-free claim",
    },
    pros: [
      "Distinct no-stick cleanup story makes full pan resets easier",
      "Large box and lower scraped price improve its practical value",
      "Clear fit for buyers choosing around easier litter-box cleanup",
    ],
    cons: [
      "Fresh scent formula will not suit fragrance-sensitive homes",
      "This listing has much lower review volume than the core category leaders",
    ],
    verdict:
      "Arm & Hammer Slide stays in the lineup because the cleanup angle is genuinely different from the other clay picks. It is the option to consider when sticking and scraping annoy you more than anything else about litter-box maintenance.",
    authorSlug: "cat-care-essentials-desk",
    affiliateLinks: [
      {
        retailer: "Amazon",
        url: buildAmazonLink("B081S9SDBN"),
        tag: "betterpetpicks-20",
        priority: 1,
      },
    ],
    lastUpdated: "2026-04-15",
    updateNotes: "Initial product data from Amazon scrape for the best-cat-litter lineup.",
    status: "active",
  },
  {
    id: "fresh-step-heavy-duty-odor-block",
    slug: "fresh-step-heavy-duty-odor-block",
    asin: "B0DJDNXZYF",
    name: "Fresh Step Heavy Duty Odor Block Advanced Multi Cat Clumping Litter",
    brand: "Fresh Step",
    model: "Heavy Duty Odor Block",
    category: "cat-litter",
    subcategory: "clumping-clay",
    bestFor: ["Odor control", "Apartment homes", "High-smell litter areas"],
    price: 17.49,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-15",
    priceSource: "amazon",
    rating: 4.7,
    reviewCount: 20194,
    ratingLastChecked: "2026-04-15",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/81BcD+lbecL._AC_SL1500_.jpg",
        alt: "Fresh Step Heavy Duty Odor Block cat litter 17.5 pound box",
      },
      {
        url: "https://m.media-amazon.com/images/I/51vTc4iYn4L.jpg",
        alt: "Fresh Step Heavy Duty litter odor control product panel",
      },
      {
        url: "https://m.media-amazon.com/images/I/51AVGfmB9iL.jpg",
        alt: "Fresh Step Heavy Duty litter clumping and odor claims",
      },
    ],
    thumbnailUrl: "https://m.media-amazon.com/images/I/81BcD+lbecL._AC_SL1500_.jpg",
    specs: {
      Weight: "17.5 lb",
      Material: "Clumping litter",
      Scent: "Heavy Duty",
      "Dust Claim": "Low-dust formula",
      "Best Fit": "Shoppers who prioritize stronger odor containment",
      "Odor Positioning": "30-day odor control claim with carbon and Febreze",
    },
    pros: [
      "Clear odor-control positioning for smell-sensitive rooms",
      "High review count and strong star rating support its mainstream appeal",
      "Tight-clump positioning makes it easy to justify in a practical roundup",
    ],
    cons: [
      "Fragrance-heavy formula will be polarizing for some households",
      "Not the cleanest fit for buyers who want an unscented or low-additive litter",
    ],
    verdict:
      "Fresh Step Heavy Duty earns its slot as the odor-first mainstream pick. It is not the most neutral litter in the lineup, but it is one of the clearest answers for homes where smell control is the whole assignment.",
    authorSlug: "cat-care-essentials-desk",
    affiliateLinks: [
      {
        retailer: "Amazon",
        url: buildAmazonLink("B0DJDNXZYF"),
        tag: "betterpetpicks-20",
        priority: 1,
      },
    ],
    lastUpdated: "2026-04-15",
    updateNotes: "Initial product data from Amazon scrape for the best-cat-litter lineup.",
    status: "active",
  },
  {
    id: "worlds-best-low-tracking-dust-control",
    slug: "worlds-best-low-tracking-dust-control",
    asin: "B0BB5XVQ9X",
    name: "World's Best Cat Litter Low Tracking & Dust Control Multiple Cat",
    brand: "World's Best Cat Litter",
    model: "Low Tracking & Dust Control",
    category: "cat-litter",
    subcategory: "natural-litter",
    bestFor: ["Natural-leaning alternative", "Low-tracking households", "Lighter bags"],
    price: 19.15,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-15",
    priceSource: "amazon",
    rating: 4.2,
    reviewCount: 4282,
    ratingLastChecked: "2026-04-15",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/71AkBVJmAAL._AC_SL1500_.jpg",
        alt: "World's Best Cat Litter Low Tracking and Dust Control bag",
      },
      {
        url: "https://m.media-amazon.com/images/I/41igOGrw6JL.jpg",
        alt: "World's Best Cat Litter packaging side panel",
      },
      {
        url: "https://m.media-amazon.com/images/I/41GVsvBIkzL.jpg",
        alt: "World's Best Cat Litter low tracking and low dust claims",
      },
    ],
    thumbnailUrl: "https://m.media-amazon.com/images/I/71AkBVJmAAL._AC_SL1500_.jpg",
    specs: {
      Weight: "15 lb",
      Material: "Corn",
      Scent: "Unscented",
      "Dust Claim": "99.9% dust-free",
      "Best Fit": "Buyers who want less clay feel and lower floor scatter",
      "Odor Positioning": "Long-lasting natural odor control",
    },
    pros: [
      "Gives the lineup a credible non-clay option with a distinct use case",
      "Lower-tracking pitch fits buyers frustrated by floor scatter",
      "Unscented formula is easier to recommend than heavily perfumed alternatives",
    ],
    cons: [
      "Odor performance gets mixed feedback compared with stronger clay options",
      "Corn-based litter is not the best match for every cat or home setup",
    ],
    verdict:
      "World's Best belongs here because it gives cat owners a real alternative to standard clay without becoming a novelty pick. It makes the most sense for buyers who are chasing lower visible mess more than maximum odor suppression.",
    authorSlug: "cat-care-essentials-desk",
    affiliateLinks: [
      {
        retailer: "Amazon",
        url: buildAmazonLink("B0BB5XVQ9X"),
        tag: "betterpetpicks-20",
        priority: 1,
      },
    ],
    lastUpdated: "2026-04-15",
    updateNotes: "Initial product data from Amazon scrape for the best-cat-litter lineup.",
    status: "active",
  },
  {
    id: "tidy-cats-24-7-performance",
    slug: "tidy-cats-24-7-performance",
    asin: "B0CGJGDW2V",
    name: "Purina Tidy Cats 24/7 Performance Multi Cat Clumping Cat Litter",
    brand: "Tidy Cats",
    model: "24/7 Performance",
    category: "cat-litter",
    subcategory: "clumping-clay",
    bestFor: ["Budget bulk pick", "Easy rebuy", "Multi-cat households"],
    price: 25.99,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-15",
    priceSource: "amazon",
    rating: 4.6,
    reviewCount: 5872,
    ratingLastChecked: "2026-04-15",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/71nvBMJQVPL._AC_SL1500_.jpg",
        alt: "Purina Tidy Cats 24/7 Performance multi-cat litter box",
      },
      {
        url: "https://m.media-amazon.com/images/I/41kx5sGntKL.jpg",
        alt: "Tidy Cats 24/7 Performance litter odor control panel",
      },
      {
        url: "https://m.media-amazon.com/images/I/41FKQdjqX6L.jpg",
        alt: "Tidy Cats 24/7 Performance litter clumping claim panel",
      },
    ],
    thumbnailUrl: "https://m.media-amazon.com/images/I/71nvBMJQVPL._AC_SL1500_.jpg",
    specs: {
      Weight: "38 lb",
      Material: "Clay",
      Scent: "Scented",
      "Dust Claim": "Low dust formula",
      "Best Fit": "Budget-minded homes that want an easy big-box rebuy",
      "Odor Positioning": "10-day odor control claim",
    },
    pros: [
      "Mainstream availability makes it easy to rebuy without hunting around",
      "Large 38-pound format fits households managing multiple boxes",
      "Strong review count keeps it relevant as a budget benchmark",
    ],
    cons: [
      "Scented formula will not fit every home",
      "Recent owner feedback still raises dust and clump-consistency concerns",
    ],
    verdict:
      "Tidy Cats 24/7 Performance is not the most refined litter in the lineup, but it is a useful budget baseline because normal shoppers can find it almost anywhere. It stays relevant when convenience and rebuy simplicity matter as much as top-end performance.",
    authorSlug: "cat-care-essentials-desk",
    affiliateLinks: [
      {
        retailer: "Amazon",
        url: buildAmazonLink("B0CGJGDW2V"),
        tag: "betterpetpicks-20",
        priority: 1,
      },
    ],
    lastUpdated: "2026-04-15",
    updateNotes: "Initial product data from Amazon scrape for the best-cat-litter lineup.",
    status: "active",
  },
];

