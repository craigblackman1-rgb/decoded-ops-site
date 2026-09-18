# Lane notes — inf061-u6-batch-b-fix2

## What was done
Moved `<figcaption>` and `.mark` from siblings of `.art.tx-photo` (under `<figure>`) to **inside** the `.art.tx-photo` div, matching the clarity.html mockup tree exactly.

### Structure change (before → after)

**Before:** figcaption and mark were siblings of `.art.tx-photo`, directly under `<figure>`. Because `.art.tx-photo` is `position:relative` (from ds-artwork.css) but the figure is `position:static`, the absolute-positioned caption and mark anchored to a distant ancestor — rendering 60px off-screen on desktop and 1,281px above the piece at 390px.

**After:** figcaption wrapped in `<div className="tx-photo__content">`, mark placed after it, both inside `.art.tx-photo`. The `.art.tx-photo`'s `position:relative` now provides the correct containing block for the absolute-positioned caption and mark.

### CSS: no module changes needed
`ds-artwork.css` already defines `.tx-photo__content { position: absolute; inset: 0; z-index: 1; }` — no override was required. The brief's fallback rule for `.tx-photo__content` was not needed.

### No PhotoPiece.module.css changes
No module values were changed. The existing `.evCap`, `.evEyebrow`, `.evLine`, and `.mark` selectors all remain correct.

## Verify
- `npm run build` — green, TypeScript compiled successfully
- `npm run lint` — 147 pre-existing problems (85 errors, 62 warnings), 0 new in PhotoPiece.tsx or PhotoPiece.module.css. PhotoPiece.tsx has 1 pre-existing `<img>` warning (line 62).
- `git diff --stat HEAD` — only `components/PhotoPiece.tsx` changed
