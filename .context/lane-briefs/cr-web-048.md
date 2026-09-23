# Lane brief: CR-WEB-048 case studies copy (WO-INF-069 u1)

Worktree: this directory, branch cr-web-048-case-studies. Commit here only.

GOAL: put the signed-off copy in `.context/lane-briefs/CASE_STUDIES_COPY_2026-09-23.md` live on
- app/case-studies/case-study-01/page.tsx (Hanicks, now NAMED)
- app/case-studies/case-study-02/page.tsx (teamwear client, stays ANONYMOUS)
- their two cards in app/case-studies/page.tsx
Copy change only. No new components, no layout/styling changes, no new CSS classes. Reuse the existing markup and slot each piece of copy into the matching existing section (hero, intro, figures block, before/after plate, situation, what was done, progress, CTAs).

MUST
- Copy verbatim from the copy file. Do not paraphrase, embellish or add sentences. Where an existing section has no counterpart in the copy file, remove that section's old text rather than inventing new text; list any such sections in your report.
- Remove every "Khaos" reference (any case, any tense) from case-study-01, its card, page metadata/description/OG/JSON-LD, and the DO-ART-205 plate. If the DO-ART-205 diagram labels Khaos, relabel it "Data app (now the ERP)".
- DO-ART-206 (case-study-02 plate): text changes only per the Before/After lists.
- Remove the nine-brand list and "9 supplier feeds" from case-study-02 and its card. No supplier brand names on 02.
- None of these strings may remain in the three files: Khaos, 164,752, 127,135, 11,064, "9 supplier feeds", "put live", "selling through". Also no revenue/order/unit-sales figures.
- Update page <title>/meta description/structured data on both pages so they match the new copy (01 may name Hanicks; 02 must not name the client).
- UK English, no em dashes in new copy (use the copy file's punctuation exactly).
- Case study 03 (Cobra) and eternal-fitness pages: do not touch.

FORBIDDEN
- Do not run dev servers, browsers, or `npm run build`/`next build`. Do not access any database or .env files. Do not push. Do not touch files outside the three listed (plus a lane report).

DONE
- `npx tsc --noEmit` passes (run it; if node_modules missing, run `npm ci` first).
- `git grep -nE "Khaos|164,752|127,135|11,064|9 supplier feeds" -- app/case-studies` returns nothing.
- One commit: "feat(case-studies): 23 Sep copy for case studies 01+02 (CR-WEB-048)".
- Report: files changed, sections with no counterpart that you removed, grep output.
