# OpenCode Instructions — Client Portal & Document Workflow

**Project root (website):** `D:\Claude\Projects\Decoded Ops\Website\`  
**Hub project root:** `D:\Claude\Projects\Decoded Ops\decoded-ops-hub\`  
**Date:** 2 June 2026  
**Prepared by:** Claude Code (Claude Sonnet 4.6)

---

## Overview

This is a two-phase build. Phase 1 is urgent (ScotShirts client needs access today). Phase 2 is the architectural target — hub-driven document management.

**Do Phase 1 first. Phase 2 is separate work and should not block Phase 1.**

---

## Background: What exists today

### Website (`decodedops.co.uk`)
- Next.js app with NextAuth v5 credentials login
- `/clients/*` routes are protected by middleware — login required
- Client users stored in `CLIENT_USERS` env var as JSON array: `{ email, passwordHash, name, clientId }`
- Proposals at `/clients/[clientId]` — React components per client
- Each proposal has an **AccessGate** component — a modal that asks for an access code before showing the proposal. **This is now redundant** (see below).
- Documents listed in `data/client-documents.ts`, publish state in `data/published-docs.json`, static HTML files in `public/client-docs/[clientId]/`
- Admin at `/admin/documents` — toggle publish state per doc

### Hub (`decoded-ops-hub`)
- Next.js app, Supabase backend, internal-only
- CRM with companies, contacts, deals, quotes, invoices, contracts tables
- Templates at `public/templates/` (4 HTML files)
- No public-facing API today

---

## Phase 1 — Urgent ScotShirts work

### Task 1a: Remove the AccessGate (second password layer)

**Why:** The AccessGate was built before login existed. Now middleware enforces login before any `/clients/*` route is reachable. The access code gate is redundant — authenticated users with a matching `clientId` auto-unlock it anyway.

**Action 1 — Edit `app/clients/[clientId]/page.tsx`:**

Read the file first. It renders proposals using an `<AccessGate>` wrapper. Remove the AccessGate wrapper so proposals render directly. The component uses `useSession()` from next-auth/react to get the session.

The pattern to change is roughly:
```tsx
// BEFORE — wrapped in AccessGate
return (
  <AccessGate proposal={proposalData} clientId={clientId}>
    <ProposalComponent ... />
  </AccessGate>
)

// AFTER — render directly, keep the session check
// If no proposal found for clientId, still show "not found" state
// If proposal found, render it directly (no gate)
return <ProposalComponent ... />
```

Read the actual file carefully — the exact structure may differ. The goal is: remove AccessGate, keep everything else (ProposalNav, all section components, session check).

**Action 2 — Delete `app/clients/[clientId]/components/AccessGate.tsx`**

Delete this file entirely. It will no longer be used.

**Action 3 — Check for any remaining imports of AccessGate across the codebase and remove them.**

Run: `grep -r "AccessGate" app/` and clean up any remaining references.

---

### Task 1b: Add ScotShirts discovery report to the document library

**Action 1 — Edit `data/client-documents.ts`:**

The `scotshirts` entry currently only has the proposal link. Add the discovery report:

```ts
scotshirts: [
  {
    id: 'prop-scotshirts-1',
    title: 'Proposal',
    type: 'proposal',
    date: '2026',
    description: 'Engagement proposal.',
    href: '/clients/scotshirts',
  },
  {
    id: 'scotshirts-discovery-report',
    title: 'Discovery Visit Report — June 2026',
    type: 'report',
    date: '2 June 2026',
    description: 'Summary of findings and priority actions from the on-site discovery visit in Edinburgh.',
    href: '/client-docs/scotshirts/discovery-report.html',
  },
],
```

Note: The `ClientDoc` type uses `'proposal' | 'invoice' | 'report' | 'document'` — `'report'` is already valid.

**Action 2 — Edit `data/published-docs.json`:**

The scotshirts entry is currently `"scotshirts": {}`. Change to:

```json
"scotshirts": {
  "scotshirts-discovery-report": true,
  "prop-scotshirts-1": true
}
```

---

### Task 1c: Create the ScotShirts discovery report HTML page

**Create file:** `public/client-docs/scotshirts/discovery-report.html`

Build a self-contained HTML page (no external dependencies, all CSS inline or in a `<style>` block). 

**Brand:**
- Background: `#0a0a0a`
- Primary text: `#f0f0f0`
- Amber accent: `#FB8500`
- Blue accent: `#219EBC`
- Font: system-ui or Inter via Google Fonts
- Style should match the professional quality of the existing proposal pages

**Structure:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Discovery Visit Report — Scott Shirts — Decoded Ops</title>
  <!-- inline styles, no external CSS deps except optional Google Fonts -->
</head>
<body>
  <!-- HEADER -->
  <!-- Logo/brand mark + "DECODED OPS" -->
  <!-- "DISCOVERY VISIT REPORT" label -->
  <!-- Client: Scott Shirts -->
  <!-- Date: 2 June 2026 -->
  <!-- Consultant: Craig Blackman, Decoded Ops -->

  <!-- EXECUTIVE SUMMARY -->
  <!-- [CONTENT PLACEHOLDER — Craig to fill in] -->

  <!-- KEY FINDINGS -->
  <!-- Sections with headings and bullet points -->
  <!-- [CONTENT PLACEHOLDER — Craig to fill in] -->

  <!-- PRIORITY ACTIONS -->
  <!-- Numbered list, 3–5 items -->
  <!-- [CONTENT PLACEHOLDER — Craig to fill in] -->

  <!-- AGREED NEXT STEPS -->
  <!-- [CONTENT PLACEHOLDER — Craig to fill in] -->

  <!-- FOOTER -->
  <!-- Decoded Ops | craig@decodedops.co.uk | decodedops.co.uk -->
  <!-- "Confidential — prepared for Scott Shirts" -->
</body>
</html>
```

Use clearly marked `<!-- [PLACEHOLDER: section description] -->` comments where Craig will insert content. Make the page look polished and professional even with placeholder text — use sample headings like "Section heading" and "[Content to be added]" so the layout is visible.

**Print styles:** Add `@media print` styles so it prints cleanly (white background, black text).

---

### Task 1d: Add ScotShirts client user

**This requires Craig's input — do NOT auto-generate.**

The website stores users as bcrypt-hashed entries in the `CLIENT_USERS` environment variable in `.env.local`. The hash-password script is at `scripts/hash-password.mjs`.

**Instruction for Craig (include this in a comment block at the top of the file or as a separate `SCOTSHIRTS_SETUP.md`):**

```
To add the ScotShirts login:

1. Run: node scripts/hash-password.mjs <louise-email> <chosen-password> "Louise" "scotshirts"
2. Copy the JSON object it outputs
3. Open .env.local
4. Find the CLIENT_USERS array
5. Add the new JSON object to the array (comma-separated)
6. Redeploy on Vercel: push to main, or update the CLIENT_USERS env var in Vercel dashboard and redeploy
```

Create `SCOTSHIRTS_SETUP.md` in the project root with these instructions.

---

### Phase 1 Verification

1. Run `npm run build` — must pass with no TypeScript errors
2. Run `npm run dev`, navigate to `/clients/scotshirts` — should redirect to login
3. Log in with admin credentials → navigate to `/clients/scotshirts` → proposal renders directly (no AccessGate modal)
4. Navigate to `/clients/documents` as admin — should show scotshirts discovery report in the list (it will show since admin sees all)
5. Open `/client-docs/scotshirts/discovery-report.html` directly — HTML renders correctly

---

## Phase 2 — Hub-Driven Document Management

**This is a separate sprint. Do not mix with Phase 1.**

### Goal

Hub becomes the single source of truth for all client documents (invoices, engagement letters, reports). Website reads from hub API. No more managing static HTML files on the website manually.

### Architecture

```
Hub CRM (admin) → client_documents Supabase table → public API → Website documents page
```

---

### Task 2a: New Supabase table in Hub

**Create migration file:** `decoded-ops-hub/supabase/migrations/[timestamp]_client_documents.sql`

```sql
CREATE TABLE client_documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id TEXT NOT NULL,
  company_id UUID REFERENCES companies(id) ON DELETE SET NULL,
  doc_type TEXT NOT NULL CHECK (doc_type IN ('invoice', 'engagement_letter', 'report', 'proposal', 'terms', 'other')),
  doc_number TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  description TEXT,
  html_content TEXT,
  published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX ON client_documents(client_id, published);

-- auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER client_documents_updated_at
  BEFORE UPDATE ON client_documents
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
```

---

### Task 2b: Hub public read API

**Create file:** `decoded-ops-hub/src/app/api/public/client-docs/route.ts`

```ts
// GET /api/public/client-docs?clientId=[id]
// Public — no auth required
// Returns published documents for a given clientId
// CORS: allow decodedops.co.uk

import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET(req: NextRequest) {
  const clientId = req.nextUrl.searchParams.get('clientId')
  if (!clientId) {
    return NextResponse.json({ error: 'clientId required' }, { status: 400 })
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const { data, error } = await supabase
    .from('client_documents')
    .select('id, doc_type, doc_number, title, description, html_content, created_at')
    .eq('client_id', clientId)
    .eq('published', true)
    .order('created_at', { ascending: false })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data, {
    headers: {
      'Access-Control-Allow-Origin': 'https://decodedops.co.uk',
      'Access-Control-Allow-Methods': 'GET',
      'Cache-Control': 'no-store',
    },
  })
}

export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      'Access-Control-Allow-Origin': 'https://decodedops.co.uk',
      'Access-Control-Allow-Methods': 'GET',
    },
  })
}
```

---

### Task 2c: Hub CRM — Documents tab on company page

Find the company detail page in `decoded-ops-hub/src/app/admin/crm/companies/[id]/`. It likely has tabs (Overview, Projects, etc.).

Add a "Documents" tab that:
- Lists all documents for this company (query `client_documents` where `company_id = [id]`)
- Shows: doc_number, title, doc_type, published state, created_at
- Button: "New Document" → opens a form: pick doc_type, enter title, doc_number (auto-suggested based on type + sequence), textarea for html_content
- Toggle published (checkbox or button)
- Delete button (with confirmation)

**Document number auto-suggestion logic:**
- `invoice` → query max DO-INV-NNN from client_documents, increment
- `engagement_letter` → query max DO-EL-NNN from client_documents, increment  
- `report` → query max DO-R-NNN from client_documents, increment
- `proposal` → query max DO-Q-YYYY-NNN from client_documents, increment
- `terms` → DO-TC-001 (usually one)

---

### Task 2d: HTML templates for invoice and engagement letter

**Create `decoded-ops-hub/public/templates/invoice.html`**

Self-contained HTML, print-optimised. Include placeholders (e.g. `{{COMPANY_NAME}}`, `{{INVOICE_NUMBER}}`, `{{AMOUNT}}`, `{{DUE_DATE}}`) that can be filled by a future generator. For now this is a static template Craig can copy-edit.

Sections:
- Header: Decoded Ops logo/name, "INVOICE", invoice number, date, due date
- Bill to: company name, address
- Line items table: description, quantity, unit price, total
- Subtotal / VAT / Total
- Payment details: bank name, sort code, account number (Craig to fill in)
- Footer: Decoded Ops | craig@decodedops.co.uk | Company number (if applicable)

**Brand:** white background for print, but include a dark-mode version toggle or just keep it print-clean (white bg, dark text, amber `#FB8500` for headings/accents).

**Create `decoded-ops-hub/public/templates/engagement-letter.html`**

Sections:
- Header: Decoded Ops letterhead
- Date, client name, address
- "Letter of Engagement" heading
- Scope of work paragraph (`{{SCOPE}}`)
- Investment: `{{AMOUNT}}` payable as `{{PAYMENT_TERMS}}`
- Start date: `{{START_DATE}}`
- Reference to Standard Terms & Conditions
- Signature block: Craig's name, Decoded Ops
- Countersignature block: client name, company

---

### Task 2e: Website — update documents page to call hub API

**Edit `app/clients/documents/page.tsx`:**

Replace the static `getClientDocuments(clientId)` call with a fetch to the hub API. This is a server component (or use server-side fetch).

```ts
// Replace this:
import { getClientDocuments } from '@/data/client-documents'
const docs = getClientDocuments(session.user.clientId)

// With this (server-side fetch):
const HUB_API = process.env.HUB_API_URL // e.g. https://hub.decodedops.co.uk
const res = await fetch(`${HUB_API}/api/public/client-docs?clientId=${session.user.clientId}`, {
  next: { revalidate: 60 }
})
const docs = res.ok ? await res.json() : []
```

Keep the existing UI — just swap the data source. Ensure the doc shape from the API (`id, doc_type, doc_number, title, description, html_content, created_at`) maps to the display correctly. The `html_content` field can be rendered inline (in an iframe or a modal) rather than linking to a static file.

**Add to `.env.local`:**
```
HUB_API_URL=http://localhost:3001
```
(Update to production URL when hub is deployed.)

---

### Task 2f: Deprecate old website document infrastructure (do after 2e is working)

Once the hub API is live and website is reading from it, remove:
- `data/client-documents.ts`
- `data/published-docs.json`
- `data/documents-store.ts` (if exists)
- `app/api/admin/documents/publish/route.ts`
- `app/admin/documents/` (entire folder)
- `app/admin/` layout changes if now empty

Also update `app/clients/dashboard/page.tsx` — remove any hardcoded proposal links that referenced the old structure. Proposal links stay (they're React routes, not hub docs).

---

### Phase 2 Verification

1. Hub: migration runs, `client_documents` table exists in Supabase
2. Hub: create a test document for TackleBag via CRM UI, set published=true
3. Hub: `GET /api/public/client-docs?clientId=tacklebag` returns the document
4. Website: log in as tacklebag → `/clients/documents` shows the hub-sourced document
5. Hub: toggle published=false → document disappears from website within 60s (cache revalidation)

---

## Numbering Reference

Use these formats consistently. **Do not invent new formats.**

| Document type | Format | Example |
|---|---|---|
| Invoice | DO-INV-001 | DO-INV-001, DO-INV-002 |
| Engagement Letter | DO-EL-001 | DO-EL-001, DO-EL-002 |
| Quote / Proposal | DO-Q-YYYY-001 | DO-Q-2026-001 |
| Contract | DO-C-YYYY-001 | DO-C-2026-001 |
| Report | DO-R-001 | DO-R-001, DO-R-002 |

The TackleBag commercial folder has invoices with wrong numbers (DO-001, DO-003, DO-005). When migrating these into the hub `client_documents` table, renumber from DO-INV-001 sequentially.

---

## Key file locations

### Website
```
app/clients/[clientId]/page.tsx              ← remove AccessGate wrapper
app/clients/[clientId]/components/
  AccessGate.tsx                              ← DELETE this file
app/clients/documents/page.tsx               ← Phase 2: call hub API
data/client-documents.ts                     ← add scotshirts report (Phase 1), deprecate (Phase 2)
data/published-docs.json                     ← publish scotshirts (Phase 1), deprecate (Phase 2)
public/client-docs/scotshirts/
  discovery-report.html                      ← CREATE (Phase 1)
scripts/hash-password.mjs                    ← Craig runs this to add scotshirts user
SCOTSHIRTS_SETUP.md                          ← CREATE — instructions for Craig
```

### Hub
```
supabase/migrations/[ts]_client_documents.sql   ← CREATE (Phase 2)
src/app/api/public/client-docs/route.ts          ← CREATE (Phase 2)
src/app/admin/crm/companies/[id]/                ← ADD Documents tab (Phase 2)
public/templates/invoice.html                    ← CREATE (Phase 2)
public/templates/engagement-letter.html          ← CREATE (Phase 2)
```

---

## Do NOT touch

- `middleware.ts` (website) — leave as-is
- `auth.ts` (website) — leave as-is
- Any other client proposal data files (`tackleBag-proposal.ts`, etc.)
- The hub's existing CRM tables or migrations
- The hub's auth system

---

## Blockers (Craig must action these — not OpenCode)

1. **Louise's email address** — needed to create her login. Craig runs `node scripts/hash-password.mjs` once the email is confirmed.
2. **Meeting notes content** — the discovery report HTML (`public/client-docs/scotshirts/discovery-report.html`) is built with placeholder sections. Craig fills in the actual content.
3. **Scotshirts login password** — Craig chooses the temporary password for Louise's account.
4. **Vercel redeploy** — after updating `CLIENT_USERS` in `.env.local` / Vercel env vars, a redeploy is required for the new user to be active.
5. **Hub production URL** — for Phase 2, the hub needs a deployed URL. Add it to `HUB_API_URL` in both the website's `.env.local` and Vercel env vars.
