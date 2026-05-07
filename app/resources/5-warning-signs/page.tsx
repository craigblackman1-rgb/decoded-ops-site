'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function FiveWarningSignsPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError('Please fill in both fields');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <main>
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20" style={{ backgroundColor: '#023047' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="font-[family-name:var(--font-dm-sans)] text-[#219EBC] text-sm font-medium mb-3 uppercase tracking-wide">Free Guide</p>
          <h1 className="font-[family-name:var(--font-outfit)] text-3xl lg:text-5xl font-bold text-white mb-6">
            5 Warning Signs Your Tech Project Will Fail
          </h1>
          <p className="font-[family-name:var(--font-dm-sans)] text-lg text-white/80 max-w-2xl mx-auto">
            A practical guide for business owners in print, embroidery, and decoration. No theory. No vendor speak. Real warning signs from 25 years in the sector.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {!submitted ? (
            <div className="grid lg:grid-cols-5 gap-10 items-start">
              {/* Content */}
              <div className="lg:col-span-3">
                <h2 className="text-2xl font-bold text-[#023047] mb-6 font-[family-name:var(--font-outfit)]">What&apos;s Inside</h2>
                <ul className="space-y-4 mb-8">
                  {[
                    'The one question most businesses never ask before buying software',
                    'Why vendor demos are designed to hide the real cost',
                    'The data quality warning that everyone ignores — until it is too late',
                    'The implementation timeline trap that doubles your budget',
                    'The single biggest predictor of project failure (and how to avoid it)',
                    'A simple framework to evaluate any technology investment',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-[#219EBC] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-[#023047]/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-4 rounded-xl bg-[#219EBC]/10 border border-[#219EBC]/20">
                  <p className="text-xs text-[#023047]/70 leading-relaxed">
                    <strong className="text-[#023047]">The 3x Clarity Guarantee:</strong> If a Clarity Audit doesn&apos;t identify at least 3× the fee in recoverable cost or lost revenue, you get a full refund. No conditions. No questions.
                  </p>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-[#8ECAE6]/20">
                <h3 className="text-lg font-bold text-[#023047] mb-2 font-[family-name:var(--font-outfit)]">Download Free Guide</h3>
                <p className="text-xs text-[#023047]/60 mb-6">Enter your details and we&apos;ll send you the PDF immediately.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#023047] mb-1">Name</label>
                    <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your name" className="w-full border border-[#8ECAE6]/40 rounded-lg px-4 py-3 text-sm text-[#023047] focus:outline-none focus:ring-2 focus:ring-[#219EBC]" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#023047] mb-1">Email</label>
                    <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" className="w-full border border-[#8ECAE6]/40 rounded-lg px-4 py-3 text-sm text-[#023047] focus:outline-none focus:ring-2 focus:ring-[#219EBC]" />
                  </div>
                  {error && <p className="text-xs text-[#FB8500]">{error}</p>}
                  <button type="submit" className="w-full px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors text-sm">
                    Send me the guide
                  </button>
                  <p className="text-xs text-[#023047]/40 text-center">No spam. Unsubscribe anytime.</p>
                </form>
              </div>
            </div>
          ) : (
            <div className="max-w-xl mx-auto text-center bg-white rounded-2xl p-10 shadow-sm border border-[#8ECAE6]/20">
              <div className="w-16 h-16 rounded-full bg-[#219EBC]/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} className="text-[#219EBC]" />
              </div>
              <h2 className="text-2xl font-bold text-[#023047] mb-4 font-[family-name:var(--font-outfit)]">Check Your Inbox</h2>
              <p className="text-[#023047]/70 leading-relaxed mb-6">We&apos;ve sent the guide to <strong>{email}</strong>. It should arrive within a couple of minutes.</p>
              <p className="text-sm text-[#023047]/50 mb-8">If you don&apos;t see it, check your spam folder — or email craig@decodedops.co.uk and I&apos;ll send it personally.</p>
              <Link href="/" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
                Back to home <ArrowRight size={18} />
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
