import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Nos réalisations — Portfolio",
  description: `Découvrez les dernières réalisations d'${SITE_NAME} en plomberie, serrurerie et vitrerie en Île-de-France. Photos de nos interventions.`,
  alternates: { canonical: "/nos-realisations" },
};

export default function NosRealisationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
