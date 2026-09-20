import { Zap, CheckCircle, Database, Shield, Check } from 'lucide-react';

export default function BenefitsPillars() {
  const benefits = [
    {
      icon: Zap,
      title: 'Days, Not Months',
      description: 'Go from zero to live data integration in 7 days. No custom development required.',
      color: 'var(--color-google-yellow)',
    },
    {
      icon: CheckCircle,
      title: 'One API for All',
      description: 'Stop building separate integrations for each device. Add Apple, Fitbit, Oura from your dashboard.',
      color: 'var(--color-google-blue)',
    },
    {
      icon: Database,
      title: 'Your Infrastructure',
      description: 'Deploy on your servers. Own your data. No recurring per-user fees or vendor lock-in.',
      color: 'var(--color-google-green)',
    },
    {
      icon: Shield,
      title: 'Enterprise Ready',
      description: 'HIPAA compliant, SOC 2 audited, role-based access control. Built for regulated industries.',
      color: 'var(--color-google-red)',
    },
  ];

  const enterprise = [
    'HIPAA Compliant',
    'SOC 2 Type II Audited',
    '99.9% Uptime SLA',
    'Data Governance',
  ];

  return (
    <section
      className="py-20 md:py-24"
      style={{ backgroundColor: 'var(--color-surface-alt)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="g-section-title">The fastest way to unify your data</h2>
          <p className="g-section-sub max-w-2xl mx-auto">
            Seven days from signing to production. Own your data pipeline.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="p-6 rounded-gcard border transition-shadow hover:shadow-gcard"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderColor: 'var(--color-border)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                  style={{ backgroundColor: 'var(--color-surface-chip)' }}
                >
                  <Icon className="w-6 h-6" style={{ color: benefit.color }} strokeWidth={1.75} />
                </div>
                <h3 className="text-base font-medium mb-2" style={{ color: 'var(--color-text)' }}>
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div
          className="mt-12 rounded-gcard border p-6 md:p-8"
          style={{
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
          }}
        >
          <p
            className="text-center text-xs font-medium uppercase tracking-wider mb-8"
            style={{ color: 'var(--color-text-tertiary)' }}
          >
            Built for enterprise
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {enterprise.map((item) => (
              <div key={item} className="flex flex-col items-center text-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'var(--color-surface-success)' }}
                >
                  <Check className="w-5 h-5" style={{ color: 'var(--color-google-green)' }} strokeWidth={2.5} />
                </div>
                <span className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
