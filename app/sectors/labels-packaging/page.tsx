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
  title: 'Software & Systems for Label & Packaging Printers: Decoded Ops',
  description: 'The right label version on press every time, variable data without workarounds, and the EDI your bigger customers keep asking for.',
  alternates: { canonical: '/sectors/labels-packaging' },
  openGraph: {
    title: 'Software & Systems for Label & Packaging Printers: Decoded Ops',
    description: 'The right label version on press every time, variable data without workarounds, and the EDI your bigger customers keep asking for.',
    url: 'https://decodedops.co.uk/sectors/labels-packaging',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software & Systems for Label & Packaging Printers: Decoded Ops',
    description: 'The right label version on press every time, variable data without workarounds, and the EDI your bigger customers keep asking for.',
  },
};

const sectorSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://decodedops.co.uk/sectors/labels-packaging#webpage',
      url: 'https://decodedops.co.uk/sectors/labels-packaging',
      name: 'Software & Systems for Label & Packaging Printers: Decoded Ops',
      description: 'The right label version on press every time, variable data without workarounds, and the EDI your bigger customers keep asking for.',
      isPartOf: { '@id': 'https://decodedops.co.uk/#organization' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What makes labels and packaging different from other print?',
          acceptedAnswer: { '@type': 'Answer', text: 'Labels and packaging sit where print, compliance, and the supply chain meet. There is no tolerance for error and turnaround is always tight. Compliance rules and label specs change, and keeping the right version in production across hundreds of label SKUs is a constant challenge.' },
        },
        {
          '@type': 'Question',
          name: 'Can you help with EDI integration for bigger customers?',
          acceptedAnswer: { '@type': 'Answer', text: 'Bigger label customers often expect EDI ordering, automated reorders, or direct system links. The work assesses your customer integration and EDI readiness as part of the audit.' },
        },
        {
          '@type': 'Question',
          name: 'How do you handle variable data at speed?',
          acceptedAnswer: { '@type': 'Answer', text: 'Short-run, high-variation jobs need print systems most generic software was not built for. The work reviews your variable data workflow from file intake to press-ready output and recommends systems built for short-run, variable-data label production.' },
        },
      ],
    },
  ],
};

const tagline = 'Variable data printing and compliance labelling ||demand precision most systems can\'t deliver.||';
const parts = tagline.split('||');

const challenges = [
  { title: 'Compliance and specification management', body: "Label specs change, and so do compliance rules. Keeping the right version in production across hundreds of label SKUs is a constant challenge." },
  { title: 'Variable data at speed', body: "Short-run, high-variation jobs need print systems most generic software wasn't built for. The workarounds are expensive." },
  { title: 'Substrate and press matching', body: "Matching the right substrate, adhesive, and finish to the right press, without errors, needs product data most businesses keep in spreadsheets." },
  { title: 'Customer integration and EDI', body: "Bigger label customers often expect EDI ordering, automated reorders, or direct system links. Setting that up and keeping it running is specialist work." },
];

const whatIdo = [
  'Audit spec and version control across your label SKU range',
  'Review your variable data workflow, from file intake to press-ready output',
  'Map substrate and press matching for accuracy',
  'Assess your customer integration and EDI readiness',
  'Find where compliance risk sits in your current processes',
  'Recommend systems built for short-run, variable-data label production',
];

const route = sectorRouting['labels-packaging'];

export default function LabelsPackagingPage() {
  return (
    <>
      <JsonLd data={sectorSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk' },
        { name: 'Sectors', url: 'https://decodedops.co.uk/#sectors' },
        { name: 'Labels & Packaging', url: 'https://decodedops.co.uk/sectors/labels-packaging' },
      ]} />
      {/* HERO SPLIT */}
      <section className={`g-off ${styles.heroSection}`}>
        <div className={`wrap ${styles.heroSplit}`}>
          <div>
            <span className="eyebrow">Sector · labels & packaging</span>
            <h1>
              {parts.map((p, i) =>
                i % 2 === 0
                  ? <span key={i}>{p}</span>
                  : <span key={i} style={{ color: '#219EBC' }}>{p}</span>
              )}
            </h1>
            <div className={styles.heroBody}>
              <p>Labels and packaging businesses sit where print, compliance, and the supply chain meet. There&apos;s no tolerance for error, and turnaround is always tight.</p>
            </div>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact">Book a free call <ArrowRight size={16} aria-hidden="true" /></Link>
              <Link className="btn btn--outline" href="/clarity">See how the audit works <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sx a925" data-od-id="hero-evidence" data-motion data-no="DO-ART-925" data-rev="01" data-tx="schematic"
        aria-label="Drawn plate DO-ART-925. One label SKU with three revisions. Revisions A and B are superseded and stopped at the version check. Revision C is live and is the only version released to the press. Hundreds of SKUs, one right version.">
  <div class="q-grid" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Labels &amp; packaging</span><span>SKU LBL-0141</span></div>
  <svg class="q" viewBox="0 0 560 520" aria-hidden="true">
    <defs>
      <pattern id="q-hatch" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="10" height="10" fill="#023047"/><line x1="0" y1="0" x2="0" y2="10" stroke="#8ECAE6" stroke-opacity=".28" stroke-width="3"/></pattern>
      <marker id="q-ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#FFB703"/></marker>
    </defs>
    <g class="m-rise" style="animation-delay:.1s">
      <rect class="bx-x" x="26" y="22" width="286" height="104" rx="10"/>
      <text class="t-m" x="44" y="50">Rev A · superseded</text>
      <text class="t" x="44" y="80" style="font-size:20px;font-weight:700">Allergen panel v1</text>
      <text class="t-d" x="44" y="106">Original artwork, first print</text>
      <line class="strike" x1="40" y1="74" x2="236" y2="74"/>
    </g>
    <g class="m-rise" style="animation-delay:.3s">
      <rect class="bx-x" x="26" y="146" width="286" height="104" rx="10"/>
      <text class="t-m" x="44" y="174">Rev B · superseded</text>
      <text class="t" x="44" y="204" style="font-size:20px;font-weight:700">Barcode moved</text>
      <text class="t-d" x="44" y="230">Customer change, month two</text>
      <line class="strike" x1="40" y1="198" x2="200" y2="198"/>
    </g>
    <g class="m-rise" style="animation-delay:.5s">
      <rect class="bx-a" x="26" y="270" width="286" height="116" rx="12"/>
      <text class="t-m t-a" x="44" y="300">Rev C · live</text>
      <text class="t-h" x="44" y="334" style="font-size:24px">Compliance text v3</text>
      <text class="t-d" x="44" y="362">The only version that may print</text>
    </g>
    <path class="ln-d" d="M312 74 H380 C404 74 404 110 404 150 V214"/>
    <path class="ln-d" d="M312 198 H360 C380 198 386 206 392 214"/>
    <g stroke="#8ECAE6" stroke-width="3" stroke-linecap="round"><path d="M394 180 l14 14 M408 180 l-14 14"/><path d="M356 188 l14 14 M370 188 l-14 14"/></g>
    <path class="ln-a m-draw" pathLength="1" style="animation-delay:.9s" d="M312 328 H362 C390 328 404 306 420 282"/>
    <g class="m-pop" style="animation-delay:.7s">
      <path d="M440 214 L484 256 L440 298 L396 256 Z" fill="#023047" stroke="#8ECAE6" stroke-width="2"/>
      <text class="t-m" x="440" y="252" text-anchor="middle" style="font-size:11px">Version</text>
      <text class="t-m" x="440" y="268" text-anchor="middle" style="font-size:11px">check</text>
    </g>
    <path class="ln-a m-draw" pathLength="1" style="animation-delay:1.4s" d="M440 298 V402" marker-end="url(#q-ah)"/>
    <g class="m-pop" style="animation-delay:1.9s">
      <rect class="bx" x="350" y="412" width="180" height="84" rx="12"/>
      <text class="t-m" x="370" y="440">To press</text>
      <text class="t-h" x="370" y="474" style="font-size:24px">Rev C only</text>
    </g>
    <path class="ln-f" d="M26 430 H300 M26 424 v12 M300 424 v12"/>
    <text class="t-d" x="26" y="462" style="font-size:15px">one SKU of hundreds, each with its own</text>
    <text class="t-d" x="26" y="484" style="font-size:15px">specification and its own history</text>
  </svg>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">Hundreds of SKUs, <em>one right version.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-925 · Rev 01</span>
  </div>
</figure>` }} />
        </div>
      </section>

      {/* D17 INLINE ARTWORK · DO-ART-926 */}
      <section className="g-navy">
        <div className="wrap">
          <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sw sw-doc a926" data-od-id="plate-architecture" data-motion data-no="DO-ART-926" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-926. A label specification sheet, revision C, and a variable-data proof laid over a photograph of packed cartons. The specification ties substrate, adhesive, finish, press set-up, variable data and the compliance check to one live version.">
  <div class="d17-ph"><img src="/images/d17/sectors/cat-packaging-48f149.jpg" alt="" width="900" height="950"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <figcaption class="sw-cap">
    <div class="k d17-mono">Specification control <span>· one live version</span></div>
    <div class="bar" aria-hidden="true"></div>
    <h3>The spec, the data and the check, on one sheet.</h3>
    <p>Substrate, adhesive, finish, press set-up and the variable data all hang off the live
      revision. When the spec changes, the old version can't reach the press, and the compliance
      check is recorded against the job, not remembered.</p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-926 · Rev 01</span>
  </figcaption>
  <div class="stage" aria-hidden="true">
    <div class="d17-doc doc-s m-drop" style="animation-delay:.1s">
      <span class="tab">REV C</span>
      <span class="ref">SP-0141 · Label specification</span>
      <h4>Food label, 100 × 70</h4>
      <p class="sub">live revision · issued to production</p>
      <dl class="spec">
        <dt>Substrate</dt><dd>White PP film</dd>
        <dt>Adhesive</dt><dd>Permanent, chiller grade</dd>
        <dt>Finish</dt><dd>Gloss laminate</dd>
        <dt>Press</dt><dd>Press 2 · four colour + varnish</dd>
        <dt>Variable</dt><dd>Batch code · best before</dd>
        <dt>Compliance</dt><dd class="hit">Allergen panel checked · Rev C</dd>
      </dl>
    </div>
    <div class="d17-doc doc-v m-drop" style="animation-delay:.4s">
      <span class="tab">VD</span>
      <span class="ref">VD-07 · Variable data proof</span>
      <h4>Every label, its own data</h4>
      <div class="lbl"><span class="l l--h"></span><span class="l" style="width:88%"></span><span class="l" style="width:74%"></span>
        <span class="l" style="width:80%"></span>
        <div class="vd"><span>BATCH <b>A0417</b></span><span>BEST BEFORE <b>MAR 27</b></span></div>
        <div class="bc"></div></div>
      <span class="approved m-pop" style="animation-delay:1.2s">Matches Rev C</span>
    </div>
  </div>
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
      {(route.targetService || (route.relatedProblems && route.relatedProblems.length > 0) || (route.relatedResources && route.relatedResources.length > 0)) && (
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
                  <span className="kicker">Most common in labels & packaging</span>
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
            </div>
          </div>
        </section>
      )}

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
