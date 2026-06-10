# Database Migration: Old Supabase → New Coolify Supabase

## Instructions

1. Open Coolify → `supabase-qkus7amnsc983yo1yqbcmk4o` → `supabase-db` → **Terminal**
2. The schema (tables, indexes, triggers, seed users) was already created in the previous step
3. Copy-paste the SQL below into the psql terminal to migrate the data

> **Note:** The `client_documents` rows contain large HTML content. If the terminal struggles, paste in chunks — `client_users` and `auth_audit_log` first, then `client_documents` one row at a time.

```sql

-- Table client_users: 5 rows
INSERT INTO client_users (id, email, password_hash, name, client_id, role, is_active, failed_attempts, locked_until, last_login, created_at, updated_at) VALUES ('97cd9e2d-5a3b-4ea3-a372-01cc8f57453a', 'louise@scotshirts.com', '$2b$10$CxyFpa1kvzErW2WlTwPeKOOcFBGsIAwRpO56zK7Mc3kUdFLuDiF3W', 'Louise', 'scotshirts', 'client', true, 0, NULL, '2026-06-03T14:27:03+00:00', '2026-06-03T10:57:54.452333+00:00', '2026-06-03T14:27:03.263461+00:00') ON CONFLICT DO NOTHING;
INSERT INTO client_users (id, email, password_hash, name, client_id, role, is_active, failed_attempts, locked_until, last_login, created_at, updated_at) VALUES ('5a4ecc92-c8cd-4376-8d24-6a48c9781ea9', 'craig@decodedops.co.uk', '$2b$10$uh8a/3GpO0bFdRmu1XNB0uUn1WI9G6X1EARz/ooKtAeYewiLy7c.q', 'Craig Blackman', 'admin', 'admin', true, 0, NULL, '2026-06-03T14:32:02.218+00:00', '2026-06-03T10:57:54.452333+00:00', '2026-06-03T14:32:02.316+00:00') ON CONFLICT DO NOTHING;
INSERT INTO client_users (id, email, password_hash, name, client_id, role, is_active, failed_attempts, locked_until, last_login, created_at, updated_at) VALUES ('30ebb67b-147a-4d9c-9f95-0577c8ecd126', 'tacklebag@decodedops.co.uk', '$2b$10$UKlbBFrr6yQGqkrIBVJdHOq4M/dHxP/eF7VPUIvv/audgPQ1A5RcK', 'TackleBag', 'tacklebag', 'client', true, 0, NULL, NULL, '2026-06-03T10:57:54.452333+00:00', '2026-06-08T15:13:56.136075+00:00') ON CONFLICT DO NOTHING;
INSERT INTO client_users (id, email, password_hash, name, client_id, role, is_active, failed_attempts, locked_until, last_login, created_at, updated_at) VALUES ('82f8667a-7193-4c2f-821a-9314d21311be', 'hanicks@decodedops.co.uk', '$2b$10$2536kXEUOeME.dvI61/8T.VQPVgOT3dai5pA18fd9ikAKF4bKF8pe', 'Hanicks Ltd', 'hanicks', 'client', true, 0, NULL, '2026-06-08T15:15:19.313+00:00', '2026-06-03T10:57:54.452333+00:00', '2026-06-08T15:15:19.409001+00:00') ON CONFLICT DO NOTHING;
INSERT INTO client_users (id, email, password_hash, name, client_id, role, is_active, failed_attempts, locked_until, last_login, created_at, updated_at) VALUES ('531473c3-3426-458b-94f4-a73a81daaa2d', 'cobra-workwear@decodedops.co.uk', '$2b$10$/HtmiKqiPtMdofR/D6r2UuH42JW/P0vHtYT5haz1989FBvu35f2FG', 'Cobra Workwear', 'cobra-workwear', 'client', true, 0, NULL, '2026-06-10T07:36:19.317+00:00', '2026-06-03T10:57:54.452333+00:00', '2026-06-10T07:36:19.583093+00:00') ON CONFLICT DO NOTHING;

-- Table auth_audit_log: 16 rows
INSERT INTO auth_audit_log (id, event_type, email, client_id, ip_address, user_agent, details, created_at) VALUES ('c4ccbc1a-cf13-4a92-bd48-b94f2cac409b', 'login_failed', 'louise@scotshirts.com', 'scotshirts', '172.71.178.173', NULL, '{"attempts":1}', '2026-06-03T10:58:05.895226+00:00') ON CONFLICT DO NOTHING;
INSERT INTO auth_audit_log (id, event_type, email, client_id, ip_address, user_agent, details, created_at) VALUES ('e6382926-de29-47cc-bb55-32cdb24be08e', 'login_success', 'louise@scotshirts.com', 'scotshirts', '172.71.241.85', NULL, '{}', '2026-06-03T10:59:18.070428+00:00') ON CONFLICT DO NOTHING;
INSERT INTO auth_audit_log (id, event_type, email, client_id, ip_address, user_agent, details, created_at) VALUES ('e256b93c-3c39-4bb6-a98d-96859049cc3e', 'login_failed', 'admin@decodedops.co.uk', NULL, '172.68.229.59', NULL, '{"reason":"user_not_found"}', '2026-06-03T14:21:38.248675+00:00') ON CONFLICT DO NOTHING;
INSERT INTO auth_audit_log (id, event_type, email, client_id, ip_address, user_agent, details, created_at) VALUES ('db8a40db-c58f-4910-91ab-578635b23c8f', 'login_failed', 'admin@decodedops.co.uk', NULL, '172.68.229.59', NULL, '{"reason":"user_not_found"}', '2026-06-03T14:21:45.383704+00:00') ON CONFLICT DO NOTHING;
INSERT INTO auth_audit_log (id, event_type, email, client_id, ip_address, user_agent, details, created_at) VALUES ('4703eae1-a027-484f-89af-9436bde2c0e6', 'login_failed', 'test@decodedops.co.uk', NULL, '172.68.229.59', NULL, '{"reason":"user_not_found"}', '2026-06-03T14:21:59.113154+00:00') ON CONFLICT DO NOTHING;
INSERT INTO auth_audit_log (id, event_type, email, client_id, ip_address, user_agent, details, created_at) VALUES ('0d2256f7-71b0-46d4-b709-bfbf009f6d35', 'login_failed', 'test@decodedops.co.uk', NULL, '172.68.229.59', NULL, '{"reason":"user_not_found"}', '2026-06-03T14:22:00.89888+00:00') ON CONFLICT DO NOTHING;
INSERT INTO auth_audit_log (id, event_type, email, client_id, ip_address, user_agent, details, created_at) VALUES ('91acd56f-358a-4bb5-a966-f79628405df0', 'login_success', 'louise@scotshirts.com', 'scotshirts', '172.69.224.145', NULL, '{}', '2026-06-03T14:27:03.423157+00:00') ON CONFLICT DO NOTHING;
INSERT INTO auth_audit_log (id, event_type, email, client_id, ip_address, user_agent, details, created_at) VALUES ('389043cd-7e5c-46d7-a0b7-6add716de8f5', 'login_failed', 'craig@decodedops.co.uk', 'admin', '172.69.195.45', NULL, '{"attempts":1}', '2026-06-03T14:31:32.960882+00:00') ON CONFLICT DO NOTHING;
INSERT INTO auth_audit_log (id, event_type, email, client_id, ip_address, user_agent, details, created_at) VALUES ('43ce92bd-8f81-4bc4-8dba-3ffebc49431b', 'login_failed', 'craig@decodedops.co.uk', 'admin', '172.69.195.45', NULL, '{"attempts":2}', '2026-06-03T14:31:44.642857+00:00') ON CONFLICT DO NOTHING;
INSERT INTO auth_audit_log (id, event_type, email, client_id, ip_address, user_agent, details, created_at) VALUES ('68d8bc27-35b3-4de6-b60e-d1124bdc6a9b', 'login_failed', 'craig@decodedops.co.uk', 'admin', '172.69.195.45', NULL, '{"attempts":3}', '2026-06-03T14:31:49.97603+00:00') ON CONFLICT DO NOTHING;
INSERT INTO auth_audit_log (id, event_type, email, client_id, ip_address, user_agent, details, created_at) VALUES ('439b837f-654d-4216-bcc1-17dc47031c24', 'login_failed', 'craig@decodedops.co.uk', 'admin', '172.69.195.45', NULL, '{"attempts":4}', '2026-06-03T14:31:58.146963+00:00') ON CONFLICT DO NOTHING;
INSERT INTO auth_audit_log (id, event_type, email, client_id, ip_address, user_agent, details, created_at) VALUES ('7fa018ed-7568-4500-be60-3fcff0f3a854', 'login_success', 'craig@decodedops.co.uk', 'admin', '172.69.195.45', NULL, '{}', '2026-06-03T14:32:02.444091+00:00') ON CONFLICT DO NOTHING;
INSERT INTO auth_audit_log (id, event_type, email, client_id, ip_address, user_agent, details, created_at) VALUES ('034b1064-3b34-4011-9332-256bf919aec5', 'login_success', 'hanicks@decodedops.co.uk', 'hanicks', '172.69.224.145', NULL, '{}', '2026-06-08T15:15:19.75933+00:00') ON CONFLICT DO NOTHING;
INSERT INTO auth_audit_log (id, event_type, email, client_id, ip_address, user_agent, details, created_at) VALUES ('e4c2a7be-9ade-473a-b815-f9dc09bb8443', 'login_success', 'cobra-workwear@decodedops.co.uk', 'cobra-workwear', '162.158.216.144', NULL, '{}', '2026-06-08T15:34:44.252785+00:00') ON CONFLICT DO NOTHING;
INSERT INTO auth_audit_log (id, event_type, email, client_id, ip_address, user_agent, details, created_at) VALUES ('42309493-b078-4cb4-8758-a2265d0c7070', 'login_success', 'cobra-workwear@decodedops.co.uk', 'cobra-workwear', '172.68.186.113', NULL, '{}', '2026-06-09T07:08:58.103262+00:00') ON CONFLICT DO NOTHING;
INSERT INTO auth_audit_log (id, event_type, email, client_id, ip_address, user_agent, details, created_at) VALUES ('c2eed7ed-9c8a-4fa2-9cb8-febd5724663e', 'login_success', 'cobra-workwear@decodedops.co.uk', 'cobra-workwear', '172.70.160.240', NULL, '{}', '2026-06-10T07:36:19.936533+00:00') ON CONFLICT DO NOTHING;

-- Table client_documents: 5 rows
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
INSERT INTO client_documents (id, client_id, company_id, doc_type, doc_number, title, description, html_content, published, created_at, updated_at, access_token) VALUES ('2b351da1-d80e-4d72-8aaf-192c59655ad0', 'hanicks', 6, 'report', 'DO-R-002', 'Site Visit & Discovery Notes — Hanicks, 5 June 2026', 'On-site discovery day notes covering warehouse walkthrough, IBasis App demo, and Khaos Control implementation planning.', '<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Hanicks — Site Visit &amp; Discovery Notes | Decoded Ops</title>
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
  --font-display: "Outfit", ui-sans-serif, system-ui, sans-serif;
  --font-body:    "DM Sans", ui-sans-serif, system-ui, sans-serif;
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
}
img { max-width: 100%; display: block; }
a { color: var(--cerulean); text-decoration: underline; text-underline-offset: 2px; }
a:hover { color: var(--prussian); }
h1, h2, h3, h4 { font-family: var(--font-display); color: var(--fg); margin: 0; }
h1 { font-size: clamp(2.25rem, 5vw, 3rem); font-weight: 700; line-height: 1.1; letter-spacing: -0.02em; }
h2 { font-size: clamp(1.5rem, 3.5vw, 2rem); font-weight: 600; line-height: 1.25; }
h3 { font-size: clamp(1.125rem, 2vw, 1.375rem); font-weight: 500; line-height: 1.3; }
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

.site-header {
  position: sticky; top: 0; z-index: 50;
  height: 4.5rem;
  background: rgba(248,249,250,0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(142,202,230,0.3);
  display: flex; align-items: center;
}
.site-header .do-container { width: 100%; display: flex; align-items: center; justify-content: space-between; }
.logotype { font-family: var(--font-display); font-weight: 700; font-size: 1.25rem; letter-spacing: -0.02em; color: var(--prussian); text-decoration: none; }
.logotype span { color: var(--cerulean); }
.header-meta { font-size: 0.875rem; color: var(--muted); }

.hero { padding: 8rem 0 3rem; text-align: center; position: relative; overflow: hidden; }
.hero::before {
  content: ''''; position: absolute; inset: 0;
  background: radial-gradient(ellipse at 50% 0%, rgba(33,158,188,0.08) 0%, transparent 70%);
  pointer-events: none;
}
.hero h1 { margin-bottom: 0.75rem; }
.hero .subtitle { font-size: 1.125rem; color: var(--muted); max-width: 40rem; margin: 0 auto; }

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
.content-card h3 { margin: 1.5rem 0 0.75rem; color: var(--fg); font-size: 1.125rem; }
.content-card p, .content-card li { color: var(--muted); }
.content-card ul, .content-card ol { padding-left: 1.5rem; margin-bottom: 1rem; }
.content-card li { margin-bottom: 0.5rem; }
.content-card li:last-child { margin-bottom: 0; }
.content-card strong { color: var(--fg); }
.content-card hr { margin: 2rem 0; border: none; border-top: 1px solid var(--border); }

.obs-grid { display: grid; gap: 1rem; }
@media (min-width: 768px) { .obs-grid { grid-template-columns: repeat(2, 1fr); } }
.obs-card {
  background: var(--offwhite); border: 1px solid var(--border); border-radius: 1rem;
  padding: 1.5rem; transition: border-color 300ms, box-shadow 300ms;
}
.obs-card:hover { border-color: rgba(33,158,188,0.4); box-shadow: 0 4px 8px -2px rgba(2,48,71,0.08); }
.obs-card .tag {
  display: inline-block; padding: 0.125rem 0.5rem; border-radius: 4px;
  font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em;
  margin-bottom: 0.5rem;
}
.tag--gap { background: rgba(251,133,0,0.12); color: var(--orange); }
.tag--strength { background: rgba(22,163,74,0.1); color: #16A34A; }
.tag--opportunity { background: rgba(33,158,188,0.1); color: var(--cerulean); }
.obs-card h4 { font-size: 1rem; margin-bottom: 0.375rem; }
.obs-card p { font-size: 0.9375rem; margin-bottom: 0; }

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

/* Action items table */
.action-table { width: 100%; border-collapse: collapse; margin-top: 1rem; font-size: 0.9rem; }
.action-table th {
  background: var(--prussian); color: #fff; padding: 0.625rem 1rem; text-align: left;
  font-family: var(--font-display); font-size: 0.75rem; font-weight: 600;
  text-transform: uppercase; letter-spacing: 0.06em;
}
.action-table th:first-child { border-radius: 6px 0 0 0; }
.action-table th:last-child  { border-radius: 0 6px 0 0; }
.action-table td { padding: 0.75rem 1rem; border-bottom: 1px solid var(--border-soft); vertical-align: top; }
.action-table tr:last-child td { border-bottom: none; }
.action-table tr:nth-child(even) td { background: rgba(248,249,250,0.6); }
.owner { font-weight: 600; white-space: nowrap; color: var(--cerulean); }
.owner--client { color: var(--prussian); }
.priority { display: inline-block; padding: 0.125rem 0.5rem; border-radius: 4px; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; white-space: nowrap; }
.priority--high { background: rgba(251,133,0,0.12); color: var(--orange); }
.priority--medium { background: rgba(33,158,188,0.1); color: var(--cerulean); }

.checklist { list-style: none; padding-left: 0 !important; }
.checklist li {
  display: flex; align-items: flex-start; gap: 0.75rem;
  padding: 0.75rem 0; border-bottom: 1px solid var(--border-soft);
}
.checklist li:last-child { border-bottom: none; }
.check {
  flex-shrink: 0; width: 1.25rem; height: 1.25rem; margin-top: 0.125rem;
  border-radius: 9999px; display: flex; align-items: center; justify-content: center;
  font-size: 0.75rem;
}
.check--agreed { background: rgba(22,163,74,0.12); color: #16A34A; }
.check--pending { background: rgba(2,48,71,0.06); color: var(--muted); }

.site-footer {
  padding: 3rem 0; border-top: 1px solid var(--border);
  text-align: center; font-size: 0.875rem; color: var(--muted);
}
.site-footer .logotype { display: inline-block; margin-bottom: 0.5rem; }
.site-footer p { font-size: 0.875rem; margin-bottom: 0; }

@media (max-width: 768px) {
  .content-card { padding: 1.5rem; }
  .context-banner { padding: 1.5rem; }
  .header-meta { display: none; }
  .action-table { font-size: 0.8125rem; }
  .action-table td, .action-table th { padding: 0.5rem 0.625rem; }
}
</style>
</head>
<body>

<header class="site-header">
  <div class="do-container">
    <a href="https://decodedops.co.uk" class="logotype">Decoded<span>Ops</span></a>
    <div class="header-meta">Meeting Notes — DO-R-002 — Reference Only</div>
  </div>
</header>

<section class="hero">
  <div class="do-container">
    <span class="do-eyebrow">Site Visit &amp; Discovery Notes</span>
    <h1>Hanicks</h1>
    <p class="subtitle">Notes from the on-site discovery day, 5 June 2026. Covers warehouse operations, current systems, IBasis App demo, and Khaos Control implementation planning.</p>
    <div class="meta-strip">
      <span><span class="label">Date:</span> 5 June 2026</span>
      <span><span class="label">Location:</span> Hanicks Warehouse</span>
      <span><span class="label">Document:</span> DO-R-002</span>
      <span><span class="status">Month 1 — Discovery</span></span>
    </div>
  </div>
</section>

<main>
<div class="do-container" style="padding-bottom: 5rem;">

  <div class="context-banner">
    <h2>About these notes</h2>
    <p>These are working notes from the on-site discovery day at Hanicks on 5 June 2026. They capture key observations from the warehouse walkthrough, system discussions, the IBasis App demonstration, and Khaos Control implementation planning. These notes are <strong>for reference and alignment</strong> — the formal project plan and functional specification are separate documents.</p>
    <p class="note">Prepared by Craig Blackman, Decoded Ops · craig@decodedops.co.uk · 07735 620 603</p>
  </div>

  <!-- Operations Overview -->
  <div class="content-card">
    <h2>Operations overview</h2>
    <p>A walkthrough of the current operation provided a clear picture of where the business is today and what the target operating model needs to look like post-implementation.</p>

    <h3>Order volumes &amp; fulfilment</h3>
    <ul>
      <li>Current daily order volume: <strong>50–100 orders/day</strong>, peak capacity approximately <strong>200 orders/day</strong></li>
      <li>Picking is currently knowledge-based — no bin locations, pickers navigate by memory</li>
      <li>Batch picking used informally — labels grouped by proximity, not by system</li>
      <li>Primary pick/pack staff: Ruby (picking, packing), Col (returns and checking)</li>
      <li>Labels printed from Amazon''s native system (Buy Shipping) or Royal Mail Click &amp; Collect for other channels</li>
    </ul>

    <h3>Couriers</h3>
    <ul>
      <li><strong>Royal Mail</strong> — primary for most channels (Click &amp; Collect)</li>
      <li><strong>DPD</strong> — used via Amazon Buy Shipping only; no separate DPD account integration currently active</li>
    </ul>

    <h3>Returns</h3>
    <ul>
      <li>Returns rate approximately <strong>5–10%</strong> (closer to 10%)</li>
      <li>Checked and repackaged by Col or Ruby; accuracy issues noted due to distractions and incomplete checks</li>
      <li>No formal returns processing workflow in system — managed ad-hoc on bench</li>
      <li>FBA manages its own returns for FBA-fulfilled products; data needs to reach ERP for stock reconciliation</li>
    </ul>

    <h3>Sales channels</h3>
    <ul>
      <li><strong>Amazon</strong> — primary channel; uses FBA for fast-moving products, merchant-fulfilled for slower lines</li>
      <li><strong>eBay</strong> — operational but experiencing brand protection issues (infringement reporting unresponsive); B&amp;Q price suppression causing suppressed listings</li>
      <li><strong>OnBuy</strong> — active, brand protection reporting functional</li>
      <li><strong>B&amp;Q Marketplace</strong> — active but problematic; price parity algorithm suppresses listings when Amazon price is lower by even £1</li>
      <li><strong>Own website</strong> (WooCommerce) — active; strategic priority to develop</li>
      <li><strong>Etsy</strong> — open account, limited activity; some product types suitable (boiler accessories, radiator clips)</li>
      <li><strong>Whatnot</strong> — registered, not yet active</li>
    </ul>

    <h3>Pricing &amp; repricing</h3>
    <ul>
      <li>Repricer tool currently in use on Amazon</li>
      <li>Agreed to move away from dynamic repricing toward fixed margin-based pricing once product master is in place</li>
      <li>B&amp;Q''s "fair pricing" algorithm causing listing suppression — requires manual price adjustments per listing</li>
      <li>Competitor pricing comparison tool identified (City Plumbing, Plumb Base, Walls List) — to be incorporated into IBasis App</li>
    </ul>
  </div>

  <!-- Current Systems -->
  <div class="content-card">
    <h2>Current systems</h2>

    <h3>Parts Arena</h3>
    <p>Used to identify parts by GC number and access appliance diagrams and part lists. Subscription-based (approx. £100/year). Does not include pricing — useful for part identification and appliance compatibility, not for pricing or catalogue management.</p>

    <h3>iBasis</h3>
    <p>Primary supplier data and RRP source. Subscription costs approximately <strong>£1,000/year</strong> for API access, which the current website developer uses to feed the WooCommerce product catalogue. Key data available via API: manufacturer part numbers, previous part numbers, RRP, GC numbers (appliance fit), stock availability. Approx. 60,000 product records; ~10,000 obsolete.</p>
    <p>API authentication is currently managed by the website developer — Craig to request access/documentation to leverage the same endpoint for the IBasis App rather than re-authenticating independently.</p>

    <h3>QuickBooks</h3>
    <p>Used for invoicing. Low volume of trade account invoices. Most transactions are card-via-terminal or online checkout. Khaos Control integrates with QuickBooks — no disruption expected.</p>

    <h3>Amazon Seller Central / FBA</h3>
    <p>FBA used for fast-moving lines. FBA inventory tracked separately from merchant-fulfilled stock — the IBasis App and Khaos must be designed to handle both separately. FBA returns are managed by Amazon but need to flow into Khaos for stock reconciliation.</p>

    <h3>No WMS / No ERP (current state)</h3>
    <p>There is no warehouse management system in place. No bin locations. No stock management system beyond sales channel interfaces. This is the core gap that Khaos Control addresses.</p>
  </div>

  <!-- IBasis App Demo -->
  <div class="content-card">
    <h2>IBasis App — demonstration &amp; discussion</h2>
    <p>A working prototype of the IBasis App was demonstrated during the visit. Key functionality shown and discussed:</p>

    <h3>Product data model</h3>
    <ul>
      <li><strong>Parent products</strong> with multiple variations (size, colour where applicable)</li>
      <li>For Hanicks, the majority of products are single-SKU (no variations); some covers, valves etc. have size variants</li>
      <li>All supplier data ingested into a common normalised format regardless of source</li>
      <li>OEM parts, compatible parts (suffix: -C), and refurbished parts tracked as distinct records but linked</li>
    </ul>

    <h3>Supplier data ingestion</h3>
    <ul>
      <li>CSV/API import from supplier product feeds</li>
      <li>iBasis API integration confirmed — pulls part numbers, RRP, GC codes, appliance fit data, previous part numbers</li>
      <li>HRP and DHS: product feeds to be confirmed; HRP sales director keen to integrate; DHS requires a working model first</li>
      <li>Supplier part number vs. manufacturer part number mapping built in (critical for multi-supplier purchasing)</li>
    </ul>

    <h3>Category mapping</h3>
    <ul>
      <li>Canonical category structure imported from the existing website (Hanicks'' own structure as the master)</li>
      <li>Supplier categories mapped to canonical categories within the app</li>
      <li>Ensures consistent categorisation when pushing products to any channel or ERP</li>
    </ul>

    <h3>Multi-warehouse / virtual warehouses</h3>
    <ul>
      <li><strong>Main warehouse</strong> — physical Hanicks stock</li>
      <li><strong>HRP warehouse</strong> — virtual; HRP stock treated as a separate warehouse; orders routed to HRP without Hanicks handling stock</li>
      <li><strong>DHS warehouse</strong> — virtual; same model as HRP once integration agreed</li>
      <li>Stock levels across all warehouses visible from single app interface</li>
    </ul>

    <h3>Export &amp; channel integration</h3>
    <ul>
      <li>Product data pushed to WooCommerce, Khaos Control, or any channel via API or file export</li>
      <li>Stock level sync to prevent oversell across channels</li>
      <li>Price monitoring: compare Hanicks prices against competitors automatically</li>
    </ul>

    <h3>AI enrichment</h3>
    <ul>
      <li>SEO-optimised titles and descriptions generated from raw supplier data</li>
      <li>Image scraping from supplier sites and public sources</li>
      <li>Related products, compatible alternatives, and upsell links generated automatically</li>
    </ul>

    <h3>Website developer intro</h3>
    <p>Agreed that Hanicks will make an introduction to the website development team so Craig can understand how the iBasis API is currently being consumed and leverage the existing authentication for the IBasis App, avoiding duplication of integration work.</p>
  </div>

  <!-- Khaos Control Planning -->
  <div class="content-card">
    <h2>Khaos Control — implementation planning</h2>

    <h3>System setup — next steps</h3>
    <ul>
      <li>Craig to contact Chris at Khaos Control to request a working instance is provisioned for initial testing and configuration</li>
      <li>Training sessions to be booked; minimum 5 hours required before go-live</li>
      <li>Craig will be added to Zoho Projects as client-side PM to track Khaos''s weekly task emails</li>
    </ul>

    <h3>Warehouse layout &amp; bin numbering</h3>
    <ul>
      <li>No bin numbering system currently in place — previous attempt failed (external consultant did not deliver)</li>
      <li>Craig to design and document the bin numbering scheme and warehouse organisation approach, then present to the team</li>
      <li>Tote-based batch picking to be implemented: orders assigned to numbered plastic tote boxes; picker walks a defined route; dispatch team scans totes to process</li>
      <li>Small-parts location system (current shelving units with existing part-numbered labels) to be integrated into the bin scheme</li>
    </ul>

    <h3>Barcodes &amp; GS1</h3>
    <ul>
      <li>GS1 admin access to be registered so product barcodes can be generated and managed from the GS1 system</li>
      <li>Barcode scanning to be implemented in the IBasis App for stock take and picking processes</li>
      <li>All products to have barcode labels printed and ready before go-live stock take</li>
    </ul>

    <h3>Opening stock take</h3>
    <p>Agreed approach for the opening stock take:</p>
    <ul>
      <li>Target: <strong>Saturday midday close</strong> (stop taking orders from platforms), use Saturday afternoon and Sunday to complete full count</li>
      <li>All staff available to participate — this is not a single-person exercise</li>
      <li>Following go-live: <strong>continuous rolling stock count</strong> — the last 30 minutes of each working day, one shelf/section counted, cycling continuously rather than an annual close-down stock take</li>
    </ul>

    <h3>Sales channel integration</h3>
    <ul>
      <li>Amazon ✓ · eBay ✓ · WooCommerce ✓ — native Khaos integrations</li>
      <li>B&amp;Q, OnBuy, TikTok Shop — via Khaos 3rd-party API + N8N automation (Craig builds these workflows)</li>
      <li>Channel list and integration requirements to be confirmed with Chris at Khaos</li>
    </ul>

    <h3>Secondary warehouse</h3>
    <p>Discussed the option of renting third-party warehouse space for bulk/slow-moving stock (particularly Chinese-sourced bulk lines). Not a decision for now — flagged for evaluation once Khaos is live and stock visibility is established.</p>
  </div>

  <!-- Key Observations -->
  <div class="content-card">
    <h2>Key observations from site visit</h2>
    <div class="obs-grid">
      <div class="obs-card">
        <div class="tag tag--gap">Gap</div>
        <h4>No stock visibility</h4>
        <p>No system knows what''s in the warehouse. Stock levels per channel are estimated, not tracked. Oversell risk is real, particularly across 7 channels.</p>
      </div>
      <div class="obs-card">
        <div class="tag tag--gap">Gap</div>
        <h4>Knowledge concentrated in people</h4>
        <p>Pickers navigate by memory. Pricing is informal. The operation depends on individuals knowing things — not systems recording them.</p>
      </div>
      <div class="obs-card">
        <div class="tag tag--gap">Gap</div>
        <h4>No returns workflow</h4>
        <p>Returns checked informally, sometimes left on bench mid-process. Return stock accuracy compromised, leading to wrong items shipped on resale.</p>
      </div>
      <div class="obs-card">
        <div class="tag tag--gap">Gap</div>
        <h4>Manual data entry everywhere</h4>
        <p>Supplier data not centralised. Channel listing updates done per-platform. Price changes entered multiple times. Each update is a potential error and a time cost.</p>
      </div>
      <div class="obs-card">
        <div class="tag tag--strength">Strength</div>
        <h4>Strong supplier relationships</h4>
        <p>HRP sales director is actively supportive of integration. DHS will follow once a working model exists. iBasis API already confirmed and in use.</p>
      </div>
      <div class="obs-card">
        <div class="tag tag--strength">Strength</div>
        <h4>Deep product knowledge</h4>
        <p>Owner has encyclopaedic knowledge of the catalogue, suppliers, and part compatibility. This is the expertise the app needs to capture and systematise.</p>
      </div>
      <div class="obs-card">
        <div class="tag tag--opportunity">Opportunity</div>
        <h4>Virtual warehouse model</h4>
        <p>HRP and DHS as virtual warehouses means Hanicks can expand its sellable range without holding stock — a significant margin and cash-flow advantage once automated.</p>
      </div>
      <div class="obs-card">
        <div class="tag tag--opportunity">Opportunity</div>
        <h4>Own website as strategic priority</h4>
        <p>Customers on the own website have higher lifetime value, lower return rates, and can''t be de-platformed. Growing the website channel is the right long-term direction.</p>
      </div>
    </div>
  </div>

  <!-- Agreed principles -->
  <div class="content-card">
    <h2>Agreed principles &amp; decisions</h2>
    <ul class="checklist">
      <li><span class="check check--agreed">✓</span><span><strong>IBasis App Phase 1 first, Khaos second.</strong> The normalised product data from the IBasis App is the foundation for Khaos data migration. Starting Khaos configuration before the product master is ready creates rework risk.</span></li>
      <li><span class="check check--agreed">✓</span><span><strong>No website rebuild in this programme.</strong> SEO/UX review in Month 1 produces a brief and cost estimate. Rebuild is Phase 2 after the programme completes.</span></li>
      <li><span class="check check--agreed">✓</span><span><strong>Fixed pricing, not dynamic repricing.</strong> Once product master and margin data is in place, repricer to be retired in favour of margin-based pricing rules per channel.</span></li>
      <li><span class="check check--agreed">✓</span><span><strong>Rolling stock count from day one.</strong> No future annual close-down stock takes. Continuous counting built into the daily routine from go-live.</span></li>
      <li><span class="check check--agreed">✓</span><span><strong>DHS via working model.</strong> Craig will build the HRP integration first. Once it''s demonstrably working, DHS will be easier to bring on board. Don''t wait for DHS to be ready before making progress.</span></li>
      <li><span class="check check--pending">•</span><span><strong>Khaos instance to be provisioned.</strong> Craig to contact Chris at Khaos Control this week to request the instance is set up so testing and configuration can begin.</span></li>
      <li><span class="check check--pending">•</span><span><strong>GS1 registration.</strong> Client to register for GS1 admin access to enable barcode generation and management from the GS1 system.</span></li>
      <li><span class="check check--pending">•</span><span><strong>Website developer intro.</strong> Client to introduce Craig to the website development team to access iBasis API documentation and authentication details.</span></li>
    </ul>
  </div>

  <!-- Action Items -->
  <div class="content-card">
    <h2>Action items</h2>
    <table class="action-table">
      <thead>
        <tr>
          <th>Action</th>
          <th>Owner</th>
          <th>Priority</th>
          <th>Target</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Contact Chris at Khaos Control to request working instance is set up and provisioned for testing</td>
          <td class="owner">Craig — DO</td>
          <td><span class="priority priority--high">High</span></td>
          <td>9 Jun 2026</td>
        </tr>
        <tr>
          <td>Design and document bin numbering and warehouse organisation scheme; present to team</td>
          <td class="owner">Craig — DO</td>
          <td><span class="priority priority--high">High</span></td>
          <td>16 Jun 2026</td>
        </tr>
        <tr>
          <td>Deliver IBasis App Functional Specification and project plan</td>
          <td class="owner">Craig — DO</td>
          <td><span class="priority priority--high">High</span></td>
          <td>9 Jun 2026</td>
        </tr>
        <tr>
          <td>Implement barcode scanning functionality in IBasis App (stock take + picking)</td>
          <td class="owner">Craig — DO</td>
          <td><span class="priority priority--medium">Medium</span></td>
          <td>Month 2</td>
        </tr>
        <tr>
          <td>Create DHS and HRP as virtual warehouses in system; configure stock routing logic</td>
          <td class="owner">Craig — DO</td>
          <td><span class="priority priority--medium">Medium</span></td>
          <td>Month 2</td>
        </tr>
        <tr>
          <td>Import existing website category structure into IBasis App as canonical taxonomy</td>
          <td class="owner">Craig — DO</td>
          <td><span class="priority priority--medium">Medium</span></td>
          <td>Month 2</td>
        </tr>
        <tr>
          <td>Register for GS1 admin access to generate and manage product barcodes</td>
          <td class="owner owner--client">Hanicks</td>
          <td><span class="priority priority--high">High</span></td>
          <td>9 Jun 2026</td>
        </tr>
        <tr>
          <td>Introduce Craig to website development team for iBasis API access</td>
          <td class="owner owner--client">Hanicks</td>
          <td><span class="priority priority--high">High</span></td>
          <td>9 Jun 2026</td>
        </tr>
        <tr>
          <td>Provide HRP contact details (technical/API team) for Craig to make integration enquiry</td>
          <td class="owner owner--client">Hanicks</td>
          <td><span class="priority priority--high">High</span></td>
          <td>9 Jun 2026</td>
        </tr>
        <tr>
          <td>Ask Ruby to keep delivery labels on desk (not guess from memory) — reduces mis-picks</td>
          <td class="owner owner--client">Hanicks</td>
          <td><span class="priority priority--medium">Medium</span></td>
          <td>Immediate</td>
        </tr>
        <tr>
          <td>Attend B&amp;Q event to speak with B&amp;Q marketplace representative about suppression issues</td>
          <td class="owner owner--client">Hanicks</td>
          <td><span class="priority priority--medium">Medium</span></td>
          <td>As scheduled</td>
        </tr>
        <tr>
          <td>Evaluate secondary/rented warehouse facility for bulk China-sourced stock lines</td>
          <td class="owner owner--client">Hanicks</td>
          <td><span class="priority priority--medium">Medium</span></td>
          <td>Month 2</td>
        </tr>
        <tr>
          <td>Confirm full list of active sales channels and integration priority order with Craig</td>
          <td class="owner owner--client">Hanicks</td>
          <td><span class="priority priority--high">High</span></td>
          <td>9 Jun 2026</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Next steps -->
  <div class="content-card">
    <h2>Next steps — Month 1 (June 2026)</h2>
    <ul>
      <li>Craig delivers: IBasis App Functional Specification, Client Project Plan (app + Khaos implementation)</li>
      <li>Khaos Control instance provisioned; onboarding kick-off with Craig as client-side PM</li>
      <li>IBasis App development begins: iBasis supplier data ingestion, product normalisation, category mapping</li>
      <li>Bin numbering design completed and presented</li>
      <li>Website SEO/UX review begins (Month 1 side-deliverable — brief and cost estimate for Phase 2)</li>
      <li>Introductions made: website dev team, HRP technical contact</li>
    </ul>
  </div>

</div>
</main>

<footer class="site-footer">
  <div class="do-container">
    <a href="https://decodedops.co.uk" class="logotype">Decoded<span>Ops</span></a>
    <p>Technology &amp; operations consultancy · craig@decodedops.co.uk · 07735 620 603</p>
  </div>
</footer>

</body>
</html>
', true, '2026-06-08T14:59:34.720233+00:00', '2026-06-08T15:32:25.307777+00:00', '6daeb5c8-a998-459b-b7d3-ec0385f67673') ON CONFLICT DO NOTHING;
INSERT INTO client_documents (id, client_id, company_id, doc_type, doc_number, title, description, html_content, published, created_at, updated_at, access_token) VALUES ('9b0d066d-142e-4927-b9d3-c3cb6c02fc0f', 'hanicks', 6, 'report', 'DO-RPT-HANICKS-001', 'ERP + App Onboarding Process', 'Complete onboarding workflow for Hanicks — from audit to go-live.', '
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Decoded Ops — Hanicks Onboarding & Workflow</title>
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
    <div class="header__tag">ERP + App Implementation — Hanicks</div>
  </nav>
</header>

<section class="hero dotgrid">
  <div class="hero__eyebrow">Project Onboarding & Workflow</div>
  <h1>From audit to <em>go-live</em> — Hanicks''s journey</h1>
  <p class="hero__lede">Two parallel streams — app design and ERP process mapping — converge into a single phased delivery plan for Hanicks. Every step documented, every handoff explicit.</p>
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
', true, '2026-06-02T13:45:49.048305+00:00', '2026-06-08T15:32:27.218548+00:00', '22c5c0fc-b256-4a57-86e1-ed463fb4acf0') ON CONFLICT DO NOTHING;
INSERT INTO client_documents (id, client_id, company_id, doc_type, doc_number, title, description, html_content, published, created_at, updated_at, access_token) VALUES ('68594e4e-bbac-44fb-afac-68ff0a56a5b0', 'cobra-workwear', 7, 'report', 'DO-RPT-COBRAWORKWEAR-001', 'ERP + App Onboarding Process', 'Complete onboarding workflow for Cobra Workwear — from audit to go-live.', '<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Decoded Ops — Cobra Workwear Onboarding & Workflow</title>
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
    <div class="header__tag">ERP + App Implementation — Cobra Workwear</div>
  </nav>
</header>

<section class="hero dotgrid">
  <div class="hero__eyebrow">Project Onboarding & Workflow</div>
  <h1>From audit to <em>go-live</em> — Cobra Workwear''s journey</h1>
  <p class="hero__lede">Two parallel streams — app design and ERP process mapping — converge into a single phased delivery plan for Cobra Workwear. Every step documented, every handoff explicit.</p>
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
', true, '2026-06-02T13:45:49.357662+00:00', '2026-06-08T17:13:48.846713+00:00', '15ba44bf-2523-47be-a31d-141bcac524e5') ON CONFLICT DO NOTHING;
```
