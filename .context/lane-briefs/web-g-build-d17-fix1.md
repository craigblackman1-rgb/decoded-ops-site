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

## 4. Hero layout does not match the mockup (ALL resource and tool pages) — the biggest gap
Mockup (see each *-1440.png): hero is TWO columns, text left, art right at roughly half width:
```
<section class="g-off"><div class="wrap rt-split">
  <div> eyebrow, h1, lede (and CTA/meta if the page has them) </div>
  {HERO ART FIGURE}
</div></section>
```
`.rt-split` is already in app/d17-resources.css (stacks to one column under 980px). Built pages instead put the art
full width UNDER the heading, which blows it up to ~1150px and makes its labels overlap (visible on
/tools/rto-calculator). Rebuild each hero with the rt-split wrapper exactly as above. Mockup pages using it:
resources-5-warning-signs.src.html resources-artwork-approval-playbook.src.html resources-audit-checklist.src.html resources-capacity-planner.src.html resources-decoded-method.src.html resources-erp-selection-playbook.src.html resources-seasonal-capacity.src.html resources-six-sigma.src.html resources-sop-template.src.html resources.src.html tools-automation-roi-calculator.src.html tools-ops-health-score.src.html tools-rto-calculator.src.html tools-should-i-replace-erp.src.html tools.src.html 
(i.e. every resource and tool page including /resources and /tools).

## 5. Inline pieces go straight after the hero
Where a page has an inline piece (audit-checklist DO-ART-984, six-sigma 986, capacity-planner 993,
artwork-approval-playbook 990), put it in its own section IMMEDIATELY after the hero, before the article body:
`<section class="g-white"><div class="wrap">{INLINE ART}</div></section>` (six-sigma: where the old plate was is fine if
that is directly after the hero; otherwise follow the mockup render). On /resources/audit-checklist it currently sits
at the very bottom of the page in a narrow column.
