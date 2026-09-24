import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

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

      <section className="relative min-h-[88vh] flex items-end overflow-hidden pt-16">
        <img
          src="/Images/about/hero-wearable.jpg"
          alt="Wearable health device on a wrist"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(1,58,82,0.92) 0%, rgba(1,58,82,0.72) 42%, rgba(8,122,156,0.35) 100%)',
          }}
        />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 pb-16 md:pb-20 pt-28">
          <p className="text-2xl sm:text-3xl font-medium mb-6 text-white tracking-tight">
            TechnoHealth
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-[44px] font-semibold tracking-tight leading-[1.15] text-white max-w-3xl mb-8">
            Your wearable data is connected. But can you actually trust and use it?
          </h1>
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

      <Footer />
    </div>
  );
}
