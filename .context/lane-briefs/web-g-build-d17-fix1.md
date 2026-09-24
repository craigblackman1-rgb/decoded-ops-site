# web-g-build-d17 fix1 (WO-INF-061, CR-WEB-055) — found by Claude on a production build

Sources: `.context/lane-briefs/d17-resources/` (list with the shell; your glob tool may skip dot-folders).

1. /resources/sop-template has NO D17 art at all. Port `sop-template.hero.html` (DO-ART-987) into
   app/resources/sop-template/page.tsx the same way the other resource pages do (dangerouslySetInnerHTML, global
   imports `@/app/d17-global.css` + `@/app/d17-resources.css`, `<D17Motion />`), in the hero slot the mockup render
   `resources-sop-template-1440.png` shows.
2. /resources/six-sigma still renders the old `<Plate ... no="DO-ART-209">` block (lines ~119-219) AND the new
   DO-ART-986. In the mockup DO-ART-986 REPLACES that plate. Remove the old Plate section (and the Plate import if
   now unused) so DO-ART-986 sits where the plate was.
3. Phone overflow (pre-existing, also on live), 390px viewport:
   - /resources/seasonal-capacity is 613px wide: the calculator input blocks "Your baseline" and "Your seasonal
     picture" (two-column field rows) don't wrap. Make them stack to one column below 640px, inputs width 100%,
     `min-width:0` on grid children.
   - /tools/ops-health-score is 480px wide: the 1-5 score button rows don't fit. Let each row wrap or shrink the
     buttons (flex-wrap, min-width 0, smaller gap) below 640px so the page is never wider than the viewport.
   Keep desktop unchanged.

`npx tsc --noEmit`, commit `fix(web): SOP hero art, six-sigma plate swap, calculator phone overflow (WO-INF-061)`.
No dev servers, browsers, builds, databases or .env files. Do not push.
