# Lane brief — WO-INF-061 u6 fix1 · Batch B · photo piece must be fluid, not the export artboard

Worktree: D:\apps\worktrees\decoded-ops-website\inf061-u6-batch-b (branch inf061-u6-batch-b, your own
earlier commit 607fb80 is HEAD~1). Do NOT run a dev server or browser. Do NOT touch copy. Do NOT edit
ds-artwork.css / ds-plates.css. Do NOT push. Only `git add` the files you change.

## Defect (verified by Claude on the built site, 1440 and 390)
`<PhotoPiece>` renders at a fixed 1440×810 on every viewport: ds-artwork.css's export geometry
(`.art[data-artboard="ls"] { width:1600px; zoom:.9 }`) is applying because nothing overrides it.
On desktop it overflows the 1200px `.wrap`; at 390 the viewer sees the left 390px of the image and the
caption + mark are clipped (body has overflow-x:hidden so it doesn't scroll — it just cuts off).
The mockups solve this with a page-local block. Reproduce it exactly.

## Fix 1 — `components/PhotoPiece.tsx` + new `components/PhotoPiece.module.css`
Port this block from `D:\apps\design-systems\decoded-ops-website\clarity.html` (search `.ev-piece{`) into a
CSS module, verbatim values, and apply the module classes. CSS modules are unlayered so they beat `layer(ds)`;
that is the point — do NOT use inline `style=` for these, and do NOT edit ds-artwork.css.

```
.evBand{ padding-bottom:0 }
.evPiece{ margin:0; container-type:inline-size; border-radius:var(--do-radius-2xl); overflow:hidden;
  box-shadow:var(--do-shadow-xl); border:1px solid color-mix(in srgb, var(--do-prussian-blue) 10%, transparent) }
.evPiece :global(.art.tx-photo[data-artboard="ls"]){ width:100%; height:auto; aspect-ratio:16/9; zoom:1; display:block }
.evPiece :global(img.tx-photo__shot){ width:100%; height:100%; object-fit:cover; object-position:var(--ev-focus, 50% 50%); display:block }
.evPiece :global(.tx-photo__tint){ opacity:.56 }
.evPiece :global(.tx-photo__scrim-b){ background:linear-gradient(0deg,
  color-mix(in srgb, var(--do-prussian-blue) 94%, transparent) 0%,
  color-mix(in srgb, var(--do-prussian-blue) 62%, transparent) 24%, transparent 52%) }
.evCap{ position:absolute; left:max(3.5cqw, 10px); right:max(3.5cqw, 10px); bottom:max(6cqw, 32px) }
.evEyebrow{ margin:0 0 .7em; font-family:var(--font-mono); font-weight:500; font-size:clamp(10px, 1.06cqw, 17px);
  letter-spacing:.18em; text-transform:uppercase; color:var(--do-sky-blue) }
.evLine{ margin:0; font-family:var(--font-display); font-weight:800; font-size:clamp(17px, 2.75cqw, 44px);
  line-height:1.1; letter-spacing:-.02em; color:var(--do-off-white) }
.evPiece :global(.mark){ left:max(3.5cqw, 10px); bottom:max(1.4cqw, 6px); font-size:clamp(8px, 1.375cqw, 22px);
  padding:.32em .55em; border-radius:4px }
```
Structure to match the mockup: `<figure className={styles.evPiece}>` wrapping the `.art.tx-photo` element
(the figure is the container; the `.art` element inside keeps `data-tx="photo" data-artboard="ls" data-no data-rev
data-title`). Caption = `<figcaption className={styles.evCap}>` with `<p className={styles.evEyebrow}>` and
`<p className={styles.evLine}>`. Keep the mark markup as ds-artwork.js `mark()` renders it, styled by the module.
Remove the inline `style=` props that the module now covers (position/padding/typography); the `--ev-focus`
custom property may stay as an inline style on the `.art` element since it is per-piece data.
Export `evBand` too and apply it on the 8 pages' evidence `<section>` (the class next to `g-white`/`g-tint`).

## Fix 2 — `components/Artwork.tsx`
The root `<svg class="art tx-frame tx-<mode>">` must carry `data-tx="frame" data-mode={mode}
data-artboard="page-1600x900" data-no={no} data-rev={rev} data-tone={tone} data-title={title} data-sub={sub}`
exactly as the mockups do (see any migrated plate in the mockups). Today `data-no`/`data-rev` are missing from
the DOM even though the register push has them.

## Verify before committing (paste tails into LANE-RESULT)
- `npm run build` green. `npx next lint` no new errors in the files you touched.
- `grep -rn '\u[0-9a-fA-F]\{4\}' components app/clarity app/deliver app/retained app/transform app/pricing app/how-i-build app/process-quality-system app/small-business` → nothing new.
- `git diff --stat HEAD~2` shows only: components/PhotoPiece.tsx, components/PhotoPiece.module.css, components/Artwork.tsx, the 8 page files (evBand class only), plus your earlier files.
Commit: `fix(CR-WEB-034): batch B — evidence piece fluid 16:9 in-page (mockup .ev-piece rules), Artwork root carries data-no/rev`
Write `.context/lane-reports/LANE-RESULT-inf061-u6-batch-b-fix1.json` `{ unit:"WO-INF-061 u6 fix1", status, files_changed, build_tail, lint_tail, notes }`.
