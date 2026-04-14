# Artisan Francilien

Site vitrine pour **Artisan Francilien** — hub de plomberie, serrurerie et vitrerie en Île-de-France.

## Stack

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **TypeScript 5**
- Polices : Playfair Display + Inter via `next/font/google`
- Chat IA : `@21st-sdk/nextjs` + `@ai-sdk/react`
- Déploiement : **Netlify** (voir `netlify.toml`)

## Structure

```
src/
  app/
    page.tsx               # Page d'accueil
    a-propos/page.tsx      # À propos
    contact/page.tsx       # Formulaire de contact
    nos-realisations/      # Galerie portfolio
    services/[slug]/       # Pages services (plomberie, serrurerie, vitrerie)
    tarifs/                # Grille tarifaire
    zones-intervention/    # Zones couvertes
    api/an-token/          # Route API token pour le chat IA
  components/
    Header.tsx
    Footer.tsx
    AgentChat.tsx          # Widget chat IA (chargé dynamiquement)
  lib/
    seo-config.ts          # Données du site (services, zones, témoignages, SEO)
```

## Développement

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

Pour modifier le contenu du site, éditer `src/lib/seo-config.ts`.
Pour modifier la page d'accueil, éditer `src/app/page.tsx`.

## Déploiement

Le site est déployé sur Netlify via `@netlify/plugin-nextjs`.

```bash
npm run build
```

## Variables d'environnement

```
API_KEY_21ST=      # Clé API pour le chat 21st SDK
```
