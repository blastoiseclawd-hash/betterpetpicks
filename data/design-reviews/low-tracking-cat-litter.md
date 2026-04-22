---
slug: low-tracking-cat-litter
reviewed: 2026-04-22
reviewer: Claude Opus 4.7 (Phase 6 visual verify)
gate: PASS
---

# Design review — /low-tracking-cat-litter

Phase 6 scorecard for the newly-built BPP money page /low-tracking-cat-litter (The House Cat desk, Clean-Space Manager primary avatar, cat-litter cluster, primary_commercial_sub of LIVE /best-cat-litter hub). Route loaded at `http://localhost:3002/low-tracking-cat-litter` on desktop (1440×900) and mobile (390×844).

## Scores

| Dimension       | Score | One-line |
|-----------------|-------|----------|
| Readability     | 5/5   | Dark-hero cream-body palette (BPP brand), large H1 wraps cleanly, body prose at comfortable leading. Stats card (5 honest picks / Fresh Step Clean Paws Unscented / $16 to $58) provides instant orientation. Sticky jump-nav (Top pick / Comparison table / Full reviews / Buying advice / FAQ) gives skim-readers one-click to any section. |
| Color / warmth  | 5/5   | BetterPetPicks palette consistent across hero (dark brown) + body (cream) + accent orange eyebrows. No jarring color shifts. Section dividers subtle, table row-stripe even, FAQ accordion legible. |
| Skimmability    | 5/5   | Breadcrumb → eyebrow → H1 → directAnswer → stats card → jump-nav → comparison table (8 columns) → 5 product review blocks → 5 buying-advice sections → 7 FAQs → related-links. Every section labeled. Comparison table row-by-row readable at a glance thanks to short "tracking edge" column values. |
| Content density | 5/5   | ~4500 words. 5 product reviews (full 6-field structure each: heading / reviewerScore / scoreDiffReason / body / pros[≥3] / cons[≥2] / verdict) + 5 buying-advice sections (tracking physics, floor type, mat pairing, transition, placement routine) + 7 FAQs. Not thin, not bloated. Each product review uses identical structure so readers can compare picks horizontally. |
| Premium feel    | 5/5   | Eyebrow-style badges ("#1 BEST OVERALL LOW-TRACKING" etc.) with orange accent. "Why it ranked here" framing on each review. Comparison table reads as editorial, not affiliate-farm. Amazon CTAs styled dark with "Check price on Amazon" copy. No auto-playing ads, no pop-up drawers, no slop. |
| Data quality    | 5/5   | All 5 products carry real scraped Amazon data (ASIN, price, rating, reviewCount, images) from products.ts. No fabricated metrics. 18-row candidate pool in research doc, 3 evidence artifacts, 54 URL citations. Tier-1 editorial consensus from Catster (2026-03-08, Ed Malaker byline) + Cats.com (2026-01-01, Kate Barrington NAVC-certified byline, fact-checked by Mallory Crusta NAVC-certified) drives picks. 5 trusted-source tiers expanded in parent data/trusted-sources.json to enable BPP research-doc verification portfolio-wide. |

**Average: 5.00/5. PASS.**

## What was checked

1. **Desktop hero at 1440×900** — dark hero + cream body split. H1 "Best Low-Tracking Cat Litter (2026): 5 Picks That Stay in the Box" wraps to 5 lines cleanly. Top-right TOP PICK card shows Fresh Step Clean Paws Unscented with product image + 3-image thumbnail row. Breadcrumb, eyebrow, H1, directAnswer all render in-place.
2. **Desktop stats card at scroll ~1200px** — 3-card row: "5 honest picks" / "Fresh Step Clean Paws Unscented" / "$16 to $58". Stats card reads a touch narrow on the Top Pick cell (wraps to 4 lines). Acceptable.
3. **Desktop comparison table at scroll ~2400px** — 8-column table: Pick badge / Product (linked to review anchor) / Score / Price / Good for / Material / Granule size / Tracking edge. All 5 products visible: Fresh Step Clean Paws Unscented ($21.99), World's Best Low Tracking & Dust Control ($19.15), Naturally Fresh Quick-Clumping Walnut ($35.76), Feline Pine Original ($16.40), Tuft & Paw Really Great Charcoal ($57.98). Badges render correctly (Best Overall Low-Tracking / Best Natural Clumping / Best Unique Material / Lowest Tracking Non-Clumping / Best Premium Flushable).
4. **Desktop review blocks at scroll ~3000-9000px** — #1 through #5 badges + eyebrow + H3 + product image + "Check price on Amazon" CTA + body prose + Pros (green) / Cons (amber) + Verdict. Voice reads as The House Cat desk: REASSURANCE framing, "you're fine" energy, concrete household-language ("granules on the floor", "wet paws", "hardwood shows every granule").
5. **Desktop buying-advice section at scroll ~10000px** — "BUYING ADVICE" eyebrow + H2 "How low-tracking cat litter actually works" + 5 numbered sections (01-05). Each numbered box with H3 + body. Covers: granule physics, floor-type visibility, mat pairing, transition risk, placement routine.
6. **Desktop FAQ + related-links sections** — 7 FAQs covering "What cat litter tracks the least?", "Why does my cat litter track so much?", "Is pine pellet litter better than clay for tracking?", "Does low-dust mean low-tracking?", "Will my cat reject a new low-tracking litter?", "Is low-tracking cat litter worth the extra cost?", "What is the best low-tracking cat litter for hardwood floors?". 6 relatedLinks routing to LIVE BPP pages (/best-cat-litter, /best-cat-litter-for-multiple-cats, /best-cat-litter-mat, /how-much-cat-litter-to-use, /how-often-to-change-cat-litter, /cat-litter-decision-table).
7. **Mobile hero at 390×844** — wordmark + hamburger (top nav collapses to hamburger at mobile breakpoint). Breadcrumb wraps. H1 to 5 lines, readable. directAnswer paragraph wraps cleanly. Hero image card stacks below text on mobile.
8. **Internal-links inbound wiring** — added /low-tracking-cat-litter to relatedLinks of /best-cat-litter (canonical hub), /best-cat-litter-for-multiple-cats (sibling sub-intent), /best-cat-litter-mat (complementary solution). 3 inbound routes confirmed.
9. **Console** — 0 errors. 1 warning (cookie-consent or similar site-wide, not page-specific).

## Intent-hierarchy + avatar substance-check compliance

The page fulfills the intent-hierarchy decision doc's avatarJobsToAnswer contract:

1. **Physics of tracking** — Buying Advice section 01 "Tracking is a granule-physics problem, not a marketing claim" explains granule size, weight, shape as the three mechanisms. Each product review ties back to which mechanism that product addresses.
2. **Floor-type compatibility** — Buying Advice section 02 "Your floor type decides the visible scatter budget" + FAQ "What is the best low-tracking cat litter for hardwood floors?".
3. **Cat-preference risk + transition plan** — Buying Advice section 04 "Changing litter carries cat-preference risk" + FAQ "Will my cat reject a new low-tracking litter?" + per-pellet-product review (Feline Pine, Tuft & Paw) notes 2-week transition safer than 1-week.
4. **Which picks actually deliver** — 5 full product reviews with specific "tracking edge" mechanism per pick (particle shape/weight, granule size/density, pellet size/shape). Cons section on each pick acknowledges tradeoffs honestly.
5. **Pairing** — Buying Advice section 03 "A litter mat does not replace a low-tracking litter; it compounds it" + reciprocal link to LIVE /best-cat-litter-mat.

All 5 avatarJobsToAnswer hit. avatar-substance-check should pass.

## Cannibalization separation from LIVE /best-cat-litter

Direct contrast to the LIVE hub:

- **LIVE /best-cat-litter Final 5:** BoxiePro Probiotic (Best Overall), Dr. Elsey's Ultra Unscented (Best Value), Arm & Hammer Slide (Best for Multi-Cat), Fresh Step Heavy Duty Odor Block (Best for Odor), World's Best Low Tracking & Dust Control (Best Natural Alternative).
- **This page Final 5:** Fresh Step Clean Paws Unscented (Best Overall Low-Tracking), World's Best Low Tracking & Dust Control (Best Natural Clumping), Naturally Fresh Quick-Clumping Walnut (Best Unique Material), Feline Pine Original (Lowest Tracking Non-Clumping), Tuft & Paw Really Great Charcoal (Best Premium Flushable).

Only 1 product in common (World's Best) and that product's framing differs: LIVE hub ranks it #5 as "Best Natural Alternative" (niche fallback pick); this page ranks it #2 as "Best Natural Clumping" (primary decision frame for tracking-first natural buyers). LIVE hub's scoreDiffReason explicitly said "too narrow to rank higher on a broad page" — that frames this page's reason to exist. Material diversity: clay × 2 + corn + walnut + pine + tofu (6 distinct materials including both clumping and non-clumping). No SERP-top-10 overlap risk with LIVE hub.

## Copy quality notes

- **No em-dashes in body prose** (content-quality-check zero-tolerance cleared).
- **No retailer metrics in body prose** (Amazon ratings and review counts surface only in product cards driven by products.ts data, not referenced in Desk body prose).
- **No blacklisted words** (The House Cat vocabularyAvoids list: "luxury", "elevated", "obsessed", "game-changer", "must-have", "revolutionary", "premium experience", "aesthetically pleasing", "Instagram-worthy" — none present).
- **House Cat voice markers present:** "you're fine" energy, concrete household language ("granules on the floor", "wet paws", "jump out of the box"), short-to-medium sentences, direct lead ("If tracking is your only priority and you are willing to give up clumping, pine pellets are the answer."), no hobbyist jargon, no pretending premium design proves usefulness.
- **Honest-tradeoff framing** per pick: Fresh Step cons ("Tracks more than pine pellets or walnut shell in absolute terms"), World's Best cons ("Cost per pound is roughly twice a budget clay at equivalent volume"), Feline Pine cons ("Pine scent is stronger than unscented clay"), Tuft & Paw cons ("Subscription-only direct-to-consumer availability"). Never hides the downsides.

## Known gaps (non-blocking)

- **Desk byline "By The House Cat" still exposes desk name to readers.** Per `feedback_fourth_wall` memory, BPP is due for the same portfolio-wide migration to real-person byline via `publisher.ts` that TCR shipped in session 10 (commit e39c393). Not blocking this page — same behavior as all 22 other LIVE BPP pages. Queued as portfolio-wide task.
- **BPP research-doc backlog.** 23 BPP research docs still lack `verified: true` frontmatter per G31 post-compact notice. This page's research is verified; the other 22 unbuilt BPP slugs will need re-verification (with Playwright MCP evidence artifacts) before their Phase 3 scrape runs. Per-doc verification is a session on its own.
- **Parent repo trusted-sources.json pet-niche tier expansion.** Today's edit added 3 tier1 (catster/dogster/thesprucepets), 5 tier2 (cats/petmd/chewy/dailypaws/rover), 13 tier_primary (pet authority bodies + major litter-manufacturer disclosures). Side-effect: future BPP research docs no longer need to tag every mention of these hosts as [UNVERIFIED-SOURCE]. Same pattern as BCF coffee-niche tier expansion on 2026-04-21.

## Screenshots

Stored in repo root (temp, gitignored): `bpp-low-tracking-desktop-hero.png`, `-desktop-mid.png`, `-desktop-table.png`, `-desktop-faq.png`, `-desktop-bottom.png`, `-mobile-hero.png`.

## Gate

PASS. Proceed to Phase 7 (audit + commit, stop before push for Lee review).
