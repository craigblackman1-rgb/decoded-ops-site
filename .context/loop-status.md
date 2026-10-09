# Loop Status

## plate-batch-2026-08-07

DO-ART-208 `app/small-business/page.tsx` — inserted after hero, before visual strip
DO-ART-209 `app/resources/six-sigma/page.tsx` — inserted after hero, before warning band
DO-ART-307 `app/resources/audit-checklist/page.tsx` — inserted after hero, before content
DO-ART-412 `app/problems/erp-implementation-failure/page.tsx` — inserted after hero, before Hanicks before/after section
DO-ART-422 `app/resources/5-warning-signs/page.tsx` — inserted after hero, before main content
DO-ART-903 `app/case-studies/eternal-fitness/page.tsx` — inserted after hero, before main content (fixed style= camelCase)
DO-ART-904 `app/about/page.tsx` — inserted after hero, before timeline
DO-ART-118 `app/problems/page.tsx` — inserted after hero, before problem cards grid
DO-ART-207 `app/case-studies/page.tsx` — inserted after hero, before log-list
DO-ART-210 `app/tools/page.tsx` — inserted after hero, before tool cards grid
DO-ART-211 `app/blog/page.tsx` — inserted after hero, before blog list section
DO-ART-308 `app/resources/page.tsx` — inserted after hero, before resource cards grid

Build: `npx next build` exits 0, zero TypeScript errors, 159/159 pages generated.
One source fix: DO-ART-903 had `style="mix-blend-mode:overlay"` (kebab-case string) which TypeScript rejects on SVG; converted to `style={{ mixBlendMode: 'overlay' }}`.

## 2026-08-24 08:16 — dispatcher (scheduled task)
1 lane dispatched (OpenCode / deepseek-v4-pro, unpushed):
- `chore/premerge-gates` @ D:\apps\worktrees\decoded-ops-website\premerge-gates — wo-marketing-sales Phase B: new .context/price-audit.mjs + .context/extract-copy.mjs, check-nav-coverage wired into package.json, staging (uuid ax1yi6hyl54gfj8w8adhq55d, branch staging) documented in CLAUDE.md. Resolves dmshorvvs0z + dmsk4z8zz5l. Tooling only — no app/ or components/ changes.
2026-08-28T10:57:00+01:00 | lane-website-questionnaire-save | app/api/clients/documents/[id]/questionnaire/route.ts | built: GET+POST proxy route, auth-gated, mirrors sign/route.ts pattern exactly
2026-08-28T11:02:00+01:00 | lane-website-questionnaire-save | app/clients/documents/view/[id]/QuestionnaireForm.tsx | built: client component, fetches questions on mount, renders grouped sections with textareas, save button, success/error states
2026-08-28T11:06:00+01:00 | lane-website-questionnaire-save | app/clients/documents/view/[id]/page.tsx | updated: branches on doc_type='questionnaire' to render QuestionnaireForm instead of iframe, all other doc_types unchanged
2026-08-28T11:10:00+01:00 | lane-website-questionnaire-save | .context/handoff.md | written: full summary of built files, verification steps, and hub-side dependency

- 2026-08-27 08:1x (wo-dispatcher scheduled run) — nav-checker lane VERIFIED and merged. Branch claude/nav-checker-dynamic-routes rebased onto origin/main (daede84) and fast-forward pushed as 2059eb5. Scope clean: .context/check-nav-coverage.mjs only, Footer.tsx + data/locations.ts untouched. VERIFY met: `node .context/check-nav-coverage.mjs` → BROKEN 0 (was 3 false positives), 54 routes expanded from dynamic segments, /blog/[slug] correctly listed as UNRESOLVED DYNAMIC rather than silently passing. Negative test (3 fake hrefs injected into Footer.tsx, then reverted): /definitely-not-a-page and /locations/fractional-cto/nowhere-town both reported BROKEN, /blog/some-post quarantined — so the checker still catches genuinely missing routes. Attested amtb6pqvc3s. Worktree removed, branch deleted, shared checkout reset to origin/main. NOTE: `npm run check:premerge` still exits 1 — the remaining 14 ORPHANED pages are a product decision, queued as qmta25tq69m, not a checker bug.

## 2026-08-27 13:xx - dispatcher (scheduled)
CLAIMED wo-website-consolidated-2026-08-02. Lane 'tools-ds-tokens' dispatched to OpenCode (opencode-go/deepseek-v4-pro, WT tab).
Worktree: D:\apps\worktrees\decoded-ops-website\tools-ds-tokens - branch task/tools-ds-tokens-2026-08-27 off origin/main (2059eb5).
Scope: app/tools/{ai-readiness-check,downtime-cost-calculator,ops-health-score,should-i-replace-erp}/page.tsx ONLY - swap 19 arbitrary bg-[#hex] colour classes for the DS utilities they already resolve to. globals.css FORBIDDEN, no copy changes.
Also this run: deferred dms8o7pudv2 (Header/Footer/AppShell hex) RESOLVED as already-done on evidence - 0 hits in all three files.
NOT verified, NOT merged - needs a Claude browser check of all 4 tools pages before it goes near main.

## 2026-08-28 08:2x — wo-dispatcher (scheduled)
- VERIFIED + MERGED lane tools-ds-tokens -> main (2059eb5..5a46727). Gates attested amtcmam8jm7. Worktree removed.
- DISPATCHED lane tools-hex-cleanup, worktree D:/apps/worktrees/decoded-ops-website/tools-hex-cleanup, branch task/tools-hex-cleanup-2026-08-28 off origin/main (5a46727). Model opencode-go/mimo-v2.5. NOT yet verified.
- Deferred: dmtcmcntc0l (visual spot-check of the 4 tools pages — unattended run cannot start a dev server), dmtcmcob96l now in-lane.

## 2026-08-28 13:2x — wo-dispatcher (scheduled)
- VERIFIED + MERGED lane tools-hex-cleanup -> main a1a4f61 (gates attested amtcx08fhrm), worktree removed.
- DISPATCHED lane tools-hex-tokens (task/tools-hex-tokens-2026-08-28) and lane chrome-hex-tokens (task/chrome-hex-tokens-2026-08-28), both off origin/main a1a4f61, mimo-v2.5.
- NOTE: shared checkout D:/apps/decoded-ops-website has uncommitted changes and could not ff-pull. Not touched (unknown owner), deferred.

## 2026-09-01 13:1x — wo-dispatcher (scheduled)
CLAIMED wo-website-consolidated-2026-08-02. DISPATCHED lane `hex-tokens-core` (unit A of 3)
worktree D:\apps\worktrees\decoded-ops-website\hex-tokens-core, branch task/hex-tokens-core-2026-09-01,
off origin/main d45350e, model opencode-go/mimo-v2.5.
Scope: 14 core marketing pages under app/ (pricing, page.tsx, clarity, retained, privacy, transform,
contact, deliver, decoded-data-app, small-business, cookies, pricing/page, layout, blog) — ~559 occurrences.
EXCLUDED app/about/page.tsx (held by another session on task/about-fabricated-stats-2026-09-01),
app/tools/**, app/api/**, components/**.
Units B (dmtimu1w3zq, resources+case-studies+locations) and C (dmtimu59xr1, clients portal) deferred.
CORRECTION logged: chrome-hex-tokens (2026-08-28) did NOT fail — its work is main 2c9030f. dmticrvl01a resolved.
NOTE: shared checkout D:\apps\decoded-ops-website is 16 commits behind origin/main and dirty with
deleted .context/lanes/*.log (the 2026-08-31 tidy archive move) — already tracked as dmtid1egsz6.

## 2026-09-02 ~09:00 — wo-dispatcher (scheduled)
- REJECTED lane `hex-tokens-core` (branch `task/hex-tokens-core-2026-09-01`, eff1165) — NOT merged.
  It wrote `bg-[prussian-blue]` (Tailwind arbitrary-value syntax) instead of `bg-prussian-blue`
  (the v4 `@theme` utility). Compiled with @tailwindcss/postcss to prove it: the bracketed form
  emits no CSS rule at all. All 559 usages across 14 marketing pages would have lost their colour.
  `tsc` was green and the scope diff was clean — only a CSS compile caught it. Deferred `dmtjsyxygcd`.
- CLAIMED: worktree `D:\apps\worktrees\decoded-ops-website\hex-tokens-core-v2`,
  branch `task/hex-tokens-core-v2-2026-09-02` (off origin/main d45350e), lane `hex-tokens-core-v2`,
  model opencode-go/mimo-v2.5. Touches only the 14 core marketing pages listed in the brief.
- HELD: hex-to-token unit B (`app/resources/**`, `app/case-studies/**`, `app/locations/**`,
  deferred `dmtimu1w3zq`) — its stated precondition is "only after unit A is merged".
- NOT TOUCHED: anything under wo-marketing-sales-consolidated-2026-08-20 (SR0/GF1/GF12 staging
  sequence, Craig sign-off due today) — left to the interactive marketing session.

2026-09-02 09:4x [claude-ops-session-2026-09-02] CLAIMED wo-marketing-sales-consolidated. Lane sr0-staging-sync @ D:/apps/worktrees/decoded-ops-website/sr0-staging-sync (lane/sr0-staging-sync-2026-09-02 off origin/staging 8445923). Dispatcher lane hex-tokens-core-v2 is on main scope, not ours. Next: GF1 + GF12 lanes off post-SR0 staging, then SR1 walkthrough.

## 2026-09-02 17:44 — portal client list + non-silent hub errors (session close)
- Pushed `d45350e..ec1f4a9` on `main` from `D:/apps/worktrees/decoded-ops-website/portal-hub-key` (branch `lane/portal-hub-key`), clean fast-forward.
- Added `david-sharp` to `ALL_CLIENT_IDS` in dashboard, documents and documents/view pages. Only affected the admin aggregate view; individual client logins were never affected.
- Replaced `.then(r => r.ok ? r.json() : [])` with an explicit `console.error` on the same three fetches. A failed hub call was rendering as "no documents", which is how the 2026-08-28 incident stayed hidden.
- NOT a fix for the hub 401: `lib/hub-fetch.ts` has sent `x-hub-key` since 9a77cca (2026-08-29). An earlier diagnosis in this session wrongly concluded otherwise after grepping the shared checkout, which is 18 commits stale.
- Gates attested `gate:decoded-ops-website:lane/portal-hub-key`. Typecheck run locally after `npm ci`, clean.
- Coolify deploy `dtvethfryeb5amnaevglfzfz` was still in progress at session close — confirm it finished before treating this as live.

## 2026-09-04 08:5x — wo-dispatcher (scheduled)
- CLAIMED: wo-website-consolidated-2026-08-02 (dispatcher-owned; no other session on this repo within 2h at push time).
- MERGED to main: a5b8c56 — Unit A hex-to-token core, via fresh worktree off origin/main (v2 branch was 140 commits stale). Verified by compiling globals.css with @tailwindcss/postcss: bg-off-white / text-prussian-blue / text-sky-blue all emit real rules; emitted values identical to the hexes replaced. tsc exit 0. Attested amtmnnb0ar6.
- VERIFIED ALREADY DONE (no lane needed): Lane W, B5 /apps origin-first reframe — landed in the 09-03 promotion; no money figures on the page, CTA -> /clarity.
- RUNNING: lane hex-tokens-unit-b, worktree D:\apps\worktrees\decoded-ops-website\hex-tokens-unit-b, branch task/hex-tokens-unit-b-2026-09-04, model opencode-go/mimo-v2.5. Scope: 5 bracketed hexes in app/resources/decoded-method/page.tsx only. Lane commits and stops — dispatcher verifies and pushes.
- WORKTREES REMOVED: hex-tokens-core-v2, hex-tokens-core-v3, apps-page-origin-first. LEFT: hex-tokens-core (v1, rejected, unmerged — deferred dmtmnqrzjd5).
- DEFERRED: dmtmnqrq3dg (~320 hexes in app/clients/**, client-facing gate).
- 09:0x CLOSE: Unit B MERGED 17acda2. Lane produced a correct edit but ALL its own VERIFY steps failed on environment (no `grep` in the PowerShell shell; no node_modules in a fresh worktree so `npx tsc` resolved the wrong binary) and it stopped uncommitted — dispatcher re-ran every check and committed. Ownership recheck at push time surfaced wo-website-erp-positioning-sweep-2026-09-03 (claude-orchestrator-2026-09-03) on this repo; investigated rather than assumed — their branch is 140 behind / 0 ahead, holds no unmerged commits, no lane running, so the apparent file overlap was branch staleness, not conflict. Hex-to-token is now complete for every non-client surface.

## 2026-09-08 13:2x — wo-dispatcher (scheduled)
Claimed: wo-website-consolidated-2026-08-02 u1 (meta-title separator).
Lane `meta-title-separator` dispatched (opencode-go/mimo-v2.5, WT-tab mode) → worktree D:\apps\worktrees\decoded-ops-website\meta-title-separator, branch lane/meta-title-separator, off origin/main 8991c4d.
Decision applied: colon everywhere ("X: Decoded Ops") per answered qmtsl5polqn. 156 pipe occurrences vs 70 colon at dispatch.
Exception rule in the brief: titles whose base already contains a colon stay on pipe and get listed in LANE-NOTES for a follow-up call (avoids "Case study 01: X: Decoded Ops").
Lane commits but does not push. Needs verify + ff-push by the next pass.

## 2026-09-09 08:51 — wo-dispatcher (scheduled)
lane/meta-title-separator VERIFIED and MERGED to main (8991c4d..c373e86, fast-forward). Gates attested amttsr3ipj1.
Scope clean (43 app/ files, title strings + 1 JSON-LD headline regex). Derived grep re-run at push: 7 documented pipe-exception files remain by design. tsc exit 0 after npm ci run by Claude (the lane could not — no node_modules).
Coolify deploy pxhhokytbgnsrhinwuej6h8q fired 07:48, auto-deploy on.
NOTE: shared checkout is dirty + behind origin/main (deferred dmttspqz6bd).

## 2026-09-09 13:1x — wo-dispatcher (scheduled)
- u2 (meta-title SPACING correction) VERIFIED and MERGED to main: `c373e86..53da79d`, fast-forward from worktree `D:\apps\worktrees\decoded-ops-website\meta-title-spacing` (branch `lane/meta-title-spacing`, 3 commits, 0 behind, clean tree).
- Verification run by Claude, not read off the lane report: scope diff 43 files (all `app/` title strings + `LANE-NOTES.md`), every diff line a spacing-only `' : Decoded Ops'` → `': Decoded Ops'` change, no copy edits. Derived greps re-run in the worktree at push time — 0 space-colon titles under `app/` (bracket routes `[location]` included), pipe count 22 unchanged (the 7 documented exception files), 205 correct colon titles. `npx tsc --noEmit` exit 0.
- Pass 1 of this lane had reported "zero matches" while leaving 6 titles wrong in the two `[location]` dynamic routes — PowerShell `-Path/-Include` treats `[`/`]` as wildcards. Pass 2 (bracket-safe scan, 121 files vs 91) fixed them. Deferred `dmttt5q33dc` resolved.
- Gates attested `amtu275eu5l`. No mockup governs a metadata-string change — design parity N/A, stated explicitly rather than skipped.
- Coolify deploy `nj9ih5edchcs0zuo2fb2dbjl` fired 12:13Z and was still `in_progress` at report time — pushed, NOT yet verified live. Next pass confirms the running commit is at-or-after 53da79d.
- Worktree `meta-title-spacing` left in place until the deploy is confirmed; remove it next pass.

## 2026-09-22 08:5x — wo-dispatcher (scheduled)
- Dispatched lane `web011-u16-internal-link-mesh` (worktree `D:\apps\worktrees\decoded-ops-website\web011-u16-internal-link-mesh`, branch `web011-u16-internal-link-mesh`, off `origin/main` fae... at fetch time) for WO-WEB-011 u16 (CR-WEB-040 follow-up: 7 pages still under 3 in-content inbound links). Model `opencode-go/mimo-v2.5`, WT-tab (not -Inline). Brief: `LANE-BRIEF.md` in the worktree — additive edits only to `data/problem-routing.ts` / `data/sector-routing.ts` (+ case-study content if needed), tsc + build + grep-count verify, commit and stop (no push).
- Not yet verified — next pass (or this session if it lands in time) checks scope diff, tsc, build, and the 7-target grep-count before attest + push.
- 2026-09-22T12:35Z dispatcher: dispatched lane web003-u21-eslint-unescaped (mimo-v2.5, WT-tab) — BUG-WEB-030 eslint unescaped-entities fix, WO-WEB-003.

- 2026-09-28 (weekend dispatcher): dispatched lane cr-web-066-cwv (WO-WEB-011 u21, CR-WEB-066 CWV preload/sizes fix) — worktree D:pps\worktrees\decoded-ops-website\cr-web-066-cwv, branch cr-web-066-cwv. Not yet verified.

- 2026-09-28 09:1x (weekend dispatcher, correction pass): found lane `cr-web-066-cwv` (WO-WEB-011 u21, CR-WEB-066) already finished (2 commits, `components/Header.tsx` prefetch=false, honest deviation noted on hero srcset part — image since replaced by DO-ART-1008 in an earlier lane). Verified myself (re-ran `tsc --noEmit` clean, scope diff matches MUST). Attested `amukyrwolue`, pushed `eb7b0f1..9efdc22` to main, worktree removed. Note: a duplicate lane `web011-u21-cwv-polish` was briefly dispatched for the same unit before this was discovered (registry note had been overwritten by a concurrent session) — killed before it committed anything, worktree/branch removed, no harm done. Estate has other concurrent dispatch activity running right now (several opencode processes observed 08:58-09:05Z not from this session) — re-check `wo active` before trusting any note as current.

## 2026-09-28T09:04:52Z — dispatcher (scheduled)
- Dispatched lane web003-u22-hero-overlap (WO-WEB-003 u22, BUG-WEB-035) — D:\apps\worktrees\decoded-ops-website\web003-u22-hero-overlap, branch web003-u22-hero-overlap
- Dispatched lane web003-u23-heading-order (WO-WEB-003 u23, BUG-WEB-036) — D:\apps\worktrees\decoded-ops-website\web003-u23-heading-order, branch web003-u23-heading-order

- 2026-09-28 10:42 dispatcher: VERIFIED+MERGED u22 (BUG-WEB-035, 9efdc22..c3a861a) + u23 (BUG-WEB-036, c3a861a..364ddf9) from prior 10:04 run. Dispatched new lane web061-u42-footer-fix for WO-INF-061 u42 (BUG-WEB-031 footer button invisible + wrap). Worktree: D:\apps\worktrees\decoded-ops-website\web061-u42-footer-fix

- 2026-09-28 11:0x dispatcher: dispatched lane web061-u43-contact-mobile-overflow (WO-INF-061 u43, BUG-WEB-032 contact page two-column form grid doesn't stack on mobile, 597px at 390px viewport). Worktree: D:\apps\worktrees\decoded-ops-website\web061-u43-contact-mobile-overflow. Model opencode-go/mimo-v2.5, WT-tab.

- 2026-09-28T10:3x dispatcher: claimed web003-u24 (BUG-WEB-038 emoji icons), web061-u44 (BUG-WEB-033 case-studies overflow), web061-u45 (BUG-WEB-034 seasonal-capacity overflow) — lanes dispatched, WT-tab mode, mimo-v2.5
2026-09-28T12:12:43Z | dispatcher (scheduled) | web011-u22-cs-slug | Dispatched OpenCode lane for WO-WEB-011 u22: anonymise /case-studies/tacklebag slug + 301 + sitemap. Worktree D:/apps/worktrees/decoded-ops-website/web011-u22-cs-slug branch web011-u22-cs-slug.
2026-09-28T12:12:43Z | dispatcher (scheduled) | web011-u23-homepage-meta | Dispatched OpenCode lane for WO-WEB-011 u23: homepage + /retained title/meta to 28 Sep positioning. Worktree D:/apps/worktrees/decoded-ops-website/web011-u23-homepage-meta branch web011-u23-homepage-meta.
2026-09-28T12:39:53Z dispatcher: claimed WO-WEB-011 u21 (CR-WEB-066 CWV preload fix), worktree web011-u21-cwv-preload-fix, lane launched

## 2026-09-28 13:1x dispatcher (scheduled)
- Verified+merged web011-u21-cwv-preload-fix (WO-WEB-011 u21, CR-WEB-066): lint clean (0 errors), unicode-escape grep clean, sharp dep committed. FF-merged cf70531..3f73fdb on main, worktree removed. Unit set done, test-item logged.

## 2026-09-28 14:5x dispatcher (scheduled)
- VERIFIED+CLEANED (no push needed): web-pricing-v12 was already attested (amulba8lejz) and merged to main (711f508) by a concurrent/prior pass before this run started — confirmed via git log, worktree/branch already gone. WO-OPS-018 unit already shows the 711f508 commit as done.
- Dispatched 4 new lanes for WO-INF-061 (CR-WEB-051..054), content-correction only, off origin/main 711f508:
  - web061-u35-sector-copy-figures (D:/apps/worktrees/decoded-ops-website/web061-u35-sector-copy-figures)
  - web061-u36-problem-copy-figures (D:/apps/worktrees/decoded-ops-website/web061-u36-problem-copy-figures)
  - web061-u37-apps-cs-copy (D:/apps/worktrees/decoded-ops-website/web061-u37-apps-cs-copy)
  - web061-u38-location-copy (D:/apps/worktrees/decoded-ops-website/web061-u38-location-copy)
  All WT-tab mode, opencode-go/mimo-v2.5. Not yet verified — next pass checks scope diff, tsc, lint, grep-verify per LANE-BRIEF.md before attest+push.
- Skipped WO-WEB-011 u24 (keyword titles/meta rollout) despite AUTO tag: source file is named "Titles and descriptions - DRAFT - 28 Sept 2026.json" (not the APPROVED keyword map file) and the unit label itself says "after Claude review" — that review hasn't visibly happened yet. Left for an interactive pass rather than dispatched on an unclear approval state.
