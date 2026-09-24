import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const changePoints = [
  {
    title: 'Spend less time preparing data',
    body: 'and more time using it.',
  },
  {
    title: 'Trust the data they work with',
    body: 'by keeping provenance, quality, and missingness visible.',
  },
  {
    title: 'See the person over time',
    body: 'instead of looking at isolated measurements.',
  },
  {
    title: 'Move faster from data to product',
    body: 'whether that means a dashboard, a model, an AI agent, a research study, or a clinical workflow.',
  },
];

const audiences = [
  {
    title: 'Longevity & preventive-care clinics',
    body: 'Understand clients between visits and follow changes in routine over time.',
    to: '/solutions/longevity',
  },
  {
    title: 'Digital health & remote monitoring companies',
    body: 'Bring patient-generated data into existing products and care workflows.',
    to: '/solutions/digital-health',
  },
  {
    title: 'Research organizations',
    body: 'Work with multimodal longitudinal data without rebuilding the data pipeline for every study.',
    to: '/solutions/research',
  },
  {
    title: 'Other health-data teams',
    body: 'Use structured, traceable data as a foundation for analytics and AI.',
    to: '/solutions',
  },
];

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About | TechnoHealth';
    return () => {
      document.title = 'TechnoHealth. Wearable health data infrastructure';
    };
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-surface)' }}>
      <Header />

      <section className="relative min-h-[78vh] flex items-end overflow-hidden pt-16">
        <img
          src="/Images/about/hero-digital-health.jpg"
          alt="Smartwatch health metrics beside a digital health analytics dashboard"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(1,58,82,0.92) 0%, rgba(1,58,82,0.72) 42%, rgba(8,122,156,0.35) 100%)',
          }}
        />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 pb-14 md:pb-18 pt-28">
          <p className="text-sm font-medium text-white/80 mb-3 tracking-wide">About TechnoHealth</p>
          <h1 className="text-3xl sm:text-4xl md:text-[42px] font-semibold tracking-tight leading-[1.15] text-white max-w-3xl mb-5">
            Health data is everywhere. Using it still shouldn&apos;t be this hard.
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed mb-8">
            Your Unified Layer for Wearable Data, Analytics, and AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/schedule-demo" className="g-btn-primary no-underline text-center min-w-[160px]">
              Book a demo
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center min-w-[160px] px-6 py-2.5 text-sm font-medium rounded-full border no-underline transition-colors"
              style={{
                color: '#FFFFFF',
                borderColor: 'rgba(255,255,255,0.45)',
                backgroundColor: 'rgba(255,255,255,0.12)',
              }}
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-20 px-5">
        <div className="max-w-3xl mx-auto space-y-5 text-[15px] sm:text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          <p>
            Wearables and smartphones are already collecting more health data than most teams know what
            to do with. The problem is rarely access to data. The problem is turning data from different
            devices, formats, and time scales into something that can actually be trusted, analyzed, and
            used.
          </p>
          <p className="font-medium" style={{ color: 'var(--color-text)' }}>
            TechnoHealth was built to close that gap.
          </p>
          <p>
            We bring wearable and smartphone data into one secure workspace, organize it into a
            consistent structure, preserve where it came from and how it was collected, and make it ready
            for dashboards, analysis, machine-learning models, and AI agents.
          </p>
          <p>
            Alongside the data itself, TechnoHealth helps teams see the bigger picture over time —
            including routine, rhythm, sleep, activity, mobility, heart rate, and other behavioral and
            physiological patterns.
          </p>
        </div>
      </section>

      {/* What we want to change */}
      <section className="py-16 md:py-20 px-5" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] mb-3" style={{ color: 'var(--color-brand-blue)' }}>
            What we want to change
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-snug mb-4 max-w-2xl" style={{ color: 'var(--color-text)' }}>
            Health teams shouldn&apos;t have to spend weeks rebuilding pipelines before they can answer a
            useful question.
          </h2>
          <p className="text-[15px] leading-relaxed mb-10 max-w-2xl" style={{ color: 'var(--color-text-secondary)' }}>
            We want to help them:
          </p>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {changePoints.map((point) => (
              <div key={point.title}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-brand-blue)' }}>
                  {point.title}
                </h3>
                <p className="text-[15px] leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we’re building for */}
      <section className="py-16 md:py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] mb-3" style={{ color: 'var(--color-brand-blue)' }}>
            Who we&apos;re building for
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-snug mb-4 max-w-2xl" style={{ color: 'var(--color-text)' }}>
            Teams that already work with continuous health data
          </h2>
          <p className="text-[15px] leading-relaxed mb-10 max-w-2xl" style={{ color: 'var(--color-text-secondary)' }}>
            TechnoHealth is being designed for teams that already work with continuous health data,
            including:
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            {audiences.map((item) => (
              <Link key={item.title} to={item.to} className="block no-underline group">
                <h3
                  className="text-lg font-semibold mb-2 group-hover:underline"
                  style={{ color: 'var(--color-brand-blue)' }}
                >
                  {item.title}
                </h3>
                <p className="text-[15px] leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {item.body}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
