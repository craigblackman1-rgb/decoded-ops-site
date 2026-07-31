import type { Metadata } from 'next';
import Link from 'next/link';
import '../design-system/marketing-pages-extra.css';

export const metadata: Metadata = {
  title: 'How I build — Decoded Ops',
  description: "I don't tell you what to buy. I show you what's on the market, what it costs, and where it falls short — so whatever you decide, you decide on the merits. Buy, buy plus automation, or full custom.",
  alternates: { canonical: '/how-i-build' },
  openGraph: {
    type: 'website',
    title: 'How I build — Decoded Ops',
    description: "I don't tell you what to buy. I show you what's on the market, what it costs, and where it falls short — so whatever you decide, you decide on the merits. Buy, buy plus automation, or full custom.",
    url: 'https://decodedops.co.uk/how-i-build',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How I build — Decoded Ops',
    description: "I don't tell you what to buy. I show you what's on the market, what it costs, and where it falls short.",
  },
};

export default function HowIBuildPage() {
  return (
    <>
      {/* 1 · HERO CENTRE */}
      <section className="g-off">
        <div className="wrap hero-center">
          <p className="eyebrow">How I build</p>
          <h1>The facts, the options, and the decision stays yours.</h1>
          <p className="lede">I don&rsquo;t tell you what to buy. I show you what&rsquo;s on the market, what it costs,
            and where it falls short &mdash; so whatever you decide, you decide on the merits, not on my
            say-so.</p>
          <div className="btn-row" style={{ marginTop: 32 }}>
            <Link className="btn btn--primary" href="/contact">Book a free discovery call</Link>
          </div>
        </div>
      </section>

      {/* 2 · THE LADDER · archetype 5 */}
      <section className="g-tint">
        <div className="wrap">
          <p className="eyebrow">The ladder</p>
          <h2>Three rungs, always in the same order.</h2>
          <p className="lede" style={{ marginTop: 16 }}>Every engagement climbs the same ladder, and it starts
            at the bottom every time. Not because the bottom rung is always right, but because you
            should have to reject it out loud before anyone spends money on the one above.</p>

          <div className="plate-frame">
            <svg className="sk" data-tone="dark" viewBox="0 0 1240 520" role="img"
                 aria-label="Three rungs in fixed order. Rung one: buy off the shelf, as it is, if it already fits. Rung two, the default and what both live clients run: buy the platform plus a custom automation layer to close the gaps it leaves. Rung three, the last resort: full custom, only if nothing off the shelf fits, priced alongside everything else considered. Every option is priced, including the ones the client did not choose.">
              <defs>
                <pattern id="hib5-grid" width="34" height="34" patternUnits="userSpaceOnUse">
                  <path d="M34 0H0V34" fill="none" className="sk-gridline" strokeWidth="0.6" />
                </pattern>
                <linearGradient id="hib5-glass-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" className="sk-gc0" /><stop offset="100%" className="sk-gc1" />
                </linearGradient>
                <linearGradient id="hib5-glass-amber" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" className="sk-ga0" /><stop offset="100%" className="sk-ga1" />
                </linearGradient>
                <filter id="hib5-shadow" className="sk-drop" x="-40%" y="-40%" width="180%" height="180%">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" />
                </filter>
                <marker id="hib5-ah" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto">
                  <path d="M0 0 L6 3 L0 6 Z" className="sk-amber" />
                </marker>
              </defs>

              <rect width="1240" height="520" rx="16" className="sk-bg" />
              <rect width="1240" height="520" rx="16" fill="url(#hib5-grid)" />
              <rect width="1240" height="6" className="sk-amber" />

              <text x="60" y="64" className="sk-fade sk-s1 sk-cyan" fontSize="20" letterSpacing="3"
                    fontWeight="500">THE LADDER</text>
              <text x="60" y="118" className="sk-fade sk-s1 sk-ink" fontFamily="Outfit,sans-serif"
                    fontWeight="800" fontSize="46">Buy first. Build only what is missing.</text>

              <path id="hib5-spine" pathLength={1} className="sk-draw sk-s2 sk-stroke-cyan" d="M110 366 H1132"
                    fill="none" strokeWidth="2.5" markerEnd="url(#hib5-ah)" />

              {/* RUNG 1 — buy */}
              <g className="sk-fade sk-s3" filter="url(#hib5-shadow)">
                <rect x="80" y="208" width="250" height="104" rx="9.5" fill="url(#hib5-glass-cyan)"
                      className="sk-node" strokeWidth="1.4" />
                <text x="205" y="254" textAnchor="middle" className="sk-ink" fontFamily="Outfit,sans-serif"
                      fontWeight="600" fontSize="24">Buy</text>
                <text x="205" y="284" textAnchor="middle" className="sk-mono" fontSize="17"
                      opacity=".85">off the shelf, as it is</text>
                <circle cx="205" cy="366" r="13" className="sk-cyan" />
                <text x="205" y="416" textAnchor="middle" className="sk-mono" fontSize="17"
                      letterSpacing="1.5" opacity=".7">RUNG 1 &middot; IF IT FITS</text>
              </g>

              {/* RUNG 2 — buy plus automation. The default. Amber lands once. */}
              <g className="sk-fade sk-s4" filter="url(#hib5-shadow)">
                <rect x="440" y="182" width="310" height="148" rx="11" fill="url(#hib5-glass-amber)"
                      className="sk-node-amber" strokeWidth="1.6" />
                <text x="595" y="234" textAnchor="middle" className="sk-ink" fontFamily="Outfit,sans-serif"
                      fontWeight="700" fontSize="26">Buy plus</text>
                <text x="595" y="266" textAnchor="middle" className="sk-ink" fontFamily="Outfit,sans-serif"
                      fontWeight="700" fontSize="26">automation</text>
                <text x="595" y="302" textAnchor="middle" className="sk-accent-ink" fontSize="18">what both
                  live clients run</text>
                <circle cx="595" cy="366" r="17" className="sk-amber" />
                <text x="595" y="416" textAnchor="middle" className="sk-mono" fontSize="17"
                      letterSpacing="1.5" opacity=".85">RUNG 2 &middot; THE NORMAL ANSWER</text>
              </g>

              {/* RUNG 3 — full custom. Deliberately the quietest node. */}
              <g className="sk-fade sk-s5" filter="url(#hib5-shadow)" opacity=".82">
                <rect x="900" y="224" width="212" height="80" rx="8" fill="url(#hib5-glass-cyan)"
                      className="sk-node" strokeWidth="1.2" />
                <text x="1006" y="258" textAnchor="middle" className="sk-ink" fontFamily="Outfit,sans-serif"
                      fontWeight="600" fontSize="20">Full custom</text>
                <text x="1006" y="284" textAnchor="middle" className="sk-mono" fontSize="16"
                      opacity=".8">only if nothing fits</text>
                <circle cx="1006" cy="366" r="10" className="sk-cyan" />
                <text x="1006" y="416" textAnchor="middle" className="sk-mono" fontSize="17"
                      letterSpacing="1.5" opacity=".6">RUNG 3 &middot; LAST RESORT</text>
              </g>

              <text x="620" y="480" textAnchor="middle" className="sk-sub sk-fade sk-s6" fontSize="24"
                    fontStyle="italic" opacity=".85">Every option priced, not only the one you
                choose.</text>

              <g className="sk-dots">
                <circle r="6" className="sk-cyan">
                  <animateMotion dur="5s" repeatCount="indefinite"><mpath href="#hib5-spine" /></animateMotion>
                </circle>
              </g>
            </svg>
          </div>

          <div className="rungs">
            <article className="rung">
              <p className="kicker">Rung 1</p>
              <h3>Buy</h3>
              <p>If something on the market already fits, it goes on the table, named and priced.
                Tracker is the best platform I&rsquo;ve worked with in this sector, and I don&rsquo;t sell it or
                earn anything from recommending it.</p>
              <p>That costs me nothing to say. Which is rather the point &mdash; you can weigh what I tell you
                about it knowing there&rsquo;s nothing in it for me either way.</p>
            </article>

            <article className="rung rung--default">
              <p className="kicker">Rung 2 <span className="flag">The normal answer</span></p>
              <h3>Buy plus automation</h3>
              <p>Usually the platform is right but leaves gaps: supplier feeds, artwork, reporting across
                more than one business. I&rsquo;ll show you what the gap costs to leave alone versus what it
                costs to close with a custom layer, and let you weigh it up.</p>
              <p>Both of my live clients chose to run this. Neither of them was told to.</p>
            </article>

            <article className="rung rung--last">
              <p className="kicker">Rung 3 &middot; Last resort</p>
              <h3>Full custom</h3>
              <p>If nothing off the shelf fits, that option goes on the table too, priced honestly,
                alongside everything else considered and why it didn&rsquo;t make the cut.</p>
              <p>You own the decision. I just make sure you&rsquo;re making it with the facts in front of you.</p>
            </article>
          </div>
        </div>
      </section>

      {/* 3 · QUOTE PULL */}
      <section className="g-navy">
        <div className="wrap">
          <p className="eyebrow">Why it works this way</p>
          <h2>I earn nothing from what you buy.</h2>

          <div className="grid grid--2" style={{ marginTop: 40, alignItems: 'start' }}>
            <div>
              <figure className="pull" style={{ marginTop: 0 }}>
                <blockquote>Tracker is the best platform I&rsquo;ve worked with in this sector. I don&rsquo;t sell
                  it.</blockquote>
                <cite>Craig Blackman &middot; Decoded Ops</cite>
              </figure>
            </div>
            <div className="panel">
              <h3>No reseller margin. No referral fee. No partner tier.</h3>
              <p>I&rsquo;m not on anyone&rsquo;s partner list, so there&rsquo;s no version of this where the platform I
                name pays me for naming it. If your own choice lands on rung 2 or rung 3, you&rsquo;ll see
                what every option would have cost, not only the one you chose.</p>
              <p>That&rsquo;s the whole arrangement, and it&rsquo;s why the recommendation is worth something.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 · CTA STRIP */}
      <section className="g-off cta-strip">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <h2>Book a free discovery call.</h2>
          <p className="lede">An hour on what&rsquo;s actually going wrong. You&rsquo;ll get an honest read on which
            rung you&rsquo;re on &mdash; including if the answer is that you don&rsquo;t need me at all.</p>
          <div className="btn-row">
            <Link className="btn btn--primary" href="/contact">Book a free discovery call</Link>
            <Link className="btn btn--ghost btn-arrow" href="/apps">See what I&rsquo;ve built</Link>
          </div>
        </div>
      </section>
    </>
  );
}
