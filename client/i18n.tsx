import React, { createContext, useContext, useMemo, useState } from "react";

export type Locale = "fr" | "en";

type Dict = Record<string, string>;

const translations: Record<Locale, Dict> = {
  fr: {
    // Meta
    "meta.title": "agricult — Plateforme agricole intelligente",
    "meta.description":
      "agricult aide les agriculteurs à gérer cultures, bétail, finances et équipes avec des outils intelligents.",
    "meta.home.title": "agricult — Plateforme agricole intelligente",
    "meta.home.description":
      "Gérez cultures, bétail, finances et équipes avec agricult. Optimisez vos rendements avec des outils intelligents.",
    "meta.about.title": "À propos — agricult",
    "meta.about.description":
      "Découvrez la mission, l’équipe et les valeurs d’agricult, la plateforme agricole intelligente.",
    "meta.download.title": "Téléchargement — agricult",
    "meta.download.description":
      "Téléchargez agricult sur iOS, Android, Windows et Linux. Guide d’installation et prérequis.",
    "meta.contact.title": "Contact — agricult",
    "meta.contact.description":
      "Contactez l’équipe agricult pour toute question, démo ou support.",
    "meta.notfound.title": "Page introuvable — agricult",
    "meta.notfound.description": "La page demandée est introuvable.",
    // Header
    "nav.home": "Accueil",
    "nav.features": "Caractéristiques",
    "nav.benefits": "Avantages",
    "nav.about": "À propos",
    "nav.contact": "Contact",
    "nav.download": "Télécharger",
    "lang.label": "Langue",
    "lang.fr": "FR",
    "lang.en": "EN",
    // Index - Hero
    "index.badge": "La plateforme agricole de nouvelle génération",
    "index.title": "Transformez votre exploitation agricole en un empire numérique",
    "index.subtitle":
      "agricult est la plateforme tout-en-un pour gérer vos cultures, votre bétail, vos finances et vos équipes. Optimisez vos rendements et augmentez vos profits avec l'intelligence artificielle.",
    "index.cta.primary": "Télécharger maintenant",
    "index.cta.secondary": "Voir la démo",
    "index.availability": "Disponible sur iOS, Android, Windows et Linux.",
    "index.hero.caption": "Visualisation du tableau de bord agricult",
    // Index - Features
    "index.features.title": "Tout ce dont vous avez besoin",
    "index.features.subtitle": "Une solution intégrée pour chaque aspect de votre exploitation",
    "index.features.crop.title": "Gestion des cultures",
    "index.features.crop.desc":
      "Suivez vos semis, vos récoltes et vos rendements en temps réel. Obtenez des alertes intelligentes pour optimiser votre production.",
    "index.features.analytics.title": "Analyses avancées",
    "index.features.analytics.desc":
      "Visualisez vos données avec des tableaux de bord intuitifs. Prenez des décisions basées sur des données réelles et des prédictions IA.",
    "index.features.team.title": "Collaboration d'équipe",
    "index.features.team.desc":
      "Gérez vos employés et vos tâches. Coordonnez facilement les opérations sur toute votre exploitation.",
    "index.features.automation.title": "Automatisation",
    "index.features.automation.desc":
      "Automatisez les tâches répétitives. Gagnez du temps et réduisez les erreurs humaines.",
    "index.features.security.title": "Sécurité des données",
    "index.features.security.desc": "Vos données sont chiffrées et sécurisées. Accédez-y de partout, en toute sécurité.",
    "index.features.finance.title": "Gestion financière",
    "index.features.finance.desc":
      "Suivez vos revenus, vos dépenses et vos marges. Planifiez votre budget pour l'année.",
    // Index - Benefits
    "index.benefits.title": "Pourquoi choisir agricult?",
    "index.benefits.yield.title": "Augmentez vos rendements",
    "index.benefits.yield.desc":
      "Nos algorithmes d'IA analysent vos données pour vous donner les meilleures recommandations pour optimiser vos cultures.",
    "index.benefits.costs.title": "Réduisez vos coûts",
    "index.benefits.costs.desc":
      "Économisez sur l'eau, les engrais et l'énergie en utilisant nos outils de gestion des ressources.",
    "index.benefits.team.title": "Gérez facilement votre équipe",
    "index.benefits.team.desc":
      "Coordonnez vos employés, suivez les tâches et améliorez la productivité globale.",
    "index.benefits.risk.title": "Protégez votre investissement",
    "index.benefits.risk.desc":
      "Obtenez des alertes précoces sur les maladies des cultures et les risques de bétail.",
    "index.stats.yield": "Augmentation des rendements moyenne",
    "index.stats.costs": "Réduction des coûts d'exploitation",
    "index.stats.time": "Économisées par semaine par exploitation",
    // Index - CTA
    "index.cta.title": "Prêt à transformer votre exploitation?",
    "index.cta.subtitle": "Rejoignez les agriculteurs qui optimisent déjà leur production avec agricult.",
    "index.cta.help": "Des questions?",
    "index.cta.contact": "Nous contacter",
    // Index - Download
    "index.download.title": "Téléchargez agricult",
    "index.download.subtitle": "L'application est disponible sur toutes les principales plateformes",
    "index.download.help": "Besoin d'aide?",
    "index.download.guide": "Consultez notre guide d'installation",
    // Footer (shared-ish)
    "footer.tagline": "La plateforme complète pour les agriculteurs modernes.",
    "footer.product": "Produit",
    "footer.company": "Entreprise",
    "footer.support": "Support",
    "footer.legal": "Légal",
    "footer.follow": "Suivez-nous",
    "footer.pricing": "Tarification",
    "footer.security": "Sécurité",
    "footer.blog": "Blog",
    "footer.careers": "Carrières",
    "footer.help": "Aide",
    "footer.docs": "Documentation",
    "footer.contact": "Nous contacter",
    "footer.privacy": "Confidentialité",
    "footer.terms": "Conditions",
    "footer.cookies": "Cookies",
    // About page
    "about.hero.title": "Notre Mission",
    "about.hero.subtitle":
      "Transformez l'agriculture avec la technologie. Nous croyons que chaque agriculteur mérite les meilleurs outils pour réussir.",
    "about.hero.cta": "Contactez-nous",
    "about.hero.back": "Revenir à l'accueil",
    "about.story.title": "Notre Histoire",
    "about.story.p1":
      "agricult a été créée en 2021 par une équipe d'agriculteurs et d'ingénieurs passionnés par la modernisation du secteur agricole. Nous avons constaté que les agriculteurs manquaient d'outils intégrés et accessibles pour gérer efficacement leurs exploitations.",
    "about.story.p2":
      "Aujourd'hui, agricult aide des milliers d'agriculteurs dans plus de 30 pays à optimiser leurs rendements, réduire leurs coûts et prendre de meilleures décisions basées sur les données.",
    "about.story.card": "Depuis 2021, nous révolutionnons l'agriculture",
    "about.values.title": "Nos Valeurs",
    "about.values.innovation": "Innovation",
    "about.values.innovation.desc":
      "Nous repoussons les limites de la technologie agricole pour créer des solutions avant-gardistes.",
    "about.values.community": "Communauté",
    "about.values.community.desc": "Nous travaillons aux côtés de nos agriculteurs pour comprendre et résoudre leurs défis réels.",
    "about.values.sustainability": "Durabilité",
    "about.values.sustainability.desc": "Notre mission est de rendre l'agriculture plus durable et respectueuse de l'environnement.",
    "about.values.excellence": "Excellence",
    "about.values.excellence.desc": "Nous nous engageons à fournir des produits de la plus haute qualité et un service impeccable.",
    "about.team.title": "Notre Équipe",
    "about.team.ceo.role": "Fondateur & PDG",
    "about.team.ceo.desc": "Expert en agriculture avec 15 ans d'expérience dans la gestion de grandes exploitations.",
    "about.team.cto.role": "Directrice Technique",
    "about.team.cto.desc": "Ingénieure en informatique spécialisée dans l'IA et les solutions agricoles innovantes.",
    "about.team.sales.role": "Directeur Commercial",
    "about.team.sales.desc": "Responsable de la croissance commerciale et des partenariats stratégiques.",
    "about.team.product.role": "Directrice Produit",
    "about.team.product.desc": "Passionnée par l'amélioration des processus agricoles grâce à la technologie.",
    "about.stats.active": "Agriculteurs actifs",
    "about.stats.countries": "Pays desservis",
    "about.stats.yield": "Augmentation moyenne des rendements",
    "about.cta.title": "Rejoignez la Révolution Agricole",
    "about.cta.subtitle":
      "Devenez l'un des milliers d'agriculteurs qui font confiance à agricult pour transformer leurs exploitations.",
    "about.cta.start": "Démarrer maintenant",
    "about.cta.contact": "Nous contacter",
    // Download page
    "download.hero.title": "Téléchargez agricult",
    "download.hero.subtitle":
      "L'application est disponible sur toutes les principales plateformes. Choisissez celle qui convient à votre appareil et commencez à transformer votre exploitation.",
    "download.hero.back": "Retour à l'accueil",
    "download.platforms.title": "Choisissez votre plateforme",
    "download.platforms.subtitle":
      "Sélectionnez votre système d'exploitation pour accéder aux instructions de téléchargement et d'installation",
    "download.platforms.version": "Version:",
    "download.platforms.size": "Taille:",
    "download.platforms.requirements": "Configuration requise:",
    "download.platforms.ios.desc": "iPhone & iPad",
    "download.platforms.ios.req": "iOS 14.0 ou supérieur",
    "download.platforms.android.desc": "Téléphones & tablettes",
    "download.platforms.android.req": "Android 8.0 ou supérieur",
    "download.platforms.windows.desc": "Ordinateurs de bureau",
    "download.platforms.windows.req": "Windows 10/11 64-bit",
    "download.platforms.linux.desc": "Serveurs & bureaux",
    "download.platforms.linux.req": "Ubuntu 20.04 LTS ou équivalent",
    "download.platforms.linux.store": "Téléchargement direct",
    "download.platforms.features.full": "Accès complet à la plateforme",
    "download.platforms.features.notifications": "Notifications en temps réel",
    "download.platforms.features.offline": "Mode hors ligne",
    "download.platforms.features.sync": "Synchronisation automatique",
    "download.platforms.features.desktop": "Interface desktop optimisée",
    "download.platforms.features.system": "Notifications système",
    "download.platforms.features.files": "Gestion complète des fichiers",
    "download.platforms.features.cli": "Installation en ligne de commande",
    "download.platforms.features.backend": "Serveur backend inclus",
    "download.platforms.features.config": "Configuration flexible",
    "download.platforms.features.deps": "Support complet des dépendances",
    "download.requirements.title": "Configuration requise",
    "download.requirements.subtitle": "Assurez-vous que votre appareil répond à ces exigences minimales",
    "download.requirements.internet.title": "Connexion Internet",
    "download.requirements.internet.desc": "Une connexion Internet stable pour la synchronisation en temps réel",
    "download.requirements.storage.title": "Espace de stockage",
    "download.requirements.storage.desc": "Au minimum 200 MB d'espace libre pour l'installation",
    "download.requirements.cpu.title": "Processeur",
    "download.requirements.cpu.desc": "Processeur moderne (moins de 5 ans) recommandé pour une performance optimale",
    "download.requirements.ram.title": "RAM",
    "download.requirements.ram.desc": "Minimum 2 GB de RAM, 4 GB recommandé",
    "download.install.title": "Guide d'installation",
    "download.install.subtitle": "Suivez ces étapes simples pour installer agricult sur votre appareil",
    "download.install.steps.1.title": "Télécharger l'application",
    "download.install.steps.1.desc":
      "Cliquez sur le lien de téléchargement pour votre plateforme ci-dessus et suivez le processus de téléchargement.",
    "download.install.steps.2.title": "Installer l'application",
    "download.install.steps.2.desc":
      "Une fois le téléchargement terminé, lancez le programme d'installation et suivez les instructions à l'écran.",
    "download.install.steps.3.title": "Créer un compte",
    "download.install.steps.3.desc":
      "Ouvrez l'application et inscrivez-vous avec votre email ou connectez-vous avec votre compte existant.",
    "download.install.steps.4.title": "Commencer à utiliser",
    "download.install.steps.4.desc":
      "Configurez votre exploitation et commencez à gérer vos cultures et votre bétail avec agricult.",
    "download.support.title": "Besoin d'aide?",
    "download.support.subtitle": "Notre équipe de support est prête à vous aider avec l'installation et la configuration.",
    "download.support.contact": "Contactez le support",
    "download.support.faq": "Consultez la FAQ",
    // Contact page
    "contact.hero.title": "Contactez-nous",
    "contact.hero.subtitle":
      "Vous avez des questions sur agricult? Notre équipe est prête à vous aider. Contactez-nous et nous vous répondrons dans les 24 heures.",
    "contact.info.email": "Email",
    "contact.info.email.desc": "Notre équipe vous répond par email",
    "contact.info.phone": "Téléphone",
    "contact.info.phone.desc": "Appelez-nous pendant les heures de bureau",
    "contact.info.address": "Adresse",
    "contact.form.title": "Envoyez-nous un message",
    "contact.form.sent": "Message envoyé!",
    "contact.form.sent.desc": "Merci de nous avoir contacté. Nous vous répondrons bientôt.",
    "contact.form.name": "Nom complet *",
    "contact.form.name.placeholder": "Votre nom",
    "contact.form.email": "Email *",
    "contact.form.email.placeholder": "votre@email.com",
    "contact.form.phone": "Téléphone",
    "contact.form.phone.placeholder": "+33 (1) 23 45 67 89",
    "contact.form.company": "Nom de votre exploitation",
    "contact.form.company.placeholder": "Ferme Jean Dupont",
    "contact.form.message": "Message *",
    "contact.form.message.placeholder": "Dites-nous comment nous pouvons vous aider...",
    "contact.form.submit": "Envoyer le message",
    "contact.form.required": "* Champs obligatoires",
    "contact.faq.title": "Questions fréquentes",
    "contact.faq.subtitle": "Trouvez les réponses aux questions les plus posées",
    "contact.faq.pricing.q": "Quel est le coût de agricult?",
    "contact.faq.pricing.a":
      "agricult propose plusieurs plans tarifaires adaptés à la taille de votre exploitation. Nous offrons aussi un essai gratuit de 30 jours sans carte de crédit requise.",
    "contact.faq.security.q": "Comment sont sécurisées mes données?",
    "contact.faq.security.a":
      "Toutes vos données sont chiffrées avec le standard AES-256 et stockées dans des serveurs sécurisés. Nous respectons la conformité RGPD et ISO 27001.",
    "contact.faq.import.q": "Comment puis-je importer mes données existantes?",
    "contact.faq.import.a":
      "Notre équipe support peut vous aider à importer vos données. Nous supportons les formats CSV, Excel et les intégrations directes avec les logiciels populaires.",
    "contact.faq.training.q": "Offrez-vous une formation?",
    "contact.faq.training.a":
      "Oui! Nous proposons une formation complète, des webinaires réguliers et une documentation détaillée pour tous nos utilisateurs.",
    // NotFound
    "notfound.title": "Page non trouvée",
    "notfound.desc": "La page que vous recherchez n'existe pas ou a été supprimée.",
    "notfound.back": "Retour à l'accueil",
  },
  en: {
    // Meta
    "meta.title": "agricult — Smart farming platform",
    "meta.description":
      "agricult helps farmers manage crops, livestock, finances, and teams with intelligent tools.",
    "meta.home.title": "agricult — Smart farming platform",
    "meta.home.description":
      "Manage crops, livestock, finances, and teams with agricult. Boost yields with intelligent tools.",
    "meta.about.title": "About — agricult",
    "meta.about.description":
      "Learn about agricult’s mission, team, and values — the smart farming platform.",
    "meta.download.title": "Download — agricult",
    "meta.download.description":
      "Download agricult for iOS, Android, Windows, and Linux. Installation guide and requirements.",
    "meta.contact.title": "Contact — agricult",
    "meta.contact.description":
      "Contact the agricult team for questions, demos, or support.",
    "meta.notfound.title": "Page not found — agricult",
    "meta.notfound.description": "The requested page could not be found.",
    // Header
    "nav.home": "Home",
    "nav.features": "Features",
    "nav.benefits": "Benefits",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.download": "Download",
    "lang.label": "Language",
    "lang.fr": "FR",
    "lang.en": "EN",
    // Index - Hero
    "index.badge": "The next-generation agriculture platform",
    "index.title": "Turn your farm into a digital powerhouse",
    "index.subtitle":
      "agricult is the all‑in‑one platform to manage crops, livestock, finances, and teams. Boost yields and profits with AI.",
    "index.cta.primary": "Download now",
    "index.cta.secondary": "See the demo",
    "index.availability": "Available on iOS, Android, Windows, and Linux.",
    "index.hero.caption": "agricult dashboard preview",
    // Index - Features
    "index.features.title": "Everything you need",
    "index.features.subtitle": "One integrated solution for every part of your farm",
    "index.features.crop.title": "Crop management",
    "index.features.crop.desc":
      "Track sowing, harvests, and yields in real time. Get smart alerts to optimize production.",
    "index.features.analytics.title": "Advanced analytics",
    "index.features.analytics.desc":
      "Visualize data with intuitive dashboards. Make decisions from real data and AI forecasts.",
    "index.features.team.title": "Team collaboration",
    "index.features.team.desc": "Manage people and tasks. Coordinate operations across your farm.",
    "index.features.automation.title": "Automation",
    "index.features.automation.desc": "Automate repetitive tasks. Save time and reduce human error.",
    "index.features.security.title": "Data security",
    "index.features.security.desc": "Your data is encrypted and secure. Access it anywhere, safely.",
    "index.features.finance.title": "Financial management",
    "index.features.finance.desc": "Track revenue, expenses, and margins. Plan your yearly budget.",
    // Index - Benefits
    "index.benefits.title": "Why choose agricult?",
    "index.benefits.yield.title": "Increase yields",
    "index.benefits.yield.desc":
      "Our AI analyzes your data to provide the best recommendations to optimize crops.",
    "index.benefits.costs.title": "Reduce costs",
    "index.benefits.costs.desc":
      "Save on water, fertilizers, and energy with our resource management tools.",
    "index.benefits.team.title": "Manage your team easily",
    "index.benefits.team.desc": "Coordinate staff, track tasks, and improve overall productivity.",
    "index.benefits.risk.title": "Protect your investment",
    "index.benefits.risk.desc": "Get early alerts for crop diseases and livestock risks.",
    "index.stats.yield": "Average yield increase",
    "index.stats.costs": "Operating cost reduction",
    "index.stats.time": "Hours saved per farm per week",
    // Index - CTA
    "index.cta.title": "Ready to transform your farm?",
    "index.cta.subtitle": "Join farmers already optimizing their production with agricult.",
    "index.cta.help": "Questions?",
    "index.cta.contact": "Contact us",
    // Index - Download
    "index.download.title": "Download agricult",
    "index.download.subtitle": "The app is available on all major platforms",
    "index.download.help": "Need help?",
    "index.download.guide": "See the installation guide",
    // Footer (shared-ish)
    "footer.tagline": "The complete platform for modern farmers.",
    "footer.product": "Product",
    "footer.company": "Company",
    "footer.support": "Support",
    "footer.legal": "Legal",
    "footer.follow": "Follow us",
    "footer.pricing": "Pricing",
    "footer.security": "Security",
    "footer.blog": "Blog",
    "footer.careers": "Careers",
    "footer.help": "Help",
    "footer.docs": "Documentation",
    "footer.contact": "Contact us",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    "footer.cookies": "Cookies",
    // About page
    "about.hero.title": "Our Mission",
    "about.hero.subtitle":
      "Transform agriculture with technology. We believe every farmer deserves the best tools to succeed.",
    "about.hero.cta": "Contact us",
    "about.hero.back": "Back to home",
    "about.story.title": "Our Story",
    "about.story.p1":
      "agricult was founded in 2021 by a team of farmers and engineers passionate about modernizing agriculture. We saw that farmers lacked integrated, accessible tools to manage their operations effectively.",
    "about.story.p2":
      "Today, agricult helps thousands of farmers in over 30 countries optimize yields, reduce costs, and make better data-driven decisions.",
    "about.story.card": "Since 2021, we’ve been transforming agriculture",
    "about.values.title": "Our Values",
    "about.values.innovation": "Innovation",
    "about.values.innovation.desc":
      "We push the boundaries of agricultural technology to create cutting‑edge solutions.",
    "about.values.community": "Community",
    "about.values.community.desc": "We work alongside farmers to understand and solve real challenges.",
    "about.values.sustainability": "Sustainability",
    "about.values.sustainability.desc": "Our mission is to make agriculture more sustainable and eco‑friendly.",
    "about.values.excellence": "Excellence",
    "about.values.excellence.desc": "We’re committed to top‑quality products and impeccable service.",
    "about.team.title": "Our Team",
    "about.team.ceo.role": "Founder & CEO",
    "about.team.ceo.desc": "Agriculture expert with 15 years of experience managing large farms.",
    "about.team.cto.role": "Chief Technology Officer",
    "about.team.cto.desc": "Software engineer specialized in AI and innovative agri solutions.",
    "about.team.sales.role": "Head of Sales",
    "about.team.sales.desc": "Leads commercial growth and strategic partnerships.",
    "about.team.product.role": "Head of Product",
    "about.team.product.desc": "Passionate about improving agricultural workflows through technology.",
    "about.stats.active": "Active farmers",
    "about.stats.countries": "Countries served",
    "about.stats.yield": "Average yield increase",
    "about.cta.title": "Join the Agricultural Revolution",
    "about.cta.subtitle":
      "Become one of the thousands of farmers who trust agricult to transform their operations.",
    "about.cta.start": "Get started",
    "about.cta.contact": "Contact us",
    // Download page
    "download.hero.title": "Download agricult",
    "download.hero.subtitle":
      "The app is available on all major platforms. Choose what fits your device and start transforming your farm.",
    "download.hero.back": "Back to home",
    "download.platforms.title": "Choose your platform",
    "download.platforms.subtitle":
      "Select your operating system to access download and installation instructions",
    "download.platforms.version": "Version:",
    "download.platforms.size": "Size:",
    "download.platforms.requirements": "Requirements:",
    "download.platforms.ios.desc": "iPhone & iPad",
    "download.platforms.ios.req": "iOS 14.0 or later",
    "download.platforms.android.desc": "Phones & tablets",
    "download.platforms.android.req": "Android 8.0 or later",
    "download.platforms.windows.desc": "Desktop computers",
    "download.platforms.windows.req": "Windows 10/11 64-bit",
    "download.platforms.linux.desc": "Servers & desktops",
    "download.platforms.linux.req": "Ubuntu 20.04 LTS or equivalent",
    "download.platforms.linux.store": "Direct download",
    "download.platforms.features.full": "Full access to the platform",
    "download.platforms.features.notifications": "Real-time notifications",
    "download.platforms.features.offline": "Offline mode",
    "download.platforms.features.sync": "Automatic sync",
    "download.platforms.features.desktop": "Optimized desktop interface",
    "download.platforms.features.system": "System notifications",
    "download.platforms.features.files": "Full file management",
    "download.platforms.features.cli": "Command-line installation",
    "download.platforms.features.backend": "Backend server included",
    "download.platforms.features.config": "Flexible configuration",
    "download.platforms.features.deps": "Full dependency support",
    "download.requirements.title": "System requirements",
    "download.requirements.subtitle": "Make sure your device meets these minimum requirements",
    "download.requirements.internet.title": "Internet connection",
    "download.requirements.internet.desc": "A stable connection for real-time sync",
    "download.requirements.storage.title": "Storage",
    "download.requirements.storage.desc": "At least 200 MB of free space for installation",
    "download.requirements.cpu.title": "CPU",
    "download.requirements.cpu.desc": "Modern processor (less than 5 years old) recommended for best performance",
    "download.requirements.ram.title": "RAM",
    "download.requirements.ram.desc": "Minimum 2 GB RAM, 4 GB recommended",
    "download.install.title": "Installation guide",
    "download.install.subtitle": "Follow these simple steps to install agricult on your device",
    "download.install.steps.1.title": "Download the app",
    "download.install.steps.1.desc":
      "Click the download link for your platform above and follow the download process.",
    "download.install.steps.2.title": "Install the app",
    "download.install.steps.2.desc":
      "Once the download finishes, run the installer and follow on-screen instructions.",
    "download.install.steps.3.title": "Create an account",
    "download.install.steps.3.desc":
      "Open the app and sign up with your email or log in with your existing account.",
    "download.install.steps.4.title": "Start using it",
    "download.install.steps.4.desc":
      "Set up your farm and start managing crops and livestock with agricult.",
    "download.support.title": "Need help?",
    "download.support.subtitle": "Our support team is ready to help with installation and setup.",
    "download.support.contact": "Contact support",
    "download.support.faq": "See the FAQ",
    // Contact page
    "contact.hero.title": "Contact us",
    "contact.hero.subtitle":
      "Have questions about agricult? Our team is ready to help. Contact us and we’ll reply within 24 hours.",
    "contact.info.email": "Email",
    "contact.info.email.desc": "Our team replies by email",
    "contact.info.phone": "Phone",
    "contact.info.phone.desc": "Call us during business hours",
    "contact.info.address": "Address",
    "contact.form.title": "Send us a message",
    "contact.form.sent": "Message sent!",
    "contact.form.sent.desc": "Thanks for reaching out. We’ll get back to you soon.",
    "contact.form.name": "Full name *",
    "contact.form.name.placeholder": "Your name",
    "contact.form.email": "Email *",
    "contact.form.email.placeholder": "you@email.com",
    "contact.form.phone": "Phone",
    "contact.form.phone.placeholder": "+1 (555) 123-4567",
    "contact.form.company": "Farm name",
    "contact.form.company.placeholder": "Green Valley Farm",
    "contact.form.message": "Message *",
    "contact.form.message.placeholder": "Tell us how we can help...",
    "contact.form.submit": "Send message",
    "contact.form.required": "* Required fields",
    "contact.faq.title": "Frequently asked questions",
    "contact.faq.subtitle": "Find answers to common questions",
    "contact.faq.pricing.q": "How much does agricult cost?",
    "contact.faq.pricing.a":
      "agricult offers several plans tailored to the size of your farm. We also offer a 30‑day free trial with no credit card required.",
    "contact.faq.security.q": "How is my data secured?",
    "contact.faq.security.a":
      "All data is encrypted with AES‑256 and stored on secure servers. We comply with GDPR and ISO 27001.",
    "contact.faq.import.q": "How can I import my existing data?",
    "contact.faq.import.a":
      "Our support team can help you import data. We support CSV, Excel, and direct integrations with popular tools.",
    "contact.faq.training.q": "Do you offer training?",
    "contact.faq.training.a":
      "Yes! We offer complete training, regular webinars, and detailed documentation for all users.",
    // NotFound
    "notfound.title": "Page not found",
    "notfound.desc": "The page you’re looking for doesn’t exist or was removed.",
    "notfound.back": "Back to home",
  },
};

const SUPPORTED_LOCALES: Locale[] = ["fr", "en"];

type I18nContextValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("fr");
  const t = useMemo(() => {
    const dict = translations[locale];
    return (key: string) => dict[key] ?? key;
  }, [locale]);

  const safeSetLocale = (next: Locale) => {
    if (SUPPORTED_LOCALES.includes(next)) {
      setLocale(next);
    }
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale: safeSetLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
}

export function getSafeLocale(value: string | null | undefined): Locale {
  if (value === "en" || value === "fr") return value;
  return "fr";
}
