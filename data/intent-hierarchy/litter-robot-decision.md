# Intent-hierarchy decision: litter-robot

**Site:** betterpetpicks
**Slug:** `litter-robot` (canonical roadmap row)
**Target keyword:** `best self cleaning cat litter` (vol 266000, primaryKd 9, TP 280000)
**Cluster:** cat-litter
**Decision date:** 2026-04-26

## Role declaration

Canonical row claims `secondary_commercial`. Reality on the SERP: this query returns automatic-litter-box roundups, which is exactly the intent already served by the LIVE `/best-automatic-litter-box` cluster hub. There is no second commercial role to occupy without splitting authority.

## SERP intent-match check

- Live SERP for `best self cleaning cat litter` (Apr 2026) is dominated by automatic-litter-box roundups (Wirecutter, Cats.com, Whisker direct, NYT, retailer category pages). Not "litter" as in granular substrate — "litter" reads as litter-box in this query.
- BPP's existing `/best-automatic-litter-box` page already targets this exact SERP shape. Top picks: Litter-Robot 4 Supply Bundle, Neakasa M1 Plus, PetKit PuraMax 2, ScoopFree SmartSpin (4 active products with full review depth, scores, owner-pattern callouts, and pricing).
- A second BPP page on the same SERP intent — even on a brand slug — would be canonical-layer cannibalization: two pages on the same domain competing for the same query, splitting internal links and external authority.

## Variable-swap differentiation test

Swap target: would a reader on `/litter-robot` get information they cannot get on `/best-automatic-litter-box`?
- The hub already names Litter-Robot 4 as the top pick with month-three reliability framing, premium-tier reasoning, Whisker support backstop, and Neakasa/PuraMax cross-comparison.
- A separate brand page would either duplicate the hub's Litter-Robot section (bad) or invent new claims to differentiate (worse — fabrication risk).
- Test fails. No information-gain wedge that justifies a second page.

## Brand-deep-review pivot considered

Could `litter-robot` be repurposed as a brand-deep-review (e.g. primary keyword `litter robot 4 review` or `is litter robot worth it`, vol much smaller, hands-on owner-perspective angle)? Yes, but:
- That requires a different primary keyword, different SERP target, different page type (review-deep-dive, not money-guide flagship-roundup).
- The canonical row would need to be re-canonicalized: change `primaryKeyword`, `pageType`, `contentShape`, `priorityScore`, `trafficPotential`, `notes`. That is queue-management work, not page-build work.
- Defer this as a separate roadmap pivot. Not blocking the next-page-pick.

## Resolution

**SKIP** — cannibalization with LIVE `/best-automatic-litter-box`. The existing hub already serves this SERP at the depth a separate brand page would aim for.

Update `guide-opportunities.json` and `keyword-map.ts` row for `litter-robot`:
- `buildStatus`: `NOT BUILT` → `SKIP`
- `notes`: append `skip-2026-04-26: cannibalizes /best-automatic-litter-box (Litter-Robot 4 already #1 pick on hub). Pivot to brand-deep-review with a different primary keyword if the role is needed later.`

Next-page-pick advances to row 2: `mau-cat-tree` (renamed to `best-looking-cat-tree` for SEO — see separate decision doc).
