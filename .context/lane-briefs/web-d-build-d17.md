# Lane brief: WO-INF-061 u14 D-build · 9 sector pages in the D17 artwork style (+ CR-WEB-051 copy)

Worktree: this directory, branch `web-d-build-d17` (off origin/staging, which already carries the live Home/About/Contact D17
system: `components/D17Motion.tsx` and the D17 art CSS). Commit here only. Never push.

## Spec (approved by Craig 2026-09-24)
For each sector there is a hero piece and an inline piece in `.context/lane-briefs/d17-sectors/<slug>.hero.html` and
`<slug>.inline.html`, styled by `d17-sectors.css`. Mockup renders to match: `.context/lane-briefs/d17-sectors/*-1440.png`.
Image paths in those sources already point at committed files under `/images/d17/sectors/` (do not add or move images).

Pages: `app/sectors/<slug>/page.tsx` for awards-engraving, garment-decoration, labels-packaging, print-promotional,
promotional-merchandise, schoolwear, signs-graphics, teamwear-clubwear, workwear. (Leave operations-consultant-print-embroidery alone.)

For each page:
- Put the hero piece in the hero's artwork slot (right-hand visual), replacing the current hero image/visual.
- Put the inline piece in place of the page's old diagram/plate (the DO-ART-107..116 plate) — the renders show where.
- Keep all existing page copy, sections and components except the CR-WEB-051 edits below.
- CSS: port `d17-sectors.css` IN FULL alongside the existing D17 CSS (same file or a sibling module imported the same way); keep
  class names identical to the sources so markup and CSS match 1:1; verify every class used exists.
- Motion: reuse `components/D17Motion.tsx` (data-motion elements); reduced-motion shows the final still.
- Craig's photo must NOT appear on any sector page.
- Mobile: at 390px nothing may overflow horizontally; pieces stack as in the mockup mobile layout.

## CR-WEB-051 copy edits (only these)
- print-promotional: remove the unsupported "typically cuts/reduces delays by 20-40%" claim (rephrase the sentence without a figure).
- schoolwear: the "20 to 40 hours a week" figure must read as a projection ("a projected 20 to 40 hours a week"); remove
  "production volume triples" if present; replace "teamwear-and-schoolwear retailer" with "a teamwear business".
- Any "TackleBag" / "Tackle Bag" anywhere under app/sectors: remove (the client is never named).

FORBIDDEN: dev servers, browsers, `npm run build`/`next build`, any DB or .env access, pushing, touching files outside
app/sectors/*, the D17 CSS files and components/D17Motion.tsx (only if a hook needs extending).

DONE:
- `npx tsc --noEmit` passes.
- `git grep -nE "Khaos|TackleBag|Tackle Bag|20-40%|20–40%|volume triples|named with permission" -- app/sectors` returns nothing.
- `git grep -n "craig-blackman" -- app/sectors` returns nothing.
- One commit "feat(web): D17 artwork on sector pages + CR-WEB-051 copy (WO-INF-061 u14)". Report per page: slots replaced, file:line.
