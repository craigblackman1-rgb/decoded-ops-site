# BRIEF: CR-WEB-065 fix 2 — finish colour contrast (WCAG AA)

Worktree: D:\apps\worktrees\decoded-ops-website\web065-tech-seo. Work only here. No push, no dev server, no browser, no database, no .env files.

Lighthouse on the rebuilt site still finds brand cerulean #219ebc used as TEXT colour (2.8-3.1:1). The token `--do-text-cerulean: #176f86` already exists in app/design-system/colors_and_type.css. Use it for every case where cerulean is the colour of text on a light background. Cerulean stays unchanged for backgrounds, borders, fills, strokes, icons and anything on a dark background.

## 1. Cerulean as text colour (~79 references)
Run: `git grep -n "color:var(--do-cerulean)\|color: var(--do-cerulean)\|color: 'var(--do-cerulean)'\|text-cerulean\b\|--do-text-accent" -- app components lib`
For each hit:
- If it sets the CSS `color` property (text) and the element sits on a light background (white, #f8f9fa off-white, light greys, #e3f0f4, #f9f2e1 cream cards): change to `var(--do-text-cerulean)`.
- Tailwind `text-cerulean` class: add in app/globals.css (after the Tailwind layers) `.text-cerulean { color: var(--do-text-cerulean); }` ONLY if the element is on light backgrounds everywhere it's used; otherwise replace the class per usage. Check `hover:text-cerulean` the same way.
- Leave `background`, `border*`, `fill`, `stroke`, `outline`, `box-shadow`, `--*` variable definitions unchanged.
- If the element is on a dark background (prussian #023047, #124e66, #0e3a50, dark cards): use `var(--do-sky-blue)` (#8ecae6) instead of cerulean.
Known instances confirmed by Lighthouse: locations h1 accent `span.h1.em` (style color var(--do-cerulean)), locations card labels `div.card > div > div`, locations paragraph links `p > a.text-cerulean` (also make those underlined), /apps/works `section#pricing p.table-foot > a`, /resources/sop-template `div.card > a` on a cream card, homepage d17 artwork `.docmini .row b`.

## 2. Hard-coded greys
- components/LocationPage.tsx: text `#a7b8c1` on #124e66 (4.45:1) -> `#c3d0d6`. Any `opacity: 0.4`/`0.5` applied to text on dark cards (`.loc-how .card p`, renders #738c99 on #0e3a50) -> remove the opacity and use `#c3d0d6`.
- /resources/sop-template `div.card > p` text #5c7d8c on #e3f0f4 -> `var(--do-text-muted)` (#3e6274). grep the repo for `#5c7d8c` and `#678391` and `#5a7d8f` used as text and replace with `var(--do-text-muted)`.
- Homepage breadcrumb-style list `ol > li > a > span` (11px, #486a7b on #dce2e5, 4.43:1) -> `var(--do-text-muted)`.
- d17 artwork tiny labels `.docmini span.tag` (#678391 on white) -> `var(--do-text-muted)`.

## 3. Check
`npx tsc --noEmit`, `npm run build` pass. Commit `fix(a11y): cerulean text shade + remaining low-contrast greys (CR-WEB-065)`. Report to .context/lanes/REPORT-web065-fix2.md with a table of every file:line changed and old -> new value.

## 4. Analytics scripts off the critical path
app/layout.tsx loads GA4 (gtag.js + gtag-init) and Ahrefs analytics with `strategy="afterInteractive"`, which makes Next emit `<link rel="preload" as="script">` for them in the head, competing with first paint. Change all three `<Script>` tags to `strategy="lazyOnload"`. Keep ids, src and init code identical.

## EXECUTION NOTE
You are pre-approved. Do NOT stop to ask "shall I proceed" or present a plan for approval — there is nobody to answer. Make every edit, run the checks, commit, and write the report in this single run.
