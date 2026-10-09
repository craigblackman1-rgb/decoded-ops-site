UNIT: wo-website-consolidated-2026-08-02 u6 — CR-WEB-010: email alert to craig@decodedops.co.uk when a tool lead is captured, sent through the site's shared email helper (Resend preferred), same sender as existing site mail.

CONTEXT: app/api/tools/capture/route.ts already saves the lead to the hub, then sends a notification with an inline nodemailer SMTP transport (host/user/pass from SMTP_*; recipient CONTACT_EMAIL). That bypasses lib/email.ts, which is the shared helper: sendEmail(input: SendEmailInput) auto-selects Resend (RESEND_API_KEY) then SMTP fallback, and getEmailStatus() reports whether a backend is configured. The alert must go through lib/email.ts so it uses Resend when configured.

MUST:
1. In app/api/tools/capture/route.ts replace the inline nodemailer block with a call to sendEmail from '@/lib/email'. Read lib/email.ts first and match its SendEmailInput shape exactly.
2. Recipient: process.env.LEAD_ALERT_EMAIL || process.env.CONTACT_EMAIL || 'craig@decodedops.co.uk'. Subject unchanged: New lead — <readableTool> — <sanitizedName>. Keep replyTo = the lead's email. Keep the plain-text body (name, email, company, result summary, answers). Add a short HTML body too if SendEmailInput supports it.
3. The email step must never fail the request: wrap it, log console.error('[tools/capture] lead alert failed', ...) on error, and when getEmailStatus().configured is false log a warning '[tools/capture] no email backend configured — lead alert skipped' (lead is still saved to the hub; response stays ok).
4. Remove the now-unused nodemailer import from this route (do NOT uninstall the package; other code may use it).
5. Add a unit test under the repo's existing test setup (check package.json for vitest/jest; if none exists, add a minimal vitest config + "test" script — installing vitest is pre-authorised) that mocks '@/lib/email' and '@/lib/hub-fetch' and asserts: (a) a valid POST calls sendEmail once with to=craig@decodedops.co.uk (env unset) and subject containing the readable tool name; (b) sendEmail rejecting still yields a 200 ok response.
6. Update .env.example (if present) documenting LEAD_ALERT_EMAIL.
7. Write .context/lane-reports/LANE-NOTES-u6-tool-lead-alert.md. Commit: "CR-WEB-010: tool lead alert via shared email helper (Resend) to craig@decodedops.co.uk"

FORBIDDEN: changing the hub payload/validation/rate-limit logic in the route; changing lib/email.ts behaviour (read-only); any other route or page; committing secrets.

VERIFY (run and report actual output): npx tsc --noEmit, the new test passing, git grep -n nodemailer -- app/api/tools/capture/route.ts returns nothing. Commit before you stop. Do not run a dev server or browser.
