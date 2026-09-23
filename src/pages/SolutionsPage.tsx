import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { segmentList } from '../config/segments';

const IMAGES: Record<string, string> = {
  insurers: '/Images/segments/insurers-v2.jpg',
  'digital-health': '/Images/segments/digital-v2.jpg',
  sports: '/Images/segments/fitness-v7.jpg',
  research: '/Images/segments/research-v2.jpg',
  pharma: '/Images/segments/pharma-v2.jpg',
  gamification: '/Images/segments/gamification.jpg',
};

/** Original six customer segments */
const DISPLAY_ORDER = [
  'insurers',
  'digital-health',
  'sports',
  'research',
  'pharma',
  'gamification',
] as const;

export default function SolutionsPage() {
  useEffect(() => {
    document.title = 'Solutions | TechnoHealth';
    return () => {
      document.title = 'TechnoHealth. Wearable health data infrastructure';
    };
  }, []);

  const ordered = DISPLAY_ORDER.map((slug) => segmentList.find((s) => s.slug === slug)!).filter(Boolean);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-surface)' }}>
      <Header />

      <section className="pt-28 pb-12 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="g-wordmark text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Who we build for
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            Each customer buys TechnoHealth for a different reason. Pick your segment — the story, pain, and pilot path are specific to you.
          </p>
        </div>
      </section>

      <section className="pb-20 px-5">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-8">
          {ordered.map((segment) => (
            <Link
              key={segment.slug}
              to={`/solutions/${segment.slug}`}
              className="group block no-underline text-left"
            >
              <div className="overflow-hidden mb-4 aspect-[16/10]">
                <img
                  src={IMAGES[segment.slug]}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <p className="text-xs font-medium mb-1" style={{ color: 'var(--color-text-tertiary)' }}>
                {segment.name}
              </p>
              <h2 className="text-lg font-semibold tracking-tight mb-2" style={{ color: 'var(--color-brand-blue)' }}>
                {segment.cardHeadline}
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {segment.cardDesc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
