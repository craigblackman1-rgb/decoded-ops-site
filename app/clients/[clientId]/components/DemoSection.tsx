'use client';

import { useState, useEffect, useRef } from 'react';
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
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface Stock {
  school: string;
  product: string;
  sku: string;
  stock: number;
  min: number;
  ordered: boolean;
}

interface DemoData {
  tag: string;
  title: string;
  subtitle: string;
  stocks: Stock[];
  appName?: string;
  url?: string;
  filterLabel?: string;
  filterOptions?: Array<{ value: string; label: string }>;
  forecastTitle?: string;
  forecastLabels?: string[];
  forecastData?: number[];
  forecastActual?: (number | null)[];
  simChanges?: Array<{ i: number; by: number }>;
  simTotalOrders?: number;
  noteTitle?: string;
  noteText?: string;
  stockSourceLabel?: string;
  appNavItems?: string[];
}

const DEFAULT_FORECAST_LABELS = ['Wk 1 Jul', 'Wk 2 Jul', 'Wk 3 Jul', 'Wk 4 Jul', 'Wk 1 Aug', 'Wk 2 Aug', 'Wk 3 Aug', 'Wk 1 Sep', 'Wk 2 Sep', 'Wk 3 Sep'];
const DEFAULT_FORECAST_DATA = [42, 55, 78, 95, 140, 165, 180, 172, 120, 85];
const DEFAULT_FORECAST_ACTUAL: (number | null)[] = [40, 52, 80, null, null, null, null, null, null, null];

function buildForecastChart(labels: string[], forecast: number[], actual: (number | null)[]) {
  return {
    labels,
    datasets: [
      {
        label: 'Forecast',
        data: forecast,
      backgroundColor: 'rgba(33, 158, 188, 0.25)',
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
    {
      label: 'Actual (to date)',
      data: actual,
      backgroundColor: 'rgba(255, 183, 3, 0.35)',
      borderColor: '#FFB703',
      borderWidth: 2,
      borderRadius: 4,
      fill: true,
      tension: 0.4,
      pointBackgroundColor: '#FFB703',
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
      pointRadius: 5,
    },
  ],
  };
}

const originalStock: Stock[] = [
  { school: 'East Mosley CC', product: 'Canterbury Polo (S)', sku: 'EMCC-CAN-PL-S', stock: 18, min: 10, ordered: false },
  { school: 'East Mosley CC', product: 'Canterbury Polo (M)', sku: 'EMCC-CAN-PL-M', stock: 12, min: 10, ordered: false },
  { school: 'East Mosley CC', product: 'Canterbury Polo (L)', sku: 'EMCC-CAN-PL-L', stock: 4, min: 8, ordered: false },
  { school: 'Blackheath RFC', product: 'Club Shorts (S)', sku: 'BRFC-SHT-S', stock: 22, min: 8, ordered: false },
  { school: 'Blackheath RFC', product: 'Club Shorts (M)', sku: 'BRFC-SHT-M', stock: 0, min: 6, ordered: false },
  { school: 'KSW Karate', product: 'Mizuno Gi (M)', sku: 'KSW-MIZ-GM-M', stock: 3, min: 5, ordered: false },
  { school: 'KSW Karate', product: 'Mizuno Gi (L)', sku: 'KSW-MIZ-GM-L', stock: 7, min: 5, ordered: false },
  { school: "St Paul's School", product: 'Adidas Training Top (S)', sku: 'SPS-ADI-TT-S', stock: 15, min: 12, ordered: false },
  { school: "St Paul's School", product: 'Adidas Training Top (M)', sku: 'SPS-ADI-TT-M', stock: 8, min: 12, ordered: false },
  { school: "St Paul's School", product: 'Adidas Training Top (L)', sku: 'SPS-ADI-TT-L', stock: 2, min: 8, ordered: false },
];

const DEFAULT_STOCKS = originalStock;

export default function DemoSection({ data }: { data: DemoData }) {
  const stockSource = data.stocks || DEFAULT_STOCKS;
  const [stocks, setStocks] = useState<Stock[]>(stockSource.map(r => ({ ...r })));
  const [filter, setFilter] = useState('all');
  const chartData = buildForecastChart(
    data.forecastLabels || DEFAULT_FORECAST_LABELS,
    data.forecastData || DEFAULT_FORECAST_DATA,
    data.forecastActual || DEFAULT_FORECAST_ACTUAL,
  );
  const [isSimulating, setIsSimulating] = useState(false);
  const [simLog, setSimLog] = useState<string[]>([]);
  const [logShown, setLogShown] = useState(false);
  const [alerts, setAlerts] = useState<Array<{ text: string; level: string; detail: string }>>([]);
  const chartRef = useRef<any>(null);
  const stocksRef = useRef(stocks);
  stocksRef.current = stocks;

  function statusFor(stock: number, min: number) {
    return stock === 0 ? 'out' : stock < min ? 'low' : 'ok';
  }

  function badgeFor(stock: number, min: number, ordered: boolean) {
    if (ordered) return <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold" style={{ background: 'rgba(33,158,188,0.1)', color: '#1565C0' }}>Ordered</span>;
    if (stock === 0) return <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold" style={{ background: 'rgba(198,40,40,0.1)', color: '#C62828' }}>Out of Stock</span>;
    if (stock < 6) return <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold" style={{ background: 'rgba(230,81,0,0.1)', color: '#E65100' }}>Critical Low</span>;
    if (stock < 10) return <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold" style={{ background: 'rgba(255,183,3,0.1)', color: '#E65100' }}>Low Stock</span>;
    return <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold" style={{ background: 'rgba(27,94,32,0.1)', color: '#1B5E20' }}>OK</span>;
  }

  function updateAlerts(currentStocks: Stock[]) {
    const alerts: Array<{ text: string; level: string; detail: string }> = [];
    currentStocks.forEach(r => {
      const st = statusFor(r.stock, r.min);
      if (st !== 'ok') {
        alerts.push({
          text: r.product.split(' (')[0],
          level: st === 'out' ? 'crit' : 'warn',
          detail: st === 'out' ? 'Out of stock — reorder immediately' : `Stock at ${r.stock} (min: ${r.min})`,
        });
      }
    });
    setAlerts(alerts);
  }

  function handleFulfill(i: number) {
    setStocks(prev => {
      if (prev[i].stock > 0) {
        const updated = [...prev];
        updated[i] = { ...updated[i], stock: updated[i].stock - 1 };
        return updated;
      }
      return prev;
    });
    setTimeout(() => {
      const item = stocksRef.current[i];
      if (item.stock > 0) {
        updateAlerts(stocksRef.current);
        addLog(`✓ Fulfilled 1x ${item.product.split(' (')[0]} — ${item.stock} remaining`);
      }
    }, 0);
  }

  function handleReorder(i: number) {
    setStocks(prev => {
      const updated = [...prev];
      updated[i] = { ...updated[i], ordered: true };
      return updated;
    });
    setTimeout(() => {
      updateAlerts(stocksRef.current);
      addLog(`📦 Reorder placed for ${stocksRef.current[i].product.split(' (')[0]}`);
    }, 0);
  }

  function addLog(msg: string) {
    const timestamp = new Date().toLocaleTimeString();
    setSimLog(prev => [`[${timestamp}] ${msg}`, ...prev]);
    setLogShown(true);
  }

  function handleFilterChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setFilter(e.target.value);
  }

  function handleRestoreStock() {
    setStocks(stockSource.map(r => ({ ...r })));
    setSimLog([]);
    setLogShown(false);
    setFilter('all');
    updateAlerts(stockSource);
    addLog('Stock levels restored to baseline');
  }

  function handleSimulateWeekend() {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimLog([]);
    setLogShown(true);
    const totalOrders = data.simTotalOrders || 47;
    addLog(`Starting weekend order simulation — ${totalOrders} orders incoming…`);

    const changes = data.simChanges || [
      { i: 0, by: 6 }, { i: 1, by: 5 }, { i: 2, by: 3 },
      { i: 3, by: 8 }, { i: 4, by: 0 }, { i: 5, by: 2 },
      { i: 7, by: 7 }, { i: 8, by: 4 }, { i: 9, by: 2 },
    ];

    let step = 0;
    const interval = setInterval(() => {
      if (step >= changes.length) {
        clearInterval(interval);
        setIsSimulating(false);
        addLog(`${totalOrders} orders processed. 3 items need attention.`);
        return;
      }
      const c = changes[step];
      const currentStocks = stocksRef.current;
      const prevStock = currentStocks[c.i].stock;
      const newStock = Math.max(0, prevStock - c.by);
      const updated = currentStocks.map((s, idx) =>
        idx === c.i ? { ...s, stock: newStock } : s
      );
      setStocks(updated);
      updateAlerts(updated);
        addLog(
          `Order: ${currentStocks[c.i].product.split(' (')[0]} (${c.by} units) — ${prevStock} → ${newStock}`
        );
      step++;
    }, 350);
  }

  useEffect(() => {
    updateAlerts(stocks);
  }, []);

  const filteredStocks = filter === 'all'
    ? stocks
    : stocks.filter(r => {
        const legacyMap: Record<string, string> = { cricket: 'East Mosley CC', rugby: 'Blackheath RFC', karate: 'KSW Karate', school: "St Paul's School" };
        const target = legacyMap[filter] || filter;
        return r.school === target;
      });

  return (
    <section className="bg-[#F8F9FA] text-[#023047] px-5 py-24 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="text-xs font-bold tracking-widest text-[#219EBC] uppercase mb-3">
            {data.tag}
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-4 leading-tight text-[#023047]">
            {data.title.split('\n').map((l, i) => <div key={i}>{l}</div>)}
          </h2>
          <p className="text-base lg:text-lg text-[rgba(2,48,71,0.55)] max-w-2xl leading-relaxed">
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
            <div className="flex-1 mx-4 bg-white rounded px-3 py-1 text-xs text-[#5a7d8f] font-[family-name:var(--font-dm-sans)] border border-[#d4e8f0]">
              {data.url || 'stock.tacklebag.co.uk/dashboard'}
            </div>
          </div>

          {/* App Header */}
          <div className="bg-[#023047] px-6 py-4 flex items-center justify-between border-b border-[rgba(33,158,188,0.2)]">
            <div className="font-bold text-white text-sm tracking-wide">
              {data.appName || 'TackleBag Stock Command'}
            </div>
            <div className="flex gap-6 text-xs text-[#8ECAE6]">
              {(data.appNavItems || ['Dashboard', 'Schools', 'Suppliers', 'Forecast', 'Reports']).map((item, i) => (
                <span key={item} className={i === 0 ? 'text-[#FFB703] font-semibold' : 'opacity-50'}>{item}</span>
              ))}
            </div>
          </div>

          {/* App Body */}
          <div className="p-6 bg-[#fafafa]">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <div>
                <div className="font-bold text-lg text-[#023047]">Stock Overview</div>
                <div className="text-xs text-[#5a7d8f]">Last updated: just now</div>
              </div>
              <div className="flex gap-3 flex-wrap">
                <select
                  value={filter}
                  onChange={handleFilterChange}
                  className="px-4 py-2 border border-[#e0e0e0] rounded-lg text-sm bg-white text-[#023047]"
                >
                  {(data.filterOptions || [
                    { value: 'all', label: 'All schools & clubs' },
                    { value: 'cricket', label: 'East Mosley CC' },
                    { value: 'rugby', label: 'Blackheath RFC' },
                    { value: 'karate', label: 'KSW Karate' },
                    { value: 'school', label: "St Paul's School" },
                  ]).map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <button
                  onClick={handleRestoreStock}
                  className="px-4 py-2 border border-[#ddd] rounded-lg text-sm hover:bg-[#f0f0f0] bg-white"
                >
                  ↺ Restock All
                </button>
                <button
                  onClick={handleSimulateWeekend}
                  disabled={isSimulating}
                  className="px-4 py-2 bg-[#023047] text-white rounded-lg text-sm font-bold hover:bg-[#035670] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  id="sim-btn"
                >
                  ⚡ Simulate Weekend Orders
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
                        <th className="px-4 py-3 text-left font-bold text-xs">{data.stockSourceLabel || 'School / Club'}</th>
                        <th className="px-4 py-3 text-left font-bold text-xs">Product</th>
                        <th className="px-4 py-3 text-left font-bold text-xs">SKU</th>
                        <th className="px-4 py-3 text-center font-bold text-xs">In Stock</th>
                        <th className="px-4 py-3 text-center font-bold text-xs">Min Level</th>
                        <th className="px-4 py-3 text-center font-bold text-xs">Status</th>
                        <th className="px-4 py-3 text-center font-bold text-xs">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredStocks.map((row, i) => {
                        const globalIndex = stocks.findIndex(s =>
                          s.sku === row.sku && s.school === row.school
                        );
                        return (
                          <tr key={i} className="border-b border-[#f0f0f0] hover:bg-[#f9f9f9]">
                            <td className="px-4 py-3 text-sm font-semibold text-[#023047]">{row.school}</td>
                             <td className="px-4 py-3 text-sm text-[#023047]">{row.product}</td>
                            <td className="px-4 py-3 text-xs font-[family-name:var(--font-dm-sans)] text-[#888]">{row.sku}</td>
                            <td className={`px-4 py-3 text-center font-bold font-[family-name:var(--font-dm-sans)] text-sm ${
                              row.stock === 0 ? 'text-[#C62828]' :
                              row.stock < row.min ? 'text-[#E65100]' : 'text-[#1B5E20]'
                            }`}>
                              {row.stock}
                            </td>
                            <td className="px-4 py-3 text-center text-sm text-[#888]">{row.min}</td>
                            <td className="px-4 py-3 text-center">
                              {badgeFor(row.stock, row.min, row.ordered)}
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex gap-1.5 justify-center">
                                <button
                                  onClick={() => handleFulfill(globalIndex)}
                                  disabled={row.stock === 0 || row.ordered}
                                  className="px-2.5 py-1 rounded text-xs font-semibold cursor-pointer border transition-all bg-transparent border-[#023047] text-[#023047] hover:bg-[#023047] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
                                >
                                  -1 Fulfill
                                </button>
                                <button
                                  onClick={() => handleReorder(globalIndex)}
                                  disabled={row.ordered}
                                  className="px-2.5 py-1 rounded text-xs font-semibold cursor-pointer border transition-all bg-transparent border-[#219EBC] text-[#219EBC] hover:bg-[#219EBC] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
                                >
                                  Reorder
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Alerts Panel */}
              <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e0e0e0]">
                <div className="flex justify-between items-center mb-4">
                  <div className="font-bold text-[#023047] text-sm">Alerts</div>
                  <div
                    className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                    style={{
                      background: alerts.some(a => a.level === 'crit') ? '#C62828' : alerts.length > 0 ? '#FB8500' : '#888',
                    }}
                  >
                    {alerts.length}
                  </div>
                </div>
                <div className="space-y-3">
                  {alerts.length === 0 ? (
                    <div className="p-3 rounded-lg bg-[#E3F2FD] border-l-3 border-[#1565C0]">
                      <div className="font-semibold text-xs text-[#1565C0]">System ready</div>
                      <div className="text-xs text-[#1565C0] mt-1">All stock levels within normal range</div>
                    </div>
                  ) : (
                    alerts.map((alert, i) => (
                      <div
                        key={i}
                        className={`p-3 rounded-lg border-l-3 ${
                          alert.level === 'crit'
                            ? 'bg-[#FFEBEE] border-[#C62828]'
                            : 'bg-[#FFF8E1] border-[#FFB703]'
                        }`}
                      >
                        <div className={`font-semibold text-xs ${
                          alert.level === 'crit' ? 'text-[#5D4037]' : 'text-[#5D4037]'
                        }`}>
                          {alert.text}
                        </div>
                        <div className={`text-xs mt-1 ${
                          alert.level === 'crit' ? 'text-[#C62828]' : 'text-[#E65100]'
                        }`}>
                          {alert.detail}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Forecast Panel */}
            <div className="mt-6 bg-white rounded-xl p-5 shadow-sm">
              <div className="font-bold text-[#023047] mb-4 text-sm">{data.forecastTitle || '📈 Demand Forecast — Jul–Sep 2026 (Canterbury teamwear)'}</div>
              <div className="w-full h-36 md:h-48">
                <Line
                  ref={chartRef}
                  data={chartData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        display: true,
                        labels: { color: '#555', font: { size: 11, family: 'Outfit' } },
                      },
                    },
                    scales: {
                      x: {
                        ticks: { color: '#888', font: { size: 10 } },
                        grid: { color: 'rgba(0,0,0,0.04)' },
                      },
                      y: {
                        ticks: { color: '#888', font: { size: 10 } },
                        grid: { color: 'rgba(0,0,0,0.04)' },
                        title: { display: true, text: 'Units', color: '#888', font: { size: 10 } },
                        beginAtZero: true,
                      },
                    },
                  }}
                />
              </div>
            </div>

            {/* Simulation Log */}
            {(logShown || simLog.length > 0) && (
              <div className="mt-6 bg-white rounded-xl p-5 shadow-sm">
                <div className="font-bold text-[#023047] mb-3 text-sm">Simulation Log</div>
                <div className="bg-[#F8F9FA] border border-[#d4e8f0] rounded-lg p-3 max-h-32 overflow-y-auto font-[family-name:var(--font-dm-sans)] text-xs text-[#023047] space-y-0.5">
                  {simLog.map((line, i) => (
                    <div
                      key={i}
                      className={`${
                        line.includes('✓')
                          ? 'text-[#1B5E20]'
                          : line.includes('warn') || line.includes('attention')
                          ? 'text-[#E65100]'
                           : 'text-[#023047]'
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
            <strong className="text-[#023047]">{data.noteTitle || 'This is a working prototype.'}</strong>
            <p className="text-sm text-[#023047] mt-1">
              {data.noteText || 'The real app would connect directly to Symphony for live stock data, replacing the current Excel files with a single web-based view accessible from any device — including mobile on the warehouse floor. All data structured to export cleanly into your future ERP.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
