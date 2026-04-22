# GSC Baseline — BetterPetPicks — 2026-04-22

<!-- Mode: baseline (pre-citation-retrofit snapshot) -->
<!-- Source: Google Search Console direct UI pull via Playwright MCP -->
<!-- Account: blastoise.clawd@gmail.com -->
<!-- Date range: Last 28 days (2026-03-25 through 2026-04-22) -->

## Purpose

Locks the before-retrofit snapshot ahead of Phase D content backfill. Site is very early (7 days since oldest LIVE page) so this baseline is near-zero-signal — the value is the dated timestamp + query/page that first surfaced, not volume.

## 28-day summary (2026-03-25 to 2026-04-22)

| Metric | Value |
|---|---|
| Total clicks | **1** |
| Total impressions | **1** |
| Average CTR | **100%** |
| Average position | **36.0** |
| Days since first impression | 2 (first impression ~2026-04-20) |
| Days since first click | 2 (single click ~2026-04-20) |

## Top queries

| # | Query | Clicks | Impressions | CTR | Position |
|---|---|---|---|---|---|
| 1 | best cat harness | 1 | 1 | 100% | 36.0 |

## Top pages

| # | URL | Clicks | Impressions | CTR | Position |
|---|---|---|---|---|---|
| 1 | /best-cat-harness | 1 | 1 | 100% | 36.0 |

## Signal read

BPP is pre-signal. The single click on `/best-cat-harness` for query "best cat harness" at position 36 is noise-level — one searcher went to page 4 of results and clicked. Not statistically meaningful, but it confirms the page is indexed and eligible to surface.

The fact that NO other queries/pages show impressions after 7 days means either:
1. GSC hasn't caught up with the ranking data yet (normal — GSC lags 2-3 days)
2. BPP pages aren't yet ranking anywhere visible (most likely — new site + KD 15-25 queries)
3. Both

**Honest interpretation:** BPP has ~18-25 LIVE pages but most aren't surfacing on any query Google recorded in this window. That will change over 30-60 days as indexing completes. The retrofit is worth doing now regardless so the lift is captured when signal arrives.

## Retrofit targets (Phase D candidates)

With zero GSC signal to sort by, fall back to `keyword-map.ts` `primaryVolume` sort for top-5 LIVE pages. Suggested:

1. `/best-cat-litter` (primary keyword "best cat litter", 12K volume)
2. `/best-cat-litter-for-multiple-cats` (8.1K volume)
3. `/best-vacuum-for-pet-hair` (27K volume — if LIVE)
4. `/best-cat-tree` (14K volume)
5. `/best-cat-tree-for-large-cats` (cluster hub, mid volume)

Confirm top-5 by running `npm run rank:next --site betterpetpicks` or sorting keyword-map directly at Phase D kickoff. Pre-check each against `check-research-verified` before backfill.

## Follow-up pull

- **Next pull:** 2026-05-08 (~2 weeks post-retrofit) or 2026-05-20 (4 weeks — likely the first pull with real signal)
- **Same method:** Playwright GSC UI navigation, 28-day window
- **Compare:** total impressions count (should grow materially as indexing catches up), first-appearance of retrofitted pages in the top-20
- **Escape hatch:** if `/best-cat-harness` disappears from impressions entirely, investigate (may indicate indexing issue or content drift, not just low search volume)
