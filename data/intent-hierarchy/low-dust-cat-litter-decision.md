# Intent-Hierarchy Decision: low-dust-cat-litter

**Site:** betterpetpicks
**Slug:** /low-dust-cat-litter
**Decided:** 2026-04-26
**Decided by:** autonomous-page-build (build-next-page scheduled task)

---

## Slot + scoring (from rank:next)

- Cadence position: 1 of [M,S,S,C,M,S,S,M,S,L]
- Slot type: S (support-guide)
- buildPriorityScore: 61.0
- Primary keyword: "best cat litter for dust control"
- Primary volume: 3,800
- Traffic potential: 3,900
- Intent classification (DataForSEO 2026-04-25): mainIntent = informational
- Original pageType: money-guide → reclassified support-guide on 2026-04-25 to route to ad-revenue support content (SERP intent is informational, not commercial)

## Page role

- **role:** topical_authority (per guide-opportunities.json)
- **content shape:** explainer + decision-orientation (revised from JSON's "troubleshooting-fix" — the topic is not a fix workflow; it is a category education page that explains what makes a litter genuinely low-dust and which materials/brands deliver it)
- **canonicalParent:** /best-cat-litter (the cluster flagship money-guide)
- **commercial intent:** soft. Page exists to educate dust-sensitive readers; affiliate links are contextual to manufacturer references but not the primary monetization. Reader is one click away from /best-cat-litter for purchase intent.

## Desk + avatar

- **Desk:** `cat-care-essentials-desk` ("The House Cat") — REASSURANCE voice
- **Avatar primary:** Clean-Space Manager → "Dust-Sensitive Space Manager" expression
- **Avatar secondary:** Practical Starter (newer owners hit by surprise dust)
- **Override note:** guide-opportunities.json defaulted authorSlug=multi-cat-home-desk + audienceProfile=Multi-Cat Operator. That default is wrong. Per AGENTS feedback rule "Avatars Are Jobs, Not Product Buckets" + the BPP avatar-research.md, dust-sensitivity is a Clean-Space Manager job, not a Multi-Cat Operator job. Authority desk for low-dust pages is "The House Cat" per authors.ts ownedCoverage line "Low-dust and low-tracking litter pages." Multi-Cat overlaps only when the operator is both multi-cat AND dust-sensitive, but the primary job is dust control. Building this page on the Multi-Cat desk would force a voice mismatch.

## Cluster

- **clusterId:** cat-litter
- **siblings already LIVE:**
  - /best-cat-litter (cluster flagship money-guide)
  - /best-cat-litter-for-multiple-cats (cluster sibling)
  - /low-tracking-cat-litter (close intent neighbor — same "low-X-cat-litter" pattern; structurally a HubPage money-guide for tracking control)
  - /best-cat-litter-mat (adjacent but different surface)
  - /cat-litter-decision-table (filterable shoulder asset that already classifies 18 litters by dust/tracking/odor — link inbound + outbound)
  - /best-automatic-litter-box, /cat-litter-furniture, /how-much-cat-litter-to-use, /how-often-to-change-cat-litter (additional cluster pages)

## Cannibalization analysis

Existing on disk:
- `data/research/best-dust-free-cat-litter.md` (status COMPLETE, no `verified:` frontmatter, written 2026-04-16) — comprehensive dust research already done. NOT shipped to /best-dust-free-cat-litter route — no LIVE page.
- guide-opportunities.json contains both:
  - `low-dust-cat-litter` (today's pick, support-guide, vol 3800)
  - `best-dust-free-cat-litter` (separate row, line 11212, presumably money-guide)
  - `best-cat-litter-for-odor-control-and-dust-free` (another row)
  - `dust-free-cat-litter` (another row, line 3826)

Risk: shipping `low-dust-cat-litter` AND `best-dust-free-cat-litter` would create cannibalization. Both target dust-sensitive cat-litter searchers; Reddit shows users use "low-dust" and "dust-free" interchangeably.

**Decision:** `low-dust-cat-litter` becomes the canonical dust-sensitive page on BPP. The existing `best-dust-free-cat-litter` research artifact is repurposed as Phase 2 evidence input for THIS page; the standalone `best-dust-free-cat-litter` slug should be marked as a duplicate and not built. (Action item logged for separate decommission task — not in scope of this build.) `dust-free-cat-litter` and `best-cat-litter-for-odor-control-and-dust-free` rows are also overlapping; same logic applies. This page is the canonical destination.

The existing best-dust-free-cat-litter.md research will be re-verified against current sources in Phase 2 and adapted into a NEW research doc at `low-dust-cat-litter.md` in support-guide framing (educational content with material-level analysis, dust-cause explanation, transition guidance, and named examples — but NOT a 5-7 product money-guide ranking).

## Page shape (high level — Phase 4 will detail)

- Hero + intro: why dust matters (health for humans + cats), the "99% dust-free" credibility problem
- Section: what causes dust in cat litter (material-level explainer)
- Section: dust ranking by material (table — leverages cat-litter-decision-table data)
- Section: how to evaluate a low-dust litter before you buy (the bag-test, the pour-test, the source-checks)
- Section: examples by category — "if you stay with clay" / "if you switch to pellets" / "if you go plant-based" — names manufacturers but does NOT rank or score
- Section: the asthma caveat (vet warning re: organic vs clay for diagnosed feline asthma)
- Section: transition guidance (introducing low-dust litter without rejection)
- FAQ: 6-8 questions
- Related links: /best-cat-litter (flagship), /low-tracking-cat-litter, /cat-litter-decision-table, /how-often-to-change-cat-litter

## Evidence-transparency baseline

- pageLevelClaimLabel: "researched" (no hands-on testing of dust performance — relies on owner reports + manufacturer data + reviewer consensus)
- evidenceSummary will name: Reddit threads (r/CatAdvice, multiple), Cats.com / Kinship / Tuft & Paw / Catster expert reviews, Sphynx-cat-owner forums (highly dust-sensitive subgroup), manufacturer dust claims with skepticism noted
- No per-product hands-on labels (this is a category education page, not a product review)

## Phase 4 image plan

Per `feedback_support_pages_4plus_images` (bpp inherits the rule), need 4+ images: hero + 3 in-body. Plan:
1. Hero — clean low-dust litter being poured into a box, minimal visible particulate
2. Material comparison — three handful shots side-by-side: clay, pellet, plant-grain
3. The dust-test demonstration — pouring litter into a clear bin, showing visible vs invisible cloud
4. Decision matrix — graphic summarizing "if you want clumping → ___, if you want budget → ___, if asthma diagnosed → ___"

## Acceptance gates

- Phase 2 gate: support-guide N/A on Final 5-7; verified:true frontmatter; ≥15-source candidate pool already exists in best-dust-free-cat-litter.md (verified during Phase 2).
- Phase 4 gate: ≥4 image refs, evidenceSummary populated, sourcesFooter populated, [N] markers for any specific numeric claims (e.g., "30% of cats", "6x cost"), claim-label="researched", supportPage4PlusImages.
- Phase 5 gate: SupportPage component used, heroImage prop passed explicitly.
- Phase 6 gate: avg ≥4/5, every dim ≥3/5.
- Auto-push gate: phase6 ≥4.5 AND audit clean AND named reviewer present (BPP non-YMYL → auto-push gate evaluates normally).

---

**Decision file complete. Proceeding to Phase 2.**
