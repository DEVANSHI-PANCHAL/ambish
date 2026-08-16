"use client";

import React, { useEffect, useState } from 'react';
import { AMBISH_LOGO_BASE64 } from './ambish-logo-base64';

export default function ConstructionSiteLoader() {
  const [isDismissed, setIsDismissed] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Start smooth fade-out at 800ms
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 800);

    // Remove from DOM after fade transition completes
    const removeTimer = setTimeout(() => {
      setIsDismissed(true);
    }, 1200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (isDismissed) return null;

  return (
    <div
      id="ambish-global-loader"
      className={`fixed inset-0 z-[9999] bg-[#FAF9F6] flex flex-col items-center justify-center select-none overflow-hidden transition-all duration-400 ease-out ${
        isFadingOut ? 'opacity-0 pointer-events-none scale-[1.01]' : 'opacity-100'
      }`}
    >
      {/* Warm ambient backlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#E86A17]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-xs w-full px-6">
        {/* Instant Server-Rendered Inline Logo (100% visible on Frame 0 - No initial opacity:0 delay) */}
        <div className="relative w-48 sm:w-56 h-14 mb-3 flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            id="loader-logo-img"
            src={AMBISH_LOGO_BASE64}
            alt="Ambish Engineering Logo"
            className="w-full h-full object-contain block"
            loading="eager"
            decoding="sync"
          />
        </div>

        {/* Pure CSS Native Shimmer Bar - Animates with zero JS dependency */}
        <div className="relative w-40 h-[2.5px] bg-slate-200/80 rounded-full overflow-hidden mb-3">
          <div
            id="loader-shimmer-line"
            className="w-full h-full bg-gradient-to-r from-amber-400 via-[#E86A17] to-orange-500 origin-left shadow-[0_0_8px_rgba(232,106,23,0.8)]"
            style={{
              animation: 'shimmerGrow 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            }}
          />
        </div>

        {/* Heritage Tagline (100% visible on Frame 0) */}
        <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-slate-500 text-center font-sans">
          Building Trust Since 1976
        </p>
      </div>

      <style jsx>{`
        @keyframes shimmerGrow {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }
      `}</style>
    </div>
  );
}
