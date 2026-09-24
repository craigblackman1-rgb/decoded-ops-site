# Lane brief: CR-WEB-050 site-wide figures + Khaos removal (WO-INF-069 u3)

Worktree: this directory, branch cr-web-site-figures. Commit here only. Copy-only change: no layout, component, CSS or structure changes; edit text inside existing elements.

## Facts (23 Sep 2026, Craig-approved; use EXACTLY these numbers)
- 317,812 products brought in from supplier feeds
- 154,518 matched to a supplier automatically
- 40 active suppliers feeding in
- 3,844 Amazon listings re-optimised ahead of a title-format deadline
- (teamwear client) 17 supplier feeds automated

## Rules
- Remove EVERY "Khaos" / "Khaos Control" from the files below. Never name any other ERP/platform vendor instead. Where it named an ERP generically, say "your ERP" / "an existing ERP" / "the ERP".
- Remove 164,752 / 127,135 / 11,064 / "77%" (as a match rate) / "nine supplier feeds" / "9 supplier feeds".
- Do NOT show any match percentage anywhere (no 49%, no 77%).
- Don't add client names where the page doesn't already name one. Don't touch app/case-studies/** or app/clients/**.
- UK English, no em dashes in text you write, keep sentences short and plain.

## Edits (file:line from origin/main; find the text, lines may shift)
1. app/apps/commerce/page.tsx
   - :42 FAQ question -> 'Does it integrate with ERP systems?'
   - :43 answer -> 'ERP integration is part of the Extended tier. A full migration off an existing platform is scoped and quoted separately.' (keep any remaining original sentences after that point unchanged if they don't mention Khaos)
   - :135 "ERP integration (Khaos Control sync and similar)" -> "ERP integration"
   - :232 replace "into Khaos Control" with "into your ERP" (read the whole sentence; keep it grammatical)
2. app/apps/data-app/page.tsx
   - :131 SVG label "Khaos Control · ..." -> drop the "Khaos Control · " item, keep the rest of the list
   - stat tiles :208/:212/:216: 164,752 -> 317,812 (label: "products brought in from supplier feeds"); 77% -> 154,518 (label: "matched to a supplier automatically"); 11,064 -> 40 (label: "active suppliers feeding in"). Replace their labels accordingly.
3. app/apps/page.tsx
   - :69 "...into Khaos Control is the worked example." -> rewrite the sentence so the worked example is "bringing a 317,812-product supplier catalogue into one clean, matched list" (read context; keep it one sentence)
   - :141 "Khaos Control · Symphony · yours · or the Data App itself" -> "Your ERP · your website · or the Data App itself"
4. app/page.tsx (homepage SVG stat plate ~:265-300): 164,752 -> 317,812; 127,135 -> 154,518; the 77% tile -> 40; 11,064 -> 3,844. Update each tile's label text to match: "products brought in", "matched automatically", "active suppliers", "Amazon listings re-optimised". Keep font sizes/positions; if a label is too long for its slot, shorten words only by choosing from these labels, don't move elements.
5. app/problems/data-scattered/page.tsx
   - :209 'Automated matching, 77%+ on first run' -> 'Automated matching against every supplier feed'
   - :211 '164,752 products → one version of the truth' -> '317,812 products → one version of the truth'
   - :228-229 paragraph -> 'In one deployment, 317,812 products came in from supplier feeds and 154,518 were matched to a supplier automatically, before anyone had to touch them.' followed by whatever sentence originally came after "Same principle," unchanged.
6. app/problems/erp-implementation-failure/page.tsx :159-176
   - '164,752' -> '317,812' (keep rest of line)
   - '127,135 matched automatically on the first run' -> '154,518 matched to a supplier automatically'
   - 'A 77% match rate, without anyone re-keying a row' -> '40 active suppliers feeding in, without anyone re-keying a row'
   - '11,064 matched and prepared for the Khaos Control catalogue within weeks' -> '3,844 Amazon listings re-optimised ahead of a title-format deadline'
7. app/sectors/garment-decoration/page.tsx :291 -> 'Project-leading an ERP change alongside a custom Data App for supplier data, Amazon FBA, and channel automation.'
8. app/transform/page.tsx
   - :9 description -> 'Transform is the programme that follows a Clarity Audit. The plan, executed. Measured results: 154,518 products matched automatically, 17 supplier feeds fully automated.'
   - :73 lede -> 'Case study 01: 317,812 products brought in and 154,518 matched to a supplier automatically.' (replace the whole sentence that starts "Case study 01:"; keep anything after it)
   - SVG :93 '164,752 rows, no consistent SKU' -> '317,812 rows, no consistent SKU'
   - SVG :117 -> '154,518 matched automatically'; :118 -> '40 active suppliers feeding in'; :119 -> 'Data app (now the ERP)'
   - :152 -> 'Case study 01: <strong>317,812</strong> brought in, <strong>154,518</strong> matched automatically'
   - :153 -> 'Case study 01: <strong>40</strong> active suppliers, <strong>3,844</strong> Amazon listings re-optimised'
   - also any other "nine supplier feeds"/"9 supplier feeds" in this file -> "17 supplier feeds".

## FORBIDDEN
No dev server, browser, `npm run build`, DB or .env access, push, or files outside those listed.

## DONE
- `npx tsc --noEmit` passes.
- `git grep -nE "Khaos|164,752|127,135|11,064|77%|nine supplier feeds|9 supplier feeds" -- app ':!app/clients' ':!app/case-studies'` returns nothing.
- One commit "fix(site): 23 Sep figures, remove Khaos (CR-WEB-050)". Report each numbered item with file:line.
