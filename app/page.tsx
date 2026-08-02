import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { Plate } from '@/components/Plate';
import './homepage.css';

export const metadata: Metadata = {
  title: 'Decoded Ops — operations and technology consultancy for decorated goods',
  description: 'Independent technology and operations consultancy for UK print, embroidery, workwear and promotional merchandise businesses. A Clarity Audit gets you a full day on site and a written plan.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Decoded Ops — operations and technology consultancy for decorated goods',
    description: 'Independent technology and operations consultancy for UK print, embroidery, workwear and promotional merchandise businesses. A Clarity Audit gets you a full day on site and a written plan.',
    url: 'https://decodedops.co.uk',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Decoded Ops — operations and technology consultancy for decorated goods',
    description: 'Independent technology and operations consultancy for UK print, embroidery, workwear and promotional merchandise businesses.',
  },
};

const homepageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://decodedops.co.uk/#webpage',
      url: 'https://decodedops.co.uk',
      name: 'Decoded Ops | operations and technology consultancy for decorated goods',
      description: 'Independent technology and operations consultancy for UK print, embroidery, workwear and promotional merchandise businesses. A Clarity Audit gets you a full day on site and a written plan.',
      isPartOf: { '@id': 'https://decodedops.co.uk/#organization' },
    },
    {
      '@type': 'ItemList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, item: { '@type': 'Service', name: 'Clarity Audit', url: 'https://decodedops.co.uk/clarity' } },
        { '@type': 'ListItem', position: 2, item: { '@type': 'Service', name: 'Deliver', url: 'https://decodedops.co.uk/deliver' } },
        { '@type': 'ListItem', position: 3, item: { '@type': 'Service', name: 'Transform', url: 'https://decodedops.co.uk/transform' } },
        { '@type': 'ListItem', position: 4, item: { '@type': 'Service', name: 'Retained', url: 'https://decodedops.co.uk/retained' } },
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={homepageSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
      ]} />

      <a className="skip" href="#content">Skip to content</a>

      <main id="content">

        {/* ══════════ 1 · HERO ══════════ */}
        <section className="g-off" data-od-id="hero">
          <div className="wrap hero">
            <div>
              <span className="eyebrow">&mdash; Operations &amp; technology consultancy</span>
              <h1>The penny drop moment.</h1>
              <div className="hair"></div>
              <div className="hero-body">
                <p>You know your business is losing money somewhere. You can feel the friction. The
                  workarounds. The systems that don&rsquo;t talk to each other. 25 years inside print,
                  embroidery, and decoration businesses says the same patterns repeat, and they&rsquo;re
                  fixable.</p>
                <p>Independent technology and operations consultancy for UK print, embroidery, workwear,
                  and promotional merchandise businesses. A Clarity Audit gets you a full day on site and a
                  written plan. Plain English. No jargon. No vendor agenda.</p>
              </div>
              <div className="btn-row">
                <Link className="btn btn--primary" href="/clarity">See how a Clarity Audit works</Link>
                <Link className="btn btn--outline" href="/contact">Book a free 60-min call</Link>
              </div>
            </div>

            <figure className="ask" data-od-id="hero-question">
              <blockquote>If I spent a day in your business looking at your systems, your processes,
                and your technology, how confident are you that I wouldn&rsquo;t find anything costing you
                money you don&rsquo;t know about?</blockquote>
              <cite>Craig Blackman &middot; Decoded Ops</cite>
            </figure>
          </div>
        </section>

        {/* ══════════ 2 · EVIDENCE · DO-ART-902 ══════════ */}
        <section className="g-white" data-od-id="evidence">
          <div className="wrap">
            <span className="eyebrow">&mdash; Evidence &middot; DO-ART-902</span>
            <h2>Supplier feeds in. One clean catalogue out.</h2>
            <div className="hair"></div>
            <p className="lede">Not a concept. The Data App running against a live client&rsquo;s platform &mdash;
              feeds imported, products matched, stock pushed to the system they already own.</p>

            <div className="plate-scroll">
              <div className="plate-frame" data-od-id="plate-evidence">
                <Plate tone="dark" p="ev" title="Decoded Data App — live deployment"
                       sub="Supplier feed to platform, one clean catalogue between them"
                       no="DO-ART-902" rev="01" cls="DECODED OPS · ISSUED">

                  <clipPath id="ev-clip"><rect x="60" y="200" width="900" height="520" rx="12"/></clipPath>

                  {/* THE EXHIBIT */}
                  <g className="sk-fade sk-s2">
                    <image href="/assets/screens/data-app-hero.png" x="60" y="200" width="900" height="520"
                           preserveAspectRatio="xMidYMid slice" clipPath="url(#ev-clip)" className="p-screen"/>
                    <rect x="60" y="200" width="900" height="520" rx="12" fill="url(#ev-scan)"
                           opacity=".28" style={{ mixBlendMode: 'overlay' }}/>
                    <rect x="60" y="200" width="900" height="520" rx="12" fill="none" className="p-scyan"
                           strokeWidth="1.1" strokeOpacity=".35"/>
                    <rect x="86" y="648" width="332" height="44" rx="6" className="p-block" opacity=".85"/>
                    <text x="106" y="677" className="p-amber" fontSize="17" letterSpacing="2"
                           fontWeight="600">LIVE DEPLOYMENT &middot; TACKLEBAG</text>
                  </g>

                  {/* THE SPECIFICATION */}
                  <g className="sk-fade sk-s4">
                    <rect x="1000" y="200" width="540" height="520" rx="12" fill="url(#ev-node)"
                           className="p-node" strokeWidth="1.1"/>
                    <rect x="1026" y="226" width="4" height="16" rx="1" className="p-cyan"/>
                    <text x="1042" y="240" className="p-mono" fontSize="17" letterSpacing="2.4"
                           fontWeight="600">EXHIBIT</text>
                    <line x1="1026" y1="262" x2="1514" y2="262" className="p-scyan" strokeWidth=".6"
                           strokeOpacity=".2"/>

                    <text x="1026" y="306" className="p-mono" fontSize="15" letterSpacing="2"
                           opacity=".45">CLIENT</text>
                    <text x="1026" y="336" className="p-ink" fontFamily="Outfit,sans-serif"
                           fontWeight="600" fontSize="22">TackleBag &middot; named with permission</text>

                    <text x="1026" y="392" className="p-mono" fontSize="15" letterSpacing="2"
                           opacity=".45">SHOWS</text>
                    <text x="1026" y="422" className="p-ink" fontFamily="Outfit,sans-serif"
                           fontWeight="600" fontSize="22">Nine supplier feeds, automated</text>
                    <text x="1026" y="450" className="p-mono" fontSize="16" opacity=".62">Stock, bins and
                      picking alongside Symphony</text>

                    <text x="1026" y="506" className="p-mono" fontSize="15" letterSpacing="2"
                           opacity=".45">SOURCE</text>
                    <text x="1026" y="536" className="p-ink" fontFamily="Outfit,sans-serif"
                           fontWeight="600" fontSize="22">Decoded Data App interface</text>

                    <line x1="1026" y1="586" x2="1514" y2="586" className="p-scyan" strokeWidth=".6"
                           strokeOpacity=".2"/>
                    <text x="1026" y="626" className="p-mono" fontSize="16" opacity=".55">GRADE — none. A
                      screen is not</text>
                    <text x="1026" y="650" className="p-mono" fontSize="16" opacity=".55">a photograph;
                      grading it would</text>
                    <text x="1026" y="674" className="p-mono" fontSize="16" opacity=".55">destroy what it
                      is evidence of.</text>
                  </g>
                </Plate>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ 3 · WHAT OWNERS NOTICE ══════════ */}
        <section className="g-tint" data-od-id="approach">
          <div className="wrap">
            <span className="eyebrow">&mdash; Why owners keep me in the room</span>
            <h2>Three things you notice in the first hour.</h2>
            <div className="hair"></div>

            <div className="grid grid--3">
              <article className="card">
                <span className="kicker">01 &middot; Translation</span>
                <h3>I say it back to you clearly</h3>
                <p>I take what you&rsquo;re trying to convey, often half-formed, vague, hard to articulate, and
                  reflect it back as a solution or a clear path forward. Business owners feel understood
                  in a way they often haven&rsquo;t been before.</p>
              </article>
              <article className="card">
                <span className="kicker">02 &middot; Problem solving</span>
                <h3>&ldquo;It can&rsquo;t do that&rdquo; is where I start</h3>
                <p>When a system can&rsquo;t do something, I don&rsquo;t accept the limitation. I find a different
                  way, connecting things not designed to connect, reframing the problem so the existing
                  tool handles it differently.</p>
              </article>
              <article className="card">
                <span className="kicker">03 &middot; Facilitation</span>
                <h3>The room agrees before I leave</h3>
                <p>In a mixed group, directors, warehouse staff, office teams, I ask the question that
                  makes everyone stop. People adopt the result because they built it. That&rsquo;s how change
                  actually sticks.</p>
              </article>
            </div>
          </div>
        </section>

        {/* ══════════ 4 · MEASURE · DO-ART-202 ══════════ */}
        <section className="g-navy" data-od-id="measure">
          <div className="wrap">
            <span className="eyebrow">&mdash; Measure &middot; DO-ART-202</span>
            <h2>Not projected. Not modelled. What actually happened.</h2>
            <div className="hair"></div>
            <p className="lede">Hanicks, named with permission. One supplier-catalogue pipeline, from raw
              feed rows to products live in the platform.</p>

            <div className="plate-scroll">
              <div className="plate-frame" data-od-id="plate-measure">
                <Plate tone="dark" p="ms" title="Supplier catalogue — raw to live"
                       sub="Hanicks · one import pipeline, first automated run"
                       no="DO-ART-202" rev="01" cls="DECODED OPS · ISSUED">

                  {/* track guides */}
                  <g className="sk-fade sk-s1" opacity=".5">
                    <line x1="430" y1="212" x2="430" y2="560" className="p-scyan" strokeWidth=".8"
                          strokeOpacity=".35"/>
                    <line x1="1510" y1="212" x2="1510" y2="560" className="p-scyan" strokeWidth=".8"
                          strokeOpacity=".2"/>
                  </g>

                  {/* 1 · rows imported */}
                  <g className="sk-fade sk-s2">
                    <text x="60" y="252" className="p-mono" fontSize="17" letterSpacing="1.6"
                          opacity=".55">ROWS IMPORTED</text>
                    <text x="60" y="282" className="p-mono" fontSize="16" opacity=".4">supplier feeds</text>
                    <rect x="430" y="228" width="1080" height="62" rx="6" fill="url(#ms-bar)"
                          className="p-node" strokeWidth="1"/>
                    <text x="458" y="270" className="p-ink" fontFamily="Outfit,sans-serif"
                          fontWeight="700" fontSize="30">164,752</text>
                  </g>

                  {/* 2 · matched automatically */}
                  <g className="sk-fade sk-s3">
                    <text x="60" y="372" className="p-mono" fontSize="17" letterSpacing="1.6"
                          opacity=".55">MATCHED AUTOMATICALLY</text>
                    <text x="60" y="402" className="p-mono" fontSize="16" opacity=".4">first run, no
                      hand-matching</text>
                    <rect x="430" y="348" width="833" height="62" rx="6" fill="url(#ms-bar)"
                          className="p-node" strokeWidth="1"/>
                    <text x="458" y="390" className="p-ink" fontFamily="Outfit,sans-serif"
                          fontWeight="700" fontSize="30">127,135</text>
                    <text x="1291" y="390" className="p-accent-ink" fontFamily="Outfit,sans-serif"
                          fontWeight="700" fontSize="30">77%</text>
                  </g>

                  {/* 3 · live */}
                  <g className="sk-fade sk-s4">
                    <text x="60" y="492" className="p-mono" fontSize="17" letterSpacing="1.6"
                          opacity=".55">PUSHED LIVE</text>
                    <text x="60" y="522" className="p-mono" fontSize="16" opacity=".4">to Khaos
                      Control</text>
                    <rect x="430" y="468" width="73" height="62" rx="6" fill="url(#ms-amber-b)"
                          className="p-node-a" strokeWidth="1.4"/>
                    <text x="527" y="510" className="p-accent-ink" fontFamily="Outfit,sans-serif"
                          fontWeight="700" fontSize="30">11,064</text>
                    <text x="700" y="510" className="p-mono" fontSize="17" opacity=".5">in range, priced
                      and published — within weeks</text>
                  </g>

                  {/* the lever */}
                  <g className="sk-fade sk-s5">
                    <line x1="60" y1="596" x2="1540" y2="596" className="p-scyan" strokeWidth=".6"
                          strokeOpacity=".22"/>
                    <rect x="60" y="624" width="4" height="18" rx="1" className="p-amber"/>
                    <text x="80" y="640" className="p-mono" fontSize="16" letterSpacing="2.2"
                          opacity=".55">THE LEVER</text>
                    <text x="60" y="690" className="p-ink" fontFamily="Outfit,sans-serif"
                          fontWeight="600" fontSize="26">One import pipeline, run to a schedule.
                      Nobody retypes a supplier spreadsheet.</text>
                    <text x="60" y="726" className="p-mono" fontSize="17" opacity=".5">Before: matched by
                      hand, no repeatable run, no way to tell what had changed since last time.</text>
                  </g>
                </Plate>
              </div>
            </div>

            <p className="lede" style={{ marginTop: 28 }}>Same approach at TackleBag: nine supplier feeds
              automated, a projected saving of 20 to 40 hours a week.</p>
          </div>
        </section>

        {/* ══════════ 5 · THE LADDER · DO-ART-302 ══════════ */}
        <section className="g-off" data-od-id="ladder">
          <div className="wrap">
            <span className="eyebrow">&mdash; Flow &middot; DO-ART-302</span>
            <h2>The facts, the options, and the decision stays yours.</h2>
            <div className="hair"></div>
            <p className="lede">I&rsquo;m never going to tell you what to buy. I&rsquo;ll show you what&rsquo;s on the market,
              what it costs, and where it falls short, so whatever you decide, you decide on the
              merits.</p>

            <div className="plate-scroll">
              <div className="plate-frame" data-od-id="plate-ladder">
                <Plate tone="dark" p="ld" title="The ladder — buy first, build only what is missing"
                       sub="Three rungs in fixed order · every option priced"
                       no="DO-ART-302" rev="01" cls="DECODED OPS · ISSUED">

                  {/* the spine */}
                  <path id="ld-spine" pathLength={1} className="sk-draw sk-s2 p-scyan"
                        d="M140 520 H1470" fill="none" strokeWidth="2.5" markerEnd="url(#ld-ah)"/>

                  {/* RUNG 1 */}
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

                  {/* RUNG 2 — the default */}
                  <g className="sk-fade sk-s4" filter="url(#ld-shadow)">
                    <rect x="620" y="240" width="380" height="190" rx="12" fill="url(#ld-amber-n)"
                          className="p-node-a" strokeWidth="1.8"/>
                    <text x="810" y="305" textAnchor="middle" className="p-ink"
                          fontFamily="Outfit,sans-serif" fontWeight="700" fontSize="30">Buy plus</text>
                    <text x="810" y="343" textAnchor="middle" className="p-ink"
                          fontFamily="Outfit,sans-serif" fontWeight="700" fontSize="30">automation</text>
                    <text x="810" y="388" textAnchor="middle" className="p-accent-ink" fontSize="20">what
                      both live clients run</text>
                    <line x1="810" y1="430" x2="810" y2="500" className="p-samber" strokeWidth="1.2"
                          strokeOpacity=".45" strokeDasharray="4 5"/>
                    <circle cx="810" cy="520" r="18" className="p-amber"/>
                    <text x="810" y="578" textAnchor="middle" className="p-mono" fontSize="18"
                          letterSpacing="1.6" opacity=".85">RUNG 2 &middot; THE DEFAULT</text>
                  </g>

                  {/* RUNG 3 */}
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

            <div className="rungs" data-od-id="ladder-rungs">
              <article className="card">
                <span className="kicker">Rung 1</span>
                <h3>Buy</h3>
                <p>If something on the market already fits, it goes on the table, named and priced. Tracker
                  is the best platform I&rsquo;ve worked with in this sector, and I don&rsquo;t sell it or earn
                  anything from recommending it. That&rsquo;s not a pitch. It costs me nothing to say it.</p>
              </article>

              <article className="card rung--default">
                <span className="kicker">Rung 2 <span className="flag">The default</span></span>
                <h3>Buy plus automation</h3>
                <p>Usually the platform is right but leaves gaps: supplier feeds, artwork, reporting
                  across more than one business. I&rsquo;ll show you what the gap costs to leave alone versus
                  what it costs to close with a custom layer, and let you weigh it up. That&rsquo;s what both of
                  my live clients chose to run.</p>
              </article>

              <article className="card rung--last">
                <span className="kicker">Rung 3 &middot; Last resort</span>
                <h3>Full custom</h3>
                <p>If nothing off the shelf fits, that option goes on the table too, priced honestly,
                  alongside everything else I considered and why it didn&rsquo;t make the cut. You own the
                  decision either way. I just make sure you&rsquo;re making it with the facts in front of you,
                  not a sales pitch.</p>
              </article>
            </div>
          </div>
        </section>

        {/* ══════════ 6 · CTA ══════════ */}
        <section className="g-white" data-od-id="cta">
          <div className="wrap centred">
            <h2>Ready to find out what&rsquo;s really going on?</h2>
            <div className="hair"></div>
            <p className="lede">The discovery call is free, takes 60 minutes, and comes with no obligation.
              Just an honest conversation about your operation.</p>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact">Book a free discovery call</Link>
              <Link className="btn btn--outline" href="/pricing">See engagement options &amp; pricing</Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
