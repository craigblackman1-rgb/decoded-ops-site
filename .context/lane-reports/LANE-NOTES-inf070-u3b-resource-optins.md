# Lane notes: inf070-u3b-resource-optins

## What was done

Reused `DownloadOptIn` component and `app/api/tools/capture/route.ts` for two new resource pages (audit checklist and ERP selection playbook).

### API route (`app/api/tools/capture/route.ts`)
- Added `audit-checklist` and `erp-selection-playbook` to `VALID_RESOURCES`
- Created `RESOURCE_INFO` map with per-resource subject, download link, tip, and readable name
- Email content now dynamically uses the map instead of hardcoded SOP template values

### Component (`components/DownloadOptIn.tsx`)
- Added `buttonLabel` prop (default: "Download the template") for the download button text
- Added `thing` prop (default: "the template") for the opt-in copy ("I'll send the template…")
- Both default to SOP values so the existing SOP page renders identically
- Compact variant `.dlBtn` overflow at 390px was already fixed in CSS (line 78: `max-width:100%; box-sizing:border-box`)

### Pages
- `app/resources/audit-checklist/page.tsx`: Added `DownloadOptIn` (full after hero, compact before CTA)
- `app/resources/erp-selection-playbook/page.tsx`: Same placement pattern

### Count fix
- `app/blog/page.tsx` line 104: Changed "20 questions" to "36 questions"

### British spelling fixes (CR-WEB-056)
Five fixes on `app/resources/audit-checklist/page.tsx`:
- 5.1: licenses → licences
- 5.2: licenses → licences
- 5.3: licenses → licences
- 5.4: labor → labour
- 5.5: realize → realise

### Tests
- Added 2 new test cases in `route.test.ts`: one for `audit-checklist`, one for `erp-selection-playbook`
- Both verify: accepted (200), correct hub payload, correct email subject and download link

## Verification
- `npx tsc --noEmit -p .` — clean, 0 errors
- `npx vitest run app/api/tools/capture/route.test.ts` — 9 passed (7 pre-existing + 2 new)
- `npm run lint` — all errors/warnings pre-existing; no new issues from this lane

## Notes
- The compact variant's description line ("Word document, 11 pages, free, no email needed") remains hardcoded; the brief did not ask for a prop for it, and changing it would alter the SOP page's rendering.
