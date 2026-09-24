# Lane notes: CR-WEB-048 case studies copy

## What changed

### app/case-studies/page.tsx
- Card 01: removed "Khaos Control ERP" desc, replaced with new copy. Updated pull figures.
- Card 02: simplified desc to copy file's one-liner. Updated pull figures.
- DO-ART-207 plate: replaced old figures (164,752/77%/11,064) with new (317,812/154,518/40). Replaced "Khaos Control ERP" label with "Data app (now the ERP)".
- DO-ART-207 plate: updated case study 02 figures (9/20-40 → 17/952/100%).

### app/case-studies/case-study-01/page.tsx
- Metadata/title/schema: removed every "Khaos" reference, named "Hanicks".
- Hero: new heading and intro per copy file.
- Plate DO-ART-205: updated subtitle, BEFORE/AFTER labels, removed old figures.
- Numbers section: replaced 3-stat layout with 6-stat grid per copy file. Added small print.
- Story: rewrote situation, what was done, progress sections verbatim from copy file.
- CTAs: unchanged per copy file.

### app/case-studies/case-study-02/page.tsx
- Metadata/schema: removed "nine supplier feeds", "Khaos Control" references.
- Hero: new intro per copy file.
- Plate DO-ART-206: updated subtitle, BEFORE/AFTER labels per copy file.
- Removed `supplierFeeds` array and feed-list CSS/JSX (the nine-brand list).
- Numbers section: replaced 3-stat layout with 6-stat grid per copy file. Added small print with projection caveat.
- Story: rewrote situation, what was done, progress sections per copy file.

## Sections with no counterpart in the copy file

- **Case study 01 "Related" section** (sectors/problems cards): not in the copy file, kept as-is — it references sector/problem pages, not client copy.
- **CTA strips** on both pages: copy file says "CTAs (unchanged)", kept as-is.
- **Case study 01 DO-ART-205 BEFORE items**: the copy file's situation section maps to the plate's BEFORE items. The plate's second BEFORE item ("No consistent SKU across suppliers") was derived from the copy's "no consistent SKU" — not verbatim but semantically matched to the existing SVG label style.

## Verification

- `npx tsc --noEmit`: clean, 0 errors
- `git grep -nE "Khaos|164,752|127,135|11,064|9 supplier feeds" -- app/case-studies`: 0 hits
- `git grep -nE "put live|selling through" -- app/case-studies`: 0 hits
