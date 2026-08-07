import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { Plate } from '@/components/Plate';

// Target keyword: "b2b ordering portal workwear" (secondary: "cobra workwear decoded ops")
export const metadata = {
  title: 'Cobra Workwear: B2B Portal & ERP Evaluation | Decoded Ops',
  description: 'Clarity Audit complete on a B2B ordering portal and ERP evaluation, now scoping the delivery engagement.',
  alternates: { canonical: '/case-studies/cobra-workwear' },
  openGraph: {
    type: 'article',
    title: 'Cobra Workwear: B2B Portal & ERP Evaluation | Decoded Ops',
    description: 'Clarity Audit complete on a B2B ordering portal and ERP evaluation, now scoping the delivery engagement.',
    url: 'https://decodedops.co.uk/case-studies/cobra-workwear',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cobra Workwear: B2B Portal & ERP Evaluation | Decoded Ops',
    description: 'Clarity Audit complete on a B2B ordering portal and ERP evaluation, now scoping the delivery engagement.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Cobra Workwear: architect and advisor, not the builder',
      description: 'Clarity Audit complete on a B2B ordering portal and ERP evaluation, now scoping the delivery engagement.',
      author: { '@type': 'Person', name: 'Craig Blackman' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops' },
      url: 'https://decodedops.co.uk/case-studies/cobra-workwear',
    },
  ],
};

export default function CobraWorkwearCaseStudyPage() {
  return (
    <>
      <style>{`
        .hero-split{ display:grid; grid-template-columns:1.1fr .9fr; gap:48px; align-items:center }
        @media(max-width:980px){ .hero-split{ grid-template-columns:1fr; gap:32px } }
        .hero-split .lede{ margin:18px 0 0 }
        .hero-cta{ display:flex; gap:12px; flex-wrap:wrap; margin-top:28px }
        .shape-card{ background:var(--do-surface-raised); border:1px solid var(--do-border-subtle);
          border-radius:var(--do-radius-2xl); padding:28px }
        .shape-card h3{ font-size:var(--do-text-sm); text-transform:uppercase; letter-spacing:.06em;
          color:var(--do-text-muted); margin-bottom:16px }
        .shape-card dl{ margin:0; display:grid; gap:14px }
        .shape-card dt{ font-size:var(--do-text-xs); color:var(--do-text-muted); margin-bottom:3px }
        .shape-card dd{ margin:0; font-weight:600; color:var(--do-text-primary) }
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
        .cta-strip .hero-cta{ display:flex; gap:12px; flex-wrap:wrap; justify-content:center; margin-top:0 }
      `}</style>
      <main>
        <JsonLd data={schema} />

        {/* 1. HERO */}
        <section className="g-off">
          <div className="wrap hero-split">
            <div>
              <span className="eyebrow">Client work · workwear</span>
              <h1>Architect and advisor, not the builder.</h1>
              <p className="lede">
                Cobra Workwear needed a B2B trade portal, ERP evaluation, and a Shopify replacement. A Clarity Audit, followed by Deliver Consultancy: vendor requirements, procurement, and integration architecture.
              </p>
              <div className="hero-cta">
                <Link href="/contact" className="btn btn--primary">
                  Book a free discovery call <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="shape-card">
              <h3>The engagement shape</h3>
              <dl>
                <div><dt>Role</dt><dd>Architect and advisor. Third-party team builds.</dd></div>
                <div><dt>Stack</dt><dd>Medusa v2 and Next.js</dd></div>
                <div><dt>Structure</dt><dd>12-month minimum retainer</dd></div>
                <div><dt>Status</dt><dd>Live and ongoing</dd></div>
              </dl>
            </div>
          </div>
        </section>

        {/* 1b. PLATE · DO-ART-101 */}
        <section className="g-navy">
          <div className="wrap">
            <span className="eyebrow">Architecture &middot; DO-ART-101</span>
            <h2>Trade ordering, target state.</h2>
            <div className="hair"></div>
            <p className="lede" style={{ marginTop: 16 }}>
              Cobra&rsquo;s customer-facing, business-systems and production zones, feeding into a specified spine: scoped and overseen by Decoded Ops, built by the implementation partner.
            </p>

            <div className="plate-scroll">
              <div className="plate-frame" data-od-id="plate-cobra-workwear">
                <Plate tone="dark" p="cbr" title="Trade ordering — target state"
                       sub="Cobra Workwear &middot; specified by Decoded Ops, built by the partner team"
                       no="DO-ART-101" rev="02" cls="DECODED OPS · ISSUED">

                  {/* ── client zones ── */}
                  <g className="sk-fade sk-s2">
                    <rect x="60" y="230" width="700" height="120" rx="10" fill="none" className="p-scyan" strokeWidth=".9" strokeOpacity=".38"/>
                    <rect x="76" y="248" width="4" height="14" rx="1" className="p-cyan" opacity=".8"/>
                    <text x="90" y="260" className="p-mono" fontSize="17" letterSpacing="2.4" fontWeight="600" opacity=".85">CUSTOMER-FACING</text>
                    <rect x="60" y="380" width="700" height="120" rx="10" fill="none" className="p-scyan" strokeWidth=".9" strokeOpacity=".38"/>
                    <rect x="76" y="398" width="4" height="14" rx="1" className="p-cyan" opacity=".8"/>
                    <text x="90" y="410" className="p-mono" fontSize="17" letterSpacing="2.4" fontWeight="600" opacity=".85">BUSINESS SYSTEMS</text>
                    <rect x="60" y="530" width="700" height="120" rx="10" fill="none" className="p-scyan" strokeWidth=".9" strokeOpacity=".38"/>
                    <rect x="76" y="548" width="4" height="14" rx="1" className="p-cyan" opacity=".8"/>
                    <text x="90" y="560" className="p-mono" fontSize="17" letterSpacing="2.4" fontWeight="600" opacity=".85">PRODUCTION</text>
                  </g>

                  <g className="sk-fade sk-s3" filter="url(#cbr-shadow)">
                    <rect x="90" y="278" width="200" height="54" rx="8" fill="url(#cbr-node)" className="p-node" strokeWidth="1.1"/>
                    <rect x="310" y="278" width="200" height="54" rx="8" fill="url(#cbr-node)" className="p-node" strokeWidth="1.1"/>
                    <rect x="530" y="278" width="200" height="54" rx="8" fill="url(#cbr-node)" className="p-node" strokeWidth="1.1"/>
                    <rect x="90" y="428" width="200" height="54" rx="8" fill="url(#cbr-node)" className="p-node" strokeWidth="1.1"/>
                    <rect x="310" y="428" width="200" height="54" rx="8" fill="url(#cbr-node)" className="p-node" strokeWidth="1.1"/>
                    <rect x="530" y="428" width="200" height="54" rx="8" fill="url(#cbr-node)" className="p-node" strokeWidth="1.1"/>
                    <rect x="90" y="578" width="200" height="54" rx="8" fill="url(#cbr-node)" className="p-node" strokeWidth="1.1"/>
                    <rect x="310" y="578" width="200" height="54" rx="8" fill="url(#cbr-node)" className="p-node" strokeWidth="1.1"/>
                    <rect x="530" y="578" width="200" height="54" rx="8" fill="url(#cbr-node)" className="p-node" strokeWidth="1.1"/>
                  </g>
                  <g className="sk-fade sk-s3" textAnchor="middle">
                    <g className="p-ink" fontFamily="var(--do-font-heading)" fontWeight="600" fontSize="20">
                      <text x="190" y="303">Trade accounts</text><text x="410" y="303">Retail storefront</text><text x="630" y="303">Reorder</text>
                      <text x="190" y="453">ERP</text><text x="410" y="453">Accounts</text><text x="630" y="453">Stock &amp; buying</text>
                      <text x="190" y="603">Embroidery</text><text x="410" y="603">Print</text><text x="630" y="603">Despatch</text>
                    </g>
                    <g className="p-mono" fontSize="15" opacity=".6">
                      <text x="190" y="322">B2B ordering</text><text x="410" y="322">Shopify, replaced</text><text x="630" y="322">repeat lines</text>
                      <text x="190" y="472">under evaluation</text><text x="410" y="472">finance</text><text x="630" y="472">purchasing</text>
                      <text x="190" y="622">decoration</text><text x="410" y="622">decoration</text><text x="630" y="622">carrier labels</text>
                    </g>
                  </g>

                  {/* feeds into the spine */}
                  <path id="cbr-f1" pathLength="1" className="sk-draw sk-s4 p-scyan" d="M760 290 H860" fill="none" strokeWidth="2" strokeOpacity=".6" markerEnd="url(#cbr-ah)"/>
                  <path id="cbr-f2" pathLength="1" className="sk-draw sk-s4 p-scyan" d="M760 440 H860" fill="none" strokeWidth="2" strokeOpacity=".6" markerEnd="url(#cbr-ah)"/>
                  <path id="cbr-f3" pathLength="1" className="sk-draw sk-s4 p-scyan" d="M760 590 H860" fill="none" strokeWidth="2" strokeOpacity=".6" markerEnd="url(#cbr-ah)"/>

                  {/* ── the specified spine ── */}
                  <g className="sk-fade sk-s5">
                    <rect x="880" y="230" width="640" height="420" rx="12" fill="url(#cbr-amber)" className="p-samber" strokeWidth="1.1" strokeOpacity=".5"/>
                    <rect x="900" y="250" width="4" height="14" rx="1" className="p-amber"/>
                    <text x="914" y="262" className="p-amber" fontSize="17" letterSpacing="2.4" fontWeight="600">THE SPECIFIED SPINE</text>
                    <text x="914" y="286" className="p-mono" fontSize="15" letterSpacing="1.4" opacity=".6">SCOPED AND OVERSEEN — BUILT BY THE PARTNER TEAM</text>
                    <line x1="900" y1="302" x2="1500" y2="302" className="p-samber" strokeWidth=".6" strokeOpacity=".2"/>
                  </g>
                  <g className="sk-fade sk-s6" filter="url(#cbr-shadow)">
                    <rect x="906" y="322" width="290" height="62" rx="8" fill="url(#cbr-amber-n)" className="p-node-a" strokeWidth="1.1"/>
                    <rect x="1214" y="322" width="290" height="62" rx="8" fill="url(#cbr-amber-n)" className="p-node-a" strokeWidth="1.1"/>
                    <rect x="906" y="404" width="290" height="62" rx="8" fill="url(#cbr-amber-n)" className="p-node-a" strokeWidth="1.1"/>
                    <rect x="1214" y="404" width="290" height="62" rx="8" fill="url(#cbr-amber-n)" className="p-node-a" strokeWidth="1.1"/>
                    <rect x="906" y="486" width="598" height="62" rx="8" fill="url(#cbr-amber-n)" className="p-node-a" strokeWidth="1.1"/>
                  </g>
                  <g className="sk-fade sk-s6" textAnchor="middle">
                    <g fontFamily="var(--do-font-heading)" fontWeight="700" fontSize="20" className="p-accent-ink">
                      <text x="1051" y="348">B2B trade portal</text>
                      <text x="1359" y="348">Storefront</text>
                      <text x="1051" y="430">ERP evaluation</text>
                      <text x="1359" y="430">Integration architecture</text>
                      <text x="1205" y="512">Vendor requirements — written before anyone demoed</text>
                    </g>
                    <g className="p-mono" fontSize="15" opacity=".62">
                      <text x="1051" y="368">Medusa v2</text>
                      <text x="1359" y="368">Next.js</text>
                      <text x="1051" y="450">shortlist &middot; procurement</text>
                      <text x="1359" y="450">checked weekly, not signed off once</text>
                      <text x="1205" y="532">the brief the partner team builds against</text>
                    </g>
                  </g>

                  <g className="sk-fade sk-s6">
                    <circle cx="86" cy="694" r="5" className="p-cyan"/>
                    <text x="102" y="700" className="p-mono" fontSize="16" opacity=".7">Cobra&apos;s operation — kept and connected, not replaced</text>
                    <circle cx="700" cy="694" r="5" className="p-amber"/>
                    <text x="716" y="700" className="p-mono" fontSize="16" opacity=".7">Scoped and overseen by Decoded Ops &middot; built by the implementation partner</text>
                  </g>

                  <g className="sk-dots">
                    <circle r="6" className="p-cyan"><animateMotion dur="2.6s" repeatCount="indefinite"><mpath href="#cbr-f1"/></animateMotion></circle>
                    <circle r="6" className="p-cyan"><animateMotion dur="3.2s" repeatCount="indefinite"><mpath href="#cbr-f2"/></animateMotion></circle>
                    <circle r="6" className="p-cyan"><animateMotion dur="2.9s" repeatCount="indefinite"><mpath href="#cbr-f3"/></animateMotion></circle>
                  </g>
                </Plate>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHAT THE ENGAGEMENT COVERS */}
        <section className="g-white">
          <div className="wrap">
            <span className="eyebrow">What the engagement covers</span>
            <h2>Three dimensions of an advisory-only build.</h2>

            <div className="grid grid--3" style={{ marginTop: 34 }}>
              <article className="card">
                <span className="kicker">01 &middot; Vendor selection</span>
                <h3>Choosing the implementation partner</h3>
                <p>Evaluating who actually builds it. The stack, Medusa v2 and Next.js, was chosen deliberately as a flagship reference build, not a one-off, and the third-party team was selected against that brief.</p>
              </article>
              <article className="card">
                <span className="kicker">02 &middot; Process design</span>
                <h3>Vendor requirements and procurement</h3>
                <p>Writing the requirements the trade portal and ERP evaluation actually needed to answer, then running the procurement process against them, rather than accepting the first plausible platform.</p>
              </article>
              <article className="card">
                <span className="kicker">03 &middot; Implementation oversight</span>
                <h3>Integration architecture, ongoing</h3>
                <p>Weekly involvement across the build, checking the integration architecture holds as the implementation partner delivers, not a one-off sign-off at the start.</p>
              </article>
            </div>

            <div style={{ maxWidth: '72ch' }}>
              <h2 style={{ marginTop: 48 }}>The commercial shape</h2>
              <p style={{ color: 'var(--do-text-secondary)', lineHeight: 'var(--do-leading-relaxed)' }}>
                Restructured from an initial six-month framing to a twelve-month minimum retainer covering the full build across the first four months, then ongoing weekly involvement. Named here only as a shape, not a price: pricing detail stays out of public case studies.
              </p>

              <div className="progress-note">
                <h3>What&apos;s still in progress</h3>
                <p>
                  The engagement is live and ongoing, not a completed, closed project.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. CTA STRIP (navy): never links to /apps or /how-i-build, this is a consultancy story not a Systems example */}
        <section className="g-navy cta-strip">
          <div className="wrap" style={{ maxWidth: 760 }}>
            <h2>Evaluating an ERP or platform decision?</h2>
            <p className="lede">
              For a diagnosis of what your own ERP or platform situation needs, book a Clarity Audit.
            </p>
            <div className="hero-cta">
              <Link href="/contact" className="btn btn--primary">
                Book a free discovery call <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
