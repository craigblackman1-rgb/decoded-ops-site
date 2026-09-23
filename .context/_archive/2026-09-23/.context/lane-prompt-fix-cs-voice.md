Work inside this decoded-ops-website worktree (Next.js/TypeScript). An earlier voice-sweep effort deliberately skipped these 4 files because a different lane had already fixed content-accuracy issues on them and it was wrongly assumed that also covered voice. It didn't. Fix them now for real em-dash/pronoun/banned-phrase violations.

## Files
- `app/case-studies/hanicks/page.tsx`
- `app/case-studies/tacklebag/page.tsx`
- `app/case-studies/cobra-workwear/page.tsx`
- `app/case-studies/eternal-fitness/page.tsx`

## IMPORTANT — verify with the correct grep pattern
A previous verification pass used `grep -P "\x{2014}"` (PCRE mode) which silently failed to match anything in this environment, producing false "0 hits" results even though real em dashes were present. **Use plain `grep -c "—"` or `grep -n "—"` (the literal character, no PCRE escape) to search and to verify your own work** — confirm it actually finds real hits before you start, and confirm it finds zero after you finish. Don't trust a "clean" result from a search you haven't sanity-checked against a known-present instance first.

## The rules (non-negotiable, from this business's voice reference)

1. **No em dashes anywhere** (the — character, U+2014), including inside `title:`/`description:` metadata strings, JSON-LD schema fields, `aria-label` props, `<Plate>` `title=`/`sub=` props, and any visible JSX text. Replace with a comma, period, or colon depending on what reads best for that specific sentence.

2. **First person singular only.** Sole trader, always "I"/"my"/"me", never "we"/"our"/"us" for Craig's own work/process.

3. **Banned phrase: "end to end" / "end-to-end".** Reword to say specifically what happens.

4. **Other banned consultant-speak, if found:** leverage, synergy, holistic, seamless, journey, pain points, moving the needle, best-in-class, best practice, circle back, reach out, unlock, game-changer, delve, robust, crucial.

## What NOT to flag
- Real client numbers (Hanicks: 164,752/127,135/77%/11,064; TackleBag: 9 feeds, 20-40 hrs/wk) must not change — voice/punctuation fixes only, never touch the numbers.
- "Transform" and "Retained Transformation" (proper nouns) are fine.
- Quoted client statements are fine as written.

## Verify before considering this done
- `grep -n "—" app/case-studies/hanicks/page.tsx app/case-studies/tacklebag/page.tsx app/case-studies/cobra-workwear/page.tsx app/case-studies/eternal-fitness/page.tsx` — must return nothing.
- Run `npm run build` (copy `node_modules` from `D:\apps\decoded-ops-website\node_modules` if missing, don't install fresh) — must exit 0, zero TypeScript errors.

## Rules
- Stay inside exactly the 4 files listed. Do not touch `app/case-studies/page.tsx` (the index, already fixed) or any other file.
- HARD RULES: no deploy, no git push, no pnpm/npm install.
- Append progress to `.context/loop-status.md` if present, or report at the end.
- When done, report: em-dash count fixed per file (with the actual grep output proving zero remain), and any pronoun/banned-phrase fixes made.
