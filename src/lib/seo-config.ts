import type { Metadata } from "next";

// ============================================================
// 10 Money Keywords — Artisan Francilien (Île-de-France)
// ============================================================
// 1. "Artisan tous corps d'état Île-de-France"
// 2. "Plombier urgence Paris"
// 3. "Serrurier dépannage 92 Hauts-de-Seine"
// 4. "Vitrier remplacement double vitrage 75"
// 5. "Réparation fuite d'eau Île-de-France"
// 6. "Ouverture de porte claquée Paris"
// 7. "Artisan plombier pas cher 93 Seine-Saint-Denis"
// 8. "Changement vitre cassée urgence 94"
// 9. "Dépannage serrurerie 78 Yvelines"
// 10. "Devis gratuit artisan Île-de-France"

export const SITE_NAME = "Artisan Francilien";
export const SITE_URL = "https://artisan-francilien.fr";
export const SITE_DESCRIPTION =
  "Artisan Francilien — votre hub de confiance pour la plomberie, la serrurerie et la vitrerie en Île-de-France. Intervention rapide, devis gratuit, savoir-faire artisanal haut de gamme.";

export const ZONES_IDF = [
  { code: "75", nom: "Paris" },
  { code: "77", nom: "Seine-et-Marne" },
  { code: "78", nom: "Yvelines" },
  { code: "91", nom: "Essonne" },
  { code: "92", nom: "Hauts-de-Seine" },
  { code: "93", nom: "Seine-Saint-Denis" },
  { code: "94", nom: "Val-de-Marne" },
  { code: "95", nom: "Val-d'Oise" },
] as const;

export const SERVICES = [
  {
    slug: "plomberie",
    title: "Plomberie",
    description:
      "Fuite d'eau, installation sanitaire, chauffe-eau… Nos plombiers interviennent en urgence partout en Île-de-France.",
    longDescription:
      "Notre équipe de plombiers certifiés intervient rapidement pour tous vos besoins : réparation de fuites, débouchage de canalisations, installation de sanitaires, remplacement de chauffe-eau, mise aux normes de plomberie. Chaque intervention est réalisée avec des matériaux de qualité professionnelle et garantie.",
    icon: "💧",
    href: "https://plombiersidf.fr/",
    externalHref: "https://plombiersidf.fr/",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=75",
    heroImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1600&q=75",
    keywords: ["plombier", "fuite d'eau", "dépannage plomberie", "plombier urgence Paris"],
    prestations: [
      "Réparation de fuites d'eau",
      "Débouchage de canalisations",
      "Installation de sanitaires",
      "Remplacement chauffe-eau / cumulus",
      "Mise aux normes plomberie",
      "Détection de fuites",
      "Installation robinetterie",
      "Rénovation salle de bain",
    ],
    tarifs: "À partir de 59€ TTC",
  },
  {
    slug: "serrurerie",
    title: "Serrurerie",
    description:
      "Ouverture de porte, changement de serrure, blindage… Nos serruriers sont disponibles 24h/24, 7j/7.",
    longDescription:
      "Nos serruriers qualifiés interviennent en urgence 24h/24 et 7j/7 pour toutes vos problématiques : porte claquée, serrure bloquée, effraction, installation de serrure haute sécurité, blindage de porte. Nous travaillons avec les meilleures marques (Fichet, Vachette, Bricard) pour garantir votre sécurité.",
    icon: "🔑",
    href: "https://urgenceserrures.fr/",
    externalHref: "https://urgenceserrures.fr/",
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800&q=75",
    heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=75",
    keywords: ["serrurier", "ouverture de porte", "dépannage serrurerie", "serrurier 92"],
    prestations: [
      "Ouverture de porte claquée / bloquée",
      "Changement de serrure",
      "Blindage de porte",
      "Installation serrure haute sécurité",
      "Reproduction de clés",
      "Réparation après effraction",
      "Installation de verrous",
      "Coffre-fort : ouverture et installation",
    ],
    tarifs: "À partir de 69€ TTC",
  },
  {
    slug: "vitrerie",
    title: "Vitrerie",
    description:
      "Remplacement de vitre, double vitrage, vitrine commerciale… Intervention rapide et soignée.",
    longDescription:
      "Nos vitriers experts assurent le remplacement de tout type de vitrage : simple, double, feuilleté, trempé. Que ce soit pour une vitre cassée en urgence, l'installation de double vitrage pour l'isolation, ou la pose de vitrines commerciales, nous garantissons un travail soigné et durable.",
    icon: "🪟",
    href: "https://vitriersparis.fr/",
    externalHref: "https://vitriersparis.fr/",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=75",
    heroImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&q=75",
    keywords: ["vitrier", "remplacement vitre", "double vitrage", "vitrier urgence 94"],
    prestations: [
      "Remplacement vitre cassée (urgence)",
      "Installation double vitrage",
      "Pose de vitrage feuilleté / trempé",
      "Vitrine commerciale",
      "Miroir sur mesure",
      "Crédence en verre",
      "Pare-douche / paroi de douche",
      "Survitrage et isolation",
    ],
    tarifs: "À partir de 79€ TTC",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Marie D.",
    location: "Paris 16e",
    rating: 5,
    text: "Intervention rapide pour une fuite en pleine nuit. Le plombier était professionnel, propre et efficace. Tarif conforme au devis. Je recommande !",
    service: "Plomberie",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=75",
  },
  {
    name: "Thomas L.",
    location: "Boulogne-Billancourt (92)",
    rating: 5,
    text: "Porte claquée un dimanche soir, intervention en 20 minutes. Serrurier très compétent, aucun dégât sur la porte. Prix honnête.",
    service: "Serrurerie",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=75",
  },
  {
    name: "Sophie M.",
    location: "Vincennes (94)",
    rating: 5,
    text: "Remplacement de double vitrage impeccable. Le vitrier a pris le temps de bien conseiller et le résultat est parfait. Isolation nettement améliorée.",
    service: "Vitrerie",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=75",
  },
  {
    name: "Jean-Pierre R.",
    location: "Versailles (78)",
    rating: 5,
    text: "Excellente prestation pour la rénovation complète de ma salle de bain. Équipe ponctuelle, travail soigné, et chantier toujours propre.",
    service: "Plomberie",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=75",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Quels sont vos délais d'intervention ?",
    answer:
      "Nous intervenons en moyenne sous 30 minutes dans Paris et la petite couronne, et sous 1 heure dans toute l'Île-de-France. Pour les urgences (fuite d'eau, porte claquée, vitre cassée), nous sommes disponibles 24h/24 et 7j/7.",
  },
  {
    question: "Le devis est-il vraiment gratuit ?",
    answer:
      "Oui, le devis est 100% gratuit et sans engagement. Notre technicien se déplace, évalue la situation et vous remet un devis détaillé avant toute intervention. Vous êtes libre d'accepter ou de refuser.",
  },
  {
    question: "Quels modes de paiement acceptez-vous ?",
    answer:
      "Nous acceptons les paiements par carte bancaire, espèces, chèque et virement bancaire. Le paiement en plusieurs fois est possible pour les interventions supérieures à 300€.",
  },
  {
    question: "Vos artisans sont-ils assurés et certifiés ?",
    answer:
      "Tous nos artisans sont certifiés, assurés en responsabilité civile professionnelle et décennale. Chaque intervention est garantie et nous vous remettons systématiquement une facture détaillée.",
  },
  {
    question: "Intervenez-vous le week-end et les jours fériés ?",
    answer:
      "Oui, nous intervenons 7j/7, y compris les week-ends et jours fériés. Un supplément peut s'appliquer pour les interventions en dehors des heures ouvrées (nuit, dimanche, jours fériés).",
  },
  {
    question: "Dans quelles zones intervenez-vous ?",
    answer:
      "Nous couvrons l'ensemble de l'Île-de-France : Paris (75), Seine-et-Marne (77), Yvelines (78), Essonne (91), Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94) et Val-d'Oise (95).",
  },
] as const;

export const TEAM_MEMBERS = [
  {
    name: "Marc Dubois",
    role: "Fondateur & Maître Plombier",
    bio: "Plus de 20 ans d'expérience en plomberie. Certifié RGE et spécialiste des installations complexes.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=75",
  },
  {
    name: "Karim Benali",
    role: "Chef d'équipe Serrurerie",
    bio: "Expert en serrurerie haute sécurité. Formé aux techniques d'ouverture fine et au blindage de portes.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=75",
  },
  {
    name: "Lucas Martin",
    role: "Maître Vitrier",
    bio: "Spécialiste du double vitrage et des vitrines commerciales. 15 ans de métier en Île-de-France.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=75",
  },
  {
    name: "Sophie Laurent",
    role: "Responsable Clientèle",
    bio: "Votre interlocutrice dédiée. Gère les devis, la planification et le suivi de vos interventions.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=75",
  },
] as const;

export const COMPANY_VALUES = [
  {
    title: "Réactivité",
    description: "Intervention en moins de 30 minutes dans Paris et la petite couronne. Disponibles 24h/24, 7j/7.",
    icon: "clock",
  },
  {
    title: "Transparence",
    description: "Devis gratuit et détaillé avant chaque intervention. Aucun frais caché, tarifs affichés clairement.",
    icon: "eye",
  },
  {
    title: "Qualité",
    description: "Artisans certifiés utilisant des matériaux professionnels. Chaque intervention est garantie.",
    icon: "shield",
  },
  {
    title: "Proximité",
    description: "Une équipe locale, ancrée en Île-de-France. Nous connaissons votre quartier et vos besoins.",
    icon: "map-pin",
  },
] as const;

export const GALLERY_ITEMS = [
  {
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=75",
    title: "Rénovation salle de bain complète",
    category: "Plomberie",
    location: "Paris 16e",
  },
  {
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=75",
    title: "Installation douche à l'italienne",
    category: "Plomberie",
    location: "Boulogne-Billancourt (92)",
  },
  {
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=75",
    title: "Blindage porte d'entrée",
    category: "Serrurerie",
    location: "Neuilly-sur-Seine (92)",
  },
  {
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800&q=75",
    title: "Installation serrure haute sécurité",
    category: "Serrurerie",
    location: "Saint-Denis (93)",
  },
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=75",
    title: "Pose double vitrage bureau",
    category: "Vitrerie",
    location: "La Défense (92)",
  },
  {
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=75",
    title: "Vitrine commerciale sur mesure",
    category: "Vitrerie",
    location: "Paris 11e",
  },
  {
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=75",
    title: "Remplacement chauffe-eau",
    category: "Plomberie",
    location: "Vincennes (94)",
  },
  {
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=75",
    title: "Ouverture porte blindée",
    category: "Serrurerie",
    location: "Versailles (78)",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=75",
    title: "Remplacement baie vitrée",
    category: "Vitrerie",
    location: "Créteil (94)",
  },
] as const;

export const TARIFS_DATA = [
  {
    service: "Plomberie",
    icon: "💧",
    slug: "plomberie",
    prestations: [
      { nom: "Réparation fuite simple", prix: "59€", detail: "Robinet, joint, raccord" },
      { nom: "Débouchage canalisation", prix: "89€", detail: "Évier, douche, WC" },
      { nom: "Remplacement robinetterie", prix: "79€", detail: "Fourniture en sus" },
      { nom: "Installation WC / lavabo", prix: "149€", detail: "Pose complète" },
      { nom: "Remplacement chauffe-eau", prix: "199€", detail: "Hors fourniture" },
      { nom: "Détection de fuite", prix: "99€", detail: "Avec caméra thermique" },
      { nom: "Rénovation salle de bain", prix: "Sur devis", detail: "Étude personnalisée" },
    ],
  },
  {
    service: "Serrurerie",
    icon: "🔑",
    slug: "serrurerie",
    prestations: [
      { nom: "Ouverture porte claquée", prix: "69€", detail: "Sans dégât" },
      { nom: "Ouverture porte blindée", prix: "119€", detail: "Technique fine" },
      { nom: "Changement serrure standard", prix: "89€", detail: "Cylindre inclus" },
      { nom: "Changement serrure 3 points", prix: "159€", detail: "Serrure haute sécurité" },
      { nom: "Blindage de porte", prix: "490€", detail: "Porte standard" },
      { nom: "Reproduction de clés", prix: "15€", detail: "Clé standard" },
      { nom: "Réparation après effraction", prix: "Sur devis", detail: "Évaluation sur place" },
    ],
  },
  {
    service: "Vitrerie",
    icon: "🪟",
    slug: "vitrerie",
    prestations: [
      { nom: "Remplacement simple vitrage", prix: "79€", detail: "Dimensions standard" },
      { nom: "Remplacement double vitrage", prix: "149€", detail: "4/16/4 standard" },
      { nom: "Vitrage feuilleté sécurité", prix: "189€", detail: "44.2 standard" },
      { nom: "Miroir sur mesure", prix: "99€", detail: "Par m²" },
      { nom: "Crédence en verre", prix: "129€", detail: "Par m²" },
      { nom: "Vitrine commerciale", prix: "Sur devis", detail: "Selon dimensions" },
      { nom: "Pare-douche / paroi", prix: "249€", detail: "Pose incluse" },
    ],
  },
] as const;

export function generateSiteMetadata(): Metadata {
  return {
    title: {
      default: `${SITE_NAME} | Plomberie, Serrurerie & Vitrerie en Île-de-France`,
      template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    keywords: [
      "artisan Île-de-France",
      "plombier Paris",
      "serrurier Île-de-France",
      "vitrier Île-de-France",
      "dépannage urgence",
      "artisan tous corps d'état",
      "devis gratuit artisan",
      "réparation fuite d'eau",
      "ouverture de porte",
      "remplacement vitre",
    ],
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: SITE_NAME,
      title: `${SITE_NAME} — Artisans de confiance en Île-de-France`,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — Plomberie, Serrurerie, Vitrerie`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${SITE_NAME} — Artisans de confiance en Île-de-France`,
      description: SITE_DESCRIPTION,
      images: ["/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export function generateLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    telephone: "+33-7-65-82-26-26",
    email: "contact@artisan-francilien.fr",
    image: `${SITE_URL}/og-image.jpg`,
    priceRange: "$$",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    areaServed: ZONES_IDF.map((z) => ({
      "@type": "AdministrativeArea",
      name: `${z.nom} (${z.code})`,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressRegion: "Île-de-France",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.8566,
      longitude: 2.3522,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday", "Tuesday", "Wednesday", "Thursday",
          "Friday", "Saturday", "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services Artisan Francilien",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
        },
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "247",
    },
  };
}

export function generateServiceJsonLd(service: (typeof SERVICES)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.title} — ${SITE_NAME}`,
    description: service.longDescription,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: ZONES_IDF.map((z) => ({
      "@type": "AdministrativeArea",
      name: `${z.nom} (${z.code})`,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Prestations ${service.title}`,
      itemListElement: service.prestations.map((p) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: p },
      })),
    },
  };
}

export function generateFAQJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
