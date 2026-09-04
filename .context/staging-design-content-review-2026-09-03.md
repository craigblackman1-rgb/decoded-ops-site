# Staging design & content review — 2026-09-03

WO: `wo-website-staging-design-content-review-2026-09-03` · Target: `origin/staging` @ 9fab990 · Method: 4 parallel review agents (code diagnostics, client-name sweep, playbook/orphan audit, page-purpose deep dive) + orchestrator visual verification of a local build of the staging branch (staging FQDN is behind Cloudflare Access, so verification ran on `next dev` at 9fab990).

## Filed in the hub (project `decoded-ops-website`, sprint "Current")

### Bugs

| Ref | Sev | Finding (root cause verified) |
|---|---|---|
| BUG-WEB-001 | **hotfix** | Real client financial docs served unauthenticated from `public/client-docs/` — TackleBag invoices + engagement letter, Scotshirts discovery report. Live on prod too. `noindex` header ≠ protection. Delete from `public/` both branches. |
| BUG-WEB-002 | high | Nav "four steps" numbers overlap text (desktop + mobile). `.rung` class collision: `marketing-pages-extra.css:159` global `.rung{padding:26px}` leaks into the nav counter circle (`ds-nav.css:127`). Rename the nav class. |
| BUG-WEB-003 | high | Small-business mega menu giant empty blue box: price-list `.mega-group` has no explicit `grid-column`, auto-places into the 260px rail column; the one-line `panel-note` stretches to that row's height. Only this panel is broken — `sector-grid` sets `grid-column:1/-2` and escapes. |
| BUG-WEB-004 | medium | Mega menu can't switch dropdowns directly — first click only closes the open one (outside-click handler). Every switch = two clicks. |
| BUG-WEB-005 | high | All 18 problem-page NOW/AFTER plates are half-empty: 700×520 panels, content stops at y≈350, +170px dead canvas above the title block. Copy-paste authoring defect, not CSS/animation. Fix once via a shared sub-component. |
| BUG-WEB-006 | medium | Pricing tables: `.ds-table` declared twice in `layer(ds)` with drifted values (later token file silently wins); 140px label column vs 355px bands; colspan rows break row rhythm; no mobile scroll hint. |
| BUG-WEB-007 | medium | GA4 events silently dropped: CSP `connect-src` lacks `*.analytics.google.com` (region1 endpoint blocked — observed live in console). Prod affected. |
| BUG-WEB-008 | medium | `/decoded-method` AND `/resources/decoded-method` both live + both in sitemap; code comment claims a redirect that doesn't exist in `next.config.ts`; Header/Footer link different ones. |

### CRs

| Ref | Summary |
|---|---|
| CR-WEB-011 | Anonymise client names on all public marketing surfaces — case studies become "Case study 01 — {sector descriptor}", metrics kept, slugs renamed with 301s, SVG plate text (hardcoded) swept, "named with permission" captions reworded. Eternal Fitness exempt. Full occurrence inventory captured by the sweep agent. |
| CR-WEB-012 | Wire the ERP selection playbook into buying-intent pages. It IS in the nav already — "Proof & free tools → Guides & writing → **ERP selection guide**" (label ≠ "playbook", which is why it was hard to find) — but neither ERP problem page nor `/tools/should-i-replace-erp` links it, and `problem-routing.ts` relatedReading data is dead on those pages. |
| CR-WEB-013 | Creative redesign of the 18 problem-page plates ("a set of boxes") — depict each problem's mechanism like the sector/apps/data plates already do. Design stage + mockups first. |
| CR-WEB-014 | Homepage "cost of standing still" ledger still uncited — trace to real client data (Hanicks section is the template) or rewrite qualitatively. |
| CR-WEB-015 | Discovery Day stragglers: `/resources/decoded-method` process row, `DiscoveryDaySchematic.tsx` rename, dead `ThreeLayerSchematic.tsx`. |
| CR-WEB-016 | 48 near-duplicate location pages (fractional-cto/tech-audit × 24 towns), off-ICP, thin — differentiate or consolidate. Unchanged by staging rebuild. |

### Gated questions (on the ops board)

1. `qmtld4wmby3` — public `/clients/*` proposal pages carry client names **and contact emails**, unauthenticated: gate / remove / keep?
2. `qmtld4wsjyb` — TackleBag's real supplier list identifies them even anonymised: genericise or accept?

## Context worth knowing

The staging rebuild already fixed most of what a main-branch review would flag: Discovery Day→Clarity Audit naming (main pages), the £395/£2,500 pricing contradiction, stacked CTAs on problem/sector pages, the orphaned data-app page (now a full `/apps` section), the "coming soon" software-reviews dead end, and most abstract box-diagram schematics (replaced by the DO-ART plate system, which is genuinely good on sector/apps/data pages). The 18 problem-page plates are the one place the plate system shipped broken, and they happen to be the most-trafficked template — hence the "basically a set of boxes" impression.

Verification notes: mobile menu additionally renders clipped with page content visible beneath it (noted on BUG-WEB-002 for retest); local dev measured the DO-ART-411 SVG at 0×0 on the problem page (noted on BUG-WEB-005 — check sizing during fix, doesn't reproduce on deployed staging).
