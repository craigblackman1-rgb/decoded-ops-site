# Lane notes: web-c-build-d17-fix1

## Root cause

The D17 art CSS module (`d17-art.module.css`) was ported from the source `d17-art.css`
with kebab-case class names converted to camelCase (standard CSS modules behavior). But
the JSX files used **literal class name strings** (`className="n"`, `className="m-rise"`,
etc.) instead of CSS module references (`className={d17.n}`, `className={d17.mRise}`).

CSS modules scope all class names, so literal strings never match the compiled output.
This was the single largest rendering defect.

## What was fixed

### CSS module (`d17-art.module.css`)
- Added `.a916 .stage { position: relative; aspect-ratio: 560 / 380 }` - the hero
  documents container had no styles, so the fanned documents had no sized parent.
- Added `.factFig`, `.factFigSub`, `.factBody` rules - the About page fact figure
  numbers and subtitles had no styles at all.
- Added `.docket` and `.docket .issued` rules - the DO-ART-719 plate header on the
  About page rendered as unstyled text because homepage.css (which defines `.docket`)
  is not imported by the About page.

### page.tsx (Home)
- DO-ART-916: Changed `className="stage"` to `className={d17.stage}`. Changed all
  document inner classes (`tab`, `ref`, `sub`, `phase`, `lines`) and animation
  triggers (`m-drop`) from literals to module refs.
- DO-ART-917: Changed KPI inner classes (`l`, `n`, `d`), window chrome classes
  (`dots`, `crumb`, `pill`, `on`, `s`), meter/feeds classes (`row`, `track`, `fill`,
  `hd`, `r`, `ok`, `more`), and animation triggers (`m-rise`, `m-fill`, `m-fade`) from
  literals to module refs. Also changed `className="cap"` to `className={d17.cap}`.
- DO-ART-918: Changed ledger inner classes (`n`, `t`, `end`), print inner classes
  (`ref`, `bc`, `s`), and animation triggers from literals to module refs. Changed
  `className="copy"` to `className={d17.copy}`.

### about/page.tsx
- DO-ART-719: Changed `className="docket"` to `className={d17.docket}` and
  `className="issued"` to `className={d17.issued}`.
- DO-ART-831: Changed all animation triggers (`m-fade`, `m-draw`, `m-pop`, `m-drop`),
  container classes (`prints`, `stations`), inner classes (`n`, `tint`), and station
  classes (`st`, `stEnd`) from literals to module refs.

## Items addressed per lane brief

1. Home hero DO-ART-916: Documents now render with the stage container providing
   the aspect-ratio sizing.
2. Home DO-ART-917: KPI tiles now show large numbers (42u font) with proper mono
   labels, spacing, and the amber highlight on the matched tile.
3. About DO-ART-919a/b: Big figures "1,000+" and "4 1/2 years" now render in
   amber on the dark scrim with proper subtitle text.
4. About DO-ART-719: Docket plate header now styled (mono text, amber border).
5. All motion animation triggers now resolve to correct CSS module class names.

## Not addressed

- Item 6 (Home guarantee "3x" and About fact figures large-size): The guarantee
  section already uses `.seal-x` from homepage.css which has the correct sizing.
  The fact figure sizes are now handled by the new `.factFig` rule.
- Item 7 (390px mobile stacking): The responsive rules in the CSS module already
  handle all breakpoints. The class name fixes ensure these rules now apply.
