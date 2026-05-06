'use client';

import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Stock {
  school: string;
  product: string;
  sku: string;
  stock: number;
  min: number;
  status: 'ok' | 'low' | 'out';
}

interface DemoData {
  tag: string;
  title: string;
  subtitle: string;
  stocks: Stock[];
}

const statusStyles = {
  ok: 'bg-[#E8F5E9] text-[#1B5E20]',
  low: 'bg-[#FFF8E1] text-[#E65100]',
  out: 'bg-[#FFEBEE] text-[#C62828]',
};

const forecastChartData = {
  labels: ['Jul W1', 'Jul W2', 'Jul W3', 'Aug W1', 'Aug W2', 'Aug W3', 'Aug W4', 'Sep W1', 'Sep W2', 'Sep W3'],
  datasets: [
    {
      label: 'Orders',
      data: [42, 55, 78, 95, 140, 165, 180, 172, 120, 85],
      backgroundColor: 'rgba(33, 158, 188, 0.1)',
      borderColor: '#219EBC',
      borderWidth: 2,
      borderRadius: 4,
      fill: true,
      tension: 0.4,
      pointBackgroundColor: '#219EBC',
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
      pointRadius: 5,
    },
  ],
};

export default function DemoSection({ data }: { data: DemoData }) {
  const [isSimulating, setIsSimulating] = useState(false);
  const [simLog, setSimLog] = useState<string[]>([]);
  const [stocks, setStocks] = useState(data.stocks);

  const handleSimulate = () => {
    setIsSimulating(true);
    setSimLog([]);

    const messages = [
      '→ Processing orders for week of July 15...',
      '→ Canterbury teamwear: -18 units (peak season)',
      '→ Checking stock levels: LOW on item SKU-402',
      '✓ Auto-reorder triggered for SKU-402 (min: 20, current: 8)',
      '→ Stock holding optimized: +£2.3k freed',
      '✓ Forecast updated: demand peak detected Aug 1–15',
      '✓ Simulation complete',
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < messages.length) {
        setSimLog((prev) => [...prev, messages[i]]);
        i++;
      } else {
        setIsSimulating(false);
        clearInterval(interval);
      }
    }, 400);
  };

  return (
    <section className="bg-[#F8F9FA] text-[#023047] px-8 py-20 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="text-xs font-bold tracking-widest text-[#219EBC] uppercase mb-3">
            {data.tag}
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-4">{data.title}</h2>
          <p className="text-lg text-[rgba(2,48,71,0.6)] max-w-2xl">
            {data.subtitle}
          </p>
        </div>

        {/* Browser Frame */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-[rgba(0,0,0,0.08)]">
          {/* Browser Bar */}
          <div className="bg-[#f0f0f0] px-6 py-3 flex items-center gap-3 border-b border-[#e0e0e0]">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 mx-4 bg-white rounded px-3 py-1 text-xs text-[#999] font-mono border border-[#e0e0e0]">
              stock.tacklebag.co.uk/dashboard
            </div>
          </div>

          {/* App Content */}
          <div className="bg-[#023047] px-6 py-4 flex items-center justify-between border-b border-[rgba(33,158,188,0.2)]">
            <div className="font-bold text-white text-sm tracking-wide">
              Tackle<span className="text-[#FFB703]">Bag</span> Stock Command
            </div>
            <div className="flex gap-6 text-xs text-[#8ECAE6]">
              <span className="text-[#FFB703] font-semibold">Dashboard</span>
              <span className="opacity-50">Schools</span>
              <span className="opacity-50">Suppliers</span>
              <span className="opacity-50">Forecast</span>
              <span className="opacity-50">Reports</span>
            </div>
          </div>

          {/* App Body */}
          <div className="p-6 bg-[#fafafa]">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <div>
                <div className="font-bold text-lg">Stock Overview</div>
                <div className="text-xs text-[#999]">Last updated: just now</div>
              </div>
              <div className="flex gap-3 flex-wrap">
                <select className="px-4 py-2 border border-[#e0e0e0] rounded-lg text-sm bg-white">
                  <option>All schools & clubs</option>
                </select>
                <button className="px-4 py-2 border border-[#ddd] rounded-lg text-sm hover:bg-[#f0f0f0]">
                  ↺ Restock
                </button>
                <button
                  onClick={handleSimulate}
                  disabled={isSimulating}
                  className="px-4 py-2 bg-[#023047] text-white rounded-lg text-sm font-bold hover:bg-[#035670] disabled:opacity-50"
                >
                  ⚡ Simulate
                </button>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Stock Table */}
              <div className="md:col-span-2">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                    <thead>
                      <tr className="bg-[#023047] text-white">
                        <th className="px-4 py-3 text-left font-bold text-xs">School / Club</th>
                        <th className="px-4 py-3 text-left font-bold text-xs">Product</th>
                        <th className="px-4 py-3 text-center font-bold text-xs">Stock</th>
                        <th className="px-4 py-3 text-center font-bold text-xs">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stocks.map((row, i) => (
                        <tr key={i} className="border-b border-[#f0f0f0] hover:bg-[#f9f9f9]">
                          <td className="px-4 py-3 text-sm text-[#555]">{row.school}</td>
                          <td className="px-4 py-3 text-sm text-[#555]">{row.product}</td>
                          <td className="px-4 py-3 text-center font-bold font-mono text-sm">{row.stock}</td>
                          <td className="px-4 py-3 text-center">
                            <span
                              className={`inline-block px-2 py-1 rounded-full text-xs font-bold ${
                                statusStyles[row.status]
                              }`}
                            >
                              {row.status === 'ok' && '✓ OK'}
                              {row.status === 'low' && '⚠ Low'}
                              {row.status === 'out' && '✕ Out'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Alerts Panel */}
              <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e0e0e0]">
                <div className="flex justify-between items-center mb-4">
                  <div className="font-bold text-[#023047] text-sm">Active Alerts</div>
                  <div className="bg-[#FB8500] text-white text-xs font-bold px-2 py-1 rounded-full">3</div>
                </div>

                {/* Alert Items */}
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-[#FFF8E1] border-l-3 border-[#FFB703]">
                    <div className="font-semibold text-xs text-[#5D4037]">SKU-402 Low Stock</div>
                    <div className="text-xs text-[#E65100] mt-1">8 units remaining (min: 20)</div>
                  </div>

                  <div className="p-3 rounded-lg bg-[#FFEBEE] border-l-3 border-[#C62828]">
                    <div className="font-semibold text-xs text-[#5D4037]">Reorder Due</div>
                    <div className="text-xs text-[#C62828] mt-1">SKU-501 stockout imminent</div>
                  </div>

                  <div className="p-3 rounded-lg bg-[#E3F2FD] border-l-3 border-[#1565C0]">
                    <div className="font-semibold text-xs text-[#1565C0]">Forecast Alert</div>
                    <div className="text-xs text-[#1565C0] mt-1">Peak demand detected for Aug 1–15</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Forecast Panel */}
            <div className="mt-6 bg-white rounded-xl p-5 shadow-sm">
              <div className="font-bold text-[#023047] mb-4 text-sm">📈 Demand Forecast — Jul–Sep 2026</div>
              <div className="w-full h-64">
                <Line
                  data={forecastChartData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    scales: {
                      y: {
                        beginAtZero: true,
                      },
                    },
                  }}
                />
              </div>
            </div>

            {/* Simulation Log */}
            {(isSimulating || simLog.length > 0) && (
              <div className="mt-6 bg-white rounded-xl p-5 shadow-sm">
                <div className="font-bold text-[#023047] mb-3 text-sm">Simulation Log</div>
                <div className="bg-[#f9f9f9] border border-[#eee] rounded-lg p-3 max-h-40 overflow-y-auto font-mono text-xs text-[#555] space-y-1">
                  {simLog.map((line, i) => (
                    <div
                      key={i}
                      className={`${
                        line.includes('✓')
                          ? 'text-[#1B5E20]'
                          : line.includes('LOW') || line.includes('warn')
                            ? 'text-[#E65100]'
                            : 'text-[#555]'
                      }`}
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Note */}
        <div className="mt-8 p-6 bg-[rgba(33,158,188,0.1)] border border-[#219EBC] rounded-lg flex gap-4">
          <div className="text-2xl flex-shrink-0">💡</div>
          <div>
            <strong className="text-[#023047]">This is a working prototype.</strong>
            <p className="text-sm text-[#555] mt-1">
              The real app would connect directly to Symphony for live stock data, replacing the current Excel files with a single web-based view accessible from any device — including mobile on the warehouse floor. All data structured to export cleanly into your future ERP.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
