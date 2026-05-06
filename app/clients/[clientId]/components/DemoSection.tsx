'use client';

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

export default function DemoSection({ data }: { data: DemoData }) {
  return (
    <section className="bg-[#F8F9FA] text-[#023047] px-8 py-20 md:px-20">
      <div className="max-w-6xl mx-auto">
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
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="font-bold text-lg">Stock Overview</div>
                <div className="text-xs text-[#999]">Last updated: just now</div>
              </div>
              <div className="flex gap-3">
                <select className="px-4 py-2 border border-[#e0e0e0] rounded-lg text-sm bg-white">
                  <option>All schools & clubs</option>
                </select>
                <button className="px-4 py-2 border border-[#ddd] rounded-lg text-sm hover:bg-[#f0f0f0]">
                  ↺ Restock
                </button>
                <button className="px-4 py-2 bg-[#023047] text-white rounded-lg text-sm font-bold hover:bg-[#035670]">
                  ⚡ Simulate
                </button>
              </div>
            </div>

            {/* Stock Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-[#023047] text-white">
                    <th className="px-4 py-3 text-left font-bold text-xs">School / Club</th>
                    <th className="px-4 py-3 text-left font-bold text-xs">Product</th>
                    <th className="px-4 py-3 text-left font-bold text-xs">SKU</th>
                    <th className="px-4 py-3 text-center font-bold text-xs">In Stock</th>
                    <th className="px-4 py-3 text-center font-bold text-xs">Min</th>
                    <th className="px-4 py-3 text-center font-bold text-xs">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.stocks.map((row, i) => (
                    <tr key={i} className="border-b border-[#f0f0f0] hover:bg-[#f9f9f9]">
                      <td className="px-4 py-3 text-sm text-[#555]">{row.school}</td>
                      <td className="px-4 py-3 text-sm text-[#555]">{row.product}</td>
                      <td className="px-4 py-3 text-sm text-[#999] font-mono">{row.sku}</td>
                      <td className="px-4 py-3 text-center font-bold font-mono">{row.stock}</td>
                      <td className="px-4 py-3 text-center text-sm">{row.min}</td>
                      <td className="px-4 py-3 text-center">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
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
