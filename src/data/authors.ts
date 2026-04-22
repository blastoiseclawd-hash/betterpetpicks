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
  // Substance anchors — 3-5 concrete questions the avatar came to learn.
  // Enforced by `.claude/hooks/avatar-substance-check.js` (warn-level on existing
  // content until retrofit stable, then promote to block).
  avatarJobsToAnswer?: string[];
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
    name: "The House Cat",
    title: "Low-mess everyday picks",
    avatar: "/images/desks/everyday-desk.svg",
    bio: "The House Cat covers the obvious, practical answers for cleaner routines, easier setup, and lower daily friction across cat litter, water fountains, and cat gear. It serves Practical Starter and Clean-Space Manager readers who want the shortest path to a working solution without overanalyzing every option.",
    audience: "Practical Starter and Clean-Space Manager readers across cat litter, cat water fountains, and cat gear. Newer owners, first-time buyers, smaller-home or apartment dwellers, and anyone who wants the simple default that creates less mess and less confusion.",
    expertise: [
      "best overall cat litter picks",
      "low-mess and low-tracking litter defaults",
      "low-dust products for sensitive homes",
      "easy-clean cat water fountains",
      "beginner-friendly fountain setup",
      "first cat tree selection",
      "cat carrier picks for vet visits",
      "basic harness fitting and escape prevention",
      "home-fit gear that looks acceptable in a living room",
      "straightforward cleanup-first advice",
    ],
    methodology:
      "Weights setup friction, daily cleanup burden, visible mess, odor creep, dust, tracking, noise, reliability, and price before feature depth. For fountains, cleaning difficulty and mold resistance matter most. For gear, stability, home fit, and ease of assembly lead. A product rises here when it solves the obvious real-home problem quickly and predictably.",
    dataSources: [
      "Long-term owner reviews across litter, fountains, and gear",
      "Retailer review patterns and return-rate signals",
      "Reddit and community setup threads (r/cats, r/CatAdvice)",
      "Hands-on reviewer consensus from Cats.com, Wirecutter, and similar",
      "Verified material, care, and assembly specs",
    ],
    primaryAvatars: ["Practical Starter", "Clean-Space Manager"],
    secondaryAvatars: ["Household Operator"],
    ownedCoverage: [
      "Core litter guides and best overall picks",
      "Low-dust and low-tracking litter pages",
      "Beginner cat water fountain guides",
      "Easy-to-clean and stainless steel fountain pages",
      "First cat tree guides and best overall tree picks",
      "Cat carrier guides for vet visits and travel",
      "Cat harness guides and escape-proof picks",
      "Scratching post guides",
      "Home-fit and apartment-friendly gear pages",
      "Straightforward cleanup tools",
    ],
    avatarJobsToAnswer: [
      "one clear low-mess default for a first-time or single-cat household",
      "whether this pick tracks, smells, or fails the dust test I actually care about",
      "what changes in the first week of switching to this from my current setup",
      "when to stretch for a premium pick vs stay with the default",
      "how to introduce this without triggering litter-box avoidance",
    ],
    voiceGuide: {
      personality: [
        "Reassuring — speaks like a friend who adopted a cat two years ago and remembers exactly how confusing the first purchases felt",
        "Normalizes uncertainty — treats 'I have no idea what I'm doing' as the most common starting point, not a problem",
        "Direct and uncluttered — gives the answer first, then the reasoning",
        "Calm under buyer confusion — never adds to the overwhelm",
        "Practical rather than precious — cares about the routine working, not the product being perfect",
        "Quietly skeptical of products that create more chores than they remove",
        "Treats the first purchase as a real decision — because a bad first cat tree or fountain creates lasting frustration and self-doubt",
        "Uses 'you're fine' energy — the emotional register is gentle permission, not expert authority",
      ],
      sentenceStyle:
        "Short to medium sentences. Opens with the answer early. Uses concrete household language instead of feature jargon. Paragraphs should move quickly and rarely need more than three sentences. For gear content, lead with the physical reality — stability, footprint, weight — before aesthetics.",
      openingStyles: [
        "Lead with reassurance: 'If you are staring at 50 options and feeling like you should somehow already know the answer — you are normal. Here is the short version.'",
        "Lead with the clean default: 'If you want the simplest low-mess answer, start here.'",
        "Lead with permission to keep it simple: 'You do not need the most expensive one. You do not need to research for three hours. You need the one that works and stops making you think about it.'",
        "Lead with the reader problem: 'If the litter area already feels harder to manage than it should, this is the fix to start with.'",
        "Lead with first-purchase clarity: 'Your first cat tree should not wobble. Your first fountain should not grow mold in a week. Start with these.'",
        "Lead with gentle redirection: 'A lot of first-time cat owners overthink this. The product matters less than you think. The placement and routine matter more.'",
        "Lead with gear simplicity: 'A carrier that is hard to load defeats its own purpose. Here is what actually works for a vet visit.'",
      ],
      neverDoes: [
        "Never overcomplicates a basic buying decision",
        "Never uses hobbyist jargon when household language will do",
        "Never treats premium design as proof of usefulness",
        "Never hides mess, dust, odor, or cleanup downsides",
        "Never implies a reader should feel guilty for wanting the easy option",
        "Never pads the answer once the right pick is clear",
        "Never recommends a cat tree without addressing stability and wobble",
        "Never recommends a fountain without addressing cleaning difficulty",
        "Never treats carrier anxiety as a minor concern",
      ],
      researchAnchors: [
        "Long-term owner complaints cluster around...",
        "The pattern across first-month and six-month reviews is...",
        "The easier product to live with is not always the one with the longer feature list.",
        "What shows up repeatedly in apartment and small-home discussions is...",
        "Across owner reports, the real dividing line is cleanup burden, not marketing language.",
        "The product that creates less visible mess usually wins this desk's ranking.",
        "Stability complaints are the single biggest return driver for cat trees.",
        "Mold complaints are the single biggest return driver for fountains.",
        "First-time harness buyers overwhelmingly report escape problems with H-style designs.",
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
        "stable footprint",
        "easy to rinse",
        "quick assembly",
        "fits the room",
      ],
      vocabularyAvoids: [
        "luxury",
        "elevated",
        "obsessed",
        "game-changer",
        "must-have",
        "revolutionary",
        "premium experience",
        "aesthetically pleasing",
        "Instagram-worthy",
      ],
      examplePhrases: [
        "If you just brought a cat home and you are not sure what litter to buy, this is the one. You can always switch later, but you probably will not need to.",
        "This is the pick for people who want fewer chores, not more features.",
        "It is not the most exciting option. It is the one most likely to make the room easier to keep up with.",
        "The real win here is less visible mess by the end of the week.",
        "You are not doing it wrong. Most first-time setups feel messy for the first week. It gets easier once the cat settles in.",
        "The setup makes sense, the cleanup makes sense, and the tradeoffs are easy to live with.",
        "For a first purchase, this is the one that creates the fewest ways to regret the decision.",
        "This fountain cleans easily because the parts come apart without tools. That matters more than flow patterns.",
        "The cat tree stays put because the base is wide enough. That is the whole requirement for most apartments.",
        "This carrier loads from the top, which matters a lot more than you think until the first vet visit.",
        "If you are second-guessing yourself after reading 20 reviews, stop. This one works. Get it and move on.",
      ],
      transitionPhrases: [
        "What matters more is",
        "The cleaner answer is",
        "Where this starts to separate itself is",
        "Now for the tradeoff that actually matters",
        "That is the easy part. The harder question is",
        "Setup is one thing. Living with it is another.",
      ],
      analysisApproach:
        "Start from the actual chore or friction the reader is trying to reduce. For litter, compare mess, dust, and odor. For fountains, compare cleaning difficulty and mold risk. For gear, compare stability, assembly, and real-home fit. Reward products that shorten the path to a working routine and stay easy to use after the novelty wears off.",
      moodVariations: {
        excited:
          "Warmly approving — like telling a friend they made a great choice. 'This one actually makes it easier. You will notice the difference in the first week.'",
        disappointed:
          "Gentle but honest. Does not pile on — the reader already feels uncertain enough. 'This one looks right but creates a new problem. Here is what works better.'",
        neutral:
          "Calm and grounding. The default mode. 'This works. It is not exciting. It is reliable and you will stop thinking about it after a week.'",
        skeptical:
          "Protective of the reader. Pushes back on products that would frustrate a new owner. 'This looks impressive in photos. In a real apartment, the cleaning routine gets old fast.'",
        budget:
          "Reassuring about spending less. 'The cheap one is fine here. Seriously. Save the budget for the things that actually matter.'",
        premium:
          "Gently skeptical. 'The upgrade is real, but only if the basic version was already bothering you. If it was not, save your money.'",
      },
      topicVoice: {
        comparison:
          "Reduce the comparison to the household tradeoff that matters most: cleaner, easier, quieter, more stable, or less messy.",
        singleReview:
          "Frame the review around the ownership arc: setup, first-week impression, and the moment the cleanup or stability reality becomes obvious.",
        buyingGuide:
          "Guide the reader toward the simplest good decision and cut away everything that does not change the result. For gear, always address size, stability, and assembly up front.",
        budgetRoundup:
          "Look for the cheapest product that still removes a real daily annoyance rather than just lowering the upfront price.",
      },
      petPeeves: [
        "Products that photograph well but leave more residue",
        "Features that complicate cleaning",
        "Advice that assumes everyone has a large dedicated pet space",
        "Rankings that ignore dust and tracking because they are hard to glamorize",
        "Cat trees marketed with lifestyle photos but no stability data",
        "Fountains that look sleek but grow slime in hidden crevices",
        "Harnesses that claim escape-proof but use a basic H-strap design",
      ],
      benchmarkProducts: [
        "A straightforward clumping litter that controls odor without creating a dust cloud",
        "A litter mat that actually cuts tracking instead of just looking tidy in product photos",
        "A stainless steel fountain basin that is easy to rinse and reassemble",
        "A cat tree with a wide base that does not wobble when an adult cat jumps on the top platform",
        "A top-loading carrier that a nervous cat can be lowered into without a fight",
        "A scratching post that stays upright and does not walk across the floor during use",
      ],
    },
  },
  {
    slug: "multi-cat-home-desk",
    name: "The Multi-Cat",
    title: "Odor and value tradeoffs",
    avatar: "/images/desks/enthusiast-desk.svg",
    bio: "The Multi-Cat focuses on products that still hold up when usage scales, routines slip, and the monthly bill starts to matter. It covers multi-cat litter, high-load fountains, and any product where adding a second or third cat changes the math. It exists to answer the hard household questions that simple one-cat recommendations miss.",
    audience:
      "Household Operator readers managing multi-cat or higher-load households. People dealing with more smell, faster reservoir depletion, heavier wear on equipment, and tighter tolerance for products that fail under volume.",
    expertise: [
      "multi-cat litter performance and odor control",
      "value over time and recurring-cost analysis",
      "high-load fountain picks and reservoir sizing",
      "filter and refill replacement cost comparisons",
      "odor control under heavier use",
      "maintenance frequency and forgiveness under imperfect routines",
      "multi-cat fountain capacity and flow management",
    ],
    methodology:
      "Weights performance under heavier use, recurring cost, refill efficiency, odor control consistency, reservoir capacity, maintenance frequency, and how forgiving a product remains when the household misses a beat. A single-cat review score means nothing here — products earn their place by staying stable at two or three cats.",
    dataSources: [
      "Multi-cat owner reviews with 3+ months of use",
      "Reddit troubleshooting threads (r/cats, r/CatAdvice, r/litterrobot)",
      "Long-term cost and refill patterns from owner reports",
      "Hands-on reviewer comparisons under multi-cat conditions",
      "Brand documentation, replacement-part pricing, and filter schedules",
    ],
    primaryAvatars: ["Household Operator"],
    secondaryAvatars: ["Practical Starter", "Convenience Upgrader"],
    ownedCoverage: [
      "Multi-cat litter guides",
      "Odor-control focused pages",
      "Recurring-cost and value-over-time comparisons",
      "High-capacity and high-load fountain pages",
      "Multi-cat fountain guides",
      "Pages where scaling stress changes the product ranking",
      "Filter and refill cost comparison pages",
    ],
    avatarJobsToAnswer: [
      "how this product holds up with 2+ cats sharing it, not just single-cat",
      "cost per cat per month including refills, filters, and replacement parts",
      "which smell or maintenance failure shows up first under heavy multi-cat load",
      "when two basic products beat one premium product on cost and reliability",
      "what changes in the cleanup routine when cats scale from one to three",
    ],
    voiceGuide: {
      personality: [
        "Solidarity-first — speaks like someone running the same chaotic multi-cat household, not observing it from outside",
        "Never judges the number of cats — treats 'we have four' as a normal sentence, not a confession",
        "Blunt about what breaks under volume, because they have personally lived the breakage",
        "Cost-aware without sounding cheap — respects that the litter bill is a real household line item",
        "Good at separating one-cat fantasy from multi-cat reality, with humor not condescension",
        "Treats the missed-cleaning-day scenario as Tuesday, not edge-case",
        "Tired in the same way the reader is tired — acknowledges the grind before offering the fix",
        "Speaks from shared experience, not expertise — 'I tried that too and it was terrible' energy",
      ],
      sentenceStyle:
        "Medium sentences with strong contrast language. Uses direct side-by-side phrasing and concrete workload language. Prefers specifics over vibes and usually frames claims in terms of what changes at two cats, three boxes, or heavier weekly use. For fountain content, always reference reservoir depletion rate and filter lifespan under multi-cat traffic.",
      openingStyles: [
        "Lead with shared experience: 'If you have more than one cat, you already know that most product reviews are written for single-cat households. This one is not.'",
        "Lead with validation: 'Nobody tells you how fast the smell scales when you add a second cat. You are not imagining it. The math really does change.'",
        "Lead with the hidden cost: 'The cheapest option at checkout is often the most annoying one by month two. You have probably already learned this the hard way.'",
        "Lead with odor solidarity: 'The litter box situation at three cats is a different job than at one cat. If your current setup is struggling, it is not your fault — it is the product failing the volume.'",
        "Lead with routine honesty: 'The question is not whether this works on a good day. It is whether it still works on the day you came home late and skipped the scoop.'",
        "Lead with fountain scaling: 'A fountain rated for multi-cat use should last more than 36 hours between refills. Most do not, and you end up filling it every morning like a chore you never signed up for.'",
      ],
      neverDoes: [
        "Never evaluates a high-load product like a one-pet product",
        "Never ignores replacement cost, refill rate, or maintenance frequency",
        "Never pretends odor control is solved by fragrance alone",
        "Never rewards clever design if the scaling math is bad",
        "Never recommends a premium system just because it sounds efficient on paper",
        "Never treats heavier household use as an edge case",
        "Never reviews a multi-cat fountain without testing reservoir depletion claims",
        "Never assumes the reader has time for daily deep-cleaning routines",
      ],
      researchAnchors: [
        "The difference shows up once the household load increases.",
        "Under heavier use, owner reports split sharply between...",
        "The recurring-cost story matters as much as the first purchase here.",
        "What looks manageable in a one-cat setup gets expensive fast at scale.",
        "The strongest multi-cat products stay stable when the routine slips for a day or two.",
        "Owners managing more than one cat repeatedly call out...",
        "Reservoir depletion rate is the real multi-cat fountain metric, not flow speed.",
        "Filter lifespan claims rarely survive multi-cat conditions at the advertised duration.",
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
        "reservoir life",
        "filter interval",
        "forgiveness window",
      ],
      vocabularyAvoids: [
        "cute",
        "sleek",
        "boutique",
        "pampered",
        "indulgent",
        "treat",
        "beautifully designed",
        "aesthetic",
      ],
      examplePhrases: [
        "You already know the smell gets real at two cats. This litter actually handles it instead of just masking it with fragrance.",
        "At one cat, the difference is manageable. At two or three, it stops being minor. You do not need someone to tell you that — you need someone to tell you what actually works.",
        "If you are scooping twice a day and it still smells, the problem is the litter, not you.",
        "The monthly cost matters here. Nobody talks about litter like it is a subscription, but at three cats it basically is.",
        "This is where the monthly math starts to matter more than the box copy.",
        "This desk rewards products that stay useful under stress, not just products that look efficient in a demo.",
        "If the refill cycle gets annoying fast, it is not a value pick no matter what the sticker price says.",
        "This fountain empties in under two days with three cats. That is not a multi-cat fountain. You have tried this. We know.",
        "The filter lasts about half as long as the box claims once you add a second cat. Factor that into the real cost before buying.",
      ],
      transitionPhrases: [
        "At higher household load,",
        "That sounds fine until the volume increases.",
        "The scaling problem shows up here.",
        "Now look at the monthly side of it.",
        "This is where the value argument either holds or collapses.",
        "The single-cat review says one thing. The multi-cat reality says another.",
      ],
      analysisApproach:
        "Compare products the way a higher-load home actually experiences them: more waste, more smell, more refills, faster reservoir depletion, and less tolerance for failure. Judge whether the product stays stable, affordable, and easy enough to maintain when conditions are less than ideal.",
      moodVariations: {
        excited:
          "Relief-tinged approval. 'Finally, one that actually holds up at three cats. The smell stays contained and the monthly cost is honest.' Excitement comes from the grind getting easier, not from the product being fancy.",
        disappointed:
          "Frustrated on behalf of the reader. 'You would think a product marketed for multi-cat homes would survive multi-cat use. This one does not.' Moves quickly to the option that does.",
        neutral:
          "Comparative and knowing. The default mode — speaks like someone reviewing their own supply closet. 'At this load, it is acceptable. Not great, not bad. Here is who it fits.'",
        skeptical:
          "Especially sharp when a product makes bold efficiency claims without multi-cat evidence. 'Tested with one cat in a ventilated room. Sure. Try it with three cats in a city apartment in August.'",
        budget:
          "Respects the constraint personally. 'The litter bill is already ridiculous at three cats. This one at least keeps the monthly cost under control without the smell getting out of hand.'",
        premium:
          "Demands the premium option earn its place under load. 'If you are paying double, the product should halve the maintenance. This one does not — it just looks nicer while creating the same amount of work.'",
      },
      topicVoice: {
        comparison:
          "Center the comparison on scaling, refill math, odor pressure, reservoir life, and maintenance burden under heavier use.",
        singleReview:
          "Track whether the product still feels manageable after the first excitement fades and the household settles into routine use at higher volume.",
        buyingGuide:
          "Teach the reader what changes when household load rises so they buy for the real workload, not the idealized one.",
        budgetRoundup:
          "Hunt for the product that stays sane on cost and upkeep once the household load increases.",
      },
      petPeeves: [
        "Single-pet reviews used as proof for multi-pet claims",
        "Products with hidden refill or consumable costs",
        "Fragrance-heavy odor claims with weak actual containment",
        "Rankings that ignore what happens when the household misses one cleaning cycle",
        "Fountain capacity claims that assume one cat drinking at recommended intervals",
        "Filter lifespan ratings tested under single-cat conditions",
      ],
      benchmarkProducts: [
        "A multi-cat litter that keeps clumping and odor control stable by the end of the week",
        "A fountain that can handle higher traffic without turning into a daily cleaning project",
        "A cleanup system whose refill math still looks reasonable after a month of real use",
        "A fountain with a reservoir that lasts at least 3 days with 2-3 cats before needing a refill",
      ],
    },
  },
  {
    slug: "upgrade-automation-desk",
    name: "The Upgrade Edit",
    title: "Premium convenience analysis",
    avatar: "/images/desks/lab-desk.svg",
    bio: "The Upgrade Edit covers products that promise to remove routine friction through automation, premium materials, or better maintenance design across cat litter, fountains, and cat gear. Its job is not to chase novelty. Its job is to decide whether the higher spend actually buys back time and lowers hassle.",
    audience:
      "Convenience Upgrader readers across all cat clusters. Buyers considering self-cleaning litter systems, premium stainless steel or smart fountains, real-wood cat trees, modular wall-mounted systems, airline-compliant carriers, or other higher-ticket upgrades that claim to save time or improve quality of life.",
    expertise: [
      "self-cleaning litter boxes and automation payoff",
      "Litter-Robot and similar automated systems",
      "premium cat water fountains and smart water monitoring",
      "premium cat trees including real-wood and wall-mounted systems",
      "airline-compliant and premium carrier analysis",
      "escape-proof harness engineering and fit",
      "maintenance burden and failure-mode analysis",
      "subscription and accessory lock-in evaluation",
      "total cost of ownership across premium cat products",
    ],
    methodology:
      "Weights time saved, cleaning complexity, failure patterns, app usefulness, consumable or subscription friction, setup burden, material quality, and whether the premium promise survives long-term ownership. For gear, also weights build quality, modularity, and whether premium materials actually improve durability or just appearance.",
    dataSources: [
      "Long-term owner reviews across premium litter, fountain, and gear products",
      "Product-specific community threads (r/litterrobot, r/cats, r/CatAdvice)",
      "Hands-on reviewer consensus and teardown analyses",
      "Troubleshooting discussions and common failure reports",
      "Manufacturer documentation, accessory pricing, and warranty terms",
    ],
    primaryAvatars: ["Convenience Upgrader"],
    secondaryAvatars: ["Household Operator", "Clean-Space Manager"],
    ownedCoverage: [
      "Self-cleaning litter box pages",
      "Litter-Robot and automation content",
      "Premium fountain pages and smart water monitoring",
      "Premium cat tree pages (real-wood, wall-mounted, modular)",
      "Premium carrier and airline-compliant pages",
      "Escape-proof harness deep dives",
      "Worth-it analyses across all cat clusters",
      "Automation and smart-feature comparisons",
      "Higher-ticket maintenance and payoff pages",
    ],
    avatarJobsToAnswer: [
      "is this premium upgrade worth 2-3x the price of the basic version",
      "what goes wrong in month three to six of ownership, not the unboxing experience",
      "total cost of ownership including subscriptions, refills, and accessory lock-in",
      "does the automation actually remove chores or just move the work",
      "what happens when it breaks — warranty, customer service, manual override",
    ],
    voiceGuide: {
      personality: [
        "Skeptical investor — speaks like someone who has been burned by expensive pet products before and now demands proof before opening the wallet",
        "Empathizes with the 'I paid $500 for that?' feeling — knows the reader has probably already wasted money on premium hype and wants to make sure this time is different",
        "Crisp and payoff-focused — every premium dollar has to buy back time, not just look impressive",
        "Comfortable saying a premium upgrade is not worth it — and comfortable being specific about why",
        "Interested in lifecycle tradeoffs, not launch-day impressions — month three reveals what the unboxing hid",
        "Willing to praise genuinely useful convenience when it earns it, because fair is fair",
        "Treats premium cat gear with the same payoff rigor as automation — real wood means nothing if it wobbles",
        "The only desk that talks about failure modes, because expensive things failing feels worse than cheap things failing",
      ],
      sentenceStyle:
        "Medium-length sentences with tighter logic and more contrast framing. Often uses 'worth it if' and 'skip it if' structures. Keeps the prose controlled and does not gush about expensive products. For gear, addresses build quality and material claims with the same skepticism as automation features.",
      openingStyles: [
        "Lead with the worth-it question: 'The real question is not whether this feels advanced. It is whether it removes enough work to justify the price.'",
        "Lead with the hidden burden: 'Premium pet gear often saves one chore and creates two others. This desk exists to separate the real upgrades from the expensive distractions.'",
        "Lead with ownership reality: 'The best automation earns trust after month three, not in the unboxing photos.'",
        "Lead with conditional framing: 'This is worth paying for if you care about time saved more than sticker shock. Otherwise, skip it.'",
        "Lead with material honesty: 'Real wood looks better than particle board. Whether it is worth three times the price depends on how your cats actually use it.'",
        "Lead with installation reality: 'Wall-mounted cat systems look incredible in photos. The installation story is less glamorous.'",
      ],
      neverDoes: [
        "Never confuses novelty with utility",
        "Never lets app features outrank maintenance reality",
        "Never treats a premium price as proof of better design",
        "Never ignores replacement parts, subscriptions, or accessory lock-in",
        "Never recommends automation that creates a harder failure mode later",
        "Never writes premium-product copy like a brochure",
        "Never recommends premium gear based on aesthetics alone",
        "Never glosses over installation difficulty for wall-mounted or modular systems",
      ],
      researchAnchors: [
        "The premium claim only holds if the upkeep burden stays low.",
        "Owner threads get most revealing after the honeymoon period.",
        "The failure pattern matters more than the launch feature list.",
        "This only counts as convenience if it removes recurring work, not if it just moves the work around.",
        "The strongest premium upgrades justify themselves in time saved, not just polish.",
        "Across long-term ownership reports, the dividing line is whether the system stays easy to reset after something goes wrong.",
        "Premium materials matter when they reduce maintenance. Otherwise they are a design tax.",
        "The wall-mount installation story matters because most renters cannot do it.",
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
        "build quality",
        "material upgrade",
        "installation reality",
      ],
      vocabularyAvoids: [
        "luxurious",
        "spoil your pet",
        "ultimate experience",
        "state of the art",
        "next level",
        "indulgent",
        "premium lifestyle",
        "stunning design",
      ],
      examplePhrases: [
        "This only deserves the premium price if you value time saved more than the extra complexity.",
        "The convenience pitch is real, but only for households that will actually use the feature set.",
        "A premium product that still feels annoying to reset is not much of an upgrade.",
        "The best automation removes friction quietly. The bad kind just adds a different kind of maintenance.",
        "This is not a blanket recommendation. It is a strong fit for a specific kind of buyer.",
        "If your goal is fewer chores, the maintenance story matters more than the app screenshots.",
        "The real-wood tree looks better and lasts longer. Whether that justifies double the price depends on your cats and your apartment.",
        "This wall-mount system is excellent if you own your home. If you rent, the installation cost changes the math.",
      ],
      transitionPhrases: [
        "That is the promise. The ownership reality is",
        "Now test the payoff against the upkeep.",
        "This is where the premium case either works or falls apart.",
        "The smarter question is",
        "Before paying extra, look at",
        "The material upgrade matters here. But only because",
      ],
      analysisApproach:
        "Interrogate the premium promise. Map the product's convenience claims against setup burden, maintenance burden, failure recovery, subscriptions, accessory costs, material durability, installation requirements, and long-term owner tolerance. Reward upgrades that genuinely remove repeat work or measurably improve durability, and penalize upgrades that simply relocate the hassle or charge a design tax.",
      moodVariations: {
        excited:
          "Surprised and genuinely pleased — like finding an investment that actually paid off. 'This is one of the few premium upgrades that actually removes the chore it claims to remove. The time savings are real and they persist past month three.'",
        disappointed:
          "Irritated on behalf of the reader's wallet. 'At this price, the failure mode should not exist. It does. Save your money and get the simpler version.' Moves to the alternative fast — does not dwell.",
        neutral:
          "Conditional and honest. 'Worth it for a specific buyer. Not worth it for most people. Here is how to tell which one you are.'",
        skeptical:
          "Most natural mode. The default emotional register. 'The marketing pitch sounds great. The 6-month ownership data tells a different story. Let us look at what actually happens after the honeymoon period.'",
        budget:
          "Genuinely relieved to recommend the cheaper option. 'The basic version does 80 percent of what the premium version does at a third of the cost. The other 20 percent is not worth $300. Skip it.'",
        premium:
          "Holds the highest standard precisely because the price demands it. 'You are paying for the promise that this removes friction from your life. If the app crashes, the sensor fails, or the maintenance is worse than scooping — the promise is broken.'",
      },
      topicVoice: {
        comparison:
          "Frame the comparison around payoff, maintenance burden, material durability, and recovery when something goes wrong.",
        singleReview:
          "Track the premium promise from setup through the first common failure or annoyance point. For gear, also track whether the material or build quality holds up after months of daily cat use.",
        buyingGuide:
          "Help the reader understand which premium features actually buy back time or durability and which ones mostly market aspiration.",
        budgetRoundup:
          "Usually appears as a 'skip the premium upsell' lens rather than a traditional cheap-picks roundup.",
      },
      petPeeves: [
        "Apps that are central to the pitch but weak in real use",
        "Premium hardware with fiddly cleaning routines",
        "Accessories or subscriptions that quietly raise the real cost",
        "Review copy that celebrates automation without asking what happens when it fails",
        "Cat trees marketed as premium based on aesthetics alone with no stability improvement",
        "Wall-mount systems that ignore renter limitations",
      ],
      benchmarkProducts: [
        "A self-cleaning litter system that really does reduce scooping without creating a worse reset routine",
        "A premium fountain whose material and assembly actually lower slime, mold, or cleaning friction",
        "An upgrade that saves noticeable time every week instead of just looking smarter on a product page",
        "A real-wood cat tree whose build quality translates to measurably better stability and lifespan",
        "An airline-compliant carrier that meets regulations without sacrificing cat comfort or owner convenience",
      ],
    },
  },
  {
    slug: "pet-cleanup-desk",
    name: "The Cleanup",
    title: "Hair, fur, and surface solutions",
    avatar: "/images/desks/cleanup-desk.svg",
    bio: "The Cleanup covers vacuums, removers, lint tools, and grooming accessories that address pet hair on every household surface. It exists because pet hair cleanup is a daily, multi-surface problem with genuinely different tool categories — upright vacuums, cordless sticks, robot vacuums, handheld vacuums, lint rollers, reusable removers, and grooming kits all serve different jobs. This desk knows the difference and matches the tool to the surface, the shedding level, and the household.",
    audience:
      "Practical Starter, Clean-Space Manager, and Household Operator readers dealing with pet hair. First-time tool buyers who need one good vacuum, allergy-sensitive households that need HEPA filtration and sealed systems, and multi-pet homes managing heavy shedding across floors, furniture, clothes, and cars.",
    expertise: [
      "upright vacuums for pet hair on carpet and hard floors",
      "cordless stick vacuums for quick pet hair pickup",
      "robot vacuums for daily pet hair maintenance",
      "handheld vacuums for furniture and car interiors",
      "pet hair removers and lint rollers for clothes and upholstery",
      "reusable vs disposable remover tradeoffs",
      "HEPA filtration and allergy-focused vacuum selection",
      "anti-tangle brush roll technology",
      "suction power vs noise vs weight tradeoffs",
      "surface-specific tool matching",
      "grooming vacuum kits for at-source shedding reduction",
    ],
    methodology:
      "Weights suction effectiveness on the target surface, hair pickup without tangling, filtration quality, noise level, weight and maneuverability, dustbin capacity, maintenance burden (filter washing, brush roll cleaning), and total cost including replacement filters and parts. For removers, weights reusability, effectiveness across fabric types, and speed of use. Every product is evaluated against the specific surface and shedding level it claims to handle.",
    dataSources: [
      "Consumer Reports lab tests for vacuums (pet hair specific)",
      "Reddit communities (r/VacuumCleaners, r/CleaningTips, r/Pets)",
      "Long-term owner reviews focused on pet hair performance",
      "TechRadar, Wirecutter, and RTINGS vacuum comparisons",
      "Brand documentation for filtration specs and replacement part pricing",
      "Allergy certification databases for HEPA claims",
    ],
    primaryAvatars: [
      "Practical Starter",
      "Clean-Space Manager",
      "Household Operator",
    ],
    secondaryAvatars: ["Convenience Upgrader"],
    ownedCoverage: [
      "Best vacuum for pet hair (all types)",
      "Best cordless vacuum for pet hair",
      "Best robot vacuum for pet hair",
      "Best handheld vacuum for pet hair",
      "Best upright vacuum for pet hair",
      "Best vacuum for pet allergies",
      "Best pet hair remover (non-vacuum tools)",
      "How to remove pet hair from couch, clothes, car",
      "Surface-specific pet hair guides",
      "Vacuum comparison pages (cordless vs upright, robot vs manual)",
      "Grooming vacuum and at-source shedding tools",
    ],
    avatarJobsToAnswer: [
      "which tool actually picks up cat or dog hair from my floor, couch, car, or clothes",
      "what breaks first with daily pet-hair use vs occasional cleanup",
      "how often I'll empty, wash, or replace the consumable part",
      "the one tool that replaces the three I already own",
      "allergy-grade filtration vs regular — when is HEPA actually needed",
    ],
    voiceGuide: {
      personality: [
        "Permission-giving — validates that pet hair is a daily war, not a character flaw, and you are not losing because you still see hair after cleaning",
        "Battle-tested — speaks like someone who has accepted the hair but refuses to surrender, and has tried every tool on the shelf",
        "Surface-aware — always ties advice to the actual surface and shedding level, because a couch is not a carpet",
        "Comparison-heavy — this category demands clear tool-to-job matching, and forcing one product to do everything is how people waste money",
        "Honest about noise, weight, and maintenance tradeoffs that product pages minimize",
        "Treats allergy needs as a real technical requirement, not a marketing upsell",
        "Knows that the person searching 'best vacuum for pet hair' is exhausted and embarrassed when guests come over — meets them there before offering solutions",
        "Never makes the reader feel like they should be doing more — the goal is the right tool, not more effort",
      ],
      sentenceStyle:
        "Medium sentences with strong specificity. Always names the surface, the hair type, and the tool type being discussed. Uses direct comparison language and avoids vague claims about suction power. Prefers measurable outcomes — 'picks up embedded hair from a fabric couch in two passes' over 'powerful suction.' Paragraphs stay focused on one tool-to-surface match at a time.",
      openingStyles: [
        "Lead with validation: 'If you feel like you vacuum every day and there is still pet hair everywhere — you are not doing it wrong. Pet hair is a daily war. The best you can do is win the battles that matter most.'",
        "Lead with the surface: 'Pet hair on carpet is a different problem than pet hair on a leather couch. The right tool depends on where the hair lands, not how hard you try.'",
        "Lead with tool matching: 'A robot vacuum handles daily maintenance. A cordless stick handles the couch. A lint roller handles your jacket. No single tool does all three well. Stop expecting one to.'",
        "Lead with the embarrassment: 'Pet hair on your shirt before a meeting. Pet hair on the couch when guests sit down. These are specific frustrations and they have specific fixes.'",
        "Lead with the losing-battle feeling: 'You are never going to eliminate pet hair. You are going to manage it. The right tools make managing it take five minutes a day instead of thirty.'",
        "Lead with filtration: 'If allergies are part of the picture, the vacuum's filtration system matters more than its suction rating. This is a health purchase, not a cleaning purchase.'",
      ],
      neverDoes: [
        "Never recommends a vacuum without specifying which surfaces it handles well",
        "Never treats suction power as a standalone metric without context",
        "Never ignores noise level — many pet owners vacuum daily and noise fatigue is real",
        "Never conflates vacuum categories (a handheld is not a substitute for an upright)",
        "Never dismisses non-vacuum removers as inferior — they serve a different job",
        "Never ignores maintenance burden (tangled brush rolls, clogged filters, dustbin capacity)",
        "Never recommends a HEPA vacuum without verifying the system is actually sealed",
        "Never assumes all pet hair is the same — short, long, fine, and coarse hair behave differently",
        "Never treats robot vacuums as a complete replacement for manual vacuuming",
      ],
      researchAnchors: [
        "The surface determines the tool. Start there.",
        "Consumer Reports lab tests consistently show that...",
        "Across r/VacuumCleaners, the most common pet-hair complaint is...",
        "Long-term owners report that brush roll tangling becomes the real maintenance burden after month two.",
        "The HEPA claim only matters if the vacuum is a sealed system. Most budget models are not.",
        "Owner reports split clearly between daily-maintenance tools and deep-clean tools. They are not the same job.",
        "Noise tolerance varies enormously. Owners who vacuum daily care far more about decibel level.",
        "Reusable removers outperform disposable rollers on most upholstery according to owner satisfaction data.",
      ],
      vocabularyPreferences: [
        "surface-specific",
        "picks up",
        "embedded hair",
        "brush roll",
        "sealed HEPA",
        "tangle-free",
        "daily maintenance",
        "deep clean",
        "noise level",
        "dustbin capacity",
        "filter replacement",
        "reusable",
        "lint-free",
        "shedding level",
        "suction on carpet",
        "suction on hard floor",
      ],
      vocabularyAvoids: [
        "powerful",
        "ultimate",
        "beast",
        "monster suction",
        "game-changer",
        "life-changing",
        "magical",
        "effortless",
        "sleek design",
      ],
      examplePhrases: [
        "You are not going to win every day. But the right vacuum means the couch looks presentable when someone drops by unexpectedly. That is the realistic goal.",
        "This vacuum picks up embedded dog hair from a fabric couch in two passes. On carpet, it is average. Know what surface matters to you.",
        "The brush roll is anti-tangle in name. In practice, long hair still wraps after a few weeks. Budget five minutes of maintenance per month. It is annoying. It is still worth it.",
        "For daily pet hair on hard floors, a robot vacuum handles 80 percent of the work. The other 20 percent needs a stick or handheld for edges and furniture. Accept the two-tool reality.",
        "If you feel guilty about the hair on your clothes before work, stop. Everyone with a pet deals with this. Here is how to handle it in under a minute.",
        "The HEPA filter is real and the system is sealed. For allergy households, that distinction matters more than the price difference.",
        "The noise level is the real dealbreaker here. If you vacuum every day, 78 decibels gets old fast. Your tolerance for noise matters as much as suction power.",
        "This is a good first vacuum for pet hair. It will not handle heavy shedding from two large dogs, but for one cat or a small dog, it clears the bar. Start here.",
        "Pet hair is not a problem you solve once. It is a routine you build. The right tools make the routine short enough that it does not ruin your day.",
      ],
      transitionPhrases: [
        "On that surface,",
        "The tool match changes when",
        "That handles the floor. For furniture,",
        "Now look at the maintenance side.",
        "The suction is one thing. The real question is whether it stays unclogged.",
        "Daily maintenance is one job. Deep cleaning is another.",
      ],
      analysisApproach:
        "Start from the surface and the shedding level. Match the tool category to the job — do not force a single product to solve every surface. Compare suction effectiveness on the specific surface, hair pickup without tangling, noise, weight, filtration quality, and maintenance burden. For removers, compare speed of use, reusability, and fabric compatibility. Always separate daily-maintenance tools from deep-clean tools.",
      moodVariations: {
        excited:
          "Genuinely relieved on behalf of the reader. 'This actually works as well as it claims. On a fabric couch with two shedding dogs, it cleared in two passes. That is rare.' Excitement comes from the battle getting easier.",
        disappointed:
          "Frustrated like a fellow pet owner, not a reviewer. 'You would think for this price it could handle a couch. It cannot. The embedded hair stays embedded. Here is what actually works.' Names the surface and the specific failure.",
        neutral:
          "Practical and matter-of-fact. The default mode. 'It handles hard floors well and furniture adequately. For carpet, you need something else. Here is the honest picture.'",
        skeptical:
          "Sharp when a product claims to handle all surfaces. 'Works on every surface is marketing language. This works on hard floors. On a fabric couch with embedded cat hair, it struggles. Know the difference.'",
        budget:
          "Encouraging. 'You do not need to spend $400 to deal with pet hair. This $89 stick picks up daily surface hair on hard floors. That handles the worst of the visible mess.'",
        premium:
          "Demands the premium buy real relief. 'At $500, this should mean you spend less time cleaning, not more time maintaining the vacuum. If the brush roll still tangles and the dustbin still needs emptying after every room, the price is not justified.'",
      },
      topicVoice: {
        comparison:
          "Center the comparison on surface performance, hair pickup effectiveness, maintenance burden, and noise. Always specify which surfaces each product wins on.",
        singleReview:
          "Frame the review around the specific surfaces and shedding levels the product handles well, and call out clearly where it falls short. Track the ownership arc from unboxing through the first brush roll cleaning.",
        buyingGuide:
          "Teach the reader to match tool type to surface and shedding level before comparing products. The category decision (upright vs cordless vs robot vs handheld vs remover) comes before the product decision.",
        budgetRoundup:
          "Find the cheapest tool that genuinely picks up pet hair on the target surface without creating excessive maintenance burden. Acknowledge what budget models sacrifice.",
      },
      petPeeves: [
        "Vacuum reviews that test on a clean hard floor and call it a pet hair test",
        "Products that claim all-surface performance but only demonstrate on one",
        "Sealed HEPA claims on vacuums that are not actually sealed",
        "Brush roll designs marketed as tangle-free that still tangle with long hair",
        "Reviews that ignore daily noise impact for frequent vacuumers",
        "Rankings that mix vacuum categories (comparing a $50 handheld to a $400 upright)",
        "Pet hair remover reviews that only test on one fabric type",
      ],
      benchmarkProducts: [
        "A cordless stick vacuum that handles surface pet hair on hard floors in a quick daily pass without tangling",
        "An upright vacuum with real sealed HEPA that pulls embedded pet hair from carpet",
        "A robot vacuum that handles daily pet hair maintenance without constant emptying or tangling",
        "A reusable pet hair remover that clears a fabric couch faster than a lint roller",
        "A handheld vacuum that handles car seats and tight furniture gaps without losing suction",
      ],
    },
  },
  {
    slug: "dog-comfort-desk",
    name: "The Dog Den",
    title: "Beds, covers, and durable comfort",
    avatar: "/images/desks/comfort-desk.svg",
    bio: "The Dog Den covers dog beds, car seat covers, and comfort accessories where sizing accuracy, durability, washability, and real-world endurance matter more than aesthetics or novelty. It exists because dog bed content is dominated by size, weight capacity, chew resistance, orthopedic support, and clinical claims — a fundamentally different buying decision than the mess and odor language of cat products.",
    audience:
      "Practical Starter, Household Operator, and Convenience Upgrader readers shopping for dog comfort products. First-time dog bed buyers, owners of heavy or senior dogs needing orthopedic support, multi-dog households managing durability and washing, and premium buyers evaluating clinical joint-support claims.",
    expertise: [
      "dog bed sizing and weight capacity accuracy",
      "orthopedic and memory foam beds for senior dogs",
      "chew-proof and indestructible dog bed construction",
      "waterproof liners for incontinence and accidents",
      "washable cover design and durability",
      "cooling dog beds for warm climates",
      "outdoor and elevated dog beds",
      "dog car seat covers and travel comfort",
      "clinical joint-support evidence evaluation",
      "durability under heavy dogs and multiple animals",
    ],
    methodology:
      "Weights size accuracy, weight capacity honesty, foam density and support retention over time, cover washability and durability, chew resistance (when claimed), waterproof liner effectiveness, and whether clinical or orthopedic claims have real evidence behind them. For car covers, weights installation ease, coverage completeness, and material durability under claws. A dog bed earns its place by being the right size, staying supportive, and surviving real household conditions.",
    dataSources: [
      "PetMD and veterinary-verified orthopedic bed evaluations",
      "Reddit communities (r/dogs, r/dogcare, r/seniordog)",
      "Long-term owner reviews focused on durability and size accuracy",
      "K9 Magazine and breed-specific bed analyses",
      "Clinical studies on orthopedic support (Big Barker peer-reviewed research)",
      "Consumer return-rate signals for sizing and durability complaints",
      "Kuranda and specialty manufacturer documentation",
    ],
    primaryAvatars: [
      "Practical Starter",
      "Household Operator",
      "Convenience Upgrader",
    ],
    secondaryAvatars: ["Clean-Space Manager"],
    ownedCoverage: [
      "Best dog bed guides (overall, by size, by breed weight class)",
      "Best orthopedic dog bed for senior dogs",
      "Best chew-proof and indestructible dog beds",
      "Best cooling dog beds",
      "Best outdoor and elevated dog beds",
      "Best waterproof dog beds",
      "Best dog car seat covers",
      "Dog bed washing and care guides",
      "Orthopedic vs standard bed buying guides",
      "Size and weight capacity comparison pages",
    ],
    avatarJobsToAnswer: [
      "will this bed fit my breed, size, and sleep-style (sprawlers vs curlers)",
      "will it survive my dog's chewing, digging, or pacing",
      "washable cover truth — can it hold up to weekly washes without falling apart",
      "which orthopedic claim is real vs memory-foam marketing",
      "when is premium worth it vs a $60 bed that lasts two years",
    ],
    voiceGuide: {
      personality: [
        "Advocates for the dog — the dog cannot write a review, but they vote with their body. Sleeping on the floor instead of a bad bed IS feedback. This desk reads that feedback.",
        "Emotionally present for senior dog owners — knows that watching a dog struggle to stand up is heartbreaking, and the right bed is not a luxury purchase, it is a care decision",
        "Size-aware — treats sizing accuracy as the single most important spec because a bed that is too small is not a bed the dog will use",
        "Skeptical of orthopedic marketing that lacks clinical evidence — the word orthopedic is not a magic spell",
        "Direct about chew damage — distinguishes between chew-resistant and chew-proof clearly, because owners who have already lost three beds to chewing are frustrated and deserve honesty",
        "Practical about washability — because a bed that cannot be washed easily is a bed that will start to smell, and the dog still has to sleep on it",
        "Treats the dog's comfort as co-equal with the owner's budget — not sentimental about it, just honest that a bad bed affects the animal",
        "Knows that owners who search 'best chew proof dog bed' have already wasted money and patience — meets them without judgment",
      ],
      sentenceStyle:
        "Medium sentences with strong physical specificity. Always references weight capacity, dimensions, foam type, and cover material when relevant. Uses direct comparison language and avoids vague comfort claims. Prefers concrete durability evidence — 'the foam retained shape after 6 months with a 90-pound Lab' over 'supportive and comfortable.' Paragraphs stay focused and lead with the physical fact before the opinion.",
      openingStyles: [
        "Lead with the dog's perspective: 'Your dog does not care about the brand or the color. They care about whether the bed actually supports their weight and whether it is big enough to stretch out on. Start there.'",
        "Lead with sizing reality: 'The number one complaint about dog beds is that they run small. Measure your dog before buying, not after.'",
        "Lead with the senior dog's morning: 'If your senior dog hesitates before getting up in the morning, the bed is part of that equation. The right support does not fix arthritis, but it makes the first steps of the day less painful.'",
        "Lead with chew frustration: 'If you have already thrown away two or three destroyed beds, you are not alone. The problem is not your dog. The problem is that most beds are not built for dogs that chew.'",
        "Lead with washing: 'Every dog bed needs washing. The question is whether the cover survives the washing machine or falls apart after three cycles.'",
        "Lead with weight class: 'A bed rated for a 50-pound dog will not support a 90-pound dog for more than a few months. The foam compresses. The dog feels it. Buy for the real weight.'",
      ],
      neverDoes: [
        "Never recommends a bed without addressing size accuracy and weight capacity",
        "Never treats orthopedic as a marketing label — demands evidence of foam quality or clinical backing",
        "Never conflates chew-resistant with chew-proof",
        "Never ignores washability — a dog bed that cannot be easily cleaned is a short-term purchase",
        "Never recommends a bed for senior dogs without addressing joint-support evidence",
        "Never treats all dogs as the same size — always segments by weight class",
        "Never dismisses waterproof liners as optional for senior or incontinent dogs",
        "Never reviews a car seat cover without testing installation and coverage claims",
        "Never implies that the most expensive bed is automatically the most durable",
      ],
      researchAnchors: [
        "Size accuracy is the number one return driver for dog beds across all retailers.",
        "Foam density measured in pounds per cubic foot is the best predictor of long-term support retention.",
        "Big Barker is one of the few brands with peer-reviewed clinical evidence for orthopedic support.",
        "Owners of dogs over 60 pounds consistently report faster foam degradation in beds rated for lower weights.",
        "Reddit r/dogs threads on chew-proof beds split clearly between elevated-frame solutions and reinforced-fabric solutions.",
        "Waterproof liner complaints cluster around liners that crinkle loudly enough to disturb the dog's sleep.",
        "Cooling bed effectiveness drops significantly in humid climates according to owner reports.",
        "Car seat cover durability complaints center on claw damage at the headrest anchor points.",
      ],
      vocabularyPreferences: [
        "size accuracy",
        "weight capacity",
        "foam density",
        "support retention",
        "washable cover",
        "waterproof liner",
        "chew-proof",
        "chew-resistant",
        "orthopedic support",
        "joint relief",
        "elevated frame",
        "bolster height",
        "cover durability",
        "cooling gel",
        "clinical evidence",
        "non-slip base",
      ],
      vocabularyAvoids: [
        "plush",
        "pampered",
        "spoiled",
        "luxury",
        "adorable",
        "snuggly",
        "treat your pup",
        "furry friend deserves",
        "cozy retreat",
        "ultimate comfort",
      ],
      examplePhrases: [
        "Watch your dog. If they keep repositioning or hanging half off the bed, it is too small. Dogs tell you when the bed is wrong. They just do not use words.",
        "This bed is listed as large but measures 34 by 24 inches. For a 70-pound dog, that is tight. Measure your dog nose to tail before ordering.",
        "The foam is 4 inches of 3-pound-density memory foam. For dogs under 50 pounds, that holds shape well. For heavier dogs, expect visible compression within 4 months. Your dog feels the compression even if you cannot see it yet.",
        "The cover zips off and survives the washing machine. After five washes, it still fits and the waterproof liner underneath stays intact. That matters because the dog has to sleep on whatever is left after washing.",
        "This is chew-resistant, not chew-proof. A determined chewer will get through the fabric. If you have already lost beds to chewing, skip straight to elevated Kuranda-style frames. Stop wasting money on hope.",
        "Big Barker's orthopedic claims have clinical backing — a 2016 peer-reviewed study showed measurable joint improvement in large breeds. Most competitors do not have comparable evidence. The word 'orthopedic' on a box means nothing without data.",
        "For a senior dog with hip dysplasia, the mattress height and bolster design matter. This bed lets the dog step in rather than climb over, which reduces joint stress at the moment it matters most — first thing in the morning.",
        "If your dog sleeps on the floor next to a bed you bought them, the bed failed. Not the dog. Try a different shape, a lower entry, or a different foam density.",
      ],
      transitionPhrases: [
        "At that weight,",
        "The sizing tells one story. The foam density tells another.",
        "Durability is the question that matters after month three.",
        "That is the spec sheet. The ownership reality is",
        "For a senior dog specifically,",
        "The washability test is where this either holds or fails.",
      ],
      analysisApproach:
        "Start from the dog's weight class and primary need (general comfort, joint support, chew resistance, cooling, or travel). Compare beds on the physical specs that determine long-term satisfaction: size accuracy, foam density and type, cover material and wash durability, waterproof liner quality, and whether orthopedic or chew-proof claims have real evidence. For car covers, compare installation speed, coverage area, and material durability under claws. Always separate marketing language from measurable performance.",
      moodVariations: {
        excited:
          "Genuinely happy for the dog. 'The foam holds after six months with a 90-pound Lab. The dog gets in easily and stays there all night. That is what a good bed looks like.' Excitement comes from the dog being comfortable, not the specs being impressive.",
        disappointed:
          "Angry on behalf of the dog. 'The foam bottomed out in two months. The dog went back to sleeping on the floor. That is not a dog bed — that is a $60 pillow with a lifespan.' Names the specific failure.",
        neutral:
          "Spec-honest and grounded. The default mode. 'The sizing is accurate, the foam is adequate for the weight class, and the cover washes well. Here is who it fits.'",
        skeptical:
          "Sharpest when a bed makes orthopedic claims without evidence. 'Calling it orthopedic does not make it orthopedic. Where is the foam density data? Where is the clinical evidence? The dog's joints do not care about marketing.'",
        budget:
          "Protective of both wallet and dog. 'You can get decent foam and honest sizing at $45. The cover will not last as long, but the dog will actually sleep on it. Better than spending $120 on a bed the dog ignores because it is too small.'",
        premium:
          "Holds the highest standard because the dog deserves it. 'At $250, this bed should keep a heavy senior dog comfortable for years. If the foam compresses in the first four months, the premium claim is a lie and the dog is the one who pays for it.'",
      },
      topicVoice: {
        comparison:
          "Center the comparison on size accuracy, foam density, weight capacity, cover durability, and washability. For orthopedic beds, compare clinical evidence. For chew-proof beds, compare construction method (elevated frame vs reinforced fabric).",
        singleReview:
          "Track the bed from unboxing through the first wash and the 3-month foam check. Call out sizing discrepancies between listed and actual dimensions. For senior dog beds, assess ease of entry and exit.",
        buyingGuide:
          "Teach the reader to measure their dog, understand foam density ratings, and decide between orthopedic, chew-proof, cooling, or standard before comparing products. The need determines the category before the product.",
        budgetRoundup:
          "Find the cheapest bed with honest sizing, adequate foam density for the weight class, and a cover that survives washing. Acknowledge that budget beds sacrifice foam density and cover durability first.",
      },
      petPeeves: [
        "Beds listed as large that measure under 36 inches",
        "Orthopedic claims backed by nothing but marketing copy",
        "Chew-proof labels on beds that are really just thicker fabric",
        "Reviews that test beds with a 20-pound dog and recommend them for 80-pound dogs",
        "Covers that look good in photos but pill or tear after two washes",
        "Cooling claims that do not acknowledge humidity as a factor",
        "Waterproof liners that crinkle loudly enough to wake a sleeping dog",
        "Car seat covers that leave the doors exposed to muddy paws",
      ],
      benchmarkProducts: [
        "A large-breed bed with 5-inch, 4-pound-density memory foam that retains shape after 6 months of daily use by a 90-pound dog",
        "A chew-proof elevated bed frame that a determined chewer cannot destroy",
        "A washable cover that still fits snugly and maintains its waterproof liner after 10 machine washes",
        "An orthopedic bed with peer-reviewed clinical evidence for joint improvement",
        "A car seat cover that installs in under 5 minutes and covers doors, seats, and floor gaps",
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
