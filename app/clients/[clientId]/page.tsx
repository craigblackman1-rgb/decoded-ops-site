'use client';

'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
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
import { cobraWorkwearProposal } from './data/cobra-workwear-proposal';
import { hanicksProposal } from './data/hanicks-proposal';

const proposals: Record<string, any> = {
  tacklebag: tacklebagProposal,
  'cobra-workwear': cobraWorkwearProposal,
  hanicks: hanicksProposal,
};

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
      <div className="text-lg font-bold tracking-tight">
        <span className="text-[#F8F9FA]">Decoded</span><span className="text-[#FFB703]">Ops</span>
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
  const params = useParams();
  const clientId = (params.clientId as string) || 'tacklebag';
  const proposal = proposals[clientId];
  const [isUnlocked, setIsUnlocked] = useState(false);

  if (!proposal) {
    return (
      <main className="min-h-screen bg-[#023047] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-black text-white mb-2">Proposal not found</h1>
          <p className="text-sm text-[rgba(255,255,255,0.5)]">
            No proposal exists for "{clientId}".
          </p>
        </div>
      </main>
    );
  }

  return (
    <>
      <AccessGate
        accessCode={proposal.accessCode}
        clientName={proposal.client.name}
        clientId={clientId}
        onUnlock={() => setIsUnlocked(true)}
      />

      {isUnlocked && (
        <>
          <ProposalNav />
          <div>
            <div id="hero">
              <ProposalHero
                tag={proposal.hero.tag}
                title={proposal.hero.title}
                subtitle={proposal.hero.subtitle}
                stats={proposal.hero.stats}
              />
            </div>

            <div id="challenge">
              <ChallengeSection data={proposal.challenge} systems={proposal.systems} />
            </div>

            <div id="journey">
              <JourneySection data={proposal.journey} />
            </div>

            <div id="roadmap">
              <RoadmapSection data={proposal.roadmap} />
            </div>

            <div id="quickwins">
              <QuickWinsSection wins={proposal.quickWins} section={proposal.quickWinsSection} />
            </div>

            {proposal.demo && (
              <div id="demo">
                <DemoSection data={proposal.demo} />
              </div>
            )}

            <div id="why">
              <WhySection data={proposal.why} />
            </div>

            <div id="investment">
              <PricingSection data={proposal.pricing} />
            </div>

            <div id="nextsteps">
              <NextStepsSection data={proposal.nextSteps} />
            </div>

            <div id="accept">
              <AcceptanceSection data={proposal.acceptance} />
            </div>

            <footer className="bg-[#023047] px-20 py-8 flex justify-between items-center border-t border-[rgba(255,255,255,0.06)] flex-wrap gap-3">
              <div className="text-lg font-bold tracking-tight">
                <span className="text-[#F8F9FA]">Decoded</span><span className="text-[#FFB703]">Ops</span>
              </div>
              <div className="text-xs text-[rgba(255,255,255,0.3)]">
                Prepared exclusively for {proposal.client.company || proposal.client.name} · May 2026 · Confidential
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
