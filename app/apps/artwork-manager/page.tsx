import type { Metadata } from 'next';
import Link from 'next/link';
import { Plate } from '@/components/Plate';

export const metadata: Metadata = {
  title: 'Decoded Artwork Manager: Decoded Ops',
  description: 'An artwork vault across embroidery and print formats, versioned with an audit trail. Customers approve their own proofs. Machine-ready files go straight to the floor. Currently on founding-client terms.',
  alternates: { canonical: '/apps/artwork-manager' },
  openGraph: {
    type: 'website',
    title: 'Decoded Artwork Manager: Decoded Ops',
    description: 'An artwork vault across embroidery and print formats, versioned with an audit trail. Customers approve their own proofs. Machine-ready files go straight to the floor.',
    url: 'https://decodedops.co.uk/apps/artwork-manager',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Decoded Artwork Manager: Decoded Ops',
    description: 'An artwork vault across embroidery and print formats, versioned with an audit trail. Currently on founding-client terms.',
  },
};

export default function ArtworkManagerPage() {
  return (
    <>
      {/* 1 · HERO SPLIT */}
      <section className="g-off">
        <div className="wrap hero-split">
          <div>
            <p className="eyebrow">Decoded Artwork Manager &middot; pre-release</p>
            <h1>Every logo, every format, every version.</h1>
            <div className="hero-body">
              <p>Artwork vault across embroidery and print formats, versioned with an audit trail.
                Customers approve their own proofs instead of an email chain. Machine-ready files go
                straight to the floor.</p>
            </div>
            <div className="btn-row" style={{ marginTop: 30 }}>
              <Link className="btn btn--primary" href="/contact">Talk about founding-client terms</Link>
              <Link className="btn btn--ghost btn-arrow" href="#terms">Read the terms first</Link>
            </div>
          </div>

          <div className="hero-shot">
            <div className="evidence">
              <img src="/images/apps/artwork-manager-hero.jpg" width={1600} height={2397}
                   alt="Two multi-head embroidery machines part-way through a run, threaded up with garments hooped on the beds and cones of thread racked behind them." />
            </div>
            <p className="shot-caption">The end of the chain is a machine, not a folder. Files arrive in the
              format the machine actually takes.</p>
          </div>
        </div>
      </section>

      {/* 2 · FEATURES TRIPLET */}
      <section className="g-white">
        <div className="wrap">
          <p className="eyebrow">Three parts</p>
          <h2>Vault, proofing, and delivery to the machine.</h2>
          <p className="lede" style={{ marginTop: 16 }}>Artwork is the thing that goes wrong quietly. Wrong
            version stitched, logo re-drawn for the fourth time, a proof approved in an email nobody
            can find. All three of those are the same problem.</p>

          <div className="grid grid--3">
            <div className="feature">
              <div className="feature-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
                     strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="16" rx="2.5" /><circle cx="12" cy="12" r="3.2" />
                  <path d="M12 4v2M12 18v2" />
                </svg>
              </div>
              <h3>The vault</h3>
              <p>Every format and every version of every logo in one place, with the thread library and
                the colourways that go with it, and access for the staff who need it.</p>
              <p>Version history means you can prove which file went to the machine, and when.</p>
            </div>

            <div className="feature">
              <div className="feature-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
                     strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.5 6.5 10 17l-5-5" /><path d="M3.5 20.5h17" />
                </svg>
              </div>
              <h3>Customer proofing</h3>
              <p>Customers get their own accounts and approve their own proofs. No more chasing a reply
                on an email thread with six people on it and three versions attached.</p>
              <p>The approval is recorded against the version that was actually approved.</p>
            </div>

            <div className="feature">
              <div className="feature-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
                     strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 7h9l3 3h4v8H4z" /><path d="M8 7V4.5h5" />
                </svg>
              </div>
              <h3>Machine delivery</h3>
              <p>Tajima, Barudan and Happy native formats, with DST as the fallback. Hot folders for DTF
                and DTG.</p>
              <p>The file the floor gets is the file the machine wants, not something a person has to
                convert first.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2a · VAULT TO FLOOR PLATE · DO-ART-106 */}
      <section className="g-tint">
        <div className="wrap">
          <p className="eyebrow">Flow &middot; DO-ART-106</p>
          <h2>Vault to floor, one tracked path.</h2>
          <p className="lede" style={{ marginTop: 16 }}>Three connected stages. No email chain between
            them.</p>

          <div className="plate-scroll" style={{ marginTop: 34 }}>
            <div className="plate-frame">
              <Plate tone="dark" p="am" title="Vault to floor, one tracked path"
                     sub="Three connected stages. No email chain between them"
                     no="DO-ART-106" rev="01" cls="DECODED OPS · ISSUED">

                <path id="am-spine" pathLength={1} className="sk-draw sk-s2 p-scyan" fill="none"
                      strokeWidth="2.5" markerEnd="url(#am-ah)" d="M470 460 H1130"/>

                <g className="sk-fade sk-s3">
                  <rect x="110" y="330" width="360" height="260" rx="14" fill="url(#am-node)"
                        className="p-node" strokeWidth="1.4"/>
                  <text x="150" y="392" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="700"
                        fontSize="26">The vault</text>
                  <text x="150" y="424" className="p-mono" fontSize="16" opacity=".8">Every format, every</text>
                  <text x="150" y="448" className="p-mono" fontSize="16" opacity=".8">version, versioned</text>
                  <text x="150" y="556" className="p-mono" fontSize="15" letterSpacing="1.4"
                        opacity=".55">STAGE 1</text>
                </g>

                <g className="sk-fade sk-s4" filter="url(#am-shadow)">
                  <rect x="620" y="300" width="360" height="320" rx="16" fill="url(#am-amber-n)"
                        className="p-node-a" strokeWidth="2"/>
                  <text x="660" y="372" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="800"
                        fontSize="26">Customer</text>
                  <text x="660" y="404" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="800"
                        fontSize="26">proofing</text>
                  <text x="660" y="440" className="p-accent-ink" fontSize="16" fontWeight="600">Approved
                    against the</text>
                  <text x="660" y="462" className="p-accent-ink" fontSize="16" fontWeight="600">version
                    that was shown</text>
                  <text x="660" y="586" className="p-mono" fontSize="15" letterSpacing="1.4"
                        opacity=".7">STAGE 2: NO EMAIL CHAIN</text>
                </g>

                <g className="sk-fade sk-s5">
                  <rect x="1130" y="330" width="360" height="260" rx="14" fill="url(#am-node)"
                        className="p-node" strokeWidth="1.4"/>
                  <text x="1170" y="392" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="700"
                        fontSize="26">Machine delivery</text>
                  <text x="1170" y="424" className="p-mono" fontSize="15" opacity=".8">Tajima · Barudan ·
                    Happy</text>
                  <text x="1170" y="448" className="p-mono" fontSize="15" opacity=".8">DST fallback ·
                    DTF/DTG hot folders</text>
                  <text x="1170" y="556" className="p-mono" fontSize="15" letterSpacing="1.4"
                        opacity=".55">STAGE 3: TO THE FLOOR</text>
                </g>

                <g className="sk-dots">
                  <circle r="6" className="p-cyan"><animateMotion dur="3s" repeatCount="indefinite"><mpath href="#am-spine"/></animateMotion></circle>
                </g>
              </Plate>
            </div>
          </div>
        </div>
      </section>

      {/* 3 · FOUNDING-CLIENT TERMS */}
      <section className="g-navy" id="terms">
        <div className="wrap">
          <p className="eyebrow">Said plainly</p>
          <h2>No client has taken first delivery yet.</h2>

          <div className="panel" style={{ marginTop: 36, maxWidth: '78ch' }}>
            <h3>Founding-client terms</h3>
            <p>This is deployed and in active development. Until a client has taken first delivery, it
              sells on founding-client terms: full implementation pricing, the first six months of
              support waived, in exchange for accepting that some features arrive during the engagement
              and agreeing to be a named reference.</p>
            <p>That&rsquo;s the whole arrangement. It isn&rsquo;t a discount dressed as an offer, and it isn&rsquo;t a
              pilot you&rsquo;re paying to be part of. You get the implementation you paid for, and I get the
              first reference I can point at.</p>
          </div>

          <figure className="pull" style={{ marginTop: 44 }}>
            <blockquote>If I told you it was finished, you&rsquo;d find out in month two. Better you know
              now, and price it in.</blockquote>
            <cite>Craig Blackman &middot; Decoded Ops</cite>
          </figure>
        </div>
      </section>

      {/* 4 · COMPARISON TABLE */}
      <section className="g-white" id="pricing">
        <div className="wrap">
          <p className="eyebrow">What each tier covers</p>
          <h2>Two tiers. No third one hiding.</h2>

          <div className="inset">
            <b>Which tier fits depends on your setup.</b> Which formats, which machines, how many
            customers proofing. That gets worked out in conversation before anyone quotes a number.
          </div>

          <div className="table-wrap">
            <table className="ds-table">
              <caption>Decoded Artwork Manager</caption>
              <thead>
                <tr>
                  <th scope="col">Tier</th>
                  <th scope="col">Scope</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Core</th>
                  <td className="scope">Vault, versioning, audit trail, thread library</td>
                </tr>
                <tr>
                  <th scope="row">Standard <span className="star">Most take this</span></th>
                  <td className="scope">Adds the customer proofing portal and machine delivery</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="table-foot">There&rsquo;s no Extended tier for this product. If what you need is bigger
            than Standard, that&rsquo;s a different conversation and it starts with a Clarity Audit, not a
            tier list.</p>
          <p className="table-foot">What this costs depends on scope, so it&rsquo;s quoted once I know what your setup needs rather than read off a list. I&rsquo;m not VAT registered, so there&rsquo;s no VAT to add. How I price everything else is on the <Link href="/pricing" style={{ color: 'var(--do-cerulean)', fontWeight: 600 }}>pricing page</Link>.</p>
        </div>
      </section>

      {/* 5 · CTA STRIP */}
      <section className="g-off cta-strip">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <h2>Talk about founding-client terms.</h2>
          <p className="lede">An hour to work out whether being first is worth it to you. If your artwork
            problem is smaller than this, I&rsquo;ll tell you that, and that&rsquo;s the end of it.</p>
          <div className="btn-row">
            <Link className="btn btn--primary" href="/contact">Talk about founding-client terms</Link>
            <Link className="btn btn--ghost btn-arrow" href="/apps">See the other systems</Link>
          </div>
        </div>
      </section>
    </>
  );
}
