# CR-WEB-057 — structural instructions for the build lane

Do this AFTER copy-spec.json has been applied (the copy edits target the current file paths on
purpose, so they apply cleanly before the files move). Repo: decoded-ops-website, branch
`web-content-056` (or wherever this lands). Do not touch `data/problem-routing.ts` or
`app/problems/wrong-erp-software/page.tsx` — a separate lane owns 3 string changes there
concurrently; this spec was written to avoid targeting strings in those two files.

## 1. Route moves

```
git mv app/apps/data-app app/apps/works
git mv app/apps/artwork-manager app/apps/proof
```

Inside the moved files, update the route-specific fields that copy-spec.json deliberately left
alone (it only changed title/description/body text, not paths, since paths are a structural
concern):

- `app/apps/works/page.tsx`
  - `alternates: { canonical: '/apps/data-app' }` → `'/apps/works'`
  - `url: 'https://decodedops.co.uk/apps/data-app'` (in `openGraph`) → `'https://decodedops.co.uk/apps/works'`
- `app/apps/proof/page.tsx`
  - `alternates: { canonical: '/apps/artwork-manager' }` → `'/apps/proof'`
  - `url: 'https://decodedops.co.uk/apps/artwork-manager'` (in `openGraph`) → `'https://decodedops.co.uk/apps/proof'`

`app/apps/commerce/page.tsx` keeps its route (`/apps/commerce`) — no move.

## 2. Every internal reference to the old routes/slugs (file:line, from git grep)

Update every `href`, `canonical`, `openGraph.url`, sitemap entry and data reference below from
`/apps/data-app` → `/apps/works` and `/apps/artwork-manager` → `/apps/proof`. (Lines already
covered by copy-spec.json's own file/route edits above are not repeated here.)

**Component nav (labels already renamed by copy-spec.json — just update the `href`):**
- `components/Footer.tsx:27` — `{ label: 'Works', href: '/apps/data-app' }` → `href: '/apps/works'`
- `components/Footer.tsx:28` — `{ label: 'Proof', href: '/apps/artwork-manager' }` → `href: '/apps/proof'`
- `components/Header.tsx:60` — `{ label: 'Works', sub: '...', href: '/apps/data-app' }` → `href: '/apps/works'`
- `components/Header.tsx:61` — `{ label: 'Proof', sub: '...', href: '/apps/artwork-manager' }` → `href: '/apps/proof'`

**Cross-links from other pages (hrefs only, copy-spec.json already fixed the link text/labels):**
- `app/apps/page.tsx:97` — `<Link className="log-row" href="/apps/data-app">` → `/apps/works`
- `app/apps/page.tsx:107` — `<Link className="log-row" href="/apps/artwork-manager">` → `/apps/proof`
- `app/case-studies/case-study-01/page.tsx:306` — `<Link href="/apps/data-app" ...>` → `/apps/works`
- `app/case-studies/case-study-02/page.tsx:237` — `<Link href="/apps/data-app" ...>` → `/apps/works`
- `app/pricing/page.tsx:253` — `<Link className="card" href="/apps/data-app">` → `/apps/works`
- `app/pricing/page.tsx:257` — `<Link className="card" href="/apps/artwork-manager">` → `/apps/proof`
- `app/problems/data-scattered/page.tsx:289` — `href="/apps/data-app"` → `/apps/works`
- `app/problems/inventory-blind/page.tsx:248` — `href="/apps/data-app"` → `/apps/works`
- `app/problems/legacy-system/page.tsx:319` — `href="/apps/data-app"` → `/apps/works`
- `app/problems/seasonal-peaks/page.tsx:273` — `href="/apps/data-app"` → `/apps/works`

**Sitemap:**
- `app/sitemap.ts:63` — `{ url: \`${BASE_URL}/apps/data-app\`, ... }` → `${BASE_URL}/apps/works`
- `app/sitemap.ts:64` — `{ url: \`${BASE_URL}/apps/artwork-manager\`, ... }` → `${BASE_URL}/apps/proof`

**next.config.ts existing redirect that points at the old route (needs its destination updated,
not removed — see §3 for why):**
- `next.config.ts:18` — `{ source: '/decoded-data-app', destination: '/apps/data-app', permanent: true }`
  → destination becomes `/apps/works`

No other `.ts`/`.tsx` file references either slug (checked via `git grep -n "/apps/data-app\|/apps/artwork-manager"` across the repo, excluding `.next/` build output and `.context/lane-reports/**` and `.context/lane-briefs/**`, which are historical JSON records, not live code, and don't need touching).

`data/route-slugs.json` does not list the apps routes (that file only covers `problems`,
`sectors`, `tools` dynamic slugs) — no change needed there.

## 3. Permanent redirects to add in `next.config.ts` `redirects()`

Add these two entries to the existing array (matching the file's own style — see the block
already there for `/decoded-data-app`, `/apps/crm`, etc. around line 8–29):

```js
{ source: '/apps/data-app', destination: '/apps/works', permanent: true },
{ source: '/apps/artwork-manager', destination: '/apps/proof', permanent: true },
```

Place them near the other `/apps/*` redirect (`/apps/crm` → `/apps`, line 27) so all the apps
redirects stay grouped. Also update the *destination* of the existing `/decoded-data-app` redirect
(line 18) from `/apps/data-app` to `/apps/works` — otherwise it would redirect once to a URL that
itself immediately redirects again, which works but adds a needless hop and looks wrong in a
redirect audit.

Do **not** remove or renumber any other existing redirect in that array.

## 4. Image filenames and CSS class names — leave alone

Checked `public/` and CSS for anything carrying the old names:

- `public/images/apps/data-app-hero.png`, `data-app-hero-v2.webp`, `data-app-catalogue.png`,
  `data-app-catalogue-v2.webp`, `data-app-dashboard.png`, `data-app-dashboard-v2.webp`,
  `data-app-supplier-import.png`, `data-app-supplier-import-v2.webp`,
  `public/images/apps/artwork-manager-hero.jpg`, `artwork-manager-hero-v2.webp`,
  `public/assets/screens/data-app-hero.png`, `data-app-hero-v2.webp`,
  `public/newsletter/nl-001/data-app-hanicks.png`, `data-app-hanicks-v2.png`.
  **None of these are referenced by any live `.tsx`/`.ts` file** (confirmed by grep) — the pages
  now in production use the D17 photo set (`/images/d17/apps-cases/...`) instead. These are
  orphaned assets from an earlier design pass. Leave them as-is; renaming unused files is pure
  risk for zero benefit, and deleting them is out of scope for a copy CR.
- `app/design-system/marketing-pages-extra.css:198` has a comment referencing
  `apps-data-app.html` (an old design-system mockup filename, not a live class or route). Leave
  it — it's a comment, not functional, and touching design-system mockup files is out of scope.
- No CSS class names anywhere are derived from "data-app" or "artwork-manager" — the D17 figure
  classes are numbered (`a941`, `a944`, `a946`, etc.), not name-derived, so there is nothing to
  rename in CSS.

## 5. Historical JSON records — leave alone

`.context/lane-reports/*.json` and `.context/lane-briefs/cr-web-056/copy-spec.json` reference the
old paths and filenames. These are frozen historical records of past lane runs (per this repo's
own convention that `.context/` records are append-only history, not live config) — do not edit
them as part of this CR.
