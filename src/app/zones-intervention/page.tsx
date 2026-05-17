import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SITE_NAME, ZONES_IDF, SERVICES } from "@/lib/seo-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgentChatWidget from "@/components/AgentChat";

export const metadata: Metadata = {
  title: "Zones d'intervention — Île-de-France",
  description: `${SITE_NAME} intervient dans les 8 départements d'Île-de-France : Paris, Hauts-de-Seine, Seine-Saint-Denis, Val-de-Marne, Yvelines, Essonne, Val-d'Oise, Seine-et-Marne.`,
  alternates: { canonical: "/zones-intervention" },
};

const ZONES_DETAILS = [
  {
    code: "75",
    nom: "Paris",
    description: "Intervention dans tous les arrondissements de Paris. Dépannage en urgence 24h/24.",
    villes: ["Paris 1er - 4e (Centre)", "Paris 5e - 7e (Rive Gauche)", "Paris 8e - 9e (Opéra)", "Paris 10e - 12e (Est)", "Paris 13e - 15e (Sud)", "Paris 16e - 17e (Ouest)", "Paris 18e - 20e (Nord-Est)"],
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80",
  },
  {
    code: "92",
    nom: "Hauts-de-Seine",
    description: "Couverture complète du 92. Intervention rapide à Boulogne, Neuilly, Nanterre et dans toutes les communes.",
    villes: ["Boulogne-Billancourt", "Nanterre", "Courbevoie", "Colombes", "Asnières-sur-Seine", "Rueil-Malmaison", "Neuilly-sur-Seine"],
    image: "https://images.unsplash.com/photo-1524396309943-e03f5249f002?w=600&q=80",
  },
  {
    code: "93",
    nom: "Seine-Saint-Denis",
    description: "Disponibles dans tout le 93. Artisans de proximité pour un service rapide et efficace.",
    villes: ["Saint-Denis", "Montreuil", "Aubervilliers", "Aulnay-sous-Bois", "Drancy", "Noisy-le-Grand", "Bobigny"],
    image: "https://images.unsplash.com/photo-1564594327898-67555aea6531?w=600&q=80",
  },
  {
    code: "94",
    nom: "Val-de-Marne",
    description: "Intervention dans tout le Val-de-Marne. Nos artisans se déplacent rapidement à Créteil, Vincennes et environs.",
    villes: ["Créteil", "Vitry-sur-Seine", "Champigny-sur-Marne", "Vincennes", "Ivry-sur-Seine", "Maisons-Alfort", "Saint-Maur-des-Fossés"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    code: "78",
    nom: "Yvelines",
    description: "De Versailles à Saint-Germain-en-Laye, nos artisans couvrent tout le département des Yvelines.",
    villes: ["Versailles", "Sartrouville", "Mantes-la-Jolie", "Saint-Germain-en-Laye", "Poissy", "Conflans-Sainte-Honorine", "Le Chesnay"],
    image: "https://images.unsplash.com/photo-1597040663342-45b6ba68c88e?w=600&q=80",
  },
  {
    code: "91",
    nom: "Essonne",
    description: "Couverture de l'Essonne, d'Évry à Massy. Intervention sous 1 heure dans tout le département.",
    villes: ["Évry-Courcouronnes", "Corbeil-Essonnes", "Massy", "Savigny-sur-Orge", "Sainte-Geneviève-des-Bois", "Viry-Châtillon", "Palaiseau"],
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80",
  },
  {
    code: "95",
    nom: "Val-d'Oise",
    description: "De Cergy à Sarcelles, intervention rapide dans tout le Val-d'Oise.",
    villes: ["Argenteuil", "Sarcelles", "Cergy", "Garges-lès-Gonesse", "Franconville", "Goussainville", "Bezons"],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
  },
  {
    code: "77",
    nom: "Seine-et-Marne",
    description: "Intervention dans les principales villes de Seine-et-Marne. Disponibles 7j/7.",
    villes: ["Meaux", "Chelles", "Melun", "Pontault-Combault", "Savigny-le-Temple", "Torcy", "Roissy-en-Brie"],
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
  },
] as const;

export default function ZonesInterventionPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-[#FAF7F2] to-[#FDFBF7] py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <nav className="flex items-center gap-2 text-sm text-[#6B6B6B] mb-6">
              <Link href="/" className="hover:text-[#3B6EA6] transition-colors">Accueil</Link>
              <span>/</span>
              <span className="text-[#1B1B1B]">Zones d&apos;intervention</span>
            </nav>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#3B6EA6] mb-3">
                Couverture Île-de-France
              </p>
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#1B1B1B]">
                Nos zones <span className="gold-text">d&apos;intervention</span>
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-[#6B6B6B] text-lg">
                Nous intervenons dans les 8 départements d&apos;Île-de-France, 7j/7 et 24h/24 pour les urgences.
                Où que vous soyez, un artisan qualifié est à proximité.
              </p>
            </div>
          </div>
        </section>

        {/* Quick badges */}
        <section className="py-8 bg-[#FDFBF7]">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {ZONES_IDF.map((zone) => (
                <a
                  key={zone.code}
                  href={`#zone-${zone.code}`}
                  className="group flex items-center gap-3 rounded-xl border border-[#E8E0D0] bg-white px-5 py-4 transition-all hover:border-[#3B6EA6]/40 hover:shadow-md"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg gold-gradient text-sm font-bold text-white">
                    {zone.code}
                  </span>
                  <span className="text-sm font-medium text-[#2D2D2D] group-hover:text-[#3B6EA6] transition-colors">
                    {zone.nom}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed zones */}
        <section className="py-12 md:py-20 bg-[#FDFBF7]">
          <div className="mx-auto max-w-7xl px-6 space-y-12">
            {ZONES_DETAILS.map((zone, idx) => (
              <div
                key={zone.code}
                id={`zone-${zone.code}`}
                className="scroll-mt-24 rounded-2xl border border-[#E8E0D0] bg-white overflow-hidden shadow-sm"
              >
                <div className={`grid md:grid-cols-5 ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  {/* Image */}
                  <div className={`relative h-64 md:h-auto md:col-span-2 ${idx % 2 === 1 ? "md:order-2" : ""}`}>
                    <Image
                      src={zone.image}
                      alt={`Intervention ${zone.nom}`}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl gold-gradient text-lg font-bold text-white shadow-lg">
                      {zone.code}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-8 md:col-span-3 ${idx % 2 === 1 ? "md:order-1" : ""}`}>
                    <h2 className="text-2xl font-serif font-bold text-[#1B1B1B] mb-3">
                      {zone.nom} ({zone.code})
                    </h2>
                    <p className="text-[#4A4A4A] leading-relaxed mb-6">
                      {zone.description}
                    </p>

                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#3B6EA6] mb-3">
                      Principales villes couvertes
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {zone.villes.map((ville) => (
                        <span key={ville} className="inline-flex items-center gap-1.5 rounded-full border border-[#E8E0D0] bg-[#FAF7F2] px-3 py-1.5 text-xs font-medium text-[#2D2D2D]">
                          <span className="h-1.5 w-1.5 rounded-full gold-gradient" />
                          {ville}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {SERVICES.map((s) => (
                        <Link
                          key={s.slug}
                          href={s.href}
                          className="inline-flex items-center gap-2 rounded-lg border border-[#E8E0D0] bg-white px-3 py-2 text-xs font-medium text-[#2D2D2D] hover:border-[#3B6EA6]/40 hover:text-[#3B6EA6] transition-colors"
                        >
                          <span>{s.icon}</span>
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#1B1B1B]">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Un artisan <span className="gold-text">près de chez vous</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Quel que soit votre département en Île-de-France, nos artisans interviennent rapidement.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+33983929292"
                className="inline-flex items-center gap-2 rounded-full gold-gradient px-8 py-4 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                09.83.92.92.92
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <AgentChatWidget />
    </>
  );
}
