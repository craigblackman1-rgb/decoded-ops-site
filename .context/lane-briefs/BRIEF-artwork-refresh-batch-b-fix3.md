# Lane brief — WO-INF-061 u6 fix3 · URGENT · page scroll broken site-wide on staging

Worktree: D:\apps\worktrees\decoded-ops-website\inf061-u6-batch-b (HEAD 68d3c4e). No dev server, no browser,
no copy changes, no push, only `git add` the file you change.

## Defect
`app/design-system/ds-artwork.css` (verbatim canonical copy, do NOT edit it) contains the artwork EXPORT pin at
lines 77–79: `html, body { margin:0; padding:0; overflow:hidden; … }`. Imported into `layer(ds)` by
`app/design-system/ds-layer.css`, that now applies to every page: users cannot scroll. The mockups release the
pin with one page-local rule (`D:\apps\design-systems\decoded-ops-website\deliver.html` line ~2360:
`html, body{ overflow:visible; width:auto; height:auto; background:var(--do-surface-page) }`).

## Fix — `app/design-system/ds-layer.css` only (the file's own header says integration fixes go here)
After the existing `@import` lines, append:

```
/* ds-artwork.css is authored for artboard export and pins html/body to a fixed canvas
   (overflow:hidden, fixed width/height). In the app it is only a treatment library, so
   release the pin — same rule the standalone mockups carry after their inlined copy. */
@layer ds {
  html, body { overflow: visible; width: auto; height: auto; }
}
```
Read lines 77–95 of ds-artwork.css first and make sure every html/body property it pins (margin, padding,
overflow, width, height, any background) is either released here or is harmless for the app — if it sets
`background`, do NOT override it here (globals.css owns page background); list what you saw in LANE-RESULT.
Do not touch overflow-x rules that globals.css already sets on body.

## Verify
- `npm run build` green. `git diff --stat HEAD` = ds-layer.css only.
Commit: `fix(CR-WEB-034): release ds-artwork's html/body export pin in the ds layer — page scroll restored`
Write `.context/lane-reports/LANE-RESULT-inf061-u6-batch-b-fix3.json`.
