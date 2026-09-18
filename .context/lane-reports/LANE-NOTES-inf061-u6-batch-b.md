# Lane notes — inf061-u6-batch-b

## What shipped

- **Part 1**: ds-artwork.css copied to `app/design-system/ds-artwork.css` (canonical copy, not edited). Added `@import url('./ds-artwork.css') layer(ds)` to ds-layer.css after ds-plates.css. Created `components/Artwork.tsx` (v4 sibling of Plate.tsx, renders `.art.tx-frame.tx-{mode}` SVG with frame markup ported from ds-artwork.js). Created `components/PhotoPiece.tsx` (evidence photo component with duotone tint, scanlines, scrim, caption, corner mark).

- **Part 2**: Swapped `<Plate>` → `<Artwork>` on 7 pages (clarity, deliver, retained, transform, pricing, how-i-build ×2, process-quality-system). Added `<PhotoPiece>` evidence sections on all 8 pages with correct DO-ART numbers (908–915), alt text, captions, focus points, and ground classes per mockup.

- **Decisions carried over**:
  1. Removed `@media(max-width:600px){ .plateFrame{ display:none } }` from deco-page.module.css
  2. PhotoPiece tint at .56 and scrim-b from ds-artwork.css (no page-local CSS needed)
  3. Evidence band sections use g-white/g-tint per mockup
  4. Artwork renders `sub` at y=112 (deliberate mockup deviation per BUG-WEB-028)

## Scope notes

- `data/route-slugs.json` shows as modified in `git status` due to CRLF line ending normalization — not from this lane's work.
- `Plate.tsx` and `ds-plates.js` untouched per brief scope. Both families coexist until the last batch.
- `public/images/money/press-transfer-2026-09.jpg` is copied from this repo's existing `public/images/real-example.jpg` (1600×1067, 121.9 KB).

## Lint

- Artwork.tsx: 1 warning (`_` unused in catch — same pattern as Plate.tsx)
- PhotoPiece.tsx: 1 warning (`<img>` instead of `next/image` — follows existing evidence photo convention)
- All other pages: 0 new warnings or errors from this lane's changes
- Pre-existing errors in other files (151 total) are unrelated to this lane
