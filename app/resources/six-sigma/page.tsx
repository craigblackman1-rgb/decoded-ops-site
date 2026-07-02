import Link from 'next/link';
import { ArrowRight, AlertTriangle } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { PrintDownloadButton } from '@/components/PrintDownloadButton';

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
  description: 'Sigma measures process quality — the higher the level, the fewer defects per million. Here\'s what 3, 4, 5 and 6 Sigma actually mean for a garment decoration business, and why the gap is process, not machinery.',
  alternates: { canonical: '/resources/six-sigma' },
  openGraph: {
    type: 'website',
    title: 'What 5 & 6 Sigma Mean for Your Print & Embroidery Operation | Decoded Ops',
    description: 'Sigma measures process quality — the higher the level, the fewer defects per million. Here\'s what 3, 4, 5 and 6 Sigma actually mean for a garment decoration business, and why the gap is process, not machinery.',
    url: 'https://decodedops.co.uk/resources/six-sigma',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What 5 & 6 Sigma Mean for Your Print & Embroidery Operation | Decoded Ops',
    description: 'Sigma measures process quality — the higher the level, the fewer defects per million. Here\'s what 3, 4, 5 and 6 Sigma actually mean for a garment decoration business, and why the gap is process, not machinery.',
  },
};

const sigmaLevels = [
  {
    level: '3σ',
    title: 'Industry Baseline — Where Most Start',
    body: 'Roughly 1 in 15 garments has a detectable defect. Misregistration, thread breaks, ink spread. Common when processes rely on operator feel over standard procedure.',
    yield: '93.3%',
    dpmo: '66,807',
    highlight: false,
  },
  {
    level: '4σ',
    title: 'Controlled — Documented Processes in Place',
    body: 'Around 6 defects per 1,000 garments. Equipment calibration is routine. Operators follow standardised settings for heat, pressure, dwell time, thread tension.',
    yield: '99.4%',
    dpmo: '6,210',
    highlight: false,
  },
  {
    level: '5σ',
    title: 'High Performance — Engineered & Measured',
    body: 'Only 233 defects per million. Artwork approvals locked. Stitch density standardised by fabric type. Heat press profiles stored per substrate. Statistical sampling replaces end-of-run checking.',
    yield: '99.98%',
    dpmo: '233',
    highlight: true,
  },
  {
    level: '6σ',
    title: 'World Class — Near-Zero Defect Output',
    body: 'Just 3.4 defects per million. Full process capability studies per decoration type. Real-time machine monitoring. Achievable in high-volume workwear and teamwear operations with the right infrastructure.',
    yield: '99.9997%',
    dpmo: '3.4',
    highlight: 'world',
  },
];

function SigmaScale() {
  return (
    <svg viewBox="0 0 1200 360" className="w-full h-auto" role="img" aria-label="Sigma quality scale diagram">
      <title>Sigma Quality Scale — 1σ to 6σ</title>
      <defs>
        <pattern id="grid-scale" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0a3d5c" strokeWidth="0.5"/>
        </pattern>
        <radialGradient id="glow-tr-scale" cx="80%" cy="16%" r="55%">
          <stop offset="0%" stopColor="#219EBC" stopOpacity="0.08"/>
          <stop offset="100%" stopColor="#023047" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="glow-bl-scale" cx="14%" cy="90%" r="42%">
          <stop offset="0%" stopColor="#FFB703" stopOpacity="0.05"/>
          <stop offset="100%" stopColor="#023047" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="sigma-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8ECAE6"/>
          <stop offset="30%" stopColor="#219EBC"/>
          <stop offset="65%" stopColor="#FFB703"/>
          <stop offset="100%" stopColor="#FB8500"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="360" fill="#023047"/>
      <rect width="1200" height="360" fill="url(#grid-scale)" opacity="0.6"/>
      <rect width="1200" height="360" fill="url(#glow-tr-scale)"/>
      <rect width="1200" height="360" fill="url(#glow-bl-scale)"/>
      <rect x="0" y="0" width="8" height="360" fill="#219EBC"/>
      
      <text x="60" y="70" fontFamily="Outfit, Arial, sans-serif" fontSize="14" fill="#219EBC" fontWeight="700">Sigma Quality Scale</text>
      
      <rect x="60" y="100" width="1080" height="24" rx="12" fill="url(#sigma-gradient)"/>
      
      <g fontFamily="Outfit, Arial, sans-serif" fontSize="12" fill="#023047" fontWeight="600">
        <text x="60" y="150">1σ</text>
        <text x="220" y="150">2σ</text>
        <text x="360" y="150">3σ</text>
        <text x="520" y="150">4σ</text>
        <text x="660" y="150" fill="#FFB703">5σ</text>
        <text x="780" y="150" fill="#FB8500">6σ</text>
      </g>
      
      <g fontFamily="DM Sans, Arial, sans-serif" fontSize="11" fill="#8ECAE6">
        <text x="60" y="180">66,807 DPMO</text>
        <text x="660" y="180" fill="#FFB703">233 DPMO</text>
        <text x="780" y="180" fill="#FB8500">3.4 DPMO</text>
      </g>
    </svg>
  );
}

export default function SixSigmaPage() {
  return (
    <>
      <JsonLd data={schema} />
      
      {/* HERO */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-6">
            <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">— Quality Standards in Garment Decoration</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#023047] leading-tight mb-6">
            What do <span className="text-[#219EBC]">3, 4, 5 &amp; 6 Sigma</span> mean for your print &amp; embroidery operation?
          </h1>
          <p className="text-lg text-[#023047]/70 leading-relaxed mb-6">
            Sigma measures process quality. The higher the sigma level, the fewer defects per million opportunities — and the more reliable your output.
          </p>
        </div>
      </section>

      {/* WARNING BAND */}
      <div className="bg-[#219EBC] py-3">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 flex items-center gap-2">
          <AlertTriangle size={18} className="text-[#023047]" />
          <p className="text-sm font-semibold text-[#023047]">
            Most decoration businesses operate at 3–4 Sigma. Here's what that actually means.
          </p>
        </div>
      </div>

      {/* SIGMA CARDS */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-6">
            {sigmaLevels.map((level, i) => (
              <div key={i} className={`p-6 rounded-xl border-l-4 bg-white ${
                level.highlight === true ? 'border-[#FFB703]' :
                level.highlight === 'world' ? 'border-[#FB8500]' :
                'border-[#8ECAE6]'
              }`}>
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className={`w-20 h-14 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    level.highlight === true ? 'bg-[#FFB703]' :
                    level.highlight === 'world' ? 'bg-[#FB8500]' :
                    'bg-[#8ECAE6]'
                  }`}>
                    <span className="text-xl font-bold text-[#023047]">{level.level}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#023047] mb-1">{level.title}</h3>
                    <p className="text-sm text-[#555] leading-relaxed">{level.body}</p>
                  </div>
                  <div className="text-center md:text-right">
                    <div className="text-lg font-bold text-[#023047]">{level.yield}</div>
                    <div className="text-xs text-[#8ECAE6] uppercase tracking-wider">yield</div>
                    <div className="text-xs font-semibold text-[#219EBC] mt-1">{level.dpmo} DPMO</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIGMA SCALE GRAPHIC */}
      <section className="py-8 lg:py-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SigmaScale />
        </div>
      </section>

      {/* INSIGHT BOX */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="p-8 rounded-2xl bg-[#023047]">
            <div className="text-xs font-bold text-[#FFB703] uppercase tracking-wider mb-3">The Real Gap</div>
            <p className="text-[#F8F9FA] leading-relaxed">
              Moving from <strong className="text-[#FFB703]">3 Sigma to 5 Sigma</strong> cuts your defect rate by <strong className="text-[#FFB703]">99.6%</strong>. That's not a machine upgrade — it's a <em className="text-[#8ECAE6]">process redesign</em>. Standardised settings, documented procedures, and measured checkpoints are what separate the two. Not a newer heat press.
            </p>
          </div>
          
          <div className="mt-16 p-8 rounded-2xl bg-[#FFB703]/10 border border-[#FFB703]/30">
            <h3 className="text-lg font-bold text-[#023047] mb-3">The gap is process, not machinery.</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              If your defect rate feels stuck, the fix usually isn't new equipment — it's documenting and standardising what your best operator already does. That's exactly what a Clarity engagement maps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
                Book a free discovery call <ArrowRight size={18} />
              </Link>
              <Link href="/clarity" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#219EBC] text-[#219EBC] font-semibold hover:bg-[#219EBC]/10 transition-colors">
                See what Clarity covers
              </Link>
              <PrintDownloadButton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}