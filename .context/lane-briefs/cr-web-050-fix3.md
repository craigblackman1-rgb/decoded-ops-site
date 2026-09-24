# CR-WEB-050 fix 3 (same rules as cr-web-050.md). Exact edits only.
app/page.tsx:
- ~line 314: "nine supplier" (start of "nine supplier feeds automated") -> "17 supplier". Keep the rest of the sentence.
- ~line 397: "Nine supplier feeds, automated" -> "17 supplier feeds, automated"
Then `git grep -niE "nine supplier|9 supplier feeds" -- app ':!app/clients'` must be empty; npx tsc --noEmit; one commit "fix(site): homepage feed count (CR-WEB-050)".
