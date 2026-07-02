import Link from 'next/link';
import { ArrowRight, AlertTriangle } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { PrintDownloadButton } from '@/components/PrintDownloadButton';

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
  title: 'The Decoded Method — A Simple Way to Document How Your Business Runs | Decoded Ops',
  description: 'A three-layer process system for print and decoration businesses: a Process Register, one-page SOPs, and an Improvement Log. Plain English. One page per process. Built to be handed over.',
  alternates: { canonical: '/resources/decoded-method' },
  openGraph: {
    type: 'website',
    title: 'The Decoded Method — A Simple Way to Document How Your Business Runs | Decoded Ops',
    description: 'A three-layer process system for print and decoration businesses: a Process Register, one-page SOPs, and an Improvement Log. Plain English. One page per process. Built to be handed over.',
    url: 'https://decodedops.co.uk/resources/decoded-method',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Decoded Method — A Simple Way to Document How Your Business Runs | Decoded Ops',
    description: 'A three-layer process system for print and decoration businesses: a Process Register, one-page SOPs, and an Improvement Log. Plain English. One page per process. Built to be handed over.',
  },
};

const principles = [
  'Plain English. If the least experienced person can\'t follow it without asking, it\'s still a draft.',
  'One page per process. If it needs more than a page, split it.',
  'Owner on everything. One named person. Not a team.',
  'Reviewed regularly. Quarterly for most; at each milestone for active builds.',
  'Delivery-linked. Every system handed over ships with its process pack. Handover is never verbal-only.',
  'ISO-ready, not ISO-burdened. Maps to ISO 9001 principles — without the certification weight.',
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
      <title>Three-Layer Stack — Process Register, SOPs, Improvement Log</title>
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
      <title>One-page SOP card — Five sections layout</title>
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
      <title>Process Register table — Register, process name, owner, category, status, last reviewed</title>
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
      <title>Improvement loop — What Broke, What Changed, Result cycle</title>
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

export default function DecodedMethodPage() {
  return (
    <>
      <JsonLd data={schema} />
      
      {/* HERO */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-6">
            <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">— Free Resource</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#023047] leading-tight mb-6">
            The Decoded Method
          </h1>
          <p className="text-lg text-[#023047]/70 leading-relaxed mb-6">
            How to document the way your business runs — without a 200-page manual nobody opens. Three layers, plain English, one page per process. Built to be handed over, not held onto.
          </p>
          <ThreeLayerStack />
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">

          {/* Intro band */}
          <div className="mb-16 p-8 rounded-2xl bg-[#219EBC]/10 border border-[#219EBC]/25">
            <h2 className="text-xl font-bold text-[#023047] mb-4">Why most process documentation fails</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-4">
              Most businesses have their processes in one place: someone's head. When that person is on holiday, or leaves, the process leaves with them. The usual fix — a giant quality manual — fails for the opposite reason: it's too long to maintain, so it goes stale and nobody trusts it.
            </p>
            <p className="text-[#023047]/80 leading-relaxed">
              The Decoded Method is the middle path. ISO 9001 principles without the ISO overhead. A Kaizen improvement habit without the DMAIC ceremony. Lean enough to actually keep up to date.
            </p>
          </div>

          {/* Three layers */}
          <div className="mb-16">
            <p className="text-[#023047]/80 leading-relaxed mb-8">
              Three layers, each with a job. Together they make a system you can hand to a new starter and trust them to follow.
            </p>
            
            <div className="mb-12">
              <h3 className="text-lg font-bold text-[#023047] mb-3">Layer 1 — The Process Register.</h3>
              <p className="text-[#023047]/80 leading-relaxed mb-4">
                The spine. One row per process: what it's called, who owns it, and when it was last looked at. Often the first time a business has everything it does written down in one place.
              </p>
              <ProcessRegisterTable />
              <ul className="mt-4 space-y-1 text-sm text-[#023047]/70">
                <li><strong>Ref</strong> — a short code, e.g. TB-PR-001</li>
                <li><strong>Owner</strong> — one named person, never "the team"</li>
                <li><strong>Category</strong> — Delivery, Sales, Admin, Finance, Marketing, or Tech</li>
                <li><strong>Status</strong> — active, draft, review, or archived</li>
                <li><strong>Last reviewed</strong> — the month it was last checked</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-lg font-bold text-[#023047] mb-3">Layer 2 — The SOPs.</h3>
              <p className="text-[#023047]/80 leading-relaxed mb-4">
                The how-to layer. One page per process — a hard limit. If it needs more than a page, it's two processes, not one. Five sections, no more, no fewer.
              </p>
              <OnePageSOP />
              <ol className="mt-4 space-y-1 text-sm text-[#023047]/70">
                <li><strong>What this process does</strong> — one sentence: what it produces and why it exists</li>
                <li><strong>Trigger</strong> — the specific event that starts it (never "when needed")</li>
                <li><strong>Steps</strong> — numbered, plain English, actionable</li>
                <li><strong>What good looks like</strong> — a measurable outcome, so you know it worked</li>
                <li><strong>AI skills</strong> — which tools to reach for, and in what order</li>
              </ol>
            </div>

            <div className="mb-12">
              <h3 className="text-lg font-bold text-[#023047] mb-3">Layer 3 — The Improvement Log.</h3>
              <p className="text-[#023047]/80 leading-relaxed mb-4">
                The Kaizen layer. When something breaks or gets better, you log it in three fields — nothing more. Every entry points back to the process it changed, so the register stays honest over time.
              </p>
              <ImprovementLoop />
              <ol className="mt-4 space-y-1 text-sm text-[#023047]/70">
                <li><strong>What broke</strong> — what was failing, inconsistent, or slow</li>
                <li><strong>What changed</strong> — what you actually altered</li>
                <li><strong>Result</strong> — what improved, and how you know</li>
              </ol>
            </div>
          </div>

          {/* Six principles */}
          <div className="mb-16 grid md:grid-cols-2 gap-4">
            {principles.map((p, i) => (
              <div key={i} className="p-4 rounded-lg border-l-4 border-[#219EBC] bg-[#F8F9FA]">
                <p className="text-sm text-[#023047]/80">{p}</p>
              </div>
            ))}
          </div>

          {/* Worked example */}
          <div className="mb-16 p-8 rounded-2xl bg-[#023047]">
            <h2 className="text-xl font-bold text-[#F8F9FA] mb-4">What it looks like in practice</h2>
            <p className="text-[#8ECAE6] mb-4">
              Here's the live register we run Decoded Ops on. Twelve processes, each owned, each with a status. This is the same artefact a Clarity engagement produces for a client — usually the first time they've seen their whole operation on one page.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="text-[#219EBC] border-b border-[#219EBC]/20">
                    <th className="text-left py-2">Ref</th>
                    <th className="text-left py-2">Process</th>
                    <th className="text-left py-2">Status</th>
                  </tr>
                </thead>
                <tbody className="text-[#F8F9FA]">
                  {processRegister.map((row, i) => (
                    <tr key={i} className="border-b border-[#8ECAE6]/10 last:border-0">
                      <td className="py-2">{row.ref}</td>
                      <td className="py-2">{row.process}</td>
                      <td className="py-2">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                          row.status === 'active' ? 'bg-[#219EBC] text-[#F8F9FA]' :
                          row.status === 'draft' ? 'bg-[#8ECAE6] text-[#023047]' :
                          'bg-[#FFB703] text-[#023047]'
                        }`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA */}
          <div className="p-8 rounded-2xl bg-[#FFB703]/10 border border-[#FFB703]/30">
            <h3 className="text-lg font-bold text-[#023047] mb-3">Want this run across your own operation?</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              A Clarity engagement builds your Process Register with you — mapping what you actually do, who owns it, and where the gaps are. It's usually the first time it's all written down.
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