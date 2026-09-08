# LANE NOTES — meta-title-separator

## What changed

- **42 files** modified (135 occurrences converted from `| Decoded Ops` to `: Decoded Ops`)
- Branch: `lane/meta-title-separator`
- Commit: `44e44f1`

## Exception list — titles left on pipe (base title already contains a colon)

These 7 files (21 title occurrences) have a colon in the base title. Converting would produce a double-colon. Listed with suggested single-colon rewrites for Craig's review.

| File:line | Current title | Suggested rewrite |
|---|---|---|
| `app/case-studies/case-study-01/page.tsx:8` | Case study 01: Khaos Control ERP + Custom App \| Decoded Ops | Case study 01 — Khaos Control ERP + Custom App: Decoded Ops |
| `app/case-studies/case-study-01/page.tsx:13` | (same) | (same) |
| `app/case-studies/case-study-01/page.tsx:19` | (same) | (same) |
| `app/case-studies/case-study-02/page.tsx:8` | Case study 02: Clarity Audit to Stock Control Build \| Decoded Ops | Case study 02 — Clarity Audit to Stock Control Build: Decoded Ops |
| `app/case-studies/case-study-02/page.tsx:13` | (same) | (same) |
| `app/case-studies/case-study-02/page.tsx:19` | (same) | (same) |
| `app/case-studies/case-study-03/page.tsx:8` | Case study 03: B2B Portal & ERP Evaluation \| Decoded Ops | Case study 03 — B2B Portal & ERP Evaluation: Decoded Ops |
| `app/case-studies/case-study-03/page.tsx:13` | (same) | (same) |
| `app/case-studies/case-study-03/page.tsx:19` | (same) | (same) |
| `app/case-studies/eternal-fitness/page.tsx:9` | Eternal Fitness: Full Site Build & AI Training Tool \| Decoded Ops | Eternal Fitness — Full Site Build & AI Training Tool: Decoded Ops |
| `app/case-studies/eternal-fitness/page.tsx:14` | (same) | (same) |
| `app/case-studies/eternal-fitness/page.tsx:20` | (same) | (same) |
| `app/problems/erp-implementation-failure/page.tsx:9` | ERP Implementation Failure: Why Decorated Goods Projects Fail \| Decoded Ops | ERP Implementation Failure — Why Decorated Goods Projects Fail: Decoded Ops |
| `app/problems/erp-implementation-failure/page.tsx:13` | (same) | (same) |
| `app/problems/erp-implementation-failure/page.tsx:20` | (same) | (same) |
| `app/resources/artwork-approval-playbook/page.tsx:20` | Artwork Approval Playbook: Brief to Sign-Off \| Decoded Ops | Artwork Approval Playbook — Brief to Sign-Off: Decoded Ops |
| `app/resources/artwork-approval-playbook/page.tsx:25` | (same) | (same) |
| `app/resources/artwork-approval-playbook/page.tsx:31` | (same) | (same) |
| `app/resources/decoded-method/page.tsx:22` | The Decoded Method: A Simple Way to Document How Your Business Runs \| Decoded Ops | The Decoded Method — A Simple Way to Document How Your Business Runs: Decoded Ops |
| `app/resources/decoded-method/page.tsx:27` | (same) | (same) |
| `app/resources/decoded-method/page.tsx:33` | (same) | (same) |

## Regex update

`app/blog/[slug]/page.tsx:44` — the strip regex now handles both separators:
```
/ \| Decoded Ops$|: Decoded Ops$/
```
This ensures existing hub-sourced SEO titles (which may still use `|`) strip cleanly alongside the new `:` convention.

## Verify output

### Remaining `| Decoded Ops` (should be regex + exceptions only)

```
app/blog/[slug]/page.tsx:44: const headline = (item.seo?.title || item.title || '').replace(/ \| Decoded Ops$|: Decoded Ops$/, '');
app/case-studies/case-study-01/page.tsx:8: title: 'Case study 01: Khaos Control ERP + Custom App | Decoded Ops',
app/case-studies/case-study-01/page.tsx:13: title: 'Case study 01: Khaos Control ERP + Custom App | Decoded Ops',
app/case-studies/case-study-01/page.tsx:19: title: 'Case study 01: Khaos Control ERP + Custom App | Decoded Ops',
app/case-studies/case-study-02/page.tsx:8: title: 'Case study 02: Clarity Audit to Stock Control Build | Decoded Ops',
app/case-studies/case-study-02/page.tsx:13: title: 'Case study 02: Clarity Audit to Stock Control Build | Decoded Ops',
app/case-studies/case-study-02/page.tsx:19: title: 'Case study 02: Clarity Audit to Stock Control Build | Decoded Ops',
app/case-studies/case-study-03/page.tsx:8: title: 'Case study 03: B2B Portal & ERP Evaluation | Decoded Ops',
app/case-studies/case-study-03/page.tsx:13: title: 'Case study 03: B2B Portal & ERP Evaluation | Decoded Ops',
app/case-studies/case-study-03/page.tsx:19: title: 'Case study 03: B2B Portal & ERP Evaluation | Decoded Ops',
app/case-studies/eternal-fitness/page.tsx:9: title: 'Eternal Fitness: Full Site Build & AI Training Tool | Decoded Ops',
app/case-studies/eternal-fitness/page.tsx:14: title: 'Eternal Fitness: Full Site Build & AI Training Tool | Decoded Ops',
app/case-studies/eternal-fitness/page.tsx:20: title: 'Eternal Fitness: Full Site Build & AI Training Tool | Decoded Ops',
app/problems/erp-implementation-failure/page.tsx:9: title: 'ERP Implementation Failure: Why Decorated Goods Projects Fail | Decoded Ops',
app/problems/erp-implementation-failure/page.tsx:13: title: 'ERP Implementation Failure: Why Decorated Goods Projects Fail | Decoded Ops',
app/problems/erp-implementation-failure/page.tsx:20: title: 'ERP Implementation Failure: Why Decorated Goods Projects Fail | Decoded Ops',
app/resources/artwork-approval-playbook/page.tsx:20: title: 'Artwork Approval Playbook: Brief to Sign-Off | Decoded Ops',
app/resources/artwork-approval-playbook/page.tsx:25: title: 'Artwork Approval Playbook: Brief to Sign-Off | Decoded Ops',
app/resources/artwork-approval-playbook/page.tsx:31: title: 'Artwork Approval Playbook: Brief to Sign-Off | Decoded Ops',
app/resources/decoded-method/page.tsx:22: title: 'The Decoded Method: A Simple Way to Document How Your Business Runs | Decoded Ops',
app/resources/decoded-method/page.tsx:27: title: 'The Decoded Method: A Simple Way to Document How Your Business Runs | Decoded Ops',
app/resources/decoded-method/page.tsx:33: title: 'The Decoded Method: A Simple Way to Document How Your Business Runs | Decoded Ops',
```

### `: Decoded Ops` count

```
205 occurrences
```

### tsc --noEmit

```
npx tsc --noEmit
> To get access to the TypeScript compiler, tsc, from the command line either:
> - Use npm install typescript to first install TypeScript

No node_modules in this worktree. tsc unavailable (expected per CLAUDE.md).
```
