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
    metricResources: 'Data Resources',
    metricResourcesDesc: 'Integrated data platforms',
    metricMl: 'Advanced ML Models',
    metricMlDesc: 'Predicting health, powering care',
    metricEfficiency: 'Efficiency Boost',
    metricEfficiencyDesc: 'Developer time saved',
    heroPoint1Title: 'One API',
    heroPoint1Desc: 'Launch health data from any provider.',
    heroPoint2Title: 'Real-time updates',
    heroPoint2Desc: 'Stay current with daily routines.',
    heroPoint3Title: 'Easy to implement',
    heroPoint3Desc: 'Built for product teams and research.',

    benefitsTitle: 'Get wearable data into your product faster',
    benefitsSub:
      'Go from signing to production in about a week, and keep the data on your infrastructure.',
    benefit1Title: 'Days, not months',
    benefit1Desc:
      'Go from zero to live data in about 7 days. You do not need custom development for every device.',
    benefit2Title: 'One API for all',
    benefit2Desc:
      'Stop building a separate integration for each device. Add Apple, Fitbit, or Oura from your dashboard.',
    benefit3Title: 'Your infrastructure',
    benefit3Desc:
      'Deploy on your servers and keep ownership of your data. No per user fees or vendor lock in.',
    benefit4Title: 'Enterprise ready',
    benefit4Desc:
      'Built for regulated teams with privacy controls, access management, and self hosted options.',

    useCasesTitle: 'Real world results',
    useCasesSub: 'Hospitals, researchers, and wellness companies use TechnoHealth today',
    readCaseStudies: 'Read case studies',
    useCase1Industry: 'Remote Patient Monitoring',
    useCase1Company: 'Digital Health Platform',
    useCase1Stat: '+25% Readmission Reduction',
    useCase1Quote:
      'TechnoHealth unified our wearable integrations in 4 weeks. We now monitor 10,000+ patients with real-time alerts.',
    useCase2Industry: 'Clinical Research',
    useCase2Company: 'Medical Research Institute',
    useCase2Stat: '5,000+ Study Participants',
    useCase2Quote:
      'Finally, continuous objective data from research subjects without custom device integrations.',
    useCase3Industry: 'Corporate Wellness',
    useCase3Company: 'Fortune 500 Company',
    useCase3Stat: '30,000 Employees Tracked',
    useCase3Quote:
      'Population-level health insights while keeping data on-premise. Mission-critical for privacy.',
    useCase4Industry: 'Precision Medicine',
    useCase4Company: 'Healthcare System',
    useCase4Stat: '+40% Treatment Success',
    useCase4Quote:
      'Correlated wearable data with clinical outcomes. Personalized medicine at scale.',
    useCase5Industry: 'Digital Therapeutics',
    useCase5Company: 'MedTech Company',
    useCase5Stat: '+50% Patient Engagement',
    useCase5Quote:
      'Real-time biometric feedback powers our AI-driven health coaching platform.',
    useCase6Industry: 'Aging Care',
    useCase6Company: 'Senior Living Network',
    useCase6Stat: '15,000+ Residents',
    useCase6Quote:
      'Proactive health monitoring. Alerts caregivers before clinical events occur.',

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
    footerDocs: 'Docs',
    footerUseCases: 'Use Cases',
    footerProduct: 'Product',
    footerResources: 'Resources',
    footerDocumentation: 'Documentation',
    footerApi: 'API Reference',
    footerSdk: 'SDK and Libraries',
    footerStatus: 'System Status',
    footerUseCaseInsurers: 'Health & Life Insurers',
    footerUseCaseDigitalHealth: 'Digital Health & Remote Patient Monitoring',
    footerUseCaseFitness: 'Fitness & Wellness',
    footerUseCaseResearch: 'Research Organizations',
    footerUseCasePharma: 'Pharmaceutical Companies',
    footerAbout: 'About Us',
    footerServices: 'Services',
    footerCaseStudies: 'Case Studies',
    footerSafety: 'Safety and Security',
    footerDataSources: 'Data Sources',
    footerSolutions: 'Solutions',
    footerBookDemo: 'Book a demo',
    footerGetStarted: 'Get Started',
    footerContact: 'Contact Us',
    footerBlog: 'Blog and Insights',
    footerWhitePapers: 'White Papers',
    footerWebinars: 'Webinars',
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
    metricResources: 'Sources de données',
    metricResourcesDesc: 'Plateformes de données intégrées',
    metricMl: 'Modèles ML avancés',
    metricMlDesc: 'Prédire la santé, soutenir les soins',
    metricEfficiency: 'Gain d’efficacité',
    metricEfficiencyDesc: 'Temps de développement économisé',
    heroPoint1Title: 'Une API',
    heroPoint1Desc: 'Lancez les données de santé de n’importe quel fournisseur.',
    heroPoint2Title: 'Mises à jour en temps réel',
    heroPoint2Desc: 'Suivez les routines quotidiennes au fil de l’eau.',
    heroPoint3Title: 'Facile à implémenter',
    heroPoint3Desc: 'Conçu pour les équipes produit et la recherche.',

    benefitsTitle: 'Intégrez les données wearables plus vite',
    benefitsSub:
      'Passez de la signature à la production en environ une semaine, tout en gardant les données sur votre infrastructure.',
    benefit1Title: 'Des jours, pas des mois',
    benefit1Desc:
      'Passez de zéro à des données en production en environ 7 jours. Pas besoin de développement sur mesure pour chaque appareil.',
    benefit2Title: 'Une API pour tous',
    benefit2Desc:
      'Arrêtez de construire une intégration séparée pour chaque appareil. Ajoutez Apple, Fitbit ou Oura depuis votre tableau de bord.',
    benefit3Title: 'Votre infrastructure',
    benefit3Desc:
      'Déployez sur vos serveurs et gardez la propriété de vos données. Pas de frais par utilisateur ni de dépendance forcée.',
    benefit4Title: 'Prêt pour l’entreprise',
    benefit4Desc:
      'Conçu pour les équipes réglementées avec contrôles de confidentialité, gestion des accès et options auto hébergées.',

    useCasesTitle: 'Résultats concrets',
    useCasesSub: 'Hôpitaux, chercheurs et entreprises de bien être utilisent TechnoHealth aujourd’hui',
    readCaseStudies: 'Lire les études de cas',
    useCase1Industry: 'Suivi à distance des patients',
    useCase1Company: 'Plateforme de santé numérique',
    useCase1Stat: '+25 % de réduction des réadmissions',
    useCase1Quote:
      'TechnoHealth a unifié nos intégrations wearables en 4 semaines. Nous suivons maintenant plus de 10 000 patients avec des alertes en temps réel.',
    useCase2Industry: 'Recherche clinique',
    useCase2Company: 'Institut de recherche médicale',
    useCase2Stat: 'Plus de 5 000 participants',
    useCase2Quote:
      'Enfin des données continues et objectives sans intégrations d’appareils sur mesure.',
    useCase3Industry: 'Bien être en entreprise',
    useCase3Company: 'Entreprise Fortune 500',
    useCase3Stat: '30 000 employés suivis',
    useCase3Quote:
      'Des insights populationnels tout en gardant les données sur site. Essentiel pour la confidentialité.',
    useCase4Industry: 'Médecine de précision',
    useCase4Company: 'Système de santé',
    useCase4Stat: '+40 % de succès thérapeutique',
    useCase4Quote:
      'Corrélation des données wearables avec les résultats cliniques. La médecine personnalisée à l’échelle.',
    useCase5Industry: 'Thérapeutiques numériques',
    useCase5Company: 'Entreprise MedTech',
    useCase5Stat: '+50 % d’engagement patient',
    useCase5Quote:
      'Le feedback biométrique en temps réel alimente notre coaching santé par IA.',
    useCase6Industry: 'Soins aux aînés',
    useCase6Company: 'Réseau de résidences',
    useCase6Stat: 'Plus de 15 000 résidents',
    useCase6Quote:
      'Surveillance proactive. Alerte les soignants avant les événements cliniques.',

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
    footerDocs: 'Docs',
    footerUseCases: 'Cas d’usage',
    footerProduct: 'Produit',
    footerResources: 'Ressources',
    footerDocumentation: 'Documentation',
    footerApi: 'Référence API',
    footerSdk: 'SDK et bibliothèques',
    footerStatus: 'État du système',
    footerUseCaseInsurers: 'Assureurs santé et vie',
    footerUseCaseDigitalHealth: 'Santé numérique et suivi à distance',
    footerUseCaseFitness: 'Fitness et bien être',
    footerUseCaseResearch: 'Organisations de recherche',
    footerUseCasePharma: 'Entreprises pharmaceutiques',
    footerAbout: 'À propos',
    footerServices: 'Services',
    footerCaseStudies: 'Études de cas',
    footerSafety: 'Sécurité',
    footerDataSources: 'Sources de données',
    footerSolutions: 'Solutions',
    footerBookDemo: 'Réserver une démo',
    footerGetStarted: 'Commencer',
    footerContact: 'Nous contacter',
    footerBlog: 'Blog et analyses',
    footerWhitePapers: 'Livres blancs',
    footerWebinars: 'Webinaires',
    footerCompliantWith: 'Conformité',
    footerRights: '© 2026 TechnoHealth. Tous droits réservés.',
    footerLinkedIn: 'TechnoHealth sur LinkedIn',
  },
} as const;

export type SiteCopyKey = keyof typeof siteCopy.en;

export function getSiteCopy(language: Language) {
  return siteCopy[language];
}
