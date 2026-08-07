import Link from 'next/link';
import { ArrowRight, Download, AlertTriangle } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { SixSigmaSchematic } from '@/components/schematics/SixSigmaSchematic';
import { Plate } from '@/components/Plate';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'What 5 & 6 Sigma Mean for Your Print & Embroidery Operation',
      author: { '@type': 'Person', name: 'Craig Blackman' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops' },
      url: 'https://decodedops.co.uk/resources/six-sigma',
    },
  ],
};

export const metadata = {
  title: 'What 5 & 6 Sigma Mean for Your Print & Embroidery Operation | Decoded Ops',
  description: 'Sigma measures process quality. The higher the level, the fewer defects per million. Here\'s what 3, 4, 5 and 6 Sigma actually mean for a garment decoration business, and why the gap is process, not machinery.',
  alternates: { canonical: '/resources/six-sigma' },
  openGraph: {
    type: 'website',
    title: 'What 5 & 6 Sigma Mean for Your Print & Embroidery Operation | Decoded Ops',
    description: 'Sigma measures process quality. The higher the level, the fewer defects per million. Here\'s what 3, 4, 5 and 6 Sigma actually mean for a garment decoration business, and why the gap is process, not machinery.',
    url: 'https://decodedops.co.uk/resources/six-sigma',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What 5 & 6 Sigma Mean for Your Print & Embroidery Operation | Decoded Ops',
    description: 'Sigma measures process quality. The higher the level, the fewer defects per million. Here\'s what 3, 4, 5 and 6 Sigma actually mean for a garment decoration business, and why the gap is process, not machinery.',
  },
};

const sigmaLevels = [
  { level: '3σ', title: 'Industry Baseline', body: 'Roughly 1 in 15 garments has a detectable defect. Misregistration, thread breaks, ink spread. Common when processes rely on operator feel over standard procedure.', yield: '93.3%', dpmo: '66,807', tone: 'base' },
  { level: '4σ', title: 'Controlled', body: 'Around 6 defects per 1,000 garments. Equipment calibration is routine. Operators follow standardised settings for heat, pressure, dwell time, thread tension.', yield: '99.4%', dpmo: '6,210', tone: 'base' },
  { level: '5σ', title: 'High Performance', body: 'Only 233 defects per million. Artwork approvals locked. Stitch density standardised by fabric type. Heat press profiles stored per substrate. Statistical sampling replaces end-of-run checking.', yield: '99.98%', dpmo: '233', tone: 'amber' },
  { level: '6σ', title: 'World Class', body: 'Just 3.4 defects per million. Full process capability studies per decoration type. Real-time machine monitoring. Achievable in high-volume workwear and teamwear with the right infrastructure.', yield: '99.9997%', dpmo: '3.4', tone: 'orange' },
];

const badgeBg: Record<string, string> = { base: 'var(--do-sky-blue)', amber: 'var(--do-amber)', orange: 'var(--do-orange)' };
const borderCol: Record<string, string> = { base: 'var(--do-sky-blue)', amber: 'var(--do-amber)', orange: 'var(--do-orange)' };

export default function SixSigmaPage() {
  return (
    <>
      <JsonLd data={schema} />

      {/* HERO, dark ground */}
      <section className="g-off">
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 48, alignItems: 'center' }}>
          <div>
            <span className="eyebrow">Free playbook · Garment decoration</span>
            <h1>What 5 &amp; 6 Sigma mean for your print &amp; embroidery operation</h1>
            <div className="hair" />
            <p className="lede">
              Sigma measures process quality. The higher the level, the fewer defects escape into finished goods. Here is what each level actually means on the shop floor, and why the gap is process, not machinery.
            </p>
            <div className="btn-row">
              <a href="/downloads/six-sigma.pdf" download className="btn btn--primary">
                <Download size={18} /> Download the playbook
              </a>
              <Link href="/clarity" className="btn btn--outline">
                See what Clarity covers <ArrowRight size={18} />
              </Link>
            </div>
            <p style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-muted-on-dark)' }}>7-page PDF · no email required</p>
          </div>

          <div style={{ position: 'relative', margin: '0 auto', width: '100%', maxWidth: 320 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/six-sigma-cover.png" alt="The 5 & 6 Sigma Decoration Playbook, cover" width={1075} height={1521} style={{ width: '100%', borderRadius: 'var(--do-radius-lg)', boxShadow: 'var(--do-shadow-xl)', transform: 'rotate(2.5deg)' }} />
          </div>
        </div>
      </section>

      {/* PLATE · DO-ART-209 */}
      <section className="g-navy">
        <div className="wrap">
          <span className="eyebrow">Process quality &middot; DO-ART-209</span>
          <h2>What each sigma level actually costs a decoration floor.</h2>
          <div className="hair"></div>
          <p className="lede" style={{ marginTop: 16 }}>
            The higher the sigma, the fewer faults escape the floor. At 3σ, roughly 1 in 15 garments has a visible fault. At 5σ, it is 233 in a million.
          </p>

          <div className="plate-scroll">
            <div className="plate-frame" data-od-id="plate-six-sigma">
              <Plate tone="dark" p="sig" title="The sigma scale"
                     sub="What 3σ, 5σ and 6σ actually cost a decoration floor"
                     no="DO-ART-209" rev="01" cls="DECODED OPS · ISSUED">

                <defs>
                  <linearGradient id="sig-scale" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="var(--do-amber)"/>
                    <stop offset="52%" stopColor="var(--do-sky-blue)"/>
                    <stop offset="100%" stopColor="var(--do-cerulean)"/>
                  </linearGradient>
                </defs>

                <g className="sk-fade sk-s2">
                  <text x="60" y="200" className="p-mono" fontSize="15" letterSpacing="2.6" opacity=".5">DEFECTS PER MILLION OPPORTUNITIES</text>
                  <text x="60" y="244" className="p-ink" fontFamily="var(--do-font-heading)" fontWeight="800" fontSize="32">The higher the sigma, the fewer faults escape the floor</text>
                </g>

                {/* ══ the shift ══ */}
                <path id="sig-shift" pathLength="1" className="sk-draw sk-s5 p-scyan"
                      d="M680 424 C 790 306, 1050 306, 1160 424" fill="none" strokeWidth="3" markerEnd="url(#sig-ah)"/>
                <g className="sk-fade sk-s5" textAnchor="middle">
                  <text x="920" y="352" className="p-cyan" fontFamily="var(--do-font-heading)" fontWeight="800" fontSize="62">99.6%</text>
                  <text x="920" y="386" className="p-mono" fontSize="18" opacity=".68">fewer defects, moving 3σ to 5σ</text>
                </g>

                {/* ══ the track ══ */}
                <g className="sk-fade sk-s3">
                  <rect x="200" y="455" width="1200" height="10" rx="5" fill="var(--do-prussian-blue)" opacity=".55"/>
                </g>
                <rect className="sk-draw sk-s3" x="200" y="455" width="1200" height="10" rx="5" fill="url(#sig-scale)"/>

                {/* ticks */}
                <g className="sk-fade sk-s4" textAnchor="middle">
                  {/* 1σ */}
                  <line x1="200" y1="447" x2="200" y2="475" className="p-samber" strokeWidth="2"/>
                  <text x="200" y="434" className="p-amber" fontFamily="var(--do-font-heading)" fontWeight="800" fontSize="24">1σ</text>
                  <text x="200" y="506" className="p-mono" fontSize="18" opacity=".78">690,000</text>
                  {/* 2σ */}
                  <line x1="440" y1="447" x2="440" y2="475" className="p-scyan" strokeWidth="2" strokeOpacity=".6"/>
                  <text x="440" y="434" className="p-ink" fontFamily="var(--do-font-heading)" fontWeight="800" fontSize="24" opacity=".85">2σ</text>
                  <text x="440" y="506" className="p-mono" fontSize="18" opacity=".7">308,000</text>
                  {/* 3σ */}
                  <line x1="680" y1="447" x2="680" y2="475" className="p-samber" strokeWidth="2"/>
                  <text x="680" y="434" className="p-amber" fontFamily="var(--do-font-heading)" fontWeight="800" fontSize="24">3σ</text>
                  <text x="680" y="506" className="p-mono" fontSize="18" opacity=".78">66,807</text>
                  {/* 4σ */}
                  <line x1="920" y1="447" x2="920" y2="475" className="p-scyan" strokeWidth="2" strokeOpacity=".6"/>
                  <text x="920" y="434" className="p-ink" fontFamily="var(--do-font-heading)" fontWeight="800" fontSize="24" opacity=".85">4σ</text>
                  <text x="920" y="506" className="p-mono" fontSize="18" opacity=".7">6,210</text>
                  {/* 5σ */}
                  <line x1="1160" y1="447" x2="1160" y2="475" className="p-scyan" strokeWidth="2"/>
                  <text x="1160" y="434" className="p-cyan" fontFamily="var(--do-font-heading)" fontWeight="800" fontSize="24">5σ</text>
                  <text x="1160" y="506" className="p-mono" fontSize="18" opacity=".78">233</text>
                  {/* 6σ */}
                  <line x1="1400" y1="447" x2="1400" y2="475" className="p-scyan" strokeWidth="2"/>
                  <text x="1400" y="434" className="p-cyan" fontFamily="var(--do-font-heading)" fontWeight="800" fontSize="24">6σ</text>
                  <text x="1400" y="506" className="p-mono" fontSize="18" opacity=".78">3.4</text>

                  <text x="800" y="534" className="p-mono" fontSize="14" letterSpacing="2.4" opacity=".38">DEFECTS PER MILLION</text>
                </g>

                {/* target zone, below the track so it does not fight the shift arc */}
                <g className="sk-fade sk-s6">
                  <path d="M1100 566 v20 h340 v-20" fill="none" className="p-scyan" strokeWidth="1.5" strokeOpacity=".7"/>
                  <text x="1270" y="612" textAnchor="middle" className="p-cyan" fontFamily="var(--do-font-heading)" fontWeight="700" fontSize="16" letterSpacing="1.4">TARGET ZONE</text>
                </g>

                {/* where you probably are */}
                <g className="sk-fade sk-s6">
                  <path d="M600 566 v20 h160 v-20" fill="none" className="p-samber" strokeWidth="1.5" strokeOpacity=".7"/>
                  <text x="680" y="612" textAnchor="middle" className="p-amber" fontFamily="var(--do-font-heading)" fontWeight="700" fontSize="16" letterSpacing="1.4">MOST FLOORS</text>
                </g>

                {/* ══ takeaway ══ */}
                <g className="sk-fade sk-s6">
                  <line x1="60" y1="656" x2="1540" y2="656" className="p-scyan" strokeWidth=".6" strokeOpacity=".2"/>
                  <text x="60" y="694" className="p-ink" fontFamily="var(--do-font-heading)" fontWeight="600" fontSize="21">At 3σ, roughly 1 in 15 garments has a visible fault. At 5σ, it is 233 in a million.</text>
                  <text x="60" y="730" className="p-mono" fontSize="17" opacity=".62">That jump is not a new machine. It is a better process: standard settings, documented steps, checks at the right points.</text>
                </g>

                {/* travelling marker */}
                <g className="sk-dots">
                  <circle r="7" className="p-cyan">
                    <animateMotion dur="4s" repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;0.5;1" calcMode="linear">
                      <mpath href="#sig-shift"/>
                    </animateMotion>
                  </circle>
                </g>
              </Plate>
            </div>
          </div>
        </div>
      </section>

      {/* WARNING BAND, the one accent strip */}
      <div className="strip">
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, textAlign: 'center' }}>
          <AlertTriangle size={18} style={{ flexShrink: 0 }} />
          <p>Most decoration businesses operate at 3 to 4 Sigma. Here is what that actually means.</p>
        </div>
      </div>

      {/* SIGMA SCALE + LEVELS (light) */}
      <section className="g-off">
        <div className="wrap">
          <div style={{ maxWidth: '46ch' }}>
            <span className="eyebrow">The scale</span>
            <h2>From reactive to near-zero defect</h2>
            <p className="lede">Each sigma level is a defect rate. Here is where the gap between 3 Sigma and 5 Sigma sits, and what it is worth.</p>
          </div>

          <div style={{ marginTop: 40, borderRadius: 'var(--do-radius-2xl)', overflow: 'hidden', boxShadow: 'var(--do-shadow-lg)' }}>
            <SixSigmaSchematic tone="light" />
          </div>

          <div className="grid grid--2" style={{ marginTop: 8 }}>
            {sigmaLevels.map((l) => (
              <div key={l.level} className="card" style={{ borderLeft: `4px solid ${borderCol[l.tone]}`, display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0, width: 64, height: 56, borderRadius: 'var(--do-radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: badgeBg[l.tone] }}>
                  <span style={{ fontSize: 'var(--do-text-xl)', fontWeight: 'var(--do-weight-extrabold)', color: 'var(--do-prussian-blue)' }}>{l.level}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <h3>{l.title}</h3>
                  <p style={{ marginTop: 6, marginBottom: 0 }}>{l.body}</p>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontSize: 'var(--do-text-lg)', fontWeight: 'var(--do-weight-extrabold)', color: 'var(--do-text-primary)' }}>{l.yield}</div>
                  <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: 'var(--do-tracking-wider)', color: 'var(--do-text-subtle)' }}>yield</div>
                  <div style={{ marginTop: 4, fontSize: 'var(--do-text-xs)', fontWeight: 'var(--do-weight-semibold)', color: 'var(--do-cerulean)' }}>{l.dpmo} DPMO</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE REAL GAP (dark) */}
      <section className="g-off">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <span className="eyebrow">The real gap</span>
          <h2>The gap is process, not machinery</h2>
          <p className="lede">
            Moving from <strong style={{ color: 'var(--do-amber)' }}>3 Sigma to 5 Sigma</strong> cuts your defect rate by <strong style={{ color: 'var(--do-amber)' }}>99.6%</strong>. That is not a machine upgrade. It is a process redesign: standardised settings, documented procedures, and measured checkpoints are what separate the two. Not a newer heat press.
          </p>
          <p className="lede">
            If your defect rate feels stuck, the fix usually is not new equipment. It is documenting and standardising what your best operator already does. That is exactly what a Clarity engagement maps.
          </p>
        </div>
      </section>

      {/* CTA STRIP (light) */}
      <section className="g-white" style={{ textAlign: 'center' }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <h2>See where your operation sits on the scale.</h2>
          <p className="lede">A Clarity Audit maps your actual defect rate, finds the process gaps behind it, and gives you a costed plan to close them.</p>
          <div className="btn-row">
            <Link href="/contact" className="btn btn--primary">
              Book a free discovery call <ArrowRight size={18} />
            </Link>
            <Link href="/clarity" className="btn btn--outline">
              See what Clarity covers <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
