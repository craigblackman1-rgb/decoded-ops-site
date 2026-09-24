# web-g-build-d17 fix2 (WO-INF-061) — found by Claude on a production build

1. The resources/tools mockups load d17-problems.css (it holds the `.px` rules: `.px .sx-top`, `.px .body`, ...).
   The built pages don't, so every `.px` hero (e.g. DO-ART-998 on /tools/rto-calculator) renders with its header
   labels overlapping and the left edge clipped. In EVERY file that has `import '@/app/d17-resources.css';`
   (16 page.tsx files under app/resources and app/tools), add `import '@/app/d17-problems.css';` on the line
   BEFORE it (order must be: d17-global, d17-problems, d17-resources). Nothing else in those files.
2. /resources/seasonal-capacity is still 414px wide at a 390px viewport: the month bar rows ("Feb 100%", "Apr 100%"
   ... in the seasonal chart of the calculator) are 414px wide. Make that row layout shrink below 640px
   (min-width:0 on the flex/grid children, let the label column narrow, or reduce the fixed widths) so nothing is
   wider than the viewport. Keep desktop unchanged.
`npx tsc --noEmit`, commit `fix(web): load problems D17 css on resources/tools, seasonal chart on phones (WO-INF-061)`.
No dev servers, browsers, builds, databases or .env files. Do not push.
