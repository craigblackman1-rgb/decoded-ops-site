import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
import { JsonLd } from '@/components/JsonLd';
import { Plate } from '@/components/Plate';
import { D17Motion } from '@/components/D17Motion';
import '@/app/d17-global.css';
import '@/app/d17-problems.css';
import '@/app/d17-resources.css';

// Target keyword: "warning signs your business systems are failing" (secondary: "signs you need a technology audit")
export const metadata = {
  title: '5 Warning Signs Your Systems Are Holding You Back: Decoded Ops',
  description: 'Five signs your current technology and processes are costing you more than a replacement would, from 25+ years running operations in this sector, not vendor theory.',
  alternates: { canonical: '/resources/5-warning-signs' },
  openGraph: {
    type: 'website',
    title: '5 Warning Signs Your Systems Are Holding You Back: Decoded Ops',
    description: 'Five signs your current technology and processes are costing you more than a replacement would.',
    url: 'https://decodedops.co.uk/resources/5-warning-signs',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '5 Warning Signs Your Systems Are Holding You Back: Decoded Ops',
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
    body: "I've seen this at every scale, not just small operations. One business I spoke to had their entire production schedule sitting in their office manager's head. She'd been there eighteen years. Nothing written down. When she was off, the business was exposed. If losing one person for a fortnight would genuinely hurt, that's not a people problem. It's an operational risk, and it's fixable with documentation and process, not by hiring more people.",
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
    body: "This is the one I see most often, and it's the most expensive. A demo shows you software working perfectly, on the vendor's data, in the vendor's example business. It tells you very little about whether it fits yours. What happens next is consistent enough that I can usually call it in advance: the system gets chosen without the people who have to use it, they get trained on how the software works rather than how it fits their job, most of them are back to the old way by week three, and by month three the software is getting the blame. Usually the software was fine. Nobody scoped the business before they scoped the system. Writing your requirements down before anyone books a demo is near-certain cost avoidance.",
  },
];

export default function FiveWarningSignsPage() {
  return (
    <main>
      <section className="g-off">
        <div className="wrap rt-split">
          <div>
            <span className="eyebrow">Free resource</span>
            <h1>5 warning signs your systems are holding you back</h1>
            <p className="lede">
              Real warning signs from 25+ years running operations in print, embroidery, decoration, and similar product-based businesses, not vendor theory. If two or more of these sound familiar, it&apos;s worth a closer look.
            </p>
          </div>

          {/* D17 hero artwork DO-ART-982 */}
          <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sx a982" data-od-id="hero-art" data-motion data-no="DO-ART-982" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-982. A graded photograph of a print floor with five tags pinned to it, one for each warning sign. One, the cost: nobody can name it. Two, the knowledge: in one person's head. Three, the workarounds: a sheet here, a sticky note there. Four, growth: more orders, more pain. Five, in amber, the last system: bought off a demo. Two or more sound familiar? Worth a closer look.">
  <div class="d17-ph"><img src="/images/d17/resources/gen-press-hall-c85ac6.jpg" alt="" width="900" height="900"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Five warning signs</span><span>One floor</span></div>
  <div class="stage" aria-hidden="true">
    <div class="sx-tag m-pop" style="left:5%;top:15%;animation-delay:.1s"><small>01 · The cost</small>Nobody can name it</div>
    <div class="sx-tag m-pop" style="right:5%;top:26%;animation-delay:.3s"><small>02 · The knowledge</small>In one person's head</div>
    <div class="sx-tag m-pop" style="left:5%;top:39%;animation-delay:.5s"><small>03 · Workarounds</small>A sheet here, a note there</div>
    <div class="sx-tag m-pop" style="right:5%;top:52%;animation-delay:.7s"><small>04 · Growth</small>More orders, more pain</div>
    <div class="sx-tag sx-tag--a m-pop" style="left:5%;top:66%;animation-delay:.95s"><small>05 · The last system</small>Bought off a demo</div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">Two or more sound familiar? <em>Worth a closer look.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-982 · Rev 01</span>
  </div>
</figure>` }} />
        </div>
      </section>

      <section className="g-off section--tight">
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
      <D17Motion />
    </main>
  );
}
