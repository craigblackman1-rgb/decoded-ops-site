import type { Metadata } from 'next';
import Link from 'next/link';
import { Plate } from '@/components/Plate';

export const metadata: Metadata = {
  title: 'The systems: Decoded Ops',
  description: 'Software built for jobs the platforms in this sector were never going to do. The Decoded Data App, the Artwork Manager and Decoded Commerce, proven at real clients.',
  alternates: { canonical: '/apps' },
  openGraph: {
    type: 'website',
    title: 'The systems: Decoded Ops',
    description: 'Software built for jobs the platforms in this sector were never going to do. The Decoded Data App, the Artwork Manager and Decoded Commerce, proven at real clients.',
    url: 'https://decodedops.co.uk/apps',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The systems: Decoded Ops',
    description: 'Software built for jobs the platforms in this sector were never going to do, proven at real clients.',
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
            were never going to do, proven at real clients.</p>
        </div>
      </section>

      {/* 2 · LOG LIST · one row per app */}
      <section className="g-white">
        <div className="wrap">
          <p className="eyebrow">What I build</p>
          <h2>Built for the job.</h2>

          <div className="log-list">
            <Link className="log-row" href="/apps/data-app">
              <div>
                <span className="chip chip--live">Live &middot; two deployments</span>
                <h3 style={{ marginTop: 14 }}>Decoded Data App</h3>
              </div>
              <p>Supplier feeds in, clean product data out, stock and bins right on the warehouse floor.
                Live today at two client deployments.</p>
              <span className="go">See how it works</span>
            </Link>

            <Link className="log-row" href="/apps/artwork-manager">
              <div>
                <span className="chip chip--pre">Pre-release &middot; founding client terms</span>
                <h3 style={{ marginTop: 14 }}>Decoded Artwork Manager</h3>
              </div>
              <p>Every logo, every format, every version, with an audit trail. Customers approve their own
                proofs, no email back-and-forth.</p>
              <span className="go">See how it works</span>
            </Link>

            <Link className="log-row" href="/apps/commerce">
              <div>
                <span className="chip chip--live">Live infrastructure</span>
                <h3 style={{ marginTop: 14 }}>Decoded Commerce</h3>
              </div>
              <p>Storefront build and migration, scoped to what your customers actually need.
                A full migration off WooCommerce, a new storefront, and reintegration back
                into Khaos Control is the worked example.</p>
              <span className="go">See how it works</span>
            </Link>

            <Link className="log-row" href="/apps/crm">
              <div>
                <span className="chip chip--pre">Founding client terms</span>
                <h3 style={{ marginTop: 14 }}>Decoded CRM</h3>
              </div>
              <p>Leads, companies, contacts and deals, through to quotes, contracts, sales orders and
                invoices. Built around how this sector actually sells.</p>
              <span className="go">See how it works</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2a · THREE APPS PLATE · DO-ART-104 */}
      <section className="g-tint">
        <div className="wrap">
          <p className="eyebrow">Architecture &middot; DO-ART-104</p>
          <h2>Three apps, one platform.</h2>
          <p className="lede" style={{ marginTop: 16 }}>Nothing replaced. Each app plugs a specific gap
            alongside the platform you already run.</p>

          <div className="plate-scroll" style={{ marginTop: 34 }}>
            <div className="plate-frame">
              <Plate tone="dark" p="ap" title="Three apps, one platform"
                     sub="Nothing replaced. Each app plugs a specific gap"
                     no="DO-ART-104" rev="01" cls="DECODED OPS · ISSUED">

                <g className="sk-fade sk-s2">
                  <path id="ap-l1" pathLength={1} className="sk-draw p-scyan" fill="none" strokeWidth="2.4"
                        markerEnd="url(#ap-ah)" d="M470 330 C 560 370, 600 390, 660 420"/>
                  <path id="ap-l2" pathLength={1} className="sk-draw p-scyan" fill="none" strokeWidth="2.4"
                        markerEnd="url(#ap-ah)" d="M1130 330 C 1040 370, 1000 390, 940 420"/>
                  <path id="ap-l3" pathLength={1} className="sk-draw p-scyan" fill="none" strokeWidth="2.4"
                        markerEnd="url(#ap-ah)" d="M800 620 C 800 580, 800 550, 800 512"/>
                </g>

                <g className="sk-fade sk-s3">
                  <rect x="110" y="200" width="380" height="130" rx="14" fill="url(#ap-node)"
                        className="p-node" strokeWidth="1.4"/>
                  <text x="140" y="252" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="700"
                        fontSize="26">Data App</text>
                  <text x="140" y="284" className="p-mono" fontSize="16" opacity=".8">Supplier feeds in,
                    clean stock out</text>
                  <text x="140" y="308" className="p-mono" fontSize="15" opacity=".55">Live · two
                    client deployments</text>
                </g>

                <g className="sk-fade sk-s3">
                  <rect x="1110" y="200" width="380" height="130" rx="14" fill="url(#ap-node)"
                        className="p-node" strokeWidth="1.4"/>
                  <text x="1140" y="252" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="700"
                        fontSize="26">Artwork Manager</text>
                  <text x="1140" y="284" className="p-mono" fontSize="16" opacity=".8">Approved,
                    machine-ready files</text>
                  <text x="1140" y="308" className="p-mono" fontSize="15" opacity=".55">Pre-release ·
                    founding client terms</text>
                </g>

                <g className="sk-fade sk-s4">
                  <rect x="610" y="620" width="380" height="130" rx="14" fill="url(#ap-node)"
                        className="p-node" strokeWidth="1.4"/>
                  <text x="640" y="672" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="700"
                        fontSize="26">Commerce</text>
                  <text x="640" y="704" className="p-mono" fontSize="16" opacity=".8">Clean storefront
                    orders in</text>
                  <text x="640" y="728" className="p-mono" fontSize="15" opacity=".55">Live
                    infrastructure</text>
                </g>

                <g className="sk-fade sk-s5" filter="url(#ap-shadow)">
                  <rect x="650" y="390" width="300" height="120" rx="16" fill="url(#ap-amber-n)"
                        className="p-node-a" strokeWidth="2"/>
                  <text x="800" y="442" textAnchor="middle" className="p-ink" fontFamily="Outfit,sans-serif"
                        fontWeight="800" fontSize="26">Your platform</text>
                  <text x="800" y="472" textAnchor="middle" className="p-accent-ink" fontSize="16"
                        fontWeight="600">Khaos Control · Symphony · yours</text>
                </g>

                <g className="sk-dots">
                  <circle r="6" className="p-cyan"><animateMotion dur="2.4s" repeatCount="indefinite"><mpath href="#ap-l1"/></animateMotion></circle>
                  <circle r="6" className="p-cyan"><animateMotion dur="2.4s" repeatCount="indefinite" begin="0.4s"><mpath href="#ap-l2"/></animateMotion></circle>
                  <circle r="6" className="p-cyan"><animateMotion dur="2.4s" repeatCount="indefinite" begin="0.8s"><mpath href="#ap-l3"/></animateMotion></circle>
                </g>
              </Plate>
            </div>
          </div>
        </div>
      </section>

      {/* 3 · HOW THEY GET BUILT */}
      <section className="g-navy">
        <div className="wrap">
          <p className="eyebrow">Before any of this</p>
          <h2>Software is the last answer, not the first.</h2>
          <p className="lede" style={{ marginTop: 16, maxWidth: '62ch' }}>If a platform already on the market does
            the job, that&rsquo;s what goes on the table: named, no commission in it for me.
            These three exist because for a specific set of jobs, nothing on the market did.</p>
          <div className="btn-row" style={{ marginTop: 32 }}>
            <Link className="btn btn--outline btn-arrow" href="/how-i-build">How I decide what to build</Link>
          </div>
        </div>
      </section>

      {/* 4 · CTA STRIP */}
      <section className="g-off cta-strip">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <h2>Start with what you need.</h2>
          <p className="lede">Not sure which of these fits? A Clarity Audit maps your operations in a day
            and tells you exactly where software would help, and where it wouldn&rsquo;t.</p>
          <div className="btn-row">
            <Link className="btn btn--primary" href="/clarity">Book a Clarity Audit</Link>
            <Link className="btn btn--ghost btn-arrow" href="/how-i-build">How I decide what to build</Link>
          </div>
        </div>
      </section>
    </>
  );
}
