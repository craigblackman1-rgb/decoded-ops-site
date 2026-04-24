'use client';

export default function EcommerceBreakdownChart() {
  const problems = [
    {
      icon: '🎨',
      title: 'Customization Problem',
      issue: 'Artwork Validation',
      problem: 'Customers upload artwork → System can\'t validate format, resolution, or production feasibility → Manual review of every order',
      impact: 'Defeats purpose of having a website',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: '📦',
      title: 'Inventory Problem',
      issue: 'Stock Sync Gap',
      problem: 'Blank inventory in ERP → eCommerce platform doesn\'t know about it → Customer orders something you don\'t have → Manual apologies and cancellations',
      impact: '12+ hour window where system gives wrong info',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: '⚙️',
      title: 'Workflow Problem',
      issue: 'System Handoff',
      problem: 'Order comes in → eCommerce confirms payment → Production team never sees it → Manual export and email to team required',
      impact: '2–3 mins per order × 50 orders = 2–3 hours daily manual work',
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: '📊',
      title: 'Reporting Problem',
      issue: 'Fragmented Data',
      problem: '"How many website orders vs phone orders?" → Data split between eCommerce and ERP → Manual piecing together of reports',
      impact: 'No real-time visibility into channel performance',
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  const orderFlow = [
    { step: 'Customer Orders', status: 'eCommerce Handles ✓', active: true },
    { step: 'Payment Confirmed', status: 'eCommerce Handles ✓', active: true },
    { step: 'System Sync', status: '❌ BREAKS HERE', active: false },
    { step: 'Production Knows', status: 'Manual Email Required', active: false },
    { step: 'Order Produced', status: 'ERP Handles', active: true }
  ];

  return (
    <div className="w-full my-8 space-y-8">
      {/* Order Flow Diagram */}
      <div className="bg-gradient-to-br from-[#023047]/5 to-transparent rounded-lg border border-[#023047]/20 p-6 lg:p-8">
        <h3 className="text-[#023047] text-xl font-bold mb-8">The Order Flow Problem</h3>

        <div className="space-y-4">
          {orderFlow.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                item.active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {idx + 1}
              </div>
              <div className="flex-1">
                <p className="text-[#023047] font-semibold">{item.step}</p>
                <p className={`text-sm ${item.active ? 'text-green-600' : 'text-red-600'}`}>
                  {item.status}
                </p>
              </div>
              {idx < orderFlow.length - 1 && (
                <div className={`w-8 h-0.5 ${item.active ? 'bg-green-300' : 'bg-red-300'}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Problems Grid */}
      <div>
        <h3 className="text-[#023047] text-xl font-bold mb-6">Where Standard eCommerce Breaks Down</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, idx) => (
            <div key={idx} className="border border-[#023047]/20 rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white">
              <div className={`bg-gradient-to-r ${problem.color} h-1`} />

              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-3xl">{problem.icon}</span>
                  <div>
                    <p className="text-[#023047] font-bold text-lg">{problem.title}</p>
                    <p className="text-[#219EBC] text-xs font-semibold uppercase tracking-wide mt-1">
                      {problem.issue}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-[#023047]/70 text-xs uppercase tracking-wide font-semibold mb-2">The Issue</p>
                    <p className="text-[#023047] text-sm leading-relaxed">{problem.problem}</p>
                  </div>

                  <div className="bg-orange-50 rounded p-3 border-l-4 border-orange-400">
                    <p className="text-orange-900 text-sm font-semibold">{problem.impact}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The False Promise */}
      <div className="bg-gradient-to-r from-[#023047] to-[#023047]/90 rounded-lg p-6 lg:p-8 text-white border border-[#219EBC]/30">
        <h3 className="text-lg font-bold mb-4">The Integration False Promise</h3>

        <div className="space-y-4">
          <div>
            <p className="text-[#219EBC] text-sm uppercase tracking-wide font-semibold mb-2">You Think:</p>
            <p className="text-white/90">"I just need to integrate my eCommerce platform with my ERP."</p>
          </div>

          <div className="border-t border-[#219EBC]/30 pt-4">
            <p className="text-[#219EBC] text-sm uppercase tracking-wide font-semibold mb-2">You Get a Quote:</p>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="bg-white/10 rounded p-3 text-center">
                <p className="text-white text-2xl font-bold">£20k–50k</p>
                <p className="text-white/70 text-xs mt-1">Cost</p>
              </div>
              <div className="bg-white/10 rounded p-3 text-center">
                <p className="text-white text-2xl font-bold">3–6 mo</p>
                <p className="text-white/70 text-xs mt-1">Timeline</p>
              </div>
              <div className="bg-white/10 rounded p-3 text-center">
                <p className="text-white text-2xl font-bold">∞</p>
                <p className="text-white/70 text-xs mt-1">Hidden costs</p>
              </div>
            </div>
          </div>

          <div className="border-t border-[#219EBC]/30 pt-4">
            <p className="text-red-300 text-sm font-semibold">⚠️ Here's the problem:</p>
            <p className="text-white/90 mt-2">
              Even after the integration is built, your core problems aren't solved. Your system still can't validate artwork or understand your production workflow. The integration just passes data between two systems that weren't designed for your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
