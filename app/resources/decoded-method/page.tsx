import Link from 'next/link';
import { ArrowRight, Download, Check } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'The Decoded Method',
      author: { '@type': 'Person', name: 'Craig Blackman' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops' },
      url: 'https://decodedops.co.uk/resources/decoded-method',
    },
  ],
};

export const metadata = {
  title: 'The Decoded Method: A Simple Way to Document How Your Business Runs | Decoded Ops',
  description: 'A three-layer process system for print and decoration businesses: a Process Register, one-page SOPs, and an Improvement Log. Plain English. One page per process. Built to be handed over.',
  alternates: { canonical: '/resources/decoded-method' },
  openGraph: {
    type: 'website',
    title: 'The Decoded Method: A Simple Way to Document How Your Business Runs | Decoded Ops',
    description: 'A three-layer process system for print and decoration businesses: a Process Register, one-page SOPs, and an Improvement Log. Plain English. One page per process. Built to be handed over.',
    url: 'https://decodedops.co.uk/resources/decoded-method',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Decoded Method: A Simple Way to Document How Your Business Runs | Decoded Ops',
    description: 'A three-layer process system for print and decoration businesses: a Process Register, one-page SOPs, and an Improvement Log. Plain English. One page per process. Built to be handed over.',
  },
};

const principles = [
  'Plain English. If the least experienced person can\'t follow it without asking, it\'s still a draft.',
  'One page per process. If it needs more than a page, split it.',
  'Owner on everything. One named person. Not a team.',
  'Reviewed regularly. Quarterly for most; at each milestone for active builds.',
  'Delivery-linked. Every system handed over ships with its process pack. Handover is never verbal-only.',
  'ISO-ready, not ISO-burdened. Maps to ISO 9001 principles, without the certification weight.',
];

const processRegister = [
  { ref: 'DO-PR-001', process: 'Discovery Day Delivery', status: 'active' },
  { ref: 'DO-PR-002', process: 'Clarity Audit & Report', status: 'active' },
  { ref: 'DO-PR-003', process: 'New Client Onboarding', status: 'active' },
  { ref: 'DO-PR-004', process: 'Proposal Build & Sign-off', status: 'active' },
  { ref: 'DO-PR-005', process: 'App Requirements Capture', status: 'active' },
  { ref: 'DO-PR-006', process: 'ERP/eCommerce Integration Scoping', status: 'active' },
  { ref: 'DO-PR-007', process: 'Monthly Retained Review', status: 'active' },
  { ref: 'DO-PR-008', process: 'Invoice & Billing Cycle', status: 'active' },
  { ref: 'DO-PR-009', process: 'Client Handover & Sign-off', status: 'draft' },
  { ref: 'DO-PR-010', process: 'Process Pack Production', status: 'draft' },
  { ref: 'DO-PR-011', process: 'LinkedIn Content Publishing', status: 'review' },
  { ref: 'DO-PR-012', process: 'Sub-contractor Engagement', status: 'draft' },
];

function ThreeLayerStack() {
  return (
    <svg viewBox="0 0 1200 520" className="w-full h-auto" role="img" aria-label="Three-Layer Stack diagram">
      <title>Three-Layer Stack: Process Register, SOPs, Improvement Log</title>
      <defs>
        <pattern id="grid-dm" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0a3d5c" strokeWidth="0.5"/>
        </pattern>
        <radialGradient id="glow-tr-dm" cx="80%" cy="16%" r="55%">
          <stop offset="0%" stopColor="#219EBC" stopOpacity="0.08"/>
          <stop offset="100%" stopColor="#023047" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="glow-bl-dm" cx="14%" cy="90%" r="42%">
          <stop offset="0%" stopColor="#FFB703" stopOpacity="0.05"/>
          <stop offset="100%" stopColor="#023047" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect width="1200" height="520" fill="#023047"/>
      <rect width="1200" height="520" fill="url(#grid-dm)" opacity="0.6"/>
      <rect width="1200" height="520" fill="url(#glow-tr-dm)"/>
      <rect width="1200" height="520" fill="url(#glow-bl-dm)"/>
      <rect x="0" y="0" width="8" height="520" fill="#219EBC"/>
      
      {/* Top slab - Process Register */}
      <g transform="perspective(800) rotateX(8)">
        <rect x="120" y="60" width="960" height="120" fill="#219EBC" rx="12"/>
        <rect x="120" y="60" width="8" height="120" fill="#219EBC" rx="4"/>
        <text x="140" y="110" fontFamily="Outfit, Arial, sans-serif" fontWeight="700" fontSize="28" fill="#F8F9FA">Process Register</text>
        <text x="140" y="135" fontFamily="DM Sans, Arial, sans-serif" fontSize="16" fill="#8ECAE6">The spine. One row per process: name, owner, last reviewed.</text>
      </g>
      
      {/* Middle slab - SOPs */}
      <g transform="translate(80, 180)">
        <rect x="120" y="60" width="960" height="120" fill="#8ECAE6" rx="12"/>
        <rect x="120" y="60" width="8" height="120" fill="#8ECAE6" rx="4"/>
        <text x="140" y="110" fontFamily="Outfit, Arial, sans-serif" fontWeight="700" fontSize="28" fill="#023047">SOPs · one page each</text>
        <text x="140" y="135" fontFamily="DM Sans, Arial, sans-serif" fontSize="16" fill="#023047">The how-to layer. Five sections, no more, no fewer.</text>
      </g>
      
      {/* Bottom slab - Improvement Log */}
      <g transform="translate(160, 320)">
        <rect x="120" y="60" width="960" height="120" fill="#023047" rx="12"/>
        <rect x="120" y="60" width="8" height="120" fill="#FFB703" rx="4"/>
        <text x="140" y="110" fontFamily="Outfit, Arial, sans-serif" fontWeight="700" fontSize="28" fill="#F8F9FA">Improvement Log</text>
        <text x="140" y="135" fontFamily="DM Sans, Arial, sans-serif" fontSize="16" fill="#8ECAE6">The Kaizen layer. Log what broke, what changed, the result.</text>
      </g>
    </svg>
  );
}

function OnePageSOP() {
  return (
    <svg viewBox="0 0 900 620" className="w-full h-auto" role="img" aria-label="One-page SOP card diagram">
      <title>One-page SOP card: Five sections layout</title>
      <defs>
        <pattern id="grid-sop" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0a3d5c" strokeWidth="0.5"/>
        </pattern>
        <radialGradient id="glow-tr-sop" cx="80%" cy="16%" r="55%">
          <stop offset="0%" stopColor="#219EBC" stopOpacity="0.08"/>
          <stop offset="100%" stopColor="#023047" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="glow-bl-sop" cx="14%" cy="90%" r="42%">
          <stop offset="0%" stopColor="#FFB703" stopOpacity="0.05"/>
          <stop offset="100%" stopColor="#023047" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect width="900" height="620" fill="#023047"/>
      <rect width="900" height="620" fill="url(#grid-sop)" opacity="0.6"/>
      <rect width="900" height="620" fill="url(#glow-tr-sop)"/>
      <rect width="900" height="620" fill="url(#glow-bl-sop)"/>
      <rect x="0" y="0" width="8" height="620" fill="#219EBC"/>
      
      {/* Page */}
      <rect x="80" y="80" width="740" height="480" fill="#F8F9FA" rx="12"/>
      
      {/* Header strip */}
      <rect x="80" y="80" width="740" height="50" fill="#219EBC"/>
      <text x="110" y="112" fontFamily="DM Sans, Arial, sans-serif" fontSize="14" fill="#F8F9FA" fontWeight="600">TB-PR-001 · Thread Colour Matching</text>
      
      {/* Sections */}
      <text x="110" y="160" fontFamily="Outfit, Arial, sans-serif" fontSize="14" fill="#023047" fontWeight="600">1. What this process does</text>
      <text x="110" y="182" fontFamily="DM Sans, Arial, sans-serif" fontSize="13" fill="#555">One sentence: what it produces and why it exists</text>
      
      <text x="110" y="210" fontFamily="Outfit, Arial, sans-serif" fontSize="14" fill="#023047" fontWeight="600">2. Trigger</text>
      <text x="110" y="232" fontFamily="DM Sans, Arial, sans-serif" fontSize="13" fill="#555">The specific event that starts it (never "when needed")</text>
      
      <text x="110" y="260" fontFamily="Outfit, Arial, sans-serif" fontSize="14" fill="#023047" fontWeight="600">3. Steps</text>
      <text x="110" y="282" fontFamily="DM Sans, Arial, sans-serif" fontSize="13" fill="#555">Numbered, plain English, actionable</text>
      
      <text x="110" y="310" fontFamily="Outfit, Arial, sans-serif" fontSize="14" fill="#023047" fontWeight="600">4. What good looks like</text>
      <text x="110" y="332" fontFamily="DM Sans, Arial, sans-serif" fontSize="13" fill="#FFB703">A measurable outcome, so you know it worked</text>
      
      <text x="110" y="360" fontFamily="Outfit, Arial, sans-serif" fontSize="14" fill="#023047" fontWeight="600">5. AI skills</text>
      <text x="110" y="382" fontFamily="DM Sans, Arial, sans-serif" fontSize="13" fill="#555">Which tools to reach for, and in what order</text>
    </svg>
  );
}

function ProcessRegisterTable() {
  return (
    <svg viewBox="0 0 1200 420" className="w-full h-auto" role="img" aria-label="Process Register table diagram">
      <title>Process Register table: Register, process name, owner, category, status, last reviewed</title>
      <rect width="1200" height="420" fill="#F8F9FA"/>
      
      {/* Header row */}
      <g fontFamily="Outfit, Arial, sans-serif" fontSize="13" fontWeight="700" fill="#023047">
        <text x="40">Ref</text>
        <text x="180">Process Name</text>
        <text x="440">Owner</text>
        <text x="580">Context</text>
        <text x="720">Category</text>
        <text x="880">Status</text>
        <text x="1040">Last Reviewed</text>
      </g>
      <line x1="36" y1="30" x2="1180" y2="30" stroke="#8ECAE6" strokeWidth="1"/>
      
      {/* Data rows */}
      <g fontFamily="DM Sans, Arial, sans-serif" fontSize="12" fill="#555">
        <text x="40" y="60">DO-PR-001</text>
        <text x="180" y="60">Discovery Day Delivery</text>
        <text x="440" y="60">Craig</text>
        <text x="580" y="60">Clarity</text>
        <text x="720" y="60">Delivery</text>
        <rect x="876" y="44" width="56" height="20" rx="10" fill="#219EBC"/>
        <text x="904" y="58" fontFamily="DM Sans, Arial, sans-serif" fontSize="10" fill="#F8F9FA" fontWeight="600">active</text>
        <text x="1040" y="60">Jun 2025</text>
        
        <text x="40" y="100">TB-PR-004</text>
        <text x="180" y="100">Order Intake Sync</text>
        <text x="440" y="100">Sarah</text>
        <text x="580" y="100">Deliver</text>
        <text x="720" y="100">Tech</text>
        <rect x="876" y="84" width="56" height="20" rx="10" fill="#8ECAE6"/>
        <text x="904" y="98" fontFamily="DM Sans, Arial, sans-serif" fontSize="10" fill="#023047" fontWeight="600">draft</text>
        <text x="1040" y="100">May 2025</text>
        
        <text x="40" y="140">DO-PR-007</text>
        <text x="180" y="140">Monthly Retained Review</text>
        <text x="440" y="140">Craig</text>
        <text x="580" y="140">Retained</text>
        <text x="720" y="140">Admin</text>
        <rect x="876" y="124" width="56" height="20" rx="10" fill="#FFB703"/>
        <text x="904" y="138" fontFamily="DM Sans, Arial, sans-serif" fontSize="10" fill="#023047" fontWeight="600">review</text>
        <text x="1040" y="140">Jun 2025</text>
      </g>
    </svg>
  );
}

function ImprovementLoop() {
  return (
    <svg viewBox="0 0 900 520" className="w-full h-auto" role="img" aria-label="Improvement loop diagram">
      <title>Improvement loop: What Broke, What Changed, Result cycle</title>
      <rect width="900" height="520" fill="#F8F9FA"/>
      
      {/* Left spine accent */}
      <rect x="0" y="0" width="8" height="520" fill="#219EBC"/>
      
      {/* Three nodes */}
      <rect x="160" y="100" width="200" height="80" rx="12" fill="#219EBC" fillOpacity="0.1"/>
      <text x="260" y="140" fontFamily="Outfit, Arial, sans-serif" fontSize="16" fill="#023047" fontWeight="600" textAnchor="middle">What Broke</text>
      <text x="260" y="158" fontFamily="DM Sans, Arial, sans-serif" fontSize="11" fill="#555" textAnchor="middle">Failing, slow, inconsistent</text>
      
      <rect x="360" y="240" width="200" height="80" rx="12" fill="#8ECAE6" fillOpacity="0.2"/>
      <text x="460" y="280" fontFamily="Outfit, Arial, sans-serif" fontSize="16" fill="#023047" fontWeight="600" textAnchor="middle">What Changed</text>
      <text x="460" y="298" fontFamily="DM Sans, Arial, sans-serif" fontSize="11" fill="#555" textAnchor="middle">What you altered</text>
      
      <rect x="160" y="380" width="200" height="80" rx="12" fill="#FFB703" fillOpacity="0.15"/>
      <text x="260" y="420" fontFamily="Outfit, Arial, sans-serif" fontSize="16" fill="#023047" fontWeight="600" textAnchor="middle">Result</text>
      <text x="260" y="438" fontFamily="DM Sans, Arial, sans-serif" fontSize="11" fill="#FFB703" textAnchor="middle">What improved, how you know</text>
      
      {/* Curved arrows */}
      <path d="M 260 180 C 260 220 260 220 360 240" fill="none" stroke="#219EBC" strokeWidth="2" markerEnd="url(#arrow)"/>
      <path d="M 360 320 C 360 400 260 400 260 460" fill="none" stroke="#219EBC" strokeWidth="2" markerEnd="url(#arrow)"/>
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6" fill="#219EBC"/>
        </marker>
      </defs>
    </svg>
  );
}

const layers = [
  {
    n: '01', name: 'The Process Register', accent: '#219EBC',
    blurb: "The spine. One row per process: what it's called, who owns it, and when it was last looked at. Often the first time a business has everything it does written down in one place.",
    graphic: <ProcessRegisterTable />,
    fields: [
      ['Ref', 'a short code, e.g. TB-PR-001'],
      ['Owner', 'one named person, never "the team"'],
      ['Category', 'Delivery, Sales, Admin, Finance, Marketing, or Tech'],
      ['Status', 'active, draft, review, or archived'],
      ['Last reviewed', 'the month it was last checked'],
    ],
  },
  {
    n: '02', name: 'The SOPs', accent: '#8ECAE6',
    blurb: "The how-to layer. One page per process, a hard limit. If it needs more than a page, it's two processes, not one. Five sections, no more, no fewer.",
    graphic: <OnePageSOP />,
    fields: [
      ['What this process does', 'one sentence: what it produces and why it exists'],
      ['Trigger', 'the specific event that starts it, never "when needed"'],
      ['Steps', 'numbered, plain English, actionable'],
      ['What good looks like', 'a measurable outcome, so you know it worked'],
      ['AI skills', 'which tools to reach for, and in what order'],
    ],
  },
  {
    n: '03', name: 'The Improvement Log', accent: '#FFB703',
    blurb: "The Kaizen layer. When something breaks or gets better, you log it in three fields, nothing more. Every entry points back to the process it changed, so the register stays honest over time.",
    graphic: <ImprovementLoop />,
    fields: [
      ['What broke', 'what was failing, inconsistent, or slow'],
      ['What changed', 'what you actually altered'],
      ['Result', 'what improved, and how you know'],
    ],
  },
];

const statusStyle: Record<string, string> = {
  active: 'bg-[#219EBC] text-white',
  draft: 'bg-[#8ECAE6] text-[#023047]',
  review: 'bg-[#FFB703] text-[#023047]',
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#219EBC]">{children}</span>;
}

export default function DecodedMethodPage() {
  return (
    <>
      <JsonLd data={schema} />

      {/* HERO — premium dark, playbook cover language */}
      <section className="relative overflow-hidden bg-[#023047] pt-28 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-[#FFB703]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{ backgroundImage: 'linear-gradient(#0a3d5c 1px, transparent 1px), linear-gradient(90deg, #0a3d5c 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
        <div className="pointer-events-none absolute -top-24 right-0 h-[440px] w-[440px] rounded-full bg-[#219EBC]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-10 h-[380px] w-[380px] rounded-full bg-[#FFB703]/5 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div>
            <Eyebrow>Free Playbook</Eyebrow>
            <h1 className="mt-5 text-4xl lg:text-6xl font-extrabold text-white leading-[1.03]">
              The Decoded <span className="text-[#FFB703]">Method</span>
            </h1>
            <div className="mt-6 h-1 w-16 rounded-full bg-[#219EBC]" />
            <p className="mt-6 text-lg text-[#8ECAE6] leading-relaxed max-w-xl">
              A three-layer system for documenting how your business actually runs. Plain English, one page per process, built to be handed over instead of held in one person's head.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <a href="/downloads/decoded-method.pdf" download className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
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
            <img
              src="/images/decoded-method-cover.png"
              alt="The Decoded Method Playbook — cover"
              width={1075}
              height={1521}
              className="relative w-full rounded-lg shadow-2xl ring-1 ring-white/10 rotate-[-2.5deg] transition-transform"
            />
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-20 lg:py-24 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Eyebrow>The problem</Eyebrow>
          <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-[#023047] leading-tight">Why most process documentation fails</h2>
          <div className="mt-3 h-1 w-14 rounded-full bg-[#8ECAE6]" />
          <p className="mt-8 text-lg text-[#023047]/80 leading-relaxed">
            Most businesses keep their processes in one place: someone's head. It works, right up until that person is on holiday, off sick, or leaves. Then the process leaves with them, and everyone else is guessing.
          </p>
          <p className="mt-5 text-lg text-[#023047]/80 leading-relaxed">
            The usual fix is a giant quality manual. That fails for the opposite reason: it's too long to keep up to date, so it goes stale, and once it's stale nobody trusts it.
          </p>
          <p className="mt-5 text-lg text-[#023047]/80 leading-relaxed">
            The Decoded Method is the middle path. ISO 9001 principles without the ISO overhead. A continuous improvement habit without the ceremony. Lean enough to actually keep alive.
          </p>
        </div>
      </section>

      {/* THREE LAYERS */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow>The system</Eyebrow>
            <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-[#023047] leading-tight">Three layers, each with a job</h2>
            <p className="mt-5 text-lg text-[#023047]/70 leading-relaxed">Together they make a system you can hand to a new starter and trust them to follow.</p>
          </div>

          <div className="mt-14 space-y-20">
            {layers.map((layer) => (
              <div key={layer.n} className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#023047] text-white font-extrabold text-lg" style={{ boxShadow: `inset 4px 0 0 ${layer.accent}` }}>{layer.n}</span>
                    <h3 className="text-2xl font-bold text-[#023047]">{layer.name}</h3>
                  </div>
                  <p className="mt-5 text-[#023047]/80 leading-relaxed">{layer.blurb}</p>
                  <ul className="mt-6 space-y-2.5">
                    {layer.fields.map(([k, v]) => (
                      <li key={k} className="flex gap-3 text-sm text-[#023047]/80">
                        <Check size={18} className="flex-shrink-0 mt-0.5 text-[#219EBC]" />
                        <span><strong className="text-[#023047]">{k}</strong> — {v}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl overflow-hidden ring-1 ring-[#023047]/10 shadow-lg">
                  {layer.graphic}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIX PRINCIPLES */}
      <section className="py-20 lg:py-24 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <Eyebrow>The rules</Eyebrow>
          <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-[#023047]">The six principles</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {principles.map((p, i) => {
              const [head, ...rest] = p.split('. ');
              return (
                <div key={i} className="p-6 rounded-xl bg-white border border-[#8ECAE6]/40 border-l-4 border-l-[#219EBC] shadow-sm">
                  <h3 className="font-bold text-[#023047]">{head}.</h3>
                  <p className="mt-1.5 text-sm text-[#023047]/70 leading-relaxed">{rest.join('. ')}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WORKED EXAMPLE */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Eyebrow>A worked example</Eyebrow>
          <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-[#023047]">The register we run Decoded Ops on</h2>
          <p className="mt-5 text-lg text-[#023047]/70 leading-relaxed max-w-2xl">
            Twelve processes, each owned, each with a status. The same artefact a Clarity engagement produces for a client, usually the first time they've seen their whole operation on one page.
          </p>
          <div className="mt-10 rounded-2xl overflow-hidden ring-1 ring-[#023047]/10 shadow-lg">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#023047] text-white">
                  <th className="text-left font-semibold px-5 py-3.5 w-32">Ref</th>
                  <th className="text-left font-semibold px-5 py-3.5">Process</th>
                  <th className="text-left font-semibold px-5 py-3.5 w-28">Status</th>
                </tr>
              </thead>
              <tbody>
                {processRegister.map((row, i) => (
                  <tr key={i} className={i % 2 ? 'bg-[#F8F9FA]' : 'bg-white'}>
                    <td className="px-5 py-3 font-semibold text-[#023047]">{row.ref}</td>
                    <td className="px-5 py-3 text-[#023047]/80">{row.process}</td>
                    <td className="px-5 py-3">
                      <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${statusStyle[row.status]}`}>{row.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DOWNLOAD + CLARITY BAND */}
      <section className="relative overflow-hidden bg-[#023047] py-20 lg:py-24">
        <div className="pointer-events-none absolute -top-20 right-10 h-[360px] w-[360px] rounded-full bg-[#219EBC]/10 blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
          <div className="relative mx-auto w-full max-w-[240px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/decoded-method-cover.png" alt="The Decoded Method Playbook" width={1075} height={1521} className="w-full rounded-lg shadow-2xl ring-1 ring-white/10" />
          </div>
          <div>
            <Eyebrow>Take it with you</Eyebrow>
            <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-white leading-tight">Get the whole playbook, free</h2>
            <p className="mt-5 text-[#8ECAE6] leading-relaxed">
              Seven pages: the three layers with worked examples, the six principles, and a self-assessment scorecard to see where your operation stands right now. No email required.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="/downloads/decoded-method.pdf" download className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
                <Download size={18} /> Download the playbook
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/25 text-white font-semibold hover:bg-white/5 transition-colors">
                Book a discovery call <ArrowRight size={18} />
              </Link>
            </div>
            <p className="mt-6 text-sm text-white/50 leading-relaxed">
              Want it run across your own operation? A Clarity engagement builds your Process Register with you, mapping what you do, who owns it, and where the gaps are.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}