# Decoded Ops Website — Backlog

> Source of scope-of-record for outstanding site work. Hub project: `decoded-ops-website` (ab78f912-948a-4082-8c15-9e80d8f6a77a) — this session had no hub DB write access, so the task below is logged here only; add it to the hub board when picked up.
>
> **Autonomy legend:** `[AUTO]` may proceed unattended · `[GATE]` needs Craig sign-off before publishing · `[BLOCKED]` waiting on external input.

---

## P1 — Site-wide fabricated/uncited numbers audit (logged 2026-07-15, for 2026-07-16)

**Trigger:** homepage "Real example" teaser was found to have an invented case ("A print & embroidery business. £154,000. 18 months.") — no real client behind it, didn't match any of the four real case studies or the destination page it linked to. Fixed and deployed 2026-07-15 (commit `fd830fd`).

- [ ] `[AUTO]` Audit every page for numbers presented as fact with no real source behind them — not just homepage. Check especially:
  - `/about` — "ERP ROI Benchmarks" section (−23% operational costs, −22% admin costs, 91% better stock control, +24% on-time delivery, 58% ROI within 2 years), labelled "Real outcomes from the sector" with no citation. Confirm with Craig whether these are real client results, sourced industry benchmarks, or need removing/rewriting like the homepage fix.
  - `/pricing`, `/clarity`, `/deliver`, `/transform`, `/retained` — any "X% faster" / "£X saved" claims.
  - `/case-studies/*` — these should be real by construction (named clients), but worth confirming every number on them traces to something documented, not rounded/embellished.
  - `/sectors/*`, `/problems/*` — same sweep.
- [ ] `[AUTO]` For any number that turns out to be a genuine industry-wide stat (not a Craig/client result), research and cite a real external source (e.g. Panorama Consulting ERP report, published trade body figures for print/embroidery/decoration) rather than presenting it as unsourced fact. Bring back 3-5 candidate sourced stats per claim for Craig to pick from — don't just swap one invented number for another.
- [ ] `[GATE]` Any content change based on the above goes live only after Craig confirms which numbers are real client results (keep, cite the case study), real external stats (cite the source), or neither (rewrite as a pattern-based statement, no fabricated specifics — same fix pattern as the homepage).

**Why this matters:** hard rule is never invent numbers/client details in anything published under the Decoded Ops name — the whole value proposition is "plain English, no vendor agenda," which an invented stat directly undercuts if a prospect ever checks.
