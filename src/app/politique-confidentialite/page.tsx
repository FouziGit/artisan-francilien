import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/seo-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Politique de confidentialité et protection des données personnelles du site ${SITE_NAME}.`,
  robots: { index: false, follow: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Header />
      <main className="bg-[#FDFBF7] py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1B1B1B] mb-8">Politique de confidentialité</h1>

          <div className="prose prose-sm max-w-none text-[#4A4A4A] space-y-6">
            <section>
              <h2 className="text-xl font-serif font-bold text-[#1B1B1B]">1. Collecte des données</h2>
              <p>
                Dans le cadre de l&apos;utilisation du site {SITE_NAME}, nous sommes amenés à collecter les données personnelles suivantes :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Adresse postale (département)</li>
                <li>Description du besoin / message</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold text-[#1B1B1B]">2. Utilisation des données</h2>
              <p>
                Les données collectées sont utilisées exclusivement pour :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Répondre à vos demandes de devis et d&apos;information</li>
                <li>Assurer le suivi de votre dossier d&apos;intervention</li>
                <li>Vous recontacter dans le cadre de votre demande</li>
                <li>Améliorer nos services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold text-[#1B1B1B]">3. Conservation des données</h2>
              <p>
                Vos données personnelles sont conservées pour une durée maximale de 3 ans à compter de votre dernière interaction avec {SITE_NAME}, conformément à la réglementation en vigueur.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold text-[#1B1B1B]">4. Vos droits (RGPD)</h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Droit d&apos;accès à vos données personnelles</li>
                <li>Droit de rectification</li>
                <li>Droit à l&apos;effacement</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité des données</li>
                <li>Droit d&apos;opposition</li>
              </ul>
              <p>
                Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@artisan-francilien.fr" className="text-[#B8860B] underline">contact@artisan-francilien.fr</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold text-[#1B1B1B]">5. Cookies</h2>
              <p>
                Le site {SITE_NAME} utilise des cookies strictement nécessaires au fonctionnement du site. Aucun cookie publicitaire ou de tracking n&apos;est utilisé sans votre consentement explicite.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-serif font-bold text-[#1B1B1B]">6. Contact</h2>
              <p>
                Pour toute question relative à cette politique de confidentialité, vous pouvez nous contacter :<br />
                Email : <a href="mailto:contact@artisan-francilien.fr" className="text-[#B8860B] underline">contact@artisan-francilien.fr</a><br />
                Téléphone : 01 00 00 00 00
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
