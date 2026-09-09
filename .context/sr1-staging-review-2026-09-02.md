# DO-R-015 SR1 staging review, 2026-09-02

**Scope** wo-marketing-sales-consolidated-2026-08-20 unit u14. **Staging** https://staging.decodedops.co.uk at commit 458bbc4 (deploy 9wmf0lhdcjdmosdus3ngejji, finished 09:47 UTC). **Reviewer** Claude, in the Chrome session (staging sits behind Cloudflare Access; curl checks are meaningless there).

## What landed on staging today, in order

| Step | Commit | What |
|---|---|---|
| SR0 sync | 2e731c3 | origin/main merged into staging (20 commits: lead capture on the six tools, lead-alert email, CRM link fix, components token swap, Dockerfile npm ci fix, security bumps). 16 conflicts resolved staging-visuals-win, main-functional-kept. Build 160/160. |
| GF12 vocab | 0678c3e | 14 files, 78 strings: sector metadata rewrites, systems-dont-talk description, homepage description, body strings, digitisation to digitising, wrong-erp FAQ line, Hanicks Khaos overclaim on the case study and the data-app page. |
| GF1 resources | 19111cb | SOP template, ERP selection playbook, artwork approval playbook ported in staging's resource pattern; Decoded Method restored; index lists all seven; software-reviews retired with a permanent redirect. |
| GF12b sweep | 56420d8 | Remaining "pushed live to Khaos Control" claims removed (homepage SVG label now PREPARED, data-scattered, erp-implementation-failure, transform x2). |
| GF1b discovery | 458bbc4 | Four resource pages added to sitemap, llms.txt and the header menu. |

## Checks

| Check | Result |
|---|---|
| Homepage renders in the Open Design layout, hero copy intact, eyebrow "Operations & technology consultancy" kept per Craig | Pass (screenshot) |
| /resources index lists 7 cards incl. the 4 new pages | Pass |
| /resources/decoded-method renders in staging's resource pattern (Free playbook badge, download CTA, "7-page PDF. No email required.") | Pass (screenshot) |
| /resources/software-reviews redirects to /resources | Pass |
| /sectors/signs-graphics renders with the sector graphic and rewritten metadata | Pass (screenshot) |
| /case-studies/hanicks: "11,064" now reads "matched and prepared for the Khaos Control catalogue" | Pass (element text) |
| /tools/downtime-cost-calculator carries the lead capture form (name, email, company, submit) | Pass |
| Vocabulary greps on the branch: fractional CTO 0, software stack 0, impactful levers / operational drag 0, pushed live only on the TackleBag Symphony lines (factual) | Pass |
| llms.txt and sitemap list the four new resource pages | Pass after 458bbc4 |
| Build | Passed on every lane (160 to 163 pages) |

## Not checked, stated plainly

- Mobile accordion on the mega-menu (task 4dc03b70) was not exercised on a phone viewport.
- The Eternal Fitness case study "screenshots" element was not eyeballed.
- Design parity was checked by eye on four pages against the Open Design intent, not section-by-section against every mockup; the staging designs were never edited by any lane today (text and metadata only), so drift risk is the SR0 merge conflicts on the six tool pages and three components. Those resolutions kept staging's markup.

## Follow-ups already registered

- Second main to staging sync after the dispatcher's hex-tokens-core-v2 lane merges to main (dmtjtc1b29e).
- Promote staging to main (task 7f471b71, p1) is the only step after sign-off and is ASK FIRST per the WO.

## Sign-off

Craig: open https://staging.decodedops.co.uk, walk homepage, one sector, one case study, one tool, /resources and the four new pages. Sign off on the testing tab row for do-marketing-sales. Promotion to main follows your yes.
