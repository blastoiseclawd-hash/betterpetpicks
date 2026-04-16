export const siteConfig = {
  name: "BetterPetPicks",
  domain: "betterpetpicks.com",
  url: "https://betterpetpicks.com",
  tagline: "Practical pet-home buying guides for cleaner, calmer homes.",
  description: "BetterPetPicks publishes practical, independent buying guides for cat litter, cat gear, pet hair cleanup, dog beds, and the products that help pet owners keep real homes running smoothly.",

  colors: {
    primary: "#54785A",
    accent: "#B9773B",
    dark: "#182028",
    light: "#F5F1E8",
    cta: "#2F7B51",
  },

  defaultTitle: "BetterPetPicks | Practical Pet-Home Buying Guides",
  titleTemplate: `%s | BetterPetPicks`,
  ogImage: "https://betterpetpicks.com/opengraph-image",

  brand: {
    shortName: "BPP",
    faviconSvg: "/favicon.svg",
    logoIconSvg: "/images/logo-icon.svg",
  },

  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "",
  },

  author: {
    name: "BetterPetPicks Editorial Desks",
    bio: "BetterPetPicks uses transparent editorial desks to cover low-mess basics, multi-cat tradeoffs, pet hair cleanup, dog comfort, and convenience-driven upgrades for real pet-owning homes.",
    methodologyPage: "/how-we-review",
  },

  affiliatePrograms: {
    amazon: {
      tag: "betterpetpicks-20",
      disclaimer: "As an Amazon Associate, we earn from qualifying purchases.",
    },
  },

  categories: [
    {
      name: "Cat Litter & Litter Boxes",
      slug: "cat-litter",
      description: "Buying guides for clumping, low-dust, odor-focused, and automatic litter choices plus the boxes themselves.",
    },
    {
      name: "Cat Water Fountains",
      slug: "cat-water-fountains",
      description: "Guides for fountain reliability, filter upkeep, noise, cleaning friction, and material tradeoffs.",
    },
    {
      name: "Cat Gear",
      slug: "cat-gear",
      description: "Cat trees, scratching posts, carriers, harnesses, beds, and grooming tools for real homes.",
    },
    {
      name: "Pet Hair Cleanup",
      slug: "pet-hair-cleanup",
      description: "Vacuums, lint rollers, and pet hair removers for furniture, clothes, and every surface pets touch.",
    },
    {
      name: "Dog Beds & Comfort",
      slug: "dog-beds",
      description: "Cooling, chew-proof, orthopedic, and outdoor dog beds plus car seat covers and travel comfort.",
    },
  ],

  ftcDisclosure:
    "When you buy through our links, we may earn a commission at no extra cost to you. That never changes what we recommend.",

  nav: {
    main: [
      { label: "Best Cat Litter", href: "/best-cat-litter" },
      { label: "Best Cat Water Fountain", href: "/best-cat-water-fountain" },
      { label: "About", href: "/about" },
      { label: "How We Review", href: "/how-we-review" },
    ],
    footer: [
      { label: "Best Cat Litter", href: "/best-cat-litter" },
      { label: "Best Cat Water Fountain", href: "/best-cat-water-fountain" },
      { label: "Best Litter for Odor", href: "/best-cat-litter-for-odor-control" },
      { label: "About", href: "/about" },
      { label: "How We Review", href: "/how-we-review" },
      { label: "Affiliate Disclosure", href: "/disclosure" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },

  featuredCoverage: [
    {
      title: "Best Cat Litter",
      href: "/best-cat-litter",
      eyebrow: "Flagship guide",
      description: "Six picks compared on clumping, odor control, dust, and real cleanup tradeoffs.",
    },
    {
      title: "Best Cat Water Fountains",
      href: "/best-cat-water-fountain",
      eyebrow: "Hydration cluster",
      description: "Six fountains compared on material, noise, cleaning friction, and filter cost.",
    },
    {
      title: "Best Litter for Odor Control",
      href: "/best-cat-litter-for-odor-control",
      eyebrow: "Odor deep dive",
      description: "Five odor mechanisms compared: baking soda, probiotics, charcoal, walnut shell, and silica crystals.",
    },
    {
      title: "How We Review",
      href: "/how-we-review",
      eyebrow: "Editorial standards",
      description: "See how we evaluate mess, odor control, cleanup friction, and long-term ownership tradeoffs.",
    },
  ],

  trustPillars: [
    {
      title: "Mess-aware testing",
      description: "The right pet product has to work in a real home, not just on a feature chart.",
    },
    {
      title: "Tradeoffs first",
      description: "We call out tracking, refill cost, cleaning hassle, noise, and the other annoyances shoppers actually care about.",
    },
    {
      title: "Practical pet-home focus",
      description: "We cover the products that reduce mess, odor, cleanup burden, and daily friction for cat and dog owners.",
    },
  ],

  comingSoonTopics: [
    "Cat water fountain comparisons",
    "Cat tree and carrier guides",
    "Pet hair vacuum roundups",
    "Dog bed buying guides",
  ],
} as const;

export type Category = (typeof siteConfig.categories)[number];
