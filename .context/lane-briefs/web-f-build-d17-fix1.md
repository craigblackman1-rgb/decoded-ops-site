# web-f-build-d17 fix1 (WO-INF-061, CR-WEB-052) — found by Claude on a production build

## 1. Raw image placeholders on six pages
These pages contain unresolved `{{IMG:...}}` strings (broken images): app/problems/{cant-scale-operations,
disaster-recovery,ecommerce-not-connected,manual-workarounds,no-ops-owner,slow-processes}/page.tsx.
The images are now rendered and committed. Replace each placeholder string EXACTLY per the map in
`.context/lane-briefs/web-f-img-map.txt` (read it with the shell; left side = the literal text in the file,
including the braces, right side = the path to put in its place). Afterwards `git grep -n "{{IMG" app components`
must return nothing.

## 2. Missing hero art on /problems/erp-implementation-failure
That page has only the inline DO-ART-917; its hero piece DO-ART-967 is missing. Port
`.context/lane-briefs/d17-problems/erp-implementation-failure.hero.html` into the hero slot exactly as the other 16
problem pages do (same heroArt prop / pattern in components/ProblemPageDS.tsx). Resolve any `{{IMG` in it the same
way; if it has one that is not in the map, stop and say so in your report rather than guessing.

`npx tsc --noEmit`, commit `fix(web): resolve problem-page image placeholders + ERP hero art (WO-INF-061)`.
No dev servers, browsers, builds, databases or .env files. Do not push.
