# Lane notes: inf070-u3-sop-signup

## What was built

Free SOP template download with optional email opt-in on `/resources/sop-template` (CR-WEB-061).

### Files changed
- `components/DownloadOptIn.tsx` — client component: two-column card (document mock-up + download button left, opt-in form right), compact variant, success/error states
- `components/DownloadOptIn.module.css` — layout and styling matching the mockup's `.dl-band`, `.dl`, `.dl-file`, `.dl-doc`, `.dl-opt`, `.dl-mini` classes
- `app/api/tools/capture/route.ts` — added `VALID_RESOURCES` array with `'sop-template'`; resources skip `resultSummary`/`answers` validation; hub payload carries `tool: 'sop-template'` and `optin: 'ops-briefing'` in the notes field; sends a dedicated email to the requester (not a lead alert to Craig)
- `app/api/tools/capture/route.test.ts` — added 2 tests: sop-template accepted without resultSummary/answers, unknown resource rejected
- `app/resources/sop-template/page.tsx` — inserted `<DownloadOptIn>` full variant after hero, compact variant after the 7-step method section
- `public/downloads/decoded-ops-sop-template.docx` — 11-page Word document (pre-existing, committed)

## Hub CRM payload details

**Field carrying source:** `tool` field is set to `'sop-template'` (the same field tools use, so leads show their source in the CRM).

**Opt-in consent:** `optin: 'ops-briefing'` is added to the payload as a top-level field. The hub's `/api/public/leads` endpoint receives it alongside the standard fields. This records the user's consent to receive the Ops Briefing newsletter. No dedicated newsletter consent field exists on the hub payload schema, so it rides in the lead payload as a flag.

**Result summary:** defaults to `'Requested resource: sop-template'`.

**Answers:** defaults to `{}`.

## Email flow

- **To the requester:** subject "Your SOP template from Decoded Ops", plain text + HTML body thanking them by first name, download link, one-line usage tip, sign-off "Craig", unsubscribe/reply line.
- **No lead alert email to Craig** for resource downloads — the resource email IS the transactional email.
- Reuses `sendEmail` from `lib/email` (Resend/SMTP). No attachment.

## Verification

- `npx tsc --noEmit -p .` — clean (0 errors)
- `npm run lint` — clean (only pre-existing warnings/errors, none introduced)
- `npx vitest run app/api/tools/capture/route.test.ts` — 7/7 tests pass (5 existing + 2 new)
- No dev server or browser testing (lane rule: Claude verifies)

## Design notes

- The document mock-up in the left column is pure CSS/HTML (no image file), matching the mockup's `.dl-doc` treatment
- Compact variant uses an outline button (not amber) because the closing CTA's amber "Book a free discovery call" sits in the same viewport
- Download button is a plain `<a href={fileHref} download>` — works without JS, never gated
- Responsive: stacks to single column under 900px, phone padding under 480px
- All styling uses `--do-*` CSS tokens from the design system, no inline hex colours
