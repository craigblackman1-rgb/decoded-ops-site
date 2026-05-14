'use client';

import React from 'react';

interface WorkstreamTimeline {
  months: string[];
  phases: Array<{ label: string; color: string; rows: number[] }>;
  workstreams: Array<{ label: string; color: string; cells: boolean[] }>;
  footnote?: string;
}

interface RoadmapData {
  tag: string;
  title: string;
  subtitle: string;
  phases: Array<{
    name: string;
    duration: string;
    details: string;
    order: number;
  }>;
  timeline: Array<{
    workstream: string;
    months: string[];
  }>;
  workstreamTimeline?: WorkstreamTimeline;
}

// Hardcoded TackleBag data — used as fallback when workstreamTimeline is not provided
const TACKLEBAG_MONTHS = ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Q1 '27", "Q2 '27", "Q3+"];

const TACKLEBAG_PHASE_ROWS: Array<{ label: string; color: string; rows: number[] }> = [
  { label: 'PHASE 1 · Foundations & 8 Quick Wins', color: '#FB8500', rows: [0, 1, 2, 3, 4, 5, 6, 7] },
  { label: 'PHASE 2 · Commercial Engine & AI Integration', color: '#219EBC', rows: [8, 9, 10, 11] },
  { label: 'PHASE 3 · Future-State Foundation', color: '#023047', rows: [12, 13, 14, 15, 16] },
];

const TACKLEBAG_ROW_COLORS = [
  '#C62828', '#FB8500', '#4ade80', '#FFB703', '#FFB703',
  '#8ECAE6', '#219EBC', '#219EBC', '#219EBC', '#8ECAE6',
  '#888', '#023047', '#023047', '#023047', '#219EBC',
  '#888', '#023047',
];

const TACKLEBAG_WORKSTREAM_LABELS = [
  'QW1 · IT Infrastructure',
  'QW2 · PCI DSS Compliance',
  'QW3 · Warehouse 5S & Bins',
  'QW4 · SKU / Barcode Standard',
  'QW5 · Production Job Sheet App',
  'QW6 · Stock Control App',
  'QW7 · Demand Forecasting',
  'QW8 · Symphony → Accounts',
  'CRM & Email Automation',
  'Website SEO (AI-assisted)',
  'AI Integration Starter',
  'Cross-sell / Upsell',
  'Design Workflow',
  'ERP Evaluation (Tracker · Pantha · Khaos · Orderflo)',
  'ERP Selection + SOW',
  'ERP Implementation',
  'New Ecommerce',
];

const TACKLEBAG_TIMELINE_CELLS: boolean[][] = [
  [true,true,false,false,false,false,false,false,false,false],
  [true,true,false,false,false,false,false,false,false,false],
  [true,true,false,false,false,false,false,false,false,false],
  [true,true,false,false,false,false,false,false,false,false],
  [true,true,true,false,false,false,false,false,false,false],
  [true,true,true,false,false,false,false,false,false,false],
  [true,true,false,false,false,false,false,false,false,false],
  [true,true,false,false,false,false,false,false,false,false],
  [false,false,true,true,true,false,false,false,false,false],
  [false,false,true,true,true,false,false,false,false,false],
  [false,false,false,true,true,false,false,false,false,false],
  [false,false,true,true,false,false,false,false,false,false],
  [false,false,false,true,true,true,false,false,false,false],
  [false,false,false,false,false,true,true,true,false,false],
  [false,false,false,false,false,false,false,true,true,false],
  [false,false,false,false,false,false,false,false,true,true],
  [false,false,false,false,false,false,false,false,false,true],
];

const TACKLEBAG_FOOTNOTE = '⚡ Phase 1 completes before August peak — no new implementations during your busiest months';

// Matches the HTML stack-layer styling exactly — bottom to top order
const LAYER_STYLES = [
  { ml: '0px',   bg: 'rgba(255,183,3,0.12)',    border: '#FFB703', dot: true },
  { ml: '40px',  bg: 'rgba(251,133,0,0.12)',    border: '#FB8500', dot: false },
  { ml: '80px',  bg: 'rgba(33,158,188,0.12)',   border: '#219EBC', dot: false },
  { ml: '120px', bg: 'rgba(21,101,192,0.15)',   border: '#4FC3F7', dot: false },
  { ml: '160px', bg: 'rgba(33,158,188,0.1)',    border: '#023047', dot: false },
];

function TimelineTable({
  months,
  phaseRows,
  workstreamLabels,
  timelineCells,
  rowColors,
  footnote,
}: {
  months: string[];
  phaseRows: Array<{ label: string; color: string; rows: number[] }>;
  workstreamLabels: string[];
  timelineCells: boolean[][];
  rowColors: string[];
  footnote: string;
}) {
  return (
    <div className="overflow-x-auto pb-3">
      <table className="border-collapse" style={{ minWidth: '800px', width: '100%' }}>
        <thead>
          <tr className="bg-[rgba(255,255,255,0.05)]">
            <th className="px-4 py-2.5 text-xs font-semibold text-[#8ECAE6] tracking-widest text-left border border-[rgba(255,255,255,0.06)] min-w-[180px]">
              Workstream
            </th>
            {months.map((m) => (
              <th key={m} className="px-2 py-2.5 text-xs font-semibold text-[#8ECAE6] tracking-widest text-center border border-[rgba(255,255,255,0.06)]">
                {m}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {phaseRows.map((phase) => (
            <React.Fragment key={phase.label}>
              <tr>
                <td
                  colSpan={months.length + 1}
                  className="px-4 py-2 text-xs font-bold tracking-widest text-white uppercase"
                  style={{ background: phase.color }}
                >
                  {phase.label}
                </td>
              </tr>
              {phase.rows.map((ri) => {
                const color = rowColors[ri] || '#219EBC';
                const cells = timelineCells[ri] || [];
                return (
                  <tr key={ri} className="hover:bg-[rgba(255,255,255,0.02)]">
                    <td className="px-4 py-2 text-xs text-[rgba(255,255,255,0.7)] border border-[rgba(255,255,255,0.06)] h-10">
                      {workstreamLabels[ri]}
                    </td>
                    {cells.map((filled, j) => (
                      <td
                        key={j}
                        className={`h-10 relative ${filled ? 'border border-[rgba(255,255,255,0.06)]' : ''}`}
                        style={filled ? { background: `${color}20`, borderColor: `${color}40` } : {}}
                      >
                        {filled ? (
                          <div
                            className="absolute inset-x-1 top-1/2 -translate-y-1/2 h-1 rounded"
                            style={{ background: color }}
                          />
                        ) : null}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-[#8ECAE6] opacity-50 text-center mt-3">{footnote}</p>
    </div>
  );
}

export default function RoadmapSection({ data }: { data: RoadmapData }) {
  const sorted = [...data.phases].sort((a, b) => b.order - a.order);
  const wt = data.workstreamTimeline;

  // Build props for the timeline table — data-driven if workstreamTimeline exists, otherwise TackleBag fallback
  const timelineProps = wt
    ? {
        months: wt.months,
        phaseRows: wt.phases,
        workstreamLabels: wt.workstreams.map((w) => w.label),
        timelineCells: wt.workstreams.map((w) => w.cells),
        rowColors: wt.workstreams.map((w) => w.color),
        footnote: wt.footnote || '',
      }
    : {
        months: TACKLEBAG_MONTHS,
        phaseRows: TACKLEBAG_PHASE_ROWS,
        workstreamLabels: TACKLEBAG_WORKSTREAM_LABELS,
        timelineCells: TACKLEBAG_TIMELINE_CELLS,
        rowColors: TACKLEBAG_ROW_COLORS,
        footnote: TACKLEBAG_FOOTNOTE,
      };

  return (
    <section className="bg-[#023047] text-white px-5 py-24 md:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <div className="text-xs font-bold tracking-widest text-[#219EBC] uppercase mb-3">
            {data.tag}
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-4 leading-tight">
            {data.title.split('\n').map((l, i) => <div key={i}>{l}</div>)}
          </h2>
          <p className="text-base lg:text-lg text-[#8ECAE6]">{data.subtitle}</p>
        </div>

        {/* Stack layers — bottom to top in the DOM = top to bottom visually */}
        <div className="flex flex-col gap-1 mb-14">
          {sorted.map((phase, i) => {
            const s = LAYER_STYLES[i] || LAYER_STYLES[0];
            return (
              <div
                key={i}
                className="flex justify-between items-center px-7 py-5 rounded-lg cursor-pointer transition-all duration-300"
                style={{
                  marginLeft: s.ml,
                  background: s.bg,
                  borderLeft: `4px solid ${s.border}`,
                }}
              >
                <div className="text-sm font-bold text-white">{phase.name}</div>
                <div className="flex items-center gap-3">
                  <div className="text-xs font-medium opacity-60 text-[#8ECAE6]">{phase.duration}</div>
                  {s.dot && (
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{
                        background: s.border,
                        boxShadow: `0 0 12px ${s.border}`,
                        animation: 'dotPulse 2s infinite',
                      }}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {data.workstreamTimeline && <TimelineTable {...timelineProps} />}

        <style>{`
          @keyframes dotPulse {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50%       { opacity: 1;   transform: scale(1.4); }
          }
        `}</style>
      </div>
    </section>
  );
}
