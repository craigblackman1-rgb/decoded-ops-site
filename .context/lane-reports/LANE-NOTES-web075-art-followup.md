# Lane notes: web075-art-followup

Ran clean end to end on `lane/web075-art-followup` off `origin/main` @ 4b98c02. Four
step-commits, one per the brief, then this report commit. Fresh worktree, so `npm install`
was needed before the first `tsc` (documented AGENTS.md gotcha).

## What went smoothly

- The spec's anchor-on-file-+-data-no discipline worked: every edit was found by re-grepping
  the hook class or `data-no`, never a line number. The "fixes after the first render" block
  in `d17-problems.css` was exactly where the spec said, and the final overrides (970 body
  padding 150u, 718 stage 580u / doc-l 384u) were the ones edited, not the dead originals.
- Lifting 948/999 into `lib/d17-figures/` as string exports followed the existing `a991.ts`
  pattern cleanly; the JSX->HTML conversions (className->class, style objects->strings,
  self-closing divs) are mechanical and tsc/lint stayed green.
- The 972/999-solo/718/1008 desktop blocks are all `min-width:761px`, so the phone media
  queries (max-width 760 / 640) that already exist for these pieces are untouched by
  construction — no cascade fight.

## Judgement calls

- **legacy-system deviation.** Followed Claude's override: kept 719 there rather than 940.
  The spec itself flagged the 940 tension ("grew into the full system" beside "no
  rip-and-replace"); the brief confirmed. 719 now sits on three pages (buy-vs-build, about,
  legacy-system) — one more than the dedupe target of two, which is the accepted cost of the
  deviation.
- **948 placement.** Chose the spec's preferred `beforeRelated` slot (between WooCommerce and
  Questions) over the zero-change `inlineArt` slot: the options sheet lands directly before
  the FAQ that answers "connect, merge or replace", which is the argumentative order the spec
  argued for. `ProblemPageDS` already supported `beforeRelated`; no component change needed.
- **718 block scoped by `data-no`** as the spec insisted — 1009/1010/1011 wear `.a718` too
  and an unscoped edit measurably raised them (spec finding 3). The figure-level
  `padding-block` uses `--pu` (percent-based, defined by `.sw`) exactly as the spec wrote it,
  keeping clear of the standing "`calc(N*var(--u))` on the .d17 figure itself" ban.

## Verification honesty

- tsc: clean (run before each commit and at lane end). eslint: 0 errors on touched files
  (4 pre-existing warnings in app/page.tsx, none mine). `\uXXXX` escape grep: 0 hits.
- Grep-verified counts: 719 on 3 pages (2 expected + legacy-system deviation), 948 on 2,
  999 on 2, 1014 unique, 1015-1019 free, no `inlineArt719` leftovers, no photo repeated
  across two problem-page figures.
- NOT verified, and cannot be from this lane: actual rendered heights (the <=630px claims
  ride on the spec's static harness, not a browser this lane ran), visual overlap checks
  (999 stamp on scorecard corner, 1008 mark vs Clarity station, 970 print card vs list row),
  and console-404 checks. All hard-forbidden by the brief (no dev servers / Playwright /
  curl). These belong to Claude's verification pass and/or Craig's design review per spec
  §7/§8.
- `node .context/price-audit.mjs --check` exits 1, but all 31 FAIL lines are pre-existing
  `origin/main` forbidden-word hits ("vest" etc.) on lines this lane never touched; zero
  hits reference the new 948/999/1014 copy. Not a regression from this lane, but someone
  should decide whether that word list is stale.

## Left for Claude / Craig

- Register delta (spec §6) — Claude handles; no `decoded-marketing` file was touched here.
- Design review batch (spec §8): 1014 look, 999 stamp overlap, 991 shorter stage (also moves
  the playbook hero), E16 blur-patch quality, E17 sigma-7 wash, 718/1009 phone height.
