import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getSiteCopy } from '../config/siteCopy';
import insurersImg from '../assets/segments/insurers-v2.jpg';
import digitalImg from '../assets/segments/digital-v2.jpg';
import fitnessImg from '../assets/segments/fitness-v7.jpg';
import researchImg from '../assets/segments/research-v2.jpg';
import pharmaImg from '../assets/segments/pharma-v2.jpg';
import gamificationImg from '../assets/segments/gamification.jpg';

export default function UseCaseShowcase() {
  const { language } = useLanguage();
  const t = getSiteCopy(language);

  const segments = [
    {
      title: t.segment1Title,
      desc: t.segment1Desc,
      image: insurersImg,
      alt: 'Health and life insurance member programs',
      to: '/solutions/insurers',
    },
    {
      title: t.segment2Title,
      desc: t.segment2Desc,
      image: digitalImg,
      alt: 'Digital health clinician using a tablet',
      to: '/solutions/digital-health',
    },
    {
      title: t.segment3Title,
      desc: t.segment3Desc,
      image: fitnessImg,
      alt: 'Athlete wearing a smartwatch during training',
      objectPosition: 'center',
      to: '/solutions/sports',
    },
    {
      title: t.segment4Title,
      desc: t.segment4Desc,
      image: researchImg,
      alt: 'Medical research laboratory',
      to: '/solutions/research',
    },
    {
      title: t.segment5Title,
      desc: t.segment5Desc,
      image: pharmaImg,
      alt: 'Pharma team with tablet and clinical monitor',
      to: '/solutions/pharma',
    },
    {
      title: t.segment6Title,
      desc: t.segment6Desc,
      image: gamificationImg,
      alt: 'Friends celebrating a fitness challenge with wearables',
      to: '/solutions/gamification',
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
          <h2 className="g-wordmark text-3xl md:text-4xl font-medium tracking-tight">
            {t.useCasesTitle}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 max-w-5xl mx-auto">
          {segments.map((segment) => (
            <Link
              key={segment.to}
              to={segment.to}
              className="group block text-left no-underline"
            >
              <div className="overflow-hidden mb-4 aspect-[4/3]">
                <img
                  src={segment.image}
                  alt={segment.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  style={
                    'objectPosition' in segment && segment.objectPosition
                      ? { objectPosition: segment.objectPosition }
                      : undefined
                  }
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
