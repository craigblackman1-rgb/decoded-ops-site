# Project: Decoded Ops Marketing Site + Client Portal

## What this app is

`decodedops.co.uk` — the public marketing site and authenticated client portal for
Decoded Ops (Craig Blackman's operations and technology consultancy for the UK
decorated-goods sector). Two modes, same codebase:

1. **Marketing site** — homepage, about, blog, case studies, service pages
   (Clarity/Deliver/Transform/Retained), pricing, free tools/calculators,
   problem pages, sector pages, location landing pages.
2. **Client portal** (`/clients/*`) — authenticated dashboard, document library
   with e-signature, project plan viewer with file uploads, and public proposal
   pages for named clients. Admin area under `/admin/*` (requires `admin` role).

## Stack & Infrastructure

**Deployment:** Coolify (self-hosted, Docker). NOT Vercel. Port 3000 (production),
8765 (dev — `npm run dev` starts on `-p 8765`). `next.config.ts` sets
`output: 'standalone'` for Docker. Multi-stage Dockerfile at repo root.

**Framework:** Next.js 16.2.2, React 19.2.4, TailwindCSS 4, TypeScript.

**Fonts:** Outfit (headings) + DM Sans (body), loaded via next/font/google with
CSS variables `--font-outfit` and `--font-dm-sans`. No JetBrains Mono.
Website pins explicit weights (400/500/600/700/800 for Outfit, 400/500/700 for DM Sans).

**Production URL:** https://decodedops.co.uk

## Deployments

- **Production** — branch `main`.
- **Staging** — branch `staging`, Coolify app uuid `ax1yi6hyl54gfj8w8adhq55d`.
- Marketing copy work lands on `staging` first and is promoted to `main` only with Craig's sign-off.

## Build / Dev commands

```
npm run dev      # Next.js dev server on port 8765
npm run build    # Production build (standalone output)
npm run start    # Production server
npm run lint     # ESLint
```

## Design system

The canonical design system lives at:
`D:\apps\design-systems\ds-decoded-ops-fractional-cto-ops-design-system\DESIGN.md`

Six brand colours only, never a seventh: Prussian Blue `#023047`, Cerulean
`#219EBC`, Sky Blue `#8ECAE6`, Amber `#FFB703`, Orange `#FB8500`, Off-White
`#F8F9FA`. CSS custom properties (`--do-*`) defined in `app/globals.css:15-62`,
wired into Tailwind's `@theme` block at `globals.css:65-76`. The marketing pages
use Tailwind utilities directly; client-portal pages use inline style objects
(same brand hex values — not reusable components from the hub).

## Key Directories

```
app/                  # Next.js App Router — all pages and API routes
  page.tsx            # Homepage (410 lines — inline data, hardcoded sections)
  layout.tsx          # Root layout — fonts, metadata, GTAG/analytics, SessionProvider, AppShell
  globals.css         # Design tokens, Tailwind theme bridge, base styles, prose classes
  blog/               # Blog index + [slug] posts (fetches from hub, falls back to local JSON)
  clients/            # Client portal (dashboard, documents, project, [clientId]/proposals, login)
  api/                # API routes (auth login, contact form, client doc signing proxy)
  admin/              # Admin area skeleton (layout only — auth-protected by middleware)
  tools/              # Free tool calculators (6 tools)
  case-studies/       # Named client case studies (TackleBag, Hanicks, etc.)
  sectors/            # Sector landing pages (garment decoration, print, workwear, etc.)
  problems/           # Problem pages (ERP failure, systems don't talk, etc.)
  locations/          # Location SEO hub pages
  sitemap.ts          # Dynamic sitemap (static pages + blog + problems + sectors + locations)
components/           # Shared React components (Header, Footer, AppShell, SessionProvider, 
                      #   BlogList, HeroVisual, JsonLd, BreadcrumbSchema, PrintDownloadButton, etc.)
lib/                  # Shared utilities
  supabase.ts         # Plain `pg` Pool (see Data Layer below)
  email.ts            # Email sender — Resend first, SMTP fallback, graceful dry-run
  rate-limit.ts       # Upstash Redis rate limiters (login: 5/15min, contact: 3/1hr)
  constants.ts        # Microsoft BookWithMe booking URL
data/                 # Static data
  blog-index.json     # Blog post metadata — build fallback; hub API is authoritative
  locations.ts        # Location page data
  problem-routing.ts  # Problem page routing data
  sector-routing.ts   # Sector page routing data
supabase/             # SQL schema files (NOT Supabase — plain Postgres table definitions)
scripts/              # Utility scripts (hash-password, create-client-accounts, content-audit, etc.)
.context/             # Project notes (backlog, e-signature brief, loop-status log)
docs/                 # content-audit.md — full site content audit (2131 lines)
```

## Data Layer — `lib/supabase.ts` (plain Postgres, NOT Supabase)

Despite the filename, `lib/supabase.ts` is a plain `pg` Pool. It exports `getDb()`
and types `DbUser` / `AuthAuditEvent`. This is the same pattern as the hub's
`supabase-pg.ts` shim. The tables (`client_users`, `auth_audit_log`) were designed
with Supabase-compatible DDL but the runtime connection is direct Postgres.

- Connection string: `DATABASE_URL` env var
- SSL: `rejectUnauthorized: false`
- Used by `auth.ts` for credential verification, audit logging, lockout tracking
- Does NOT use Supabase JS SDK — there is no `@supabase/ssr` in this repo

Required env vars:
```
DATABASE_URL=             # postgresql://user:password@host:5432/dbname
NEXTAUTH_SECRET=           # generate with: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
NEXTAUTH_URL=https://decodedops.co.uk
HUB_API_URL=              # http://localhost:3001 or hub.decodedops.co.uk — source for blog content and client docs
SMTP_HOST/PORT/USER/PASS/FROM=   # Mailgun SMTP for contact form
CONTACT_EMAIL=craig@decodedops.co.uk
UPSTASH_REDIS_REST_URL/TOKEN=    # Optional — rate limiting degrades gracefully if absent
```

## Auth — NextAuth v5 with Credentials

**Split config pattern** (same as hub):

- `auth.config.ts` — Edge-safe (JWT strategy, 8hr maxAge, trustHost, no DB imports).
  Middleware imports only this file.
- `auth.ts` — Full config with Credentials provider. Server-side only (imports `pg`
  via `lib/supabase.ts`). Features: bcrypt password verification, 5-attempt lockout
  with 30-min cooldown, audit logging to `auth_audit_log` table.

**Route protection** (`middleware.ts`):
- `/clients/*` → auth required (except login page and public proposal slugs)
- `/admin/*` → auth + `role === 'admin'`
- `/client-docs/*` → redirects to `/clients/login`
- Public proposal slugs (no auth): `/clients/tacklebag`, `/clients/tacklebag-v2`,
  `/clients/cobra-workwear`, `/clients/hanicks`, `/clients/cwear`, `/clients/scotshirts`

**Login flow**: `app/api/auth/login/route.ts` — POST endpoint called by the client
login form. Validates origin, rate-limits (Upstash Redis, degrades gracefully), calls
`signIn('credentials')`.

## Client Portal Architecture

**Document library** — documents are fetched server-side from the hub at
`${HUB_API_URL}/api/public/client-docs`. The website does not own document storage;
it proxies from the hub (which owns `client_documents`). Documents are rendered in
an iframe via `srcDoc`.

**E-signature** (Lane C — built 2026-07-24):
- `SignPanel` component on `/clients/documents/view/[id]/page.tsx` — client-side
  (name, date, signature, "I agree" checkbox)
- Calls website-side API proxy: `app/api/clients/documents/[id]/sign/route.ts`
- The proxy re-checks the client's session server-side then forwards to the hub's
  `POST /api/public/client-docs/{docNumber}/sign`
- Only renders for documents where the hub returned `signable: true`
- Signed documents show a read-only "Signed by X on Y" notice instead of the panel

**Project view** (`/clients/project`) — fetches phases/milestones/tasks from hub's
`/api/public/client-project` and file uploads from `/api/public/client-uploads`.
Client component (`ProjectView.tsx`) renders sections with task completion states
and a file upload area.

**Proposal pages** (`/clients/[clientId]`) — hardcoded proposal data in
`app/clients/[clientId]/data/*.ts`. These are the old pre-hub proposals, publicly
accessible. They have their own full-page dark-themed layout with custom sections
(Challenge, Journey, Roadmap, Pricing, Acceptance etc.).

## Content & Blog

Blog posts have a **dual-source pattern**:
1. Primary: fetch from `${HUB_API_URL}/api/content/index` (the hub is authoritative)
2. Fallback: `data/blog-index.json` — local JSON file used at build time when the
   hub is unreachable

Individual post pages (`app/blog/[slug]/page.tsx`) follow the same pattern: fetch
HTML body from hub, fall back to local fields in blog-index.json.

## Real Gotchas

- **`lib/supabase.ts` is NOT Supabase.** It's a plain `pg` Pool. Grepping for
  "supabase" in this repo only turns up the filename and SQL file references.
- **The README is stale `create-next-app` boilerplate.** Ignore it.
- **Two styling approaches coexist.** Marketing pages use Tailwind utilities with
  brand hex values. Client portal pages use inline `style={{}}` objects — same
  colours, different delivery. Do not try to unify these unless asked.
- **`.env.example` line 19:** `lib/supabase.ts` is named for the client-portal
  tables it reads but is a plain `pg` Pool, same pattern as the hub's
  `supabase-pg.ts` shim.
- **Content honesty rule** (from `.context/backlog.md`): Never invent numbers or
  client details. All stats on case studies and service pages must trace to real
  client results or published, cited industry benchmarks. The `/about` page's
  "ERP ROI Benchmarks" section is flagged for citation verification.
- **Blog prose classes** are in `app/globals.css:167-272` — `.do-blog-prose` and
  children. Blog content from the hub is raw HTML rendered into `<div
  className="do-blog-prose" dangerouslySetInnerHTML={{...}} />`.
- **Schematics** (`sch-draw`, `sch-fade`, `sch-halo` CSS animations at
  `globals.css:149-164`) are used for the blueprint-style illustrations on problem
  and service pages.
- **The AppShell component** (`components/AppShell.tsx`) hides Header/Footer on
  `/clients/*` routes — the portal has its own chrome.
- **`www.` redirect** is handled in `next.config.ts` via a host-based redirect,
  not middleware.
- **Rate limiting is optional.** Both `loginRatelimit()` and `contactRatelimit()`
  return `null` if Upstash env vars are unset — the app degrades gracefully.
- **The contact form** has a honeypot field (`_honey`) that silently succeeds
  without sending an email — simple bot protection.
- **No `node_modules` installed in this worktree.** A fresh checkout cannot run
  `tsc` or `next build` until dependencies are installed.
