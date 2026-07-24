# Brief: e-signature Lane C (client portal UI)

Full Work Order: `D:\apps\infrastructure\.context\workorder-client-document-esignature-2026-07-24.md` — read it first.

## Context

The client portal document viewer is `app/clients/documents/view/[id]/page.tsx`. It's a server component: checks `auth()` for a logged-in client session, fetches `${HUB_API_URL}/api/public/client-docs/${docNumber}` and renders `html_content` in an iframe. The list view is `app/clients/documents/page.tsx`.

Lane A (running in parallel, `decoded-ops-hub` repo) is adding `status`/`client_signature`/`client_signed_date` fields to the hub's GET response for that same endpoint, plus a new `POST .../sign` endpoint accepting `{name, signature, date}`. You are building against that contract — it may not exist live yet, so build defensively (optional-chain the new fields, assume they may be `undefined` until Lane A ships) and note in your final report that this needs re-verification once Lane A's endpoint is confirmed live.

## What to build

1. **Sign panel** on the document viewer page. Since the viewer is currently a server component with no interactivity, add a client component (e.g. `app/clients/documents/view/[id]/SignPanel.tsx`, `'use client'`) rendered below or over the iframe. Pattern to follow closely — `eternal-fitness-website`'s `app/documents/[id]/sign/DocumentSignClient.tsx` (read it for the actual UX: name input, date, "I agree" checkbox, submit button, success state).
   - Only render the panel if the doc's `status` is not `signed` (server component passes `status` as a prop).
   - On submit, the client component should **not** call the hub directly — call a new website-side API route (e.g. `app/api/clients/documents/[id]/sign/route.ts`) that re-checks the client's session server-side (same `auth()` check as the viewer page) and then proxies the POST to the hub's `${HUB_API_URL}/api/public/client-docs/${docNumber}/sign` endpoint. This keeps the session check on the website side, matching the existing pattern where the hub's public API is unauthenticated but the website gates access.
   - Keep styling consistent with the existing viewer page's inline style approach (brand tokens: `#023047` Prussian Blue, `#219EBC` Cerulean, `#F8F9FA` off-white — see the existing page for the exact style object pattern already used there).

2. **Read-only "signed" notice.** If `doc.status === 'signed'`, show a plain confirmation notice instead of the sign panel: "Signed by {client_signature} on {client_signed_date}" — no panel, no way to re-submit.

3. **Status badges on the list view** (`app/clients/documents/page.tsx`) — read it first to see the existing table/list rendering, add an "Outstanding" / "Signed" badge per row using whatever status field the list API already returns (check if the list view's data source needs the same field addition — if the list is fetched from a different hub endpoint than the single-doc GET, flag that as a gap for Lane A to also cover, don't silently skip it).

## Hard constraints
- Don't touch `decoded-ops-hub` — separate repo/lane, Lane A owns it.
- Don't touch auth/login flow itself (`app/clients/login`, `auth.ts`, `auth.config.ts`) — session handling is out of scope, just reuse the existing `auth()` check.
- No deploy, no `git push`, no `pnpm install`/`npm install`.
- **This checkout currently has no `node_modules` installed and installing is gated** — you likely cannot run a full `next build` or even `tsc` here. Write careful, pattern-matched code by reading the existing files closely instead of relying on a compiler to catch mistakes. Say clearly in your final report that type-checking is unverified pending an authorised install.

## When done
Commit locally (don't push). Append one line per unit to `.context/loop-status.md` in this worktree: `<ISO timestamp> | Lane C | <file> | <outcome>`. Report clearly: what's built, what's still unverified (tsc/build, and live wiring against Lane A's real endpoint), and any gap found in the list-view's data source for status.
