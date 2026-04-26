# Intent-hierarchy decision: best-looking-cat-tree

**Site:** betterpetpicks
**Slug:** `best-looking-cat-tree` (renamed from canonical `mau-cat-tree` — see slug-rename note below)
**Target keyword:** `best looking cat tree` (vol 6100, primaryKd 3, TP 12000)
**Cluster:** cat-gear
**Decision date:** 2026-04-26

## Role declaration

`topical_authority`. Aesthetic/style intent — reader wants a cat tree they will not be embarrassed to put in a living room. They are choosing on visible material, silhouette, color, and home-fit, not on wood-stability ratings or breed capacity.

The page does not compete for commercial-roundup intent. It strengthens the cat-gear cluster anchored by `/best-cat-tree` (which targets the broader functional-roundup intent).

## SERP intent-match check

- Live SERP for `best looking cat tree` (Apr 2026) returns aesthetic/design-led editorial: The Spruce Pets aesthetic-list articles, Apartment Therapy and Houzz design roundups, premium furniture-look brand sites (Tuft + Paw, Mau, Pidan, Vesper), and Reddit threads in r/Catastrophe / r/cathouseplans focused on style.
- Functional-roundup pages (Wirecutter, Cats.com category roundups) do not rank above the aesthetic editorial. Intent is informational + style, not transactional.
- BPP's `/best-cat-tree` does not target this keyword — that page targets the broad functional `best cat tree` query (stability, height, capacity). No cannibalization. The pages serve different reader jobs.

## Variable-swap differentiation test

N/A — informational page, not a `best X for <variable>` page.

## Slug rename

Canonical row stored slug `mau-cat-tree` (Mau being a furniture-look cat-tree brand the auto-roadmap appears to have keyed off). The keyword is `best looking cat tree`, not `mau cat tree`. The slug must match the keyword for on-page SEO and reader-comprehension reasons.

Rename to `best-looking-cat-tree`. Update three locations:
1. `sites/betterpetpicks/data/guide-opportunities.json` — entry `slug` field
2. `sites/betterpetpicks/data/daily-launch-queue-180.json` — entry `slug` field
3. `sites/betterpetpicks/src/data/keyword-map.ts` — entry `slug` field (line ~1013)

The `mau-cat-tree` slug was never wired to a route. No redirect needed.

## Desk assignment

`cat-care-essentials-desk` ("The House Cat") per canonical row. Confirmed by the desk's `ownedCoverage` list:
- "Home-fit and apartment-friendly gear pages"
- "First cat tree guides and best overall tree picks"

The desk's voice posture (REASSURANCE — calm, lead with stability and home fit, normalize uncertainty) matches an aesthetic page that still has to call out wobble and assembly hassle as the real failure modes — even style-conscious buyers don't want a $300 tree that tips over.

Avatar match: Practical Starter (first cat tree, low regret) + Clean-Space Manager (looks acceptable in a living room) — both core House Cat avatars per the cluster matrix.

## Information-gain wedge

The aesthetic-editorial SERP is dominated by lifestyle blogs that show pretty pictures and link affiliate. The wedge for BPP:
- Aesthetic AND honest about which "looking" features create real ownership friction (carpet bases that fade, sisal that mats, design-first trees that wobble).
- Real material breakdown: which finishes age well, which look great in unboxing photos but show wear after six months.
- Home-fit honesty: which trees actually disappear into a living room vs which still look like a cat tree just painted beige.

## Resolution

**BUILD** — topical_authority, The House Cat desk (cat-care-essentials-desk), cat-gear cluster.

Cadence: previous LIVE pages have skewed money-page-heavy. A support-guide pick honors the 3M:1S:1L cadence pattern.

Override reason for next-page-pick gate: `litter-robot` SKIP per separate decision doc (cannibalization with /best-automatic-litter-box). This is the highest-priority non-cannibalizing row.
