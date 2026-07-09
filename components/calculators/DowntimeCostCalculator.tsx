'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';

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

  const inputClass =
    'w-full border border-gray-200 rounded-lg px-4 py-3 text-[#023047] focus:outline-none focus:ring-2 focus:ring-[#219EBC]';
  const labelClass = 'block text-sm font-medium text-gray-700 mb-1 font-[family-name:var(--font-dm-sans)]';

  return (
    <div className="lg:grid lg:grid-cols-2 gap-8">
      {/* Left column — inputs */}
      <div>
        <h2 className="font-[family-name:var(--font-outfit)] text-[#023047] font-semibold text-lg mb-4">
          Your Numbers
        </h2>

        <div className="mb-4">
          <label htmlFor="employees" className={labelClass}>
            Employees affected during an outage
          </label>
          <input
            id="employees"
            type="number"
            min={0}
            value={employees}
            onChange={(e) => setEmployees(Number(e.target.value) || 0)}
            className={inputClass}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="hourlySalary" className={labelClass}>
            Average hourly salary (£)
          </label>
          <input
            id="hourlySalary"
            type="number"
            min={0}
            value={hourlySalary}
            onChange={(e) => setHourlySalary(Number(e.target.value) || 0)}
            className={inputClass}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="outagesPerYear" className={labelClass}>
            Outages per year
          </label>
          <input
            id="outagesPerYear"
            type="number"
            min={0}
            value={outagesPerYear}
            onChange={(e) => setOutagesPerYear(Number(e.target.value) || 0)}
            className={inputClass}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="hoursPerOutage" className={labelClass}>
            Average hours per outage
          </label>
          <input
            id="hoursPerOutage"
            type="number"
            min={0}
            value={hoursPerOutage}
            onChange={(e) => setHoursPerOutage(Number(e.target.value) || 0)}
            className={inputClass}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="revenuePerHour" className={labelClass}>
            Lost revenue per hour (£) — optional
          </label>
          <input
            id="revenuePerHour"
            type="number"
            min={0}
            value={revenuePerHour}
            onChange={(e) => setRevenuePerHour(Number(e.target.value) || 0)}
            className={inputClass}
          />
          <p className="text-xs text-gray-400 mt-1 font-[family-name:var(--font-dm-sans)]">
            (Leave as 0 if you don&apos;t want to include revenue loss)
          </p>
        </div>
      </div>

      {/* Right column — results */}
      <div className="lg:sticky lg:top-24 mt-8 lg:mt-0">
        <div className="bg-[#023047] rounded-xl p-6 text-white">
          <h2 className="font-[family-name:var(--font-outfit)] text-white font-semibold text-lg mb-6">
            Your Annual Cost of Downtime
          </h2>

          {/* Annual Labour Cost */}
          <div className="mb-5">
            <p className="text-sm text-white/70 mb-1 font-[family-name:var(--font-dm-sans)]">
              Annual Labour Cost
            </p>
            <p className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-white">
              £{annualLabourCost.toLocaleString('en-GB')}
            </p>
          </div>

          {/* Annual Revenue Loss */}
          <div className="mb-5">
            <p className="text-sm text-white/70 mb-1 font-[family-name:var(--font-dm-sans)]">
              Annual Revenue Loss
            </p>
            {revenuePerHour === 0 ? (
              <p className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-white/50">
                Not included
              </p>
            ) : (
              <p className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-white">
                £{annualRevenueLoss.toLocaleString('en-GB')}
              </p>
            )}
          </div>

          {/* Total Downtime Hours */}
          <div className="mb-5">
            <p className="text-sm text-white/70 mb-1 font-[family-name:var(--font-dm-sans)]">
              Total Downtime Hours/Year
            </p>
            <p className="text-xl font-bold font-[family-name:var(--font-outfit)] text-white">
              {totalDowntimeHours.toLocaleString('en-GB')} hours
            </p>
          </div>

          {/* Total Annual Cost */}
          <div className="border-t border-white/20 pt-5 mt-5 mb-6">
            <p className="text-sm text-white/70 mb-1 font-[family-name:var(--font-dm-sans)]">
              TOTAL ANNUAL COST
            </p>
            <p className="text-3xl font-bold font-[family-name:var(--font-outfit)] text-white">
              £{totalAnnualCost.toLocaleString('en-GB')}
            </p>
          </div>

          <hr className="border-white/20 mb-6" />

          {/* CTA */}
          <Link
            href="/contact"
            className="block w-full bg-[#FFB703] text-[#023047] font-semibold py-3 rounded-lg text-center font-[family-name:var(--font-dm-sans)] hover:bg-[#e6a603] transition-colors"
          >
            Talk to Craig about reducing this →
          </Link>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center text-sm text-[#8ECAE6] hover:text-white font-medium mt-3">Or book a call directly <ArrowRight size={14} className="inline" /></a>
        </div>
      </div>
    </div>
  );
}
