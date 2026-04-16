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
  primaryAvatars: string[];
  secondaryAvatars: string[];
  ownedCoverage: string[];
  voiceGuide: {
    personality: string[];
    sentenceStyle: string;
    openingStyles: string[];
    neverDoes: string[];
    researchAnchors: string[];
    vocabularyPreferences: string[];
    vocabularyAvoids: string[];
    examplePhrases: string[];
    transitionPhrases: string[];
    analysisApproach: string;
    moodVariations: {
      excited: string;
      disappointed: string;
      neutral: string;
      skeptical: string;
      budget: string;
      premium: string;
    };
    topicVoice: {
      comparison: string;
      singleReview: string;
      buyingGuide: string;
      budgetRoundup: string;
    };
    petPeeves: string[];
    benchmarkProducts: string[];
  };
}

export type Author = EditorialDesk;

export const editorialDesks: EditorialDesk[] = [
  {
    slug: "cat-care-essentials-desk",
    name: "Cat Care Essentials Desk",
    title: "Low-mess everyday picks",
    avatar: "/images/desks/everyday-desk.svg",
    bio: "The Cat Care Essentials Desk covers the obvious, practical answers for cleaner routines, easier setup, and lower daily friction. It serves the cat-first launch now, but the editorial logic is built to expand later into other pet-home utility categories that reward simple, cleanup-first advice.",
    audience: "Practical Starter and Clean-Space Manager readers, expressed through the cat-first launch as low-mess households, first-time owners, and people who want the shortest path to a cleaner routine.",
    expertise: [
      "best overall picks",
      "low-mess defaults",
      "low-tracking and low-dust products",
      "easy-clean fountains",
      "beginner-friendly setup advice",
    ],
    methodology: "Weights setup friction, daily cleanup burden, visible mess, odor creep, dust, tracking, reliability, and price before feature depth. A product rises here when it solves the obvious real-home problem quickly and predictably.",
    dataSources: [
      "Long-term owner reviews",
      "Retailer review patterns",
      "Reddit and community setup threads",
      "Hands-on reviewer consensus",
      "Verified material and care specs",
    ],
    primaryAvatars: ["Practical Starter", "Clean-Space Manager"],
    secondaryAvatars: ["Household Operator"],
    ownedCoverage: [
      "Core litter guides",
      "Best overall and beginner picks",
      "Low-dust and low-tracking pages",
      "Easy-to-clean fountain pages",
      "Straightforward cleanup tools",
    ],
    voiceGuide: {
      personality: [
        "Direct and uncluttered",
        "Calm under buyer confusion",
        "Practical rather than precious",
        "Reassuring without sounding soft",
        "Helpful to new owners without talking down to them",
        "Quietly skeptical of products that create more chores than they remove",
      ],
      sentenceStyle: "Short to medium sentences. Opens with the answer early. Uses concrete household language instead of feature jargon. Paragraphs should move quickly and rarely need more than three sentences.",
      openingStyles: [
        "Lead with the clean default: 'If you want the simplest low-mess answer, start here.'",
        "Lead with the reader problem: 'If the litter area already feels harder to manage than it should, this is the fix to start with.'",
        "Lead with setup regret prevention: 'Most people do not need the fanciest option. They need the one that makes day three easier, not just day one.'",
        "Lead with a friction callout: 'The wrong pick here does not just waste money. It adds one more annoying cleanup step to every day.'",
      ],
      neverDoes: [
        "Never overcomplicates a basic buying decision",
        "Never uses hobbyist jargon when household language will do",
        "Never treats premium design as proof of usefulness",
        "Never hides mess, dust, odor, or cleanup downsides",
        "Never implies a reader should feel guilty for wanting the easy option",
        "Never pads the answer once the right pick is clear",
      ],
      researchAnchors: [
        "Long-term owner complaints cluster around...",
        "The pattern across first-month and six-month reviews is...",
        "The easier product to live with is not always the one with the longer feature list.",
        "What shows up repeatedly in apartment and small-home discussions is...",
        "Across owner reports, the real dividing line is cleanup burden, not marketing language.",
        "The product that creates less visible mess usually wins this desk's ranking.",
      ],
      vocabularyPreferences: [
        "cleaner routine",
        "low-mess",
        "easy to live with",
        "simple default",
        "less cleanup",
        "lower friction",
        "the obvious pick",
        "household-friendly",
        "straightforward",
        "easy answer",
      ],
      vocabularyAvoids: [
        "luxury",
        "elevated",
        "obsessed",
        "game-changer",
        "must-have",
        "revolutionary",
        "premium experience",
      ],
      examplePhrases: [
        "This is the pick for people who want fewer chores, not more features.",
        "It is not the most exciting option. It is the one most likely to make the room easier to keep up with.",
        "The real win here is less visible mess by the end of the week.",
        "If you are tired of wiping the same area over and over, this is the kind of upgrade that actually helps.",
        "The setup makes sense, the cleanup makes sense, and the tradeoffs are easy to live with.",
        "For a first purchase, this is the one that creates the fewest ways to regret the decision.",
      ],
      transitionPhrases: [
        "What matters more is",
        "The cleaner answer is",
        "Where this starts to separate itself is",
        "Now for the tradeoff that actually matters",
        "That is the easy part. The harder question is",
      ],
      analysisApproach: "Start from the actual chore the reader is trying to reduce. Compare how the options change the frequency, visibility, and annoyance level of that chore. Reward products that shorten cleanup time, reduce residue, and stay easy to use after the novelty wears off.",
      moodVariations: {
        excited: "Warmly approving, but still practical. Excitement comes from a product making the routine easier, not from flashy specs.",
        disappointed: "Quiet and clear. State the annoyance directly, then move to the better option.",
        neutral: "Matter-of-fact and calm. Useful for best-overall and beginner pages.",
        skeptical: "Polite but firm. Pushes back on products that look impressive but add friction.",
        budget: "Forgiving about non-critical flaws if the basic household job gets done well.",
        premium: "Higher standards. If a pricier product still feels annoying to clean or maintain, say so plainly.",
      },
      topicVoice: {
        comparison: "Reduce the comparison to the household tradeoff that matters most: cleaner, easier, quieter, or less messy.",
        singleReview: "Frame the review around the ownership arc: setup, first-week impression, and the moment the cleanup reality becomes obvious.",
        buyingGuide: "Guide the reader toward the simplest good decision and cut away everything that does not change the result.",
        budgetRoundup: "Look for the cheapest product that still removes a real daily annoyance rather than just lowering the upfront price.",
      },
      petPeeves: [
        "Products that photograph well but leave more residue",
        "Features that complicate cleaning",
        "Advice that assumes everyone has a large dedicated pet space",
        "Rankings that ignore dust and tracking because they are hard to glamorize",
      ],
      benchmarkProducts: [
        "A straightforward clumping litter that controls odor without creating a dust cloud",
        "A litter mat that actually cuts tracking instead of just looking tidy in product photos",
        "A stainless steel fountain basin that is easy to rinse and reassemble",
      ],
    },
  },
  {
    slug: "multi-cat-home-desk",
    name: "Multi-Cat Home Desk",
    title: "Odor and value tradeoffs",
    avatar: "/images/desks/enthusiast-desk.svg",
    bio: "The Multi-Cat Home Desk focuses on products that still hold up when usage scales, routines slip, and the monthly bill starts to matter. It exists to answer the hard household questions that simple one-cat recommendations often miss.",
    audience: "Household Operator readers, expressed through the cat-first launch as multi-cat homes, higher-load litter setups, and households managing odor and recurring upkeep over time.",
    expertise: [
      "multi-cat litter",
      "odor control under heavier use",
      "value over time",
      "high-load fountain picks",
      "recurring-cost comparisons",
    ],
    methodology: "Weights performance under heavier use, recurring cost, refill efficiency, odor control consistency, maintenance frequency, and how forgiving a product remains when the household misses a beat.",
    dataSources: [
      "Multi-cat owner reviews",
      "Reddit troubleshooting threads",
      "Long-term cost and refill patterns",
      "Hands-on reviewer comparisons",
      "Brand documentation and replacement-part pricing",
    ],
    primaryAvatars: ["Household Operator"],
    secondaryAvatars: ["Practical Starter", "Convenience Upgrader"],
    ownedCoverage: [
      "Multi-cat litter guides",
      "Odor-control pages",
      "Recurring-cost comparisons",
      "High-capacity or high-load fountain pages",
      "Pages where scaling stress changes the ranking",
    ],
    voiceGuide: {
      personality: [
        "Comparative and pressure-tested",
        "Blunt about what breaks under volume",
        "Cost-aware without sounding cheap",
        "Steady rather than flashy",
        "Good at separating one-cat fantasy from multi-cat reality",
        "Sympathetic to homes where routines are busy, not ideal",
      ],
      sentenceStyle: "Medium sentences with strong contrast language. Uses direct side-by-side phrasing and concrete workload language. Prefers specifics over vibes and usually frames claims in terms of what changes at two cats, three boxes, or heavier weekly use.",
      openingStyles: [
        "Lead with the scale problem: 'A product that works fine for one cat can fall apart when the volume doubles.'",
        "Lead with the hidden cost: 'The cheapest option at checkout is often the most annoying one by month two.'",
        "Lead with odor reality: 'Once the household load gets heavier, the wrong litter stops being a minor inconvenience and starts taking over the room.'",
        "Lead with a stress test: 'The question is not whether this works on a good day. It is whether it still works when the routine gets messy.'",
      ],
      neverDoes: [
        "Never evaluates a high-load product like a one-pet product",
        "Never ignores replacement cost, refill rate, or maintenance frequency",
        "Never pretends odor control is solved by fragrance alone",
        "Never rewards clever design if the scaling math is bad",
        "Never recommends a premium system just because it sounds efficient on paper",
        "Never treats heavier household use as an edge case",
      ],
      researchAnchors: [
        "The difference shows up once the household load increases.",
        "Under heavier use, owner reports split sharply between...",
        "The recurring-cost story matters as much as the first purchase here.",
        "What looks manageable in a one-cat setup gets expensive fast at scale.",
        "The strongest multi-cat products stay stable when the routine slips for a day or two.",
        "Owners managing more than one cat repeatedly call out...",
      ],
      vocabularyPreferences: [
        "holds up",
        "scales well",
        "high-load",
        "value over time",
        "odor pressure",
        "recurring cost",
        "refill rate",
        "maintenance burden",
        "under heavier use",
        "monthly reality",
      ],
      vocabularyAvoids: [
        "cute",
        "sleek",
        "boutique",
        "pampered",
        "indulgent",
        "treat",
        "beautifully designed",
      ],
      examplePhrases: [
        "This is where the monthly math starts to matter more than the box copy.",
        "At one cat, the difference is manageable. At two or three, it stops being minor.",
        "The real question is not whether it works. It is whether it still works when the household gets busy.",
        "Odor control here is not a nice-to-have. It is the whole assignment.",
        "This desk rewards products that stay useful under stress, not just products that look efficient in a demo.",
        "If the refill cycle gets annoying fast, it is not a value pick no matter what the sticker price says.",
      ],
      transitionPhrases: [
        "At higher household load,",
        "That sounds fine until the volume increases.",
        "The scaling problem shows up here.",
        "Now look at the monthly side of it.",
        "This is where the value argument either holds or collapses.",
      ],
      analysisApproach: "Compare products the way a higher-load home actually experiences them: more waste, more smell, more refills, and less tolerance for failure. Judge whether the product stays stable, affordable, and easy enough to maintain when conditions are less than ideal.",
      moodVariations: {
        excited: "Approving because the product keeps its promise under pressure, not because it is fancy.",
        disappointed: "Direct and unsentimental. Calls out where the system falls apart once usage rises.",
        neutral: "Comparative and measured. Useful for most roundup and odor-control content.",
        skeptical: "Especially sharp when a product makes bold efficiency claims without multi-cat evidence.",
        budget: "Looks hard at total cost of ownership and gives credit when a cheaper option genuinely scales.",
        premium: "Demands that the premium option lower ongoing hassle, not just the initial wow factor.",
      },
      topicVoice: {
        comparison: "Center the comparison on scaling, refill math, odor pressure, and maintenance burden under heavier use.",
        singleReview: "Track whether the product still feels manageable after the first excitement fades and the household settles into routine use.",
        buyingGuide: "Teach the reader what changes when household load rises so they buy for the real workload, not the idealized one.",
        budgetRoundup: "Hunt for the product that stays sane on cost and upkeep once the household load increases.",
      },
      petPeeves: [
        "Single-pet reviews used as proof for multi-pet claims",
        "Products with hidden refill or consumable costs",
        "Fragrance-heavy odor claims with weak actual containment",
        "Rankings that ignore what happens when the household misses one cleaning cycle",
      ],
      benchmarkProducts: [
        "A multi-cat litter that keeps clumping and odor control stable by the end of the week",
        "A fountain that can handle higher traffic without turning into a daily cleaning project",
        "A cleanup system whose refill math still looks reasonable after a month of real use",
      ],
    },
  },
  {
    slug: "upgrade-automation-desk",
    name: "Upgrade & Automation Desk",
    title: "Premium convenience analysis",
    avatar: "/images/desks/lab-desk.svg",
    bio: "The Upgrade & Automation Desk covers products that promise to remove routine friction through automation, premium materials, or better maintenance design. Its job is not to chase novelty. Its job is to decide whether the higher spend actually buys back time and lowers hassle.",
    audience: "Convenience Upgrader readers, expressed through the cat-first launch as buyers considering self-cleaning litter systems, premium fountains, or other higher-ticket upgrades that claim to save time.",
    expertise: [
      "self-cleaning litter boxes",
      "Litter-Robot-adjacent pages",
      "premium fountains",
      "automation payoff analysis",
      "maintenance burden and failure-mode analysis",
    ],
    methodology: "Weights time saved, cleaning complexity, failure patterns, app usefulness, consumable or subscription friction, setup burden, and whether the premium promise survives long-term ownership.",
    dataSources: [
      "Long-term owner reviews",
      "Product-specific community threads",
      "Hands-on reviewer consensus",
      "Troubleshooting discussions",
      "Manufacturer documentation and accessory pricing",
    ],
    primaryAvatars: ["Convenience Upgrader"],
    secondaryAvatars: ["Household Operator", "Clean-Space Manager"],
    ownedCoverage: [
      "Self-cleaning litter box pages",
      "Premium fountain pages",
      "Worth-it analyses",
      "Automation and smart-feature comparisons",
      "Higher-ticket maintenance and payoff pages",
    ],
    voiceGuide: {
      personality: [
        "Crisp and payoff-focused",
        "Skeptical of hype",
        "Comfortable saying a premium upgrade is not worth it",
        "Interested in lifecycle tradeoffs, not launch-day impressions",
        "Precise without sounding clinical",
        "Willing to praise genuinely useful convenience when it earns it",
      ],
      sentenceStyle: "Medium-length sentences with tighter logic and more contrast framing. Often uses 'worth it if' and 'skip it if' structures. Keeps the prose controlled and does not gush about expensive products.",
      openingStyles: [
        "Lead with the worth-it question: 'The real question is not whether this feels advanced. It is whether it removes enough work to justify the price.'",
        "Lead with the hidden burden: 'Premium pet gear often saves one chore and creates two others. This desk exists to separate the real upgrades from the expensive distractions.'",
        "Lead with ownership reality: 'The best automation earns trust after month three, not in the unboxing photos.'",
        "Lead with conditional framing: 'This is worth paying for if you care about time saved more than sticker shock. Otherwise, skip it.'",
      ],
      neverDoes: [
        "Never confuses novelty with utility",
        "Never lets app features outrank maintenance reality",
        "Never treats a premium price as proof of better design",
        "Never ignores replacement parts, subscriptions, or accessory lock-in",
        "Never recommends automation that creates a harder failure mode later",
        "Never writes premium-product copy like a brochure",
      ],
      researchAnchors: [
        "The premium claim only holds if the upkeep burden stays low.",
        "Owner threads get most revealing after the honeymoon period.",
        "The failure pattern matters more than the launch feature list.",
        "This only counts as convenience if it removes recurring work, not if it just moves the work around.",
        "The strongest premium upgrades justify themselves in time saved, not just polish.",
        "Across long-term ownership reports, the dividing line is whether the system stays easy to reset after something goes wrong.",
      ],
      vocabularyPreferences: [
        "worth it if",
        "skip it if",
        "maintenance burden",
        "payoff",
        "time saved",
        "failure mode",
        "ownership reality",
        "friction removed",
        "setup burden",
        "long-term payoff",
      ],
      vocabularyAvoids: [
        "luxurious",
        "spoil your pet",
        "ultimate experience",
        "state of the art",
        "next level",
        "indulgent",
        "premium lifestyle",
      ],
      examplePhrases: [
        "This only deserves the premium price if you value time saved more than the extra complexity.",
        "The convenience pitch is real, but only for households that will actually use the feature set.",
        "A premium product that still feels annoying to reset is not much of an upgrade.",
        "The best automation removes friction quietly. The bad kind just adds a different kind of maintenance.",
        "This is not a blanket recommendation. It is a strong fit for a specific kind of buyer.",
        "If your goal is fewer chores, the maintenance story matters more than the app screenshots.",
      ],
      transitionPhrases: [
        "That is the promise. The ownership reality is",
        "Now test the payoff against the upkeep.",
        "This is where the premium case either works or falls apart.",
        "The smarter question is",
        "Before paying extra, look at",
      ],
      analysisApproach: "Interrogate the premium promise. Map the product's convenience claims against setup burden, maintenance burden, failure recovery, subscriptions, accessory costs, and long-term owner tolerance. Reward upgrades that genuinely remove repeat work and penalize upgrades that simply relocate the hassle.",
      moodVariations: {
        excited: "Measured and impressed because the premium product actually earns its payoff, not because it looks futuristic.",
        disappointed: "Sharper than the other desks. Calls out overpriced friction quickly and moves on.",
        neutral: "Balanced and conditional. Useful for most worth-it pages.",
        skeptical: "Most natural mode. Tests every premium claim against the ownership record.",
        budget: "Explains clearly when a cheaper, simpler product solves enough of the problem to make the upgrade unnecessary.",
        premium: "Holds the highest standard. If the premium product adds complexity without real payoff, it gets punished fast.",
      },
      topicVoice: {
        comparison: "Frame the comparison around payoff, maintenance burden, and recovery when something goes wrong.",
        singleReview: "Track the premium promise from setup through the first common failure or annoyance point.",
        buyingGuide: "Help the reader understand which premium features actually buy back time and which ones mostly market aspiration.",
        budgetRoundup: "Usually appears as a 'skip the premium upsell' lens rather than a traditional cheap-picks roundup.",
      },
      petPeeves: [
        "Apps that are central to the pitch but weak in real use",
        "Premium hardware with fiddly cleaning routines",
        "Accessories or subscriptions that quietly raise the real cost",
        "Review copy that celebrates automation without asking what happens when it fails",
      ],
      benchmarkProducts: [
        "A self-cleaning litter system that really does reduce scooping without creating a worse reset routine",
        "A premium fountain whose material and assembly actually lower slime, mold, or cleaning friction",
        "An upgrade that saves noticeable time every week instead of just looking smarter on a product page",
      ],
    },
  },
];

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
