# BetterPetPicks.com

This file is the canonical instruction entrypoint for site-level guidance.
Keep `CLAUDE.md` as a thin compatibility shim so Claude Code and Codex read the same site rules.

## Mission

Build a practical cat-care buying-guide site that helps readers choose lower-mess, lower-friction products for real homes. Recommendations stay customer-first, transparent, and tightly focused on cat-home utility products.

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
| **Cat Care Essentials Desk** | Simple, low-mess defaults | First-time cat owners | Direct, practical, uncluttered |
| **Multi-Cat Home Desk** | Odor control and value over time | Multi-cat households | Honest, comparative, pressure-tested |
| **Upgrade & Automation Desk** | Premium convenience gear | Convenience-oriented shoppers | Crisp, skeptical, payoff-focused |

These desk boundaries are the launch framework. Phase 2 avatar research may refine them before the first manual content wave is planned.

## Customer Avatars (Research-Backed)

Pending Phase 2. Do not treat the current seed-avatar assumptions as validated until `data/avatar-research.md` is replaced with source-backed research.

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
