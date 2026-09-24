import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { D17Motion } from '@/components/D17Motion';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { sectorRouting } from '@/data/sector-routing';
import '@/app/d17-global.css';

export const metadata: Metadata = {
  title: 'Promotional merchandise: Decoded Ops',
  description: 'Every supplier in one clean catalogue, artwork that doesn\'t live in email, and margin protected at the order level.',
  alternates: { canonical: '/sectors/promotional-merchandise' },
  openGraph: {
    title: 'Promotional merchandise: Decoded Ops',
    description: 'Every supplier in one clean catalogue, artwork that doesn\'t live in email, and margin protected at the order level.',
    url: 'https://decodedops.co.uk/sectors/promotional-merchandise',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Promotional merchandise: Decoded Ops',
    description: 'Every supplier in one clean catalogue, artwork that doesn\'t live in email, and margin protected at the order level.',
  },
};

const sectorSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://decodedops.co.uk/sectors/promotional-merchandise#webpage',
      url: 'https://decodedops.co.uk/sectors/promotional-merchandise',
      name: 'Promotional merchandise: Decoded Ops',
      description: 'Every supplier in one clean catalogue, artwork that doesn\'t live in email, and margin protected at the order level.',
      isPartOf: { '@id': 'https://decodedops.co.uk/#organization' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do you manage multiple supplier ranges?',
          acceptedAnswer: { '@type': 'Answer', text: 'Promotional merchandise runs on dozens of supplier ranges. Matching products, managing pricing, and keeping stock current across all of them without re-keying is the single biggest challenge in the sector. The audit maps your full workflow from client enquiry to delivery.' },
        },
        {
          '@type': 'Question',
          name: 'How does the artwork approval loop work?',
          acceptedAnswer: { '@type': 'Answer', text: 'Client logos in every format, with version control and an audit trail. Customers should approve their own proofs instead of a back-and-forth that eats a day per order. Most promotional merchandise businesses are still managing approval by email.' },
        },
        {
          '@type': 'Question',
          name: 'How do I know where margin is leaking?',
          acceptedAnswer: { '@type': 'Answer', text: 'When decoration cost, supplier lead time variation, and artwork rework are not tracked at the individual order level, margin quietly erodes on every job. The audit puts a number on every finding in time, margin, and admin cost.' },
        },
      ],
    },
  ],
};

export default function PromotionalMerchandisePage() {
  const route = sectorRouting['promotional-merchandise'];
  return (
    <>
      <JsonLd data={sectorSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk' },
        { name: 'Sectors', url: 'https://decodedops.co.uk/sectors' },
        { name: 'Promotional Merchandise', url: 'https://decodedops.co.uk/sectors/promotional-merchandise' },
      ]} />

      {/* HERO SPLIT */}
      <section className="g-off" style={{ padding: 'clamp(40px, 4.5vw, 60px) 0' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(24px, 3vw, 48px)', alignItems: 'center' }}>
          <div>
            <span className="eyebrow">Sector · promotional merchandise</span>
            <h1>Promotional merchandise, without the spreadsheet chaos.</h1>
            <div style={{ marginTop: '20px' }}>
              <p style={{ fontSize: 'var(--do-text-lg)', lineHeight: 1.6, marginBottom: '12px' }}>Every client wants something slightly different, on a deadline, at a price point that leaves no room for error.</p>
              <p style={{ fontSize: 'var(--do-text-lg)', lineHeight: 1.6 }}>The businesses that do this well have their product data and their production process under control. Most don&apos;t, and it&apos;s costing them.</p>
            </div>
            <div className="btn-row" style={{ marginTop: '24px' }}>
              <Link className="btn btn--primary" href="/contact">Book a free call <ArrowRight size={16} aria-hidden="true" /></Link>
              <Link className="btn btn--outline" href="/clarity">See how the audit works <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          </div>
          {/* D17 hero artwork · DO-ART-929 */}
          <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sx a929" data-od-id="hero-evidence" data-motion data-no="DO-ART-929" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-929. A graded photograph of blank mugs with a client order laid over it: four product lines from four supplier ranges, each with its own lead time, and the four purchase orders it becomes. The order ships when the slowest line lands. One order, four supplier ranges, four different lead times.">
  <div class="d17-ph"><img src="/images/d17/sectors/cat-promo-96b20f.jpg" alt="" width="900" height="771"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Promotional merchandise</span><span>One client order</span></div>
  <div class="stage" aria-hidden="true">
    <div class="d17-doc doc-m m-drop" style="animation-delay:.45s">
      <span class="tab">PO ×4</span>
      <span class="ref">Purchase orders</span>
      <ol>
        <li><b>A</b>Supplier A<i></i></li>
        <li><b>B</b>Supplier B<i></i></li>
        <li><b>C</b>Supplier C<i></i></li>
        <li><b>D</b>Supplier D<i></i></li>
      </ol>
    </div>
    <div class="d17-doc doc-o m-drop" style="animation-delay:.1s">
      <span class="tab">SO</span>
      <span class="ref">SO-3308 · Client order</span>
      <h4>Conference welcome packs</h4>
      <p class="sub">one order · four supplier ranges</p>
      <ol>
        <li><b>01</b>Mug, ceramic<span>Supplier A</span><em>5 DAYS</em></li>
        <li><b>02</b>Pen, metal<span>Supplier B</span><em>3 DAYS</em></li>
        <li class="slow"><b>03</b>Tote, cotton<span>Supplier C</span><em>10 DAYS</em></li>
        <li><b>04</b>Lanyard<span>Supplier D</span><em>7 DAYS</em></li>
      </ol>
      <div class="ship">Ships when the slowest line lands<span>DAY 10</span></div>
    </div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">One order, four supplier ranges, <em>four different lead times.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-929 · Rev 01</span>
  </div>
</figure>` }} />
        </div>
      </section>

      {/* D17 INLINE ARTWORK · DO-ART-930 */}
      <section className="g-navy">
        <div className="wrap">
          <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sw a930" data-od-id="plate-architecture" data-motion data-no="DO-ART-930" data-rev="01" data-tx="photo"
        aria-label="Product screen DO-ART-930. The Works supplier matching view, live in September 2026: 317,812 products brought in from supplier feeds, 154,518 matched to a supplier automatically, 40 active suppliers. Example product rows are shown matched to suppliers A to D.">
  <div class="d17-ph"><img src="/images/d17/sectors/cat-promo-6d25d2.jpg" alt="" width="1100" height="733"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <figcaption class="sw-cap">
    <div class="k d17-mono">Works <span>· supplier matching</span></div>
    <div class="bar" aria-hidden="true"></div>
    <h3>Every supplier range, one clean catalogue.</h3>
    <p>Supplier feeds come in on their own, and each product is matched to its supplier before
      anyone re-keys a line. Pricing and stock stay current because nobody is copying them.</p>
    <div class="live d17-mono">Live system, September 2026</div>
    <span class="d17-mark">decodedops.co.uk · DO-ART-930 · Rev 01</span>
  </figcaption>
  <div class="win" aria-hidden="true">
    <div class="win-bar"><span class="dots"><i></i><i></i><i></i></span>
      <span class="crumb"><span>Catalogue ›</span> Supplier matching</span><span class="pill">LIVE</span></div>
    <div class="win-body">
      <nav class="win-nav"><span class="on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="m3 13 9 5 9-5"/></svg>Catalogue</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="17.5" r="1.6"/><circle cx="17" cy="17.5" r="1.6"/></svg>Fulfil</span>
        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M21 3 10 14M21 3l-7 18-4-7-7-4 18-7Z"/></svg>Publish</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>Insight</span></nav>
      <div class="win-main">
        <h5>Supplier matching</h5>
        <p class="s">Every product brought in, matched to the supplier range it came from</p>
        <div class="kpis">
          <div class="kpi m-rise" style="animation-delay:.1s"><div class="l">Products brought in</div>
            <p class="n">317,812</p><p class="d">from supplier feeds</p></div>
          <div class="kpi kpi--hit m-rise" style="animation-delay:.3s"><div class="l">Matched automatically</div>
            <p class="n">154,518</p><p class="d">to a supplier, before anyone had to touch them</p></div>
          <div class="kpi m-rise" style="animation-delay:.5s"><div class="l">Active suppliers</div>
            <p class="n">40</p><p class="d">ranges feeding in</p></div>
        </div>
        <div class="meter m-rise" style="animation-delay:.7s"><div class="row"><b>Matched to a supplier</b><span>154,518 of 317,812</span></div>
          <div class="track"><div class="fill m-fill" style="width:48.6%;animation-delay:1s"></div></div></div>
        <div class="match">
          <div class="hd"><b>Recently matched</b><span>example rows</span></div>
          <div class="r m-fade" style="animation-delay:1.4s"><b>Ceramic mug, white</b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg><span>Supplier A</span><span class="ok">MATCHED</span></div>
          <div class="r m-fade" style="animation-delay:1.55s"><b>Cotton tote, natural</b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg><span>Supplier C</span><span class="ok">MATCHED</span></div>
          <div class="r m-fade" style="animation-delay:1.7s"><b>Metal pen, black</b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg><span>Supplier B</span><span class="ok">MATCHED</span></div>
          <div class="r m-fade" style="animation-delay:1.85s"><b>Lanyard, 20mm</b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg><span>Supplier D</span><span class="ok">MATCHED</span></div>
        </div>
      </div>
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
          <p className="lede">In promotional merchandise, the same operational problems appear in different shapes across different businesses. These are the ones that cost the most.</p>
          <div className="grid grid--2">
            {[
              { title: 'Multi-supplier catalogue management', body: 'Dozens of supplier ranges, each with their own pricing, stock levels, and lead times. Matching products, managing pricing, and keeping stock current across all of them without re-keying data eats more admin hours than anything else in this trade.' },
              { title: 'The artwork loop', body: 'Client logos in every format, with version control and an audit trail. Customers should approve their own proofs instead of a back-and-forth that eats a day per order. Most promotional merchandise businesses are still managing approval by email.' },
              { title: 'Margin erosion at the order level', body: 'When decoration cost, supplier lead time variation, and artwork rework aren\u2019t tracked at the individual order level, margin quietly erodes on every job. It\u2019s invisible in the P&L until the year-end numbers land.' },
              { title: 'What quoting actually costs you', body: 'The cost of producing quotes that don\u2019t convert is rarely measured, and the answer is usually uncomfortable. A quoting process that takes thirty minutes per prospect becomes a full-time salary at scale.' },
              { title: 'eCommerce disconnected from supply', body: 'A product listed online that isn\u2019t connected to live supplier data means manual checks on every order. A catalogue of thousands of items makes that impossible to sustain at any volume.' },
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
              'Map your full workflow, from client enquiry to delivery',
              'Audit multi-supplier product data for accuracy and currency',
              'Review how artwork is stored, approved, and versioned',
              'Find where supplier fragmentation creates admin work',
              'See how margin is calculated and tracked per order',
              'Review quoting accuracy and quote-to-order costs',
              'Put a number on every finding in time, margin, and admin cost',
            ].map((item, i) => (
              <div key={i} className="card" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ minWidth: '28px', height: '28px', borderRadius: 'var(--do-radius-full)', background: 'color-mix(in srgb, var(--do-cerulean) 20%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'var(--do-text-xs)', fontWeight: 'var(--do-weight-bold)', color: 'var(--do-cerulean)' }}>{String(i + 1).padStart(2, '0')}</span>
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
                        <ArrowRight size={14} style={{ marginTop: '2px', flexShrink: 0, color: 'var(--do-cerulean)' }} aria-hidden="true" />
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
                        <ArrowRight size={14} style={{ marginTop: '2px', flexShrink: 0, color: 'var(--do-cerulean)' }} aria-hidden="true" />
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
                        <ArrowRight size={14} style={{ marginTop: '2px', flexShrink: 0, color: 'var(--do-cerulean)' }} aria-hidden="true" />
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
          <h2>Custom tooling for a service business</h2>
          <div className="hair" />
          <p className="lede">Full site rebuild and a custom tool: the kind of bespoke build that promotional merchandise businesses need when off-the-shelf doesn&apos;t fit.</p>
          <div className="btn-row" style={{ marginTop: '24px' }}>
            <Link className="btn btn--outline" href="/case-studies/eternal-fitness">Read the case study <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <D17Motion />
    </>
  );
}
