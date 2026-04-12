import { Link } from 'react-router-dom';

export default function IntegrationShowcase() {
  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Text Center */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Works With Everything Your Patients Have
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore TechnoHealth's available data sources, both API and SDK options, to find the best fit for your integration.
          </p>
        </div>

        {/* Image Below */}
        <div className="flex justify-center mb-12">
          <div className="w-full h-full bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
            <img 
              src="/Images/devices.png" 
              alt="TechnoHealth Devices"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/data-sources"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all text-lg"
          >
            DATA SOURCES →
          </Link>
        </div>
      </div>
    </section>
  );
}
