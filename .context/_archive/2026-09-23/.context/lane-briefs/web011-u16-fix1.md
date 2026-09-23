# Lane brief — WO-WEB-011 u16 FIX PASS 1 (CR-WEB-040): wire the render path

Verification of your first pass FAILED: the entries you added to data/problem-routing.ts and data/sector-routing.ts are correct, but FOUR pages never render those arrays, so the links don't exist in the HTML. Fix the render path only; do not touch the data files again.

## 1. app/problems/ai-paralysis/page.tsx and app/problems/bottleneck-growth/page.tsx
These are hand-built pages (not ProblemPageDS) and never import problemRouting. Add, immediately BEFORE the final CTA-strip `<section className="g-white cta-strip">` in each file, a related-links section that renders `problemRouting['ai-paralysis']` / `problemRouting['bottleneck-growth']` (import `problemRouting` from '@/data/problem-routing'). Copy the exact markup pattern used by components/ProblemPageDS.tsx lines ~177-240 (the `.card` articles with `<span className="kicker">Related problems</span>` / `Related sectors` / `Related resources`, `<ul style={{ listStyle:'none', padding:0, margin:0 }}>`, `<Link>` with `<ArrowRight size={14} …/>`), wrapped in the same section/wrap/grid classes ProblemPageDS uses. Render relatedProblems, relatedSectors, relatedResources (each guarded by `.length > 0`). Import ArrowRight from 'lucide-react' the same way ProblemPageDS does.

## 2. app/sectors/print-promotional/page.tsx
The related block at ~line 218 renders relatedProblems and relatedResources but has NO relatedSectors branch. Add the `relatedSectors` article exactly as app/sectors/schoolwear/page.tsx lines ~249-264 does ("Related sectors" kicker, "Adjacent trades" h3), and add `|| (route.relatedSectors && route.relatedSectors.length > 0)` to the outer guard on line ~218.

## 3. app/sectors/garment-decoration/page.tsx
The outer guard at ~line 205 already mentions relatedSectors but no article maps it. Add the same relatedSectors article as in step 2 after the relatedResources article.

## Rules
Only these 4 files change (plus your LANE-RESULT/LANE-NOTES under .context/lane-reports/ — note: lane-reports, not lanes). Real characters only, no `\uXXXX`. Run `npx tsc --noEmit` and `npx next lint` (report counts; pre-existing lint errors in untouched files are fine). Do NOT start any server. Commit as "fix(seo): render related links on 4 pages missing the routing block (CR-WEB-040, WO-WEB-011 u16 fix1)". Only `git add` files you changed. Write .context/lane-reports/LANE-RESULT-web011-u16-fix1.json {unit:"u16-fix1",files:[...],tsc:"…",lint:"…",commit:"…"} and stop.
