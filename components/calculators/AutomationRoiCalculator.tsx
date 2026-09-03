'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
import { ToolLeadCapture } from '@/components/ToolLeadCapture';
import './calculators.css';

export function AutomationRoiCalculator() {
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(5);
  const [staffCount, setStaffCount] = useState<number>(2);
  const [hourlyRate, setHourlyRate] = useState<number>(18);
  const [setupCost, setSetupCost] = useState<number>(5000);
  const [monthlyMaintenance, setMonthlyMaintenance] = useState<number>(100);

  // Calculations
  const annualManualCost = hoursPerWeek * 52 * staffCount * hourlyRate;

  const year1AutomationCost = setupCost + monthlyMaintenance * 12;
  const year2AutomationCost = monthlyMaintenance * 12;
  const year3AutomationCost = monthlyMaintenance * 12;

  const year1Saving = annualManualCost - year1AutomationCost;
  const year2Saving = annualManualCost - year2AutomationCost;
  const year3Saving = annualManualCost - year3AutomationCost;

  const totalManualCost3yr = annualManualCost * 3;
  const totalAutoCost3yr = year1AutomationCost + year2AutomationCost + year3AutomationCost;

  const rawRoi =
    totalAutoCost3yr === 0
      ? -100
      : Math.round(((totalManualCost3yr - totalAutoCost3yr) / totalAutoCost3yr) * 100);
  const roiPercent = Math.max(-100, rawRoi);

  const monthlySaving = annualManualCost / 12 - monthlyMaintenance;
  const breakEvenMonths = monthlySaving > 0 ? Math.ceil(setupCost / monthlySaving) : null;

  const fmt = (n: number) => `£${n.toLocaleString('en-GB')}`;

  const savingClass = (n: number) => {
    if (n > 0) return 'calc-stat-value--positive';
    if (n < 0) return 'calc-stat-value--negative';
    return '';
  };

  return (
    <div className="calc-grid">
      {/* Left column: inputs */}
      <div>
        <h2 style={{ fontFamily: 'var(--do-font-heading)', color: 'var(--do-text-primary)', fontWeight: 600, fontSize: 'var(--do-text-lg)', marginBottom: 16 }}>
          Your Numbers
        </h2>

        <div className="calc-input-group">
          <label htmlFor="hoursPerWeek" className="calc-label">
            Hours per week on this manual task
          </label>
          <input
            id="hoursPerWeek"
            type="number"
            min={0}
            value={hoursPerWeek}
            onChange={(e) => setHoursPerWeek(Number(e.target.value) || 0)}
            className="calc-input"
          />
        </div>

        <div className="calc-input-group">
          <label htmlFor="staffCount" className="calc-label">
            Number of staff doing it
          </label>
          <input
            id="staffCount"
            type="number"
            min={0}
            value={staffCount}
            onChange={(e) => setStaffCount(Number(e.target.value) || 0)}
            className="calc-input"
          />
        </div>

        <div className="calc-input-group">
          <label htmlFor="hourlyRate" className="calc-label">
            Average hourly rate (£)
          </label>
          <input
            id="hourlyRate"
            type="number"
            min={0}
            value={hourlyRate}
            onChange={(e) => setHourlyRate(Number(e.target.value) || 0)}
            className="calc-input"
          />
        </div>

        <div className="calc-input-group">
          <label htmlFor="setupCost" className="calc-label">
            One-off automation setup cost (£)
          </label>
          <input
            id="setupCost"
            type="number"
            min={0}
            value={setupCost}
            onChange={(e) => setSetupCost(Number(e.target.value) || 0)}
            className="calc-input"
          />
          <p className="calc-hint">
            (Include all implementation and integration costs)
          </p>
        </div>

        <div className="calc-input-group">
          <label htmlFor="monthlyMaintenance" className="calc-label">
            Monthly automation maintenance cost (£)
          </label>
          <input
            id="monthlyMaintenance"
            type="number"
            min={0}
            value={monthlyMaintenance}
            onChange={(e) => setMonthlyMaintenance(Number(e.target.value) || 0)}
            className="calc-input"
          />
        </div>
      </div>

      {/* Right column: results */}
      <div>
        <div className="calc-panel">
          <h2>Automation ROI Analysis</h2>

          <table className="calc-table">
            <thead>
              <tr>
                <th>Year</th>
                <th>Manual Cost</th>
                <th>Auto Cost</th>
                <th>Saving</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: 'Year 1', autoCost: year1AutomationCost, saving: year1Saving },
                { label: 'Year 2', autoCost: year2AutomationCost, saving: year2Saving },
                { label: 'Year 3', autoCost: year3AutomationCost, saving: year3Saving },
              ].map(({ label, autoCost, saving }) => (
                <tr key={label}>
                  <td>{label}</td>
                  <td>{fmt(annualManualCost)}</td>
                  <td>{fmt(autoCost)}</td>
                  <td className={savingClass(saving)} style={{ fontWeight: 600 }}>
                    {fmt(saving)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="calc-stat">
            <p className="calc-stat-label">Break-even</p>
            {breakEvenMonths !== null ? (
              <p className="calc-stat-value">{breakEvenMonths} months</p>
            ) : (
              <p className="calc-stat-value calc-stat-value--muted">Not achievable</p>
            )}
          </div>

          <div className="calc-block-divider">
            <p className="calc-stat-label">3-YEAR ROI</p>
            <p className={`calc-stat-value calc-stat-value--large ${roiPercent >= 0 ? 'calc-stat-value--amber' : 'calc-stat-value--negative'}`}>
              {roiPercent}%
            </p>
          </div>

          <hr className="calc-divider" style={{ marginTop: -12 }} />

          <Link href="/contact" className="calc-cta">
            Let&apos;s automate this together →
          </Link>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="calc-secondary-link">
            Or book a call directly <ArrowRight size={14} style={{ display: 'inline', verticalAlign: 'middle' }} />
          </a>

          <div style={{ marginTop: 24 }}>
            <ToolLeadCapture
              tool="automation-roi-calculator"
              resultSummary={`${roiPercent}% 3-year ROI — break-even ${breakEvenMonths !== null ? `${breakEvenMonths} months` : 'not achievable'}`}
              answers={{ hoursPerWeek, staffCount, hourlyRate, setupCost, monthlyMaintenance }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
