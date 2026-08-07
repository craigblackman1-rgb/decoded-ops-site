import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
import { JsonLd } from '@/components/JsonLd';
import { Plate } from '@/components/Plate';

// Target keyword: "warning signs your business systems are failing" (secondary: "signs you need a technology audit")
export const metadata = {
  title: '5 Warning Signs Your Systems Are Holding You Back | Decoded Ops',
  description: 'Five signs your current technology and processes are costing you more than a replacement would, from 25+ years running operations in this sector, not vendor theory.',
  alternates: { canonical: '/resources/5-warning-signs' },
  openGraph: {
    type: 'website',
    title: '5 Warning Signs Your Systems Are Holding You Back | Decoded Ops',
    description: 'Five signs your current technology and processes are costing you more than a replacement would.',
    url: 'https://decodedops.co.uk/resources/5-warning-signs',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '5 Warning Signs Your Systems Are Holding You Back | Decoded Ops',
    description: 'Five signs your current technology and processes are costing you more than a replacement would.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: '5 Warning Signs Your Systems Are Holding You Back',
      description: 'Five signs your current technology and processes are costing you more than a replacement would.',
      author: { '@type': 'Person', name: 'Craig Blackman' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops' },
      url: 'https://decodedops.co.uk/resources/5-warning-signs',
    },
  ],
};

const signs = [
  {
    title: '1. Nobody can tell you what it\'s actually costing you',
    body: "Ask most business owners in this sector what their disconnected systems cost them a month and you'll get a shrug, not a number. The cost is real. It's in re-keyed orders, stock that doesn't match, and hours spent reconciling data by hand. It's just never been added up. If you can't put a figure on it, you can't decide whether fixing it is worth the money, and that's usually the point where a proper audit pays for itself before you've spent a penny on anything else.",
  },
  {
    title: '2. Your business runs on what\'s in one or two people\'s heads',
    body: "I've seen this at every scale, not just small operations. One business I spoke to had their entire production schedule sitting in their office manager's head. She'd been there sixteen years. Nothing written down. When she was off, the business was exposed. If losing one person for a fortnight would genuinely hurt, that's not a people problem. It's an operational risk, and it's fixable with documentation and process, not by hiring more people.",
  },
  {
    title: '3. Everyone has their own workaround',
    body: 'A spreadsheet here. A sticky note system there. A "just email me and I\'ll sort it" arrangement between two departments. Workarounds exist because the system doesn\'t fit how the job actually gets done. Every workaround is data living outside the system that\'s supposed to be the source of truth, and every one of them is a small, silent failure of the last implementation.',
  },
  {
    title: '4. Growth feels harder than it should',
    body: "Orders are up. Revenue's moving in the right direction. And somehow it feels like wading through mud rather than building momentum. That's almost always a systems and process constraint, not a people or demand problem. The operation hasn't been built to take the extra volume without extra pain. I've run production at over 1,000 orders a day at peak. Scale exposes exactly where the process breaks first.",
  },
  {
    title: '5. You bought your last system off the back of a demo',
    body: "This is the one I see most often, and it's the most expensive. A business bought an ERP system after a good demo. No requirements brief. No assessment of how it would talk to their eCommerce platform. It couldn't handle the production and artwork workflows that were central to how the business actually operated. Result: £150,000 spent, eighteen months of disruption, and around 125 hours a month of internal management time swallowed up fixing it. An audit upfront would have cost around £10,000, 6.7% of what the failed project ended up costing. Not insurance. Near-certain cost avoidance.",
  },
];

export default function FiveWarningSignsPage() {
  return (
    <main>
      <section className="g-off">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <span className="eyebrow">Free resource</span>
          <h1>5 warning signs your systems are holding you back</h1>
          <p className="lede">
            Real warning signs from 25+ years running operations in print, embroidery, decoration, and similar product-based businesses, not vendor theory. If two or more of these sound familiar, it's worth a closer look.
          </p>
        </div>
      </section>

      {/* PLATE · DO-ART-422 */}
      <section className="g-navy">
        <div className="wrap">
          <span className="eyebrow">The signs, compared &middot; DO-ART-422</span>
          <h2>Five signs, and what each one looks like fixed.</h2>
          <div className="hair"></div>
          <p className="lede" style={{ marginTop: 16 }}>
            The gap between a broken process and the same process after a Clarity Audit. Every sign here is real — including the one that cost £150,000 to learn.
          </p>

          <div className="plate-scroll">
            <div className="plate-frame" data-od-id="plate-5-warning-signs">
              <Plate tone="dark" p="wrn" title="Five signs, and what each one looks like fixed"
                     sub=""
                     no="DO-ART-422" rev="01" cls="DECODED OPS · ISSUED">

                <rect x="50" y="100" width="700" height="520" rx="12"
                      fill="color-mix(in srgb, var(--do-amber) 8%, var(--do-prussian-blue))"
                      stroke="color-mix(in srgb, var(--do-amber) 28%, transparent)" strokeWidth="1.5"/>
                <text x="80" y="150" fontFamily="var(--do-font-heading)" fontWeight="700"
                      fontSize="22" fill="var(--do-amber)" letterSpacing="0.06em">NOW</text>
                <g fontFamily="var(--do-font-body)" fontSize="17" fill="color-mix(in srgb, var(--do-off-white) 78%, transparent)">
                  <text x="80" y="200"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Nobody can put a number on what it costs</tspan></text>
                  <text x="80" y="250"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">The process lives in a head and a workaround</tspan></text>
                  <text x="80" y="300"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Growth feels like wading, not momentum</tspan></text>
                  <text x="80" y="350"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">The last platform was bought off a demo</tspan></text>
                </g>

                <rect x="850" y="100" width="700" height="520" rx="12"
                      fill="color-mix(in srgb, var(--do-cerulean) 8%, var(--do-prussian-blue))"
                      stroke="color-mix(in srgb, var(--do-cerulean) 28%, transparent)" strokeWidth="1.5"/>
                <text x="880" y="150" fontFamily="var(--do-font-heading)" fontWeight="700"
                      fontSize="22" fill="var(--do-cerulean)" letterSpacing="0.06em">AFTER</text>
                <g fontFamily="var(--do-font-body)" fontSize="17" fill="color-mix(in srgb, var(--do-off-white) 78%, transparent)">
                  <text x="880" y="200"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">The monthly cost is added up and written down</tspan></text>
                  <text x="880" y="250"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Written down once, so a fortnight off is survivable</tspan></text>
                  <text x="880" y="300"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Volume rises without the pain rising with it</tspan></text>
                  <text x="880" y="350"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Requirements written before anyone demos</tspan></text>
                </g>

                <line x1="770" y1="320" x2="830" y2="320" stroke="var(--do-cerulean)" strokeWidth="2"/>
                <polygon points="828,316 840,320 828,324" fill="var(--do-amber)"/>

                {/* the number sign 5 carries */}
                <g className="sk-fade sk-s6">
                  <rect x="50" y="660" width="1500" height="98" rx="10"
                        fill="color-mix(in srgb, var(--do-amber) 8%, var(--do-prussian-blue))"
                        stroke="color-mix(in srgb, var(--do-amber) 28%, transparent)" strokeWidth="1.5"/>
                  <text x="80" y="694" className="p-mono" fontSize="14" letterSpacing="2.4" opacity=".45">SIGN 5, PRICED — ONE REAL PROJECT</text>
                  <g fontFamily="var(--do-font-heading)" fontWeight="800" fontSize="34">
                    <text x="80" y="740" fill="var(--do-amber)">£150,000</text>
                    <text x="470" y="740" fill="var(--do-amber)">18 months</text>
                    <text x="850" y="740" fill="var(--do-amber)">125 hrs/mo</text>
                    <text x="1240" y="740" fill="var(--do-cerulean)">£10,000</text>
                  </g>
                  <g className="p-mono" fontSize="15" opacity=".6">
                    <text x="272" y="740">spent</text>
                    <text x="654" y="740">of disruption</text>
                    <text x="1035" y="740">of internal time</text>
                    <text x="1400" y="740">the audit — 6.7%</text>
                  </g>
                </g>
              </Plate>
            </div>
          </div>
        </div>
      </section>

      <section className="g-off">
        <div className="wrap" style={{ maxWidth: 720 }}>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 48, marginBottom: 64 }}>
            {signs.map((sign, i) => (
              <div key={i}>
                <h2>{sign.title}</h2>
                <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>{sign.body}</p>
              </div>
            ))}
          </div>

          <div className="card" style={{ background: 'color-mix(in srgb, var(--do-cerulean) 10%, transparent)', borderColor: 'color-mix(in srgb, var(--do-cerulean) 25%, transparent)', marginBottom: 64 }}>
            <h2>What I'm doing about this right now</h2>
            <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)', marginBottom: 0 }}>
              These aren't hypothetical scenarios. I'm currently running Deliver engagements with clients tackling exactly this: building the data foundation and connector work before their ERP goes live, not after, and putting a Process Register in place so operational knowledge doesn't sit in one person's head. It's the same approach on every engagement, whatever the sector.
            </p>
          </div>

          <div className="card" style={{ background: 'color-mix(in srgb, var(--do-amber) 10%, transparent)', borderColor: 'color-mix(in srgb, var(--do-amber) 30%, transparent)', marginBottom: 64 }}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <CheckCircle2 size={22} style={{ flexShrink: 0, marginTop: 4, color: 'var(--do-orange)' }} />
              <p style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)', marginBottom: 0 }}>
                <strong style={{ color: 'var(--do-text-primary)' }}>The 3× Clarity Guarantee:</strong> if a Clarity Audit doesn't identify at least 3× the fee in recoverable cost or lost revenue, you get a full refund. No conditions. No questions.
              </p>
            </div>
          </div>

          <div className="g-tint" style={{ borderRadius: 'var(--do-radius-2xl)', padding: 32 }}>
            <h3>Recognise two or more of these?</h3>
            <p style={{ marginBottom: 24 }}>
              A Clarity Audit finds where the cost is hiding, quantifies it, and gives you a specific, costed plan to fix it, in plain English, with no vendor agenda.
            </p>
            <div className="btn-row" style={{ margin: 0, marginBottom: 12 }}>
              <Link href="/contact" className="btn btn--primary">
                Book a free discovery call <ArrowRight size={18} />
              </Link>
              <Link href="/clarity" className="btn btn--outline">
                See what a Clarity Audit covers
              </Link>
            </div>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-muted-on-dark)', fontWeight: 'var(--do-weight-medium)', display: 'inline-flex', alignItems: 'center', gap: 4 }}>Or book a call directly <ArrowRight size={14} /></a>
          </div>

        </div>
      </section>
      <JsonLd data={schema} />
    </main>
  );
}
