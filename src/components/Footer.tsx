import Link from "next/link";
import { SITE_NAME, SERVICES, ZONES_IDF } from "@/lib/seo-config";

export default function Footer() {
  return (
    <footer className="border-t border-[#3B6EA6]/10 bg-[#1A2B42] text-[#8BA8C4]">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg gold-gradient">
                <svg viewBox="0 0 24 24" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
              <div>
                <span className="block text-base font-serif font-bold text-white">{SITE_NAME}</span>
                <span className="block text-[10px] tracking-widest text-[#5E90C8] uppercase">IDF</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed">
              Votre partenaire artisanal de confiance en Île-de-France.
              Plomberie, serrurerie et vitrerie — disponibles 24h/24.
            </p>
            <div className="flex flex-col gap-2 mt-5">
              <a href="tel:+33983929292" className="inline-flex items-center gap-2 text-sm text-white font-semibold hover:text-[#5E90C8] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#5E90C8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-mono">09.83.92.92.92</span>
              </a>
              <div className="flex items-center gap-4 mt-1">
                <div className="flex items-center gap-2 text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#5E90C8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  <span>Certifiés & Assurés</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#5E90C8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                  <span>4.8/5 satisfaction</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#5E90C8] transition-colors flex items-center gap-1.5"
                  >
                    {s.icon} {s.title}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              ))}
              <li>
                <Link href="/tarifs" className="hover:text-[#5E90C8] transition-colors">
                  💰 Tarifs
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-[#5E90C8] transition-colors">Accueil</Link></li>
              <li><Link href="/a-propos" className="hover:text-[#5E90C8] transition-colors">À propos</Link></li>
              <li><Link href="/zones-intervention" className="hover:text-[#5E90C8] transition-colors">Zones d&apos;intervention</Link></li>
              <li><Link href="/contact" className="hover:text-[#5E90C8] transition-colors">Contact</Link></li>
              <li><Link href="/mentions-legales" className="hover:text-[#5E90C8] transition-colors">Mentions légales</Link></li>
              <li><Link href="/politique-confidentialite" className="hover:text-[#5E90C8] transition-colors">Confidentialité</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#5E90C8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+33983929292" className="hover:text-[#5E90C8] transition-colors font-mono">09.83.92.92.92</a>
              </li>
              <li className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" style={{ fill: "#25D366" }} xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <a href="https://wa.me/33765822626" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors font-mono">07.65.82.26.26</a>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#5E90C8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@artisan-francilien.fr" className="hover:text-[#5E90C8] transition-colors text-xs">contact@artisan-francilien.fr</a>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#5E90C8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>7j/7 — 24h/24</span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#5E90C8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
          <p className="text-xs text-[#4A6080] mb-3">Nous intervenons dans :</p>
          <p className="text-xs text-[#4A6080]">
            {ZONES_IDF.map((z, i) => (
              <span key={z.code}>
                {z.nom} ({z.code}){i < ZONES_IDF.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#4A6080]">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-[#5E90C8] transition-colors">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="hover:text-[#5E90C8] transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
