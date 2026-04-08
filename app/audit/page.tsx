import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

const auditAreas = [
  {
    num: '01',
    title: 'Order management & workflow',
    body: 'How orders enter your business, move through production, and reach the customer. Every handoff, every system, every manual step.',
  },
  {
    num: '02',
    title: 'Production scheduling & capacity',
    body: 'How you plan and allocate work across decoration methods, equipment, and people. Where the bottlenecks are. Where capacity is being wasted.',
  },
  {
    num: '03',
    title: 'Technology & systems',
    body: 'Every piece of software in use — ERP, MIS, eCommerce, artwork, accounts. What it does. What it doesn\'t. What it should.',
  },
  {
    num: '04',
    title: 'Supplier & blank management',
    body: 'How blanks are sourced, ordered, received, and allocated. The dependency risks you\'ve normalised. The costs you\'ve stopped seeing.',
  },
  {
    num: '05',
    title: 'Artwork & customer service',
    body: 'The approval loop. The rework cycle. The human hours spent on things that should be automated. The friction your customers feel.',
  },
  {
    num: '06',
    title: 'Financials & reporting',
    body: 'What you can see, what you can\'t, and what you think you can see but can\'t. Job costing. Margin by decoration method. Real profitability.',
  },
];

const processSteps = [
  { num: '01', title: 'Pre-audit call', body: 'A 30-minute call before I arrive. I learn enough to make the day on site as useful as possible.' },
  { num: '02', title: 'One day on site', body: 'I follow your processes — not interview people about them. Six areas. Every system touched. Every step observed.' },
  { num: '03', title: 'Written report (5 days)', body: 'Every finding documented. Every issue quantified in time and cost. Prioritised by impact, not alphabetically.' },
  { num: '04', title: 'Debrief call', body: 'We walk through the findings together. You ask everything. I give you the unfiltered version.' },
  { num: '05', title: 'Independent vendor brief', body: 'If new software is needed, I write the brief and help you go to market on your terms — not theirs.' },
];

export default function AuditPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#FDFDFF]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="inline-block px-4 py-2 bg-[#546A7B]/10 text-[#546A7B] rounded-full text-sm font-medium mb-8">
            The operations audit
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-[#393D3F] leading-tight mb-8 max-w-3xl">
            One day on site.<br />
            <span className="text-[#62929E]">Everything it costs you</span><br />
            in writing within five days.
          </h1>
          <p className="text-xl font-light text-[#393D3F]/70 max-w-2xl leading-relaxed mb-10">
            A structured, independent review of your operations, technology, and processes. Not a workshop. Not a proposal. A real audit — followed, observed, and quantified.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#62929E] text-white rounded-lg hover:bg-[#546A7B] transition-colors font-semibold">
              Book the audit <ArrowRight size={18} />
            </Link>
            <Link href="/case-study" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#C6C5B9] text-[#393D3F] rounded-lg hover:border-[#62929E] hover:text-[#62929E] transition-colors font-semibold">
              See a real example
            </Link>
          </div>
        </div>
      </section>

      {/* SIX AUDIT AREAS */}
      <section className="py-24 lg:py-32 bg-[#393D3F]/5">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#546A7B] mb-4">What gets audited</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#393D3F] mb-4">Six areas. Every time.</h2>
          <p className="text-[#393D3F]/60 max-w-2xl mb-12">The same six areas are covered in every audit — because in this sector, the problems always live in the same places.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {auditAreas.map(area => (
              <div key={area.num} className="group p-8 rounded-2xl border border-[#C6C5B9]/30 bg-[#FDFDFF] hover:border-[#62929E] hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold text-[#C6C5B9] mb-4">{area.num}</div>
                <h3 className="font-bold text-[#393D3F] mb-2">{area.title}</h3>
                <p className="text-sm text-[#393D3F]/60 leading-relaxed">{area.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 lg:py-32 bg-[#FDFDFF]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#546A7B] mb-4">The process</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#393D3F] mb-12">What happens, step by step</h2>
          <div className="space-y-0">
            {processSteps.map((step, i) => (
              <div key={step.num} className={`flex gap-6 p-6 ${i % 2 === 0 ? 'bg-[#393D3F]/5' : 'bg-[#FDFDFF]'} rounded-2xl mb-2`}>
                <div className="w-12 h-12 rounded-full bg-[#62929E] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-bold text-[#393D3F] mb-1">{step.title}</h3>
                  <p className="text-sm text-[#393D3F]/60 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="py-16 bg-[#62929E]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div>
            <h3 className="text-2xl font-bold mb-2">The 3× money-back guarantee</h3>
            <p className="text-white/80 max-w-xl">If the audit doesn&apos;t identify at least three times its cost in savings, inefficiencies, or risk — you don&apos;t pay. That&apos;s how confident I am in what a single day on site will find.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white text-[#62929E] text-sm font-semibold hover:bg-[#FDFDFF]/90 transition-colors">
            Book your audit <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-24 lg:py-32 bg-[#FDFDFF]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#546A7B] mb-4">What you get</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#393D3F] mb-12">The deliverables</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl">
            {[
              'A written audit report (not a slide deck)',
              'Every issue quantified in time and money',
              'Prioritised recommendations — quick wins first',
              'An independent vendor brief if new software is needed',
              'A debrief call to walk through everything',
              'Follow-up support for 30 days after delivery',
            ].map(item => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle size={18} className="text-[#62929E] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[#393D3F]/70">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#62929E] text-white rounded-lg hover:bg-[#546A7B] transition-colors font-semibold">
              Book a free 60-minute call first <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
