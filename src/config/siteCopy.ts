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
      'Connect wearables and health apps through one API so your product can ship without custom device work.',
    platformTab1F1Title: 'One wearable API',
    platformTab1F1Desc:
      'Add Apple, Fitbit, Oura, WHOOP, Garmin, and more from a single integration path.',
    platformTab1F2Title: 'Normalized metrics',
    platformTab1F2Desc:
      'Receive structured activity, sleep, heart rate, and recovery data ready for your product.',
    platformTab1F3Title: 'SDKs and webhooks',
    platformTab1F3Desc:
      'Pull data on demand or stream updates into your app, dashboard, or backend workflows.',
    platformTab1F4Title: 'Self hosted options',
    platformTab1F4Desc:
      'Deploy on your infrastructure so health data stays under your control.',

    platformTab2: 'Health Model Training',
    platformTab2Intro:
      'Train and evaluate health models on longitudinal wearable signals without rebuilding data pipelines.',
    platformTab2F1Title: 'Longitudinal signals',
    platformTab2F1Desc:
      'Use continuous wearable streams as training inputs for risk, readiness, and outcome models.',
    platformTab2F2Title: 'Experiment tracking',
    platformTab2F2Desc:
      'Compare model versions, features, and cohorts across research and product experiments.',
    platformTab2F3Title: 'Health-aware evaluation',
    platformTab2F3Desc:
      'Measure quality with clinical and wellness metrics before models reach production.',
    platformTab2F4Title: 'Registry and deploy',
    platformTab2F4Desc:
      'Promote approved models into product workflows with clear lineage and access controls.',

    platformTab3: 'MCP for LLM and Agents',
    platformTab3Intro:
      'Give agents and LLMs safe, structured access to health data through MCP.',
    platformTab3F1Title: 'Health MCP tools',
    platformTab3F1Desc:
      'Expose wearable and clinical context as tools agents can call without custom glue code.',
    platformTab3F2Title: 'Any LLM provider',
    platformTab3F2Desc:
      'Works with the model and agent stack you already use — no vendor lock-in on the LLM side.',
    platformTab3F3Title: 'Agent-ready workflows',
    platformTab3F3Desc:
      'Power coaching, triage support, research assistants, and ops agents on live health signals.',
    platformTab3F4Title: 'Safety and control',
    platformTab3F4Desc:
      'Keep privacy controls, access management, and self hosting in place for regulated teams.',

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
      'Connectez wearables et apps santé via une seule API pour livrer sans intégrations d’appareils sur mesure.',
    platformTab1F1Title: 'Une API wearables',
    platformTab1F1Desc:
      'Ajoutez Apple, Fitbit, Oura, WHOOP, Garmin et plus encore via un seul parcours d’intégration.',
    platformTab1F2Title: 'Métriques normalisées',
    platformTab1F2Desc:
      'Recevez activité, sommeil, fréquence cardiaque et récupération structurés, prêts pour votre produit.',
    platformTab1F3Title: 'SDK et webhooks',
    platformTab1F3Desc:
      'Interrogez à la demande ou diffusez les mises à jour vers votre app, tableau de bord ou backend.',
    platformTab1F4Title: 'Options auto hébergées',
    platformTab1F4Desc:
      'Déployez sur votre infrastructure pour garder le contrôle des données de santé.',

    platformTab2: 'Entraînement de modèles santé',
    platformTab2Intro:
      'Entraînez et évaluez des modèles santé sur des signaux wearables longitudinaux sans reconstruire vos pipelines.',
    platformTab2F1Title: 'Signaux longitudinaux',
    platformTab2F1Desc:
      'Utilisez des flux wearables continus comme entrées pour modèles de risque, disponibilité et résultats.',
    platformTab2F2Title: 'Suivi d’expériences',
    platformTab2F2Desc:
      'Comparez versions de modèles, features et cohortes entre recherche et produit.',
    platformTab2F3Title: 'Évaluation orientée santé',
    platformTab2F3Desc:
      'Mesurez la qualité avec des métriques cliniques et bien-être avant la production.',
    platformTab2F4Title: 'Registre et déploiement',
    platformTab2F4Desc:
      'Promouvez les modèles approuvés dans vos workflows avec lignée claire et contrôles d’accès.',

    platformTab3: 'MCP pour LLM et agents',
    platformTab3Intro:
      'Donnez aux agents et LLM un accès sûr et structuré aux données de santé via MCP.',
    platformTab3F1Title: 'Outils MCP santé',
    platformTab3F1Desc:
      'Exposez le contexte wearable et clinique comme outils appelables sans glue code sur mesure.',
    platformTab3F2Title: 'Tout fournisseur LLM',
    platformTab3F2Desc:
      'Compatible avec le modèle et la stack d’agents que vous utilisez déjà — sans lock-in LLM.',
    platformTab3F3Title: 'Workflows prêts pour agents',
    platformTab3F3Desc:
      'Alimentez coaching, support de triage, assistants recherche et agents ops sur des signaux live.',
    platformTab3F4Title: 'Sécurité et contrôle',
    platformTab3F4Desc:
      'Gardez confidentialité, gestion des accès et auto hébergement pour les équipes réglementées.',

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
