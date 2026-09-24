'use client';

import { useEffect } from 'react';

/**
 * D17 in-page draw: plays each .d17[data-motion] once, when it scrolls into
 * view. Never hides anything up front -- without this script, with reduced
 * motion, or in a full-page capture the piece rests on its still.
 */
export function D17Motion() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('play');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.35 },
    );

    document.querySelectorAll('.d17[data-motion]').forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
