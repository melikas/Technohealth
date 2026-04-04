import { Link } from 'react-router-dom';

export default function IntegrationShowcase() {
  const integrations = [
    'Apple Watch',
    'Fitbit Inspire',
    'Fitbit Charge 6',
    'Fitbit Sense',
    'Oura Ring',
    'WHOOP Strap',
    'Samsung Galaxy Watch',
    'Google Fit',
    'Empatica Embrace',
    'Actiwatch',
    'Polar Sports',
    'Garmin',
    'Withings',
    'Dexcom',
    'Samsung Health',
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Works With Everything Your Patients Have
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Apple Watch, Fitbit, Oura, WHOOP, Empatica, and 15+ other devices. Add a new wearable in minutes.
          </p>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {integrations.map((platform, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-xl p-6 flex items-center justify-center text-center hover:shadow-lg hover:border-cyan-300 transition-all group"
            >
              <span className="font-semibold text-slate-900 group-hover:text-cyan-600 transition-colors">
                {platform}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/platform"
            className="inline-flex items-center gap-2 text-cyan-600 font-bold hover:text-cyan-700 transition-colors text-lg"
          >
            View All Integrations →
          </Link>
        </div>
      </div>
    </section>
  );
}
