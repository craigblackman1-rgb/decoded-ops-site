import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The systems — Decoded Ops',
  description: 'Software built for jobs the platforms in this sector were never going to do. The Decoded Data App, the Artwork Manager and Decoded Commerce — proven at real clients before they went anywhere near a price list.',
  alternates: { canonical: '/apps' },
  openGraph: {
    type: 'website',
    title: 'The systems — Decoded Ops',
    description: 'Software built for jobs the platforms in this sector were never going to do. The Decoded Data App, the Artwork Manager and Decoded Commerce — proven at real clients before they went anywhere near a price list.',
    url: 'https://decodedops.co.uk/apps',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The systems — Decoded Ops',
    description: 'Software built for jobs the platforms in this sector were never going to do, proven at real clients before it went anywhere near a price list.',
  },
};

export default function AppsPage() {
  return (
    <>
      {/* 1 · HERO CENTRE */}
      <section className="g-off">
        <div className="wrap hero-center">
          <p className="eyebrow">The systems</p>
          <h1>What&rsquo;s already running.</h1>
          <p className="lede">Not a product catalogue. Software built for jobs the platforms in this sector
            were never going to do, proven at real clients before it went anywhere near a price list.</p>
        </div>
      </section>

      {/* 2 · LOG LIST · one row per app */}
      <section className="g-white">
        <div className="wrap">
          <p className="eyebrow">Three of them</p>
          <h2>Built for the job, then priced.</h2>

          <div className="log-list">
            <Link className="log-row" href="/apps/data-app">
              <div>
                <span className="chip chip--live">Live &middot; two deployments</span>
                <h3 style={{ marginTop: 14 }}>Decoded Data App</h3>
              </div>
              <p>Supplier feeds in, clean product data out, stock and bins on the warehouse floor.
                Running today at Hanicks and TackleBag.</p>
              <span className="go">See how it works</span>
            </Link>

            <Link className="log-row" href="/apps/artwork-manager">
              <div>
                <span className="chip chip--pre">Pre-release &middot; founding client terms</span>
                <h3 style={{ marginTop: 14 }}>Decoded Artwork Manager</h3>
              </div>
              <p>Every logo, every format, every version, with an audit trail. Customer proofing without
                the email back-and-forth.</p>
              <span className="go">See how it works</span>
            </Link>

            <Link className="log-row" href="/apps/commerce">
              <div>
                <span className="chip chip--live">Live infrastructure</span>
                <h3 style={{ marginTop: 14 }}>Decoded Commerce</h3>
              </div>
              <p>Storefront build and migration. Three tiers by functionality, plus scoped custom work
                for a full rebuild &mdash; Hanicks&rsquo; migration off WooCommerce and back into Khaos Control is
                the worked example.</p>
              <span className="go">See how it works</span>
            </Link>
          </div>

          <div className="inset">
            <b>What isn&rsquo;t listed here.</b> There&rsquo;s a CRM four commits in. It isn&rsquo;t for sale, at any
            price, until it works end to end &mdash; and putting it on this page would be selling you
            something that doesn&rsquo;t. When it&rsquo;s ready, it&rsquo;ll appear here with the same proof as the rest.
          </div>
        </div>
      </section>

      {/* 3 · HOW THEY GET BUILT */}
      <section className="g-navy">
        <div className="wrap">
          <p className="eyebrow">Before any of this</p>
          <h2>Software is the last answer, not the first.</h2>
          <p className="lede" style={{ marginTop: 16, maxWidth: '62ch' }}>If a platform already on the market does
            the job, that&rsquo;s what goes on the table &mdash; named, priced, and with no commission in it for me.
            These three exist because for a specific set of jobs, nothing on the market did.</p>
          <div className="btn-row" style={{ marginTop: 32 }}>
            <Link className="btn btn--outline btn-arrow" href="/how-i-build">How I decide what to build</Link>
          </div>
        </div>
      </section>

      {/* 4 · CTA STRIP */}
      <section className="g-off cta-strip">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <h2>Talk about what you need.</h2>
          <p className="lede">Start with the problem, not the product. If one of these fits, I&rsquo;ll say so. If
            something you can already buy fits better, I&rsquo;ll say that instead.</p>
          <div className="btn-row">
            <Link className="btn btn--primary" href="/contact">Talk about what you need</Link>
            <Link className="btn btn--ghost btn-arrow" href="/pricing">See what they cost</Link>
          </div>
        </div>
      </section>
    </>
  );
}
