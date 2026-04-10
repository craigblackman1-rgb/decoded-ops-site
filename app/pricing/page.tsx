'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, CheckCircle2, Shield, ChevronRight } from 'lucide-react';

/* ─── Segment A tiers ───────────────────────────────────────────────── */
const segmentATiers = [
  {
    id: 'diagnose',
    name: 'Diagnose',
    price: 'From £2,500',
    vat: '+ VAT',
    tagline: 'Audit & written report. Standalone.',
    badge: null as string | null,
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
    badge: 'Most popular' as string | null,
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
    badge: null as string | null,
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
    price: '£350',
    vat: '/month + VAT',
    tagline: 'Standing monthly support. Remote.',
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
    price: '£995',
    vat: '+ VAT',
    tagline: 'One focused project. 90 days.',
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

/* ─── Questionnaire ─────────────────────────────────────────────────── */
const questions = [
  {
    id: 'size',
    text: 'How would you describe your business?',
    options: [
      { label: 'SME or established business (10+ staff)', value: 'sme' },
      { label: 'Small business or sole trader (under 10 staff)', value: 'small' },
    ],
  },
  {
    id: 'challenge',
    text: 'What best describes your current challenge?',
    options: [
      { label: "My systems and processes aren't working properly", value: 'systems' },
      { label: 'I want to understand what AI could do for my business', value: 'ai' },
      { label: 'I need help choosing or implementing software', value: 'software' },
      { label: "I'm not sure — I just know something needs to change", value: 'unsure' },
    ],
  },
  {
    id: 'involvement',
    text: 'What level of involvement are you looking for?',
    options: [
      { label: 'A one-off review or report — standalone deliverable', value: 'oneoff' },
      { label: 'Ongoing support over several months', value: 'ongoing' },
      { label: 'Full implementation oversight — someone to drive it', value: 'full' },
    ],
  },
  {
    id: 'budget',
    text: 'What budget range are you working with?',
    options: [
      { label: 'Under £500', value: 'low' },
      { label: '£500 – £5,000', value: 'mid' },
      { label: '£5,000+', value: 'high' },
    ],
  },
];

function getSuggestedTierId(answers: Record<string, string>): string {
  const { size, involvement, budget } = answers;
  if (size === 'small' || budget === 'low') {
    if (involvement === 'ongoing') return 'monthly';
    if (involvement === 'full') return 'sprint';
    return 'ai-check';
  }
  if (involvement === 'full' || budget === 'high') return 'deliver';
  if (involvement === 'ongoing') return 'advise';
  return 'diagnose';
}

const allTiers = [...segmentATiers, ...segmentBTiers];

/* ─── Tier card ─────────────────────────────────────────────────────── */
type Tier = typeof segmentATiers[0] | typeof segmentBTiers[0];

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
          ✓ Suggested for you
        </div>
      )}

      <div className="mb-6">
        <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${
          tier.highlight ? 'text-white/70' : dark ? 'text-[#219EBC]' : 'text-[#023047]'
        }`}>{tier.name}</div>
        <div className={`text-3xl font-bold ${tier.highlight || dark ? 'text-white' : 'text-[#023047]'}`}>{tier.price}</div>
        <div className={`text-sm mt-0.5 ${tier.highlight ? 'text-white/70' : dark ? 'text-[#8ECAE6]' : 'text-[#023047]/70'}`}>{tier.vat}</div>
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
          <Shield size={13} className="flex-shrink-0" /> 3× Clarity Guarantee applies
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

/* ─── Page ──────────────────────────────────────────────────────────── */
export default function PricingPage() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [step, setStep] = useState(0);
  const [complete, setComplete] = useState(false);

  const currentQuestion = questions[step];
  const suggestedTierId = complete ? getSuggestedTierId(answers) : null;

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

  const suggestedTier = suggestedTierId ? allTiers.find(t => t.id === suggestedTierId) : null;
  const isSegmentB = suggestedTierId ? ['ai-check', 'monthly', 'sprint'].includes(suggestedTierId) : false;

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
            Answer four quick questions and we&apos;ll point you to the most relevant option for your business.
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
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8">{currentQuestion.text}</h2>
              <div className="space-y-3">
                {currentQuestion.options.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => handleAnswer(opt.value)}
                    className="w-full text-left flex items-center justify-between gap-4 p-5 rounded-xl border border-white/15 bg-white/5 hover:bg-[#219EBC]/20 hover:border-[#219EBC]/50 transition-all duration-200 group"
                  >
                    <span className="text-white font-medium">{opt.label}</span>
                    <ChevronRight size={18} className="text-[#8ECAE6] group-hover:text-[#219EBC] flex-shrink-0 transition-colors" />
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
                We suggest: <span className="text-[#219EBC]">{suggestedTier?.name}</span>
              </h2>
              <p className="text-[#8ECAE6] mb-6">
                {isSegmentB ? 'From the Small Business offer.' : 'From the Core Offer.'} All options are shown below — yours is highlighted in green.
              </p>
              <button onClick={reset} className="text-sm text-[#8ECAE6] hover:text-white underline transition-colors" aria-label="Start the questionnaire again">
                Start again
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SEGMENT A — only shown after questionnaire complete */}
      {complete && (
      <section className="py-20 lg:py-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-3">
              <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">— Segment A · For established businesses</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#023047] mb-2">Core Offer</h2>
            <p className="text-[#023047]/70 text-lg">On-site. Independent. Sector-specific. From audit through to full implementation oversight.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {segmentATiers.map(tier => (
              <TierCard key={tier.id} tier={tier} suggested={tier.id === suggestedTierId} dark={false} />
            ))}
          </div>
          {/* Guarantee */}
          <div className="rounded-2xl bg-[#023047] p-8 lg:p-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#219EBC]/20 border border-[#219EBC]/30 mb-4">
              <span className="text-xs font-semibold text-[#8ECAE6] tracking-wider uppercase">— The 3× Clarity Guarantee</span>
            </div>
            <blockquote className="text-xl font-medium text-white leading-relaxed mb-4">
              &ldquo;If after reading the report you do not believe it has identified at least three times the value of the fee in recoverable cost or lost revenue — the fee is refunded in full. No conditions. No questions asked.&rdquo;
            </blockquote>
            <p className="text-sm text-[#8ECAE6]">Applies to Diagnose and Advise tiers.</p>
          </div>
        </div>
      </section>
      )}

      {/* SEGMENT B — only shown after questionnaire complete */}
      {complete && (
      <section className="py-20 lg:py-28 bg-[#023047]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#219EBC]/20 border border-[#219EBC]/30 mb-3">
              <span className="text-xs font-semibold text-[#8ECAE6] tracking-wider uppercase">— Segment B · Small Business</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">Small Business Offer</h2>
            <p className="text-[#8ECAE6] text-lg">Remote. Fixed scope. No travel costs. Built for owner-operators who need practical AI and technology guidance at an accessible price.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {segmentBTiers.map(tier => (
              <TierCard key={tier.id} tier={tier} suggested={tier.id === suggestedTierId} dark={true} />
            ))}
          </div>
        </div>
      </section>
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
              { q: 'Can I just get the Diagnose report without committing to more?', a: "Yes. Diagnose is fully standalone. There's no obligation to proceed to Advise or Deliver. Many clients use the report as the basis for going to market themselves." },
              { q: 'Is travel included in the price?', a: 'For Segment A engagements (on-site), travel expenses are charged at cost and agreed in advance. Segment B is fully remote — no travel costs at all.' },
              { q: "What's the difference between Advise and Deliver?", a: "Advise ends with a vendor recommendation. Deliver means I stay involved through implementation — owning the vendor relationship, running structured reviews, and signing off milestones on your behalf." },
              { q: 'Is the AI Readiness Check only for small businesses?', a: "It's priced for smaller businesses, but any business can book one. It's a good standalone starting point if you want an honest view of where AI could genuinely help before committing to a larger engagement." },
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
