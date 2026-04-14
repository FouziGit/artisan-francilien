import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SITE_NAME, COMPANY_VALUES } from "@/lib/seo-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgentChatWidget from "@/components/AgentChat";

export const metadata: Metadata = {
  title: "À propos — Qui sommes-nous ?",
  description: `Découvrez ${SITE_NAME}, votre partenaire artisanal de confiance en Île-de-France. Plus de 15 ans d'expérience en plomberie, serrurerie et vitrerie.`,
  alternates: { canonical: "/a-propos" },
};

function ValueIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    clock: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    eye: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    shield: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    "map-pin": (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  };
  return <>{icons[icon]}</>;
}

export default function AProposPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
              alt="Équipe Artisan Francilien"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1B1B1B]/70 via-[#1B1B1B]/50 to-[#FDFBF7]" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-36">
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <span>/</span>
              <span className="text-white">À propos</span>
            </nav>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D4A017] mb-3">
              Qui sommes-nous ?
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
              L&apos;artisanat d&apos;excellence,<br />
              <span className="gold-text">depuis plus de 15 ans</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
              Artisan Francilien est né d&apos;une conviction simple : chaque foyer mérite un service artisanal
              rapide, fiable et transparent. Depuis notre création, nous avons réalisé plus de 12 000 interventions
              en Île-de-France.
            </p>
          </div>
        </section>

        {/* Notre histoire */}
        <section className="py-20 md:py-28 bg-[#FDFBF7]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#B8860B] mb-3">
                  Notre histoire
                </p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1B1B1B] mb-6">
                  De l&apos;atelier au leader de la rénovation en IDF
                </h2>
                <div className="space-y-4 text-[#4A4A4A] leading-relaxed">
                  <p>
                    Artisan Francilien est né d&apos;une conviction simple : chaque foyer d&apos;Île-de-France
                    mérite un service artisanal rapide, fiable et au juste prix. Depuis nos débuts,
                    nous avons bâti notre réputation sur la qualité de nos interventions et notre réactivité.
                  </p>
                  <p>
                    Notre équipe d&apos;artisans spécialisés couvre trois corps de métier complémentaires :
                    plomberie, serrurerie et vitrerie. Nous intervenons dans les 8 départements
                    d&apos;Île-de-France, 7 jours sur 7, y compris les nuits et jours fériés.
                  </p>
                  <p>
                    Notre force ? Un engagement sans faille envers la satisfaction client, des tarifs
                    transparents, et une disponibilité 24h/24 pour les urgences. Chaque artisan est
                    certifié, assuré et formé en continu aux dernières techniques.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                    alt="Artisan au travail"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 rounded-xl bg-white border border-[#E8E0D0] p-5 shadow-lg">
                  <div className="text-center">
                    <p className="text-3xl font-serif font-bold gold-text">12 000+</p>
                    <p className="text-sm text-[#6B6B6B]">interventions réalisées</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nos valeurs */}
        <section className="py-20 md:py-28 bg-[#FAF7F2]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#B8860B] mb-3">
                Ce qui nous anime
              </p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1B1B1B]">
                Nos valeurs
              </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {COMPANY_VALUES.map((value) => (
                <div key={value.title} className="rounded-2xl border border-[#E8E0D0] bg-white p-6 text-center transition-all hover:shadow-lg hover:border-[#B8860B]/30">
                  <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-2xl gold-gradient text-white mb-5">
                    <ValueIcon icon={value.icon} />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#1B1B1B] mb-2">{value.title}</h3>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chiffres clés */}
        <section className="py-16 bg-[#1B1B1B] text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-serif font-bold gold-text">2009</p>
                <p className="mt-2 text-sm text-gray-400">Année de création</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-serif font-bold gold-text">10+</p>
                <p className="mt-2 text-sm text-gray-400">Artisans qualifiés</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-serif font-bold gold-text">12 000+</p>
                <p className="mt-2 text-sm text-gray-400">Interventions réalisées</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-serif font-bold gold-text">98%</p>
                <p className="mt-2 text-sm text-gray-400">Clients satisfaits</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-[#FAF7F2]">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1B1B1B] mb-6">
              Besoin d&apos;un artisan de confiance ?
            </h2>
            <p className="text-lg text-[#6B6B6B] mb-8">
              Contactez-nous dès maintenant pour un devis gratuit et sans engagement.
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
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#B8860B] px-8 py-4 text-base font-semibold text-[#B8860B] transition-colors hover:bg-[#B8860B] hover:text-white"
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
