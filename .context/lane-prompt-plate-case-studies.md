Work inside this decoded-ops-website worktree (Next.js/TypeScript, branched off origin/staging, which already has `components/Plate.tsx` — the shared plate diagram component built in Phase 1). Read `components/Plate.tsx` first to understand its API before starting. Read `app/page.tsx` (homepage) to see 3 real, already-working examples of `<Plate>` in use — the DO-ART-202 one there is a Hanicks measure plate, closely related to this job — copy that exact usage pattern.

## The job
Port the plate diagram for 2 case studies from the sibling `decoded-marketing` Open Design mockup project (`D:\apps\design-systems\decoded-marketing`, read-only reference — never edit it):

| decoded-marketing file | drawing no. | this repo's route |
|---|---|---|
| `case-studies-hanicks.html` | DO-ART-205 | `app/case-studies/hanicks/page.tsx` |
| `case-studies-tacklebag.html` | DO-ART-206 | `app/case-studies/tacklebag/page.tsx` |

`case-studies-cobra-workwear.html` and `case-studies-eternal-fitness.html` intentionally have NO plate (Cobra is a consultancy engagement with no quantifiable before/after, Eternal Fitness has no real numbers to show) — do not add one to those two, don't touch those files.

Find each plate's markup in the decoded-marketing HTML file (search for `data-no="DO-ART-205"` / `data-no="DO-ART-206"`), extract the title/sub/tone/p attributes and the inner `<g>` SVG content, and insert a `<Plate>` call into the matching React page. Check what's already on `app/case-studies/hanicks/page.tsx` and `app/case-studies/tacklebag/page.tsx` first — they may already have a stat-card section showing the same numbers (164,752/127,135/77%/11,064 for Hanicks; 9 feeds/20-40 hrs saved for TackleBag) without the actual plate visual — the plate should be added alongside or in place of that, matching what the mockup does (plate typically sits in its own section right after the hero, before the numbered-stats section).

SVG attribute syntax note: the mockup HTML uses kebab-case SVG attributes (`stroke-width`, `font-family`, `letter-spacing`, `stroke-linecap`, etc.) — in JSX these become camelCase (`strokeWidth`, `fontFamily`, `letterSpacing`, `strokeLinecap`). Convert every one. `class=` becomes `className=`.

## Rules
- Stay inside `app/case-studies/hanicks/page.tsx` and `app/case-studies/tacklebag/page.tsx` only. Do not touch `app/case-studies/cobra-workwear/`, `app/case-studies/eternal-fitness/`, `app/case-studies/page.tsx` (the index), `components/Plate.tsx`, or any global CSS file.
- Do NOT touch decoded-marketing (read-only reference).
- Never invent numbers or content — port exactly what's in the mockup.
- HARD RULES: no deploy, no git push, no pnpm/npm install. If build fails on a missing dependency, stop and report rather than installing.
- After both pages are done, run `npm run build` (you'll need `node_modules` — if missing, report that clearly rather than attempting to install) — must exit 0, zero TypeScript errors.
- Append progress to `.context/loop-status.md` if present, or report at the end.
- When done, report: what you found already on each page (stat cards, an older diagram, etc.) and how you integrated the new plate alongside or in place of it.
