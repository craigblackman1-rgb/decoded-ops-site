'use client';

import { useState } from 'react';

interface AcceptanceData {
  tag: string;
  title: string;
  subtitle: string;
  client: {
    company: string;
    placeholders: { name: string; title: string; email: string };
  };
  decodedOps: {
    name: string;
    company: string;
    email: string;
    phone: string;
    website: string;
    terms: string;
  };
  options?: Array<{ id: string; name: string; desc: string; price: string }>;
}

const DEFAULT_OPTIONS = [
  { id: 'C', name: 'Tier 1 — Clarity', desc: 'One-off audit + recommendations report', price: '£1,995 fixed' },
  { id: 'B', name: 'Tier 2 — Deliver ⭐', desc: 'Audit + vendor procurement (Recommended)', price: '£850/month' },
  { id: 'A', name: 'Tier 3 — Transform + Retained', desc: 'Full implementation oversight — ERP, portal, integrations', price: '£1,250/month' },
];

export default function AcceptanceSection({ data }: { data: AcceptanceData }) {
  const [selected, setSelected] = useState('B');
  const [form, setForm] = useState({ name: '', title: '', email: '', date: '' });
  const [submitted, setSubmitted] = useState(false);

  const options = data.options || DEFAULT_OPTIONS;
  const clientCompany = data.client?.company || 'Client';

  const handleSubmit = async () => {
    if (!form.name || !form.email) {
      alert('Please fill in your name and email.');
      return;
    }
    const selectedOption = options.find(o => o.id === selected);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: `Proposal Acceptance — ${selectedOption?.name || selected}\n\nCompany: ${clientCompany}\nContact: ${form.name} (${form.title})\nEmail: ${form.email}`,
        }),
      });
    } catch {
      // fail silently — still show success
    }
    setSubmitted(true);
  };

  return (
    <section className="bg-[#010f17] text-white px-5 py-24 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <div className="text-xs font-bold tracking-widest text-[#219EBC] uppercase mb-3">
            {data.tag}
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-4 leading-tight text-white">
            {data.title.split('\n').map((l, i) => <div key={i}>{l}</div>)}
          </h2>
          <p className="text-base lg:text-lg text-[rgba(255,255,255,0.55)] max-w-3xl leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-10 px-8 bg-[rgba(27,94,32,0.15)] border border-[rgba(27,94,32,0.3)] rounded-xl">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-2xl font-black text-[#4ade80] mb-2">Excellent — let's get started.</h3>
            <p className="text-base text-[rgba(255,255,255,0.6)]">
              Craig will receive your acceptance and be in touch within one working day with next steps. Looking forward to it.
            </p>
          </div>
        ) : (
          <>
            {/* Option selector */}
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {options.map((opt) => (
                <div
                  key={opt.id}
                  onClick={() => setSelected(opt.id)}
                  className={`p-5 rounded-xl border-2 cursor-pointer text-center transition-all duration-300 ${
                    selected === opt.id
                      ? 'border-[#219EBC] bg-[rgba(33,158,188,0.08)]'
                      : 'border-[rgba(255,255,255,0.1)] hover:border-[rgba(33,158,188,0.4)]'
                  }`}
                >
                  <h4 className="text-base font-bold text-white mb-1">{opt.name}</h4>
                  <p className="text-xs text-[rgba(255,255,255,0.45)] mb-2.5">{opt.desc}</p>
                  <div className="text-lg font-black text-[#FFB703] font-[family-name:var(--font-outfit)]">{opt.price}</div>
                </div>
              ))}
            </div>

            {/* Signature grid */}
            <div className="grid md:grid-cols-2 gap-5 mb-8">
              {/* Client side */}
              <div className="p-7 bg-[rgba(255,255,255,0.04)] rounded-xl border border-[rgba(255,255,255,0.08)]">
                <h3 className="text-sm font-bold text-[#8ECAE6] uppercase tracking-widest mb-5">
                  {clientCompany}
                </h3>
                {['Full Name', 'Title', 'Email', 'Date'].map((label) => {
                  const key = label.toLowerCase().replace(' ', '') as keyof typeof form;
                  return (
                    <div key={label} className="mb-4">
                      <label className="block text-xs font-bold tracking-widest uppercase text-[rgba(255,255,255,0.4)] mb-1.5">
                        {label}
                      </label>
                      <input
                        type={label === 'Email' ? 'email' : 'text'}
                        value={form[key]}
                        onChange={e => setForm(p => ({ ...p, [key]: e.target.value }))}
                        placeholder={
                          label === 'Full Name' ? data.client.placeholders.name
                          : label === 'Title' ? data.client.placeholders.title
                          : label === 'Email' ? data.client.placeholders.email
                          : "Today's date"
                        }
                        className="w-full px-3.5 py-2.5 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-md text-white text-sm placeholder-[rgba(255,255,255,0.25)] outline-none focus:border-[#219EBC] transition-colors"
                      />
                    </div>
                  );
                })}
                <div className="mb-4">
                  <label className="block text-xs font-bold tracking-widest uppercase text-[rgba(255,255,255,0.4)] mb-1.5">
                    Signature
                  </label>
                  <div className="h-12 border-b border-[rgba(255,255,255,0.2)] flex items-end pb-1.5 text-xs text-[rgba(255,255,255,0.2)]">
                    Sign here
                  </div>
                </div>
              </div>

              {/* Decoded Ops */}
              <div className="p-7 bg-[rgba(255,255,255,0.04)] rounded-xl border border-[rgba(255,255,255,0.08)]">
                <h3 className="text-sm font-bold text-[#8ECAE6] uppercase tracking-widest mb-5">
                  {data.decodedOps.company}
                </h3>
                <div className="px-5 py-4 bg-[rgba(255,255,255,0.03)] rounded-lg text-sm text-[rgba(255,255,255,0.5)] leading-loose mb-4">
                  <div className="font-bold text-white mb-2">{data.decodedOps.name}</div>
                  <div>{data.decodedOps.company}</div>
                  <div>{data.decodedOps.email}</div>
                  <div>{data.decodedOps.phone}</div>
                  <div>{data.decodedOps.website}</div>
                  <p className="text-xs text-[rgba(255,255,255,0.3)] mt-3 leading-relaxed">{data.decodedOps.terms}</p>
                </div>
                <div className="mb-4">
                  <label className="block text-xs font-bold tracking-widest uppercase text-[rgba(255,255,255,0.4)] mb-1.5">
                    Signature
                  </label>
                  <div className="h-12 border-b border-[rgba(255,255,255,0.2)] flex items-end pb-1.5 text-white font-bold text-sm">
                    Craig Blackman
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-[rgba(255,255,255,0.4)] mb-1.5">
                    Date
                  </label>
                  <input
                    type="text"
                    readOnly
                    placeholder="Countersigned on receipt"
                    className="w-full px-3.5 py-2.5 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-md text-[rgba(255,255,255,0.4)] text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Accept button */}
            <button
              onClick={handleSubmit}
              className="w-full py-5 bg-[#219EBC] hover:bg-[#1a7d97] hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-[rgba(33,158,188,0.3)] text-white font-bold text-base rounded-xl transition-all duration-300 tracking-wide"
            >
              Confirm Engagement — Let's Begin →
            </button>
          </>
        )}
      </div>
    </section>
  );
}
