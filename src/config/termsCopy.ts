import type { Language } from '../context/LanguageContext';

export type TermsSection = {
  id: string;
  nav: string;
  title: string;
  blocks: string[];
};

type TermsCopy = {
  pageTitle: string;
  bilingualTitle: string;
  effectiveLabel: string;
  updatedLabel: string;
  effectiveDate: string;
  updatedDate: string;
  intro: string;
  relatedPrivacy: string;
  relatedPrivacyCta: string;
  sections: TermsSection[];
};

const en: TermsCopy = {
  pageTitle: 'Terms of Use',
  bilingualTitle: 'Conditions d’utilisation de TechnoHealth',
  effectiveLabel: 'Effective date',
  updatedLabel: 'Last updated',
  effectiveDate: 'September 23, 2026',
  updatedDate: 'September 23, 2026',
  intro:
    'These Terms of Use govern access to and use of the TechnoHealth website and software platform. Please read them carefully. By accessing or using TechnoHealth, you agree to these Terms and acknowledge our Privacy Policy.',
  relatedPrivacy: 'How we collect and handle personal information is described in our Privacy Policy.',
  relatedPrivacyCta: 'Read the Privacy Policy',
  sections: [
    {
      id: 'about',
      nav: 'About TechnoHealth',
      title: '1. About TechnoHealth',
      blocks: [
        '“TechnoHealth” refers to [FULL LEGAL COMPANY NAME], a business based in Québec, Canada, with its principal place of business at [business address]. If incorporation is not yet complete, these Terms must be published under the real legal name of the current owner — do not invent a company name.',
        'Contact: legal@technohealth.ca · Privacy: privacy@technohealth.ca · Support: support@technohealth.ca. Information about the person responsible for the protection of personal information is available via privacy@technohealth.ca and will also be published on our Privacy Policy page as required under Québec Law 25.',
        'TechnoHealth is a software platform for integrating, organizing, visualizing and analyzing data from wearable devices, smartphones and other compatible data sources. The platform may also provide information about data provenance, data quality, longitudinal patterns, routines and rhythms.',
        'TechnoHealth does not claim to detect disease, diagnose depression, predict clinical deterioration, or recommend medical treatment, unless a particular feature has been expressly validated, approved and designated for such use under applicable Health Canada rules. Intended use and marketing claims determine whether software may be regulated as Software as a Medical Device (SaMD). These Terms must stay aligned with our public product claims.',
        'TechnoHealth is currently an early-stage product. Certain features may be offered as prototype, beta, pilot or evaluation features. Such features may change, be unavailable, contain errors or produce incomplete outputs. Beta or pilot status does not reduce our obligations regarding privacy, confidentiality or security of personal information.',
      ],
    },
    {
      id: 'using',
      nav: 'Using the Service',
      title: '2. Using the Service',
      blocks: [
        'TechnoHealth is currently intended primarily for authorized organizational and professional users — including authorized organizations, their employees and users, researchers, healthcare or wellness professionals, and pilot participants — and is not offered as a direct-to-consumer medical service unless expressly stated otherwise.',
        'You must use TechnoHealth only for lawful purposes and in accordance with these Terms, any applicable Pilot Agreement or Order Form, and our written instructions.',
        'You may not: upload or process patient or other personal data without legal authority; access another person’s account; scrape, reverse engineer or attempt to bypass security; introduce malware; perform security testing without prior written permission; collect data illegally; re-identify de-identified data; or use prototype or beta outputs for unsupported medical purposes.',
        'Customers are responsible for their authorized users, for keeping credentials confidential, and for promptly revoking access when an employee or contractor leaves or no longer needs access. Role-based access and audit logging may be used to help identify who accessed what and when.',
      ],
    },
    {
      id: 'health-data',
      nav: 'Health Data',
      title: '3. Health Data',
      blocks: [
        'Where a Customer provides Personal Information (including patient or user health data) to TechnoHealth, the Customer is responsible for ensuring that it has the legal authority, consent or other lawful basis required to provide that information and to instruct TechnoHealth to process it. This does not eliminate TechnoHealth’s own independent obligations under applicable privacy and confidentiality law. Detailed processing terms for B2B health data belong in a Data Processing Addendum (DPA).',
        'Customers retain ownership and control of Customer Data. TechnoHealth receives only the limited rights necessary to host, process, organize and display Customer Data for the purpose of providing the Services. TechnoHealth does not sell Customer Data or patient health data.',
        'We do not use language granting TechnoHealth a perpetual worldwide license over uploaded health data. Any broader rights require an express written agreement.',
        'TechnoHealth may provide information regarding source provenance, completeness, missingness, synchronization, routine, rhythm and changes over time. These outputs depend on the quality, availability and accuracy of source data and connected devices. Data-quality indicators do not guarantee that a measurement is clinically accurate or that a wearable was correctly used.',
        'TechnoHealth does not provide medical diagnosis, treatment or emergency medical services. Outputs should not be used as the sole basis for diagnosis, treatment or urgent clinical decisions unless a particular feature has been expressly validated, approved and designated for such use. Healthcare professionals remain responsible for exercising their independent professional judgment. A disclaimer alone does not remove Health Canada classification issues if intended use or marketing claims are medical.',
        'TechnoHealth is not an emergency response system and must not be relied upon to detect or respond to medical emergencies. Data may be delayed due to device synchronization, network connectivity, third-party APIs or other technical conditions.',
      ],
    },
    {
      id: 'ai',
      nav: 'AI & Analytics',
      title: '4. AI & Analytics',
      blocks: [
        '“AI-ready” means Customer Data can be prepared for dashboards, machine-learning workflows or agent tools. It does not mean TechnoHealth automatically sends identifiable Customer Health Data to general-purpose AI providers.',
        'TechnoHealth does not use identifiable Customer Health Data to train general-purpose AI models unless this has been expressly agreed in writing and is legally permitted.',
        'AI or model integrations requested by the Customer may involve transferring selected data to the chosen third-party provider. The applicable provider and data flow will be disclosed before activation. Such integrations are opt-in, not enabled by default.',
        'Routine, rhythm or profiling features that evaluate behavioural or health-related patterns over time will be described in product interfaces and in the Privacy Policy, including purposes and activation mechanics, consistent with Québec Law 25 requirements for profiling and sensitive information.',
      ],
    },
    {
      id: 'ownership',
      nav: 'Your Data & Ownership',
      title: '5. Your Data & Ownership',
      blocks: [
        'Customers retain rights in Customer Data and in outputs generated specifically from Customer Data, subject to TechnoHealth’s ownership of its underlying software, methods, algorithms, user interface, documentation and branding.',
        'If you provide product feedback, you permit TechnoHealth to use that feedback to improve the product, provided we do not disclose your confidential information.',
        'Each party will protect the other party’s confidential information and use it only for the purposes of the relationship. Patient and other health-related personal information is treated as confidential and sensitive.',
      ],
    },
    {
      id: 'third-party',
      nav: 'Third-Party Devices',
      title: '6. Third-Party Devices & Integrations',
      blocks: [
        'TechnoHealth may interoperate with third-party devices, applications and APIs (for example Apple, Garmin, Fitbit, Oura and others). TechnoHealth does not control those services and cannot guarantee their availability, accuracy, compatibility or continued operation.',
        'Third-party providers may change or discontinue APIs or data fields. We will take reasonable steps to maintain integrations, but we do not disclaim all responsibility in unreasonable terms.',
      ],
    },
    {
      id: 'security',
      nav: 'Security',
      title: '7. Security & Availability',
      blocks: [
        'We maintain administrative, technical and organizational safeguards appropriate to the sensitivity of the information we process. We do not claim that data is “100% secure.”',
        'Current practices (as implemented) may include encryption in transit, encryption at rest, role-based access, multi-factor authentication where enabled, logging, backups, incident response procedures and vendor management. Details that we actually operate are described on our Safety & Security page and will be expanded in our Security & Data Practices documentation.',
        'We aim to keep the Services available, but availability may be affected by maintenance, third-party APIs, device synchronization, internet connectivity and events outside our reasonable control. Formal service-level commitments, if any, will appear in an applicable Order Form or Pilot Agreement.',
      ],
    },
    {
      id: 'payments',
      nav: 'Payments',
      title: '8. Fees, Billing & Pilots',
      blocks: [
        'Pilot pricing, duration and scope are set out in the applicable Pilot Agreement or Order Form. If paid subscriptions are introduced later, pricing, renewal and cancellation terms will be stated before purchase.',
        'Consumer-facing online subscription rules under Québec law may apply if we later offer direct-to-consumer successive-performance subscriptions. Those requirements will be addressed before any such offer goes live.',
      ],
    },
    {
      id: 'termination',
      nav: 'Termination',
      title: '9. Suspension & Termination',
      blocks: [
        'We may suspend access for security risk, illegal use, non-payment or material breach. Where feasible for health-service customers, we will provide reasonable notice and preserve the ability to export Customer Data.',
        'Following termination, Customer Data will be available for export for [30] days and then deleted or securely destroyed in accordance with our retention schedule, unless retention is legally required. Retention schedules for active data, backups, admin data and security logs will be stated in the Privacy Policy and DPA once infrastructure can enforce them.',
      ],
    },
    {
      id: 'legal',
      nav: 'Legal Terms',
      title: '10. Legal Terms',
      blocks: [
        'Except as expressly stated in an applicable agreement, the Services are provided on an “as available” basis. Warranty and liability language must be reviewed by Québec counsel; U.S.-style “all warranties disclaimed” templates may not be enforceable under Québec law.',
        'Limitation of liability, indemnity and forum clauses for health information, confidentiality breaches, gross negligence and consumer rights must be drafted or reviewed by a lawyer and are intentionally not copied from generic internet templates here.',
        'Material changes to these Terms will be communicated before they take effect where required, and the updated effective date will be displayed. We do not reserve a right to change Terms at any time without notice.',
        'These Terms are governed by the laws of Québec and the applicable federal laws of Canada. Jurisdiction and forum details should be confirmed with counsel, especially if users outside Québec are involved.',
      ],
    },
    {
      id: 'contact',
      nav: 'Contact',
      title: '11. Contact & Complaints',
      blocks: [
        'General: support@technohealth.ca',
        'Legal: legal@technohealth.ca',
        'Privacy Officer / responsible person for personal information: privacy@technohealth.ca',
        'If you have a privacy complaint, contact privacy@technohealth.ca. You may also have the right to escalate complaints to the Commission d’accès à l’information du Québec or other competent authorities.',
      ],
    },
  ],
};

const fr: TermsCopy = {
  pageTitle: 'Conditions d’utilisation',
  bilingualTitle: 'TechnoHealth — Terms of Use',
  effectiveLabel: 'Date d’entrée en vigueur',
  updatedLabel: 'Dernière mise à jour',
  effectiveDate: '23 septembre 2026',
  updatedDate: '23 septembre 2026',
  intro:
    'Les présentes Conditions d’utilisation régissent l’accès et l’utilisation du site et de la plateforme logicielle TechnoHealth. Veuillez les lire attentivement. En accédant à TechnoHealth ou en l’utilisant, vous acceptez ces Conditions et reconnaissez notre Politique de confidentialité.',
  relatedPrivacy:
    'La collecte et le traitement des renseignements personnels sont décrits dans notre Politique de confidentialité.',
  relatedPrivacyCta: 'Lire la Politique de confidentialité',
  sections: [
    {
      id: 'about',
      nav: 'À propos de TechnoHealth',
      title: '1. À propos de TechnoHealth',
      blocks: [
        '« TechnoHealth » désigne [NOM LÉGAL COMPLET DE L’ENTREPRISE], une entreprise établie au Québec (Canada), dont le principal établissement est situé au [adresse]. Si l’incorporation n’est pas encore terminée, ces Conditions doivent être publiées sous le vrai nom légal du propriétaire actuel — n’inventez pas de raison sociale.',
        'Contact : legal@technohealth.ca · Confidentialité : privacy@technohealth.ca · Soutien : support@technohealth.ca. Les informations sur la personne responsable de la protection des renseignements personnels sont accessibles via privacy@technohealth.ca et seront aussi publiées dans la Politique de confidentialité, conformément à la Loi 25 du Québec.',
        'TechnoHealth est une plateforme logicielle permettant d’intégrer, d’organiser, de visualiser et d’analyser des données provenant de dispositifs portables, de téléphones intelligents et d’autres sources compatibles. La plateforme peut aussi fournir des informations sur la provenance des données, leur qualité, les patterns longitudinaux, les routines et les rythmes.',
        'TechnoHealth ne prétend pas détecter une maladie, diagnostiquer la dépression, prédire une détérioration clinique ou recommander un traitement médical, sauf si une fonctionnalité particulière a été expressément validée, approuvée et désignée à cet effet selon les règles applicables de Santé Canada. L’usage prévu et les allégations marketing déterminent si un logiciel peut être réglementé comme logiciel médical (SaMD). Ces Conditions doivent rester alignées avec les allégations publiques du produit.',
        'TechnoHealth est actuellement un produit en phase initiale. Certaines fonctionnalités peuvent être offertes en prototype, bêta, pilote ou évaluation. Elles peuvent changer, être indisponibles, contenir des erreurs ou produire des résultats incomplets. Le statut bêta ou pilote ne réduit pas nos obligations en matière de confidentialité, de vie privée ou de sécurité des renseignements personnels.',
      ],
    },
    {
      id: 'using',
      nav: 'Utilisation du service',
      title: '2. Utilisation du service',
      blocks: [
        'TechnoHealth est actuellement destiné principalement aux utilisateurs organisationnels et professionnels autorisés — notamment les organisations autorisées, leurs employés et utilisateurs, les chercheurs, les professionnels de la santé ou du mieux-être, et les participants à des pilotes — et n’est pas offert comme service médical direct au consommateur, sauf mention contraire explicite.',
        'Vous devez utiliser TechnoHealth uniquement à des fins licites et conformément à ces Conditions, à tout Accord de pilote ou bon de commande applicable, et à nos instructions écrites.',
        'Il est interdit : de téléverser ou traiter des données de patients ou d’autres renseignements personnels sans autorité légale ; d’accéder au compte d’autrui ; de procéder à du scraping, de la rétro-ingénierie ou de contourner la sécurité ; d’introduire des logiciels malveillants ; de tester la sécurité sans autorisation écrite préalable ; de collecter illégalement des données ; de réidentifier des données anonymisées ; ou d’utiliser des sorties prototype/bêta à des fins médicales non prises en charge.',
        'Le Client est responsable de ses utilisateurs autorisés, de la confidentialité des identifiants, et de la révocation rapide de l’accès lorsqu’un employé ou un contractant quitte l’organisation ou n’en a plus besoin. Un contrôle d’accès par rôles et des journaux d’audit peuvent être utilisés pour aider à identifier qui a consulté quoi et quand.',
      ],
    },
    {
      id: 'health-data',
      nav: 'Données de santé',
      title: '3. Données de santé',
      blocks: [
        'Lorsqu’un Client fournit des renseignements personnels (y compris des données de santé de patients ou d’utilisateurs) à TechnoHealth, le Client doit s’assurer qu’il dispose de l’autorité légale, du consentement ou d’une autre base légale nécessaires pour les fournir et pour mandater TechnoHealth de les traiter. Cela n’élimine pas les obligations indépendantes de TechnoHealth en vertu des lois applicables sur la vie privée et la confidentialité. Les modalités détaillées de traitement pour les données de santé B2B appartiennent à un avenant sur le traitement des données (DPA).',
        'Les Clients conservent la propriété et le contrôle des Données Client. TechnoHealth ne reçoit que les droits limités nécessaires pour héberger, traiter, organiser et afficher les Données Client afin de fournir les Services. TechnoHealth ne vend pas les Données Client ni les données de santé des patients.',
        'Nous n’utilisons pas de libellé accordant à TechnoHealth une licence perpétuelle mondiale sur les données de santé téléversées. Tout droit plus large exige un accord écrit exprès.',
        'TechnoHealth peut fournir des informations sur la provenance, l’exhaustivité, les manques, la synchronisation, la routine, le rythme et les changements dans le temps. Ces résultats dépendent de la qualité, de la disponibilité et de l’exactitude des données sources et des appareils connectés. Les indicateurs de qualité ne garantissent pas qu’une mesure est cliniquement exacte ni qu’un appareil a été correctement utilisé.',
        'TechnoHealth ne fournit pas de diagnostic médical, de traitement ni de services médicaux d’urgence. Les résultats ne doivent pas servir de seule base à un diagnostic, un traitement ou une décision clinique urgente, sauf si une fonctionnalité a été expressément validée, approuvée et désignée à cet effet. Les professionnels de la santé demeurent responsables d’exercer leur jugement professionnel indépendant. Une clause de non-responsabilité ne suffit pas à exclure la classification de Santé Canada si l’usage prévu ou les allégations sont médicaux.',
        'TechnoHealth n’est pas un système d’intervention d’urgence et ne doit pas être utilisé pour détecter ou répondre à des urgences médicales. Les données peuvent être retardées en raison de la synchronisation des appareils, de la connectivité réseau, d’API tierces ou d’autres conditions techniques.',
      ],
    },
    {
      id: 'ai',
      nav: 'IA et analytique',
      title: '4. IA et analytique',
      blocks: [
        '« Prêt pour l’IA » signifie que les Données Client peuvent être préparées pour des tableaux de bord, des flux d’apprentissage automatique ou des outils d’agents. Cela ne signifie pas que TechnoHealth envoie automatiquement des Données de santé Client identifiables à des fournisseurs d’IA généralistes.',
        'TechnoHealth n’utilise pas de Données de santé Client identifiables pour entraîner des modèles d’IA généralistes, sauf accord écrit exprès et permission légale.',
        'Les intégrations d’IA ou de modèles demandées par le Client peuvent entraîner le transfert de données sélectionnées vers le fournisseur tiers choisi. Le fournisseur et le flux de données seront divulgués avant l’activation. Ces intégrations sont en option (opt-in), non activées par défaut.',
        'Les fonctionnalités de routine, de rythme ou de profilage qui évaluent des patterns comportementaux ou liés à la santé dans le temps seront décrites dans les interfaces produit et dans la Politique de confidentialité, y compris les finalités et les mécanismes d’activation, conformément à la Loi 25 du Québec.',
      ],
    },
    {
      id: 'ownership',
      nav: 'Vos données et propriété',
      title: '5. Vos données et propriété',
      blocks: [
        'Les Clients conservent leurs droits sur les Données Client et sur les résultats générés spécifiquement à partir des Données Client, sous réserve de la propriété de TechnoHealth sur ses logiciels, méthodes, algorithmes, interface, documentation et marques.',
        'Si vous fournissez des commentaires sur le produit, vous autorisez TechnoHealth à les utiliser pour l’améliorer, sans divulgation de vos renseignements confidentiels.',
        'Chaque partie protégera les renseignements confidentiels de l’autre et ne les utilisera que pour les fins de la relation. Les renseignements personnels liés à la santé sont traités comme confidentiels et sensibles.',
      ],
    },
    {
      id: 'third-party',
      nav: 'Appareils tiers',
      title: '6. Appareils et intégrations tiers',
      blocks: [
        'TechnoHealth peut interagir avec des appareils, applications et API tiers (par exemple Apple, Garmin, Fitbit, Oura et autres). TechnoHealth ne contrôle pas ces services et ne peut garantir leur disponibilité, exactitude, compatibilité ou continuité.',
        'Les fournisseurs tiers peuvent modifier ou interrompre des API ou des champs de données. Nous prendrons des mesures raisonnables pour maintenir les intégrations, sans formuler de renonciation déraisonnable à toute responsabilité.',
      ],
    },
    {
      id: 'security',
      nav: 'Sécurité',
      title: '7. Sécurité et disponibilité',
      blocks: [
        'Nous maintenons des mesures administratives, techniques et organisationnelles appropriées à la sensibilité des renseignements traités. Nous ne prétendons pas que les données sont « 100 % sécurisées ».',
        'Les pratiques actuelles (lorsqu’elles sont mises en œuvre) peuvent inclure le chiffrement en transit et au repos, le contrôle d’accès par rôles, l’authentification multifacteur lorsqu’elle est activée, la journalisation, les sauvegardes, les procédures d’incident et la gestion des fournisseurs. Les détails réellement en place sont décrits sur la page Safety & Security.',
        'Nous visons à maintenir la disponibilité des Services, qui peut toutefois être affectée par la maintenance, les API tierces, la synchronisation des appareils, la connectivité Internet et des événements hors de notre contrôle raisonnable. Tout engagement formel de niveau de service figurera, le cas échéant, dans un bon de commande ou un accord de pilote.',
      ],
    },
    {
      id: 'payments',
      nav: 'Paiements',
      title: '8. Frais, facturation et pilotes',
      blocks: [
        'Les prix, la durée et la portée des pilotes sont définis dans l’Accord de pilote ou le bon de commande applicable. Si des abonnements payants sont introduits plus tard, les modalités de prix, de renouvellement et d’annulation seront indiquées avant l’achat.',
        'Les règles de protection du consommateur du Québec peuvent s’appliquer si nous offrons plus tard des abonnements successifs en ligne aux consommateurs. Ces exigences seront traitées avant tout lancement de ce type.',
      ],
    },
    {
      id: 'termination',
      nav: 'Résiliation',
      title: '9. Suspension et résiliation',
      blocks: [
        'Nous pouvons suspendre l’accès en cas de risque de sécurité, d’usage illégal, de non-paiement ou de manquement important. Lorsque cela est possible pour les clients de services de santé, nous fournirons un préavis raisonnable et préserverons la possibilité d’exporter les Données Client.',
        'Après résiliation, les Données Client seront disponibles pour exportation pendant [30] jours, puis supprimées ou détruites de façon sécuritaire selon notre calendrier de conservation, sauf obligation légale de conservation. Les calendriers détaillés seront précisés dans la Politique de confidentialité et le DPA lorsque l’infrastructure pourra les appliquer.',
      ],
    },
    {
      id: 'legal',
      nav: 'Mentions juridiques',
      title: '10. Mentions juridiques',
      blocks: [
        'Sauf disposition expresse d’un accord applicable, les Services sont fournis « selon disponibilité ». Les clauses de garantie et de responsabilité doivent être revues par un avocat du Québec ; les modèles américains de renonciation totale aux garanties peuvent ne pas être exécutoires au Québec.',
        'Les clauses de limitation de responsabilité, d’indemnisation et de for pour les renseignements de santé, les manquements à la confidentialité, la faute lourde et les droits des consommateurs doivent être rédigées ou revues par un avocat et ne sont volontairement pas copiées de modèles génériques ici.',
        'Les changements importants à ces Conditions seront communiqués avant leur entrée en vigueur lorsque requis, et la date d’entrée en vigueur mise à jour sera affichée. Nous ne nous réservons pas le droit de modifier les Conditions à tout moment sans préavis.',
        'Ces Conditions sont régies par les lois du Québec et les lois fédérales du Canada qui s’appliquent. Les détails de juridiction et de for doivent être confirmés avec un avocat, surtout si des utilisateurs hors Québec sont concernés.',
      ],
    },
    {
      id: 'contact',
      nav: 'Contact',
      title: '11. Contact et plaintes',
      blocks: [
        'Général : support@technohealth.ca',
        'Juridique : legal@technohealth.ca',
        'Responsable de la protection des renseignements personnels : privacy@technohealth.ca',
        'Pour une plainte relative à la vie privée, écrivez à privacy@technohealth.ca. Vous pouvez aussi avoir le droit de vous adresser à la Commission d’accès à l’information du Québec ou à d’autres autorités compétentes.',
      ],
    },
  ],
};

export function getTermsCopy(language: Language): TermsCopy {
  return language === 'fr' ? fr : en;
}
