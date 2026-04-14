'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
    setIsLoading(false);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (isLoading || !isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-[#023047] text-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-[#219EBC]/30">
        {/* Close button */}
        <button
          onClick={handleDecline}
          className="absolute top-4 right-4 p-1 text-white/60 hover:text-white transition-colors"
          aria-label="Close cookie consent banner"
        >
          <X size={20} />
        </button>

        <div className="max-w-3xl">
          {/* Heading and description */}
          <h2 className="text-lg sm:text-xl font-bold mb-3 pr-8">Cookie preferences</h2>
          <p className="text-sm sm:text-base text-white/85 mb-6 leading-relaxed">
            We use cookies to enhance your experience, remember your preferences, and understand how you use our site. By continuing to browse, you accept our use of cookies. You can manage your preferences or decline at any time.
          </p>

          {/* Links and buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <Link
              href="/cookies"
              className="text-sm text-[#FFB703] hover:text-[#FB8500] transition-colors font-medium underline"
            >
              Read our cookie policy
            </Link>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={handleDecline}
                className="px-6 py-2.5 text-sm font-medium text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors text-center"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-2.5 text-sm font-semibold bg-[#FFB703] text-[#023047] rounded-full hover:bg-[#FB8500] transition-colors text-center"
              >
                Accept cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
