# Lane notes — web012-u67-blog-index

## Bug 1: Mojibake in card excerpts

3 instances of double-encoded em dash (`â€"` = U+00E2 U+20AC U+201D → U+2014 `—`):

| Slug | Field | Before | After |
|------|-------|--------|-------|
| ai-isnt-your-problem-your-processes-are | excerpt | `...aren't ready for AI â€" and what to do first.` | `...aren't ready for AI — and what to do first.` |
| ecommerce-integration-trap | excerpt | `...Here's why it goes wrong â€" and how to avoid the common pitfalls.` | `...Here's why it goes wrong — and how to avoid the common pitfalls.` |
| the-real-cost-of-a-failed-erp-project | excerpt | `...Here are the real numbers from a real project â€" and how an upfront audit would have prevented it.` | `...Here are the real numbers from a real project — and how an upfront audit would have prevented it.` |

No other mojibake found in `content/` or `app/blog/`.

## Bug 2: Blank thumbnails

All 33 local posts had no `featuredImage` field. Every post has a corresponding `public/images/blog/<slug>-thumb.webp` file (added in commit `dc65f42`). Added `featuredImage` pointing to the existing thumb for all 33.

| Slug | featuredImage | File exists |
|------|---------------|-------------|
| erp-gaps-decorated-goods-business | /images/blog/erp-gaps-decorated-goods-business-thumb.webp | yes |
| decoded-method-operations-framework | /images/blog/decoded-method-operations-framework-thumb.webp | yes |
| iso-9001-small-business | /images/blog/iso-9001-small-business-thumb.webp | yes |
| sop-template-decorated-goods | /images/blog/sop-template-decorated-goods-thumb.webp | yes |
| operations-planning-print-decoration-business | /images/blog/operations-planning-print-decoration-business-thumb.webp | yes |
| local-seo-print-shop | /images/blog/local-seo-print-shop-thumb.webp | yes |
| cloud-erp-print-business | /images/blog/cloud-erp-print-business-thumb.webp | yes |
| what-is-erp-decorated-goods | /images/blog/what-is-erp-decorated-goods-thumb.webp | yes |
| erp-selection-decorated-goods | /images/blog/erp-selection-decorated-goods-thumb.webp | yes |
| hire-fractional-cto | /images/blog/hire-fractional-cto-thumb.webp | yes |
| lean-six-sigma-small-business | /images/blog/lean-six-sigma-small-business-thumb.webp | yes |
| how-to-evaluate-an-ai-tool-without-getting-sold-to | /images/blog/how-to-evaluate-an-ai-tool-without-getting-sold-to-thumb.webp | yes |
| the-artwork-file-that-broke-the-erp-cartoon | /images/blog/the-artwork-file-that-broke-the-erp-cartoon-thumb.webp | yes |
| b2b-portal-down-on-christmas-jumper-day-cartoon | /images/blog/b2b-portal-down-on-christmas-jumper-day-cartoon-thumb.webp | yes |
| crm-adoption-failure-why-it-happens-and-how-to-fix-it | /images/blog/crm-adoption-failure-why-it-happens-and-how-to-fix-it-thumb.webp | yes |
| what-good-operations-actually-looks-like | /images/blog/what-good-operations-actually-looks-like-thumb.webp | yes |
| when-it-support-is-the-problem | /images/blog/when-it-support-is-the-problem-thumb.webp | yes |
| the-hidden-cost-of-running-legacy-systems | /images/blog/the-hidden-cost-of-running-legacy-systems-thumb.webp | yes |
| process-before-platform | /images/blog/process-before-platform-thumb.webp | yes |
| embroidery-stitch-density-quality-speed-cost | /images/blog/embroidery-stitch-density-quality-speed-cost-thumb.webp | yes |
| heat-press-temperature-dwell-time-operations-guide | /images/blog/heat-press-temperature-dwell-time-operations-guide-thumb.webp | yes |
| ralawise-integration-bulk-orders-stock-management | /images/blog/ralawise-integration-bulk-orders-stock-management-thumb.webp | yes |
| screen-printing-vs-heat-transfer-scale-your-business | /images/blog/screen-printing-vs-heat-transfer-scale-your-business-thumb.webp | yes |
| artwork-approval-workflow-brief-to-sign-off-24-hours | /images/blog/artwork-approval-workflow-brief-to-sign-off-24-hours-thumb.webp | yes |
| bulk-order-management-wholesale-decorated-goods | /images/blog/bulk-order-management-wholesale-decorated-goods-thumb.webp | yes |
| production-scheduling-print-embroidery-capacity-quality-rush | /images/blog/production-scheduling-print-embroidery-capacity-quality-rush-thumb.webp | yes |
| embroidery-quality-standards-stitch-density-thread-durability | /images/blog/embroidery-quality-standards-stitch-density-thread-durability-thumb.webp | yes |
| ai-isnt-your-problem-your-processes-are | /images/blog/ai-isnt-your-problem-your-processes-are-thumb.webp | yes |
| what-happens-when-your-systems-go-down | /images/blog/what-happens-when-your-systems-go-down-thumb.webp | yes |
| ecommerce-integration-trap | /images/blog/ecommerce-integration-trap-thumb.webp | yes |
| 5-questions-vendors-wont-like | /images/blog/5-questions-vendors-wont-like-thumb.webp | yes |
| the-real-cost-of-a-failed-erp-project | /images/blog/the-real-cost-of-a-failed-erp-project-thumb.webp | yes |
| why-systems-dont-talk | /images/blog/why-systems-dont-talk-thumb.webp | yes |

## How images work

`BlogList.tsx` renders `post.featuredImage` if truthy. Hub API items include `featuredImage` from the CMS. Local-only items from `blog-index.json` previously had no `featuredImage` field, causing blank image areas on 33 cards.

## Notes

- The brief said 32 posts but the JSON has 33 (verified).
- All 33 posts have matching thumb files in `public/images/blog/`. Two extra thumb files exist without corresponding posts (`ecommerce-fulfilment-decorated-goods-thumb.webp`, `5-questions-vendors-wont-like-thumb.webp`) — these are orphaned art, not a problem.
- The mojibake fix was a Node script run externally then deleted per brief instructions.
