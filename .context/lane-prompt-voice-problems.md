Work inside this decoded-ops-website worktree (Next.js/TypeScript). A voice/brand-language audit found systemic violations of this site's strict writing rules. Fix them across all files in `app/problems/**` (18 problem pages + the `app/problems/page.tsx` index — read every one, don't sample).

## The rules (non-negotiable, from this business's voice reference)

1. **No em dashes anywhere** (the — character, U+2014). Every instance in visible copy (headings, paragraphs, CTAs, `title:`/`description:` metadata strings, `alt` text, any prop that renders as visible text) must go. Don't just delete the dash and jam two clauses together — replace with a comma, a period (splitting into two sentences), or a colon, whichever reads most naturally for that specific sentence. Use judgement per instance, this needs to still read well.

2. **First person singular only.** This is Craig Blackman, a sole trader — always "I"/"my"/"me", never "we"/"our"/"us" describing his own work or process. Search for "we ", "We ", "our ", "Our ", "us " in visible copy. Exceptions: quoting someone else verbatim, or a truly generic idiom that doesn't imply a team (use judgement — if in doubt, rewrite to "I").

3. **Banned phrase: "end to end" / "end-to-end".** Used repeatedly across these pages as a stock descriptor (e.g. "automated end to end"). Reword each instance to say specifically what happens, rather than reaching for this phrase — e.g. "automated end to end" could become "automated from the first feed to the last invoice" or whatever the actual specific scope is for that page's context, not a generic replacement phrase repeated everywhere.

4. **Other banned consultant-speak, if found:** leverage, synergy, holistic, seamless, journey, pain points, moving the needle, best-in-class, best practice, circle back, reach out, unlock (as a vague buzzword — "unlock the most revenue" should become something concrete, e.g. "recover the most cost or add the most revenue"), game-changer, delve, robust, crucial (as a vague intensifier).

5. **No overclaims** — "biggest", "always", "never", "every" used as an unverifiable superlative about the whole sector/market (not about Decoded Ops' own stated pricing/process rules, which are fine to state as absolute since they're checkable facts). One known instance to check: a sector page said "the single biggest source of delay" about garment decoration generally — if a similar unverifiable superlative appears in a problem page, soften it (e.g. "one of the most common sources of delay" or cite what makes it true rather than asserting a rank).

## What NOT to flag
- The product names "Transform" and "Retained Transformation" (capitalized, proper nouns) are fine — only flag "transformation" used as a generic lowercase buzzword.
- Quoted illustrative customer complaints in scare quotes (not Craig speaking as a team) are fine as written.

## Verify before considering this done
- Grep the entire `app/problems/` tree for the — character after your changes: should be zero.
- Grep for "we "/"our "/"us " (word-boundary aware): review each hit, fix real violations.
- Grep for "end to end" and "end-to-end": should be zero, or only inside a direct quote attributed to someone else.
- Run `npm run build` (copy `node_modules` from `D:\apps\decoded-ops-website\node_modules` if missing, don't install fresh) — must exit 0, zero TypeScript errors.

## Rules
- Stay inside `app/problems/**` only. Do not touch any other directory.
- HARD RULES: no deploy, no git push, no pnpm/npm install.
- Append progress to `.context/loop-status.md` if present, or report at the end.
- When done, report: total em-dash count fixed, total we/our/us fixes, total "end to end" rewrites, and any other banned-phrase fixes, with a few representative before/after examples.
