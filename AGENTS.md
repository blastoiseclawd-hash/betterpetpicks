# BetterPetPicks.com

This file is the canonical instruction entrypoint for site-level guidance.
Keep `CLAUDE.md` as a thin compatibility shim so Claude Code and Codex read the same site rules.

## Mission

Build a practical pet-home utility buying-guide site that helps readers choose lower-mess, lower-friction products for real homes. BetterPetPicks launches cat-first, but the long-term brand can expand into other pet-home utility categories once those categories have their own research backing.

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

| Desk | Focus | Writes for | Voice |
|------|-------|-----------|-------|
| **Cat Care Essentials Desk** | Simple, low-mess household defaults | Practical Starter + Clean-Space Manager | Direct, calm, cleanup-first |
| **Multi-Cat Home Desk** | Higher-load odor and value tradeoffs | Household Operator | Honest, comparative, pressure-tested |
| **Upgrade & Automation Desk** | Premium convenience and payoff analysis | Convenience Upgrader | Crisp, skeptical, worth-it focused |

These desks are built for a broader pet-home utility brand, but the launch examples, ownership, and first-wave roadmap remain cat-first until later category research expands the site responsibly.

## Customer Avatars (Research-Backed)

- **Practical Starter**: Newer or simpler pet households that want clear defaults, low regret, and less mess without learning a hobby.
- **Household Operator**: Higher-load or multi-pet households that care most about scaling cleanup, odor control, and recurring-cost honesty.
- **Clean-Space Manager**: Space-sensitive or cleanliness-sensitive households searching for low-dust, low-tracking, low-residue, easy-to-clean products.
- **Convenience Upgrader**: Premium buyers willing to pay for automation or better materials, but only if the time-saving payoff is real.

Cat-first launch expressions:
- `Practical Starter` -> `Low-Mess Starter`
- `Household Operator` -> `Multi-Cat Operator`
- `Clean-Space Manager` -> `Dust-Sensitive Space Manager`
- `Convenience Upgrader` -> `Convenience Upgrader`

Desk implication for wave one:
- Keep the current three-desk structure.
- `Cat Care Essentials Desk` should explicitly own the cat-launch versions of `Practical Starter` and most `Clean-Space Manager` pages.
- `Multi-Cat Home Desk` should own cat-launch `Household Operator` content.
- `Upgrade & Automation Desk` should own self-cleaning litter box, Litter-Robot-adjacent, and premium fountain content.

## Content Categories

Cat Litter, Water Fountains, Odor Control, Litter Area Cleanup, Pet Hair Cleanup

## Affiliate Programs

| Program | Status | Link Code |
|---------|--------|-----------|
| Amazon Associates | Active | tag: betterpetpicks-20 |

## Working Rules

- Keep `siteConfig` authoritative for branding, disclosures, nav, and category structure.
- Treat `src/data/content/**` as reader-facing content and keep truthfulness high.
- Use `src/data/keyword-map.ts` as the route and content inventory source of truth once Phase 3 begins.
- Prefer shared components and config updates over one-off page patterns.
- Keep the launch cluster tightly cat-care-focused until the first manual baseline is established.
- Do not expand into non-cat pet categories without a fresh research pass for that category first.
