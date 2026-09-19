import type { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { JsonLd } from '@/components/JsonLd';
import { Plate } from '@/components/Plate';
import pricingData from '@/data/pricing-v11.json';

const { consultancy, small_business } = pricingData;

export const metadata: Metadata = {
  title: 'Pricing: Decoded Ops',
  description: 'Plain pricing for the consultancy. The Clarity Audit is from £1,500. Everything else is quoted after a conversation about your operation.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    type: 'website',
    title: 'Pricing: Decoded Ops',
    description: 'Plain pricing for the consultancy. The Clarity Audit is from £1,500. Everything else is quoted after a conversation.',
    url: 'https://decodedops.co.uk/pricing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing: Decoded Ops',
    description: 'Plain pricing for the consultancy. The Clarity Audit is from £1,500. Everything else is quoted after a conversation.',
  },
};

const pricingSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      name: 'Pricing',
      url: 'https://decodedops.co.uk/pricing',
      description: 'Plain pricing for the consultancy. The Clarity Audit is from £1,500. Everything else is quoted after a conversation about your operation.',
      provider: { '@type': 'Organization', name: 'Decoded Ops', url: 'https://decodedops.co.uk' },
    },
    {
      '@type': 'Offer',
      name: 'Clarity Check',
      price: String(small_business.products[0].price),
      priceCurrency: 'GBP',
      description: small_business.products[0].format,
    },
    {
      '@type': 'Offer',
      name: 'Clarity Audit',
      price: String(consultancy[0].public_from),
      priceCurrency: 'GBP',
      description: 'One day on site, a written plan within five working days.',
    },
  ],
};

export default function PricingPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Pricing', url: 'https://decodedops.co.uk/pricing' },
      ]} />
      <JsonLd data={pricingSchema} />

      {/* 1 · HERO */}
      <section className="g-off">
        <div className="container hero-center">
          <p className="eyebrow">Pricing</p>
          <h1>Start with the audit.</h1>
          <p className="lead">One fixed price to begin. Everything after that is scoped once
            I understand your operation.</p>
          <div className="hero-cta">
            <Link className="btn btn-primary" href="/contact">Book a free discovery call</Link>
            <Link className="btn btn-ghost btn-arrow" href="/how-i-build">See how I decide what to build</Link>
          </div>
        </div>
      </section>

      {/* 2 · CONSULTANCY */}
      <section className="g-white">
        <div className="container">
          <p className="eyebrow">Consultancy</p>
          <h2>Diagnosis, then delivery.</h2>
          <p className="lead" style={{ marginTop: 16 }}>Priced by the size of the business, because the work
            scales with it. Clarity Audit is the entry point into everything below it.</p>

          <div className="table-wrap" style={{ marginTop: 28 }}>
            <table className="ds-table ds-table--fixed">
              <colgroup>
                <col style={{ width: '22%' }} />
                <col style={{ width: '34%' }} />
                <col style={{ width: '22%' }} />
                <col style={{ width: '22%' }} />
              </colgroup>
              <caption>Consultancy services</caption>
              <thead>
                <tr>
                  <th scope="col">Service</th>
                  <th scope="col">What it is</th>
                  <th scope="col">From</th>
                  <th scope="col">Minimum</th>
                </tr>
              </thead>
              <tbody>
                {consultancy.map(s => (
                  <tr key={s.key}>
                    <th scope="row">{s.name}</th>
                    <td className="scope">
                      {s.key === 'clarity_audit' && 'One day on site, a written plan within five working days.'}
                      {s.key === 'deliver' && 'Project delivery, vendor management, and keeping things on track.'}
                      {s.key === 'transform' && 'Rebuild how the business runs, one project at a time.'}
                      {s.key === 'retained' && 'A technology director, part time. Direct line to Craig.'}
                    </td>
                    <td>
                      <span className="price">From £{s.public_from.toLocaleString()}</span>
                      {s.unit === 'per month' && <span className="num">/mo</span>}
                    </td>
                    <td className="scope">{s.minimum ?? 'One-off'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="table-foot" style={{ marginTop: 20 }}>Every price has three tiers — Essential, Recommended, Complete — set at the audit
            by the size and shape of your operation. The full tier sheet is in the price pack, sent on request.</p>

          <div className="hero-cta" style={{ marginTop: 36 }}>
            <Link className="btn btn-primary" href="/contact">Book a free discovery call</Link>
            <Link className="btn btn-ghost btn-arrow" href="/clarity">See how Clarity Audit works</Link>
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

      {/* 3 · SMALL BUSINESS */}
      <section className="g-off">
        <div className="container">
          <p className="eyebrow">Small business</p>
          <h2>The same method, sized for a smaller operation.</h2>
          <p className="lead" style={{ marginTop: 16 }}>Remote, shorter, and priced so it&rsquo;s a decision you can
            make on your own without a board behind you.</p>

          <div className="card" style={{ marginTop: 28, maxWidth: 540 }}>
            <span className="kicker">Start here</span>
            <h3>Clarity Check</h3>
            <p style={{ color: 'var(--do-text-muted)', fontSize: 'var(--do-text-sm)', lineHeight: 1.75, marginTop: 8 }}>
              A 3-hour remote diagnostic. Written priorities within five working days.
              Feeds directly into the Clarity Audit if you decide to go further.
            </p>
            <span className="price" style={{ marginTop: 16, display: 'inline-block' }}>£595 fixed</span>
            <div style={{ marginTop: 20 }}>
              <Link className="btn btn-primary" href="/contact">Book your Clarity Check</Link>
            </div>
          </div>

          <p className="table-foot" style={{ marginTop: 28 }}>Sub-£1m businesses use the same services at the &ldquo;from&rdquo; prices above.
            There is no separate small-business pricing ladder. See <Link href="/small-business"
              style={{ color: 'var(--do-cerulean)', fontWeight: 600 }}>small business services</Link> for details.</p>
        </div>
      </section>

      {/* 4 · SYSTEMS */}
      <section className="section--tight g-navy">
        <div className="container narrow">
          <p className="eyebrow">A different kind of decision</p>
          <h2>Everything above is diagnosis and delivery. What follows is software.</h2>
          <p className="lead" style={{ marginTop: 18 }}>Priced at the audit — buy outright or lease to own over 36–60 months;
            you own it at the end. Different decision, different section, on purpose.</p>
        </div>
      </section>

      <section className="g-off">
        <div className="container">
          <p className="eyebrow">Systems</p>
          <h2>Three products. Scoped and quoted per business.</h2>

          <div className="grid grid--3" style={{ marginTop: 28 }}>
            <Link className="card" href="/apps/data-app">
              <span className="kicker">Data App</span>
              <h3>Supplier feeds into one clean catalogue</h3>
            </Link>
            <Link className="card" href="/apps/artwork-manager">
              <span className="kicker">Artwork Manager</span>
              <h3>Versions, approvals and delivery</h3>
            </Link>
            <Link className="card" href="/apps/commerce">
              <span className="kicker">Trade store</span>
              <h3>B2B ordering for your customers</h3>
            </Link>
          </div>

          <p className="table-foot" style={{ marginTop: 28 }}>Artwork Manager and Commerce sell on founding-client terms until first
            delivery: six months of support waived, in exchange for a named reference and accepting that
            some features arrive during the engagement. Stated plainly, not a discount dressed as an offer.</p>

          <div className="inset" style={{ marginTop: 20 }}>
            <b>If an off-the-shelf platform fits, that&rsquo;s folded into the Clarity Audit at no
            extra cost.</b> Nothing separate to buy. Building something only makes sense once buying
            has been ruled out in writing, <Link href="/how-i-build"
              style={{ color: 'var(--do-cerulean)', fontWeight: 600 }}>that&rsquo;s the whole of how I build</Link>.
          </div>
          <div className="inset">
            <b>There is no price list for the apps, and putting one here would be dishonest.</b> What one
            costs depends on four things:
            <ul className="inset-list">
              <li>how many supplier feeds</li>
              <li>how many sales channels</li>
              <li>which machines and formats</li>
              <li>whether it talks to a platform you already run</li>
            </ul>
            Two businesses buying the same app can be a long way apart on all four, so the conversation
            about your setup comes first and the quote comes after it, written for your business.
          </div>

          <p className="table-foot">A full custom build is quoted the same way. If nothing on the market
            fits, that&rsquo;s a Clarity Audit conversation, never a row on a table.</p>

          <div className="hero-cta" style={{ marginTop: 36 }}>
            <Link className="btn btn-primary" href="/apps">See all three apps</Link>
            <Link className="btn btn-secondary" href="/contact">Book a free 60 minute call</Link>
          </div>
        </div>
      </section>

      {/* 5 · CTA STRIP */}
      <section className="g-white cta-strip">
        <div className="container" style={{ maxWidth: 760 }}>
          <h2>Get the price pack.</h2>
          <p className="lead">Two pages: how I price, and what I built. Sent the same day.</p>
          <div className="hero-cta">
            <Link className="btn btn-primary" href="/contact">Request the price pack</Link>
            <Link className="btn btn-ghost btn-arrow" href="/clarity">See how Clarity Audit works</Link>
          </div>
        </div>
      </section>
    </>
  );
}
