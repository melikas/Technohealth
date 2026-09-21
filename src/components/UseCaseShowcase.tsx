import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getSiteCopy } from '../config/siteCopy';

export default function UseCaseShowcase() {
  const { language } = useLanguage();
  const t = getSiteCopy(language);

  const segments = [
    {
      title: t.segment1Title,
      desc: t.segment1Desc,
      image: '/Images/segments/insurers.jpg',
      alt: 'Health and life insurance planning',
    },
    {
      title: t.segment2Title,
      desc: t.segment2Desc,
      image: '/Images/segments/digital.jpg',
      alt: 'Digital health and remote patient monitoring',
    },
    {
      title: t.segment3Title,
      desc: t.segment3Desc,
      image: '/Images/segments/fitness.jpg',
      alt: 'Fitness and wellness training',
    },
    {
      title: t.segment4Title,
      desc: t.segment4Desc,
      image: '/Images/segments/research.jpg',
      alt: 'Medical research laboratory',
    },
    {
      title: t.segment5Title,
      desc: t.segment5Desc,
      image: '/Images/segments/pharma.jpg',
      alt: 'Pharmaceutical research and medicine',
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
        <div className="text-center mb-14">
          <h2 className="g-section-title">{t.useCasesTitle}</h2>
          <p className="g-section-sub max-w-2xl mx-auto">{t.useCasesSub}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 max-w-5xl mx-auto">
          {segments.map((segment) => (
            <Link
              key={segment.title}
              to="/schedule-demo"
              className="group block text-left no-underline"
            >
              <div className="overflow-hidden mb-4 aspect-[4/3]">
                <img
                  src={segment.image}
                  alt={segment.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <h3
                className="text-base font-semibold tracking-tight mb-1.5"
                style={{ color: 'var(--color-brand-blue)' }}
              >
                {segment.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {segment.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
