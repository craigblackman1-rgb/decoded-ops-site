# Lane notes: web011-u25-b3

## What happened

Applied every FIND/REPLACE edit from the brief (`web011-u25-b3.md`). 17 problem pages, 31 edits total. All applied first pass, no misses.

## Edits by page

| Page | Edits | Keyword |
|---|---|---|
| `/problems` | 2 | growing pains in business |
| `/problems/ai-paralysis` | 1 | ai readiness assessment |
| `/problems/bottleneck-growth` | 2 | bottleneck in production |
| `/problems/buy-vs-build` | 2 | erp evaluation checklist |
| `/problems/cant-scale-operations` | 2 | scaling a business |
| `/problems/data-scattered` | 2 | product data management |
| `/problems/disaster-recovery` | 2 | business continuity disaster recovery plan |
| `/problems/ecommerce-not-connected` | 2 | fix ecommerce integration issues |
| `/problems/erp-implementation-failure` | 2 | erp implementation failure |
| `/problems/inventory-blind` | 2 | stock control system |
| `/problems/manual-workarounds` | 2 | manual workarounds |
| `/problems/no-ops-owner` | 2 | interim operations director |
| `/problems/ops-in-owners-head` | 2 | standard operating procedure template |
| `/problems/seasonal-peaks` | 2 | production capacity planning |
| `/problems/slow-processes` | 2 | process improvement consultant |
| `/problems/spreadsheet-addiction` | 2 | manual processes |
| `/problems/wrong-erp-software` | 2 | erp for small business |

## Skipped

- `/problems/legacy-system`: already done in batch 1
- `/problems/systems-dont-talk`: already carries its keyword

## Bug noted (not fixed in this lane)

The fourth `causes` entry in `/problems/cant-scale-operations` has title 'Business Growing, Operations Not Scaling | Decoded Ops' — a page title pasted into a cause heading. Its body is about nobody owning the run from order in to invoice out. Filed as instructed (not fixed here).

## Verification

- `npx tsc --noEmit`: clean (pre-existing errors only, not introduced by this lane)
- Escape grep for stray `&amp;` or broken entities: 0 hits
- No JSX structure, classNames, styles, or DO-ART strings touched
