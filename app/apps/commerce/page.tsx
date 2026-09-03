import type { Metadata } from 'next';
import Link from 'next/link';
import { Plate } from '@/components/Plate';

export const metadata: Metadata = {
  title: 'Decoded Commerce: Decoded Ops',
  description: 'A B2B storefront that fits how you actually sell. Three tiers priced on functionality, built on the open-source Medusa B2B foundation: company accounts, spend limits, approval workflows and quote negotiation.',
  alternates: { canonical: '/apps/commerce' },
  openGraph: {
    type: 'website',
    title: 'Decoded Commerce: Decoded Ops',
    description: 'A B2B storefront that fits how you actually sell. Three tiers priced on functionality, built on the open-source Medusa B2B foundation.',
    url: 'https://decodedops.co.uk/apps/commerce',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Decoded Commerce: Decoded Ops',
    description: 'A B2B storefront that fits how you actually sell. Three tiers priced on functionality.',
  },
};

export default function CommercePage() {
  return (
    <>
      {/* 1 · HERO SPLIT */}
      <section className="g-off">
        <div className="wrap hero-split">
          <div>
            <p className="eyebrow">Decoded Commerce &middot; live infrastructure</p>
            <h1>A storefront that fits how you actually sell.</h1>
            <div className="hero-body">
              <p>Three tiers, priced on what you need rather than how many days it takes. Where a client
                wants more than a tier covers, that&rsquo;s scoped and costed separately.</p>
              <p>It&rsquo;s built on the Medusa B2B starter: company accounts, spend limits, approval
                workflows, quote negotiation, order editing, and a full storefront and checkout, all on
                an open-source core. Real foundations, not a from-scratch build. That&rsquo;s
                why it comes in well under the £8,000&ndash;£20,000 bespoke range you&rsquo;ll be
                quoted elsewhere for the same thing.</p>
            </div>
            <div className="btn-row" style={{ marginTop: 30 }}>
              <Link className="btn btn--primary" href="/contact">Talk about your storefront</Link>
              <Link className="btn btn--ghost btn-arrow" href="/pricing">How I price this</Link>
            </div>
          </div>

          <div className="hero-shot">
            <div className="evidence evidence--screen">
              <img src="/images/apps/commerce-plp.png" width={2160} height={3816}
                   alt="A B2B trade storefront product listing page: decorated garments in a filtered grid with trade pricing shown per account, size and colour facets down the left, and a quote-request action alongside add to basket." />
              <span className="stamp">decoded commerce &middot; trade storefront</span>
            </div>
            <p className="shot-caption">Trade pricing per account, quote requests alongside the basket, and
              a catalogue that reads from the same data as the warehouse.</p>
          </div>
        </div>
      </section>

      {/* 2 · FEATURES TRIPLET · per tier */}
      <section className="g-white">
        <div className="wrap">
          <p className="eyebrow">What each tier is</p>
          <h2>Priced on functionality, not on days.</h2>
          <p className="lede" style={{ marginTop: 16 }}>You pick the tier by what the business needs to do,
            not by how long I think it&rsquo;ll take me. The scope is written down before anything starts.</p>

          <div className="grid grid--3">
            <div className="feature">
              <div className="feature-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
                     strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="16" rx="2.5" /><path d="M3 9h18" />
                </svg>
              </div>
              <h3>Core</h3>
              <p className="feature-meta">Single storefront</p>
              <p>Product catalogue, customer accounts and logins, manual pricing tiers. No approval
                workflow. If nobody in your customers&rsquo; businesses needs to sign off an order, you don&rsquo;t
                need to pay for the machinery that makes them.</p>
            </div>

            <div className="feature">
              <div className="feature-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
                     strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="8" r="3" /><path d="M3 19c0-3 2.7-4.6 6-4.6s6 1.6 6 4.6" />
                  <path d="M17 9.5h4M17 13.5h4" />
                </svg>
              </div>
              <h3>Standard</h3>
              <p className="feature-meta">The B2B trade portal shape</p>
              <p>Adds company accounts with multi-user roles, per-employee spending limits, approval
                workflows, and quote negotiation. This is what most trade businesses in this sector
                actually mean when they say they want a trade portal.</p>
            </div>

            <div className="feature">
              <div className="feature-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
                     strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 6h7v5H4zM13 13h7v5h-7z" /><path d="M7.5 11v4.5H13" />
                </svg>
              </div>
              <h3>Extended</h3>
              <p className="feature-meta">More than one of everything</p>
              <p>Multi-site storefronts, ERP integration (Khaos Control sync and similar), and bespoke
                checkout and pricing logic where the standard rules genuinely don&rsquo;t describe how you
                price.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2a · CORE TO EXTENDED PLATE · DO-ART-103 */}
      <section className="g-tint">
        <div className="wrap">
          <p className="eyebrow">Capability &middot; DO-ART-103</p>
          <h2>Core to Extended, by capability.</h2>
          <p className="lede" style={{ marginTop: 16 }}>Each tier adds what the one below doesn&rsquo;t
            have.</p>

          <div className="plate-scroll" style={{ marginTop: 34 }}>
            <div className="plate-frame">
              <Plate tone="dark" p="cm" title="Core to Extended, by capability"
                     sub="Each tier adds what the one below doesn't have"
                     no="DO-ART-103" rev="01" cls="DECODED OPS · ISSUED">

                <path id="cm-spine" pathLength={1} className="sk-draw sk-s2 p-scyan" d="M180 700 V300"
                      fill="none" strokeWidth="2.5" markerEnd="url(#cm-ah)"/>

                <g className="sk-fade sk-s3">
                  <rect x="260" y="580" width="1180" height="120" rx="14" fill="url(#cm-node)"
                        className="p-node" strokeWidth="1.4"/>
                  <text x="310" y="632" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="700"
                        fontSize="26">Core</text>
                  <text x="310" y="664" className="p-mono" fontSize="17" opacity=".85">Catalogue ·
                    customer accounts · manual pricing</text>
                  <text x="1400" y="646" textAnchor="end" className="p-mono" fontSize="16"
                        letterSpacing="1.4" opacity=".55">SINGLE STOREFRONT</text>
                </g>

                <g className="sk-fade sk-s4">
                  <rect x="260" y="420" width="1180" height="130" rx="14" fill="url(#cm-node)"
                        className="p-node" strokeWidth="1.4"/>
                  <text x="310" y="472" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="700"
                        fontSize="26">Standard</text>
                  <text x="310" y="506" className="p-mono" fontSize="17" opacity=".85">+ company accounts
                    · spend limits · approvals · quote negotiation</text>
                  <text x="1400" y="486" textAnchor="end" className="p-mono" fontSize="16"
                        letterSpacing="1.4" opacity=".7">THE B2B TRADE PORTAL SHAPE</text>
                </g>

                <g className="sk-fade sk-s5" filter="url(#cm-shadow)">
                  <rect x="260" y="250" width="1180" height="140" rx="16" fill="url(#cm-amber-n)"
                        className="p-node-a" strokeWidth="2"/>
                  <text x="310" y="312" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="800"
                        fontSize="28">Extended</text>
                  <text x="310" y="348" className="p-accent-ink" fontSize="18" fontWeight="600">+
                    multi-site · ERP integration · bespoke checkout &amp; pricing</text>
                  <text x="1400" y="330" textAnchor="end" className="p-mono" fontSize="16"
                        letterSpacing="1.4" opacity=".85">MORE THAN ONE OF EVERYTHING</text>
                </g>

                <g className="sk-dots">
                  <circle r="6" className="p-cyan"><animateMotion dur="4s" repeatCount="indefinite"><mpath href="#cm-spine"/></animateMotion></circle>
                </g>
              </Plate>
            </div>
          </div>
        </div>
      </section>

      {/* 3 · CUSTOM WORK CALLOUT */}
      <section className="g-navy">
        <div className="wrap">
          <p className="eyebrow">Off the tier list</p>
          <h2>When it&rsquo;s a full rebuild, not a tier.</h2>

          <div className="grid grid--2" style={{ marginTop: 40 }}>
            <div className="panel">
              <h3>The worked example</h3>
              <p>A full migration off WooCommerce, a new storefront, and reintegration back
                into Khaos Control. That&rsquo;s scoped and quoted like any other full custom build, not read
                off a tier list.</p>
            </div>
            <div className="panel">
              <h3>How it starts</h3>
              <p>With a Clarity Audit, the same as any rung 3 conversation. Everything on the market
                goes on the table first, priced, including the options I&rsquo;d expect you to reject. And
                the decision stays yours.</p>
              <p><Link href="/how-i-build" style={{ color: 'var(--do-sky-blue)', fontWeight: 600 }}>How I decide
                what to build &rarr;</Link></p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 · COMPARISON TABLE */}
      <section className="g-white" id="pricing">
        <div className="wrap">
          <p className="eyebrow">What each tier covers</p>
          <h2>Three tiers. Pick by what the business needs to do.</h2>

          <div className="inset">
            <b>Which tier fits depends on your setup.</b> What you sell, who buys it, and how
            they&rsquo;re allowed to buy it. That gets settled in conversation before the build is
            quoted.
          </div>

          <div className="table-wrap">
            <table className="ds-table">
              <caption>Decoded Commerce</caption>
              <thead>
                <tr>
                  <th scope="col">Tier</th>
                  <th scope="col">Scope</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Core</th>
                  <td className="scope">Single storefront, catalogue, accounts, manual pricing</td>
                </tr>
                <tr>
                  <th scope="row">Standard <span className="star">Most take this</span></th>
                  <td className="scope">Company accounts, spend limits, approval workflows, quote
                    negotiation</td>
                </tr>
                <tr>
                  <th scope="row">Extended</th>
                  <td className="scope">Multi-site, ERP integration, bespoke checkout and pricing</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="table-foot">A full rebuild, like a migration off an existing platform, isn&rsquo;t on this table on
            purpose. That&rsquo;s scoped separately.</p>
          <p className="table-foot">What this costs depends on scope, so it&rsquo;s quoted once I know what your setup needs rather than read off a list. I&rsquo;m not VAT registered, so there&rsquo;s no VAT to add. How I price everything else is on the <Link href="/pricing" style={{ color: 'var(--do-cerulean)', fontWeight: 600 }}>pricing page</Link>.</p>

          <div className="notice">
            <p className="notice-tag">Founding-client terms</p>
            <h3>No client has taken first delivery of the packaged product yet.</h3>
            <p>Real work has been scoped and quoted, but nobody has yet bought Decoded
              Commerce as a tiered product. Until that happens it sells at the rates above with the
              first six months of support waived, in exchange for accepting that some features arrive
              during the engagement and agreeing to be a named reference.</p>
            <p>Stated plainly, because you&rsquo;d find out anyway. And you should be able to price it in
              before you decide, not after.</p>
          </div>
        </div>
      </section>

      {/* 5 · CTA STRIP */}
      <section className="g-off cta-strip">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <h2>Talk about your storefront.</h2>
          <p className="lede">An hour on what you sell and who buys it. If a tier fits, I&rsquo;ll name it. If
            what you actually need is a migration, I&rsquo;ll say that instead of selling you a tier.</p>
          <div className="btn-row">
            <Link className="btn btn--primary" href="/contact">Talk about your storefront</Link>
            <Link className="btn btn--ghost btn-arrow" href="/apps">See the other systems</Link>
          </div>
        </div>
      </section>
    </>
  );
}
