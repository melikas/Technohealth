import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function IntegrationShowcase() {
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
          <h2 className="g-section-title">Works with everything your patients have</h2>
          <p className="g-section-sub max-w-2xl mx-auto">
            Explore TechnoHealth&apos;s available data sources, both API and SDK options, to find the best fit for your integration.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div
            className="w-full overflow-hidden rounded-gcard border"
            style={{
              borderColor: 'var(--color-border)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <img
              src="/Images/devices.png"
              alt="TechnoHealth supported devices"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="text-center">
          <Link to="/data-sources" className="g-btn-primary no-underline">
            Data sources
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
