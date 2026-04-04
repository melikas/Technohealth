import { Link } from 'react-router-dom';

export default function IntegrationShowcase() {
  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Works With Everything Your Patients Have
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Explore TechnoHealth's available data sources, both API and SDK options, to find the best fit for your integration.
            </p>
            <Link
              to="/data-sources"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all text-lg"
            >
              DATA SOURCES →
            </Link>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <div className="w-full h-96 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl overflow-hidden border border-cyan-400/30 shadow-2xl">
              <img 
                src="/Images/devices.png" 
                alt="TechnoHealth Devices"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
