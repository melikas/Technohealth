import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getSiteCopy } from '../config/siteCopy';

type PlatformTab = {
  id: string;
  label: string;
  intro: string;
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
      features: [
        { title: t.platformTab1F1Title, desc: t.platformTab1F1Desc },
        { title: t.platformTab1F2Title, desc: t.platformTab1F2Desc },
        { title: t.platformTab1F3Title, desc: t.platformTab1F3Desc },
        { title: t.platformTab1F4Title, desc: t.platformTab1F4Desc },
      ],
    },
    {
      id: 'training',
      label: t.platformTab2,
      intro: t.platformTab2Intro,
      features: [
        { title: t.platformTab2F1Title, desc: t.platformTab2F1Desc },
        { title: t.platformTab2F2Title, desc: t.platformTab2F2Desc },
        { title: t.platformTab2F3Title, desc: t.platformTab2F3Desc },
        { title: t.platformTab2F4Title, desc: t.platformTab2F4Desc },
      ],
    },
    {
      id: 'mcp',
      label: t.platformTab3,
      intro: t.platformTab3Intro,
      features: [
        { title: t.platformTab3F1Title, desc: t.platformTab3F1Desc },
        { title: t.platformTab3F2Title, desc: t.platformTab3F2Desc },
        { title: t.platformTab3F3Title, desc: t.platformTab3F3Desc },
        { title: t.platformTab3F4Title, desc: t.platformTab3F4Desc },
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-10">
          {tabs.map((tab) => {
            const isActive = tab.id === activeId;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveId(tab.id)}
                className="relative pb-3 text-sm md:text-base font-medium tracking-wide uppercase transition-colors bg-transparent border-0 cursor-pointer"
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
          className="border-t pt-10"
          style={{ borderColor: 'var(--color-border)' }}
          key={active.id}
        >
          <p
            className="text-center text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {active.intro}
          </p>

          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8 max-w-3xl mx-auto">
            {active.features.map((feature) => (
              <div key={feature.title} className="text-left">
                <h3
                  className="text-base font-semibold tracking-tight mb-2"
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
