import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SERVICES, ZONES_IDF, SITE_NAME, SITE_URL, generateServiceJsonLd } from "@/lib/seo-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgentChatWidget from "@/components/AgentChatLoader";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} — Artisan en Île-de-France`,
    description: service.longDescription,
    keywords: [...service.keywords],
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: `${service.title} — ${SITE_NAME}`,
      description: service.longDescription,
      url: `${SITE_URL}/services/${slug}`,
      images: [{ url: service.heroImage, width: 1200, height: 630 }],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const jsonLd = generateServiceJsonLd(service);
  const otherServices = SERVICES.filter((s) => s.slug !== slug);
  const professionMap: Record<string, string> = { vitrerie: "vitrier", plomberie: "plombier", serrurerie: "serrurier" };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main>
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
          <Image
            src={service.heroImage}
            alt={`${service.title} — ${SITE_NAME}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B]/80 via-[#1B1B1B]/40 to-transparent" />
          <div className="relative z-10 mx-auto max-w-7xl w-full px-6 pb-12">
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-4">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <span>/</span>
              <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <span className="text-white">{service.title}</span>
            </nav>
            <div className="flex items-center gap-4">
              <span className="text-5xl">{service.icon}</span>
              <div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">{service.title}</h1>
                <p className="mt-2 text-lg text-white/80">{service.tarifs} — Devis gratuit</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 bg-[#FDFBF7]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Main content */}
              <div className="md:col-span-2">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1B1B1B] mb-6">
                  Notre expertise en {service.title.toLowerCase()}
                </h2>
                <p className="text-[#4A4A4A] leading-relaxed mb-8 text-lg">
                  {service.longDescription}
                </p>

                {/* Image showcase */}
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-10">
                  <Image
                    src={service.image}
                    alt={`Intervention ${service.title.toLowerCase()}`}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Prestations */}
                <h3 className="text-xl font-serif font-bold text-[#1B1B1B] mb-4">Nos prestations</h3>
                <div className="grid sm:grid-cols-2 gap-3 mb-10">
                  {service.prestations.map((p, i) => (
                    <div key={i} className="flex items-start gap-3 rounded-lg border border-[#E8E0D0] bg-white p-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 shrink-0 text-[#3B6EA6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-[#2D2D2D]">{p}</span>
                    </div>
                  ))}
                </div>

                {/* Zones */}
                <h3 className="text-xl font-serif font-bold text-[#1B1B1B] mb-4">Zones d&apos;intervention</h3>
                <div className="flex flex-wrap gap-2">
                  {ZONES_IDF.map((z) => (
                    <span key={z.code} className="inline-flex items-center gap-1.5 rounded-full border border-[#E8E0D0] bg-white px-3 py-1.5 text-xs font-medium text-[#2D2D2D]">
                      <span className="h-2 w-2 rounded-full gold-gradient" />
                      {z.nom} ({z.code})
                    </span>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <aside className="space-y-6">
                {/* CTA Card */}
                <div className="sticky top-24 space-y-6">
                  <div className="rounded-2xl border border-[#E8E0D0] bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-serif font-bold text-[#1B1B1B] mb-4">Besoin d&apos;un {professionMap[service.title.toLowerCase()] ?? "artisan"} ?</h3>
                    <p className="text-sm text-[#6B6B6B] mb-6">Intervention rapide en Île-de-France. Devis gratuit et sans engagement.</p>
                    <a
                      href="tel:+33765822626"
                      className="flex items-center justify-center gap-2 w-full rounded-full gold-gradient px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Appeler : 07.65.82.26.26
                    </a>
                    <Link
                      href="/contact"
                      className="flex items-center justify-center w-full mt-3 rounded-full border-2 border-[#3B6EA6] px-6 py-3 text-sm font-semibold text-[#3B6EA6] transition-colors hover:bg-[#3B6EA6] hover:text-white"
                    >
                      Demander un devis
                    </Link>
                  </div>

                  {/* Guarantees */}
                  <div className="rounded-2xl border border-[#E8E0D0] bg-white p-6 shadow-sm">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-[#3B6EA6] mb-4">Nos garanties</h4>
                    <ul className="space-y-3">
                      {[
                        "Devis gratuit et transparent",
                        "Artisans certifiés et assurés",
                        "Intervention en 30 minutes",
                        "Garantie sur les travaux",
                        "Paiement sécurisé",
                      ].map((g, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-[#4A4A4A]">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                          {g}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Other services */}
                  <div className="rounded-2xl border border-[#E8E0D0] bg-white p-6 shadow-sm">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-[#3B6EA6] mb-4">Autres services</h4>
                    <div className="space-y-2">
                      {otherServices.map((s) => (
                        <a
                          key={s.slug}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-[#2D2D2D] transition-colors hover:bg-[#EBF3FB] hover:text-[#3B6EA6]"
                        >
                          <span className="text-lg">{s.icon}</span>
                          <span className="flex-1">{s.title}</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <AgentChatWidget />
    </>
  );
}
