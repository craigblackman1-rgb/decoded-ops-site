Work inside this decoded-ops-website worktree (Next.js/TypeScript). A voice audit found that the legal/utility pages use a "we/our/us" company voice throughout — completely inconsistent with the rest of the site, which is written in first person singular because this is a sole trader business (Craig Blackman, Decoded Ops), not a company with a team. This needs a genuine rewrite pass, not a mechanical find-replace, because "we" appears dozens of times per file as the base voice, not as occasional slips.

## Files to rewrite
- `app/privacy/page.tsx` — ~35 instances of "we"/"our"/"us", including the definitional line `"Decoded Ops ("we," "us," or "our") operates the decodedops.co.uk website."` and section headings like `"2. Information We Collect"`.
- `app/cookies/page.tsx` — ~18 instances, e.g. `"Why we use cookies"`, `"At Decoded Ops, we use cookies to:"`.
- `components/CookieConsent.tsx` — the cookie-consent banner text, e.g. `"We use cookies to enhance your experience, remember your preferences..."`.
- `app/contact/actions.ts` — transactional email copy sent after someone submits the contact form, e.g. `"We received your message and Craig will get back to you shortly."`, `"We'll be in touch shortly."`.

## How to do this properly
This is standard privacy-policy/cookie-policy boilerplate language, almost certainly templated from a generic source, which is exactly why it reads as a company rather than a person. Rewrite every "we"/"our"/"us" to "I"/"my"/"me" (or "Decoded Ops"/"the site" where a company-style third-person reference genuinely reads better than first person for a specific legal clause — use judgement, but default to first person per this business's voice rule). Preserve every piece of actual legal substance exactly (what data is collected, what cookies are used for, retention periods, rights, contact details, any specific clause) — this is a genuine rewrite of voice/pronoun only, not a rewrite of legal meaning. If you're not confident a specific legal clause's meaning is preserved after your rewrite, flag it in your report rather than guessing.

Examples of the kind of rewrite needed:
- `"Decoded Ops ("we," "us," or "our") operates the decodedops.co.uk website."` → something like `"This is the privacy policy for decodedops.co.uk, operated by Craig Blackman trading as Decoded Ops."` (or similar — read the surrounding paragraph and make sure whatever opening sentence you write still sets up the rest of the document's use of "I"/"Decoded Ops" consistently).
- `"We do not sell, trade, or rent your personal information."` → `"I do not sell, trade, or rent your personal information."`
- `"We received your message and Craig will get back to you shortly."` (this one is doubly odd — third person "Craig" inside a "We" sentence) → `"I've received your message and will get back to you shortly."`
- Section headings like `"2. Information We Collect"` → `"2. Information I Collect"`.

## Other voice rules to apply while you're in these files
1. **No em dashes** (—) anywhere — comma/period/colon instead.
2. **Banned consultant-speak / AI buzzwords** if found: leverage, synergy, holistic, seamless, journey, pain points, best practice, circle back, reach out, unlock, game-changer, delve, robust, crucial.

## Verify before considering this done
- Grep all 4 files for "we "/"our "/"us "/"We "/"Our "/"Us " after your rewrite — should be at or near zero (a few may be unavoidable/correct in specific legal-plural contexts, use judgement, but the overwhelming majority should be gone).
- Grep for the — character: should be zero.
- Run `npm run build` (copy `node_modules` from `D:\apps\decoded-ops-website\node_modules` if missing, don't install fresh) — must exit 0, zero TypeScript errors.

## Rules
- Stay inside exactly `app/privacy/page.tsx`, `app/cookies/page.tsx`, `components/CookieConsent.tsx`, `app/contact/actions.ts`. Do not touch any other file.
- HARD RULES: no deploy, no git push, no pnpm/npm install.
- Append progress to `.context/loop-status.md` if present, or report at the end.
- When done, report: a representative sample of before/after rewrites for each file, total remaining we/our/us count (should be near zero, explain any you deliberately kept), and flag anything where you weren't confident the legal meaning survived the pronoun rewrite.
