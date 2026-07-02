import Link from 'next/link';
import { ArrowRight, Download, Check, Languages, FileText, UserCheck, CalendarClock, PackageCheck, ShieldCheck } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { ThreeLayerSchematic } from '@/components/schematics/ThreeLayerSchematic';
import { SinglePointSchematic } from '@/components/schematics/SinglePointSchematic';

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

const layers = [
  {
    n: '01', name: 'The Process Register', accent: '#219EBC',
    blurb: "The spine. One row per process: what it's called, who owns it, and when it was last looked at. Often the first time a business has everything it does written down in one place.",
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
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[0.82fr_1.18fr] gap-10 lg:gap-14 items-center">
          <div>
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
          <div className="rounded-2xl overflow-hidden ring-1 ring-[#023047]/10 shadow-lg bg-white">
            <SinglePointSchematic tone="light" />
          </div>
        </div>
      </section>

      {/* THREE LAYERS */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow>The system</Eyebrow>
            <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-[#023047] leading-tight">Three layers, each with a job</h2>
            <p className="mt-5 text-lg text-[#023047]/70 leading-relaxed">Together they make a system you can hand to a new starter and trust them to follow. Here is how the three layers connect.</p>
          </div>

          {/* Live operations schematic */}
          <div className="mt-12 rounded-2xl overflow-hidden ring-1 ring-[#023047]/10 shadow-xl">
            <ThreeLayerSchematic tone="dark" />
          </div>

          {/* The three layers, explained */}
          <div className="mt-16 grid md:grid-cols-3 gap-10">
            {layers.map((layer) => (
              <div key={layer.n}>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#023047] text-white font-extrabold" style={{ boxShadow: `inset 4px 0 0 ${layer.accent}` }}>{layer.n}</span>
                  <h3 className="text-xl font-bold text-[#023047]">{layer.name}</h3>
                </div>
                <p className="mt-4 text-sm text-[#023047]/75 leading-relaxed">{layer.blurb}</p>
                <ul className="mt-5 space-y-2">
                  {layer.fields.map(([k, v]) => (
                    <li key={k} className="flex gap-2.5 text-sm text-[#023047]/80">
                      <Check size={16} className="flex-shrink-0 mt-0.5 text-[#219EBC]" />
                      <span><strong className="text-[#023047]">{k}</strong> — {v}</span>
                    </li>
                  ))}
                </ul>
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
              const Icon = [Languages, FileText, UserCheck, CalendarClock, PackageCheck, ShieldCheck][i];
              return (
                <div key={i} className="p-6 rounded-xl bg-white border border-[#8ECAE6]/40 border-l-4 border-l-[#219EBC] shadow-sm flex gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-[#219EBC]/10 flex items-center justify-center">
                    <Icon size={20} className="text-[#219EBC]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#023047]">{head}.</h3>
                    <p className="mt-1.5 text-sm text-[#023047]/70 leading-relaxed">{rest.join('. ')}</p>
                  </div>
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
              Want it run across your own operation? A Clarity engagement builds your Process Register with you, mapping what you do, who owns it, and where the gaps are. Retained clients get the Method as a living hub I host and keep current, not a document that goes stale.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}