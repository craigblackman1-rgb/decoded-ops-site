# Lane result — web046-art-sizing (BUG-WEB-046)

## Fix 1 — container-unit self-sizing on `.d17` figures

**Approach chosen:** the brief's second sanctioned option — convert every self-sizing
`calc(N * var(--u))` on the `.d17` figure element itself to non-cqw equivalents
(`aspect-ratio` for min-heights, `--pu` percentage units for padding/gap). The figure
IS the query container, so cqw on it fell back to viewport width; percentage padding
resolves against the containing block (equal to the figure's own width for these
block-level pieces) and aspect-ratio derives height from the figure's width. No
wrapper markup was needed, so no page files were touched for this fix.

**Selectors changed (full list):**

| Selector | File(s) | Change |
|---|---|---|
| `.a917` | `app/d17-art.module.css`, `app/d17-global.css` | `gap`/`padding` `var(--u)` → `--pu` percent (`gap: calc(40/1052*100%)`, `padding: calc(N * var(--pu))`); added `--pu: calc(100%/1152)` |
| `.a918` | `app/d17-art.module.css`, `app/d17-global.css` | `min-height: calc(600 * var(--u))` → `aspect-ratio: 1152/600`; mobile override gained `aspect-ratio:auto` |
| `.a920` | `app/d17-art.module.css`, `app/d17-global.css` | `min-height: calc(460 * var(--u))` → `aspect-ratio: 1100/460`; mobile override gained `aspect-ratio:auto` |
| `.a939` | `app/d17-apps-cases.css` | `min-height: calc(640 * var(--u))` removed (in-flow content already exceeds 640u at every width, so a correctly-resolved min-height never bound — content defines the height) |
| `.a943` | `app/d17-apps-cases.css` | `min-height: calc(600 * var(--u))` → `aspect-ratio: 1152/600`; mobile override gained `aspect-ratio:auto` |
| `.a945` | `app/d17-apps-cases.css` | self `padding` `var(--u)` → `var(--pu)` (already defined in rule) |
| `.a953` | `app/d17-apps-cases.css` | `min-height: calc(520 * var(--u))` → `aspect-ratio: 1152/520`; mobile override gained `aspect-ratio:auto` |
| `.a957` | `app/d17-apps-cases.css` | self `padding` `var(--u)` → `var(--pu)` (already defined in rule) |
| `.a1006, .a1007` | `app/d17-locations.css` | self `padding` `var(--u)` → added `--pu: calc(100%/880)` and used it |

Sweep note: a repo-wide grep of all six D17 CSS files for `var(--u)` in
`min-height|padding|margin|height|gap` on figure-level selectors confirmed the table
above is exhaustive. Every remaining `var(--u)` hit is on a *child* element inside the
figure, where cqw correctly resolves against the `.d17` container — untouched by design.

## Fix 2 — `.sx` hero-column pieces placed full width

- Added `.sx--solo{ max-width:560px; margin-inline:auto }` next to `.sx` in
  `app/d17-global.css`.
- `app/resources/decoded-method/page.tsx` — DO-ART-988 figure class gained `sx--solo`.
- `app/resources/six-sigma/page.tsx` — DO-ART-985 figure class gained `sx--solo`.
- `app/sectors/print-promotional/page.tsx` — deleted the duplicate DO-ART-927 section
  (the second instance, previously at line ~137; the first instance at :110 sits in the
  hero split column and is kept).

## Fix 3 — mobile ceiling (≤640px)

New `@media (max-width: 640px)` blocks appended at the end of each CSS file (so they
win over the earlier ≤760/≤700 blocks). Secondary decorative layers hidden, argument-
carrying text kept; no `max-height` clipping used:

- `app/d17-global.css` — `.a831 .prints` (about route print row), `.a930 .match`
  (recently-matched example rows), `.a1008 .photopin` (home route poster photo pins).
- `app/d17-apps-cases.css` — `.a945 .pin` (pinned exhibits), `.a949 .stage .d17-doc.f3/.f4`
  (the two "too new to measure" file cards), `.a953 .sx-tag` hidden + `.a953 .phone2`
  shrunk to 200px/`.8px` units, `.a954 .stage .d17-doc` unit reduced to `.58px`,
  `.a957 .win-main .col:first-child` (drafted-against context column) + `--u:.85px`.
- `app/d17-problems.css` — `.a718 .stage .d17-doc:nth-child(3)` (third stacked doc),
  `.a967` bottom padding 70px→44px and lane margins tightened.
- `app/d17-resources.css` — `.a986` padding/gap and `.floors` gap tightened.
- `app/d17-art.module.css` — `.a831 .prints` hidden at ≤640px (placed after the
  existing ≤700px block so it wins; the about page uses hashed module classes, so the
  rule had to live in the module, not the global file).

Existing fixed mobile min-heights were checked: the stage min-heights on 718/949/954 are
child-element rules resolving against the figure container (correct, ~160–180px at
390px — not height drivers); the stacked *content* was the driver, hence the layer
hiding above. Heights not browser-verified (no dev server in lane).

## Fix 4 — mobile horizontal overflow

`.d17` has `overflow:hidden`, so the figures themselves cannot widen the page; the
overflow came from surrounding layout:

- `app/case-studies/eternal-fitness/page.tsx` (394px @390) — the `.grid--3` related
  cards: grid items default to `min-width:auto` and the `white-space:nowrap` `.btn`
  inside ("See the awards & engraving page") stretched the track past the column.
  Added `.grid--3 > *{ min-width:0 }` and `.grid .card .btn{ white-space:normal; text-align:center }`
  to the page's style block.
- `app/resources/seasonal-capacity` (414px @390) — clamped `.rt-split > *{ min-width:0 }`
  (`app/d17-resources.css`), the DO-ART-994 chart tracks `.yp`/`.ym` from
  `repeat(12, 1fr)` to `repeat(12, minmax(0, 1fr))`, and `.calc-months-grid > *{ min-width:0 }`
  (`components/calculators/calculators.css`) so the range-input cells can't stretch a
  track.

## Fix 5 — blog hero cap

`app/blog/[slug]/page.tsx` — hero image (`item.images[0]`, the `*-img-1.*` files) now
renders with explicit `width={1200} height={675}`, `maxWidth:960`, `marginInline:auto`,
`aspect-ratio:16/9`, `objectFit:cover`, `height:auto`. The second inline image is
unchanged, as the brief scoped the cap to the hero.

## Verification

- `npx tsc --noEmit` — clean.
- `npx eslint` on changed tsx files — 3 errors, all pre-existing `no-explicit-any` on
  origin/main in `app/blog/[slug]/page.tsx` (untouched lines 46/93/96).
- `next lint` is not valid in this Next version (`eslint` is the lint script).
- `node .context/price-audit.mjs --check` exits 1 on pre-existing "vest" word hits in
  five files this lane did not touch.
- No dev server / browser measurement was run (lane contract); fix-3 height reductions
  are CSS-reasoned, not re-measured.

## fix1 (lane web046-fix1) — blog hero mobile overflow, follow-up

Fix 5 capped the hero with `maxWidth:960` but omitted `width:'100%'` and
`display:'block'`. The `<img>` is a replaced element sized by its width/height
attributes, so on a 390px phone it still rendered 960px wide and overflowed the
page; `marginInline:auto` also had no effect because an inline image is not a
block box.

`app/blog/[slug]/page.tsx` (style object on the hero `<img>`) gained exactly two
declarations: `width: '100%'` and `display: 'block'`. `maxWidth:960`,
`marginInline:auto`, `aspectRatio:'16 / 9'`, `objectFit:cover` and `height:auto`
are unchanged. The image now fills its container up to the 960px cap and centres
as a block. `npx tsc --noEmit` clean. No other lines touched.
