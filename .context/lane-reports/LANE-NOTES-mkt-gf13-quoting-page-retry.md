# Lane notes: mkt-gf13-quoting-page-retry

## What was done

Created the quoting costs problem page at `/problems/quoting-takes-too-long` with:
- Full page component with metadata, FAQPage JSON-LD, and ProblemPageDS rendering
- 4 FAQs covering customer-supplied garments, setup charges, price breaks, and speeding up quoting
- Routing in `data/problem-routing.ts` linking to Clarity Audit, related problems, blog, sectors, resources
- Entry added to problems index page at `app/problems/page.tsx`
- Route slugs regenerated (now 19 problems)

## Addendum: removed hard-coded problem count

Per the addendum, removed all hard-coded "Eighteen" and "Thirteen of eighteen" references from `app/problems/page.tsx` and "All 18 problems" from `components/Footer.tsx`. The SVG `<text>` in the Plate was also updated.

**Count reconciliation note:** The problems index page now lists 19 problems. The Plate SVG at DO-ART-118 still shows "5 / 4 / 5 / 4" per column (18 total) and the footer bar text references "thirteen". The Plate title and lede were made count-free but the SVG internal counts (the large amber numbers and column item lists) were not modified, as the addendum only specified the lede/h2/title text. Reconciling the Plate artwork counts to 19 is a separate follow-up.

## Files changed

1. `app/problems/quoting-takes-too-long/page.tsx` — new
2. `data/problem-routing.ts` — added quoting-takes-too-long entry
3. `app/problems/page.tsx` — added list entry + count-free rewording
4. `data/route-slugs.json` — regenerated (19 problems)
5. `components/Footer.tsx` — "All 18 problems" → "All problems"

## Verification

- `npx tsc --noEmit` — clean, 0 errors
- Em dash grep on new page — 0 hits
- Route slugs diff — only the new entry, no other changes
