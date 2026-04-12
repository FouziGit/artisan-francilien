"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE_NAME, SERVICES } from "@/lib/seo-config";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#E8E0D0] bg-[#FDFBF7]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-2xl font-serif font-bold gold-text tracking-tight">
            {SITE_NAME}
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-[#2D2D2D]">
          <li className="relative group">
            <button className="transition-colors hover:text-[#B8860B] flex items-center gap-1">
              Services
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {/* Dropdown */}
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute top-full left-1/2 -translate-x-1/2 pt-2">
              <div className="w-56 rounded-xl border border-[#E8E0D0] bg-white p-2 shadow-xl">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={s.href}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-[#2D2D2D] transition-colors hover:bg-[#FAF7F2] hover:text-[#B8860B]"
                  >
                    <span className="text-lg">{s.icon}</span>
                    {s.title}
                  </Link>
                ))}
                <hr className="my-1 border-[#E8E0D0]" />
                <Link
                  href="/tarifs"
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-[#2D2D2D] transition-colors hover:bg-[#FAF7F2] hover:text-[#B8860B]"
                >
                  <span className="text-lg">💰</span>
                  Tarifs
                </Link>
              </div>
            </div>
          </li>
          <li><Link href="/nos-realisations" className="transition-colors hover:text-[#B8860B]">Réalisations</Link></li>
          <li><Link href="/zones-intervention" className="transition-colors hover:text-[#B8860B]">Zones</Link></li>
          <li><Link href="/a-propos" className="transition-colors hover:text-[#B8860B]">À propos</Link></li>
          <li><Link href="/contact" className="transition-colors hover:text-[#B8860B]">Contact</Link></li>
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="tel:+33100000000"
            className="hidden sm:inline-flex items-center gap-2 rounded-full gold-gradient px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Appeler
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className={`block h-0.5 w-6 bg-[#1B1B1B] transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-[#1B1B1B] transition-all ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-[#1B1B1B] transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#E8E0D0] bg-[#FDFBF7] animate-fade-in-up">
          <div className="px-6 py-4 space-y-1">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={s.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 rounded-lg px-3 py-3 text-[#2D2D2D] transition-colors hover:bg-[#FAF7F2] hover:text-[#B8860B]"
              >
                <span className="text-lg">{s.icon}</span>
                {s.title}
              </Link>
            ))}
            <hr className="border-[#E8E0D0] my-2" />
            <Link href="/tarifs" onClick={() => setMobileOpen(false)} className="block px-3 py-3 text-[#2D2D2D] hover:text-[#B8860B]">Tarifs</Link>
            <Link href="/nos-realisations" onClick={() => setMobileOpen(false)} className="block px-3 py-3 text-[#2D2D2D] hover:text-[#B8860B]">Nos réalisations</Link>
            <Link href="/zones-intervention" onClick={() => setMobileOpen(false)} className="block px-3 py-3 text-[#2D2D2D] hover:text-[#B8860B]">Zones d&apos;intervention</Link>
            <Link href="/a-propos" onClick={() => setMobileOpen(false)} className="block px-3 py-3 text-[#2D2D2D] hover:text-[#B8860B]">À propos</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="block px-3 py-3 text-[#2D2D2D] hover:text-[#B8860B]">Contact</Link>
            <a
              href="tel:+33100000000"
              className="flex items-center justify-center gap-2 mt-3 rounded-full gold-gradient px-5 py-3 text-sm font-semibold text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Appeler maintenant
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
