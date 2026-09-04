# ERP positioning sweep — brief pack (CR-WEB-021 / wo-website-erp-positioning-sweep-2026-09-03)

Decided by Craig 2026-09-03: one site, disclosure as the story. The Data App grew out of client work, filling gaps nothing off the shelf covered, and is now a full system. The buy-first method does not change. The site stops claiming absolute neutrality and starts saying the more credible thing: my own software sits the same exam as everyone else's, in writing.

**Naming: the product stays "Data App" throughout this pass.** The Decoded Works rename is gated on the trademark search and happens later as a mechanical sweep.

## Global rules (every lane, every page)

- Voice per voice.md: first person singular, plain English, short sentences, answer first. Banned: em dashes, "not X but Y" constructions, staccato fragment stacks (3+ short sentences in a row), "Here's the thing", buzzwords, overclaims.
- "Being upfront" appears at most once per page.
- Keep every metric exactly as published (164,752 / 127,135 / 77% / 11,064 / nine feeds / 20-40 hrs). Never invent numbers or clients.
- The drafted passages below are canonical. Integrate them verbatim except where grammar around them forces a joining word. Everything not covered by a passage keeps its existing copy unless the brief for that page says otherwise.
- The neutrality position after this sweep, everywhere it comes up: *neutral between third-party vendors, open about my own product, everything scored against the same written brief.*

---

## R1 — the disclosure set

### 1. app/problems/buy-vs-build/page.tsx
The coverage test framing stays. The neutrality claim changes.
- REPLACE the passage containing "No vendor relationships. No platform I'm paid to prefer... I earn nothing from whichever you pick" (~L193-197) with:

> Being upfront about where I stand: I build software too. The Data App started life plugging gaps nothing on the market covered, and it has grown into a full system. So I am not a neutral bystander, and I will not pretend to be one. What I will do is put every option through the same coverage test, in writing, mine included. If an off-the-shelf platform covers what you need, that is what the report will say. A recommendation you can check against your own brief beats one you have to take on trust.

- Scan the rest of the page for any other absolute-neutrality wording and align it with the position above (smallest possible edits).

### 2. app/problems/wrong-erp-software/page.tsx
- Metadata "without the vendor bias" (~L10,14,21): change to "scored against a written brief" (adjust each string minimally to stay grammatical).
- The line "I write the independent vendor brief that makes sure the next ERP is chosen on fit" (~L192-193): replace with:

> I write the vendor brief from your operation, and every candidate gets scored against it. That includes software I have built myself, which is exactly why the brief is written down. Fit decides, and you can see the scoring.

### 3. app/problems/erp-implementation-failure/page.tsx
Lightest touch. "Independent oversight" here is about third-party implementation projects and stays. Add ONE sentence where the page introduces Craig's role (find the natural spot near "independent oversight", ~L43-58):

> And where the answer turns out to be software I build, the same rule applies: scope in writing before anything is signed.

### 4. app/resources/erp-selection-playbook/page.tsx
Keep the whole playbook as is. Add a short section titled "Where I stand" between the selection steps and the pitfalls (match the page's section pattern):

> One thing this playbook should say plainly: I build one of the systems in this market. The Data App grew out of Clarity Audits where the brief came back and nothing off the shelf covered it. That does not change a word of the process above. Write the brief, score every candidate against it, and treat mine with the same suspicion you would treat any vendor demo. If another system covers your brief, buy that one. The playbook only works if it works against me too.

---

## R2 — the product set

### 5. app/apps/data-app/page.tsx
The page keeps its structure (hero + plate + layers + stats + table + screens + CTA). The story changes from "a layer, never more" to "built for the gaps, grown into a system, runs both ways".
- Hero h1 (~L30): replace with **"The system I couldn't buy for my clients."**
- Hero paragraph: replace with:

> Every Clarity Audit ends in a written brief. For years the same jobs kept coming back with nothing on the market to cover them: supplier feeds, decoration data, blank-to-finished mapping. So I built the missing piece. Engagement by engagement it grew, and today it runs catalogue, orders, purchasing, stock, production and despatch end to end. It still plays both ways. Alongside the platform you already own, or as the system itself.

  (Note: "end to end" is on the banned list as a buzzword when decorative; here it is literal scope. If the lane judges it risky, use "from catalogue to despatch" instead.)
- H2 "Your platform stays. This sits alongside it." (~L58): replace with **"Keep your platform, or let this become it."** and adjust the following sentence minimally to introduce both modes.
- Plate DO-ART-105 title "A layer, not a rip-out" (~L65): retitle **"Starts as a layer. Grows as far as you need."** Keep the three-layer diagram; change the bottom layer label "The platform you already own" sub "Khaos Control · Symphony · whatever you run today" to "The platform you run today" sub "Khaos Control · Symphony · or this system, once it has earned it".
- Metadata/OG/Twitter descriptions: align with the new story (one sentence each, plain).

### 6. app/apps/page.tsx
- Fix the self-contradiction: plate DO-ART-104 "Nothing replaced. Each app plugs a specific gap alongside the platform you already run" (~L84-85): change the second sentence to "Each one started as a gap nothing off the shelf covered. The Data App has since grown into a full system in its own right." Keep "Three apps, one platform" title if it still reads true, otherwise "Three apps, one story".
- The CRM line (~L74-75) stays as is (already correct).
- L141 "Your platform ... Khaos Control · Symphony · yours": append "· or the Data App itself".

### 7. public/llms.txt
- Line 2 tagline "No jargon. No vendor agenda.": change to "No jargon. Every recommendation scored against a written brief, including my own software."
- L12 "product data apps": update the product description to say the Data App has grown into a full operations system (catalogue, orders, stock, production, despatch) built from client gaps; keep it to two plain sentences.

---

## T — touch-ups (10 files, smallest possible edits)

Align stray "layer/alongside-only" language with the new position. Do NOT restructure anything.
1. app/page.tsx: "Stock, bins and picking alongside Symphony" (~L403) stays (true, historical). No change unless another layer-only absolute appears; check DO-ART-902 sub text only.
2. app/transform/page.tsx: no structural change; check for absolute neutrality wording only.
3. app/pricing/page.tsx Systems section: in the Data App card sub, keep "Supplier feeds into one clean catalogue" (nav consistency). Add nothing.
4. components/Header.tsx: Data App sub stays this pass (nav renames wait for the naming decision).
5. components/Footer.tsx: no change expected; verify only.
6. app/sectors/schoolwear/page.tsx: "runs alongside the existing platform" (~L126): append ", or as the full system where nothing off the shelf fits".
7. app/sectors/garment-decoration/page.tsx: FAQ answer "An independent evaluation against a written brief is the only way to choose correctly" (~L55): change "independent evaluation" to "written brief and a scored evaluation".
8. app/tools/should-i-replace-erp/page.tsx: no change this pass (results route to Clarity Audit, which stays the front door).
9. app/case-studies/case-study-01/page.tsx: the "sitting alongside Khaos rather than replacing it" passage (~L186) stays untouched. It is historical fact and load-bearing.
10. app/case-studies/case-study-02/page.tsx: same, untouched (~L201).
For files marked "verify only"/"no change", grep them and report rather than editing.

---

## Verification (unit u4)
extract-copy.mjs voice-lint on touched lines; grep for surviving absolutes ("earn nothing", "no vendor agenda", "not a replacement", "vendor bias"); build; browser pass on buy-vs-build, data-app, playbook, apps index; staging push; Craig reviews before promotion (u5 GATE).
