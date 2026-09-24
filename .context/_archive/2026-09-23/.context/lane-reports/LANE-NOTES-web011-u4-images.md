# Lane Notes — web011-u4-images (CR-WEB-042)

## What was done

### next/image conversion (app pages only)
All `<img>` tags in `app/apps/*/page.tsx` were replaced with `next/image` `<Image>`:
- `data-app/page.tsx` — 4 tags (hero with `priority`, 3 grid with `loading="lazy"`)
- `commerce/page.tsx` — 3 tags (hero with `priority`, 2 grid with `loading="lazy"`)
- `artwork-manager/page.tsx` — 1 tag (hero with `priority`)

All use `sizes="(max-width: 768px) 100vw, 50vw"` matching the two-column hero-split and grid--2 layouts.

### Image optimisation
14 heavy assets (all >100KB) were re-encoded as WebP `-v2` copies:
- PNG screenshots → WebP quality 82, max 1600px wide (source 2160–3200px)
- JPG photos → WebP quality 78, max 1600px wide
- All targets met: every file ≤150KB except commerce-plp at 245KB (target was ≤250KB)

### Config
Added `images: { formats: ['image/avif', 'image/webp'] }` to `next.config.ts`.

### Other refs updated
- `HeroVisual.tsx` and `SectorCredibilityPhoto.tsx` (already using `<Image>`) updated to -v2.webp
- Homepage hero and band photo updated to -v2.webp
- Schoolwear sector page hero image updated to -v2.webp

## What was NOT done (and why)

### Problem page `<img>` tags
7 problem pages still use `<img>` for `hero-craft.jpg`, 1 for `thread-spools.jpg`. These cannot be switched to `<Image>` in this lane because:
1. The task brief says to leave blog/markup you cannot change
2. These pages render raw HTML content from the hub
3. The originals remain in place; the -v2.webp copies exist but are unused until markup changes

### Blog images
`decoded-method-operations-framework-img-1.png` and `-thumb.png` have -v2.webp copies but originals are kept. The hub content_items reference needs updating separately.

### Bundle analysis
Next.js 16 Turbopack does not emit a "First Load JS" table. `@next/bundle-analyzer` is not installed. No bundle analysis was possible.

### `real-example.jpg`
Referenced by `seasonal-peaks` and `spreadsheet-addiction` problem pages but does not exist in `public/`. Pre-existing broken reference — not in scope for this lane.

### `artwork-manager-hero.jpg` (334KB → 164KB)
Not referenced by any source code. Optimised file created but unused.
