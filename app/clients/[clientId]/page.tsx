'use client';

import { useState, useEffect } from 'react';
import AccessGate from './components/AccessGate';
import ProposalHero from './components/ProposalHero';
import ChallengeSection from './components/ChallengeSection';
import JourneySection from './components/JourneySection';
import RoadmapSection from './components/RoadmapSection';
import QuickWinsSection from './components/QuickWinsSection';
import DemoSection from './components/DemoSection';
import WhySection from './components/WhySection';
import PricingSection from './components/PricingSection';
import NextStepsSection from './components/NextStepsSection';
import AcceptanceSection from './components/AcceptanceSection';
import { tacklebagProposal } from './data/tacklebag-proposal';

function ProposalNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] px-10 py-4 flex justify-between items-center transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(2,48,71,0.95)] backdrop-blur-md border-b border-[rgba(33,158,188,0.2)]'
          : 'bg-transparent'
      }`}
    >
      <div className="text-xs font-bold tracking-widest text-[#8ECAE6] uppercase">
        Decoded Ops
      </div>
      <div className="hidden md:flex gap-7">
        {[
          ['#challenge', 'Challenge'],
          ['#roadmap', 'Roadmap'],
          ['#demo', 'Stock App'],
          ['#investment', 'Investment'],
          ['#accept', 'Accept'],
        ].map(([href, label]) => (
          <a
            key={href}
            href={href}
            className="text-xs font-medium text-[rgba(255,255,255,0.6)] hover:text-[#FFB703] transition-colors tracking-wide"
          >
            {label}
          </a>
        ))}
      </div>
      <a
        href="#accept"
        className="px-5 py-2 bg-[#219EBC] hover:bg-[#1a7d97] text-white text-xs font-bold rounded-md transition-colors"
      >
        Start Phase 1 →
      </a>
    </nav>
  );
}

export default function ProposalPage() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <>
      <AccessGate
        accessCode={tacklebagProposal.accessCode}
        onUnlock={() => setIsUnlocked(true)}
      />

      {isUnlocked && (
        <>
          <ProposalNav />
          <div>
            <div id="hero">
              <ProposalHero
                tag={tacklebagProposal.hero.tag}
                title={tacklebagProposal.hero.title}
                subtitle={tacklebagProposal.hero.subtitle}
                stats={tacklebagProposal.hero.stats}
              />
            </div>

            <div id="challenge">
              <ChallengeSection data={tacklebagProposal.challenge} />
            </div>

            <div id="journey">
              <JourneySection data={tacklebagProposal.journey} />
            </div>

            <div id="roadmap">
              <RoadmapSection data={tacklebagProposal.roadmap} />
            </div>

            <div id="quickwins">
              <QuickWinsSection wins={tacklebagProposal.quickWins} />
            </div>

            <div id="demo">
              <DemoSection data={tacklebagProposal.demo} />
            </div>

            <div id="why">
              <WhySection data={tacklebagProposal.why} />
            </div>

            <div id="investment">
              <PricingSection data={tacklebagProposal.pricing} />
            </div>

            <div id="nextsteps">
              <NextStepsSection data={tacklebagProposal.nextSteps} />
            </div>

            <div id="accept">
              <AcceptanceSection data={tacklebagProposal.acceptance} />
            </div>

            {/* Footer — matches HTML footer exactly */}
            <footer className="bg-[#023047] px-20 py-8 flex justify-between items-center border-t border-[rgba(255,255,255,0.06)] flex-wrap gap-3">
              <div className="text-xs font-bold tracking-widest text-[#8ECAE6] uppercase">
                Decoded Ops
              </div>
              <div className="text-xs text-[rgba(255,255,255,0.3)]">
                Prepared exclusively for TackleBag Ltd · May 2026 · Confidential
              </div>
              <div className="text-xs text-[rgba(255,255,255,0.3)]">
                craig@decodedops.co.uk · 07735 620 603
              </div>
            </footer>
          </div>
        </>
      )}
    </>
  );
}
