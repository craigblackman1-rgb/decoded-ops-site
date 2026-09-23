import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { Plate } from '@/components/Plate';

// Target keyword: "erp implementation project lead" (secondary: "case study 01 decoded ops")
export const metadata = {
  title: 'Case study 01: Hanicks | Decoded Ops',
  description: 'Hanicks sells heating spares. A big catalogue arriving from lots of suppliers in different formats, needing to be clean and current on every channel.',
  alternates: { canonical: '/case-studies/case-study-01' },
  openGraph: {
    type: 'article',
    title: 'Case study 01: Hanicks | Decoded Ops',
    description: 'Hanicks sells heating spares. A big catalogue arriving from lots of suppliers in different formats, needing to be clean and current on every channel.',
    url: 'https://decodedops.co.uk/case-studies/case-study-01',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case study 01: Hanicks | Decoded Ops',
    description: 'Hanicks sells heating spares. A big catalogue, lots of suppliers, needing to be clean and current.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Case study 01: Hanicks',
      description: 'Hanicks sells heating spares. A big catalogue arriving from lots of suppliers in different formats, needing to be clean and current on every channel.',
      author: { '@type': 'Person', name: 'Craig Blackman' },
      publisher: {
        '@type': 'Organization', name: 'Decoded Ops',
        logo: { '@type': 'ImageObject', url: 'https://decodedops.co.uk/logo.png', width: 512, height: 512 },
      },
      image: 'https://decodedops.co.uk/opengraph-image',
      datePublished: '2026-07-21',
      dateModified: '2026-09-23',
      url: 'https://decodedops.co.uk/case-studies/case-study-01',
    },
  ],
};

export default function CaseStudy01Page() {
  return (
    <>
      <style>{`
        .hero-center{ text-align:center; max-width:760px; margin-inline:auto }
        .hero-center h1{ max-width:none; margin-inline:auto }
        .hero-center .lede{ margin:18px auto 0 }
        .hero-center .eyebrow{ margin-inline:auto }
        .stat .stat-num{ font-family:var(--do-font-heading); font-weight:800;
          font-size:clamp(2.2rem,4vw,3.2rem); line-height:1; letter-spacing:-.03em;
          color:var(--do-amber); font-variant-numeric:tabular-nums }
        .stat .stat-label{ margin:10px 0 0; color:var(--do-text-muted-on-dark); font-size:.9375rem;
          max-width:24ch }
        .prose{ max-width:72ch; margin-inline:auto }
        .prose h2{ font-size:var(--do-text-xl); margin:36px 0 14px }
        .prose h2:first-child{ margin-top:0 }
        .prose p{ color:var(--do-text-secondary); line-height:var(--do-leading-relaxed); margin-bottom:14px }
        .progress-note{ background:color-mix(in srgb, var(--do-amber) 10%, transparent);
          border:1px solid color-mix(in srgb, var(--do-amber) 30%, transparent);
          border-radius:var(--do-radius-2xl); padding:24px 28px; margin-top:36px }
        .progress-note h3{ font-size:var(--do-text-base); margin-bottom:8px }
        .progress-note p{ margin:0; color:var(--do-text-secondary); font-size:var(--do-text-sm) }
        .cta-strip{ text-align:center }
        .cta-strip h2{ max-width:none; margin-inline:auto }
        .cta-strip .lede{ margin:18px auto 32px; max-width:52ch }
        .hero-cta{ display:flex; gap:12px; flex-wrap:wrap; justify-content:center }
      `}</style>
      <main>
        <JsonLd data={schema} />

        {/* 1. HERO */}
        <section className="g-off">
          <div className="wrap hero-center">
            <span className="eyebrow">Client work · heating spares &amp; eCommerce</span>
            <h1>The ERP changed. The data work carried on.</h1>
            <p className="lede">
              Hanicks sells heating spares. It isn&apos;t decorated goods, but it&apos;s the same problem underneath: a big catalogue arriving from lots of suppliers in different formats, which has to be clean and current on every channel it sells through.
            </p>
          </div>
        </section>

        {/* 1b. PLATE · DO-ART-205 */}
        <section className="g-navy">
          <div className="wrap">
            <span className="eyebrow">Measure &middot; DO-ART-205</span>
            <h2>Not projected. Not modelled. What&apos;s actually in the system.</h2>
            <div className="hair"></div>
            <p className="lede" style={{ marginTop: 16 }}>Catalogue figures from the live system, September 2026.</p>

            <div className="plate-scroll">
              <div className="plate-frame" data-od-id="plate-cs01">
                <Plate tone="dark" p="hs" title="Supplier catalogue: before and after"
                       sub="Case study 01 · 317,812 products, 154,518 matched automatically"
                       no="DO-ART-205" rev="01" cls="DECODED OPS · ISSUED">

                  <g className="sk-fade sk-s2" filter="url(#hs-shadow)">
                    <rect x="100" y="210" width="650" height="480" rx="14" fill="url(#hs-amber-n)"
                          className="p-node-a" strokeWidth="1.6"/>
                    <rect x="100" y="210" width="650" height="56" rx="14" className="p-amber" opacity=".92"/>
                    <rect x="100" y="252" width="650" height="14" className="p-amber" opacity=".92"/>
                    <text x="128" y="248" fontFamily="Outfit,sans-serif" fontWeight="800" fontSize="22"
                          letterSpacing="2" fill="var(--do-prussian-blue)">BEFORE</text>
                  </g>
                  <g className="sk-fade sk-s3" fontSize="22">
                    <text x="140" y="332" className="p-ink">317,812 products imported from feeds</text>
                    <text x="140" y="402" className="p-ink">No consistent SKU across suppliers</text>
                    <text x="140" y="472" className="p-ink">No reliable stock picture</text>
                    <text x="140" y="542" className="p-ink">The platform getting the blame</text>
                    <g className="p-samber" strokeWidth="2.4" strokeLinecap="round">
                      <path d="M106 319 L118 331 M118 319 L106 331"/>
                      <path d="M106 389 L118 401 M118 389 L106 401"/>
                      <path d="M106 459 L118 471 M118 459 L106 471"/>
                      <path d="M106 529 L118 541 M118 529 L106 541"/>
                    </g>
                  </g>

                  <path id="hs-p" pathLength={1} className="sk-draw sk-s4 p-scyan" d="M760 450 H840"
                        fill="none" strokeWidth="3" markerEnd="url(#hs-ah)"/>

                  <g className="sk-fade sk-s4" filter="url(#hs-shadow)">
                    <rect x="850" y="210" width="650" height="480" rx="14" fill="url(#hs-node)"
                          className="p-node" strokeWidth="1.6"/>
                    <rect x="850" y="210" width="650" height="56" rx="14" className="p-cyan" opacity=".95"/>
                    <rect x="850" y="252" width="650" height="14" className="p-cyan" opacity=".95"/>
                    <text x="878" y="248" fontFamily="Outfit,sans-serif" fontWeight="800" fontSize="22"
                          letterSpacing="2" fill="var(--do-prussian-blue)">AFTER</text>
                  </g>
                  <g className="sk-fade sk-s5" fontSize="22">
                    <text x="890" y="332" className="p-ink">154,518 matched automatically</text>
                    <text x="890" y="402" className="p-ink">40 active suppliers feeding in</text>
                    <text x="890" y="472" className="p-ink">77% of stock records now have a bin location</text>
                    <text x="890" y="542" className="p-ink">Data app (now the ERP)</text>
                    <g className="p-scyan" strokeWidth="2.6" strokeLinecap="round"
                       strokeLinejoin="round" fill="none">
                      <path d="M856 325 L863 332 L876 318"/>
                      <path d="M856 395 L863 402 L876 388"/>
                      <path d="M856 465 L863 472 L876 458"/>
                      <path d="M856 535 L863 542 L876 528"/>
                    </g>
                  </g>

                  <g className="sk-dots">
                    <circle r="6" className="p-cyan">
                      <animateMotion dur="2.2s" repeatCount="indefinite"><mpath href="#hs-p"/></animateMotion>
                    </circle>
                  </g>
                </Plate>
              </div>
            </div>
          </div>
        </section>

        {/* 2. THE NUMBERS */}
        <section className="g-navy">
          <div className="wrap">
            <span className="eyebrow eyebrow--amber">The numbers</span>
            <h2 style={{ marginTop: 14 }}>Not projected. Not modelled. What&apos;s actually in the system.</h2>

            <div className="grid grid--3" style={{ marginTop: 40 }}>
              <div className="stat">
                <p className="stat-num num">317,812</p>
                <p className="stat-label">products brought in from supplier feeds</p>
              </div>
              <div className="stat">
                <p className="stat-num num">154,518</p>
                <p className="stat-label">matched to a supplier automatically, before anyone had to touch them</p>
              </div>
              <div className="stat">
                <p className="stat-num num">40</p>
                <p className="stat-label">active suppliers feeding in (89 on file)</p>
              </div>
            </div>
            <div className="grid grid--3" style={{ marginTop: 32 }}>
              <div className="stat">
                <p className="stat-num num">2,872</p>
                <p className="stat-label">new products and 28 new suppliers found in a stock-take reconciliation</p>
              </div>
              <div className="stat">
                <p className="stat-num num">3,844</p>
                <p className="stat-label">Amazon listings re-optimised ahead of a title-format deadline</p>
              </div>
              <div className="stat">
                <p className="stat-num num">77%</p>
                <p className="stat-label">of stock records now have a bin location, and climbing</p>
              </div>
            </div>
            <p className="lede" style={{ marginTop: 36, color: 'var(--do-text-muted-on-dark)' }}>
              Catalogue figures from the live system, September 2026.
            </p>
          </div>
        </section>

        {/* 3. THE STORY */}
        <section className="g-white">
          <div className="wrap prose">
            <h2>The situation before</h2>
            <p>
              Product data was spread across supplier feeds with no consistent SKU, and no reliable way of knowing what was actually in stock or where it was. The business needed a proper ERP, but going into one with messy data would have meant paying to migrate the mess.
            </p>

            <h2>What was done</h2>
            <p>
              The work started with the data, not the platform. I built the data app to bring in every supplier catalogue, match it against what Hanicks actually sells, and keep it clean and current across their channels.
            </p>
            <p>
              The off-the-shelf ERP they&apos;d originally chosen stalled on its own terms, nothing to do with the data work, which kept running throughout. So rather than start again with another off-the-shelf system, the data app became the ERP. Their marketplace listings on Amazon, eBay and OnBuy are now linked to it, and a new website is being built on top of the same data.
            </p>

            <div className="progress-note">
              <h3>What&apos;s still in progress</h3>
              <p>
                The catalogue is still being worked through. Unmatched products sit on a visible list rather than being hidden, and the warehouse is being binned and labelled as we go. The new website goes live later this year.
              </p>
            </div>
          </div>
        </section>

        {/* 4. RELATED */}
        <section className="g-tint">
          <div className="wrap" style={{ maxWidth: 900 }}>
            <span className="eyebrow">Related</span>
            <h2>Relevant sectors and problems</h2>
            <div className="hair" />
            <div className="grid grid--3" style={{ marginTop: 24 }}>
              <article className="card">
                <span className="kicker">Sector</span>
                <h3>Labels &amp; packaging</h3>
                <p>Supplier feed ingestion and catalogue maintenance across channels — the same data challenge this case study addresses.</p>
                <Link href="/sectors/labels-packaging" className="btn btn--outline" style={{ marginTop: 12 }}>See the labels &amp; packaging page</Link>
              </article>
              <article className="card">
                <span className="kicker">Sector</span>
                <h3>Workwear</h3>
                <p>B2B ordering, supplier data, and decoration workflows that need the same kind of system integration.</p>
                <Link href="/sectors/workwear" className="btn btn--outline" style={{ marginTop: 12 }}>See the workwear page</Link>
              </article>
              <article className="card">
                <span className="kicker">Problem</span>
                <h3>Inventory blind spots</h3>
                <p>No real visibility of stock across channels — the problem the Data App solved for this client.</p>
                <Link href="/problems/inventory-blind" className="btn btn--outline" style={{ marginTop: 12 }}>Read about inventory blindness</Link>
              </article>
            </div>
          </div>
        </section>

        {/* 5. CTA STRIP */}
        <section className="g-off cta-strip">
          <div className="wrap" style={{ maxWidth: 760 }}>
            <h2>See how the Data App does this.</h2>
            <p className="lede">
              This is a Systems (rung 2) example. To find out what your own data looks like, book a Clarity Audit.
            </p>
            <div className="hero-cta">
              <Link href="/contact" className="btn btn--primary">
                Book a free discovery call <ArrowRight size={18} />
              </Link>
              <Link href="/apps/data-app" className="btn btn-ghost btn-arrow">
                See the Data App
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
