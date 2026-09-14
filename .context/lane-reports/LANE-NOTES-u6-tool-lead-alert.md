# Lane Notes — u6: Tool Lead Alert via Shared Email Helper

**CR-WEB-010** · **Completed**: 2026-09-14

## What changed

`app/api/tools/capture/route.ts` — the lead-capture API route now sends its Craig-facing
alert through the shared `lib/email.ts` helper instead of an inline nodemailer transport.

### Before (inline nodemailer)

- Imported `nodemailer` directly, created a `transporter`, called `sendMail`.
- Used `SMTP_HOST` / `SMTP_USER` / `SMTP_PASS` env vars.
- Recipient was hardcoded to `process.env.CONTACT_EMAIL`.

### After (shared helper)

- Imports `sendEmail` and `getEmailStatus` from `@/lib/email`.
- `sendEmail` auto-selects Resend (if `RESEND_API_KEY` is set), then SMTP fallback.
- Recipient: `LEAD_ALERT_EMAIL || CONTACT_EMAIL || 'craig@decodedops.co.uk'`.
- When `getEmailStatus().configured` is false, the email is skipped with a warning log
  but the response still returns `200 ok` (lead is saved to the hub regardless).
- Email failures are caught and logged — they never fail the request.
- The `nodemailer` import is removed from this route (package untouched — other code
  may use it).

### Email content

- **Subject**: `New lead — <readableTool> — <sanitizedName>` (unchanged)
- **replyTo**: the lead's email (unchanged)
- **text**: plain-text body with name, email, company, result summary, answers, CRM link (unchanged)
- **html**: new HTML body with heading, key-value table, answer list, CRM link

### New env var

- `LEAD_ALERT_EMAIL` — optional override for the alert recipient. Falls back to
  `CONTACT_EMAIL`, then `craig@decodedops.co.uk`. Added to `.env.example`.

## Tests

- Added vitest + vite as devDependencies, `vitest.config.ts`, `"test"` script.
- `app/api/tools/capture/route.test.ts` — 5 tests:
  1. Valid POST calls `sendEmail` once with `to=craig@decodedops.co.uk` and subject containing readable tool name
  2. Uses `LEAD_ALERT_EMAIL` when set
  3. Falls back to `CONTACT_EMAIL` when `LEAD_ALERT_EMAIL` unset
  4. `sendEmail` rejecting still yields `200 ok`
  5. Skips email and logs warning when no backend configured

## Files touched

| File | Change |
|---|---|
| `app/api/tools/capture/route.ts` | Replaced inline nodemailer with `sendEmail` from `@/lib/email`; added HTML body; recipient via `LEAD_ALERT_EMAIL` |
| `app/api/tools/capture/route.test.ts` | New — 5 unit tests |
| `.env.example` | Added `LEAD_ALERT_EMAIL` |
| `vitest.config.ts` | New — vitest config with `@/` alias |
| `package.json` | Added `test` script, vitest + vite devDependencies |
| `.context/lane-reports/LANE-NOTES-u6-tool-lead-alert.md` | This file |

## Verification

- `npx tsc --noEmit` — clean (see run output)
- `npx vitest run` — 5/5 passing
- `git grep nodemailer -- app/api/tools/capture/route.ts` — no matches
