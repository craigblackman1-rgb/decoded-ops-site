# LANE-NOTES — web011-u5-faq-schema

## What was done

Added FAQPage JSON-LD schema to 14 pages across three categories:

### Service pages (4)
- **clarity** — 3 Q&As: what the day covers, 3x guarantee, what happens after
- **retained** — 3 Q&As: what fractional CTO does, three tiers, when it does not work
- **transform** — 3 Q&As: what Transform is, does it include software, how it is priced
- **how-i-build** — 3 Q&As: three rungs, does Decoded Ops resell, will I see rejected option costs

### App pages (3)
- **data-app** — 3 Q&As: what it does, does it replace existing platform, how supplier feeds are handled
- **artwork-manager** — 3 Q&As: what it does, how customer proofing works, founding-client terms
- **commerce** — 3 Q&As: what the three tiers are, how it differs from bespoke, ERP integration

### Sector pages (7)
- **awards-engraving** — 3 Q&As: variable data management, event deadline pressure, proof approval at volume
- **labels-packaging** — 3 Q&As: what makes it different, EDI integration, variable data at speed
- **promotional-merchandise** — 3 Q&As: multi-supplier catalogue, artwork loop, margin erosion
- **schoolwear** — 3 Q&As: back-to-school peak, badge management, does Data App replace platform
- **signs-graphics** — 3 Q&As: workflow vs generic ERP, costing complex jobs, installation scheduling
- **teamwear-clubwear** — 3 Q&As: squad-level personalisation, seasonal deadlines, proof bottleneck
- **workwear** — 3 Q&As: supplier feed chaos, decoration and stock in same picture, blank stock dependency

## Pages skipped (already had FAQPage)
- **garment-decoration** — already had FAQPage in `@graph` with 3 questions
- **small-business** — already had FAQPage in `@graph` with 4 questions

## ProfessionalService check
Layout.tsx `ProfessionalService` schema confirmed: `name: 'Decoded Ops'`, `url: 'https://decodedops.co.uk'`, `areaServed: 'GB'`, `founder: Craig Blackman`, `sameAs: ['https://www.linkedin.com/company/decodedops']`. No `linkedin.com/in/` URL found anywhere in the repo — personal LinkedIn link not added.

## Pattern used
All new FAQPage schemas use the `@graph` array pattern matching the existing problem-page convention. Pages that already had a `@graph` (retained, all sectors) had the FAQPage node added to their existing graph. Pages that had no prior JSON-LD (clarity, transform, how-i-build, data-app, artwork-manager, commerce) got a new `@graph` containing just the FAQPage node.

## Verification
- `npx tsc --noEmit` — clean, 0 errors
- `npm run lint` — 141 pre-existing errors/warnings, 0 new from this change
- Every Q&A derived from copy already on the page, no new claims or numbers introduced
