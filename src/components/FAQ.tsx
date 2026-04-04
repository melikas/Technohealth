import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: '🚀 How fast can you get us live?',
    answer: 'Typically 7 days. We identify your wearables, set up integrations, and deploy to production. Your team starts analyzing data immediately.'
  },
  {
    question: '✅ Which devices do you support?',
    answer: 'Apple Watch, Fitbit, Oura, WHOOP, Samsung Galaxy Watch, Garmin, Withings, Dexcom, Empatica, Polar, and 5+ more. One unified API for all of them.'
  },
  {
    question: '💡 What metrics can clinicians see?',
    answer: 'Heart rate trends, sleep quality, activity patterns, biological rhythms, risk stratification scores, and custom metrics you define. All interpretable and actionable.'
  },
  {
    question: '💰 How much does it cost?',
    answer: 'Self-hosted: $600-$6,000/year depending on scale. Cloud: $1,000-$10,000/year. No per-user fees. That\'s 90% cheaper than SaaS platforms.'
  },
  {
    question: '🔒 Is our patient data secure?',
    answer: 'Completely. HIPAA compliant, HITRUST certified, SOC 2 audited, and self-hosted on your infrastructure. Your data never leaves your servers.'
  },
  {
    question: '🏥 Can it connect to our EHR?',
    answer: 'Yes. FHIR-compliant export works with Epic, Cerner, and other systems. Real-time API feeds available for custom workflows.'
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600">
            Quick answers to your most important questions
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-cyan-300 transition-all"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <span className="text-left text-lg font-semibold text-slate-900">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-cyan-600 transition-transform flex-shrink-0 ${
                    openIdx === idx ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {openIdx === idx && (
                <div className="px-8 pb-6 border-t border-slate-100">
                  <p className="text-slate-700 leading-relaxed text-base">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl p-12 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-cyan-100 mb-8">
            Our team is ready to discuss your specific clinical requirements
          </p>
          <a
            href="#"
            className="inline-block px-8 py-3 bg-white text-cyan-600 rounded-lg font-bold hover:bg-slate-100 transition-colors"
          >
            Schedule a Demo
          </a>
        </div>
      </div>
    </section>
  );
}
