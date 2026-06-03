# Security Hardening Directive — Decoded Ops Website

A security audit has identified the following confirmed vulnerabilities. Fix in priority order. Read each file before editing it.

---

## FIX 1 — CRITICAL: Open Redirect in login route

**File:** `app/api/auth/login/route.ts`

The `callbackUrl` from the request body is returned unvalidated in the JSON response. An attacker can redirect victims to an external site after login.

**Fix:** Before returning `redirectTo`, validate that `callbackUrl` is a relative path (starts with `/` and does not start with `//`). If it fails validation, fall back to `/clients/dashboard`.

```ts
function sanitiseCallbackUrl(url: string | undefined): string {
  if (!url) return '/clients/dashboard'
  if (url.startsWith('/') && !url.startsWith('//')) return url
  return '/clients/dashboard'
}
// then use: redirectTo: sanitiseCallbackUrl(callbackUrl)
```

---

## FIX 2 — CRITICAL: IDOR on document view — no ownership check

**File:** `app/clients/documents/view/[id]/page.tsx`

After fetching docs and finding the document by ID, there is no check that the document belongs to the authenticated user's `clientId`. Any authenticated client can view any other client's document by guessing the ID.

**Fix:** After `const doc = docs.find(...)`, add:

```ts
if (!doc || doc.client_id !== session.user.clientId) {
  notFound()
}
```

Import `notFound` from `'next/navigation'` if not already imported.

---

## FIX 3 — CRITICAL: Proposal pages have no server-side auth

**File:** `app/clients/[clientId]/page.tsx`

This is a `'use client'` component with no server-side auth check. The only protection is a client-side AccessGate password component, which can be bypassed with browser DevTools.

**Fix:** Add a new file at `app/clients/[clientId]/layout.tsx` as a server-side guard:

1. Call `const session = await auth()` from `@/auth`
2. If no session, redirect to `/clients/login`
3. If `session.user.clientId !== params.clientId`, redirect to `/clients/dashboard` (prevents one client seeing another's proposal)

```ts
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

export default async function ClientLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { clientId: string }
}) {
  const session = await auth()
  if (!session) redirect('/clients/login')
  if (session.user.clientId !== params.clientId) redirect('/clients/dashboard')
  return <>{children}</>
}
```

---

## FIX 4 — HIGH: iframe sandbox too permissive

**File:** `app/clients/documents/view/[id]/page.tsx`

The iframe displaying Hub documents uses `sandbox="allow-same-origin"`. Combined with any scripts, this grants full cookie/session access from the iframe content.

**Fix:** Change to `sandbox=""` (no capabilities). HTML and CSS render without sandbox permissions. Only add back `allow-scripts` if confirmed necessary — never combine `allow-scripts` with `allow-same-origin`.

---

## FIX 5 — MEDIUM: Localhost CORS allowed in production

**File:** `app/api/contact/route.ts`

The `ALLOWED_ORIGINS` array includes `http://localhost:3000` unconditionally.

**Fix:** Gate localhost origins behind `NODE_ENV` check:

```ts
const ALLOWED_ORIGINS = [
  'https://decodedops.co.uk',
  'https://www.decodedops.co.uk',
  ...(process.env.NODE_ENV === 'development' ? ['http://localhost:3000'] : []),
]
```

---

## FIX 6 — MEDIUM: Audit log failures silently swallowed

**File:** `auth.ts`

The `try/catch` around audit logging silently discards errors. Security events are lost if Supabase is down.

**Fix:** In the catch block, add:

```ts
catch (error) {
  console.error('[auth audit]', error)
}
```

---

## FIX 7 — MEDIUM: Hardcoded email fallback in contact route

**File:** `app/api/contact/route.ts`

There is a hardcoded fallback email address `craig@decodedops.co.uk` in the code.

**Fix:** Remove the hardcoded fallback. If `process.env.CONTACT_EMAIL` is not set, return a 500 with a clear message:

```ts
if (!process.env.CONTACT_EMAIL) {
  return NextResponse.json({ error: 'Contact form not configured' }, { status: 500 })
}
```

---

## After all fixes

1. Run `npm run build` — confirm no TypeScript errors
2. Run `npm audit` — fix any high/critical CVEs
3. Manually verify:
   - Unauthenticated visit to `/clients/tacklebag` redirects to `/clients/login`
   - Login with `?callbackUrl=https://evil.com` redirects to `/clients/dashboard`
   - Authenticated client cannot access another client's document by ID (returns 404)
   - Contact form still submits successfully in production
