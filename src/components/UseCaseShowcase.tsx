import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function UseCaseShowcase() {
  const showcases = [
    {
      industry: 'Remote Patient Monitoring',
      company: 'Digital Health Platform',
      stat: '+25% Readmission Reduction',
      testimonial:
        'TechnoHealth unified our wearable integrations in 4 weeks. We now monitor 10,000+ patients with real-time alerts.',
    },
    {
      industry: 'Clinical Research',
      company: 'Medical Research Institute',
      stat: '5,000+ Study Participants',
      testimonial:
        'Finally, continuous objective data from research subjects without custom device integrations.',
    },
    {
      industry: 'Corporate Wellness',
      company: 'Fortune 500 Company',
      stat: '30,000 Employees Tracked',
      testimonial:
        'Population-level health insights while keeping data on-premise. Mission-critical for compliance.',
    },
    {
      industry: 'Precision Medicine',
      company: 'Healthcare System',
      stat: '+40% Treatment Success',
      testimonial:
        'Correlated wearable data with clinical outcomes. Personalized medicine at scale.',
    },
    {
      industry: 'Digital Therapeutics',
      company: 'MedTech Company',
      stat: '+50% Patient Engagement',
      testimonial:
        'Real-time biometric feedback powers our AI-driven health coaching platform.',
    },
    {
      industry: 'Aging Care',
      company: 'Senior Living Network',
      stat: '15,000+ Residents',
      testimonial:
        'Proactive health monitoring. Alerts caregivers before clinical events occur.',
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
        <div className="text-center mb-12">
          <h2 className="g-section-title">Real world results</h2>
          <p className="g-section-sub max-w-2xl mx-auto">
            Hospitals, researchers, and wellness companies use TechnoHealth today
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {showcases.map((showcase) => (
            <div
              key={showcase.industry}
              className="p-6 rounded-gcard border transition-shadow hover:shadow-gcard"
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'var(--color-surface-chip)' }}
                >
                  <MessageCircle
                    className="w-4 h-4"
                    style={{ color: 'var(--color-primary)' }}
                    strokeWidth={1.75}
                  />
                </div>
                <div>
                  <h3 className="text-base font-medium" style={{ color: 'var(--color-text)' }}>
                    {showcase.industry}
                  </h3>
                  <p className="text-sm mt-0.5" style={{ color: 'var(--color-text-secondary)' }}>
                    {showcase.company}
                  </p>
                </div>
              </div>

              <div
                className="rounded-lg p-4 mb-4"
                style={{ backgroundColor: 'var(--color-surface-alt)' }}
              >
                <p
                  className="text-sm leading-relaxed italic"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  &ldquo;{showcase.testimonial}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: 'var(--color-success)' }}
                />
                <span className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                  {showcase.stat}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-1.5 text-sm font-medium no-underline hover:underline"
            style={{ color: 'var(--color-primary)' }}
          >
            View case studies
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
