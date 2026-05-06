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
    // Check if already unlocked in this session
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
      setTimeout(() => onUnlock(), 300);
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
      className={`fixed inset-0 z-50 bg-[#023047] flex flex-col items-center justify-center gap-8 transition-all duration-800 ${
        isHidden ? 'opacity-0 invisible' : 'opacity-100 visible'
      }`}
    >
      <div className="text-center">
        <div className="text-xs font-bold tracking-widest text-[#8ECAE6] uppercase mb-8">
          Decoded Ops
        </div>
        <h1 className="text-5xl font-black text-white mb-6 leading-tight max-w-md">
          Access Required
        </h1>
        <p className="text-sm text-[#8ECAE6] text-center max-w-sm">
          This proposal is confidential. Please enter your access code to proceed.
        </p>
      </div>

      <div className="w-full max-w-sm px-6">
        <div className="flex border border-[rgba(33,158,188,0.4)] rounded-lg overflow-hidden">
          <input
            type="password"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="ENTER CODE"
            className="flex-1 px-5 py-3 bg-[rgba(255,255,255,0.05)] border-none outline-none text-white font-mono text-sm tracking-widest uppercase placeholder-[rgba(255,255,255,0.2)]"
          />
          <button
            onClick={handleUnlock}
            className="px-6 py-3 bg-[#219EBC] hover:bg-[#1a7d97] text-white font-bold text-sm transition-colors duration-200"
          >
            UNLOCK
          </button>
        </div>
      </div>

      {error && (
        <div className="text-sm text-[#FB8500] text-center h-5">
          {error}
        </div>
      )}

      <div className="flex gap-2 mt-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-[#219EBC] animate-pulse"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  );
}
