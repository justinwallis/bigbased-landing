'use client';

import { useState, useEffect } from 'react';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShowBanner(false);
    // Initialize GA after consent
    initializeGA();
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'false');
    setShowBanner(false);
  };

  return showBanner ? (
    <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 p-4 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-zinc-300 text-sm">
          We use cookies to enhance your experience and analyze site usage.
        </p>
        <div className="flex gap-4">
          <button
            onClick={acceptCookies}
            className="px-4 py-2 bg-zinc-100 text-zinc-900 rounded-full text-sm font-medium"
          >
            Accept
          </button>
          <button
            onClick={declineCookies}
            className="px-4 py-2 border border-zinc-700 text-zinc-300 rounded-full text-sm"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  ) : null;
}

import { initializeGA } from '@/lib/gtag';
