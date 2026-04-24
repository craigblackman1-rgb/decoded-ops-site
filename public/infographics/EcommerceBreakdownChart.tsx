'use client';

export default function EcommerceBreakdownChart() {
  const problems = [
    {
      title: 'Customization Problem',
      subtitle: 'Artwork Validation',
      problem: 'Customers upload artwork → System can\'t validate format, resolution, or production feasibility → Manual review of every order',
      impact: 'Defeats purpose of having a website'
    },
    {
      title: 'Inventory Problem',
      subtitle: 'Stock Sync Gap',
      problem: 'Blank inventory in ERP → eCommerce platform doesn\'t know about it → Customer orders something you don\'t have → Manual apologies and cancellations',
      impact: '12+ hour window where system gives wrong info'
    },
    {
      title: 'Workflow Problem',
      subtitle: 'System Handoff',
      problem: 'Order comes in → eCommerce confirms payment → Production team never sees it → Manual export and email to team required',
      impact: '2–3 mins per order × 50 orders = 2–3 hours daily manual work'
    },
    {
      title: 'Reporting Problem',
      subtitle: 'Fragmented Data',
      problem: '"How many website orders vs phone orders?" → Data split between eCommerce and ERP → Manual piecing together of reports',
      impact: 'No real-time visibility into channel performance'
    }
  ];

  return (
    <div className="w-full my-8 space-y-8">
      {/* Order Flow Diagram */}
      <div className="bg-white border border-[#023047]/20 rounded-lg p-6 lg:p-8">
        <h3 className="text-[#023047] text-xl font-bold mb-8">The Order Flow Problem</h3>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center font-bold text-sm text-white">1</div>
            <div className="flex-1">
              <p className="text-[#023047] font-semibold">Customer Orders</p>
              <p className="text-sm text-green-600">eCommerce Handles ✓</p>
            </div>
          </div>
          <div className="ml-4 w-0.5 h-4 bg-green-300" />

          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center font-bold text-sm text-white">2</div>
            <div className="flex-1">
              <p className="text-[#023047] font-semibold">Payment Confirmed</p>
              <p className="text-sm text-green-600">eCommerce Handles ✓</p>
            </div>
          </div>
          <div className="ml-4 w-0.5 h-4 bg-red-300" />

          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center font-bold text-sm text-white">✗</div>
            <div className="flex-1">
              <p className="text-[#023047] font-semibold">System Sync</p>
              <p className="text-sm text-red-600 font-bold">BREAKS HERE</p>
            </div>
          </div>
          <div className="ml-4 w-0.5 h-4 bg-red-300" />

          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center font-bold text-sm text-white">3</div>
            <div className="flex-1">
              <p className="text-[#023047] font-semibold">Production Knows</p>
              <p className="text-sm text-red-600">Manual Email Required</p>
            </div>
          </div>
          <div className="ml-4 w-0.5 h-4 bg-green-300" />

          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center font-bold text-sm text-white">4</div>
            <div className="flex-1">
              <p className="text-[#023047] font-semibold">Order Produced</p>
              <p className="text-sm text-green-600">ERP Handles ✓</p>
            </div>
          </div>
        </div>
      </div>

      {/* Problems Grid */}
      <div>
        <h3 className="text-[#023047] text-xl font-bold mb-6">Where Standard eCommerce Breaks Down</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, idx) => (
            <div key={idx} className="border border-[#023047]/20 rounded-lg p-6 bg-white hover:border-[#219EBC]/50 transition-colors">
              <div className="mb-4">
                <p className="text-[#023047] font-bold text-lg mb-1">{problem.title}</p>
                <p className="text-[#219EBC] text-xs font-semibold uppercase tracking-wide">{problem.subtitle}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-[#023047]/70 text-xs uppercase tracking-wide font-semibold mb-2">The Issue</p>
                  <p className="text-[#023047] text-sm leading-relaxed">{problem.problem}</p>
                </div>

                <div className="bg-[#023047]/5 border-l-4 border-[#219EBC] rounded p-3">
                  <p className="text-[#023047] text-sm font-semibold">{problem.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The False Promise */}
      <div className="bg-gradient-to-br from-[#023047] to-[#023047]/95 rounded-lg p-6 lg:p-8 text-white border border-[#219EBC]/30">
        <h3 className="text-lg font-bold mb-6">The Integration False Promise</h3>

        <div className="space-y-6">
          <div>
            <p className="text-[#219EBC] text-sm uppercase tracking-wide font-semibold mb-2">You Think:</p>
            <p className="text-white/90">"I just need to integrate my eCommerce platform with my ERP."</p>
          </div>

          <div className="border-t border-[#219EBC]/30 pt-6">
            <p className="text-[#219EBC] text-sm uppercase tracking-wide font-semibold mb-4">You Get a Quote:</p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur rounded p-4 text-center border border-[#219EBC]/20">
                <p className="text-white text-2xl font-bold">£20k–50k</p>
                <p className="text-white/70 text-xs mt-2">Cost</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded p-4 text-center border border-[#219EBC]/20">
                <p className="text-white text-2xl font-bold">3–6 mo</p>
                <p className="text-white/70 text-xs mt-2">Timeline</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded p-4 text-center border border-[#219EBC]/20">
                <p className="text-white text-2xl font-bold">∞</p>
                <p className="text-white/70 text-xs mt-2">Hidden costs</p>
              </div>
            </div>
          </div>

          <div className="border-t border-[#219EBC]/30 pt-6">
            <div className="flex items-start gap-3">
              <span className="text-xl">⚠️</span>
              <div>
                <p className="text-[#219EBC] text-sm font-bold mb-2">Here's the problem:</p>
                <p className="text-white/90 text-sm leading-relaxed">
                  Even after the integration is built, your core problems aren't solved. Your system still can't validate artwork or understand your production workflow. The integration just passes data between two systems that weren't designed for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
