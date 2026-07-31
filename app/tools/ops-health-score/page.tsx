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
      <section className="g-navy">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <span className="eyebrow">— Free tool</span>
          <h1>Ops health score</h1>
          <p className="lede">Rate your business across five operational dimensions to get a clear picture of where you stand — and where to focus first.</p>
        </div>
      </section>

      <section className="g-off">
        <div className="wrap" style={{ maxWidth: 720 }}>
          {!showResults ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {dimensions.map(d => (
                <div key={d.id} className="card">
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 8 }}>
                    <div>
                      <h2 style={{ marginBottom: 0 }}>{d.label}</h2>
                      <div className="relative group" style={{ position: 'relative' }}>
                        <p style={{ fontSize: 'var(--do-text-xs)', color: 'var(--do-text-subtle)', marginTop: 4, marginBottom: 0, display: 'flex', alignItems: 'center', gap: 4, cursor: 'help' }}>Hover for descriptions <Info size={12} /></p>
                        <div className="group-hover-panel" style={{ position: 'absolute', left: 0, top: '100%', marginTop: 8, width: 288, background: 'var(--do-prussian-blue)', color: 'var(--do-text-on-dark)', fontSize: 'var(--do-text-xs)', padding: 12, borderRadius: 'var(--do-radius-lg)', opacity: 0, pointerEvents: 'none', zIndex: 10, boxShadow: 'var(--do-shadow-lg)', display: 'flex', flexDirection: 'column', gap: 8, transition: 'opacity var(--do-duration-normal)' }}>
                          <p style={{ margin: 0 }}><strong style={{ color: 'var(--do-orange)' }}>Low (1-2):</strong> {d.low}</p>
                          <p style={{ margin: 0 }}><strong style={{ color: 'var(--do-amber)' }}>Mid (3):</strong> {d.mid}</p>
                          <p style={{ margin: 0 }}><strong style={{ color: 'var(--do-sky-blue)' }}>High (4-5):</strong> {d.high}</p>
                        </div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: 6 }}>
                      {[1, 2, 3, 4, 5].map(n => (
                        <button key={n} onClick={() => setScore(d.id, n)}
                          className="score-btn"
                          style={{
                            width: 36, height: 36, borderRadius: 'var(--do-radius-lg)', fontSize: 'var(--do-text-xs)', fontWeight: 'var(--do-weight-bold)',
                            border: 'none', cursor: 'pointer', transition: 'all var(--do-duration-normal)',
                            color: scores[d.id] === n ? 'var(--do-white)' : 'var(--do-text-subtle)',
                            background: scores[d.id] === n ? getScoreColor(n) : 'color-mix(in srgb, var(--do-prussian-blue) 5%, transparent)',
                            transform: scores[d.id] === n ? 'scale(1.1)' : 'none',
                          }}
                          aria-label={`Score ${n} for ${d.label}`}
                        >{n}</button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <button onClick={() => allAnswered && setShowResults(true)}
                className={allAnswered ? 'btn btn--primary' : 'btn'}
                style={{
                  width: '100%', padding: '16px 24px', cursor: allAnswered ? 'pointer' : 'not-allowed',
                  background: allAnswered ? undefined : 'var(--do-border-subtle)',
                  color: allAnswered ? undefined : 'var(--do-text-subtle)',
                }}
                disabled={!allAnswered}
              >
                {allAnswered ? 'See your score' : `Rate all dimensions to continue (${dimensions.length - Object.keys(scores).length} remaining)`}
              </button>
            </div>
          ) : (
            <div>
              <div className="card" style={{ textAlign: 'center', marginBottom: 32 }}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 'var(--do-radius-full)', marginBottom: 24, backgroundColor: `${result.color}20`, border: `1px solid ${result.color}40` }}>
                  <span style={{ fontSize: 'var(--do-text-xs)', fontWeight: 'var(--do-weight-semibold)', textTransform: 'uppercase', color: result.color }}>{result.label}</span>
                </div>
                <div style={{ fontSize: 'var(--do-text-5xl)', fontFamily: 'var(--do-font-heading)', fontWeight: 'var(--do-weight-bold)', marginBottom: 16, color: result.color }}>{total}/25</div>
                <p className="lede" style={{ margin: '0 auto 32px', maxWidth: '38ch', color: 'color-mix(in srgb, var(--do-prussian-blue) 74%, transparent)' }}>{result.description}</p>
                <div className="btn-row" style={{ justifyContent: 'center', margin: 0 }}>
                  <Link href="/contact" className="btn btn--primary">
                    Book a Clarity Audit <ArrowRight size={18} />
                  </Link>
                  <button onClick={reset} className="btn btn--outline">
                    <RotateCcw size={16} /> Try again
                  </button>
                </div>
              </div>

              {/* Dimension breakdown */}
              <div className="card">
                <h3>Dimension scores</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {dimensions.map(d => {
                    const s = scores[d.id] || 0;
                    return (
                      <div key={d.id}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--do-text-sm)', marginBottom: 4 }}>
                          <span style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 80%, transparent)' }}>{d.label}</span>
                          <span style={{ fontWeight: 'var(--do-weight-semibold)', color: getScoreColor(s) }}>{s}/5</span>
                        </div>
                        <div style={{ height: 8, borderRadius: 'var(--do-radius-full)', background: 'color-mix(in srgb, var(--do-sky-blue) 20%, transparent)', overflow: 'hidden' }}>
                          <div style={{ height: '100%', borderRadius: 'var(--do-radius-full)', transition: 'all var(--do-duration-normal)', width: `${(s / 5) * 100}%`, backgroundColor: getScoreColor(s) }} />
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
