# Fabrication Audit — betterpetpicks — 2026-04-17

## Summary

| Severity | Count |
|---|---|
| HIGH | 5 |
| MEDIUM | 5 |
| LOW | 0 |
| Total | 10 |

**Gate status:** PASS (post-remediation 2026-04-17). Initial audit found 5 HIGH / 5 MEDIUM / 0 LOW; all HIGH flags remediated in the same day.

BPP is materially cleaner than BCF/CWP. All 5 HIGH flags are Pattern 4 (anonymous-expert / generic "veterinarians recommend" constructions) — concentrated in two files (`best-cat-water-fountain.ts` + `best-cat-litter-for-multiple-cats.ts`) plus a verdict line in `products.ts`. The voice guides in `authors.ts` are already clean — no first-party testing constructions — so no critical-path voice-guide fix is needed before remediation (unlike BCF). Patterns 1 (fabricated entities) and 2 (first-party testing voice) returned zero hits.

## Remediation plan (HIGH only)

1. **[src/data/content/best-cat-water-fountain.ts:314]** Pattern 4: "ceramic is the healthiest material option and veterinarians specifically recommend it for cats with chin acne"
   - Verdict: rewrite to sourced-synthesis voice (owner reports + known material science)
   - Suggested replacement: "It earns its spot because non-porous ceramic resists the bacterial colonization that owner reports on Reddit and r/CatAdvice tie to plastic-surface chin acne flare-ups. The smaller capacity keeps it from ranking higher."

2. **[src/data/content/best-cat-water-fountain.ts:315]** Pattern 4: "Ceramic is the material veterinarians recommend when chin acne keeps showing up on your cat."
   - Verdict: rewrite with owner-report attribution + material-science framing
   - Suggested replacement: "Ceramic is the material owners switch to when chin acne keeps showing up on their cat. The non-porous surface resists the bacterial colonization that porous plastic encourages..."

3. **[src/data/content/best-cat-litter-for-multiple-cats.ts:373]** Pattern 4: "Veterinarians and experienced multi-cat owners agree on this: the right number of litter boxes is the number of cats plus one."
   - Verdict: rewrite to reference the established rule by name (N+1) without attributing it to unnamed vets
   - Suggested replacement: "The long-standing N+1 rule — widely shared across multi-cat owner forums and standard pet-care guidance — is simple: the right number of litter boxes is the number of cats plus one. Two cats need three boxes..."

4. **[src/data/content/best-cat-litter-for-multiple-cats.ts:399]** Pattern 4: "The veterinary recommendation is one box per cat plus one extra."
   - Verdict: rewrite to name the rule (N+1) rather than attributing to unnamed "veterinary recommendation"
   - Suggested replacement: "They can, but they should not have to. The standard guidance — often called the N+1 rule in multi-cat households — is one box per cat plus one extra. Shared boxes fill faster..."

5. **[src/data/products.ts:787]** Pattern 4: "Veterinarians recommend non-porous surfaces for cats with recurring chin acne"
   - Verdict: rewrite with owner-report attribution (mirrors the fountain spoke fix)
   - Suggested replacement: "The Pioneer Raindrop is the pick when material hygiene matters most. Owner reports consistently tie recurring chin acne to porous plastic bowls, and non-porous ceramic is the typical switch that resolves it."

## Full findings

### src/data/content/best-cat-water-fountain.ts
- Line 314 [HIGH / Pattern 4] "...veterinarians specifically recommend it for cats with chin acne"
  - Context: `scoreDiffReason` field in product review block for Pioneer Pet Raindrop Ceramic
  - Remediation: rewrite with owner-report + material-science framing
- Line 315 [HIGH / Pattern 4] "Ceramic is the material veterinarians recommend when chin acne keeps showing up on your cat."
  - Context: body paragraph opener for same product review
  - Remediation: rewrite, mirror scoreDiffReason voice

### src/data/content/best-cat-litter-for-multiple-cats.ts
- Line 373 [HIGH / Pattern 4] "Veterinarians and experienced multi-cat owners agree on this..."
  - Context: "The N+1 box rule" subsection body
  - Remediation: rewrite to name the rule without attributing to unnamed vets
- Line 399 [HIGH / Pattern 4] "The veterinary recommendation is one box per cat plus one extra."
  - Context: FAQ answer to "Can two cats share the same litter box?"
  - Remediation: rewrite, attribute to the N+1 standard by name
- Line 244 [MEDIUM / Pattern 3] "Owner reports across 25,000+ reviews consistently describe the same pattern"
  - Context: review-volume numeric claim backing a product performance observation
  - Remediation: either drop the specific count (25,000+) or hedge to "across tens of thousands of owner reviews"
- Line 295 [MEDIUM / Pattern 2] "The 40-day odor protection claim also requires patience: probiotic formulas build effect over the first 5-7 days"
  - Context: references a manufacturer claim without naming the brand making it
  - Remediation: identify the brand making the 40-day claim (if known from product data) or rewrite as "The long odor-protection window that probiotic formulas market..."
- Line 322 [MEDIUM / Pattern 3] "Some save 20-30% on volume"
  - Context: owner-report synthesis of corn-vs-clay absorption tradeoff
  - Remediation: hedge ("some owners report saving roughly 20-30%") or drop the range

### src/data/content/best-cat-litter-for-odor-control.ts
- Line 215 [MEDIUM / Pattern 2] "Probiotic litter has been gaining traction on Reddit and in veterinary discussions because the mechanism is biological"
  - Context: category-trend framing
  - Remediation: drop "and in veterinary discussions" (Reddit alone is sourced and verifiable), or replace with a specific named veterinary publication
- Line 265 [MEDIUM / Pattern 3] "Naturally Fresh claims 3x the absorption rate of standard clay, and the owner reports generally support..."
  - Context: manufacturer claim attributed correctly, but 3x is unlinked
  - Remediation: acceptable as-is IF "Naturally Fresh claims" is explicit (which it is). Tagged MEDIUM; can be downgraded to LOW on rescan.

### src/data/products.ts
- Line 787 [HIGH / Pattern 4] "Veterinarians recommend non-porous surfaces for cats with recurring chin acne"
  - Context: `verdict` field for Pioneer Raindrop ceramic fountain
  - Remediation: rewrite with owner-report attribution (mirror the fountain spoke remediation)

## Patterns NOT found

- [x] Pattern 1 — Unverified named entities: 0 found. No fabricated-sounding "Pet Health Research Institute" / "Veterinary Research Council" style names. References to Reddit, Amazon, owner-report communities, and brand names are all real/verifiable.
- [x] Pattern 2 — Testing claims: 0 HIGH (2 MEDIUM around claim framing). No "we tested," "our team," "our lab," "we verified with a pet" constructions. BPP content is consistently written as owner-report + manufacturer-claim synthesis.
- [x] Pattern 3 — Uncited statistics: 0 HIGH (3 MEDIUM). Health-risk-adjacent numeric claims are absent; flagged stats are all volume/percentage estimates in product-comparison context.
- [x] Pattern 4 — Anonymous expert quotes: 5 HIGH. This is the entire remediation scope.

## Voice guide status

`src/data/authors.ts` reviewed. No first-party testing language in any of the 5 desk voice guides (Cat Care Essentials, Multi-Cat Home, Upgrade & Automation, Pet Cleanup, Dog Comfort). Voice guides consistently reference "long-term owner reviews," "retailer review patterns," "Reddit discussions," and "hands-on reviewer consensus." No critical-path voice-guide remediation required before downstream fixes.

## Re-audit checklist

After remediation:
- [ ] Re-grep for `veterinarian|veterinary recommendation|vets recommend|most vets|experts agree` (case-insensitive) — confirm zero HIGH hits in content + products.ts
- [ ] TS type-check on sites/betterpetpicks
- [ ] Confirm HIGH count is 0
- [ ] Append gate-passed entry to `sites/betterpetpicks/data/state-history.jsonl`
- [ ] Commit + push
