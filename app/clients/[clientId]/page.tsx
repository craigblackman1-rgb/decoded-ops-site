'use client';

import { useState } from 'react';
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

export default function ProposalPage() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <>
      <AccessGate
        accessCode={tacklebagProposal.accessCode}
        onUnlock={() => setIsUnlocked(true)}
      />

      {isUnlocked && (
        <div className="bg-[#010f17]">
          <ProposalHero
            tag={tacklebagProposal.hero.tag}
            title={tacklebagProposal.hero.title}
            subtitle={tacklebagProposal.hero.subtitle}
            stats={tacklebagProposal.hero.stats}
          />

          <ChallengeSection data={tacklebagProposal.challenge} />

          <JourneySection data={tacklebagProposal.journey} />

          <RoadmapSection data={tacklebagProposal.roadmap} />

          <QuickWinsSection wins={tacklebagProposal.quickWins} />

          <DemoSection data={tacklebagProposal.demo} />

          <WhySection data={tacklebagProposal.why} />

          <PricingSection data={tacklebagProposal.pricing} />

          <NextStepsSection data={tacklebagProposal.nextSteps} />

          <AcceptanceSection data={tacklebagProposal.acceptance} />

          {/* Footer */}
          <footer className="bg-[#023047] border-t border-[rgba(33,158,188,0.2)] px-8 py-8 md:px-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
              <div className="font-bold tracking-widest text-[#8ECAE6]">DECODED OPS</div>
              <div className="text-[rgba(255,255,255,0.5)]">
                Prepared exclusively for TackleBag Ltd · May 2026 · Confidential
              </div>
              <div className="text-[rgba(255,255,255,0.5)]">
                craig@decodedops.co.uk · 07735 620 603
              </div>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}
