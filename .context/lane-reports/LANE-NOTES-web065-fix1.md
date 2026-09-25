# Lane Notes: web065-fix1

## What was done

Restored metadata fields dropped by CR-WEB-058 (commit a4d7835) and set correct metadata for the two calculator pages in the sitemap.

### Tool layout files (restored)
- `app/tools/ops-health-score/layout.tsx` — added back `alternates: { canonical: '/tools/ops-health-score' }`, `images: OG_IMAGE` in openGraph, `images: [OG_IMAGE_PATH]` in twitter
- `app/tools/should-i-replace-erp/layout.tsx` — same pattern, canonical `/tools/should-i-replace-erp`

Both imported `OG_IMAGE` and `OG_IMAGE_PATH` from `@/lib/seo`.

### Calculator page metadata (set)
- `app/resources/capacity-planner/page.tsx` — title changed to `{ absolute: 'Capacity Planning Calculator for Print | Decoded Ops' }`, new description, added OG_IMAGE to openGraph and twitter
- `app/resources/seasonal-capacity/page.tsx` — title changed to `{ absolute: 'Seasonal Capacity Calculator for Print | Decoded Ops' }`, new description, added OG_IMAGE to openGraph and twitter

Both used `{ absolute: ... }` title to prevent template suffix.

### Grep audit
Checked all 66 app/**/layout.tsx and page.tsx files touched in a4d7835. None lost `alternates`, `openGraph.images`, or `openGraph.url` compared with the parent commit. The only regressions were the two tool layout files already fixed above.

## Verification
- `npx tsc --noEmit` — clean
- `npm run build` — passed (173 static pages generated)
