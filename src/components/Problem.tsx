import { Shuffle as ShuffleIcon, AlertCircle, TrendingDown } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: ShuffleIcon,
      title: 'Disconnected Wearable Ecosystems',
      description: 'Patients use Apple Watch, Fitbit, Oura, CGMs, and more. Each device has its own data silo—invisible to your clinical platform.',
    },
    {
      icon: AlertCircle,
      title: 'Data Normalization Nightmare',
      description: 'Each vendor reports heart rate, sleep, activity differently. Custom integrations are expensive, fragile, and don\'t scale.',
    },
    {
      icon: TrendingDown,
      title: 'Missed Real-Time Signals',
      description: 'Continuous wearable streams could catch early risk indicators. Instead, data sits in patient apps—inaccessible to care teams until it\'s too late.',
    },
  ];

  return (
    <section id="problem" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            The Wearables Integration Problem
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl">
            Your patients have powerful health data streaming from wearables every second. But it's fragmented, siloed, and clinically invisible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg border border-slate-200 hover:border-cyan-400 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{problem.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
