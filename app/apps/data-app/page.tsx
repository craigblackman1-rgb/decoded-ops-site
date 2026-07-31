import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Decoded Data App — Decoded Ops',
  description: 'Supplier feeds in, one clean catalogue out. The Decoded Data App sits alongside the platform you already run and does the jobs it was never built for. Live at Hanicks and TackleBag.',
  alternates: { canonical: '/apps/data-app' },
  openGraph: {
    type: 'website',
    title: 'Decoded Data App — Decoded Ops',
    description: 'Supplier feeds in, one clean catalogue out. The Decoded Data App sits alongside the platform you already run and does the jobs it was never built for. Live at Hanicks and TackleBag.',
    url: 'https://decodedops.co.uk/apps/data-app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Decoded Data App — Decoded Ops',
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
                different every time. This takes them in, cleans them, matches them to what you already
                sell, and keeps your catalogue current across every channel.</p>
            </div>
            <div className="btn-row" style={{ marginTop: 30 }}>
              <Link className="btn btn--primary" href="/contact">Book an App Scoping Session</Link>
              <Link className="btn btn--ghost btn-arrow" href="#pricing">See what it costs</Link>
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

      {/* 2 · LAYER STACK · archetype 4 */}
      <section className="g-tint">
        <div className="wrap">
          <p className="eyebrow">Not a replacement</p>
          <h2>Your platform stays. This sits alongside it.</h2>
          <p className="lede" style={{ marginTop: 16 }}>Supplier feeds, data enrichment, catalogue maintenance
            across channels &mdash; the jobs your platform was never built for. Ripping it out and starting
            again is almost never the right answer. Adding the layer it&rsquo;s missing usually is.</p>

          <div className="plate-frame">
            <svg className="sk" data-tone="dark" viewBox="0 0 1240 640" role="img"
                 aria-label="Three-layer stack, read bottom-up. Layer one, the foundation that stays as it is: the platform you already own, Khaos Control, Symphony or similar. Layer two, highlighted, is the new one: the Decoded Data App, taking supplier feeds in, matching and enriching them, and keeping the catalogue current. Layer three: the channels your customers see — website, marketplaces and trade portal. Each layer rests on the one below it.">
              <defs>
                <pattern id="da4-grid" width="34" height="34" patternUnits="userSpaceOnUse">
                  <path d="M34 0H0V34" fill="none" className="sk-gridline" strokeWidth="0.6" />
                </pattern>
                <linearGradient id="da4-glass-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" className="sk-gc0" /><stop offset="100%" className="sk-gc1" />
                </linearGradient>
                <linearGradient id="da4-glass-amber" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" className="sk-ga0" /><stop offset="100%" className="sk-ga1" />
                </linearGradient>
                <filter id="da4-shadow" className="sk-drop" x="-40%" y="-40%" width="180%" height="180%">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" />
                </filter>
                <marker id="da4-ah" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto">
                  <path d="M0 0 L6 3 L0 6 Z" className="sk-amber" />
                </marker>
              </defs>

              <rect width="1240" height="640" rx="16" className="sk-bg" />
              <rect width="1240" height="640" rx="16" fill="url(#da4-grid)" />
              <rect width="1240" height="6" className="sk-amber" />

              <text x="60" y="64" className="sk-fade sk-s1 sk-cyan" fontSize="20" letterSpacing="3"
                    fontWeight="500">WHERE IT SITS</text>
              <text x="60" y="118" className="sk-fade sk-s1 sk-ink" fontFamily="Outfit,sans-serif"
                    fontWeight="800" fontSize="46">A layer, not a rip-out.</text>

              <path id="da4-spine" pathLength={1} className="sk-draw sk-s2 sk-stroke-cyan" d="M180 560 V236"
                    fill="none" strokeWidth="2.5" markerEnd="url(#da4-ah)" />

              {/* LAYER 3 — the channels */}
              <g className="sk-fade sk-s5" filter="url(#da4-shadow)">
                <rect x="240" y="190" width="920" height="110" rx="12" fill="url(#da4-glass-cyan)"
                      className="sk-node" strokeWidth="1.4" />
                <text x="288" y="238" className="sk-ink" fontFamily="Outfit,sans-serif" fontWeight="700"
                      fontSize="24">Channels</text>
                <text x="288" y="270" className="sk-mono" fontSize="18" opacity=".85">website &middot; marketplaces &middot; trade portal &middot; print</text>
                <text x="1112" y="252" textAnchor="end" className="sk-mono" fontSize="17"
                      letterSpacing="1.5" opacity=".55">LAYER 3</text>
              </g>

              {/* LAYER 2 — the Data App. Amber lands once, on the new thing. */}
              <g className="sk-fade sk-s4" filter="url(#da4-shadow)">
                <rect x="240" y="330" width="920" height="110" rx="12" fill="url(#da4-glass-amber)"
                      className="sk-node-amber" strokeWidth="1.6" />
                <text x="288" y="378" className="sk-ink" fontFamily="Outfit,sans-serif" fontWeight="700"
                      fontSize="24">Decoded Data App</text>
                <text x="288" y="410" className="sk-accent-ink" fontSize="18" opacity=".9">supplier feeds in &middot; matched &middot; enriched &middot; kept current</text>
                <text x="1112" y="392" textAnchor="end" className="sk-mono" fontSize="17"
                      letterSpacing="1.5" opacity=".7">THE NEW LAYER</text>
              </g>

              {/* LAYER 1 — the platform they already own */}
              <g className="sk-fade sk-s3" filter="url(#da4-shadow)">
                <rect x="240" y="470" width="920" height="110" rx="12" fill="url(#da4-glass-cyan)"
                      className="sk-node" strokeWidth="1.4" />
                <text x="288" y="518" className="sk-ink" fontFamily="Outfit,sans-serif" fontWeight="700"
                      fontSize="24">The platform you already own</text>
                <text x="288" y="550" className="sk-mono" fontSize="18" opacity=".85">Khaos Control &middot; Symphony &middot; whatever you run today</text>
                <text x="1112" y="532" textAnchor="end" className="sk-mono" fontSize="17"
                      letterSpacing="1.5" opacity=".55">STAYS AS IT IS</text>
              </g>

              <text x="180" y="600" textAnchor="middle" className="sk-mono sk-fade sk-s6" fontSize="17"
                    letterSpacing="1.5" opacity=".6">BUILD ORDER</text>
            </svg>
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
              <p className="stat-label">pushed live to Khaos Control within weeks</p>
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
          <p className="eyebrow">What it costs</p>
          <h2>Three tiers, priced on scope.</h2>

          <div className="inset">
            <b>App Scoping Session, £750 fixed.</b> Mandatory before any tier. Half a day working out
            which feeds, which channels, and which tier actually fits &mdash; so the quote that follows is a
            real number, not a range.
          </div>

          <div className="table-wrap">
            <table className="ds-table">
              <caption>Decoded Data App</caption>
              <thead>
                <tr>
                  <th scope="col">Tier</th>
                  <th scope="col">Implementation</th>
                  <th scope="col" className="col-star">Monthly</th>
                  <th scope="col">Scope</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Core</th>
                  <td><span className="price num">£4,750</span></td>
                  <td className="col-star"><span className="price num">£450</span>
                    <span className="price-sub">per month</span></td>
                  <td className="scope">Up to 3 supplier feeds, one sales channel</td>
                </tr>
                <tr>
                  <th scope="row">Standard <span className="star">Most take this</span></th>
                  <td><span className="price num">£9,500</span></td>
                  <td className="col-star"><span className="price num">£750</span>
                    <span className="price-sub">per month</span></td>
                  <td className="scope">Up to 10 feeds, up to 3 channels, platform integration</td>
                </tr>
                <tr>
                  <th scope="row">Extended</th>
                  <td><span className="price num">From £15,000</span></td>
                  <td className="col-star"><span className="price num">From £1,200</span>
                    <span className="price-sub">per month</span></td>
                  <td className="scope">Unlimited feeds, marketplace automation, multi-warehouse</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="table-foot">Every price on this page is what you&rsquo;d actually pay. I&rsquo;m not VAT
            registered, so there&rsquo;s no VAT to add either. The full price list across every service is on
            the <Link href="/pricing" style={{ color: 'var(--do-cerulean)', fontWeight: 600 }}>pricing page</Link>.</p>
        </div>
      </section>

      {/* 5 · CTA STRIP */}
      <section className="g-off cta-strip">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <h2>Book an App Scoping Session.</h2>
          <p className="lede">£750 fixed, half a day, and a real quote at the end of it. If it turns out you
            don&rsquo;t need this, you&rsquo;ll hear that instead.</p>
          <div className="btn-row">
            <Link className="btn btn--primary" href="/contact">Book an App Scoping Session</Link>
            <Link className="btn btn--ghost btn-arrow" href="/apps">See the other systems</Link>
          </div>
        </div>
      </section>
    </>
  );
}
