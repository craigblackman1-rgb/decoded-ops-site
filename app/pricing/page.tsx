import type { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { Plate } from '@/components/Plate';

// Ported from D:\apps\design-systems\decoded-marketing\pricing.html.
// Every figure below is cross-checked against
// DO_Pricing_Architecture_v8.1.md (30 Jul 2026, canonical), see the
// Lane B build report. No figure changed during the port; the mockup
// already matched the source document. This replaces the previous
// PricingClient.tsx implementation, whose figures had drifted from
// canonical (see the v8.1 § Reconciliation table).

export const metadata: Metadata = {
  title: 'Pricing: Decoded Ops',
  description: 'Plain pricing for the consultancy: Clarity Audit, Deliver, Transform and Retained, plus the small business tier. No hidden day rate. App builds are scoped and quoted per business.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    type: 'website',
    title: 'Pricing: Decoded Ops',
    description: 'Plain pricing for the consultancy: Clarity Audit, Deliver, Transform and Retained, plus the small business tier. No hidden day rate. App builds are scoped and quoted per business.',
    url: 'https://decodedops.co.uk/pricing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing: Decoded Ops',
    description: 'Plain pricing for technology consultancy and Systems work. No hidden day rate.',
  },
};

export default function PricingPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Pricing', url: 'https://decodedops.co.uk/pricing' },
      ]} />

      {/* 1 · HERO CENTRE */}
      <section className="g-off">
        <div className="container hero-center">
          <p className="eyebrow">Pricing</p>
          <h1>Plain pricing. No hidden day rate.</h1>
          <p className="lead">Every price on this page is what you&rsquo;ll actually pay. I&rsquo;m not VAT registered,
            so there&rsquo;s no VAT to add either.</p>
          <div className="hero-cta">
            <Link className="btn btn-primary" href="/contact">Book a free discovery call</Link>
            <Link className="btn btn-ghost btn-arrow" href="/how-i-build">See how I decide what to build</Link>
          </div>
        </div>
      </section>

      {/* 2 · TABLE 1 · CONSULTANCY */}
      <section className="g-white">
        <div className="container">
          <p className="eyebrow">Consultancy</p>
          <h2>Diagnosis, then delivery.</h2>
          <p className="lead" style={{ marginTop: 16 }}>Priced by the size of the business, because the work
            scales with it. Clarity Audit is the entry point into everything below it.</p>

          <div className="table-wrap">
            <table className="ds-table ds-table--fixed">
              <colgroup>
                <col style={{ width: '26%' }} />
                <col style={{ width: '24%' }} />
                <col style={{ width: '24%' }} />
                <col style={{ width: '26%' }} />
              </colgroup>
              <caption>Consultancy: by turnover band</caption>
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Under £1m</th>
                  <th scope="col">£1m–£7.5m</th>
                  <th scope="col">£7.5m+</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Clarity Audit</th>
                  <td className="full" colSpan={3}>
                    <span className="price">From £1,500</span>
                    <span className="price-sub">One day on site, a written plan within five working days.
                      £1,500 is the floor for a single site, more sites scale up from there, scoped
                      after the first call. The entry point into everything else.</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Deliver</th>
                  <td><span className="price">£1,200–£1,500<span className="num">/mo</span></span>
                    <span className="price-sub">anchor £1,400</span></td>
                  <td><span className="price">£1,400–£2,000<span className="num">/mo</span></span>
                    <span className="price-sub">anchor £1,800</span></td>
                  <td><span className="price">£1,800–£2,500+<span className="num">/mo</span></span>
                    <span className="price-sub">anchor £2,200</span></td>
                </tr>
                <tr>
                  <th scope="row">Transform</th>
                  <td><span className="price">£1,500–£2,200<span className="num">/mo</span></span>
                    <span className="price-sub">anchor £1,800</span></td>
                  <td><span className="price">£2,000–£3,200<span className="num">/mo</span></span>
                    <span className="price-sub">anchor £2,500</span></td>
                  <td><span className="price">£3,000–£5,000+<span className="num">/mo</span></span>
                    <span className="price-sub">anchor £4,000</span></td>
                </tr>
                <tr>
                  <th scope="row">Retained</th>
                  <td className="full" colSpan={3}>
                    <span className="price">£1,440 · £2,880 · £5,760 per month</span>
                    <span className="price-sub">Advisory, Embedded and Programme: 2, 4 and 8 days a month.
                      Same price at every turnover band. <Link href="/retained"
                        style={{ color: 'var(--do-cerulean)', fontWeight: 600 }}>How the fractional CTO work
                      runs →</Link></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="table-foot">Ranges reflect scope, not negotiation. The anchor figure is the
            recommended tier within each band, the number to plan around if you want one.</p>

          <h3 style={{ marginTop: 56, fontSize: '1.5rem' }}>Retained Transformation</h3>
          <p className="lead" style={{ marginTop: 12 }}>Ongoing programme delivery rather than advice. A
            longer commitment, and priced as one.</p>

          <div className="table-wrap">
            <table className="ds-table ds-table--fixed">
              <colgroup>
                <col style={{ width: '26%' }} />
                <col style={{ width: '24%' }} />
                <col style={{ width: '24%' }} />
                <col style={{ width: '26%' }} />
              </colgroup>
              <caption>Retained Transformation: by turnover band</caption>
              <thead>
                <tr>
                  <th scope="col">Tier</th>
                  <th scope="col">Under £1m</th>
                  <th scope="col">£1m–£7.5m</th>
                  <th scope="col">£7.5m+</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Foundation</th>
                  <td><span className="price">£1,500<span className="num">/mo</span></span></td>
                  <td><span className="price">£2,000<span className="num">/mo</span></span></td>
                  <td><span className="price">£3,000<span className="num">/mo</span></span></td>
                </tr>
                <tr>
                  <th scope="row" className="col-star">Programme <span className="star">Recommended</span></th>
                  <td className="col-star"><span className="price">£1,800<span className="num">/mo</span></span></td>
                  <td className="col-star"><span className="price">£2,500<span className="num">/mo</span></span></td>
                  <td className="col-star"><span className="price">£4,000<span className="num">/mo</span></span></td>
                </tr>
                <tr>
                  <th scope="row">Accelerated</th>
                  <td><span className="price">£2,200<span className="num">/mo</span></span></td>
                  <td><span className="price">£3,200<span className="num">/mo</span></span></td>
                  <td><span className="price">£5,000+<span className="num">/mo</span></span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="inset">
            <b>12-month minimum</b> across all tiers and segments, 30 days&rsquo; notice after that. On site
            every six to eight weeks, travel at cost. Any app build is always a separate line, quoted
            after Clarity Audit, never folded into the retainer.
          </div>

          <div className="hero-cta" style={{ marginTop: 36 }}>
            <Link className="btn btn-primary" href="/contact">Book a free discovery call</Link>
          </div>
        </div>
      </section>

      {/* 2a · GUARANTEE PLATE · DO-ART-203 */}
      <section className="g-tint">
        <div className="container">
          <p className="eyebrow">Guarantee &middot; DO-ART-203</p>
          <h2>The 3x Clarity Guarantee.</h2>
          <p className="lead" style={{ marginTop: 16 }}>Clarity Audit, £1,500 fixed. If it doesn&rsquo;t find three
            times the fee, it&rsquo;s refunded.</p>

          <div className="plate-scroll" style={{ marginTop: 34 }}>
            <div className="plate-frame">
              <Plate tone="dark" p="gt" title="The 3x Clarity Guarantee"
                     sub="Clarity Audit, £1,500 fixed"
                     no="DO-ART-203" rev="01" cls="DECODED OPS · ISSUED">

                <g className="sk-fade sk-s1" opacity=".5">
                  <line x1="430" y1="212" x2="430" y2="560" className="p-scyan" strokeWidth=".8"
                        strokeOpacity=".35"/>
                </g>

                <g className="sk-fade sk-s2">
                  <text x="60" y="252" className="p-mono" fontSize="17" letterSpacing="1.6"
                        opacity=".55">THE FEE</text>
                  <text x="60" y="282" className="p-mono" fontSize="16" opacity=".4">Clarity Audit,
                    fixed</text>
                  <rect x="430" y="228" width="240" height="62" rx="6" fill="url(#gt-bar)"
                        className="p-node" strokeWidth="1"/>
                  <text x="458" y="270" className="p-ink" fontFamily="Outfit,sans-serif"
                        fontWeight="700" fontSize="30">£1,500</text>
                </g>

                <g className="sk-fade sk-s4" filter="url(#gt-shadow)">
                  <text x="60" y="392" className="p-mono" fontSize="17" letterSpacing="1.6"
                        opacity=".55">GUARANTEE THRESHOLD</text>
                  <text x="60" y="422" className="p-mono" fontSize="16" opacity=".4">3x the fee,
                    recoverable cost or lost revenue</text>
                  <rect x="430" y="368" width="720" height="62" rx="6" fill="url(#gt-amber-b)"
                        className="p-node-a" strokeWidth="1.4"/>
                  <text x="458" y="410" className="p-accent-ink" fontFamily="Outfit,sans-serif"
                        fontWeight="700" fontSize="30">£4,500+</text>
                </g>

                <g className="sk-fade sk-s6">
                  <line x1="60" y1="500" x2="1540" y2="500" className="p-scyan" strokeWidth=".6"
                        strokeOpacity=".22"/>
                  <rect x="60" y="528" width="4" height="18" rx="1" className="p-amber"/>
                  <text x="80" y="544" className="p-mono" fontSize="16" letterSpacing="2.2"
                        opacity=".55">IF IT DOESN&apos;T CLEAR THAT BAR</text>
                  <text x="60" y="594" className="p-ink" fontFamily="Outfit,sans-serif"
                        fontWeight="600" fontSize="26">Full refund. No conditions.
                    No questions.</text>
                  <text x="60" y="630" className="p-mono" fontSize="17" opacity=".5">Not insurance,
                    near-certain cost avoidance, priced at the fee itself.</text>
                </g>
              </Plate>
            </div>
          </div>
        </div>
      </section>

      {/* 3 · HARD BREAK */}
      <section className="section--tight g-navy">
        <div className="container narrow">
          <p className="eyebrow">A different kind of decision</p>
          <h2>Everything above is diagnosis and delivery. What follows is software.</h2>
          <p className="lead" style={{ marginTop: 18 }}>Priced the same way whether you buy it standalone or
            alongside a programme. Different decision, different section, on purpose.</p>
        </div>
      </section>

      {/* 4 · TABLE 2 · SYSTEMS */}
      <section className="g-off">
        <div className="container">
          <p className="eyebrow">Systems</p>
          <h2>Three products. Scoped and quoted per business.</h2>

          <div className="inset" style={{ marginTop: 26 }}>
            <b>If an off-the-shelf platform fits, that&rsquo;s folded into the Clarity Audit at no
            extra cost.</b> Nothing separate to buy. Building something only makes sense once buying
            has been ruled out in writing, <Link href="/how-i-build"
              style={{ color: 'var(--do-cerulean)', fontWeight: 600 }}>that&rsquo;s the whole of how I build</Link>.
          </div>
          <div className="inset">
            <b>There is no price list for the apps, and putting one here would be dishonest.</b> What one
            costs depends on four things:
            <ul style={{ margin: '12px 0 12px', paddingLeft: 22 }}>
              <li>how many supplier feeds</li>
              <li>how many sales channels</li>
              <li>which machines and formats</li>
              <li>whether it talks to a platform you already run</li>
            </ul>
            Two businesses buying the same app can be a long way apart on all four, so the conversation
            about your setup comes first and the quote comes after it, written for your business.
          </div>

          <p className="table-foot">Artwork Manager and Commerce sell on founding-client terms until first
            delivery: six months of support waived, in exchange for a named reference and accepting that
            some features arrive during the engagement. Stated plainly, not a discount dressed as an offer.</p>
          <p className="table-foot">A full custom build is quoted the same way. If nothing on the market
            fits, that&rsquo;s a Clarity Audit conversation, never a row on a table.</p>

          <div className="hero-cta" style={{ marginTop: 36 }}>
            <Link className="btn btn-primary" href="/apps/data-app">See how the Data App works</Link>
            <Link className="btn btn-secondary" href="/contact">Book a free 60 minute call</Link>
          </div>
        </div>
      </section>

      {/* 5 · TABLE 3 · SMALL BUSINESS */}
      <section className="g-tint">
        <div className="container">
          <p className="eyebrow">Small business</p>
          <h2>The same method, sized for a smaller operation.</h2>
          <p className="lead" style={{ marginTop: 16 }}>Remote, shorter, and priced so it&rsquo;s a decision you can
            make on your own without a board behind you.</p>

          <div className="table-wrap">
            <table className="ds-table ds-table--fixed">
              <colgroup>
                <col style={{ width: '26%' }} />
                <col style={{ width: '24%' }} />
                <col style={{ width: '50%' }} />
              </colgroup>
              <caption>Small business: fixed prices</caption>
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Format</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Clarity Check</th>
                  <td><span className="price">£595 fixed</span></td>
                  <td className="scope">Three-hour remote session</td>
                </tr>
                <tr>
                  <th scope="row">Deliver</th>
                  <td><span className="price">£795<span className="num">/mo</span></span></td>
                  <td className="scope">90-minute remote sessions, three-month minimum</td>
                </tr>
                <tr>
                  <th scope="row">Transform</th>
                  <td><span className="price">£1,095<span className="num">/mo</span></span></td>
                  <td className="scope">90-minute remote sessions, milestone-based</td>
                </tr>
                <tr>
                  <th scope="row">Retained</th>
                  <td><span className="price">£360 · £720 · £1,080<span className="num">/mo</span></span>
                    <span className="price-sub">Entry · Mid · Full</span></td>
                  <td className="scope">One, two or three four-hour sessions a month, three-month minimum</td>
                </tr>
                <tr>
                  <th scope="row">AI Readiness Check</th>
                  <td><span className="price">£395 fixed</span></td>
                  <td className="scope">90-minute remote session</td>
                </tr>
                <tr>
                  <th scope="row">Quarterly Sprint</th>
                  <td><span className="price">£995 fixed</span><span className="price-sub">one-off, per quarter</span></td>
                  <td className="scope">Half day, remote or on site, travel at cost</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6 · CTA STRIP */}
      <section className="g-white cta-strip">
        <div className="container" style={{ maxWidth: 760 }}>
          <h2>Not sure which line you&rsquo;re in?</h2>
          <p className="lead">That&rsquo;s what the discovery call is for. It&rsquo;s free, takes 60 minutes, and comes
            with no obligation, just an honest conversation about your operation.</p>
          <div className="hero-cta">
            <Link className="btn btn-primary" href="/contact">Book a free discovery call</Link>
            <Link className="btn btn-ghost btn-arrow" href="/clarity">See how Clarity Audit works</Link>
          </div>
        </div>
      </section>
    </>
  );
}
