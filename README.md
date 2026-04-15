# Affiliate PSEO Starter

This template is the reusable base for new affiliate sites in this repo.

## What it includes

- App Router Next.js starter wired for affiliate publishing
- Generic editorial-desk model in `src/data/authors.ts`
- Empty product catalog and keyword inventory
- Route-aware sitemap and metadata/schema helpers
- Shared page primitives such as `HubPage`
- Trust pages, disclosure patterns, and FTC copy wiring

## What you should replace first

- `src/config/site.ts`
- `src/data/authors.ts`
- `data/guide-opportunities.md`
- `data/content-ideas.md`
- `src/data/content/trust-pages.ts`

## Scaffold placeholders

The scaffold command replaces these tokens:

- `BetterPetPicks`
- `betterpetpicks`
- `betterpetpicks.com`
- `Practical cat-care buying guides for cleaner, calmer homes.`
- `BetterPetPicks publishes practical, independent buying guides for cat litter, odor control, water fountains, and the products that help cat owners keep real homes running smoothly.`

## Commands

```bash
npm install
npm run dev
npm run build
npm run lint
```
