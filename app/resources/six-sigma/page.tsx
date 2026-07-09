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

const badgeBg: Record<string, string> = { base: 'bg-[#8ECAE6]', amber: 'bg-[#FFB703]', orange: 'bg-[#FB8500]' };
const borderCol: Record<string, string> = { base: 'border-l-[#8ECAE6]', amber: 'border-l-[#FFB703]', orange: 'border-l-[#FB8500]' };

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#219EBC]">{children}</span>;
}

export default function SixSigmaPage() {
  return (
    <>
      <JsonLd data={schema} />

      {/* HERO — premium dark */}
      <section className="relative overflow-hidden bg-[#023047] pt-28 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-[#FFB703]" />
        <div className="pointer-events-none absolute inset-0 opacity-50" style={{ backgroundImage: 'linear-gradient(#0a3d5c 1px, transparent 1px), linear-gradient(90deg, #0a3d5c 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="pointer-events-none absolute -top-24 right-0 h-[440px] w-[440px] rounded-full bg-[#219EBC]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-10 h-[380px] w-[380px] rounded-full bg-[#FFB703]/5 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div>
            <Eyebrow>Free Playbook · Garment Decoration</Eyebrow>
            <h1 className="mt-5 text-4xl lg:text-5xl font-extrabold text-white leading-[1.06]">
              What <span className="text-[#FFB703]">5 &amp; 6 Sigma</span>{' '}mean for your print &amp; embroidery operation
            </h1>
            <div className="mt-6 h-1 w-16 rounded-full bg-[#219EBC]" />
            <p className="mt-6 text-lg text-[#8ECAE6] leading-relaxed max-w-xl">
              Sigma measures process quality. The higher the level, the fewer defects escape into finished goods. Here is what each level actually means on the shop floor, and why the gap is process, not machinery.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <a href="/downloads/six-sigma.pdf" download className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
                <Download size={18} /> Download the playbook
              </a>
              <Link href="/clarity" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/25 text-white font-semibold hover:bg-white/5 transition-colors">
                See what Clarity covers <ArrowRight size={18} />
              </Link>
            </div>
            <p className="mt-4 text-sm text-white/40">7-page PDF · no email required</p>
          </div>

          <div className="relative mx-auto lg:ml-auto w-full max-w-[300px] lg:max-w-[360px]">
            <div className="absolute -inset-6 rounded-3xl bg-[#219EBC]/10 blur-2xl" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/six-sigma-cover.png" alt="The 5 & 6 Sigma Decoration Playbook — cover" width={1075} height={1521} className="relative w-full rounded-lg shadow-2xl ring-1 ring-white/10 rotate-[2.5deg]" />
          </div>
        </div>
      </section>

      {/* WARNING BAND */}
      <div className="bg-[#219EBC] py-3.5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-center gap-2.5 text-center">
          <AlertTriangle size={18} className="text-[#023047] flex-shrink-0" />
          <p className="text-sm font-semibold text-[#023047]">Most decoration businesses operate at 3 to 4 Sigma. Here is what that actually means.</p>
        </div>
      </div>

      {/* SIGMA SCALE + LEVELS (light) */}
      <section className="py-20 lg:py-24 bg-[#F8F9FA]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow>The scale</Eyebrow>
            <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-[#023047] leading-tight">From reactive to near-zero defect</h2>
            <p className="mt-5 text-lg text-[#023047]/70 leading-relaxed">Each sigma level is a defect rate. Here is where the gap between 3 Sigma and 5 Sigma sits, and what it is worth.</p>
          </div>

          <div className="mt-10 rounded-2xl overflow-hidden ring-1 ring-[#023047]/10 shadow-lg">
            <SixSigmaSchematic tone="light" />
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {sigmaLevels.map((l) => (
              <div key={l.level} className={`p-6 rounded-xl bg-white border border-[#8ECAE6]/40 border-l-4 ${borderCol[l.tone]} shadow-sm flex gap-5 items-start`}>
                <div className={`flex-shrink-0 w-16 h-14 rounded-lg flex items-center justify-center ${badgeBg[l.tone]}`}>
                  <span className="text-xl font-extrabold text-[#023047]">{l.level}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#023047]">{l.title}</h3>
                  <p className="mt-1.5 text-sm text-[#023047]/70 leading-relaxed">{l.body}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-lg font-extrabold text-[#023047]">{l.yield}</div>
                  <div className="text-[10px] uppercase tracking-wider text-[#5A7D8F]">yield</div>
                  <div className="mt-1 text-xs font-semibold text-[#219EBC]">{l.dpmo} DPMO</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE REAL GAP (dark) */}
      <section className="py-20 lg:py-24 bg-[#023047]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Eyebrow>The real gap</Eyebrow>
          <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-white leading-tight">The gap is process, not machinery</h2>
          <p className="mt-6 text-lg text-[#8ECAE6] leading-relaxed">
            Moving from <strong className="text-[#FFB703]">3 Sigma to 5 Sigma</strong> cuts your defect rate by <strong className="text-[#FFB703]">99.6%</strong>. That is not a machine upgrade. It is a process redesign: standardised settings, documented procedures, and measured checkpoints are what separate the two. Not a newer heat press.
          </p>
          <p className="mt-5 text-lg text-[#8ECAE6] leading-relaxed">
            If your defect rate feels stuck, the fix usually is not new equipment. It is documenting and standardising what your best operator already does. That is exactly what a Clarity engagement maps.
          </p>
        </div>
      </section>

      {/* DOWNLOAD BAND (dark) */}
      <section className="relative overflow-hidden bg-[#04283b] py-20 lg:py-24">
        <div className="pointer-events-none absolute -top-20 right-10 h-[360px] w-[360px] rounded-full bg-[#219EBC]/10 blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
          <div className="relative mx-auto w-full max-w-[240px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/six-sigma-cover.png" alt="The 5 & 6 Sigma Decoration Playbook" width={1075} height={1521} className="w-full rounded-lg shadow-2xl ring-1 ring-white/10" />
          </div>
          <div>
            <Eyebrow>Take it with you</Eyebrow>
            <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-white leading-tight">Get the full playbook, free</h2>
            <p className="mt-5 text-[#8ECAE6] leading-relaxed">
              Seven pages: the sigma scale in decoration terms, the six process areas where the gap is widest, and a self-assessment scorecard to see where your operation stands right now. No email required.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="/downloads/six-sigma.pdf" download className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
                <Download size={18} /> Download the playbook
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/25 text-white font-semibold hover:bg-white/5 transition-colors">
                Book a discovery call <ArrowRight size={18} />
              </Link>
            </div>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-[#8ECAE6] hover:text-white font-medium inline-flex items-center gap-1 mt-4">Or book a call directly <ArrowRight size={14} /></a>
          </div>
        </div>
      </section>
    </>
  );
}
