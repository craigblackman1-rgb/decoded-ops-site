Work inside this decoded-ops-website worktree (Next.js/TypeScript). A voice/brand-language audit found systemic violations of this site's strict writing rules. Fix them across these directories/files:

- `app/tools/**` (7 pages: the index + 6 calculators)
- `app/resources/**` (5 pages)
- `app/locations/**` (fractional-cto hub + [location], tech-audit hub + [location] — note: the tech-audit pages were JUST fixed for a pricing error in a separate change, don't touch the £1,500 figures, only fix voice issues in the surrounding copy)
- `app/small-business/page.tsx`
- `app/blog/page.tsx` and `app/blog/[slug]/page.tsx` (the template/index only — individual blog post CONTENT is data-driven from `data/blog-index.json` and a hub CMS, not hardcoded in these files, so you're only fixing the template chrome around posts, not post bodies)
- `app/retained/page.tsx` is NOT in your scope (another lane owns it) — skip if you see it referenced.

## The rules (non-negotiable, from this business's voice reference)

1. **No em dashes anywhere** (the — character, U+2014). Replace with a comma, period, or colon depending on what reads best for that sentence.

2. **First person singular only.** Sole trader, always "I"/"my"/"me", never "we"/"our"/"us" for Craig's own work/process. Search "we ", "We ", "our ", "Our ", "us " in visible copy. Known specific finding: `app/problems/page.tsx` title/meta reads `'Problems we solve — Decoded Ops'` — wait, that file belongs to a different lane, skip it if you encounter it, just noting the pattern to watch for in your own scope (e.g. check tool/resource page titles for the same "we solve"/"we do" pattern).

3. **Banned phrase: "end to end" / "end-to-end".** Reword to say specifically what happens.

4. **Other banned consultant-speak, if found:** leverage, synergy, holistic, seamless, journey, pain points, moving the needle, best-in-class, best practice, circle back, reach out, unlock (vague buzzword), game-changer, delve, robust, crucial (vague intensifier).

5. **No overclaims** — "biggest"/"always"/"never"/"every" as unverifiable superlatives about the market/sector generally.

## What NOT to flag
- "Transform" and "Retained Transformation" (proper nouns) are fine.
- Quoted illustrative customer complaints in scare quotes are fine as written.
- The interactive calculator tools' JS-driven result text and formulas should not be touched functionally — only fix visible label/heading/explanation copy, not the calculation logic.

## Verify before considering this done
- Grep all files in your scope for the — character after your changes: should be zero.
- Grep for "we "/"our "/"us ": review each hit, fix real violations.
- Grep for "end to end"/"end-to-end": should be zero or only in a direct quote.
- Run `npm run build` (copy `node_modules` from `D:\apps\decoded-ops-website\node_modules` if missing, don't install fresh) — must exit 0, zero TypeScript errors. Pay particular attention to the 6 calculator tools still working correctly (their interactive scoring/calculation logic must be unaffected by your copy edits).

## Rules
- Stay inside `app/tools/**`, `app/resources/**`, `app/locations/**`, `app/small-business/page.tsx`, `app/blog/page.tsx`, `app/blog/[slug]/page.tsx` only. Do not touch `app/retained/page.tsx`, `app/problems/**`, `app/sectors/**`, or the case-study/core pages (owned by other lanes).
- HARD RULES: no deploy, no git push, no pnpm/npm install.
- Append progress to `.context/loop-status.md` if present, or report at the end.
- When done, report: total fixes per category per file/directory.
