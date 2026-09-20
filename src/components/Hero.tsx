import { Link } from 'react-router-dom';
import { Search, Mic, Check } from 'lucide-react';

export default function Hero() {
  const metrics = [
    {
      number: '+100',
      label: 'Data Resources',
      description: 'Integrated data platforms',
      accent: 'var(--color-google-blue)',
    },
    {
      number: 'AI',
      label: 'Advanced ML Models',
      description: 'Predicting health, powering care',
      accent: 'var(--color-google-green)',
    },
    {
      number: '+30%',
      label: 'Efficiency Boost',
      description: 'Developer time saved',
      accent: 'var(--color-google-yellow)',
    },
  ];

  const trustItems = ['HIPAA Compliant', 'HITRUST Certified', 'SOC 2 Type II', 'Self-Hosted'];

  return (
    <section
      className="pt-28 pb-20 md:pt-32 md:pb-24 relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-14">
          <h1 className="text-4xl sm:text-5xl md:text-[56px] font-normal tracking-tight leading-tight mb-2">
            <span style={{ color: 'var(--color-google-blue)' }}>T</span>
            <span style={{ color: 'var(--color-google-red)' }}>e</span>
            <span style={{ color: 'var(--color-google-yellow)' }}>c</span>
            <span style={{ color: 'var(--color-google-blue)' }}>h</span>
            <span style={{ color: 'var(--color-google-green)' }}>n</span>
            <span style={{ color: 'var(--color-google-red)' }}>o</span>
            <span style={{ color: 'var(--color-text-secondary)' }}>Health</span>
          </h1>

          <p
            className="text-xl md:text-2xl font-normal mt-4 max-w-2xl leading-snug"
            style={{ color: 'var(--color-text)' }}
          >
            Wearables integration for your health tracking app
          </p>

          <p
            className="text-base md:text-lg mt-4 max-w-xl leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Connect wearables and health platforms with one integration. We build digital products that accelerate healthcare services.
          </p>

          {/* Google-style search affordance */}
          <div className="g-search mt-10 max-w-[584px] w-full cursor-default">
            <Search className="w-5 h-5 shrink-0" style={{ color: 'var(--color-text-tertiary)' }} strokeWidth={1.75} />
            <span
              className="flex-1 text-left text-base px-3 truncate"
              style={{ color: 'var(--color-text-tertiary)' }}
            >
              Search devices, APIs, docs…
            </span>
            <Mic className="w-5 h-5 shrink-0" style={{ color: 'var(--color-google-blue)' }} strokeWidth={1.75} />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Link
              to="/schedule-demo"
              className="g-btn-primary no-underline min-w-[140px]"
              style={{ color: 'var(--color-text-on-primary)' }}
            >
              Book a demo
            </Link>
            <Link
              to="/schedule-demo"
              className="g-btn-secondary no-underline min-w-[140px]"
            >
              Schedule a demo
            </Link>
          </div>
        </div>

        <div className="flex justify-center mb-16">
          <div
            className="w-full max-w-3xl overflow-hidden rounded-gcard border"
            style={{ borderColor: 'var(--color-border)', boxShadow: 'var(--shadow-card)' }}
          >
            <img
              src="/Images/hero-second.png"
              alt="TechnoHealth wearable integration"
              className="w-full h-auto object-cover max-h-80 md:max-h-96"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="p-6 text-left rounded-gcard border transition-shadow hover:shadow-gcard"
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              <div className="text-4xl font-normal mb-2" style={{ color: metric.accent }}>
                {metric.number}
              </div>
              <h3 className="text-base font-medium mb-1" style={{ color: 'var(--color-text)' }}>
                {metric.label}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className="rounded-gcard border px-6 py-5 text-center"
          style={{
            backgroundColor: 'var(--color-surface-alt)',
            borderColor: 'var(--color-border)',
          }}
        >
          <p
            className="text-xs font-medium uppercase tracking-wider mb-4"
            style={{ color: 'var(--color-text-tertiary)' }}
          >
            Enterprise-grade security
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {trustItems.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 text-sm"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                <Check className="w-4 h-4" style={{ color: 'var(--color-google-green)' }} strokeWidth={2.5} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
