"use client";

import { businessInfo } from "@/data/businessInfo";
import t from "@/lib/translations";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-white/95 backdrop-blur-md border-t border-sand-200 px-4 py-3 flex gap-2 safe-bottom">
        <a
          href={businessInfo.phone.href}
          className="flex-1 flex items-center justify-center gap-2 bg-terra-500 hover:bg-terra-600 active:bg-terra-600 text-white font-semibold text-sm py-3 rounded-xl transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path
              d="M13.3 10.5c-.5-.5-1.2-.5-1.7 0l-1 1c-.1.1-.3.1-.4 0C8.8 10.4 7.4 9 6.3 7.6c-.1-.1-.1-.3 0-.4l1-1c.5-.5.5-1.2 0-1.7L5.8 3c-.5-.5-1.2-.5-1.7 0l-.8.8C2.4 4.7 2.5 6.2 3.4 7.7c1.3 2 3.1 3.8 5 5.1 1.5.9 3 1 3.9.1l.8-.8c.5-.5.5-1.2.1-1.6z"
              fill="currentColor"
            />
          </svg>
          {t.stickyBar.call}
        </a>
        <a
          href={businessInfo.links.googleMaps}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-olive-600 hover:bg-olive-700 active:bg-olive-700 text-white font-semibold text-sm py-3 rounded-xl transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path
              d="M8 1C5.2 1 3 3.2 3 6c0 3.8 5 9 5 9s5-5.2 5-9c0-2.8-2.2-5-5-5zm0 6.8A1.8 1.8 0 1 1 8 4.2a1.8 1.8 0 0 1 0 3.6z"
              fill="currentColor"
            />
          </svg>
          {t.stickyBar.directions}
        </a>
        <a
          href={businessInfo.links.digitalMenu}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-sand-200 hover:bg-sand-300 active:bg-sand-300 text-olive-700 font-semibold text-sm py-3 rounded-xl transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <rect x="2" y="1" width="12" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <line x1="5" y1="5.5" x2="11" y2="5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="5" y1="8"   x2="11" y2="8"   stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="5" y1="10.5" x2="9" y2="10.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          {t.stickyBar.menu}
        </a>
      </div>
    </div>
  );
}
