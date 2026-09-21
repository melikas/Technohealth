import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getSiteCopy } from '../config/siteCopy';

export default function UseCaseShowcase() {
  const { language } = useLanguage();
  const t = getSiteCopy(language);

  const segments = [
    { title: t.segment1Title, desc: t.segment1Desc },
    { title: t.segment2Title, desc: t.segment2Desc },
    { title: t.segment3Title, desc: t.segment3Desc },
    { title: t.segment4Title, desc: t.segment4Desc },
    { title: t.segment5Title, desc: t.segment5Desc },
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {segments.map((segment) => (
            <Link
              key={segment.title}
              to="/schedule-demo"
              className="block p-6 rounded-gcard border text-left no-underline transition-shadow hover:shadow-gcard"
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              <h3 className="text-base font-medium tracking-tight mb-2" style={{ color: 'var(--color-text)' }}>
                {segment.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {segment.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
