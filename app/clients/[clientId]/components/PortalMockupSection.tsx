'use client';

interface PortalMockupData {
  tag: string;
  title: string;
  subtitle: string;
  portalName: string;
  userName: string;
  userTitle: string;
  userInitials: string;
  url: string;
  stats: Array<{ num: string; label: string; highlight?: string }>;
  orders: Array<{ id: string; date: string; items: string; total: string; status: string; statusColor: string }>;
  creditLimit: string;
  creditUsed: string;
  creditTotal: string;
  creditPercent: number;
  navItems: Array<{ label: string; active?: boolean }>;
  products: Array<{ icon: string; name: string; sku: string; price: string }>;
  disclaimer: string;
}

const STATUS_CLASSES: Record<string, string> = {
  green: 'bg-[rgba(27,94,32,0.1)] text-[#1B5E20]',
  blue: 'bg-[rgba(33,158,188,0.1)] text-[#0a6b80]',
  amber: 'bg-[rgba(251,133,0,0.1)] text-[#b86300]',
  red: 'bg-[rgba(198,40,40,0.1)] text-[#c53030]',
};

export default function PortalMockupSection({ data }: { data: PortalMockupData }) {
  const logoParts = data.portalName.match(/(.+?)(Trade|Portal|B2B)?$/);
  const logoPrefix = logoParts?.[1] || data.portalName;
  const logoSuffix = logoParts?.[2] || 'Trade';

  return (
    <section className="bg-[#F8F9FA] text-[#023047] px-5 py-24 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="text-xs font-bold tracking-widest text-[#219EBC] uppercase mb-3">
            {data.tag}
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-4 leading-tight text-[#023047]">
            {data.title.split('\n').map((line, i) => <div key={i}>{line}</div>)}
          </h2>
          <p className="text-base lg:text-lg text-[rgba(2,48,71,0.55)] max-w-3xl leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Browser frame */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-[rgba(0,0,0,0.08)]">
          {/* Browser bar */}
          <div className="bg-[#f0f0f0] px-6 py-3 flex items-center gap-3 border-b border-[#e0e0e0]">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 mx-4 bg-white rounded px-3 py-1 text-xs text-[#5a7d8f] font-mono border border-[#d4e8f0] text-center">
              {data.url}
            </div>
          </div>

          {/* Portal UI */}
          <div className="p-6">
            {/* Portal header */}
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-[rgba(0,0,0,0.06)]">
              <div className="font-bold text-base tracking-tight">
                <span className="text-[#023047]">{logoPrefix}</span>
                <span className="text-[#219EBC]">{logoSuffix}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-xs text-[rgba(0,0,0,0.45)]">{data.userName} · {data.userTitle}</span>
                <div className="w-7 h-7 rounded-full bg-[#219EBC] text-white flex items-center justify-center text-[10px] font-bold">
                  {data.userInitials}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-[1fr_340px] gap-6">
              {/* Main content */}
              <div>
                <div className="mb-4">
                  <h3 className="font-bold text-base text-[#023047] mb-0.5">Welcome back, {data.userName.split(' ')[0]}</h3>
                  <p className="text-xs text-[rgba(0,0,0,0.45)]">Your trade dashboard · Last order placed 3 days ago</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2.5 mb-5">
                  {data.stats.map((stat, i) => (
                    <div key={i} className="bg-[#F8F9FA] border border-[rgba(0,0,0,0.06)] rounded-xl p-3.5">
                      <div className={`font-bold text-lg leading-none font-[family-name:var(--font-outfit)] ${stat.highlight === 'warn' ? 'text-[#FB8500]' : stat.highlight === 'hl' ? 'text-[#219EBC]' : 'text-[#023047]'}`}>
                        {stat.num}
                      </div>
                      <div className="text-[10px] text-[rgba(0,0,0,0.45)] mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Orders table */}
                <div className="mb-3">
                  <div className="font-bold text-xs text-[#023047] mb-2">Recent orders</div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs border-collapse">
                      <thead>
                        <tr>
                          <th className="text-left px-2 py-1.5 text-[rgba(0,0,0,0.45)] font-medium text-[9px] uppercase tracking-wider">Order</th>
                          <th className="text-left px-2 py-1.5 text-[rgba(0,0,0,0.45)] font-medium text-[9px] uppercase tracking-wider">Date</th>
                          <th className="text-left px-2 py-1.5 text-[rgba(0,0,0,0.45)] font-medium text-[9px] uppercase tracking-wider">Items</th>
                          <th className="text-left px-2 py-1.5 text-[rgba(0,0,0,0.45)] font-medium text-[9px] uppercase tracking-wider">Total</th>
                          <th className="text-center px-2 py-1.5 text-[rgba(0,0,0,0.45)] font-medium text-[9px] uppercase tracking-wider">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.orders.map((order, i) => (
                          <tr key={i} className="border-b border-[rgba(0,0,0,0.04)] last:border-0">
                            <td className="px-2 py-2 font-semibold text-[#023047]">{order.id}</td>
                            <td className="px-2 py-2 text-[rgba(0,0,0,0.6)]">{order.date}</td>
                            <td className="px-2 py-2 text-[rgba(0,0,0,0.6)]">{order.items}</td>
                            <td className="px-2 py-2 font-semibold">{order.total}</td>
                            <td className="px-2 py-2 text-center">
                              <span className={`inline-block px-2 py-0.5 rounded-full text-[9px] font-bold ${STATUS_CLASSES[order.statusColor] || STATUS_CLASSES.blue}`}>
                                {order.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex gap-1.5 mt-3 pt-3 border-t border-[rgba(0,0,0,0.06)]">
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-[rgba(27,94,32,0.1)] text-[#1B5E20] font-bold">Credit terms: 30 days</span>
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-[rgba(33,158,188,0.1)] text-[#0a6b80] font-bold">Price list: Trade 2026</span>
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-[rgba(251,133,0,0.1)] text-[#b86300] font-bold">Min. order: £250</span>
                </div>
              </div>

              {/* Sidebar */}
              <div>
                {/* Credit card */}
                <div className="rounded-xl p-4 mb-5 text-white" style={{ background: 'linear-gradient(135deg, #023047, #010f17)' }}>
                  <div className="text-[9px] uppercase tracking-wider opacity-70">Available Credit</div>
                  <div className="text-2xl font-bold font-[family-name:var(--font-outfit)] mt-0.5 mb-2">{data.creditLimit}</div>
                  <div className="flex justify-between text-[9px] opacity-80">
                    <span>Used: {data.creditUsed}</span>
                    <span>Total: {data.creditTotal}</span>
                  </div>
                  <div className="h-1 rounded-full bg-[rgba(255,255,255,0.2)] mt-1.5 overflow-hidden">
                    <div className="h-full rounded-full bg-[#FFB703]" style={{ width: `${data.creditPercent}%` }} />
                  </div>
                </div>

                {/* Navigation */}
                <div className="font-bold text-xs text-[#023047] mb-2">Quick links</div>
                <ul className="mb-5">
                  {data.navItems.map((item, i) => (
                    <li
                      key={i}
                      className={`flex items-center gap-2 px-2.5 py-2 rounded-md text-xs mb-0.5 ${
                        item.active
                          ? 'bg-[rgba(33,158,188,0.08)] text-[#219EBC] font-bold'
                          : 'text-[rgba(0,0,0,0.5)]'
                      }`}
                    >
                      {item.label}
                    </li>
                  ))}
                </ul>

                {/* Product cards */}
                <div className="font-bold text-xs text-[#023047] mb-2">Quick order</div>
                {data.products.map((prod, i) => (
                  <div key={i} className="flex gap-2.5 p-2.5 mb-1.5 rounded-xl bg-[#F8F9FA] border border-[rgba(0,0,0,0.06)] last:mb-0">
                    <div className="w-11 h-11 rounded-md bg-[rgba(0,0,0,0.04)] flex items-center justify-center text-lg flex-shrink-0">
                      {prod.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-[#023047]">{prod.name}</div>
                      <div className="text-[9px] text-[rgba(0,0,0,0.45)] font-mono">{prod.sku}</div>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-xs font-bold text-[#219EBC]">{prod.price}</span>
                        <span className="text-[8px] px-1.5 py-0.5 rounded bg-[rgba(33,158,188,0.08)] text-[#219EBC] font-bold uppercase">trade price</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-4 p-3 bg-[rgba(33,158,188,0.06)] rounded-xl text-center text-xs text-[rgba(0,0,0,0.5)] border border-[rgba(33,158,188,0.15)] leading-relaxed max-w-[960px] mx-auto">
          <strong className="text-[#219EBC]">Mockup only — not final design.</strong>{' '}
          {data.disclaimer}
        </div>
      </div>
    </section>
  );
}
