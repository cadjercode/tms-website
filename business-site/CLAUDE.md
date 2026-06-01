# Business Site — Création de sites pour artisans

## Concept

Création de sites monopages/vitrines pour petits artisans et commerçants, avec abonnement mensuel incluant automatisation n8n (collecte d'avis, reporting, suivi prospects). Positionnement entre SiteArtisan (29€/mois, basique) et Simplebo (60-240€ HT/mois, premium).

## Cible

Petits artisans : plombiers, électriciens, terrassiers, paysagistes, maçons, couvreurs, etc. Profil : pas le temps ni l'envie de gérer un site, budget limité, besoin de clients locaux.

## Référence existante

- **TMS 80** (terrassement) : premier client, SEO local réalisé (inscriptions annuaires, guide 19 plateformes)

---

## Offres de création

### STARTER — 390 €
*"Ton site pro en ligne cette semaine"*
- Site monopage responsive mobile-first
- Design adapté au métier (template pro)
- Bouton appel direct + formulaire contact
- Carte Google Maps + zone d'intervention
- Mentions légales auto-générées
- Hébergement + domaine .fr inclus 1 an
- Mise en ligne sous 5 jours

### PRO — 690 €
*"Ta vitrine + ta fiche Google qui bossent ensemble"*
- Tout le Starter
- Création/optimisation fiche Google Business Profile
- 5-10 photos optimisées (retouchées)
- Inscription sur 5 annuaires clés (PagesJaunes, Alentoor, etc.)
- Page "Réalisations" avec galerie avant/après
- Notification automatique sur téléphone à chaque demande de contact (n8n)

### FULL IMPACT — 990 €
*"On installe ta machine à clients"*
- Tout le Pro
- Système de collecte d'avis automatisé (SMS/email post-chantier via n8n)
- Landing pages dédiées par spécialité (ex: "terrassement à Montauban")
- Intégration agenda en ligne (Calendly / Cal.com)
- Rapport mensuel automatique (visites, appels, demandes de devis) via n8n

---

## Abonnements mensuels

### PILOTE AUTO — 39 €/mois
*"Ton site tourne, tu n'y penses plus"*
- Hébergement + domaine + SSL
- Mises à jour techniques
- Modifications mineures illimitées (textes, photos)
- Monitoring uptime 24/7
- Alerte instantanée si le site tombe (n8n → Telegram/SMS)
- Support par message direct

### TURBO LOCAL — 69 €/mois
*"Google travaille pour toi pendant que tu es sur le chantier"*
- Tout Pilote Auto
- 1 publication Google Business par semaine (artisan envoie photo → n8n + IA génère le post)
- Réponse automatique aux avis Google (drafts IA, validation manuelle)
- Relance avis automatisée après chaque chantier (SMS/email via n8n)
- Rapport mensuel email avec estimation ROI

### MACHINE À LEADS — 99 €/mois
*"Chaque contact devient un devis potentiel"*
- Tout Turbo Local
- Tableau de suivi prospects (Airtable) : chaque contact tracké avec statut
- Rappel automatique des prospects dormants (n8n alerte l'artisan à J+3, J+7)
- Estimation ROI mensuelle dans le rapport

**Upgrade futur (149 €/mois) :** SMS automatique aux appels manqués via Twilio/VoIP — à développer quand le système sera maîtrisé.

---

## Concurrence analysée

### SiteArtisan.fr — 29 €/mois, 0 € création
- Entreprise individuelle (Rodolphe Calvary, Nantes)
- Template one-page standardisé, artisan ne peut rien modifier seul
- SEO local 3 communes inclus
- Modifications gratuites sous 72h
- Aucun avis client trouvable, zéro preuve sociale
- Site disparaît à la résiliation

### Simplebo.fr — 60-240 € HT/mois + 400-1800 € HT création
- SAS Paris, +10 000 clients, 4.9/5 Google (1571 avis)
- Design personnalisé (4 maquettes proposées), 10-20 pages
- CMS simplifié (artisan peut modifier)
- Techno propriétaire = lock-in total, site non transférable
- Partenaires : CAPEB, Crédit Agricole, MAIF
- Résiliation officiellement libre mais signalée comme complexe

### Autres
- **Le Site Français** : 49-129 € HT/mois, engagement 48 mois (piège)
- **Wix/Jimdo** : 10-30 €/mois DIY, pas de service humain
- **GoHighLevel** : 297 $/mois (agence), inclut CRM/SMS/funnel — c'est le haut de gamme

## Avantages compétitifs

1. **Automatisation n8n** : collecte d'avis, reporting, notifications — invisible pour l'artisan, ça "marche tout seul"
2. **Proximité** : interlocuteur unique et direct vs plateforme anonyme
3. **Pas de lock-in** : possibilité de livrer le site à l'artisan s'il arrête
4. **Prix agressif** : entre le low-cost (SiteArtisan) et le premium (Simplebo)
5. **ROI démontrable** : 1 client trouvé via Google = abonnement payé pour des mois

## Argument commercial clé

> Pour un plombier qui facture 800 € un chantier : l'abonnement à 69 €/mois, c'est un seul client trouvé via Google = 11 mois payés.

---

## Stack technique

- **Sites** : templates par métier (HTML statique ou WordPress léger)
- **Automatisation** : n8n (VPS n8n.jeremn8n.tech)
- **CRM prospects** : Airtable
- **Collecte avis** : n8n → SMS/email → lien Google Review
- **Reporting** : n8n cron mensuel → email formaté
- **Monitoring** : n8n → alerte Telegram/SMS
- **Publications Google** : n8n + IA (photo artisan → post optimisé)

## Workflows n8n à développer

1. [ ] Notification nouveau contact (webhook formulaire → Telegram/SMS artisan)
2. [ ] Collecte d'avis post-chantier (trigger → SMS/email client → lien Google Review)
3. [ ] Publication Google Business hebdo (photo → IA génère texte → post GMB)
4. [ ] Rapport mensuel automatique (cron → compile stats → email artisan)
5. [ ] Suivi prospects Airtable (webhook → création ligne → alertes relance J+3/J+7)
6. [ ] Monitoring uptime (cron → check HTTP → alerte si down)
7. [ ] (Futur) SMS appels manqués via Twilio

## Économie cible

- Coût production site avec template : 1-3h
- À 100 clients sur Turbo Local (69€) : ~6 900 €/mois MRR
- Marge brute estimée : 70-85%
