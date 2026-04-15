export interface EditorialDesk {
  slug: string;
  name: string;
  title: string;
  avatar: string;
  bio: string;
  audience: string;
  expertise: string[];
  methodology: string;
  dataSources: string[];
}

/** Backward compatibility */
export type Author = EditorialDesk;

export const editorialDesks: EditorialDesk[] = [
  {
    slug: "cat-care-essentials-desk",
    name: "Cat Care Essentials Desk",
    title: "Low-mess everyday picks",
    avatar: "/images/desks/everyday-desk.svg",
    bio: "The Cat Care Essentials Desk serves readers who want cleaner routines, simple defaults, and products that solve obvious problems without becoming a project.",
    audience: "First-time cat owners and practical shoppers who want low-mess, low-friction answers fast.",
    expertise: ["best overall picks", "ease-of-use tradeoffs", "cleanup-friendly recommendations"],
    methodology: "Weights ease of use, cleanup friction, reliability, price, and owner-reported annoyances more heavily than feature depth.",
    dataSources: [
      "Long-term owner reviews",
      "Retailer review patterns",
      "Expert roundup consensus",
      "Verified specs and retailer data",
    ],
  },
  {
    slug: "multi-cat-home-desk",
    name: "Multi-Cat Home Desk",
    title: "Odor and value tradeoffs",
    avatar: "/images/desks/enthusiast-desk.svg",
    bio: "The Multi-Cat Home Desk focuses on the products that hold up when litter boxes multiply, odors stack, and monthly cost starts to matter more than marketing.",
    audience: "Households managing multiple cats, recurring cleanup, and the balance between odor control and total cost over time.",
    expertise: ["value comparisons", "odor-control products", "multi-box maintenance"],
    methodology: "Looks for the products that scale well, control smell consistently, and stay realistic on refill cost and cleanup effort.",
    dataSources: [
      "Specialist communities",
      "Long-term owner reviews",
      "Hands-on reviewer consensus",
      "Brand documentation",
    ],
  },
  {
    slug: "upgrade-automation-desk",
    name: "Upgrade & Automation Desk",
    title: "Premium convenience analysis",
    avatar: "/images/desks/lab-desk.svg",
    bio: "The Upgrade & Automation Desk covers self-cleaning boxes, premium fountains, and cleanup tools for buyers willing to spend more to remove routine friction.",
    audience: "Convenience-oriented shoppers who care about automation, upkeep burden, and whether premium gear actually saves time.",
    expertise: ["premium comparisons", "automation tradeoffs", "maintenance burden analysis"],
    methodology: "Cross-references long-term ownership reports, failure-mode complaints, cleaning burden, and whether the convenience payoff justifies the price.",
    dataSources: [
      "Hands-on reviewer consensus",
      "Community troubleshooting threads",
      "Long-term owner reviews",
      "Manufacturer specs",
    ],
  },
];

/** Backward compatibility */
export const authors = editorialDesks;

export function getAuthor(slug: string): EditorialDesk | undefined {
  return editorialDesks.find((desk) => desk.slug === slug);
}

export function getPublicAuthor(slug: string) {
  const desk = getAuthor(slug);
  if (!desk) return null;

  return {
    slug: desk.slug,
    name: desk.name,
    title: desk.title,
    avatar: desk.avatar,
    bio: desk.bio,
    expertise: desk.expertise,
  };
}
