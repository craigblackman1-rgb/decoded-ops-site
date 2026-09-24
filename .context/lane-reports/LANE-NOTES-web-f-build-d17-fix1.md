# Lane notes: web-f-build-d17-fix1

## What was done

**Task 1 — Raw image placeholders:** Replaced 7 `{{IMG:...}}` template strings across 6 problem pages with the resolved image paths from `web-f-img-map.txt`:

| File | Placeholder | Resolved to |
|---|---|---|
| `cant-scale-operations/page.tsx:159` | `cat-workwear.jpg\|blank=...` | `/images/d17/problems/cat-workwear-401e08.jpg` |
| `disaster-recovery/page.tsx:106` | `hero-workshop.jpg\|crop=...` | `/images/d17/problems/hero-workshop-8bff06.jpg` |
| `ecommerce-not-connected/page.tsx:71` | `prod-mailer.jpg` | `/images/d17/problems/prod-mailer-f70773.jpg` |
| `manual-workarounds/page.tsx:71` | `cat-promo.jpg` | `/images/d17/problems/cat-promo-6d25d2.jpg` |
| `manual-workarounds/page.tsx:95` | `cat-workwear.jpg\|blank=...` | `/images/d17/problems/cat-workwear-401e08.jpg` |
| `no-ops-owner/page.tsx:106` | `hero-workshop.jpg\|crop=...` | `/images/d17/problems/hero-workshop-8bff06.jpg` |
| `slow-processes/page.tsx:133` | `hero-workshop.jpg\|crop=...` | `/images/d17/problems/hero-workshop-8bff06.jpg` |

**Task 2 — ERP hero art:** Ported DO-ART-967 (journey poster) from `.context/lane-briefs/d17-problems/erp-implementation-failure.hero.html` into `erp-implementation-failure/page.tsx` as a new `<section className="g-off">` between the hero and the DO-ART-917 inline art. The hero art references two images (`hero-workshop-783ec1.jpg`, `thread-spools-2195b5.jpg`) that already exist in `public/images/d17/problems/`. No `{{IMG` placeholders were present in the hero HTML.

## Verification

- `git grep -n "{{IMG" app components` — 0 hits
- `npx tsc --noEmit` — clean, 0 errors
- All 7 modified files committed in one commit: `3a9cb5a`

## Notes

- `data/route-slugs.json` showed as modified in `git status` but was a pre-existing line-ending change (CRLF warning), not related to this work. Not committed.
