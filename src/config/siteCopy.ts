import type { Language } from '../context/LanguageContext';

const siteCopy = {
  en: {
    navServices: 'Services',
    navDocs: 'Docs',
    navAbout: 'About',
    navContact: 'Contact',
    bookDemo: 'Book a demo',
    scheduleDemo: 'Schedule a demo',
    serviceAiTools: 'AI Tools',
    serviceApp: 'TechnoHealth App',
    serviceDevices: 'Supported Devices',
    serviceApis: 'APIs & SDKs',
    menu: 'Menu',
    switchLanguage: 'Switch language',

    heroTagline:
      'One infrastructure for wearable health data. Connect any device, standardize the complexity, and build trusted health products faster.',
    heroSearchPlaceholder: 'Search devices, APIs, docs…',
    heroSearchAria: 'Search TechnoHealth',
    metric1Title: 'One API',
    metric1Desc: 'Launch health data from any provider.',
    metric2Title: 'Predictive AI insights',
    metric2Desc: 'A safe platform that supports any LLM provider and agent.',
    metric3Title: 'MCP',
    metric3Desc: 'For your health data operations.',
    heroPoint1Title: 'One API',
    heroPoint1Desc: 'Every wearable. One integration. Ship faster.',
    heroPoint2Title: 'Live streams',
    heroPoint2Desc: 'Sleep, heart rate, and recovery as they happen.',
    heroPoint3Title: 'Days, not months',
    heroPoint3Desc: 'SDKs and webhooks your product team can own.',

    platformTab1: 'API Integration',
    platformTab1Intro: 'Stop rebuilding integrations. Bring health data into your product through one connection.',
    platformTab1F1Title: 'One connection for all your data sources',
    platformTab1F1Desc:
      'Connect wearable and mobile health data through a single integration, instead of building and maintaining a separate pipeline for every source.',
    platformTab1F2Title: 'Data that’s ready to use',
    platformTab1F2Desc:
      'Receive sleep, activity, heart rate, recovery, and other health signals in a consistent structure, so your team can focus on the product instead of cleaning and reshaping data.',
    platformTab1F3Title: 'Fit it into your existing stack',
    platformTab1F3Desc:
      'Pull data when you need it or receive updates automatically. Keep the workflow flexible, and choose where the data lives when tighter control is required.',
    platformApiDocsCta: 'See API Documentation',

    platformTab2: 'Health Monitoring',
    platformTab2Intro:
      'Monitor your devices, understand daily routines, and catch meaningful changes — then use the same data to build and test models.',
    platformTab2F1Title: 'Keep every device and data stream in view',
    platformTab2F1Desc:
      'See which devices are connected, where they’re being used, and whether data is coming in as expected. Filter by date, participant, or sensor and follow signals like heart rate and motion from one place.',
    platformTab2F2Title: 'Understand what’s normal — and what changed',
    platformTab2F2Desc:
      'See daily routines and recurring patterns across sleep, activity, meals, movement, and other behaviors. Spot unusual changes without manually digging through days of raw data.',
    platformTab2F3Title: 'Build models directly from the same data',
    platformTab2F3Desc:
      'Use those continuous signals to train and compare models for risk, readiness, outcomes, or other use cases — without moving the data into a separate workflow first.',
    platformMonitorAlt: 'TechnoHealth device management dashboard',
    platformMonitorAltRoutines: 'TechnoHealth Routine Detection and Anomalies dashboard',
    platformMonitorShotDevices: 'Devices',
    platformMonitorShotRoutines: 'Routines',

    platformTab3: 'MCP for LLM and Agents',
    platformTab3Intro: 'Give any LLM or agent structured tools for health data — without giving up control.',
    platformTab3F1Title: 'Give your AI access to the health data it actually needs',
    platformTab3F1Desc:
      'Connect wearable and clinical data through MCP so your agents can pull the right context for coaching, triage, research, or operations—without hard-coding a separate data flow for every use case.',
    platformTab3F2Title: 'Use the models you already trust',
    platformTab3F2Desc:
      'Keep using OpenAI, Anthropic, open-source models, or your existing AI stack. TechnoHealth sits underneath and prepares the health data, so you don’t have to replace your current tools.',
    platformTab3F3Title: 'Keep control of sensitive health data',
    platformTab3F3Desc:
      'Set who can access what, apply privacy rules, and choose where the data is hosted. Your AI can work with the information it needs without giving up control of patient or user data.',

    useCasesTitle: 'Who we build for',
    segment1Title: 'Health & Life Insurers',
    segment1Desc: 'Bring wearable signals into prevention, risk, and member programs.',
    segment2Title: 'Digital Health & Remote Patient Monitoring',
    segment2Desc: 'Connect patient devices into one clinical data path.',
    segment3Title: 'Sports Teams & Performance',
    segment3Desc: 'Connect team wearables so coaches can monitor load, recovery, and readiness.',
    segment4Title: 'Research Organizations',
    segment4Desc: 'Collect continuous study data without custom device work.',
    segment5Title: 'Pharmaceutical Companies',
    segment5Desc: 'Support digital endpoints and trial monitoring with wearable APIs.',
    segment6Title: 'Gamification & Challenge Apps',
    segment6Desc: 'Power step challenges, leaderboards, and rewards with wearable activity data.',

    faqTitle: 'Frequently asked questions',
    faqSub: 'Short answers to the questions we hear most often',
    faqMore: 'Still have questions?',
    faqCtaBody: 'Our team is happy to talk through your clinical requirements.',
    faqContact: 'Contact us',
    faqSchedule: 'Schedule a demo',
    faq1q: 'How fast can you get us live?',
    faq1a:
      'Usually about 7 days. We identify your wearables, set up the integrations, and deploy to production so your team can start using the data right away.',
    faq2q: 'Which devices do you support?',
    faq2a:
      'Apple Watch, Fitbit, Oura, WHOOP, Samsung Galaxy Watch, Garmin, Withings, Dexcom, Empatica, Polar, and more. You get one API for all of them.',
    faq3q: 'What metrics can clinicians see?',
    faq3a:
      'Heart rate trends, sleep quality, activity patterns, biological rhythms, risk scores, and custom metrics you define. Everything is meant to be clear and useful.',
    faq4q: 'How much does it cost?',
    faq4a:
      'Self hosted plans start around $600 to $6,000 per year depending on scale. Cloud plans start around $1,000 to $10,000 per year. There are no per user fees.',
    faq5q: 'Is our patient data secure?',
    faq5a:
      'Yes. We design for Quebec Law 25 and Canadian privacy rules, support HIPAA ready workflows for US customers, and let you self host so data stays on your infrastructure.',
    faq6q: 'Can it connect to our EHR?',
    faq6a:
      'Yes. FHIR compliant export works with Epic, Cerner, and other systems. Real time API feeds are available for custom workflows.',

    footerTagline: 'One infrastructure for wearable health data.',
    footerServicesCol: 'Services',
    footerUseCases: 'Use Cases',
    footerCompany: 'Company',
    footerApiDocs: 'API Docs',
    footerResearchDashboard: 'Research Dashboard',
    footerMcp: 'MCP',
    footerSdk: 'SDK and Libraries',
    footerUseCaseInsurers: 'Health & Life Insurers',
    footerUseCaseDigitalHealth: 'Digital Health & Remote Patient Monitoring',
    footerUseCaseFitness: 'Sports Teams & Performance',
    footerUseCaseResearch: 'Research Organizations',
    footerUseCasePharma: 'Pharmaceutical Companies',
    footerUseCaseGamification: 'Gamification & Challenge Apps',
    footerContact: 'Contact',
    footerAbout: 'About Us',
    footerTerms: 'Terms of Use',
    footerPrivacy: 'Privacy Policy',
    footerBookDemo: 'Book a demo',
    footerCompliantWith: 'Compliant with',
    footerRights: '© 2026 TechnoHealth. All rights reserved.',
    footerLinkedIn: 'TechnoHealth on LinkedIn',
  },
  fr: {
    navServices: 'Services',
    navDocs: 'Docs',
    navAbout: 'À propos',
    navContact: 'Contact',
    bookDemo: 'Réserver une démo',
    scheduleDemo: 'Planifier une démo',
    serviceAiTools: 'Outils IA',
    serviceApp: 'Application TechnoHealth',
    serviceDevices: 'Appareils supportés',
    serviceApis: 'APIs et SDKs',
    menu: 'Menu',
    switchLanguage: 'Changer de langue',

    heroTagline:
      'Une infrastructure pour les données de santé des objets connectés. Connectez n’importe quel appareil, standardisez la complexité et construisez plus vite des produits de santé fiables.',
    heroSearchPlaceholder: 'Rechercher appareils, APIs, docs…',
    heroSearchAria: 'Rechercher TechnoHealth',
    metric1Title: 'Une API',
    metric1Desc: 'Lancez les données de santé de n’importe quel fournisseur.',
    metric2Title: 'Insights IA prédictifs',
    metric2Desc: 'Une plateforme sécurisée compatible avec tout fournisseur LLM et tout agent.',
    metric3Title: 'MCP',
    metric3Desc: 'Pour vos opérations de données de santé.',
    heroPoint1Title: 'Une API',
    heroPoint1Desc: 'Tous les wearables. Une intégration. Plus vite.',
    heroPoint2Title: 'Flux en direct',
    heroPoint2Desc: 'Sommeil, rythme cardiaque et récupération en temps réel.',
    heroPoint3Title: 'Des jours, pas des mois',
    heroPoint3Desc: 'SDK et webhooks que votre équipe produit maîtrise.',

    platformTab1: 'Intégration API',
    platformTab1Intro: 'Arrêtez de reconstruire les intégrations. Apportez les données de santé dans votre produit via une seule connexion.',
    platformTab1F1Title: 'Une connexion pour toutes vos sources de données',
    platformTab1F1Desc:
      'Connectez les données de santé wearables et mobiles via une seule intégration, au lieu de construire et maintenir un pipeline séparé pour chaque source.',
    platformTab1F2Title: 'Des données prêtes à l’emploi',
    platformTab1F2Desc:
      'Recevez sommeil, activité, fréquence cardiaque, récupération et d’autres signaux de santé dans une structure cohérente, pour que votre équipe se concentre sur le produit plutôt que sur le nettoyage et le remodelage des données.',
    platformTab1F3Title: 'Intégrez-le à votre stack existante',
    platformTab1F3Desc:
      'Tirez les données quand vous en avez besoin ou recevez les mises à jour automatiquement. Gardez le flux flexible, et choisissez où vivent les données quand un contrôle plus strict est requis.',
    platformApiDocsCta: 'Voir la documentation API',

    platformTab2: 'Suivi de santé',
    platformTab2Intro:
      'Surveillez vos appareils, comprenez les routines quotidiennes et repérez les changements importants — puis utilisez les mêmes données pour construire et tester des modèles.',
    platformTab2F1Title: 'Gardez chaque appareil et chaque flux de données sous les yeux',
    platformTab2F1Desc:
      'Voyez quels appareils sont connectés, où ils sont utilisés, et si les données arrivent comme prévu. Filtrez par date, participant ou capteur et suivez des signaux comme la fréquence cardiaque et le mouvement depuis un seul endroit.',
    platformTab2F2Title: 'Comprenez ce qui est normal — et ce qui a changé',
    platformTab2F2Desc:
      'Voyez les routines quotidiennes et les motifs récurrents sur le sommeil, l’activité, les repas, le mouvement et d’autres comportements. Repérez les changements inhabituels sans fouiller manuellement des jours de données brutes.',
    platformTab2F3Title: 'Construisez des modèles directement à partir des mêmes données',
    platformTab2F3Desc:
      'Utilisez ces signaux continus pour entraîner et comparer des modèles de risque, de disponibilité, de résultats ou d’autres cas d’usage — sans déplacer d’abord les données dans un autre flux.',
    platformMonitorAlt: 'Tableau de gestion des appareils TechnoHealth',
    platformMonitorAltRoutines: 'Tableau Routine Detection and Anomalies de TechnoHealth',
    platformMonitorShotDevices: 'Appareils',
    platformMonitorShotRoutines: 'Routines',

    platformTab3: 'MCP pour LLM et agents',
    platformTab3Intro: 'Donnez à tout LLM ou agent des outils structurés sur les données santé — sans perdre le contrôle.',
    platformTab3F1Title: 'Donnez à votre IA l’accès aux données de santé dont elle a vraiment besoin',
    platformTab3F1Desc:
      'Connectez les données wearables et cliniques via MCP pour que vos agents récupèrent le bon contexte — coaching, triage, recherche ou opérations — sans coder un flux de données séparé pour chaque cas d’usage.',
    platformTab3F2Title: 'Utilisez les modèles en lesquels vous avez déjà confiance',
    platformTab3F2Desc:
      'Continuez avec OpenAI, Anthropic, des modèles open source ou votre stack IA actuelle. TechnoHealth se place en dessous et prépare les données de santé, sans remplacer vos outils.',
    platformTab3F3Title: 'Gardez le contrôle des données de santé sensibles',
    platformTab3F3Desc:
      'Définissez qui accède à quoi, appliquez des règles de confidentialité et choisissez où les données sont hébergées. Votre IA travaille avec l’information nécessaire sans céder le contrôle des données patients ou utilisateurs.',

    useCasesTitle: 'Pour qui nous construisons',
    segment1Title: 'Assureurs santé et vie',
    segment1Desc: 'Intégrez les signaux wearables dans la prévention, le risque et les programmes membres.',
    segment2Title: 'Santé numérique et suivi à distance',
    segment2Desc: 'Connectez les appareils patients dans un seul parcours de données cliniques.',
    segment3Title: 'Équipes sportives et performance',
    segment3Desc: 'Connectez les wearables d’équipe pour que les coachs suivent charge, récupération et disponibilité.',
    segment4Title: 'Organisations de recherche',
    segment4Desc: 'Collectez des données d’étude continues sans intégrations d’appareils sur mesure.',
    segment5Title: 'Entreprises pharmaceutiques',
    segment5Desc: 'Soutenez les critères numériques et le suivi d’essais avec des APIs wearables.',
    segment6Title: 'Gamification et applications de défis',
    segment6Desc: 'Alimentez défis de pas, classements et récompenses avec les données d’activité wearables.',

    faqTitle: 'Questions fréquentes',
    faqSub: 'Des réponses courtes aux questions qu’on nous pose le plus',
    faqMore: 'Encore des questions?',
    faqCtaBody: 'Notre équipe est disponible pour parler de vos besoins cliniques.',
    faqContact: 'Nous contacter',
    faqSchedule: 'Planifier une démo',
    faq1q: 'En combien de temps êtes vous opérationnels?',
    faq1a:
      'En général environ 7 jours. Nous identifions vos appareils, configurons les intégrations et déployons en production pour que votre équipe puisse utiliser les données rapidement.',
    faq2q: 'Quels appareils sont supportés?',
    faq2a:
      'Apple Watch, Fitbit, Oura, WHOOP, Samsung Galaxy Watch, Garmin, Withings, Dexcom, Empatica, Polar, et plus encore. Une seule API pour tous.',
    faq3q: 'Quelles métriques les cliniciens voient ils?',
    faq3a:
      'Tendances de fréquence cardiaque, qualité du sommeil, activité, rythmes biologiques, scores de risque et métriques personnalisées. Le tout conçu pour être clair et utile.',
    faq4q: 'Combien cela coûte t il?',
    faq4a:
      'Les forfaits auto hébergés commencent autour de 600 $ à 6 000 $ par an selon l’échelle. Les forfaits cloud commencent autour de 1 000 $ à 10 000 $ par an. Pas de frais par utilisateur.',
    faq5q: 'Nos données patients sont elles sécurisées?',
    faq5a:
      'Oui. Nous concevons pour la Loi 25 du Québec et les règles canadiennes de confidentialité, supportons des flux prêts pour HIPAA pour les clients américains, et permettons l’auto hébergement pour garder les données chez vous.',
    faq6q: 'Pouvez vous vous connecter à notre DSE?',
    faq6a:
      'Oui. L’export compatible FHIR fonctionne avec Epic, Cerner et d’autres systèmes. Des flux API en temps réel sont disponibles pour vos processus personnalisés.',

    footerTagline: 'Une infrastructure pour les données de santé des objets connectés.',
    footerServicesCol: 'Services',
    footerUseCases: 'Cas d’usage',
    footerCompany: 'Entreprise',
    footerApiDocs: 'Docs API',
    footerResearchDashboard: 'Tableau de recherche',
    footerMcp: 'MCP',
    footerSdk: 'SDK et bibliothèques',
    footerUseCaseInsurers: 'Assureurs santé et vie',
    footerUseCaseDigitalHealth: 'Santé numérique et suivi à distance',
    footerUseCaseFitness: 'Équipes sportives et performance',
    footerUseCaseResearch: 'Organisations de recherche',
    footerUseCasePharma: 'Entreprises pharmaceutiques',
    footerUseCaseGamification: 'Gamification et applications de défis',
    footerContact: 'Contact',
    footerAbout: 'À propos',
    footerTerms: 'Conditions d’utilisation',
    footerPrivacy: 'Politique de confidentialité',
    footerBookDemo: 'Réserver une démo',
    footerCompliantWith: 'Conformité',
    footerRights: '© 2026 TechnoHealth. Tous droits réservés.',
    footerLinkedIn: 'TechnoHealth sur LinkedIn',
  },
} as const;

export type SiteCopyKey = keyof typeof siteCopy.en;

export function getSiteCopy(language: Language) {
  return siteCopy[language];
}
