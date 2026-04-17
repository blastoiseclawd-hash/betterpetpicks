# BetterPetPicks.com

This file is the canonical instruction entrypoint for site-level guidance.
Keep `CLAUDE.md` as a thin compatibility shim so Claude Code and Codex read the same site rules.

## Mission

Build a practical pet-home utility buying-guide site that helps readers choose lower-mess, lower-friction products for real homes. BetterPetPicks covers 5 validated clusters: cat litter & litter boxes, cat water fountains, cat gear (trees, carriers, harnesses), pet hair cleanup (vacuums, removers), and dog beds & comfort.

## Non-Negotiable Rules

1. **Exact prices only.** Use real scraped prices or "Check current price ->". Never ranges.
2. **Customer-first recommendations.** Commission is a tiebreaker, never the driver.
3. **No internal metrics exposed.** Readers never see KD, commission %, or internal niche scoring.
4. **No YMYL drift.** Wave one stays out of pet food, medical claims, supplements, breed-specific care, and health advice.
5. **FTC disclosure** belongs on every page with affiliate links.
6. **Real tradeoffs only.** Call out dust, smell, cleanup hassle, refill cost, noise, and failure modes when they matter.
7. **No AI slop.** Use the repo skills and keep claims grounded in real source material.
8. **Avatar research is a hard gate.** Do not finalize desks, keyword mapping, or the launch page roadmap until `data/avatar-research.md` is completed with real sources.

## Skills

Before starting any task, scan the parent repo skills in `.claude/skills/` and follow the matching workflow exactly. Use `write-as-editorial-desk` for writing, `build-site-pages` for route/component work, `design-site-pages` for layout polishing, and `git-repo-management` for commits and pushes.

## Editorial Desks

`src/data/authors.ts` remains the legacy-compatible filename, but the file stores desk profiles rather than fictional individual reviewers.

| Desk | Focus | Writes for | Voice | Emotional Posture |
|------|-------|-----------|-------|-------------------|
| **Cat Care Essentials Desk** | Simple, low-mess household defaults | Practical Starter + Clean-Space Manager | Calm, reassuring, gentle permission | REASSURANCE — friend who adopted a cat two years ago and remembers the confusion |
| **Multi-Cat Home Desk** | Higher-load odor and value tradeoffs | Household Operator | Knowing, cost-honest, pressure-tested | SOLIDARITY — running the same chaotic household, never judges the number of cats |
| **Upgrade & Automation Desk** | Premium convenience and payoff analysis | Convenience Upgrader | Crisp, conditional, failure-mode-aware | SKEPTICAL INVESTOR — burned by hype before, demands proof before opening wallet |
| **Pet Cleanup Desk** | Pet hair vacuums, removers, shedding tools | Practical Starter + Clean-Space Manager | Validating, surface-specific, battle-tested | PERMISSION — pet hair is a daily war, not a character flaw |
| **Dog Comfort Desk** | Dog beds, car covers, travel comfort | Practical Starter + Household Operator | Dog-first, spec-honest, protective | ADVOCACY — the dog cannot write a review, this desk reads their body language |

All 5 desks have full voice guides in `authors.ts` with distinct emotional postures (reworked 2026-04-16). Each desk meets the reader at a different emotional entry point. Content can be written for any cluster.

## Customer Avatars (Research-Backed, 5-Cluster)

Research date: 2026-04-16. Full artifact: `data/avatar-research.md`.

- **Practical Starter**: Newer or simpler pet households that want clear defaults, low regret, and less mess without learning a hobby.
- **Household Operator**: Higher-load or multi-pet households that care most about scaling cleanup, odor control, and recurring-cost honesty.
- **Clean-Space Manager**: Space-sensitive or cleanliness-sensitive households searching for low-dust, low-tracking, low-residue, easy-to-clean, home-fitting products.
- **Convenience Upgrader**: Premium buyers willing to pay for automation or better materials, but only if the time-saving payoff is real and evidence-backed.

### Cluster Expressions

| Avatar | Cat Litter | Cat Fountains | Cat Gear | Pet Hair | Dog Beds |
|---|---|---|---|---|---|
| Practical Starter | Low-Mess Starter | Easy-Flow Starter | First-Gear Buyer | First Hair Tool Buyer | First Dog Bed Buyer |
| Household Operator | Multi-Cat Operator | Multi-Cat Flow Manager | Multi-Cat Gear Manager | Shedding Scale Manager | Multi-Dog/Heavy-Use Manager |
| Clean-Space Manager | Dust-Sensitive Space Manager | Clean-Fountain Seeker | Home-Fit Gear Buyer | Allergy-Aware Cleaner | Clean-Home Dog Bed Buyer |
| Convenience Upgrader | Automation Evaluator | Premium Fountain Evaluator | Premium Gear Evaluator | Premium Vacuum Evaluator | Premium Comfort Evaluator |

### Desk-Avatar Mapping

| Desk | Primary Avatars | Clusters |
|---|---|---|
| Cat Care Essentials | Practical Starter, Clean-Space Manager | Cat Litter (core), Cat Fountains, Cat Gear |
| Multi-Cat Home | Household Operator | Cat Litter (multi-cat), Cat Fountains (multi-cat) |
| Upgrade & Automation | Convenience Upgrader | Cat Litter (automation), Cat Fountains (premium), Cat Gear (premium) |
| Pet Cleanup | Practical Starter, Clean-Space Manager, Household Operator | Pet Hair Cleanup |
| Dog Comfort | Practical Starter, Household Operator, Convenience Upgrader | Dog Beds & Comfort |

## Content Categories

Cat Litter & Litter Boxes, Cat Water Fountains, Cat Gear, Pet Hair Cleanup, Dog Beds & Comfort

## Affiliate Programs

| Program | Status | Link Code |
|---------|--------|-----------|
| Amazon Associates | Active | tag: betterpetpicks-20 |

## Working Rules

- Keep `siteConfig` authoritative for branding, disclosures, nav, and category structure.
- Treat `src/data/content/**` as reader-facing content and keep truthfulness high.
- Use `src/data/keyword-map.ts` as the route and content inventory source of truth once Phase 3 begins.
- Prefer shared components and config updates over one-off page patterns.
- All 5 clusters are research-validated (avatar research pass completed 2026-04-16). Content can be built for any cluster once the owning desk has a full voice guide.
