Work inside this decoded-ops-website worktree (Next.js/TypeScript App Router), branch `claude/implement-design-plates-20a617`, which is based on `origin/staging` (NOT `origin/main` — staging is where all prior plate/DS work already lives; `components/Plate.tsx` and `components/DsPlatesLoader.tsx` already exist here, do not recreate them). `node_modules` is already populated (copied in, do not run npm/pnpm install).

## Context

OpenDesign finished 13 new plate diagrams yesterday (2026-08-06) in the sibling read-only reference project `D:\apps\design-systems\decoded-marketing`. One (DO-ART-101 rev02, /case-studies/cobra-workwear) has already been ported into `app/case-studies/cobra-workwear/page.tsx` on this branch as your reference example — read that file's diff/content first (search for "DO-ART-101") to see the exact target pattern: import `{ Plate } from '@/components/Plate'`, a `<section className="g-navy">` (or whatever ground class fits the page's existing rhythm) containing `.wrap > eyebrow + h2 + hair + lede`, then `.plate-scroll > .plate-frame > <Plate ...>{children}</Plate>`. Copy that shape exactly for each plate below — same section/wrap/eyebrow/plate-scroll/plate-frame markup, same `data-od-id="plate-<slug>"` convention.

Each plate's title/sub/tone/no/rev/cls attributes and its pre-converted JSX children (kebab-case SVG attrs already converted to camelCase, `class` already converted to `className`, HTML comments already converted to `{/* */}`) are saved in `.context/plate-batch-2026-08-07/DO-ART-<no>.txt` in THIS worktree — use these files verbatim as the `<Plate>` children, do not re-derive them from decoded-marketing. Do not touch decoded-marketing (read-only reference) at all.

## The 12 plates to port

1. **DO-ART-208** → `/small-business` → `app/small-business/page.tsx`
2. **DO-ART-209** → `/resources/six-sigma` → `app/resources/six-sigma/page.tsx`
3. **DO-ART-307** → `/resources/audit-checklist` → `app/resources/audit-checklist/page.tsx`
4. **DO-ART-412** → `/problems/erp-implementation-failure` → `app/problems/erp-implementation-failure/page.tsx` (this page currently has NO existing diagram/plate on this branch — it's a clean insert, not a replace; a good spot is right after the hero, before the Hanicks before/after section)
5. **DO-ART-422** → `/resources/5-warning-signs` → `app/resources/5-warning-signs/page.tsx`
6. **DO-ART-903** → `/case-studies/eternal-fitness` → `app/case-studies/eternal-fitness/page.tsx`
7. **DO-ART-904** → `/about` → `app/about/page.tsx`
8. **DO-ART-118** → `/problems` (index) → `app/problems/page.tsx`
9. **DO-ART-207** → `/case-studies` (index) → `app/case-studies/page.tsx`
10. **DO-ART-210** → `/tools` (index) → `app/tools/page.tsx`
11. **DO-ART-211** → `/blog` (index) → `app/blog/page.tsx`
12. **DO-ART-308** → `/resources` (index) → `app/resources/page.tsx`

For each: read the target page first to find a sensible insertion point (usually right after the hero/intro section, before the main content grid — follow whatever section rhythm the page already has), write a short eyebrow + h2 + lede that fits the plate's title/sub (don't just paste the raw title as the h2 verbatim if the page already has a strong voice — keep it in the page's own voice, but never invent facts beyond what the plate's title/sub say), then insert the `.plate-scroll > .plate-frame > <Plate>` block using the exact children from the matching `.txt` file. Add the `Plate` import if the page doesn't already have one.

## Rules

- Only touch the 12 target `page.tsx` files listed above, plus you may need to append to `.context/loop-status.md` if present. Do not touch `components/Plate.tsx`, `components/DsPlatesLoader.tsx`, any global CSS, or any page not listed.
- Do NOT touch `D:\apps\design-systems\decoded-marketing` (read-only reference).
- Never invent numbers or content — the plate children are already final, verbatim. For the surrounding page copy (eyebrow/h2/lede), only use facts already present on that page or in the plate's title/sub — do not fabricate new claims.
- SVG attribute syntax is already converted in the `.txt` files (camelCase, `className`). Do not re-convert or second-guess them — paste as-is.
- HARD RULES: no deploy, no git push, no pnpm/npm install. If `npx next build` fails on a missing dependency, stop and report rather than installing anything.
- After all 12 pages are done, run `npx next build` from the worktree root — must exit 0, zero TypeScript errors. Fix any JSX/type errors you introduced (e.g. unescaped entities, unclosed tags) before reporting done.
- Append one line per plate to `.context/loop-status.md` (create the "plate-batch-2026-08-07" lane entry) recording route + drawing number + insertion location.
- When done, report: the full list of 12 pages with their drawing numbers and confirmation `npx next build` exits 0, plus flag any plate where the target page's structure didn't map cleanly (ambiguous insertion point, page uses a shared component instead of raw JSX, etc.) rather than silently working around it.
