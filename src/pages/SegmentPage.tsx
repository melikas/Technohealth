import { Link, Navigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getSegment, type SegmentSlug } from '../config/segments';

const HERO_IMAGES: Record<SegmentSlug, string> = {
  insurers: '/Images/segments/insurers-v2.jpg',
  'digital-health': '/Images/segments/digital-v2.jpg',
  sports: '/Images/segments/fitness-v7.jpg',
  research: '/Images/segments/research-v2.jpg',
  pharma: '/Images/segments/pharma-v2.jpg',
  gamification: '/Images/segments/gamification.jpg',
  longevity: '/Images/segments/digital-v2.jpg',
};

export default function SegmentPage() {
  const { slug } = useParams<{ slug: string }>();
  const segment = slug ? getSegment(slug) : undefined;

  if (!segment || !slug) {
    return <Navigate to="/solutions" replace />;
  }

  const typedSlug = slug as SegmentSlug;

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-surface)' }}>
      <Header />

      <section className="relative min-h-[88vh] flex items-end overflow-hidden pt-16">
        <img
          src={HERO_IMAGES[typedSlug]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(1,58,82,0.94) 0%, rgba(1,58,82,0.78) 45%, rgba(8,122,156,0.4) 100%)',
          }}
        />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 pb-14 md:pb-20 pt-24">
          <p className="text-sm font-medium text-white/80 mb-3 tracking-wide">{segment.name}</p>
          <h1 className="text-3xl sm:text-4xl md:text-[42px] font-semibold tracking-tight leading-[1.15] text-white max-w-3xl mb-5">
            {segment.heroTitle}
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed mb-8">
            {segment.heroSub}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/schedule-demo" className="g-btn-primary no-underline text-center min-w-[180px]">
              {segment.primaryCta}
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center min-w-[180px] px-6 py-2.5 text-sm font-medium rounded-full border no-underline transition-colors"
              style={{
                color: '#FFFFFF',
                borderColor: 'rgba(255,255,255,0.45)',
                backgroundColor: 'rgba(255,255,255,0.12)',
              }}
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
