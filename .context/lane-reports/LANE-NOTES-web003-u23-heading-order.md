# Lane notes — web003-u23-heading-order

## What was wrong

DO-ART-924 (the journey poster in `garment-decoration/page.tsx`) had an `<h3>` heading
without a preceding `<h2>` in its section. The artwork sits between the hero `<h1>` and
the Challenges `<h2>`, so the h3 was orphaned. The four station titles were `<h4>`,
which would have been valid children of the h3 but the h3 itself was the wrong level.

## What was changed

**`app/sectors/garment-decoration/page.tsx`** (inline HTML in `dangerouslySetInnerHTML`):
- DO-ART-924 heading: `<h3 class="hd">` → `<h2 class="hd">`
- Station titles: `<h4>` → `<h3>` (4 occurrences)

**`app/d17-global.css`** (CSS selectors for `.a924` artwork):
- `.a924 .st h4` → `.a924 .st h3` (3 selectors: main, `--end` modifier, responsive)

## Heading hierarchy after fix

```
h1  — hero (line 99)
  h2  — artwork "In, artwork, blanks..." (line 146)
    h3  — Order intake (line 165)
    h3  — The artwork loop (line 166)
    h3  — Blanks in (line 167)
    h3  — Despatch (line 168)
h2  — Where the problems tend to live (line 179)
h2  — What the work actually looks like (line 197)
  h3  — cross-link cards (lines 219, 229, 245, 261)
h2  — Operations consultant for print & embroidery (line 283)
h2  — ERP and supplier data integration (line 296)
h2  — Book a free discovery call (line 308)
```

All sections now have sequential nesting with no skipped levels.

## Verification

- `npm run build` passed clean
- `npm run lint` — 172 pre-existing errors/warnings, none in changed files
- No visual or copy changes — CSS selectors updated to match new h3 tags
- No `GarmentDecorationSchematic` component imported by this page (artwork is inline)
