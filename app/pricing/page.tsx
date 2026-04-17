'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, CheckCircle2, Shield, ChevronRight } from 'lucide-react';

/* ─── Core Services (4 standalone) ─────────────────────────────────── */
const coreServices = [
  {
    id: 'clarity',
    name: 'Clarity',
    subtitle: 'Operational & technology audit',
    price: 'From £2,500',
    vat: null,
    tagline: 'The starting point. A full operational and technology audit — delivered in plain English with costed recommendations.',
    badge: 'Start here' as string | null,
    includes: [
      'One day on site (1–3 days depending on complexity)',
      'Six audit areas covered in full',
      'Written findings report — plain English',
      'Issues & opportunities register',
      'End-to-end process maps',
      'Costed prioritised recommendations',
      'Independent vendor shortlist where relevant',
      'Quick wins identified',
      'Debrief call + 30 days follow-up support',
    ],
    payment: '50% on signing, 50% on delivery',
    guarantee: true,
    cta: 'Book a free discovery call',
    ctaHref: '/contact',
    highlight: false,
  },
  {
    id: 'deliver',
    name: 'Deliver',
    subtitle: 'Project delivery & vendor management',
    price: 'From £1,050',
    vat: '/month',
    tagline: 'Independent vendor management and project delivery. One point of contact. No vendor loyalty — only yours.',
    badge: 'Most common' as string | null,
    includes: [
      'Independent vendor brief written on your terms',
      'Vendors approached and managed on your behalf',
      'Competitive like-for-like quotes secured',
      'Vendor comparison & recommendation',
      'Single point of contact across all vendors',
      'Structured progress reviews + written summaries',
      'Milestone sign-off before payments released',
      'Final handover review & acceptance',
    ],
    payment: 'Monthly retainer. 3-month minimum. 30 days written notice after.',
    guarantee: false,
    cta: 'Book a free discovery call',
    ctaHref: '/contact',
    highlight: true,
  },
  {
    id: 'transform',
    name: 'Transform',
    subtitle: 'Digital transformation programme',
    price: 'From £1,500',
    vat: '/month',
    tagline: 'Multi-workstream programmes — ERP, eCommerce, process redesign. Process-led and people-first.',
    badge: null as string | null,
    includes: [
      'Full discovery phase before scoping',
      'Multi-workstream programme (ERP + eCommerce + process redesign)',
      'Process-led people-first approach',
      'Change management and employee buy-in built in',
      'Vendor selection and management across workstreams',
      'Structured milestone governance',
      'Regular written progress reporting',
      'Roadmap ownership through to completion',
    ],
    payment: 'Monthly retainer. Discovery required before scoping. Milestone-based minimum.',
    guarantee: false,
    cta: 'Request a proposal',
    ctaHref: '/contact',
    highlight: false,
  },
  {
    id: 'retained',
    name: 'Retained',
    subtitle: 'Fractional CTO / Head of Operations',
    price: 'From £1,440',
    vat: '/month',
    tagline: 'A direct line to Craig — no junior handoff. Defined days per month, agreed in advance.',
    badge: null as string | null,
    includes: [
      'Defined days per month — agreed in advance',
      'Attendance at leadership and operations meetings',
      'Ownership of specific projects or workstreams',
      'Vendor management and technology procurement',
      'Team coaching and process documentation',
      'Technology roadmap ownership',
      'A direct line to Craig — no junior handoff',
    ],
    payment: 'Monthly in advance. Min. 6 months. 30 days written notice after.',
    guarantee: false,
    cta: 'Book a free discovery call',
    ctaHref: '/contact',
    highlight: false,
  },
];

/* ─── Segment B / Micro tiers ───────────────────────────────────────── */
const segmentBTiers = [
  {
    id: 'remote-clarity',
    name: 'Clarity Check',
    subtitle: 'Remote operational review. Fixed scope.',
    price: '£395',
    vat: null,
    tagline: 'The remote equivalent of the on-site audit — honest, specific, and actionable.',
    badge: 'Start here' as string | null,
    includes: [
      'Pre-session questionnaire (self-completed)',
      '3-hour structured remote session',
      'Written findings summary — plain English',
      'Three priority actions identified',
      'Current tech stack and AI readiness assessed',
      'Delivered within 5 working days',
    ],
    payment: '100% on booking. No minimum. Remote — no travel costs.',
    guarantee: false,
    cta: 'Book your Remote Clarity',
    ctaHref: '/contact',
    highlight: false,
  },
  {
    id: 'ai-check',
    name: 'AI Readiness Check',
    subtitle: 'Remote. Fixed scope. Fast turnaround.',
    price: '£395',
    vat: null,
    tagline: 'An honest view of where AI could genuinely help your operation — and what needs fixing first.',
    badge: 'Start here' as string | null,
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
    guarantee: false,
    cta: 'Book your AI Readiness Check',
    ctaHref: '/contact',
    highlight: false,
  },
  {
    id: 'monthly',
    name: 'Monthly Advisory',
    subtitle: 'Standing monthly support. Remote.',
    price: '£395',
    vat: '/month',
    tagline: 'Ongoing practical guidance on technology, AI, and operations from someone who has worked in these businesses.',
    badge: 'Best value' as string | null,
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
    guarantee: false,
    cta: 'Start monthly advisory',
    ctaHref: '/contact',
    highlight: true,
  },
  {
    id: 'sprint',
    name: 'Quarterly Sprint',
    subtitle: 'One focused project. 90 days.',
    price: '£995',
    vat: null,
    tagline: 'One defined problem. Three working sessions. A written action plan at the close.',
    badge: null as string | null,
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
    guarantee: false,
    cta: 'Book a sprint',
    ctaHref: '/contact',
    highlight: false,
  },
];

/* ─── Questionnaire — 2 questions ───────────────────────────────────── */
const questions = [
  {
    id: 'situation',
    text: 'Where are you right now?',
    sub: 'Pick the one that fits best.',
    options: [
      { label: "Something isn't working but I'm not sure exactly what", detail: 'Operations feel inefficient. Money feels like it\'s leaking somewhere. I need a clear picture before committing to anything.', value: 'unknown' },
      { label: 'I know what I need — a new system, eCommerce, or ERP', detail: 'I have a specific project in mind. I need someone to own getting it built properly.', value: 'known_project' },
      { label: "I'm undertaking a major overhaul — multiple systems at once", detail: 'ERP, eCommerce, process redesign — several things changing at the same time.', value: 'known_big' },
      { label: 'I need an ongoing technology and operations partner', detail: 'No big project right now. I want a senior person in my corner every month.', value: 'ongoing' },
    ],
  },
  {
    id: 'size',
    text: 'What is your approximate annual turnover?',
    sub: 'All prices shown are Craig\'s fees. No VAT is charged.',
    options: [
      { label: 'Under £500k', detail: 'Remote delivery options available', value: 'micro' },
      { label: '£500k – £2m', detail: 'On-site engagement', value: 'small' },
      { label: '£2m – £7.5m', detail: 'On-site engagement', value: 'mid' },
      { label: '£7.5m or above', detail: 'Programme / retained', value: 'growth' },
    ],
  },
];

function getSuggestedServiceId(answers: Record<string, string>): string {
  const { situation, size } = answers;

  // Micro segment → small business products
  if (size === 'micro') {
    if (situation === 'ongoing') return 'monthly';
    if (situation === 'known_project' || situation === 'known_big') return 'remote-clarity';
    return 'ai-check';
  }

  // Core services by situation
  if (situation === 'known_big') return 'transform';
  if (situation === 'ongoing') return 'retained';
  if (situation === 'known_project') return 'deliver';
  return 'clarity';
}

const allTiers = [...coreServices, ...segmentBTiers];

/* ─── Three-Tier Engagement Model — segment-aware ───────────────────── */
const tierPricesBySegment = {
  small:  { clarity: { price: '£2,500–£3,500',  note: 'Fixed fee — one payment' },    deliver:   { price: '£1,050–£1,200', note: '/mo · 3-month minimum' },   transform: { price: '£1,500–£2,200', note: '/mo · milestone minimum' } },
  mid:    { clarity: { price: '£5,000–£8,000',   note: 'Fixed fee — one payment' },    deliver:   { price: '£1,200–£1,800', note: '/mo · 3-month minimum' },   transform: { price: '£2,200–£3,200', note: '/mo · milestone minimum' } },
  growth: { clarity: { price: '£8,000–£12,000',  note: 'Fixed fee — one payment' },    deliver:   { price: '£1,800–£2,500', note: '/mo · 3-month minimum' },   transform: { price: '£3,200–£5,000+', note: '/mo · milestone minimum' } },
} as const;

const threeTierItems = [
  {
    id: 'clarity',
    tier: 'Tier 1',
    name: 'Clarity',
    includes: [
      'One day on site',
      'Six-area written audit',
      'Issues & opportunities register',
      'Costed, prioritised recommendations',
      'Independent vendor shortlist',
      'Quick wins identified',
      '90-day action plan',
      'AI readiness scorecard',
      '30-day post-delivery support window',
    ],
    payment: '50% on signing, 50% on delivery.',
    guarantee: true,
    cta: 'Book a free discovery call',
    ctaHref: '/contact',
  },
  {
    id: 'deliver',
    tier: 'Tier 2',
    name: 'Deliver',
    includes: [
      'Everything in Clarity',
      'Month 1: audit delivered',
      'Months 2–3: vendor briefs written',
      'Procurement managed on your behalf',
      'Competitive quotes secured',
      'Vendor comparison & recommendation',
      'Monthly capability workshop',
      'Practical tools & frameworks left with you',
    ],
    payment: 'Monthly retainer. 3-month minimum. 30 days written notice after.',
    guarantee: false,
    cta: 'Book a free discovery call',
    ctaHref: '/contact',
  },
  {
    id: 'transform',
    tier: 'Tier 3',
    name: 'Transform',
    includes: [
      'Everything in Deliver',
      'Multi-workstream implementation oversight',
      'Single point of contact across all vendors',
      'Vendors held to the brief you own',
      'Milestone sign-off before payments release',
      'Regular structured progress reviews',
      'Final handover & system acceptance',
      'Priced at discovery based on scope',
    ],
    payment: 'Monthly retainer. Discovery required before scoping. Milestone-based minimum.',
    guarantee: false,
    cta: 'Request a proposal',
    ctaHref: '/contact',
  },
];

/* ─── Tier card ─────────────────────────────────────────────────────── */
type Tier = (typeof coreServices)[0] | (typeof segmentBTiers)[0];

function TierCard({ tier, suggested, dark }: { tier: Tier; suggested: boolean; dark: boolean }) {
  return (
    <div className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 ${
      tier.highlight
        ? 'bg-[#219EBC] border-[#219EBC] shadow-xl'
        : dark
        ? 'bg-white/5 border-white/10 hover:border-[#219EBC]/40'
        : 'bg-[#F8F9FA] border-[#8ECAE6]/40 hover:border-[#219EBC]/40 hover:shadow-md'
    } ${suggested ? 'ring-2 ring-green-500' : ''}`}>

      {tier.badge && (
        <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
          tier.highlight ? 'bg-[#FFB703] text-[#023047]' : 'bg-[#FFB703] text-[#023047]'
        }`}>
          {tier.badge}
        </div>
      )}
      {suggested && (
        <div className="absolute -top-3 right-5 px-3 py-1 rounded-full bg-green-500 text-white text-xs font-bold">
          Suggested for you
        </div>
      )}

      <div className="mb-6">
        <div className={`text-xs font-bold uppercase tracking-widest mb-1 ${
          tier.highlight ? 'text-white/70' : dark ? 'text-[#219EBC]' : 'text-[#023047]'
        }`}>{tier.name}</div>
        {'subtitle' in tier && tier.subtitle && (
          <div className={`text-sm font-medium mb-2 ${
            tier.highlight ? 'text-white/80' : dark ? 'text-[#8ECAE6]' : 'text-[#023047]/70'
          }`}>{tier.subtitle}</div>
        )}
        <div className={`text-3xl font-bold ${tier.highlight || dark ? 'text-white' : 'text-[#023047]'}`}>{tier.price}</div>
        {tier.vat && (
          <div className={`text-sm mt-0.5 ${tier.highlight ? 'text-white/70' : dark ? 'text-[#8ECAE6]' : 'text-[#023047]/70'}`}>{tier.vat}</div>
        )}
        <p className={`text-sm mt-3 leading-relaxed ${tier.highlight ? 'text-white/80' : dark ? 'text-[#8ECAE6]/80' : 'text-[#023047]/70'}`}>{tier.tagline}</p>
      </div>

      <div className="flex-1 space-y-3 mb-8">
        {tier.includes.map((item) => (
          <div key={item} className="flex items-start gap-2.5">
            <CheckCircle2 size={15} className={`mt-0.5 flex-shrink-0 ${tier.highlight ? 'text-white/80' : 'text-[#219EBC]'}`} />
            <span className={`text-sm leading-snug ${
              tier.highlight ? 'text-white/85' : dark ? 'text-[#8ECAE6]' : 'text-[#023047]/70'
            }`}>{item}</span>
          </div>
        ))}
      </div>

      <div className={`text-xs leading-relaxed mb-6 pb-6 border-b ${
        tier.highlight ? 'text-white/60 border-white/20' : dark ? 'text-[#8ECAE6]/60 border-white/10' : 'text-[#023047]/70 border-[#8ECAE6]/30'
      }`}>{tier.payment}</div>

      {'guarantee' in tier && tier.guarantee && (
        <div className={`flex items-center gap-2 text-xs font-semibold mb-4 ${tier.highlight ? 'text-white' : 'text-[#219EBC]'}`}>
          <Shield size={13} className="flex-shrink-0" /> 3x Clarity Guarantee applies
        </div>
      )}

      <Link href={tier.ctaHref} className={`inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full font-semibold text-sm transition-colors ${
        tier.highlight
          ? 'bg-white text-[#219EBC] hover:bg-white/90'
          : 'bg-[#FFB703] text-[#023047] hover:bg-[#FB8500]'
      }`}>
        {tier.cta} <ArrowRight size={16} />
      </Link>
    </div>
  );
}

/* ─── Three-Tier Results ────────────────────────────────────────────── */
function ThreeTierResults({ size, suggestedId, onReset }: { size: string; suggestedId: string; onReset: () => void }) {
  const prices = tierPricesBySegment[size as keyof typeof tierPricesBySegment] ?? tierPricesBySegment.small;

  return (
    <section className="py-20 lg:py-28 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-4">
            <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">— The Three-Tier Engagement Model</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#023047] mb-3">Choose your depth of involvement</h2>
          <p className="text-[#023047]/70 max-w-xl mx-auto text-lg">Each tier includes everything in the tier below it. Start at Clarity — or go straight to Deliver or Transform if you already know the scope.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {threeTierItems.map((tier) => {
            const isRecommended = tier.id === suggestedId;
            const priceData = prices[tier.id as keyof typeof prices];
            return (
              <div key={tier.id} className={`relative flex flex-col rounded-2xl border p-8 transition-all ${
                isRecommended
                  ? 'bg-[#219EBC] border-[#219EBC] shadow-xl'
                  : 'bg-white border-[#8ECAE6]/40 hover:border-[#219EBC]/40 hover:shadow-md'
              }`}>
                {isRecommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#FFB703] text-[#023047] text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                    Recommended for you
                  </div>
                )}
                <div className="mb-6">
                  <div className={`text-xs font-bold uppercase tracking-widest mb-1 ${isRecommended ? 'text-white/70' : 'text-[#219EBC]'}`}>{tier.tier}</div>
                  <div className={`text-xl font-bold mb-3 ${isRecommended ? 'text-white' : 'text-[#023047]'}`}>{tier.name}</div>
                  <div className={`text-3xl font-bold ${isRecommended ? 'text-white' : 'text-[#023047]'}`}>{priceData.price}</div>
                  <div className={`text-sm mt-0.5 ${isRecommended ? 'text-white/70' : 'text-[#023047]/60'}`}>{priceData.note}</div>
                </div>

                <div className="flex-1 space-y-2.5 mb-8">
                  {tier.includes.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className={`mt-0.5 flex-shrink-0 ${isRecommended ? 'text-white/80' : 'text-[#219EBC]'}`} />
                      <span className={`text-sm leading-snug ${item.startsWith('Everything in') ? 'font-semibold' : ''} ${
                        isRecommended ? 'text-white/85' : 'text-[#023047]/70'
                      }`}>{item}</span>
                    </div>
                  ))}
                </div>

                <div className={`text-xs leading-relaxed mb-6 pb-6 border-b ${
                  isRecommended ? 'text-white/60 border-white/20' : 'text-[#023047]/60 border-[#8ECAE6]/30'
                }`}>{tier.payment}</div>

                {tier.guarantee && (
                  <div className={`flex items-center gap-2 text-xs font-semibold mb-4 ${isRecommended ? 'text-white' : 'text-[#219EBC]'}`}>
                    <Shield size={13} className="flex-shrink-0" /> 3× Clarity Guarantee applies
                  </div>
                )}

                <Link href={tier.ctaHref} className={`inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full font-semibold text-sm transition-colors ${
                  isRecommended
                    ? 'bg-white text-[#219EBC] hover:bg-white/90'
                    : 'bg-[#FFB703] text-[#023047] hover:bg-[#FB8500]'
                }`}>
                  {tier.cta} <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>

        {suggestedId === 'clarity' && (
          <div className="rounded-2xl bg-[#023047] p-8 lg:p-10 max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#219EBC]/20 border border-[#219EBC]/30 mb-4">
              <span className="text-xs font-semibold text-[#8ECAE6] tracking-wider uppercase">— Money-back guarantee</span>
            </div>
            <blockquote className="text-xl font-medium text-white leading-relaxed">
              &ldquo;If after reading the report you do not believe it has identified at least three times the value of the fee in recoverable cost or lost revenue — the fee is refunded in full. No conditions. No questions asked.&rdquo;
            </blockquote>
          </div>
        )}

        <div className="text-center">
          <button onClick={onReset} className="text-sm text-[#219EBC] hover:text-[#023047] underline transition-colors font-medium">
            Answer the questions again
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─── Service connection flow ──────────────────────────────────────── */
function ServiceFlow() {
  const steps = ['Clarity', 'Deliver', 'Transform', 'Retained'];
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-2">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#023047]/10 border border-[#023047]/20 text-sm font-semibold text-[#023047]">
            {step}
          </span>
          {i < steps.length - 1 && (
            <ArrowRight size={16} className="text-[#219EBC] flex-shrink-0" />
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── Indicative pricing table — 4 segments ────────────────────────── */
const pricingRanges = [
  { service: 'Clarity', sub: 'Fixed fee', micro: 'Clarity Check £395', small: '£2,500–£3,500', mid: '£5,000–£8,000', growth: '£8,000–£12,000' },
  { service: 'Deliver', sub: 'Monthly retainer', micro: '—', small: '£1,050–£1,200/mo', mid: '£1,200–£1,800/mo', growth: '£1,800–£2,500/mo' },
  { service: 'Transform', sub: 'Monthly retainer', micro: '—', small: '£1,500–£2,200/mo', mid: '£2,200–£3,200/mo', growth: '£3,200–£5,000+/mo' },
  { service: 'Retained', sub: 'Monthly retainer', micro: 'From £395/mo', small: 'From £1,440/mo', mid: '£1,440–£2,880/mo', growth: '£2,880–£5,760+/mo' },
];

function PricingTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b-2 border-[#8ECAE6]/40">
            <th className="py-4 pr-4 text-sm font-bold text-[#023047]">Service</th>
            <th className="py-4 px-4 text-sm font-bold text-[#023047]">Type</th>
            <th className="py-4 px-4 text-sm font-bold text-[#023047] text-center">Micro<br/><span className="font-normal text-[#023047]/60">under £500k</span></th>
            <th className="py-4 px-4 text-sm font-bold text-[#023047] text-center">Small<br/><span className="font-normal text-[#023047]/60">£500k–£2m</span></th>
            <th className="py-4 px-4 text-sm font-bold text-[#023047] text-center">Mid<br/><span className="font-normal text-[#023047]/60">£2m–£7.5m</span></th>
            <th className="py-4 pl-4 text-sm font-bold text-[#023047] text-center">Growth<br/><span className="font-normal text-[#023047]/60">£7.5m+</span></th>
          </tr>
        </thead>
        <tbody>
          {pricingRanges.map((row, i) => (
            <tr key={`${row.service}-${row.sub}`} className={i < pricingRanges.length - 1 ? 'border-b border-[#8ECAE6]/20' : ''}>
              <td className="py-4 pr-4 text-sm font-semibold text-[#023047]">{row.service}</td>
              <td className="py-4 px-4 text-sm text-[#023047]/70">{row.sub}</td>
              <td className="py-4 px-4 text-sm text-[#023047]/70 text-center">{row.micro}</td>
              <td className="py-4 px-4 text-sm text-[#023047]/70 text-center">{row.small}</td>
              <td className="py-4 px-4 text-sm text-[#023047]/70 text-center">{row.mid}</td>
              <td className="py-4 pl-4 text-sm text-[#023047]/70 text-center">{row.growth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────── */
export default function PricingPage() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [step, setStep] = useState(0);
  const [complete, setComplete] = useState(false);

  const currentQuestion = questions[step];
  const suggestedServiceId = complete ? getSuggestedServiceId(answers) : null;

  function handleAnswer(value: string) {
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setComplete(true);
    }
  }

  function reset() {
    setAnswers({});
    setStep(0);
    setComplete(false);
  }

  const suggestedTier = suggestedServiceId ? allTiers.find(t => t.id === suggestedServiceId) : null;
  const isSegmentB = suggestedServiceId ? ['remote-clarity', 'ai-check', 'monthly', 'sprint'].includes(suggestedServiceId) : false;

  return (
    <>
      {/* HERO */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-4">
            <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">— Pricing</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#023047] mb-4">
            Find the right engagement
          </h1>
          <p className="text-lg text-[#023047]/70 max-w-2xl mx-auto">
            Two quick questions and we&apos;ll point you to the most relevant option. No VAT — Craig is not VAT registered.
          </p>
        </div>
      </section>

      {/* QUESTIONNAIRE */}
      <section className="py-16 bg-[#023047]">
        <div className="max-w-2xl mx-auto px-6">
          {!complete ? (
            <>
              {/* Progress bar */}
              <div className="flex items-center gap-2 mb-10">
                {questions.map((_, i) => (
                  <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${i <= step ? 'bg-[#219EBC]' : 'bg-white/20'}`} />
                ))}
              </div>
              <div className="text-xs font-semibold text-[#8ECAE6] uppercase tracking-wider mb-3">
                Question {step + 1} of {questions.length}
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">{currentQuestion.text}</h2>
              {currentQuestion.sub && (
                <p className="text-[#8ECAE6] text-sm mb-8">{currentQuestion.sub}</p>
              )}
              <div className="space-y-3">
                {currentQuestion.options.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => handleAnswer(opt.value)}
                    className="w-full text-left flex items-start justify-between gap-4 p-5 rounded-xl border border-white/15 bg-white/5 hover:bg-[#219EBC]/20 hover:border-[#219EBC]/50 transition-all duration-200 group"
                  >
                    <div>
                      <span className="text-white font-medium block">{opt.label}</span>
                      {'detail' in opt && opt.detail && (
                        <span className="text-[#8ECAE6]/70 text-sm mt-1 block">{opt.detail}</span>
                      )}
                    </div>
                    <ChevronRight size={18} className="text-[#8ECAE6] group-hover:text-[#219EBC] flex-shrink-0 transition-colors mt-0.5" />
                  </button>
                ))}
              </div>
              {step > 0 && (
                <button onClick={() => setStep(step - 1)} className="mt-6 text-sm text-[#8ECAE6] hover:text-white transition-colors" aria-label="Go back to previous question">
                  ← Back
                </button>
              )}
            </>
          ) : (
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/30 mb-4">
                <span className="text-xs font-semibold text-green-400 tracking-wider uppercase">— Results ready</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                We recommend: <span className="text-[#219EBC]">{suggestedTier?.name}</span>
              </h2>
              <p className="text-[#8ECAE6] mb-6">
                Scroll down to see the pricing and what's included.
              </p>
              <button onClick={reset} className="text-sm text-[#8ECAE6] hover:text-white underline transition-colors" aria-label="Start the questionnaire again">
                Start again
              </button>
            </div>
          )}
        </div>
      </section>

      {/* RESULTS — shown after questionnaire complete */}
      {complete && suggestedServiceId && (
        isSegmentB || suggestedServiceId === 'retained' ? (
          <section className="py-20 lg:py-28 bg-[#F8F9FA]">
            <div className="max-w-2xl mx-auto px-6 lg:px-8">
              {suggestedTier && <TierCard tier={suggestedTier} suggested={false} dark={false} />}
              <div className="mt-10 text-center">
                <button onClick={reset} className="text-sm text-[#219EBC] hover:text-[#023047] underline transition-colors font-medium">
                  Answer the questions again
                </button>
              </div>
            </div>
          </section>
        ) : (
          <ThreeTierResults size={answers.size} suggestedId={suggestedServiceId} onReset={reset} />
        )
      )}

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-6">
            <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">— Common questions</span>
          </div>
          <h2 className="text-3xl font-bold text-[#023047] mb-10">Pricing questions answered</h2>
          <div className="space-y-8">
            {[
              { q: 'Is VAT charged on top of these prices?', a: 'No. Craig is not VAT registered. The prices shown are the prices you pay — nothing added on top.' },
              { q: 'Can I just get the Clarity audit without committing to more?', a: "Yes. Clarity is fully standalone. There's no obligation to proceed to Deliver, Transform, or Retained. Many clients use the report as the basis for going to market themselves." },
              { q: 'Do the fees include vendor and software costs?', a: "No. All prices shown are Craig's fees only. Vendor, software, and third-party implementation costs are separate — confirmed with formal quotes once the brief has been written, before any commitment is made. They cannot be known before that point, and quoting them before a brief exists would be guesswork." },
              { q: 'Is travel included in the price?', a: 'For Core Services engagements (on-site), travel expenses are charged at cost and agreed in advance. Small Business services are fully remote — no travel costs at all.' },
              { q: "What's the difference between Deliver and Transform?", a: "Deliver is for a defined project — vendor selection, management, and implementation oversight for a single workstream. Transform is for multi-workstream programmes (ERP + eCommerce + process redesign) that require discovery, change management, and milestone governance across the business." },
              { q: 'What does Retained actually look like in practice?', a: "You get defined days per month with Craig — agreed in advance. That typically includes attending leadership meetings, owning specific projects or workstreams, managing vendors, and coaching your team. It's a fractional CTO or Head of Operations role. No junior handoff." },
              { q: 'Do you work outside the print and promotional sector?', a: "The core expertise is in print, decoration, workwear, and promotional products. That's where the fastest impact tends to be. But the operational and technology skills transfer — get in touch if you're unsure." },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-[#8ECAE6]/30 pb-8">
                <div className="text-lg font-semibold text-[#023047] mb-3">{q}</div>
                <div className="text-[#023047]/65 leading-relaxed">{a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#023047]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Still not sure? Let&apos;s talk.</h2>
          <p className="text-[#8ECAE6] text-lg max-w-xl mx-auto mb-8">
            The discovery call is free and takes 60 minutes. No pitch. No obligation. Just an honest conversation about whether any of this makes sense for your situation.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
            Book a free discovery call <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
