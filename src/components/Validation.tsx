import { Users, GraduationCap, Globe } from 'lucide-react';

export default function Validation() {
  const metrics = [
    {
      icon: Users,
      value: '65+',
      label: 'Customer Discovery Interviews',
      detail: 'Across longevity clinics, research teams, and digital health startups',
    },
    {
      icon: GraduationCap,
      title: 'PhD Research Foundation',
      description: 'Built from rigorous academic research in wearable data integration and health analytics',
    },
    {
      icon: Globe,
      title: 'Global Validation',
      description: 'Designed with input from stakeholders across North America, Europe, the Middle East, and Asia',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Research-backed, market-validated
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            TechnoHealth is grounded in real-world research and extensive validation with healthcare stakeholders
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-2xl p-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold text-slate-900 mb-3">65+</div>
              <div className="text-lg font-semibold text-slate-700 mb-2">Discovery Interviews</div>
              <p className="text-slate-600">
                Deep conversations with clinicians, researchers, and digital health innovators
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div className="text-lg font-semibold text-slate-900 mb-3">PhD Research Foundation</div>
              <p className="text-slate-600">
                Built from rigorous academic research in wearable data integration and health analytics
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="text-lg font-semibold text-slate-900 mb-3">Global Validation</div>
              <p className="text-slate-600">
                Insights from North America, Europe, the Middle East, and Asia
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-2xl p-10">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
              Why TechnoHealth is different
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-slate-900 font-semibold mb-2">Not only aggregation</div>
                <p className="text-sm text-slate-600">We preserve context and provenance</p>
              </div>
              <div className="text-center">
                <div className="text-slate-900 font-semibold mb-2">Not only analytics</div>
                <p className="text-sm text-slate-600">We detect clinically meaningful patterns</p>
              </div>
              <div className="text-center">
                <div className="text-slate-900 font-semibold mb-2">Not only dashboards</div>
                <p className="text-sm text-slate-600">We generate actionable recommendations</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-cyan-200 text-center">
              <p className="text-lg text-slate-700 font-medium">
                TechnoHealth combines integration, interpretation, and clinical relevance in one unified platform
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
