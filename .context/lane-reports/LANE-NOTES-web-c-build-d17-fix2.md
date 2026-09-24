# Lane notes: web-c-build-d17-fix2

## What was broken

At 390px viewport the /contact page was 597px wide (horizontal overflow). The hero section
and the form's name/email row both used inline `gridTemplateColumns: '1fr 1fr'` which
kept columns side-by-side on narrow screens.

## What changed

**ContactClient.tsx** - moved two inline grid layouts to CSS module classes:
- Hero grid (`display: grid; grid-template-columns: 1fr 1fr`) -> `.contactHero`
- Form name+email row -> `.contactFormRow`
- Form wrapper card -> `.contactFormCard` (added `min-width: 0; overflow: hidden`)

**d17-art.module.css** - added three new classes:
- `.contactHero` with `display: grid; grid-template-columns: 1fr 1fr`
- `.contactFormCard` with the card's visual styles plus `min-width: 0; overflow: hidden`
- `.contactFormRow` with `display: grid; grid-template-columns: 1fr 1fr; gap: 16px`

Added `@media (max-width: 640px)` block:
- `.contactHero` stacks to `grid-template-columns: 1fr`
- `.contactFormRow` stacks to `grid-template-columns: 1fr`
- `.contactFormCard` reduces padding to 20px

## What was already fine

- DO-ART-920 panel: already had `@media (max-width: 760px)` stacking in the module CSS
- "What to expect" cards: use `grid grid--3` which stacks at 760px via ds-marketing.css
- Contact info links: flex column layout, no overflow risk
- Form inputs: already had `width: 100%` via inline `inputClass`
- `box-sizing: border-box` is globally applied via `*` in globals.css

## Verification

- `npx tsc --noEmit` passes clean
- No copy changes
- No desktop layout changes (grid columns only change below 640px)
