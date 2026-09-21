import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cable, BrainCircuit, Bot } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getSiteCopy } from '../config/siteCopy';
import apiImg from '../assets/platform/api-integration.png';
import monitoringImg from '../assets/platform/health-monitoring.png';
import routinesImg from '../assets/platform/routine-anomalies.png';
import mcpImg from '../assets/platform/mcp-icon.png';

type PlatformTab = {
  id: string;
  label: string;
  intro: string;
  image: string;
  imageAlt: string;
  icon: typeof Cable;
  accent: string;
  features: { title: string; desc: string }[];
  media: 'icon' | 'shot' | 'cover';
  /** Second screenshot stacked under the first (Health Monitoring) */
  secondaryImage?: string;
  secondaryImageAlt?: string;
};

export default function BenefitsPillars() {
  const { language } = useLanguage();
  const t = getSiteCopy(language);

  const tabs: PlatformTab[] = [
    {
      id: 'api',
      label: t.platformTab1,
      intro: t.platformTab1Intro,
      image: apiImg,
      imageAlt: 'TechnoHealth connecting wearables and devices through one API',
      icon: Cable,
      accent: 'var(--color-brand-blue)',
      media: 'icon',
      features: [
        { title: t.platformTab1F1Title, desc: t.platformTab1F1Desc },
        { title: t.platformTab1F2Title, desc: t.platformTab1F2Desc },
        { title: t.platformTab1F3Title, desc: t.platformTab1F3Desc },
      ],
    },
    {
      id: 'training',
      label: t.platformTab2,
      intro: t.platformTab2Intro,
      image: monitoringImg,
      imageAlt: t.platformMonitorAlt,
      secondaryImage: routinesImg,
      secondaryImageAlt: t.platformMonitorAltRoutines,
      icon: BrainCircuit,
      accent: 'var(--color-brand-blue-mid)',
      media: 'shot',
      features: [
        { title: t.platformTab2F1Title, desc: t.platformTab2F1Desc },
        { title: t.platformTab2F2Title, desc: t.platformTab2F2Desc },
        { title: t.platformTab2F3Title, desc: t.platformTab2F3Desc },
      ],
    },
    {
      id: 'mcp',
      label: t.platformTab3,
      intro: t.platformTab3Intro,
      image: mcpImg,
      imageAlt: 'Devices connected to an AI brain through MCP',
      icon: Bot,
      accent: 'var(--color-brand-blue-deep)',
      media: 'icon',
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
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 mb-10 md:mb-12">
          {tabs.map((tab) => {
            const isActive = tab.id === activeId;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveId(tab.id)}
                className="relative pb-3 text-base md:text-lg font-medium tracking-tight transition-colors bg-transparent border-0 cursor-pointer"
                style={{
                  color: isActive ? 'var(--color-brand-blue)' : 'var(--color-text-secondary)',
                }}
                aria-pressed={isActive}
              >
                {tab.label}
                <span
                  className="absolute left-0 right-0 bottom-0 h-0.5 rounded-full transition-opacity"
                  style={{
                    backgroundColor: 'var(--color-brand-blue)',
                    opacity: isActive ? 1 : 0,
                  }}
                />
              </button>
            );
          })}
        </div>

        <div
          key={active.id}
          className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center overflow-hidden"
          style={{ animation: 'platformFade 320ms ease-out' }}
        >
          <div
            className={`${
              active.id === 'mcp' ? 'lg:col-span-6' : 'lg:col-span-5'
            } flex flex-col items-center justify-center ${
              active.media === 'cover'
                ? 'relative min-h-[240px] md:min-h-[420px]'
                : active.id === 'mcp'
                  ? 'bg-white py-2 md:py-4 px-1'
                  : 'bg-transparent py-2 md:py-4'
            }`}
          >
            {active.media === 'cover' ? (
              <>
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
              </>
            ) : active.secondaryImage ? (
              <div className="relative w-full max-w-[520px]">
                <img
                  src={active.image}
                  alt={active.imageAlt}
                  className="relative z-0 w-full h-auto object-contain object-top bg-white rounded-md"
                  loading="lazy"
                />
                {/* Second shot sits over the first, shifted a bit lower */}
                <img
                  src={active.secondaryImage}
                  alt={active.secondaryImageAlt || ''}
                  className="relative z-10 w-[94%] h-auto object-contain object-top mx-auto -mt-8 md:-mt-12 rounded-md bg-[#F8FAFC]"
                  style={{
                    boxShadow: '0 14px 36px rgba(15, 23, 42, 0.16)',
                  }}
                  loading="lazy"
                />
              </div>
            ) : (
              <img
                src={active.image}
                alt={active.imageAlt}
                className={
                  active.media === 'icon'
                    ? active.id === 'mcp'
                      ? 'w-full max-w-[540px] h-auto object-contain scale-105'
                      : 'w-full max-w-[420px] h-auto object-contain'
                    : 'w-full h-auto max-h-[440px] object-contain object-top'
                }
                loading="lazy"
              />
            )}
          </div>

          <div
            className={`${
              active.id === 'mcp' ? 'lg:col-span-6' : 'lg:col-span-7'
            } p-6 md:p-10 flex flex-col justify-center`}
          >
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
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {active.id === 'api' && (
              <div className="mt-8">
                <Link to="/docs#api" className="g-btn-primary no-underline">
                  {t.platformApiDocsCta}
                </Link>
              </div>
            )}
          </div>
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
