import { HeartPulse, Rocket, FlaskConical } from 'lucide-react';

export default function UseCases() {
  const useCases = [
    {
      icon: HeartPulse,
      title: 'Remote Patient Monitoring',
      painPoint: 'Care teams can\'t access wearable data between clinic visits. Patients\' Apple Watches and continuous monitors are invisible to clinical systems.',
      solution: 'Unified dashboard streaming real-time vitals from any wearable device. Caregiver alerts when metrics cross thresholds.',
      outcome: '35% reduction in hospital readmissions through early intervention detection',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Rocket,
      title: 'Digital Health & Fitness Apps',
      painPoint: 'Building wearable integrations for 10+ platforms is expensive, time-consuming, and scales poorly as user devices diversify.',
      solution: 'Single API connecting all major wearables. Normalized data ready to power features and analytics immediately.',
      outcome: 'Launch wearable features 6x faster. Scale across devices without rebuilding integrations.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: FlaskConical,
      title: 'Clinical Research Studies',
      painPoint: 'Heterogeneous wearable data from research subjects creates data quality issues and limits longitudinal analysis.',
      solution: 'Standardized data collection from diverse wearable devices. Normalized metrics ready for statistical analysis and ML models.',
      outcome: '10x faster study enrollment. 95% higher data quality vs. manual collection.',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <section id="use-cases" className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Wearables Use Cases
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From remote monitoring to research to consumer health apps—wearable integration powers modern healthcare
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`bg-gradient-to-br ${useCase.color} p-8`}>
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                  <useCase.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{useCase.title}</h3>
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Pain Point
                  </div>
                  <p className="text-slate-700">{useCase.painPoint}</p>
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    How TechnoHealth Helps
                  </div>
                  <p className="text-slate-700">{useCase.solution}</p>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <div className="text-xs font-semibold text-cyan-600 uppercase tracking-wider mb-2">
                    Business Value
                  </div>
                  <p className="text-slate-900 font-medium">{useCase.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
