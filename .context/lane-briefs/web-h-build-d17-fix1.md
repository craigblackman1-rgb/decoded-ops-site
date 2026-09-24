# web-h-build-d17 fix1 (WO-INF-061, CR-WEB-054) — parity + mobile fixes found by Claude on a production build

Reference: the mockup renders `.context/lane-briefs/d17-locations/*-1440.png` and the markup `*.main.html` in that folder.
NEW in that folder: `<page>.page-style.css` = each mockup page's own layout CSS (privacy, cookies,
locations-fractional-cto, locations-tech-audit). Port what's needed as GLOBAL CSS (append to app/d17-locations.css,
scoped under a page wrapper class so it cannot leak) — never a CSS module for injected markup.
List that folder with the shell (`ls`), your glob tool may skip dot-folders.

## 1. Town pages hero (app/locations/fractional-cto/[location]/page.tsx, app/locations/tech-audit/[location]/page.tsx)
Bug: at a 390px viewport the page is 521-555px wide. The hero art (figure .a1001 / .a1004) sits in a two-column grid
(text | art) whose second column collapses to 36px while the figure overflows.
Fix to match the mockup: hero text CENTRED in one column (mockup `.hero-center`: eyebrow, h1, lede, the two CTAs,
local chips), then the hero art full width BELOW it inside `<div class="wrap hero-art">` (max-width same as mockup,
as in the .main.html). No two-column hero grid. The page must not be wider than the viewport at 390px.

## 2. Privacy + cookies prose (app/privacy/page.tsx, app/cookies/page.tsx)
Bug: headings render at ~36px, lists have no bullets, spacing differs from the mockup.
Fix: port the `.prose` rules from privacy.page-style.css / cookies.page-style.css. Target computed values from the
mockup at 1440: h2 20px/700, margin-bottom 12px; h3 16px/700, margin 18px 0 8px; p secondary text colour,
relaxed line-height, margin-bottom 12px; ul disc bullets with left padding, li margin-bottom 6px; container max-width 72ch
centred; each clause section margin-bottom 36px (32px on cookies). Keep the legal text word for word.

Rules: change only those files plus app/d17-locations.css. `npx tsc --noEmit`, then commit
`fix(web): locations hero + legal prose parity with D17 mockups (WO-INF-061)`. No dev servers, browsers, builds,
databases or .env files. Do not push.
