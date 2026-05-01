'use client';

import { useState } from 'react';
import Link from 'next/link';

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

  const savingColor = (n: number) => {
    if (n > 0) return '#4ade80';
    if (n < 0) return '#f87171';
    return 'white';
  };

  const inputClass =
    'w-full border border-gray-200 rounded-lg px-4 py-3 text-[#023047] focus:outline-none focus:ring-2 focus:ring-[#219EBC]';
  const labelClass =
    'block text-sm font-medium text-gray-700 mb-1 font-[family-name:var(--font-dm-sans)]';

  return (
    <div className="lg:grid lg:grid-cols-2 gap-8">
      {/* Left column — inputs */}
      <div>
        <h2 className="font-[family-name:var(--font-outfit)] text-[#023047] font-semibold text-lg mb-4">
          Your Numbers
        </h2>

        <div className="mb-4">
          <label htmlFor="hoursPerWeek" className={labelClass}>
            Hours per week on this manual task
          </label>
          <input
            id="hoursPerWeek"
            type="number"
            min={0}
            value={hoursPerWeek}
            onChange={(e) => setHoursPerWeek(Number(e.target.value) || 0)}
            className={inputClass}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="staffCount" className={labelClass}>
            Number of staff doing it
          </label>
          <input
            id="staffCount"
            type="number"
            min={0}
            value={staffCount}
            onChange={(e) => setStaffCount(Number(e.target.value) || 0)}
            className={inputClass}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="hourlyRate" className={labelClass}>
            Average hourly rate (£)
          </label>
          <input
            id="hourlyRate"
            type="number"
            min={0}
            value={hourlyRate}
            onChange={(e) => setHourlyRate(Number(e.target.value) || 0)}
            className={inputClass}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="setupCost" className={labelClass}>
            One-off automation setup cost (£)
          </label>
          <input
            id="setupCost"
            type="number"
            min={0}
            value={setupCost}
            onChange={(e) => setSetupCost(Number(e.target.value) || 0)}
            className={inputClass}
          />
          <p className="text-xs text-gray-400 mt-1 font-[family-name:var(--font-dm-sans)]">
            (Include all implementation and integration costs)
          </p>
        </div>

        <div className="mb-4">
          <label htmlFor="monthlyMaintenance" className={labelClass}>
            Monthly automation maintenance cost (£)
          </label>
          <input
            id="monthlyMaintenance"
            type="number"
            min={0}
            value={monthlyMaintenance}
            onChange={(e) => setMonthlyMaintenance(Number(e.target.value) || 0)}
            className={inputClass}
          />
        </div>
      </div>

      {/* Right column — results */}
      <div className="lg:sticky lg:top-24 mt-8 lg:mt-0">
        <div className="bg-[#023047] rounded-xl p-6 text-white">
          <h2 className="font-[family-name:var(--font-outfit)] text-white font-semibold text-lg mb-6">
            Automation ROI Analysis
          </h2>

          {/* Comparison table */}
          <table className="w-full text-sm mb-6">
            <thead>
              <tr className="text-white/60 font-[family-name:var(--font-dm-sans)] text-xs border-b border-white/20">
                <th className="text-left pb-2 font-medium">Year</th>
                <th className="text-right pb-2 font-medium">Manual Cost</th>
                <th className="text-right pb-2 font-medium">Auto Cost</th>
                <th className="text-right pb-2 font-medium">Saving</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: 'Year 1', autoCost: year1AutomationCost, saving: year1Saving },
                { label: 'Year 2', autoCost: year2AutomationCost, saving: year2Saving },
                { label: 'Year 3', autoCost: year3AutomationCost, saving: year3Saving },
              ].map(({ label, autoCost, saving }) => (
                <tr
                  key={label}
                  className="font-[family-name:var(--font-dm-sans)] border-b border-white/10"
                >
                  <td className="py-2 text-white/80">{label}</td>
                  <td className="py-2 text-right text-white/80">{fmt(annualManualCost)}</td>
                  <td className="py-2 text-right text-white/80">{fmt(autoCost)}</td>
                  <td className="py-2 text-right font-medium" style={{ color: savingColor(saving) }}>
                    {fmt(saving)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Break-even */}
          <div className="mb-5">
            <p className="text-sm text-white/70 mb-1 font-[family-name:var(--font-dm-sans)]">
              Break-even
            </p>
            {breakEvenMonths !== null ? (
              <p className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-white">
                {breakEvenMonths} months
              </p>
            ) : (
              <p className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-white/50">
                Not achievable
              </p>
            )}
          </div>

          {/* 3-Year ROI */}
          <div className="border-t border-white/20 pt-5 mt-5 mb-6">
            <p className="text-sm text-white/70 mb-1 font-[family-name:var(--font-dm-sans)]">
              3-YEAR ROI
            </p>
            <p
              className="text-3xl font-bold font-[family-name:var(--font-outfit)]"
              style={{ color: roiPercent >= 0 ? '#FFB703' : '#f87171' }}
            >
              {roiPercent}%
            </p>
          </div>

          <hr className="border-white/20 mb-6" />

          {/* CTA */}
          <Link
            href="/contact"
            className="block w-full bg-[#FFB703] text-[#023047] font-semibold py-3 rounded-lg text-center font-[family-name:var(--font-dm-sans)] hover:bg-[#e6a603] transition-colors"
          >
            Let&apos;s automate this together →
          </Link>
        </div>
      </div>
    </div>
  );
}
