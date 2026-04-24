'use client';

export default function SystemsCostBreakdown() {
  return (
    <div className="w-full bg-gradient-to-br from-[#023047] to-[#023047]/95 rounded-lg p-8 lg:p-12 my-8">
      <h3 className="text-white text-xl lg:text-2xl font-bold mb-8 text-center">
        The Hidden Cost of Disconnected Systems
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8">
        {/* Time Lost Cards */}
        <div className="bg-white/10 backdrop-blur rounded-lg p-6 border border-[#219EBC]/30">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#219EBC]/20 border border-[#219EBC]">
                <svg className="h-6 w-6 text-[#219EBC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 2m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-[#219EBC] text-sm font-semibold uppercase tracking-wide mb-2">Re-keying Data</p>
              <p className="text-white text-3xl font-bold mb-1">3–6 hrs</p>
              <p className="text-white/70 text-sm">per week lost to manual entry</p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur rounded-lg p-6 border border-[#219EBC]/30">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#219EBC]/20 border border-[#219EBC]">
                <svg className="h-6 w-6 text-[#219EBC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-[#219EBC] text-sm font-semibold uppercase tracking-wide mb-2">Invoicing & Reconciliation</p>
              <p className="text-white text-3xl font-bold mb-1">2–4 hrs</p>
              <p className="text-white/70 text-sm">per week on manual processing</p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur rounded-lg p-6 border border-[#219EBC]/30">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#219EBC]/20 border border-[#219EBC]">
                <svg className="h-6 w-6 text-[#219EBC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-[#219EBC] text-sm font-semibold uppercase tracking-wide mb-2">Inventory Errors</p>
              <p className="text-white text-3xl font-bold mb-1">3–5%</p>
              <p className="text-white/70 text-sm">of inbound stock at risk</p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur rounded-lg p-6 border border-[#219EBC]/30">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#219EBC]/20 border border-[#219EBC]">
                <svg className="h-6 w-6 text-[#219EBC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-[#219EBC] text-sm font-semibold uppercase tracking-wide mb-2">Order Errors</p>
              <p className="text-white text-3xl font-bold mb-1">1–3%</p>
              <p className="text-white/70 text-sm">of orders affected by mistakes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Summary */}
      <div className="border-t border-[#219EBC]/30 pt-8 bg-white/5 rounded-lg p-6">
        <div className="text-center">
          <p className="text-white/70 text-sm mb-2">ON A £2M BUSINESS</p>
          <p className="text-white text-4xl lg:text-5xl font-bold mb-3">
            £40k–80k
          </p>
          <p className="text-[#219EBC] text-lg font-semibold">
            Lost to productivity and error correction annually
          </p>
        </div>
      </div>
    </div>
  );
}
