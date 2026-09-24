'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, RotateCcw, Info } from 'lucide-react';
import { ToolLeadCapture } from '@/components/ToolLeadCapture';
import { D17Motion } from '@/components/D17Motion';
import '@/app/d17-global.css';
import '@/app/d17-resources.css';

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

const scoreLabels = ['1: Critical', '2: Weak', '3: Acceptable', '4: Good', '5: Excellent'];

function getScoreColor(score: number): string {
  if (score <= 2) return '#FB8500';
  if (score <= 3) return '#FFB703';
  return '#219EBC';
}

function getHealthLabel(total: number): { label: string; color: string; description: string } {
  if (total <= 10) return { label: 'Critical: Needs Immediate Attention', color: '#FB8500', description: 'Your operations are under significant strain. Disconnected systems, undocumented processes, and low team capability are creating hidden costs every day. A Clarity Audit will give you a prioritised roadmap to address the biggest gaps first.' };
  if (total <= 15) return { label: 'Fragile: Some Areas Need Work', color: '#FFB703', description: 'You have some strengths, but there are clear gaps that will become more expensive as you grow. The weakest dimensions are your biggest risk: fixing them now is cheaper than waiting.' };
  if (total <= 20) return { label: 'Stable: Room to Improve', color: '#219EBC', description: 'Your operations are in reasonable shape. Targeted improvements in your weaker areas will reduce cost and increase resilience. You are well positioned to evaluate new technology investments.' };
  return { label: 'Strong: Well Run Operation', color: '#023047', description: 'Your operations are well managed across all dimensions. You are in a strong position to scale, adopt new technology, and focus on strategic growth rather than firefighting.' };
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
          <span className="eyebrow">Free tool</span>
          <h1>Ops health score</h1>
          <p className="lede">Rate your business across five areas to see where you stand, and where to focus first.</p>
        </div>
      </section>

      {/* D17 hero art · DO-ART-997 */}
      <section className="g-navy">
        <div className="wrap">
          <figure className="d17 sx px ph-fade a997" data-od-id="hero-art" data-motion data-no="DO-ART-997" data-rev="01" data-tx="screen"
                  aria-label="Artwork DO-ART-997. The ops health score result screen over a graded photograph of a workbench, labelled Example. Five areas rated one to five: systems integration 2, process documentation 3, data quality 3, team and capability 4, technology strategy 1, in amber. Total 13 out of 25. Focus first on technology strategy. Five areas, and one place to start.">
            <div className="d17-ph"><img src="/images/d17/resources/gen-bench-flatlay-v2-6b4161.jpg" alt="" width="900" height="756" /></div>
            <div className="d17-scan" aria-hidden="true"></div>
            <div className="sx-top d17-mono" aria-hidden="true"><span>Ops health score</span><span>Five areas</span></div>
            <div className="body">
              <div className="win" aria-hidden="true">
                <div className="win-bar"><span className="dots"><i></i><i></i><i></i></span><span className="crumb"><span>Tools ›</span> Ops health</span><span className="pill">EXAMPLE</span></div>
                <div className="win-flat">
                  <div className="hs-hd"><div><h5>Your ops health</h5><p className="s">Each area rated 1 to 5</p></div><p className="tot"><b>13</b><span>/ 25</span></p></div>
                  <div className="hs">
                    <div><span>Systems integration</span><em><i className="m-fill" style={{ width: '40%', animationDelay: '.1s' }}></i></em><b>2</b></div>
                    <div><span>Process documentation</span><em><i className="m-fill" style={{ width: '60%', animationDelay: '.25s' }}></i></em><b>3</b></div>
                    <div><span>Data quality</span><em><i className="m-fill" style={{ width: '60%', animationDelay: '.4s' }}></i></em><b>3</b></div>
                    <div><span>Team &amp; capability</span><em><i className="m-fill" style={{ width: '80%', animationDelay: '.55s' }}></i></em><b>4</b></div>
                    <div className="hot"><span>Technology strategy</span><em><i className="m-fill" style={{ width: '20%', animationDelay: '.8s' }}></i></em><b>1</b></div>
                  </div>
                  <div className="win-foot"><span>Focus first</span>Technology strategy</div>
                </div>
              </div>
            </div>
            <div className="sx-foot">
              <div className="sx-bar" aria-hidden="true"></div>
              <p className="sx-say">Five areas. <em>One place to start.</em></p>
              <span className="d17-mark">decodedops.co.uk · DO-ART-997 · Rev 01</span>
            </div>
          </figure>
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

              <ToolLeadCapture
                tool="ops-health-score"
                resultSummary={`${total}/25 — ${result.label}`}
                answers={scores}
              />

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
      <D17Motion />
    </main>
  );
}
