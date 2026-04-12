import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex flex-1 items-center justify-center bg-[#FDFBF7] py-24">
        <div className="mx-auto max-w-lg px-6 text-center">
          <p className="text-8xl font-serif font-bold gold-text mb-4">404</p>
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#1B1B1B] mb-4">
            Page introuvable
          </h1>
          <p className="text-[#6B6B6B] mb-8">
            La page que vous recherchez n&apos;existe pas ou a été déplacée.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full gold-gradient px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Retour à l&apos;accueil
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#B8860B] px-8 py-3.5 text-sm font-semibold text-[#B8860B] transition-colors hover:bg-[#B8860B] hover:text-white"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
