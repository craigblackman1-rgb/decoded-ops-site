import Link from 'next/link';
import { ArrowRight, Download, AlertTriangle } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
import { JsonLd } from '@/components/JsonLd';
import { SixSigmaSchematic } from '@/components/schematics/SixSigmaSchematic';

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

      {/* HERO — dark ground */}
      <section className="g-navy">
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 48, alignItems: 'center' }}>
          <div>
            <span className="eyebrow">— Free playbook · Garment decoration</span>
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
            <img src="/images/six-sigma-cover.png" alt="The 5 & 6 Sigma Decoration Playbook — cover" width={1075} height={1521} style={{ width: '100%', borderRadius: 'var(--do-radius-lg)', boxShadow: 'var(--do-shadow-xl)', transform: 'rotate(2.5deg)' }} />
          </div>
        </div>
      </section>

      {/* WARNING BAND — the one accent strip */}
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
            <span className="eyebrow">— The scale</span>
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
      <section className="g-navy">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <span className="eyebrow">— The real gap</span>
          <h2>The gap is process, not machinery</h2>
          <p className="lede">
            Moving from <strong style={{ color: 'var(--do-amber)' }}>3 Sigma to 5 Sigma</strong> cuts your defect rate by <strong style={{ color: 'var(--do-amber)' }}>99.6%</strong>. That is not a machine upgrade. It is a process redesign: standardised settings, documented procedures, and measured checkpoints are what separate the two. Not a newer heat press.
          </p>
          <p className="lede">
            If your defect rate feels stuck, the fix usually is not new equipment. It is documenting and standardising what your best operator already does. That is exactly what a Clarity engagement maps.
          </p>
        </div>
      </section>

      {/* DOWNLOAD BAND (dark) */}
      <section className="g-navy">
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 48, alignItems: 'center' }}>
          <div style={{ margin: '0 auto', width: '100%', maxWidth: 240 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/six-sigma-cover.png" alt="The 5 & 6 Sigma Decoration Playbook" width={1075} height={1521} style={{ width: '100%', borderRadius: 'var(--do-radius-lg)', boxShadow: 'var(--do-shadow-xl)' }} />
          </div>
          <div>
            <span className="eyebrow">— Take it with you</span>
            <h2>Get the full playbook, free</h2>
            <p className="lede">
              Seven pages: the sigma scale in decoration terms, the six process areas where the gap is widest, and a self-assessment scorecard to see where your operation stands right now. No email required.
            </p>
            <div className="btn-row">
              <a href="/downloads/six-sigma.pdf" download className="btn btn--primary">
                <Download size={18} /> Download the playbook
              </a>
              <Link href="/contact" className="btn btn--outline">
                Book a discovery call <ArrowRight size={18} />
              </Link>
            </div>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-muted-on-dark)', fontWeight: 'var(--do-weight-medium)', display: 'inline-flex', alignItems: 'center', gap: 4 }}>Or book a call directly <ArrowRight size={14} /></a>
          </div>
        </div>
      </section>
    </>
  );
}
