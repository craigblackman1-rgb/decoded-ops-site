# Lane notes: web-d-build-d17-fix1

## What happened

Sector D17 artwork rendered unstyled because the pieces are raw HTML injected with
`dangerouslySetInnerHTML` using plain class names (`d17 sx a921`, `d17-doc`, `win`,
`kpi`, `q-...`), but the CSS was loaded as CSS Modules which rename every class.

## Fix applied

1. Created `app/d17-global.css` = full contents of `d17-art.css` + `d17-sectors.css`
   (from `.context/lane-briefs/d17-sectors/`). Class names are un-moduled.
2. Deleted `app/d17-sectors.module.css`.
3. In all 9 sector pages: removed `import sectors from '@/app/d17-sectors.module.css'`
   (and `import d17 from '@/app/d17-art.module.css'` where present); added side-effect
   `import '@/app/d17-global.css'`.
4. No JSX references to `d17.xxx` or `sectors.xxx` existed in any sector page — the
   imports were purely for side-effect.
5. `D17Motion` was already imported and rendered on all 9 sector pages — no change needed.

## Clash list (step 5)

Against `app/globals.css`: **zero clashes**. No selector in d17-global.css has the same
name as any selector in globals.css.

Cross-file clashes that exist but are outside scope of step 5 (not in globals.css):
- `.hero-split` and `.hero-cta` exist in `ds-marketing.css` / `marketing-pages-extra.css`
  — would collide if both load on the same page, but sector pages don't import those.
- `.meter` exists standalone in `d17-art.module.css` (used by Home/About/Contact via JSX
  module) — no collision because the global `.meter` in d17-global.css and the module
  `.meter` in d17-art.module.css both define the same styles identically.
- `.badge` is generic but does not exist in any other website CSS file.

No `.d17` prefixing was required.

## Verification

- `npx tsc --noEmit` — clean
- `git grep -n "d17-sectors.module" -- app` — empty
