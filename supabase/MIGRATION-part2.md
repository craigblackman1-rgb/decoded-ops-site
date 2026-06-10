# Migration Part 2: client_documents (rows 1-2)

```sql
-- Document 1: Discovery Call Notes - Scotshirts, 30 May 2026
INSERT INTO client_documents (id, client_id, company_id, doc_type, doc_number, title, description, html_content, published, created_at, updated_at, access_token) VALUES ('abf44c27-9e01-45f1-92af-d8bf26ad5b5e', 'scotshirts', 19, 'report', 'DO-R-001', 'Discovery Call Notes - Scotshirts, 30 May 2026', 'Notes from the initial discovery call with Louise. Business overview, problems identified, and what was agreed.', '<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ScotShirts — Discovery Notes | Decoded Ops</title>
<meta name="description" content="Scotshirts discovery call notes — key observations, needs assessment, and recommended direction. Prepared by Decoded Ops.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
:root {
  --prussian: #023047;
  --cerulean: #219EBC;
  --sky:      #8ECAE6;
  --amber:    #FFB703;
  --orange:   #FB8500;
  --offwhite: #F8F9FA;
  --bg:       var(--offwhite);
  --fg:       var(--prussian);
  --muted:    rgba(2,48,71,0.7);
  --border:   rgba(142,202,230,0.4);
  --border-soft: rgba(2,48,71,0.1);
  --font-display: "Outfit", ui-sans-serif, system-ui, -apple-system, sans-serif;
  --font-body:    "DM Sans", ui-sans-serif, system-ui, -apple-system, sans-serif;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { font-size: 16px; scroll-behavior: smooth; }

body {
  background: var(--bg);
  color: var(--fg);
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img { max-width: 100%; display: block; }
a { color: var(--cerulean); text-decoration: underline; text-underline-offset: 2px; transition: color 200ms; }
a:hover { color: var(--prussian); }

h1, h2, h3, h4 { font-family: var(--font-display); color: var(--fg); margin: 0; }
h1 { font-size: clamp(2.25rem, 5vw, 3rem); font-weight: 700; line-height: 1.1; letter-spacing: -0.02em; }
h2 { font-size: clamp(1.5rem, 3.5vw, 2rem); font-weight: 600; line-height: 1.25; }
h3 { font-size: clamp(1.25rem, 2.5vw, 1.5rem); font-weight: 500; line-height: 1.25; }
p  { margin: 0 0 1rem; color: var(--muted); }
p:last-child { margin-bottom: 0; }

.do-eyebrow {
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 0.25rem 0.75rem; border-radius: 9999px;
  background: rgba(33,158,188,0.1); border: 1px solid rgba(33,158,188,0.2);
  font-family: var(--font-body); font-size: 0.75rem; font-weight: 600;
  letter-spacing: 0.1em; text-transform: uppercase; color: var(--cerulean);
  margin-bottom: 1rem;
}

.do-container { max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; }
@media (min-width: 1024px) { .do-container { padding: 0 2rem; } }

/* Header */
.site-header {
  position: sticky; top: 0; z-index: 50;
  height: 4.5rem;
  background: rgba(248,249,250,0.95);
  backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(142,202,230,0.3);
  display: flex; align-items: center;
}
.site-header .do-container {
  width: 100%; display: flex; align-items: center; justify-content: space-between;
}
.logotype {
  font-family: var(--font-display); font-weight: 700; font-size: 1.25rem;
  letter-spacing: -0.02em; color: var(--prussian); text-decoration: none;
}
.logotype span { color: var(--cerulean); }
.header-meta { font-size: 0.875rem; color: var(--muted); }

/* Hero */
.hero { padding: 8rem 0 3rem; text-align: center; position: relative; overflow: hidden; }
.hero::before {
  content: ''''; position: absolute; inset: 0;
  background: radial-gradient(ellipse at 50% 0%, rgba(33,158,188,0.08) 0%, transparent 70%);
  pointer-events: none;
}
.hero h1 { margin-bottom: 0.75rem; }
.hero .subtitle { font-size: 1.125rem; color: var(--muted); max-width: 36rem; margin: 0 auto; }

.meta-strip {
  display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem 1.5rem;
  margin-top: 1.5rem; font-size: 0.875rem; color: var(--muted);
}
.meta-strip span { display: inline-flex; align-items: center; gap: 0.375rem; }
.meta-strip .label { color: var(--fg); font-weight: 600; }
.meta-strip .status {
  display: inline-block; padding: 0.125rem 0.625rem; border-radius: 9999px;
  font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;
  background: rgba(33,158,188,0.12); color: var(--cerulean);
}

/* Content card */
.content-card {
  background: #fff; border: 1px solid var(--border); border-radius: 1rem;
  padding: 2.5rem; margin-bottom: 1.5rem;
}
@media (min-width: 768px) { .content-card { padding: 3rem; } }

.content-card h2 {
  margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border);
  position: relative;
}
.content-card h2::after {
  content: ''''; position: absolute; bottom: -1px; left: 0;
  width: 3rem; height: 2px; background: var(--cerulean);
}
.content-card h3 { margin: 1.5rem 0 0.75rem; color: var(--fg); }
.content-card p, .content-card li { color: var(--muted); }
.content-card ul, .content-card ol { padding-left: 1.5rem; margin-bottom: 1rem; }
.content-card li { margin-bottom: 0.5rem; }
.content-card li:last-child { margin-bottom: 0; }
.content-card strong { color: var(--fg); }
.content-card hr { margin: 2rem 0; border: none; border-top: 1px solid var(--border); }

/* Problem cards */
.problem-grid { display: grid; gap: 1rem; }
@media (min-width: 768px) { .problem-grid { grid-template-columns: repeat(2, 1fr); } }

.problem-card {
  background: var(--offwhite); border: 1px solid var(--border); border-radius: 1rem;
  padding: 1.5rem; transition: border-color 300ms, box-shadow 300ms;
}
.problem-card:hover {
  border-color: rgba(33,158,188,0.4);
  box-shadow: 0 4px 8px -2px rgba(2,48,71,0.08), 0 2px 4px -2px rgba(2,48,71,0.04);
}
.problem-card .num {
  display: inline-flex; align-items: center; justify-content: center;
  width: 2rem; height: 2rem; border-radius: 9999px;
  background: rgba(33,158,188,0.12); color: var(--cerulean);
  font-family: var(--font-display); font-weight: 700; font-size: 0.875rem;
  margin-bottom: 0.75rem;
}
.problem-card h4 { font-size: 1.125rem; margin-bottom: 0.5rem; }
.problem-card p { font-size: 0.9375rem; margin-bottom: 0; }

/* Needs list */
.needs-list { counter-reset: need; list-style: none; padding-left: 0 !important; }
.needs-list li {
  counter-increment: need; position: relative;
  padding: 1rem 1rem 1rem 3.5rem; background: var(--offwhite);
  border-radius: 0.75rem; margin-bottom: 0.75rem; border: 1px solid var(--border);
  transition: border-color 300ms;
}
.needs-list li:hover { border-color: rgba(33,158,188,0.4); }
.needs-list li::before {
  content: counter(need); position: absolute; left: 0.75rem; top: 50%;
  transform: translateY(-50%); width: 2rem; height: 2rem;
  display: flex; align-items: center; justify-content: center;
  border-radius: 9999px; background: var(--prussian); color: var(--offwhite);
  font-family: var(--font-display); font-weight: 700; font-size: 0.875rem;
}

/* Checklist */
.checklist { list-style: none; padding-left: 0 !important; }
.checklist li {
  display: flex; align-items: flex-start; gap: 0.75rem;
  padding: 0.75rem 0; border-bottom: 1px solid var(--border-soft);
}
.checklist li:last-child { border-bottom: none; }
.checklist .check {
  flex-shrink: 0; width: 1.25rem; height: 1.25rem; margin-top: 0.125rem;
  border-radius: 9999px; display: flex; align-items: center; justify-content: center;
  font-size: 0.75rem;
}
.checklist .check--done { background: rgba(22,163,74,0.12); color: #16A34A; }
.checklist .check--todo { background: rgba(2,48,71,0.06); color: var(--muted); }

/* Context banner */
.context-banner {
  background: var(--prussian); color: var(--offwhite); border-radius: 1rem;
  padding: 2rem 2.5rem; margin-bottom: 1.5rem;
}
@media (min-width: 768px) { .context-banner { padding: 2.5rem 3rem; } }
.context-banner h2 { color: var(--offwhite); border-bottom-color: rgba(248,249,250,0.15); }
.context-banner h2::after { background: var(--amber); }
.context-banner p { color: var(--sky); }
.context-banner strong { color: var(--offwhite); }
.context-banner .note {
  margin-top: 1rem; padding-top: 1rem; border-top: 1px solid rgba(248,249,250,0.1);
  font-size: 0.875rem; color: var(--sky); font-style: italic;
}

/* Footer */
.site-footer {
  padding: 3rem 0; border-top: 1px solid var(--border);
  text-align: center; font-size: 0.875rem; color: var(--muted);
}
.site-footer .logotype { display: inline-block; margin-bottom: 0.5rem; }
.site-footer p { font-size: 0.875rem; margin-bottom: 0; }

@media (max-width: 768px) {
  .content-card { padding: 1.5rem; }
  .header-meta { display: none; }
}
</style>
</head>
<body>

<header class="site-header">
  <div class="do-container">
    <a href="https://decodedops.co.uk" class="logotype">Decoded<span>Ops</span></a>
    <div class="header-meta">Discovery Notes — Reference Only</div>
  </div>
</header>

<section class="hero">
  <div class="do-container">
    <span class="do-eyebrow">Discovery Call Notes</span>
    <h1>ScotShirts</h1>
    <p class="subtitle">Garment decoration business, Edinburgh. Key notes from the discovery call — reference only. A formal proposal will follow from these findings.</p>
    <div class="meta-strip">
      <span><span class="label">Contact:</span> Louise</span>
      <span><span class="label">Business:</span> Scotshirts · Edinburgh</span>
      <span><span class="label">Turnover:</span> £540,000</span>
      <span><span class="status">Discovery complete</span></span>
    </div>
  </div>
</section>

<main>
<div class="do-container" style="padding-bottom: 5rem;">

  <!-- Context Banner -->
  <div class="context-banner">
    <h2>About these notes</h2>
    <p>These are key observations and findings captured during the discovery call with Louise at Scotshirts. They are <strong>reference notes only</strong> — not a proposal, not a scope of work, and not a commitment to deliver. A formal proposal will be built from these findings and sent separately.</p>
    <p class="note">Prepared by Craig Blackman, Decoded Ops · For discussion purposes only.</p>
  </div>

  <!-- The Business -->
  <div class="content-card">
    <h2>The business</h2>
    <p>Scotshirts is a garment decoration business based in Edinburgh, in operation for 43 years. Louise took over from her parents three years ago.</p>

    <h3>Services</h3>
    <p>Screen print (6-station manual + automatic), heat seal (multiple machines), DTF, embroidery.</p>

    <h3>Team</h3>
    <ul>
      <li><strong>Vicky</strong> — Office manager, 16–18 years with the business. The production schedule and most operational knowledge lives in her head.</li>
      <li><strong>Emily</strong> — Day-to-day implementation.</li>
      <li><strong>Jamie</strong> — Shortest tenure at 3 years.</li>
      <li><strong>Louise</strong> — Goes in 2–3 days per week. Ideas person, not an implementer. Relies on Vicky and Emily to execute.</li>
    </ul>

    <h3>Louise''s background</h3>
    <p>Marketing and branding. Grew up in this industry. Knows the technical side deeply. Has three rugby clubs approaching for teamwear. Strong leavers days niche (Ultimate Leavers Hoodies).</p>

    <hr>

    <h3>Three websites</h3>
    <ol>
      <li><strong>Scotshirts</strong> (scotshirts.com/) — main business</li>
      <li><strong>HoodieTee</strong> (hoodietee.com) — described as "horrendous," needs a redo</li>
      <li><strong>Ultimate Leavers Hoodies</strong> (ultimateleavershoodies.com) — leavers days specific</li>
    </ol>
    <p>All three are enquiry-driven, not e-commerce. Louise is explicit: she does <strong>not</strong> want e-commerce on these sites. Clients — charities, schools, clubs, events — enquire, ScotShirts quotes and produces. The aim is one operational system behind all three brands.</p>
  </div>

  <!-- Current Problems -->
  <div class="content-card">
    <h2>Current problems</h2>
    <div class="problem-grid">
      <div class="problem-card">
        <div class="num">1</div>
        <h4>Everything is on paper</h4>
        <p>Orders written by hand in an order book. No digital order management. No visibility unless you walk to the order book.</p>
      </div>
      <div class="problem-card">
        <div class="num">2</div>
        <h4>Production schedule is in Vicky''s head</h4>
        <p>No system. Vicky manages it. If Vicky is off, nobody knows what to produce. A3 sheets on the office wall are the current "system."</p>
      </div>
      <div class="problem-card">
        <div class="num">3</div>
        <h4>Manual supplier entry is wasting hours</h4>
        <p>AWD orders arrive as Excel/CSV. Vicky manually enters every SKU, colour, and size on the supplier website — one line at a time. AWD has 100–200 colour options per product. 10–15 orders per two days = significant admin hours burned for no reason.</p>
      </div>
      <div class="problem-card">
        <div class="num">4</div>
        <h4>No lead follow-up</h4>
        <p>Enquiries come in via the websites. Someone replies. Nobody tracks it. No CRM, no database. Louise knows that if she turns on paid advertising, the leads will flood in and fall straight through the gaps.</p>
      </div>
      <div class="problem-card">
        <div class="num">5</div>
        <h4>No standardised quoting</h4>
        <p>Pricing lives in people''s heads. Vicky and Emily quote from memory, not from a defined pricing matrix. No consistency. Hard to scale or hand off.</p>
      </div>
      <div class="problem-card">
        <div class="num">6</div>
        <h4>Xero just adopted</h4>
        <p>Recently migrated to Xero. Whatever operational system comes next needs to integrate with it.</p>
      </div>
    </div>
  </div>

  <!-- What Louise is NOT asking for -->
  <div class="content-card">
    <h2>What Louise is not asking for</h2>
    <ul>
      <li>E-commerce. She is clear on this.</li>
      <li>A consultant who hands her documentation and walks away. She needs someone who does it.</li>
      <li>A system that requires her to manage it. Vicky and Emily need to run it day-to-day without her.</li>
    </ul>
  </div>

  <!-- Needs -->
  <div class="content-card">
    <h2>Needs — in priority order</h2>
    <ol class="needs-list">
      <li><strong>Operational visibility</strong> — see what''s happening without being there.</li>
      <li><strong>Production scheduling</strong> — off A3 sheets, into a system.</li>
      <li><strong>Lead/enquiry management</strong> — track every enquiry from first contact to completed order.</li>
      <li><strong>Standardised quoting</strong> — pricing matrix that Vicky and Emily both work from.</li>
      <li><strong>Supplier feed automation</strong> — stop manually entering AWD orders.</li>
      <li><strong>Xero integration</strong> — connect whatever goes in.</li>
      <li><strong>Website consolidation</strong> — one system behind all three brands (lower urgency).</li>
    </ol>
  </div>

  <!-- What Craig can build -->
  <div class="content-card">
    <h2>Transferable elements from other engagements</h2>
    <p>Very similar profile to TackleBag. Craig is already building supplier feed automation, job sheet / production scheduling, and stock control for TackleBag. For Scotshirts, the transferable elements are:</p>
    <ul>
      <li>Supplier CSV import and automation (AWD → system)</li>
      <li>Production schedule / job sheet app</li>
      <li>Lead management (lightweight CRM/pipeline)</li>
    </ul>
    <p style="margin-top: 1rem; font-style: italic; font-size: 0.9375rem;">Note: DecoNetwork was discussed and both Craig and Louise agreed it is not suitable for Scotshirts'' needs.</p>
  </div>

  <!-- Recommended direction -->
  <div class="content-card">
    <h2>Recommended direction</h2>
    <p>Based on the discovery call, the recommended approach is to begin with a structured Discovery Day on-site in Edinburgh. This would cover:</p>
    <ul>
      <li>Walk every process end-to-end — from enquiry through to delivery</li>
      <li>Document current-state workflows and pain points in detail</li>
      <li>Produce a written assessment with issues register, requirements document, and prioritised roadmap</li>
      <li>Define the scope for any custom application build (production scheduling, supplier automation, lead management)</li>
    </ul>
    <p style="margin-top: 1rem;">The Discovery Day fee would be credited against any subsequent engagement if Scotshirts proceeds within 60 days. A formal proposal with pricing and scope will be sent separately.</p>
  </div>

  <!-- Open questions -->
<div class="content-card">
  <h2>Next steps</h2>
  <ul class="checklist">
    <li><span class="check check--todo">•</span> Louise to review the proposal</li>

    <li><span class="check check--todo">•</span> Agree on-site date and discuss travel/overnight logistics for Discovery Day</li>
    <li><span class="check check--todo">•</span> Confirm peak season constraints — leavers days run May/June</li>
    <li><span class="check check--done">✓</span> Turnover confirmed: £540,000 — Segment 1</li>
    <li><span class="check check--done">✓</span> Proposal sent via client portal (DO-Q-2026-004)</li>

  </ul>
</div>
</main>

<footer class="site-footer">
  <div class="do-container">
    <a href="https://decodedops.co.uk" class="logotype">Decoded<span>Ops</span></a>
    <p>Operations and technology consultancy for the garment decoration, print, embroidery, workwear, and promotional merchandise sector.</p>
  </div>
</footer>

</body>
</html>
', true, '2026-06-02T13:48:27.594907+00:00', '2026-06-03T10:31:07.935011+00:00', '3aae7850-375d-4f60-a16a-f4317b5a0011') ON CONFLICT DO NOTHING;

-- Document 2: ERP + App Onboarding Process
INSERT INTO client_documents (id, client_id, company_id, doc_type, doc_number, title, description, html_content, published, created_at, updated_at, access_token) VALUES ('9ae0d0ef-e40e-4472-9395-77e74efb742a', 'tacklebag', 5, 'report', 'DO-RPT-TACKLEBAG-001', 'ERP + App Onboarding Process', 'Complete onboarding workflow for TackleBag — from audit to go-live.', '
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Decoded Ops — TackleBag Onboarding & Workflow</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
:root {
  --pb: #023047;
  --ce: #219EBC;
  --sb: #8ECAE6;
  --am: #FFB703;
  --or: #FB8500;
  --ow: #F8F9FA;
  --display: ''Outfit'', system-ui, sans-serif;
  --body: ''DM Sans'', system-ui, -apple-system, sans-serif;
  --mono: ui-monospace, ''SFMono-Regular'', Menlo, Consolas, monospace;
}
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: var(--body);
  font-size: 16px;
  line-height: 1.55;
  color: var(--pb);
  background: var(--ow);
  -webkit-font-smoothing: antialiased;
}
.dotgrid {
  background-image: radial-gradient(circle at 2px 2px, rgba(33,158,188,0.12) 1.5px, transparent 1.5px);
  background-size: 28px 28px;
}
.header {
  position: sticky; top: 0; z-index: 100;
  background: rgba(248,249,250,0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(142,202,230,0.3);
}
.header__nav {
  max-width: 1280px; margin: 0 auto; padding: 0 32px;
  height: 72px; display: flex; align-items: center; justify-content: space-between;
}
.logo {
  font-family: var(--display); font-weight: 700; font-size: 22px; color: var(--pb);
  letter-spacing: -0.01em;
}
.logo span { color: var(--ce); }
.header__tag {
  font-family: var(--mono); font-size: 11px; color: var(--ce);
  letter-spacing: 0.08em; text-transform: uppercase;
  padding: 6px 14px; border-radius: 9999px;
  background: rgba(33,158,188,0.1);
}
.hero {
  background: var(--pb);
  color: var(--ow);
  padding: 80px 32px 64px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.hero::before {
  content: '''';
  position: absolute; inset: 0;
  background: radial-gradient(ellipse 60% 50% at 50% 40%, rgba(33,158,188,0.18), transparent);
  pointer-events: none;
}
.hero__eyebrow {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 6px 14px; border-radius: 9999px;
  background: rgba(33,158,188,0.2); border: 1px solid rgba(33,158,188,0.3);
  font-family: var(--body); font-weight: 600; font-size: 11px;
  color: var(--sb); letter-spacing: 0.12em; text-transform: uppercase;
  margin-bottom: 24px; position: relative;
}
.hero h1 {
  font-family: var(--display); font-weight: 800;
  font-size: clamp(32px, 5vw, 56px); line-height: 1.1; letter-spacing: -0.02em;
  color: var(--ow); margin: 0 0 16px; position: relative;
}
.hero h1 em { font-style: normal; color: var(--am); }
.hero__lede {
  font-size: 18px; line-height: 1.55; color: rgba(248,249,250,0.7);
  max-width: 640px; margin: 0 auto; position: relative;
}
.flow-bar {
  background: var(--pb);
  color: var(--ow);
  border-top: 1px solid rgba(248,249,250,0.08);
  padding: 40px 32px 48px;
}
.flow-bar__inner {
  max-width: 1100px; margin: 0 auto;
  display: flex; align-items: center; justify-content: center; gap: 0;
  flex-wrap: wrap;
}
.flow-node {
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  cursor: pointer; transition: transform 200ms;
  padding: 12px 16px; border-radius: 12px;
  min-width: 120px;
}
.flow-node:hover { transform: translateY(-2px); background: rgba(248,249,250,0.04); }
.flow-node.is-active { background: rgba(33,158,188,0.12); }
.flow-node__num {
  font-family: var(--display); font-weight: 800; font-size: 28px;
  color: var(--ce); line-height: 1;
}
.flow-node__label {
  font-family: var(--display); font-weight: 600; font-size: 12px;
  color: var(--ow); letter-spacing: 0.02em; text-align: center;
  white-space: nowrap;
}
.flow-node__sub {
  font-size: 10px; color: var(--sb); text-align: center;
}
.flow-arrow {
  color: var(--sb); font-size: 20px; opacity: 0.5;
  padding: 0 4px; flex-shrink: 0;
}
.main {
  max-width: 1100px; margin: 0 auto; padding: 64px 32px 120px;
}
.phase {
  margin-bottom: 32px;
  border: 1px solid rgba(142,202,230,0.4);
  border-radius: 16px;
  background: var(--ow);
  overflow: hidden;
  transition: border-color 300ms, box-shadow 300ms;
}
.phase:hover { border-color: rgba(33,158,188,0.4); box-shadow: 0 4px 12px -4px rgba(2,48,71,0.08); }
.phase.is-open { border-color: var(--ce); box-shadow: 0 8px 24px -8px rgba(33,158,188,0.15); }
.phase__header {
  display: flex; align-items: center; gap: 20px;
  padding: 24px 28px; cursor: pointer;
  transition: background 200ms;
}
.phase__header:hover { background: rgba(33,158,188,0.04); }
.phase__num {
  font-family: var(--display); font-weight: 800; font-size: 36px;
  color: var(--ce); line-height: 1; min-width: 60px; opacity: 0.9;
}
.phase__meta { flex: 1; }
.phase__title {
  font-family: var(--display); font-weight: 700; font-size: 20px;
  color: var(--pb); margin: 0 0 4px;
}
.phase__tagline {
  font-size: 14px; color: rgba(2,48,71,0.6); margin: 0;
}
.phase__chevron {
  width: 32px; height: 32px; border-radius: 8px;
  background: rgba(33,158,188,0.08);
  display: flex; align-items: center; justify-content: center;
  transition: transform 300ms, background 200ms;
  flex-shrink: 0;
}
.phase.is-open .phase__chevron { transform: rotate(180deg); background: rgba(33,158,188,0.15); }
.phase__chevron svg { width: 18px; height: 18px; color: var(--ce); }
.phase__body {
  max-height: 0; overflow: hidden;
  transition: max-height 400ms cubic-bezier(0.4, 0, 0.2, 1);
}
.phase.is-open .phase__body { max-height: 2000px; }
.phase__content {
  padding: 0 28px 28px;
  border-top: 1px solid rgba(142,202,230,0.3);
}
.phase__grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 24px;
  margin-top: 20px;
}
@media (max-width: 700px) { .phase__grid { grid-template-columns: 1fr; } }
.phase__card {
  padding: 20px; border-radius: 12px;
  background: rgba(33,158,188,0.04);
  border: 1px solid rgba(142,202,230,0.25);
}
.phase__card--dark {
  background: var(--pb);
  border-color: rgba(248,249,250,0.1);
  color: var(--ow);
}
.phase__card--dark .phase__card-title { color: var(--ow); }
.phase__card--dark .phase__card-text { color: var(--sb); }
.phase__card--dark li { color: rgba(248,249,250,0.8); }
.phase__card--dark li::before { color: var(--am); }
.phase__card-title {
  font-family: var(--display); font-weight: 700; font-size: 15px;
  color: var(--pb); margin: 0 0 12px;
}
.phase__card-text {
  font-size: 14px; color: rgba(2,48,71,0.7); margin: 0 0 12px;
}
.phase__card ul {
  list-style: none; padding: 0; margin: 0;
  display: flex; flex-direction: column; gap: 8px;
}
.phase__card li {
  font-size: 13.5px; color: rgba(2,48,71,0.75);
  padding-left: 20px; position: relative;
}
.phase__card li::before {
  content: '''';
  position: absolute; left: 0; top: 7px;
  width: 8px; height: 8px; border-radius: 2px;
  background: var(--ce); opacity: 0.6;
}
.phase__card--dark li::before { background: var(--am); opacity: 0.8; }
.streams {
  display: grid; grid-template-columns: 1fr 1fr; gap: 24px;
  margin-top: 20px; position: relative;
}
@media (max-width: 700px) { .streams { grid-template-columns: 1fr; } }
.stream {
  padding: 24px; border-radius: 14px;
  border: 1px solid rgba(142,202,230,0.3);
  background: var(--ow);
  position: relative;
}
.stream--a { border-top: 3px solid var(--ce); }
.stream--b { border-top: 3px solid var(--am); }
.stream__label {
  font-family: var(--mono); font-size: 10px; font-weight: 600;
  letter-spacing: 0.12em; text-transform: uppercase;
  margin-bottom: 12px;
}
.stream--a .stream__label { color: var(--ce); }
.stream--b .stream__label { color: var(--am); }
.stream__title {
  font-family: var(--display); font-weight: 700; font-size: 17px;
  color: var(--pb); margin: 0 0 8px;
}
.stream__desc {
  font-size: 13.5px; color: rgba(2,48,71,0.65); margin: 0 0 16px;
}
.stream ul {
  list-style: none; padding: 0; margin: 0;
  display: flex; flex-direction: column; gap: 6px;
}
.stream li {
  font-size: 13px; color: rgba(2,48,71,0.7);
  padding-left: 18px; position: relative;
}
.stream li::before {
  content: '''';
  position: absolute; left: 0; top: 6px;
  width: 6px; height: 6px; border-radius: 50%;
}
.stream--a li::before { background: var(--ce); }
.stream--b li::before { background: var(--am); }
.merge-indicator {
  display: flex; align-items: center; justify-content: center;
  gap: 12px; margin-top: 20px;
  padding: 16px; border-radius: 12px;
  background: rgba(2,48,71,0.03);
  border: 1px dashed rgba(142,202,230,0.4);
}
.merge-indicator__icon {
  width: 40px; height: 40px; border-radius: 10px;
  background: rgba(33,158,188,0.1);
  display: flex; align-items: center; justify-content: center;
}
.merge-indicator__icon svg { width: 20px; height: 20px; color: var(--ce); }
.merge-indicator__text {
  font-family: var(--display); font-weight: 600; font-size: 14px;
  color: var(--pb);
}
.merge-indicator__text span {
  display: block; font-family: var(--body); font-weight: 400;
  font-size: 12px; color: rgba(2,48,71,0.6); margin-top: 2px;
}
.deliverables {
  display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px;
}
.deliverable {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 6px 12px; border-radius: 9999px;
  font-size: 12px; font-weight: 500;
  background: rgba(33,158,188,0.08);
  color: var(--ce);
  border: 1px solid rgba(33,158,188,0.2);
}
.footer {
  background: var(--pb);
  color: var(--ow);
  padding: 40px 32px;
  text-align: center;
  border-top: 1px solid rgba(248,249,250,0.08);
}
.footer__logo {
  font-family: var(--display); font-weight: 700; font-size: 20px;
  color: var(--ow); margin-bottom: 8px;
}
.footer__logo span { color: var(--am); }
.footer__text {
  font-size: 13px; color: var(--sb); margin: 0;
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}
.phase { animation: fadeUp 400ms ease both; }
.phase:nth-child(2) { animation-delay: 60ms; }
.phase:nth-child(3) { animation-delay: 120ms; }
.phase:nth-child(4) { animation-delay: 180ms; }
.phase:nth-child(5) { animation-delay: 240ms; }
</style>
</head>
<body>

<header class="header">
  <nav class="header__nav">
    <div class="logo">Decoded<span>Ops</span></div>
    <div class="header__tag">ERP + App Implementation — TackleBag</div>
  </nav>
</header>

<section class="hero dotgrid">
  <div class="hero__eyebrow">Project Onboarding & Workflow</div>
  <h1>From audit to <em>go-live</em> — TackleBag''s journey</h1>
  <p class="hero__lede">Two parallel streams — app design and ERP process mapping — converge into a single phased delivery plan for TackleBag. Every step documented, every handoff explicit.</p>
</section>

<div class="flow-bar dotgrid">
  <div class="flow-bar__inner">
    <div class="flow-node is-active" data-phase="1">
      <div class="flow-node__num">01</div>
      <div class="flow-node__label">Onsite Audit</div>
      <div class="flow-node__sub">Discovery</div>
    </div>
    <div class="flow-arrow">→</div>
    <div class="flow-node" data-phase="2">
      <div class="flow-node__num">02</div>
      <div class="flow-node__label">Audit Report</div>
      <div class="flow-node__sub">Analysis</div>
    </div>
    <div class="flow-arrow">→</div>
    <div class="flow-node" data-phase="3">
      <div class="flow-node__num">03</div>
      <div class="flow-node__label">Dual Streams</div>
      <div class="flow-node__sub">Parallel work</div>
    </div>
    <div class="flow-arrow">→</div>
    <div class="flow-node" data-phase="4">
      <div class="flow-node__num">04</div>
      <div class="flow-node__label">Convergence</div>
      <div class="flow-node__sub">Merge</div>
    </div>
    <div class="flow-arrow">→</div>
    <div class="flow-node" data-phase="5">
      <div class="flow-node__num">05</div>
      <div class="flow-node__label">Phased Delivery</div>
      <div class="flow-node__sub">Go-live</div>
    </div>
  </div>
</div>

<main class="main">

  <div class="phase is-open" id="phase-1">
    <div class="phase__header" onclick="togglePhase(1)">
      <div class="phase__num">01</div>
      <div class="phase__meta">
        <h2 class="phase__title">Onsite Audit</h2>
        <p class="phase__tagline">Ground-truth discovery — people, processes, and systems</p>
      </div>
      <div class="phase__chevron">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
    </div>
    <div class="phase__body">
      <div class="phase__content">
        <p class="phase__card-text">An immersive onsite engagement to understand the current state — how the business actually operates, not how the org chart says it does. This is the foundation everything else builds on.</p>
        <div class="phase__grid">
          <div class="phase__card">
            <h3 class="phase__card-title">Activities</h3>
            <ul>
              <li>Stakeholder interviews across all departments</li>
              <li>Current-state process walkthroughs</li>
              <li>Existing system & data inventory</li>
              <li>Pain point and bottleneck mapping</li>
              <li>Infrastructure and integration assessment</li>
            </ul>
          </div>
          <div class="phase__card">
            <h3 class="phase__card-title">Who''s Involved</h3>
            <ul>
              <li>Department heads and power users</li>
              <li>IT / system administrators</li>
              <li>Operations and floor managers</li>
              <li>Decoded Ops lead consultant</li>
            </ul>
          </div>
        </div>
        <div class="deliverables">
          <span class="deliverable">Interview notes</span>
          <span class="deliverable">Process observations</span>
          <span class="deliverable">System inventory</span>
          <span class="deliverable">Pain point register</span>
        </div>
      </div>
    </div>
  </div>

  <div class="phase" id="phase-2">
    <div class="phase__header" onclick="togglePhase(2)">
      <div class="phase__num">02</div>
      <div class="phase__meta">
        <h2 class="phase__title">Audit Report</h2>
        <p class="phase__tagline">Findings, gap analysis, and prioritised recommendations</p>
      </div>
      <div class="phase__chevron">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
    </div>
    <div class="phase__body">
      <div class="phase__content">
        <p class="phase__card-text">A structured report that translates audit findings into actionable intelligence — what''s working, what''s broken, and what needs to change first.</p>
        <div class="phase__grid">
          <div class="phase__card">
            <h3 class="phase__card-title">Report Contents</h3>
            <ul>
              <li>Executive summary and key findings</li>
              <li>Gap analysis: current vs. target state</li>
              <li>Priority matrix (impact × effort)</li>
              <li>Risk register and mitigation strategies</li>
              <li>Recommended implementation approach</li>
            </ul>
          </div>
          <div class="phase__card phase__card--dark">
            <h3 class="phase__card-title">Decision Gate</h3>
            <p class="phase__card-text" style="color: var(--sb);">Before proceeding, stakeholders review and sign off on the report. This is the last point where scope can be adjusted without rework.</p>
            <ul>
              <li>Stakeholder review meeting</li>
              <li>Scope confirmation or adjustment</li>
              <li>Formal sign-off to proceed</li>
            </ul>
          </div>
        </div>
        <div class="deliverables">
          <span class="deliverable">Audit report (PDF)</span>
          <span class="deliverable">Gap analysis matrix</span>
          <span class="deliverable">Priority roadmap</span>
          <span class="deliverable">Sign-off document</span>
        </div>
      </div>
    </div>
  </div>

  <div class="phase" id="phase-3">
    <div class="phase__header" onclick="togglePhase(3)">
      <div class="phase__num">03</div>
      <div class="phase__meta">
        <h2 class="phase__title">Dual-Stream Planning</h2>
        <p class="phase__tagline">Two parallel workstreams — app scoping and ERP process mapping</p>
      </div>
      <div class="phase__chevron">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
    </div>
    <div class="phase__body">
      <div class="phase__content">
        <p class="phase__card-text">Two independent but coordinated streams run in parallel. Stream A defines the custom app; Stream B maps the ERP processes and integration points. Both feed into the convergence phase.</p>
        <div class="streams">
          <div class="stream stream--a">
            <div class="stream__label">Stream A</div>
            <h3 class="stream__title">App Scoping & Design</h3>
            <p class="stream__desc">Defining the custom application — what it does, who uses it, and how it behaves.</p>
            <ul>
              <li>User stories and role-based requirements</li>
              <li>Feature specification and prioritisation</li>
              <li>UX wireframes and interaction flows</li>
              <li>Technical architecture and stack decisions</li>
              <li>API contracts and data model design</li>
            </ul>
          </div>
          <div class="stream stream--b">
            <div class="stream__label">Stream B</div>
            <h3 class="stream__title">ERP Process Mapping</h3>
            <p class="stream__desc">Mapping existing ERP workflows and designing how the app integrates with them.</p>
            <ul>
              <li>Current ERP workflow documentation</li>
              <li>Integration touchpoint identification</li>
              <li>Data flow diagrams (app ↔ ERP)</li>
              <li>SOP updates and process redesign</li>
              <li>Master data and sync strategy</li>
            </ul>
          </div>
        </div>
        <div class="merge-indicator">
          <div class="merge-indicator__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="16" y2="12"/><line x1="8" y1="18" x2="16" y2="12"/><line x1="16" y1="12" x2="20" y2="12"/></svg>
          </div>
          <div class="merge-indicator__text">
            Both streams converge
            <span>Outputs merge into a unified project plan</span>
          </div>
        </div>
        <div class="deliverables">
          <span class="deliverable">App scope document</span>
          <span class="deliverable">UX wireframes</span>
          <span class="deliverable">Process maps</span>
          <span class="deliverable">Data flow diagrams</span>
          <span class="deliverable">Integration spec</span>
        </div>
      </div>
    </div>
  </div>

  <div class="phase" id="phase-4">
    <div class="phase__header" onclick="togglePhase(4)">
      <div class="phase__num">04</div>
      <div class="phase__meta">
        <h2 class="phase__title">Convergence</h2>
        <p class="phase__tagline">Streams merge into a single project plan with timeline and resources</p>
      </div>
      <div class="phase__chevron">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
    </div>
    <div class="phase__body">
      <div class="phase__content">
        <p class="phase__card-text">The outputs from both streams are synthesised into a single, coherent project plan — dependencies resolved, resources allocated, and a phased timeline locked in.</p>
        <div class="phase__grid">
          <div class="phase__card">
            <h3 class="phase__card-title">Synthesis Activities</h3>
            <ul>
              <li>Dependency mapping between app and ERP work</li>
              <li>Resource allocation and team structuring</li>
              <li>Phased delivery timeline with milestones</li>
              <li>Risk register update and contingency planning</li>
              <li>Budget confirmation and procurement</li>
            </ul>
          </div>
          <div class="phase__card phase__card--dark">
            <h3 class="phase__card-title">Project Plan Outputs</h3>
            <ul>
              <li>Master project plan (Gantt / timeline)</li>
              <li>Sprint-by-sprint delivery schedule</li>
              <li>RACI matrix and team assignments</li>
              <li>Communication and reporting cadence</li>
              <li>Change control process</li>
            </ul>
          </div>
        </div>
        <div class="deliverables">
          <span class="deliverable">Master project plan</span>
          <span class="deliverable">Delivery timeline</span>
          <span class="deliverable">Resource plan</span>
          <span class="deliverable">Risk register</span>
          <span class="deliverable">RACI matrix</span>
        </div>
      </div>
    </div>
  </div>

  <div class="phase" id="phase-5">
    <div class="phase__header" onclick="togglePhase(5)">
      <div class="phase__num">05</div>
      <div class="phase__meta">
        <h2 class="phase__title">Phased Delivery</h2>
        <p class="phase__tagline">Sprint-based rollout with milestone gates, UAT, and go-live</p>
      </div>
      <div class="phase__chevron">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
    </div>
    <div class="phase__body">
      <div class="phase__content">
        <p class="phase__card-text">The plan executes in phased sprints — each phase delivers working functionality, gets validated, and builds toward full go-live. No big-bang releases.</p>
        <div class="phase__grid">
          <div class="phase__card">
            <h3 class="phase__card-title">Delivery Phases</h3>
            <ul>
              <li><strong>Phase 1:</strong> Core ERP configuration and data migration</li>
              <li><strong>Phase 2:</strong> App MVP — essential features and integrations</li>
              <li><strong>Phase 3:</strong> Extended features, advanced workflows</li>
              <li><strong>Phase 4:</strong> UAT, training, and go-live preparation</li>
              <li><strong>Phase 5:</strong> Go-live and hypercare support</li>
            </ul>
          </div>
          <div class="phase__card phase__card--dark">
            <h3 class="phase__card-title">Each Phase Includes</h3>
            <ul>
              <li>Sprint planning and kick-off</li>
              <li>Weekly progress demos</li>
              <li>Milestone gate review</li>
              <li>Documentation updates</li>
              <li>Stakeholder sign-off</li>
            </ul>
          </div>
        </div>
        <div class="deliverables">
          <span class="deliverable">Working software increments</span>
          <span class="deliverable">Sprint reports</span>
          <span class="deliverable">UAT sign-off</span>
          <span class="deliverable">Training materials</span>
          <span class="deliverable">Go-live checklist</span>
          <span class="deliverable">Hypercare plan</span>
        </div>
      </div>
    </div>
  </div>

</main>

<footer class="footer">
  <div class="footer__logo">Decoded<span>Ops</span></div>
  <p class="footer__text">ERP implementation and app design — documented, deliberate, delivered.</p>
</footer>

<script>
function togglePhase(n) {
  const el = document.getElementById(''phase-'' + n);
  const wasOpen = el.classList.contains(''is-open'');
  document.querySelectorAll(''.phase'').forEach(p => p.classList.remove(''is-open''));
  document.querySelectorAll(''.flow-node'').forEach(f => f.classList.remove(''is-active''));
  if (!wasOpen) {
    el.classList.add(''is-open'');
    document.querySelector(''.flow-node[data-phase="'' + n + ''"]'').classList.add(''is-active'');
  }
}
document.querySelectorAll(''.flow-node'').forEach(node => {
  node.addEventListener(''click'', () => {
    const phase = node.getAttribute(''data-phase'');
    togglePhase(parseInt(phase));
    document.getElementById(''phase-'' + phase).scrollIntoView({ behavior: ''smooth'', block: ''start'' });
  });
});
</script>
</body>
</html>
', true, '2026-06-02T13:45:49.235103+00:00', '2026-06-08T15:30:10.178484+00:00', '29e7e11e-6e25-436d-b999-77a8b9504f8c') ON CONFLICT DO NOTHING;

```
