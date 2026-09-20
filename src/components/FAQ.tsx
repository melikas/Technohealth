import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getSiteCopy } from '../config/siteCopy';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);
  const { language } = useLanguage();
  const t = getSiteCopy(language);

  const faqs = [
    { question: t.faq1q, answer: t.faq1a },
    { question: t.faq2q, answer: t.faq2a },
    { question: t.faq3q, answer: t.faq3a },
    { question: t.faq4q, answer: t.faq4a },
    { question: t.faq5q, answer: t.faq5a },
    { question: t.faq6q, answer: t.faq6a },
  ];

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
          <h2 className="g-section-title">{t.faqTitle}</h2>
          <p className="g-section-sub">{t.faqSub}</p>
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
            {t.faqMore}
          </h3>
          <p className="text-sm mb-6" style={{ color: 'var(--color-text-secondary)' }}>
            {t.faqCtaBody}
          </p>
          <Link to="/schedule-demo" className="g-btn-primary no-underline">
            {t.faqSchedule}
          </Link>
        </div>
      </div>
    </section>
  );
}
