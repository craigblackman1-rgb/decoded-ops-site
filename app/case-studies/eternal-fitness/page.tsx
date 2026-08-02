import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
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
    <>
      <style>{`.article-body{max-width:740px;margin:0 auto}`}</style>
      <main>
        <JsonLd data={schema} />
        <section className="g-off">
          <div className="wrap">
            <div className="article-body">
              <span className="eyebrow">In Build · Health &amp; Fitness</span>
              <h1>Eternal Fitness: technical lead for a clinical-population training studio</h1>
              <p className="lede">
                Eternal Fitness is a private, 1-to-1 personal training studio working mainly with clients managing health conditions, not a general weight-loss audience. I&apos;m technical lead on the website rebuild and the tooling behind it, working alongside Esther Fair, the studio&apos;s Level 4 PT and clinical lead.
              </p>
              <p style={{ fontSize: 'var(--do-text-sm)', color: 'color-mix(in srgb, var(--do-prussian-blue) 60%, transparent)', fontStyle: 'italic', marginTop: '12px' }}>
                Esther is my wife, named plainly. This is paid client work, not a favour or free build — she pays for it the same as anyone else. Which meant there was nowhere to hide if it did not work.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="article-body">

              <h2>The problem</h2>
              <p>
                A studio working with clinical populations needs a site and a set of tools that reflect that seriously, not generic fitness-marketing language or before-and-after framing. Training plans for clients managing health conditions can&apos;t be templated the usual way either. They need to be built around confirmed studio equipment and each client&apos;s specific situation, with Esther approving every plan and every piece of client-facing content.
              </p>

              <h2>What I&apos;m building</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                {[
                  'A full site rebuild that reflects clinical framing rather than fitness-marketing convention — no "transformation," no before-and-after, no crush-it language',
                  'A training plan tool that generates session plans against a confirmed equipment list and each client\'s condition, with Esther reviewing and approving every output',
                  'Brand and tooling consistency across the site and the training plan output, so the two don\'t drift apart over time',
                  'A technical foundation Esther can rely on without needing to manage it herself — she owns the clinical and brand decisions, I own the build',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={20} style={{ flexShrink: 0, marginTop: 1, color: 'var(--do-cerulean)' }} />
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <div style={{ padding: '32px', borderRadius: 'var(--do-radius-2xl)', background: 'color-mix(in srgb, var(--do-cerulean) 10%, transparent)', border: '1px solid color-mix(in srgb, var(--do-cerulean) 25%, transparent)', marginBottom: '32px' }}>
                <h3>Why the AI tool doesn&apos;t replace the trainer</h3>
                <p>
                  The training plan tool speeds up building a first draft against real constraints. It doesn&apos;t decide what&apos;s safe for a client managing a health condition. Esther does. That&apos;s the same principle behind every AI-adjacent piece of work I do: the tool handles the groundwork, the person with the actual expertise makes the call.
                </p>
              </div>

              <h2>Status</h2>
              <p style={{ marginBottom: '32px' }}>
                In build. Site rebuild and training plan tool are both in progress, working toward a scheduled launch.
              </p>

            </div>
          </div>
        </section>

        <section className="g-navy">
          <div className="wrap">
            <div className="article-body">
              <h3>Building something similar?</h3>
              <p className="lede">
                If you need a technical lead who&apos;ll build the tool without pretending it replaces the expert, get in touch.
              </p>
              <div className="btn-row">
                <Link href="/contact" className="btn btn--primary">
                  Book a free discovery call <ArrowRight size={18} />
                </Link>
                <Link href="/case-studies" className="btn btn--outline">
                  See other client work
                </Link>
              </div>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-muted-on-dark)', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>Or book a call directly <ArrowRight size={14} /></a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
