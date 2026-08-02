Work inside this decoded-ops-website worktree (Next.js/TypeScript). A voice audit found real em-dash/pronoun violations in several component files that render live on the public site. Fix them.

## IMPORTANT — verify with the correct grep pattern
A previous verification pass used `grep -P "\x{2014}"` (PCRE mode) which silently failed to match anything in this environment, producing false "0 hits" results even though real em dashes were present. **Use plain `grep -c "—"` or `grep -n "—"` (the literal character, no PCRE escape) to search and to verify your own work** — confirm it actually finds real hits before you start, and confirm it finds zero after you finish.

## Files confirmed to be actually rendered on live pages (verified by import — fix these)
- `components/schematics/problems/CantScaleSchematic.tsx`
- `components/schematics/problems/DisasterRecoverySchematic.tsx`
- `components/schematics/problems/EcommerceNotConnectedSchematic.tsx`
- `components/schematics/problems/ManualWorkaroundsSchematic.tsx`
- `components/schematics/problems/NoOpsOwnerSchematic.tsx`
- `components/schematics/problems/SlowProcessesSchematic.tsx`
- `components/schematics/problems/SystemsDontTalkSchematic.tsx`
- `components/schematics/SixSigmaSchematic.tsx`
- `components/schematics/sectors/AwardsEngravingSchematic.tsx`
- `components/schematics/sectors/GarmentDecorationSchematic.tsx`
- `components/schematics/sectors/LabelsPackagingSchematic.tsx`
- `components/schematics/sectors/PrintPromotionalSchematic.tsx`
- `components/schematics/sectors/SignsGraphicsSchematic.tsx`
- `components/schematics/primitives.tsx` (shared by two of the above — check whether its em dashes are in visible `<text>`/`aria-label` content or just internal comments/variable names before fixing; only fix visible content)
- `components/ProblemPageDS.tsx` (confirmed used by 7 problem pages)
- `components/SectorPageDS.tsx` (confirmed used by all 9 sector pages — was already partly fixed by an earlier lane, 1 instance remains per a fresh grep, find and fix it)
- `app/contact/ContactClient.tsx`

## Do NOT touch these — confirmed dead code, never imported anywhere in app/ (verified before this lane was written, don't re-verify, just skip them)
`components/ProblemPage.tsx`, `components/SectorPage.tsx`, `components/schematics/DiscoveryDaySchematic.tsx`, `components/schematics/problems/ErpImplementationFailureSchematic.tsx`, `components/schematics/problems/WrongErpSchematic.tsx`, `components/schematics/problems/AiParalysisSchematic.tsx`, `components/schematics/sectors/WorkwearTeamwearSchematic.tsx`, `components/HeroGraphic.tsx`, `components/HeroVisual.tsx`, `components/PrintDownloadButton.tsx`, `components/SectorCredibilityPhoto.tsx`, `components/DsPlatesLoader.tsx`, `components/graphics/ExpertiseTimelineGraphic.tsx`, `components/graphics/RetainedModelGraphic.tsx`, `components/graphics/TransformProgrammeGraphic.tsx`, `components/schematics/SinglePointSchematic.tsx` (unless you find it's actually imported by one of the live files above, in which case treat it as live and fix it).

## The rules (non-negotiable)

1. **No em dashes anywhere** (the — character, U+2014) in visible SVG `<text>` elements, `aria-label` props, `data-title`/`data-sub` attributes, or any JSX text. Replace with a comma, period, or colon.
2. **First person singular only** — "I"/"my"/"me", never "we"/"our"/"us".
3. **Banned phrase: "end to end"/"end-to-end"** — reword.
4. **Other banned consultant-speak, if found:** leverage, synergy, holistic, seamless, journey, pain points, moving the needle, best-in-class, best practice, circle back, reach out, unlock, game-changer, delve, robust, crucial.

## Verify before considering this done
- `grep -n "—" <each file listed as live above>` — must return nothing for visible content (a comment-only hit inside `/* */` or `//` is fine to leave, note it in your report if you find one and leave it).
- Run `npm run build` (copy `node_modules` from `D:\apps\decoded-ops-website\node_modules` if missing, don't install fresh) — must exit 0, zero TypeScript errors. Pay attention to whether the SVG diagrams still render sensible layouts after your text edits (don't change coordinates/positioning, only text content).

## Rules
- Stay inside exactly the files listed as "confirmed live" above (plus SinglePointSchematic.tsx only if you discover it's actually imported). Do not touch the confirmed-dead files, do not touch app/ pages directly (only the components).
- HARD RULES: no deploy, no git push, no pnpm/npm install.
- Append progress to `.context/loop-status.md` if present, or report at the end.
- When done, report: em-dash count fixed per file with actual grep proof, confirm the dead-code list was correctly skipped, and flag anything ambiguous (e.g. if SinglePointSchematic.tsx turned out to be live after all).
