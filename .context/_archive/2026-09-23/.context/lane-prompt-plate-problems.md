Work inside this decoded-ops-website worktree (Next.js/TypeScript, branched off origin/staging, which already has `components/Plate.tsx` — the shared plate diagram component built in Phase 1). Read `components/Plate.tsx` first to understand its API before starting. Read `app/page.tsx` (homepage) to see 3 real, already-working examples of `<Plate>` in use — copy that exact usage pattern.

## The job
Port the plate diagram for 17 of the 18 problem pages from the sibling `decoded-marketing` Open Design mockup project (`D:\apps\design-systems\decoded-marketing`, read-only reference — never edit it) into their corresponding React pages in `app/problems/*/page.tsx`. Each drawing number is DO-ART-404 through DO-ART-421 (412 was skipped, doesn't exist). The 18th problem page, `erp-implementation-failure`, is EXCLUDED from this job — it intentionally keeps its own pre-existing bespoke diagram in this repo already, untouched, do not add a `<Plate>` there.

Find each page's plate by grepping `decoded-marketing/*.html` for `data-no="DO-ART-4"` (covers 404-421) to get the full list of file→number mappings rather than guessing — the slugs match this repo's `app/problems/*` folder names directly (e.g. `problems-legacy-system.html` → `app/problems/legacy-system/page.tsx`).

For each: extract the title/sub/tone/p attributes and the inner `<g>` SVG content from the mockup, and insert a `<Plate>` call into the matching React page's existing structure (read `app/problems/legacy-system/page.tsx` first — it's the template every problem page was built from, hero-split → symptoms → solution/layer-stack → cta-strip — the plate likely belongs in the "solution" section, replacing or sitting alongside whatever visual is already there).

SVG attribute syntax note: the mockup HTML uses kebab-case SVG attributes (`stroke-width`, `font-family`, `letter-spacing`, `stroke-linecap`, etc.) — in JSX these become camelCase (`strokeWidth`, `fontFamily`, `letterSpacing`, `strokeLinecap`). Convert every one. `class=` becomes `className=`.

## Rules
- Stay inside `app/problems/**` only (excluding `app/problems/erp-implementation-failure/`, which you must not touch). Do not touch any other page, `components/Plate.tsx`, `app/problems/page.tsx` (the index), or any global CSS file.
- Do NOT touch decoded-marketing (read-only reference).
- Never invent numbers or content — port exactly what's in the mockup.
- This is the largest of the 4 parallel lanes (17 pages) — work through them systematically, don't skip any without a clear reason logged.
- HARD RULES: no deploy, no git push, no pnpm/npm install. If build fails on a missing dependency, stop and report rather than installing.
- After all 17 pages are done, run `npm run build` (you'll need `node_modules` — if missing, report that clearly rather than attempting to install) — must exit 0, zero TypeScript errors.
- Append progress to `.context/loop-status.md` if present, or report at the end.
- When done, report: the full list of 17 pages with their drawing numbers, and flag any page where the mockup's plate content didn't map cleanly (missing file, ambiguous number, etc.) rather than silently skipping it.
