Work inside this decoded-ops-website worktree (Next.js/TypeScript). A content audit found that a shared component quietly dropped real content from 3 of 9 sector pages when they were built. Fix it.

## The problem
`components/SectorPageDS.tsx` is the shared layout every sector page renders through. Each of `app/sectors/workwear/page.tsx`, `app/sectors/promotional-merchandise/page.tsx`, and `app/sectors/teamwear-clubwear/page.tsx` was supposed to carry 5 "challenges" (the sector-specific problems this business solves) and a 7-item "What I do" checklist, ported from decoded-marketing HTML mockups (`D:\apps\design-systems\decoded-marketing\sectors-workwear.html`, `sectors-promotional-merchandise.html`, `sectors-teamwear-clubwear.html` — read-only reference, never edit these). Instead:
- Only 3 of the 5 approved challenges made it into each page's `features` array.
- The 7-item "What I do" checklist section is missing entirely from all three (compare to `app/sectors/garment-decoration/page.tsx`, which is NOT built on `SectorPageDS` and correctly kept its checklist — use it as your reference for how a checklist section should look/read).
- The CTA lede on each page was replaced with generic boilerplate ("An hour on what's actually going wrong in your operation, and an honest read on whether it needs software at all.") instead of the sector-specific claim from the mockup.

## What to fix, per page

### `app/sectors/workwear/page.tsx` (mockup: `sectors-workwear.html`)
- Restore all 5 challenges (currently only 3 survive): Supplier feed chaos, Decoration and stock in the same picture, **Blank stock dependency** (missing), **eCommerce disconnected from production** (missing), Replenishment that waits on you.
- Restore the "What I do" 7-item checklist from the mockup.
- Restore the CTA lede: "An hour on supplier data, blank stock dependency, and where your production step is creating admin work that shouldn't exist." (or close paraphrase if the exact wording needs adjusting to fit the current CTA component's prop shape — keep the substance: supplier data, blank stock dependency, production-step admin work).

### `app/sectors/promotional-merchandise/page.tsx` (mockup: `sectors-promotional-merchandise.html`)
- Restore all 5 challenges (currently only 3 survive): Multi-supplier catalogue management, The artwork loop, Margin erosion at the order level, **Quote-to-order conversion costs** (missing), **eCommerce disconnected from supply** (missing).
- Restore the "What I do" 7-item checklist.
- Restore the CTA lede: "An hour on supplier data, the artwork loop, and where the margin is actually leaking — on every order, not in the year-end numbers."

### `app/sectors/teamwear-clubwear/page.tsx` (mockup: `sectors-teamwear-clubwear.html`)
- Restore all 5 challenges (currently only 3, and the third slot was replaced with an unapproved new claim about TackleBag): Squad-level personalisation data, **Seasonal deadline pressure** (missing), Kit range churn, **Sponsor logo management** (missing), **The proof and approval bottleneck** (missing). The TackleBag stat-proof claim that currently occupies the third feature slot ("Proven at scale in this exact sector — TackleBag runs nine automated supplier feeds...") is NOT in the approved mockup — remove it from the features array (the TackleBag proof point can stay elsewhere on the page if it's already referenced in a case-study cross-link section, just not as one of the 5 core challenges).
- Restore the "What I do" 7-item checklist.
- Restore the CTA lede: "An hour on squad data, sponsor logos, and where the proof loop is eating time before the first match."

## How to do it
1. Read `components/SectorPageDS.tsx` first to understand its props/interface — figure out whether it already supports a `features` array of more than 3 items and a checklist section, or whether the component itself needs extending. If the component caps `features` at 3 by design (e.g. a fixed 3-column grid), you'll need to either extend it to handle 5 (adjust the grid to wrap, e.g. a 2-3 or 3-2 layout) or add a separate "What I do" checklist section to the shared component that all sector pages can use (check whether `app/sectors/garment-decoration/page.tsx`'s bespoke checklist markup can be lifted into a reusable pattern).
2. Since `SectorPageDS.tsx` is shared by ALL 9 sector pages (not just these 3), be careful: extending it must not break the other 6 pages that already render correctly through it (awards-engraving, labels-packaging, print-promotional, schoolwear, signs-graphics — check which of these use `SectorPageDS` vs their own bespoke layout, and make sure any component change is backwards compatible / additive, not a breaking change).
3. Port the exact challenge text and checklist items from the three mockup HTML files — real copy, not paraphrased summaries.

## Rules
- Stay inside `app/sectors/workwear/`, `app/sectors/promotional-merchandise/`, `app/sectors/teamwear-clubwear/`, and `components/SectorPageDS.tsx`. If fixing `SectorPageDS.tsx` requires touching other sector pages to keep them working, that's expected and fine — just don't change their content, only what's needed for compatibility.
- Do NOT touch decoded-marketing (read-only reference).
- HARD RULES: no deploy, no git push, no pnpm/npm install. If build fails on a missing dependency, stop and report rather than installing.
- After all fixes, run `npm run build` (node_modules may need copying from `D:\apps\decoded-ops-website\node_modules` if missing — report if you can't get it working, don't install fresh) — must exit 0, zero TypeScript errors. Specifically verify all 9 sector pages still build, not just the 3 you changed.
- Append progress to `.context/loop-status.md` if present, or report at the end.
- When done, report: what you changed in `SectorPageDS.tsx` (if anything) and confirm all 9 sector pages still build clean, plus the final challenge/checklist content restored per page.
