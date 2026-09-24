# Lane notes: web-f-build-d17

## What was done

D17 artwork applied to all 17 problem pages (WO-INF-061 unit).

### Changes per page

| Page | Hero DO-ART | Inline DO-ART | Notes |
|------|-------------|---------------|-------|
| ai-paralysis | 960 | 718 | Custom JSX |
| bottleneck-growth | 961 | 718 | Custom JSX |
| buy-vs-build | 962 | 719 | Custom JSX |
| cant-scale-operations | 963 | 918 | ProblemPageDS + heroArt/inlineArt |
| data-scattered | 964 | 917 | Custom JSX |
| disaster-recovery | 965 | 718 | ProblemPageDS |
| ecommerce-not-connected | 966 | 719 | ProblemPageDS |
| erp-implementation-failure | 967 | 917 | Custom JSX; 9→17 supplier feeds fix |
| inventory-blind | 968 | 918 | Custom JSX |
| legacy-system | 969 | 719 | Custom JSX |
| manual-workarounds | 970 | 918 | ProblemPageDS |
| no-ops-owner | 971 | 718 | ProblemPageDS |
| ops-in-owners-head | 972 | 718 | Custom JSX |
| seasonal-peaks | 973 | 918 | Custom JSX; forty/two hundred rewritten |
| slow-processes | 974 | 718 | ProblemPageDS |
| spreadsheet-addiction | 975 | 917 | Custom JSX; copy fixes applied |
| systems-dont-talk | 976 | 918 | ProblemPageDS |
| wrong-erp-software | 978 | 719 | Custom JSX |

### Infrastructure

- Created `app/d17-problems.css` (471 lines) from the mockup source
- Updated `components/ProblemPageDS.tsx` with optional `heroArt` and `inlineArt` props for pages using the shared component
- All pages import `d17-global.css` and `d17-problems.css`, render `<D17Motion />`

### Copy fixes (CR-WEB-052)

- cant-scale-operations: removed £500k/£1.5m revenue references from FAQ and cause text
- erp-implementation-failure: 9 → 17 supplier feeds
- seasonal-peaks: "forty orders a day... two hundred" rewritten without specific numbers
- spreadsheet-addiction: "forty orders" → "dozens of orders"; "eight months" → "Months"; "Excel" → "a spreadsheet"

### Verification

- `npx tsc --noEmit`: clean, 0 errors
- `git grep` forbidden terms: 0 real hits (Shopify/WooCommerce are legitimate platform names in FAQ context; TackleBag is in a code comment only)
- `git grep craig-blackman`: 0 hits

### Not done

- `/problems/systems-dont-talk-video` was not created (404 is a separate item per the brief)
- D17 hero art images are already committed in the prior worktree checkout (`/images/d17/problems/`)
