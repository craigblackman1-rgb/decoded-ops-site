import type { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { Plate } from '@/components/Plate';

export const metadata: Metadata = {
  title: 'Pricing: Decoded Ops',
  description: 'One fixed price to start. The Clarity Audit is a fixed price; everything else is quoted after a conversation about your operation.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    type: 'website',
    title: 'Pricing: Decoded Ops',
    description: 'One fixed price to start. The Clarity Audit is a fixed price; everything else is quoted after a conversation about your operation.',
    url: 'https://decodedops.co.uk/pricing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing: Decoded Ops',
    description: 'One fixed price to start. Everything else is quoted after a conversation.',
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
          <h1>Start with the audit.</h1>
          <p className="lead">One fixed price to begin. Everything after that is scoped once
            I understand your operation.</p>
          <div className="hero-cta">
            <Link className="btn btn-primary" href="/contact">Book a free discovery call</Link>
            <Link className="btn btn-ghost btn-arrow" href="/how-i-build">See how I decide what to build</Link>
          </div>
        </div>
      </section>

      {/* 2 · CLARITY AUDIT */}
      <section className="g-white">
        <div className="container">
          <p className="eyebrow">Entry point</p>
          <h2>The Clarity Audit.</h2>
          <p className="lead" style={{ marginTop: 16 }}>A day on site and a written plan within five working days.
            Six audit areas. A fixed price that scales with the number of sites.</p>

          <div className="table-wrap" style={{ marginTop: 28 }}>
            <table className="ds-table ds-table--fixed">
              <colgroup>
                <col style={{ width: '100%' }} />
              </colgroup>
              <caption>Clarity Audit: the entry point</caption>
              <thead>
                <tr>
                  <th scope="col">Product</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Clarity Audit</th>
                </tr>
                <tr>
                  <td>
                    <span className="price">From £1,500</span>
                    <span className="price-sub">One day on site, a written plan within five working days.
                      £1,500 is the floor for a single site, more sites scale up from there, scoped
                      after the first call. The entry point into everything else.</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

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

      {/* 3 · QUALIFICATION */}
      <section className="g-off">
        <div className="container narrow">
          <p className="eyebrow">After the audit</p>
          <h2>Everything past the audit is priced after a conversation.</h2>
          <p className="lead" style={{ marginTop: 16 }}>What an engagement costs depends on the size of the operation,
            how many systems are involved, and how much of the work we take on. We will not quote a number
            before we understand those things, because a number quoted blind is either too high to be fair
            or too low to be delivered.</p>
          <p className="lead" style={{ marginTop: 16 }}>The Clarity Audit is the way in. It is a fixed price,
            it stands alone, and it produces a written plan and a firm price for whatever comes next.</p>
        </div>
      </section>

      {/* 4 · HARD BREAK */}
      <section className="section--tight g-navy">
        <div className="container narrow">
          <p className="eyebrow">A different kind of decision</p>
          <h2>What follows is software.</h2>
          <p className="lead" style={{ marginTop: 18 }}>Priced the same way whether you buy it standalone or
            alongside a programme. Different decision, different section, on purpose.</p>
        </div>
      </section>

      {/* 5 · SYSTEMS */}
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
