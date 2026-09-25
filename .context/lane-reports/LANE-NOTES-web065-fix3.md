# Lane Notes: web065-fix3 — Translucent text contrast fix

## What was done

### Task 1: Translucent prussian text (color-mix N < 72%)
Changed all `color:` (text) declarations using `color-mix(in srgb, var(--do-prussian-blue) N%, transparent)` where N < 72% to N = 72%.

**CSS files (49 lines changed):**
- `d17-global.css`: 19 lines — all text color-mix instances bumped to 72%
- `d17-resources.css`: 12 lines
- `d17-problems.css`: 14 lines
- `d17-locations.css`: 4 lines

**TSX files (6 instances):**
- `eternal-fitness/page.tsx:85` — 60% → 72%
- `sop-template/page.tsx:150` — 60% → 72%
- `decoded-method/page.tsx:208,253,265,309` — 70%/60% → 72%
- `should-i-replace-erp/page.tsx:166` — 70% → 72%

All `background:`, `border:`, `box-shadow:`, `stroke:`, `fill:` instances were correctly left untouched.

### Task 2: Opacity-faded text on dark (LocationPage.tsx)
- Line 225: `opacity:0.4` on `var(--do-text-on-dark)` → `color:'#c3d0d6'` (no opacity) — fixes 3.41:1
- Line 215: `opacity:0.72` on `var(--do-text-on-dark)` → `color:'#dfe6ea'` (no opacity)
- Line 224: `opacity:0.72` on `var(--do-text-on-dark)` → `color:'#dfe6ea'` (no opacity)
- Line 205: `opacity:0.72` on `var(--do-text-on-dark)` → `color:'#dfe6ea'` (no opacity)

### Task 3: Homepage step numbers
The brief's described element (`ol > li > a > span[aria-hidden="true"]` with `--do-text-subtle`) does not exist in the current code. The homepage step numbers (`.idx .no` and `.note .no`) already use `--do-text-muted`. No change needed.

## Verification
- `npx tsc --noEmit`: clean, 0 errors
- `npm run build`: pass (static + SSG routes generated)

## Notes
- The `--do-text-subtle` value is `#486a7b` (12px on white = 4.54:1, passes AA). It's defined for placeholders/disabled text only. All homepage step numbers already use `--do-text-muted` (`#3e6274`, better contrast).
- OG image `opacity:0.5` text (opengraph-image.tsx:95,100,105) is on a light background with `#023047` text — social share image, not regular page text. Left untouched per brief's scope.
