import Link from 'next/link';
import { ArrowRight, CheckCircle2, Shield } from 'lucide-react';

/* ─── Segment A tiers ───────────────────────────────────────────────── */
const segmentATiers = [
  {
    id: 'diagnose',
    name: 'Diagnose',
    price: 'From £2,500',
    vat: '+ VAT',
    tagline: 'Audit & written report. Standalone.',
    badge: null,
    includes: [
      'One day on site',
      'Six audit areas covered in full',
      'Written findings report — plain English',
      'Issues & opportunities register',
      'End-to-end process maps',
      'Costed, prioritised recommendations',
      'Independent vendor shortlist where relevant',
      'Quick wins identified',
      'Follow-up session included',
    ],
    payment: '50% on signing, 50% on delivery',
    guarantee: true,
    cta: 'Book a free discovery call',
    ctaHref: '/contact',
    highlight: false,
  },
  {
    id: 'advise',
    name: 'Advise',
    price: 'From £3,800',
    vat: '+ VAT',
    tagline: 'Adds vendor briefs & procurement.',
    badge: 'Most popular',
    includes: [
      'Everything in Diagnose',
      '1–2 days on site',
      'Detailed vendor briefs written',
      'Vendors approached on your behalf',
      'Competitive, like-for-like quotes secured',
      'Vendor comparison & recommendation',
      'No commitment until all options reviewed',
    ],
    payment: '50% on signing, 50% on delivery',
    guarantee: true,
    cta: 'Book a free discovery call',
    ctaHref: '/contact',
    highlight: true,
  },
  {
    id: 'deliver',
    name: 'Deliver',
    price: 'From £3,800',
    vat: '+ £1,500/mo + VAT',
    tagline: 'Adds implementation oversight.',
    badge: null,
    includes: [
      'Everything in Advise',
      '2–3 days on site',
      'Single point of contact across vendors',
      'Vendors held to brief — changes challenged',
      'Structured progress reviews + written summaries',
      'Milestone sign-off before payments released',
      'Final handover review & acceptance',
    ],
    payment: 'Fixed element: 50/50. Retainer: monthly in advance. Min. 3 months.',
    guarantee: false,
    cta: 'Request a proposal',
    ctaHref: '/contact',
    highlight: false,
  },
];

/* ─── Segment B tiers ───────────────────────────────────────────────── */
const segmentBTiers = [
  {
    id: 'ai-check',
    name: 'AI Readiness Check',
    price: '£395',
    vat: '+ VAT',
    tagline: 'Remote. Fixed scope. Fast turnaround.',
    badge: 'Start here',
    includes: [
      'Pre-session questionnaire (self-completed)',
      '60-minute video call — structured review',
      'Current tech stack assessed',
      'AI readiness honest assessment',
      'Single highest-priority quick win identified',
      'Written summary report — plain English',
      'Delivered within 5 working days',
    ],
    payment: '100% on booking. Remote delivery — no travel costs.',
    cta: 'Book your AI Readiness Check',
    ctaHref: '/contact',
    highlight: false,
  },
  {
    id: 'monthly',
    name: 'Monthly Advisory',
    price: '£350',
    vat: '/month + VAT',
    tagline: 'Standing monthly support. Remote.',
    badge: 'Best value',
    includes: [
      'AI Readiness Check included as onboarding',
      'One 60-minute video call per month',
      'Unlimited email Q&A (responded within 48hrs)',
      'Monthly action summary issued',
      'Technology and AI recommendations ongoing',
      'Vendor/tool guidance as needed',
      'Priority access for urgent questions',
    ],
    payment: 'Minimum 3-month commitment. 30 days written notice to exit.',
    cta: 'Start monthly advisory',
    ctaHref: '/contact',
    highlight: true,
  },
  {
    id: 'sprint',
    name: 'Quarterly Sprint',
    price: '£995',
    vat: '+ VAT',
    tagline: 'One focused project. 90 days.',
    badge: null,
    includes: [
      'AI Readiness Check included as onboarding',
      'One defined operational or technology problem',
      'Three monthly 90-minute working sessions',
      'Research, recommendations, and vendor review',
      'Written action plan delivered at close',
      'Email support throughout',
      'Defined scope agreed before start',
    ],
    payment: '50% on signing, 50% at 45 days. Fixed fee, fixed scope.',
    cta: 'Book a sprint',
    ctaHref: '/contact',
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-24 pb-20 lg:pt-32 lg:pb-28 bg-[#FDFDFF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#546A7B]/10 border border-[#546A7B]/20 mb-6">
              <span className="text-xs font-semibold text-[#546A7B] tracking-wider uppercase">— Pricing</span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#393D3F] leading-tight mb-6">
              Clear pricing.<br />
              <span className="text-[#62929E]">No hidden costs. No vendor agenda.</span>
            </h1>
            <p className="text-lg text-[#393D3F]/70 leading-relaxed max-w-2xl">
              Two distinct offers — one for established businesses ready for a full operational audit, one for smaller businesses that need to close the technology gap quickly and affordably.
            </p>
          </div>
        </div>
      </section>

      {/* SEGMENT A */}
      <section className="py-20 lg:py-28 bg-[#393D3F]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Segment header */}
          <div className="max-w-2xl mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#546A7B]/10 border border-[#546A7B]/20 mb-4">
              <span className="text-xs font-semibold text-[#546A7B] tracking-wider uppercase">— For established businesses · £500k–£7.5m turnover</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#393D3F] mb-3">Core Offer</h2>
            <p className="text-[#393D3F]/60 text-lg">
              Full operational and technology audit. Start with Diagnose — add Advise and Deliver only if you need them. Nothing in Tier 3 has to be committed upfront.
            </p>
          </div>

          {/* Investment anchor */}
          <div className="flex items-center gap-3 mb-12 p-4 rounded-xl bg-[#FDFDFF] border border-[#C6C5B9]/40 max-w-2xl">
            <div className="w-8 h-8 rounded-full bg-[#62929E]/15 flex items-center justify-center flex-shrink-0">
              <Shield size={16} className="text-[#62929E]" />
            </div>
            <p className="text-sm text-[#393D3F]/70 leading-relaxed">
              <span className="font-semibold text-[#393D3F]">Investment starts from £2,500 + VAT.</span>{' '}
              Every engagement begins with a free 60-minute discovery call — no obligation, no sales pitch.
            </p>
          </div>

          {/* Three tiers */}
          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            {segmentATiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 ${
                  tier.highlight
                    ? 'bg-[#62929E] border-[#62929E] shadow-xl'
                    : 'bg-[#FDFDFF] border-[#C6C5B9]/40 hover:border-[#62929E]/40 hover:shadow-md'
                }`}
              >
                {tier.badge && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    tier.highlight ? 'bg-[#FDFDFF] text-[#62929E]' : 'bg-[#62929E] text-[#FDFDFF]'
                  }`}>
                    {tier.badge}
                  </div>
                )}

                <div className="mb-6">
                  <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${tier.highlight ? 'text-[#FDFDFF]/70' : 'text-[#546A7B]'}`}>
                    {tier.name}
                  </div>
                  <div className={`text-3xl font-bold ${tier.highlight ? 'text-[#FDFDFF]' : 'text-[#393D3F]'}`}>
                    {tier.price}
                  </div>
                  <div className={`text-sm font-medium mt-0.5 ${tier.highlight ? 'text-[#FDFDFF]/70' : 'text-[#393D3F]/50'}`}>
                    {tier.vat}
                  </div>
                  <p className={`text-sm mt-3 leading-relaxed ${tier.highlight ? 'text-[#FDFDFF]/80' : 'text-[#393D3F]/60'}`}>
                    {tier.tagline}
                  </p>
                </div>

                <div className="flex-1 space-y-3 mb-8">
                  {tier.includes.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className={`mt-0.5 flex-shrink-0 ${tier.highlight ? 'text-[#FDFDFF]/80' : 'text-[#62929E]'}`} />
                      <span className={`text-sm leading-snug ${tier.highlight ? 'text-[#FDFDFF]/85' : 'text-[#393D3F]/70'}`}>{item}</span>
                    </div>
                  ))}
                </div>

                <div className={`text-xs leading-relaxed mb-6 pb-6 border-b ${
                  tier.highlight ? 'text-[#FDFDFF]/60 border-[#FDFDFF]/20' : 'text-[#393D3F]/40 border-[#C6C5B9]/30'
                }`}>
                  {tier.payment}
                </div>

                {tier.guarantee && (
                  <div className={`text-xs font-semibold mb-4 ${tier.highlight ? 'text-[#FDFDFF]' : 'text-[#62929E]'}`}>
                    3× Clarity Guarantee applies
                  </div>
                )}

                <Link
                  href={tier.ctaHref}
                  className={`inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full font-semibold text-sm transition-colors ${
                    tier.highlight
                      ? 'bg-[#FDFDFF] text-[#62929E] hover:bg-[#FDFDFF]/90'
                      : 'bg-[#62929E] text-[#FDFDFF] hover:bg-[#546A7B]'
                  }`}
                >
                  {tier.cta} <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>

          {/* 3x guarantee callout */}
          <div className="rounded-2xl bg-[#393D3F] p-8 lg:p-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#62929E]/20 border border-[#62929E]/30 mb-4">
              <span className="text-xs font-semibold text-[#C6C5B9] tracking-wider uppercase">— The 3× Clarity Guarantee</span>
            </div>
            <blockquote className="text-xl lg:text-2xl font-medium text-[#FDFDFF] leading-relaxed mb-4">
              &ldquo;If after reading the report you do not believe it has identified at least three times the value of the fee in recoverable cost or lost revenue — whether that is subscription waste, manual labour, identifiable lost orders, or technology spend not delivering — I will refund the fee in full. No conditions. No questions asked.&rdquo;
            </blockquote>
            <div className="text-sm text-[#C6C5B9]">Applies to Diagnose and Advise tiers. The audit is not an added cost — it is cost avoidance.</div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <section className="py-16 bg-[#FDFDFF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="rounded-2xl bg-[#62929E]/10 border border-[#62929E]/25 p-8 lg:p-10 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#393D3F] mb-3">Running a smaller business?</h3>
              <p className="text-[#393D3F]/70 leading-relaxed">
                If you&apos;re a solo operator or small team doing up to £500k — the Core Offer is designed for larger businesses. The Small Business offer below was built specifically for you: remote, affordable, and designed to give you quick wins you can act on immediately.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <a href="#small-business" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#62929E] text-[#FDFDFF] font-semibold hover:bg-[#546A7B] transition-colors">
                See Small Business pricing <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEGMENT B */}
      <section id="small-business" className="py-20 lg:py-28 bg-[#393D3F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Segment header */}
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#62929E]/20 border border-[#62929E]/30 mb-4">
              <span className="text-xs font-semibold text-[#C6C5B9] tracking-wider uppercase">— For smaller businesses · Up to £500k turnover</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#FDFDFF] mb-3">Small Business Offer</h2>
            <p className="text-[#C6C5B9] text-lg leading-relaxed">
              A separate product line — not a discounted version of the Core Offer. Built for the owner-operator who knows they&apos;re falling behind on technology and AI but doesn&apos;t have the budget for a full engagement.
            </p>
          </div>

          {/* Three tiers */}
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {segmentBTiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 ${
                  tier.highlight
                    ? 'bg-[#62929E] border-[#62929E] shadow-xl'
                    : 'bg-[#FDFDFF]/5 border-[#FDFDFF]/10 hover:border-[#62929E]/40'
                }`}
              >
                {tier.badge && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    tier.highlight ? 'bg-[#FDFDFF] text-[#62929E]' : 'bg-[#62929E] text-[#FDFDFF]'
                  }`}>
                    {tier.badge}
                  </div>
                )}

                <div className="mb-6">
                  <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${tier.highlight ? 'text-[#FDFDFF]/70' : 'text-[#62929E]'}`}>
                    {tier.name}
                  </div>
                  <div className={`text-3xl font-bold ${tier.highlight ? 'text-[#FDFDFF]' : 'text-[#FDFDFF]'}`}>
                    {tier.price}
                  </div>
                  <div className={`text-sm font-medium mt-0.5 ${tier.highlight ? 'text-[#FDFDFF]/70' : 'text-[#C6C5B9]'}`}>
                    {tier.vat}
                  </div>
                  <p className={`text-sm mt-3 leading-relaxed ${tier.highlight ? 'text-[#FDFDFF]/80' : 'text-[#C6C5B9]/70'}`}>
                    {tier.tagline}
                  </p>
                </div>

                <div className="flex-1 space-y-3 mb-8">
                  {tier.includes.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className={`mt-0.5 flex-shrink-0 ${tier.highlight ? 'text-[#FDFDFF]/80' : 'text-[#62929E]'}`} />
                      <span className={`text-sm leading-snug ${tier.highlight ? 'text-[#FDFDFF]/85' : 'text-[#C6C5B9]'}`}>{item}</span>
                    </div>
                  ))}
                </div>

                <div className={`text-xs leading-relaxed mb-6 pb-6 border-b ${
                  tier.highlight ? 'text-[#FDFDFF]/60 border-[#FDFDFF]/20' : 'text-[#C6C5B9]/50 border-[#FDFDFF]/10'
                }`}>
                  {tier.payment}
                </div>

                <Link
                  href={tier.ctaHref}
                  className={`inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full font-semibold text-sm transition-colors ${
                    tier.highlight
                      ? 'bg-[#FDFDFF] text-[#62929E] hover:bg-[#FDFDFF]/90'
                      : 'bg-[#62929E] text-[#FDFDFF] hover:bg-[#546A7B]'
                  }`}
                >
                  {tier.cta} <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>

          {/* AI context note */}
          <div className="rounded-2xl bg-[#FDFDFF]/5 border border-[#FDFDFF]/10 p-8 max-w-4xl">
            <div className="text-xs font-semibold text-[#62929E] uppercase tracking-wider mb-3">A note on AI in 2026</div>
            <p className="text-[#C6C5B9] leading-relaxed mb-4">
              The AI Readiness Check is not about adding AI tools to your business. It&apos;s about getting an honest answer to a specific question: will AI actually help your operation right now, what do you need to fix first, and where are the real gains?
            </p>
            <p className="text-[#C6C5B9] leading-relaxed">
              Larger competitors are compounding their advantage year on year. A two-hour investment tells you exactly where you stand — and what to do next.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ / Positioning */}
      <section className="py-20 lg:py-28 bg-[#FDFDFF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#546A7B]/10 border border-[#546A7B]/20 mb-4">
                <span className="text-xs font-semibold text-[#546A7B] tracking-wider uppercase">— Common questions</span>
              </div>
              <h2 className="text-3xl font-bold text-[#393D3F] mb-8">How to think about the investment</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'Is the audit a cost or cost avoidance?',
                    a: "It's cost avoidance. In most cases, the savings on a single software decision cover the fee many times over. The ERP case study on this site documents £154,000 in losses — a £10,000 audit would have prevented almost all of it.",
                  },
                  {
                    q: 'Can I start with Diagnose and add tiers later?',
                    a: "Yes. Each tier is a standalone decision. Many clients start with the audit, read the report, and then decide whether to add vendor procurement support or implementation oversight. Nothing in Tier 3 is committed upfront.",
                  },
                  {
                    q: "What's the difference between the Core Offer and the Small Business offer?",
                    a: "They're fundamentally different products for different buyers. The Core Offer is on-site, comprehensive, and suited to businesses with established teams and systems. The Small Business offer is remote-first, tightly scoped, and designed for owner-operators who need quick wins at an accessible price.",
                  },
                  {
                    q: 'What does the 3× Clarity Guarantee actually mean?',
                    a: "If after reading the report you don't believe it has identified at least three times the fee in recoverable value — from any source — I refund it in full. No conditions, no questions asked. It applies to Diagnose and Advise.",
                  },
                ].map((item, i) => (
                  <div key={i} className="border-b border-[#C6C5B9]/30 pb-6">
                    <div className="font-semibold text-[#393D3F] mb-2">{item.q}</div>
                    <p className="text-sm text-[#393D3F]/65 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-28">
              <div className="rounded-2xl bg-[#393D3F] p-8 mb-6">
                <div className="text-sm font-semibold text-[#C6C5B9] uppercase tracking-wider mb-4">Not sure which is right for you?</div>
                <p className="text-[#C6C5B9] leading-relaxed mb-6 text-sm">
                  The first call is free and takes 60 minutes. No sales pitch — just a conversation about your business, what&apos;s frustrating you, and whether there&apos;s a clear path forward.
                </p>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full bg-[#62929E] text-[#FDFDFF] font-semibold hover:bg-[#546A7B] transition-colors">
                  Book a free 60-minute call <ArrowRight size={18} />
                </Link>
              </div>
              <div className="rounded-2xl bg-[#62929E]/10 border border-[#62929E]/25 p-6">
                <div className="text-sm font-semibold text-[#393D3F] mb-2">See the case study</div>
                <p className="text-sm text-[#393D3F]/65 leading-relaxed mb-4">
                  A print and embroidery business. £154,000 in losses over 18 months. A £10,000 audit would have prevented it.
                </p>
                <Link href="/case-study" className="inline-flex items-center gap-2 text-sm font-semibold text-[#62929E] hover:text-[#546A7B] transition-colors">
                  Read the case study <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
