# Lane brief: web-locations-merge (CR-WEB-067, WO-INF-070 u8)

Merge the 58 town location pages into 3 pages. Next.js App Router site. Worktree: this directory, branch `lane/web-locations-merge`. Commit your work on this branch. Do NOT push, do NOT run a dev server, do NOT touch any database, do NOT read .env files.

## Current state
- `app/locations/fractional-cto/page.tsx` (hub) + `app/locations/fractional-cto/[location]/page.tsx` (29 towns)
- `app/locations/tech-audit/page.tsx` (hub) + `app/locations/tech-audit/[location]/page.tsx` (29 towns)
- `data/locations.ts` holds the 29 towns (West Sussex, East Sussex, Surrey, Greater London, Greater Manchester)
- `components/LocationPage.tsx` renders the town pages; styling in `app/d17-locations.css`
- `app/sitemap.ts` lines ~126-150 list the hubs and every town page
- `components/Footer.tsx` lines 74-75 link "Fractional CTO near you" and "Technology audit near you"
- Redirects live in `next.config.ts` `redirects()`

## Target: exactly 3 location pages
1. `/locations/sussex-surrey` (NEW) — "Operations consultant in Sussex & Surrey". Covers every West Sussex, East Sussex and Surrey town in `data/locations.ts`. Reuse `LocationPage` and the d17 styling, the same layout as the existing town pages; do not invent a new design. Include a "Towns I cover" list naming every Sussex and Surrey town (plain text list, no links). Craig is based in Worthing, West Sussex; say so once.
2. `/locations/manchester` (NEW) — "Operations consultant in Manchester". Same template. Reuse the Manchester-specific copy from the existing manchester town data where present.
3. `/locations/tech-audit` (EXISTING hub, rewrite) — the national page: "Independent technology audit, anywhere in the UK". Remove the town grid/links from it.

Metadata (set exactly):
- sussex-surrey: title `Operations Consultant in Sussex & Surrey | Decoded Ops`; description `Operations and technology consultant for print, embroidery and workwear businesses across Sussex and Surrey. Based in Worthing.`; canonical `/locations/sussex-surrey`
- manchester: title `Operations Consultant in Manchester | Decoded Ops`; description `Operations and technology consultant for print, embroidery and workwear businesses in Manchester and the North West.`; canonical `/locations/manchester`
- tech-audit: title `Independent Technology Audit, UK-wide | Decoded Ops`; description `An independent technology audit for print, embroidery and workwear businesses anywhere in the UK. No vendor agenda.`; canonical `/locations/tech-audit`

Copy rules (British English, first person "I", no em dashes, no "it isn't X, it's Y", no three-item lists of short phrases, never the words leverage/seamless/journey/unlock/streamline/robust). Keep existing body copy where it fits; do not write new marketing claims or numbers.

## Delete
- `app/locations/fractional-cto/[location]/` and `app/locations/tech-audit/[location]/` route folders
- `app/locations/fractional-cto/page.tsx` (the hub; it redirects now)
Keep `data/locations.ts` (the new pages use it for the town list); remove anything that becomes unused.

## Redirects (permanent: true) in next.config.ts
- `/locations/fractional-cto` -> `/locations/sussex-surrey`
- For every town slug in West Sussex, East Sussex, Surrey: `/locations/fractional-cto/<slug>` and `/locations/tech-audit/<slug>` -> `/locations/sussex-surrey`
- `/locations/fractional-cto/manchester` and `/locations/tech-audit/manchester` -> `/locations/manchester`
- `/locations/fractional-cto/london` and `/locations/tech-audit/london` -> `/locations/tech-audit`
Generate these from `data/locations.ts` by county rather than hand-typing 58 lines, so none is missed.

## Also update
- `app/sitemap.ts`: list exactly the 3 pages; remove the per-town entries and the fractional-cto hub.
- `components/Footer.tsx`: replace the two links with "Sussex & Surrey" -> `/locations/sussex-surrey`, "Manchester" -> `/locations/manchester`, "Technology audit, UK-wide" -> `/locations/tech-audit`.
- grep the whole repo (`app`, `components`, `lib`, `data`) for `/locations/fractional-cto` and `/locations/tech-audit/` and fix every remaining internal link to point at one of the 3 pages.
- Any breadcrumb / JSON-LD schema on location pages must use the new URLs.

## Verify before you commit (run these yourself)
1. `npx tsc --noEmit` passes.
2. `npm run build` passes (Turbopack prod build). Run it plainly, not piped, and read the exit status.
3. Write `scripts/check-location-redirects.mjs` that imports the redirects from next.config.ts (or re-derives them the same way) and asserts: 58 town URLs + the fractional-cto hub each map to one of the 3 new URLs, and no destination is a deleted route. Run it; it must print the counts and exit 0.
4. `grep -rn "locations/fractional-cto" app components lib data` returns nothing except next.config.ts redirect sources.

Commit with a conventional message referencing CR-WEB-067. Then write a short LANE-RESULT note in `.context/lane-reports/LANE-RESULT-web-locations-merge.md`: files changed, the 3 URLs, redirect count, and the exact output of steps 1-4. Do not claim anything you did not run.
