'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, RotateCcw } from 'lucide-react';

const questions = [
  { id: 1, text: 'Are your core business processes documented and followed consistently?', weight: 2 },
  { id: 2, text: 'Is your customer, order, and product data clean and consistent across systems?', weight: 2 },
  { id: 3, text: 'Do your key systems (ERP, eCommerce, accounts) talk to each other without manual intervention?', weight: 2 },
  { id: 4, text: 'Do you have a specific operational problem you believe AI could help solve?', weight: 2 },
  { id: 5, text: 'Does your team have the capacity to learn and adopt new tools?', weight: 1 },
  { id: 6, text: 'Have you successfully implemented new technology in the last 12 months?', weight: 1 },
];

const results = [
  { min: 0, max: 3, label: 'Not Ready — Fix Your Foundations', color: '#FB8500', description: 'Your business needs foundational work before AI can deliver value. Clean data, documented processes, and integrated systems are prerequisites — without them, AI will amplify your existing problems, not solve them. Start with an operational audit to build the foundation.', action: 'Book a Clarity Audit' },
  { min: 4, max: 6, label: 'Getting There — Proceed Carefully', color: '#FFB703', description: 'You have some of the pieces in place, but not all. Small, targeted AI experiments in well-defined areas could work, but a broader AI strategy would be premature. Focus on closing the gaps in your weakest area before committing to AI investment.', action: 'Discuss Your Readiness' },
  { min: 7, max: 10, label: 'Ready — Evaluate with Confidence', color: '#219EBC', description: 'Your operations are well-structured enough to evaluate AI tools on their actual merits. You can run proof-of-concept projects in specific areas with a good chance of success. The key is to choose the right problem to solve first — not the most exciting technology.', action: 'Explore AI Opportunities' },
];

type Answer = 'yes' | 'no' | null;

export default function AiReadinessCheckPage() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>(Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer: 'yes' | 'no') => {
    const newAnswers = [...answers];
    newAnswers[currentQ] = answer;
    setAnswers(newAnswers);
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResults(true);
    }
  };

  const score = answers.reduce((sum, a, i) => a === 'yes' ? sum + questions[i].weight : sum, 0);
  const result = results.find(r => score >= r.min && score <= r.max) || results[results.length - 1];

  const reset = () => {
    setCurrentQ(0);
    setAnswers(Array(questions.length).fill(null));
    setShowResults(false);
  };

  const answeredCount = answers.filter(a => a !== null).length;

  return (
    <main>
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16" style={{ backgroundColor: '#023047' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="font-[family-name:var(--font-dm-sans)] text-[#219EBC] text-sm font-medium mb-3 uppercase tracking-wide">Free Tool</p>
          <h1 className="font-[family-name:var(--font-outfit)] text-3xl lg:text-5xl font-bold text-white mb-4">AI Readiness Check</h1>
          <p className="font-[family-name:var(--font-dm-sans)] text-lg text-white/80 max-w-2xl">Six quick questions to find out whether your business is ready to adopt AI — or whether you need to fix your operational foundation first.</p>
        </div>
      </section>

      <section className="py-12 lg:py-20" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {!showResults ? (
            <div>
              <div className="mb-8">
                <div className="flex justify-between text-sm text-[#023047]/60 mb-2">
                  <span>Question {currentQ + 1} of {questions.length}</span>
                  <span>{Math.round((answeredCount / questions.length) * 100)}%</span>
                </div>
                <div className="h-2 rounded-full bg-[#8ECAE6]/30 overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-300 bg-[#219EBC]" style={{ width: `${(answeredCount / questions.length) * 100}%` }} />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#8ECAE6]/20">
                <div className="text-xs font-semibold text-[#219EBC] uppercase tracking-wider mb-4">Question {currentQ + 1}</div>
                <h2 className="text-xl font-bold text-[#023047] mb-8 font-[family-name:var(--font-outfit)]">{questions[currentQ].text}</h2>
                <div className="flex gap-4">
                  <button onClick={() => handleAnswer('yes')} className="flex-1 px-6 py-4 rounded-xl bg-[#023047] text-white font-semibold hover:bg-[#023047]/80 transition-colors font-[family-name:var(--font-dm-sans)]">Yes</button>
                  <button onClick={() => handleAnswer('no')} className="flex-1 px-6 py-4 rounded-xl border-2 border-[#023047] text-[#023047] font-semibold hover:bg-[#023047]/5 transition-colors font-[family-name:var(--font-dm-sans)]">No</button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#8ECAE6]/20 text-center mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{ backgroundColor: `${result.color}20`, borderColor: `${result.color}40`, borderWidth: 1 }}>
                  <span className="text-xs font-semibold uppercase" style={{ color: result.color }}>{result.label}</span>
                </div>
                <div className="text-5xl font-bold mb-4 font-[family-name:var(--font-outfit)]" style={{ color: result.color }}>{score}/10</div>
                <p className="text-[#023047]/70 leading-relaxed mb-8 max-w-xl mx-auto">{result.description}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
                    {result.action} <ArrowRight size={18} />
                  </Link>
                  <button onClick={reset} className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#219EBC] text-[#219EBC] font-semibold hover:bg-[#219EBC]/10 transition-colors">
                    <RotateCcw size={16} /> Try again
                  </button>
                </div>
              </div>

              <details className="bg-white rounded-2xl p-6 shadow-sm border border-[#8ECAE6]/20">
                <summary className="text-sm font-semibold text-[#023047] cursor-pointer">View your answers</summary>
                <div className="mt-4 space-y-2">
                  {questions.map((q, i) => (
                    <div key={q.id} className="flex items-start gap-3 text-sm">
                      <span className={`mt-0.5 font-bold ${answers[i] === 'yes' ? 'text-[#FB8500]' : 'text-[#219EBC]'}`}>{answers[i] === 'yes' ? 'Yes' : 'No'}</span>
                      <span className="text-[#023047]/70">{q.text}</span>
                    </div>
                  ))}
                </div>
              </details>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
