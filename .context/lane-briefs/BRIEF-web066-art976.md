# BRIEF: BUG-WEB-037 — DO-ART-976 emoji + overlapping boxes (/problems/systems-dont-talk)

Worktree: D:\apps\worktrees\decoded-ops-website\web066-art976 (branch web066-art976 off origin/main). Work only here. No push, no dev server, no browser, no database, no .env. Pre-approved: do not stop at a plan or ask. Edit, check, commit, report in one run.

File: app/problems/systems-dont-talk/page.tsx, the `heroArt976` template string (~lines 59-92). Change ONLY what is listed.

## 1. Box geometry (neighbouring boxes overlap by 20px)
Keep every box's centre and the dashed connector lines where they are; narrow the boxes to width 120:
- Orders: rect x="60" width="160" -> x="80" width="120" (text x stays 140)
- Accounts: rect x="200" width="160" -> x="220" width="120" (text x stays 280)
- Artwork: rect x="340" width="160" -> x="360" width="120" (text x stays 420)
- Despatch: rect x="130" width="160" -> x="150" width="120" (text x stays 210)
- Website: rect x="270" width="160" -> x="290" width="120" (text x stays 350)

## 2. Replace the three emoji people with SVG line icons (house rule: no emoji anywhere)
Replace the whole `<g class="m-pop" style="animation-delay:1.3s">…</g>` that contains the three `<text class="t-a" ...>👤</text>` with this (same animation, three drawn person icons in the amber accent, stroke only):
```
    <g class="m-pop" style="animation-delay:1.3s" fill="none" stroke="var(--do-amber, #FFB703)" stroke-width="2" stroke-linecap="round">
      <g transform="translate(94 206)"><circle cx="0" cy="0" r="7"/><path d="M-12 24 C-12 13 -6 9 0 9 C6 9 12 13 12 24"/></g>
      <g transform="translate(222 180)"><circle cx="0" cy="0" r="7"/><path d="M-12 24 C-12 13 -6 9 0 9 C6 9 12 13 12 24"/></g>
      <g transform="translate(466 206)"><circle cx="0" cy="0" r="7"/><path d="M-12 24 C-12 13 -6 9 0 9 C6 9 12 13 12 24"/></g>
    </g>
```
Check the stylesheet the figure uses (app/d17*.css / the page's css import) for an existing amber token name; if the site's amber custom property is named differently (e.g. `--do-amber`, `--do-yellow`, `--amber`), use that name with the #FFB703 fallback.

## 3. Sweep
`git grep -nP "[\x{1F300}-\x{1FAFF}\x{2600}-\x{27BF}]" -- app components lib ':!app/clients'` must return nothing that renders on a public page (✓/✕ tick characters in text are fine only if they are not emoji-presentation; report every hit you leave and why).

`npx tsc --noEmit`, `npm run build` pass. Commit `fix(art): DO-ART-976 line-icon people, non-overlapping islands (BUG-WEB-037)`. Report .context/lanes/REPORT-web066-art976.md.
