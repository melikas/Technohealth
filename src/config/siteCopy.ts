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

    platformTab1: 'API Integration',
    platformTab1Intro:
      'Get wearable and device data into your product without building a separate connector for every brand. One integration path, ready for apps, dashboards, and clinical workflows.',
    platformTab1F1Title: 'Connect once, cover the devices people already wear',
    platformTab1F1Desc:
      'Plug into Apple Health, Fitbit, Oura, WHOOP, Garmin, Samsung, and more through a single API. Your team stops maintaining brittle one-off integrations and can add new sources from the same path.',
    platformTab1F2Title: 'Receive data in a format your product can use immediately',
    platformTab1F2Desc:
      'Activity, sleep, heart rate, recovery, and related signals arrive normalized and structured. That means less cleaning on your side and faster work for analytics, UI, and downstream models.',
    platformTab1F3Title: 'Pull on demand or stream updates into your stack',
    platformTab1F3Desc:
      'Use SDKs and webhooks to sync when a user opens your app, or push live updates into backends and monitoring tools. Deploy on your infrastructure when you need ownership and privacy control.',

    platformTab2: 'Health Model Training',
    platformTab2Intro:
      'Turn continuous wearable signals into models you can train, compare, and promote — without rebuilding a health data pipeline for every experiment.',
    platformTab2F1Title: 'Train on real longitudinal health signals',
    platformTab2F1Desc:
      'Use ongoing streams from wearables as inputs for risk, readiness, adherence, and outcome models. You work with the same continuous context patients and users already generate day to day.',
    platformTab2F2Title: 'Compare experiments before anything reaches production',
    platformTab2F2Desc:
      'Track versions, features, cohorts, and results across research and product runs. See what changed, what improved, and what regressed — so promotion decisions are based on evidence, not guesswork.',
    platformTab2F3Title: 'Evaluate with health-aware quality checks',
    platformTab2F3Desc:
      'Measure models against clinical and wellness metrics that matter for your use case. Catch weak performance early, then register and deploy approved models into the workflows your team already runs.',

    platformTab3: 'MCP for LLM and Agents',
    platformTab3Intro:
      'Let agents and LLMs work with health data safely through MCP — structured tools, clear access boundaries, and support for the model stack you already use.',
    platformTab3F1Title: 'Expose health context as tools agents can call',
    platformTab3F1Desc:
      'Wearable metrics and related clinical context become MCP tools instead of one-off glue code. Agents can request the signals they need for coaching, triage support, research help, or ops workflows.',
    platformTab3F2Title: 'Use any LLM provider without locking your stack',
    platformTab3F2Desc:
      'Keep the models and agent frameworks you already chose. TechnoHealth sits underneath as a safe health-data layer, so switching providers later does not mean rebuilding device integrations.',
    platformTab3F3Title: 'Keep privacy and control in regulated environments',
    platformTab3F3Desc:
      'Access management, privacy controls, and self-hosted options stay in place while agents run. That lets product and research teams move faster without handing over ownership of sensitive health data.',

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

    platformTab1: 'Intégration API',
    platformTab1Intro:
      'Intégrez les données wearables et appareils dans votre produit sans construire un connecteur séparé pour chaque marque. Un seul parcours d’intégration, prêt pour apps, tableaux de bord et parcours cliniques.',
    platformTab1F1Title: 'Connectez une fois, couvrez les appareils déjà portés',
    platformTab1F1Desc:
      'Branchez Apple Health, Fitbit, Oura, WHOOP, Garmin, Samsung et plus via une seule API. Votre équipe arrête de maintenir des intégrations fragiles et ajoute de nouvelles sources sur le même parcours.',
    platformTab1F2Title: 'Recevez des données utilisables tout de suite',
    platformTab1F2Desc:
      'Activité, sommeil, fréquence cardiaque, récupération et signaux associés arrivent normalisés et structurés. Moins de nettoyage de votre côté, plus de vitesse pour l’analytique, l’UI et les modèles en aval.',
    platformTab1F3Title: 'Interrogez à la demande ou diffusez les mises à jour',
    platformTab1F3Desc:
      'Utilisez SDK et webhooks pour synchroniser à l’ouverture de l’app, ou pousser des mises à jour live vers backends et outils de suivi. Déployez sur votre infrastructure quand vous avez besoin de contrôle et de confidentialité.',

    platformTab2: 'Entraînement de modèles santé',
    platformTab2Intro:
      'Transformez des signaux wearables continus en modèles que vous pouvez entraîner, comparer et promouvoir — sans reconstruire un pipeline de données santé pour chaque expérience.',
    platformTab2F1Title: 'Entraînez sur de vrais signaux longitudinaux',
    platformTab2F1Desc:
      'Utilisez les flux wearables comme entrées pour modèles de risque, disponibilité, observance et résultats. Vous travaillez avec le même contexte continu que patients et utilisateurs produisent au quotidien.',
    platformTab2F2Title: 'Comparez les expériences avant la production',
    platformTab2F2Desc:
      'Suivez versions, features, cohortes et résultats entre recherche et produit. Voyez ce qui a changé, ce qui s’améliore et ce qui régresse — pour décider sur des preuves, pas au feeling.',
    platformTab2F3Title: 'Évaluez avec des contrôles orientés santé',
    platformTab2F3Desc:
      'Mesurez les modèles sur des métriques cliniques et bien-être adaptées à votre cas d’usage. Détectez tôt les faiblesses, puis enregistrez et déployez les modèles approuvés dans vos workflows.',

    platformTab3: 'MCP pour LLM et agents',
    platformTab3Intro:
      'Laissez agents et LLM travailler sur les données de santé en sécurité via MCP — outils structurés, accès maîtrisés, et compatibilité avec la stack que vous utilisez déjà.',
    platformTab3F1Title: 'Exposez le contexte santé comme outils appelables',
    platformTab3F1Desc:
      'Les métriques wearables et le contexte clinique deviennent des outils MCP au lieu de glue code sur mesure. Les agents demandent les signaux utiles au coaching, au triage, à la recherche ou aux opérations.',
    platformTab3F2Title: 'Gardez n’importe quel fournisseur LLM',
    platformTab3F2Desc:
      'Conservez les modèles et frameworks d’agents déjà choisis. TechnoHealth reste la couche données santé sécurisée en dessous, sans devoir reconstruire les intégrations appareils si vous changez de fournisseur.',
    platformTab3F3Title: 'Gardez confidentialité et contrôle en environnement réglementé',
    platformTab3F3Desc:
      'Gestion des accès, contrôles de confidentialité et options auto hébergées restent en place pendant que les agents tournent. Les équipes produit et recherche avancent sans céder la propriété des données sensibles.',

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
