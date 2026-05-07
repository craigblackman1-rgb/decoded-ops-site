'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, RotateCcw, Info } from 'lucide-react';

interface Dimension {
  id: string;
  label: string;
  low: string;
  mid: string;
  high: string;
}

const dimensions: Dimension[] = [
  { id: 'integration', label: 'Systems Integration', low: 'Systems don\'t talk to each other. Data is re-entered manually.', mid: 'Some systems connected. Gaps exist but are known.', high: 'Systems integrated. Data flows automatically between platforms.' },
  { id: 'process', label: 'Process Documentation', low: 'No documented processes. Everyone does things differently.', mid: 'Key processes documented but not consistently followed.', high: 'Processes documented, followed, and regularly reviewed.' },
  { id: 'data', label: 'Data Quality', low: 'Data is inconsistent, duplicated, and incomplete.', mid: 'Most data is clean. Some areas need attention.', high: 'Data is clean, consistent, and governed.' },
  { id: 'team', label: 'Team & Capability', low: 'No capacity or skills for technology improvement.', mid: 'Some capability exists. Training happens reactively.', high: 'Team has skills and capacity. Technology adoption is part of the culture.' },
  { id: 'strategy', label: 'Technology Strategy', low: 'No roadmap. Systems bought reactively.', mid: 'Informal roadmap exists. Some planning in place.', high: 'Clear technology roadmap aligned to business goals.' },
];

const scoreLabels = ['1 — Critical', '2 — Weak', '3 — Acceptable', '4 — Good', '5 — Excellent'];

function getScoreColor(score: number): string {
  if (score <= 2) return '#FB8500';
  if (score <= 3) return '#FFB703';
  return '#219EBC';
}

function getHealthLabel(total: number): { label: string; color: string; description: string } {
  if (total <= 10) return { label: 'Critical — Needs Immediate Attention', color: '#FB8500', description: 'Your operations are under significant strain. Disconnected systems, undocumented processes, and low team capability are creating hidden costs every day. A Clarity Audit will give you a prioritised roadmap to address the biggest gaps first.' };
  if (total <= 15) return { label: 'Fragile — Some Areas Need Work', color: '#FFB703', description: 'You have some strengths, but there are clear gaps that will become more expensive as you grow. The weakest dimensions are your biggest risk — fixing them now is cheaper than waiting.' };
  if (total <= 20) return { label: 'Stable — Room to Improve', color: '#219EBC', description: 'Your operations are in reasonable shape. Targeted improvements in your weaker areas will reduce cost and increase resilience. You are well positioned to evaluate new technology investments.' };
  return { label: 'Strong — Well Run Operation', color: '#023047', description: 'Your operations are well managed across all dimensions. You are in a strong position to scale, adopt new technology, and focus on strategic growth rather than firefighting.' };
}

export default function OpsHealthScorePage() {
  const [scores, setScores] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const setScore = (id: string, score: number) => {
    setScores(prev => ({ ...prev, [id]: score }));
  };

  const allAnswered = dimensions.every(d => scores[d.id] !== undefined);
  const total = Object.values(scores).reduce((sum, s) => sum + s, 0);
  const result = getHealthLabel(total);

  const reset = () => {
    setScores({});
    setShowResults(false);
  };

  return (
    <main>
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16" style={{ backgroundColor: '#023047' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="font-[family-name:var(--font-dm-sans)] text-[#219EBC] text-sm font-medium mb-3 uppercase tracking-wide">Free Tool</p>
          <h1 className="font-[family-name:var(--font-outfit)] text-3xl lg:text-5xl font-bold text-white mb-4">Ops Health Score</h1>
          <p className="font-[family-name:var(--font-dm-sans)] text-lg text-white/80 max-w-2xl">Rate your business across five operational dimensions to get a clear picture of where you stand — and where to focus first.</p>
        </div>
      </section>

      <section className="py-12 lg:py-20" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {!showResults ? (
            <div className="space-y-6">
              {dimensions.map(d => (
                <div key={d.id} className="bg-white rounded-2xl p-6 shadow-sm border border-[#8ECAE6]/20">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-lg font-bold text-[#023047] font-[family-name:var(--font-outfit)]">{d.label}</h2>
                      <div className="relative group">
                        <p className="text-xs text-[#023047]/50 mt-1 flex items-center gap-1 cursor-help">Hover for descriptions <Info size={12} /></p>
                        <div className="absolute left-0 top-full mt-2 w-72 bg-[#023047] text-white text-xs p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 shadow-lg space-y-2">
                          <p><strong className="text-[#FB8500]">Low (1-2):</strong> {d.low}</p>
                          <p><strong className="text-[#FFB703]">Mid (3):</strong> {d.mid}</p>
                          <p><strong className="text-[#219EBC]">High (4-5):</strong> {d.high}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-1.5">
                      {[1, 2, 3, 4, 5].map(n => (
                        <button key={n} onClick={() => setScore(d.id, n)}
                          className={`w-9 h-9 rounded-lg text-xs font-bold transition-all ${scores[d.id] === n ? 'text-white scale-110' : 'text-[#023047]/40 bg-[#023047]/5 hover:bg-[#023047]/10'}`}
                          style={{ backgroundColor: scores[d.id] === n ? getScoreColor(n) : undefined }}
                          aria-label={`Score ${n} for ${d.label}`}
                        >{n}</button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <button onClick={() => allAnswered && setShowResults(true)}
                className={`w-full px-6 py-4 rounded-xl font-semibold transition-colors font-[family-name:var(--font-dm-sans)] ${allAnswered ? 'bg-[#FFB703] text-[#023047] hover:bg-[#FB8500]' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                disabled={!allAnswered}
              >
                {allAnswered ? 'See Your Score' : `Rate all dimensions to continue (${dimensions.length - Object.keys(scores).length} remaining)`}
              </button>
            </div>
          ) : (
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#8ECAE6]/20 text-center mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{ backgroundColor: `${result.color}20`, borderColor: `${result.color}40`, borderWidth: 1 }}>
                  <span className="text-xs font-semibold uppercase" style={{ color: result.color }}>{result.label}</span>
                </div>
                <div className="text-5xl font-bold mb-4 font-[family-name:var(--font-outfit)]" style={{ color: result.color }}>{total}/25</div>
                <p className="text-[#023047]/70 leading-relaxed mb-8 max-w-xl mx-auto">{result.description}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
                    Book a Clarity Audit <ArrowRight size={18} />
                  </Link>
                  <button onClick={reset} className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#219EBC] text-[#219EBC] font-semibold hover:bg-[#219EBC]/10 transition-colors">
                    <RotateCcw size={16} /> Try again
                  </button>
                </div>
              </div>

              {/* Dimension breakdown */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#8ECAE6]/20">
                <h3 className="text-sm font-bold text-[#023047] mb-4">Dimension Scores</h3>
                <div className="space-y-3">
                  {dimensions.map(d => {
                    const s = scores[d.id] || 0;
                    return (
                      <div key={d.id}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-[#023047]/80">{d.label}</span>
                          <span className="font-semibold" style={{ color: getScoreColor(s) }}>{s}/5</span>
                        </div>
                        <div className="h-2 rounded-full bg-[#8ECAE6]/20 overflow-hidden">
                          <div className="h-full rounded-full transition-all" style={{ width: `${(s / 5) * 100}%`, backgroundColor: getScoreColor(s) }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
