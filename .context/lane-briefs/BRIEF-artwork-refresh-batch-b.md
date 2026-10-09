# Lane brief — WO-INF-061 u6 · Batch B · CR-WEB-034 money pages → unified artwork family v4

You are in a worktree branched off `origin/staging`. Commit early and often. Do NOT run a dev
server, Playwright, or any browser. Do NOT touch copy (no heading/paragraph/CTA/price/list text
changes anywhere). Do NOT edit ds-marketing.css / ds-plates.css / colors_and_type.css. Do NOT push —
stop when committed and write `.context/lane-reports/LANE-RESULT.json`. Only `git add` files you
changed or created — never `git add -A`.

## The spec (Design Parity Gate)
The 8 mockups are the spec. Open each and match it:
`D:\apps\design-systems\decoded-ops-website\{clarity,deliver,retained,transform,pricing,how-i-build,process-quality-system,small-business}.html`
plus `D:\apps\design-systems\decoded-ops-website\briefs\BATCH-B-NOTES.md` (slot chosen per page, alt text, captions).
Family rules: `D:\apps\design-systems\ds-decoded-ops-fractional-cto-ops-design-system\DESIGN.md` §12.

## Part 1 — bring the v4 artwork family into the app (once, site-wide, additive)
1. Copy `D:\apps\design-systems\decoded-marketing\artwork\ds-artwork.css` verbatim to
   `app/design-system/ds-artwork.css` (do not edit it; it is a canonical copy like ds-plates.css).
   Add `@import url('./ds-artwork.css') layer(ds);` to `app/design-system/ds-layer.css` directly
   after the ds-plates.css line. ds-artwork.css carries its own pasted `:root` token block — same
   values as colors_and_type.css, that duplication is expected and stays.
2. Create `components/Artwork.tsx` — the v4 sibling of `components/Plate.tsx` (read Plate.tsx
   first and follow its structure: `'use client'`, refuses to render without `no`, IntersectionObserver
   `sk-in` reveal, reduced-motion handling). It renders the `.art.tx-frame` + content-mode markup
   that `ds-artwork.js` `frame()` / `titleBlock()` inject (port those two functions from
   `D:\apps\design-systems\decoded-marketing\artwork\ds-artwork.js` into JSX; read the file — do not
   load ds-artwork.js at runtime). Props: `mode: 'schematic'|'measure'|'compare'|'flow'`, `tone`,
   `title`, `sub`, `no`, `rev`, `cls`, `children` (the unchanged drawing content). It must push
   `{no, rev, title, page}` into `window.DO_ARTWORK` like the injector does, so the register stays
   checkable against reality.
3. Create `components/PhotoPiece.tsx` — the `.tx-photo` evidence piece (`data-tx="photo"`,
   `data-artboard="ls"`, `data-no`, `data-rev`, `data-title`): `.tx-photo__shot` (the `<img>`, with
   width/height/alt, `loading="lazy"`), `__tint`, `__scanline`, one scrim, `__content` caption (mono
   eyebrow + one line), and the corner mark exactly as `mark()` in ds-artwork.js renders it
   (`DECODEDOPS.CO.UK · DO-ART-nnn · REV nn`, amber on Prussian Blue, bottom-left). Props:
   `src`, `width`, `height`, `alt`, `no`, `rev`, `eyebrow`, `caption`. Also pushes into `window.DO_ARTWORK`.
   No Orange anywhere in this component.
4. Plate.tsx and every page not in this batch stay untouched. Both families coexist until the last batch.

## Part 2 — the 8 pages (exactly these files under app/)
For each page: (a) swap `<Plate …>` for `<Artwork mode=… …>` with the SAME `no`, `rev="02"`, same
title/sub/tone/children — the drawing content inside is not redrawn; (b) add ONE `<PhotoPiece>` in the
slot the mockup shows (see BATCH-B-NOTES.md), inside the same section/wrap pattern the mockup uses.

| Page file | Plate → Artwork mode | PhotoPiece no · src · (width×height) |
|---|---|---|
| app/clarity/page.tsx | DO-ART-306 → flow | 908 · /images/money/hero-workshop-2026-09.jpg (1600×2397, crop via CSS to 16:9) |
| app/deliver/page.tsx | DO-ART-305 → flow | 909 · /images/money/prod-polo-2026-09.jpg |
| app/retained/page.tsx | DO-ART-204 → measure | 910 · /images/money/thread-spools-2026-09.jpg |
| app/transform/page.tsx | DO-ART-403 → compare | 911 · /images/money/press-transfer-2026-09.jpg — source is THIS repo's `public/images/real-example.jpg` (1600×1067), copied under the new name |
| app/pricing/page.tsx | DO-ART-203 → measure | 912 · /images/money/prod-mailer-2026-09.jpg (900×600) |
| app/how-i-build/page.tsx | DO-ART-302 → flow · DO-ART-112 → schematic | 913 · /images/money/prod-hivis-2026-09.jpg (900×1348) |
| app/process-quality-system/page.tsx | DO-ART-305 → flow | 914 · /images/money/cat-workwear-2026-09.jpg |
| app/small-business/page.tsx | (no plate today — add none) | 915 · /images/money/cat-promo-2026-09.jpg |

Photos: copy from `D:\apps\design-systems\decoded-marketing\assets\commerce\<name>.jpg` into
`public/images/money/` with the `-2026-09` suffix shown (new filenames — never reuse an existing
`/images/*` path; CDN caches 4h). Read real dimensions with the file, do not guess; if a file is
>300 KB, still ship it but list it in LANE-RESULT.json `oversize_assets`. Alt text and captions come
from BATCH-B-NOTES.md verbatim (they are the only new text allowed on the page).

## Decisions carried over from the mockup (BATCH-B-NOTES.md "Decisions taken") — implement all four
1. Remove any leftover `@media (max-width:600px) { .plate-frame { display:none } }` (or equivalent) on
   clarity, deliver, transform, process-quality-system so the plate keeps its `plate-scroll` behaviour at
   390px like the other pages. Check each page's CSS module / inline styles for it.
2. Photo piece tint at `.56` and bottom scrim at 52% — the mockups carry these as page-local rules
   (`.ev-piece .tx-photo__tint`, `.ev-piece .tx-photo__scrim-b`); put them in PhotoPiece's own CSS
   module, not in ds-artwork.css.
3. Evidence band takes the ground of the section it opens (`g-white` / `g-tint`) with `padding-bottom:0`;
   slot per page is in the notes table. Per-piece focus via `--ev-focus` (object-position) as listed.
4. Subtitle: the v4 injector drops `data-sub` (BUG-WEB-028, in ds-artwork.js). The mockups therefore show
   no subtitle, but the site's rev 01 plates do and the drawing content is unchanged — so `Artwork.tsx`
   MUST render `sub` exactly where `Plate.tsx` renders it today. Note this deliberate mockup deviation in
   LANE-RESULT.json `notes`.

## Rules
- Real characters in JSX text — never `\uXXXX` escapes. Before committing:
  `grep -rn '\\u[0-9a-fA-F]\{4\}' app components` must return nothing new.
- Every `<img>` has width, height and alt. Follow the img/Image convention each page already uses.
- `npm run build` must be green AND `npx next lint` must be clean (next build runs ESLint; raw
  `<a href>` / conditional hooks fail the Coolify build even when tsc passes). Paste both tails into
  LANE-RESULT.json.
- Scope: Part 1 files + the 8 page files + `public/images/money/*`. `git diff --stat origin/staging`
  must show nothing else.
- Commit message: `feat(CR-WEB-034): batch B — money pages re-bound to artwork family v4 (rev 02) + DO-ART-908–915 evidence photography`
- LANE-RESULT.json: `{ unit: "WO-INF-061 u6", status, files_changed, build_tail, lint_tail, oversize_assets, notes }`.
