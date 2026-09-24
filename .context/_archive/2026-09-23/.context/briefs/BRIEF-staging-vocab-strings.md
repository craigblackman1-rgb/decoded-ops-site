# Lane brief: vocabulary string fixes on staging (GF12, wo-marketing-sales-consolidated-2026-08-20)

## HARD CONSTRAINT — read first
The staging site's page designs were redone in Open Design and are CANONICAL. Craig's direct order 2026-09-01: "we do not want to destroy the new site design." This lane changes TEXT STRINGS AND METADATA ONLY. No JSX structure, no components, no classNames, no layout, no imports, no new elements. If a fix seems to need markup changes, skip it and note it in the log.

## SETUP
Worktree off **origin/staging** (NOT main) under D:\apps\worktrees\decoded-ops-website\. All work commits there.

## THE FIXES (from the 2026-09-01 vocabulary audit; audience = UK decorators who say "shop management", "quoting", "re-keying", never "fractional CTO" or "software stack")

Metadata fixes (each page: title + description + OG + twitter variants + any sectorSchema name/description mirroring them):
1. `app/sectors/signs-graphics/page.tsx` — description says "Systems audit, project delivery, and fractional CTO support." Replace with: "Job tracking from site survey to installation, quoting complex jobs without the margin leak, and software that fits how a sign shop actually runs." Title: replace "Signs & Graphics Technology | Decoded Ops" with "Software & Systems for Sign Makers | Decoded Ops".
2. `app/sectors/awards-engraving/page.tsx` — same boilerplate. Description: "Getting names, dates and titles from customer to engraver without errors, proofs approved at volume, and jobs scheduled back from the event date." Title: "Software & Systems for Awards & Engraving | Decoded Ops".
3. `app/sectors/labels-packaging/page.tsx` — same boilerplate. Description: "The right label version on press every time, variable data without workarounds, and the EDI your bigger customers keep asking for." Title: "Software & Systems for Label & Packaging Printers | Decoded Ops".
4. `app/problems/systems-dont-talk/page.tsx` — description "Find out what your disconnected software stack is actually costing you each week." → "Find out what re-keying orders between systems that don't talk is actually costing you each week."
5. Every other `app/sectors/*/page.tsx` description opening "Technology and operations consultancy for X businesses." → flip to problem-first, sector-specific, one sentence in the same spirit as items 1–3 (write each from that page's own challenge cards; invent no facts). Keep "| Decoded Ops" titles.
6. `app/page.tsx` metadata description — replace "decorated goods" phrasing with named readers: "...for UK print shops, embroiderers, workwear and promo merch suppliers." Keep the rest of the description's meaning.

Body string fixes (replace ALL occurrences — several appear in two arrays):
7. `app/sectors/teamwear-clubwear/page.tsx`: "Automating that loop is one of the most impactful levers in teamwear operations." → "Fix that loop and you win back more time than anywhere else in the job." (×2)
8. `app/sectors/workwear/page.tsx`: "...is one of the most common operational drags in the sector." → "...eats more admin hours than anything else in this trade." (×2)
9. `app/sectors/promotional-merchandise/page.tsx`: "...is the sector's defining operational challenge." → "...eats more admin hours than anything else in this trade."
10. `app/sectors/print-promotional/page.tsx` + `app/sectors/promotional-merchandise/page.tsx` card title 'Quote-to-order conversion costs' → 'What quoting actually costs you'.
11. `app/sectors/garment-decoration/page.tsx`: "digitisation" → "digitising" (FAQ schema + challenge body, all occurrences; keep sentence grammar correct).
12. `app/problems/wrong-erp-software/page.tsx` FAQ schema: "you can evaluate ERP solutions for manufacturing and decoration on a like-for-like basis" → "you can compare the systems on a like-for-like basis".

Leave alone: the homepage hero eyebrow "Operations & technology consultancy" (Craig's positioning call), `app/clarity/page.tsx` headings.

## VOICE RULES (hard)
First person singular where first person appears. No em dashes. No "leverage/unlock/seamless/journey/best practice/operational efficiency". No invented facts or numbers. Never anything about a day rate.

## VERIFY (done means)
- `git grep -i "fractional CTO" app/sectors/` → 0 hits
- `git grep -i "software stack" app/` → 0 hits
- `git grep "impactful levers\|operational drag" app/` → 0 hits
- `npx next build` passes
- `git diff origin/staging..HEAD --stat` shows ONLY the files named above, string-sized deltas (no file over ~40 changed lines)
- Commits on the lane branch, nothing pushed. Claude verifies + merges.
