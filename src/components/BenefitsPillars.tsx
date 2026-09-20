import { Zap, CheckCircle, Database, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getSiteCopy } from '../config/siteCopy';

export default function BenefitsPillars() {
  const { language } = useLanguage();
  const t = getSiteCopy(language);

  const benefits = [
    {
      icon: Zap,
      title: t.benefit1Title,
      description: t.benefit1Desc,
      color: 'var(--color-brand-blue-light)',
    },
    {
      icon: CheckCircle,
      title: t.benefit2Title,
      description: t.benefit2Desc,
      color: 'var(--color-brand-blue)',
    },
    {
      icon: Database,
      title: t.benefit3Title,
      description: t.benefit3Desc,
      color: 'var(--color-brand-blue-mid)',
    },
    {
      icon: Shield,
      title: t.benefit4Title,
      description: t.benefit4Desc,
      color: 'var(--color-brand-blue-deep)',
    },
  ];

  return (
    <section
      className="py-20 md:py-24"
      style={{ backgroundColor: 'var(--color-surface-alt)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="g-section-title">{t.benefitsTitle}</h2>
          <p className="g-section-sub max-w-2xl mx-auto">{t.benefitsSub}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="p-6 rounded-gcard border transition-shadow hover:shadow-gcard"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderColor: 'var(--color-border)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                  style={{ backgroundColor: 'var(--color-surface-chip)' }}
                >
                  <Icon className="w-6 h-6" style={{ color: benefit.color }} strokeWidth={1.75} />
                </div>
                <h3 className="text-base font-medium mb-2" style={{ color: 'var(--color-text)' }}>
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
