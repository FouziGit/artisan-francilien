"use client";

import { useState } from "react";
import Link from "next/link";
import { ZONES_IDF } from "@/lib/seo-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
const AgentChatWidget = dynamic(() => import("@/components/AgentChat"), { ssr: false });

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    // Simulate form submission (replace with real API endpoint in production)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <>
        <Header />
        <main className="bg-[#FDFBF7] flex flex-1 items-center justify-center py-24">
          <div className="mx-auto max-w-lg px-6 text-center">
            <div className="flex h-20 w-20 mx-auto items-center justify-center rounded-full bg-green-100 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-serif font-bold text-[#1B1B1B] mb-4">
              Demande envoyée !
            </h1>
            <p className="text-[#6B6B6B] mb-8">
              Merci pour votre demande. Un de nos artisans vous recontactera dans les plus brefs délais
              (généralement sous 30 minutes pendant nos heures d&apos;ouverture).
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full gold-gradient px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
              >
                Retour à l&apos;accueil
              </Link>
              <a
                href="tel:+33983929292"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#3B6EA6] px-8 py-3.5 text-sm font-semibold text-[#3B6EA6] transition-colors hover:bg-[#3B6EA6] hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Appeler directement
              </a>
            </div>
          </div>
        </main>
        <Footer />
        <AgentChatWidget />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="bg-[#FDFBF7]">
        {/* Hero */}
        <section className="bg-gradient-to-b from-[#FAF7F2] to-[#FDFBF7] py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <nav className="flex items-center gap-2 text-sm text-[#6B6B6B] mb-6">
              <Link href="/" className="hover:text-[#3B6EA6] transition-colors">Accueil</Link>
              <span>/</span>
              <span className="text-[#1B1B1B]">Contact</span>
            </nav>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#3B6EA6] mb-3">
                Contactez-nous
              </p>
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#1B1B1B]">
                Demandez votre <span className="gold-text">devis gratuit</span>
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-[#6B6B6B] text-lg">
                Remplissez le formulaire ci-dessous et un de nos artisans vous rappellera dans les plus brefs délais.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-20 md:pb-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid md:grid-cols-5 gap-12">
              {/* Form */}
              <div className="md:col-span-3">
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-[#E8E0D0] bg-white p-8 shadow-sm space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nom" className="block text-sm font-medium text-[#1B1B1B] mb-2">Nom *</label>
                      <input
                        id="nom"
                        name="nom"
                        type="text"
                        required
                        className="w-full rounded-xl border border-[#E8E0D0] bg-[#FAF7F2] px-4 py-3 text-sm text-[#1B1B1B] placeholder-[#9B9B9B] outline-none transition-colors focus:border-[#3B6EA6] focus:ring-2 focus:ring-[#3B6EA6]/10"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="prenom" className="block text-sm font-medium text-[#1B1B1B] mb-2">Prénom *</label>
                      <input
                        id="prenom"
                        name="prenom"
                        type="text"
                        required
                        className="w-full rounded-xl border border-[#E8E0D0] bg-[#FAF7F2] px-4 py-3 text-sm text-[#1B1B1B] placeholder-[#9B9B9B] outline-none transition-colors focus:border-[#3B6EA6] focus:ring-2 focus:ring-[#3B6EA6]/10"
                        placeholder="Votre prénom"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#1B1B1B] mb-2">Email *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-xl border border-[#E8E0D0] bg-[#FAF7F2] px-4 py-3 text-sm text-[#1B1B1B] placeholder-[#9B9B9B] outline-none transition-colors focus:border-[#3B6EA6] focus:ring-2 focus:ring-[#3B6EA6]/10"
                        placeholder="votre@email.fr"
                      />
                    </div>
                    <div>
                      <label htmlFor="tel" className="block text-sm font-medium text-[#1B1B1B] mb-2">Téléphone *</label>
                      <input
                        id="tel"
                        name="tel"
                        type="tel"
                        required
                        className="w-full rounded-xl border border-[#E8E0D0] bg-[#FAF7F2] px-4 py-3 text-sm text-[#1B1B1B] placeholder-[#9B9B9B] outline-none transition-colors focus:border-[#3B6EA6] focus:ring-2 focus:ring-[#3B6EA6]/10"
                        placeholder="ex. 06 12 34 56 78"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-[#1B1B1B] mb-2">Service souhaité *</label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full rounded-xl border border-[#E8E0D0] bg-[#FAF7F2] px-4 py-3 text-sm text-[#1B1B1B] outline-none transition-colors focus:border-[#3B6EA6] focus:ring-2 focus:ring-[#3B6EA6]/10"
                    >
                      <option value="">Choisir un service</option>
                      <option value="plomberie">Plomberie</option>
                      <option value="serrurerie">Serrurerie</option>
                      <option value="vitrerie">Vitrerie</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="departement" className="block text-sm font-medium text-[#1B1B1B] mb-2">Département *</label>
                    <select
                      id="departement"
                      name="departement"
                      required
                      className="w-full rounded-xl border border-[#E8E0D0] bg-[#FAF7F2] px-4 py-3 text-sm text-[#1B1B1B] outline-none transition-colors focus:border-[#3B6EA6] focus:ring-2 focus:ring-[#3B6EA6]/10"
                    >
                      <option value="">Choisir un département</option>
                      {ZONES_IDF.map((z) => (
                        <option key={z.code} value={z.code}>{z.nom} ({z.code})</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="urgence" className="block text-sm font-medium text-[#1B1B1B] mb-2">Niveau d&apos;urgence</label>
                    <div className="flex gap-3">
                      {["Normal", "Urgent", "Très urgent"].map((level) => (
                        <label key={level} className="flex-1 cursor-pointer">
                          <input type="radio" name="urgence" value={level} className="peer sr-only" defaultChecked={level === "Normal"} />
                          <div className="rounded-xl border border-[#E8E0D0] bg-[#FAF7F2] px-4 py-3 text-center text-sm transition-all peer-checked:border-[#3B6EA6] peer-checked:bg-[#3B6EA6]/5 peer-checked:text-[#3B6EA6] peer-checked:font-semibold hover:border-[#3B6EA6]/40">
                            {level}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#1B1B1B] mb-2">Description du problème *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full rounded-xl border border-[#E8E0D0] bg-[#FAF7F2] px-4 py-3 text-sm text-[#1B1B1B] placeholder-[#9B9B9B] outline-none transition-colors focus:border-[#3B6EA6] focus:ring-2 focus:ring-[#3B6EA6]/10 resize-none"
                      placeholder="Décrivez votre besoin en quelques lignes..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full rounded-full gold-gradient px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#3B6EA6]/20 transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {status === "submitting" ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Envoi en cours...
                      </span>
                    ) : (
                      "Envoyer ma demande de devis"
                    )}
                  </button>
                  <p className="text-xs text-center text-[#9B9B9B]">
                    En soumettant ce formulaire, vous acceptez notre{" "}
                    <a href="/politique-confidentialite" className="underline hover:text-[#3B6EA6]">politique de confidentialité</a>.
                  </p>
                </form>
              </div>

              {/* Sidebar */}
              <aside className="md:col-span-2 space-y-6">
                <div className="rounded-2xl border border-[#E8E0D0] bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-serif font-bold text-[#1B1B1B] mb-4">Informations</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 text-[#3B6EA6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold text-[#1B1B1B]">Téléphone</p>
                        <a href="tel:+33983929292" className="text-sm text-[#6B6B6B] hover:text-[#3B6EA6]">09.83.92.92.92</a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 text-[#3B6EA6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold text-[#1B1B1B]">Email</p>
                        <a href="mailto:contact@artisan-francilien.fr" className="text-sm text-[#6B6B6B] hover:text-[#3B6EA6]">contact@artisan-francilien.fr</a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 text-[#3B6EA6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold text-[#1B1B1B]">Disponibilité</p>
                        <p className="text-sm text-[#6B6B6B]">7j/7 — 24h/24</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 text-[#3B6EA6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold text-[#1B1B1B]">Zone</p>
                        <p className="text-sm text-[#6B6B6B]">Toute l&apos;Île-de-France</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl gold-gradient p-6 text-white">
                  <h3 className="text-lg font-serif font-bold mb-2">Urgence ?</h3>
                  <p className="text-sm text-white/80 mb-4">
                    Pour une intervention immédiate, appelez-nous directement. Nos artisans sont disponibles 24h/24.
                  </p>
                  <a
                    href="tel:+33983929292"
                    className="flex items-center justify-center gap-2 w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#3B6EA6] transition-transform hover:scale-105"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    09.83.92.92.92
                  </a>
                </div>

                {/* Trust badges */}
                <div className="rounded-2xl border border-[#E8E0D0] bg-white p-6 shadow-sm">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-[#3B6EA6] mb-4">Pourquoi nous choisir</h4>
                  <ul className="space-y-3">
                    {[
                      "Devis gratuit et sans engagement",
                      "Intervention en 30 minutes",
                      "Artisans certifiés et assurés",
                      "Garantie sur tous les travaux",
                      "Tarifs transparents",
                      "Disponibles 24h/24, 7j/7",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-[#4A4A4A]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
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
