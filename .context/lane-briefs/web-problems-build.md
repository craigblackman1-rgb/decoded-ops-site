# Lane brief: WO-INF-061 problems-build · D17 artwork (all app/problems/<slug>/page.tsx for: ai-paralysis bottleneck-growth buy-vs-build cant-scale-operations data-scattered disaster-recovery ecommerce-not-connected erp-implementation-failure inventory-blind legacy-system manual-workarounds no-ops-owner ops-in-owners-head seasonal-peaks slow-processes spreadsheet-addiction systems-dont-talk. Sources: <slug>.hero.html (hero piece) and _reuse-718/719/917/918.html (inline pieces; which reuse goes on which page is in each page's mockup render and the d17-problems.css comments; if unclear, use: 718 for ai-paralysis bottleneck-growth disaster-recovery no-ops-owner ops-in-owners-head slow-processes; 719 for buy-vs-build ecommerce-not-connected legacy-system wrong-erp-software; 917 for data-scattered erp-implementation-failure spreadsheet-addiction; 918 for cant-scale-operations inventory-blind manual-workarounds seasonal-peaks systems-dont-talk). The inline piece replaces the old before/after plate (DO-ART-404..421). Also app/problems/wrong-erp-software if it exists. If some problems use a shared component (components/ProblemPageDS.tsx), add optional heroArt/inlineArt props rather than forking it.)

Worktree: this directory (off origin/staging, which already has the live D17 system: `app/d17-global.css` (global D17 art +
sector CSS), `components/D17Motion.tsx`, and the sector pages as the reference implementation, e.g. `app/sectors/workwear/page.tsx`).
Commit here only. Never push.

## Spec (approved by Craig 2026-09-24, blanket go)
Mockup sources: `.context/lane-briefs/d17-problems/` (the page snippets *.html, plus `d17-art.css` and `d17-problems.css`), and the mockup renders
`*-1440.png` in the same folder = the Design Parity target. Image paths inside the sources already point at committed files under
`/images/d17/problems/`; do not add or move images.

## How to port (follow the sector pages' proven pattern exactly)
- Inject each art piece as raw HTML with `dangerouslySetInnerHTML` exactly like app/sectors/*/page.tsx does, class names unchanged.
- CSS: the injected markup uses PLAIN class names, so its CSS must be GLOBAL. Create `app/d17-problems.css` with the full contents of
  `d17-problems.css` (d17-art.css rules are already in app/d17-global.css) and import both globally in each page:
  `import '@/app/d17-global.css'; import '@/app/d17-problems.css';`. NEVER use a CSS module for injected markup.
  Prefix any generic selector that clashes with app/globals.css (.card .wrap .btn .lede .eyebrow .kicker .grid, bare elements) with `.d17 `.
- Render `<D17Motion />` on each page as the sector pages do.
- Keep each live page's existing copy/sections, except where the mockup changed copy to match the live site or the CR below.
- Craig's photo must not appear. At 390px nothing may overflow horizontally.

## Pages
all app/problems/<slug>/page.tsx for: ai-paralysis bottleneck-growth buy-vs-build cant-scale-operations data-scattered disaster-recovery ecommerce-not-connected erp-implementation-failure inventory-blind legacy-system manual-workarounds no-ops-owner ops-in-owners-head seasonal-peaks slow-processes spreadsheet-addiction systems-dont-talk. Sources: <slug>.hero.html (hero piece) and _reuse-718/719/917/918.html (inline pieces; which reuse goes on which page is in each page's mockup render and the d17-problems.css comments; if unclear, use: 718 for ai-paralysis bottleneck-growth disaster-recovery no-ops-owner ops-in-owners-head slow-processes; 719 for buy-vs-build ecommerce-not-connected legacy-system wrong-erp-software; 917 for data-scattered erp-implementation-failure spreadsheet-addiction; 918 for cant-scale-operations inventory-blind manual-workarounds seasonal-peaks systems-dont-talk). The inline piece replaces the old before/after plate (DO-ART-404..421). Also app/problems/wrong-erp-software if it exists. If some problems use a shared component (components/ProblemPageDS.tsx), add optional heroArt/inlineArt props rather than forking it.

## Copy fixes to apply in the same pass
CR-WEB-052: remove invented figures (cant-scale-operations £500k/£1.5m revenue references; seasonal-peaks 'forty orders a day ... two hundred'; spreadsheet-addiction forty-order and eight-month stories: rewrite those sentences without numbers); ERP page case study 02 '9 supplier feeds' -> '17 supplier feeds'; replace product names Excel -> 'a spreadsheet', Google Sheets -> 'a shared spreadsheet'. Don't create /problems/systems-dont-talk-video (the 404 is a separate item).

FORBIDDEN: dev servers, browsers, npm run build/next build, any DB or .env access, pushing, touching pages outside this batch
(except adding the new global CSS file).

DONE: `npx tsc --noEmit` passes; greps below return nothing; one commit "feat(web): D17 artwork on problems pages (WO-INF-061)".
  git grep -nE "Khaos|TackleBag|Tackle Bag|named with permission|WooCommerce|Medusa|Shopify|Google Sheets" -- <the batch's page dirs>
  git grep -n "craig-blackman" -- <the batch's page dirs>
Report per page: slots replaced, anything not ported and why.
