'use client';

import { useState } from 'react';

interface AcceptanceData {
  tag: string;
  title: string;
  subtitle: string;
  tackleBag: {
    company: string;
    placeholders: {
      name: string;
      title: string;
      email: string;
    };
  };
  decodedOps: {
    name: string;
    company: string;
    email: string;
    phone: string;
    website: string;
    terms: string;
  };
}

export default function AcceptanceSection({ data }: { data: AcceptanceData }) {
  const [selectedOption, setSelectedOption] = useState('B');
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    email: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const options = [
    { id: 'C', name: 'Option C', desc: 'Foundation — 3-month minimum', price: '£2,000/month' },
    { id: 'B', name: 'Option B ⭐', desc: 'Growth — 6-month commitment (Recommended)', price: '£2,800/month' },
    { id: 'A', name: 'Option A', desc: 'Full Transform — 12–18 month engagement', price: '£4,900/month' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      // Call the existing contact form action
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `Proposal Acceptance\n\nCompany: ${data.tackleBag.company}\nContact: ${formData.name} (${formData.title})\nSelected Option: ${selectedOption}\n\nThis is a proposal acceptance submission.`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to submit. Please try again.');
    }
  };

  return (
    <section className="bg-[#010f17] text-white px-8 py-20 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="text-xs font-bold tracking-widest text-[#219EBC] uppercase mb-3">
            {data.tag}
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-4">{data.title}</h2>
          <p className="text-lg text-[#8ECAE6] max-w-2xl">
            {data.subtitle}
          </p>
        </div>

        {!isSubmitted ? (
          <>
            {/* Option Selector */}
            <div className="mb-12">
              <div className="grid md:grid-cols-3 gap-4">
                {options.map((opt) => (
                  <div
                    key={opt.id}
                    onClick={() => setSelectedOption(opt.id)}
                    className={`p-6 rounded-xl cursor-pointer transition-all border-2 ${
                      selectedOption === opt.id
                        ? 'border-[#219EBC] bg-[rgba(33,158,188,0.15)]'
                        : 'border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] hover:border-[rgba(33,158,188,0.5)]'
                    }`}
                  >
                    <h4 className="font-bold mb-1">{opt.name}</h4>
                    <p className="text-xs text-[rgba(255,255,255,0.6)] mb-3">
                      {opt.desc}
                    </p>
                    <p className="text-sm font-bold text-[#FFB703]">{opt.price}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Signature Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* TackleBag Side */}
              <div className="bg-[rgba(255,255,255,0.05)] rounded-2xl p-8 border border-[rgba(255,255,255,0.1)]">
                <h3 className="font-bold text-lg mb-6">{data.tackleBag.company}</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold uppercase text-[#8ECAE6] block mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={data.tackleBag.placeholders.name}
                      className="w-full px-4 py-2 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] rounded-lg text-white placeholder-[rgba(255,255,255,0.3)] focus:outline-none focus:border-[#219EBC]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase text-[#8ECAE6] block mb-2">
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder={data.tackleBag.placeholders.title}
                      className="w-full px-4 py-2 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] rounded-lg text-white placeholder-[rgba(255,255,255,0.3)] focus:outline-none focus:border-[#219EBC]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase text-[#8ECAE6] block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={data.tackleBag.placeholders.email}
                      className="w-full px-4 py-2 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] rounded-lg text-white placeholder-[rgba(255,255,255,0.3)] focus:outline-none focus:border-[#219EBC]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase text-[#8ECAE6] block mb-2">
                      Date
                    </label>
                    <input
                      type="text"
                      value={new Date().toLocaleDateString()}
                      readOnly
                      className="w-full px-4 py-2 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg text-white"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase text-[#8ECAE6] block mb-2">
                      Signature
                    </label>
                    <div className="px-4 py-3 border-b border-[#8ECAE6] text-[rgba(255,255,255,0.6)]">
                      Sign here
                    </div>
                  </div>
                </div>
              </div>

              {/* Decoded Ops Side */}
              <div className="bg-[rgba(255,255,255,0.05)] rounded-2xl p-8 border border-[rgba(255,255,255,0.1)]">
                <h3 className="font-bold text-lg mb-4">{data.decodedOps.company}</h3>
                <div className="space-y-3 text-sm mb-6 text-[rgba(255,255,255,0.6)]">
                  <div className="font-bold text-white">{data.decodedOps.name}</div>
                  <div>{data.decodedOps.company}</div>
                  <div>{data.decodedOps.email}</div>
                  <div>{data.decodedOps.phone}</div>
                  <div>{data.decodedOps.website}</div>
                  <p className="text-xs text-[rgba(255,255,255,0.4)] mt-4">
                    {data.decodedOps.terms}
                  </p>
                </div>
                <div className="border-t border-[rgba(255,255,255,0.1)] pt-6 space-y-4">
                  <div>
                    <label className="text-xs font-bold uppercase text-[#8ECAE6] block mb-2">
                      Signature
                    </label>
                    <div className="px-4 py-3 border-b border-[#8ECAE6] text-white font-bold">
                      Craig Blackman
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase text-[#8ECAE6] block mb-2">
                      Date
                    </label>
                    <input
                      type="text"
                      readOnly
                      placeholder="Countersigned on receipt"
                      className="w-full px-4 py-2 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg text-[rgba(255,255,255,0.5)] text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full py-4 bg-[#219EBC] hover:bg-[#1a7d97] text-white font-bold rounded-xl transition-colors duration-200"
            >
              Confirm Engagement — Let's Build →
            </button>
          </>
        ) : (
          /* Success Message */
          <div className="bg-[rgba(33,158,188,0.1)] border border-[#219EBC] rounded-2xl p-12 text-center">
            <div className="text-6xl mb-6">🎉</div>
            <h3 className="text-3xl font-bold mb-4">Excellent — let's get started.</h3>
            <p className="text-lg text-[#8ECAE6] max-w-2xl mx-auto">
              Craig will receive your acceptance and be in touch within one working day with the scope-of-work letter and next steps. Looking forward to it.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
