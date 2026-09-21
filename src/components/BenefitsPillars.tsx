import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getSiteCopy } from '../config/siteCopy';
import apiImg from '../assets/platform/api.jpg';
import trainingImg from '../assets/platform/train2.jpg';
import mcpImg from '../assets/platform/mcp.jpg';

type PlatformTab = {
  id: string;
  label: string;
  intro: string;
  image: string;
  imageAlt: string;
  features: { title: string; desc: string }[];
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
      imageAlt: 'Health data API dashboard',
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
      image: trainingImg,
      imageAlt: 'Health model training charts',
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
      imageAlt: 'AI agents connected to health data',
      features: [
        { title: t.platformTab3F1Title, desc: t.platformTab3F1Desc },
        { title: t.platformTab3F2Title, desc: t.platformTab3F2Desc },
        { title: t.platformTab3F3Title, desc: t.platformTab3F3Desc },
      ],
    },
  ];

  const [activeId, setActiveId] = useState(tabs[0].id);
  const active = tabs.find((tab) => tab.id === activeId) ?? tabs[0];

  return (
    <section
      className="py-20 md:py-24"
      style={{ backgroundColor: 'var(--color-surface-alt)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 mb-12">
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

        <div key={active.id} className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div>
            <p
              className="text-base md:text-lg leading-relaxed mb-8"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {active.intro}
            </p>

            <div className="space-y-7">
              {active.features.map((feature) => (
                <div key={feature.title}>
                  <h3
                    className="text-lg font-medium tracking-tight mb-2"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-sm md:text-[15px] leading-relaxed"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="overflow-hidden border"
            style={{
              borderColor: 'var(--color-border)',
              backgroundColor: 'var(--color-surface)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <img
              src={active.image}
              alt={active.imageAlt}
              className="w-full h-full min-h-[260px] md:min-h-[360px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
