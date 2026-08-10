import type { Metadata } from 'next';
import Link from 'next/link';
import { Plate } from '@/components/Plate';

export const metadata: Metadata = {
  title: 'How I build: Decoded Ops',
    description: "I don't tell you what to buy. I show you what's on the market, what it costs, and where it falls short. So whatever you decide, you decide on the merits. Buy, buy plus a custom layer, or full custom.",
  alternates: { canonical: '/how-i-build' },
  openGraph: {
    type: 'website',
    title: 'How I build: Decoded Ops',
  description: "I don't tell you what to buy. I show you what's on the market, what it costs, and where it falls short. So whatever you decide, you decide on the merits. Buy, buy plus a custom layer, or full custom.",
    url: 'https://decodedops.co.uk/how-i-build',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How I build: Decoded Ops',
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
            and where it falls short, so whatever you decide, you decide on the merits, not on my
            say-so.</p>
          <div className="btn-row" style={{ marginTop: 32 }}>
            <Link className="btn btn--primary" href="/contact">Book a free discovery call</Link>
          </div>
        </div>
      </section>

      {/* 2 · THE LADDER · DO-ART-302 */}
      <section className="g-tint">
        <div className="wrap">
          <p className="eyebrow">The ladder &middot; DO-ART-302</p>
          <h2>Three rungs, always in the same order.</h2>
          <p className="lede" style={{ marginTop: 16 }}>Every engagement climbs the same ladder, and it starts
            at the bottom every time. The bottom rung isn&rsquo;t always right. You should have to
            reject it out loud before anyone spends money on the one above.</p>

          <div className="plate-scroll">
            <div className="plate-frame">
               <Plate tone="dark" p="ld" title="The ladder. Buy first, build only what is missing"
                     sub="Three rungs in fixed order · every option priced"
                     no="DO-ART-302" rev="01" cls="DECODED OPS · ISSUED">

                <path id="ld-spine" pathLength={1} className="sk-draw sk-s2 p-scyan"
                      d="M140 520 H1470" fill="none" strokeWidth="2.5" markerEnd="url(#ld-ah)"/>

                <g className="sk-fade sk-s3" filter="url(#ld-shadow)">
                  <rect x="120" y="270" width="320" height="130" rx="10" fill="url(#ld-node)"
                        className="p-node" strokeWidth="1.4"/>
                  <text x="280" y="325" textAnchor="middle" className="p-ink"
                        fontFamily="Outfit,sans-serif" fontWeight="600" fontSize="28">Buy</text>
                  <text x="280" y="362" textAnchor="middle" className="p-mono" fontSize="18"
                        opacity=".85">off the shelf, as it is</text>
                  <line x1="280" y1="400" x2="280" y2="504" className="p-scyan" strokeWidth="1"
                        strokeOpacity=".3" strokeDasharray="4 5"/>
                  <circle cx="280" cy="520" r="13" className="p-cyan"/>
                  <text x="280" y="578" textAnchor="middle" className="p-mono" fontSize="18"
                        letterSpacing="1.6" opacity=".7">RUNG 1 &middot; IF IT FITS</text>
                </g>

                <g className="sk-fade sk-s4" filter="url(#ld-shadow)">
                  <rect x="620" y="240" width="380" height="190" rx="12" fill="url(#ld-amber-n)"
                        className="p-node-a" strokeWidth="1.8"/>
                  {/* Two lines, vertically centred in the 240..430 node. Was three
                      lines until the "both live clients" claim came out. */}
                  <text x="810" y="324" textAnchor="middle" className="p-ink"
                        fontFamily="Outfit,sans-serif" fontWeight="700" fontSize="30">Buy plus</text>
                  <text x="810" y="362" textAnchor="middle" className="p-ink"
                        fontFamily="Outfit,sans-serif" fontWeight="700" fontSize="30">a custom layer</text>
                  <line x1="810" y1="430" x2="810" y2="500" className="p-samber" strokeWidth="1.2"
                        strokeOpacity=".45" strokeDasharray="4 5"/>
                  <circle cx="810" cy="520" r="18" className="p-amber"/>
                  <text x="810" y="578" textAnchor="middle" className="p-mono" fontSize="18"
                        letterSpacing="1.6" opacity=".85">RUNG 2 &middot; THE NORMAL ANSWER</text>
                </g>

                <g className="sk-fade sk-s5" filter="url(#ld-shadow)" opacity=".82">
                  <rect x="1180" y="285" width="280" height="110" rx="9" fill="url(#ld-node)"
                        className="p-node" strokeWidth="1.2"/>
                  <text x="1320" y="330" textAnchor="middle" className="p-ink"
                        fontFamily="Outfit,sans-serif" fontWeight="600" fontSize="24">Full
                    custom</text>
                  <text x="1320" y="362" textAnchor="middle" className="p-mono" fontSize="17"
                        opacity=".8">only if nothing fits</text>
                  <line x1="1320" y1="395" x2="1320" y2="508" className="p-scyan" strokeWidth="1"
                        strokeOpacity=".3" strokeDasharray="4 5"/>
                  <circle cx="1320" cy="520" r="10" className="p-cyan"/>
                  <text x="1320" y="578" textAnchor="middle" className="p-mono" fontSize="18"
                        letterSpacing="1.6" opacity=".6">RUNG 3 &middot; LAST RESORT</text>
                </g>

                <g className="sk-fade sk-s6">
                  <line x1="60" y1="632" x2="1540" y2="632" className="p-scyan" strokeWidth=".6"
                        strokeOpacity=".22"/>
                  <text x="800" y="700" textAnchor="middle" className="p-ink"
                        fontFamily="Outfit,sans-serif" fontWeight="600" fontSize="26"
                        opacity=".9">Every option priced, including the ones I did not recommend.</text>
                </g>

                <g className="sk-dots">
                  <circle r="6" className="p-cyan">
                    <animateMotion dur="5s" repeatCount="indefinite">
                      <mpath href="#ld-spine"/>
                    </animateMotion>
                  </circle>
                </g>
              </Plate>
            </div>
          </div>

          <div className="rungs">
            <article className="rung">
              <p className="kicker">Rung 1</p>
              <h3>Buy</h3>
              <p>If something on the market already fits, it goes on the table, named and priced.
                Tracker is the best platform I&rsquo;ve worked with in this sector, and I don&rsquo;t sell it or
                earn anything from recommending it.</p>
              <p>That costs me nothing to say. Which is rather the point: you can weigh what I tell you
                about it knowing there&rsquo;s nothing in it for me either way.</p>
            </article>

            <article className="rung rung--default">
              <p className="kicker">Rung 2 <span className="flag">The normal answer</span></p>
              <h3>Buy plus a custom layer</h3>
              <p>Usually the platform is right but leaves gaps: supplier feeds, artwork, reporting across
                more than one business. I&rsquo;ll show you what the gap costs to leave alone versus what it
                costs to close with a custom layer, and let you weigh it up.</p>
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

      {/* 2a · PLATFORM PLUS LAYER · DO-ART-112 */}
      <section className="g-white">
        <div className="wrap">
          <p className="eyebrow">Architecture &middot; DO-ART-112</p>
          <h2>Platform plus layer, not platform replaced.</h2>
          <p className="lede" style={{ marginTop: 16 }}>The gap the layer closes, named specifically.</p>

          <div className="plate-scroll" style={{ marginTop: 34 }}>
            <div className="plate-frame">
              <Plate tone="light" p="hb" title="Platform plus layer, not platform replaced"
                     sub="The gap the layer closes, named specifically"
                     no="DO-ART-112" rev="01" cls="DECODED OPS · ISSUED">

                <g className="sk-fade sk-s2">
                  <rect x="120" y="290" width="420" height="320" rx="16" fill="url(#hb-node)"
                        className="p-node" strokeWidth="1.4"/>
                  <text x="330" y="440" textAnchor="middle" className="p-ink" fontFamily="Outfit,sans-serif"
                        fontWeight="800" fontSize="30">Your platform</text>
                  <text x="330" y="474" textAnchor="middle" className="p-mono" fontSize="17"
                        opacity=".75">Unchanged. Kept.</text>
                  <text x="330" y="580" textAnchor="middle" className="p-mono" fontSize="16"
                         letterSpacing="1.6" opacity=".55">RUNG 1: WHAT YOU ALREADY OWN</text>
                </g>

                <g className="sk-fade sk-s4">
                  <path id="hb-l1" pathLength={1} className="sk-draw p-scyan" fill="none" strokeWidth="2.4"
                        markerEnd="url(#hb-ah)" d="M540 400 H1050"/>
                  <path id="hb-l2" pathLength={1} className="sk-draw p-samber" fill="none" strokeWidth="2.4"
                        markerEnd="url(#hb-ah)" d="M1050 500 H540"/>
                </g>

                <g className="sk-fade sk-s5" filter="url(#hb-shadow)">
                  <rect x="1050" y="290" width="420" height="320" rx="16" fill="url(#hb-amber-n)"
                        className="p-node-a" strokeWidth="2"/>
                  <text x="1260" y="380" textAnchor="middle" className="p-ink" fontFamily="Outfit,sans-serif"
                        fontWeight="800" fontSize="26">Custom layer</text>
                  <text x="1260" y="428" textAnchor="middle" className="p-accent-ink" fontSize="17"
                        fontWeight="600">Supplier feeds</text>
                  <text x="1260" y="454" textAnchor="middle" className="p-accent-ink" fontSize="17"
                        fontWeight="600">Artwork</text>
                  <text x="1260" y="480" textAnchor="middle" className="p-accent-ink" fontSize="17"
                        fontWeight="600">Cross-business reporting</text>
                  <text x="1260" y="580" textAnchor="middle" className="p-mono" fontSize="16"
                         letterSpacing="1.6" opacity=".6">RUNG 2: THE GAPS, NAMED</text>
                </g>

                <text x="800" y="740" textAnchor="middle" className="p-mono sk-fade sk-s6" fontSize="16"
                      letterSpacing="1.6" opacity=".55">NOTHING ON THE LEFT CHANGES</text>

                <g className="sk-dots">
                  <circle r="5" className="p-cyan"><animateMotion dur="2.6s" repeatCount="indefinite"><mpath href="#hb-l1"/></animateMotion></circle>
                  <circle r="5" className="p-amber"><animateMotion dur="2.6s" repeatCount="indefinite" begin="1.3s"><mpath href="#hb-l2"/></animateMotion></circle>
                </g>
              </Plate>
            </div>
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
            rung you&rsquo;re on, including if the answer is that you don&rsquo;t need me at all.</p>
          <div className="btn-row">
            <Link className="btn btn--primary" href="/contact">Book a free discovery call</Link>
            <Link className="btn btn--ghost btn-arrow" href="/apps">See what I&rsquo;ve built</Link>
          </div>
        </div>
      </section>
    </>
  );
}
