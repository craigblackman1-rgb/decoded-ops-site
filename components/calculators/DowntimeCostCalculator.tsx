'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
import { ToolLeadCapture } from '@/components/ToolLeadCapture';
import './calculators.css';

export function DowntimeCostCalculator() {
  const [employees, setEmployees] = useState<number>(10);
  const [hourlySalary, setHourlySalary] = useState<number>(18);
  const [outagesPerYear, setOutagesPerYear] = useState<number>(12);
  const [hoursPerOutage, setHoursPerOutage] = useState<number>(2);
  const [revenuePerHour, setRevenuePerHour] = useState<number>(0);

  // Live calculations
  const annualLabourCost = employees * hourlySalary * hoursPerOutage * outagesPerYear;
  const annualRevenueLoss = revenuePerHour * hoursPerOutage * outagesPerYear;
  const totalAnnualCost = annualLabourCost + annualRevenueLoss;
  const totalDowntimeHours = hoursPerOutage * outagesPerYear;

  return (
    <div className="calc-grid">
      {/* Left column: inputs */}
      <div>
        <h2 style={{ fontFamily: 'var(--do-font-heading)', color: 'var(--do-text-primary)', fontWeight: 600, fontSize: 'var(--do-text-lg)', marginBottom: 16 }}>
          Your Numbers
        </h2>

        <div className="calc-input-group">
          <label htmlFor="employees" className="calc-label">
            Employees affected during an outage
          </label>
          <input
            id="employees"
            type="number"
            min={0}
            value={employees}
            onChange={(e) => setEmployees(Number(e.target.value) || 0)}
            className="calc-input"
          />
        </div>

        <div className="calc-input-group">
          <label htmlFor="hourlySalary" className="calc-label">
            Average hourly salary (£)
          </label>
          <input
            id="hourlySalary"
            type="number"
            min={0}
            value={hourlySalary}
            onChange={(e) => setHourlySalary(Number(e.target.value) || 0)}
            className="calc-input"
          />
        </div>

        <div className="calc-input-group">
          <label htmlFor="outagesPerYear" className="calc-label">
            Outages per year
          </label>
          <input
            id="outagesPerYear"
            type="number"
            min={0}
            value={outagesPerYear}
            onChange={(e) => setOutagesPerYear(Number(e.target.value) || 0)}
            className="calc-input"
          />
        </div>

        <div className="calc-input-group">
          <label htmlFor="hoursPerOutage" className="calc-label">
            Average hours per outage
          </label>
          <input
            id="hoursPerOutage"
            type="number"
            min={0}
            value={hoursPerOutage}
            onChange={(e) => setHoursPerOutage(Number(e.target.value) || 0)}
            className="calc-input"
          />
        </div>

        <div className="calc-input-group">
          <label htmlFor="revenuePerHour" className="calc-label">
            Lost revenue per hour (£), optional
          </label>
          <input
            id="revenuePerHour"
            type="number"
            min={0}
            value={revenuePerHour}
            onChange={(e) => setRevenuePerHour(Number(e.target.value) || 0)}
            className="calc-input"
          />
          <p className="calc-hint">
            (Leave as 0 if you don&apos;t want to include revenue loss)
          </p>
        </div>
      </div>

      {/* Right column: results */}
      <div>
        <div className="calc-panel">
          <h2>Your Annual Cost of Downtime</h2>

          <div className="calc-stat">
            <p className="calc-stat-label">Annual Labour Cost</p>
            <p className="calc-stat-value">£{annualLabourCost.toLocaleString('en-GB')}</p>
          </div>

          <div className="calc-stat">
            <p className="calc-stat-label">Annual Revenue Loss</p>
            {revenuePerHour === 0 ? (
              <p className="calc-stat-value calc-stat-value--muted">Not included</p>
            ) : (
              <p className="calc-stat-value">£{annualRevenueLoss.toLocaleString('en-GB')}</p>
            )}
          </div>

          <div className="calc-stat">
            <p className="calc-stat-label">Total Downtime Hours/Year</p>
            <p className="calc-stat-value" style={{ fontSize: 'var(--do-text-xl)' }}>
              {totalDowntimeHours.toLocaleString('en-GB')} hours
            </p>
          </div>

          <div className="calc-block-divider">
            <p className="calc-stat-label">TOTAL ANNUAL COST</p>
            <p className="calc-stat-value calc-stat-value--large">£{totalAnnualCost.toLocaleString('en-GB')}</p>
          </div>

          <hr className="calc-divider" style={{ marginTop: -12 }} />

          <Link href="/contact" className="calc-cta">
            Talk to Craig about reducing this →
          </Link>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="calc-secondary-link">
            Or book a call directly <ArrowRight size={14} style={{ display: 'inline', verticalAlign: 'middle' }} />
          </a>

          <div style={{ marginTop: 24 }}>
            <ToolLeadCapture
              tool="downtime-cost-calculator"
              resultSummary={`£${totalAnnualCost.toLocaleString('en-GB')} annual downtime cost — ${totalDowntimeHours} hours lost`}
              answers={{ employees, hourlySalary, outagesPerYear, hoursPerOutage, revenuePerHour }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
