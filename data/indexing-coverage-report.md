# Indexing Coverage Report — BetterPetPicks

**Generated:** 2026-04-25T20:07:00Z
**GSC last update:** 2026-04-19
**Indexed:** 10 (baseline — first run)
**Not indexed:** 31 (baseline — first run)

## 🚨 CRITICAL: www-canonical bug

5 of the 10 "indexed" URLs are on the `www.` subdomain, while the canonical site is `https://betterpetpicks.com` (no www). Google has selected the www variant for these pages, indicating the www → non-www redirect is broken or absent.

| Indexed at www (wrong) | Canonical (non-www) |
|---|---|
| https://www.betterpetpicks.com/about | https://betterpetpicks.com/about |
| https://www.betterpetpicks.com/best-cat-carrier | https://betterpetpicks.com/best-cat-carrier |
| https://www.betterpetpicks.com/best-cat-litter-for-multiple-cats | https://betterpetpicks.com/best-cat-litter-for-multiple-cats |
| https://www.betterpetpicks.com/best-cooling-dog-bed | https://betterpetpicks.com/best-cooling-dog-bed |
| https://www.betterpetpicks.com/privacy | https://betterpetpicks.com/privacy |

The non-www variants of these same slugs appear under "Discovered - currently not indexed", which means Google is treating www and non-www as separate documents and chose www first.

The "Page with redirect" reason (count = 2) is the homepage variants (`http://` → `https://`), which is expected.

The "Blocked by robots.txt" reason (count = 2) is two `_next/static/...` JS bundle URLs on the www subdomain — these are intentionally robots-blocked. Benign.

## 🚨 LIVE pages NOT indexed (19 commercial/support + 4 trust = 23)

### Commercial/support (19)

| Slug | Reason | First flagged |
|---|---|---|
| best-cat-carrier | Discovered - currently not indexed (www variant IS indexed — canonical bug) | 2026-04-25 (this run) |
| best-cat-litter | Discovered - currently not indexed | 2026-04-25 (this run) |
| best-cat-litter-for-multiple-cats | Discovered - currently not indexed (www variant IS indexed — canonical bug) | 2026-04-25 (this run) |
| best-cat-litter-mat | Discovered - currently not indexed | 2026-04-25 (this run) |
| best-cat-tree-for-large-cats | Discovered - currently not indexed | 2026-04-25 (this run) |
| best-cat-water-fountain | Discovered - currently not indexed | 2026-04-25 (this run) |
| best-chew-proof-dog-bed | Discovered - currently not indexed | 2026-04-25 (this run) |
| best-cooling-dog-bed | Discovered - currently not indexed (www variant IS indexed — canonical bug) | 2026-04-25 (this run) |
| best-cordless-vacuum-for-pet-hair | Discovered - currently not indexed | 2026-04-25 (this run) |
| best-indestructible-dog-bed | Discovered - currently not indexed | 2026-04-25 (this run) |
| best-pet-hair-remover | Discovered - currently not indexed | 2026-04-25 (this run) |
| best-vacuum-for-pet-hair | Discovered - currently not indexed | 2026-04-25 (this run) |
| how-much-cat-litter-to-use | Discovered - currently not indexed | 2026-04-25 (this run) |
| how-often-to-change-cat-litter | Discovered - currently not indexed | 2026-04-25 (this run) |
| how-to-clean-cat-pee-from-carpet | Discovered - currently not indexed | 2026-04-25 (this run) |
| how-to-get-cat-to-use-scratching-post | Discovered - currently not indexed | 2026-04-25 (this run) |
| how-to-get-rid-of-cat-pee-smell | Discovered - currently not indexed | 2026-04-25 (this run) |
| how-to-remove-pet-hair-from-clothes | Discovered - currently not indexed | 2026-04-25 (this run) |
| how-to-remove-pet-hair-from-couch | Discovered - currently not indexed | 2026-04-25 (this run) |

### Trust (4)

| Slug | Reason | First flagged |
|---|---|---|
| about | Discovered - currently not indexed (www variant IS indexed — canonical bug) | 2026-04-25 (this run) |
| disclosure | Discovered - currently not indexed | 2026-04-25 (this run) |
| how-we-review | Discovered - currently not indexed | 2026-04-25 (this run) |
| privacy | Discovered - currently not indexed (www variant IS indexed — canonical bug) | 2026-04-25 (this run) |

## ⚠️ LIVE slugs not appearing in any GSC report (3)

LIVE in `guide-opportunities.json` but Google's "All known pages" does not list either variant:

- cat-litter-decision-table
- low-tracking-cat-litter
- best-automatic-litter-box

## Why pages aren't indexed (full breakdown)

| Reason | Count | Δ vs prior |
|---|---|---|
| Discovered - currently not indexed | 26 | baseline |
| Blocked by robots.txt | 2 | baseline (Next.js asset bundles on www — benign) |
| Page with redirect | 2 | baseline (http → https homepage — benign) |
| Alternate page with proper canonical tag | 1 | baseline |
| Crawled - currently not indexed | 0 | baseline |

## Indexed pages (10)

Canonical-correct (5):
- https://betterpetpicks.com/
- https://betterpetpicks.com/ai-disclosure
- https://betterpetpicks.com/best-cat-harness
- https://betterpetpicks.com/best-cat-tree
- https://betterpetpicks.com/terms

Wrong canonical (5 — see canonical bug above):
- https://www.betterpetpicks.com/about
- https://www.betterpetpicks.com/best-cat-carrier
- https://www.betterpetpicks.com/best-cat-litter-for-multiple-cats
- https://www.betterpetpicks.com/best-cooling-dog-bed
- https://www.betterpetpicks.com/privacy

## Severity flags this run

| Severity | Flag | Detail |
|---|---|---|
| HIGH | canonical-bug-www | 5 indexed URLs are on www, canonical site is non-www; non-www variants of same slugs sit unindexed |
| HIGH | live-not-indexed-new (×19 content) | 19 commercial/support LIVE slugs in Discovered-not-indexed |
| HIGH | live-not-indexed-new (×4 trust) | 4 trust pages in Discovered-not-indexed |
| HIGH | live-pages-not-in-gsc (×3) | 3 LIVE slugs absent from "All known pages" — sitemap-coverage gap |

## Recommended diagnosis (Lee triages)

1. **Top priority: fix www → non-www 301.** Five LIVE pages are indexed at the wrong canonical. Once the redirect is in place, Google will consolidate the www variants into non-www and the duplicate signals will collapse. Check `vercel.json`, `next.config.js`, or DNS-level redirect for www.betterpetpicks.com.
2. **Sitemap audit.** 3 LIVE slugs (`cat-litter-decision-table`, `low-tracking-cat-litter`, `best-automatic-litter-box`) are not in any GSC report — almost certainly missing from the served sitemap or the sitemap is stale. GSC → Sitemaps to verify last fetch.
3. **Discovered-not-indexed at 26 = crawl-budget signal.** Same pattern as TCR but on a larger surface. Manual `URL Inspection → Request indexing` on the 5-10 highest-value commercial slugs (best-cat-litter, best-vacuum-for-pet-hair, best-cordless-vacuum-for-pet-hair, best-pet-hair-remover, best-cooling-dog-bed) is the cheapest unblock.
4. **`best-cat-litter-for-odor-control`, `best-dust-free-cat-litter`, `best-non-tracking-cat-litter`** appear as Discovered-not-indexed but are NOT in the current LIVE roadmap. Likely stale slugs from a prior build or test pages — verify whether they should be redirected, removed from sitemap, or are residual from a prior taxonomy.

## Notes

- First run for this site — no prior diff available.
- GSC's "Last update" is 2026-04-19, so the data is 6 days stale relative to today (2026-04-25).
