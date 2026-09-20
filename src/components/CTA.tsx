import { ArrowRight, Mail } from 'lucide-react';
import { openRequestDemo } from '../lib/demoRequest';

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-20 md:py-24"
      style={{ backgroundColor: 'var(--color-surface-alt)' }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="g-section-title">
          Ready to simplify your wearable integration?
        </h2>
        <p className="g-section-sub max-w-xl mx-auto">
          From chaos to clarity in 7 days. Let&apos;s get your platform live.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10 mb-10">
          <button type="button" onClick={openRequestDemo} className="g-btn-primary">
            <span>Request a demo</span>
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </button>
          <button type="button" onClick={openRequestDemo} className="g-btn-secondary">
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </button>
        </div>

        <div
          className="inline-flex flex-col items-center gap-1 px-6 py-4 rounded-gcard border"
          style={{
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
          }}
        >
          <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            Questions? Email us:
          </p>
          <a
            href="mailto:hello@technohealth.ai"
            className="inline-flex items-center gap-2 text-sm font-medium no-underline hover:underline"
            style={{ color: 'var(--color-primary)' }}
          >
            <Mail className="w-4 h-4" strokeWidth={1.75} />
            hello@technohealth.ai
          </a>
        </div>
      </div>
    </section>
  );
}
