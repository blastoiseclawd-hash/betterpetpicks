# Guide Opportunities — BetterPetPicks

Master roadmap rebuilt 2026-04-15 with live Ahrefs MCP validation across 5 clusters. 108 primary + 42 backlog = 150 validated opportunities.

## Data Sources

- **Primary:** Live Ahrefs MCP `keywords-explorer-overview`, `keywords-explorer-matching-terms` (2026-04-15)
- **Secondary:** Local Ahrefs CSV exports in `data/ahrefs-exports/` (2,747 files, last updated Feb-Apr 2026)
- **Supplementary:** Google Autocomplete via `data/autocomplete-results.json`
- CPC values from Ahrefs are in USD cents (divide by 100 for dollars)

## Cluster Summary

| Cluster | Hub Keyword | Hub Vol | Hub KD | Hub TP | Money Pages | Support Pages | Total | Ratio |
|---------|------------|---------|--------|--------|-------------|---------------|-------|-------|
| Cat Litter & Litter Boxes | best cat litter | 26,000 | 8 | 9,800 | 20 | 10 | 30 | 2.0:1 |
| Cat Water Fountains | best cat water fountain | 9,200 | 2 | 14,000 | 6 | 3 | 9 | 2.0:1 |
| Pet Hair Cleanup | best vacuum for pet hair | 32,000 | 3 | 39,000 | 12 | 6 | 18 | 2.0:1 |
| Cat Gear | best cat tree | 3,200 | 0 | 4,200 | 20 | 10 | 30 | 2.0:1 |
| Dog Beds & Comfort | best dog bed | 4,200 | 10 | 4,000 | 14 | 7 | 21 | 2.0:1 |
| **Total** | | | | | **72** | **36** | **108** | **2.0:1** |

Plus 40+ backlog pages = **~150 total validated opportunities**.

## Scoring Method

10-point composite: TP weight (0-2.5), KD inverse (0-2.5), Volume (0-1.5), Secondary coverage (0-1.5), Cluster support value (0-1.0), Traffic speed judgment (0-1.0). Support pages get +0.5 cluster-strengthening bonus when they directly serve a money page above them.

---

## Linkable Assets

*Discovered via `identify-linkable-assets` on 2026-04-17. Full candidate file: `data/linkable-asset-candidates.md`.*
*Asset Score is the 0–12 `identify-linkable-assets` rubric, NOT the volume-weighted score used in cluster tables. Consumed by `build-guide-pipeline` on the 1-in-10 cadence.*

| # | Asset Score (0–12) | Pattern | Zone | Build hrs | Desk | Status | Title |
|---|-------------------|---------|------|-----------|------|--------|-------|
| 1 | 11 | lookup | 1 | 6 | Cat Care Essentials | NOT BUILT | Cat litter decision table — filterable by brand, dust, tracking, clumping, odor, price per pound |
| 2 | 10 | downloadable | 1 | 5 | Cat Care Essentials | NOT BUILT | Printable cat litter box placement checklist (PDF + HTML) |
| 3 | 9 | calculator | 2 | 14 | Multi-Cat Home | NOT BUILT | Litter box sizing calculator — N+1 boxes + monthly litter cost + mat coverage |
| 4 | 9 | lookup | 1 | 7 | Pet Cleanup | NOT BUILT | Pet hair cleanup decision table — surface × tool type × fur type |
| 5 | 8 | downloadable | 1 | 4 | Cat Care Essentials | NOT BUILT | Printable cat water fountain cleaning schedule |

---

## TOP BUILD QUEUE (First 40 Pages)

Build order interleaves money and support pages per the 2:1 cadence rule.

| # | Slug | Cluster | Type | Primary Keyword | Vol | KD | TP | Score | Desk | Status |
|---|------|---------|------|----------------|-----|----|----|-------|------|--------|
| 1 | best-cat-litter | Litter | money | best cat litter | 26,000 | 8 | 9,800 | 9.4 | Cat Care Essentials | LIVE |
| 2 | best-cat-water-fountain | Fountain | money | best cat water fountain | 9,200 | 2 | 14,000 | 9.8 | Cat Care Essentials | LIVE |
| 3 | best-vacuum-for-pet-hair | Pet Hair | money | best vacuum for pet hair | 32,000 | 3 | 39,000 | 9.9 | Pet Cleanup | LIVE |
| 4 | how-to-get-rid-of-cat-pee-smell | Litter | support | how to get rid of cat pee smell | 8,100 | 6 | 6,500 | 9.2 | Cat Care Essentials | LIVE |
| 5 | best-cat-litter-for-odor-control | Litter | money | best cat litter for odor control | 2,200 | 2 | 4,400 | 9.6 | Multi-Cat Home | LIVE |
| 6 | best-cat-tree | Cat Gear | money | best cat tree | 3,200 | 0 | 4,200 | 9.3 | Cat Care Essentials | LIVE |
| 7 | how-to-remove-pet-hair-from-couch | Pet Hair | support | how to remove pet hair from couch | 8,700 | 0 | 2,500 | 9.1 | Pet Cleanup | LIVE |
| 8 | best-cat-harness | Cat Gear | money | best cat harness | 3,600 | 4 | 6,800 | 9.3 | Cat Care Essentials | LIVE |
| 9 | best-dust-free-cat-litter | Litter | money | best dust free cat litter | 1,200 | 0 | 1,200 | 9.1 | Cat Care Essentials | LIVE |
| 10 | how-much-cat-litter-to-use | Litter | support | how much cat litter to use | 300 | 0 | 600 | 8.7 | Cat Care Essentials | LIVE |
| 11 | best-non-tracking-cat-litter | Litter | money | best non tracking cat litter | 1,100 | 0 | 4,400 | 9.1 | Cat Care Essentials | LIVE |
| 12 | best-cordless-vacuum-for-pet-hair | Pet Hair | money | best cordless vacuum for pet hair | 9,200 | 5 | 8,700 | 9.4 | Pet Cleanup | LIVE |
| 13 | best-cooling-dog-bed | Dog Bed | money | best cooling dog bed | 400 | 2 | 6,000 | 9.0 | Dog Comfort | LIVE |
| 14 | how-often-to-change-cat-litter | Litter | support | how often to change cat litter | 350 | 2 | 3,100 | 8.9 | Cat Care Essentials | LIVE |
| 15 | best-cat-carrier | Cat Gear | money | best cat carrier | 2,700 | 1 | 2,200 | 9.0 | Cat Care Essentials | LIVE |
| 16 | best-cat-litter-mat | Litter | money | best cat litter mat | 1,100 | 3 | 2,300 | 8.8 | Cat Care Essentials | LIVE |
| 17 | how-to-clean-cat-pee-from-carpet | Litter | support | how to clean cat pee from carpet | 1,000 | 2 | 5,400 | 9.0 | Cat Care Essentials | LIVE |
| 18 | best-chew-proof-dog-bed | Dog Bed | money | best chew proof dog bed | 400 | 3 | 5,400 | 8.9 | Dog Comfort | LIVE |
| 19 | best-cat-litter-for-multiple-cats | Litter | money | best cat litter for multiple cats | 2,000 | 0 | 1,500 | 8.6 | Multi-Cat Home | LIVE |
| 20 | best-pet-hair-remover | Pet Hair | money | best pet hair remover | 1,000 | 2 | 6,000 | 8.9 | Pet Cleanup | LIVE |
| 21 | best-upright-vacuum-for-pet-hair | Pet Hair | money | best upright vacuum for pet hair | 900 | 0 | 36,000 | 9.5 | Pet Cleanup | NOT BUILT |
| 22 | how-to-keep-cat-litter-from-smelling | Litter | support | how to keep cat litter from smelling | 150 | 2 | 1,000 | 8.8 | Multi-Cat Home | NOT BUILT |
| 23 | best-cat-tree-for-large-cats | Cat Gear | money | best cat tree for large cats | 900 | 1 | 2,300 | 8.7 | Cat Care Essentials | LIVE |
| 24 | best-indestructible-dog-bed | Dog Bed | money | best indestructible dog bed | 250 | 5 | 15,000 | 9.1 | Dog Comfort | LIVE |
| 25 | how-to-remove-pet-hair-from-clothes | Pet Hair | support | how to remove pet hair from clothes | 150 | 0 | 5,400 | 8.8 | Pet Cleanup | LIVE |
| 26 | best-cat-litter-for-litter-robot | Litter | money | best cat litter for litter robot | 1,100 | 2 | 2,800 | 8.9 | Upgrade & Automation | NOT BUILT |
| 27 | best-cat-harness-escape-proof | Cat Gear | money | best cat harness escape proof | 300 | 2 | 6,400 | 8.8 | Cat Care Essentials | NOT BUILT |
| 28 | best-stainless-steel-cat-water-fountain | Fountain | money | best stainless steel cat water fountain | 1,200 | 1 | 1,300 | 8.7 | Cat Care Essentials | NOT BUILT |
| 29 | how-to-wash-a-dog-bed | Dog Bed | support | how to wash a dog bed | 600 | 1 | 900 | 8.5 | Dog Comfort | NOT BUILT |
| 30 | best-outdoor-dog-bed | Dog Bed | money | best outdoor dog bed | 300 | 2 | 4,000 | 8.6 | Dog Comfort | NOT BUILT |
| 31 | best-cat-scratching-post | Cat Gear | money | best cat scratching post | 1,700 | 15 | 1,800 | 7.8 | Cat Care Essentials | NOT BUILT |
| 32 | how-much-does-cat-litter-cost | Litter | support | how much does cat litter cost | 200 | 3 | 7,500 | 8.9 | Cat Care Essentials | NOT BUILT |
| 33 | best-cat-carrier-backpack | Cat Gear | money | best cat carrier backpack | 80 | 1 | 6,700 | 8.6 | Cat Care Essentials | NOT BUILT |
| 34 | best-corded-vacuum-for-pet-hair | Pet Hair | money | best corded vacuum for pet hair | 400 | 2 | 20,000 | 9.2 | Pet Cleanup | NOT BUILT |
| 35 | best-dog-bed-for-older-dogs | Dog Bed | money | best dog bed for older dogs | 500 | 1 | 4,100 | 8.5 | Dog Comfort | NOT BUILT |
| 36 | how-to-get-rid-of-cat-smell-in-house | Litter | support | how to get rid of cat smell in house | 800 | 3 | 1,100 | 8.4 | Cat Care Essentials | NOT BUILT |
| 37 | best-natural-cat-litter | Litter | money | best natural cat litter | 600 | 3 | 4,500 | 8.7 | Cat Care Essentials | NOT BUILT |
| 38 | best-cat-sling-carrier | Cat Gear | money | best cat sling carrier | 100 | 0 | 5,300 | 8.5 | Cat Care Essentials | NOT BUILT |
| 39 | how-to-get-cat-to-use-scratching-post | Cat Gear | support | how to get cat to use scratching post | 200 | 0 | 2,500 | 8.4 | Cat Care Essentials | LIVE |
| 40 | best-dog-car-seat-cover | Dog Bed | money | best dog car seat cover | 450 | 3 | 3,200 | 8.5 | Dog Comfort | NOT BUILT |

---

## FULL CLUSTER ROADMAPS

### Cluster 1: Cat Litter & Litter Boxes (30 pages)

**Money Pages (20):**

| Slug | Primary Keyword | Vol | KD | TP | Score | Desk | Status |
|------|----------------|-----|----|----|-------|------|--------|
| best-cat-litter | best cat litter | 26,000 | 8 | 9,800 | 9.4 | Cat Care Essentials | LIVE |
| best-cat-litter-for-odor-control | best cat litter for odor control | 2,200 | 2 | 4,400 | 9.6 | Multi-Cat Home | LIVE |
| best-dust-free-cat-litter | best dust free cat litter | 1,200 | 0 | 1,200 | 9.1 | Cat Care Essentials | LIVE |
| best-non-tracking-cat-litter | best non tracking cat litter | 1,100 | 0 | 4,400 | 9.1 | Cat Care Essentials | LIVE |
| best-cat-litter-for-multiple-cats | best cat litter for multiple cats | 2,000 | 0 | 1,500 | 8.6 | Multi-Cat Home | LIVE |
| best-cat-litter-for-litter-robot | best cat litter for litter robot | 1,100 | 2 | 2,800 | 8.9 | Upgrade & Automation | NOT BUILT |
| best-cat-litter-mat | best cat litter mat | 1,100 | 3 | 2,300 | 8.8 | Cat Care Essentials | LIVE |
| best-cat-litter-deodorizer | best cat litter deodorizer | 300 | 0 | 300 | 7.6 | Cat Care Essentials | NOT BUILT |
| best-cat-litter-box | best cat litter box | 7,400 | 13 | 22,000 | 8.8 | Cat Care Essentials | NOT BUILT |
| best-automatic-litter-box | best automatic litter box | 10,000 | 13 | 10,000 | 8.5 | Upgrade & Automation | NOT BUILT |
| best-budget-automatic-litter-box | best budget automatic litter box | 250 | 3 | 33,000 | 9.0 | Upgrade & Automation | NOT BUILT |
| best-stainless-steel-litter-box | best stainless steel cat litter box | 200 | 0 | 9,300 | 8.8 | Cat Care Essentials | NOT BUILT |
| best-cat-litter-for-automatic-litter-box | best cat litter for automatic litter box | 500 | 1 | 3,300 | 8.5 | Upgrade & Automation | NOT BUILT |
| best-vacuum-for-cat-litter | best vacuum for cat litter | 600 | 0 | 800 | 7.2 | Cat Care Essentials | NOT BUILT |
| best-cat-litter-box-for-odor-control | best cat litter box for odor control | 1,200 | 3 | 1,500 | 8.1 | Multi-Cat Home | NOT BUILT |
| best-clumping-cat-litter | best clumping cat litter | 3,900 | 4 | 1,900 | 8.4 | Cat Care Essentials | NOT BUILT |
| best-natural-cat-litter | best natural cat litter | 600 | 3 | 4,500 | 8.7 | Cat Care Essentials | NOT BUILT |
| best-crystal-cat-litter | best crystal cat litter | 400 | 0 | 1,100 | 7.8 | Cat Care Essentials | NOT BUILT |
| best-lightweight-cat-litter | best lightweight cat litter | 300 | 0 | 900 | 7.5 | Cat Care Essentials | NOT BUILT |
| best-cat-litter-for-kittens | best cat litter for kittens | 700 | 4 | 2,600 | 8.3 | Cat Care Essentials | NOT BUILT |

**Support Pages (10):**

| Slug | Primary Keyword | Vol | KD | TP | Score | Desk | Status |
|------|----------------|-----|----|----|-------|------|--------|
| how-to-get-rid-of-cat-pee-smell | how to get rid of cat pee smell | 8,100 | 6 | 6,500 | 9.2 | Cat Care Essentials | LIVE |
| how-to-clean-cat-pee-from-carpet | how to clean cat pee from carpet | 1,000 | 2 | 5,400 | 9.0 | Cat Care Essentials | NOT BUILT |
| how-much-does-cat-litter-cost | how much does cat litter cost | 200 | 3 | 7,500 | 8.9 | Cat Care Essentials | NOT BUILT |
| how-often-to-change-cat-litter | how often to change cat litter | 350 | 2 | 3,100 | 8.9 | Cat Care Essentials | NOT BUILT |
| how-much-cat-litter-to-use | how much cat litter to use | 300 | 0 | 600 | 8.7 | Cat Care Essentials | LIVE |
| how-to-keep-cat-litter-from-smelling | how to keep cat litter from smelling | 150 | 2 | 1,000 | 8.8 | Multi-Cat Home | NOT BUILT |
| how-to-get-rid-of-cat-smell-in-house | how to get rid of cat smell in house | 800 | 3 | 1,100 | 8.4 | Cat Care Essentials | NOT BUILT |
| is-litter-deodorizer-safe-for-cats | is litter deodorizer safe for cats | 100 | 0 | 40 | 8.0 | Cat Care Essentials | NOT BUILT |
| cat-litter-deodorizer-vs-baking-soda | cat litter deodorizer vs baking soda | 10 | 0 | 2,200 | 8.1 | Cat Care Essentials | NOT BUILT |
| flushable-cat-litter-pros-and-cons | flushable cat litter pros and cons | 100 | 0 | 1,200 | 7.8 | Cat Care Essentials | NOT BUILT |

### Cluster 2: Cat Water Fountains (9 pages)

**Money Pages (6):**

| Slug | Primary Keyword | Vol | KD | TP | Score | Desk | Status |
|------|----------------|-----|----|----|-------|------|--------|
| best-cat-water-fountain | best cat water fountain | 9,200 | 2 | 14,000 | 9.8 | Cat Care Essentials | LIVE |
| best-stainless-steel-cat-water-fountain | best stainless steel cat water fountain | 1,200 | 1 | 1,300 | 8.7 | Cat Care Essentials | NOT BUILT |
| best-cat-water-fountain-easy-to-clean | best cat water fountain easy to clean | 70 | 6 | 14,000 | 7.9 | Cat Care Essentials | NOT BUILT |
| best-cat-water-fountain-for-multiple-cats | best cat water fountain for multiple cats | 50 | 6 | 12,000 | 7.0 | Multi-Cat Home | NOT BUILT |
| best-wireless-cat-water-fountain | best wireless cat water fountain | 200 | 10 | 11,000 | 7.2 | Upgrade & Automation | NOT BUILT |
| best-ceramic-cat-water-fountain | best ceramic cat water fountain | 100 | 2 | 1,300 | 7.5 | Cat Care Essentials | NOT BUILT |

**Support Pages (3):**

| Slug | Primary Keyword | Vol | KD | TP | Score | Desk | Status |
|------|----------------|-----|----|----|-------|------|--------|
| how-to-clean-cat-water-fountain | how to clean cat water fountain | 300 | 2 | 1,500 | 8.3 | Cat Care Essentials | NOT BUILT |
| cat-water-fountain-vs-bowl | cat water fountain vs water bowl | 100 | 0 | 800 | 7.5 | Cat Care Essentials | NOT BUILT |
| stainless-steel-vs-ceramic-cat-fountain | stainless steel vs ceramic cat water fountain | 50 | 0 | 40 | 6.6 | Cat Care Essentials | NOT BUILT |

### Cluster 3: Pet Hair Cleanup (18 pages)

**Money Pages (12):**

| Slug | Primary Keyword | Vol | KD | TP | Score | Desk | Status |
|------|----------------|-----|----|----|-------|------|--------|
| best-vacuum-for-pet-hair | best vacuum for pet hair | 32,000 | 3 | 39,000 | 9.9 | Pet Cleanup | LIVE |
| best-cordless-vacuum-for-pet-hair | best cordless vacuum for pet hair | 9,200 | 5 | 8,700 | 9.4 | Pet Cleanup | LIVE |
| best-upright-vacuum-for-pet-hair | best upright vacuum for pet hair | 900 | 0 | 36,000 | 9.5 | Pet Cleanup | NOT BUILT |
| best-corded-vacuum-for-pet-hair | best corded vacuum for pet hair | 400 | 2 | 20,000 | 9.2 | Pet Cleanup | NOT BUILT |
| best-robot-vacuum-for-pet-hair | best robot vacuum for pet hair | 17,000 | 10 | 15,000 | 8.8 | Pet Cleanup | NOT BUILT |
| best-stick-vacuum-for-pet-hair | best stick vacuum for pet hair | 4,200 | 9 | 8,700 | 8.5 | Pet Cleanup | NOT BUILT |
| best-handheld-vacuum-for-pet-hair | best handheld vacuum for pet hair | 2,200 | 5 | 350 | 7.8 | Pet Cleanup | NOT BUILT |
| best-pet-hair-remover | best pet hair remover | 1,000 | 2 | 6,000 | 8.9 | Pet Cleanup | NOT BUILT |
| best-pet-hair-remover-for-furniture | best pet hair remover for furniture | 300 | 1 | 600 | 7.5 | Pet Cleanup | NOT BUILT |
| best-pet-hair-remover-for-clothes | best pet hair remover for clothes | 150 | 3 | 1,900 | 7.8 | Pet Cleanup | NOT BUILT |
| best-lint-roller-for-pet-hair | best lint roller for pet hair | 300 | 0 | 350 | 7.2 | Pet Cleanup | NOT BUILT |
| best-pet-hair-remover-for-laundry | best pet hair remover for laundry | 250 | 1 | 90 | 7.0 | Pet Cleanup | NOT BUILT |

**Support Pages (6):**

| Slug | Primary Keyword | Vol | KD | TP | Score | Desk | Status |
|------|----------------|-----|----|----|-------|------|--------|
| how-to-remove-pet-hair-from-couch | how to remove pet hair from couch | 8,700 | 0 | 2,500 | 9.1 | Pet Cleanup | NOT BUILT |
| how-to-remove-pet-hair-from-clothes | how to remove pet hair from clothes | 150 | 0 | 5,400 | 8.8 | Pet Cleanup | NOT BUILT |
| robot-vacuum-vs-regular-vacuum-for-pet-hair | robot vacuum vs regular for pet hair | est. 50 | 0 | est. 1,000 | 7.5 | Pet Cleanup | NOT BUILT |
| cordless-vs-corded-vacuum-for-pet-hair | cordless vs corded vacuum pet hair | est. 50 | 0 | est. 800 | 7.3 | Pet Cleanup | NOT BUILT |
| how-to-reduce-pet-shedding | how to reduce pet shedding | est. 300 | 3 | est. 2,000 | 7.8 | Pet Cleanup | NOT BUILT |
| pet-hair-cleaning-routine | pet hair cleaning schedule tips | est. 100 | 0 | est. 500 | 7.0 | Pet Cleanup | NOT BUILT |

### Cluster 4: Cat Gear — Trees, Scratching, Carriers, Harnesses (30 pages)

**Money Pages (20):**

| Slug | Primary Keyword | Vol | KD | TP | Score | Desk | Status |
|------|----------------|-----|----|----|-------|------|--------|
| best-cat-tree | best cat tree | 3,200 | 0 | 4,200 | 9.3 | Cat Care Essentials | NOT BUILT |
| best-cat-tree-for-large-cats | best cat tree for large cats | 900 | 1 | 2,300 | 8.7 | Cat Care Essentials | NOT BUILT |
| best-cat-tree-for-maine-coon | best cat tree for maine coon | 150 | 0 | 23,000 | 8.8 | Cat Care Essentials | NOT BUILT |
| best-tall-cat-tree | best tall cat tree | 60 | 0 | 6,200 | 8.3 | Cat Care Essentials | NOT BUILT |
| best-modern-cat-tree | best modern cat tree | 60 | 5 | 4,200 | 7.8 | Cat Care Essentials | NOT BUILT |
| best-outdoor-cat-tree | best outdoor cat tree | 90 | 0 | 2,400 | 7.6 | Cat Care Essentials | NOT BUILT |
| best-cat-tree-for-kittens | best cat tree for kittens | 50 | 10 | 2,600 | 7.3 | Cat Care Essentials | NOT BUILT |
| best-wall-mounted-cat-shelves | best wall mounted cat shelves | 30 | 1 | 10,000 | 8.2 | Cat Care Essentials | NOT BUILT |
| best-cat-window-perch | best cat window perch | 350 | 1 | 1,000 | 7.5 | Cat Care Essentials | NOT BUILT |
| best-cat-bed | best cat bed | 700 | 0 | 5,200 | 8.5 | Cat Care Essentials | NOT BUILT |
| best-cat-scratching-post | best cat scratching post | 1,700 | 15 | 1,800 | 7.8 | Cat Care Essentials | NOT BUILT |
| best-cat-carrier | best cat carrier | 2,700 | 1 | 2,200 | 9.0 | Cat Care Essentials | NOT BUILT |
| best-cat-carrier-backpack | best cat carrier backpack | 80 | 1 | 6,700 | 8.6 | Cat Care Essentials | NOT BUILT |
| best-cat-sling-carrier | best cat sling carrier | 100 | 0 | 5,300 | 8.5 | Cat Care Essentials | NOT BUILT |
| best-cat-carrier-for-anxious-cats | best cat carrier for anxious cats | 200 | 6 | 2,100 | 7.8 | Cat Care Essentials | NOT BUILT |
| best-soft-cat-carrier | best soft cat carrier | 90 | 2 | 2,100 | 7.5 | Cat Care Essentials | NOT BUILT |
| best-cat-harness | best cat harness | 3,600 | 4 | 6,800 | 9.3 | Cat Care Essentials | NOT BUILT |
| best-cat-harness-escape-proof | best cat harness escape proof | 300 | 2 | 6,400 | 8.8 | Cat Care Essentials | NOT BUILT |
| best-cat-grooming-brush | best cat grooming brush | 150 | 7 | 1,600 | 7.5 | Cat Care Essentials | NOT BUILT |
| best-deshedding-tool-for-cats | best deshedding tool for cats | 150 | 0 | 1,300 | 7.8 | Cat Care Essentials | NOT BUILT |

**Support Pages (10):**

| Slug | Primary Keyword | Vol | KD | TP | Score | Desk | Status |
|------|----------------|-----|----|----|-------|------|--------|
| how-to-get-cat-to-use-scratching-post | how to get cat to use scratching post | 200 | 0 | 2,500 | 8.4 | Cat Care Essentials | NOT BUILT |
| how-to-train-cat-to-walk-on-leash | how to leash train a cat | 500 | 3 | 3,000 | 8.3 | Cat Care Essentials | NOT BUILT |
| how-to-choose-a-cat-carrier | how to choose a cat carrier | est. 100 | 2 | est. 1,200 | 7.8 | Cat Care Essentials | NOT BUILT |
| hard-vs-soft-cat-carrier | hard sided vs soft sided cat carrier | est. 70 | 0 | est. 800 | 7.5 | Cat Care Essentials | NOT BUILT |
| cat-tree-size-guide | what size cat tree do I need | est. 100 | 0 | est. 800 | 7.3 | Cat Care Essentials | NOT BUILT |
| how-to-clean-a-cat-tree | how to clean a cat tree | 200 | 2 | 1,000 | 7.5 | Cat Care Essentials | NOT BUILT |
| how-to-calm-cat-in-carrier | how to calm cat in carrier | 300 | 3 | 2,000 | 7.8 | Cat Care Essentials | NOT BUILT |
| how-to-put-harness-on-cat | how to put a harness on a cat | 500 | 2 | 2,500 | 8.0 | Cat Care Essentials | NOT BUILT |
| backpack-vs-traditional-cat-carrier | cat backpack vs carrier | est. 50 | 0 | est. 600 | 7.0 | Cat Care Essentials | NOT BUILT |
| how-to-choose-a-cat-tree | how to choose a cat tree | est. 100 | 2 | est. 1,000 | 7.3 | Cat Care Essentials | NOT BUILT |

### Cluster 5: Dog Beds & Comfort (21 pages)

**Money Pages (14):**

| Slug | Primary Keyword | Vol | KD | TP | Score | Desk | Status |
|------|----------------|-----|----|----|-------|------|--------|
| best-dog-bed | best dog bed | 4,200 | 10 | 4,000 | 8.2 | Dog Comfort | NOT BUILT |
| best-cooling-dog-bed | best cooling dog bed | 400 | 2 | 6,000 | 9.0 | Dog Comfort | NOT BUILT |
| best-chew-proof-dog-bed | best chew proof dog bed | 400 | 3 | 5,400 | 8.9 | Dog Comfort | NOT BUILT |
| best-indestructible-dog-bed | best indestructible dog bed | 250 | 5 | 15,000 | 9.1 | Dog Comfort | NOT BUILT |
| best-outdoor-dog-bed | best outdoor dog bed | 300 | 2 | 4,000 | 8.6 | Dog Comfort | NOT BUILT |
| best-orthopedic-dog-bed | best orthopedic dog bed | 1,300 | 15 | 9,600 | 8.0 | Dog Comfort | NOT BUILT |
| best-small-dog-bed | best small dog bed | 150 | 3 | 5,800 | 8.3 | Dog Comfort | NOT BUILT |
| best-dog-bed-for-older-dogs | best dog bed for older dogs | 500 | 1 | 4,100 | 8.5 | Dog Comfort | NOT BUILT |
| best-dog-bed-for-medium-dogs | best dog bed for medium dogs | 60 | 1 | 3,900 | 7.8 | Dog Comfort | NOT BUILT |
| best-cooling-dog-bed-for-large-dogs | best cooling dog bed for large dogs | 300 | 0 | 6,000 | 8.5 | Dog Comfort | NOT BUILT |
| best-dog-bed-for-car | best dog bed for car | 150 | 6 | 13,000 | 8.4 | Dog Comfort | NOT BUILT |
| best-dog-car-seat-cover | best dog car seat cover | 450 | 3 | 3,200 | 8.5 | Dog Comfort | NOT BUILT |
| best-waterproof-dog-bed | best waterproof dog bed | 200 | 0 | 350 | 7.2 | Dog Comfort | NOT BUILT |
| best-heated-dog-bed | best heated dog bed | 200 | 0 | 1,300 | 7.5 | Dog Comfort | NOT BUILT |

**Support Pages (7):**

| Slug | Primary Keyword | Vol | KD | TP | Score | Desk | Status |
|------|----------------|-----|----|----|-------|------|--------|
| how-to-wash-a-dog-bed | how to wash a dog bed | 600 | 1 | 900 | 8.5 | Dog Comfort | NOT BUILT |
| how-to-stop-dog-from-chewing-bed | how to stop dog from chewing bed | est. 200 | 2 | est. 1,500 | 7.8 | Dog Comfort | NOT BUILT |
| dog-bed-size-guide | what size dog bed do I need | est. 200 | 0 | est. 1,200 | 7.8 | Dog Comfort | NOT BUILT |
| cooling-bed-vs-elevated-bed-for-dogs | cooling dog bed vs elevated bed | est. 50 | 0 | est. 500 | 7.0 | Dog Comfort | NOT BUILT |
| orthopedic-vs-memory-foam-dog-bed | orthopedic vs memory foam dog bed | est. 50 | 0 | est. 400 | 7.0 | Dog Comfort | NOT BUILT |
| how-to-choose-a-dog-bed | how to choose a dog bed | est. 150 | 3 | est. 1,000 | 7.5 | Dog Comfort | NOT BUILT |
| indoor-vs-outdoor-dog-bed | indoor vs outdoor dog bed | est. 50 | 0 | est. 400 | 6.8 | Dog Comfort | NOT BUILT |

---

## BACKLOG (40+ Additional Opportunities)

Lower priority — build after top queue is complete.

| Slug | Cluster | Type | Primary Keyword | Vol | KD | TP | Status | Notes |
|------|---------|------|----------------|-----|----|----|--------|-------|
| best-automatic-cat-feeder | Expansion | money | best automatic cat feeder | 3,700 | 20 | 7,800 | NOT BUILT | KD 20 — revisit at DR 10+ |
| best-cat-calming-diffuser | Cat Gear | money | best cat calming diffuser | 350 | 5 | 1,100 | NOT BUILT | Borderline behavioral |
| best-cat-door | Cat Gear | money | best cat door | 250 | 2 | 1,400 | NOT BUILT | Low vol, wave 2 |
| best-litter-box-enclosure | Litter | money | best litter box enclosure | 70 | 4 | 1,000 | NOT BUILT | Litter furniture niche |
| best-elevated-dog-bed | Dog Bed | money | best elevated dog bed | 500 | 2 | 400 | NOT BUILT | Low TP |
| best-washable-dog-bed | Dog Bed | money | best washable dog bed | 150 | 2 | 2,000 | NOT BUILT | May overlap with hub |
| best-dog-blanket | Dog Bed | money | best dog blanket | 200 | 1 | 300 | NOT BUILT | Low TP |
| best-dog-steps-for-bed | Dog Bed | money | best dog steps for bed | 70 | 7 | 4,800 | NOT BUILT | Good TP, accessory |
| best-flushable-cat-litter | Litter | money | best flushable cat litter | 300 | 0 | 1,200 | NOT BUILT | Distinct from natural |
| best-rolling-cat-carrier | Cat Gear | money | best rolling cat carrier | 50 | 0 | 1,700 | NOT BUILT | Low vol |
| best-hard-cat-carrier | Cat Gear | money | best hard cat carrier | 50 | 0 | 2,000 | NOT BUILT | Covered by carrier hub |
| best-cat-tree-for-senior-cats | Cat Gear | money | best cat tree for senior cats | 50 | 3 | 500 | NOT BUILT | Small intent |
| best-pet-odor-eliminator | Cross | money | best pet odor eliminator | 1,000 | 5 | 1,100 | NOT BUILT | Supports odor cluster |
| best-pet-odor-eliminator-for-carpet | Cross | money | best pet odor eliminator for carpet | 300 | 2 | 1,300 | NOT BUILT | Surface-specific |
| best-pet-hair-remover-for-car | Pet Hair | money | best pet hair remover for car | 60 | 0 | 200 | NOT BUILT | Low TP |
| best-memory-foam-dog-bed | Dog Bed | money | best memory foam dog bed | 250 | 10 | 250 | NOT BUILT | Low TP |
| how-to-get-rid-of-cat-spray-smell | Litter | support | how to get rid of cat spray smell | 1,200 | 4 | 800 | NOT BUILT | Partially covered |
| how-to-get-rid-of-cat-pee-smell-on-couch | Litter | support | cat pee smell on couch | 200 | 0 | 1,100 | NOT BUILT | Surface variant |
| how-to-get-rid-of-cat-pee-smell-outside | Litter | support | cat pee smell outside | 150 | 0 | 1,300 | NOT BUILT | Location variant |
| how-to-get-cat-to-use-litter-box | Litter | support | how to get cat to use litter box | 150 | 4 | 4,300 | NOT BUILT | Borderline behavioral |
| best-pet-camera | Expansion | money | best pet camera | 1,500 | 33 | 3,000 | NOT BUILT | KD 33 — skip for now |
| best-shark-vacuum-for-pet-hair | Pet Hair | money | best shark vacuum for pet hair | 200 | 13 | 33,000 | NOT BUILT | Branded — may not rank |

---

## SKIPPED OVERLAPS

Syntax variants merged into stronger pages — do not build separately.

| Keyword | Merged Into |
|---------|-------------|
| best cat litter for odor | best-cat-litter-for-odor-control |
| best odor control cat litter | best-cat-litter-for-odor-control |
| low tracking cat litter | best-non-tracking-cat-litter |
| best low dust cat litter | best-dust-free-cat-litter |
| best self cleaning litter box | best-automatic-litter-box (same SERP) |
| best cat automatic litter box | best-automatic-litter-box |
| best auto cat litter box | best-automatic-litter-box |
| cleanest cat water fountain | best-cat-water-fountain-easy-to-clean |
| best cat tree for big cats | best-cat-tree-for-large-cats |
| best cat harness and leash | best-cat-harness (secondary KW) |
| best cat leash and harness | best-cat-harness (secondary KW) |
| best cat harness for walking | best-cat-harness (secondary KW) |
| best cat harness no escape | best-cat-harness-escape-proof |
| best cat backpack carrier | best-cat-carrier-backpack |
| best dog bed for chewers | best-chew-proof-dog-bed |
| best durable dog bed | best-chew-proof-dog-bed |
| best chew resistant dog bed | best-chew-proof-dog-bed |
| best dog cooling bed | best-cooling-dog-bed |
| best big dog bed | best-dog-bed (secondary KW) |
| what vacuum is best for pet hair | best-vacuum-for-pet-hair (secondary KW) |
| best vacuum cleaner for pet hair | best-vacuum-for-pet-hair (secondary KW) |
| best vacuum cleaners for pet hair | best-vacuum-for-pet-hair (secondary KW) |
| best home vacuum for pet hair | best-vacuum-for-pet-hair (secondary KW) |
| best robotic vacuum for pet hair | best-robot-vacuum-for-pet-hair |
| best automatic vacuum for pet hair | best-robot-vacuum-for-pet-hair |
| best dog hair remover | best-pet-hair-remover (secondary KW) |
| how to get dog hair off clothes | how-to-remove-pet-hair-from-clothes |
| how to get rid of cat urine smell | how-to-get-rid-of-cat-pee-smell |
| how to get rid of cat piss smell | how-to-get-rid-of-cat-pee-smell |
| how to clean cat pee off carpet | how-to-clean-cat-pee-from-carpet |
| how to clean cat urine from carpet | how-to-clean-cat-pee-from-carpet |
| how often should cat litter be changed | how-often-to-change-cat-litter |
| how often should you replace cat litter | how-often-to-change-cat-litter |
| how much is cat litter | how-much-does-cat-litter-cost |

---

## DESK ASSIGNMENT NOTES

**Existing desks cover clusters 1, 2, and most of 4:**
- Cat Care Essentials Desk → most litter, fountain, and cat gear pages
- Multi-Cat Home Desk → odor control, multi-cat variants
- Upgrade & Automation Desk → automatic litter boxes, Litter-Robot, wireless fountain

**New desks needed for clusters 3 and 5:**
- **Pet Cleanup Desk** → all pet hair vacuum and remover pages. Needs voice guide built via `build-editorial-desks`.
- **Dog Comfort Desk** → all dog bed pages. Needs voice guide built via `build-editorial-desks`.

Both new desks should follow the brand-level avatar framework in `data/avatar-research.md`. The Practical Starter and Clean-Space Manager avatars apply directly to both new clusters. Run `build-editorial-desks` before writing content for clusters 3 and 5.

## CATEGORIES UPDATE NEEDED

`src/config/site.ts` currently lists: Cat Litter, Water Fountains, Odor Control, Litter Area Cleanup, Pet Hair Cleanup.

Update to reflect actual clusters:
- Cat Litter & Litter Boxes
- Cat Water Fountains
- Cat Gear (Trees, Carriers, Harnesses)
- Pet Hair Cleanup
- Dog Beds & Comfort
