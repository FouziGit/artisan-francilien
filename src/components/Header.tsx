"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE_NAME, SERVICES } from "@/lib/seo-config";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#3B6EA6]/10 bg-white/95 backdrop-blur-md shadow-sm shadow-[#3B6EA6]/5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl gold-gradient shadow-md shadow-[#3B6EA6]/20">
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>
          <div>
            <span className="block text-lg font-serif font-bold text-[#1A2B42] tracking-tight leading-none">
              {SITE_NAME}
            </span>
            <span className="block text-[10px] font-medium tracking-widest text-[#3B6EA6] uppercase leading-none mt-0.5">
              IDF · Votre tranquillité, notre métier
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-[#1A2B42]">
          {/* Services dropdown */}
          <li className="relative group">
            <button className="transition-colors hover:text-[#3B6EA6] flex items-center gap-1 py-2">
              Services
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute top-full left-1/2 -translate-x-1/2 pt-2">
              <div className="w-60 rounded-xl border border-[#3B6EA6]/10 bg-white p-2 shadow-xl shadow-[#3B6EA6]/10">
                {SERVICES.map((s) => (
                  <a
                    key={s.slug}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-[#1A2B42] transition-colors hover:bg-[#EBF3FB] hover:text-[#3B6EA6] group/item"
                  >
                    <span className="text-lg">{s.icon}</span>
                    <span className="flex-1">{s.title}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 opacity-0 group-hover/item:opacity-40 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
                <hr className="my-1.5 border-[#3B6EA6]/10" />
                <Link
                  href="/tarifs"
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-[#1A2B42] transition-colors hover:bg-[#EBF3FB] hover:text-[#3B6EA6]"
                >
                  <span className="text-lg">💰</span>
                  Tarifs
                </Link>
              </div>
            </div>
          </li>
          <li><Link href="/zones-intervention" className="transition-colors hover:text-[#3B6EA6]">Zones</Link></li>
          <li><Link href="/a-propos" className="transition-colors hover:text-[#3B6EA6]">À propos</Link></li>
          <li><Link href="/contact" className="transition-colors hover:text-[#3B6EA6]">Contact</Link></li>
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="tel:+33983929292"
            className="hidden sm:inline-flex items-center gap-2 rounded-full gold-gradient px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95 shadow-md shadow-[#3B6EA6]/20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="font-mono tracking-tight">09.83.92.92.92</span>
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className={`block h-0.5 w-6 bg-[#1A2B42] transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-[#1A2B42] transition-all ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-[#1A2B42] transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#3B6EA6]/10 bg-white animate-fade-in-up">
          <div className="px-6 py-4 space-y-1">
            <p className="px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#3B6EA6]">Nos services</p>
            {SERVICES.map((s) => (
              <a
                key={s.slug}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 rounded-lg px-3 py-3 text-[#1A2B42] transition-colors hover:bg-[#EBF3FB] hover:text-[#3B6EA6]"
              >
                <span className="text-lg">{s.icon}</span>
                <span>{s.title}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-auto h-3.5 w-3.5 text-[#3B6EA6]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
            <hr className="border-[#3B6EA6]/10 my-2" />
            <Link href="/tarifs" onClick={() => setMobileOpen(false)} className="block px-3 py-3 text-[#1A2B42] hover:text-[#3B6EA6] rounded-lg hover:bg-[#EBF3FB]">💰 Tarifs</Link>
            <Link href="/zones-intervention" onClick={() => setMobileOpen(false)} className="block px-3 py-3 text-[#1A2B42] hover:text-[#3B6EA6] rounded-lg hover:bg-[#EBF3FB]">Zones d&apos;intervention</Link>
            <Link href="/a-propos" onClick={() => setMobileOpen(false)} className="block px-3 py-3 text-[#1A2B42] hover:text-[#3B6EA6] rounded-lg hover:bg-[#EBF3FB]">À propos</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="block px-3 py-3 text-[#1A2B42] hover:text-[#3B6EA6] rounded-lg hover:bg-[#EBF3FB]">Contact</Link>
            <a
              href="tel:+33983929292"
              className="flex items-center justify-center gap-2 mt-3 rounded-full gold-gradient px-5 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#3B6EA6]/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              09.83.92.92.92
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
