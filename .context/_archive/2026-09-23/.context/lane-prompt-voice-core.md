Work inside this decoded-ops-website worktree (Next.js/TypeScript). A voice/brand-language audit found systemic violations of this site's strict writing rules. Fix them across these specific files:

- `app/page.tsx` (homepage)
- `app/pricing/page.tsx`
- `app/retained/page.tsx`
- `app/how-i-build/page.tsx`
- `app/about/page.tsx`
- `app/clarity/page.tsx`
- `app/deliver/page.tsx`
- `app/transform/page.tsx`
- `app/process-quality-system/page.tsx`
- `app/decoded-method/page.tsx`
- `app/apps/page.tsx`
- `app/apps/data-app/page.tsx`
- `app/apps/artwork-manager/page.tsx`
- `app/apps/commerce/page.tsx`
- `app/apps/crm/page.tsx`
- `app/case-studies/page.tsx` (the index only — the 4 individual case-study pages were already fixed separately, don't touch them)

Known specific finding: `app/clarity/page.tsx` around a line reading `"We walk through it together, so you can push back on it while I'm still in the room."` — this switches from "We" to "I'm" mid-sentence, a real voice inconsistency. Rewrite to first person throughout, e.g. "I walk you through it, so you can push back while I'm still in the room."

Known specific finding: `app/apps/artwork-manager/page.tsx` has `"...I'll tell you that and we'll stop there."` — same mid-sentence voice switch, fix to "I'll tell you that and we'll — " no, fix to first person: "...I'll tell you that, and we can stop there" is still wrong, use: "I'll tell you that, and that's the end of it" or similar single-voice rewrite.

## The rules (non-negotiable, from this business's voice reference)

1. **No em dashes anywhere** (the — character, U+2014). Replace with a comma, period, or colon depending on what reads best — don't just delete it and jam clauses together. These are flagship, high-traffic pages — get this right.

2. **First person singular only.** Sole trader, always "I"/"my"/"me", never "we"/"our"/"us" for Craig's own work/process. Search "we ", "We ", "our ", "Our ", "us " in visible copy.

3. **Banned phrase: "end to end" / "end-to-end".** Reword to say specifically what happens.

4. **Other banned consultant-speak, if found:** leverage, synergy, holistic, seamless, journey, pain points, moving the needle, best-in-class, best practice, circle back, reach out, unlock (vague buzzword), game-changer, delve, robust, crucial (vague intensifier).

5. **No overclaims** — "biggest"/"always"/"never"/"every" as unverifiable superlatives about the market/sector generally. Decoded Ops' own stated pricing/process rules ARE allowed to use "always"/"never" since they're checkable facts (e.g. "the build fee is always a separate line, never rolled into the retainer" — that's fine, leave it).

## What NOT to flag
- "Transform" and "Retained Transformation" (proper nouns) are fine.
- `app/retained/page.tsx` is explicitly allowed to use day-count language (2/4/8 days a month) — this is the one place on the site that's permitted, don't remove it.
- Quoted illustrative customer complaints in scare quotes are fine as written.
- `app/how-i-build/page.tsx` and the homepage's ladder/rung content was already checked for factual accuracy in a separate audit and found compliant on substance — you're only fixing voice/language mechanics here, don't change the ladder argument or rung ordering.

## Verify before considering this done
- Grep all listed files for the — character after your changes: should be zero.
- Grep for "we "/"our "/"us ": review each hit, fix real violations (remembering the /retained day-count exception doesn't relate to pronouns, so still fix any real "we" there too).
- Grep for "end to end"/"end-to-end": should be zero or only in a direct quote.
- Run `npm run build` (copy `node_modules` from `D:\apps\decoded-ops-website\node_modules` if missing, don't install fresh) — must exit 0, zero TypeScript errors.

## Rules
- Stay inside exactly the files listed above. Do not touch `app/case-studies/hanicks/`, `tacklebag/`, `cobra-workwear/`, `eternal-fitness/` (already fixed separately), or any sector/problem page (handled by other lanes).
- HARD RULES: no deploy, no git push, no pnpm/npm install.
- Append progress to `.context/loop-status.md` if present, or report at the end.
- When done, report: total fixes per category per file, and confirm the two mid-sentence voice-switch fixes (clarity, artwork-manager) read naturally.
