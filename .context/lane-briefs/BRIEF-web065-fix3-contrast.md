# BRIEF: CR-WEB-065 fix 3 — translucent text contrast

Worktree: D:\apps\worktrees\decoded-ops-website\web065-tech-seo. Work only here. No push, no dev server, no browser, no database, no .env files.
You are pre-approved: do NOT stop at a plan or ask for confirmation. Make the edits, run checks, commit, write the report, in one run.

## 1. Translucent prussian TEXT
Across app/**/*.css, app/**/*.tsx, components/**/*.tsx, text is coloured with `color-mix(in srgb, var(--do-prussian-blue) N%, transparent)` where N is below 72. At N=60 this is 3.6-4.0:1 (fails WCAG AA). Measured: at 72% it is >= 5.0:1 on every light background the site uses.
- For every occurrence where the CSS property is `color` (CSS `color:` or React `color:` in style objects) and N < 72: change N to 72.
- Do NOT change occurrences used for `background`, `border*`, `box-shadow`, `outline`, `fill`, `stroke`, gradients, or `--*` custom property definitions that feed those.
- If a custom property (e.g. `--ink-3: color-mix(... 55%, transparent)`) is used for BOTH text and borders, leave it and instead point the text usages to a new property with 72%.
Known failing instances: app/d17-global.css `.a1008 .docmini .tag` (60%); app/resources/sop-template/page.tsx `div.card > p` inline style (60%).

## 2. Opacity-faded text on dark
components/LocationPage.tsx ~line 225: `<p style={{ fontSize:'var(--do-text-xs)', color:'var(--do-text-on-dark)', opacity:0.4, ... }}>` (renders #738c99 on #0e3a50, 3.41:1) -> remove `opacity`, set `color: '#c3d0d6'`. Same for the `opacity: 0.72` paragraph just above it (fine at 0.72 but make it `color: '#dfe6ea'` without opacity for consistency). grep components/ and app/ for other text elements using `opacity: 0.4`/`0.5`/`opacity:.4`/`.5` on text (not images/art) and fix the same way.

## 3. Homepage numbered list
Homepage `ol > li > a > span[aria-hidden="true"]` (step numbers "01", "02"…, 11px) render #486a7b on #dce2e5 = 4.43:1. Find their CSS rule (grep app/homepage.css, app/page.tsx, app/d17*.css for the list; likely a rule using --do-text-subtle) and set the colour to `var(--do-text-muted)`.

## 3. Check
`npx tsc --noEmit` and `npm run build` pass. Commit `fix(a11y): translucent text >= 72% + faded dark text (CR-WEB-065)`. Report .context/lanes/REPORT-web065-fix3.md with file:line old -> new.
