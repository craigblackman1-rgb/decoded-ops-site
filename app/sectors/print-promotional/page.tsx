import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { D17Motion } from '@/components/D17Motion';
import '@/app/d17-global.css';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { sectorRouting } from '@/data/sector-routing';
import styles from '@/components/SectorPageDS.module.css';

export const metadata: Metadata = {
  title: 'Print Shop Management Software | Decoded Ops',
  description: 'Print shop management software covering production scheduling, order management and artwork approval for print and promotional merchandise businesses.',
  alternates: { canonical: '/sectors/print-promotional' },
  openGraph: {
    title: 'Print Shop Management Software | Decoded Ops',
    description: 'Print shop management software covering production scheduling, order management and artwork approval for print and promotional merchandise businesses.',
    url: 'https://decodedops.co.uk/sectors/print-promotional',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Print Shop Management Software | Decoded Ops',
    description: 'Print shop management software covering production scheduling, order management and artwork approval for print and promotional merchandise businesses.',
  },
};

const sectorSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://decodedops.co.uk/sectors/print-promotional#webpage',
      url: 'https://decodedops.co.uk/sectors/print-promotional',
      name: 'Print Shop Operations Management & Systems Consultant: Decoded Ops',
      description: 'Production scheduling that accounts for method and substrate, artwork approval that doesn\'t live in email, and order management that connects to your shop.',
      isPartOf: { '@id': 'https://decodedops.co.uk/#organization' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What software does a print shop need for operations management?',
          acceptedAnswer: { '@type': 'Answer', text: 'A print shop typically needs: production scheduling software that accounts for method and substrate; artwork management and approval software; an order management or MIS system; eCommerce integration if selling online; and invoicing connected to production. The specific system depends on your print methods, run lengths, and customer mix.' },
        },
        {
          '@type': 'Question',
          name: 'How do I improve my print shop\'s artwork approval workflow?',
          acceptedAnswer: { '@type': 'Answer', text: 'Start by mapping the current approval process step by step: from artwork received to sign-off confirmed. Most print shops lose 2-3 days per job in the approval loop because it relies on email and manual chasing. Artwork management software that automates proof delivery, revision tracking, and sign-off confirmation can reduce that loop to hours without changing the production process.' },
        },
      ],
    },
  ],
};

const tagline = 'Print shop operations ||start with knowing what your current process actually costs.||';
const parts = tagline.split('||');

const challenges = [
  { title: 'Product complexity at volume', body: "One client order can run to 40 different product lines, each with its own supplier, spec, and lead time. Manage that by hand and margin quietly leaks on every job." },
  { title: 'Supplier fragmentation', body: "Multiple suppliers, multiple portals, multiple confirmation processes. The admin of chasing incoming goods rarely shows in the P&L, but it's real." },
  { title: 'The sample and approval cycle', body: "Pre-production samples, client approvals, artwork sign-off. Every step that happens outside your system is a step you can't measure or improve." },
  { title: 'What quoting actually costs you', body: "How much does it cost you to produce a quote? How much of that time converts to an order? Most businesses in this sector have never measured it. And the answer is usually uncomfortable." },
  { title: 'Artwork approval workflow', body: "Artwork approval is where most print shop schedules break down. Every unapproved job stuck in an email thread is a press slot you can't plan. Automating approval, from brief to proof to sign-off, cuts production delays with no change to the print process." },
  { title: 'Print production scheduling and capacity planning', body: "Scheduling software that ignores substrate, print method, drying time, and finishing can't produce a realistic schedule. Most print shops schedule by eye and experience. That works until volume outgrows what one person can hold in their head." },
];

const whatIdo = [
  'Audit your order intake and quoting for hidden time cost',
  'Map the full supplier workflow, from order to receipt',
  'Find where samples and approvals are creating delay',
  'Review your product data and supplier pricing',
  'Check your systems for gaps and manual workarounds',
  'Put a real cost on every inefficiency found',
];

const route = sectorRouting['print-promotional'];

export default function PrintPromotionalPage() {
  return (
    <>
      <JsonLd data={sectorSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk' },
        { name: 'Sectors', url: 'https://decodedops.co.uk/#sectors' },
        { name: 'Print & Promotional', url: 'https://decodedops.co.uk/sectors/print-promotional' },
      ]} />
      {/* HERO SPLIT */}
      <section className={`g-off ${styles.heroSection}`}>
        <div className={`wrap ${styles.heroSplit}`}>
          <div>
            <span className="eyebrow">Sector · print & promotional</span>
            <h1>
              {parts.map((p, i) =>
                i % 2 === 0
                  ? <span key={i}>{p}</span>
                  : <span key={i} style={{ color: '#219EBC' }}>{p}</span>
              )}
            </h1>
            <div className={styles.heroBody}>
              <p>Print and promotional businesses run short jobs on tight deadlines, with artwork approvals that eat time and scheduling software built for longer runs. The result is missed deadlines, rework, and complaints, even when the team is working hard.</p>
            </div>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact">Book a free call <ArrowRight size={16} aria-hidden="true" /></Link>
              <Link className="btn btn--outline" href="/clarity">See how the audit works <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sx a927" data-od-id="hero-evidence" data-motion data-no="DO-ART-927" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-927. A graded photograph of a screen-print press hall with a run sheet pinned over it. The press slot was planned as one long run; what arrived was several short runs and one gap waiting on artwork sign-off. Short runs, a schedule built for long ones.">
  <div class="d17-ph"><img src="/images/d17/sectors/gen-press-hall-7c2764.webp" alt="" width="1000" height="1000"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Print &amp; promotional</span><span>Press 2 · today</span></div>
  <div class="stage" aria-hidden="true">
    <div class="sheet m-drop" style="animation-delay:.1s">
      <span class="ref">RS-02 · Run sheet</span>
      <h4>One slot, as planned and as run</h4>
      <div class="slot"><span class="lab">Planned · one long run</span><div class="long"></div></div>
      <div class="slot"><span class="lab">Run · short jobs</span>
        <div class="short m-fill" style="animation-delay:.6s"><i style="--g:1.4"></i><i style="--g:.8"></i><i style="--g:1.1"></i><i class="gap" style="--g:1.6"></i><i style="--g:.7"></i><i style="--g:1"></i></div></div>
      <p class="note">Every change of job is a set-up. The dashed slot is a job waiting on artwork sign-off: time on the press nobody could plan.</p>
    </div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">Short runs, <em>a schedule built for long ones.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-927 · Rev 01</span>
  </div>
</figure>` }} />
        </div>
      </section>

      <section className="g-navy">
        <div className="wrap">
          <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sx a927" data-od-id="hero-evidence" data-motion data-no="DO-ART-927" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-927. A graded photograph of a screen-print press hall with a run sheet pinned over it. The press slot was planned as one long run; what arrived was several short runs and one gap waiting on artwork sign-off. Short runs, a schedule built for long ones.">
  <div class="d17-ph"><img src="/images/d17/sectors/gen-press-hall-7c2764.webp" alt="" width="1000" height="1000"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Print &amp; promotional</span><span>Press 2 · today</span></div>
  <div class="stage" aria-hidden="true">
    <div class="sheet m-drop" style="animation-delay:.1s">
      <span class="ref">RS-02 · Run sheet</span>
      <h4>One slot, as planned and as run</h4>
      <div class="slot"><span class="lab">Planned · one long run</span><div class="long"></div></div>
      <div class="slot"><span class="lab">Run · short jobs</span>
        <div class="short m-fill" style="animation-delay:.6s"><i style="--g:1.4"></i><i style="--g:.8"></i><i style="--g:1.1"></i><i class="gap" style="--g:1.6"></i><i style="--g:.7"></i><i style="--g:1"></i></div></div>
      <p class="note">Every change of job is a set-up. The dashed slot is a job waiting on artwork sign-off: time on the press nobody could plan.</p>
    </div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">Short runs, <em>a schedule built for long ones.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-927 · Rev 01</span>
  </div>
</figure>` }} />
        </div>
      </section>

      {/* D17 INLINE ARTWORK · DO-ART-928 */}
      <section className="g-navy">
        <div className="wrap">
          <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sw a928" data-od-id="plate-architecture" data-motion data-no="DO-ART-928" data-rev="01" data-tx="schematic"
        aria-label="Drawn plate DO-ART-928. Four connected systems: quoting, supplier management, artwork approval and production scheduling, each feeding the next. Below them, a press week across two presses and finishing: short runs, each with its own drying and finishing step, and one press slot held open by a job waiting on artwork sign-off. When approval is in the same system as the schedule, the slot can be planned.">
  <div class="q-grid" aria-hidden="true"></div>
  <svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs><pattern id="q-hatch" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="12" height="12" fill="#023047"/><line x1="0" y1="0" x2="0" y2="12" stroke="#8ECAE6" stroke-opacity=".3" stroke-width="3"/></pattern></defs></svg>
  <svg class="q v-wide" viewBox="0 0 1600 700" aria-hidden="true">
    <defs>
      <marker id="q-ah2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#8ECAE6"/></marker>
      <marker id="q-ah3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#FFB703"/></marker>
    </defs>
    <g class="m-rise" style="animation-delay:.05s"><rect class="bx" x="20" y="10" width="330" height="112" rx="14"/>
      <text class="t-m" x="44" y="44" style="font-size:16px">01 · Quoting</text><text class="t-h" x="44" y="80" style="font-size:30px">Quote</text><text class="t-d" x="44" y="106" style="font-size:19px">cost of a quote, measured</text></g>
    <g class="m-rise" style="animation-delay:.2s"><rect class="bx" x="430" y="10" width="330" height="112" rx="14"/>
      <text class="t-m" x="454" y="44" style="font-size:16px">02 · Supply</text><text class="t-h" x="454" y="80" style="font-size:30px">Suppliers</text><text class="t-d" x="454" y="106" style="font-size:19px">every line, its own lead time</text></g>
    <g class="m-rise" style="animation-delay:.35s"><rect class="bx" x="840" y="10" width="330" height="112" rx="14"/>
      <text class="t-m" x="864" y="44" style="font-size:16px">03 · Approval</text><text class="t-h" x="864" y="80" style="font-size:30px">Artwork sign-off</text><text class="t-d" x="864" y="106" style="font-size:19px">brief, proof, signed</text></g>
    <g class="m-rise" style="animation-delay:.5s"><rect class="bx-a" x="1250" y="10" width="330" height="112" rx="14"/>
      <text class="t-m t-a" x="1274" y="44" style="font-size:16px">04 · Production</text><text class="t-h" x="1274" y="80" style="font-size:30px">Press schedule</text><text class="t-d" x="1274" y="106" style="font-size:19px">planned from what's real</text></g>
    <path class="ln m-draw" pathLength="1" style="animation-delay:.3s" d="M352 66 H424" marker-end="url(#q-ah2)"/>
    <path class="ln m-draw" pathLength="1" style="animation-delay:.45s" d="M762 66 H834" marker-end="url(#q-ah2)"/>
    <path class="ln-a m-draw" pathLength="1" style="animation-delay:.6s" d="M1172 66 H1244" marker-end="url(#q-ah3)"/>
    <text class="t-m" x="20" y="188" style="font-size:16px">The press week it has to plan</text>
    <g class="t-m" style="font-size:15px"><text x="250" y="222">Mon</text><text x="516" y="222">Tue</text><text x="782" y="222">Wed</text><text x="1048" y="222">Thu</text><text x="1314" y="222">Fri</text></g>
    <path class="ln-f" d="M236 232 V560 M502 232 V560 M768 232 V560 M1034 232 V560 M1300 232 V560 M1566 232 V560"/>
    <g class="t" style="font-size:21px;font-weight:700"><text x="20" y="280">Press 1</text><text x="20" y="380">Press 2</text><text x="20" y="480">Finishing</text></g>
    <g class="m-pop" style="animation-delay:.9s"><rect x="244" y="248" width="128" height="50" rx="7" class="f-c"/><rect x="376" y="248" width="46" height="50" rx="7" class="bx-x"/></g>
    <g class="m-pop" style="animation-delay:1s"><rect x="430" y="248" width="170" height="50" rx="7" class="f-c"/><rect x="604" y="248" width="46" height="50" rx="7" class="bx-x"/></g>
    <g class="m-pop" style="animation-delay:1.1s"><rect x="660" y="248" width="96" height="50" rx="7" class="f-c"/><rect x="760" y="248" width="40" height="50" rx="7" class="bx-x"/></g>
    <g class="m-pop" style="animation-delay:1.2s"><rect x="810" y="248" width="210" height="50" rx="7" class="f-c"/><rect x="1024" y="248" width="46" height="50" rx="7" class="bx-x"/></g>
    <g class="m-pop" style="animation-delay:1.3s"><rect x="1080" y="248" width="140" height="50" rx="7" class="f-c"/><rect x="1224" y="248" width="44" height="50" rx="7" class="bx-x"/><rect x="1280" y="248" width="150" height="50" rx="7" class="f-c"/></g>
    <g class="m-pop" style="animation-delay:1s"><rect x="244" y="348" width="200" height="50" rx="7" class="f-c"/><rect x="448" y="348" width="46" height="50" rx="7" class="bx-x"/></g>
    <g class="m-pop" style="animation-delay:1.1s"><rect x="506" y="348" width="120" height="50" rx="7" class="f-c"/><rect x="630" y="348" width="40" height="50" rx="7" class="bx-x"/></g>
    <g class="m-pop" style="animation-delay:1.6s"><rect x="680" y="344" width="330" height="58" rx="8" fill="url(#q-hatch)" stroke="#FFB703" stroke-width="2.6" stroke-dasharray="9 7"/>
      <text class="t t-a" x="700" y="380" style="font-size:19px;font-weight:700">Waiting on sign-off</text></g>
    <g class="m-pop" style="animation-delay:1.2s"><rect x="1020" y="348" width="160" height="50" rx="7" class="f-c"/><rect x="1184" y="348" width="46" height="50" rx="7" class="bx-x"/><rect x="1240" y="348" width="110" height="50" rx="7" class="f-c"/><rect x="1354" y="348" width="40" height="50" rx="7" class="bx-x"/></g>
    <g class="m-pop" style="animation-delay:1.4s"><rect x="430" y="448" width="80" height="50" rx="7" class="f-s"/><rect x="660" y="448" width="90" height="50" rx="7" class="f-s"/><rect x="820" y="448" width="70" height="50" rx="7" class="f-s"/><rect x="1080" y="448" width="110" height="50" rx="7" class="f-s"/><rect x="1240" y="448" width="80" height="50" rx="7" class="f-s"/><rect x="1440" y="448" width="90" height="50" rx="7" class="f-s"/></g>
    <path class="ln-d" d="M399 298 V330 C399 420 440 420 450 446 M627 298 C640 400 680 400 690 446 M1047 298 C1050 380 840 400 840 446 M1246 298 V330 C1246 360 1120 400 1110 446 M1372 398 C1380 430 1270 430 1270 446 M1207 398 C1300 430 1460 420 1470 446"/>
    <path class="ln-a m-draw" pathLength="1" style="animation-delay:2s" d="M1005 124 C1005 200 900 240 860 336" marker-end="url(#q-ah3)"/>
    <text class="t t-a" x="1030" y="162" style="font-size:19px;font-weight:700">Signed off in the same system:</text>
    <text class="t-d" x="1030" y="188" style="font-size:18px">the slot can be planned</text>
    <g transform="translate(236 600)">
      <rect width="40" height="22" rx="4" class="f-c"/><text class="t-d" x="52" y="17" style="font-size:18px">short run</text>
      <rect x="190" width="40" height="22" rx="4" class="bx-x"/><text class="t-d" x="242" y="17" style="font-size:18px">drying / cure</text>
      <rect x="420" width="40" height="22" rx="4" class="f-s"/><text class="t-d" x="472" y="17" style="font-size:18px">finishing</text>
      <rect x="620" width="40" height="22" rx="4" fill="url(#q-hatch)" stroke="#FFB703" stroke-width="2" stroke-dasharray="6 4"/><text class="t-d" x="672" y="17" style="font-size:18px">a press slot nobody can plan</text>
    </g>
  </svg>
  <svg class="q v-tall" viewBox="0 0 700 1060" aria-hidden="true">
    <defs>
      <marker id="q-ah4" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#8ECAE6"/></marker>
      <marker id="q-ah5" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#FFB703"/></marker>
    </defs>
    <g><rect class="bx" x="10" y="10" width="330" height="120" rx="14"/><text class="t-m" x="32" y="48" style="font-size:22px">01 · Quoting</text><text class="t-h" x="32" y="98" style="font-size:38px">Quote</text></g>
    <g><rect class="bx" x="360" y="10" width="330" height="120" rx="14"/><text class="t-m" x="382" y="48" style="font-size:22px">02 · Supply</text><text class="t-h" x="382" y="98" style="font-size:38px">Suppliers</text></g>
    <g><rect class="bx" x="10" y="170" width="330" height="120" rx="14"/><text class="t-m" x="32" y="208" style="font-size:22px">03 · Approval</text><text class="t-h" x="32" y="258" style="font-size:34px">Artwork sign-off</text></g>
    <g><rect class="bx-a" x="360" y="170" width="330" height="120" rx="14"/><text class="t-m t-a" x="382" y="208" style="font-size:22px">04 · Production</text><text class="t-h" x="382" y="258" style="font-size:34px">Press schedule</text></g>
    <path class="ln" d="M342 70 H354" marker-end="url(#q-ah4)"/><path class="ln" d="M525 132 C525 150 175 150 175 164" marker-end="url(#q-ah4)"/><path class="ln-a" d="M342 230 H354" marker-end="url(#q-ah5)"/>
    <text class="t-m" x="10" y="360" style="font-size:22px">The press week it has to plan</text>
    <g class="t-m" style="font-size:22px"><text x="190" y="410">Mon</text><text x="360" y="410">Tue</text><text x="530" y="410">Wed</text></g>
    <path class="ln-f" d="M180 424 V760 M350 424 V760 M520 424 V760 M690 424 V760"/>
    <g class="t" style="font-size:26px;font-weight:700"><text x="10" y="478">Press 1</text><text x="10" y="598">Press 2</text><text x="10" y="718">Finish</text></g>
    <rect x="186" y="440" width="90" height="62" rx="7" class="f-c"/><rect x="280" y="440" width="34" height="62" rx="7" class="bx-x"/><rect x="322" y="440" width="140" height="62" rx="7" class="f-c"/><rect x="466" y="440" width="34" height="62" rx="7" class="bx-x"/><rect x="510" y="440" width="120" height="62" rx="7" class="f-c"/><rect x="634" y="440" width="34" height="62" rx="7" class="bx-x"/>
    <rect x="186" y="560" width="120" height="62" rx="7" class="f-c"/><rect x="310" y="560" width="34" height="62" rx="7" class="bx-x"/>
    <rect x="352" y="554" width="330" height="74" rx="8" fill="url(#q-hatch)" stroke="#FFB703" stroke-width="3" stroke-dasharray="10 8"/><text class="t t-a" x="372" y="600" style="font-size:24px;font-weight:700">Waiting on sign-off</text>
    <rect x="300" y="680" width="80" height="62" rx="7" class="f-s"/><rect x="470" y="680" width="90" height="62" rx="7" class="f-s"/><rect x="620" y="680" width="66" height="62" rx="7" class="f-s"/>
    <path class="ln-a" d="M175 292 C175 420 340 480 420 548" marker-end="url(#q-ah5)"/>
    <text class="t t-a" x="10" y="830" style="font-size:26px;font-weight:700">Signed off in the same system:</text>
    <text class="t-d" x="10" y="866" style="font-size:24px">the slot can be planned.</text>
    <g transform="translate(10 920)">
      <rect width="44" height="26" rx="4" class="f-c"/><text class="t-d" x="58" y="21" style="font-size:22px">short run</text>
      <rect x="250" width="44" height="26" rx="4" class="bx-x"/><text class="t-d" x="308" y="21" style="font-size:22px">drying / cure</text>
      <rect y="50" width="44" height="26" rx="4" class="f-s"/><text class="t-d" x="58" y="71" style="font-size:22px">finishing</text>
      <rect x="250" y="50" width="44" height="26" rx="4" fill="url(#q-hatch)" stroke="#FFB703" stroke-width="2" stroke-dasharray="6 4"/><text class="t-d" x="308" y="71" style="font-size:22px">unplanned slot</text>
    </g>
  </svg>
  <div class="foot"><span class="k d17-mono">Quote · supply · approval · schedule</span><span class="d17-mark">decodedops.co.uk · DO-ART-928 · Rev 01</span></div>
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
                <span style={{ minWidth: '28px', height: '28px', borderRadius: 'var(--do-radius-full)', background: 'color-mix(in srgb, var(--do-cerulean) 20%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'var(--do-text-xs)', fontWeight: 'var(--do-weight-bold)', color: 'var(--do-sky-blue)' }}>{String(i + 1).padStart(2, '0')}</span>
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
                  <span className="kicker">Most common in print & promotional</span>
                  <h3 style={{ fontSize: 'var(--do-text-lg)', margin: '8px 0' }}>The problems I see most often</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {route.relatedProblems.map((p) => (
                      <li key={p.href} style={{ marginBottom: '10px' }}>
                        <Link href={p.href} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: 'var(--do-text-sm)' }}>
                          <ArrowRight size={14} style={{ marginTop: '2px', flexShrink: 0, color: 'var(--do-text-cerulean)' }} aria-hidden="true" />
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
                          <ArrowRight size={14} style={{ marginTop: '2px', flexShrink: 0, color: 'var(--do-text-cerulean)' }} aria-hidden="true" />
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
                          <ArrowRight size={14} style={{ marginTop: '2px', flexShrink: 0, color: 'var(--do-text-cerulean)' }} aria-hidden="true" />
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
          <p className="lede">If your print shop also runs embroidery, the operational challenges multiply. See the dedicated page for print and embroidery businesses.</p>
          <div className="btn-row" style={{ marginTop: '24px' }}>
            <Link className="btn btn--outline" href="/sectors/operations-consultant-print-embroidery">See the print & embroidery page <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section style={{ padding: 'clamp(40px, 4.5vw, 60px) 0' }} className="g-off">
        <div className="wrap">
          <span className="eyebrow">Case study</span>
          <h2>Supplier data and channel automation for a print business</h2>
          <div className="hair" />
          <p className="lede">Project-leading an ERP implementation alongside a custom Works build for supplier catalogue management and multi-channel automation.</p>
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
