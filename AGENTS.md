# Decoded Ops Marketing Site + Client Portal (`decodedops.co.uk`)

## What this is + status

Public marketing site and authenticated client portal for Decoded Ops (Craig Blackman's
operations/technology consultancy for the UK decorated-goods sector). Two modes, one
codebase:

1. **Marketing site** — homepage, about, blog, case studies, service pages (Clarity Audit /
   Deliver / Transform / Retained), pricing, free tool calculators, problem pages, sector
   pages, location landing pages.
2. **Client portal** (`/clients/*`) — authenticated dashboard, document library with
   e-signature and questionnaire answers, project plan viewer with file uploads, and public
   proposal pages for named clients. Admin area under `/admin/*` (requires `admin` role).

**Status:** live, fully built, in continuous small-batch iteration (copy, pricing, SEO,
artwork) via OpenCode lanes dispatched from Work Orders. Not a build-from-scratch project —
treat every existing page as intentional unless a CR says otherwise.

## Read first

1. `CLAUDE.md` in this repo (stack, pricing policy, key directories, auth pattern, real
   gotchas — the fuller version of this file's facts).
2. `.context/loop-status.md` — the running log of what the dispatcher/lanes have done most
   recently. Start here to see what's in flight.
3. `.context/change-requests.md` — **frozen read view**, historical only. Current CRs live
   in the hub DB (`change_requests`, project `decoded-ops-website`, prefix `WEB`); raise new
   ones with `wo cr new decoded-ops-website --title "..."`, never by editing this file.
4. Global operating rules: `~/.claude/CLAUDE.md` and the SOPs under
   `D:\apps\infrastructure\` (Work Orders, gates, model routing, worktree isolation). This
   file does not restate them.

## Folder map (verified against `origin/HEAD`)

```
app/                    Next.js App Router — pages + API routes
  page.tsx              Homepage
  layout.tsx            Root layout — fonts, metadata, SessionProvider, AppShell
  globals.css           Design tokens, Tailwind theme bridge, base styles
  admin/                Admin area (auth-protected by middleware, role=admin)
  api/                  API routes (auth login, contact form, client doc sign/questionnaire proxy)
  blog/                 Blog index + [slug] posts (hub API, falls back to data/blog-index.json)
  case-studies/         Named client case studies (Hanicks, TackleBag, Cobra Workwear, Eternal Fitness)
  clarity/ deliver/ transform/ retained/   Core service pages
  clients/              Client portal (dashboard, documents, project, [clientId]/proposals, login)
  locations/            Location SEO hub pages (ProfessionalService JSON-LD)
  problems/             Problem pages (rendered by components/ProblemPageDS.tsx)
  resources/            Free playbooks/guides (SOP template, ERP selection, artwork approval, etc.)
  sectors/              Sector landing pages
  small-business/       Small-business pricing/services page
  tools/                Free tool calculators (6 tools)
  how-i-build/, process-quality-system/, design-system/, apps/   Additional marketing pages
  sitemap.ts, robots.ts, opengraph-image.tsx
components/             Shared React components (Header, Footer, AppShell, VideoEmbed,
                        JsonLd, BreadcrumbSchema, calculators/, graphics/, schematics/)
lib/                    supabase.ts (plain pg Pool), auth via ../auth.ts, email.ts (Resend/SMTP),
                        rate-limit.ts (Upstash), hub-fetch.ts, constants.ts
data/                   blog-index.json, pricing-v11.json, locations.ts, problem-routing.ts,
                        problem-videos.ts, sector-routing.ts, route-slugs.json
supabase/               SQL schema for client-portal tables (historic folder name; paste-by-hand only)
scripts/                content-audit.mjs, sync-blog-index.mjs, hash-password.mjs,
                        generate-route-slugs.mjs, generate-playbook-pdfs.sh, reset-portal-password.mjs
docs/                   content-audit.md (stale generated dump — see CHANGES.md)
.context/               Work-in-progress notes: backlog, lane briefs/reports, loop-status,
                        change-requests (frozen), price-audit, worktree-salvage (recovery scratch)
```

## Key commands

```bash
npm run dev      # Next.js dev server, port 8765 (not 3000)
npm run build    # Production build (standalone output for Docker)
npm run start    # Production server
npm run lint     # ESLint
node .context/price-audit.mjs --check   # run before any push that touches copy — see below
```

Pre-push: `npx tsc --noEmit` is necessary but not sufficient. Run `npm run build` too.

## Project-specific rules / gotchas

- **Deployment is Coolify (Docker), not Vercel.** Production = branch `main`. Staging =
  branch `staging` (behind Cloudflare Access), auto-deploys on push. Marketing copy lands on
  `staging` first, promoted to `main` only with Craig's sign-off.
- **Pricing policy is enforced by a script, not convention.** Decoded Ops prices appear on
  `/pricing` only; app-build prices appear nowhere. `£1,500` (Clarity Audit anchor) and `£750`
  (App Scoping Session) are the two standing exceptions and may appear anywhere. Run
  `node .context/price-audit.mjs --check` before any copy-touching push — it exits non-zero
  on a disallowed price. All rendered pricing figures come from `data/pricing-v11.json`
  (CR-WEB-036) — never retype a number.
- **decoded-marketing mockups are deliberately stale on pricing.** If porting a page from a
  mockup, take the layout, ignore its prices.
- **Design canon shifted mid-project.** Early pages were built from `decoded-marketing` Open
  Design plates; since ~2026-09-01 the `staging` branch's own existing page patterns are
  canonical ("we do not want to destroy the new site design" — Craig). When extending a
  page, match staging's existing pattern for that page type, not an old mockup.
- **Two styling approaches coexist.** Marketing pages use Tailwind utilities with brand hex
  values (via `--do-*` CSS vars in `app/globals.css`, wired into Tailwind's `@theme`).
  Client-portal pages use inline `style={{}}` objects with the same colours. Don't unify
  unless asked.
- **Content honesty rule.** Never invent numbers or client details; stats must trace to real
  client results or cited external benchmarks (see `.context/backlog.md`).
- **Blog and client-portal documents are hub-fed, not owned here.** Blog posts:
  `HUB_API_URL/api/content/index` + `/api/content/detail`, falling back to
  `data/blog-index.json` at build time. Client documents: proxied from the hub's
  `client_documents` via `/api/public/client-docs*`; the website never stores them.
- **`README.md` is stale `create-next-app` boilerplate — ignore it.**
- **No `node_modules` in a fresh worktree checkout** — install before running `tsc`/`build`.

## Where records live

- **Change requests:** hub DB `change_requests` (project `decoded-ops-website`, prefix
  `WEB`) via `wo cr new`. `.context/change-requests.md` is a frozen historical read view —
  never add rows there.
- **Features/functions catalogue:** re-derive from code at review time; don't hand-maintain
  a snapshot doc (the last one, `DO-FF-009`, drifted from the code within weeks).
- **Work Orders / lane briefs / lane reports:** `.context/lane-briefs/`,
  `.context/lane-reports/`, `.context/lanes/*.log` — these are working scratch for
  in-flight or recently-finished units. Once a unit is merged, its brief/report has served
  its purpose; treat new ones the same way rather than letting them accumulate at repo root.
- **Global WO/CR/bug/ticket/idea conventions:** `~/.claude/CLAUDE.md` and
  `D:\apps\infrastructure\` SOPs — not restated here.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
