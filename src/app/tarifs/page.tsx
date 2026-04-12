import Link from "next/link";
import type { Metadata } from "next";
import { SITE_NAME, TARIFS_DATA } from "@/lib/seo-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgentChatWidget from "@/components/AgentChat";

export const metadata: Metadata = {
  title: "Tarifs — Grille tarifaire transparente",
  description: `Découvrez les tarifs d'${SITE_NAME} pour la plomberie, serrurerie et vitrerie en Île-de-France. Devis gratuit, prix transparents.`,
  alternates: { canonical: "/tarifs" },
};

export default function TarifsPage() {
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
              <span className="text-[#1B1B1B]">Tarifs</span>
            </nav>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#B8860B] mb-3">
                Transparence totale
              </p>
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#1B1B1B]">
                Nos <span className="gold-text">tarifs</span>
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-[#6B6B6B] text-lg">
                Des prix clairs et sans surprise. Chaque intervention fait l&apos;objet d&apos;un devis gratuit
                et détaillé avant tout engagement.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Tables */}
        <section className="py-12 md:py-20 bg-[#FDFBF7]">
          <div className="mx-auto max-w-7xl px-6 space-y-12">
            {TARIFS_DATA.map((table) => (
              <div key={table.slug} className="rounded-2xl border border-[#E8E0D0] bg-white overflow-hidden shadow-sm">
                {/* Header */}
                <div className="flex items-center gap-4 px-8 py-6 border-b border-[#E8E0D0] bg-[#FAF7F2]">
                  <span className="text-3xl">{table.icon}</span>
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-[#1B1B1B]">{table.service}</h2>
                    <p className="text-sm text-[#6B6B6B]">Tarifs indicatifs TTC — Devis gratuit sur place</p>
                  </div>
                  <Link
                    href={`/services/${table.slug}`}
                    className="ml-auto hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-[#B8860B] hover:underline"
                  >
                    Voir le service
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

                {/* Table */}
                <div className="divide-y divide-[#F0EBE1]">
                  {table.prestations.map((p, i) => (
                    <div key={i} className="flex items-center justify-between px-8 py-4 hover:bg-[#FAF7F2]/50 transition-colors">
                      <div>
                        <p className="text-sm font-medium text-[#1B1B1B]">{p.nom}</p>
                        <p className="text-xs text-[#9B9B9B]">{p.detail}</p>
                      </div>
                      <span className={`text-sm font-bold ${p.prix === "Sur devis" ? "text-[#6B6B6B]" : "text-[#B8860B]"}`}>
                        {p.prix}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Notes */}
        <section className="py-12 bg-[#FAF7F2]">
          <div className="mx-auto max-w-3xl px-6">
            <div className="rounded-2xl border border-[#E8E0D0] bg-white p-8">
              <h3 className="text-lg font-serif font-bold text-[#1B1B1B] mb-4">Informations importantes</h3>
              <ul className="space-y-3 text-sm text-[#4A4A4A]">
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 shrink-0 text-[#B8860B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Les tarifs indiqués sont à titre indicatif et peuvent varier selon la complexité de l&apos;intervention et les pièces nécessaires.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 shrink-0 text-[#B8860B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Un supplément peut s&apos;appliquer pour les interventions en urgence (nuit, week-end, jours fériés).</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 shrink-0 text-[#B8860B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Le devis est toujours gratuit et sans engagement. Le prix final est celui du devis accepté.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 shrink-0 text-[#B8860B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Paiement accepté : carte bancaire, espèces, chèque, virement. Facilités de paiement au-delà de 300€.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#1B1B1B]">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Obtenez votre devis <span className="gold-text">gratuit</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Chaque situation est unique. Contactez-nous pour un devis personnalisé et sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+33100000000"
                className="inline-flex items-center gap-2 rounded-full gold-gradient px-8 py-4 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                01 00 00 00 00
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Demander un devis en ligne
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
