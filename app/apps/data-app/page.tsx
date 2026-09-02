import type { Metadata } from 'next';
import Link from 'next/link';
import { Plate } from '@/components/Plate';

export const metadata: Metadata = {
  title: 'Decoded Data App: Decoded Ops',
  description: 'Supplier feeds in, one clean catalogue out. The Decoded Data App sits alongside the platform you already run and does the jobs it was never built for. Live at Hanicks and TackleBag.',
  alternates: { canonical: '/apps/data-app' },
  openGraph: {
    type: 'website',
    title: 'Decoded Data App: Decoded Ops',
    description: 'Supplier feeds in, one clean catalogue out. The Decoded Data App sits alongside the platform you already run and does the jobs it was never built for. Live at Hanicks and TackleBag.',
    url: 'https://decodedops.co.uk/apps/data-app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Decoded Data App: Decoded Ops',
    description: 'Supplier feeds in, one clean catalogue out. Live at Hanicks and TackleBag.',
  },
};

export default function DataAppPage() {
  return (
    <>
      {/* 1 · HERO SPLIT */}
      <section className="g-off">
        <div className="wrap hero-split">
          <div>
            <p className="eyebrow">Decoded Data App &middot; live</p>
            <h1>The jobs your ERP was never going to do.</h1>
            <div className="hero-body">
              <p>Supplier feeds arrive as a mess. Thousands of rows, no consistent SKU, no usable images,
                different every time. The Data App takes them in, cleans them, matches them to what you already
                sell, and keeps your catalogue current across every channel.</p>
            </div>
            <div className="btn-row" style={{ marginTop: 30 }}>
              <Link className="btn btn--primary" href="/contact">Book a free 60 minute call</Link>
              <Link className="btn btn--ghost btn-arrow" href="/clarity">See how a Clarity Audit works</Link>
            </div>
          </div>

          <div className="hero-shot">
            <div className="evidence evidence--screen">
              <img src="/images/apps/data-app-dashboard.png" width={2160} height={2300}
                   alt="The Decoded Data App dashboard: supplier feed imports listed by source with row counts, a variant matching panel, and a stock export queue pushing product records to the client&rsquo;s platform." />
              <span className="stamp">hanicks &middot; Data App</span>
            </div>
            <p className="shot-caption">A live client system. Feeds in on the left, one clean catalogue out
              on the right, and the platform they already own kept up to date automatically.</p>
          </div>
        </div>
      </section>

      {/* 2 · LAYER STACK · DO-ART-105 */}
      <section className="g-tint">
        <div className="wrap">
          <p className="eyebrow">Not a replacement &middot; DO-ART-105</p>
          <h2>Your platform stays. This sits alongside it.</h2>
          <p className="lede" style={{ marginTop: 16 }}>Supplier feeds, data enrichment, catalogue maintenance
            across channels. The jobs your platform was never built for. Ripping it out and starting
            again is almost never the right answer. Adding the layer it&rsquo;s missing usually is.</p>

          <div className="plate-scroll" style={{ marginTop: 34 }}>
            <div className="plate-frame">
              <Plate tone="dark" p="da" title="A layer, not a rip-out"
                     sub="Where the Data App sits. Three layers, read bottom-up"
                     no="DO-ART-105" rev="01" cls="DECODED OPS · ISSUED">

                <path id="da-spine" pathLength={1} className="sk-draw sk-s2 p-scyan" d="M180 700 V310"
                      fill="none" strokeWidth="2.5" markerEnd="url(#da-ah)"/>

                <g className="sk-fade sk-s3" filter="url(#da-shadow)">
                  <rect x="260" y="220" width="1180" height="120" rx="14" fill="url(#da-node)"
                        className="p-node" strokeWidth="1.4"/>
                  <text x="310" y="272" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="700"
                        fontSize="26">Channels</text>
                  <text x="310" y="306" className="p-mono" fontSize="18" opacity=".85">website ·
                    marketplaces · trade portal · print</text>
                  <text x="1400" y="288" textAnchor="end" className="p-mono" fontSize="17"
                        letterSpacing="1.5" opacity=".55">LAYER 3</text>
                </g>

                <g className="sk-fade sk-s4" filter="url(#da-shadow)">
                  <rect x="260" y="380" width="1180" height="140" rx="16" fill="url(#da-amber-n)"
                        className="p-node-a" strokeWidth="2"/>
                  <text x="310" y="436" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="800"
                        fontSize="28">Decoded Data App</text>
                  <text x="310" y="470" className="p-accent-ink" fontSize="19" fontWeight="600">supplier
                    feeds in · matched · enriched · kept current</text>
                  <text x="1400" y="452" textAnchor="end" className="p-mono" fontSize="17"
                        letterSpacing="1.5" opacity=".8">THE NEW LAYER</text>
                </g>

                <g className="sk-fade sk-s5" filter="url(#da-shadow)">
                  <rect x="260" y="560" width="1180" height="120" rx="14" fill="url(#da-node)"
                        className="p-node" strokeWidth="1.4"/>
                  <text x="310" y="612" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="700"
                        fontSize="26">The platform you already own</text>
                  <text x="310" y="646" className="p-mono" fontSize="18" opacity=".85">Khaos Control ·
                    Symphony · whatever you run today</text>
                  <text x="1400" y="628" textAnchor="end" className="p-mono" fontSize="17"
                        letterSpacing="1.5" opacity=".55">STAYS AS IT IS</text>
                </g>

                <text x="180" y="740" textAnchor="middle" className="p-mono sk-fade sk-s6" fontSize="17"
                      letterSpacing="1.5" opacity=".6">BUILD ORDER</text>
              </Plate>
            </div>
          </div>

          <div className="steps">
            <article className="step">
              <p className="step-n">LAYER 1</p>
              <h3>The platform stays</h3>
              <p>You&rsquo;ve already paid for it, your team already knows it, and replacing it is a year of
                disruption you don&rsquo;t need. It keeps doing what it does well.</p>
            </article>
            <article className="step step--last">
              <p className="step-n">LAYER 2</p>
              <h3>The Data App goes alongside</h3>
              <p>Feeds land here, get matched against what you already sell, get enriched, and get pushed
                back into the platform clean. No re-keying, no second version of the truth.</p>
            </article>
            <article className="step">
              <p className="step-n">LAYER 3</p>
              <h3>Every channel stays current</h3>
              <p>Website, marketplaces, trade portal. They all read from one catalogue, so they stop
                disagreeing with each other and with the warehouse.</p>
            </article>
          </div>
        </div>
      </section>

      {/* 3 · STAT ROW */}
      <section className="g-navy">
        <div className="wrap">
          <p className="eyebrow">Hanicks &middot; first run</p>
          <h2>Real numbers from a real deployment.</h2>

          <div className="grid grid--3" style={{ marginTop: 44 }}>
            <div className="stat">
              <p className="stat-num num">164,752</p>
              <p className="stat-label">products imported from supplier feeds</p>
            </div>
            <div className="stat">
              <p className="stat-num num">77%</p>
              <p className="stat-label">matched automatically on the first run</p>
            </div>
            <div className="stat">
              <p className="stat-num num">11,064</p>
              <p className="stat-label">matched and prepared for the Khaos Control catalogue within weeks</p>
            </div>
          </div>

          <p className="stat-caption">Hanicks, named with permission. The platform didn&rsquo;t change. The layer
            around it did, and the catalogue went from something nobody trusted to something the
            warehouse and the website could both work from.</p>
        </div>
      </section>

      {/* 4 · COMPARISON TABLE */}
      <section className="g-white" id="pricing">
        <div className="wrap">
          <p className="eyebrow">What each tier covers</p>
          <h2>Three tiers, priced on scope.</h2>

          <div className="inset">
            <b>Which tier fits depends on your setup.</b> How many feeds, how many channels, and what
            the platform you already run needs beside it. That gets settled in conversation, so the
            quote that follows is a real number, not a range.
          </div>

          <div className="table-wrap">
            <table className="ds-table">
              <caption>Decoded Data App</caption>
              <thead>
                <tr>
                  <th scope="col">Tier</th>
                  <th scope="col">Scope</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Core</th>
                  <td className="scope">Up to 3 supplier feeds, one sales channel</td>
                </tr>
                <tr>
                  <th scope="row">Standard <span className="star">Most take this</span></th>
                  <td className="scope">Up to 10 feeds, up to 3 channels, platform integration</td>
                </tr>
                <tr>
                  <th scope="row">Extended</th>
                  <td className="scope">Unlimited feeds, marketplace automation, multi-warehouse</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="table-foot">What this costs depends on scope, so it&rsquo;s quoted once I know what your setup needs rather than read off a list. I&rsquo;m not VAT registered, so there&rsquo;s no VAT to add. How I price everything else is on the <Link href="/pricing" style={{ color: 'var(--do-cerulean)', fontWeight: 600 }}>pricing page</Link>.</p>
        </div>
      </section>

      {/* 5 · CTA STRIP */}
      <section className="g-off cta-strip">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <h2>Talk it through first.</h2>
          <p className="lede">No pitch. If it turns out you don&rsquo;t need this, that&rsquo;s what
            you&rsquo;ll hear.</p>
          <div className="btn-row">
            <Link className="btn btn--primary" href="/contact">Book a free 60 minute call</Link>
            <Link className="btn btn--ghost btn-arrow" href="/apps">See the other systems</Link>
          </div>
        </div>
      </section>
    </>
  );
}
