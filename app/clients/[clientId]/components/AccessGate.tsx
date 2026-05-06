'use client';

import { useState, useEffect } from 'react';

interface AccessGateProps {
  accessCode: string;
  onUnlock: () => void;
}

export default function AccessGate({ accessCode, onUnlock }: AccessGateProps) {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const isUnlocked = localStorage.getItem('clients_tacklebag_unlocked');
    if (isUnlocked) {
      setIsHidden(true);
      onUnlock();
    }
  }, [onUnlock]);

  const handleUnlock = () => {
    if (code.trim().toUpperCase() === accessCode) {
      localStorage.setItem('clients_tacklebag_unlocked', 'true');
      setIsHidden(true);
      setTimeout(() => onUnlock(), 800);
    } else {
      setError('Incorrect access code. Try again.');
      setTimeout(() => setError(''), 2000);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleUnlock();
    }
  };

  if (isHidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#023047] flex flex-col items-center justify-center gap-8 transition-all duration-700 ${
        isHidden ? 'opacity-0 invisible' : 'opacity-100 visible'
      }`}
    >
      <div className="text-center">
        <div className="text-xs font-bold tracking-widest text-[#8ECAE6] uppercase mb-8">
          Decoded Ops
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-white mb-6 leading-tight max-w-lg text-center">
          This proposal was prepared<br />exclusively for you, Paul.
        </h1>
        <p className="text-sm text-[#8ECAE6] text-center max-w-sm">
          Enter your access code to view your operations roadmap
        </p>
      </div>

      <div className="w-full max-w-sm px-6">
        <div className="flex gap-0 border border-[rgba(33,158,188,0.4)] rounded-lg overflow-hidden">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
            onKeyDown={handleKeyDown}
            placeholder="Enter access code"
            className="flex-1 px-5 py-3.5 bg-[rgba(255,255,255,0.05)] border-none outline-none text-white font-mono text-sm tracking-widest placeholder-[rgba(255,255,255,0.2)]"
            autoComplete="off"
            spellCheck="false"
          />
          <button
            onClick={handleUnlock}
            className="px-6 py-3.5 bg-[#219EBC] hover:bg-[#1a7d97] text-white font-bold text-sm transition-colors duration-200"
          >
            Open →
          </button>
        </div>
      </div>

      <div className="h-5 text-xs text-[#FB8500] text-center">
        {error}
      </div>

      <div className="flex gap-2 mt-4">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-[#219EBC]"
            style={{
              animation: `dotPulse 1.6s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes dotPulse {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }
      `}</style>
    </div>
  );
}
