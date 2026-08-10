'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
import './calculators.css';

const gbp = (n: number) =>
  '£' + Math.round(n).toLocaleString('en-GB');

export function DowntimeCostCalculator() {
  // Step 1: what an hour of your operation actually costs
  const [annualOverhead, setAnnualOverhead] = useState<number>(180000);
  const [resources, setResources] = useState<number>(4);
  const [hoursPerDay, setHoursPerDay] = useState<number>(8);
  const [daysPerWeek, setDaysPerWeek] = useState<number>(5);
  const [weeksPerYear, setWeeksPerYear] = useState<number>(46);
  const [utilisation, setUtilisation] = useState<number>(65);

  // Step 2: what you lose when it stops
  const [outagesPerYear, setOutagesPerYear] = useState<number>(12);
  const [hoursPerOutage, setHoursPerOutage] = useState<number>(2);
  const [peopleIdle, setPeopleIdle] = useState<number>(6);
  const [labourRate, setLabourRate] = useState<number>(18);
  const [jobsLost, setJobsLost] = useState<number>(0);
  const [avgJobValue, setAvgJobValue] = useState<number>(450);

  const theoreticalHours = resources * hoursPerDay * daysPerWeek * weeksPerYear;
  const productiveHours = theoreticalHours * (utilisation / 100);
  const recoveryRate = productiveHours > 0 ? annualOverhead / productiveHours : 0;

  const hoursLost = outagesPerYear * hoursPerOutage;
  const unrecoveredOverhead = hoursLost * recoveryRate;
  const idleLabour = hoursLost * peopleIdle * labourRate;
  const lostWork = jobsLost * avgJobValue;
  const totalAnnual = unrecoveredOverhead + idleLabour + lostWork;

  const costPerHourDown = recoveryRate + peopleIdle * labourRate;
  const costPerDayDown = costPerHourDown * hoursPerDay;
  const pctOfOverhead = annualOverhead > 0 ? (totalAnnual / annualOverhead) * 100 : 0;

  return (
    <div className="calc-grid">
      {/* ── Inputs ─────────────────────────────────────────────── */}
      <div>
        <div className="calc-section">
          <p className="calc-step">Step 1</p>
          <h2 className="calc-section-h">What an hour of your operation costs</h2>
          <p className="calc-section-note">
            Most people can&apos;t answer this off the top of their head, which is why the cost of
            losing an hour never gets worked out. Build it up here first.
          </p>

          <div className="calc-input-group">
            <label htmlFor="annualOverhead" className="calc-label">
              Annual overhead (£)
            </label>
            <input
              id="annualOverhead" type="number" min={0} value={annualOverhead}
              onChange={(e) => setAnnualOverhead(Number(e.target.value) || 0)}
              className="calc-input"
            />
            <details className="calc-details">
              <summary>What counts as overhead, and the bits people leave out</summary>
              <p>
                Everything that doesn&apos;t change job by job. Rent and rates. Utilities. Insurance.
                Machine finance, leases and depreciation. Software subscriptions. Admin, management
                and your own salary. Vehicles and fuel. Accountancy and professional fees.
                Maintenance contracts.
              </p>
              <p>
                It does not include the garment, the thread, the film, the ink or the transfer.
                Those are direct costs and they belong to the job, not the hour.
              </p>
              <p>
                The three most commonly missed: your own salary, machine depreciation, and the
                software you forgot you were paying monthly for.
              </p>
            </details>
          </div>

          <div className="calc-row">
            <div className="calc-input-group">
              <label htmlFor="resources" className="calc-label">Production resources</label>
              <input
                id="resources" type="number" min={0} value={resources}
                onChange={(e) => setResources(Number(e.target.value) || 0)}
                className="calc-input"
              />
              <p className="calc-hint">Machines or stations that can run work</p>
            </div>
            <div className="calc-input-group">
              <label htmlFor="hoursPerDay" className="calc-label">Hours per day</label>
              <input
                id="hoursPerDay" type="number" min={0} value={hoursPerDay}
                onChange={(e) => setHoursPerDay(Number(e.target.value) || 0)}
                className="calc-input"
              />
            </div>
          </div>

          <div className="calc-row">
            <div className="calc-input-group">
              <label htmlFor="daysPerWeek" className="calc-label">Days per week</label>
              <input
                id="daysPerWeek" type="number" min={0} value={daysPerWeek}
                onChange={(e) => setDaysPerWeek(Number(e.target.value) || 0)}
                className="calc-input"
              />
            </div>
            <div className="calc-input-group">
              <label htmlFor="weeksPerYear" className="calc-label">Working weeks a year</label>
              <input
                id="weeksPerYear" type="number" min={0} value={weeksPerYear}
                onChange={(e) => setWeeksPerYear(Number(e.target.value) || 0)}
                className="calc-input"
              />
              <p className="calc-hint">52 less holidays and shutdown</p>
            </div>
          </div>

          <div className="calc-input-group">
            <label htmlFor="utilisation" className="calc-label">
              Realistic utilisation: {utilisation}%
            </label>
            <input
              id="utilisation" type="range" min={10} max={100} step={5} value={utilisation}
              onChange={(e) => setUtilisation(Number(e.target.value) || 0)}
              className="calc-range"
            />
            <p className="calc-hint">
              The share of available hours actually spent producing, after setup, changeover,
              maintenance, reruns and hours with nothing booked in. This is the number that gets
              assumed at 100%, and it is the single biggest reason businesses underprice.
            </p>
          </div>

          <div className="calc-derived">
            <div>
              <span className="calc-derived-label">Productive hours a year</span>
              <span className="calc-derived-value">
                {Math.round(productiveHours).toLocaleString('en-GB')}
              </span>
            </div>
            <p className="calc-derived-note">
              Out of {Math.round(theoreticalHours).toLocaleString('en-GB')} theoretical hours. The
              gap is the part nobody prices.
            </p>
          </div>
        </div>

        <div className="calc-section">
          <p className="calc-step">Step 2</p>
          <h2 className="calc-section-h">What happens when it stops</h2>

          <div className="calc-row">
            <div className="calc-input-group">
              <label htmlFor="outagesPerYear" className="calc-label">Outages a year</label>
              <input
                id="outagesPerYear" type="number" min={0} value={outagesPerYear}
                onChange={(e) => setOutagesPerYear(Number(e.target.value) || 0)}
                className="calc-input"
              />
            </div>
            <div className="calc-input-group">
              <label htmlFor="hoursPerOutage" className="calc-label">Average hours each</label>
              <input
                id="hoursPerOutage" type="number" min={0} value={hoursPerOutage}
                onChange={(e) => setHoursPerOutage(Number(e.target.value) || 0)}
                className="calc-input"
              />
            </div>
          </div>

          <div className="calc-row">
            <div className="calc-input-group">
              <label htmlFor="peopleIdle" className="calc-label">People stood idle</label>
              <input
                id="peopleIdle" type="number" min={0} value={peopleIdle}
                onChange={(e) => setPeopleIdle(Number(e.target.value) || 0)}
                className="calc-input"
              />
            </div>
            <div className="calc-input-group">
              <label htmlFor="labourRate" className="calc-label">Cost per person / hr (£)</label>
              <input
                id="labourRate" type="number" min={0} value={labourRate}
                onChange={(e) => setLabourRate(Number(e.target.value) || 0)}
                className="calc-input"
              />
              <p className="calc-hint">Wage plus NI and pension</p>
            </div>
          </div>

          <div className="calc-row">
            <div className="calc-input-group">
              <label htmlFor="jobsLost" className="calc-label">Jobs scrapped or missed a year</label>
              <input
                id="jobsLost" type="number" min={0} value={jobsLost}
                onChange={(e) => setJobsLost(Number(e.target.value) || 0)}
                className="calc-input"
              />
            </div>
            <div className="calc-input-group">
              <label htmlFor="avgJobValue" className="calc-label">Average job value (£)</label>
              <input
                id="avgJobValue" type="number" min={0} value={avgJobValue}
                onChange={(e) => setAvgJobValue(Number(e.target.value) || 0)}
                className="calc-input"
              />
            </div>
          </div>
          <p className="calc-hint" style={{ marginTop: -8 }}>
            In this sector the deadline doesn&apos;t move. Kit needed Friday for a Saturday match is
            worth nothing on Monday, so a missed deadline is a scrapped job rather than a late one.
          </p>
        </div>
      </div>

      {/* ── Results ────────────────────────────────────────────── */}
      <div>
        <div className="calc-panel">
          <h2>Your numbers</h2>

          <div className="calc-stat">
            <p className="calc-stat-label">Overhead recovery rate</p>
            <p className="calc-stat-value calc-stat-value--large calc-stat-value--amber">
              {gbp(recoveryRate)}<span style={{ fontSize: 'var(--do-text-base)' }}> / productive hour</span>
            </p>
            <p className="calc-stat-sub">
              What every productive hour has to earn before materials and before any profit.
            </p>
          </div>

          <hr className="calc-divider" />

          <div className="calc-stat">
            <p className="calc-stat-label">One hour down costs</p>
            <p className="calc-stat-value">{gbp(costPerHourDown)}</p>
          </div>

          <div className="calc-stat">
            <p className="calc-stat-label">One full day down costs</p>
            <p className="calc-stat-value">{gbp(costPerDayDown)}</p>
          </div>

          <hr className="calc-divider" />

          <table className="calc-table">
            <thead>
              <tr><th>At {hoursLost.toLocaleString('en-GB')} hours lost a year</th><th>Cost</th></tr>
            </thead>
            <tbody>
              <tr><td>Overhead you still paid but never recovered</td><td>{gbp(unrecoveredOverhead)}</td></tr>
              <tr><td>Wages for people who couldn&apos;t work</td><td>{gbp(idleLabour)}</td></tr>
              <tr>
                <td>Work scrapped or missed</td>
                <td>{jobsLost === 0 ? <span className="calc-stat-value--muted">Not included</span> : gbp(lostWork)}</td>
              </tr>
            </tbody>
          </table>

          <div className="calc-block-divider">
            <p className="calc-stat-label">TOTAL ANNUAL COST OF DOWNTIME</p>
            <p className="calc-stat-value calc-stat-value--large">{gbp(totalAnnual)}</p>
            {totalAnnual > 0 && annualOverhead > 0 && (
              <p className="calc-stat-sub">
                That is {pctOfOverhead.toFixed(1)}% of your annual overhead, spent on hours that
                produced nothing.
              </p>
            )}
          </div>

          <Link href="/contact" className="calc-cta">
            Talk to Craig about reducing this →
          </Link>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="calc-secondary-link">
            Or book a call directly <ArrowRight size={14} style={{ display: 'inline', verticalAlign: 'middle' }} />
          </a>
        </div>
      </div>
    </div>
  );
}
