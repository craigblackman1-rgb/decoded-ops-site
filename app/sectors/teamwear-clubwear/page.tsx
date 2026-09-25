import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { D17Motion } from '@/components/D17Motion';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { sectorRouting } from '@/data/sector-routing';
import '@/app/d17-global.css';

export const metadata: Metadata = {
  title: 'Teamwear Management Software | Decoded Ops',
  description: 'Teamwear management software for squad numbers, sponsor logos and a hard deadline before the first match: the proof loop before the season starts.',
  alternates: { canonical: '/sectors/teamwear-clubwear' },
  openGraph: {
    title: 'Teamwear Management Software | Decoded Ops',
    description: 'Teamwear management software for squad numbers, sponsor logos and a hard deadline before the first match: the proof loop before the season starts.',
    url: 'https://decodedops.co.uk/sectors/teamwear-clubwear',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teamwear Management Software | Decoded Ops',
    description: 'Teamwear management software for squad numbers, sponsor logos and a hard deadline before the first match: the proof loop before the season starts.',
  },
};

const sectorSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://decodedops.co.uk/sectors/teamwear-clubwear#webpage',
      url: 'https://decodedops.co.uk/sectors/teamwear-clubwear',
      name: 'Teamwear & Clubwear: Decoded Ops',
      description: 'Squad numbers, sponsor logos and a hard deadline before the first match. The proof and approval loop that eats time before the season starts.',
      isPartOf: { '@id': 'https://decodedops.co.uk/#organization' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do you handle squad-level personalisation data?',
          acceptedAnswer: { '@type': 'Answer', text: 'Names, numbers, sponsor logos: every kit is a variant of the same product. Systems that treat that as one SKU force manual workarounds on every order. The audit finds where personalisation data is managed by hand.' },
        },
        {
          '@type': 'Question',
          name: 'How does production schedule around seasonal deadlines?',
          acceptedAnswer: { '@type': 'Answer', text: 'The first match of the season is a fixed date and the tolerance for lateness is zero. Production scheduling has to work backwards from that, and most systems do not account for it.' },
        },
        {
          '@type': 'Question',
          name: 'How do you fix the proof and approval bottleneck?',
          acceptedAnswer: { '@type': 'Answer', text: 'When twenty-four kits each need a proof, the approval cycle can consume more time than the production itself. Fixing that loop wins back more time than anywhere else in the job.' },
        },
      ],
    },
  ],
};

export default function TeamwearClubwearPage() {
  const route = sectorRouting['teamwear-clubwear'];
  return (
    <>
      <JsonLd data={sectorSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk' },
        { name: 'Sectors', url: 'https://decodedops.co.uk/sectors' },
        { name: 'Teamwear & Clubwear', url: 'https://decodedops.co.uk/sectors/teamwear-clubwear' },
      ]} />

      {/* HERO SPLIT */}
      <section className="g-off" style={{ padding: 'clamp(40px, 4.5vw, 60px) 0' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(24px, 3vw, 48px)', alignItems: 'center' }}>
          <div>
            <span className="eyebrow">Sector · teamwear & clubwear</span>
            <h1>Teamwear and clubwear, sized to the squad.</h1>
            <div style={{ marginTop: '20px' }}>
              <p style={{ fontSize: 'var(--do-text-lg)', lineHeight: 1.6, marginBottom: '12px' }}>Squad numbers, sponsor logos, and a hard deadline before the first match of the season.</p>
              <p style={{ fontSize: 'var(--do-text-lg)', lineHeight: 1.6 }}>Get the data wrong and it&apos;s not a quiet admin cost, it&apos;s kit that doesn&apos;t arrive in time.</p>
            </div>
            <div className="btn-row" style={{ marginTop: '24px' }}>
              <Link className="btn btn--primary" href="/contact">Book a free call <ArrowRight size={16} aria-hidden="true" /></Link>
              <Link className="btn btn--outline" href="/clarity">See how the audit works <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          </div>
          {/* D17 hero artwork — DO-ART-935 */}
          <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sx a935" data-od-id="hero-evidence" data-motion data-no="DO-ART-935" data-rev="01" data-tx="photo"
        aria-label="Product screen DO-ART-935. The supplier feed overview at a teamwear business, live in September 2026: 17 supplier feeds automated, 27,778 supplier products, 236,056 variants, 952 products live on their website, 1,846 decorated products, and every stock record with a bin location. Kit range churn, kept current on its own.">
  <div class="d17-ph"><img src="/images/d17/sectors/gen-bench-flatlay-v2-215572.webp" alt="" width="900" height="900"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Teamwear &amp; clubwear</span><span>Live, September 2026</span></div>
  <div class="win" aria-hidden="true">
    <div class="win-bar"><span class="dots"><i></i><i></i><i></i></span>
      <span class="crumb"><span>Catalogue ›</span> Supplier feeds</span><span class="pill">LIVE</span></div>
    <div class="win-main">
      <h5>Supplier feeds overview</h5>
      <p class="s">A teamwear business, every kit range brought in automatically</p>
      <div class="kpis">
        <div class="kpi kpi--hit m-rise" style="animation-delay:.1s"><div class="l">Supplier feeds</div><p class="n">17</p><p class="d">automated</p></div>
        <div class="kpi m-rise" style="animation-delay:.2s"><div class="l">Supplier products</div><p class="n">27,778</p><p class="d">brought in</p></div>
        <div class="kpi m-rise" style="animation-delay:.3s"><div class="l">Variants</div><p class="n">236,056</p><p class="d">sizes and colours</p></div>
        <div class="kpi m-rise" style="animation-delay:.4s"><div class="l">Decorated</div><p class="n">1,846</p><p class="d">decorated products</p></div>
        <div class="kpi m-rise" style="animation-delay:.5s"><div class="l">On the website</div><p class="n">952</p><p class="d">products live</p></div>
        <div class="kpi m-rise" style="animation-delay:.6s"><div class="l">Binned</div><p class="n">100%</p><p class="d">stock with a bin</p></div>
      </div>
      <div class="meter m-rise" style="animation-delay:.7s"><div class="row"><b>Stock records with a bin location</b><span>100%</span></div>
        <div class="track"><div class="fill m-fill" style="width:100%;animation-delay:1s"></div></div></div>
    </div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">Kit range churn, <em>kept current on its own.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-935 · Rev 01</span>
  </div>
</figure>` }} />
        </div>
      </section>

      {/* D17 INLINE ARTWORK — DO-ART-936 */}
      <section className="g-navy">
        <div className="wrap">
          <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sw sw-doc a936" data-od-id="plate-architecture" data-motion data-no="DO-ART-936" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-936. A graded photograph of a folded base garment with a squad list and a sponsor logo specification laid over it. One base garment becomes twenty-four kits, each with its own name, number and size, and the same approved sponsor logo. One base garment, twenty-four names, twenty-four numbers.">
  <div class="d17-ph"><img src="/images/d17/sectors/prod-polo-5947fe.webp" alt="" width="900" height="905"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <figcaption class="sw-cap">
    <div class="k d17-mono">Squad-level data <span>· one kit per player</span></div>
    <div class="bar" aria-hidden="true"></div>
    <h3>One base garment, twenty-four names, twenty-four numbers.</h3>
    <p>Every kit is a variant of the same product. The squad list, the sizes and the approved
      sponsor logo sit on the order, so nobody re-types a name, and the first match of the season
      gets the kit it was promised.</p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-936 · Rev 01</span>
  </figcaption>
  <div class="stage" aria-hidden="true">
    <div class="d17-doc doc-q m-drop" style="animation-delay:.1s">
      <span class="tab">SQUAD</span>
      <span class="ref">SQ-U14 · Squad list · home kit</span>
      <h4>Under-14s, home shirt</h4>
      <p class="sub">one base garment · 24 players</p>
      <table class="squad">
        <tr><th>No.</th><th>Name on back</th><th style="text-align:right">Size</th></tr>
        <tr><td class="no">1</td><td><i style="width:62%"></i></td><td class="sz">YL</td></tr>
        <tr><td class="no">2</td><td><i style="width:48%"></i></td><td class="sz">YM</td></tr>
        <tr><td class="no">4</td><td><i style="width:70%"></i></td><td class="sz">S</td></tr>
        <tr><td class="no">7</td><td><i style="width:55%"></i></td><td class="sz">YL</td></tr>
        <tr><td class="no">9</td><td><i style="width:66%"></i></td><td class="sz">S</td></tr>
        <tr><td class="no">10</td><td><i style="width:44%"></i></td><td class="sz">YM</td></tr>
        <tr class="more"><td colspan="3">+ 18 more players, same garment</td></tr>
      </table>
    </div>
    <div class="d17-doc doc-sp m-drop" style="animation-delay:.4s">
      <span class="tab">SP</span>
      <span class="ref">SP-01 · Sponsor logo</span>
      <h4>Front, centre chest</h4>
      <svg class="shirt" viewBox="0 0 120 110"><path d="M40 6 L20 14 L4 34 L20 46 L26 40 V104 H94 V40 L100 46 L116 34 L100 14 L80 6 C76 16 68 20 60 20 C52 20 44 16 40 6 Z" fill="#F8F9FA" stroke="#023047" stroke-width="2.5"/><rect x="40" y="42" width="40" height="16" rx="3" fill="#219EBC"/><path d="M40 64 H80" stroke="#023047" stroke-opacity=".35" stroke-width="2" stroke-dasharray="3 3"/></svg>
      <dl class="spec">
        <dt>Size</dt><dd>250 mm wide</dd>
        <dt>Method</dt><dd>Heat transfer, one colour</dd>
        <dt>Artwork</dt><dd class="hit">Approved by the club</dd>
      </dl>
    </div>
  </div>
</figure>` }} />
        </div>
      </section>

      {/* COMMON CHALLENGES */}
      <section className="g-white">
        <div className="wrap">
          <span className="eyebrow">Common challenges</span>
          <h2>Where the problems tend to live</h2>
          <div className="hair" />
          <p className="lede">In teamwear and clubwear, the same operational problems appear in different shapes across different businesses. These are the ones that cost the most.</p>
          <div className="grid grid--2">
            {[
              { title: 'Squad-level personalisation data', body: "Names, numbers, sponsor logos: every kit is a variant of the same product. Systems that treat that as one SKU force manual workarounds on every order." },
              { title: 'Seasonal deadline pressure', body: "The first match of the season is a fixed date. The tolerance for lateness is zero. Production scheduling has to work backwards from that, and most systems don't account for it." },
              { title: 'Kit range churn', body: "Kit ranges change season to season. Keeping supplier data current across every channel is a constant maintenance task. When it's wrong, it's the order that fails, not the system." },
              { title: 'Sponsor logo management', body: "Every sponsor has their own logo specifications, positioning requirements, and approval process. Managing that at squad scale across multiple teams and age groups is a dedicated workflow that email can't handle." },
              { title: 'The proof and approval bottleneck', body: "When twenty-four kits each need a proof, the approval cycle can consume more time than the production itself. Fix that loop and you win back more time than anywhere else in the job." },
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
              'Map your full workflow, from squad list to delivery',
              'Find where personalisation data is managed by hand',
              'Check supplier catalogue data for kit range accuracy',
              'Audit proof approval for sponsor logos and numbering',
              'See how seasonal deadlines sit against production capacity',
              'Put a number on every finding in time, admin cost, and rework',
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

      {/* CASE STUDY */}
      <section style={{ padding: 'clamp(40px, 4.5vw, 60px) 0' }} className="g-off">
        <div className="wrap">
          <span className="eyebrow">Case study</span>
          <h2>B2B portal and ERP evaluation for a workwear distributor</h2>
          <div className="hair" />
          <p className="lede">Vendor requirements, procurement, and integration architecture for a B2B ordering portal: the same ordering complexity, the same sector challenges.</p>
          <div className="btn-row" style={{ marginTop: '24px' }}>
            <Link className="btn btn--outline" href="/case-studies/case-study-03">Read the case study <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <D17Motion />
    </>
  );
}
