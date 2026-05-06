'use client';

import { useState } from 'react';

interface QuickWin {
  num: number;
  title: string;
  category: string;
  what: string;
  impact: string;
  carries: string;
}

const categoryColors: Record<string, string> = {
  Risk: 'bg-[rgba(198,40,40,0.15)] border-[#C62828]',
  Operations: 'bg-[rgba(251,133,0,0.15)] border-[#FB8500]',
  Growth: 'bg-[rgba(27,94,32,0.2)] border-[#4ade80]',
  Efficiency: 'bg-[rgba(2,48,71,0.9)] border-[#8ECAE6]',
  Foundation: 'bg-[rgba(255,183,3,0.12)] border-[#FFB703]',
};

const categoryBg: Record<string, string> = {
  Risk: 'text-[#C62828]',
  Operations: 'text-[#FB8500]',
  Growth: 'text-[#4ade80]',
  Efficiency: 'text-[#8ECAE6]',
  Foundation: 'text-[#FFB703]',
};

export default function QuickWinsSection({ wins }: { wins: QuickWin[] }) {
  const [openCards, setOpenCards] = useState<number[]>([]);

  const toggleCard = (num: number) => {
    setOpenCards((prev) =>
      prev.includes(num) ? prev.filter((n) => n !== num) : [...prev, num]
    );
  };

  return (
    <section className="bg-[#010f17] text-white px-8 py-20 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="text-xs font-bold tracking-widest text-[#FFB703] uppercase mb-3">
            Phase 1 Detail
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            Eight fixes.<br />Six weeks.<br />Before peak season.
          </h2>
          <p className="text-lg text-[rgba(255,255,255,0.6)] max-w-2xl">
            Each quick win solves a real problem identified in the Clarity audit and carries cleanly into the ERP when it arrives. Nothing here is throwaway work.
          </p>
        </div>

        {/* Quick Wins Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {wins.map((win) => (
            <div
              key={win.num}
              className={`rounded-2xl overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                categoryColors[win.category] || ''
              }`}
              onClick={() => toggleCard(win.num)}
            >
              {/* Header */}
              <div className="p-6 flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FFB703] flex items-center justify-center text-[#023047] font-black flex-shrink-0">
                    {win.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-base">{win.title}</h3>
                  </div>
                </div>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${
                    openCards.includes(win.num) ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>

              {/* Body - Collapsible */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openCards.includes(win.num) ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 space-y-4 bg-[rgba(255,255,255,0.03)]">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-[rgba(255,255,255,0.6)] mb-2">
                      What
                    </div>
                    <p className="text-sm text-[rgba(255,255,255,0.7)]">{win.what}</p>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-[#219EBC] mb-2">
                      Impact
                    </div>
                    <p className="text-sm text-[#8ECAE6]">{win.impact}</p>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-[#4ade80] mb-2">
                      Carries Forward
                    </div>
                    <p className="text-sm text-[#86efac]">{win.carries}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
