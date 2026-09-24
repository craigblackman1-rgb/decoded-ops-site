# Fix pass 2: CR-WEB-048 (same worktree, same rules: copy only, no dev server/build/DB/push)

1. app/case-studies/case-study-01/page.tsx, DO-ART-205 AFTER column: the <text> at y="472" currently duplicates the y="542" line. Change ONLY the y="472" line's text to: 77% of stock records now have a bin location
   Leave y="542" as "Data app (now the ERP)".
2. app/case-studies/case-study-02/page.tsx, DO-ART-206 AFTER column: the y="402" line "27,778 supplier products (236,056 sizes and colours) in one place" overflows the 650px box. Split it into two tspans exactly like the existing y="542" block does (x="890", second tspan dy="26"): "27,778 supplier products" / "(236,056 sizes and colours) in one place". Do not change any words.
Then npx tsc --noEmit, one commit "fix(case-studies): plate line fixes (CR-WEB-048)". Report file:line.
