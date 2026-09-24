export const SITE_URL = 'https://www.technohealth.ca';
export const SITE_NAME = 'TechnoHealth';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/Images/about/hero-digital-health.jpg`;

export type SeoEntry = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
};

const DEFAULT_DESCRIPTION =
  'Wearable Data Integration and Analytics, built for health teams. Connect sources, keep provenance and quality visible, and prepare data for dashboards, models, and AI.';

export const defaultSeo: SeoEntry = {
  title: 'TechnoHealth | Wearable Data Integration and Analytics',
  description: DEFAULT_DESCRIPTION,
  path: '/',
};

/** Exact path matches (no trailing slash except home). */
export const seoByPath: Record<string, SeoEntry> = {
  '/': defaultSeo,
  '/about': {
    title: 'About TechnoHealth | Wearable Health Data Infrastructure',
    description:
      'Health data is everywhere. Using it still shouldn’t be this hard. TechnoHealth turns wearable and smartphone data into trusted, analysis-ready health data.',
    path: '/about',
  },
  '/solutions': {
    title: 'Solutions | Who TechnoHealth Builds For',
    description:
      'Explore TechnoHealth for digital health, research, insurers, sports, pharma, and challenge apps — wearable data made usable.',
    path: '/solutions',
  },
  '/solutions/digital-health': {
    title: 'Digital Health & RPM | TechnoHealth',
    description:
      'Bring patient-generated wearable data into your care workflow without building every device integration yourself.',
    path: '/solutions/digital-health',
  },
  '/solutions/research': {
    title: 'Research Organizations | TechnoHealth',
    description:
      'Spend less time preparing wearable study data and more time answering your research question — with provenance and coverage.',
    path: '/solutions/research',
  },
  '/solutions/insurers': {
    title: 'Health & Life Insurers | TechnoHealth',
    description:
      'Turn wearable data into usable member health signals for prevention, wellness, and engagement programs.',
    path: '/solutions/insurers',
  },
  '/solutions/sports': {
    title: 'Sports & Performance | TechnoHealth',
    description:
      'Bring every athlete’s wearable data into one performance view across mixed devices.',
    path: '/solutions/sports',
  },
  '/solutions/pharma': {
    title: 'Pharmaceutical Companies | TechnoHealth',
    description:
      'Bring wearable data into clinical studies with traceable provenance and longitudinal structure.',
    path: '/solutions/pharma',
  },
  '/solutions/gamification': {
    title: 'Gamification & Challenges | TechnoHealth',
    description:
      'Let users join with the wearable they already use — normalized activity for challenges and leaderboards.',
    path: '/solutions/gamification',
  },
  '/solutions/longevity': {
    title: 'Longevity & Preventive Care | TechnoHealth',
    description:
      'See the person between visits with longitudinal sleep, activity, mobility, and routine context.',
    path: '/solutions/longevity',
  },
  '/docs': {
    title: 'Documentation | TechnoHealth API, SDK & MCP',
    description:
      'Guides for TechnoHealth API, React SDK, device integrations, and upcoming MCP tooling for health data agents.',
    path: '/docs',
  },
  '/data-sources': {
    title: 'Supported Devices & Data Sources | TechnoHealth',
    description:
      'Browse wearable and health data sources TechnoHealth can connect — watches, rings, phones, and more.',
    path: '/data-sources',
  },
  '/integrations': {
    title: 'Supported Devices & Data Sources | TechnoHealth',
    description:
      'Browse wearable and health data sources TechnoHealth can connect — watches, rings, phones, and more.',
    path: '/data-sources',
  },
  '/safety-security': {
    title: 'Safety & Security | TechnoHealth',
    description:
      'How TechnoHealth approaches Quebec Law 25, PIPEDA, HIPAA-ready workflows, encryption, and self-hosting.',
    path: '/safety-security',
  },
  '/contact': {
    title: 'Contact | TechnoHealth',
    description: 'Contact the TechnoHealth team in Montreal about wearable data infrastructure and pilots.',
    path: '/contact',
  },
  '/schedule-demo': {
    title: 'Book a Demo | TechnoHealth',
    description: 'Book a TechnoHealth demo and explore a pilot for your wearable health data workflow.',
    path: '/schedule-demo',
  },
  '/book-a-demo': {
    title: 'Book a Demo | TechnoHealth',
    description: 'Book a TechnoHealth demo and explore a pilot for your wearable health data workflow.',
    path: '/schedule-demo',
  },
  '/services': {
    title: 'Services | TechnoHealth',
    description: 'TechnoHealth platform services for wearable health data, monitoring, and AI-ready workflows.',
    path: '/services',
  },
  '/get-started': {
    title: 'Get Started | TechnoHealth',
    description: 'Start connecting wearable health data with TechnoHealth.',
    path: '/get-started',
  },
  '/terms': {
    title: 'Terms of Use | TechnoHealth',
    description: 'Terms of Use for TechnoHealth.',
    path: '/terms',
  },
  '/privacy': {
    title: 'Privacy Policy | TechnoHealth',
    description: 'Privacy Policy for TechnoHealth — how we handle personal information.',
    path: '/privacy',
  },
  '/auth': {
    title: 'Sign in | TechnoHealth',
    description: 'Sign in to TechnoHealth.',
    path: '/auth',
    noindex: true,
  },
  '/dashboard': {
    title: 'Dashboard | TechnoHealth',
    description: 'TechnoHealth dashboard.',
    path: '/dashboard',
    noindex: true,
  },
};

export function resolveSeo(pathname: string): SeoEntry {
  const path = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  return seoByPath[path] ?? {
    title: `${SITE_NAME} | Wearable health data infrastructure`,
    description: DEFAULT_DESCRIPTION,
    path: path || '/',
  };
}

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TechnoHealth',
  url: SITE_URL,
  logo: `${SITE_URL}/Images/Icon.png`,
  description: DEFAULT_DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Montreal',
    addressRegion: 'QC',
    addressCountry: 'CA',
  },
  sameAs: ['https://www.linkedin.com/company/technohealth.ca/'],
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'TechnoHealth',
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  publisher: {
    '@type': 'Organization',
    name: 'TechnoHealth',
    url: SITE_URL,
  },
};

export const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'TechnoHealth',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Web',
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/OnlineOnly',
    url: `${SITE_URL}/schedule-demo`,
  },
};
