import Link from 'next/link';
import { ReactNode } from 'react';
import { BOOKING_URL } from '@/lib/constants';
import { BreadcrumbSchema } from './BreadcrumbSchema';

interface ProblemPageDSProps {
  problem: string;
  headline: string;
  intro: string;
  heroGraphic?: ReactNode;
  symptoms: string[];
  causes: { title: string; body: string }[];
  howIHelp: string;
  /** Slug for breadcrumb URL (e.g. 'ai-paralysis') */
  slug?: string;
  /** Target service for the "Get this fixed" CTA, drives internal-linking topology */
  targetService?: { href: string; label: string; anchor: string };
  /** 2-4 sibling problem pages */
  relatedProblems?: { href: string; label: string }[];
  /** 1-3 related blog posts */
  relatedReading?: { href: string; label: string }[];
}

/**
 * DS-classed replacement for ProblemPage.tsx, built on ds-marketing.css
 * (bound by Lane 0) rather than hardcoded Tailwind colour utilities.
 * Pattern: hero / the problem stated / what it costs / cta, matching
 * problems-erp-implementation-failure.html's structure for this page type.
 *
 * Grid/flex layout scaffolding stays Tailwind (ds-marketing.css's own
 * convention: "page-specific layout stays in that page's own <style>",
 * Tailwind utility classes are this codebase's equivalent). Colour,
 * type, buttons, cards and grounds all come from ds-marketing.css classes.
 *
 * Deliberately a *new* component rather than a restyle of the old shared
 * ProblemPage.tsx, which has since been removed. /problems/wrong-erp-software
 * now uses its own inline JSX.
 */
export function ProblemPageDS({ problem, headline, intro, heroGraphic, symptoms, causes, howIHelp, slug, targetService, relatedProblems, relatedReading }: ProblemPageDSProps) {
  const parts = headline.split('||');

  return (
    <>
      {slug && (
        <BreadcrumbSchema items={[
          { name: 'Home', url: 'https://decodedops.co.uk/' },
          { name: 'Problems', url: 'https://decodedops.co.uk/problems' },
          { name: problem, url: `https://decodedops.co.uk/problems/${slug}` },
        ]} />
      )}

      {/* HERO */}
      <section className="g-off">
        <div className="wrap grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow">{problem}</span>
            <h1>
              {parts.map((part, i) =>
                i % 2 === 0 ? <span key={i}>{part}</span> : <em key={i}>{part}</em>
              )}
            </h1>
            <div className="hair" />
            <p className="lede">{intro}</p>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact">Talk about your situation</Link>
              <Link className="btn btn--outline" href="/clarity">See how the audit works</Link>
            </div>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="underline text-sm inline-block mt-3" style={{ color: 'var(--do-text-secondary)' }}>
              Or book a call directly
            </a>
          </div>
          {heroGraphic && (
            <div className="plate-frame" style={{ marginTop: 0 }}>
              {heroGraphic}
            </div>
          )}
        </div>
      </section>

      {/* THE PROBLEM STATED */}
      <section className="g-navy">
        <div className="wrap">
          <span className="eyebrow">Does this sound familiar?</span>
          <h2>The problem stated</h2>
          <div className="hair" />
          <div className="grid grid--2">
            {symptoms.map((s, i) => (
              <div className="card" key={i}>
                <p>{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IT COSTS */}
      <section className="g-tint">
        <div className="wrap">
          <span className="eyebrow">Why it happens</span>
          <h2>What it costs</h2>
          <div className="hair" />
          <p className="lede">Understanding why the problem exists is the first step to fixing it, and knowing whether you&apos;re looking at a system problem or a process problem changes everything.</p>
          <div className="grid grid--2">
            {causes.map((c, i) => (
              <article className="card" key={c.title}>
                <span className="kicker">{String(i + 1).padStart(2, '0')}</span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW I HELP / CTA */}
      <section className="g-white">
        <div className="wrap grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="eyebrow">How I help</span>
            <h2>What happens when you call</h2>
            <div className="hair" />
            <p className="lede">{howIHelp}</p>
          </div>
          <div className="card">
            <h3>Let&apos;s talk about what&apos;s happening</h3>
            <p>The first call is free. 60 minutes. No sales pitch, just a direct conversation about your situation.</p>
            <ul style={{ margin: '18px 0 26px', padding: 0, listStyle: 'none' }}>
              {['One day on site', 'Written report in 5 days', '3× Clarity Guarantee', 'No vendor agenda'].map(item => (
                <li key={item} style={{ fontSize: 'var(--do-text-sm)', color: 'color-mix(in srgb, var(--do-prussian-blue) 74%, transparent)', marginBottom: 8 }}>
                  {item}
                </li>
              ))}
            </ul>
            <div className="btn-row" style={{ margin: '0 0 12px' }}>
              <Link href="/contact" className="btn btn--primary" style={{ width: '100%' }}>Book a free call</Link>
            </div>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="underline text-sm text-center block" style={{ color: 'var(--do-text-secondary)' }}>
              Or book a call directly
            </a>
          </div>
        </div>
      </section>

      {/* GET THIS FIXED, service routing + related problems + further reading */}
      {(targetService || (relatedProblems && relatedProblems.length > 0) || (relatedReading && relatedReading.length > 0)) && (
        <section className="g-off">
          <div className="wrap">
            <div className="grid grid--3">
              {targetService && (
                <article className="card">
                  <span className="kicker">Get this fixed</span>
                  <h3>{targetService.label}</h3>
                  <p>{targetService.anchor}</p>
                  <Link href={targetService.href} className="btn btn--outline" style={{ marginTop: 12 }}>See how it works</Link>
                </article>
              )}
              {relatedProblems && relatedProblems.length > 0 && (
                <article className="card">
                  <span className="kicker">Related problems</span>
                  <h3>You might also have</h3>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                    {relatedProblems.map(p => (
                      <li key={p.href} style={{ marginBottom: 10 }}>
                        <Link href={p.href} className="underline" style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-primary)' }}>
                          {p.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              )}
              {relatedReading && relatedReading.length > 0 && (
                <article className="card">
                  <span className="kicker">Further reading</span>
                  <h3>From the blog</h3>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                    {relatedReading.map(p => (
                      <li key={p.href} style={{ marginBottom: 10 }}>
                        <Link href={p.href} className="underline" style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-primary)' }}>
                          {p.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
