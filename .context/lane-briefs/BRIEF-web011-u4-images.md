# Lane brief — web011-u4-images (CR-WEB-042: image weight / LCP)

Repo: decoded-ops-website (Next.js 16 App Router). Fresh worktree on branch `web011-u4-images` off origin/main. Do NOT start a dev server, do NOT run Playwright or `next start`. Implement, run `npx tsc --noEmit` and `npx next lint`, commit, stop. Only `git add` files you changed — never `git add -A`.

## Problem
Fourteen raster assets are over 100KB and several are served as multi-megabyte PNGs through plain `<img>` tags, hurting LCP on the app pages. `next/image` is used in only 4 files. `sharp` is NOT a direct dependency (check `node_modules/sharp` — Next 16 bundles it for the optimiser; if it is absent for scripting, use `npx sharp-cli` or add sharp as a devDependency and regenerate `pnpm-lock.yaml` if this repo uses pnpm — check for pnpm-lock.yaml; a package.json change without a regenerated lockfile breaks the Coolify build).

Heavy assets (KB, path):
- 1556 public/images/apps/commerce-pdp.png — used app/apps/commerce/page.tsx:117 (`<img width={3200} height={2000}`)
- 1404 public/images/apps/commerce-plp.png — app/apps/commerce/page.tsx:48 (`width={2160} height={3816}`)
- 1000 public/images/blog/decoded-method-operations-framework-img-1.png
- 604 public/images/apps/data-app-dashboard.png — app/apps/data-app/page.tsx:46
- 500 public/images/apps/artwork-approval.png — app/apps/artwork-manager/page.tsx:44
- 496 public/images/apps/data-app-catalogue.png
- 364 public/images/blog/decoded-method-operations-framework-thumb.png
- 336 public/images/apps/artwork-manager-hero.jpg
- 272 public/images/apps/data-app-supplier-import.png
- 244 public/assets/screens/data-app-hero.png
- 160 public/images/sectors/thread-spools.jpg
- 136 public/images/sector-credibility.jpg
- 124 public/images/real-example.jpg
- 120 public/images/hero-craft.jpg

## Do
1. For every `<img src="/images/…">` in `app/apps/*/page.tsx` and any other page that renders one of the assets above (grep each filename across app/ and components/): switch to `next/image` `<Image>` with the real intrinsic `width`/`height` already on the tag, a `sizes` attribute that matches the layout (e.g. `(max-width: 768px) 100vw, 50vw` for half-width screenshots, `100vw` for full-bleed), `priority` ONLY on the single above-the-fold hero image per page, and keep the existing `alt` text. Do not change layout classes.
2. Blog images referenced by hub-served post HTML cannot be switched to `<Image>` — leave the markup, just optimise the files (step 3).
3. Re-encode the source files in place at the same path and extension is NOT acceptable (cached URLs — see rule: replaced assets need new filenames). Instead: produce optimised copies with a `-v2` suffix (e.g. `commerce-pdp-v2.webp` and `commerce-pdp-v2.png` fallback where a PNG is required by markup you cannot change). Target: PNG screenshots → WebP quality 82, max 1600px wide (they are 3200px sources displayed at ≤800px CSS width — check the container); JPG photos → re-encoded JPG quality 78 at ≤1600px. Aim for each file ≤ 150KB, the two commerce shots ≤ 250KB. Update every reference to the new filename. Delete the old file only if no reference remains (grep app/, components/, data/, public/ and any content JSON under data/).
4. Blog images (`decoded-method-operations-framework-img-1.png`, `-thumb.png`) are referenced from hub content — DO NOT rename these; instead add an optimised `-v2.webp` next to them and leave the original in place. Note in LANE-RESULT that the hub content_items reference needs updating separately (Claude will file it).
5. `next.config.ts` has no `images` block. Add `images: { formats: ['image/avif', 'image/webp'] }` so the optimiser serves modern formats for `<Image>` sources.
6. JS bundle: run `ANALYZE` only if `@next/bundle-analyzer` is already installed; otherwise run `npx next build` once, capture the "First Load JS" table from the output into LANE-RESULT, and identify the single largest shared chunk contributor. Do not refactor code for bundle size in this lane — report only.

## Verify before commit
- `ls -la` sizes of every new asset printed in LANE-RESULT (before → after KB).
- `grep -rn "<img src=\"/images/apps" app components` returns nothing.
- `npx tsc --noEmit` and `npx next lint` clean; `npx next build` succeeds (build only — do not start it).
- No file under scripts/ or a stray .env copied into the worktree.

Commit: `CR-WEB-042: optimise heavy app/blog images, next/image on app pages, modern formats`. Do not push.
