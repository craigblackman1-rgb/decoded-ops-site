'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';

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
          <label htmlFor="revenuePerHour" className={labelClass}>
            Revenue per hour (£)
          </label>
          <input
            id="revenuePerHour"
            type="number"
            min={0}
            value={revenuePerHour}
            onChange={(e) => setRevenuePerHour(Number(e.target.value) || 0)}
            className={inputClass}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="currentRto" className={labelClass}>
            Current recovery time (hours)
          </label>
          <input
            id="currentRto"
            type="number"
            min={0}
            value={currentRto}
            onChange={(e) => setCurrentRto(Number(e.target.value) || 0)}
            className={inputClass}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="targetRto" className={labelClass}>
            Target recovery time (hours)
          </label>
          <input
            id="targetRto"
            type="number"
            min={0}
            value={targetRto}
            onChange={(e) => setTargetRto(Number(e.target.value) || 0)}
            className={inputClass}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="incidentsPerYear" className={labelClass}>
            Major incidents per year
          </label>
          <input
            id="incidentsPerYear"
            type="number"
            min={0}
            value={incidentsPerYear}
            onChange={(e) => setIncidentsPerYear(Number(e.target.value) || 0)}
            className={inputClass}
          />
        </div>
      </div>

      {/* Right column — results */}
      <div className="lg:sticky lg:top-24 mt-8 lg:mt-0">
        <div className="bg-[#023047] rounded-xl p-6 text-white">
          <h2 className="font-[family-name:var(--font-outfit)] text-white font-semibold text-lg mb-6">
            Recovery Time Value Analysis
          </h2>

          {/* RTO comparison bars */}
          <div className="mb-6">
            {/* Current RTO bar */}
            <div className="mb-3">
              <p className="text-xs text-white/60 mb-1 font-[family-name:var(--font-dm-sans)]">Current</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-white/10 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{ width: `${currentBarPct}%`, backgroundColor: '#219EBC' }}
                  />
                </div>
                <span className="text-xs text-white/80 font-[family-name:var(--font-dm-sans)] w-10 text-right">
                  {currentRto}h
                </span>
              </div>
            </div>

            {/* Target RTO bar */}
            <div>
              <p className="text-xs text-white/60 mb-1 font-[family-name:var(--font-dm-sans)]">Target</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-white/10 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{ width: `${targetBarPct}%`, backgroundColor: '#FFB703' }}
                  />
                </div>
                <span className="text-xs text-white/80 font-[family-name:var(--font-dm-sans)] w-10 text-right">
                  {targetRto}h
                </span>
              </div>
            </div>
          </div>

          {/* Current Annual Recovery Cost */}
          <div className="mb-5">
            <p className="text-sm text-white/70 mb-1 font-[family-name:var(--font-dm-sans)]">
              Current Annual Recovery Cost
            </p>
            <p className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-white">
              £{currentAnnualCost.toLocaleString('en-GB')}
            </p>
          </div>

          {/* Target Annual Recovery Cost */}
          <div className="mb-5">
            <p className="text-sm text-white/70 mb-1 font-[family-name:var(--font-dm-sans)]">
              Target Annual Recovery Cost
            </p>
            <p className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-white">
              £{targetAnnualCost.toLocaleString('en-GB')}
            </p>
            <p className="text-xs text-white/50 mt-0.5 font-[family-name:var(--font-dm-sans)]">
              with improved RTO
            </p>
          </div>

          {/* Annual Saving */}
          <div className="mb-5">
            <p className="text-sm text-white/70 mb-1 font-[family-name:var(--font-dm-sans)]">
              Annual Saving
            </p>
            <p className="text-2xl font-bold font-[family-name:var(--font-outfit)]" style={{ color: '#FFB703' }}>
              £{annualSaving.toLocaleString('en-GB')}
            </p>
          </div>

          {/* 3-Year Saving */}
          <div className="border-t border-white/20 pt-5 mt-5 mb-6">
            <p className="text-sm text-white/70 mb-1 font-[family-name:var(--font-dm-sans)]">
              3-YEAR SAVING
            </p>
            <p className="text-3xl font-bold font-[family-name:var(--font-outfit)] text-white">
              £{threeYearSaving.toLocaleString('en-GB')}
            </p>
          </div>

          <hr className="border-white/20 mb-6" />

          {/* CTA */}
          <Link
            href="/contact"
            className="block w-full bg-[#FFB703] text-[#023047] font-semibold py-3 rounded-lg text-center font-[family-name:var(--font-dm-sans)] hover:bg-[#e6a603] transition-colors"
          >
            Get your RTO reviewed →
          </Link>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center text-sm text-[#8ECAE6] hover:text-white font-medium mt-3">Or book a call directly <ArrowRight size={14} className="inline" /></a>
        </div>
      </div>
    </div>
  );
}
