import Link from "next/link";
import { SITE_NAME, SERVICES, ZONES_IDF } from "@/lib/seo-config";

export default function Footer() {
  return (
    <footer id="contact-footer" className="border-t border-[#E8E0D0] bg-[#1B1B1B] text-gray-400">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/">
              <span className="text-xl font-serif font-bold gold-text">{SITE_NAME}</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              Votre partenaire artisanal de confiance en Île-de-France.
              Plomberie, serrurerie et vitrerie — un savoir-faire d&apos;exception au service de votre quotidien.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <div className="flex items-center gap-2 text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#D4A017]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                <span>Certifiés & Assurés</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#D4A017]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                <span>4.8/5 satisfaction</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={s.href} className="hover:text-[#D4A017] transition-colors">
                    {s.icon} {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/tarifs" className="hover:text-[#D4A017] transition-colors">
                  💰 Tarifs
                </Link>
              </li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-[#D4A017] transition-colors">Accueil</Link></li>
              <li><Link href="/a-propos" className="hover:text-[#D4A017] transition-colors">À propos</Link></li>
              <li><Link href="/nos-realisations" className="hover:text-[#D4A017] transition-colors">Nos réalisations</Link></li>
              <li><Link href="/zones-intervention" className="hover:text-[#D4A017] transition-colors">Zones d&apos;intervention</Link></li>
              <li><Link href="/contact" className="hover:text-[#D4A017] transition-colors">Contact</Link></li>
              <li><Link href="/mentions-legales" className="hover:text-[#D4A017] transition-colors">Mentions légales</Link></li>
              <li><Link href="/politique-confidentialite" className="hover:text-[#D4A017] transition-colors">Confidentialité</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#D4A017]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+33100000000" className="hover:text-[#D4A017] transition-colors">01 00 00 00 00</a>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#D4A017]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@artisan-francilien.fr" className="hover:text-[#D4A017] transition-colors">contact@artisan-francilien.fr</a>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#D4A017]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>7j/7 — 24h/24</span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#D4A017]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Toute l&apos;Île-de-France</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO zone listing */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <p className="text-xs text-gray-500 mb-3">Nous intervenons dans :</p>
          <p className="text-xs text-gray-500">
            {ZONES_IDF.map((z, i) => (
              <span key={z.code}>
                {z.nom} ({z.code}){i < ZONES_IDF.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-[#D4A017] transition-colors">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="hover:text-[#D4A017] transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
