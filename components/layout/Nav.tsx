"use client";

import { useState, useEffect } from "react";
import { businessInfo } from "@/data/businessInfo";
import t from "@/lib/translations";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t.nav.about,   href: "#el-local" },
    { label: t.nav.menu,    href: "#carta" },
    { label: t.nav.info,    href: "#informacion" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-sand-50/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#"
          className={`font-display text-lg font-bold tracking-tight transition-colors ${
            scrolled ? "text-olive-700" : "text-sand-50"
          }`}
        >
          Siboney
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-terra-500 ${
                  scrolled ? "text-ink" : "text-sand-100"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={businessInfo.phone.href}
              className="text-sm font-semibold bg-terra-500 hover:bg-terra-600 text-white px-4 py-2 rounded-full transition-colors"
            >
              {t.nav.callCta}
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
          className={`md:hidden p-2 transition-colors ${
            scrolled ? "text-ink" : "text-sand-50"
          }`}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen ? (
              <>
                <line x1="3" y1="3" x2="19" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="19" y1="3" x2="3" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            ) : (
              <>
                <line x1="3" y1="6"  x2="19" y2="6"  stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-sand-50/98 backdrop-blur-md border-t border-sand-200 px-5 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-ink font-medium py-1 hover:text-terra-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={businessInfo.phone.href}
            className="mt-1 text-center font-semibold bg-terra-500 hover:bg-terra-600 text-white px-4 py-3 rounded-full transition-colors"
          >
            {t.nav.callCta}
          </a>
        </div>
      )}
    </header>
  );
}
