import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { D17Motion } from '@/components/D17Motion';
import { Plate } from '@/components/Plate';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { sectorRouting } from '@/data/sector-routing';
import '@/app/d17-global.css';

export const metadata: Metadata = {
  title: 'Schoolwear Software | Decoded Ops',
  description: 'Schoolwear software that keeps supplier feeds current before the back-to-school peak, handles badge data as pupil numbers grow, and hits September.',
  alternates: { canonical: '/sectors/schoolwear' },
  openGraph: {
    title: 'Schoolwear Software | Decoded Ops',
    description: 'Schoolwear software that keeps supplier feeds current before the back-to-school peak, handles badge data as pupil numbers grow, and hits September.',
    url: 'https://decodedops.co.uk/sectors/schoolwear',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schoolwear Software | Decoded Ops',
    description: 'Schoolwear software that keeps supplier feeds current before the back-to-school peak, handles badge data as pupil numbers grow, and hits September.',
  },
};

const sectorSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://decodedops.co.uk/sectors/schoolwear#webpage',
      url: 'https://decodedops.co.uk/sectors/schoolwear',
      name: 'Schoolwear: Decoded Ops',
      description: 'Keeping supplier feeds current before the back-to-school peak, badge data that scales with growing pupils, and production scheduling that hits September every time.',
      isPartOf: { '@id': 'https://decodedops.co.uk/#organization' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do you handle the back-to-school peak?',
          acceptedAnswer: { '@type': 'Answer', text: 'Schoolwear ranges do not change often, but when a supplier updates sizing or stock you need to know before the August rush, not during it. The work finds where supplier data lag creates orders you cannot fulfil before peak season.' },
        },
        {
          '@type': 'Question',
          name: 'How does badge and embroidery management work at scale?',
          acceptedAnswer: { '@type': 'Answer', text: 'Every school badge is a thread file before it is a garment. Managing badge specifications, embroidery requirements, and version control at scale across dozens of school accounts is a dedicated workflow that spreadsheets were never built for.' },
        },
        {
          '@type': 'Question',
          name: 'Does Decoded Works replace my existing platform?',
          acceptedAnswer: { '@type': 'Answer', text: 'It can run alongside the existing platform, or as the full system where nothing off the shelf fits. It handles both teamwear and schoolwear lines with supplier feeds automated.' },
        },
      ],
    },
  ],
};

export default function SchoolwearPage() {
  const route = sectorRouting['schoolwear'];
  return (
    <>
      <JsonLd data={sectorSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk' },
        { name: 'Sectors', url: 'https://decodedops.co.uk/sectors' },
        { name: 'Schoolwear', url: 'https://decodedops.co.uk/sectors/schoolwear' },
      ]} />
      {/* HERO SPLIT */}
      <section className="g-off" style={{ padding: 'clamp(40px, 4.5vw, 60px) 0' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(24px, 3vw, 48px)', alignItems: 'center' }}>
          <div>
            <span className="eyebrow">Sector · schoolwear</span>
            <h1>Schoolwear, and the back-to-school peak that decides your year.</h1>
            <div style={{ marginTop: '20px' }}>
              <p style={{ fontSize: 'var(--do-text-lg)', lineHeight: 1.6, marginBottom: '12px' }}>Blazers, PE kit, and growing pupils, all needing to be right before the first week of September.</p>
              <p style={{ fontSize: 'var(--do-text-lg)', lineHeight: 1.6 }}>The businesses that get this right have their supplier data and sizing sorted well before the rush starts.</p>
            </div>
            <div className="btn-row" style={{ marginTop: '24px' }}>
              <Link className="btn btn--primary" href="/contact">Book a free call <ArrowRight size={16} aria-hidden="true" /></Link>
              <Link className="btn btn--outline" href="/clarity">See how the audit works <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          </div>
          {/* D17 hero artwork */}
          <div dangerouslySetInnerHTML={{ __html: `
      <figure class="d17 sx a931" data-od-id="hero-evidence" data-motion data-no="DO-ART-931" data-rev="01" data-tx="schematic"
              aria-label="Drawn plate DO-ART-931. Schoolwear orders across the year, from April to October: flat through spring, a steep surge in the August window, and a fall after the first week of September. An amber line in early summer marks where supplier data and sizing need to be ready. An inset shows the size spread shifting from last September to this one. Sorted before the rush, not during it.">
        <div class="q-grid" aria-hidden="true"></div>
        <div class="sx-top d17-mono" aria-hidden="true"><span>Schoolwear</span><span>Orders, April to October</span></div>
        <svg class="q" viewBox="0 0 560 500" aria-hidden="true">
          <defs>
            <pattern id="q-hatch" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="10" height="10" fill="#023047"/><line x1="0" y1="0" x2="0" y2="10" stroke="#8ECAE6" stroke-opacity=".22" stroke-width="3"/></pattern>
            <linearGradient id="q-area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#219EBC" stop-opacity=".55"/><stop offset="1" stop-color="#219EBC" stop-opacity=".05"/></linearGradient>
          </defs>
          <rect x="344" y="96" width="112" height="304" fill="url(#q-hatch)" opacity=".9"/>
          <path class="ln-f" d="M344 96 V400 M456 96 V400"/>
          <text class="t-m" x="400" y="86" text-anchor="middle" style="font-size:13px">The rush</text>
          <path class="ln-f" d="M30 400 H540"/>
          <g class="t-m" style="font-size:13px" text-anchor="middle"><text x="50" y="428">Apr</text><text x="125" y="428">May</text><text x="200" y="428">Jun</text><text x="275" y="428">Jul</text><text x="365" y="428" class="t-a">Aug</text><text x="440" y="428">Sep</text><text x="515" y="428">Oct</text></g>
          <path class="m-fade" style="animation-delay:.6s" d="M30 386 C150 384 240 380 300 364 C336 352 352 190 382 132 C402 96 424 104 440 190 C456 290 480 372 540 386 V400 H30 Z" fill="url(#q-area)"/>
          <path class="m-draw" pathLength="1" d="M30 386 C150 384 240 380 300 364 C336 352 352 190 382 132 C402 96 424 104 440 190 C456 290 480 372 540 386" fill="none" stroke="#8ECAE6" stroke-width="4" stroke-linecap="round"/>
          <g class="m-pop" style="animation-delay:1.6s">
            <path d="M236 150 V400" stroke="#FFB703" stroke-width="3.5"/>
            <circle cx="236" cy="150" r="8" fill="#FFB703"/>
            <text class="t t-a" x="222" y="170" text-anchor="end" style="font-size:18px;font-weight:700">Ready by here</text>
            <text class="t-d" x="222" y="194" text-anchor="end" style="font-size:17px">supplier data current,</text>
            <text class="t-d" x="222" y="216" text-anchor="end" style="font-size:17px">sizes set, badges signed off</text>
          </g>
          <g class="m-rise" style="animation-delay:.3s">
            <rect class="bx" x="30" y="14" width="210" height="112" rx="10"/>
            <text class="t-m" x="46" y="38" style="font-size:12px">Size spread</text>
            <path d="M50 108 C80 108 88 58 110 58 C132 58 140 108 170 108" fill="none" stroke="#8ECAE6" stroke-width="2" stroke-dasharray="5 4" opacity=".7"/>
            <path d="M70 108 C104 108 112 50 136 50 C160 50 170 108 214 108" fill="none" stroke="#8ECAE6" stroke-width="3"/>
            <path class="ln-f" d="M46 108 H226"/>
            <text class="t-d" x="176" y="66" style="font-size:12px">this Sept</text>
            <text class="t-d" x="46" y="66" style="font-size:12px" opacity=".8">last</text>
          </g>
          <path d="M452 392 V408" stroke="#F8F9FA" stroke-width="2"/>
          <text class="t-d" x="452" y="466" text-anchor="middle" style="font-size:14px">first week of term</text>
          <path class="ln-f" d="M452 436 V448"/>
        </svg>
        <div class="sx-foot">
          <div class="sx-bar" aria-hidden="true"></div>
          <p class="sx-say">Sorted before the rush, <em>not during it.</em></p>
          <span class="d17-mark">decodedops.co.uk · DO-ART-931 · Rev 01</span>
        </div>
      </figure>` }} />
        </div>
      </section>

      {/* D17 INLINE ARTWORK · DO-ART-932 */}
      <section className="g-navy">
        <div className="wrap">
          <div dangerouslySetInnerHTML={{ __html: `
      <figure class="d17 sw sw-doc a932" data-od-id="plate-architecture" data-motion data-no="DO-ART-932" data-rev="01" data-tx="photo"
              aria-label="Artwork DO-ART-932. A graded photograph of an embroidery head stitching a garment, with a school badge specification (revision 03, approved by the school) and a parent order laid over it. The order is routed to the school, picks up badge revision 03, takes the size from live stock and is delivered to the school. Every school badge is a thread file before it's a garment.">
        <div class="d17-ph"><img src="/images/d17/sectors/hero-workshop-037adf.webp" alt="" width="1100" height="963"></div>
        <div class="d17-scan" aria-hidden="true"></div>
        <figcaption class="sw-cap">
          <div class="k d17-mono">Badge management <span>· per school</span></div>
          <div class="bar" aria-hidden="true"></div>
          <h3>Every school badge is a thread file before it's a garment.</h3>
          <p>The badge, its stitch file and the school's approval live in one record. A parent's order
            picks up the right one on its way to the machine, so no email thread decides which version
            gets stitched in August.</p>
          <span class="d17-mark">decodedops.co.uk · DO-ART-932 · Rev 01</span>
        </figcaption>
        <div class="stage" aria-hidden="true">
          <div class="d17-doc doc-b m-drop" style="animation-delay:.1s">
            <span class="tab">REV 03</span>
            <span class="ref">BDG-A · Badge specification</span>
            <h4>School A crest, left chest</h4>
            <p class="sub">embroidery · one record per school</p>
            <div class="badge">
              <svg viewBox="0 0 92 104"><path d="M46 4 L86 16 V52 C86 76 68 92 46 100 C24 92 6 76 6 52 V16 Z" fill="#023047"/><path d="M46 14 L76 23 V52 C76 70 63 83 46 89 C29 83 16 70 16 52 V23 Z" fill="none" stroke="#FFB703" stroke-width="3"/><path d="M30 46 H62 M46 32 V74" stroke="#8ECAE6" stroke-width="5"/><circle cx="46" cy="46" r="7" fill="#FFB703"/></svg>
              <dl class="spec" style="margin-top:0">
                <dt>Method</dt><dd>Embroidery</dd>
                <dt>Position</dt><dd>Left chest, 80mm</dd>
                <dt>Thread</dt><dd><span class="swatch"><i style="background:#023047"></i><i style="background:#FFB703"></i><i style="background:#8ECAE6"></i><i style="background:#FFFFFF"></i></span></dd>
                <dt>File</dt><dd class="hit">BDG-A stitch file · Rev 03</dd>
              </dl>
            </div>
            <span class="approved m-pop" style="animation-delay:1.1s">Approved by the school</span>
          </div>
          <div class="d17-doc doc-r m-drop" style="animation-delay:.4s">
            <span class="tab">WEB</span>
            <span class="ref">Parent order · routed</span>
            <h4>Blazer, age 11–12</h4>
            <ol class="route">
              <li class="m-fade" style="animation-delay:1s"><small>From the parent portal</small>School A</li>
              <li class="m-fade" style="animation-delay:1.2s"><small>Badge</small>BDG-A · Rev 03, not Rev 02</li>
              <li class="m-fade" style="animation-delay:1.4s"><small>Size</small>11–12, from live stock</li>
              <li class="end m-fade" style="animation-delay:1.6s"><small>Delivery</small>To the school, with the class order</li>
            </ol>
          </div>
        </div>
      </figure>` }} />
        </div>
      </section>

      {/* FEATURES */}
      <section className="g-white">
        <div className="wrap">
          <span className="eyebrow">Where it usually breaks</span>
          <h2>Three problems, all of them worse in August.</h2>
          <div className="hair" />
          <div className="grid grid--2" style={{ marginTop: '32px' }}>
            {[
              {
                title: 'Supplier feeds, current before the peak hits',
                body: "Schoolwear ranges don't change often, but when a supplier does update sizing or stock, you need to know before the August rush, not during it. Decoded Works keeps that current automatically.",
              },
              {
                title: 'Sizing that scales with growing pupils',
                body: "A school's sizing spread is wider and shifts every year. Stock and bin management that understands that means fewer \u201csold out in the size everyone actually needs\u201d moments in week one.",
              },
              {
                title: 'Proven at a teamwear business',
                body: "Decoded Works runs alongside the existing platform, or as the full system where nothing off the shelf fits, handling both teamwear and schoolwear lines: 17 supplier feeds automated, a projected 20 to 40 hours a week.",
              },
            ].map((f, i) => (
              <div key={i} className="card" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ minWidth: '28px', height: '28px', borderRadius: 'var(--do-radius-full)', background: 'color-mix(in srgb, var(--do-cerulean) 20%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'var(--do-text-xs)', fontWeight: 'var(--do-weight-bold)', color: 'var(--do-text-cerulean)' }}>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 style={{ fontSize: 'var(--do-text-lg)', margin: '0 0 8px' }}>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMON CHALLENGES */}
      <section className="g-white">
        <div className="wrap">
          <span className="eyebrow">Common challenges</span>
          <h2>Where the problems tend to live</h2>
          <div className="hair" />
          <p className="lede">In schoolwear, the same operational problems appear in different shapes across different businesses. These are the ones that cost the most.</p>
          <div className="grid grid--2">
            {[
              { title: 'Supplier feeds before the peak', body: "Schoolwear ranges don't change often, but when a supplier does update sizing or stock, you need to know before the August rush, not during it. Stale supplier data at peak season creates orders you can't fulfil." },
              { title: 'Sizing that scales with growing pupils', body: "A school's sizing spread is wider and shifts every year. Stock management that understands that means fewer stockouts of the sizes everyone actually needs in the first week of term." },
              { title: 'Badge and embroidery management', body: "Every school badge is a thread file before it's a garment. Managing badge specifications, embroidery requirements, and version control at scale, across dozens of school accounts, is a dedicated workflow that spreadsheets were never built for." },
              { title: 'The parent portal gap', body: "Orders coming through parent portals that don't connect to production systems mean manual re-entry of every order. For the largest schools, that's hundreds of orders requiring individual handling." },
            ].map((c, i) => (
              <article key={i} className="card">
                <span className="kicker">{String(i + 1).padStart(2, '0')} &middot; {c.title}</span>
                <p>{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW I HELP */}
      <section className="g-navy">
        <div className="wrap">
          <span className="eyebrow">How I help</span>
          <h2>What the work actually looks like</h2>
          <div className="hair" />
          <p className="lede">A structured audit followed by specific, costed recommendations. No vague frameworks, no generic advice.</p>
          <div className="grid grid--2" style={{ marginTop: '32px' }}>
            {[
              'Map your whole schoolwear workflow, from supplier catalogue to parent delivery',
              'Find where supplier data lag creates orders you cannot fulfil before peak season',
              'Audit sizing spread and its impact on stock availability',
              'Review badge specifications and how they connect to production',
              'See how parent orders flow from portal to production floor',
              'Put a number on every finding in time, stockout cost, and admin overhead',
            ].map((item, i) => (
              <div key={i} className="card" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ minWidth: '28px', height: '28px', borderRadius: 'var(--do-radius-full)', background: 'color-mix(in srgb, var(--do-cerulean) 20%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'var(--do-text-xs)', fontWeight: 'var(--do-weight-bold)', color: 'var(--do-text-cerulean)' }}>{String(i + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED PROBLEMS + RESOURCES */}
      <section style={{ padding: 'clamp(40px, 4.5vw, 60px) 0' }} className="g-tint">
        <div className="wrap">
          <div className="grid grid--3">
            {route.relatedProblems.length > 0 && (
              <article className="card">
                <span className="kicker">Common problems</span>
                <h3>The problems I see most often</h3>
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
              </article>
            )}
            {route.relatedResources.length > 0 && (
              <article className="card">
                <span className="kicker">Useful next steps</span>
                <h3>Resources</h3>
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
              </article>
            )}
            {route.relatedSectors.length > 0 && (
              <article className="card">
                <span className="kicker">Related sectors</span>
                <h3>Adjacent trades</h3>
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
              </article>
            )}
          </div>
        </div>
      </section>

      <D17Motion />
    </>
  );
}
