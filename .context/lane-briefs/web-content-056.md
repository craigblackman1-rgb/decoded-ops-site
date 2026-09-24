# web-content-056 (CR-WEB-056 site content review, WO-INF-061 u40)

All wording has been written and checked already. Your job is mechanical: apply it exactly, then a narrow sweep.
Files for this lane are in `.context/lane-briefs/cr-web-056/` (list with the shell; your glob tool may skip dot-folders).

1. Run `python .context/lane-briefs/cr-web-056/apply_spec.py .context/lane-briefs/cr-web-056/copy-spec.json`
   from the repo root. It must print `applied 157/157, skipped 0`. Do NOT edit copy-spec.json, do NOT reword anything
   it changes. Commit: `content(web): CR-WEB-056 copy fixes from the content review`.
2. Em-dash sweep. `copy-spec-notes.md` lists remaining em dash (the long dash character U+2014) occurrences in
   user-visible copy (file:line). Handle ONLY files under app/ components/ data/ lib/ EXCLUDING app/blog/**,
   app/resources/**, app/tools/**, app/clients/** (private proposals, out of scope). For each: rewrite the sentence
   with a comma, colon or full stop so it still reads naturally. Never replace with a hyphen or en dash. Don't touch
   code comments, CSS, or strings that are not shown to visitors. Keep every other word the same.
   Commit: `content(web): remove em dashes from site copy (CR-WEB-056)`.
3. "Trade store" -> "Commerce" in user-visible copy everywhere under app/ and components/ (same exclusions), unless
   it is part of a longer product description where "Decoded Commerce" reads better. Commit separately.
Then `npx tsc --noEmit`. No dev servers, browsers, builds, databases or .env files. Do not push.
Report: the three commit hashes, the count of em dashes fixed and any you left with the reason.
