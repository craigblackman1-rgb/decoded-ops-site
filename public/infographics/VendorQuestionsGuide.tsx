'use client';

import { useState } from 'react';

export default function VendorQuestionsGuide() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const questions = [
    {
      id: '1',
      number: '1',
      question: "Can you show me a business like ours that successfully integrated this system with our ERP?",
      keyPoint: 'Real proof, not promises',
      insight: 'If they can\'t name a similar customer, the integration required heavy customisation—meaning you\'re paying for an expensive one-off project, not a plug-and-play feature.',
      warning: 'Red flag: "We have the capability" without real examples'
    },
    {
      id: '2',
      number: '2',
      question: 'What happens to my data if I leave?',
      keyPoint: 'Assess data portability',
      insight: 'Can you export to standard formats? Get customer data out? If they make this difficult ("that\'s £X extra" or "6 weeks to export"), they\'ve built lock-in that will cost you later.',
      warning: 'Red flag: Vague timelines or "some data isn\'t extractable"'
    },
    {
      id: '3',
      number: '3',
      question: "If I hit a problem that your support can't solve in two weeks, what's my option?",
      keyPoint: 'Know your escape plan',
      insight: 'Can you hire third-party consultants? Access source code for custom fixes? Or are you completely dependent on vendor timelines? Dependency = risk.',
      warning: 'Red flag: "You\'re locked into our support"'
    },
    {
      id: '4',
      number: '4',
      question: 'How much will implementation cost, and what happens if we go over budget or timeline?',
      keyPoint: 'Understand true cost of ownership',
      insight: 'The quote is an estimate. What they won\'t tell you upfront is what triggers cost overruns and who bears the risk. Get penalty clauses and contingency terms in writing.',
      warning: 'Red flag: Vague estimates without clear scope boundaries'
    },
    {
      id: '5',
      number: '5',
      question: 'What training and ongoing support does your implementation team provide?',
      keyPoint: 'Clarify handoff expectations',
      insight: 'Will they train your team? How many hours included? What\'s the cost after launch? A vendor that pulls away immediately is a problem you\'ll face alone.',
      warning: 'Red flag: "Support is a separate service" without clarity on coverage'
    }
  ];

  return (
    <div className="w-full my-8">
      <div className="bg-gradient-to-r from-[#219EBC]/10 to-transparent rounded-lg border border-[#219EBC]/30 p-6 lg:p-8 mb-8">
        <p className="text-[#023047] text-sm uppercase tracking-wide font-semibold mb-2">Framework</p>
        <h3 className="text-[#023047] text-2xl lg:text-3xl font-bold">
          5 Questions Vendors Won't Like
        </h3>
        <p className="text-[#023047]/70 mt-3 text-lg">
          Ask these before signing anything. Vendors want "yes" answers. These questions expose the risks.
        </p>
      </div>

      <div className="space-y-4">
        {questions.map((q) => (
          <div
            key={q.id}
            className="border border-[#023047]/20 rounded-lg overflow-hidden hover:border-[#219EBC]/50 transition-colors bg-white"
          >
            <button
              onClick={() => setExpandedId(expandedId === q.id ? null : q.id)}
              className="w-full p-6 flex items-start gap-4 hover:bg-[#023047]/02 transition-colors"
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#219EBC] to-[#023047] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{q.number}</span>
                </div>
              </div>
              <div className="flex-1 text-left">
                <p className="text-[#023047] font-semibold text-base lg:text-lg leading-tight pr-4">
                  {q.question}
                </p>
                <p className="text-[#219EBC] text-sm font-semibold mt-2 uppercase tracking-wide">
                  {q.keyPoint}
                </p>
              </div>
              <div className="flex-shrink-0 pt-1">
                <svg
                  className={`w-5 h-5 text-[#023047]/40 transition-transform ${
                    expandedId === q.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </button>

            {expandedId === q.id && (
              <div className="bg-[#023047]/02 border-t border-[#023047]/10 px-6 py-6">
                <div className="max-w-2xl mx-auto space-y-4">
                  <div>
                    <p className="text-[#023047]/70 text-sm uppercase tracking-wide font-semibold mb-2">Why This Matters</p>
                    <p className="text-[#023047] leading-relaxed">{q.insight}</p>
                  </div>
                  <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded">
                    <p className="text-orange-900 text-sm font-semibold">{q.warning}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 lg:p-8 bg-[#023047] text-white rounded-lg">
        <p className="text-sm uppercase tracking-wide font-semibold text-[#219EBC] mb-3">Pro Tip</p>
        <p className="text-base lg:text-lg leading-relaxed">
          Vendors who can't answer these clearly don't fully understand your needs—or they're hiding complexity. Either way, that's a red flag. The best vendors will welcome these questions because they have good answers.
        </p>
      </div>
    </div>
  );
}
