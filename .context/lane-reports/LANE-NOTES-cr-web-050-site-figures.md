# Lane notes: CR-WEB-050 site-wide figures + Khaos removal

## Edits by item

1. **app/apps/commerce/page.tsx** — FAQ question and answer updated (Khaos Control removed). Extended feature description simplified. Worked example paragraph: "into Khaos Control" → "into your ERP". All 4 edits landed.

2. **app/apps/data-app/page.tsx** — SVG layer label updated (dropped "Khaos Control · "). Stat tiles updated: 164,752 → 317,812, 77% → 154,518, 11,064 → 40. All labels updated to match brief. Khaos Control removed from stat label. All 3 stat edits landed.

3. **app/apps/page.tsx** — Commerce log-row description: "into Khaos Control" → "into one clean, matched list". SVG centre node: "Khaos Control · Symphony · yours · or the Data App itself" → "Your ERP · your website · or the Data App itself". Both edits landed.

4. **app/page.tsx (homepage)** — SVG stat plate: 164,752 → 317,812 (products brought in), 127,135 → 154,518 (matched automatically), 77% replaced with 40 (active suppliers), 11,064 → 3,844 (Amazon listings re-optimised). All labels updated. The 77% secondary stat was replaced with 40 in the matched-automatic row. Note: the brief said 4 tiles for a 3-row plate; I placed 40 next to 154,518 as the old 77% was positioned there.

5. **app/problems/data-scattered/page.tsx** — NowAfterPlate: 77%+ → "against every supplier feed", 164,752 → 317,812. Body paragraph rewritten with new figures, Khaos Control reference removed. All 3 edits landed.

6. **app/problems/erp-implementation-failure/page.tsx** — Before/After cards: 164,752 → 317,812, 127,135 → 154,518, 77% match rate → 40 active suppliers, 11,064 Khaos Control → 3,844 Amazon listings. All 4 edits landed.

7. **app/sectors/garment-decoration/page.tsx** — Case study lede: "Khaos Control ERP implementation" → "ERP change". Edit landed.

8. **app/transform/page.tsx** — Metadata description: 77% → 154,518, nine → 17. Lede: 164,752/77% → 317,812/154,518, nine → 17. SVG NOW side: 164,752 → 317,812. SVG AFTER side: 127,135 → 154,518, 77% → 40, 11,064 Khaos Control → "Data app (now the ERP)". Cards: 164,752/127,135 → 317,812/154,518, 77%/11,064 Khaos Control → 40/3,844 Amazon listings, 9 → 17. All edits landed.

## Remaining forbidden patterns

- `app/sectors/schoolwear/page.tsx:154` — "nine supplier feeds automated". Not in brief's edit list; left untouched per instructions.

## Verification

- `npx tsc --noEmit` — clean, 0 errors
- `git grep -nE "Khaos|164,752|127,135|11,064|77%|nine supplier feeds|9 supplier feeds" -- app ':!app/clients' ':!app/case-studies'` — 1 hit (schoolwear, outside scope)
