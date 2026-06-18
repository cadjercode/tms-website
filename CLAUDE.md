# Client : TMS — Terrassement Multi-Service

> Instructions spécifiques au projet TMS. Voir le CLAUDE.md racine pour les conventions globales.

---

## Informations Client

**Dirigeant :** Vincent Padilla
**Raison sociale :** EURL T.M.S (Terrassement Multi-Service)
**SIRET :** 949891980
**Création EURL :** 2023 (15+ ans d'expérience dans le métier)
**Effectif :** 1 personne
**Adresse :** Lieu-dit Bellevue, 81290 Labruguière
**Zone d'intervention :** Tarn (Labruguière, Castres, Mazamet, Albi) et région Occitanie
**Domaine :** tms81.fr
**Téléphone (unique) :** 06 31 74 23 13 (mobile / WhatsApp)
**Email public (site + annuaires) :** tms81290@gmail.com
**Email perso (réception formulaires) :** vincentpro81110@gmail.com

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

---

## Structure du site

### Site mono-page (`index.html`) + 5 pages SEO spécialité

**One-page** avec navigation par ancres :

1. **Header / Navigation fixe** — Logo TMS + menu ancres + bouton tel
2. **Hero** (`#accueil`) — Photo chantier plein écran, accroche/slogan, CTA devis + CTA appel
3. **À propos** (`#apropos`) — Présentation TMS, chiffres clés, certifications
4. **Services** (`#services`) — 8 services avec icônes/photos, description, CTA devis
5. **Réalisations** (`#realisations`) — Galerie photos (21 photos réelles, catégorisée)
6. **Matériel** (`#materiel`) — Catalogue engins avec photos
7. **Zone d'intervention** (`#zone`) — Carte/visuel des villes
8. **Témoignages** (`#temoignages`) — Avis clients
9. **Contact** (`#contact`) — Formulaire devis, NAP, Google Maps, horaires
10. **Footer** — Mentions légales, NAP, plan du site, copyright
11. **Bouton WhatsApp flottant** — en bas à droite

**Pages SEO spécialité :**
- `terrassement-albi.html`
- `terrassement-castres.html`
- `terrassement-mazamet.html`
- `terrassement-piscine-tarn.html`
- `piste-forestiere-tarn.html`

---

## Workspace

```
clients/tms/
├── CLAUDE.md              # Ce fichier
├── site/                  # Code déployable (rsync → Hostinger)
│   ├── index.html         # Site mono-page complet
│   ├── css/style.css
│   ├── js/main.js         # GSAP ScrollTrigger + Vanilla Tilt
│   ├── images/            # Images optimisées WebP
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── site.webmanifest
│   ├── terrassement-*.html  # Pages SEO spécialité
│   └── piste-forestiere-tarn.html
├── assets/
│   ├── photos/            # 22 photos originales (WhatsApp, chantier)
│   ├── Photos/            # Photos complémentaires
│   ├── site-hostinger/    # Sauvegarde site Hostinger original
│   └── docs/              # Documents client (facture Hostinger)
└── design/                # Brief, questionnaire, maquettes
```

---

## Deploy

- **Hébergement :** Hostinger Business Web Hosting (payé jusqu'au 16 nov. 2027)
- **SSH alias :** `hostinger-tms`
- **Deploy :** `rsync -avz --delete site/ hostinger-tms:domains/tms81.fr/public_html/`
- **GitHub repo :** https://github.com/cadjercode/tms-website (backup/versioning)
- **Workflow :** Branche `dev` → valider → merge `main` → push → rsync

---

## SEO Local — Spécifique TMS

### NAP (strictement identique partout)
```
EURL T.M.S - Terrassement Multi-Service
Lieu-dit Bellevue, 81290 Labruguière
06 31 74 23 13
```

### Mots-clés principaux
- terrassement Tarn / terrassement Labruguière / terrassement Castres
- travaux publics Tarn / entreprise terrassement 81

### Mots-clés secondaires
- aménagement extérieur Tarn / piste forestière Tarn
- démolition Tarn / VRD Labruguière / assainissement Tarn
- terrassement piscine Tarn

### Longue traîne
- "entreprise de terrassement à Labruguière dans le Tarn"
- "création piste forestière Occitanie"
- "terrassement terrain difficile montagne"

### Schema.org — LocalBusiness (toutes les pages)
- `@type` : `ConstructionContractor` (pas LocalBusiness générique)
- Téléphone : `+33631742313`
- Email : `tms81290@gmail.com`
- GéoCoordonnées : 5 décimales minimum
- sameAs : ajouter GBP quand créé

### Format title
`Mot-clé | TMS Terrassement Tarn`

---

## Éléments de confiance (BTP)
- Photos **réelles** de chantiers (PAS de stock photos) — 21 photos disponibles
- Certifications : garantie décennale, RC professionnelle
- "~140 clients satisfaits"
- Zone d'intervention avec carte
- Numéros de téléphone bien visibles
- Forme juridique visible (EURL)

---

## Décisions actées
- **Site mono-page** + pages SEO spécialité (30/03/2026)
- **HTML/CSS/JS vanilla** — pas de framework
- **Bouton WhatsApp** — oui
- **GSAP ScrollTrigger + Vanilla Tilt** — intégrés (pas encore déployés sur Hostinger)
- **Footer compact** — 2 bandes (~80px desktop), validé, pas encore déployé
- **Email public :** tms81290@gmail.com (contact@tms-oc.fr abandonné)
- **Fixe supprimé** — uniquement le mobile 06 31 74 23 13
- **Google Business Profile** — pas encore créé
