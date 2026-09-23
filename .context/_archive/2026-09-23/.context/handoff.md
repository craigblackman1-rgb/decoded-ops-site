# Handoff: Lane B — Questionnaire Save Feature (decoded-ops-website)

**Branch:** `questionnaire-save-feature`
**Commits:** 3 (5690c30, 011a9db, b5ce3e2)
**Date:** 2026-08-28

## What was built

Three files changed, mirroring the existing e-signature flow exactly:

### 1. `app/api/clients/documents/[id]/questionnaire/route.ts` (GET + POST)

Proxy route, auth-gated via `auth()`, mirrors `sign/route.ts` pattern exactly.

- **GET**: reads session, extracts `clientId`, forwards to `${HUB_API_URL}/api/public/client-docs/{docNumber}/questionnaire?clientId={clientId}`. Returns `{ questions, answers }`.
- **POST**: reads session, extracts `clientId`, forwards `{ clientId, answers }` to the hub POST endpoint. Returns the hub's response.

### 2. `app/clients/documents/view/[id]/QuestionnaireForm.tsx`

Client component modeled on `SignPanel.tsx`'s structure and inline styles.

- On mount: GETs questions + answers from the proxy route
- Renders questions grouped by `section` (section heading, then each question: bold label, italic hint if present, `<textarea>` with rows from `lines` value, pre-filled with any saved answer)
- "Save answers" button POSTs all current textarea values
- Shows brief success state (green check + "Your answers have been saved") or error state (red alert box, same pattern as SignPanel)
- Loading state while fetching

### 3. `app/clients/documents/view/[id]/page.tsx` (modified)

- Imports `QuestionnaireForm`
- Relaxed the `html_content` check: questionnaire documents are allowed to lack `html_content`
- Branches on `doc_type === 'questionnaire'`: renders `QuestionnaireForm` instead of the iframe. All other doc_types keep existing behavior (iframe + SignPanel where applicable) completely unchanged.

## How to verify once the hub side is live

1. Log in as `sales@davidsharp.co.uk` (or any client with `DO-Q-DS-001` in their documents)
2. Navigate to `/clients/documents`, open `DO-Q-DS-001`
3. Confirm: real `<textarea>` fields render grouped by section, with hints — not a static HTML iframe
4. Type answers into several fields, click "Save answers"
5. Confirm: success state appears ("Your answers have been saved")
6. Refresh the page — confirm: previously saved answers are pre-filled in the textareas
7. Check hub admin: confirm answers are visible in the document viewer

## What was NOT changed

- No NextAuth config or login flow touched
- No changes to any other doc_type's behavior
- No git push, no npm install
- No `node_modules` installed in this worktree (can't run tsc/lint)

## Dependencies

Live end-to-end testing requires the hub's `GET/POST /api/public/client-docs/{docNumber}/questionnaire` route to be live (Lane A, parallel work). The website code is built against the documented contract and will work once that route exists.
