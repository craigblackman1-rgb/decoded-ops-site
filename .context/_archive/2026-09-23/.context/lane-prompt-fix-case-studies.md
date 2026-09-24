Work inside this decoded-ops-website worktree (Next.js/TypeScript). A content audit found real drift between the approved case-study mockups and the live pages. Fix it. Read-only reference for the approved content: `D:\apps\design-systems\decoded-marketing\case-studies-hanicks.html`, `case-studies-tacklebag.html`, `case-studies-cobra-workwear.html` (never edit these).

## 1. TackleBag — missing stat card (`app/case-studies/tacklebag/page.tsx`)
The mockup's "The numbers" section has THREE stat cards in a 3-column grid. The live page only has two. Add back the missing third:
- **`Live`** — "project underway, Symphony integration proven in production"

Match the existing two stat cards' markup pattern exactly (same component/classes), just add the third and change the grid from 2-column to 3-column to fit it.

## 2. Hanicks — restore the plate section's original headline/lede (`app/case-studies/hanicks/page.tsx`)
The numbers themselves are correct and unaffected (164,752 / 127,135 / 77% / 11,064 — verified already matching everywhere). Only the prose intro to the plate section was rewritten. Restore the approved version:
- Headline: currently reads something like "Before and after, paired line for line." Restore to: **"Not projected. Not modelled. What actually happened."**
- Lede: currently a shorter passage. Restore to: **"164,752 products imported from supplier feeds. 127,135 matched automatically on the first run, a 77% match rate, without anyone re-keying a row. 11,064 pushed live to Khaos Control within weeks."** (adjust the em dash in "run — a 77%" to a comma or period when you port this, per this project's no-em-dash rule — don't copy the mockup's em dash verbatim).

## 3. Discovery Day → Clarity Audit naming fix
Both `app/case-studies/hanicks/page.tsx` and `app/case-studies/cobra-workwear/page.tsx` currently say "Discovery Day identified the platform first..." / "Discovery Day, followed by Deliver Consultancy...". "Discovery Day" was retired as a product name on 31 July 2026 — it's now called **Clarity Audit** everywhere except when a page is deliberately narrating something that happened in the past using the old name it was called at the time (check `app/pricing/page.tsx` for the canonical current terminology — it says "Clarity Audit" throughout with zero "Discovery Day" references). Rename "Discovery Day" to "Clarity Audit" in both files, keeping the surrounding sentence grammatically correct (e.g. "A Clarity Audit identified the platform first..." not "A Clarity Audit's identified...").

## 4. Cobra Workwear — restore two missing sections (`app/case-studies/cobra-workwear/page.tsx`)
The mockup has two structural pieces the live page dropped:
- A `.shape-card` sidebar in the hero, presenting "The engagement shape" as a definition list: Role / Stack / Structure / Status. Read the mockup for the exact field values and restore this as a sidebar next to the hero content (the live page currently uses a single-column centered hero with no sidebar — you'll need to restructure the hero section layout to hero-split style to fit a sidebar in, matching how other case-study pages like Hanicks/TackleBag do their hero-split layout).
- A 3-card "What the engagement covers" section: 01 Vendor selection, 02 Process design, 03 Implementation oversight, each with its own explanatory paragraph from the mockup. The live page currently only has two plain prose paragraphs under "What was done" — add the 3-card section back, keep the existing prose paragraphs too if they add real information not in the mockup (check for a paragraph about "an initial six-month framing restructured to a twelve-month minimum retainer covering the full build across the first four months" — this specific commercial-term claim exists in the live page with NO mockup source to verify it against. Leave it in place since I can't confirm it's wrong, but do not remove it or treat it as something to "fix away" — it may be accurate updated information the mockup simply predates).

## Rules
- Stay inside `app/case-studies/hanicks/page.tsx`, `app/case-studies/tacklebag/page.tsx`, `app/case-studies/cobra-workwear/page.tsx` only. Do not touch `app/case-studies/eternal-fitness/page.tsx` (already handled separately) or `app/case-studies/page.tsx` (the index).
- Do NOT touch decoded-marketing (read-only reference).
- Never invent numbers or content not in the mockup, except where noted above (the six-to-twelve-month claim on Cobra, which stays as-is).
- No em dashes in anything you write or port — this project has a strict no-em-dash rule. Use a comma, period, or colon instead.
- First person only ("I", never "we"/"our") in anything you write or port.
- HARD RULES: no deploy, no git push, no pnpm/npm install. If build fails on a missing dependency, stop and report rather than installing.
- After all fixes, run `npm run build` (node_modules may need copying from `D:\apps\decoded-ops-website\node_modules` if missing) — must exit 0, zero TypeScript errors.
- Append progress to `.context/loop-status.md` if present, or report at the end.
- When done, report exactly what changed on each of the 3 pages.
