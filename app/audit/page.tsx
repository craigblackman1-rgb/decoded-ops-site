import Link from 'next/link';
import { ArrowRight, Server, Layers, ShoppingCart, GitBranch, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { AuditWheelGraphic } from '@/components/graphics/AuditWheelGraphic';

const auditAreas = [
  { icon: Server,       num: '01', title: 'IT Infrastructure',     desc: 'Security posture, connectivity, identity management, and IT costs. Every risk identified, costed, and prioritised. Licensing waste surfaced and eliminated.' },
  { icon: Layers,       num: '02', title: 'Software & Systems',     desc: "Every tool in use assessed — what it costs, what it does, whether it's right. ERP, MIS, and management platforms assessed or selected. Independent vendor brief on your terms." },
  { icon: ShoppingCart, num: '03', title: 'eCommerce & Digital',    desc: 'Platform, UX, integrations, B2B capability, decoration tools. Customer journey mapped end to end. WCAG accessibility review included.' },
  { icon: GitBranch,    num: '04', title: 'Processes & Operations', desc: 'Every process mapped from order in to invoice out. Stock, fulfilment, and despatch reviewed. Quick wins separated from bigger projects.' },
  { icon: TrendingUp,   num: '05', title: 'Growth & Opportunity',   desc: "Revenue lines with most potential identified. New channels and markets assessed. Technology roadmap built for where you're going, not where you've been." },
  { icon: Sparkles,     num: '06', title: 'AI Readiness',           desc: "Where AI could genuinely help your specific operation. What needs to be in place first. An honest view — not a tool sale." },
];

const tiers = [
  {
    name: 'Diagnose', price: '£2,500', vat: '+ VAT',
    description: 'One day on site. Written report within 5 working days. Six audit areas. Every finding specific to your business.',
    includes: ['Full day on-site audit', 'Written report in plain English', 'All 6 audit areas covered', '50% on booking, 50% on delivery'],
    cta: 'Book Diagnose', highlight: false,
  },
  {
    name: 'Advise', price: '£3,500', vat: '+ VAT',
    description: 'Everything in Diagnose, plus independent tool evaluation and a full vendor shortlist — so you go to market on your terms.',
    includes: ['Everything in Diagnose', 'Independent tool evaluation', 'Vendor shortlist & briefs', 'Platform-agnostic recommendations'],
    cta: 'Book Advise', highlight: true,
  },
  {
    name: 'Deliver', price: '£3,500 + £1,500/mo', vat: '+ VAT',
    description: "Full implementation oversight. Minimum 3 months. I stay involved through delivery — holding vendors to the brief.",
    includes: ['Everything in Advise', 'Implementation oversight', 'Vendor management', '30 days notice after 3-month minimum'],
    cta: 'Book Deliver', highlight: false,
  },
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
      <section className="pt-24 pb-20 lg:pt-32 lg:pb-28 bg-[#FDFDFF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#546A7B]/10 border border-[#546A7B]/20 mb-6">
                <span className="text-xs font-semibold text-[#546A7B] tracking-wider uppercase">— The Operations Audit</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#393D3F] leading-tight mb-6">
                One day on site.<br />
                <span className="text-[#62929E]">Everything it costs you</span><br />
                in writing within five days.
              </h1>
              <p className="text-lg text-[#393D3F]/70 leading-relaxed mb-8 max-w-xl">
                A structured, independent review of your operations, technology, and processes. Not a workshop. Not a proposal. A real audit — followed, observed, and quantified.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#62929E] text-[#FDFDFF] font-semibold hover:bg-[#546A7B] transition-colors">
                  Book the audit <ArrowRight size={18} />
                </Link>
                <Link href="/case-study" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#62929E] text-[#62929E] font-semibold hover:bg-[#62929E]/10 transition-colors">
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
      <section className="py-20 lg:py-28 bg-[#FDFDFF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#546A7B]/10 border border-[#546A7B]/20 mb-4">
              <span className="text-xs font-semibold text-[#546A7B] tracking-wider uppercase">— What gets audited</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#393D3F] mb-4">Six areas. Every time.</h2>
            <p className="text-[#393D3F]/60 text-lg">The same six areas are covered in every audit — because in this sector, the problems always live in the same places.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {auditAreas.map(area => {
              const Icon = area.icon;
              return (
                <div key={area.num} className="group p-6 rounded-2xl border border-[#C6C5B9]/40 hover:border-[#62929E]/40 hover:shadow-md transition-all duration-300 bg-[#FDFDFF]">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#62929E]/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-[#62929E]" />
                    </div>
                    <span className="text-3xl font-bold text-[#C6C5B9]">{area.num}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#393D3F] mb-2">{area.title}</h3>
                  <p className="text-sm text-[#393D3F]/60 leading-relaxed">{area.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS — dark */}
      <section className="py-20 lg:py-28 bg-[#393D3F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#62929E]/20 border border-[#62929E]/30 mb-4">
              <span className="text-xs font-semibold text-[#C6C5B9] tracking-wider uppercase">— The process</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#FDFDFF] mb-4">What happens, step by step</h2>
            <p className="text-[#C6C5B9] text-lg">From your first call through to the debrief — what to expect at every stage.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div key={step.num} className="relative p-6 rounded-2xl bg-[#FDFDFF]/5 border border-[#FDFDFF]/10 hover:bg-white/[0.08] transition-colors">
                <div className="text-5xl font-bold text-[#62929E]/30 mb-4">{step.num}</div>
                <div className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#62929E]/20 mb-3">
                  <span className="text-xs text-[#62929E] font-medium">{step.detail}</span>
                </div>
                <h3 className="text-xl font-bold text-[#FDFDFF] mb-3">{step.title}</h3>
                <p className="text-[#C6C5B9] text-sm leading-relaxed">{step.desc}</p>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-6 h-0.5 bg-[#62929E]/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 lg:py-28 bg-[#FDFDFF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#546A7B]/10 border border-[#546A7B]/20 mb-4">
              <span className="text-xs font-semibold text-[#546A7B] tracking-wider uppercase">— Pricing</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#393D3F]">Choose your engagement level</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {tiers.map(tier => (
              <div key={tier.name} className={`relative rounded-2xl p-8 border transition-all duration-300 ${tier.highlight ? 'bg-[#393D3F] border-[#393D3F] shadow-xl' : 'bg-[#FDFDFF] border-[#C6C5B9]/40 hover:border-[#62929E]/40 hover:shadow-md'}`}>
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#62929E] text-[#FDFDFF] text-xs font-semibold">Most Popular</span>
                  </div>
                )}
                <div className="mb-6">
                  <div className={`text-sm font-semibold uppercase tracking-wider mb-2 ${tier.highlight ? 'text-[#C6C5B9]' : 'text-[#546A7B]'}`}>{tier.name}</div>
                  <div className={`text-3xl font-bold mb-0.5 ${tier.highlight ? 'text-[#FDFDFF]' : 'text-[#393D3F]'}`}>{tier.price}</div>
                  <div className={`text-xs ${tier.highlight ? 'text-[#C6C5B9]' : 'text-[#393D3F]/50'}`}>{tier.vat}</div>
                </div>
                <p className={`text-sm leading-relaxed mb-6 ${tier.highlight ? 'text-[#C6C5B9]' : 'text-[#393D3F]/60'}`}>{tier.description}</p>
                <ul className="space-y-2.5 mb-8">
                  {tier.includes.map(item => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#62929E] flex-shrink-0 mt-0.5" />
                      <span className={`text-sm ${tier.highlight ? 'text-[#FDFDFF]/80' : 'text-[#393D3F]/70'}`}>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl font-semibold text-sm transition-colors ${tier.highlight ? 'bg-[#62929E] text-[#FDFDFF] hover:bg-[#546A7B]' : 'border-2 border-[#62929E] text-[#62929E] hover:bg-[#62929E]/10'}`}>
                  {tier.cta} <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-[#62929E]/10 border border-[#62929E]/25 p-8 text-center">
            <div className="text-2xl font-bold text-[#393D3F] mb-2">The 3× Clarity Guarantee</div>
            <p className="text-[#393D3F]/70 max-w-2xl mx-auto">If after reading the report you don&apos;t believe it has identified at least three times the value of the fee in recoverable cost or lost revenue — the fee is refunded in full. No conditions. No questions asked.</p>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="py-20 lg:py-28 bg-[#393D3F]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#546A7B]/10 border border-[#546A7B]/20 mb-4">
                <span className="text-xs font-semibold text-[#546A7B] tracking-wider uppercase">— What you get</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#393D3F] mb-8">The deliverables</h2>
              <div className="space-y-4">
                {deliverables.map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#62929E] mt-0.5 flex-shrink-0" />
                    <span className="text-[#393D3F]/70">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#62929E] text-[#FDFDFF] font-semibold hover:bg-[#546A7B] transition-colors">
                  Book a free 60-minute call first <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center p-8 rounded-2xl bg-[#393D3F]">
              <svg viewBox="0 0 280 220" className="w-full max-w-xs" aria-hidden="true">
                {/* Report document */}
                <rect x="40" y="20" width="200" height="160" rx="8" fill="#FDFDFF" />
                <rect x="40" y="20" width="200" height="28" rx="8" fill="#62929E" />
                <rect x="40" y="40" width="200" height="8" fill="#62929E" />
                {/* Doc title */}
                <text x="140" y="39" textAnchor="middle" fontSize="10" fontWeight="700" fill="#FDFDFF" fontFamily="system-ui">OPERATIONS AUDIT REPORT</text>
                {/* Lines of text */}
                {[60, 76, 92, 108, 124, 140, 156].map((y, i) => (
                  <rect key={y} x="60" y={y} width={i % 3 === 2 ? 100 : 160} height="7" rx="3"
                    fill="#C6C5B9" opacity={0.3 + (i * 0.05)} />
                ))}
                {/* Checkmarks */}
                {[68, 84, 100, 116, 132, 148].map((y, i) => (
                  <g key={y}>
                    <circle cx="52" cy={y} r="5" fill="#62929E" opacity="0.7" />
                    <text x="52" y={y + 3.5} textAnchor="middle" fontSize="7" fill="white" fontWeight="700">✓</text>
                  </g>
                ))}
                {/* Bottom section — quantified */}
                <rect x="56" y="164" width="168" height="1" fill="#C6C5B9" opacity="0.3" />
                <text x="140" y="177" textAnchor="middle" fontSize="8" fill="#62929E" fontWeight="700" fontFamily="system-ui">TOTAL RECOVERABLE VALUE</text>
                <text x="140" y="192" textAnchor="middle" fontSize="18" fill="#393D3F" fontWeight="800" fontFamily="system-ui">£47,200</text>
                {/* Corner badge */}
                <circle cx="220" cy="26" r="16" fill="#393D3F" />
                <text x="220" y="22" textAnchor="middle" fontSize="7" fill="#62929E" fontWeight="700" fontFamily="system-ui">3×</text>
                <text x="220" y="31" textAnchor="middle" fontSize="6" fill="#C6C5B9" fontFamily="system-ui">Clarity</text>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
