Work inside this decoded-ops-website worktree (Next.js/TypeScript). A voice/brand-language audit found systemic violations of this site's strict writing rules. Fix them across all files in `app/sectors/**` (9 sector pages) plus `components/SectorPageDS.tsx`, `components/SectorPageDS.module.css` (only if it contains visible text, unlikely but check), and `components/SectorPage.tsx` (a second, older shared component — check if it's still used by any live route; if so it needs the same fixes, if genuinely dead code you can leave it, use judgement and note which).

**Known specific finding to fix:** `components/SectorPage.tsx:162` — `<h3>The problems we see most often</h3>` should read `<h3>The problems I see most often</h3>` (or similar first-person rewrite). This heading, if rendered via a shared component, may appear on multiple sector pages — check.

## The rules (non-negotiable, from this business's voice reference)

1. **No em dashes anywhere** (the — character, U+2014). Every instance in visible copy (headings, paragraphs, CTAs, `title:`/`description:` metadata strings, `alt` text, any prop rendering as visible text) must go. Replace with a comma, a period, or a colon depending on what reads best for that sentence — don't just delete it and jam clauses together.

2. **First person singular only.** Sole trader, always "I"/"my"/"me", never "we"/"our"/"us" for Craig's own work/process. Search "we ", "We ", "our ", "Our ", "us " in visible copy. Exceptions: quoting someone else, or a genuinely generic idiom.

3. **Banned phrase: "end to end" / "end-to-end".** Reword to say specifically what happens rather than reaching for this stock phrase.

4. **Other banned consultant-speak, if found:** leverage, synergy, holistic, seamless, journey, pain points, moving the needle, best-in-class, best practice, circle back, reach out, unlock (as vague buzzword), game-changer, delve, robust, crucial (as vague intensifier).

5. **No overclaims** — "biggest"/"always"/"never"/"every" as an unverifiable superlative about the sector/market generally. Soften these (e.g. "one of the most common..." rather than "the single biggest...").

## What NOT to flag
- "Transform" and "Retained Transformation" (proper nouns) are fine.
- Quoted illustrative customer complaints in scare quotes are fine as written.
- Note: `app/sectors/workwear/page.tsx`, `app/sectors/promotional-merchandise/page.tsx`, and `app/sectors/teamwear-clubwear/page.tsx` were just structurally edited by a different, already-merged fix (restoring dropped challenges and a "What I do" checklist) — you're working on top of that already-landed change, just cleaning up voice issues in whatever content is there now (including the newly-restored content, which may itself contain em dashes ported from the source it was restored from).

## Verify before considering this done
- Grep the entire `app/sectors/` tree plus the two SectorPage components for the — character after your changes: should be zero.
- Grep for "we "/"our "/"us ": review each hit, fix real violations.
- Grep for "end to end"/"end-to-end": should be zero or only in a direct quote.
- Run `npm run build` (copy `node_modules` from `D:\apps\decoded-ops-website\node_modules` if missing, don't install fresh) — must exit 0, zero TypeScript errors, and confirm all 9 sector pages still build (this shared-component territory is sensitive to breaking multiple pages at once).

## Rules
- Stay inside `app/sectors/**`, `components/SectorPageDS.tsx`, `components/SectorPageDS.module.css`, `components/SectorPage.tsx`. Do not touch any other directory.
- HARD RULES: no deploy, no git push, no pnpm/npm install.
- Append progress to `.context/loop-status.md` if present, or report at the end.
- When done, report: total fixes per category, confirm all 9 sector pages build, and note whether `SectorPage.tsx` (the older component) is actually live or dead code.
