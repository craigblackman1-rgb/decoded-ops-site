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

interface SectionHeader {
  tag: string;
  title: string;
  subtitle: string;
}

// Matches HTML c1–c8 head background and border-bottom exactly
const CARD_HEAD_STYLES: Record<number, string> = {
  1: 'bg-[rgba(198,40,40,0.35)] border-b-2 border-[#C62828]',
  2: 'bg-[rgba(251,133,0,0.35)] border-b-2 border-[#FB8500]',
  3: 'bg-[rgba(27,94,32,0.35)] border-b-2 border-[#4ade80]',
  4: 'bg-[rgba(2,48,71,0.95)] border-b-2 border-[#8ECAE6]',
  5: 'bg-[rgba(255,183,3,0.25)] border-b-2 border-[#FFB703]',
  6: 'bg-[rgba(2,48,71,0.95)] border-b-2 border-[#FFB703]',
  7: 'bg-[rgba(2,48,71,0.95)] border-b-2 border-[#219EBC]',
  8: 'bg-[rgba(2,48,71,0.95)] border-b-2 border-[#4ade80]',
};

// TackleBag defaults — used when no section prop is supplied
const TACKLEBAG_SECTION: SectionHeader = {
  tag: 'Phase1 Detail',
  title: 'Eight fixes.\nSix weeks.\nBefore peak season.',
  subtitle: 'Each quick win solves a real problem identified in the Clarity audit and carries cleanly into the ERP when it arrives. Nothing here is throwaway work.',
};

export default function QuickWinsSection({ wins, section }: { wins: QuickWin[]; section?: SectionHeader }) {
  const s = section || TACKLEBAG_SECTION;
  const [openCards, setOpenCards] = useState<number[]>([]);

  const toggle = (num: number) =>
    setOpenCards((prev) =>
      prev.includes(num) ? prev.filter((n) => n !== num) : [...prev, num]
    );

  return (
     <section className="bg-[#010f17] text-white px-5 py-24 md:px-20">
      <div className="max-w-6xl mx-auto">
           <div className="mb-14">
           <div className="text-xs font-bold tracking-widest text-[#219EBC] uppercase mb-3">
             {s.tag}
           </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-4 leading-tight">
            {s.title.split('\n').map((line, i) => <div key={i}>{line}</div>)}
          </h2>
          <p className="text-base lg:text-lg text-[rgba(255,255,255,0.55)] max-w-2xl leading-relaxed">
            {s.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {wins.map((win) => {
            const isOpen = openCards.includes(win.num);
            const headStyle = CARD_HEAD_STYLES[win.num] || CARD_HEAD_STYLES[1];
            return (
              <div
                key={win.num}
                className="rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[rgba(0,0,0,0.4)]"
              >
                {/* Header — clickable */}
                <div
                  onClick={() => toggle(win.num)}
                  className={`px-6 py-5 flex items-center gap-3.5 cursor-pointer select-none ${headStyle}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FFB703] flex items-center justify-center text-lg font-black text-[#023047] flex-shrink-0">
                    {win.num}
                  </div>
                  <h3 className="font-bold text-sm flex-1 leading-snug">{win.title}</h3>
                  <svg
                    className={`w-4.5 h-4.5 flex-shrink-0 transition-transform duration-300 opacity-60 ${isOpen ? 'rotate-180 opacity-100' : ''}`}
                    fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                    style={{ width: '18px', height: '18px' }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                {/* Body — collapsible */}
                <div
                  className="bg-[rgba(255,255,255,0.03)] overflow-hidden transition-all"
                  style={{
                    maxHeight: isOpen ? '640px' : '0',
                    padding: isOpen ? '0 24px 24px' : '0 24px',
                    transition: isOpen
                      ? 'max-height 0.6s ease-in-out, padding 0.35s ease'
                      : 'max-height 0.5s ease, padding 0.35s ease',
                  }}
                >
                  <div className="px-0 py-0 flex flex-col gap-2.5 pt-2.5">
                    {/* What */}
                    <div className="px-3.5 py-2.5 rounded-md text-xs leading-relaxed bg-[rgba(255,255,255,0.04)] text-[rgba(255,255,255,0.7)]">
                      <strong className="block text-xs font-bold tracking-widest uppercase text-[rgba(255,255,255,0.4)] mb-1">
                        What
                      </strong>
                      {win.what}
                    </div>
                    {/* Impact */}
                    <div className="px-3.5 py-2.5 rounded-md text-xs leading-relaxed bg-[rgba(33,158,188,0.08)] text-[#8ECAE6]">
                      <strong className="block text-xs font-bold tracking-widest uppercase text-[#219EBC] mb-1">
                        Impact
                      </strong>
                      {win.impact}
                    </div>
                    {/* Carries forward */}
                    <div className="px-3.5 py-2.5 rounded-md text-xs leading-relaxed bg-[rgba(27,94,32,0.15)] text-[#86efac]">
                      <strong className="block text-xs font-bold tracking-widest uppercase text-[#4ade80] mb-1">
                        Carries Forward
                      </strong>
                      {win.carries}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
