# Lane notes — web003-u15-rail-breakpoint

## What changed

`app/homepage.css` — two edits to the `.rail` element (sheet index nav, left-side fixed nav):

1. **Visibility fix:** Changed base `.rail` rule from `display:none` to `display:block` with `position:fixed; left:16px`. The `@media(min-width:1360px)` query now only adjusts `left:26px` instead of gating visibility. The rail was previously hidden entirely below 1360px because the only `display:block` was inside that media query.

2. **Reduced-motion coverage:** Added `@media (prefers-reduced-motion: reduce)` block disabling transitions on `.rail a` (background/color) and `.rail .lbl` (opacity/transform). The global rule in `globals.css:145` already covers this via `transition-duration:0.01ms !important` on `*`, but the page-specific rule is belt-and-suspenders.

## No changes needed

`app/design-system/ds-nav.css` — checked for `.rail` references. Only contains `.mega-rail` and `.rail-all` (mega menu sidebar rail, unrelated). No edits required.

## Breakpoints in the file

Existing media queries: `min-width:1360px`, `max-width:1040px`, `max-width:900px`, `max-width:860px`, `max-width:760px`, `max-width:700px`.

## Verified

- CSS syntax correct (no unclosed braces, balanced blocks)
- File grew from 263 to 268 lines (net +5: removed 3 lines, added 8 lines)
- Only `app/homepage.css` staged and committed
