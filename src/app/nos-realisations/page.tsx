"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GALLERY_ITEMS, SITE_NAME } from "@/lib/seo-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgentChatWidget from "@/components/AgentChat";

const CATEGORIES = ["Toutes", "Plomberie", "Serrurerie", "Vitrerie"] as const;

export default function NosRealisationsPage() {
  const [filter, setFilter] = useState<string>("Toutes");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "Toutes"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-[#FAF7F2] to-[#FDFBF7] py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <nav className="flex items-center gap-2 text-sm text-[#6B6B6B] mb-6">
              <Link href="/" className="hover:text-[#B8860B] transition-colors">Accueil</Link>
              <span>/</span>
              <span className="text-[#1B1B1B]">Nos réalisations</span>
            </nav>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#B8860B] mb-3">
                Portfolio
              </p>
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#1B1B1B]">
                Nos <span className="gold-text">réalisations</span>
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-[#6B6B6B] text-lg">
                Découvrez nos dernières interventions en plomberie, serrurerie et vitrerie à travers l&apos;Île-de-France.
              </p>
            </div>
          </div>
        </section>

        {/* Filters + Gallery */}
        <section className="py-12 md:py-20 bg-[#FDFBF7]">
          <div className="mx-auto max-w-7xl px-6">
            {/* Category filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
                    filter === cat
                      ? "gold-gradient text-white shadow-md"
                      : "border border-[#E8E0D0] bg-white text-[#2D2D2D] hover:border-[#B8860B]/40 hover:text-[#B8860B]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox(i)}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E8E0D0] bg-white shadow-sm hover:shadow-xl transition-all text-left"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-block rounded-full bg-[#B8860B] px-3 py-1 text-xs font-semibold text-white mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-serif font-bold text-white">{item.title}</h3>
                    <p className="text-sm text-white/70">{item.location}</p>
                  </div>
                </button>
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="text-center text-[#6B6B6B] py-12">
                Aucune réalisation dans cette catégorie pour le moment.
              </p>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#FAF7F2]">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1B1B1B] mb-6">
              Votre projet est le prochain ?
            </h2>
            <p className="text-lg text-[#6B6B6B] mb-8">
              Contactez-nous pour discuter de vos besoins et obtenir un devis gratuit personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full gold-gradient px-8 py-4 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105"
              >
                Demander un devis gratuit
              </Link>
              <a
                href="tel:+33100000000"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#B8860B] px-8 py-4 text-base font-semibold text-[#B8860B] transition-colors hover:bg-[#B8860B] hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                01 00 00 00 00
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Fermer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-4xl w-full aspect-[4/3] rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <Image
              src={filtered[lightbox].image}
              alt={filtered[lightbox].title}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <span className="inline-block rounded-full bg-[#B8860B] px-3 py-1 text-xs font-semibold text-white mb-2">
                {filtered[lightbox].category}
              </span>
              <h3 className="text-xl font-serif font-bold text-white">{filtered[lightbox].title}</h3>
              <p className="text-sm text-white/70">{filtered[lightbox].location}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <AgentChatWidget />
    </>
  );
}
