import Image from "next/image";
import Link from "next/link";
import { SERVICES, ZONES_IDF, TESTIMONIALS, FAQ_ITEMS, generateFAQJsonLd } from "@/lib/seo-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgentChatWidget from "@/components/AgentChat";

export default function Home() {
  const faqJsonLd = generateFAQJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Header />

      <main>
        {/* ─── HERO SECTION (AIDA) ─── */}
        <section className="relative overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
              alt="Artisan au travail"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7]/95 via-[#FDFBF7]/85 to-[#F5F0E8]/95" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-36">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text */}
              <div className="text-center md:text-left">
                {/* ATTENTION */}
                <p className="inline-block rounded-full border border-[#B8860B]/30 bg-[#B8860B]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#B8860B] mb-6 animate-fade-in-up">
                  Artisans de confiance en Île-de-France
                </p>

                {/* INTÉRÊT */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight tracking-tight text-[#1B1B1B] animate-fade-in-up">
                  L&apos;excellence artisanale,{" "}
                  <span className="gold-text">à votre porte</span>
                </h1>

                {/* DÉSIR */}
                <p className="mt-6 max-w-lg text-lg text-[#4A4A4A] leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
                  Plomberie, serrurerie, vitrerie — nos artisans qualifiés interviennent
                  en <strong>urgence 7j/7</strong> dans tout le Grand Paris.
                  Devis gratuit, tarifs transparents, satisfaction garantie.
                </p>

                {/* ACTION */}
                <div className="mt-8 flex flex-col sm:flex-row items-center md:items-start gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                  <a
                    href="tel:+33100000000"
                    className="inline-flex items-center gap-2 rounded-full gold-gradient px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#B8860B]/20 transition-transform hover:scale-105 active:scale-95"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Appeler maintenant
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-[#B8860B] px-8 py-4 text-base font-semibold text-[#B8860B] transition-colors hover:bg-[#B8860B] hover:text-white"
                  >
                    Découvrir nos services
                  </a>
                </div>

                {/* Trust badges */}
                <div className="mt-10 flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-[#6B6B6B]">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#B8860B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    <span>Certifiés</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#B8860B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>30 min</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#B8860B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                    <span>4.8/5</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#B8860B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" /></svg>
                    <span>Devis gratuit</span>
                  </div>
                </div>
              </div>

              {/* Hero image */}
              <div className="relative hidden md:block">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
                    alt="Artisan professionnel Île-de-France"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10" />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 rounded-xl bg-white border border-[#E8E0D0] p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full gold-gradient text-white text-lg font-bold">
                      15+
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#1B1B1B]">Années</p>
                      <p className="text-xs text-[#6B6B6B]">d&apos;expérience</p>
                    </div>
                  </div>
                </div>
                {/* Floating badge 2 */}
                <div className="absolute -top-4 -right-4 rounded-xl bg-white border border-[#E8E0D0] p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#1B1B1B]">12 000+</p>
                      <p className="text-xs text-[#6B6B6B]">Interventions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── HUB DE SERVICES ─── */}
        <section id="services" className="py-20 md:py-28 bg-[#FDFBF7]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#B8860B] mb-3">
                Nos expertises
              </p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1B1B1B]">
                Trois métiers, une seule exigence
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[#6B6B6B] text-lg">
                Chaque intervention est réalisée par un artisan spécialisé, formé aux standards les plus élevés.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {SERVICES.map((service, i) => (
                <Link
                  key={service.slug}
                  href={service.href}
                  className="service-card group relative flex flex-col rounded-2xl border border-[#E8E0D0] bg-white overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.title} — Artisan Francilien`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute bottom-3 left-4 text-3xl drop-shadow-lg">{service.icon}</span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-serif font-bold text-[#1B1B1B] mb-2">
                      {service.title}
                    </h3>
                    <p className="flex-1 text-[#6B6B6B] leading-relaxed mb-4 text-sm">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-[#B8860B]">{service.tarifs}</span>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#B8860B] group-hover:gap-3 transition-all">
                        Détails
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── COMMENT ÇA MARCHE ─── */}
        <section className="py-20 md:py-28 bg-[#FAF7F2]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#B8860B] mb-3">
                Simple et rapide
              </p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1B1B1B]">
                Comment ça marche ?
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-4">
              {[
                { step: "01", title: "Appelez-nous", desc: "Un conseiller prend votre demande et évalue l'urgence de la situation.", icon: "📞" },
                { step: "02", title: "Devis gratuit", desc: "Notre artisan se déplace et vous remet un devis détaillé sans engagement.", icon: "📋" },
                { step: "03", title: "Intervention", desc: "Après votre accord, l'artisan réalise l'intervention avec précision et soin.", icon: "🔧" },
                { step: "04", title: "Satisfaction", desc: "Vous recevez une facture claire et une garantie sur les travaux effectués.", icon: "✅" },
              ].map((item) => (
                <div key={item.step} className="relative text-center p-6">
                  <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-2xl bg-white border border-[#E8E0D0] shadow-sm mb-5">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <span className="absolute top-2 right-2 text-5xl font-serif font-bold text-[#B8860B]/10">{item.step}</span>
                  <h3 className="text-lg font-serif font-bold text-[#1B1B1B] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── RÉASSURANCE ─── */}
        <section className="py-16 bg-[#1B1B1B] text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-serif font-bold gold-text">15+</p>
                <p className="mt-2 text-sm text-gray-400">Années d&apos;expérience</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-serif font-bold gold-text">12 000+</p>
                <p className="mt-2 text-sm text-gray-400">Interventions réalisées</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-serif font-bold gold-text">4.8/5</p>
                <p className="mt-2 text-sm text-gray-400">Satisfaction client</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-serif font-bold gold-text">30 min</p>
                <p className="mt-2 text-sm text-gray-400">Délai d&apos;intervention</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── TÉMOIGNAGES ─── */}
        <section id="temoignages" className="py-20 md:py-28 bg-[#FDFBF7]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#B8860B] mb-3">
                Ils nous font confiance
              </p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1B1B1B]">
                Avis de nos clients
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="flex flex-col rounded-2xl border border-[#E8E0D0] bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <svg key={j} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#D4A017]" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="flex-1 text-sm text-[#4A4A4A] leading-relaxed mb-4 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-[#F0EBE1]">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-sm font-semibold text-[#1B1B1B]">{t.name}</p>
                      <p className="text-xs text-[#6B6B6B]">{t.location}</p>
                    </div>
                    <span className="ml-auto text-xs font-medium text-[#B8860B] bg-[#B8860B]/5 rounded-full px-2 py-0.5">{t.service}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-20 md:py-28 bg-[#FAF7F2]">
          <div className="mx-auto max-w-3xl px-6">
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#B8860B] mb-3">
                Questions fréquentes
              </p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1B1B1B]">
                FAQ
              </h2>
            </div>

            <div className="space-y-4">
              {FAQ_ITEMS.map((item, i) => (
                <details
                  key={i}
                  className="group rounded-xl border border-[#E8E0D0] bg-white overflow-hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-[#1B1B1B] font-medium transition-colors hover:text-[#B8860B] [&::-webkit-details-marker]:hidden">
                    <span>{item.question}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0 text-[#B8860B] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 text-sm text-[#4A4A4A] leading-relaxed">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA SECTION ─── */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80"
              alt="Artisan travaillant"
              fill
              className="object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#1B1B1B]/85" />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              Un besoin urgent ?<br />
              <span className="gold-text">Contactez-nous maintenant</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Nos artisans sont disponibles 24h/24 et 7j/7. Devis gratuit, intervention rapide, satisfaction garantie.
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
                Demander un devis
              </Link>
            </div>
          </div>
        </section>

        {/* ─── GEOFENCING — ZONES D'INTERVENTION ─── */}
        <section id="zones" className="py-20 md:py-28 bg-[#FDFBF7]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#B8860B] mb-3">
                Couverture complète
              </p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1B1B1B]">
                Zones d&apos;intervention
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[#6B6B6B] text-lg">
                Nous intervenons dans tous les départements d&apos;Île-de-France, 7 jours sur 7.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {ZONES_IDF.map((zone) => (
                <div
                  key={zone.code}
                  className="group flex items-center gap-3 rounded-xl border border-[#E8E0D0] bg-white px-5 py-4 transition-all hover:border-[#B8860B]/40 hover:shadow-md"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg gold-gradient text-sm font-bold text-white">
                    {zone.code}
                  </span>
                  <span className="text-sm font-medium text-[#2D2D2D] group-hover:text-[#B8860B] transition-colors">
                    {zone.nom}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <AgentChatWidget />
    </>
  );
}
