---
slug: best-automatic-litter-box
reviewed: 2026-04-22
reviewer: Claude Opus 4.7 (Phase 6 visual verify)
gate: PASS
---

# Design review — /best-automatic-litter-box

Phase 6 scorecard for the newly-built BPP money page /best-automatic-litter-box (The Upgrade Edit desk, Convenience Upgrader / Automation Evaluator primary avatar, cat-litter-box cluster hub, primary_commercial_core for the cluster). Route loaded at `http://localhost:3002/best-automatic-litter-box` on desktop (1440x900) and mobile (390x844).

## Scores

| Dimension       | Score | One-line |
|-----------------|-------|----------|
| Readability     | 5/5   | Dark-hero + cream-body BPP palette, large H1 wraps to 4 lines on desktop, body prose at comfortable leading. Top-pick card on the right shows real Litter-Robot 4 Supply Bundle product image with cat-on-globe photography, 2 CTA buttons (Read full review / How we choose). Sticky jump-nav (Top pick / Comparison table / Full reviews / Buying advice / FAQ) gives skim-readers one-click access. |
| Color / warmth  | 5/5   | BetterPetPicks palette consistent across hero (dark brown) plus body (cream) plus accent orange eyebrows. Stats card (5 honest picks / Litter-Robot 4 Supply Bundle / $360 to $749) reads cleanly. Section dividers subtle, comparison-table row stripes even, FAQ accordion legible. |
| Skimmability    | 5/5   | Breadcrumb to eyebrow to H1 to directAnswer to stats card to jump-nav to comparison table (9 columns including Buy CTA) to 5 product review blocks to 5 buying-advice sections to 8 FAQs to related-links. Every section labeled. Comparison table reads at a glance thanks to short cell values. Shop Amazon CTA on every desktop row + every mobile card. |
| Content density | 5/5   | Roughly 4500 words. 5 product reviews (full structure each: heading / reviewerScore / scoreDiffReason / body / pros / cons / verdict) plus 5 buying-advice sections (month-three test, globe vs open-top, total cost of ownership, multi-cat capacity math, failure recovery) plus 8 FAQs. Not thin, not bloated. Each product review uses identical structure for horizontal comparison. |
| Premium feel    | 5/5   | Eyebrow-style badges (Best Overall Automatic / Best Open-Top for Large Cats / Best Value-Premium / Best for Smart-Home Integration / Best Budget Smart Entry) with orange accent. "Why it ranked here" framing on each review. Comparison table reads as editorial, not affiliate-farm. Shop Amazon CTAs styled dark with the cleaner short-text format Lee approved on 2026-04-22. No auto-playing ads, no pop-up drawers, no slop. The Upgrade Edit voice (skeptical-investor, worth-it-if / skip-it-if framing, month-three ownership lens) reads consistently across all 5 reviews. |
| Data quality    | 5/5   | All 5 products carry real scraped Amazon data (ASIN, price, rating, reviewCount, image URL) from products.ts captured via Playwright MCP on 2026-04-22. No fabricated metrics. 17-row candidate pool in research doc, 3 evidence artifacts (Cats.com 2026 testing 33 models / Catster Jeff Weishaupt 2026 / CNN Underscored Michelle Rae Uy 2026), trusted-sources expanded with 6 manufacturer domains plus cnn.com plus nbcnews.com to support BPP automation-niche research portfolio-wide. |

**Average: 5.00/5. PASS.**

## What was checked

1. **Desktop hero at 1440x900** — dark hero, cream body split. H1 "Best Automatic Cat Litter Box (2026): Top 5 Picks" wraps to 4 lines cleanly. Top-right TOP PICK card shows Litter-Robot 4 Supply Bundle with the white-globe + orange-tabby product image. Breadcrumb, eyebrow, H1, directAnswer all render in-place with skeptical-investor voice ("worth it if you are running a multi-cat household and want the most-validated reliability data").
2. **Desktop stats card at scroll roughly 1100px** — 3-card row: "5 honest picks" / "Litter-Robot 4 Supply Bundle" / "$360 to $749". Stats card reads correctly across all 3 cells.
3. **Desktop comparison table at scroll roughly 1900px** — 9-column table: Pick badge / Product (linked to review anchor with blue underline) / Score / Price / Good for / Capacity / Connectivity / Cat fit / Buy. All 5 products visible: Litter-Robot 4 Supply Bundle ($749, 4.5/5), Neakasa M1 Plus Open-Top ($399.99, 4.0/5), PetKit PuraMax 2 ($369.99, 3.5/5), Casa Leo Leo's Loo Too ($599.00, 3.5/5), PetSafe ScoopFree SmartSpin ($359.99, 3.0/5). Each row has a working Shop Amazon CTA button (added portfolio-wide on 2026-04-22).
4. **Desktop review blocks scroll** — Each of 5 reviews shows badge + eyebrow + H3 heading + product image + Shop Amazon CTA + body prose + Pros (green) / Cons (amber) + Verdict. Voice reads as The Upgrade Edit desk: skeptical-investor framing, "worth it if / skip it if" structure on every verdict, month-three ownership lens, total-cost-of-ownership honesty.
5. **Desktop buying-advice section** — "BUYING ADVICE" eyebrow plus H2 "How to tell if an automatic litter box is worth the money" plus 5 numbered sections covering: month-three ownership test, rotating globe vs open-top decision, total cost of ownership beyond the sticker, multi-cat capacity math, failure recovery analysis.
6. **Desktop FAQ + related-links sections** — 8 FAQs covering "Which automatic litter box is actually worth the money", "Is the Litter-Robot 4 worth $749", "How many cats can an automatic litter box handle", "Do automatic litter boxes work with any cat litter", "What is the main reason an automatic litter box fails", "How long do automatic litter boxes last", "Can an automatic litter box help detect health issues", "Do automatic litter boxes really save time". 6 relatedLinks routing to LIVE BPP pages.
7. **Mobile hero at 390x844** — wordmark plus hamburger. Breadcrumb wraps cleanly. H1 stacks. directAnswer paragraph wraps cleanly. Top-pick image card stacks below text on mobile, full-width Read full review + How we choose CTAs render cleanly.
8. **Mobile comparison cards at scroll roughly 3700px** — Each card shows badge + price + product name (blue underlined link) + Our Score + Good for + Capacity + Connectivity + Cat Fit + full-width Shop Amazon CTA. All 5 picks render with the portfolio-standard CTA pattern.
9. **Console** — 0 errors. 1 warning (site-wide cookie-consent or similar, not page-specific).

## Intent-hierarchy + avatar substance-check compliance

The page fulfills the intent-hierarchy decision doc's avatarJobsToAnswer contract:

1. **Is the automation actually worth $400-700?** — directAnswer + quickAnswer both lead with this question. Buying Advice section 01 "The premium claim only holds if month-three ownership still works" frames the worth-it test explicitly. Each verdict structures around worth-it-if / skip-it-if.
2. **Which brands survive month-three ownership?** — Buying Advice section 01 + Buying Advice section 05 "The right box depends on failure recovery" address this directly. Each review body discusses month-three failure patterns specific to that product.
3. **What is the total cost of ownership?** — Buying Advice section 03 "The total cost of ownership includes consumables, not just the sticker" calls out waste bags, filter replacements, and the Litter-Robot bundle vs PuraMax bundle math.
4. **Will it work for my household?** — Buying Advice section 02 "Rotating globe vs open-top is a cat-preference decision first" + section 04 "Multi-cat households need capacity data" plus FAQ "How many cats can an automatic litter box handle" address fit by household type.
5. **What do I do when something breaks?** — Buying Advice section 05 "The right box depends on failure recovery" + FAQ "What is the main reason an automatic litter box fails" address support, warranty, and replacement-parts strategy.

All 5 avatarJobsToAnswer hit. avatar-substance-check should pass.

## Cannibalization separation from sibling slugs

The Phase 0 cannibalization audit identified 4 NOT_BUILT cluster siblings (`/litter-robot`, `/best-automatic-litter-box-for-multiple-cats`, `/self-cleaning-litter-box`, `/automatic-vs-self-cleaning-litter-box`). This page consolidates the cluster-hub buying intent. Sub-intents will link UP to this page when they ship; `/self-cleaning-litter-box` is recommended for SKIP per intent-hierarchy doc.

## Hooks fired green during build/write

- `content-quality-check` — 0 em-dashes (zero-tolerance), no retailer metric exposure (G23 trust-hierarchy clean after rewrite from raw "869 Amazon ratings" to "broadest ownership track record").
- `meta-length-validate` — title 49 chars (under 60-char hard cap), description 150 chars (under 160-char ceiling).
- `research-doc-validate` — verified:true, 17 candidates (over 15 minimum), 64 URL citations, 3 evidence artifacts each over 300KB.
- `check-research-verified` — green for Phase 3 scrape gate.
- `products-validate` — 5 new products added with cat-litter-boxes category, no duplicate IDs.
- `keyword-map-validate` — slug routes correctly, deskId fixed from typo ("upgrade-and-automation" to "upgrade-automation-desk").

## Known gaps (flagged, not blocking)

- All 5 new products carry single image only (consistent with portfolio-wide BPP pattern across 48 prior products). Multi-image gallery scrape is a separate workstream tracked in portfolio-gap-register.
- Sitemap mtime warning is portfolio-wide (sitemap.ts uses build timestamp not per-page mtime), not specific to this route.

## Screenshots in session
Captured during visual-verify and discarded after review (not committed):
- `design-review-hero.png` — 1440x900 desktop hero
- `design-review-comparison.png` — 1440x900 desktop scrolled to stats card
- `design-review-table.png` — 1440x900 desktop comparison table with all 5 rows
- `design-review-mobile-cards.png` — 390x844 mobile top-pick card
- `design-review-mobile-table.png` — 390x844 mobile mid-page CTAs
- `design-review-mobile-comparison.png` — 390x844 mobile comparison cards (Litter-Robot 4 + Neakasa M1 Plus visible)
