import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'How fast can you get us live?',
    answer:
      'Typically 7 days. We identify your wearables, set up integrations, and deploy to production. Your team starts analyzing data immediately.',
  },
  {
    question: 'Which devices do you support?',
    answer:
      'Apple Watch, Fitbit, Oura, WHOOP, Samsung Galaxy Watch, Garmin, Withings, Dexcom, Empatica, Polar, and 5+ more. One unified API for all of them.',
  },
  {
    question: 'What metrics can clinicians see?',
    answer:
      'Heart rate trends, sleep quality, activity patterns, biological rhythms, risk stratification scores, and custom metrics you define. All interpretable and actionable.',
  },
  {
    question: 'How much does it cost?',
    answer:
      "Self-hosted: $600-$6,000/year depending on scale. Cloud: $1,000-$10,000/year. No per-user fees. That's 90% cheaper than SaaS platforms.",
  },
  {
    question: 'Is our patient data secure?',
    answer:
      'Completely. HIPAA compliant, HITRUST certified, SOC 2 audited, and self-hosted on your infrastructure. Your data never leaves your servers.',
  },
  {
    question: 'Can it connect to our EHR?',
    answer:
      'Yes. FHIR-compliant export works with Epic, Cerner, and other systems. Real-time API feeds available for custom workflows.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section
      className="py-20 md:py-24 border-t"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
      }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="g-section-title">Frequently asked questions</h2>
          <p className="g-section-sub">Quick answers to your most important questions</p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-gcard border"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderColor: isOpen ? 'var(--color-primary)' : 'var(--color-border)',
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left transition-colors"
                  style={{
                    backgroundColor: isOpen ? 'var(--color-surface-alt)' : 'transparent',
                  }}
                >
                  <span className="text-base font-medium" style={{ color: 'var(--color-text)' }}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    style={{ color: 'var(--color-text-secondary)' }}
                    strokeWidth={1.75}
                  />
                </button>

                {isOpen && (
                  <div
                    className="px-5 pb-5 border-t"
                    style={{ borderColor: 'var(--color-border)' }}
                  >
                    <p
                      className="pt-4 text-sm leading-relaxed"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div
          className="mt-12 rounded-gcard border p-8 md:p-10 text-center"
          style={{
            backgroundColor: 'var(--color-surface-alt)',
            borderColor: 'var(--color-border)',
          }}
        >
          <h3 className="text-xl font-normal mb-2" style={{ color: 'var(--color-text)' }}>
            Still have questions?
          </h3>
          <p className="text-sm mb-6" style={{ color: 'var(--color-text-secondary)' }}>
            Our team is ready to discuss your specific clinical requirements
          </p>
          <Link to="/schedule-demo" className="g-btn-primary no-underline">
            Schedule a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
