import Link from 'next/link';
import { ArrowRight, Download, AlertTriangle } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { SixSigmaSchematic } from '@/components/schematics/SixSigmaSchematic';
import { D17Motion } from '@/components/D17Motion';
import '@/app/d17-global.css';
import '@/app/d17-problems.css';
import '@/app/d17-resources.css';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';

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
  title: 'What 5 & 6 Sigma Mean for Your Print & Embroidery Operation: Decoded Ops',
  description: 'Sigma measures process quality. The higher the level, the fewer defects per million. Here\'s what 3, 4, 5 and 6 Sigma actually mean for a garment decoration business, and why the gap is process, not machinery.',
  alternates: { canonical: '/resources/six-sigma' },
  openGraph: {
    type: 'website',
    title: 'What 5 & 6 Sigma Mean for Your Print & Embroidery Operation: Decoded Ops',
    description: 'Sigma measures process quality. The higher the level, the fewer defects per million. Here\'s what 3, 4, 5 and 6 Sigma actually mean for a garment decoration business, and why the gap is process, not machinery.',
    url: 'https://decodedops.co.uk/resources/six-sigma',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What 5 & 6 Sigma Mean for Your Print & Embroidery Operation: Decoded Ops',
    description: 'Sigma measures process quality. The higher the level, the fewer defects per million. Here\'s what 3, 4, 5 and 6 Sigma actually mean for a garment decoration business, and why the gap is process, not machinery.',
    images: [OG_IMAGE_PATH],
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
        <div className="wrap rt-split">
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

      <section className="g-navy">
        <div className="wrap" dangerouslySetInnerHTML={{ __html: `
      <figure class="d17 sx a985" data-od-id="hero-art" data-motion data-no="DO-ART-985" data-rev="01" data-tx="photo"
              aria-label="Artwork DO-ART-985. The 5 and 6 Sigma decoration playbook over a graded photograph of an embroidery machine's thread spools: the cover, seven pages, and an open spread with the scale. Three sigma, industry baseline, 93.3 per cent yield, 66,807 defects per million. Four sigma, controlled, 99.4 per cent, 6,210. Five sigma, high performance, in amber, 99.98 per cent, 233. Six sigma, world class, 99.9997 per cent, 3.4. The gap is process, not machinery.">
        <div class="d17-ph"><img src="/images/d17/resources/thread-spools-a145a8.jpg" alt="" width="900" height="873"></div>
        <div class="d17-scan" aria-hidden="true"></div>
        <div class="sx-top d17-mono" aria-hidden="true"><span>Free playbook</span><span>7 pages · no email</span></div>
        <div class="stage" aria-hidden="true">
          <div class="d17-doc cov-dark doc-cv m-drop" style="animation-delay:.05s">
            <span class="ref">Decoded Ops · playbook</span>
            <p class="glyph">5σ<span>6σ</span></p>
            <h4>What 5 &amp; 6 Sigma mean for your decoration floor</h4>
            <p class="sub">Print · embroidery · 7 pages</p>
          </div>
          <div class="d17-doc doc-sp m-drop" style="animation-delay:.35s">
            <span class="tab">P.3</span>
            <span class="ref">The scale</span>
            <h4>From reactive to near-zero defect</h4>
            <div class="sg">
              <div><b>3σ</b><span class="tr"><i class="m-fill" style="width:93.3%;animation-delay:.7s"></i></span><em>93.3% · 66,807</em></div>
              <div><b>4σ</b><span class="tr"><i class="m-fill" style="width:99.4%;animation-delay:.85s"></i></span><em>99.4% · 6,210</em></div>
              <div class="hot"><b>5σ</b><span class="tr"><i class="m-fill" style="width:99.98%;animation-delay:1s"></i></span><em>99.98% · 233</em></div>
              <div><b>6σ</b><span class="tr"><i class="m-fill" style="width:100%;animation-delay:1.15s"></i></span><em>99.9997% · 3.4</em></div>
            </div>
            <p class="sub">Yield · defects per million opportunities</p>
          </div>
        </div>
        <div class="sx-foot">
          <div class="sx-bar" aria-hidden="true"></div>
          <p class="sx-say">The gap is process, <em>not machinery.</em></p>
          <span class="d17-mark">decodedops.co.uk · DO-ART-985 · Rev 01</span>
        </div>
      </figure>
        ` }} />
      </section>

      {/* WARNING BAND, the one accent strip */}
      <div className="strip">
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, textAlign: 'center' }}>
          <AlertTriangle size={18} style={{ flexShrink: 0 }} />
          <p>Most decoration businesses operate at 3 to 4 Sigma. Here is what that actually means.</p>
        </div>
      </div>

      {/* SIGMA SCALE + LEVELS (light) */}
      <section className="g-off section--tight">
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
      <section className="g-off section--tight">
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


      {/* D17 INLINE · DO-ART-986 */}
      <section className="g-navy">
        <div className="wrap" dangerouslySetInnerHTML={{ __html: `      <!-- DO-ART-986 r01 · drawn plate (D17). The page's own arithmetic drawn to scale: the same
           1,000 garments on two floors. At 3 sigma, 66,807 defects per million, 67 of them carry a
           fault (amber). At 5 sigma, 233 per million: none of these thousand does, and the next
           one is about 4,300 garments away. Standard sigma arithmetic, no client data.
           In-page draw: the faults light up on the first floor; the second stays clean. -->
      <figure class="d17 sw a986" data-od-id="plate-scale" data-motion data-no="DO-ART-986" data-rev="01" data-tx="schematic"
              aria-label="Drawn plate DO-ART-986, the same thousand garments on two floors. At 3 sigma, 66,807 defects per million, 67 of the 1,000 carry a visible fault, marked in amber. At 5 sigma, 233 defects per million, none of the 1,000 does; the next fault is about one garment in 4,300. Same machines. Different process.">
        <div class="q-grid" aria-hidden="true"></div>
        <div class="sw-cap">
          <p class="k d17-mono">Process quality <span>· to scale</span></p>
          <div class="bar" aria-hidden="true"></div>
          <h3>The same 1,000 garments. Two floors.</h3>
          <p>Every square is one garment. Same machines on both floors. What changes is the process: settings standardised, procedures written down, checkpoints measured.</p>
          <span class="d17-mark">decodedops.co.uk · DO-ART-986 · Rev 01</span>
        </div>
        <div class="floors" aria-hidden="true">
          <div class="fl fl-3">
            <p class="h"><b>3σ</b><span>Industry baseline</span></p>
            <div class="g1k"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i class="x"></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i class="x"></i><i class="x"></i><i></i><i class="x"></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i class="x"></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i class="x"></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i class="x"></i><i class="x"></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="x"></i></div>
            <p class="f"><b>67</b> of 1,000 with a visible fault</p>
          </div>
          <div class="fl fl-5">
            <p class="h"><b>5σ</b><span>High performance</span></p>
            <div class="g1k"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
            <p class="f"><b>0</b> of 1,000. The next one is about 4,300 garments away.</p>
          </div>
        </div>
      </figure>
` }} />
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

      <D17Motion />
    </>
  );
}
