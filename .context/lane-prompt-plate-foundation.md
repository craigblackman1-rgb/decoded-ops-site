Work inside this decoded-ops-website worktree (Next.js/TypeScript, branched off origin/staging). This is Phase 1 of porting the "plate" diagram system from the sibling `decoded-marketing` Open Design mockup project — foundational infrastructure that later work will build on, so get this right and verified before anything else depends on it.

## What a "plate" is
`decoded-marketing` (a static HTML mockup project at `D:\apps\design-systems\decoded-marketing`, read-only reference, do not edit it) has ~40 bespoke SVG diagrams — a consistent "engineering drawing" visual style (grid background, amber spine tab, title block, drawing number, scroll-triggered reveal animation) wrapping page-specific content (before/after comparisons, layer stacks, ladders, etc.). Every plate is driven by two shared files:
- `D:\apps\design-systems\decoded-marketing\ds-plates.css` (168 lines) — all the `.pl`, `.p-*`, `.sk-*` classes, entirely `--do-*` token-driven, no hardcoded hex except white/black.
- `D:\apps\design-systems\decoded-marketing\ds-plates.js` (192 lines) — vanilla JS that finds every `svg.pl` element, injects a fixed "frame" (grid, corner ticks, spine tab, title/subtitle, drawing-number, classification text) and "title block" around whatever varying content is inside, refuses to render without a `data-no` attribute, and reveals each plate on scroll via IntersectionObserver (SMIL animations paused until intersecting).

Read both files in full before starting.

## The job
Build a reusable React Client Component, `components/Plate.tsx`, that reproduces this exact behavior for use across many pages later. Signature something like:

```tsx
<Plate tone="dark" p="hs" title="Supplier catalogue — before and after" sub="Hanicks · 164,752 products, 77% matched on the first run" no="DO-ART-205" rev="01">
  {/* page-specific inner SVG content — the varying <g> elements */}
</Plate>
```

- Port the `frame()` and `titleBlock()` string-template logic from `ds-plates.js` into JSX (same visual output: grid background, corner ticks, amber spine tab, title/subtitle text, drawing-no/rev, classification text, title block strip along the bottom).
- Port the IntersectionObserver reveal-on-scroll behavior (`sk-in` class added on intersection, respecting `prefers-reduced-motion`, SMIL animations paused/unpaused) as a `useEffect` inside the component.
- The "refuses to render without a drawing number" rule stays — if `no` isn't passed, render nothing (or a dev warning), don't silently render an unnumbered plate.
- Port `ds-plates.css`'s classes into this repo — either as a new `app/plates.css` imported once in `app/layout.tsx`, or appended to `app/globals.css` (your call, whichever fits this repo's existing conventions better — check how the rest of `globals.css` is organized first).

## Token gaps to resolve
This repo's `app/globals.css` already defines 93 `--do-*` tokens (colors, matching `colors_and_type.css`), but `ds-plates.css` also references a few this repo doesn't have yet: `--do-font-body`, `--do-font-heading`, `--do-font-mono`, `--do-space-*` (spacing scale), `--do-text-muted-on-dark`, `--do-text-xl`, `--do-tracking-wide`, `--do-weight-bold`. Add minimal definitions for these to `globals.css` (or wherever you land the plate CSS) using this repo's actual existing values as the source of truth, not invented ones:
- `--do-font-heading` → this repo already loads Outfit via `next/font/google` (see `app/layout.tsx`), exposed as `var(--font-outfit)` — map to that.
- `--do-font-body` → this repo already loads DM Sans, exposed as `var(--font-dm-sans)` — map to that.
- `--do-font-mono` → pick a reasonable system monospace stack (`ui-monospace, monospace` is fine, decoded-marketing doesn't define this one explicitly beyond letting the browser default apply the class font-family already declared inline in the SVG text elements — check `ds-plates.js`'s frame() function, it hardcodes `font-family="Outfit,sans-serif"` on the title/titleBlock text directly, so `--do-font-mono` may not actually be load-bearing — verify before adding a token that isn't used).
- `--do-space-*`, `--do-text-xl`, `--do-tracking-wide`, `--do-weight-bold`, `--do-text-muted-on-dark` → check exactly where in `ds-plates.css` each is used and either define a sensible value (a spacing scale entry, a font-size, a tracking value, a font-weight, a muted-color-on-dark-background) or replace the reference with a literal value if it's a one-off use not worth adding a whole scale for. Use your judgement — the priority is the rendered output looking correct, not building out a token system this repo doesn't otherwise have.

## Verify before considering this done
1. Build a tiny test page or temporarily drop a `<Plate>` instance into an existing page (e.g. the homepage) using real content from one plate in decoded-marketing — for example, port `homepage.html`'s DO-ART-902 plate content (search decoded-marketing/homepage.html for `data-no="DO-ART-902"`, copy its inner `<g>` content) into a `<Plate>` call, just to confirm the component actually renders correctly end to end. Leave this test instance in place if it's a legitimate real plate that page should have (DO-ART-902 is homepage's own plate, so this could be real work, not throwaway) — otherwise remove the test before finishing.
2. Run `npm run build` — must exit 0, zero TypeScript errors.
3. If you can start a dev server output check via `npm run build` static output alone (do NOT start a dev server, per this project's rules — OpenCode never runs dev servers), confirm the plate's markup appears in the built HTML output for whichever page you tested on.

## Rules
- Do NOT touch decoded-marketing (read-only reference).
- Do NOT touch any page file except the one you use for the end-to-end test (and even then, only if it's legitimate real content for that page — e.g. homepage.html's own plate belongs on the homepage).
- HARD RULES: no deploy, no git push, no pnpm/npm install. If `npm run build` fails because a dependency is missing, stop and report — don't install.
- Append progress to `.context/loop-status.md` if it exists, or report at the end.
- When done, report: the exact `<Plate>` prop API you settled on (so later work can use it correctly), which token gaps you resolved and how, build status, and whether you left a real test plate in place or removed it.
