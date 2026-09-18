# Lane notes — inf061-u6-batch-b-fix1

## Fix 1 — PhotoPiece fluid 16:9

Created `components/PhotoPiece.module.css` with the `.ev-piece` block ported verbatim from
`clarity.html`. CSS modules are unlayered so they beat `layer(ds)` — the fix works without
editing ds-artwork.css.

Restructured `components/PhotoPiece.tsx`: the `<figure>` now wraps a child `<div class="art tx-photo">`
rather than being the `.art` element itself. This lets the module's descendant selectors
(`.evPiece :global(.art.tx-photo[data-artboard="ls"])`, `.evPiece :global(img.tx-photo__shot)`, etc.)
target the correct elements.

Removed all inline `style=` props that the module now covers (position, padding, typography on the
caption and mark). Kept `--ev-focus` as an inline custom property on the `.art` element (per-piece data).

The 8 page files (clarity, deliver, retained, transform, pricing, how-i-build, process-quality-system,
small-business) already had `ev-band` in their evidence `<section>` classNames from the prior commit,
so no edits were needed there.

## Fix 2 — Artwork root data attributes

Added `data-no`, `data-rev`, `data-mode`, and `data-sub` to the root `<svg>` in `components/Artwork.tsx`.
These were already available as props but not reflected in the DOM, unlike the register push which had them.

## Verification

- `npm run build` — green
- `npm run lint` — 147 pre-existing problems, 0 new errors in touched files
- Unicode escape grep on components — 0 hits
