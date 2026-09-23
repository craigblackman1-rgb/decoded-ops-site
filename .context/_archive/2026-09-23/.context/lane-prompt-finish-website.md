Work inside this decoded-ops-website worktree (Next.js/TypeScript, branched off origin/staging which already has today's Direction A header/footer). Two jobs.

## Job 1 — Build the 4 missing problem pages
`app/problems/` already has 14 pages but is missing 4 that were built today in the sibling `decoded-marketing` mockup project (a static HTML/CSS Open Design project at `D:\apps\design-systems\decoded-marketing`, NOT this codebase — read it for content only, don't copy HTML):
- `problems-bottleneck-growth.html` → build `app/problems/bottleneck-growth/page.tsx`
- `problems-ops-in-owners-head.html` → build `app/problems/ops-in-owners-head/page.tsx`
- `problems-seasonal-peaks.html` → build `app/problems/seasonal-peaks/page.tsx`
- `problems-spreadsheet-addiction.html` → build `app/problems/spreadsheet-addiction/page.tsx`

**Use `app/problems/legacy-system/page.tsx` as your exact structural template** (read it first) — same pattern: `Metadata` export with title/description/OG/Twitter, a JSON-LD FAQPage schema object, `BreadcrumbSchema`, then a hand-authored JSX body: hero-split (`g-off` ground, `wrap hero-split`, eyebrow "The problem", h1, lede, hero-cta linking to `/contact`, `<figure className="evidence">` with a placeholder image path under `/images/` — check what images already exist in `public/images/` and reuse a relevant existing one rather than referencing a file that doesn't exist), symptoms section (`g-tint`, ul.symptoms with 5-7 items), a fix/solution section (`g-white`, matching whichever visual pattern fits — layer-stack if it's a buy-vs-build style argument, or a simpler explanation if not), and a closing CTA section. Port the actual argument/content from each HTML mockup file — real copy, not filler — but restructure into this repo's existing component/class conventions (`g-off`/`g-tint`/`g-white` grounds, `wrap`, `hero-split`, `eyebrow`, `lede`, `symptoms`, `btn btn--primary`) exactly as `legacy-system/page.tsx` uses them, since those CSS classes already exist in this repo's global stylesheet.

Also add these 4 new pages to `app/problems/page.tsx` (the problems index, if one exists — check) and to `components/Header.tsx`/`components/Footer.tsx`'s problem link lists if those maintain a curated list (check what's already linked there — don't necessarily add all 4 to the footer's curated chip row if it's meant to stay short, use judgement, but the pages must exist and be reachable via internal links from somewhere, at minimum the problems index if one exists).

## Job 2 — Fix "Discovery Day" → "Clarity Audit" in site chrome
"Discovery Day" and "Clarity" were merged into one product, "Clarity Audit" (from £1,500), on 2026-07-31 — `app/pricing/page.tsx` already reflects this correctly (says "Clarity Audit" throughout, zero "Discovery Day" references — use it as the source of truth for correct terminology). But `components/Header.tsx` and `components/Footer.tsx` (both just rebuilt today with the Direction A redesign) still say "Discovery Day" in the nav dropdown menu item and any footer link with that label — these were built before the rename and never cross-checked. Find every "Discovery Day" string in `Header.tsx` and `Footer.tsx` and rename to "Clarity Audit" (keep the same route, `/clarity` — only the display label changes). Also check `app/page.tsx` (homepage) for a "See how Discovery Day works" CTA or similar — same rename there if present. Grep the whole `app/` and `components/` tree for "Discovery Day" to catch anything else missed, but do NOT touch any file that quotes it as historical/narrative content (e.g. a case study describing a past interaction) — only chrome/CTA labels that are naming the current product.

## Verify before considering this done
- Run `npm run build` — must exit 0, zero TypeScript errors, all new routes must appear in the route list output.
- Grep the built output or source for "Discovery Day" outside of narrative/historical context — should be zero chrome/CTA occurrences left.
- Do not touch any file outside `app/problems/**`, `app/page.tsx`, `components/Header.tsx`, `components/Footer.tsx`, and `public/images/**` (read-only, to check what exists).

## Rules
- Stay inside this repo only. Do not touch decoded-marketing or any other project (read-only reference for content).
- HARD RULES: no deploy, no git push, no pnpm/npm install. If the build fails because a dependency is missing, stop and report rather than installing — `node_modules` will need to be provided by whoever verifies this (a copy from the main checkout works, don't attempt to install fresh).
- Append progress to `.context/loop-status.md` if it exists at repo root, or just report at the end.
- When done, report: files created/changed, build status, and a list of every "Discovery Day" occurrence you found and what you did with each (renamed vs left as historical content, with a one-line reason for any you left).
