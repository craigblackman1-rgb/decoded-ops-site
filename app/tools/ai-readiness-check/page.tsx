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
  { min: 0, max: 3, label: 'Not Ready — Fix Your Foundations', color: '#FB8500', description: 'Find out if your business is actually ready to benefit from AI. A free 5-minute assessment covering your data quality, process documentation, and systems integration.', action: 'Book a Clarity Audit' },
  { min: 4, max: 6, label: 'Getting There — Proceed Carefully', color: '#FFB703', description: 'Find out if your business is actually ready to benefit from AI. A free 5-minute assessment covering your data quality, process documentation, and systems integration.', action: 'Discuss Your Readiness' },
  { min: 7, max: 10, label: 'Ready — Evaluate with Confidence', color: '#219EBC', description: 'Find out if your business is actually ready to benefit from AI. A free 5-minute assessment covering your data quality, process documentation, and systems integration.', action: 'Explore AI Opportunities' },
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
      <section className="g-navy">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <span className="eyebrow">— Free tool</span>
          <h1>AI readiness check</h1>
          <p className="lede">Six quick questions to find out whether your business is ready to adopt AI — or whether you need to fix your operational foundation first.</p>
        </div>
      </section>

      <section className="g-off">
        <div className="wrap" style={{ maxWidth: 720 }}>
          {!showResults ? (
            <div>
              <div style={{ marginBottom: 32 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--do-text-sm)', color: 'var(--do-text-subtle)', marginBottom: 8 }}>
                  <span>Question {currentQ + 1} of {questions.length}</span>
                  <span>{Math.round((answeredCount / questions.length) * 100)}%</span>
                </div>
                <div style={{ height: 8, borderRadius: 'var(--do-radius-full)', background: 'color-mix(in srgb, var(--do-sky-blue) 30%, transparent)', overflow: 'hidden' }}>
                  <div style={{ height: '100%', borderRadius: 'var(--do-radius-full)', transition: 'all var(--do-duration-normal)', width: `${(answeredCount / questions.length) * 100}%`, background: 'var(--do-cerulean)' }} />
                </div>
              </div>

              <div className="card">
                <div style={{ fontSize: 'var(--do-text-xs)', fontWeight: 'var(--do-weight-semibold)', color: 'var(--do-cerulean)', textTransform: 'uppercase', letterSpacing: 'var(--do-tracking-wider)', marginBottom: 16 }}>Question {currentQ + 1}</div>
                <h2 style={{ marginBottom: 32 }}>{questions[currentQ].text}</h2>
                <div style={{ display: 'flex', gap: 16 }}>
                  <button onClick={() => handleAnswer('yes')} className="btn" style={{ flex: 1, background: 'var(--do-prussian-blue)', color: 'var(--do-text-on-dark)' }}>Yes</button>
                  <button onClick={() => handleAnswer('no')} className="btn btn--outline" style={{ flex: 1, borderColor: 'var(--do-prussian-blue)', color: 'var(--do-text-primary)' }}>No</button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="card" style={{ textAlign: 'center', marginBottom: 32 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 'var(--do-radius-full)', marginBottom: 24, backgroundColor: `${result.color}20`, border: `1px solid ${result.color}40` }}>
                  <span style={{ fontSize: 'var(--do-text-xs)', fontWeight: 'var(--do-weight-semibold)', textTransform: 'uppercase', color: result.color }}>{result.label}</span>
                </div>
                <div style={{ fontSize: 'var(--do-text-5xl)', fontFamily: 'var(--do-font-heading)', fontWeight: 'var(--do-weight-bold)', marginBottom: 16, color: result.color }}>{score}/10</div>
                <p className="lede" style={{ margin: '0 auto 32px', maxWidth: '38ch', color: 'color-mix(in srgb, var(--do-prussian-blue) 74%, transparent)' }}>{result.description}</p>
                <div className="btn-row" style={{ justifyContent: 'center', margin: 0 }}>
                  <Link href="/contact" className="btn btn--primary">
                    {result.action} <ArrowRight size={18} />
                  </Link>
                  <button onClick={reset} className="btn btn--outline">
                    <RotateCcw size={16} /> Try again
                  </button>
                </div>
              </div>

              <details className="card">
                <summary style={{ fontSize: 'var(--do-text-sm)', fontWeight: 'var(--do-weight-semibold)', cursor: 'pointer' }}>View your answers</summary>
                <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {questions.map((q, i) => (
                    <div key={q.id} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 'var(--do-text-sm)' }}>
                      <span style={{ marginTop: 2, fontWeight: 'var(--do-weight-bold)', color: answers[i] === 'yes' ? 'var(--do-orange)' : 'var(--do-cerulean)' }}>{answers[i] === 'yes' ? 'Yes' : 'No'}</span>
                      <span style={{ color: 'color-mix(in srgb, var(--do-prussian-blue) 70%, transparent)' }}>{q.text}</span>
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
