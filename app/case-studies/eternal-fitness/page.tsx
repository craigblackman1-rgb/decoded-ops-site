import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';

// Target keyword: "ai training plan tool" (secondary: "eternal fitness decoded ops")
export const metadata = {
  title: 'Eternal Fitness — Full Site Build & AI Training Tool | Decoded Ops',
  description: 'Technical lead on a full site rebuild and an AI-assisted training plan tool for Eternal Fitness, a 1-to-1 personal training studio for clinical populations.',
  alternates: { canonical: '/case-studies/eternal-fitness' },
  openGraph: {
    type: 'article',
    title: 'Eternal Fitness — Full Site Build & AI Training Tool | Decoded Ops',
    description: 'Technical lead on a full site rebuild and an AI-assisted training plan tool.',
    url: 'https://decodedops.co.uk/case-studies/eternal-fitness',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eternal Fitness — Full Site Build & AI Training Tool | Decoded Ops',
    description: 'Technical lead on a full site rebuild and an AI-assisted training plan tool.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Eternal Fitness — Full Site Build and AI Training Tool',
      description: 'Technical lead on a full site rebuild and an AI-assisted training plan tool for Eternal Fitness, a 1-to-1 personal training studio for clinical populations.',
      author: { '@type': 'Person', name: 'Craig Blackman' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops' },
      url: 'https://decodedops.co.uk/case-studies/eternal-fitness',
    },
  ],
};

export default function EternalFitnessCaseStudyPage() {
  return (
    <main>
      <JsonLd data={schema} />
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-6">
            <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">— In Build · Health &amp; Fitness</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#023047] leading-tight mb-6">
            Eternal Fitness: technical lead for a clinical-population training studio
          </h1>
          <p className="text-lg text-[#023047]/70 leading-relaxed">
            Eternal Fitness is a private, 1-to-1 personal training studio working mainly with clients managing health conditions, not a general weight-loss audience. I'm technical lead on the website rebuild and the tooling behind it, working alongside Esther Fair, the studio's Level 4 PT and clinical lead.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">

          <h2 className="text-2xl font-bold text-[#023047] mb-4">The problem</h2>
          <p className="text-[#023047]/80 leading-relaxed mb-8">
            A studio working with clinical populations needs a site and a set of tools that reflect that seriously, not generic fitness-marketing language or before-and-after framing. Training plans for clients managing health conditions can't be templated the usual way either. They need to be built around confirmed studio equipment and each client's specific situation, with Esther approving every plan and every piece of client-facing content.
          </p>

          <h2 className="text-2xl font-bold text-[#023047] mb-4">What I'm building</h2>
          <div className="space-y-4 mb-8">
            {[
              'A full site rebuild that reflects clinical framing rather than fitness-marketing convention — no "transformation," no before-and-after, no crush-it language',
              'A training plan tool that generates session plans against a confirmed equipment list and each client\'s condition, with Esther reviewing and approving every output',
              'Brand and tooling consistency across the site and the training plan output, so the two don\'t drift apart over time',
              'A technical foundation Esther can rely on without needing to manage it herself — she owns the clinical and brand decisions, I own the build',
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <CheckCircle2 size={20} className="flex-shrink-0 mt-1 text-[#219EBC]" />
                <p className="text-[#023047]/80 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-2xl bg-[#219EBC]/10 border border-[#219EBC]/25 mb-8">
            <h3 className="text-lg font-bold text-[#023047] mb-3">Why the AI tool doesn't replace the trainer</h3>
            <p className="text-[#023047]/80 leading-relaxed">
              The training plan tool speeds up building a first draft against real constraints. It doesn't decide what's safe for a client managing a health condition. Esther does. That's the same principle behind every AI-adjacent piece of work I do: the tool handles the groundwork, the person with the actual expertise makes the call.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#023047] mb-4">Status</h2>
          <p className="text-[#023047]/80 leading-relaxed mb-8">
            In build. Site rebuild and training plan tool are both in progress, working toward a scheduled launch.
          </p>

          <div className="p-8 rounded-2xl bg-[#023047]">
            <h3 className="text-lg font-bold text-[#F8F9FA] mb-3">Building something similar?</h3>
            <p className="text-[#8ECAE6] leading-relaxed mb-6">
              If you need a technical lead who'll build the tool without pretending it replaces the expert, get in touch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
                Book a free discovery call <ArrowRight size={18} />
              </Link>
              <Link href="/case-studies" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#219EBC] text-[#219EBC] font-semibold hover:bg-[#219EBC]/10 transition-colors">
                See other client work
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
