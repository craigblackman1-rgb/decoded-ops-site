# Lane brief — WO-INF-061 u6 fix2 · PhotoPiece caption + mark must live INSIDE the .art element

Worktree: D:\apps\worktrees\decoded-ops-website\inf061-u6-batch-b (HEAD 47e77dc). No dev server, no browser,
no copy changes, no push, only `git add` the files you change.

## Defect (measured by Claude on the built site)
In `components/PhotoPiece.tsx` the `<figcaption>` and the `.mark` are rendered as SIBLINGS of the
`.art.tx-photo` div, directly under the `<figure>`. They are `position:absolute` but the figure is
`position:static`, so they anchor to a distant ancestor: on desktop the caption sits 60px left of the
figure and is cut off; at 390px it renders 1,281px ABOVE the piece.

## Fix — one file, `components/PhotoPiece.tsx` (+ the module if a selector must move)
Match the mockup's tree exactly (`D:\apps\design-systems\decoded-ops-website\clarity.html`, search
`class="ev-piece"`): everything goes INSIDE the `.art.tx-photo` div, after the scrim —

```
<figure className={styles.evPiece}>
  <div className="art tx-photo" data-tx="photo" data-artboard="ls" data-no data-rev data-title style={--ev-focus}>
    <img className="tx-photo__shot" … />
    <div className="tx-photo__tint" />
    <div className="tx-photo__scanline" />
    <div className="tx-photo__scrim-b" />
    <div className="tx-photo__content">
      <figcaption className={styles.evCap}>
        <p className={styles.evEyebrow}>{eyebrow}</p>
        <p className={styles.evLine}>{caption}</p>
      </figcaption>
    </div>
    <div className="mark">…</div>      ← the corner mark, also inside .art (ds-artwork.js injects it there)
  </div>
</figure>
```
`.art.tx-photo` is `position:relative` in ds-artwork.css, so the absolute caption and mark now anchor to
the piece. If `.tx-photo__content` from ds-artwork.css sets its own padding/flex that fights `.evCap`,
add `.evPiece :global(.tx-photo__content){ position:absolute; inset:0; padding:0; display:block }` to
the module — do not edit ds-artwork.css. Do not change any module values from fix1.

## Verify (paste into LANE-RESULT)
- `npm run build` green; `npx next lint` no new errors in PhotoPiece.tsx / PhotoPiece.module.css.
- `git diff --stat HEAD` shows only components/PhotoPiece.tsx (and PhotoPiece.module.css if touched).
Commit: `fix(CR-WEB-034): batch B — evidence caption and mark anchored inside the .art piece (mockup tree)`
Write `.context/lane-reports/LANE-RESULT-inf061-u6-batch-b-fix2.json`.
