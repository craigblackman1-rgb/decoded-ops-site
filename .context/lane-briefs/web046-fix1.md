# Lane brief: BUG-WEB-046 fix1 — blog hero mobile overflow

Worktree of decoded-ops-website, branch `lane/web046-art-sizing`. Work only here. Do NOT start dev servers, Playwright or curl. Do not use `git add -A`; stage only the file below.

Problem: in `app/blog/[slug]/page.tsx` (~line 228) the blog hero `<img>` now has `width={1200} height={675}` and style `maxWidth: 960` but no `width: '100%'` and no `display: 'block'`. On a 390px phone the image renders 960px wide and overflows the page; `marginInline: 'auto'` also has no effect on an inline element.

Fix: in that style object add `width: '100%'` and `display: 'block'` (keep maxWidth 960, marginInline auto, aspectRatio 16/9, objectFit cover, height auto). Change nothing else.

Then: `npx tsc --noEmit`, commit `fix(art): blog hero full-width up to 960px, block display (BUG-WEB-046)`, append a "fix1" section to `.context/lane-reports/LANE-RESULT-web046-art-sizing.md`, commit, stop.
