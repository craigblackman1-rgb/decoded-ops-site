import type { Metadata } from 'next';
import Link from 'next/link';
import { D17Motion } from '@/components/D17Motion';
import { JsonLd } from '@/components/JsonLd';
import '@/app/d17-global.css';
import '@/app/d17-apps-cases.css';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Decoded Commerce: B2B Ecommerce for Wholesale | Decoded Ops',
  description: 'Decoded Commerce is a B2B ecommerce storefront that fits how you actually sell: company accounts and spend limits, three tiers priced on functionality.',
  alternates: { canonical: '/apps/commerce' },
  openGraph: {
    type: 'website',
    title: 'Decoded Commerce: B2B Ecommerce for Wholesale | Decoded Ops',
    description: 'Decoded Commerce is a B2B ecommerce storefront that fits how you actually sell: company accounts and spend limits, three tiers priced on functionality.',
    url: 'https://decodedops.co.uk/apps/commerce',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Decoded Commerce: B2B Ecommerce for Wholesale | Decoded Ops',
    description: 'Decoded Commerce is a B2B ecommerce storefront that fits how you actually sell: company accounts and spend limits, three tiers priced on functionality.',
    images: [OG_IMAGE_PATH],
  },
};

const commerceFaqSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What are the three tiers?',
          acceptedAnswer: { '@type': 'Answer', text: 'Core is a single storefront with catalogue, customer accounts and manual pricing. Connected adds company accounts, spend limits, approval workflows and quote negotiation. Scaled adds multi-site, ERP integration and bespoke checkout and pricing.' },
        },
        {
          '@type': 'Question',
          name: 'How is this different from a bespoke build?',
          acceptedAnswer: { '@type': 'Answer', text: 'It is built on the open-source B2B commerce core with real foundations, not a from-scratch build. That keeps the cost well under a bespoke quote for the same thing.' },
        },
        {
          '@type': 'Question',
          name: 'Does it integrate with ERP systems?',
          acceptedAnswer: { '@type': 'Answer', text: 'ERP integration is part of the Scaled tier. A full migration off an existing platform is scoped and quoted separately, not read off a tier list.' },
        },
      ],
    },
  ],
};

export default function CommercePage() {
  return (
    <>
      <JsonLd data={commerceFaqSchema} />
      {/* 1 · HERO SPLIT + DO-ART-946 */}
      <section className="g-off" data-od-id="hero">
        <div className="wrap hero-split">
          <div>
            <span className="eyebrow">Decoded Commerce · the trade storefront that runs off Works</span>
            <h1>A storefront that fits how you actually sell.</h1>
            <div className="hero-body">
              <p>Three tiers, priced on what you need rather than how many days it takes. Where a client
                wants more than a tier covers, that&rsquo;s scoped and costed separately.</p>
              <p>It&rsquo;s built on an open-source B2B commerce starter: company accounts, spend limits,
                approval workflows, quote negotiation, order editing, and a full storefront and
                checkout. Real foundations, not a from-scratch build, which keeps the cost well under a
                bespoke quote for the same thing.</p>
            </div>
            <div className="btn-row" style={{ marginTop: 30 }}>
              <Link className="btn btn--primary" href="/contact">Talk about your storefront</Link>
              <Link className="btn btn--ghost btn-arrow" href="#pricing">How I price this</Link>
            </div>
          </div>

          <div className="hero-shot" dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sx a946" data-od-id="hero-visual" data-motion data-no="DO-ART-946" data-rev="01" data-tx="photo"
        aria-label="Product screen DO-ART-946. A Decoded Commerce trade storefront, signed in as a trade account: a filtered catalogue of decorated workwear and merchandise with range and decoration method facets, the account's own price list on every product, and a quote request for a hundred and fifty embroidered polos sitting alongside the basket. Trade pricing per account, quotes next to the basket, one catalogue with the warehouse.">
  <div class="d17-ph"><img src="/images/d17/apps-cases/gen-press-hall-03697e.webp" alt="" width="1024" height="1024"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Decoded Commerce · trade storefront</span><span>In build at Hanicks</span></div>
  <div class="stage" aria-hidden="true">
    <div class="mw">
      <div class="mw-bar"><span class="dots"><i></i><i></i><i></i></span><span class="crumb"><span>Commerce ›</span> Full catalogue</span><span class="pill">SIGNED IN</span></div>
      <div class="acct"><span>Trade account · your price list applies</span><b>Basket 2 · Quotes 1</b></div>
      <div class="mw-main">
        <h5>Full trade catalogue</h5>
        <p class="s">Decoration-ready lines, live stock, prices for your account</p>
        <div class="shop">
          <div class="facets">
            <div class="fh">Range</div>
            <label class="on"><i></i>Workwear</label><label><i></i>Promo</label><label><i></i>Packaging</label>
            <div class="fh">Decoration</div>
            <label class="on"><i></i>Embroidery</label><label><i></i>Screen print</label><label><i></i>DTF</label><label><i></i>Engraving</label>
          </div>
          <div class="tiles">
            <div class="tile m-rise" style="animation-delay:.1s"><img src="/images/d17/apps-cases/prod-polo-a16032.webp" alt=""><div class="tb"><div class="stock">In stock</div><div class="nm">Piqué polo</div><div class="pr"><b>Your price</b><i></i></div><div class="act"><span>Quote</span><span>Add</span></div></div></div>
            <div class="tile m-rise" style="animation-delay:.2s"><img src="/images/d17/apps-cases/prod-hivis-c5b3cd.webp" alt=""><div class="tb"><div class="stock">In stock</div><div class="nm">Hi-vis vest</div><div class="pr"><b>Your price</b><i></i></div><div class="act"><span>Quote</span><span>Add</span></div></div></div>
            <div class="tile m-rise" style="animation-delay:.3s"><img src="/images/d17/apps-cases/cat-promo-89c58a.webp" alt=""><div class="tb"><div class="stock">Made to order</div><div class="nm">Ceramic mug</div><div class="pr"><b>Your price</b><i></i></div></div></div>
            <div class="tile m-rise" style="animation-delay:.4s"><img src="/images/d17/apps-cases/prod-mailer-9c1448.webp" alt=""><div class="tb"><div class="stock">In stock</div><div class="nm">Kraft mailer box</div><div class="pr"><b>Your price</b><i></i></div></div></div>
          </div>
        </div>
      </div>
    </div>
    <div class="quote m-pop" style="animation-delay:.9s"><span class="l">Quote request · sent</span><b>150 × piqué polo</b><p>Embroidered left chest, logo from your vault. Approver: purchasing lead.</p></div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">Their prices, their approvals, <em>one catalogue with the warehouse.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-946 · Rev 01</span>
  </div>
</figure>` }} />
          <p className="shot-caption">Trade pricing per account, quote requests alongside the basket, and
            a catalogue that reads from the same data as the warehouse.</p>
        </div>
      </section>

      {/* 2 · FEATURES TRIPLET · per tier */}
      <section className="g-white" data-od-id="tiers">
        <div className="wrap">
          <span className="eyebrow">What each tier is</span>
          <h2>Priced on functionality, not on days.</h2>
          <p className="lede" style={{ marginTop: 16 }}>You pick the tier by what the business needs to do,
            not by how long I think it&rsquo;ll take me. The scope is written down before anything starts.</p>

          <div className="grid grid--3">
            <div className="feature" data-od-id="tier-core">
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

            <div className="feature" data-od-id="tier-standard">
              <div className="feature-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
                     strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="8" r="3" /><path d="M3 19c0-3 2.7-4.6 6-4.6s6 1.6 6 4.6" />
                  <path d="M17 9.5h4M17 13.5h4" />
                </svg>
              </div>
              <h3>Connected</h3>
              <p className="feature-meta">The B2B trade portal shape</p>
              <p>Adds company accounts with multi-user roles, per-employee spending limits, approval
                workflows, and quote negotiation. This is what most trade businesses in this sector
                actually mean when they say they want a trade portal.</p>
            </div>

            <div className="feature" data-od-id="tier-extended">
              <div className="feature-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
                     strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 6h7v5H4zM13 13h7v5h-7z" /><path d="M7.5 11v4.5H13" />
                </svg>
              </div>
              <h3>Scaled</h3>
              <p className="feature-meta">More than one of everything</p>
              <p>Multi-site storefronts, ERP integration, and bespoke checkout and pricing logic where
                the standard rules don&rsquo;t describe how you price.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 · CAPABILITY · DO-ART-947 (supersedes 103) */}
      <section className="g-tint" data-od-id="architecture">
        <div className="wrap">
          <span className="eyebrow">Capability · DO-ART-947</span>
          <h2>Core to Extended, by capability.</h2>
          <p className="lede" style={{ marginTop: 16 }}>Each tier adds what the one below doesn&rsquo;t have.</p>

          <figure className="d17 sw a947" data-od-id="plate-architecture" data-motion data-no="DO-ART-947" data-rev="01" data-tx="schematic"
                  aria-label="Drawn plate DO-ART-947. Three nested tiers drawn as a plan. Core, at the centre: a single storefront with a product catalogue, customer accounts and logins, and manual pricing tiers. Connected wraps Core and adds company accounts with multi-user roles, per-employee spending limits, approval workflows and quote negotiation: the B2B trade portal shape most take. Scaled wraps Connected and adds multi-site storefronts, ERP integration, and bespoke checkout and pricing logic. Each tier adds what the one below does not have.">
            <div className="q-grid" aria-hidden="true" />
            <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true"><defs>
              <marker id="q-ah947" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#8ECAE6" /></marker>
            </defs></svg>
            <svg className="q v-wide" viewBox="0 0 1600 680" aria-hidden="true">
              {/* Scaled */}
              <g className="m-fade" style={{ animationDelay: '.9s' }}>
                <rect x="20" y="20" width="1000" height="640" rx="22" fill="none" stroke="#8ECAE6" strokeOpacity=".7" strokeWidth="2" />
                <text className="t-m" x="50" y="62" style={{ fontSize: '17px' }}>Scaled · more than one of everything</text>
              </g>
              {/* Connected */}
              <g className="m-fade" style={{ animationDelay: '.5s' }}>
                <rect className="bx-a" x="80" y="92" width="880" height="508" rx="18" style={{ fillOpacity: '.9' }} />
                <text className="t-m t-a" x="110" y="134" style={{ fontSize: '17px' }}>Connected · the B2B trade portal shape · most take this</text>
              </g>
              {/* Core */}
              <g className="m-pop" style={{ animationDelay: '.1s' }}>
                <rect className="bx" x="140" y="164" width="420" height="376" rx="14" />
                <text className="t-m" x="170" y="204" style={{ fontSize: '16px' }}>Core · single storefront</text>
                <g className="t" style={{ fontSize: '22px' }}>
                  <rect x="170" y="228" width="360" height="56" rx="9" fill="#8ECAE6" fillOpacity=".12" stroke="#8ECAE6" strokeOpacity=".45" /><text className="t" x="192" y="264" style={{ fontSize: '22px' }}>Product catalogue</text>
                  <rect x="170" y="296" width="360" height="56" rx="9" fill="#8ECAE6" fillOpacity=".12" stroke="#8ECAE6" strokeOpacity=".45" /><text className="t" x="192" y="332" style={{ fontSize: '22px' }}>Customer accounts, logins</text>
                  <rect x="170" y="364" width="360" height="56" rx="9" fill="#8ECAE6" fillOpacity=".12" stroke="#8ECAE6" strokeOpacity=".45" /><text className="t" x="192" y="400" style={{ fontSize: '22px' }}>Manual pricing tiers</text>
                </g>
                <text className="t-d" x="170" y="470" style={{ fontSize: '18px' }}>No approval workflow:</text>
                <text className="t-d" x="170" y="496" style={{ fontSize: '18px' }}>nobody has to sign off</text>
              </g>
              {/* Connected adds */}
              <g className="m-rise" style={{ animationDelay: '.6s' }}>
                <rect x="590" y="164" width="340" height="68" rx="9" fill="#FFB703" fillOpacity=".13" stroke="#FFB703" strokeOpacity=".6" /><text className="t" x="612" y="206" style={{ fontSize: '22px' }}>Company accounts, roles</text>
                <rect x="590" y="246" width="340" height="68" rx="9" fill="#FFB703" fillOpacity=".13" stroke="#FFB703" strokeOpacity=".6" /><text className="t" x="612" y="288" style={{ fontSize: '22px' }}>Per-employee spend limits</text>
                <rect x="590" y="328" width="340" height="68" rx="9" fill="#FFB703" fillOpacity=".13" stroke="#FFB703" strokeOpacity=".6" /><text className="t" x="612" y="370" style={{ fontSize: '22px' }}>Approval workflows</text>
                <rect x="590" y="410" width="340" height="68" rx="9" fill="#FFB703" fillOpacity=".13" stroke="#FFB703" strokeOpacity=".6" /><text className="t" x="612" y="452" style={{ fontSize: '22px' }}>Quote negotiation</text>
              </g>
              {/* Scaled adds */}
              <g className="m-rise" style={{ animationDelay: '1s' }}>
                <text className="t-d" x="110" y="636" style={{ fontSize: '19px' }}>Multi-site storefronts  ·  ERP integration  ·  bespoke checkout and pricing logic</text>
              </g>
              {/* call-outs */}
              <g className="m-fade" style={{ animationDelay: '1.2s' }}>
                <path className="ln-f" d="M1060 20 V660 M1050 20 H1070 M1050 660 H1070" />
                <path className="ln m-draw" pathLength="1" style={{ animationDelay: '1.3s' }} d="M1110 120 H1026" markerEnd="url(#q-ah947)" />
                <text className="t-m" x="1120" y="112" style={{ fontSize: '15px' }}>Scaled adds</text>
                <text className="t" x="1120" y="142" style={{ fontSize: '20px' }}>more than one of everything</text>
                <path className="ln-a m-draw" pathLength="1" style={{ animationDelay: '1.1s' }} d="M1110 320 H966" />
                <text className="t-m t-a" x="1120" y="312" style={{ fontSize: '15px' }}>Connected adds</text>
                <text className="t" x="1120" y="342" style={{ fontSize: '20px' }}>the machinery for sign-off</text>
                <path className="ln m-draw" pathLength="1" style={{ animationDelay: '.9s' }} d="M1110 500 H566" markerEnd="url(#q-ah947)" />
                <text className="t-m" x="1120" y="492" style={{ fontSize: '15px' }}>Core</text>
                <text className="t" x="1120" y="522" style={{ fontSize: '20px' }}>one storefront, sold simply</text>
                <text className="t-d" x="1120" y="620" style={{ fontSize: '17px' }}>A full rebuild is scoped separately,</text>
                <text className="t-d" x="1120" y="644" style={{ fontSize: '17px' }}>not read off this drawing.</text>
              </g>
            </svg>
            <svg className="q v-tall" viewBox="0 0 700 1130" aria-hidden="true">
              <rect x="6" y="6" width="688" height="1118" rx="20" fill="none" stroke="#8ECAE6" strokeOpacity=".7" strokeWidth="2" />
              <text className="t-m" x="30" y="50" style={{ fontSize: '20px' }}>Scaled · more than one of everything</text>
              <rect className="bx-a" x="30" y="76" width="640" height="850" rx="16" />
              <text className="t-m t-a" x="54" y="118" style={{ fontSize: '20px' }}>Connected · most take this</text>
              <rect className="bx" x="54" y="140" width="592" height="320" rx="12" />
              <text className="t-m" x="78" y="182" style={{ fontSize: '20px' }}>Core · single storefront</text>
              <text className="t" x="78" y="238" style={{ fontSize: '28px' }}>Product catalogue</text>
              <text className="t" x="78" y="290" style={{ fontSize: '28px' }}>Customer accounts, logins</text>
              <text className="t" x="78" y="342" style={{ fontSize: '28px' }}>Manual pricing tiers</text>
              <text className="t-d" x="78" y="414" style={{ fontSize: '23px' }}>No approval workflow</text>
              <text className="t-m t-a" x="54" y="514" style={{ fontSize: '20px' }}>Connected adds</text>
              <text className="t" x="54" y="570" style={{ fontSize: '28px' }}>Company accounts, roles</text>
              <text className="t" x="54" y="624" style={{ fontSize: '28px' }}>Per-employee spend limits</text>
              <text className="t" x="54" y="678" style={{ fontSize: '28px' }}>Approval workflows</text>
              <text className="t" x="54" y="732" style={{ fontSize: '28px' }}>Quote negotiation</text>
              <text className="t-d" x="54" y="800" style={{ fontSize: '23px' }}>the B2B trade portal shape</text>
              <text className="t-m" x="30" y="984" style={{ fontSize: '20px' }}>Scaled adds</text>
              <text className="t" x="30" y="1034" style={{ fontSize: '27px' }}>Multi-site · ERP integration</text>
              <text className="t" x="30" y="1080" style={{ fontSize: '27px' }}>Bespoke checkout and pricing</text>
            </svg>
            <div className="foot"><span className="k d17-mono">Core · Connected · Scaled</span><span className="d17-mark">decodedops.co.uk · DO-ART-947 · Rev 01</span></div>
          </figure>
        </div>
      </section>

      {/* 4 · CUSTOM WORK · DO-ART-948 */}
      <section className="g-navy" data-od-id="custom-work">
        <div className="wrap">
          <span className="eyebrow">Off the tier list</span>
          <h2>When it&rsquo;s a full rebuild, not a tier.</h2>

          <figure className="d17 sw sw-doc a948" data-od-id="custom-visual" data-motion data-no="DO-ART-948" data-rev="01" data-tx="photo"
                  aria-label="Artwork DO-ART-948. Two documents over a graded photograph of packed kraft boxes. A scope sheet for a full rebuild in three parts: migrate products, customers and order history off the existing platform; build a new storefront; reintegrate orders and stock back into the ERP. And an options sheet: everything on the market goes on the table first, priced, including the options expected to be rejected, with the decision left to the client. Scoped and quoted like any full custom build.">
            <div className="d17-ph"><img src="/images/d17/apps-cases/cat-packaging-2b20a6.webp" alt="" width="900" height="800" /></div>
            <div className="d17-scan" aria-hidden="true" />
            <figcaption className="sw-cap">
              <div className="k d17-mono">The worked example <span>· scoped, not tiered</span></div>
              <div className="bar" aria-hidden="true" />
              <h3>Migration, new storefront, back into the ERP.</h3>
              <p>The scope is written down first. Everything on the market goes on the table beside it,
                priced, and the decision stays yours.</p>
              <span className="d17-mark">decodedops.co.uk · DO-ART-948 · Rev 01</span>
            </figcaption>
            <div className="stage" aria-hidden="true">
              <div className="d17-doc doc-s m-drop" style={{ animationDelay: '.1s' }}>
                <span className="tab">SCOPE</span>
                <span className="ref">SC-01 · Full rebuild · written first</span>
                <h4>Storefront rebuild</h4>
                <p className="sub">three parts · one written scope</p>
                <ol>
                  <li><b>01</b><span>Migrate products, customers, order history</span><em>EXPORTED</em></li>
                  <li><b>02</b><span>New storefront and checkout</span><em>NEW</em></li>
                  <li className="hit"><b>03</b><span>Orders and stock back into the ERP</span><em>REINTEGRATED</em></li>
                </ol>
                <div className="lines"><i style={{ width: '92%' }} /><i style={{ width: '74%' }} /></div>
              </div>
              <div className="d17-doc doc-o m-drop" style={{ animationDelay: '.45s' }}>
                <span className="tab">OPTIONS</span>
                <span className="ref">OP-01 · On the table first</span>
                <h4>Everything on the market</h4>
                <p className="sub">priced, including the ones to reject</p>
                <div className="opt">
                  <span>Off-the-shelf platform</span><span>PRICED</span>
                  <span>Hosted store, add-ons</span><span>PRICED</span>
                  <span>Full custom build</span><span>PRICED</span>
                  <span className="you">Decision: yours</span>
                </div>
              </div>
            </div>
          </figure>

          <div className="grid grid--2" style={{ marginTop: 40 }}>
            <div className="panel" data-od-id="custom-example">
              <h3>The worked example</h3>
              <p>A full migration off an existing web platform, a new storefront, and reintegration back
                into your ERP. That&rsquo;s scoped and quoted like any other full custom build, not read off
                a tier list.</p>
            </div>
            <div className="panel" data-od-id="custom-route">
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

      {/* 5 · COMPARISON TABLE */}
      <section className="g-white" id="pricing" data-od-id="pricing">
        <div className="wrap">
          <span className="eyebrow">What each tier covers</span>
          <h2>Three tiers. Pick by what the business needs to do.</h2>

          <div className="inset" data-od-id="entry-point">
            <b>Which tier fits depends on your setup.</b> What you sell, who buys it, and how
            they&rsquo;re allowed to buy it. That gets settled in conversation before the build is
            quoted.
          </div>

          <div className="table-wrap" data-od-id="pricing-table">
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
                  <th scope="row">Connected <span className="star">Most take this</span></th>
                  <td className="scope">Company accounts, spend limits, approval workflows, quote
                    negotiation</td>
                </tr>
                <tr>
                  <th scope="row">Scaled</th>
                  <td className="scope">Multi-site, ERP integration, bespoke checkout and pricing</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="table-foot">A full rebuild, like a migration off an existing platform, isn&rsquo;t on this table on
            purpose. That&rsquo;s scoped separately.</p>
          <p className="table-foot">What this costs depends on scope, so it&rsquo;s quoted once I know what your setup needs rather than read off a list. I&rsquo;m not VAT registered, so there&rsquo;s no VAT to add. How I price everything else is on the <Link href="/pricing"               style={{ color: 'var(--do-text-cerulean)', fontWeight: 600 }}>pricing page</Link>.</p>

          <div className="notice" data-od-id="founding-terms">
            <p className="notice-tag">Founding-client terms</p>
            <h3>Hanicks is already running its storefront through Commerce, ahead of a public launch.</h3>
            <p>Their store reads the same catalogue as their Works instance. Nobody has yet bought Commerce as a tiered, off-the-shelf product,
              so until that happens it sells at the rates above with the first six months of support
              included, in exchange for agreeing to be a named reference.</p>
            <p>Stated plainly, because you&rsquo;d find out anyway. And you should be able to price it in
              before you decide, not after.</p>
          </div>
        </div>
      </section>

      {/* 6 · CTA STRIP */}
      <section className="g-off" data-od-id="cta-strip">
        <div className="wrap centred">
          <h2>Talk about your storefront.</h2>
          <div className="hair" />
          <p className="lede">An hour on what you sell and who buys it. If a tier fits, I&rsquo;ll name it. If
            what you actually need is a migration, I&rsquo;ll say that instead of selling you a tier.</p>
          <div className="btn-row">
            <Link className="btn btn--primary" href="/contact">Talk about your storefront</Link>
            <Link className="btn btn--ghost btn-arrow" href="/apps">See the other systems</Link>
          </div>
        </div>
      </section>

      <D17Motion />
    </>
  );
}
