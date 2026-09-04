'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
import { ToolLeadCapture } from '@/components/ToolLeadCapture';
import './calculators.css';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const DEFAULT_DEMAND_PCT = [60, 55, 70, 85, 100, 110, 115, 90, 105, 100, 80, 65];

export function SeasonalCapacityCalculator() {
  const [baselineJobs, setBaselineJobs] = useState<number>(200);
  const [baseCapacity, setBaseCapacity] = useState<number>(220);
  const [demandPct, setDemandPct] = useState<number[]>(DEFAULT_DEMAND_PCT);

  const demandVsCapacity = useMemo(() => {
    return MONTHS.map((m, i) => {
      const demand = Math.round((baselineJobs * demandPct[i]) / 100);
      const gap = baseCapacity - demand;
      const pctFull = baseCapacity > 0 ? Math.round((demand / baseCapacity) * 100) : 0;
      return { month: m, demand, gap, pctFull };
    });
  }, [baselineJobs, baseCapacity, demandPct]);

  const peakDemand = Math.max(...demandVsCapacity.map((d) => d.demand));
  const lowDemand = Math.min(...demandVsCapacity.map((d) => d.demand));
  const monthsOverCapacity = demandVsCapacity.filter((d) => d.gap < 0).length;
  const totalSurplus = demandVsCapacity.reduce((sum, d) => sum + Math.max(0, d.gap), 0);
  const totalDeficit = demandVsCapacity.reduce((sum, d) => sum + Math.min(0, d.gap), 0);

  const handleDemandChange = (index: number, value: number) => {
    const next = [...demandPct];
    next[index] = Math.max(0, Math.min(200, value || 0));
    setDemandPct(next);
  };

  const resetToDefault = () => setDemandPct(DEFAULT_DEMAND_PCT);

  const barMax = Math.max(baseCapacity, peakDemand, 1);

  return (
    <div className="calc-grid">
      {/* Left column: inputs */}
      <div>
        <h2 style={{ fontFamily: 'var(--do-font-heading)', color: 'var(--do-text-primary)', fontWeight: 600, fontSize: 'var(--do-text-lg)', marginBottom: 16 }}>
          Your baseline
        </h2>

        <div className="calc-input-group">
          <label htmlFor="baseCapacity" className="calc-label">
            Weekly production capacity
          </label>
          <input
            id="baseCapacity"
            type="number"
            min={1}
            value={baseCapacity}
            onChange={(e) => setBaseCapacity(Math.max(1, Number(e.target.value) || 1))}
            className="calc-input"
          />
          <p className="calc-hint">Your steady-state output per week. Use the capacity planner to calculate this if you haven&apos;t.</p>
        </div>

        <div className="calc-input-group">
          <label htmlFor="baselineJobs" className="calc-label">
            Average weekly jobs (baseline month)
          </label>
          <input
            id="baselineJobs"
            type="number"
            min={1}
            value={baselineJobs}
            onChange={(e) => setBaselineJobs(Math.max(1, Number(e.target.value) || 1))}
            className="calc-input"
          />
          <p className="calc-hint">Your typical output in a normal month. Seasonal percentages are applied to this.</p>
        </div>

        <div style={{ marginTop: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <h2 style={{ fontFamily: 'var(--do-font-heading)', color: 'var(--do-text-primary)', fontWeight: 600, fontSize: 'var(--do-text-lg)', margin: 0 }}>
              Seasonal demand by month
            </h2>
            <button
              onClick={resetToDefault}
              style={{
                fontSize: 'var(--do-text-xs)', color: 'var(--do-cerulean)', background: 'none',
                border: 'none', cursor: 'pointer', fontWeight: 500, textDecoration: 'underline',
              }}
            >
              Reset to default
            </button>
          </div>
          <p style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-muted)', marginBottom: 16 }}>
            100% = your baseline. Drag up for peak months, down for quiet ones.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
            {MONTHS.map((m, i) => (
              <div key={m} style={{ padding: '8px 10px', borderRadius: 'var(--do-radius-lg)', background: 'var(--do-off-white)' }}>
                <label style={{ fontSize: 'var(--do-text-xs)', fontWeight: 600, color: 'var(--do-text-secondary)', display: 'block', marginBottom: 4 }}>
                  {m}
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <input
                    type="range"
                    min={0}
                    max={200}
                    value={demandPct[i]}
                    onChange={(e) => handleDemandChange(i, Number(e.target.value))}
                    style={{ flex: 1, accentColor: 'var(--do-cerulean)' }}
                  />
                  <span style={{ fontSize: 'var(--do-text-xs)', fontWeight: 600, color: 'var(--do-text-primary)', minWidth: 36, textAlign: 'right' }}>
                    {demandPct[i]}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right column: results */}
      <div>
        <div className="calc-panel">
          <h2>Your seasonal picture</h2>

          <div className="calc-stat">
            <p className="calc-stat-label">Peak weekly demand</p>
            <p className="calc-stat-value calc-stat-value--amber">{peakDemand.toLocaleString('en-GB')} jobs</p>
          </div>

          <div className="calc-stat">
            <p className="calc-stat-label">Lowest weekly demand</p>
            <p className="calc-stat-value">{lowDemand.toLocaleString('en-GB')} jobs</p>
          </div>

          <div className="calc-block-divider">
            <p className="calc-stat-label">Months over capacity</p>
            <p className="calc-stat-value" style={{ color: monthsOverCapacity > 0 ? 'var(--do-orange)' : 'var(--do-sky-blue)' }}>
              {monthsOverCapacity} of 12
            </p>
          </div>

          {monthsOverCapacity > 0 && (
            <div style={{ marginBottom: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <span className="calc-stat-label">Total annual deficit</span>
                <span style={{ fontSize: 'var(--do-text-sm)', fontWeight: 700, color: 'var(--do-orange)' }}>
                  {totalDeficit.toLocaleString('en-GB')} jobs short
                </span>
              </div>
              <p className="calc-hint" style={{ color: 'color-mix(in srgb, var(--do-sky-blue) 70%, transparent)' }}>
                This is where you turn work away, rush overtime, or let quality slip.
              </p>
            </div>
          )}

          {totalSurplus > 0 && (
            <div style={{ marginBottom: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <span className="calc-stat-label">Quiet-period spare capacity</span>
                <span style={{ fontSize: 'var(--do-text-sm)', fontWeight: 700, color: 'var(--do-sky-blue)' }}>
                  {totalSurplus.toLocaleString('en-GB')} spare jobs
                </span>
              </div>
              <p className="calc-hint" style={{ color: 'color-mix(in srgb, var(--do-sky-blue) 70%, transparent)' }}>
                The months where you have capacity but not the demand to fill it.
              </p>
            </div>
          )}

          {/* Monthly bar chart */}
          <div style={{ marginTop: 8 }}>
            <p className="calc-stat-label" style={{ marginBottom: 12 }}>Monthly view</p>
            {demandVsCapacity.map((d) => {
              const demandWidth = barMax > 0 ? (d.demand / barMax) * 100 : 0;
              const capWidth = barMax > 0 ? (baseCapacity / barMax) * 100 : 0;
              return (
                <div key={d.month} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <span style={{ fontSize: 'var(--do-text-xs)', color: 'color-mix(in srgb, var(--do-text-on-dark) 70%, transparent)', width: 28, flexShrink: 0 }}>
                    {d.month}
                  </span>
                  <div style={{ flex: 1, position: 'relative', height: 16, borderRadius: 'var(--do-radius-full)', background: 'color-mix(in srgb, var(--do-text-on-dark) 8%, transparent)' }}>
                    {/* Capacity line */}
                    <div style={{ position: 'absolute', left: `${capWidth}%`, top: -2, bottom: -2, width: 2, background: 'var(--do-sky-blue)', borderRadius: 1 }} />
                    {/* Demand bar */}
                    <div
                      style={{
                        position: 'absolute', left: 0, top: 0, bottom: 0,
                        width: `${Math.min(demandWidth, 100)}%`,
                        borderRadius: 'var(--do-radius-full)',
                        background: d.gap < 0 ? 'var(--do-orange)' : 'var(--do-cerulean)',
                        transition: 'width .2s',
                      }}
                    />
                  </div>
                  <span style={{ fontSize: 'var(--do-text-xs)', fontWeight: 600, color: d.gap < 0 ? 'var(--do-orange)' : 'color-mix(in srgb, var(--do-text-on-dark) 70%, transparent)', width: 40, textAlign: 'right', flexShrink: 0 }}>
                    {d.gap > 0 ? `+${d.gap}` : d.gap}
                  </span>
                </div>
              );
            })}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8, paddingLeft: 36 }}>
              <div style={{ width: 10, height: 3, background: 'var(--do-cerulean)', borderRadius: 2 }} />
              <span style={{ fontSize: 'var(--do-text-xs)', color: 'color-mix(in srgb, var(--do-text-on-dark) 60%, transparent)' }}>Demand</span>
              <div style={{ width: 10, height: 3, background: 'var(--do-orange)', borderRadius: 2 }} />
              <span style={{ fontSize: 'var(--do-text-xs)', color: 'color-mix(in srgb, var(--do-text-on-dark) 60%, transparent)' }}>Over capacity</span>
              <div style={{ width: 10, height: 2, background: 'var(--do-sky-blue)', borderRadius: 1 }} />
              <span style={{ fontSize: 'var(--do-text-xs)', color: 'color-mix(in srgb, var(--do-text-on-dark) 60%, transparent)' }}>Your capacity</span>
            </div>
          </div>

          <hr className="calc-divider" />

          <Link href="/contact" className="calc-cta">
            Talk to Craig about capacity planning →
          </Link>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="calc-secondary-link">
            Or book a call directly <ArrowRight size={14} style={{ display: 'inline', verticalAlign: 'middle' }} />
          </a>

          <div style={{ marginTop: 24 }}>
            <ToolLeadCapture
              tool="seasonal-capacity"
              resultSummary={`${peakDemand} jobs peak, ${monthsOverCapacity} months over capacity, ${totalDeficit} jobs deficit`}
              answers={{ baselineJobs, baseCapacity, demandPct }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
