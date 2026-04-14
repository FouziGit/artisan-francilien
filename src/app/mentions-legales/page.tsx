import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/seo-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales du site ${SITE_NAME}.`,
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main className="bg-[#FDFBF7] py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1B1B1B] mb-8">Mentions légales</h1>

          <div className="prose prose-sm max-w-none text-[#4A4A4A] space-y-6">
            <section>
              <h2 className="text-xl font-serif font-bold text-[#1B1B1B]">1. Éditeur du site</h2>
              <p>
                Le site <strong>{SITE_NAME}</strong> est édité par :<br />
                [Nom de la société]<br />
                [Forme juridique] au capital de [montant] €<br />
                Siège social : [Adresse complète]<br />
                SIRET : [Numéro SIRET]<br />
                RCS : [Ville] [Numéro RCS]<br />
                Téléphone : 07.65.82.26.26<br />
                Email : contact@artisan-francilien.fr
              </p>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold text-[#1B1B1B]">2. Directeur de la publication</h2>
              <p>[Nom du directeur de publication]</p>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold text-[#1B1B1B]">3. Hébergeur</h2>
              <p>
                Le site est hébergé par :<br />
                Vercel Inc.<br />
                340 S Lemon Ave #4133, Walnut, CA 91789, USA
              </p>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold text-[#1B1B1B]">4. Propriété intellectuelle</h2>
              <p>
                L&apos;ensemble des contenus (textes, images, vidéos, logos, graphismes) présents sur le site {SITE_NAME} sont protégés par le droit d&apos;auteur et le droit de la propriété intellectuelle. Toute reproduction, même partielle, est interdite sans autorisation préalable.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold text-[#1B1B1B]">5. Responsabilité</h2>
              <p>
                {SITE_NAME} s&apos;efforce de fournir des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, inexactitudes ou carences dans la mise à jour des informations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold text-[#1B1B1B]">6. Données personnelles</h2>
              <p>
                Pour toute information relative à la collecte et au traitement de vos données personnelles, veuillez consulter notre <a href="/politique-confidentialite" className="text-[#3B6EA6] underline">politique de confidentialité</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
