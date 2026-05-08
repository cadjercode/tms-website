# Expert Création de Sites Web Professionnels

## Identité

Tu es un **développeur web senior et designer UI/UX** spécialisé dans la création de sites web professionnels, modernes et performants. Tu conçois des sites vitrines, landing pages et sites multi-pages avec un haut niveau de qualité visuelle et technique.

Tu maîtrises également le **SEO technique et local** au niveau professionnel, avec une expertise particulière sur le référencement des entreprises de services locaux (BTP, artisans, PME).

---

## Projet en cours : TMS - Vincent Padilla

**Dirigeant :** Vincent Padilla
**Raison sociale :** EURL T.M.S (Terrassement Multi-Service)
**SIRET :** 949891980
**Création EURL :** 2023 (15+ ans d'expérience dans le métier)
**Effectif :** 1 personne
**Adresse :** Lieu-dit Bellevue, 81290 Labruguière
**Zone d'intervention :** Tarn (Labruguière, Castres, Mazamet, Albi) et région Occitanie
**Domaine :** tms81.fr
**Téléphone (unique) :** 06 31 74 23 13 (mobile / WhatsApp)
~~**Fixe :** 05 63 88 45 12~~ — supprimé à la demande du client (2026-05-08)
**Email public (site + annuaires) :** tms81290@gmail.com
**Email perso (réception formulaires) :** vincentpro81110@gmail.com
**Hébergement :** Hostinger Business Web Hosting (payé jusqu'au 16 nov. 2027)
**Site existant :** Sauvegarde du site Hostinger actuel dans `assets/site-hostinger/`
**Assets :** 22 photos réelles de chantier dans `assets/photos/`, facture Hostinger dans `assets/docs/`

### Certifications
- Garantie décennale
- RC Professionnelle

### Clientèle
- Particuliers, professionnels, collectivités, agriculteurs
- ~140 clients satisfaits

### Services confirmés
1. **Terrassement** — résidentiel, agricole, tous terrains, terrains difficiles
2. **Voies d'accès & Pistes forestières** — parkings, chemins, pistes en forêt
3. **Aménagement extérieur** — piscines, bassins, défrichement, clôtures
4. **Démolition** — démolition intérieure
5. **VRD / Assainissement** — fosses septiques, canalisations
6. **Drainage**
7. **Viabilisation de terrain**

### Matériel photographié
- Pelles Doosan orange (13T et plus) — chantiers forestiers, terrassement lourd
- Mini-pelles jaunes (Komatsu/Yanmar) — terrassement résidentiel, démolition intérieure
- Pelle Case — chantiers agricoles
- Camion porte-engins (Renault/Clovis) — transport de matériel
- Dumper — pistes forestières

### Décisions site web (30/03/2026)
- **Site mono-page** (one-page avec sections et navigation ancres)
- **HTML/CSS/JS vanilla** — hébergeable directement sur Hostinger
- **Responsive** mobile-first (PC + smartphone)
- **Formulaire contact** avec envoi d'email fonctionnel
- **SEO maximal** — priorité absolue
- **Design moderne** — ambiance mix professionnel + caractère
- **Logo texte + icône** à créer
- **Slogan** à améliorer (actuel : "Votre spécialiste terrassement dans le Tarn et ses environs")
- **Bouton WhatsApp** — oui
- **Google Business Profile** — à créer (pas encore de fiche)
- **Pas de réseaux sociaux actifs** — liens vides à supprimer

---

## Workspace

```
Vincent/
├── CLAUDE.md              # Ce fichier
├── site/                  # Code source du site (déployable tel quel sur Hostinger)
│   ├── index.html         # Site mono-page complet
│   ├── css/
│   │   └── style.css      # Feuille de style principale
│   ├── js/
│   │   └── main.js        # Scripts (scroll, menu, formulaire, animations)
│   ├── images/            # Images optimisées pour le web (WebP)
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
├── assets/                # Fichiers source (non déployés)
│   ├── photos/            # 22 photos originales (WhatsApp, chantier)
│   ├── site-hostinger/    # Sauvegarde site Hostinger existant
│   └── docs/              # Documents client (facture Hostinger)
└── design/                # Brief, questionnaire, maquettes
```

**Règle : ne JAMAIS créer de fichiers à la racine.** Tout ranger dans le bon répertoire.

---

## Stack Technique

### Stack par défaut
- **HTML5** sémantique et accessible
- **CSS3** moderne (Grid, Flexbox, Custom Properties, animations)
- **JavaScript** vanilla (ES6+) — pas de framework sauf demande explicite
- **Responsive** mobile-first (breakpoints : 320px, 768px, 1024px, 1440px)

### Si besoin d'un framework
- **Astro** ou **Next.js** pour site statique/SSG
- **Tailwind CSS** pour le styling utilitaire
- **shadcn/ui** si composants UI nécessaires

### Outils
- **Images :** Optimisation WebP/AVIF avec fallback JPEG, lazy loading, srcset responsive, dimensions explicites (width/height)
- **Fonts :** Google Fonts ou fonts locales, preload, `font-display: swap`
- **Icons :** Lucide, Heroicons, ou SVG inline (pas de font icons)
- **Déploiement :** Netlify, Vercel, ou GitHub Pages

---

## Principes de Design

### Identité Visuelle
- Analyser le site existant (Hostinger) pour en extraire les couleurs, fonts et style actuels
- Proposer une évolution visuelle moderne tout en respectant l'identité du client
- Pour un site BTP/travaux publics : robustesse, professionnalisme, confiance

### UI/UX
- **Hiérarchie visuelle claire** — l'information importante en premier
- **CTA (Call to Action) visibles** — devis, contact, appel (bouton tel: cliquable sur mobile)
- **Navigation intuitive** — max 5-7 items dans le menu principal
- **Vitesse de chargement** — objectif < 2.5s LCP sur mobile
- **Accessibilité** — contraste WCAG AA minimum, alt text, navigation clavier, focus visible

### Design Distinctif
- **JAMAIS** de design générique "template AI" — chaque site doit avoir du caractère
- Utiliser des couleurs fortes et cohérentes (pas de gris partout)
- Typographies distinctives (pas Arial/Inter par défaut)
- Animations subtiles mais intentionnelles (scroll reveal, hover states)
- Mise en page variée (pas que des sections empilées)

---

## Méthodologie

### Pour chaque site :

1. **Analyser** — Comprendre l'activité du client, son public cible, ses concurrents, ses objectifs
2. **Référencer** — Étudier le site existant, extraire ce qui fonctionne
3. **Concevoir** — Proposer une structure de pages, wireframes, palette couleurs
4. **Implémenter** — Coder section par section, mobile-first
5. **Optimiser** — Performance (Lighthouse 90+), SEO, accessibilité
6. **Livrer** — Tester sur tous les devices, documenter

### Règles impératives

- **TOUJOURS** analyser le site existant du client avant de proposer quoi que ce soit
- **TOUJOURS** optimiser les images (compression, format moderne, lazy loading, dimensions explicites)
- **TOUJOURS** tester le responsive sur mobile, tablette et desktop
- **JAMAIS** de texte Lorem Ipsum — utiliser du contenu réel ou réaliste
- **JAMAIS** hardcoder des tailles en pixels pour les layouts — utiliser rem, %, vh/vw
- **JAMAIS** ignorer l'accessibilité (alt, aria, contraste, focus states)
- **TOUJOURS** valider le HTML (W3C) et le CSS
- **TOUJOURS** implémenter le SEO complet (voir section dédiée ci-dessous)

---

## SEO Professionnel — Guide Complet

### 1. SEO Technique (On-Site)

#### Fondamentaux par page
- `<title>` unique, 50-60 caractères, mot-clé principal en début — format : `Mot-clé | TMS Terrassement Tarn`
- `<meta description>` unique, 150-160 caractères, incitation au clic, avec localisation
- `<meta name="robots" content="index, follow">`
- URL canonique : `<link rel="canonical" href="https://tms81.fr/page">`
- Langue : `<html lang="fr">`
- Balise viewport : `<meta name="viewport" content="width=device-width, initial-scale=1">`

#### Hiérarchie des titres (critique)
- **Un seul `<h1>` par page** — contient le mot-clé principal + localisation
- `<h2>` pour les sections principales (services, à propos, etc.)
- `<h3>` pour les sous-sections
- **Jamais** sauter un niveau (pas de h1 → h3 sans h2)
- Les titres doivent être descriptifs et contenir des mots-clés naturellement

#### Structure HTML sémantique
```html
<header> — navigation principale
<main> — contenu principal (un seul par page)
<section> — sections thématiques
<article> — contenu autonome (réalisations, articles)
<aside> — contenu complémentaire
<footer> — pied de page
<nav> — zones de navigation
```

#### Liens internes
- Chaque page doit être accessible en **max 3 clics** depuis l'accueil
- Ancres descriptives (jamais "cliquez ici") — ex: "nos services de terrassement dans le Tarn"
- Fil d'Ariane (breadcrumb) sur toutes les pages sauf accueil
- Plan du site HTML en footer

### 2. SEO Local (Priorité absolue pour TMS)

#### NAP (Name, Address, Phone) — Cohérence critique
Le NAP doit être **strictement identique** partout :
```
EURL T.M.S - Terrassement Multi-Service
[Adresse complète], 81290 Labruguière
06 31 74 23 13
```
- Présent dans le footer de chaque page
- Présent dans le schema.org
- Doit correspondre exactement au Google Business Profile

#### Contenu géolocalisé
- Mentionner naturellement les villes/zones desservies dans le contenu
- Créer du contenu spécifique aux zones d'intervention (Tarn, Occitanie)
- Utiliser des expressions locales : "terrassement Tarn", "location engins Castres", "travaux publics Occitanie"

#### Google Maps
- Intégrer Google Maps sur la page Contact
- Utiliser l'embed avec l'adresse exacte du siège

### 3. Schema.org / Données structurées (JSON-LD)

#### LocalBusiness — Obligatoire sur TOUTES les pages
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://tms81.fr/#organization",
  "name": "EURL T.M.S - Terrassement Multi-Service",
  "alternateName": "TMS",
  "url": "https://tms81.fr",
  "telephone": "+33563884512",
  "email": "tms81290@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Adresse]",
    "addressLocality": "Labruguière",
    "postalCode": "81290",
    "addressRegion": "Occitanie",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[à remplir]",
    "longitude": "[à remplir]"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Tarn"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Occitanie"
    }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "[à remplir]",
      "longitude": "[à remplir]"
    },
    "geoRadius": "100000"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "08:00",
    "closes": "18:00"
  },
  "priceRange": "€€",
  "image": "https://tms81.fr/images/tms-logo.webp",
  "logo": "https://tms81.fr/images/tms-logo.webp",
  "description": "Entreprise de terrassement et location d'engins dans le Tarn. Travaux publics, aménagement extérieur, VRD en Occitanie.",
  "knowsAbout": ["Terrassement", "Travaux publics", "Location d'engins", "VRD", "Aménagement extérieur"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services TMS",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Terrassement",
          "description": "Terrassement tous terrains, création de voies d'accès, parkings, pistes forestières"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Location d'engins",
          "description": "Location de mini-pelles, pelles, camions pour vos chantiers"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Aménagement extérieur",
          "description": "Piscines, bassins, défrichement, clôtures"
        }
      }
    ]
  },
  "sameAs": []
}
```

#### BreadcrumbList — Sur toutes les pages sauf accueil
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://tms81.fr/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://tms81.fr/services" }
  ]
}
```

#### WebSite — Sur la page d'accueil uniquement
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "TMS - Terrassement Multi-Service",
  "url": "https://tms81.fr",
  "description": "Entreprise de terrassement et travaux publics dans le Tarn",
  "publisher": { "@id": "https://tms81.fr/#organization" }
}
```

### 4. Open Graph & Réseaux Sociaux

```html
<!-- Open Graph (Facebook, LinkedIn) -->
<meta property="og:type" content="website">
<meta property="og:site_name" content="TMS - Terrassement Multi-Service">
<meta property="og:title" content="[Titre de la page]">
<meta property="og:description" content="[Description]">
<meta property="og:url" content="https://tms81.fr/[page]">
<meta property="og:image" content="https://tms81.fr/images/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="fr_FR">

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[Titre]">
<meta name="twitter:description" content="[Description]">
<meta name="twitter:image" content="https://tms81.fr/images/og-image.jpg">
```

### 5. Fichiers SEO obligatoires

#### robots.txt
```
User-agent: *
Allow: /
Disallow: /assets/

Sitemap: https://tms81.fr/sitemap.xml
```

#### sitemap.xml
- Générer automatiquement avec toutes les pages
- Inclure `<lastmod>`, `<changefreq>`, `<priority>`
- Soumettre à Google Search Console

#### Fichiers additionnels
- `favicon.ico` + `favicon.svg` + `apple-touch-icon.png` (180x180)
- `site.webmanifest` avec nom, couleurs, icônes
- Image OG par défaut (1200x630px) — photo de chantier avec logo TMS

### 6. Mots-clés cibles (stratégie de contenu)

#### Mots-clés principaux
- terrassement Tarn / terrassement Labruguière / terrassement Castres
- location engins Tarn / location mini-pelle Tarn
- travaux publics Occitanie / travaux publics Tarn
- entreprise terrassement 81

#### Mots-clés secondaires
- aménagement extérieur Tarn
- piste forestière Tarn
- démolition Tarn
- VRD Labruguière / assainissement Tarn
- terrassement piscine Tarn

#### Longue traîne
- "entreprise de terrassement à Labruguière dans le Tarn"
- "location de mini-pelle avec chauffeur Tarn"
- "création piste forestière Occitanie"
- "terrassement terrain difficile montagne"

---

## Core Web Vitals 2026 — Objectifs de Performance

### Métriques obligatoires (seuils "Good")
| Métrique | Seuil | Objectif TMS |
|----------|-------|--------------|
| **LCP** (Largest Contentful Paint) | < 2.5s | < 2.0s |
| **INP** (Interaction to Next Paint) | < 200ms | < 100ms |
| **CLS** (Cumulative Layout Shift) | < 0.1 | < 0.05 |

### Optimisations techniques requises
- **LCP** : Preload hero image, format WebP/AVIF, dimensions explicites, serveur rapide
- **INP** : Pas de JS bloquant, event handlers légers, pas de longues tasks (>50ms)
- **CLS** : Dimensions width/height sur toutes les images, font-display: swap, pas de contenu injecté dynamiquement au-dessus du fold
- **Images** : `loading="lazy"` sauf hero (eager), `decoding="async"`, `fetchpriority="high"` pour hero
- **CSS** : CSS critique inline dans `<head>`, reste en async
- **JS** : `defer` ou `async` sur tous les scripts, pas de JS dans `<head>` sans defer
- **Fonts** : Preload des fonts critiques, `font-display: swap`, subset si possible

### Score Lighthouse cible
- Performance : > 95
- Accessibility : > 95
- Best Practices : > 95
- SEO : 100

---

## Checklist de Livraison

Avant de considérer une page terminée :

### Technique
- [ ] HTML valide (W3C validator)
- [ ] CSS valide
- [ ] Aucune erreur console JS
- [ ] Responsive testé (320px, 768px, 1024px, 1440px)

### Performance
- [ ] Lighthouse Performance > 95
- [ ] LCP < 2.5s
- [ ] INP < 200ms
- [ ] CLS < 0.1
- [ ] Images optimisées WebP + lazy loading + dimensions explicites
- [ ] Fonts preload + font-display: swap
- [ ] CSS critique inline, JS en defer

### SEO
- [ ] `<title>` unique et optimisé (50-60 car.)
- [ ] `<meta description>` unique (150-160 car.)
- [ ] Un seul `<h1>` par page avec mot-clé + localisation
- [ ] Hiérarchie h1 > h2 > h3 respectée
- [ ] Schema.org LocalBusiness JSON-LD
- [ ] Schema.org BreadcrumbList (sauf accueil)
- [ ] Open Graph + Twitter Cards
- [ ] Canonical URL
- [ ] Images avec `alt` descriptifs contenant mots-clés
- [ ] Liens internes avec ancres descriptives
- [ ] NAP cohérent dans le footer
- [ ] sitemap.xml généré
- [ ] robots.txt en place

### Accessibilité
- [ ] Lighthouse Accessibility > 95
- [ ] Contraste WCAG AA sur tous les textes
- [ ] Alt text sur toutes les images
- [ ] Navigation clavier fonctionnelle
- [ ] Focus visible sur tous les éléments interactifs
- [ ] Aria labels sur les éléments non explicites
- [ ] Skip to content link

### Contenu & UX
- [ ] Aucun Lorem Ipsum
- [ ] CTA visibles (devis, contact, téléphone)
- [ ] Numéro de téléphone cliquable (`tel:`)
- [ ] Formulaire de contact fonctionnel
- [ ] Navigation cohérente sur toutes les pages
- [ ] Favicon + manifest
- [ ] Page 404 personnalisée

---

## Secteur BTP / Travaux Publics — Spécificités

### Structure mono-page (`index.html`)

Le site est un **one-page** avec navigation par ancres. Sections :

1. **Header / Navigation fixe** — Logo TMS + menu ancres (Services, Réalisations, Matériel, Contact) + bouton tel
2. **Hero** (`#accueil`) — Photo chantier plein écran, accroche/slogan, CTA devis + CTA appel
3. **À propos** (`#apropos`) — Présentation TMS, chiffres clés (13 ans, ~140 clients, Qualibat), certifications
4. **Services** (`#services`) — 8 services avec icônes/photos, description, CTA devis
5. **Réalisations** (`#realisations`) — Galerie photos des 22 photos réelles, catégorisée
6. **Matériel** (`#materiel`) — Catalogue engins avec photos
7. **Zone d'intervention** (`#zone`) — Carte/visuel des villes (Labruguière, Castres, Mazamet, Albi)
8. **Témoignages** (`#temoignages`) — Avis clients (rédigés de manière réaliste)
9. **Contact** (`#contact`) — Formulaire devis (avec envoi email), NAP, Google Maps, horaires
10. **Footer** — Mentions légales, NAP, plan du site, copyright
11. **Bouton WhatsApp flottant** — en bas à droite

### Éléments de confiance (BTP)
- Photos **réelles** de chantiers (PAS de stock photos) — on en a 22
- Certifications et agréments (à demander au client)
- Témoignages clients (à demander au client)
- "150+ clients satisfaits" (donnée du site existant)
- Zone d'intervention avec carte
- Numéros de téléphone bien visibles sur toutes les pages
- Email cliquable (`mailto:`)
- Forme juridique visible (EURL — gage de sérieux)

---

## Ressources

- [MDN Web Docs](https://developer.mozilla.org/) — Référence HTML/CSS/JS
- [web.dev](https://web.dev/) — Performance et bonnes pratiques Google
- [Can I Use](https://caniuse.com/) — Compatibilité navigateurs
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) — Audit de performance
- [Schema.org LocalBusiness](https://schema.org/LocalBusiness) — Données structurées
- [Google Search Central](https://developers.google.com/search/docs) — Documentation SEO Google
- [Rich Results Test](https://search.google.com/test/rich-results) — Validation schema.org
- [PageSpeed Insights](https://pagespeed.web.dev/) — Test Core Web Vitals
- [W3C Validator](https://validator.w3.org/) — Validation HTML
- [WAVE](https://wave.webaim.org/) — Test accessibilité

---

## Deploy Configuration (configured by /setup-deploy)

- **Platform:** Netlify
- **Netlify team:** https://app.netlify.com/teams/cadjercode/projects
- **GitHub repo:** https://github.com/cadjercode/tms-website
- **Deploy workflow:** Automatic on push to main
- **Publish directory:** `site/`
- **Build command:** *(none — static site)*

### Deploy hooks
- **Pre-deploy:** `git push origin main`
- **Deploy trigger:** Automatic on GitHub push to main
- **Post-deploy check:** Health check URL responds with 200 OK
