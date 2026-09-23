export type SiteSearchResult = {
  id: string;
  label: string;
  description: string;
  to: string;
  keywords: string[];
};

const DEVICE_NAMES = [
  'Apple HealthKit',
  'Health Connect',
  'Fitbit',
  'Garmin',
  'Oura',
  'WHOOP',
  'Samsung Health',
  'Huawei Health',
  'Withings',
  'Polar',
  'COROS',
  'Google Fit',
  'Xiaomi / Mi Fitness',
  'Strava',
  'MyFitnessPal',
  'Dexcom',
  'Freestyle Libre',
  'Omron',
  'Suunto',
  'Peloton',
  'Eight Sleep',
  'Amazfit',
  'Wear OS',
  'Ultrahuman',
  'Biostrap',
];

const PAGE_RESULTS: SiteSearchResult[] = [
  {
    id: 'devices',
    label: 'Supported devices',
    description: 'Browse wearable and fitness data sources',
    to: '/data-sources',
    keywords: ['device', 'devices', 'wearable', 'integration', 'integrations', 'data sources'],
  },
  {
    id: 'docs',
    label: 'Documentation',
    description: 'Introduction, guides, and getting started',
    to: '/docs',
    keywords: ['docs', 'documentation', 'guide', 'intro', 'introduction'],
  },
  {
    id: 'api',
    label: 'API Documentation',
    description: 'REST API for auth, providers, and health data',
    to: '/docs#api',
    keywords: ['api', 'rest', 'endpoint', 'bearer', 'http'],
  },
  {
    id: 'sdk',
    label: 'React SDK',
    description: 'Connect devices from your React app',
    to: '/docs#sdk-react',
    keywords: ['sdk', 'react', 'npm', 'hook', 'javascript', 'typescript'],
  },
  {
    id: 'mcp',
    label: 'MCP Tool',
    description: 'Upcoming agent tooling for TechnoHealth',
    to: '/docs#mcp',
    keywords: ['mcp', 'agent', 'tool', 'upcoming'],
  },
  {
    id: 'demo',
    label: 'Book a demo',
    description: 'Talk with the TechnoHealth support team',
    to: '/schedule-demo',
    keywords: ['demo', 'book', 'schedule', 'call', 'meeting'],
  },
  {
    id: 'contact',
    label: 'Contact',
    description: 'Reach the TechnoHealth team',
    to: '/contact',
    keywords: ['contact', 'support', 'help', 'email'],
  },
  {
    id: 'services',
    label: 'Services',
    description: 'AI tools, app, and platform services',
    to: '/services',
    keywords: ['services', 'ai', 'tools'],
  },
  {
    id: 'about',
    label: 'About',
    description: 'Why teams choose TechnoHealth',
    to: '/about',
    keywords: ['about', 'company', 'team'],
  },
  {
    id: 'terms',
    label: 'Terms of Use',
    description: 'Legal terms for using TechnoHealth',
    to: '/terms',
    keywords: ['terms', 'legal', 'conditions', 'utilisation'],
  },
  {
    id: 'privacy',
    label: 'Privacy Policy',
    description: 'How TechnoHealth handles personal information',
    to: '/privacy',
    keywords: ['privacy', 'confidentialité', 'law 25', 'pipeda'],
  },
];

const DEVICE_RESULTS: SiteSearchResult[] = DEVICE_NAMES.map((name) => ({
  id: `device-${name}`,
  label: name,
  description: 'Device and data source',
  to: `/data-sources?q=${encodeURIComponent(name)}`,
  keywords: [name.toLowerCase(), 'device', 'wearable'],
}));

const ALL_RESULTS = [...PAGE_RESULTS, ...DEVICE_RESULTS];

export function searchSite(query: string, limit = 8): SiteSearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return PAGE_RESULTS.slice(0, 6);

  const scored = ALL_RESULTS.map((item) => {
    const haystack = [item.label, item.description, ...item.keywords]
      .join(' ')
      .toLowerCase();
    let score = 0;
    if (item.label.toLowerCase() === q) score += 100;
    if (item.label.toLowerCase().startsWith(q)) score += 50;
    if (item.label.toLowerCase().includes(q)) score += 30;
    if (haystack.includes(q)) score += 10;
    q.split(/\s+/).forEach((part) => {
      if (part && haystack.includes(part)) score += 5;
    });
    return { item, score };
  })
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((row) => row.item);
}

export function resolveSearchDestination(query: string): string {
  const matches = searchSite(query, 1);
  if (matches[0]) return matches[0].to;
  const q = query.trim();
  return q ? `/data-sources?q=${encodeURIComponent(q)}` : '/data-sources';
}
