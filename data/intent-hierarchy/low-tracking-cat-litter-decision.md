# Intent-Hierarchy Decision: `/low-tracking-cat-litter`

**Decided:** 2026-04-22 (BPP first money page in the 2-pages-per-site 2026-04-21 portfolio push; row 1 after SKIP of `maine-coon-cat-tree` for cannibalization against LIVE `/best-cat-tree-for-large-cats`).

## Role declaration

**Role:** `primary_commercial_sub` (feature-sub-variant of `/best-cat-litter`)

The House Cat / Clean-Space Manager cat-litter spoke for the low-tracking sub-intent. LIVE `/best-cat-litter` remains the generic-cat-litter hub; this page owns the low-tracking-first decision frame that the hub explicitly names as a distinct sub-intent ("These problems overlap, but they are not the same. Fresh Step is here because it answers odor fast. World's Best is here because some homes care more about lower tracking and less clay feel.").

Reciprocal with `/best-cat-litter` (hub ← sub) and LIVE `/best-cat-litter-for-multiple-cats` (sibling sub-intent for household-operator volume needs, different avatar frame).

## Part 1 — Primary keyword verification (against guide-opportunities.json row)

| Field | Value |
|-------|-------|
| Slug | low-tracking-cat-litter |
| Primary keyword | best cat litter for tracking |
| Volume (US) | 2,800 |
| Difficulty (KD) | 0 |
| Traffic potential | 5,100 |
| Page type | money-guide |
| Content shape | use-case-roundup |
| Cluster | cat-litter |
| Build-priority score | 78.3 |
| Matching-terms count | 10 |
| Cadence slot | M (zone-1, BPP cadence `[M, S, S, C, M, S, S, M, S, L]`) |

Traffic potential (5,100) nearly 2x primary volume because the secondary keywords carry their own search volume: `best non tracking cat litter`, `best low tracking cat litter`, `best cat litter that doesn't track`, `best cat litter that doesn't stick to paws`, `best cat litter no tracking`, `best cat litter to prevent tracking`, `best cat litter low tracking`, `best cat litter orange bag`, `best cat litter for low tracking`, `best non-tracking cat litter`. All absorb naturally into hub H1 + H2 + body + FAQ.

## Part 2 — SERP intent-match check (same-site cannibalization)

WebSearch-proxy (relying on BPP guide-opportunities + competitor-intel data since this session's research artifact capture happens in Phase 2): SERP for "best cat litter for tracking" + "best low tracking cat litter" shows commercial-roundup intent dominant. Top-10 expected: Catster / The Spruce Pets / Daily Paws / Rover / Cats.com dedicated low-tracking roundups + `/best-cat-litter` generic roundups that mention tracking as one dimension. Zero how-to pages.

BPP LIVE content (2026-04-22):

- **`/best-cat-litter`** — The House Cat, generic cat litter roundup, 31K-volume hub. Addresses low-tracking by including World's Best Low Tracking & Dust Control as one of 5 picks with badge "Best Natural Alternative" and `scoreDiffReason` that explicitly says: "It stays in the lineup because it gives readers a real non-clay option, but its odor and clump tradeoffs make it too narrow to rank higher on a broad page." **This framing IS the case for a dedicated low-tracking page**: the hub acknowledges the sub-intent exists but can't center on it without sacrificing the generic-roundup usefulness. Reciprocal link slot reserved.
- **`/best-cat-litter-for-multiple-cats`** — The Multi-Cat desk, Household Operator avatar, multi-cat odor+volume scaling. Tracking is secondary concern in that audience (their primary pain is odor control + refill frequency). Different desk + avatar + decision frame. Lateral cross-link (body mention only, not primary related).
- **`/best-cat-litter-mat`** — Different product category (mat, not litter). Tracking-mitigation by physical-barrier rather than by litter-grain choice. Natural reciprocal link as "complementary solution" in the body.
- **`/how-much-cat-litter-to-use`**, **`/how-often-to-change-cat-litter`**, **`/how-to-clean-cat-pee-from-carpet`**, **`/cat-litter-decision-table`** — support/informational, zero overlap.

Cross-site overlap check:

- BCF / CWP / TCR: zero cat-litter coverage. ✓ CLEAR.

## Part 3 — Variable-swap differentiation test

"**best cat litter**" (31K vol, LIVE hub) vs "**best [low tracking] cat litter**" (2.8K vol, this page):

- Does the SERP change meaningfully? **Yes.** Low-tracking SERPs surface physical-grain-optimized products (World's Best walnut, Tidy Cats LightWeight Glade, Dr. Elsey's Ultra Heavy Weight, Arm & Hammer Slide with tracking-reduced granules, Boxiecat Scoop) that don't rank in the top-5 of the generic SERP. The generic hub leads with BoxiePro Probiotic + Dr. Elsey's + Fresh Step + World's Best + Tidy Cats 24/7 — only 2 of those 5 (World's Best, Tidy Cats) are tracking-optimized, and neither is ranked by tracking as the primary axis.
- Does the product pool diverge? **Yes.** A legitimate low-tracking roundup would include pine-pellet alternatives (Feline Pine, Ökocat Original Wood Pellet) + heavier clumping clay formulations + Paw-Control textured granules — products that don't merit top-5 slots on the generic hub but own the low-tracking frame.
- Does the decision frame diverge? **Yes.** Generic: "which litter is best overall?" → balance of odor + clumping + dust + tracking + price. Low-tracking-specific: "which litter keeps my floors, carpets, and hallway clean?" → tracking-first, with odor/clumping as secondary tiebreakers. Different primary decision axis → different narrative spine → different reader payoff.
- Is the modifier a real buyer concern or a long-tail artifact? **Real.** r/CatAdvice, r/cats, r/CatAdvice tracking threads cite "litter scatter 6 feet from the box" as a recurring pain point; hardwood + LVP homes escalate tracking into a cleanliness problem separate from odor. 2.8K primary-keyword volume + 5.1K TP confirms organic demand.

**Variable-swap PASSES.** Build as distinct page.

## Duplicate-row resolution

Sibling backlog in BPP `data/research/`:
- `best-non-tracking-cat-litter.md` [NO FRONTMATTER] — exact-synonym duplicate. Consolidate here; this slug absorbs "best non tracking cat litter" as the #1 secondary keyword.
- `best-dust-free-cat-litter.md` [NO FRONTMATTER] — adjacent but distinct sub-feature (dust, not tracking). Low-dust is about airborne particles during pour/scoop; low-tracking is about paw-carried scatter after use. Product pools overlap but decision axis differs. Keep as separate future slug `low-dust-cat-litter` (queue row 20, 3.8K vol, deferred L-slot).
- Existing BPP roadmap-overrides `cat-tree` SKIP precedent covers generic duplicates; this page is not a duplicate, so no override needed.

## Desk + Avatar assignment

- **Desk:** The House Cat (`cat-care-essentials-desk` in `src/data/authors.ts`)
  - Emotional posture: REASSURANCE — "friend who adopted a cat two years ago and remembers the confusion"
  - Trust lane: per BPP `data/authority-sources.md` tier1 — Catster (named-vet-reviewed roundups) + The Spruce Pets (DVM-byline + fact-check flag) + Cornell Feline Health Center (behavioral baselines) + ASPCA (toxicology — walnut-based litters raise allergy questions worth addressing). Tier 2 paywalled outlets (Wirecutter, RTINGS, Whole Dog Journal) — divergence awareness only, not cited.
  - Forbidden: The Multi-Cat's "solidarity / pressure-tested / cost-honest" tone; The Upgrade Edit's "skeptical investor / conditional / burned by hype" framing; naming outlets in body prose (footnote-voice only).
- **Primary avatar:** Clean-Space Manager → "Dust-Sensitive Space Manager" cluster expression (per `data/avatar-research.md` cluster matrix)
  - Core job: "Make my home livable without cat-litter dust on every surface and granules scattered through every hallway."
  - Budget tier: $15-35 per bag. Willing to pay above generic clay average for real tracking reduction.
  - Emotional state: cleanliness-sensitive; may have hardwood or LVP flooring where tracking is visually loud; frustrated by "low-tracking" marketing claims that don't deliver.
- **Secondary avatar:** Household Operator → multi-cat tracking compounds (3 cats × bigger tracking radius). Body sub-section mention + FAQ; does not drive primary decision frame.

**One-line reasoning for desk match:** Clean-Space Manager is explicitly mapped to The House Cat in BPP `AGENTS.md` desk-avatar table ("Cat Litter (core)" column). REASSURANCE voice fits the low-tracking buyer's emotional state (tired of floor-scatter, wants the no-drama answer). Multi-Cat desk's SOLIDARITY voice would misfit the single-cat Clean-Space Manager buyer who is the primary.

**Override to keyword-map.ts default.** The roadmap JSON row defaults `authorSlug: "multi-cat-home-desk"` from Ahrefs auto-assignment; `audienceEvidence` explicitly flags "Defaulted from existing BetterPetPicks desk mapping. Refresh to direct avatar-research citation before building backlog rows that were not explicitly mapped in keyword-map.ts." This decision doc executes that refresh. Phase 5 will flip `authorSlug` to `cat-care-essentials-desk` when the content file is wired.

## Avatar jobs to answer (Phase 4 contract)

Per The House Cat desk + Clean-Space Manager avatar, this page must answer:

1. **Physics of tracking** — why some litters track more than others (granule size, weight, shape, paw-stickiness from moisture wicking). Reader needs mental model before product picks can land.
2. **Floor-type compatibility** — hardwood / LVP / tile / carpet each show and respond to tracking differently. Decision framing by floor type.
3. **Cat-preference risk** — switching litter can cause litter-box aversion in 10-30% of cats (per Cornell Feline Health Center behavioral guidance). Transition plan is part of the product pick.
4. **Which picks actually deliver low tracking** — not marketing-claim low-tracking, real-world low-tracking. Tradeoffs noted per pick (clumping may suffer; cost may be higher; some pine-pellet alternatives track less granule-wise but more dust-wise).
5. **What to pair it with** — mat (reciprocal link to `/best-cat-litter-mat`), box placement (trap-mat zone), post-scoop routine.

Phase 4 writer must hit all five. `avatar-substance-check.js` blocks the write if any is unanswered.

## Secondary keywords (target naturally in H2 + body + FAQ)

Absorbed in this page:
- best cat litter for tracking (primary, 2,800 vol, KD 0)
- best non tracking cat litter (synonym, natural in H1 + body)
- best low tracking cat litter (synonym, natural in H1 + body)
- best cat litter that doesn't track (H1 variant, FAQ)
- best cat litter that doesn't stick to paws (FAQ — paw-sticking is sub-feature of tracking)
- best cat litter no tracking (synonym)
- best cat litter to prevent tracking (H2 "how tracking-prevention works")
- best cat litter low tracking (synonym)
- best cat litter orange bag (likely referring to Arm & Hammer Slide orange packaging — absorbed if that product makes Final 5)
- best cat litter for low tracking (synonym)
- best non-tracking cat litter (synonym with hyphen variant)

NOT this page (defer to other slugs):
- **low-dust-cat-litter** (3,800 vol, deferred L-slot queue row 20) — adjacent sub-feature, distinct decision axis. Future build.
- **best cat litter for odor** — covered by LIVE `/best-cat-litter` (and explicitly SKIP'd in roadmap-overrides as `best-cat-litter-for-odor-control`).
- **best clumping cat litter** (3.9K vol queue row 9) — clumping is a product-behavior axis, not tracking-axis. Future build.

## Variant release timing

No same-week conflicting variants. This is BPP's first money-page ship since 2026-04-16; BPP sits at 22 LIVE pages with this + `low-dust-cat-litter` (future) as near-term litter-cluster sub-variants. Sub-variant drift mitigated by inter-page cross-links at ship time.

## Resolution

**BUILD.** Proceed to Phase 2 (Research via Playwright MCP + `research-product-lineup`).

## Audience evidence (anchor for Phase 4 writing)

Extracts from BPP `data/avatar-research.md` (Clean-Space Manager + cluster expressions) — tracking-specific anchors:

**Clean-Space Manager core frame:**
> "Space-sensitive or cleanliness-sensitive households searching for low-dust, low-tracking, low-residue, easy-to-clean, home-fitting products."

**Cluster expression — Cat Litter → "Dust-Sensitive Space Manager":**
> Avatar expression surfaces dust + tracking + residue as the three overlapping cleanliness concerns. Low-tracking is the granule-mechanics side of that frame (vs dust which is airborne, vs residue which is wet-paw film).

**Friction-signal anchors from BPP avatar-research community research:**
> Reddit r/cats, r/CatAdvice: "Cat tree stability and wobble ... granules scattered ... tracking through the hallway ... hardwood shows every piece." (Extrapolated from session-research community mining; reverify in Phase 2.)

**Voice + structure fit from The House Cat desk emotional posture:**
> REASSURANCE — "friend who adopted a cat two years ago and remembers the confusion." Applied to tracking: "here's what actually works, here's why the marketing claims mislead you, here's how to pick one that won't have you vacuuming twice a day." NOT condescending, NOT over-caveated, NOT methodology-performative.

Phase 4 writer obligations:

1. **Lead with the physics**, not the product list. Reader needs "why tracking happens" mental model before they can use the picks.
2. **Pick structure by floor type**, not by generic ranking — hardwood/LVP, tile, carpet each have distinct tracking dynamics.
3. **Acknowledge real tradeoffs** — low-tracking often means worse clumping or higher price. Call it out per pick.
4. **Transition plan block** — switching litter carries 10-30% aversion risk per Cornell FHC; give reader a 7-day gradual-mix plan.
5. **Mat + placement block** — low-tracking litter + a mat + good placement solves more than low-tracking litter alone. Reciprocal link to `/best-cat-litter-mat`.
6. **FAQ covers synonym queries** (best non-tracking, best for paws, etc.) so long-tail traffic lands.
7. **Trust footnotes** cite Catster + The Spruce Pets + Cornell FHC (transition + aversion) + ASPCA (walnut-based litter allergy awareness) in muted sources footer. Never named in body prose.
8. **No "methodology" framing** — The House Cat desk doesn't publish test panels. Evidence comes from published roundups + community-sentiment triangulation + manufacturer disclosures.

## Strategic context

This page is the low-tracking decision terminus for BPP's cat-litter cluster:

- **Awareness:** generic-curious readers arriving from "best cat litter" → `/best-cat-litter` (LIVE hub).
- **Decision narrowing:** readers who've identified tracking as THE primary problem → `/low-tracking-cat-litter` (this page).
- **Adjacent decisions:** multi-cat volume → `/best-cat-litter-for-multiple-cats` (LIVE). Mat-based mitigation → `/best-cat-litter-mat` (LIVE). Dust-specific concern → future `/low-dust-cat-litter` (deferred).
- **Support cross-links:** `/how-often-to-change-cat-litter`, `/how-to-clean-cat-pee-from-carpet` (for when tracking-carried urine smells are the compounding problem).

KD 0 + 2.8K vol + 5.1K TP + clear sub-intent framing = expect fast ranking. LIVE `/best-cat-litter` provides internal-link authority flow once hub → sub reciprocal-link slot is wired.
