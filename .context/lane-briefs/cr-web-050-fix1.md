# CR-WEB-050 fix 1 (same rules as cr-web-050.md)
app/sectors/schoolwear/page.tsx ~line 154: change "nine supplier feeds automated" to "17 supplier feeds automated". Change nothing else.
Then `git grep -nE "nine supplier feeds|9 supplier feeds" -- app ':!app/clients'` must be empty; npx tsc --noEmit; one commit "fix(site): schoolwear feed count (CR-WEB-050)".
