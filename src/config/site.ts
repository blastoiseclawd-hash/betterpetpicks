export const siteConfig = {
  name: "BetterPetPicks",
  domain: "betterpetpicks.com",
  url: "https://betterpetpicks.com",
  tagline: "Practical cat-care buying guides for cleaner, calmer homes.",
  description: "BetterPetPicks publishes practical, independent buying guides for cat litter, odor control, water fountains, and the products that help cat owners keep real homes running smoothly.",

  colors: {
    primary: "#54785A",
    accent: "#B9773B",
    dark: "#182028",
    light: "#F5F1E8",
    cta: "#2F7B51",
  },

  defaultTitle: "BetterPetPicks | Practical Cat-Care Buying Guides",
  titleTemplate: `%s | BetterPetPicks`,
  ogImage: "https://betterpetpicks.com/opengraph-image",

  author: {
    name: "BetterPetPicks Editorial Desks",
    bio: "BetterPetPicks uses transparent editorial desks to cover low-mess basics, multi-cat tradeoffs, and convenience-driven upgrades for real cat-owning homes.",
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
      name: "Cat Litter",
      slug: "cat-litter",
      description: "Buying guides and comparisons for clumping, low-dust, odor-focused, and value-minded litter choices.",
    },
    {
      name: "Water Fountains",
      slug: "water-fountains",
      description: "Guides for fountain reliability, filter upkeep, noise, cleaning friction, and cat drinking habits.",
    },
    {
      name: "Odor Control",
      slug: "odor-control",
      description: "Products and strategies that help keep litter areas calmer, cleaner, and less punishing to live with.",
    },
    {
      name: "Litter Area Cleanup",
      slug: "litter-area-cleanup",
      description: "Mats, scoops, liners, and cleanup tools that reduce scatter, tracking, and box-maintenance hassle.",
    },
    {
      name: "Pet Hair Cleanup",
      slug: "pet-hair-cleanup",
      description: "Cleanup tools for fur, lint, and everyday home maintenance around cats and cat-heavy spaces.",
    },
  ],

  ftcDisclosure:
    "When you buy through our links, we may earn a commission at no extra cost to you. That never changes what we recommend.",

  nav: {
    main: [
      { label: "Best Cat Litter", href: "/best-cat-litter" },
      { label: "About", href: "/about" },
      { label: "How We Review", href: "/how-we-review" },
      { label: "Disclosure", href: "/disclosure" },
    ],
    footer: [
      { label: "Best Cat Litter", href: "/best-cat-litter" },
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
      eyebrow: "First live guide",
      description: "See the first full BetterPetPicks roundup, built around clumping, odor, dust, and real cleanup tradeoffs.",
    },
    {
      title: "How We Review",
      href: "/how-we-review",
      eyebrow: "Editorial standards",
      description: "See how we evaluate litter mess, odor control, cleanup friction, and long-term ownership tradeoffs.",
    },
    {
      title: "About BetterPetPicks",
      href: "/about",
      eyebrow: "About the publication",
      description: "Learn what BetterPetPicks covers, what stays out of scope, and how the desk model keeps recommendations clear.",
    },
    {
      title: "Affiliate Disclosure",
      href: "/disclosure",
      eyebrow: "Transparency",
      description: "Read how commissions work, where they matter, and why they cannot outrank customer fit.",
    },
  ],

  trustPillars: [
    {
      title: "Mess-aware testing",
      description: "The right cat-care product has to work in a real home, not just on a feature chart.",
    },
    {
      title: "Tradeoffs first",
      description: "We call out tracking, refill cost, cleaning hassle, noise, and the other annoyances shoppers actually care about.",
    },
    {
      title: "Tight category focus",
      description: "Wave one stays inside cat-home utility products so the site can build trust before expanding any wider.",
    },
  ],

  comingSoonTopics: [
    "Water fountain comparisons",
    "Automatic feeder coverage",
    "Odor-control roundups",
    "Pet-hair cleanup guides",
  ],
} as const;

export type Category = (typeof siteConfig.categories)[number];
