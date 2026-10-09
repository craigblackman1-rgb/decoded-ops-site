# Lane brief — CR-WEB-036 · Pricing page rebuild on v11 (WO-OPS-022 u2)

You are in worktree `D:/apps/worktrees/decoded-ops-website/ops022-u2-pricing-v11` (branch `ops022-u2-pricing-v11` off origin/main). Implement, run `npx tsc --noEmit` and `npx next lint`, commit, stop. Do NOT start a dev server, do NOT run Playwright, do NOT push. Only `git add` files you changed or created (never `git add -A`).

## Source of truth
`data/pricing-v11.json` (already in the worktree — commit it). Every figure you render MUST come from this file at build time (import it; never retype a number). Read `rules.public_policy` and `forbidden_public` before writing anything. The ONLY numbers allowed in rendered HTML or JSON-LD on any public page are `public_figures`: 595, 1500, 1200, 950. Nothing from `software`, `implementation`, `support`, the tier tables or `forbidden_public` may appear anywhere under `app/`, `components/` or `public/`.

## Ruling (Craig, 19 Sep 2026)
- Small business: **Clarity Check £595** (3-hour remote diagnostic) is the only fixed-price small-business product; it leads to the Clarity Audit. **AI Readiness Check and Quarterly Sprint are retired** — remove every mention (pages, nav, footer, JSON-LD, sitemaps, llms.txt, internal links). The small-business Deliver/Transform/Retained ladders are retired — sub-£1m businesses use the same services at the "from" prices.
- Public prices are "from" prices only: Clarity Check £595 · Clarity Audit from £1,500 · Deliver from £1,200/mo (6-month minimum) · Transform from £1,500/mo (12-month minimum) · Retained from £950/mo (rolling). Software: "priced at the audit — buy outright or lease to own over 36–60 months; you own it at the end." No software figures.
- Never day rates or day counts. Never "vests", "Route A/B", "programme", "licence" wording.

## Changes
1. **`app/pricing/page.tsx`** — rebuild. Design basis: the page as it stood before commit `349a486` (run `git show 349a486^:app/pricing/page.tsx` for the section layout, plate usage and classes; the same DS components/plates are still in the repo). Sections in order:
   1. Hero "Start with the audit" — keep current copy and the guarantee plate DO-ART-203 as-is.
   2. **Consultancy** — the four services as a table or cards: name, what it is (one line each; reuse the pre-349a486 copy where it exists), "from £x", term/minimum. Include the line: "Every price has three tiers — Essential, Recommended, Complete — set at the audit by the size and shape of your operation. The full tier sheet is in the price pack, sent on request."
   3. **Small business (under £1m)** — one card: Clarity Check £595 → what you get (3-hour remote diagnostic, written priorities, feeds the Clarity Audit) → CTA.
   4. **Systems** (Works / Proof / Commerce) — keep the current "no price list" section but re-word to the outright-or-lease line above.
   5. **Get the price pack** CTA strip linking to the existing contact route, copy: "Two pages: how I price, and what I built. Sent the same day."
   Keep `metadata` accurate (description must not contain figures other than "from £1,500"). Keep the existing JSON-LD pattern via `components/JsonLd.tsx`; `Offer` entries only for Clarity Check (595) and Clarity Audit (1500).
2. **`app/small-business/page.tsx`** — reduce to: Clarity Check (£595) as the entry, then the four services at their "from" prices, then a link to `/pricing`. Remove AI Readiness Check, Quarterly Sprint, and the Entry/Mid/Full "2/4/6 × 4hr sessions" Retained cards. JSON-LD Offers: only Clarity Check 595 — delete the 360/995/395 offers. Fix the CTAs so "See all pricing" → `/pricing` lands on a page that has it.
3. **`components/Header.tsx`** small-business mega menu (around lines 89–105 and 318–350): list Clarity Check + the four services (5 items), each with one-line sub-copy; remove AI Readiness Check and Quarterly Sprint. Keep "Fixed-price, done remotely" only on Clarity Check. **`components/Footer.tsx`**: keep the "Small business" and "Pricing" links; no figures.
4. **`public/llms.txt`** — pricing lines: Clarity Check £595; Clarity Audit from £1,500; Deliver from £1,200/mo; Transform from £1,500/mo; Retained from £950/mo; software priced at the audit, outright or leased. Remove "pricing by turnover band".
5. **`.context/price-audit.mjs`** — extend `--check`: load `data/pricing-v11.json`; scan text files under `app/`, `components/`, `public/` for any `£\d[\d,]*` and any JSON-LD `"price"` value; FAIL if a value is in `forbidden_public` or not in `public_figures`; FAIL on the words `vest`, `Route A`, `Route B`, `day rate`, `per day`, `AI Readiness`, `Quarterly Sprint`, `Discovery Day`. Print each hit as file:line. Update `.context/price-audit.md` with the rule. Run it; it must pass before you commit.
6. grep the whole repo (excluding `.context/lanes`, `node_modules`, `.next`) for `AI Readiness`, `Quarterly Sprint`, `£395`, `£995`, `£360`, `£795`, `£1,095`, `£720` and fix every public-facing occurrence (sitemap entries, `route-slugs.json`, blog links, problem/sector pages). Report anything you deliberately left.

## Verify (you)
`npx tsc --noEmit` clean · `npx next lint` clean · `node .context/price-audit.mjs --check` passes · `git diff --stat`. Commit message: `feat(pricing): rebuild /pricing and /small-business on v11 canonical JSON (CR-WEB-036)`. Write `LANE-RESULT.json` in the worktree root: `{ "status": "done"|"partial", "commit": "<sha>", "files": [...], "left": [...], "audit": "<last line of price-audit output>" }`.
