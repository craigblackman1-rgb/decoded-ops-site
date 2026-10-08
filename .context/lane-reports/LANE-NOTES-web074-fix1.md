# Lane notes — web074-fix1 (CR-WEB-074 fix1)

Single commit 3a6795d on `lane/web074-art-swaps`. Full detail appended to
`LANE-NOTES-web074-art-swaps.md` § fix1.

## What changed

1. **DO-ART-943 phone fit** (`app/d17-apps-cases.css`): new ≤640px block — catalogue card
   relative/`width:100%`/`transform:none` (no left crop), phone mock-up hidden, `.mw` scaled to
   `.55px`, `.cap3` to `.9px`, paddings/gaps tightened. Caption list and mark line kept. Estimate
   ~700–750px at 342px wide (was 1152–1174).
2. **Root cause of the crop**: the generic `.desk` pill rule in `d17-problems.css` leaks into
   a943's desk div on `/problems/inventory-blind` (loads problems.css). The base `.a943 .desk`
   rule now resets transform/background/padding/font etc. so the card is correct at all widths
   on that page.
3. **DO-ART-917 phone fit** (`app/d17-art.module.css`): second-pass ≤640px tightening —
   hides only the mock-up subline; headline, three KPI numbers and mark line kept. Estimate
   ~740–780px at 342px wide (was 859).
4. **Hygiene**: `.context/cr-web-074/swap-exports/` untracked and deleted (all 15 webp exports
   verified in `public/images/` first; `_contact-sheet.jpg`/`manifest.json` were
   never-shipped working artefacts). Map + helper scripts kept.

## Honest limits

- Height figures are CSS arithmetic, not measured renders — the brief forbade dev servers and
  Playwright. The ≤800px targets need a visual pass to confirm.
- `npx tsc --noEmit` clean; no tests apply (CSS-only change).
