import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { D17Motion } from '@/components/D17Motion';
import { BOOKING_URL } from '@/lib/constants';
import { JsonLd } from '@/components/JsonLd';
import '@/app/d17-global.css';
import '@/app/d17-apps-cases.css';

export const metadata = {
  title: 'Eternal Fitness: Full Site Build & AI Training Tool | Decoded Ops',
  description: 'Technical lead on a full site rebuild and an AI-assisted training plan tool for Eternal Fitness, a 1-to-1 personal training studio for clinical populations.',
  alternates: { canonical: '/case-studies/eternal-fitness' },
  openGraph: {
    type: 'article',
    title: 'Eternal Fitness: Full Site Build & AI Training Tool | Decoded Ops',
    description: 'Technical lead on a full site rebuild and an AI-assisted training plan tool.',
    url: 'https://decodedops.co.uk/case-studies/eternal-fitness',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eternal Fitness: Full Site Build & AI Training Tool | Decoded Ops',
    description: 'Technical lead on a full site rebuild and an AI-assisted training plan tool.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Eternal Fitness: Full Site Build and AI Training Tool',
      description: 'Technical lead on a full site rebuild and an AI-assisted training plan tool for Eternal Fitness, a 1-to-1 personal training studio for clinical populations.',
      author: { '@type': 'Person', name: 'Craig Blackman' },
      publisher: {
        '@type': 'Organization', name: 'Decoded Ops',
        logo: { '@type': 'ImageObject', url: 'https://decodedops.co.uk/logo.png', width: 512, height: 512 },
      },
      image: 'https://decodedops.co.uk/opengraph-image',
      datePublished: '2026-08-11',
      dateModified: '2026-08-11',
      url: 'https://decodedops.co.uk/case-studies/eternal-fitness',
    },
  ],
};

export default function EternalFitnessCaseStudyPage() {
  return (
    <>
      <style>{`
        .hero-center{ text-align:center; max-width:760px; margin-inline:auto }
        .hero-center h1{ max-width:none; margin-inline:auto }
        .hero-center .lede{ margin:18px auto 0 }
        .hero-center .eyebrow{ margin-inline:auto }
        .prose{ max-width:72ch; margin-inline:auto }
        .prose h2{ font-size:var(--do-text-xl); margin:36px 0 14px }
        .prose h2:first-child{ margin-top:0 }
        .prose p{ color:var(--do-text-secondary); line-height:var(--do-leading-relaxed); margin-bottom:14px }
        .progress-note{ background:color-mix(in srgb, var(--do-amber) 10%, transparent);
          border:1px solid color-mix(in srgb, var(--do-amber) 30%, transparent);
          border-radius:var(--do-radius-2xl); padding:24px 28px; margin-top:36px }
        .progress-note h3{ font-size:var(--do-text-base); margin-bottom:8px }
        .progress-note p{ margin:0; color:var(--do-text-secondary); font-size:var(--do-text-sm) }
        .callout{ padding:32px; border-radius:var(--do-radius-2xl); background:color-mix(in srgb, var(--do-cerulean) 10%, transparent);
          border:1px solid color-mix(in srgb, var(--do-cerulean) 25%, transparent); margin-bottom:32px }
        .callout h3{ font-size:var(--do-text-base); margin-bottom:8px }
        .cta-strip{ text-align:center }
        .cta-strip h2{ max-width:none; margin-inline:auto }
        .cta-strip .lede{ margin:18px auto 32px; max-width:52ch }
        .hero-cta{ display:flex; gap:12px; flex-wrap:wrap; justify-content:center }
      `}</style>
      <main>
        <JsonLd data={schema} />

        {/* 1. HERO + DO-ART-957 */}
        <section className="g-off">
          <div className="wrap hero-center">
            <span className="eyebrow">In Build · Health &amp; Fitness</span>
            <h1>Eternal Fitness: technical lead for a clinical-population training studio</h1>
            <p className="lede">
              Eternal Fitness is a private, 1-to-1 personal training studio. Most of its clients manage health conditions, rather than general weight loss. I&apos;m technical lead on the website rebuild and the tooling behind it, working alongside Esther Fair, the studio&apos;s Level 4 PT and clinical lead.
            </p>
            <p style={{ fontSize: 'var(--do-text-sm)', color: 'color-mix(in srgb, var(--do-prussian-blue) 60%, transparent)', fontStyle: 'italic', marginTop: '12px' }}>
              Esther is my wife, named plainly. This is paid client work, not a favour or free build. She pays for it the same as anyone else. Which meant there was nowhere to hide if it did not work.
            </p>
          </div>
          <div className="wrap" style={{ marginTop: 'clamp(24px, 3vw, 48px)' }}>
            <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sw a957" data-od-id="exhibit" data-motion data-no="DO-ART-957" data-rev="01" data-tx="photo"
        aria-label="Product screen DO-ART-957. The training plan tool. On the left, the constraints it drafts against: the confirmed studio equipment list and the client's condition and notes. In the middle, a drafted session plan, marked draft. On the right, the review gate: nothing reaches the client until the Level 4 PT and clinical lead reviews and approves it, with approve and request changes. The plan the AI tool drafts, and the one person who can sign it off.">
  <div class="d17-dots" aria-hidden="true"></div>
  <div class="hd">
    <div><div class="k d17-mono">Exhibit · the training plan tool</div>
      <h3>The plan the AI tool drafts, and the one person who can sign it off.</h3></div>
    <span class="d17-mark">decodedops.co.uk · DO-ART-957 · Rev 01</span>
  </div>
  <div class="win" aria-hidden="true">
    <div class="win-bar"><span class="dots"><i></i><i></i><i></i></span>
      <span class="crumb"><span>Clients › Client profile ›</span> Session plan</span><span class="pill">IN BUILD</span></div>
    <div class="win-main">
      <div class="col m-rise" style="animation-delay:.1s"><h6>Drafted against</h6>
        <div class="box"><b>Confirmed studio equipment</b><div class="chips"><span>Adjustable bench</span><span>Dumbbells</span><span>Cable station</span><span>Step</span><span>Mats</span></div></div>
        <div class="box"><b>This client&apos;s situation</b>Condition and notes on file<i class="bar2" style="width:80%"></i><i class="bar2" style="width:56%"></i></div></div>
      <div class="col m-rise" style="animation-delay:.3s"><h6>The tool&apos;s first draft</h6>
        <div class="box"><b>Session A · week 1</b>
          <div class="ex"><b>01</b><span>Mobility warm-up</span><em>seated</em></div>
          <div class="ex"><b>02</b><span>Cable row, light</span><em>supported</em></div>
          <div class="ex"><b>03</b><span>Step-ups, low step</span><em>rail</em></div>
          <div class="ex"><b>04</b><span>Cool-down, breathing</span><em>mat</em></div>
          <span class="draft">DRAFT · NOT SENT</span></div></div>
      <div class="col m-rise" style="animation-delay:.6s"><h6>Review gate</h6>
        <div class="box gate"><span class="who">Level 4 PT, clinical lead</span>
          <p>Reviews every plan. Nothing reaches a client until it is approved.</p>
          <div class="btns"><span>Approve</span><span>Change</span></div>
          <div class="lock">Locked until approved</div></div></div>
    </div>
  </div>
</figure>` }} />
          </div>
        </section>

        {/* 2. STORY */}
        <section className="g-white">
          <div className="wrap prose">
            <h2>The problem</h2>
            <p>
              A studio working with clinical populations needs a site and tools that take that seriously: no generic fitness-marketing language, no before-and-after framing. Training plans for clients managing health conditions can&apos;t be templated the usual way either. Each plan is built around confirmed studio equipment and that client&apos;s specific situation, with Esther approving every plan and every piece of client-facing content.
            </p>

            <h2>What I&apos;m building</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
              {[
                'A full site rebuild with clinical framing, not fitness-marketing convention: no before-and-after, no crush-it language',
                'A training plan tool that generates session plans against a confirmed equipment list and each client\'s condition. Esther reviews and approves every output',
                'Brand and tooling consistency across the site and the training plan output, so the two don\'t drift apart over time',
                'A technical foundation Esther can rely on without needing to manage it herself. She owns the clinical and brand decisions, I own the build',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ flexShrink: 0, marginTop: 1, color: 'var(--do-cerulean)' }} />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="wrap">
            <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sw a958" data-od-id="plate-principle" data-motion data-no="DO-ART-958" data-rev="01" data-tx="schematic"
        aria-label="Drawn plate DO-ART-958. The tool handles the groundwork, the person with the expertise makes the call. Constraints go in: the confirmed studio equipment and the client's condition. The tool drafts a session plan in seconds. The draft stops at a review gate held by the Level 4 PT and clinical lead, who approves it or sends it back for changes. Only an approved plan reaches the client.">
  <div class="q-grid" aria-hidden="true"></div>
  <svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
    <marker id="q-ah958" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#8ECAE6"/></marker>
    <marker id="q-ah958a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#FFB703"/></marker>
  </defs></svg>
  <svg class="q v-wide" viewBox="0 0 1600 520" aria-hidden="true">
    <text class="t-m" x="20" y="30" style="font-size:16px">The groundwork</text>
    <text class="t-m t-a" x="1000" y="30" style="font-size:16px">The call</text>
    <path class="ln-f" d="M20 44 H930 M20 38 V50 M930 38 V50"/>
    <path d="M1000 44 H1580 M1000 38 V50 M1580 38 V50" fill="none" stroke="#FFB703" stroke-opacity=".7" stroke-width="1.6"/>
    <g class="m-rise" style="animation-delay:.05s"><rect class="bx" x="20" y="110" width="300" height="220" rx="14"/>
      <text class="t-m" x="44" y="148" style="font-size:15px">01 · Constraints in</text>
      <text class="t-h" x="44" y="190" style="font-size:28px">Confirmed</text>
      <text class="t-h" x="44" y="224" style="font-size:28px">equipment</text>
      <text class="t-d" x="44" y="264" style="font-size:19px">+ this client&apos;s</text>
      <text class="t-d" x="44" y="290" style="font-size:19px">condition and notes</text></g>
    <path class="ln m-draw" pathLength="1" style="animation-delay:.3s" d="M322 220 H392" marker-end="url(#q-ah958)"/>
    <g class="m-rise" style="animation-delay:.4s"><rect class="bx" x="400" y="110" width="320" height="220" rx="14"/>
      <text class="t-m" x="424" y="148" style="font-size:15px">02 · The tool drafts</text>
      <text class="t-h" x="424" y="190" style="font-size:28px">A session plan</text>
      <text class="t-h" x="424" y="224" style="font-size:28px">in seconds</text>
      <text class="t-d" x="424" y="264" style="font-size:19px">against real constraints,</text>
      <text class="t-d" x="424" y="290" style="font-size:19px">marked draft</text></g>
    <path class="ln-a m-draw" pathLength="1" style="animation-delay:.8s" d="M722 220 H992" marker-end="url(#q-ah958a)"/>
    <text class="t-d" x="740" y="206" style="font-size:17px">stops here, every time</text>
    <g class="m-pop" style="animation-delay:1.1s"><rect class="bx-a" x="1000" y="90" width="300" height="260" rx="14"/>
      <text class="t-m t-a" x="1024" y="128" style="font-size:15px">03 · The review gate</text>
      <text class="t-h" x="1024" y="172" style="font-size:28px">Level 4 PT,</text>
      <text class="t-h" x="1024" y="206" style="font-size:28px">clinical lead</text>
      <text class="t-d" x="1024" y="248" style="font-size:19px">decides what is safe</text>
      <text class="t-d" x="1024" y="274" style="font-size:19px">for this client</text>
      <rect x="1024" y="296" width="118" height="36" rx="7" fill="#FFB703"/><text x="1083" y="320" text-anchor="middle" style="font-size:16px;font-weight:700;fill:#023047">Approve</text>
      <rect x="1154" y="296" width="122" height="36" rx="7" fill="none" stroke="#8ECAE6" stroke-width="1.6"/><text class="t" x="1215" y="320" text-anchor="middle" style="font-size:16px;font-weight:700">Change</text></g>
    <path class="ln-d" d="M1215 352 V420 H560 V334" marker-end="url(#q-ah958)"/>
    <text class="t-d" x="890" y="448" text-anchor="middle" style="font-size:17px">changes go back to the draft, never round the gate</text>
    <path class="ln-a m-draw" pathLength="1" style="animation-delay:1.5s" d="M1302 220 H1362" marker-end="url(#q-ah958a)"/>
    <g class="m-rise" style="animation-delay:1.6s"><rect class="bx" x="1370" y="140" width="210" height="160" rx="14"/>
      <text class="t-m" x="1394" y="178" style="font-size:15px">04 · Client</text>
      <text class="t-h" x="1394" y="220" style="font-size:26px">Gets the</text>
      <text class="t-h" x="1394" y="252" style="font-size:26px">approved plan</text></g>
  </svg>
  <svg class="q v-tall" viewBox="0 0 700 1150" aria-hidden="true">
    <rect class="bx" x="10" y="10" width="680" height="170" rx="14"/><text class="t-m" x="34" y="52" style="font-size:21px">01 · Constraints in</text>
    <text class="t-h" x="34" y="104" style="font-size:34px">Confirmed equipment</text><text class="t-d" x="34" y="148" style="font-size:25px">+ this client&apos;s condition and notes</text>
    <path class="ln" d="M350 184 V236" marker-end="url(#q-ah958)"/>
    <rect class="bx" x="10" y="244" width="680" height="170" rx="14"/><text class="t-m" x="34" y="286" style="font-size:21px">02 · The tool drafts</text>
    <text class="t-h" x="34" y="338" style="font-size:34px">A session plan in seconds</text><text class="t-d" x="34" y="382" style="font-size:25px">against real constraints, marked draft</text>
    <path class="ln-a" d="M350 418 V470" marker-end="url(#q-ah958a)"/>
    <rect class="bx-a" x="10" y="478" width="680" height="260" rx="14"/><text class="t-m t-a" x="34" y="520" style="font-size:21px">03 · The review gate</text>
    <text class="t-h" x="34" y="574" style="font-size:34px">Level 4 PT, clinical lead</text><text class="t-d" x="34" y="618" style="font-size:25px">decides what is safe for this client</text>
    <rect x="34" y="650" width="190" height="52" rx="8" fill="#FFB703"/><text x="129" y="684" text-anchor="middle" style="font-size:22px;font-weight:700;fill:#023047">Approve</text>
    <rect x="240" y="650" width="190" height="52" rx="8" fill="none" stroke="#8ECAE6" stroke-width="2"/><text class="t" x="335" y="684" text-anchor="middle" style="font-size:22px;font-weight:700">Change</text>
    <text class="t-d" x="10" y="790" style="font-size:23px">changes go back to the draft, never round the gate</text>
    <path class="ln-a" d="M350 810 V862" marker-end="url(#q-ah958a)"/>
    <rect class="bx" x="10" y="870" width="680" height="150" rx="14"/><text class="t-m" x="34" y="912" style="font-size:21px">04 · Client</text>
    <text class="t-h" x="34" y="966" style="font-size:34px">Gets the approved plan</text>
  </svg>
  <div class="foot"><span class="k d17-mono">The tool does the groundwork · the expert makes the call</span><span class="d17-mark">decodedops.co.uk · DO-ART-958 · Rev 01</span></div>
</figure>` }} />
          </div>
          <div className="wrap prose">
            <div className="callout">
              <h3>Why the AI tool doesn&apos;t replace the trainer</h3>
              <p>
                The training plan tool speeds up building a first draft against real constraints. It doesn&apos;t decide what&apos;s safe for a client managing a health condition. Esther does. That&apos;s the same principle behind every AI-adjacent piece of work I do: the tool handles the groundwork, the person with the actual expertise makes the call.
              </p>
            </div>

            <h2>Status</h2>
            <p style={{ marginBottom: '32px' }}>
              In build. Site rebuild and training plan tool are both in progress, working toward a scheduled launch.
            </p>
          </div>
        </section>

        {/* RELATED */}
        <section className="g-tint">
          <div className="wrap" style={{ maxWidth: 900 }}>
            <span className="eyebrow">Related</span>
            <h2>Relevant problems and sectors</h2>
            <div className="hair" />
            <div className="grid grid--3" style={{ marginTop: 24 }}>
              <article className="card">
                <span className="kicker">Problem</span>
                <h3>Buy vs build</h3>
                <p>Choosing between off-the-shelf and custom — the decision behind this build.</p>
                <Link href="/problems/buy-vs-build" className="btn btn--outline" style={{ marginTop: 12 }}>Read about buy vs build</Link>
              </article>
              <article className="card">
                <span className="kicker">Sector</span>
                <h3>Signs &amp; graphics</h3>
                <p>Short-run, personalised production with custom tooling — similar operational patterns.</p>
                <Link href="/sectors/signs-graphics" className="btn btn--outline" style={{ marginTop: 12 }}>See the signs &amp; graphics page</Link>
              </article>
              <article className="card">
                <span className="kicker">Sector</span>
                <h3>Awards &amp; engraving</h3>
                <p>Mixed-method, personalised production with artwork approval loops.</p>
                <Link href="/sectors/awards-engraving" className="btn btn--outline" style={{ marginTop: 12 }}>See the awards &amp; engraving page</Link>
              </article>
            </div>
          </div>
        </section>

        {/* CTA STRIP */}
        <section className="g-navy cta-strip">
          <div className="wrap" style={{ maxWidth: 760 }}>
            <h2>Building something similar?</h2>
            <p className="lede">
              If you need a technical lead who&apos;ll build the tool without pretending it replaces the expert, get in touch.
            </p>
            <div className="hero-cta">
              <Link href="/contact" className="btn btn--primary">
                Book a free discovery call <ArrowRight size={18} />
              </Link>
              <Link href="/case-studies" className="btn btn--outline">
                See other client work
              </Link>
            </div>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-muted-on-dark)', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>Or book a call directly <ArrowRight size={14} /></a>
          </div>
        </section>
      </main>
      <D17Motion />
    </>
  );
}
