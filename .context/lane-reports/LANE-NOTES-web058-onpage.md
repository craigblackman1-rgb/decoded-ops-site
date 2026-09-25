# Lane Notes: web058-onpage

## What was done

Applied keyword-mapped titles and meta descriptions from `onpage-web058.json` (159 routes) to all prerenderable pages in the codebase.

### Routes covered
- **Root layout** (`app/layout.tsx`) + **homepage** (`app/page.tsx`) — "/" entry
- **22 static pages** — about, retained, clarity, deliver, transform, how-i-build, apps/*, contact, pricing, small-business, process-quality-system, cookies, privacy, blog index, case-studies index, problems index, resources index, tools index
- **2 location hub pages** — fractional-cto, tech-audit
- **58 location town pages** — 29 towns × 2 service types (fractional-cto + tech-audit), via `seoTitle`/`seoDescription` + `seoTitleTechAudit`/`seoDescriptionTechAudit` fields in `data/locations.ts`
- **33 blog posts** — via `seo.title` and `seo.description` fields added to `data/blog-index.json`
- **4 case studies**, **18 problems**, **10 sectors**, **7 resources**, **5 tools** — individual page.tsx metadata

### Approach
1. Wrote `scripts/apply-onpage-seo.mjs` to automate bulk metadata updates (removed after use)
2. Used line-level string replacement (not fragile regex) to handle escaped quotes, £ signs, and special characters correctly
3. For client-only tool pages (`ops-health-score`, `should-i-replace-erp`), created `layout.tsx` wrappers to export metadata (Next.js disallows metadata exports from `'use client'` components)
4. For location town pages, added both `seoTitle`/`seoDescription` (fractional-cto) and `seoTitleTechAudit`/`seoDescriptionTechAudit` (tech-audit) to the `LocationData` interface and each entry, since both route types share the same data entry
5. Wrote `scripts/check-onpage-seo.mjs` to verify prerendered HTML against the JSON — **0 mismatches** on all 126 prerendered paths; 33 blog posts correctly listed as "not prerendered" (dynamic from hub API)

### Files changed
78 files, +3106 / -472 lines (net: metadata values replaced across all pages, 2 new layout files, 1 new verification script, data files updated)

### Verification
- `npx tsc --noEmit` — clean
- `npm run build` — clean (173 static pages generated)
- `node scripts/check-onpage-seo.mjs` — 0 mismatches on prerendered paths

### Notes
- Blog posts are not prerendered as static HTML (they fetch from the hub API at build time), so the checker lists them as "not prerendered" — the `seo` fields in `blog-index.json` are picked up by `generateMetadata` in `app/blog/[slug]/page.tsx`
- The `apply-onpage-seo.mjs` script was a one-time tool and has been removed; only `check-onpage-seo.mjs` is kept for future use
