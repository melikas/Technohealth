export type SegmentVisualId =
  | 'member-timeline'
  | 'patient-signal'
  | 'team-grid'
  | 'study-workspace'
  | 'trial-lineage'
  | 'challenge-flow'
  | 'longevity-view';

export type SegmentContent = {
  slug: string;
  name: string;
  cardHeadline: string;
  cardDesc: string;
  heroTitle: string;
  heroSub: string;
  primaryCta: string;
  secondaryCta: string;
  secondaryHref: string;
  painEyebrow: string;
  painHeadline: string;
  painBody: string[];
  painAside?: string;
  sources?: string[];
  brokenBits?: string[];
  solutionEyebrow: string;
  solutionHeadline: string;
  solutionBlocks: { title: string; desc: string }[];
  visual?: SegmentVisualId;
  visualCaption?: string;
  valueHeadline: string;
  values: string[];
  whyHeadline: string;
  whyBody: string;
  trustHeadline: string;
  trustItems: string[];
  pilotHeadline: string;
  pilotBody: string;
  pilotCta: string;
  workflowLabel: string;
  flowBefore: string[];
  flowAfter: string[];
};

export const SEGMENT_SLUGS = [
  'insurers',
  'digital-health',
  'sports',
  'research',
  'pharma',
  'gamification',
  'longevity',
] as const;

export type SegmentSlug = (typeof SEGMENT_SLUGS)[number];

export const segments: Record<SegmentSlug, SegmentContent> = {
  insurers: {
    slug: 'insurers',
    name: 'Health & Life Insurers',
    cardHeadline: 'Build better wearable-enabled prevention programs',
    cardDesc: 'Connect wearable and smartphone data, track quality and routines, and prepare signals for wellness and population insights.',
    heroTitle: 'Turn wearable data into usable member health signals.',
    heroSub:
      'Connect wearable and smartphone data across your programs, track data quality and behavioral routines over time, and prepare it for analytics and prevention programs.',
    primaryCta: 'Explore a pilot',
    secondaryCta: 'See the data flow',
    secondaryHref: '#data-flow',
    painEyebrow: 'The problem',
    painHeadline: 'You already have the signals. The hard part is making them useful.',
    painBody: [
      'Data arrives from many wearable providers without a shared structure.',
      'Engagement programs exist, but behavior over weeks and months is hard to see.',
      'Raw steps, sleep, and heart rate alone rarely create business value.',
      'Teams still need to know whether a gap is a real behavior change — or a device that stopped syncing.',
    ],
    painAside: 'More devices shouldn’t mean more infrastructure.',
    sources: ['Apple Watch', 'Garmin', 'Fitbit', 'Oura', 'Phone'],
    brokenBits: ['Different APIs', 'Missing data', 'Different formats', 'Disconnected timelines'],
    solutionEyebrow: 'How TechnoHealth fits',
    solutionHeadline: 'One path from devices to programs you can run.',
    solutionBlocks: [
      { title: 'Connect', desc: 'Bring data from multiple consumer wearables into one structure.' },
      { title: 'Trust', desc: 'See source, completeness, missingness, sync quality, and provenance.' },
      { title: 'Understand', desc: 'Track changes in activity, sleep, and daily routine across weeks or months.' },
    ],
    visual: 'member-timeline',
    visualCaption: 'Member timeline with routine change vs. device disconnect annotations.',
    valueHeadline: 'Build programs around behavior, not disconnected device metrics.',
    values: [
      'Faster rollout of wearable-enabled programs',
      'Less device-specific engineering',
      'More reliable behavioral data',
      'Longitudinal population insights',
      'Data ready for internal analytics or AI',
    ],
    whyHeadline: 'Why TechnoHealth',
    whyBody:
      'Connectivity is only the start. TechnoHealth adds quality, provenance, and longitudinal routine context so prevention and wellness teams can act on signals they can trust.',
    trustHeadline: 'Trust & data',
    trustItems: [
      'Provenance on every measurement',
      'Coverage and missingness visibility',
      'Designed for Québec Law 25 and Canadian privacy expectations',
      'Customer data stays under customer control',
    ],
    pilotHeadline: 'Explore a pilot with your next wearable program',
    pilotBody:
      'Bring one prevention or wellness workflow. We will connect sources, surface data quality, and show whether routine views create value for your team.',
    pilotCta: 'Explore a pilot',
    workflowLabel: 'Before / with TechnoHealth',
    flowBefore: ['5 devices', '5 APIs', 'Scripts', 'CSV cleanup', 'Analysis'],
    flowAfter: ['Devices', 'TechnoHealth', 'Provenance', 'Quality', 'Routine', 'Analytics / AI'],
  },

  'digital-health': {
    slug: 'digital-health',
    name: 'Digital Health & Remote Patient Monitoring',
    cardHeadline: 'Bring patient-generated data into your care workflow',
    cardDesc: 'Stop maintaining every device integration yourself. Get quality, provenance, and context your care product can use.',
    heroTitle: 'Bring wearable data into your care workflow — without building the entire data layer yourself.',
    heroSub:
      'TechnoHealth connects patient-generated data, tracks its quality and provenance, and prepares it for monitoring, analytics, and AI.',
    primaryCta: 'Test with one patient workflow',
    secondaryCta: 'See how data flows',
    secondaryHref: '#data-flow',
    painEyebrow: 'The problem',
    painHeadline: 'You already have a platform. You need reliable patient-generated data inside it.',
    painBody: [
      'Devices disconnect. Data syncs late. Patients stop wearing sensors.',
      'Sources differ — and data gaps get mistaken for health changes.',
      'Clinicians do not want raw sensor dumps; product teams still maintain every wearable API.',
      'AI models need structured, trustworthy inputs — not ad-hoc exports.',
    ],
    sources: ['Apple Watch', 'Garmin', 'BP monitor', 'Phone'],
    brokenBits: ['Your engineering team', 'Fragile pipelines', 'Clinical platform'],
    solutionEyebrow: 'How TechnoHealth fits',
    solutionHeadline: 'Devices → TechnoHealth → your clinical platform',
    solutionBlocks: [
      { title: 'Integrate once', desc: 'Patient devices feed TechnoHealth instead of a maze of one-off APIs.' },
      { title: 'Trust the signal', desc: 'Know when the patient changed — and when the data changed.' },
      { title: 'Ship context', desc: 'Give care teams routine and quality context around vitals and trends.' },
    ],
    visual: 'patient-signal',
    visualCaption: 'Behavioral change vs. data-quality issue — checked against coverage and sync.',
    valueHeadline: 'Less integration work. Better context. Cleaner data for clinical products.',
    values: [
      'Fewer wearable APIs for your team to maintain',
      'Clearer distinction between behavior and sensor failure',
      'Longitudinal sleep, activity, mobility, and routine context',
      'Analysis-ready streams for dashboards and models',
    ],
    whyHeadline: 'Why TechnoHealth',
    whyBody:
      'Digital health products need a dependable patient-generated data layer — not another dashboard. TechnoHealth sits under your care workflow and prepares data you can trust.',
    trustHeadline: 'Trust & data',
    trustItems: [
      'Provenance and sync visibility',
      'Role-ready data for care products',
      'Privacy-aware design for regulated teams',
      'Exportable, structured longitudinal records',
    ],
    pilotHeadline: 'Test TechnoHealth with one patient workflow',
    pilotBody:
      'Pick a monitoring path you already run. We will connect devices, surface quality and provenance, and show what care teams can use.',
    pilotCta: 'Start a workflow pilot',
    workflowLabel: 'Before / with TechnoHealth',
    flowBefore: ['Patient', 'Devices', 'Your engineering team', 'Clinical platform'],
    flowAfter: ['Devices', 'TechnoHealth', 'Quality + provenance', 'Your clinical platform'],
  },

  sports: {
    slug: 'sports',
    name: 'Sports Teams & Performance',
    cardHeadline: 'See every athlete in one performance view',
    cardDesc: 'Combine training, recovery, sleep, and activity across devices — without juggling separate systems.',
    heroTitle: 'Bring every athlete’s wearable data into one performance view.',
    heroSub:
      'Combine training, recovery, sleep and activity data across devices without forcing your performance team to manage separate systems.',
    primaryCta: 'Pilot with one team',
    secondaryCta: 'Contact us',
    secondaryHref: '/contact',
    painEyebrow: 'The problem',
    painHeadline: 'Your athletes train as one team. Their data lives in five different places.',
    painBody: [
      'Garmin, WHOOP, Apple Watch, GPS trackers — athletes do not all wear the same device.',
      'Coaches check multiple dashboards and export files by hand.',
      'Historical comparisons and team baselines are hard to maintain.',
      'Sleep, activity, and recovery context stays fragmented.',
    ],
    sources: ['Garmin', 'WHOOP', 'Apple Watch', 'GPS'],
    brokenBits: ['Separate dashboards', 'Manual exports', 'No shared baseline'],
    solutionEyebrow: 'How TechnoHealth fits',
    solutionHeadline: 'One athlete profile. The context coaches actually need.',
    solutionBlocks: [
      { title: 'Unify devices', desc: 'Pull training, sleep, HR, HRV, activity, and recovery into one athlete profile.' },
      { title: 'Know what is normal', desc: 'Compare each athlete to their own baseline — not a generic average.' },
      { title: 'Flag change early', desc: 'See sleep drops, activity shifts, and resting HR changes together.' },
    ],
    valueHeadline: 'Performance decisions with less dashboard hopping.',
    values: [
      'One view across mixed athlete devices',
      'Individual baselines instead of generic cutoffs',
      'Data-quality flags when a device goes offline',
      'Less time exporting, more time coaching',
    ],
    whyHeadline: 'Why TechnoHealth',
    whyBody:
      'Performance staff need clarity, not more charts. TechnoHealth collapses device fragmentation and highlights what changed for each athlete.',
    trustHeadline: 'Trust & data',
    trustItems: [
      'Clear data-quality status per athlete',
      'Provenance when sources differ',
      'Organization-controlled access',
      'Export when you need offline analysis',
    ],
    pilotHeadline: 'Pilot with one team',
    pilotBody:
      'Connect the wearables your roster already uses. We will stand up a single performance view and review what coaches find useful.',
    pilotCta: 'Pilot with one team',
    workflowLabel: 'Before / with TechnoHealth',
    flowBefore: ['Athletes', 'Mixed wearables', '5 dashboards', 'Exports'],
    flowAfter: ['Athletes', 'Wearables', 'TechnoHealth', 'Performance team'],
  },

  research: {
    slug: 'research',
    name: 'Research Organizations',
    cardHeadline: 'Start analyzing before your study becomes a data-engineering project',
    cardDesc: 'Ingest, align, document missingness, and export analysis-ready wearable datasets — with provenance.',
    heroTitle: 'Spend less time preparing wearable data and more time answering your research question.',
    heroSub:
      'Ingest multimodal sensor streams, preserve provenance, quantify missingness, and export analysis-ready study data.',
    primaryCta: 'Pilot on an existing dataset',
    secondaryCta: 'See the study workspace',
    secondaryHref: '#workflow',
    painEyebrow: 'The problem',
    painHeadline: 'The study starts with a health question. Too often, the first months become a data-engineering project.',
    painBody: [
      'Fitbit, Garmin, phones, and questionnaires arrive as separate files and ID schemes.',
      'Someone downloads, matches participants, aligns timestamps, tracks device changes, and rebuilds preprocessing for the next study.',
      'Missingness is poorly documented. Pipelines are hard to reproduce.',
    ],
    solutionEyebrow: 'How TechnoHealth fits',
    solutionHeadline: 'From raw sensor streams to analysis-ready study data.',
    solutionBlocks: [
      { title: 'Ingest & harmonize', desc: 'Multiple sources, aligned timestamps, participant isolation.' },
      { title: 'Provenance & coverage', desc: 'Track source, missingness, device changes, and data coverage over time.' },
      { title: 'Export for science', desc: 'Analysis-ready datasets for statistics, ML, and AI workflows.' },
    ],
    visual: 'study-workspace',
    visualCaption: 'One study workspace: participants, sources, coverage, timeline, export.',
    valueHeadline: 'Reproducibility built into the workflow.',
    values: [
      'Raw data → preprocessing version → derived variables → export version',
      'Less custom scripting between studies',
      'Documented missingness and device changes',
      'Routine and rhythm features without rebuilding pipelines',
    ],
    whyHeadline: 'Why TechnoHealth',
    whyBody:
      'Researchers should spend time on questions, not glue code. TechnoHealth keeps longitudinal wearable data organized, traceable, and ready to analyze.',
    trustHeadline: 'Trust & data',
    trustItems: [
      'Participant isolation',
      'Traceable transformations',
      'Coverage and missingness metrics',
      'Exportable, versionable datasets',
    ],
    pilotHeadline: 'Bring us one study — or an existing dataset',
    pilotBody:
      'We will map your sources into a study workspace, show coverage and provenance, and export a first analysis-ready slice.',
    pilotCta: 'Pilot on an existing dataset',
    workflowLabel: 'Before / with TechnoHealth',
    flowBefore: ['100 participants', '3 devices', '17 scripts', 'Unknown missingness'],
    flowAfter: ['Study workspace', 'Participants', 'Sources', 'Coverage', 'Timeline', 'Export'],
  },

  pharma: {
    slug: 'pharma',
    name: 'Pharmaceutical Companies',
    cardHeadline: 'Make wearable trial data easier to trace and analyze',
    cardDesc: 'Connect participant devices, preserve provenance, and prepare longitudinal sensor data for digital endpoints.',
    heroTitle: 'Bring wearable data into clinical studies without turning every trial into an integration project.',
    heroSub:
      'Connect participant devices, preserve data provenance, and prepare longitudinal sensor data for digital endpoints, analysis, and downstream models.',
    primaryCta: 'Explore a feasibility pilot',
    secondaryCta: 'See the data path',
    secondaryHref: '#data-flow',
    painEyebrow: 'The problem',
    painHeadline: 'A wearable looks simple — until it becomes another vendor, API, format, and validation pipeline.',
    painBody: [
      'Too many vendors and hard-to-trace transformations.',
      'Missing or delayed participant data.',
      'Inconsistent device outputs across sites and cohorts.',
      'Data that is not ready for endpoint analysis.',
    ],
    solutionEyebrow: 'How TechnoHealth fits',
    solutionHeadline: 'A sensor data layer for trials — designed for traceable workflows.',
    solutionBlocks: [
      { title: 'Device data', desc: 'Connect participant wearables without a new integration project each study.' },
      { title: 'Provenance & quality', desc: 'Keep a clear path from source measurement to structured records.' },
      { title: 'Longitudinal structure', desc: 'Prepare data for endpoints, statistics, and downstream models.' },
    ],
    visual: 'trial-lineage',
    visualCaption: 'Device data → provenance → quality checks → longitudinal structure → endpoint analysis.',
    valueHeadline: 'Not just access to wearable APIs. A traceable path from source data to analysis.',
    values: [
      'Fewer one-off trial integrations',
      'Clearer lineage for study teams',
      'Structured longitudinal sensor records',
      'Designed for traceable data workflows — not marketed as regulatory certification',
    ],
    whyHeadline: 'Why TechnoHealth',
    whyBody:
      'Pharma and clinical study teams need professionalism and conservatism in claims. TechnoHealth focuses on connection, provenance, and analysis-ready structure — without overstating regulatory status.',
    trustHeadline: 'Trust & data',
    trustItems: [
      'Audit-oriented provenance',
      'Access controls and exportability',
      'Version-aware data handling as the product matures',
      'No “regulatory compliant” claims without formal validation',
    ],
    pilotHeadline: 'Explore a feasibility pilot',
    pilotBody:
      'Scope one wearable endpoint path. We will assess integration effort, provenance, and whether TechnoHealth accelerates your study data workflow.',
    pilotCta: 'Explore a feasibility pilot',
    workflowLabel: 'Before / with TechnoHealth',
    flowBefore: ['Participant', 'Wearable vendor', 'Custom pipeline', 'Endpoint team'],
    flowAfter: ['Participant', 'Wearable', 'TechnoHealth', 'Endpoint analysis'],
  },

  gamification: {
    slug: 'gamification',
    name: 'Gamification & Challenge Apps',
    cardHeadline: 'Let users compete with the wearable they already own',
    cardDesc: 'Normalize activity from multiple platforms into one backend for challenges, leaderboards, and rewards.',
    heroTitle: 'Let users join with the wearable they already use.',
    heroSub:
      'Bring activity data from multiple wearable platforms into one backend for challenges, leaderboards and rewards.',
    primaryCta: 'Build your first challenge',
    secondaryCta: 'See the flow',
    secondaryHref: '#data-flow',
    painEyebrow: 'The problem',
    painHeadline: 'Your challenge should be hard. Connecting every wearable shouldn’t be.',
    painBody: [
      'Apple Health is live — then users ask for Garmin, Fitbit, Oura, and Android variants.',
      'Steps report differently across platforms. Sync latency creates leaderboard complaints.',
      'Support load grows with every new device integration.',
    ],
    sources: ['Apple Health', 'Garmin', 'Fitbit', 'Oura', 'Android'],
    brokenBits: ['Fragmented SDKs', 'Inconsistent steps', 'Sync latency', 'Support tickets'],
    solutionEyebrow: 'How TechnoHealth fits',
    solutionHeadline: 'Device → normalize activity → identity → rules → leaderboard',
    solutionBlocks: [
      { title: 'One integration', desc: 'Support the wearables your users already own.' },
      { title: 'Consistent activity', desc: 'Normalize streams so challenges stay fair.' },
      { title: 'Fewer sync fires', desc: 'Data-quality flags reduce leaderboard troubleshooting.' },
    ],
    visual: 'challenge-flow',
    visualCaption: 'From wearable join to challenge rules and rewards — with quality flags.',
    valueHeadline: 'Engagement features without an endless device backlog.',
    values: [
      'One integration surface',
      'Consistent activity data',
      'Less sync troubleshooting',
      'Historical activity for streaks and seasons',
      'Optional consistency / sleep-routine challenges as premium features',
    ],
    whyHeadline: 'Why TechnoHealth',
    whyBody:
      'Challenge products win on engagement. TechnoHealth removes device fragmentation so your team can ship challenges — not integrations.',
    trustHeadline: 'Trust & data',
    trustItems: [
      'Clear user consent paths',
      'Quality flags for suspicious gaps',
      'Customer-controlled challenge logic',
      'No silent reuse of user health data for unrelated AI training',
    ],
    pilotHeadline: 'Build your first challenge on TechnoHealth',
    pilotBody:
      'Wire one activity challenge end-to-end — join with existing wearables, normalize scores, and publish a leaderboard.',
    pilotCta: 'Build your first challenge',
    workflowLabel: 'Before / with TechnoHealth',
    flowBefore: ['User', 'Many SDKs', 'Inconsistent steps', 'Support load'],
    flowAfter: ['User wearable', 'TechnoHealth', 'Normalized activity', 'Leaderboard / rewards'],
  },

  longevity: {
    slug: 'longevity',
    name: 'Longevity & Preventive Care',
    cardHeadline: 'See the person between visits',
    cardDesc: 'Bring sleep, activity, and mobility into one longitudinal view — and notice when someone’s normal routine begins to change.',
    heroTitle: 'See the person between visits.',
    heroSub:
      'Bring sleep, activity, mobility and other wearable data into one longitudinal view, understand each client’s normal routine, and see when it begins to change.',
    primaryCta: 'Explore a pilot',
    secondaryCta: 'See the longitudinal view',
    secondaryHref: '#workflow',
    painEyebrow: 'The problem',
    painHeadline: 'Visits are snapshots. Longevity care needs the story between them.',
    painBody: [
      'Clients arrive with Apple Watch, Oura, Whoop, or clinic devices — rarely one clean feed.',
      'Practitioners see numbers, not whether this week is a true shift from that person’s baseline.',
      'Missing syncs get mistaken for lifestyle change.',
    ],
    sources: ['Watch', 'Ring', 'Phone', 'Clinic device'],
    brokenBits: ['Snapshot visits', 'Mixed devices', 'Unclear baselines'],
    solutionEyebrow: 'How TechnoHealth fits',
    solutionHeadline: 'Longitudinal context for preventive and longevity programs.',
    solutionBlocks: [
      { title: 'Unify streams', desc: 'Sleep, activity, mobility, and related signals in one timeline.' },
      { title: 'Personal normal', desc: 'Compare clients to their own rhythm — not a generic chart.' },
      { title: 'Spot real change', desc: 'Separate routine shifts from device coverage problems.' },
    ],
    visual: 'longevity-view',
    visualCaption: 'Personal baseline with a highlighted routine shift and coverage check.',
    valueHeadline: 'Prevention programs grounded in continuous context.',
    values: [
      'Clearer picture between appointments',
      'Less time wrestling device exports',
      'Routine and rhythm insights for coaching conversations',
      'Data ready for internal analytics',
    ],
    whyHeadline: 'Why TechnoHealth',
    whyBody:
      'Longevity and preventive care need continuous, trustworthy context. TechnoHealth is built around longitudinal wearable data, quality, and routine — not one-off metrics.',
    trustHeadline: 'Trust & data',
    trustItems: [
      'Provenance and coverage on the timeline',
      'Privacy-aware design for sensitive health context',
      'Customer-controlled data',
      'No disease-diagnosis claims',
    ],
    pilotHeadline: 'Explore a longevity or prevention pilot',
    pilotBody:
      'Connect the devices your clients already use. We will show longitudinal routines, quality flags, and whether the view helps between-visit care.',
    pilotCta: 'Explore a pilot',
    workflowLabel: 'Before / with TechnoHealth',
    flowBefore: ['Client', 'Mixed wearables', 'Exports', 'Visit snapshot'],
    flowAfter: ['Client', 'Wearables', 'TechnoHealth', 'Longitudinal view', 'Care conversation'],
  },
};

export function getSegment(slug: string): SegmentContent | undefined {
  return segments[slug as SegmentSlug];
}

export const segmentList = SEGMENT_SLUGS.map((slug) => segments[slug]);
