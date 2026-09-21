import { useState } from 'react';
import { Cable, BrainCircuit, Bot, Activity, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getSiteCopy } from '../config/siteCopy';
import apiImg from '../assets/platform/wear.jpg';
import monitoringImg from '../assets/platform/health-monitoring.png';
import mcpImg from '../assets/platform/mcp_n3.jpg';

type PlatformTab = {
  id: string;
  label: string;
  blurb: string;
  intro: string;
  image?: string;
  imageAlt?: string;
  icon: typeof Cable;
  accent: string;
  features: { title: string; desc: string }[];
  visual: 'image' | 'monitoring';
};

function ModelRunsPanel({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  const runs = [
    {
      name: 'hr_risk_v3',
      status: 'Finished',
      accuracy: '0.941',
      f1: '0.918',
      duration: '12m',
      best: true,
    },
    {
      name: 'readiness_lstm',
      status: 'Finished',
      accuracy: '0.903',
      f1: '0.887',
      duration: '28m',
      best: false,
    },
    {
      name: 'sleep_quality_xgb',
      status: 'Running',
      accuracy: '—',
      f1: '—',
      duration: '4m',
      best: false,
    },
  ];

  return (
    <div
      className="h-full flex flex-col border-t lg:border-t-0 lg:border-l"
      style={{
        borderColor: 'var(--color-border)',
        backgroundColor: 'var(--color-surface)',
      }}
    >
      <div
        className="px-4 py-3 flex items-center justify-between border-b"
        style={{ borderColor: 'var(--color-border)', backgroundColor: '#F8FBFF' }}
      >
        <div>
          <div className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>
            {title}
          </div>
          <div className="text-xs mt-0.5" style={{ color: 'var(--color-text-tertiary)' }}>
            {subtitle}
          </div>
        </div>
        <span
          className="text-[11px] font-medium px-2 py-1"
          style={{ backgroundColor: 'var(--color-surface-info)', color: 'var(--color-brand-blue)' }}
        >
          MLflow-style
        </span>
      </div>

      <div className="px-4 py-3 grid grid-cols-3 gap-2 border-b" style={{ borderColor: 'var(--color-border)' }}>
        {[
          { label: 'Best accuracy', value: '0.941' },
          { label: 'Runs', value: '18' },
          { label: 'Active', value: '1' },
        ].map((metric) => (
          <div key={metric.label} className="text-center">
            <div className="text-base font-semibold" style={{ color: 'var(--color-brand-blue)' }}>
              {metric.value}
            </div>
            <div className="text-[11px]" style={{ color: 'var(--color-text-tertiary)' }}>
              {metric.label}
            </div>
          </div>
        ))}
      </div>

      <div className="overflow-x-auto flex-1">
        <table className="w-full text-left text-xs md:text-sm">
          <thead>
            <tr style={{ color: 'var(--color-text-tertiary)', backgroundColor: 'var(--color-surface-alt)' }}>
              <th className="px-4 py-2 font-medium">Run</th>
              <th className="px-3 py-2 font-medium">Status</th>
              <th className="px-3 py-2 font-medium">Accuracy</th>
              <th className="px-3 py-2 font-medium">F1</th>
              <th className="px-3 py-2 font-medium">Time</th>
            </tr>
          </thead>
          <tbody>
            {runs.map((run) => (
              <tr
                key={run.name}
                className="border-t"
                style={{
                  borderColor: 'var(--color-border)',
                  backgroundColor: run.best ? '#F0F7FF' : 'transparent',
                }}
              >
                <td className="px-4 py-2.5 font-medium" style={{ color: 'var(--color-text)' }}>
                  <span className="inline-flex items-center gap-1.5">
                    {run.best && <CheckCircle2 className="w-3.5 h-3.5" style={{ color: 'var(--color-success)' }} />}
                    {run.name}
                  </span>
                </td>
                <td className="px-3 py-2.5">
                  <span
                    className="inline-flex px-2 py-0.5 text-[11px] font-medium"
                    style={{
                      backgroundColor:
                        run.status === 'Running' ? '#FEF7E0' : 'var(--color-surface-success)',
                      color: run.status === 'Running' ? '#B06000' : 'var(--color-success)',
                    }}
                  >
                    {run.status}
                  </span>
                </td>
                <td className="px-3 py-2.5 tabular-nums" style={{ color: 'var(--color-text)' }}>
                  {run.accuracy}
                </td>
                <td className="px-3 py-2.5 tabular-nums" style={{ color: 'var(--color-text)' }}>
                  {run.f1}
                </td>
                <td className="px-3 py-2.5" style={{ color: 'var(--color-text-secondary)' }}>
                  {run.duration}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function BenefitsPillars() {
  const { language } = useLanguage();
  const t = getSiteCopy(language);

  const tabs: PlatformTab[] = [
    {
      id: 'api',
      label: t.platformTab1,
      blurb: t.platformTab1Blurb,
      intro: t.platformTab1Intro,
      image: apiImg,
      imageAlt: 'Fitness wearable showing live activity data',
      icon: Cable,
      accent: 'var(--color-brand-blue)',
      visual: 'image',
      features: [
        { title: t.platformTab1F1Title, desc: t.platformTab1F1Desc },
        { title: t.platformTab1F2Title, desc: t.platformTab1F2Desc },
        { title: t.platformTab1F3Title, desc: t.platformTab1F3Desc },
      ],
    },
    {
      id: 'training',
      label: t.platformTab2,
      blurb: t.platformTab2Blurb,
      intro: t.platformTab2Intro,
      icon: BrainCircuit,
      accent: 'var(--color-brand-blue-mid)',
      visual: 'monitoring',
      features: [
        { title: t.platformTab2F1Title, desc: t.platformTab2F1Desc },
        { title: t.platformTab2F2Title, desc: t.platformTab2F2Desc },
        { title: t.platformTab2F3Title, desc: t.platformTab2F3Desc },
      ],
    },
    {
      id: 'mcp',
      label: t.platformTab3,
      blurb: t.platformTab3Blurb,
      intro: t.platformTab3Intro,
      image: mcpImg,
      imageAlt: 'AI agent connected to a health data network',
      icon: Bot,
      accent: 'var(--color-brand-blue-deep)',
      visual: 'image',
      features: [
        { title: t.platformTab3F1Title, desc: t.platformTab3F1Desc },
        { title: t.platformTab3F2Title, desc: t.platformTab3F2Desc },
        { title: t.platformTab3F3Title, desc: t.platformTab3F3Desc },
      ],
    },
  ];

  const [activeId, setActiveId] = useState(tabs[0].id);
  const active = tabs.find((tab) => tab.id === activeId) ?? tabs[0];
  const ActiveIcon = active.icon;

  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 50% 0%, #E8F0FE 0%, var(--color-surface) 55%)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
          <h2 className="g-wordmark text-3xl md:text-4xl font-medium tracking-tight mb-3">
            {t.platformTitle}
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {t.platformSub}
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-3 md:gap-4 mb-10 md:mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === activeId;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveId(tab.id)}
                className="text-left p-4 md:p-5 transition-all duration-300 border bg-transparent cursor-pointer"
                style={{
                  borderColor: isActive ? tab.accent : 'var(--color-border)',
                  backgroundColor: isActive ? 'var(--color-surface)' : 'transparent',
                  boxShadow: isActive ? 'var(--shadow-elevated)' : 'none',
                  transform: isActive ? 'translateY(-2px)' : 'none',
                }}
                aria-pressed={isActive}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center mb-3"
                  style={{
                    backgroundColor: isActive ? 'var(--color-surface-info)' : 'var(--color-surface-chip)',
                    color: tab.accent,
                  }}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div
                  className="text-base font-semibold tracking-tight mb-1"
                  style={{ color: isActive ? 'var(--color-text)' : 'var(--color-text-secondary)' }}
                >
                  {tab.label}
                </div>
                <p className="text-sm leading-snug" style={{ color: 'var(--color-text-tertiary)' }}>
                  {tab.blurb}
                </p>
              </button>
            );
          })}
        </div>

        <div
          key={active.id}
          className="border overflow-hidden"
          style={{
            borderColor: 'var(--color-border)',
            backgroundColor: 'var(--color-surface)',
            boxShadow: 'var(--shadow-card)',
            animation: 'platformFade 320ms ease-out',
          }}
        >
          {active.visual === 'monitoring' ? (
            <div className="grid lg:grid-cols-12">
              <div className="lg:col-span-7 relative bg-[#F3F6FA]">
                <div
                  className="px-4 py-2.5 flex items-center gap-2 border-b text-sm font-medium"
                  style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                >
                  <Activity className="w-4 h-4" style={{ color: active.accent }} />
                  {t.platformMonitorLabel}
                </div>
                <img
                  src={monitoringImg}
                  alt={t.platformMonitorAlt}
                  className="w-full h-auto object-contain object-top max-h-[360px] md:max-h-[420px]"
                  loading="lazy"
                />
              </div>
              <div className="lg:col-span-5 min-h-[280px]">
                <ModelRunsPanel title={t.platformRunsTitle} subtitle={t.platformRunsSub} />
              </div>
              <div
                className="lg:col-span-12 p-6 md:p-8 border-t grid md:grid-cols-2 gap-8"
                style={{ borderColor: 'var(--color-border)' }}
              >
                <p
                  className="text-lg font-medium tracking-tight leading-snug md:col-span-2"
                  style={{ color: 'var(--color-text)' }}
                >
                  {active.intro}
                </p>
                {active.features.map((feature, index) => (
                  <div key={feature.title} className="flex gap-4">
                    <div
                      className="shrink-0 w-8 h-8 flex items-center justify-center text-sm font-semibold"
                      style={{
                        backgroundColor: 'var(--color-surface-info)',
                        color: active.accent,
                      }}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <h3
                        className="text-base font-semibold tracking-tight mb-1.5"
                        style={{ color: 'var(--color-text)' }}
                      >
                        {feature.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid lg:grid-cols-12">
              <div className="lg:col-span-5 relative min-h-[240px] md:min-h-[420px]">
                <img
                  src={active.image}
                  alt={active.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(13,71,161,0.35) 0%, transparent 45%)',
                  }}
                />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                  <div
                    className="w-9 h-9 flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(255,255,255,0.92)', color: active.accent }}
                  >
                    <ActiveIcon className="w-4 h-4" strokeWidth={1.75} />
                  </div>
                  <span className="text-sm font-medium text-white drop-shadow">{active.label}</span>
                </div>
              </div>

              <div className="lg:col-span-7 p-6 md:p-10 flex flex-col justify-center">
                <p
                  className="text-lg md:text-xl font-medium tracking-tight leading-snug mb-8"
                  style={{ color: 'var(--color-text)' }}
                >
                  {active.intro}
                </p>
                <div className="space-y-6">
                  {active.features.map((feature, index) => (
                    <div key={feature.title} className="flex gap-4">
                      <div
                        className="shrink-0 w-8 h-8 flex items-center justify-center text-sm font-semibold"
                        style={{
                          backgroundColor: 'var(--color-surface-info)',
                          color: active.accent,
                        }}
                      >
                        {index + 1}
                      </div>
                      <div>
                        <h3
                          className="text-base font-semibold tracking-tight mb-1.5"
                          style={{ color: 'var(--color-text)' }}
                        >
                          {feature.title}
                        </h3>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: 'var(--color-text-secondary)' }}
                        >
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes platformFade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
