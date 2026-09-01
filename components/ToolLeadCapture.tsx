'use client';

import { useState, FormEvent } from 'react';
import { Send, CheckCircle } from 'lucide-react';

interface ToolLeadCaptureProps {
  tool: string;
  resultSummary: string;
  answers: Record<string, unknown>;
}

export function ToolLeadCapture({ tool, resultSummary, answers }: ToolLeadCaptureProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [honey, setHoney] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/tools/capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tool,
          name,
          email,
          company: company || undefined,
          resultSummary,
          answers,
          _honey: honey,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
        return;
      }

      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-sky-blue/20 text-center">
        <CheckCircle size={32} className="mx-auto mb-3" style={{ color: '#22c55e' }} />
        <p className="text-prussian-blue font-semibold mb-1 font-[family-name:var(--font-outfit)]">
          Check your inbox
        </p>
        <p className="text-prussian-blue/60 text-sm font-[family-name:var(--font-dm-sans)]">
          We&apos;ve sent your detailed results to {email}. If it doesn&apos;t arrive within a couple of minutes, check your spam folder.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-sky-blue/20">
      <p className="text-prussian-blue font-semibold mb-1 font-[family-name:var(--font-outfit)]">
        Get your detailed results by email
      </p>
      <p className="text-prussian-blue/60 text-sm mb-6 font-[family-name:var(--font-dm-sans)]">
        We&apos;ll send a copy of your results plus tailored recommendations for your next steps.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor={`tc-name-${tool}`} className="block text-xs font-medium text-prussian-blue/60 mb-1 font-[family-name:var(--font-dm-sans)]">
            Name *
          </label>
          <input
            id={`tc-name-${tool}`}
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-sky-blue/30 text-sm text-prussian-blue focus:border-cerulean focus:ring-2 focus:ring-cerulean/10 outline-none transition-colors font-[family-name:var(--font-dm-sans)]"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor={`tc-email-${tool}`} className="block text-xs font-medium text-prussian-blue/60 mb-1 font-[family-name:var(--font-dm-sans)]">
            Email *
          </label>
          <input
            id={`tc-email-${tool}`}
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-sky-blue/30 text-sm text-prussian-blue focus:border-cerulean focus:ring-2 focus:ring-cerulean/10 outline-none transition-colors font-[family-name:var(--font-dm-sans)]"
            placeholder="you@company.com"
          />
        </div>

        <div>
          <label htmlFor={`tc-company-${tool}`} className="block text-xs font-medium text-prussian-blue/60 mb-1 font-[family-name:var(--font-dm-sans)]">
            Company
          </label>
          <input
            id={`tc-company-${tool}`}
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-sky-blue/30 text-sm text-prussian-blue focus:border-cerulean focus:ring-2 focus:ring-cerulean/10 outline-none transition-colors font-[family-name:var(--font-dm-sans)]"
            placeholder="Your company (optional)"
          />
        </div>

        {/* Honeypot */}
        <div className="absolute opacity-0 w-0 h-0 overflow-hidden" aria-hidden="true">
          <label htmlFor={`tc-honey-${tool}`}>Leave this empty</label>
          <input
            id={`tc-honey-${tool}`}
            type="text"
            value={honey}
            onChange={(e) => setHoney(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {errorMsg && (
          <p className="text-sm font-[family-name:var(--font-dm-sans)]" style={{ color: '#ef4444' }}>
            {errorMsg}
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber text-prussian-blue font-semibold hover:bg-orange-brand transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-[family-name:var(--font-dm-sans)]"
        >
          {status === 'loading' ? (
            'Sending...'
          ) : (
            <>
              Send me my results <Send size={16} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
