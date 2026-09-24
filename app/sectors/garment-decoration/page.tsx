import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { D17Motion } from '@/components/D17Motion';
import sectors from '@/app/d17-sectors.module.css';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { sectorRouting } from '@/data/sector-routing';
import styles from '@/components/SectorPageDS.module.css';

export const metadata: Metadata = {
  title: 'Garment Decoration Operations & Systems Consultant: Decoded Ops',
  description: 'Artwork that doesn\'t get approved by email, production scheduling that accounts for embroidery, screen print, DTF, and DTG, and systems that match how you actually decorate.',
  alternates: { canonical: '/sectors/garment-decoration' },
  openGraph: {
    title: 'Garment Decoration Operations & Systems Consultant: Decoded Ops',
    description: 'Artwork that doesn\'t get approved by email, production scheduling that accounts for embroidery, screen print, DTF, and DTG, and systems that match how you actually decorate.',
    url: 'https://decodedops.co.uk/sectors/garment-decoration',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Garment Decoration Operations & Systems Consultant: Decoded Ops',
    description: 'Artwork that doesn\'t get approved by email, production scheduling that accounts for embroidery, screen print, DTF, and DTG, and systems that match how you actually decorate.',
  },
};

const sectorSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://decodedops.co.uk/sectors/garment-decoration#webpage',
      url: 'https://decodedops.co.uk/sectors/garment-decoration',
      name: 'Garment Decoration Business Systems & Operations Consultant: Decoded Ops',
      description: 'Artwork that doesn\'t get approved by email, production scheduling that accounts for embroidery, screen print, DTF, and DTG, and systems that match how you actually decorate.',
      isPartOf: { '@id': 'https://decodedops.co.uk/#organization' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What systems does a garment decoration business need?',
          acceptedAnswer: { '@type': 'Answer', text: 'A garment decoration business typically needs: an order management or ERP system that handles decoration method-specific workflows; artwork management software for sign-off and file storage; production scheduling software that accounts for machine capacity and method lead times; eCommerce integration if you sell online; and B2B ordering capability if you serve corporate or wholesale customers.' },
        },
        {
          '@type': 'Question',
          name: 'How is embroidery business management different from other decoration methods?',
          acceptedAnswer: { '@type': 'Answer', text: 'Embroidery business management involves digitising, stitch count estimation, machine capacity planning, and thread management. None of which are native to generic ERP or MIS systems. Businesses running embroidery alongside screen print or DTF need systems that can represent each method\'s production logic independently.' },
        },
        {
          '@type': 'Question',
          name: 'What is the best ERP for a garment decoration business in the UK?',
          acceptedAnswer: { '@type': 'Answer', text: 'There is no single best ERP. The right system depends on your decoration methods, order volume, eCommerce requirements, and growth plans. Several sector-specific systems are used in the UK garment decoration market, each with different strengths and limitations. A written brief and a scored evaluation against it is the only way to choose correctly.' },
        },
      ],
    },
  ],
};

const tagline = 'Garment decoration business systems ||were never built for how you actually work.||';
const parts = tagline.split('||');

const challenges = [
  { title: 'Decoration method mix', body: "Run embroidery, screen print, and DTG under one roof and you're running three production processes, three lead times, and three cost structures. Most systems treat them all the same." },
  { title: 'The artwork loop', body: "Artwork sign-off causes more delay than almost anything else in this sector. Every manual chase and email thread is time and money that shows up nowhere. Artwork software can automate sign-off, but only if it connects to your order system. Most businesses still approve artwork by email." },
  { title: 'Blank dependency', body: "Your production schedule is hostage to blank availability. Most businesses have no real visibility of incoming stock against committed orders, until the problem is already in the queue." },
  { title: 'eCommerce disconnected from production', body: "Online orders that don't automatically flow into the production schedule. Personalisation that needs manual re-entry. Artwork files that arrive separately from the order. All of this is solvable." },
  { title: 'Embroidery production workflow versus other methods', body: "Embroidery scheduling is not the same as screen print or DTF. Machine capacity, stitch count, digitising time, and thread changes all affect the schedule in ways generic software ignores. A system that can't represent embroidery accurately just means manual workarounds." },
];

const whatIdo = [
  'Map your whole workflow, from order intake to despatch',
  'Find where the artwork loop is causing delay and cost',
  'Assess artwork software and how it connects to your order system',
  'Review how you source blanks and where that leaves you exposed',
  'Check for gaps between your online shop, order system, and production',
  'Write an independent vendor brief if new software is needed',
  'Put a number on every finding in time, headcount, and money',
];

const route = sectorRouting['garment-decoration'];

export default function GarmentDecorationPage() {
  return (
    <>
      <JsonLd data={sectorSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk' },
        { name: 'Sectors', url: 'https://decodedops.co.uk/#sectors' },
        { name: 'Garment Decoration', url: 'https://decodedops.co.uk/sectors/garment-decoration' },
      ]} />
      {/* HERO SPLIT */}
      <section className={`g-off ${styles.heroSection}`}>
        <div className={`wrap ${styles.heroSplit}`}>
          <div>
            <span className="eyebrow">Sector · garment decoration</span>
            <h1>
              {parts.map((p, i) =>
                i % 2 === 0
                  ? <span key={i}>{p}</span>
                  : <span key={i} style={{ color: '#219EBC' }}>{p}</span>
              )}
            </h1>
            <div className={styles.heroBody}>
              <p>Embroidery, screen print, DTF, and DTG each work in their own way. But the ERP and MIS systems sold to decoration businesses rarely account for that. Embroidery is not the same as screen print. Your systems should match how you actually work.</p>
            </div>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact">Book a free call <ArrowRight size={16} aria-hidden="true" /></Link>
              <Link className="btn btn--outline" href="/clarity">See how the audit works <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sx a923" data-od-id="hero-evidence" data-motion data-no="DO-ART-923" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-923. Thread spools racked on an embroidery machine, graded, above three drawn production runs: embroidery (digitise, hoop, stitch, trim), screen print (screens, set-up, print, flash, cure) and direct-to-garment (pre-treat, press, print, cure). Three methods, three production logics.">
  <div class="d17-ph"><img src="/images/d17/sectors/thread-spools-1c52d7.jpg" alt="" width="1000" height="889"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Garment decoration</span><span>One floor, three methods</span></div>
  <div class="stage" aria-hidden="true"></div>
  <div class="runs" aria-hidden="true">
    <div class="run"><div class="h"><b>Embroidery</b><span class="d17-mono">stitch count sets the clock</span></div>
      <div class="seg m-fill" style="animation-delay:.1s"><span style="--g:3">Digitise</span><span style="--g:1.4">Hoop</span><span class="k" style="--g:5">Stitch · per head</span><span style="--g:1.2">Trim</span></div></div>
    <div class="run"><div class="h"><b>Screen print</b><span class="d17-mono">set-up sets the clock</span></div>
      <div class="seg m-fill" style="animation-delay:.35s"><span class="k" style="--g:3.4">Screens</span><span style="--g:2.2">Set-up</span><span style="--g:1.8">Print</span><span style="--g:1">Flash</span><span style="--g:1.8">Cure</span></div></div>
    <div class="run"><div class="h"><b>DTG</b><span class="d17-mono">one garment at a time</span></div>
      <div class="seg m-fill" style="animation-delay:.6s"><span style="--g:1.6">Pre-treat</span><span style="--g:1">Press</span><span class="k" style="--g:4.6">Print · per garment</span><span style="--g:1.7">Cure</span></div></div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">Three methods, <em>three production logics.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-923 · Rev 01</span>
  </div>
</figure>` }} />
        </div>
      </section>

      {/* D17 INLINE ARTWORK · DO-ART-924 */}
      <section className="g-navy">
        <div className="wrap">
          <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sw a924" data-od-id="plate-architecture" data-motion data-no="DO-ART-924" data-rev="01" data-tx="journey"
        aria-label="Journey poster DO-ART-924. One order's route through a garment decoration business: order intake, the artwork loop, blanks checked against committed orders, then production split by method, each scheduled by its own logic, and despatch on the date promised. Two pinned prints: an embroidery head and a screen-print press.">
  <div class="q-grid" aria-hidden="true"></div>
  <p class="eb d17-mono">One order's route</p>
  <h3 class="hd">In, artwork, blanks, three methods, out.</h3>
  <svg class="route" viewBox="0 0 1600 820" preserveAspectRatio="none" aria-hidden="true">
    <path class="m-draw" pathLength="1" d="M110 520 H330 C400 520 400 440 470 440 H640 C710 440 710 520 780 520 H960" fill="none" stroke="var(--do-sky-blue)" stroke-width="7" stroke-linecap="round"/>
    <path class="m-draw" pathLength="1" style="animation-delay:.9s" d="M960 520 C1020 520 1020 420 1080 420 H1180 C1240 420 1240 520 1300 520 M960 520 H1300 M960 520 C1020 520 1020 620 1080 620 H1180 C1240 620 1240 520 1300 520" fill="none" stroke="var(--do-sky-blue)" stroke-width="4" stroke-linecap="round" opacity=".8"/>
    <path class="m-draw" pathLength="1" style="animation-delay:1.8s" d="M1300 520 H1480" fill="none" stroke="var(--do-amber)" stroke-width="8" stroke-linecap="round"/>
    <g class="m-pop" style="animation-delay:.2s"><circle cx="110" cy="520" r="15" fill="var(--do-off-white)" stroke="var(--do-prussian-blue)" stroke-width="6"/></g>
    <g class="m-pop" style="animation-delay:.5s"><circle cx="555" cy="440" r="15" fill="var(--do-off-white)" stroke="var(--do-prussian-blue)" stroke-width="6"/></g>
    <g class="m-pop" style="animation-delay:.8s"><circle cx="960" cy="520" r="15" fill="var(--do-off-white)" stroke="var(--do-prussian-blue)" stroke-width="6"/></g>
    <g class="m-pop" style="animation-delay:1.3s"><circle cx="1130" cy="420" r="10" fill="var(--do-sky-blue)"/><circle cx="1130" cy="520" r="10" fill="var(--do-sky-blue)"/><circle cx="1130" cy="620" r="10" fill="var(--do-sky-blue)"/></g>
    <g class="m-pop" style="animation-delay:2.2s"><circle cx="1480" cy="520" r="21" fill="var(--do-amber)" stroke="var(--do-prussian-blue)" stroke-width="6"/></g>
  </svg>
  <div class="methods d17-mono" aria-hidden="true">
    <span style="left:70.6%;top:51.2%">Embroidery</span><span style="left:70.6%;top:63.4%">Screen print</span><span style="left:70.6%;top:75.6%">DTG</span>
  </div>
  <div class="prints" aria-hidden="true">
    <div class="print" style="left:55%;top:5%;width:14%;height:31%;transform:rotate(-3deg)"><img src="/images/d17/sectors/hero-workshop-783ec1.jpg" alt="" width="520" height="455"><div class="tint"></div><span>Embroidery · by stitch count</span></div>
    <div class="print" style="left:73%;top:8%;width:14%;height:31%;transform:rotate(2.5deg)"><img src="/images/d17/sectors/gen-press-hall-40f9e1.jpg" alt="" width="520" height="327"><div class="tint"></div><span>Screen print · by set-up</span></div>
  </div>
  <div class="stations">
    <div class="st" style="left:5%;top:68%"><span class="n">01 · In</span><h4>Order intake</h4><p>Online, trade and repeat orders in one place.</p></div>
    <div class="st" style="left:28%;top:59%"><span class="n">02 · Artwork</span><h4>The artwork loop</h4><p>Proof and sign-off travel with the order, not in email.</p></div>
    <div class="st" style="left:51%;top:70%;width:calc(200 * var(--u))"><span class="n">03 · Blanks</span><h4>Blanks in</h4><p>Checked against committed orders.</p></div>
    <div class="st st--end" style="left:84%;top:68%;width:calc(230 * var(--u))"><span class="n">04 · Out</span><h4>Despatch</h4><p>Each method on its own clock, out on the date promised.</p></div>
  </div>
  <span class="d17-mark d17-mark--abs">decodedops.co.uk · DO-ART-924 · Rev 01</span>
</figure>` }} />
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="g-white">
        <div className="wrap">
          <span className="eyebrow">Common challenges</span>
          <h2>Where the problems tend to live</h2>
          <div className="hair" />
          <p className="lede">In this sector, the same operational problems appear in different shapes across different businesses. These are the ones that cost the most.</p>
          <div className="grid grid--2">
            {challenges.map((c, i) => (
              <article key={i} className="card">
                <span className="kicker">{String(i + 1).padStart(2, '0')} &middot; {c.title}</span>
                <p>{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="g-navy">
        <div className="wrap">
          <span className="eyebrow">How I help</span>
          <h2>What the work actually looks like</h2>
          <div className="hair" />
          <p className="lede">A structured audit followed by specific, costed recommendations. No vague frameworks, no generic advice.</p>
          <div className="grid grid--2" style={{ marginTop: '32px' }}>
            {whatIdo.map((item, i) => (
              <div key={i} className="card" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ minWidth: '28px', height: '28px', borderRadius: 'var(--do-radius-full)', background: 'color-mix(in srgb, var(--do-cerulean) 20%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'var(--do-text-xs)', fontWeight: 'var(--do-weight-bold)', color: 'var(--do-cerulean)' }}>{String(i + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CROSS-LINKS */}
      {(route.targetService || (route.relatedProblems && route.relatedProblems.length > 0) || (route.relatedResources && route.relatedResources.length > 0) || (route.relatedSectors && route.relatedSectors.length > 0)) && (
        <section style={{ padding: 'clamp(40px, 4.5vw, 60px) 0' }} className="g-tint">
          <div className="wrap">
            <div className="grid grid--3">
              {route.targetService && (
                <div className="card" style={{ background: 'var(--do-surface-dark)', color: 'var(--do-text-on-dark)' }}>
                  <span className="kicker" style={{ color: 'var(--do-amber)' }}>The work in this sector</span>
                  <h3 style={{ fontSize: 'var(--do-text-xl)', margin: '8px 0' }}>{route.targetService.label}</h3>
                  <p style={{ marginBottom: '20px' }}>{route.targetService.anchor}</p>
                  <Link href={route.targetService.href} style={{ color: 'var(--do-amber)', fontWeight: 'var(--do-weight-semibold)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    See how it works <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                </div>
              )}
              {route.relatedProblems && route.relatedProblems.length > 0 && (
                <div className="card">
                  <span className="kicker">Most common in garment decoration</span>
                  <h3 style={{ fontSize: 'var(--do-text-lg)', margin: '8px 0' }}>The problems I see most often</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {route.relatedProblems.map((p) => (
                      <li key={p.href} style={{ marginBottom: '10px' }}>
                        <Link href={p.href} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: 'var(--do-text-sm)' }}>
                          <ArrowRight size={14} style={{ marginTop: '2px', flexShrink: 0, color: 'var(--do-cerulean)' }} aria-hidden="true" />
                          <span>{p.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {route.relatedResources && route.relatedResources.length > 0 && (
                <div className="card">
                  <span className="kicker">Useful next steps</span>
                  <h3 style={{ fontSize: 'var(--do-text-lg)', margin: '8px 0' }}>Resources</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {route.relatedResources.map((r) => (
                      <li key={r.href} style={{ marginBottom: '10px' }}>
                        <Link href={r.href} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: 'var(--do-text-sm)' }}>
                          <ArrowRight size={14} style={{ marginTop: '2px', flexShrink: 0, color: 'var(--do-cerulean)' }} aria-hidden="true" />
                          <span>{r.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {route.relatedSectors && route.relatedSectors.length > 0 && (
                <div className="card">
                  <span className="kicker">Related sectors</span>
                  <h3 style={{ fontSize: 'var(--do-text-lg)', margin: '8px 0' }}>Adjacent trades</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {route.relatedSectors.map((s) => (
                      <li key={s.href} style={{ marginBottom: '10px' }}>
                        <Link href={s.href} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: 'var(--do-text-sm)' }}>
                          <ArrowRight size={14} style={{ marginTop: '2px', flexShrink: 0, color: 'var(--do-cerulean)' }} aria-hidden="true" />
                          <span>{s.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* RELATED SECTOR */}
      <section style={{ padding: 'clamp(40px, 4.5vw, 60px) 0' }} className="g-tint">
        <div className="wrap">
          <span className="eyebrow">Related</span>
          <h2>Operations consultant for print & embroidery</h2>
          <div className="hair" />
          <p className="lede">If you run embroidery alongside screen print or DTF, the same operational challenges apply — but with the added complexity of decoration-method-specific scheduling. See the full picture for print & embroidery businesses.</p>
          <div className="btn-row" style={{ marginTop: '24px' }}>
            <Link className="btn btn--outline" href="/sectors/operations-consultant-print-embroidery">See the print & embroidery page <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section style={{ padding: 'clamp(40px, 4.5vw, 60px) 0' }} className="g-off">
        <div className="wrap">
          <span className="eyebrow">Case study</span>
          <h2>ERP and supplier data integration for a decoration business</h2>
          <div className="hair" />
          <p className="lede">Project-leading an ERP change alongside a custom Data App for supplier data, Amazon FBA, and channel automation.</p>
          <div className="btn-row" style={{ marginTop: '24px' }}>
            <Link className="btn btn--outline" href="/case-studies/case-study-01">Read the case study <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="g-off">
        <div className={`wrap ${styles.centred}`}>
          <h2>Book a free discovery call.</h2>
          <div className="hair" />
          <p className="lede">The audit starts with a free 60-minute call. No obligation. Just a conversation about what&apos;s happening in your business.</p>
          <div className="btn-row">
            <Link className="btn btn--primary" href="/contact">Book a free discovery call <ArrowRight size={16} aria-hidden="true" /></Link>
            <Link className="btn btn--outline" href="/clarity">See how a Clarity Audit works <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
      <D17Motion />
    </>
  );
}
