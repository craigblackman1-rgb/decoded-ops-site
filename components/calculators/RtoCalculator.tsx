'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
import './calculators.css';

export function RtoCalculator() {
  const [revenuePerHour, setRevenuePerHour] = useState<number>(1000);
  const [currentRto, setCurrentRto] = useState<number>(8);
  const [targetRto, setTargetRto] = useState<number>(1);
  const [incidentsPerYear, setIncidentsPerYear] = useState<number>(4);

  // Live calculations
  const currentAnnualCost = revenuePerHour * currentRto * incidentsPerYear;
  const targetAnnualCost = revenuePerHour * targetRto * incidentsPerYear;
  const annualSaving = Math.max(0, currentAnnualCost - targetAnnualCost);
  const threeYearSaving = annualSaving * 3;

  // RTO bar percentages
  const maxRto = Math.max(currentRto, targetRto, 1);
  const currentBarPct = (currentRto / maxRto) * 100;
  const targetBarPct = (targetRto / maxRto) * 100;

  return (
    <div className="calc-grid">
      {/* Left column — inputs */}
      <div>
        <h2 style={{ fontFamily: 'var(--do-font-heading)', color: 'var(--do-text-primary)', fontWeight: 600, fontSize: 'var(--do-text-lg)', marginBottom: 16 }}>
          Your Numbers
        </h2>

        <div className="calc-input-group">
          <label htmlFor="revenuePerHour" className="calc-label">
            Revenue per hour (£)
          </label>
          <input
            id="revenuePerHour"
            type="number"
            min={0}
            value={revenuePerHour}
            onChange={(e) => setRevenuePerHour(Number(e.target.value) || 0)}
            className="calc-input"
          />
        </div>

        <div className="calc-input-group">
          <label htmlFor="currentRto" className="calc-label">
            Current recovery time (hours)
          </label>
          <input
            id="currentRto"
            type="number"
            min={0}
            value={currentRto}
            onChange={(e) => setCurrentRto(Number(e.target.value) || 0)}
            className="calc-input"
          />
        </div>

        <div className="calc-input-group">
          <label htmlFor="targetRto" className="calc-label">
            Target recovery time (hours)
          </label>
          <input
            id="targetRto"
            type="number"
            min={0}
            value={targetRto}
            onChange={(e) => setTargetRto(Number(e.target.value) || 0)}
            className="calc-input"
          />
        </div>

        <div className="calc-input-group">
          <label htmlFor="incidentsPerYear" className="calc-label">
            Major incidents per year
          </label>
          <input
            id="incidentsPerYear"
            type="number"
            min={0}
            value={incidentsPerYear}
            onChange={(e) => setIncidentsPerYear(Number(e.target.value) || 0)}
            className="calc-input"
          />
        </div>
      </div>

      {/* Right column — results */}
      <div>
        <div className="calc-panel">
          <h2>Recovery Time Value Analysis</h2>

          {/* RTO comparison bars */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ marginBottom: 12 }}>
              <p className="calc-stat-label">Current</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div className="calc-bar-track">
                  <div className="calc-bar-fill" style={{ width: `${currentBarPct}%`, backgroundColor: 'var(--do-cerulean)' }} />
                </div>
                <span style={{ fontSize: 'var(--do-text-xs)', color: 'color-mix(in srgb, var(--do-text-on-dark) 80%, transparent)', width: 40, textAlign: 'right' }}>
                  {currentRto}h
                </span>
              </div>
            </div>

            <div>
              <p className="calc-stat-label">Target</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div className="calc-bar-track">
                  <div className="calc-bar-fill" style={{ width: `${targetBarPct}%`, backgroundColor: 'var(--do-amber)' }} />
                </div>
                <span style={{ fontSize: 'var(--do-text-xs)', color: 'color-mix(in srgb, var(--do-text-on-dark) 80%, transparent)', width: 40, textAlign: 'right' }}>
                  {targetRto}h
                </span>
              </div>
            </div>
          </div>

          <div className="calc-stat">
            <p className="calc-stat-label">Current Annual Recovery Cost</p>
            <p className="calc-stat-value">£{currentAnnualCost.toLocaleString('en-GB')}</p>
          </div>

          <div className="calc-stat">
            <p className="calc-stat-label">Target Annual Recovery Cost</p>
            <p className="calc-stat-value">£{targetAnnualCost.toLocaleString('en-GB')}</p>
            <p style={{ fontSize: 'var(--do-text-xs)', color: 'color-mix(in srgb, var(--do-text-on-dark) 50%, transparent)', marginTop: 2 }}>
              with improved RTO
            </p>
          </div>

          <div className="calc-stat">
            <p className="calc-stat-label">Annual Saving</p>
            <p className="calc-stat-value calc-stat-value--amber">£{annualSaving.toLocaleString('en-GB')}</p>
          </div>

          <div className="calc-block-divider">
            <p className="calc-stat-label">3-YEAR SAVING</p>
            <p className="calc-stat-value calc-stat-value--large">£{threeYearSaving.toLocaleString('en-GB')}</p>
          </div>

          <hr className="calc-divider" style={{ marginTop: -12 }} />

          <Link href="/contact" className="calc-cta">
            Get your RTO reviewed →
          </Link>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="calc-secondary-link">
            Or book a call directly <ArrowRight size={14} style={{ display: 'inline', verticalAlign: 'middle' }} />
          </a>
        </div>
      </div>
    </div>
  );
}
