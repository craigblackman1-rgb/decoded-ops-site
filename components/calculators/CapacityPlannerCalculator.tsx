'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
import { ToolLeadCapture } from '@/components/ToolLeadCapture';
import './calculators.css';

export function CapacityPlannerCalculator() {
  const [machines, setMachines] = useState<number>(4);
  const [hoursPerDay, setHoursPerDay] = useState<number>(8);
  const [daysPerWeek, setDaysPerWeek] = useState<number>(5);
  const [avgJobMinutes, setAvgJobMinutes] = useState<number>(30);
  const [downtimePct, setDowntimePct] = useState<number>(15);

  // Calculations
  const totalMinutesPerDay = machines * hoursPerDay * 60;
  const availableMinutesPerDay = totalMinutesPerDay * (1 - downtimePct / 100);
  const jobsPerDay = avgJobMinutes > 0 ? Math.floor(availableMinutesPerDay / avgJobMinutes) : 0;
  const jobsPerWeek = jobsPerDay * daysPerWeek;
  const jobsPerMonth = Math.round(jobsPerWeek * 4.33);
  const utilisedHoursPerDay = availableMinutesPerDay / 60;
  const capacityUtilisation = totalMinutesPerDay > 0
    ? Math.round((availableMinutesPerDay / totalMinutesPerDay) * 100)
    : 0;

  return (
    <div className="calc-grid">
      {/* Left column: inputs */}
      <div>
        <h2 style={{ fontFamily: 'var(--do-font-heading)', color: 'var(--do-text-primary)', fontWeight: 600, fontSize: 'var(--do-text-lg)', marginBottom: 16 }}>
          Your setup
        </h2>

        <div className="calc-input-group">
          <label htmlFor="machines" className="calc-label">
            Number of machines or stations
          </label>
          <input
            id="machines"
            type="number"
            min={1}
            value={machines}
            onChange={(e) => setMachines(Math.max(1, Number(e.target.value) || 1))}
            className="calc-input"
          />
          <p className="calc-hint">Heat presses, embroidery heads, print stations — anything that does the work.</p>
        </div>

        <div className="calc-input-group">
          <label htmlFor="hoursPerDay" className="calc-label">
            Production hours per day
          </label>
          <input
            id="hoursPerDay"
            type="number"
            min={1}
            max={24}
            value={hoursPerDay}
            onChange={(e) => setHoursPerDay(Math.max(1, Math.min(24, Number(e.target.value) || 1)))}
            className="calc-input"
          />
          <p className="calc-hint">Hours available for production, not including breaks.</p>
        </div>

        <div className="calc-input-group">
          <label htmlFor="daysPerWeek" className="calc-label">
            Working days per week
          </label>
          <input
            id="daysPerWeek"
            type="number"
            min={1}
            max={7}
            value={daysPerWeek}
            onChange={(e) => setDaysPerWeek(Math.max(1, Math.min(7, Number(e.target.value) || 1)))}
            className="calc-input"
          />
        </div>

        <div className="calc-input-group">
          <label htmlFor="avgJobMinutes" className="calc-label">
            Average time per job (minutes)
          </label>
          <input
            id="avgJobMinutes"
            type="number"
            min={1}
            value={avgJobMinutes}
            onChange={(e) => setAvgJobMinutes(Math.max(1, Number(e.target.value) || 1))}
            className="calc-input"
          />
          <p className="calc-hint">The average time a job occupies a machine — setup through completion.</p>
        </div>

        <div className="calc-input-group">
          <label htmlFor="downtimePct" className="calc-label">
            Downtime and changeover allowance (%)
          </label>
          <input
            id="downtimePct"
            type="number"
            min={0}
            max={100}
            value={downtimePct}
            onChange={(e) => setDowntimePct(Math.max(0, Math.min(100, Number(e.target.value) || 0)))}
            className="calc-input"
          />
          <p className="calc-hint">Changeovers, cleaning, breaks, minor breakdowns.</p>
        </div>
      </div>

      {/* Right column: results */}
      <div>
        <div className="calc-panel">
          <h2>Your production capacity</h2>

          <div className="calc-stat">
            <p className="calc-stat-label">Jobs per day</p>
            <p className="calc-stat-value">{jobsPerDay.toLocaleString('en-GB')}</p>
          </div>

          <div className="calc-stat">
            <p className="calc-stat-label">Jobs per week</p>
            <p className="calc-stat-value calc-stat-value--large">{jobsPerWeek.toLocaleString('en-GB')}</p>
          </div>

          <div className="calc-stat">
            <p className="calc-stat-label">Jobs per month (avg)</p>
            <p className="calc-stat-value">{jobsPerMonth.toLocaleString('en-GB')}</p>
          </div>

          <div className="calc-block-divider">
            <p className="calc-stat-label">Effective utilised hours/day</p>
            <p className="calc-stat-value">{utilisedHoursPerDay.toFixed(1)}h</p>
          </div>

          <div style={{ marginTop: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <span className="calc-stat-label">Capacity utilisation</span>
              <span className="calc-stat-label" style={{ color: 'var(--do-text-on-dark)' }}>{capacityUtilisation}%</span>
            </div>
            <div className="calc-bar-track">
              <div
                className="calc-bar-fill"
                style={{
                  width: `${capacityUtilisation}%`,
                  background: capacityUtilisation > 85 ? 'var(--do-orange)' : capacityUtilisation > 65 ? 'var(--do-amber)' : 'var(--do-sky-blue)',
                }}
              />
            </div>
            <p className="calc-hint" style={{ color: 'color-mix(in srgb, var(--do-sky-blue) 70%, transparent)', marginTop: 6 }}>
              {capacityUtilisation > 85
                ? 'High utilisation — very little headroom for spikes or breakdowns.'
                : capacityUtilisation > 65
                  ? 'Solid utilisation with some room for surge capacity.'
                  : 'Plenty of spare capacity — check whether the inputs match reality.'}
            </p>
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
              tool="capacity-planner"
              resultSummary={`${jobsPerWeek} jobs/week capacity — ${capacityUtilisation}% utilisation`}
              answers={{ machines, hoursPerDay, daysPerWeek, avgJobMinutes, downtimePct }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
