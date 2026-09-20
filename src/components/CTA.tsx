import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-20 md:py-24"
      style={{ backgroundColor: 'var(--color-surface-alt)' }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="g-section-title">
          Ready to simplify wearable integration?
        </h2>
        <p className="g-section-sub max-w-xl mx-auto">
          Most teams go live in about a week. Book a short demo and we will walk you through it.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10 mb-10">
          <Link
            to="/schedule-demo"
            className="g-btn-primary no-underline"
            style={{ color: 'var(--color-text-on-primary)' }}
          >
            <span>Book a demo</span>
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </Link>
          <Link to="/contact" className="g-btn-secondary no-underline">
            <span>Ask a question</span>
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
