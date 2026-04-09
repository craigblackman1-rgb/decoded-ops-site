import Link from 'next/link';
import { ArrowRight, Server, Layers, ShoppingCart, GitBranch, TrendingUp, Sparkles } from 'lucide-react';
import { AuditWheelGraphic } from '@/components/graphics/AuditWheelGraphic';

const auditAreas = [
  { icon: Server,       num: '01', title: 'IT Infrastructure',     desc: 'Security posture, connectivity, identity management, and IT costs. Every risk identified, costed, and prioritised. Licensing waste surfaced and eliminated.' },
  { icon: Layers,       num: '02', title: 'Software & Systems',     desc: "Every tool in use assessed — what it costs, what it does, whether it's right. ERP, MIS, and management platforms assessed or selected. Independent vendor brief on your terms." },
  { icon: ShoppingCart, num: '03', title: 'eCommerce & Digital',    desc: 'Platform, UX, integrations, B2B capability, decoration tools. Customer journey mapped end to end. WCAG accessibility review included.' },
  { icon: GitBranch,    num: '04', title: 'Processes & Operations', desc: 'Every process mapped from order in to invoice out. Stock, fulfilment, and despatch reviewed. Quick wins separated from bigger projects.' },
  { icon: TrendingUp,   num: '05', title: 'Growth & Opportunity',   desc: "Revenue lines with most potential identified. New channels and markets assessed. Technology roadmap built for where you're going, not where you've been." },
  { icon: Sparkles,     num: '06', title: 'AI Readiness',           desc: "Where AI could genuinely help your specific operation. What needs to be in place first. An honest view — not a tool sale." },
];

const processSteps = [
  { num: '01', detail: 'Pre-audit',      title: 'Discovery call',       desc: 'A 30-minute call before I arrive. I learn enough to make the day on site as useful as possible.' },
  { num: '02', detail: 'On-site',        title: 'One day in your business', desc: 'I follow your processes — not interview people about them. Six areas. Every system touched. Every step observed.' },
  { num: '03', detail: '5 working days', title: 'Written report',        desc: 'Every finding documented. Every issue quantified in time and cost. Prioritised by impact, not alphabetically.' },
  { num: '04', detail: 'Included',       title: 'Debrief call',          desc: "We walk through the findings together. You ask everything. I give you the unfiltered version." },
];

const deliverables = [
  'A written audit report (not a slide deck)',
  'Every issue quantified in time and money',
  'Prioritised recommendations — quick wins first',
  'An independent vendor brief if new software is needed',
  'A debrief call to walk through everything',
  'Follow-up support for 30 days after delivery',
];

export default function AuditPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-24 pb-20 lg:pt-32 lg:pb-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1D3557]/10 border border-[#1D3557]/20 mb-6">
                <span className="text-xs font-semibold text-[#1D3557] tracking-wider uppercase">— The Operations Audit</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#0F1923] leading-tight mb-6">
                One day on site.<br />
                <span className="text-[#3A86FF]">Everything it costs you</span><br />
                in writing within five days.
              </h1>
              <p className="text-lg text-[#0F1923]/70 leading-relaxed mb-8 max-w-xl">
                A structured, independent review of your operations, technology, and processes. Not a workshop. Not a proposal. A real audit — followed, observed, and quantified.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#3A86FF] text-[#F8F9FA] font-semibold hover:bg-[#1D3557] transition-colors">
                  Book the audit <ArrowRight size={18} />
                </Link>
                <Link href="/case-study" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#3A86FF] text-[#3A86FF] font-semibold hover:bg-[#3A86FF]/10 transition-colors">
                  See a real example
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <AuditWheelGraphic />
            </div>
          </div>
        </div>
      </section>

      {/* SIX AUDIT AREAS */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1D3557]/10 border border-[#1D3557]/20 mb-4">
              <span className="text-xs font-semibold text-[#1D3557] tracking-wider uppercase">— What gets audited</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F1923] mb-4">Six areas. Every time.</h2>
            <p className="text-[#0F1923]/60 text-lg">The same six areas are covered in every audit — because in this sector, the problems always live in the same places.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {auditAreas.map(area => {
              const Icon = area.icon;
              return (
                <div key={area.num} className="group p-6 rounded-2xl border border-[#93A8C0]/40 hover:border-[#3A86FF]/40 hover:shadow-md transition-all duration-300 bg-[#F8F9FA]">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#3A86FF]/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-[#3A86FF]" />
                    </div>
                    <span className="text-3xl font-bold text-[#93A8C0]">{area.num}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0F1923] mb-2">{area.title}</h3>
                  <p className="text-sm text-[#0F1923]/60 leading-relaxed">{area.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS — dark */}
      <section className="py-20 lg:py-28 bg-[#0F1923]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3A86FF]/20 border border-[#3A86FF]/30 mb-4">
              <span className="text-xs font-semibold text-[#93A8C0] tracking-wider uppercase">— The process</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#F8F9FA] mb-4">What happens, step by step</h2>
            <p className="text-[#93A8C0] text-lg">From your first call through to the debrief — what to expect at every stage.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div key={step.num} className="relative p-6 rounded-2xl bg-[#F8F9FA]/5 border border-[#F8F9FA]/10 hover:bg-white/[0.08] transition-colors">
                <div className="text-5xl font-bold text-[#3A86FF]/30 mb-4">{step.num}</div>
                <div className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#3A86FF]/20 mb-3">
                  <span className="text-xs text-[#3A86FF] font-medium">{step.detail}</span>
                </div>
                <h3 className="text-xl font-bold text-[#F8F9FA] mb-3">{step.title}</h3>
                <p className="text-[#93A8C0] text-sm leading-relaxed">{step.desc}</p>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-6 h-0.5 bg-[#3A86FF]/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING CTA */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="rounded-2xl bg-[#0F1923] p-10 text-center">
            <div className="text-2xl font-bold text-[#F8F9FA] mb-3">Not sure which engagement level is right?</div>
            <p className="text-[#93A8C0] max-w-xl mx-auto mb-8">Answer four quick questions and we&apos;ll point you to the right fit — including our Small Business &amp; AI Readiness Check options.</p>
            <Link href="/pricing" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#3A86FF] text-[#F8F9FA] font-semibold hover:bg-[#1D3557] transition-colors">
              Find the right fit <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="py-20 lg:py-28 bg-[#0F1923]/5">
        <div className