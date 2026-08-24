# decoded-ops-website — Change Request Register

One door for changes (DO-SDLC-Pipeline-v1). A change that isn't a CR doesn't exist.
Format: CR-WEB-NNN · raised → approved → briefed → built → verified.

| CR | Date | Raised by | Change | Surface | Status |
|---|---|---|---|---|---|
| CR-WEB-001 | 2026-08-21 | Craig (chat) | Homepage hero copy reworked to lead with the Clarity Audit outcome (what you get, the penny drop, why buy) followed by the first-person insider paragraph; replaces the third-person category paragraph. Direction triggered by Dave Ray's newsletter articulation. | app/page.tsx hero (staging) | built |
| CR-WEB-002 | 2026-08-21 | Craig (chat) | Structured copy pass round 1: guarantee wording aligned to canonical report-based 3× refund on /clarity hero (removed non-canonical "first hour, day free" variant); /pricing Systems section restructured from four dense paragraphs to bold-lead + bullet list + tightened footnotes; problem-page template (all 18 pages) header fixes (symptoms/causes sections), generic filler lede replaced, duplicate hero booking link removed; /about repeated clause deduped. | app/clarity, app/pricing, components/ProblemPageDS.tsx, app/about (staging) | built |
| CR-WEB-003 | 2026-08-24 | Craig (chat) | Homepage hero copy made owner-first and explicit about what Craig does: h1 changed from "The penny drop moment" to "I find what's quietly costing you money"; lead reframed to first-person "I help owners of print, embroidery, workwear and promotional merchandise businesses fix the systems that are holding them back"; "which systems actually fit" corrected to "which software actually fits how you work". SheetIndexRail s1 label "Penny drop" → "What I do". | app/page.tsx hero, components/SheetIndexRail.tsx (staging) | built |

Notes:
- CR-WEB-001 diverges from the `homepage-v2.html` mockup copy (design-systems/decoded-marketing, Open Design export). Layout untouched, copy only. Mockup copy sync deferred — see registry deferred item under wo-marketing-sales-consolidated-2026-08-20.
