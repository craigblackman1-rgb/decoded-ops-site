# Work Order: decoded-ops-website — DS implementation + staging deploy — 2026-07-31

OWNER: (empty until claimed — see SOP-008 Ownership. Claim before grinding.)
SCOPE: decoded-ops-website (D:\apps\decoded-ops-website) — port the finished Open Design
mockups into real Next.js pages, bind the canonical design-system CSS/plate component,
reskin the pages the mockups never covered, then get the whole thing onto the `staging`
branch (staging.decodedops.co.uk, already live in Coolify, auto-deploys on push).

GOAL: `staging.decodedops.co.uk` shows the redesigned site — all pages from both
`OpenDesign_Brief_AllPages_2026-07-30.md` and `OpenDesign_Brief_Round2_2026-07-30.md`
(Parts 6 and 7) — bound to `ds-marketing.css` + `ds-plates.css` + `ds-plates.js`, `npm run
build` green, nothing broken that was working before.

MUST:
- Every worktree branches fresh off `origin/staging` per DO-SOP-010 (not `origin/main` —
  staging and main are one commit apart right now, but staging is the deploy target).
  Never build in the shared `D:\apps\decoded-ops-website` checkout directly.
- Lane 0 (foundation) lands and is verified BEFORE any other lane starts porting a page.
  Every other lane depends on it.
- Copy `ds-marketing.css`, `ds-plates.css`, `ds-plates.js`, `colors_and_type.css` from
  `D:\apps\design-systems\ds-decoded-ops-fractional-cto-ops-design-system\` into the
  website repo (public/ or app/, whichever the existing Tailwind setup makes least
  disruptive) and import them globally in `app/layout.tsx`. Do not fork or rename them —
  if a page-specific override is needed, that's page-local `<style>`, not a sheet edit.
- For each of the 16 finished mockups (source: `D:\apps\design-systems\decoded-marketing\`,
  all pass `check-pages.mjs` clean), port markup + the DS classes into the matching
  Next.js route, preserving the copy exactly. Route mapping:
  - `apps.html` → `/apps` (new)
  - `apps-data-app.html` → `/apps/data-app` (new — old `/decoded-data-app` gets a redirect to it)
  - `apps-artwork-manager.html` → `/apps/artwork-manager` (new)
  - `apps-commerce.html` → `/apps/commerce` (new)
  - `how-i-build.html` → `/how-i-build` (new)
  - `decoded-method.html` → `/decoded-method` (new — old `/resources/decoded-method` gets a redirect to it)
  - `process-quality-system.html` → `/process-quality-system` (new)
  - `pricing.html` → `/pricing` (replaces `PricingClient.tsx` — this is also the pricing
    correction from `DO_Pricing_Architecture_v8.1.md`, the numbers must match that document,
    not whatever's currently live)
  - `retained.html` → `/retained` (replaces existing)
  - `sectors-workwear.html` → `/sectors/workwear` (new)
  - `sectors-teamwear-clubwear.html` → `/sectors/teamwear-clubwear` (new)
  - `sectors-schoolwear.html` → `/sectors/schoolwear` (new)
  - `sectors-promotional-merchandise.html` → `/sectors/promotional-merchandise` (new)
  - `problems-erp-implementation-failure.html` → `/problems/erp-implementation-failure` (replaces existing — the ГBP150k story is gone, don't let it come back)
  - `pages.html` is the index/reference page from Open Design, not a real site route — skip it.
- `/sectors/workwear-teamwear` (old lumped page) redirects to `/sectors/workwear`, does not stay live.
- For everything in `OpenDesign_Brief_Round2_2026-07-30.md` Part 7 that has NO mockup yet
  (5 existing sector pages, 9 problem pages, tools ×6, resources ×5, `/contact`,
  `/privacy`, `/cookies`, `/small-business`, `/blog`, case studies ×4, locations ×2
  templates): reskin the LIVE page directly — bind the DS sheets, apply the class-inventory
  swap from `OpenDesign_Brief_Round2_2026-07-30.md` Part 0a, add the mobile nav fix. Copy
  stays exactly as-is except the two corrections already flagged: `/small-business` pricing
  (v8.1 figures) and `problems-erp-implementation-failure` (already covered above).
  **Correction, 31 Jul 2026: the problem-page count was 8, undercounted by one —
  `/problems/wrong-erp-software` is a live page missing from the original brief, now added
  to Round2 Part 4/7 and to Lane D below. Reskin only, same as the other eight.**
- `/case-studies/eternal-fitness`: add the disclosure line above the fold (Craig confirmed
  2026-07-31: stays on this page, same template as the other three, just the one line).
- Do not touch `/clients/*` (client portal), `/api/*`, or the empty stub routes
  (`app/fractional`, `app/audit`, `app/admin`).
- Do not edit `ds-marketing.css` / `ds-plates.css` / `ds-plates.js` content — if a genuine
  defect is found, that's a `[GATE]`, patch it upstream in the design-systems repo, not here.
- `npm run build` must pass clean before any lane's work is considered done.
- Two other Work Orders are GATED against this exact repo (`wo-marketing-engine-2026-07-28`,
  `wo-do-brand-marketing-2026-07-20`). Neither touches pages in scope here (they're blocked
  on email-send-provider and old-proposal-cleanup decisions) — confirmed no file overlap,
  but re-check `wo active` before merging in case that's changed.
- An unsupervised auto-push-to-main process was flagged against this repo previously
  (see `DECISIONS.md` in the design-systems repo, "⚠ Before anything"). Confirm nothing is
  auto-pushing before this WO's branches get merged — if in doubt, ask Craig rather than assume.

DECIDE YOURSELF: exact file/component structure for each ported page (server component vs
client, where shared layout pieces live); whether the DS CSS files go in `public/` or get
imported as regular stylesheets via `app/layout.tsx` (default: `app/`, so Next.js processes
them, not raw `public/` static serve); page order within a lane.

ASK FIRST: nothing in MUST requires a mid-grind chat interruption — queue anything
ambiguous as `[GATE]`/`[BLOCKED]` and keep going on the rest. The one exception: do not
merge anything to `staging` (the branch Coolify auto-deploys from) without a final
`npm run build` pass reported clean — that's the actual gate before this goes live, even
informally.

## DONE (ticks to zero = stop condition)
- [x] Lane 0 foundation merged: DS sheets bound, `app/layout.tsx` updated, build green
- [x] All 16 finished-mockup pages ported and routed per the MUST list above
- [x] All Round 2 Part 7 pages reskinned (or explicitly logged as deferred, not silently skipped)
- [x] Both redirects live (`/decoded-data-app` → `/apps/data-app`, `/resources/decoded-method` → `/decoded-method`, `/sectors/workwear-teamwear` → `/sectors/workwear`)
- [x] `/pricing` shows v8.1 figures, not the old v6.0 ones
- [x] `npm run build` clean on the final integration branch
- [x] Branch pushed to `staging`, `staging.decodedops.co.uk` confirmed serving the new pages (2026-07-31T21:03)
- [x] Round 2 (2026-08-01): 8 newly-designed pages ported (Lane H/I), homepage rebuilt (Lane J), 4 divergent-copy pages re-ported (Lane K/L), blog post template fixed (Lane M)
- [x] `npm run build` clean on the round-2 integration branch (9b825f8) and the case-studies hotfix (b9e53ff)
- [x] Round-2 branch + hotfix pushed to `staging`, all 15 pages + blog template confirmed live in browser (2026-08-01T09:55, correct H1s and DS classes verified via fetch against staging.decodedops.co.uk, not just build success)

**Round 2 postmortem:** Lane H (service pages) ignored the "do not touch ds-marketing.css" rule and deleted 196 lines of shared DS classes plus reverted the layout.tsx cascade-layer fix — caught before merge, only its 4 clean page.tsx files were cherry-picked in. Lane L (case-studies fix) was merged without full verification and turned out to have replaced 3 correctly-DS-bound pages with an old-Tailwind rebuild, shipping a real regression to staging for ~10 minutes before being caught and hotfixed (commit b9e53ff) via a direct re-port rather than another OpenCode dispatch. Lesson: verify OpenCode lane diffs against forbidden-file lists before merging, not just against build-passes-and-headline-matches.

## Round 3 — final close-out (2026-08-01)

- [x] `.context/tools/verify-pages.js` added (commit d3c4d3c) — derived route↔mockup check, not a hand-maintained list. First run: 73 PASS, 15 FAIL, 1 NO-MOCKUP across 89 pages.
- [x] Investigated all 15 FAILs individually:
  - **3 real bugs found and fixed** (commit c712ba4): `/tools/automation-roi-calculator`, `/tools/downtime-cost-calculator`, `/tools/rto-calculator` — the page shells were DS-bound but the actual calculator components (`components/calculators/*.tsx`) were 100% untouched old-Tailwind. Added `components/calculators/calculators.css` (--do-* tokens, no new hex) and converted all three, zero changes to calculation logic. Verified: 0 old-Tailwind classes remain, build clean.
  - **3 false positives, confirmed not bugs**: `/small-business`, `/locations/fractional-cto`, `/locations/tech-audit` — all fully DS-styled with correct v8.1 pricing; their headlines deliberately diverge from the generic mockup copy for SEO (location/keyword-targeted), not a defect. Left as-is.
  - **9 false positives, confirmed not bugs**: blog posts with no `cluster` tag in `blog-index.json` correctly render no "related reading" section by design (`RelatedPosts.tsx` returns `null`) — not a template bug.
  - **1 confirmed still-blocked**: `/blog` index has no mockup yet; the "blog-dedup unit E0" gate referenced in the brief couldn't be located in the registry or `wo-marketing-content-migration-2026-07-31` — likely already resolved or predates the registry, but not confirmed. `blog-index.json` itself looks clean (28 non-duplicate slugs).
- [x] Final verify-pages.js run: 76 PASS, 12 explained-non-bug FAILs, 1 NO-MOCKUP. Zero unexplained findings.
- [x] All worktrees for this WO removed via `git worktree remove` (not raw delete); all merged feature/hotfix branches deleted from origin.
- [x] OWNER cleared, work order closed.

**DONE. Nothing outstanding except `/blog` index (needs an Open Design mockup — not a code fix) and `/blog/fractional-cto` (blocked on content) — both correctly deferred on `wo-ds-implementation-staging-2026-07-31`, not silently dropped.**

## LANES
- Lane 0 — Foundation (DS binding, layout.tsx, redirects config) · MUST land first, everything else depends on it
- Lane A — Systems pages (apps index, data-app, artwork-manager, commerce, how-i-build) · depends on Lane 0
- Lane B — Core pages (pricing, retained, decoded-method, process-quality-system) · depends on Lane 0
- Lane C — Sector pages, all nine (4 new + 5 existing reskin) · depends on Lane 0
- Lane D — Problem pages, all ten (erp-implementation-failure rebuild + 9 reskin) · depends on Lane 0
- Lane E — Case studies (index + 4, including Eternal Fitness disclosure line) · depends on Lane 0
- Lane F — Everything else (tools ×6, resources ×5, contact, legal, small-business, blog, locations templates) · depends on Lane 0
- Lane G — Merge & deploy to staging · Lanes A–F merged and pushed 2026-07-31T21:03. **Round 1 complete.**

### Round 2 (2026-08-01) — full audit found gaps Round 1 missed. See `decoded-ops-website-page-audit-2026-08-01-UPDATED.xlsx` for the source data. Open Design has since produced 8 mockups that didn't exist during Round 1 scoping; Round 1's build also diverged from 7 mockups it did have. All Round-2 worktrees branch fresh off `origin/staging` (post Lane G).
- Lane H (`ds-impl2/lane-svc`, `D:/wt/dow2-lane-svc`) — Port `/clarity`, `/deliver`, `/transform`, `/about` from their now-finished mockups. These never had a mockup during Round 1 and are still on the pre-redesign Tailwind template.
- Lane I (`ds-impl2/lane-prob-new`, `D:/wt/dow2-lane-prob-new`) — Port `/problems/buy-vs-build`, `/problems/data-scattered`, `/problems/inventory-blind`, `/problems/legacy-system` from their now-finished mockups. Routes already exist with placeholder/old content.
- Lane J (`ds-impl2/lane-homepage`, `D:/wt/dow2-lane-homepage`) — Rebuild `/` (homepage) from `homepage.html`. Highest priority: most-visited page on the site, was never touched in Round 1 despite a finished mockup existing since before Round 1 started.
- Lane K (`ds-impl2/lane-prob-fix`, `D:/wt/dow2-lane-prob-fix`) — Fix `/problems/wrong-erp-software` (not built at all, still old Tailwind) and `/problems/ai-paralysis` (built but wrong headline/angle — re-port from mockup, don't just tweak the headline).
- Lane L (`ds-impl2/lane-cs-fix`, `D:/wt/dow2-lane-cs-fix`) — Fix `/case-studies/hanicks`, `/case-studies/tacklebag`, `/case-studies/cobra-workwear` (all three built but headline diverged from mockup — re-port from mockup). Also `/resources/six-sigma` (minor — one section swapped, low priority, do last if time allows).
- Lane M (`ds-impl2/lane-blog-tpl`, `D:/wt/dow2-lane-blog-tpl`) — Fix the shared blog-post Next.js template/component (`app/blog/[slug]/page.tsx` and whatever it renders) so it matches `blog-post.html`'s structure: post-header, post-meta, post-cta, related-posts sections. This is a single shared-component fix that should apply to all 28 live posts — do not attempt to hand-edit 28 pages individually, there are no per-post mockup files (posts are CMS/data-driven from `data/blog-index.json`).
- **Lane N — Merge & deploy round 2** (`ds-impl2/integration2`, `D:/wt/dow2-integration2`) · depends on: Lanes H, I, J, K, L, M all merged. `npm run build` clean, push to `staging`.

## UNITS (tag each; VERIFY as stated)

### Lane 0 — Foundation
- [AUTO] Copy `ds-marketing.css`, `ds-plates.css`, `ds-plates.js`, `colors_and_type.css` into the repo and import globally in `app/layout.tsx` — VERIFY: `npm run build` exits 0
- [AUTO] Wire the two redirects (`/decoded-data-app`→`/apps/data-app`, `/resources/decoded-method`→`/decoded-method`) plus `/sectors/workwear-teamwear`→`/sectors/workwear` in `next.config.ts` (or middleware, whichever the repo already uses for redirects) — VERIFY: build passes, redirect entries present in config
- [AUTO] Push `ds-impl/lane-0-foundation` to `origin` (feature branch, not `staging`) and report — VERIFY: `git push` succeeds, branch visible on GitHub

### Lane A — Systems pages
- [AUTO] Port `apps.html` → `/apps` — VERIFY: `npm run build`, route renders
- [AUTO] Port `apps-data-app.html` → `/apps/data-app` — VERIFY: same
- [AUTO] Port `apps-artwork-manager.html` → `/apps/artwork-manager` — VERIFY: same
- [AUTO] Port `apps-commerce.html` → `/apps/commerce` — VERIFY: same
- [AUTO] Port `how-i-build.html` → `/how-i-build` — VERIFY: same
- [AUTO] Push `ds-impl/lane-a-systems` to `origin`, report — VERIFY: build clean, pushed

### Lane B — Core pages
- [AUTO] Port `pricing.html` → `/pricing`, replacing `PricingClient.tsx`, figures matching `DO_Pricing_Architecture_v8.1.md` exactly — VERIFY: build passes, spot-check figures against the doc
- [AUTO] Port `retained.html` → `/retained` — VERIFY: build passes
- [AUTO] Port `decoded-method.html` → `/decoded-method` — VERIFY: build passes
- [AUTO] Port `process-quality-system.html` → `/process-quality-system` — VERIFY: build passes
- [AUTO] Push `ds-impl/lane-b-core` to `origin`, report

### Lane C — Sector pages (9 total)
- [AUTO] Port the 4 new: `sectors-workwear.html`, `sectors-teamwear-clubwear.html`, `sectors-schoolwear.html`, `sectors-promotional-merchandise.html`
- [AUTO] Reskin the 5 existing live pages (garment-decoration, print-promotional, signs-graphics, awards-engraving, labels-packaging) onto the DS sheets — copy unchanged
- [AUTO] Push `ds-impl/lane-c-sectors` to `origin`, report — VERIFY: build clean, all 9 routes render

### Lane D — Problem pages (10 total)
- [AUTO] Rebuild `problems-erp-implementation-failure.html` → `/problems/erp-implementation-failure`, confirm no trace of the withdrawn £150k story
- [AUTO] Reskin the 9 remaining problem pages (ai-paralysis, cant-scale-operations, disaster-recovery, ecommerce-not-connected, manual-workarounds, no-ops-owner, slow-processes, systems-dont-talk, wrong-erp-software) onto the DS sheets — copy unchanged
- [AUTO] Push `ds-impl/lane-d-problems` to `origin`, report

### Lane E — Case studies
- [AUTO] Reskin `/case-studies` index onto the DS sheets
- [AUTO] Reskin `/case-studies/hanicks`, `/tacklebag`, `/cobra-workwear` onto the DS sheets, copy unchanged
- [AUTO] `/case-studies/eternal-fitness`: reskin + add the one-line disclosure above the fold (Craig confirmed 2026-07-31, stays on this page)
- [AUTO] Push `ds-impl/lane-e-case-studies` to `origin`, report

### Lane F — Everything else
- [AUTO] Reskin the 6 tools pages + `/tools` index — calculator logic untouched
- [AUTO] Reskin the 5 resources pages + `/resources` index
- [AUTO] Reskin `/contact`
- [AUTO] Reskin `/privacy`, `/cookies` — legal text untouched, layout only
- [AUTO] Reskin `/small-business`, correcting prices to `DO_Pricing_Architecture_v8.1.md` figures
- [AUTO] Reskin `/blog` `[slug]` template (index rebuild stays blocked on blog dedup — do not attempt it here)
- [AUTO] Reskin the two locations templates (`/locations/fractional-cto`, `/locations/tech-audit`)
- [AUTO] Push `ds-impl/lane-f-everything-else` to `origin`, report

### Lane G — Merge & deploy to staging
- [AUTO] Once Lanes A–F are all pushed and each reports a clean `npm run build`: merge all six branches into a single integration branch (`ds-impl/integration`), off `origin/staging`, resolving any file-level conflicts between lanes
- [AUTO] Run `npm run build` on the merged integration branch — VERIFY: exits 0, zero errors. This is the real gate, not a formality — do not proceed past this step on a red build
- [AUTO] Fast-forward push `ds-impl/integration` to `origin/staging` — this triggers Coolify's existing auto-deploy webhook for `decoded-ops-site-staging` (uuid `ax1yi6hyl54gfj8w8adhq55d`). Per the standing operating rule, a push that triggers an already-configured auto-deploy is pre-authorized, not a chat gate.
- [AUTO] Wait for the Coolify deploy to finish (`running:healthy` on the app), then spot-check `https://staging.decodedops.co.uk` in a browser for at least: `/`, `/apps`, `/pricing`, one sector page, one problem page — VERIFY: pages load, no 500s, redirects resolve
- [AUTO] Report final status: what's live on staging, what (if anything) got deferred or gated along the way, with file/route references

## LEDGER
Progress to `decoded-ops-website/.context/state.md` + this file's own ledger.
Live status: `decoded-ops-website/.context/loop-status.md` (append-only, `<ISO timestamp> | <lane> | <unit> | <outcome>`).

CONTEXT:
- Design source: `D:\apps\design-systems\decoded-marketing\` — 16 finished, verified mockups.
- Brief: `OpenDesign_Brief_AllPages_2026-07-30.md` + `OpenDesign_Brief_Round2_2026-07-30.md`
  (both in `C:\Users\CraigBlackman\OneDrive - Decoded Ops\decoded-ops-ai\decoded-ops\Content\`).
- Pricing source of truth: `Business\DO_Pricing_Architecture_v8.1.md`.
- This is a bigger, riskier job than the design pass that preceded it — real React/Next.js
  code in a live, customer-facing repo, not static HTML in a staging folder. Verify each
  lane's build before trusting it, not just that files changed.
