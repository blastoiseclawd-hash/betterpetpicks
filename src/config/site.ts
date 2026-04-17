export const siteConfig = {
  name: "BetterPetPicks",
  domain: "betterpetpicks.com",
  url: "https://betterpetpicks.com",
  tagline: "Practical pet-home buying guides for cleaner, calmer homes.",
  description: "BetterPetPicks publishes practical, independent buying guides for cat litter, cat gear, pet hair cleanup, dog beds, and the products that help pet owners keep real homes running smoothly.",

  colors: {
    primary: "#6B4C3B",
    accent: "#D4883A",
    dark: "#1C1210",
    light: "#FBF6F0",
    cta: "#2D7E5E",
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
      {
        label: "Cat Litter",
        href: "/best-cat-litter",
        children: [
          { label: "Best Cat Litter", href: "/best-cat-litter" },
          { label: "Best for Odor Control", href: "/best-cat-litter-for-odor-control" },
          { label: "Best for Multiple Cats", href: "/best-cat-litter-for-multiple-cats" },
          { label: "Best Dust-Free", href: "/best-dust-free-cat-litter" },
          { label: "Best Non-Tracking", href: "/best-non-tracking-cat-litter" },
          { label: "Best Litter Mat", href: "/best-cat-litter-mat" },
        ],
      },
      { label: "Cat Water Fountain", href: "/best-cat-water-fountain" },
      {
        label: "Pet Hair",
        href: "/best-vacuum-for-pet-hair",
        children: [
          { label: "Best Vacuum for Pet Hair", href: "/best-vacuum-for-pet-hair" },
          { label: "Best Cordless Vacuum", href: "/best-cordless-vacuum-for-pet-hair" },
          { label: "Best Pet Hair Remover", href: "/best-pet-hair-remover" },
        ],
      },
      {
        label: "Cat Gear",
        href: "/best-cat-tree",
        children: [
          { label: "Best Cat Tree", href: "/best-cat-tree" },
          { label: "Best for Large Cats", href: "/best-cat-tree-for-large-cats" },
          { label: "Best Cat Harness", href: "/best-cat-harness" },
          { label: "Best Cat Carrier", href: "/best-cat-carrier" },
        ],
      },
      {
        label: "Dog Beds",
        href: "/best-cooling-dog-bed",
        children: [
          { label: "Best Cooling Dog Bed", href: "/best-cooling-dog-bed" },
          { label: "Best Chew-Proof Dog Bed", href: "/best-chew-proof-dog-bed" },
          { label: "Best Indestructible Dog Bed", href: "/best-indestructible-dog-bed" },
        ],
      },
      {
        label: "Guides",
        href: "/how-to-get-rid-of-cat-pee-smell",
        children: [
          { label: "Cat Pee Smell Removal", href: "/how-to-get-rid-of-cat-pee-smell" },
          { label: "How Much Cat Litter to Use", href: "/how-much-cat-litter-to-use" },
          { label: "How Often to Change Litter", href: "/how-often-to-change-cat-litter" },
          { label: "Clean Cat Pee From Carpet", href: "/how-to-clean-cat-pee-from-carpet" },
          { label: "Remove Pet Hair From Couch", href: "/how-to-remove-pet-hair-from-couch" },
          { label: "Remove Pet Hair From Clothes", href: "/how-to-remove-pet-hair-from-clothes" },
          { label: "Scratching Post Training", href: "/how-to-get-cat-to-use-scratching-post" },
        ],
      },
      { label: "About", href: "/about" },
      { label: "How We Review", href: "/how-we-review" },
    ],
    footer: [
      { label: "Best Cat Litter", href: "/best-cat-litter" },
      { label: "Best Cat Water Fountain", href: "/best-cat-water-fountain" },
      { label: "Best Vacuum for Pet Hair", href: "/best-vacuum-for-pet-hair" },
      { label: "Best Cat Tree", href: "/best-cat-tree" },
      { label: "Best Cat Harness", href: "/best-cat-harness" },
      { label: "Best Cat Carrier", href: "/best-cat-carrier" },
      { label: "Best Cooling Dog Bed", href: "/best-cooling-dog-bed" },
      { label: "Cat Pee Smell Guide", href: "/how-to-get-rid-of-cat-pee-smell" },
      { label: "About", href: "/about" },
      { label: "How We Review", href: "/how-we-review" },
      { label: "Affiliate Disclosure", href: "/disclosure" },
      { label: "AI & Editorial Transparency", href: "/ai-disclosure" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },

  featuredCoverage: [
    {
      title: "Best Vacuums for Pet Hair",
      href: "/best-vacuum-for-pet-hair",
      eyebrow: "Pet hair cluster",
      description: "Five vacuums compared on suction, brush roll tangling, noise, and surface performance.",
    },
    {
      title: "Best Cat Litter",
      href: "/best-cat-litter",
      eyebrow: "Flagship guide",
      description: "Six picks compared on clumping, odor control, dust, and real cleanup tradeoffs.",
    },
    {
      title: "Best Cat Trees",
      href: "/best-cat-tree",
      eyebrow: "Cat gear cluster",
      description: "Five trees compared on stability, platform count, assembly, and real-home fit.",
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
    "Cat water fountain material comparisons",
    "Robot vacuum guides for pet hair",
    "Automatic cat feeder reviews",
    "Orthopedic dog bed deep dives",
  ],
} as const;

export type Category = (typeof siteConfig.categories)[number];
