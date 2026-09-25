# BRIEF: BUG-WEB-037 fix 1
Worktree: this one. No push/dev server/browser/db/.env. Pre-approved: do not stop at a plan or ask.
In app/problems/systems-dont-talk/page.tsx, heroArt976: change exactly `<g transform="translate(222 180)">` to `<g transform="translate(240 168)">` (the middle person icon currently overlaps the top edge of "The bridges" box at y=200). Nothing else.
Run `npx tsc --noEmit` and `npm run build`, commit `fix(art): DO-ART-976 middle person clear of bridges box (BUG-WEB-037)`, report .context/lanes/REPORT-web066-fix1.md.
