import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getSiteCopy } from '../config/siteCopy';

export default function UseCaseShowcase() {
  const { language } = useLanguage();
  const t = getSiteCopy(language);

  const showcases = [
    {
      industry: t.useCase1Industry,
      company: t.useCase1Company,
      stat: t.useCase1Stat,
      testimonial: t.useCase1Quote,
    },
    {
      industry: t.useCase2Industry,
      company: t.useCase2Company,
      stat: t.useCase2Stat,
      testimonial: t.useCase2Quote,
    },
    {
      industry: t.useCase3Industry,
      company: t.useCase3Company,
      stat: t.useCase3Stat,
      testimonial: t.useCase3Quote,
    },
    {
      industry: t.useCase4Industry,
      company: t.useCase4Company,
      stat: t.useCase4Stat,
      testimonial: t.useCase4Quote,
    },
    {
      industry: t.useCase5Industry,
      company: t.useCase5Company,
      stat: t.useCase5Stat,
      testimonial: t.useCase5Quote,
    },
    {
      industry: t.useCase6Industry,
      company: t.useCase6Company,
      stat: t.useCase6Stat,
      testimonial: t.useCase6Quote,
    },
  ];

  return (
    <section
      className="py-20 md:py-24 border-t"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="g-section-title">{t.useCasesTitle}</h2>
          <p className="g-section-sub max-w-2xl mx-auto">{t.useCasesSub}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {showcases.map((showcase) => (
            <div
              key={showcase.industry}
              className="p-6 rounded-gcard border transition-shadow hover:shadow-gcard"
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'var(--color-surface-chip)' }}
                >
                  <MessageCircle
                    className="w-4 h-4"
                    style={{ color: 'var(--color-primary)' }}
                    strokeWidth={1.75}
                  />
                </div>
                <div>
                  <h3 className="text-base font-medium" style={{ color: 'var(--color-text)' }}>
                    {showcase.industry}
                  </h3>
                  <p className="text-sm mt-0.5" style={{ color: 'var(--color-text-secondary)' }}>
                    {showcase.company}
                  </p>
                </div>
              </div>

              <div
                className="rounded-lg p-4 mb-4"
                style={{ backgroundColor: 'var(--color-surface-alt)' }}
              >
                <p
                  className="text-sm leading-relaxed italic"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  &ldquo;{showcase.testimonial}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: 'var(--color-success)' }}
                />
                <span className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                  {showcase.stat}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-1.5 text-sm font-medium no-underline hover:underline"
            style={{ color: 'var(--color-primary)' }}
          >
            {t.readCaseStudies}
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
