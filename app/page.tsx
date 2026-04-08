import Link from 'next/link';
import { ArrowRight, Phone, Star, Shield, Wrench, Brain, Server, Layers, ShoppingCart, GitBranch, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';

/* ─── DATA ─────────────────────────────────────────────────────────────────── */

const auditAreas = [
  { icon: Server,       num: '01', title: 'IT Infrastructure',      desc: 'Security posture, connectivity, identity management, and IT costs. Every risk identified, costed, and prioritised. Licensing waste surfaced and eliminated.' },
  { icon: Layers,       num: '02', title: 'Software & Systems',      desc: 'Every tool in use assessed — what it costs, what it does, whether it\'s right. ERP, MIS, and management platforms assessed or selected. Independent vendor brief on your terms.' },
  { icon: ShoppingCart, num: '03', title: 'eCommerce & Digital',     desc: 'Platform, UX, integrations, B2B capability, decoration tools. Customer journey mapped end to end. WCAG accessibility review included.' },
  { icon: GitBranch,    num: '04', title: 'Processes & Operations',  desc: 'Every process mapped from order in to invoice out. Stock, fulfilment, and despatch reviewed. Quick wins separated from bigger projects.' },
  { icon: TrendingUp,   num: '05', title: 'Growth & Opportunity',    desc: 'Revenue lines with most potential identified. New channels and markets assessed. Technology roadmap built for where you\'re going, not where you\'ve been.' },
  { icon: Sparkles,     num: '06', title: 'AI Readiness',            desc: 'Where AI could genuinely help your specific operation. What needs to be in place first. An honest view — not a tool sale.' },
];

const tiers = [
  {
    name: 'Diagnose',
    price: '£2,500',
    vat: '+ VAT',
    description: 'One day on site. Written report within 5 working days. Six audit areas. Every finding specific to your business.',
    includes: ['Full day on-site audit', 'Written report in plain English', 'All 6 audit areas covered', '50% on booking, 50% on delivery'],
    cta: 'Book Diagnose',
    highlight: false,
  },
  {
    name: 'Advise',
    price: '£3,500',
    vat: '+ VAT',
    description: 'Everything in Diagnose, plus independent tool evaluation and a full vendor shortlist — so you go to market on your terms.',
    includes: ['Everything in Diagnose', 'Independent tool evaluation', 'Vendor shortlist & briefs', 'Platform-agnostic recommendations'],
    cta: 'Book Advise',
    highlight: true,
  },
  {
    name: 'Deliver',
    price: '£3,500 + £1,500/mo',
    vat: '+ VAT',
    description: 'Full implementation oversight. Minimum 3 months. I stay involved through delivery — holding vendors to the brief.',
    includes: ['Everything in Advise', 'Implementation oversight', 'Vendor management', '30 days notice after 3-month minimum'],
    cta: 'Book Deliver',
    highlight: false,
  },
];

const processSteps = [
  { num: '01', detail: 'Discovery call',    title: 'Understand',          desc: "A structured discovery conversation — your operation, your pain points, your ambitions. I listen more than I talk. No pitch. No assumptions. 60 minutes. Free." },
  { num: '02', detail: 'On-site audit',     title: 'Audit & Diagnose',    desc: "One day on-site across all six audit areas. Every finding evidenced and quantified against your real data. Nothing vague. Nothing generic." },
  { num: '03', detail: 'Written report',    title: 'Architect',           desc: "Independent recommendations — systems, vendors, integrations, sequencing. A written brief in plain English that puts you in control of any procurement. No vendor agenda." },
  { num: '04', detail: 'Optional Deliver',  title: 'Implement & Oversee', desc: "Where needed, I stay involved through delivery — holding vendors to the brief, acting as your central point of contact." },
];

const differentiators = [
  { icon: Brain,   title: 'The Translation Gift',           desc: "I take what you're trying to convey — often half-formed, vague, hard to articulate — and reflect it back as a solution or a clear path forward. Business owners feel understood in a way they often haven't been before." },
  { icon: Wrench,  title: 'Out-of-the-Box Problem Solving', desc: "When a system can't do something, I don't accept the limitation. I find a different way — connecting things not designed to connect, reframing the problem so the existing tool handles it differently." },
  { icon: Shield,  title: 'Truly Independent',              desc: "No referral fees. No vendor relationships. No agenda beyond what is right for your business. Every recommendation stands on its own merit. Platform agnostic and vendor neutral. Always." },
];

const testimonials = [
  { name: 'Mark Thornton',    role: 'MD, Thornton Workwear & Print',    avatar: 'MT', rating: 5, content: "We'd been running on spreadsheets and gut feel for years. Craig spent a day with us and handed back a report that showed us exactly where we were losing money and why. Within six months we'd implemented two of his recommendations and recovered more than three times his fee." },
  { name: 'Debbie Rawlings',  role: 'Director, Promo Direct UK',        avatar: 'DR', rating: 5, content: "Every technology consultant we'd spoken to before had tried to sell us something. Craig came in with no agenda and told us the truth — some of it uncomfortable. But it was exactly what we needed. The independence is the whole point." },
  { name: 'Gary Patel',       role: 'Founder, Embroid Express',         avatar: 'GP', rating: 5, content: "I couldn't put into words what was wrong with our operation — I just knew it wasn't working. Craig listened, asked the right questions, and came back with a report that described our problems better than I could have. That was the penny drop moment." },
];

const sectors = [
  { emoji: '🧵', name: 'Garment decoration',    href: '/sectors/garment-decoration' },
  { emoji: '🖨️', name: 'Print & promotional',   href: '/sectors/print-promotional' },
  { emoji: '👕', name: 'Workwear & teamwear',   href: '/sectors/workwear-teamwear' },
  { emoji: '🪧', name: 'Signs & graphics',      href: '/sectors/signs-graphics' },
  { emoji: '🏆', name: 'Awards & engraving',    href: '/sectors/awards-engraving' },
  { emoji: '📦', name: 'Labels & packaging',    href: '/sectors/labels-packaging' },
];

/* ─── PAGE ──────────────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="pt-24 pb-20 lg:pt-32 lg:pb-28 bg-[#FDFDFF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left column */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#546A7B]/10 border border-[#546A7B]/20 mb-6">
                <span className="text-xs font-semibold text-[#546A7B] tracking-wider uppercase">
                  — Operations &amp; Technology Consultancy
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#393D3F] leading-tight mb-6">
                The penny drop<span className="text-[#62929E]"> moment.</span>
              </h1>

              <p className="text-lg text-[#393D3F]/70 leading-relaxed mb-4 max-w-xl">
                You know your business is losing money somewhere. You can feel the friction. The workarounds. The systems that don&apos;t talk to each other.
              </p>
              <p className="text-lg text-[#393D3F]/70 leading-relaxed mb-8 max-w-xl">
                I help print, embroidery, workwear, and promotional merchandise businesses decode exactly what&apos;s happening in their operation — and build a clear plan to fix it. Plain English. No jargon. No vendor agenda.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/audit" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#62929E] text-[#FDFDFF] font-semibold hover:bg-[#546A7B] transition-colors">
                  See how it works <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#62929E] text-[#62929E] font-semibold hover:bg-[#62929E]/10 transition-colors">
                  <Phone size={18} /> Book a free 60-min call
                </Link>
              </div>

              {/* Stats strip */}
              <div className="flex flex-wrap gap-8">
                <div>
                  <div className="text-2xl font-bold text-[#393D3F]">25+</div>
                  <div className="text-sm text-[#393D3F]/60">Years in the sector</div>
                </div>
                <div className="w-px bg-[#C6C5B9]" />
                <div>
                  <div className="text-2xl font-bold text-[#393D3F]">£150k+</div>
                  <div className="text-sm text-[#393D3F]/60">Largest project delivered</div>
                </div>
                <div className="w-px bg-[#C6C5B9]" />
                <div>
                  <div className="text-2xl font-bold text-[#393D3F]">3×</div>
                  <div className="text-sm text-[#393D3F]/60">Clarity guarantee</div>
                </div>
              </div>
            </div>

            {/* Right column — hero image */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                  alt="Operations consulting for print and embroidery businesses"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#393D3F]/40 to-transparent" />
              </div>
              {/* Guarantee badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#FDFDFF] rounded-xl shadow-lg p-4 border border-[#C6C5B9]/40 max-w-[220px]">
                <div className="text-xs font-semibold text-[#546A7B] uppercase tracking-wider mb-1">3× Clarity Guarantee</div>
                <div className="text-xs text-[#393D3F]/60 leading-snug">If the report doesn&apos;t identify 3× the fee in recoverable value — full refund. No questions asked.</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTOR PILLS STRIP ───────────────────────────────────────────────── */}
      <div className="bg-[#393D3F] py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-3 flex-wrap">
          <span className="text-xs font-medium tracking-widest uppercase text-[#FDFDFF]/40 min-w-[70px]">I work with</span>
          {sectors.map(s => (
            <Link key={s.href} href={s.href} className="text-xs text-[#FDFDFF]/70 border border-[#FDFDFF]/15 px-3 py-1.5 rounded-full hover:bg-[#62929E] hover:border-[#62929E] hover:text-[#FDFDFF] transition-all">
              {s.name}
            </Link>
          ))}
        </div>
      </div>

      {/* ── HOOK QUOTE ───────────────────────────────────────────────────────── */}
      <div className="bg-[#393D3F] py-16 px-6 text-center border-t border-[#FDFDFF]/10">
        <blockquote className="text-xl lg:text-2xl font-semibold text-[#FDFDFF] max-w-3xl mx-auto leading-relaxed mb-4">
          &ldquo;If I spent a day in your business looking at your systems, your processes, and your technology — how{' '}
          <span className="text-[#62929E]">confident</span> are you that I wouldn&apos;t find anything costing you money you don&apos;t know about?&rdquo;
        </blockquote>
        <p className="text-sm text-[#FDFDFF]/45">That question is worth sitting with. Most owners can&apos;t answer it honestly.</p>
      </div>

      {/* ── ABOUT / WHY DECODED OPS ──────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#393D3F]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">

            {/* Left — image */}
            <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="Craig Blackman — Decoded Ops"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[#62929E] flex flex-col items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-[#FDFDFF]">25+</span>
                <span className="text-xs text-[#FDFDFF]/80 text-center leading-tight px-1">years in the sector</span>
              </div>
            </div>

            {/* Right — content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#546A7B]/10 border border-[#546A7B]/20 mb-4">
                <span className="text-xs font-semibold text-[#546A7B] tracking-wider uppercase">— About Craig Blackman</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#393D3F] mb-6">
                Someone from the industry.<br />Not parachuting in.
              </h2>
              <p className="text-[#393D3F]/70 text-lg leading-relaxed mb-4">
                I&apos;ve spent 25 years working inside the businesses I now advise — print, embroidery, workwear, promotional merchandise, and branded apparel. I&apos;ve been through what you&apos;re going through. I know where the money disappears and why the systems don&apos;t connect.
              </p>
              <p className="text-[#393D3F]/70 leading-relaxed mb-8">
                Most technology advice fails businesses like yours because it comes from people who&apos;ve never processed a decorated order in their life. I built Decoded Ops because product-based businesses with a decoration service deserve someone who genuinely understands their operation from the inside.
              </p>
              <Link href="/contact" className="inline-flex items-center px-6 py-3.5 rounded-full bg-[#62929E] text-[#FDFDFF] font-semibold hover:bg-[#546A7B] transition-colors">
                Start with a free 60-min call
              </Link>
            </div>

          </div>

          {/* Three differentiators */}
          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map(d => {
              const Icon = d.icon;
              return (
                <div key={d.title} className="p-6 rounded-2xl bg-[#FDFDFF] border border-[#C6C5B9]/40">
                  <div className="w-11 h-11 rounded-xl bg-[#62929E]/10 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-[#62929E]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#393D3F] mb-2">{d.title}</h3>
                  <p className="text-sm text-[#393D3F]/60 leading-relaxed">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SERVICES / AUDIT AREAS ───────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FDFDFF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#546A7B]/10 border border-[#546A7B]/20 mb-4">
              <span className="text-xs font-semibold text-[#546A7B] tracking-wider uppercase">— The Operational Clarity Audit</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#393D3F] mb-4">One day. Six areas. Complete clarity.</h2>
            <p className="text-[#393D3F]/60 text-lg">
              I spend a day in your business and cover six areas that most technology consultants never go near. The result is a plain English report that tells you exactly what&apos;s happening, what it&apos;s costing you, and what to do about it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
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

          {/* Pricing tiers */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#546A7B]/10 border border-[#546A7B]/20 mb-4">
              <span className="text-xs font-semibold text-[#546A7B] tracking-wider uppercase">— Pricing</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-[#393D3F]">Choose your engagement level</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
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

          {/* Guarantee banner */}
          <div className="rounded-2xl bg-[#62929E]/10 border border-[#62929E]/25 p-8 text-center">
            <div className="text-2xl font-bold text-[#393D3F] mb-2">The 3× Clarity Guarantee</div>
            <p className="text-[#393D3F]/70 max-w-2xl mx-auto">
              If after reading the report you don&apos;t believe it has identified at least three times the value of the fee in recoverable cost or lost revenue — the fee is refunded in full. No conditions. No questions asked.
            </p>
          </div>
        </div>
      </section>

      {/* ── PROCESS — dark background ────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#393D3F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#62929E]/20 border border-[#62929E]/30 mb-4">
              <span className="text-xs font-semibold text-[#C6C5B9] tracking-wider uppercase">— How It Works</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#FDFDFF] mb-4">From conversation to clarity in four steps</h2>
            <p className="text-[#C6C5B9] text-lg">No jargon. No vague frameworks. A clear, structured process that starts with listening and ends with a plan you can act on.</p>
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

          <div className="mt-12 text-center">
            <Link href="/contact" className="inline-flex items-center px-8 py-4 rounded-full bg-[#62929E] text-[#FDFDFF] font-semibold hover:bg-[#546A7B] transition-colors">
              Start with a free discovery call
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS — dark with background image ──────────────────────────────── */}
      <section className="relative py-16 bg-[#393D3F] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: '25+',   label: 'Years in print, embroidery & workwear' },
              { value: '£150k+', label: 'Largest single project delivered' },
              { value: '3×',    label: 'Clarity guarantee or full refund' },
              { value: '1 day', label: 'To a complete written diagnosis' },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#62929E] mb-2">{stat.value}</div>
                <div className="text-sm text-[#C6C5B9]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FDFDFF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#546A7B]/10 border border-[#546A7B]/20 mb-4">
              <span className="text-xs font-semibold text-[#546A7B] tracking-wider uppercase">— Client Stories</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#393D3F] mb-4">The penny drop, in their own words</h2>
            <p className="text-[#393D3F]/60 text-lg">From workwear to promotional merchandise, here&apos;s what business owners say after working with Decoded Ops.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map(t => (
              <div key={t.name} className="p-8 rounded-2xl border border-[#C6C5B9]/40 bg-[#FDFDFF] hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-[#62929E] fill-[#62929E]" />
                  ))}
                </div>
                <p className="text-[#393D3F]/70 leading-relaxed mb-6 italic">&ldquo;{t.content}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#62929E]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-[#62929E]">{t.avatar}</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#393D3F]">{t.name}</div>
                    <div className="text-xs text-[#393D3F]/50">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDY TEASER ────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#393D3F]/5 border-t border-[#C6C5B9]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#546A7B] mb-2">Case study</p>
            <h3 className="text-xl font-bold text-[#393D3F] mb-2">What happens when the audit doesn&apos;t come first.</h3>
            <p className="text-sm text-[#393D3F]/60">A print &amp; embroidery business. £154,000. 18 months. What a £10k audit would have prevented.</p>
          </div>
          <Link href="/case-study" className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#393D3F] text-[#FDFDFF] text-sm font-semibold hover:bg-[#546A7B] transition-colors">
            Read the case study <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
