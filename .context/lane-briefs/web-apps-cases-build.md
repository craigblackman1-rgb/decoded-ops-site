# Lane brief: WO-INF-061 apps-cases-build · D17 artwork (app/apps/page.tsx, app/apps/data-app/page.tsx, app/apps/artwork-manager/page.tsx, app/apps/commerce/page.tsx, app/case-studies/page.tsx, app/case-studies/case-study-01/page.tsx (Hanicks; source case-studies-hanicks.main.html), case-study-02 (teamwear, NEVER named; source case-studies-tacklebag.main.html), case-study-03 (source case-studies-cobra-workwear.main.html), app/case-studies/eternal-fitness/page.tsx. Sources are whole-main snippets (*.main.html): port the art pieces into the matching sections of the live page; keep live copy (the case-study copy was updated 23 Sep and is authoritative).)

Worktree: this directory (off origin/staging, which already has the live D17 system: `app/d17-global.css` (global D17 art +
sector CSS), `components/D17Motion.tsx`, and the sector pages as the reference implementation, e.g. `app/sectors/workwear/page.tsx`).
Commit here only. Never push.

## Spec (approved by Craig 2026-09-24, blanket go)
Mockup sources: `.context/lane-briefs/d17-apps-cases/` (the page snippets *.html, plus `d17-art.css` and `d17-apps-cases.css`), and the mockup renders
`*-1440.png` in the same folder = the Design Parity target. Image paths inside the sources already point at committed files under
`/images/d17/apps-cases/`; do not add or move images.

## How to port (follow the sector pages' proven pattern exactly)
- Inject each art piece as raw HTML with `dangerouslySetInnerHTML` exactly like app/sectors/*/page.tsx does, class names unchanged.
- CSS: the injected markup uses PLAIN class names, so its CSS must be GLOBAL. Create `app/d17-apps-cases.css` with the full contents of
  `d17-apps-cases.css` (d17-art.css rules are already in app/d17-global.css) and import both globally in each page:
  `import '@/app/d17-global.css'; import '@/app/d17-apps-cases.css';`. NEVER use a CSS module for injected markup.
  Prefix any generic selector that clashes with app/globals.css (.card .wrap .btn .lede .eyebrow .kicker .grid, bare elements) with `.d17 `.
- Render `<D17Motion />` on each page as the sector pages do.
- Keep each live page's existing copy/sections, except where the mockup changed copy to match the live site or the CR below.
- Craig's photo must not appear. At 390px nothing may overflow horizontally.

## Pages
app/apps/page.tsx, app/apps/data-app/page.tsx, app/apps/artwork-manager/page.tsx, app/apps/commerce/page.tsx, app/case-studies/page.tsx, app/case-studies/case-study-01/page.tsx (Hanicks; source case-studies-hanicks.main.html), case-study-02 (teamwear, NEVER named; source case-studies-tacklebag.main.html), case-study-03 (source case-studies-cobra-workwear.main.html), app/case-studies/eternal-fitness/page.tsx. Sources are whole-main snippets (*.main.html): port the art pieces into the matching sections of the live page; keep live copy (the case-study copy was updated 23 Sep and is authoritative).

## Copy fixes to apply in the same pass
CR-WEB-053: remove platform names (WooCommerce on /apps; Medusa on /apps/commerce; Shopify and 'Medusa v2 and Next.js' on case study 03); remove the Cobra name from any caption/alt/art on case study 03 (keep the page anonymous: 'a workwear brand'). Keep Eternal Fitness naming as live (consented).

FORBIDDEN: dev servers, browsers, npm run build/next build, any DB or .env access, pushing, touching pages outside this batch
(except adding the new global CSS file).

DONE: `npx tsc --noEmit` passes; greps below return nothing; one commit "feat(web): D17 artwork on apps-cases pages (WO-INF-061)".
  git grep -nE "Khaos|TackleBag|Tackle Bag|named with permission|WooCommerce|Medusa|Shopify|Google Sheets" -- <the batch's page dirs>
  git grep -n "craig-blackman" -- <the batch's page dirs>
Report per page: slots replaced, anything not ported and why.
