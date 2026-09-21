import { Link } from 'react-router-dom';
import { Cable, BrainCircuit, Bot, Zap, Radio, Rocket } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getSiteCopy } from '../config/siteCopy';

export default function Hero() {
  const { language } = useLanguage();
  const t = getSiteCopy(language);

  const metrics = [
    {
      title: t.metric1Title,
      description: t.metric1Desc,
      accent: 'var(--color-brand-blue-deep)',
      icon: Cable,
    },
    {
      title: t.metric2Title,
      description: t.metric2Desc,
      accent: 'var(--color-brand-blue)',
      icon: BrainCircuit,
    },
    {
      title: t.metric3Title,
      description: t.metric3Desc,
      accent: 'var(--color-brand-blue-mid)',
      icon: Bot,
    },
  ];

  const points = [
    {
      title: t.heroPoint1Title,
      desc: t.heroPoint1Desc,
      icon: Zap,
      accent: 'var(--color-brand-blue-deep)',
    },
    {
      title: t.heroPoint2Title,
      desc: t.heroPoint2Desc,
      icon: Radio,
      accent: 'var(--color-brand-blue)',
    },
    {
      title: t.heroPoint3Title,
      desc: t.heroPoint3Desc,
      icon: Rocket,
      accent: 'var(--color-brand-blue-mid)',
    },
  ];

  return (
    <section
      className="pt-28 pb-20 md:pt-32 md:pb-24 relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-14">
          <h1 className="g-wordmark text-4xl sm:text-5xl md:text-[56px] font-medium tracking-tight leading-tight mb-2">
            TechnoHealth
          </h1>

          <p
            className="text-base md:text-lg mt-5 max-w-2xl leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {t.heroTagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Link
              to="/schedule-demo"
              className="g-btn-primary no-underline min-w-[140px]"
              style={{ color: 'var(--color-text-on-primary)' }}
            >
              {t.bookDemo}
            </Link>
            <Link
              to="/schedule-demo"
              className="g-btn-secondary no-underline min-w-[140px]"
            >
              {t.scheduleDemo}
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 lg:gap-14 items-center mb-16">
          <div className="lg:col-span-2">
            <img
              src="/Images/Picture2.png"
              alt="TechnoHealth data flow from wearables to API dashboard"
              className="w-full h-auto object-contain"
            />
          </div>

          <ul className="relative space-y-0 lg:pl-1">
            {points.map((point, index) => {
              const Icon = point.icon;
              const isLast = index === points.length - 1;
              return (
                <li key={point.title} className="relative flex gap-4 pb-8 last:pb-0">
                  {!isLast && (
                    <span
                      className="absolute left-[19px] top-11 bottom-0 w-px"
                      style={{ backgroundColor: 'var(--color-border)' }}
                      aria-hidden
                    />
                  )}
                  <div
                    className="relative z-[1] shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: 'var(--color-surface-info)',
                      color: point.accent,
                      boxShadow: '0 0 0 4px var(--color-surface)',
                    }}
                  >
                    <Icon className="w-[18px] h-[18px]" strokeWidth={1.75} />
                  </div>
                  <div className="pt-1.5 min-w-0">
                    <p
                      className="text-lg font-semibold tracking-tight leading-snug"
                      style={{ color: 'var(--color-text)' }}
                    >
                      {point.title}
                    </p>
                    <p
                      className="text-[15px] mt-1.5 leading-relaxed"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      {point.desc}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.title}
                className="flex flex-col items-start text-left h-full px-6 py-7 rounded-2xl"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  boxShadow: '0 1px 2px rgba(60,64,67,0.06), 0 10px 28px rgba(26,115,232,0.06)',
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: 'var(--color-surface-info)', color: metric.accent }}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h3
                  className="text-xl md:text-[22px] font-semibold tracking-tight leading-snug mb-2"
                  style={{ color: 'var(--color-text)' }}
                >
                  {metric.title}
                </h3>
                <p
                  className="text-sm md:text-[15px] leading-relaxed"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {metric.description}
                </p>
                <span
                  className="mt-auto h-0.5 w-10 rounded-full"
                  style={{ backgroundColor: metric.accent }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
