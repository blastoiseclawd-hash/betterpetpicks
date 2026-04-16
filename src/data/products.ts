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
  "cat-water-fountains": [
    "Capacity",
    "Material",
    "Noise",
    "Filter",
    "Cleaning",
    "Power",
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
        alt: "BoxiePro Deep Clean probiotic cat litter 16 pound bag",
      },
      {
        url: "https://m.media-amazon.com/images/I/41FSD9WasoL.jpg",
        alt: "BoxiePro Deep Clean 40-day odor protection and probiotic formula details",
      },
      {
        url: "https://m.media-amazon.com/images/I/41HzfifOX5L.jpg",
        alt: "BoxiePro Deep Clean unscented clay litter scoop-free clumping results",
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

  // ── Cat Water Fountains ──────────────────────────────────────────
  {
    id: "veken-stainless-steel-cat-water-fountain",
    slug: "veken-stainless-steel-cat-water-fountain",
    asin: "B0CK1MXC7J",
    name: "Veken 95oz Stainless Steel Cat Water Fountain",
    brand: "Veken",
    model: "95oz Stainless Steel",
    category: "cat-water-fountains",
    subcategory: "stainless-steel",
    bestFor: ["Best overall", "Stainless steel default", "Quiet operation"],
    price: 29.99,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-15",
    priceSource: "amazon",
    rating: 4.3,
    reviewCount: 30000,
    ratingLastChecked: "2026-04-15",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/71qMBV7SXPL._AC_SL1500_.jpg",
        alt: "Veken 95oz stainless steel cat water fountain",
      },
    ],
    thumbnailUrl: "https://m.media-amazon.com/images/I/71qMBV7SXPL._AC_SL1500_.jpg",
    specs: {
      Capacity: "95 oz (2.8L)",
      Material: "304 stainless steel",
      Noise: "25 dB (ultra-quiet)",
      Filter: "Triple filtration",
      Cleaning: "Dishwasher-safe tray",
      Power: "Corded",
    },
    pros: [
      "304 stainless steel resists biofilm and mold at a price point where most fountains are plastic",
      "Ultra-quiet 25dB pump stays unnoticeable in bedroom or kitchen placement",
      "Dishwasher-safe tray makes weekly deep cleaning a non-event",
    ],
    cons: [
      "Pump can weaken after 8-12 months under hard water conditions",
      "Replacement filters add roughly $3-4 per month to ownership cost",
    ],
    verdict:
      "The Veken is the best starting point for most cat owners because it solves the two biggest fountain complaints — mold-prone plastic and annoying pump noise — without a premium price. 2024 Pet Innovation Award winner.",
    authorSlug: "cat-care-essentials-desk",
    affiliateLinks: [
      {
        retailer: "Amazon",
        url: buildAmazonLink("B0CK1MXC7J"),
        tag: "betterpetpicks-20",
        priority: 1,
      },
    ],
    lastUpdated: "2026-04-15",
    updateNotes: "Initial product data for cat water fountain roundup.",
    status: "active",
  },
  {
    id: "catit-flower-fountain",
    slug: "catit-flower-fountain",
    asin: "B0146QXOB0",
    name: "Catit Flower Fountain 3L",
    brand: "Catit",
    model: "Flower Fountain 3L",
    category: "cat-water-fountains",
    subcategory: "plastic",
    bestFor: ["Best budget", "First-time buyers", "Picky cats"],
    price: 24.99,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-15",
    priceSource: "amazon",
    rating: 4.2,
    reviewCount: 36000,
    ratingLastChecked: "2026-04-15",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/71j3eXJ7qEL._AC_SL1500_.jpg",
        alt: "Catit Flower Fountain 3L with flower spout",
      },
    ],
    thumbnailUrl: "https://m.media-amazon.com/images/I/71j3eXJ7qEL._AC_SL1500_.jpg",
    specs: {
      Capacity: "100 oz (3L)",
      Material: "BPA-free plastic",
      Noise: "Quiet (pump dependent)",
      Filter: "Dual-action carbon + softener",
      Cleaning: "Hand-wash, smooth curves",
      Power: "Corded",
    },
    pros: [
      "Three flow settings let picky cats choose gentle bubbling, flowing stream, or calm surface",
      "Highest review volume in the category makes it the most proven starter fountain",
      "Often drops below $20 on sale making it a risk-free experiment",
    ],
    cons: [
      "Plastic body promotes biofilm and slime buildup faster than stainless or ceramic",
      "Pump tends to get noisy after 6 months of continuous use",
    ],
    verdict:
      "The Catit Flower Fountain is the lowest-risk way to find out whether your cat will actually use a fountain. Most owners who stick with fountains start here and upgrade to stainless steel within a year.",
    authorSlug: "cat-care-essentials-desk",
    affiliateLinks: [
      {
        retailer: "Amazon",
        url: buildAmazonLink("B0146QXOB0"),
        tag: "betterpetpicks-20",
        priority: 1,
      },
    ],
    lastUpdated: "2026-04-15",
    updateNotes: "Initial product data for cat water fountain roundup.",
    status: "active",
  },
  {
    id: "petsafe-drinkwell-360-stainless",
    slug: "petsafe-drinkwell-360-stainless",
    asin: "B002SB91QS",
    name: "PetSafe Drinkwell 360 Stainless Steel Fountain 128oz",
    brand: "PetSafe",
    model: "Drinkwell 360 Stainless",
    category: "cat-water-fountains",
    subcategory: "stainless-steel",
    bestFor: ["Best for multiple cats", "High capacity", "360-degree access"],
    price: 75.99,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-15",
    priceSource: "amazon",
    rating: 4.3,
    reviewCount: 10000,
    ratingLastChecked: "2026-04-15",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/71jD2pQNY9L._AC_SL1500_.jpg",
        alt: "PetSafe Drinkwell 360 stainless steel cat water fountain",
      },
    ],
    thumbnailUrl: "https://m.media-amazon.com/images/I/71jD2pQNY9L._AC_SL1500_.jpg",
    specs: {
      Capacity: "128 oz (1 gallon)",
      Material: "Stainless steel",
      Noise: "Moderate",
      Filter: "Carbon + foam",
      Cleaning: "Dishwasher-safe",
      Power: "Corded",
    },
    pros: [
      "One-gallon capacity means the longest refill interval in the lineup",
      "360-degree access with 5 adjustable spouts fits multi-cat households",
      "Reddit owners report 3-4 year durability which is exceptional for this category",
    ],
    cons: [
      "At $76 it costs more than twice the Veken for similar stainless construction",
      "Larger footprint takes up more counter or floor space than smaller fountains",
    ],
    verdict:
      "The Drinkwell 360 is the clear answer for households with 3+ cats or dogs and cats sharing water. The capacity and access angle both matter more under heavy traffic load.",
    authorSlug: "cat-care-essentials-desk",
    affiliateLinks: [
      {
        retailer: "Amazon",
        url: buildAmazonLink("B002SB91QS"),
        tag: "betterpetpicks-20",
        priority: 1,
      },
    ],
    lastUpdated: "2026-04-15",
    updateNotes: "Initial product data for cat water fountain roundup.",
    status: "active",
  },
  {
    id: "npet-wf050-cat-water-fountain",
    slug: "npet-wf050-cat-water-fountain",
    asin: "B087Q8Y37S",
    name: "NPET WF050 Cat Water Fountain 1.5L",
    brand: "NPET",
    model: "WF050",
    category: "cat-water-fountains",
    subcategory: "plastic",
    bestFor: ["Ultra-budget", "Disposable experiment", "Small spaces"],
    price: 17.99,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-15",
    priceSource: "amazon",
    rating: 4.3,
    reviewCount: 15000,
    ratingLastChecked: "2026-04-15",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/71RlLLsm0rL._AC_SL1500_.jpg",
        alt: "NPET WF050 cat water fountain faucet style",
      },
    ],
    thumbnailUrl: "https://m.media-amazon.com/images/I/71RlLLsm0rL._AC_SL1500_.jpg",
    specs: {
      Capacity: "50 oz (1.5L)",
      Material: "BPA-free plastic",
      Noise: "Quiet",
      Filter: "Activated carbon",
      Cleaning: "Hand-wash",
      Power: "Corded",
    },
    pros: [
      "Under $18 makes the replacement cost trivial if the pump dies",
      "Faucet-style flow attracts cats who prefer running-tap behavior",
      "Compact footprint fits tight kitchen corners or apartment setups",
    ],
    cons: [
      "1.5L capacity needs daily refilling for anything beyond a single cat",
      "Plastic body means more frequent scrubbing to prevent slime buildup",
    ],
    verdict:
      "At $18 the NPET is cheap enough to treat as semi-disposable. Some owners buy two and rotate rooms instead of investing in one expensive fountain.",
    authorSlug: "cat-care-essentials-desk",
    affiliateLinks: [
      {
        retailer: "Amazon",
        url: buildAmazonLink("B087Q8Y37S"),
        tag: "betterpetpicks-20",
        priority: 1,
      },
    ],
    lastUpdated: "2026-04-15",
    updateNotes: "Initial product data for cat water fountain roundup.",
    status: "active",
  },
  {
    id: "pioneer-pet-raindrop-ceramic",
    slug: "pioneer-pet-raindrop-ceramic",
    asin: "B00329RZFE",
    name: "Pioneer Pet Raindrop Ceramic Drinking Fountain 60oz",
    brand: "Pioneer Pet",
    model: "Raindrop Ceramic",
    category: "cat-water-fountains",
    subcategory: "ceramic",
    bestFor: ["Best ceramic", "Feline acne prevention", "Kitchen-friendly design"],
    price: 39.99,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-15",
    priceSource: "amazon",
    rating: 4.1,
    reviewCount: 5000,
    ratingLastChecked: "2026-04-15",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/61eMqEy2VTL._AC_SL1500_.jpg",
        alt: "Pioneer Pet Raindrop ceramic cat water fountain",
      },
    ],
    thumbnailUrl: "https://m.media-amazon.com/images/I/61eMqEy2VTL._AC_SL1500_.jpg",
    specs: {
      Capacity: "60 oz (1.8L)",
      Material: "Ceramic",
      Noise: "Gentle stream",
      Filter: "Charcoal",
      Cleaning: "Dishwasher-safe",
      Power: "Corded",
    },
    pros: [
      "Non-porous ceramic surface is the healthiest material for cats prone to chin acne",
      "Heavy base resists tipping and sliding even with enthusiastic drinkers",
      "Raindrop design looks more like a kitchen item than a pet product",
    ],
    cons: [
      "Ceramic can chip or crack if dropped during cleaning",
      "60oz capacity is on the smaller side for multi-cat households",
    ],
    verdict:
      "The Pioneer Raindrop is the pick when material hygiene matters most. Veterinarians recommend non-porous surfaces for cats with recurring chin acne, and ceramic is the gold standard.",
    authorSlug: "cat-care-essentials-desk",
    affiliateLinks: [
      {
        retailer: "Amazon",
        url: buildAmazonLink("B00329RZFE"),
        tag: "betterpetpicks-20",
        priority: 1,
      },
    ],
    lastUpdated: "2026-04-15",
    updateNotes: "Initial product data for cat water fountain roundup.",
    status: "active",
  },
  {
    id: "petlibro-dockstream-cordless",
    slug: "petlibro-dockstream-cordless",
    asin: "B0BYDS9KHV",
    name: "Petlibro Dockstream Cordless Cat Water Fountain 84oz",
    brand: "Petlibro",
    model: "Dockstream Cordless",
    category: "cat-water-fountains",
    subcategory: "stainless-steel",
    bestFor: ["Easiest to clean", "Cordless", "Flexible placement"],
    price: 49.99,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-15",
    priceSource: "amazon",
    rating: 4.3,
    reviewCount: 8000,
    ratingLastChecked: "2026-04-15",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/61JGxm1mR7L._AC_SL1500_.jpg",
        alt: "Petlibro Dockstream cordless cat water fountain",
      },
    ],
    thumbnailUrl: "https://m.media-amazon.com/images/I/61JGxm1mR7L._AC_SL1500_.jpg",
    specs: {
      Capacity: "84 oz (2.5L)",
      Material: "Stainless steel tray",
      Noise: "Ultra-quiet",
      Filter: "Quad filtration",
      Cleaning: "Dishwasher-safe",
      Power: "Cordless (rechargeable)",
    },
    pros: [
      "Cordless design eliminates cord-chewing risk and lets you place it anywhere",
      "Stainless steel tray is dishwasher-safe with indicator lights for filter and water level",
      "Battery lasts 7-14 days between charges depending on flow setting",
    ],
    cons: [
      "Recharging every 1-2 weeks adds a maintenance step corded fountains skip",
      "At $50 it costs more than corded stainless options with similar capacity",
    ],
    verdict:
      "The Petlibro Dockstream solves two problems at once: cord-chewing cats and awkward outlet placement. The convenience premium is worth it if either of those is your actual frustration.",
    authorSlug: "cat-care-essentials-desk",
    affiliateLinks: [
      {
        retailer: "Amazon",
        url: buildAmazonLink("B0BYDS9KHV"),
        tag: "betterpetpicks-20",
        priority: 1,
      },
    ],
    lastUpdated: "2026-04-15",
    updateNotes: "Initial product data for cat water fountain roundup.",
    status: "active",
  },

  // ── Cat Litter for Odor Control ──────────────────────────────────
  {
    id: "arm-hammer-clump-seal-platinum",
    slug: "arm-hammer-clump-seal-platinum",
    asin: "B09P32SSRL",
    name: "ARM & HAMMER Clump & Seal Platinum Multi-Cat Litter",
    brand: "Arm & Hammer",
    model: "Clump & Seal Platinum",
    category: "cat-litter",
    subcategory: "clumping-clay",
    bestFor: ["Best overall for odor", "Multi-cat homes", "Moisture-sealing"],
    price: 17.99,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-15",
    priceSource: "amazon",
    rating: 4.5,
    reviewCount: 25000,
    ratingLastChecked: "2026-04-15",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/81LZmKcpCQL._AC_SL1500_.jpg",
        alt: "ARM & HAMMER Clump & Seal Platinum multi-cat litter 18 pound box",
      },
    ],
    thumbnailUrl: "https://m.media-amazon.com/images/I/81LZmKcpCQL._AC_SL1500_.jpg",
    specs: {
      Weight: "18 lb",
      Material: "Clay",
      Scent: "Fresh Home scent",
      "Dust Claim": "100% dust free",
      "Best Fit": "Homes where odor is the primary complaint",
      "Odor Positioning": "7-day odor-free guarantee with moisture-sealing microgranules",
    },
    pros: [
      "Moisture-sealing microgranules lock odor on contact before it reaches the room",
      "Baking soda core neutralizes ammonia rather than just masking it with perfume",
      "High review count and 4.5 stars make it the most proven odor-first formula",
    ],
    cons: [
      "Fresh Home scent is noticeable and will not suit fragrance-sensitive households",
      "Heavier dust than the claim suggests according to recent owner reports",
    ],
    verdict:
      "This is the strongest mainstream answer when room smell is the problem driving the purchase. The moisture-sealing approach works differently from basic baking soda litters by trapping odor at the clump level rather than relying entirely on air freshener chemistry.",
    authorSlug: "multi-cat-home-desk",
    affiliateLinks: [
      {
        retailer: "Amazon",
        url: buildAmazonLink("B09P32SSRL"),
        tag: "betterpetpicks-20",
        priority: 1,
      },
    ],
    lastUpdated: "2026-04-15",
    updateNotes: "Initial product data for odor control litter roundup.",
    status: "active",
  },
  {
    id: "boxiecat-extra-strength-probiotic",
    slug: "boxiecat-extra-strength-probiotic",
    asin: "B017BEE59E",
    name: "Boxiecat Extra Strength Premium Clumping Cat Litter",
    brand: "Boxiecat",
    model: "Extra Strength Probiotic",
    category: "cat-litter",
    subcategory: "clumping-clay",
    bestFor: ["Best for multi-cat ammonia", "Probiotic odor control", "Unscented"],
    price: 21.99,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-15",
    priceSource: "amazon",
    rating: 4.4,
    reviewCount: 8000,
    ratingLastChecked: "2026-04-15",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/71ypA5P4tVL._AC_SL1500_.jpg",
        alt: "Boxiecat Extra Strength premium clumping cat litter 16 pound bag",
      },
    ],
    thumbnailUrl: "https://m.media-amazon.com/images/I/71ypA5P4tVL._AC_SL1500_.jpg",
    specs: {
      Weight: "16 lb",
      Material: "Clay with probiotics",
      Scent: "Unscented",
      "Dust Claim": "99.9% dust-free",
      "Best Fit": "Multi-cat homes with ammonia buildup problems",
      "Odor Positioning": "Live probiotics destroy odor-causing bacteria",
    },
    pros: [
      "Probiotic formula attacks odor bacteria biologically instead of covering it with fragrance",
      "Unscented formula avoids the perfume tradeoff that most odor-focused litters force",
      "Strong clump formation keeps ammonia sealed inside the clump where it belongs",
    ],
    cons: [
      "At $22 for 16 pounds, the price per pound is higher than mainstream odor litters",
      "Probiotic mechanism works slower than chemical options on day one",
    ],
    verdict:
      "This is the pick for multi-cat households where ammonia is the specific smell problem and fragrance is not the answer. The probiotics break down the bacteria that cause the worst litter box smells instead of layering perfume over them.",
    authorSlug: "multi-cat-home-desk",
    affiliateLinks: [
      {
        retailer: "Amazon",
        url: buildAmazonLink("B017BEE59E"),
        tag: "betterpetpicks-20",
        priority: 1,
      },
    ],
    lastUpdated: "2026-04-15",
    updateNotes: "Initial product data for odor control litter roundup.",
    status: "active",
  },
  {
    id: "naturally-fresh-ultra-odor-control",
    slug: "naturally-fresh-ultra-odor-control",
    asin: "B07CL76ZFT",
    name: "Naturally Fresh Ultra Odor Control Multi-Cat Litter",
    brand: "Naturally Fresh",
    model: "Ultra Odor Control",
    category: "cat-litter",
    subcategory: "natural-litter",
    bestFor: ["Best natural odor control", "Walnut shell", "Low-dust alternative"],
    price: 23.99,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-15",
    priceSource: "amazon",
    rating: 4.2,
    reviewCount: 14600,
    ratingLastChecked: "2026-04-15",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/71MnBrqLd0L._AC_SL1500_.jpg",
        alt: "Naturally Fresh Ultra Odor Control multi-cat walnut shell litter 26 pound bag",
      },
    ],
    thumbnailUrl: "https://m.media-amazon.com/images/I/71MnBrqLd0L._AC_SL1500_.jpg",
    specs: {
      Weight: "26 lb",
      Material: "Walnut shell",
      Scent: "Unscented",
      "Dust Claim": "Virtually dust-free",
      "Best Fit": "Natural-leaning homes that still need serious odor control",
      "Odor Positioning": "3x absorption via walnut shell plus probiotic boost",
    },
    pros: [
      "Walnut shell absorbs 3x its weight in moisture which traps odor physically",
      "Unscented and natural-material positioning suits households avoiding chemical additives",
      "Lighter weight than clay at similar volume makes handling easier",
    ],
    cons: [
      "Dark walnut color makes it harder to visually check clump health",
      "Some cats reject the texture difference from standard clay granules",
    ],
    verdict:
      "This is the natural-material option that actually competes on odor control. Unlike most alternative litters, the walnut shell absorption rate is high enough to hold its own against clay in multi-cat conditions.",
    authorSlug: "multi-cat-home-desk",
    affiliateLinks: [
      {
        retailer: "Amazon",
        url: buildAmazonLink("B07CL76ZFT"),
        tag: "betterpetpicks-20",
        priority: 1,
      },
    ],
    lastUpdated: "2026-04-15",
    updateNotes: "Initial product data for odor control litter roundup.",
    status: "active",
  },
  {
    id: "fresh-step-clean-paws-unscented",
    slug: "fresh-step-clean-paws-unscented",
    asin: "B07ZK3DZB3",
    name: "Fresh Step Clean Paws Multi-Cat Unscented Clumping Litter",
    brand: "Fresh Step",
    model: "Clean Paws Unscented",
    category: "cat-litter",
    subcategory: "clumping-clay",
    bestFor: ["Best unscented odor control", "Low-tracking", "Charcoal-based"],
    price: 21.99,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-15",
    priceSource: "amazon",
    rating: 4.3,
    reviewCount: 15000,
    ratingLastChecked: "2026-04-15",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/81vZ-RqL1ML._AC_SL1500_.jpg",
        alt: "Fresh Step Clean Paws multi-cat unscented clumping litter 22.5 pound box",
      },
      {
        url: "https://m.media-amazon.com/images/I/51RvQ8rUUgL._AC_SL1500_.jpg",
        alt: "Fresh Step Clean Paws low-tracking larger particle design and odor control",
      },
      {
        url: "https://m.media-amazon.com/images/I/514G0MuDZoL._AC_SL1500_.jpg",
        alt: "Fresh Step Clean Paws low-dust ammonia block technology callout",
      },
    ],
    thumbnailUrl: "https://m.media-amazon.com/images/I/81vZ-RqL1ML._AC_SL1500_.jpg",
    specs: {
      Weight: "22.5 lb",
      Material: "Clay with activated charcoal",
      Scent: "Unscented",
      "Dust Claim": "Low dust",
      "Best Fit": "Homes that want odor control without any added fragrance",
      "Odor Positioning": "Activated charcoal + Ammonia Block technology",
    },
    pros: [
      "Activated charcoal adsorbs odor molecules without adding any fragrance to the room",
      "Ammonia Block technology targets the specific smell that makes litter boxes worst",
      "Larger granule size reduces tracking compared to fine-grain clay litters",
    ],
    cons: [
      "Unscented means no backup masking on days when scooping gets delayed",
      "Charcoal granules can stain light-colored floors or paws if dust escapes",
    ],
    verdict:
      "This is the pick for homes that cannot tolerate fragrance but still need odor control that works harder than plain unscented clay. The charcoal approach targets odor molecules directly instead of layering a scent over them.",
    authorSlug: "multi-cat-home-desk",
    affiliateLinks: [
      {
        retailer: "Amazon",
        url: buildAmazonLink("B07ZK3DZB3"),
        tag: "betterpetpicks-20",
        priority: 1,
      },
    ],
    lastUpdated: "2026-04-15",
    updateNotes: "Initial product data for odor control litter roundup.",
    status: "active",
  },
  {
    id: "prettylitter-health-monitoring",
    slug: "prettylitter-health-monitoring",
    asin: "B0B5MBDFCL",
    name: "PrettyLitter Health Monitoring Cat Litter",
    brand: "PrettyLitter",
    model: "Health Monitoring",
    category: "cat-litter",
    subcategory: "crystal-silica",
    bestFor: ["Best crystal for odor", "Health monitoring", "Low-maintenance"],
    price: 29.99,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-15",
    priceSource: "amazon",
    rating: 4.1,
    reviewCount: 5000,
    ratingLastChecked: "2026-04-15",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/71Bg0nQSTRL._AC_SL1500_.jpg",
        alt: "PrettyLitter health monitoring cat litter 8 pound bag",
      },
    ],
    thumbnailUrl: "https://m.media-amazon.com/images/I/71Bg0nQSTRL._AC_SL1500_.jpg",
    specs: {
      Weight: "8 lb",
      Material: "Silica gel crystals",
      Scent: "Unscented",
      "Dust Claim": "Virtually dust-free",
      "Best Fit": "Owners who want odor control plus early health alerts",
      "Odor Positioning": "Silica crystal dehydration traps odor by absorbing moisture completely",
    },
    pros: [
      "Silica crystals dehydrate waste on contact, which eliminates odor at the source",
      "Color-changing crystals flag potential urinary issues before symptoms appear",
      "No scooping clumps — just stir and replace monthly, reducing daily maintenance",
    ],
    cons: [
      "At $30 for 8 pounds, the cost per pound is the highest on this page by far",
      "Crystal texture is unfamiliar and some cats refuse to use it",
    ],
    verdict:
      "PrettyLitter uses a fundamentally different approach — dehydration instead of clumping — which eliminates the moisture that causes most odor. The health monitoring is a genuine bonus. The price and texture change are real tradeoffs.",
    authorSlug: "multi-cat-home-desk",
    affiliateLinks: [
      {
        retailer: "Amazon",
        url: buildAmazonLink("B0B5MBDFCL"),
        tag: "betterpetpicks-20",
        priority: 1,
      },
    ],
    lastUpdated: "2026-04-15",
    updateNotes: "Initial product data for odor control litter roundup.",
    status: "active",
  },

  // ── Cat Litter: Dust-Free Picks ──────────────────────────────────
  {
    id: "sustainably-yours-large-grain",
    slug: "sustainably-yours-large-grain",
    asin: "B09ZFWFPJB",
    name: "Sustainably Yours Natural Cat Litter, Large-Grain Formula",
    brand: "Sustainably Yours",
    model: "Large-Grain Formula",
    category: "cat-litter",
    subcategory: "natural-litter",
    bestFor: ["Best overall dust-free", "Clumping alternative", "Eco-conscious homes"],
    price: 21.99,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-16",
    priceSource: "amazon",
    rating: 4.0,
    reviewCount: 3091,
    ratingLastChecked: "2026-04-16",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/810nPrrygOL._AC_SL1500_.jpg",
        alt: "Sustainably Yours Large-Grain cat litter 10 pound bag",
      },
      {
        url: "https://m.media-amazon.com/images/I/41iBgCxCBLL._AC_SL1500_.jpg",
        alt: "Sustainably Yours Large-Grain litter corn and cassava ingredients",
      },
      {
        url: "https://m.media-amazon.com/images/I/51j0USEGQiL._AC_SL1500_.jpg",
        alt: "Sustainably Yours Large-Grain litter clumping demonstration",
      },
    ],
    thumbnailUrl: "https://m.media-amazon.com/images/I/810nPrrygOL._AC_SL1500_.jpg",
    specs: {
      Weight: "10 lb",
      Material: "Corn/Cassava",
      Scent: "Unscented",
      "Dust Claim": "Virtually No Dust",
      "Best Fit": "Dust-sensitive homes that want clumping without chemicals",
      "Odor Positioning": "Exceptional Clumping & Odor Control",
    },
    pros: [
      "Multiple independent sources confirm near-zero airborne dust from the large-grain formula",
      "Clumps hard like clay without the clay dust problem",
      "Corn and cassava blend is biodegradable, flushable, and unscented",
    ],
    cons: [
      "Tracks more than clay because the lightweight particles stick to paws",
      "At $2.20 per pound the cost adds up fast in multi-cat homes",
    ],
    verdict:
      "The strongest consensus dust-free pick that also clumps. You trade tracking for dust, and for most respiratory-sensitive homes that is a better deal.",
    authorSlug: "cat-care-essentials-desk",
    affiliateLinks: [
      {
        retailer: "Amazon",
        url: buildAmazonLink("B09ZFWFPJB"),
        tag: "betterpetpicks-20",
        priority: 1,
      },
    ],
    lastUpdated: "2026-04-16",
    updateNotes: "Initial product data from Amazon scrape for dust-free cat litter roundup.",
    status: "active",
  },
  {
    id: "arm-hammer-cloud-control-platinum",
    slug: "arm-hammer-cloud-control-platinum",
    asin: "B09P3L3BJQ",
    name: "ARM & Hammer Cloud Control Platinum Multi-Cat Litter",
    brand: "ARM & Hammer",
    model: "Cloud Control Platinum",
    category: "cat-litter",
    subcategory: "clumping-clay",
    bestFor: ["Best low-dust clay", "Multi-cat homes", "Familiar clay texture"],
    price: 17.99,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-16",
    priceSource: "amazon",
    rating: 4.5,
    reviewCount: 4038,
    ratingLastChecked: "2026-04-16",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/81h7u1WWLHL._AC_SL1500_.jpg",
        alt: "ARM & Hammer Cloud Control Platinum cat litter 18 pound box",
      },
      {
        url: "https://m.media-amazon.com/images/I/41Hrn1WPd0L._AC_SL1500_.jpg",
        alt: "ARM & Hammer Cloud Control Platinum hypoallergenic dust-free callout",
      },
      {
        url: "https://m.media-amazon.com/images/I/41s6v5J13JL._AC_SL1500_.jpg",
        alt: "ARM & Hammer Cloud Control Platinum 14-day odor control detail",
      },
    ],
    thumbnailUrl: "https://m.media-amazon.com/images/I/81h7u1WWLHL._AC_SL1500_.jpg",
    specs: {
      Weight: "18 lb",
      Material: "Clay",
      Scent: "Light Scent",
      "Dust Claim": "Hypoallergenic and Dust-Free",
      "Best Fit": "Multi-cat homes that want less dust without leaving clay",
      "Odor Positioning": "14-Day Odor Control",
    },
    pros: [
      "Dander Shield Technology makes this the lowest-dust clay option in the category",
      "Familiar clay texture means most cats accept it without a transition period",
      "Strong odor control rated at 14 days keeps multi-cat homes livable",
    ],
    cons: [
      "Recent reformulation reports raise quality-control concerns for newer batches",
      "Light scent is noticeable and will not suit fragrance-free households",
    ],
    verdict:
      "The best clay answer for homes that want less dust but are not ready to leave clay entirely. Check recent reviews before buying to confirm your batch matches the original formula.",
    authorSlug: "cat-care-essentials-desk",
    affiliateLinks: [
      {
        retailer: "Amazon",
        url: buildAmazonLink("B09P3L3BJQ"),
        tag: "betterpetpicks-20",
        priority: 1,
      },
    ],
    lastUpdated: "2026-04-16",
    updateNotes: "Initial product data from Amazon scrape for dust-free cat litter roundup.",
    status: "active",
  },
  {
    id: "smartcat-all-natural-grass",
    slug: "smartcat-all-natural-grass",
    asin: "B00P0H6836",
    name: "SmartCat All Natural Clumping Cat Litter",
    brand: "SmartCat",
    model: "All Natural Grass Seed",
    category: "cat-litter",
    subcategory: "natural-litter",
    bestFor: ["Best alternative material", "Chemical-free homes", "Lightweight preference"],
    price: 29.99,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-16",
    priceSource: "amazon",
    rating: 4.3,
    reviewCount: 5299,
    ratingLastChecked: "2026-04-16",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/71Q7hgFuEcL._AC_SL1500_.jpg",
        alt: "SmartCat All Natural grass seed cat litter 20 pound bag",
      },
      {
        url: "https://m.media-amazon.com/images/I/514NiwTjgSL._AC_SL1500_.jpg",
        alt: "SmartCat All Natural litter chemical-free and dust-free claims",
      },
      {
        url: "https://m.media-amazon.com/images/I/61BUfOvxL7L._AC_SL1500_.jpg",
        alt: "SmartCat All Natural litter lightweight grass seed texture",
      },
    ],
    thumbnailUrl: "https://m.media-amazon.com/images/I/71Q7hgFuEcL._AC_SL1500_.jpg",
    specs: {
      Weight: "20 lb",
      Material: "Grass Seed",
      Scent: "Unscented",
      "Dust Claim": "99% Dust Free",
      "Best Fit": "Chemical-free households that want clumping and low dust",
      "Odor Positioning": "Natural odor control via grass-seed absorption",
    },
    pros: [
      "Grass seed material confirmed very low dust by hairless-cat communities and independent reviewers",
      "Clumps well enough for daily scooping without the weight of clay",
      "Chemical-free and biodegradable with no silica or clay components",
    ],
    cons: [
      "Lightweight particles track out of the box onto surrounding floors",
      "At $1.50 per pound the cost sits between clay and premium alternatives",
    ],
    verdict:
      "The off-the-radar pick for homes that want genuinely low dust from a material that is not clay, corn, or tofu. Hairless-cat owners are the strongest advocates.",
    authorSlug: "cat-care-essentials-desk",
    affiliateLinks: [
      {
        retailer: "Amazon",
        url: buildAmazonLink("B00P0H6836"),
        tag: "betterpetpicks-20",
        priority: 1,
      },
    ],
    lastUpdated: "2026-04-16",
    updateNotes: "Initial product data from Amazon scrape for dust-free cat litter roundup.",
    status: "active",
  },
  {
    id: "feline-pine-original",
    slug: "feline-pine-original",
    asin: "B004U8YV9E",
    name: "Feline Pine Original Non-Clumping Cat Litter",
    brand: "Feline Pine",
    model: "Original",
    category: "cat-litter",
    subcategory: "natural-litter",
    bestFor: ["Best budget dust-free", "Non-clumping preference", "Single-cat homes"],
    price: 16.40,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-16",
    priceSource: "amazon",
    rating: 4.3,
    reviewCount: 153,
    ratingLastChecked: "2026-04-16",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/81iDi5OVYWL._AC_SL1500_.jpg",
        alt: "Feline Pine Original cat litter 7 pound bag",
      },
      {
        url: "https://m.media-amazon.com/images/I/51JwUk9hQeL._AC_SL1500_.jpg",
        alt: "Feline Pine Original pine pellet litter texture closeup",
      },
      {
        url: "https://m.media-amazon.com/images/I/51ecDUTkthL._AC_SL1500_.jpg",
        alt: "Feline Pine Original natural odor control and dust-free callout",
      },
    ],
    thumbnailUrl: "https://m.media-amazon.com/images/I/81iDi5OVYWL._AC_SL1500_.jpg",
    specs: {
      Weight: "7 lb",
      Material: "Pine Pellets",
      Scent: "Natural Pine",
      "Dust Claim": "Highly Absorbent, Dust Free",
      "Best Fit": "Budget buyers willing to learn a different cleanup routine",
      "Odor Positioning": "Pine naturally neutralizes ammonia odor",
    },
    pros: [
      "Pine pellets produce virtually zero airborne dust at the lowest cost on this page",
      "Natural pine scent neutralizes ammonia without added chemicals or fragrance",
      "At about $0.54 per pound in larger bags it costs a fraction of every other pick here",
    ],
    cons: [
      "Non-clumping means a different scooping routine that many cat owners dislike",
      "Some cats reject the pellet texture entirely and refuse to use the box",
      "Wet pellets break into sawdust which can feel messy in its own way",
    ],
    verdict:
      "The cheapest genuinely dust-free option by a wide margin. The tradeoff is learning a new cleanup routine and hoping your cat accepts pellets.",
    authorSlug: "cat-care-essentials-desk",
    affiliateLinks: [
      {
        retailer: "Amazon",
        url: buildAmazonLink("B004U8YV9E"),
        tag: "betterpetpicks-20",
        priority: 1,
      },
    ],
    lastUpdated: "2026-04-16",
    updateNotes: "Initial product data from Amazon scrape for dust-free cat litter roundup.",
    status: "active",
  },
  {
    id: "tuft-paw-really-great-charcoal",
    slug: "tuft-paw-really-great-charcoal",
    asin: "B0C4Q86PGJ",
    name: "Tuft & Paw Really Great Cat Litter (Charcoal)",
    brand: "Tuft & Paw",
    model: "Really Great Cat Litter Charcoal",
    category: "cat-litter",
    subcategory: "natural-litter",
    bestFor: ["Best for severe allergies", "Ultra-low dust", "Flushable"],
    price: 57.98,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-16",
    priceSource: "amazon",
    rating: 4.2,
    reviewCount: 950,
    ratingLastChecked: "2026-04-16",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/71NjcQTOQwL._AC_SL1500_.jpg",
        alt: "Tuft and Paw Really Great Cat Litter charcoal formula two pack",
      },
      {
        url: "https://m.media-amazon.com/images/I/51RCoN9fSML._AC_SL1500_.jpg",
        alt: "Tuft and Paw Really Great tofu pellet texture and size",
      },
      {
        url: "https://m.media-amazon.com/images/I/516b-9c4nwL._AC_SL1500_.jpg",
        alt: "Tuft and Paw Really Great Cat Litter dust-free and flushable claims",
      },
    ],
    thumbnailUrl: "https://m.media-amazon.com/images/I/71NjcQTOQwL._AC_SL1500_.jpg",
    specs: {
      Weight: "18.5 lb (2x 9.25 lb bags)",
      Material: "Tofu (Soybean Fiber)",
      Scent: "Unscented",
      "Dust Claim": "Dust-Free",
      "Best Fit": "Households with diagnosed asthma or severe allergies",
      "Odor Positioning": "Charcoal-infused odor control",
    },
    pros: [
      "Tofu pellet design produces virtually zero airborne silica or clay dust",
      "Low tracking, flushable, and unscented with charcoal for odor control",
      "Confirmed near-zero dust by independent air quality testing",
    ],
    cons: [
      "At $3.13 per pound it costs roughly 6x what standard clay litter costs",
      "Pellet texture is unfamiliar and some cats need a transition period",
    ],
    verdict:
      "The pick when dust is a medical issue and cost is secondary. Tofu pellets are the most reliably dust-free clumping material available.",
    authorSlug: "cat-care-essentials-desk",
    affiliateLinks: [
      {
        retailer: "Amazon",
        url: buildAmazonLink("B0C4Q86PGJ"),
        tag: "betterpetpicks-20",
        priority: 1,
      },
    ],
    lastUpdated: "2026-04-16",
    updateNotes: "Initial product data from Amazon scrape for dust-free cat litter roundup.",
    status: "active",
  },
  {
    id: "naturally-fresh-quick-clumping-walnut",
    slug: "naturally-fresh-quick-clumping-walnut",
    asin: "B0FYRPJND2",
    name: "Naturally Fresh Quick-Clumping Walnut Shell Cat Litter",
    brand: "Naturally Fresh",
    model: "Quick-Clumping Unscented",
    category: "cat-litter",
    subcategory: "natural-litter",
    bestFor: ["Best natural clumping", "Eco-conscious homes", "Lower dust than clay"],
    price: 35.76,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-16",
    priceSource: "amazon",
    rating: 4.8,
    reviewCount: 76,
    ratingLastChecked: "2026-04-16",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/61ztNbKanfL._AC_SL1500_.jpg",
        alt: "Naturally Fresh walnut shell cat litter 30 pound bag",
      },
      {
        url: "https://m.media-amazon.com/images/I/51tcZ-NFeAL._AC_SL1500_.jpg",
        alt: "Naturally Fresh Quick-Clumping 30 lb bag walnut-based formula and scooping ease",
      },
      {
        url: "https://m.media-amazon.com/images/I/41hFKACoN+L._AC_SL1500_.jpg",
        alt: "Naturally Fresh Quick-Clumping upcycled walnut shells low-dust and eco claims",
      },
    ],
    thumbnailUrl: "https://m.media-amazon.com/images/I/61ztNbKanfL._AC_SL1500_.jpg",
    specs: {
      Weight: "30 lb",
      Material: "Walnut Shell",
      Scent: "Unscented",
      "Dust Claim": "Low Dust (upcycled walnut shell)",
      "Best Fit": "Natural-leaning homes that still want clay-like clumping",
      "Odor Positioning": "Walnut shell naturally absorbs and neutralizes odors",
    },
    pros: [
      "Walnut shell absorbs 3x its weight in moisture which traps odor physically",
      "Clumps like clay without the silica dust that makes clay problematic",
      "Unscented and upcycled from agricultural waste",
    ],
    cons: [
      "Dark walnut color makes it harder to visually check for clumps",
      "Lower review count means less long-term confidence than established picks",
    ],
    verdict:
      "The natural-material middle ground between cheap clay with dust and expensive tofu with none. Walnut clumps well enough to feel familiar while producing less airborne particulate.",
    authorSlug: "cat-care-essentials-desk",
    affiliateLinks: [
      {
        retailer: "Amazon",
        url: buildAmazonLink("B0FYRPJND2"),
        tag: "betterpetpicks-20",
        priority: 1,
      },
    ],
    lastUpdated: "2026-04-16",
    updateNotes: "Initial product data from Amazon scrape for dust-free cat litter roundup.",
    status: "active",
  },
  {
    id: "tidy-cats-breeze-system",
    slug: "tidy-cats-breeze-system",
    asin: "B001411SK0",
    name: "Purina Tidy Cats BREEZE System Starter Kit",
    brand: "Tidy Cats (Purina)",
    model: "BREEZE System",
    category: "cat-litter",
    subcategory: "pellet-system",
    bestFor: ["Best zero-dust system", "Severe dust sensitivity", "Minimal daily maintenance"],
    price: 42.45,
    priceCurrency: "USD",
    priceLastChecked: "2026-04-16",
    priceSource: "amazon",
    rating: 4.5,
    reviewCount: 18914,
    ratingLastChecked: "2026-04-16",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/71uGaSffDWL._AC_SL1500_.jpg",
        alt: "Purina Tidy Cats BREEZE system starter kit with pellets and pads",
      },
      {
        url: "https://m.media-amazon.com/images/I/51lg4wjpiYL._AC_SL1500_.jpg",
        alt: "Tidy Cats BREEZE litter box open showing pellet tray and pad drawer",
      },
      {
        url: "https://m.media-amazon.com/images/I/51SXceIx5pL._AC_SL1500_.jpg",
        alt: "Tidy Cats BREEZE anti-tracking pellets compared to traditional clay",
      },
    ],
    thumbnailUrl: "https://m.media-amazon.com/images/I/71uGaSffDWL._AC_SL1500_.jpg",
    specs: {
      Weight: "9.4 lb (system kit)",
      Material: "Anti-Tracking Dehydrating Pellets",
      Scent: "Unscented",
      "Dust Claim": "99.9% Dust-Free",
      "Best Fit": "Homes that have failed with every dust-free litter and need a different system",
      "Odor Positioning": "Pellet + pad system separates liquid from solid for odor isolation",
    },
    pros: [
      "Large pellets produce zero fine dust which is confirmed across asthma communities",
      "Pellet-and-pad design separates liquid waste and eliminates scooping of urine clumps",
      "Nearly 19,000 reviews and 4.5 stars make it the most proven system-based approach",
    ],
    cons: [
      "Requires the dedicated BREEZE litter box plus ongoing pellet and pad refill purchases",
      "Some cats refuse to use the grate-style floor and need a transition period",
      "Higher ongoing cost than traditional litter once you factor in pad replacements",
    ],
    verdict:
      "The escalation path when every dust-free litter has still left dust in the air. It is a different system, not just a different litter. Commit to the box, the pellets, and the pads, and dust stops being a problem.",
    authorSlug: "cat-care-essentials-desk",
    affiliateLinks: [
      {
        retailer: "Amazon",
        url: buildAmazonLink("B001411SK0"),
        tag: "betterpetpicks-20",
        priority: 1,
      },
    ],
    lastUpdated: "2026-04-16",
    updateNotes: "Initial product data from Amazon scrape for dust-free cat litter roundup.",
    status: "active",
  },
];

