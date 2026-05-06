'use client';

import { useState } from 'react';

export default function SystemsDiagram() {
  const [state, setState] = useState<'current' | 'future'>('current');

  return (
    <div className="bg-[#023047] rounded-2xl p-12 text-white">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Current State vs. Future State</h3>
        <p className="text-[#8ECAE6] text-sm max-w-2xl mx-auto">
          Your systems are disconnected and manual. We'll consolidate them into a single, integrated platform that flows data cleanly into your future ERP.
        </p>
      </div>

      {/* Toggle Buttons */}
      <div className="flex gap-0 bg-[rgba(255,255,255,0.05)] rounded-lg overflow-hidden width-fit-content mx-auto mb-8 w-fit">
        <button
          onClick={() => setState('current')}
          className={`px-6 py-2 text-sm font-semibold transition-all ${
            state === 'current'
              ? 'bg-[#219EBC] text-white'
              : 'bg-transparent text-[rgba(255,255,255,0.5)] hover:text-[rgba(255,255,255,0.7)]'
          }`}
        >
          Current (Chaos)
        </button>
        <button
          onClick={() => setState('future')}
          className={`px-6 py-2 text-sm font-semibold transition-all ${
            state === 'future'
              ? 'bg-[#219EBC] text-white'
              : 'bg-transparent text-[rgba(255,255,255,0.5)] hover:text-[rgba(255,255,255,0.7)]'
          }`}
        >
          Future (Clarity)
        </button>
      </div>

      {/* Diagrams */}
      <svg
        viewBox="0 0 1000 380"
        className="w-full max-w-4xl mx-auto"
        style={{ height: 'auto' }}
      >
        {/* Define gradients and styles */}
        <defs>
          <style>{`
            .system-box { fill: ${state === 'current' ? 'rgba(251,133,0,0.1)' : 'rgba(33,158,188,0.1)'}; stroke: ${state === 'current' ? '#FB8500' : '#219EBC'}; stroke-width: 2; }
            .system-text { font-family: Inter, sans-serif; font-size: 12px; font-weight: 600; fill: #fff; text-anchor: middle; }
            .system-label { font-family: Inter, sans-serif; font-size: 11px; fill: ${state === 'current' ? '#FFB703' : '#8ECAE6'}; text-anchor: middle; }
            .flow-line { stroke: ${state === 'current' ? 'rgba(251,133,0,0.4)' : 'rgba(33,158,188,0.4)'}; stroke-width: 2; fill: none; }
            .flow-manual { stroke-dasharray: 5,5; stroke: ${state === 'current' ? '#FFB703' : '#FFB703'}; opacity: ${state === 'current' ? '1' : '0.3'}; }
            .flow-auto { stroke: ${state === 'current' ? '#FB8500' : '#219EBC'}; opacity: ${state === 'current' ? '0.3' : '1'}; }
            .node-circle { r: 6; fill: ${state === 'current' ? '#FB8500' : '#219EBC'}; }
            .icon-text { font-family: Inter, sans-serif; font-size: 24px; }
          `}</style>
        </defs>

        {/* Current State */}
        {state === 'current' && (
          <>
            {/* Symphony ERP */}
            <rect x="50" y="30" width="120" height="80" className="system-box" rx="8" />
            <text x="110" y="50" className="system-text">
              Symphony
            </text>
            <text x="110" y="68" className="system-label">
              ERP
            </text>
            <text x="110" y="95" className="icon-text">
              💾
            </text>

            {/* Excel Sheets */}
            <rect x="220" y="30" width="120" height="80" className="system-box" rx="8" />
            <text x="280" y="50" className="system-text">
              Excel Sheets
            </text>
            <text x="280" y="68" className="system-label">
              (manual)
            </text>
            <text x="280" y="95" className="icon-text">
              📊
            </text>

            {/* Email */}
            <rect x="390" y="30" width="120" height="80" className="system-box" rx="8" />
            <text x="450" y="50" className="system-text">
              Email
            </text>
            <text x="450" y="68" className="system-label">
              (job briefs)
            </text>
            <text x="450" y="95" className="icon-text">
              📧
            </text>

            {/* Handwritten Notes */}
            <rect x="560" y="30" width="120" height="80" className="system-box" rx="8" />
            <text x="620" y="50" className="system-text">
              Hand Notes
            </text>
            <text x="620" y="68" className="system-label">
              (informal)
            </text>
            <text x="620" y="95" className="icon-text">
              ✍️
            </text>

            {/* Slack Messages */}
            <rect x="730" y="30" width="120" height="80" className="system-box" rx="8" />
            <text x="790" y="50" className="system-text">
              Slack
            </text>
            <text x="790" y="68" className="system-label">
              (scattered)
            </text>
            <text x="790" y="95" className="icon-text">
              💬
            </text>

            {/* Problems Below */}
            <text x="500" y="180" className="system-text" fontSize="14" fontWeight="bold">
              Results:
            </text>
            <text x="500" y="205" className="system-label">
              • Demand forecasting done manually (error-prone)
            </text>
            <text x="500" y="225" className="system-label">
              • Duplicate data entry across systems
            </text>
            <text x="500" y="245" className="system-label">
              • Stock levels in Excel, not Symphony (decisions made on stale data)
            </text>
            <text x="500" y="265" className="system-label">
              • Customer comms & job briefs written from scratch each time
            </text>
            <text x="500" y="285" className="system-label">
              • No visibility: peak demand not predicted until orders arrive
            </text>
            <text x="500" y="305" className="system-label">
              • Impossible to automate anything downstream
            </text>

            {/* Messy Connections */}
            <path d="M 170 70 L 220 70" className="flow-line flow-manual" />
            <path d="M 340 70 L 390 70" className="flow-line flow-manual" />
            <path d="M 510 70 L 560 70" className="flow-line flow-manual" />
            <path d="M 680 70 L 730 70" className="flow-line flow-manual" />
          </>
        )}

        {/* Future State */}
        {state === 'future' && (
          <>
            {/* Decoded Ops Platform */}
            <rect x="100" y="30" width="800" height="80" className="system-box" rx="8" />
            <text x="500" y="50" className="system-text" fontSize="16" fontWeight="bold">
              Decoded Ops Integrated Platform
            </text>
            <text x="500" y="75" className="system-label" fontSize="12">
              (Stock Control · Job Briefing · Demand Forecast · Symphony Integration)
            </text>

            {/* Connections to External Systems */}

            {/* Symphony Input */}
            <rect x="50" y="180" width="100" height="70" className="system-box" rx="8" />
            <text x="100" y="200" className="system-text" fontSize="12">
              Symphony
            </text>
            <text x="100" y="230" className="icon-text">
              💾
            </text>
            <path d="M 150 215 L 400 120" className="flow-line flow-auto" markerEnd="url(#arrowhead)" />
            <text x="250" y="160" className="system-label" fontSize="11">
              Live data sync
            </text>

            {/* Web App Output */}
            <rect x="280" y="180" width="100" height="70" className="system-box" rx="8" />
            <text x="330" y="200" className="system-text" fontSize="12">
              Web App
            </text>
            <text x="330" y="230" className="icon-text">
              💻
            </text>
            <path d="M 330 160 L 330 180" className="flow-line flow-auto" markerEnd="url(#arrowhead)" />
            <text x="350" y="172" className="system-label" fontSize="11">
              Teams use
            </text>

            {/* Forecast Output */}
            <rect x="510" y="180" width="100" height="70" className="system-box" rx="8" />
            <text x="560" y="200" className="system-text" fontSize="12">
              Forecast
            </text>
            <text x="560" y="230" className="icon-text">
              📈
            </text>
            <path d="M 600 160 L 650 180" className="flow-line flow-auto" markerEnd="url(#arrowhead)" />
            <text x="620" y="172" className="system-label" fontSize="11">
              Auto-generated
            </text>

            {/* Back to Symphony */}
            <rect x="740" y="180" width="100" height="70" className="system-box" rx="8" />
            <text x="790" y="200" className="system-text" fontSize="12">
              Symphony
            </text>
            <text x="790" y="225" className="system-label" fontSize="11">
              (Purchasing)
            </text>
            <text x="790" y="240" className="icon-text">
              🔄
            </text>
            <path d="M 700 120 L 750 180" className="flow-line flow-auto" markerEnd="url(#arrowhead)" />
            <text x="720" y="148" className="system-label" fontSize="11">
              Auto-orders
            </text>

            {/* Benefits Below */}
            <text x="500" y="305" className="system-text" fontSize="14" fontWeight="bold">
              Results:
            </text>
            <text x="500" y="330" className="system-label">
              • Demand forecasting automated from Symphony sales data
            </text>
            <text x="500" y="350" className="system-label">
              • Single source of truth; real-time stock visibility
            </text>
            <text x="500" y="370" className="system-label">
              • Automatic reorder triggers when stock hits threshold
            </text>
            <text x="500" y="390" className="system-label">
              • Job briefs auto-generated from orders; zero manual copy work
            </text>

            {/* Arrow marker */}
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#219EBC" />
              </marker>
            </defs>
          </>
        )}
      </svg>
    </div>
  );
}
