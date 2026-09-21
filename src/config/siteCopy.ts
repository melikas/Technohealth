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
    heroPoint1Desc: 'Launch health data from any provider.',
    heroPoint2Title: 'Real-time updates',
    heroPoint2Desc: 'Stay current with daily routines.',
    heroPoint3Title: 'Easy to implement',
    heroPoint3Desc: 'Built for product teams and research.',

    platformTitle: 'One platform. Three ways to build.',
    platformSub:
      'Pick a lane — connect devices, train health models, or give agents safe access to live signals.',
    platformTab1: 'API Integration',
    platformTab1Blurb: 'Wearables into your product',
    platformTab1Intro: 'Stop rebuilding device integrations. Ship health data through one API.',
    platformTab1F1Title: 'All the wearables, one connection',
    platformTab1F1Desc:
      'Apple, Fitbit, Oura, WHOOP, Garmin, Samsung, and more — add them once, keep them maintained for you.',
    platformTab1F2Title: 'Clean metrics, ready to use',
    platformTab1F2Desc:
      'Sleep, steps, heart rate, and recovery arrive structured. Your product team spends time on features, not parsers.',
    platformTab1F3Title: 'Sync your way',
    platformTab1F3Desc:
      'Pull with SDKs or push with webhooks. Self-host when you need the data to stay on your servers.',

    platformTab2: 'Health Monitoring',
    platformTab2Blurb: 'Devices, training, and results',
    platformTab2Intro:
      'Monitor connected devices in one dashboard — then train models and compare experiment results in the same product.',
    platformTab2F1Title: 'See every device in the study',
    platformTab2F1Desc:
      'Filter by date and body position, check connection status, and follow sensors like HR and IMU from one management view.',
    platformTab2F2Title: 'Train models on those signals',
    platformTab2F2Desc:
      'Turn continuous streams into risk, readiness, and outcome models without rebuilding a separate data pipeline.',
    platformTab2F3Title: 'Compare runs and promote winners',
    platformTab2F3Desc:
      'Track accuracy, F1, and status across runs. Keep the best model, catch regressions, and move approved versions into production.',
    platformMonitorAlt: 'TechnoHealth device management and experiment results screens',

    platformTab3: 'MCP for LLM and Agents',
    platformTab3Blurb: 'Agents on health data',
    platformTab3Intro: 'Give any LLM or agent structured tools for health data — without giving up control.',
    platformTab3F1Title: 'Health data as agent tools',
    platformTab3F1Desc:
      'Expose wearable and clinical context through MCP so agents can ask for what they need — coaching, triage, research, ops.',
    platformTab3F2Title: 'Bring your own model',
    platformTab3F2Desc:
      'Keep OpenAI, Anthropic, open-source, or whatever you already run. We sit under the agent, not instead of it.',
    platformTab3F3Title: 'Safe for regulated teams',
    platformTab3F3Desc:
      'Access controls, privacy rules, and self-hosting stay on — so agents move fast without owning your patient data.',

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
    heroPoint1Desc: 'Lancez les données de santé de n’importe quel fournisseur.',
    heroPoint2Title: 'Mises à jour en temps réel',
    heroPoint2Desc: 'Suivez les routines quotidiennes au fil de l’eau.',
    heroPoint3Title: 'Facile à implémenter',
    heroPoint3Desc: 'Conçu pour les équipes produit et la recherche.',

    platformTitle: 'Une plateforme. Trois façons de construire.',
    platformSub:
      'Choisissez une voie — connecter des appareils, entraîner des modèles santé, ou donner aux agents un accès sûr aux signaux live.',
    platformTab1: 'Intégration API',
    platformTab1Blurb: 'Wearables dans votre produit',
    platformTab1Intro: 'Arrêtez de reconstruire les intégrations appareils. Livrez les données santé via une seule API.',
    platformTab1F1Title: 'Tous les wearables, une connexion',
    platformTab1F1Desc:
      'Apple, Fitbit, Oura, WHOOP, Garmin, Samsung et plus — ajoutez-les une fois, on s’occupe de la maintenance.',
    platformTab1F2Title: 'Des métriques propres, prêtes à l’emploi',
    platformTab1F2Desc:
      'Sommeil, pas, fréquence cardiaque et récupération arrivent structurés. Votre équipe produit travaille sur les features, pas sur des parsers.',
    platformTab1F3Title: 'Synchronisez comme vous voulez',
    platformTab1F3Desc:
      'Tirez avec les SDK ou poussez avec des webhooks. Auto-hébergez quand les données doivent rester chez vous.',

    platformTab2: 'Suivi de santé',
    platformTab2Blurb: 'Appareils, entraînement et résultats',
    platformTab2Intro:
      'Suivez les appareils connectés dans un tableau de bord — puis entraînez des modèles et comparez les résultats d’expérience dans le même produit.',
    platformTab2F1Title: 'Voyez chaque appareil de l’étude',
    platformTab2F1Desc:
      'Filtrez par date et position corporelle, vérifiez la connexion, et suivez des capteurs comme HR et IMU dans une seule vue.',
    platformTab2F2Title: 'Entraînez des modèles sur ces signaux',
    platformTab2F2Desc:
      'Transformez des flux continus en modèles de risque, disponibilité et résultats sans reconstruire un pipeline séparé.',
    platformTab2F3Title: 'Comparez les runs et promouvez les gagnants',
    platformTab2F3Desc:
      'Suivez accuracy, F1 et statut entre runs. Gardez le meilleur modèle, détectez les régressions, et passez les versions approuvées en production.',
    platformMonitorAlt: 'Écrans TechnoHealth de gestion des appareils et de résultats d’expérience',

    platformTab3: 'MCP pour LLM et agents',
    platformTab3Blurb: 'Des agents sur les données santé',
    platformTab3Intro: 'Donnez à tout LLM ou agent des outils structurés sur les données santé — sans perdre le contrôle.',
    platformTab3F1Title: 'La santé comme outils d’agent',
    platformTab3F1Desc:
      'Exposez le contexte wearable et clinique via MCP pour que les agents demandent ce dont ils ont besoin — coaching, triage, recherche, ops.',
    platformTab3F2Title: 'Apportez votre propre modèle',
    platformTab3F2Desc:
      'Gardez OpenAI, Anthropic, open source, ou ce que vous tournez déjà. Nous sommes sous l’agent, pas à sa place.',
    platformTab3F3Title: 'Sûr pour les équipes réglementées',
    platformTab3F3Desc:
      'Contrôles d’accès, règles de confidentialité et auto-hébergement restent en place — les agents avancent sans posséder vos données patients.',

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
