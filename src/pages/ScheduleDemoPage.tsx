import { useEffect } from 'react';
import { Mail, Check, Clock, Shield, Zap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { buildCalEmbedUrl, getCalLink } from '../lib/demoRequest';

const highlights = [
  {
    icon: Zap,
    title: 'See the product live',
    text: 'Walk through wearable integrations, APIs, and clinical workflows with Melika.',
  },
  {
    icon: Clock,
    title: '30-minute 1:1',
    text: 'Pick a time that works for you — same-day or next-day slots when available.',
  },
  {
    icon: Shield,
    title: 'Built for healthcare',
    text: 'HIPAA-ready, self-hosted options, and enterprise-grade data control.',
  },
];

export default function ScheduleDemoPage() {
  const calLink = getCalLink();
  const calUrl = buildCalEmbedUrl();

  useEffect(() => {
    document.title = 'Book a Demo | TechnoHealth';
    return () => {
      document.title = 'TechnoHealth - Wearable Data. Clinical Grade. At Scale.';
    };
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-surface)' }}>
      <Header />

      <main>
        {/* Spike-style hero */}
        <section
          className="pt-28 pb-10 md:pt-32 md:pb-12"
          style={{ backgroundColor: 'var(--color-surface-alt)' }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <p
              className="text-sm font-medium mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              Book a demo
            </p>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-tight mb-5"
              style={{ color: 'var(--color-text)' }}
            >
              Schedule a personalized demo with our team
            </h1>
            <p
              className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              TechnoHealth enables health apps to integrate wearables and health platforms
              without building an expensive backend — one API, clinical-grade data, live in days.
            </p>
          </div>
        </section>

        {/* Value points */}
        <section className="py-10 border-b" style={{ borderColor: 'var(--color-border)' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 grid sm:grid-cols-3 gap-6">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-3 text-left">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: 'var(--color-surface-chip)' }}
                  >
                    <Icon className="w-5 h-5" style={{ color: 'var(--color-primary)' }} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-1" style={{ color: 'var(--color-text)' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Host + calendar — main booking surface */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div
              className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 p-5 rounded-gcard border"
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              <img
                src="/Images/Me.png"
                alt="Melika Seyedi"
                className="w-16 h-16 rounded-full object-cover shrink-0"
              />
              <div className="flex-1">
                <p className="font-medium text-lg" style={{ color: 'var(--color-text)' }}>
                  Melika Seyedi
                </p>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  Co-Founder · Personalized product demo
                </p>
                <a
                  href="mailto:melika@technohealth.ai"
                  className="inline-flex items-center gap-1.5 text-sm mt-1 no-underline hover:underline"
                  style={{ color: 'var(--color-primary)' }}
                >
                  <Mail className="w-3.5 h-3.5" strokeWidth={1.75} />
                  melika@technohealth.ai
                </a>
              </div>
              <ul className="sm:text-right space-y-1.5">
                {['30 minutes', 'Video or call', 'No commitment'].map((t) => (
                  <li
                    key={t}
                    className="flex sm:justify-end items-center gap-1.5 text-sm"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    <Check className="w-4 h-4" style={{ color: 'var(--color-google-green)' }} strokeWidth={2.5} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-gcard border overflow-hidden"
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div
                className="px-5 py-4 border-b"
                style={{
                  borderColor: 'var(--color-border)',
                  backgroundColor: 'var(--color-surface-alt)',
                }}
              >
                <h2 className="text-base font-medium" style={{ color: 'var(--color-text)' }}>
                  Pick a time that works for you
                </h2>
                <p className="text-sm mt-0.5" style={{ color: 'var(--color-text-secondary)' }}>
                  Select a slot below to book your demo.
                </p>
              </div>

              {calLink && calUrl ? (
                <iframe
                  title="Schedule a TechnoHealth demo"
                  src={calUrl}
                  className="w-full border-0 block"
                  style={{ minHeight: 720, height: 'min(80vh, 900px)' }}
                  loading="lazy"
                />
              ) : (
                <div className="px-6 py-16 text-center space-y-4">
                  <p style={{ color: 'var(--color-text-secondary)' }}>
                    Calendar is temporarily unavailable. Email Melika to book a time.
                  </p>
                  <a
                    href="mailto:melika@technohealth.ai?subject=Book%20a%20demo"
                    className="g-btn-primary inline-flex no-underline"
                  >
                    Email to schedule
                  </a>
                </div>
              )}
            </div>

            <p
              className="text-center text-sm mt-6"
              style={{ color: 'var(--color-text-tertiary)' }}
            >
              Prefer email?{' '}
              <a
                href="mailto:melika@technohealth.ai"
                className="hover:underline"
                style={{ color: 'var(--color-primary)' }}
              >
                melika@technohealth.ai
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
