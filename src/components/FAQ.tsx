import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'How fast can you get us live?',
    answer:
      'Usually about 7 days. We identify your wearables, set up the integrations, and deploy to production so your team can start using the data right away.',
  },
  {
    question: 'Which devices do you support?',
    answer:
      'Apple Watch, Fitbit, Oura, WHOOP, Samsung Galaxy Watch, Garmin, Withings, Dexcom, Empatica, Polar, and more. You get one API for all of them.',
  },
  {
    question: 'What metrics can clinicians see?',
    answer:
      'Heart rate trends, sleep quality, activity patterns, biological rhythms, risk scores, and custom metrics you define. Everything is meant to be clear and useful.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'Self hosted plans start around $600 to $6,000 per year depending on scale. Cloud plans start around $1,000 to $10,000 per year. There are no per user fees.',
  },
  {
    question: 'Is our patient data secure?',
    answer:
      'Yes. TechnoHealth is HIPAA compliant, HITRUST certified, and SOC 2 audited. You can also self host so data stays on your infrastructure.',
  },
  {
    question: 'Can it connect to our EHR?',
    answer:
      'Yes. FHIR compliant export works with Epic, Cerner, and other systems. Real time API feeds are available for custom workflows.',
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
          <p className="g-section-sub">Short answers to the questions we hear most often</p>
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
            Our team is happy to talk through your clinical requirements.
          </p>
          <Link to="/schedule-demo" className="g-btn-primary no-underline">
            Schedule a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
