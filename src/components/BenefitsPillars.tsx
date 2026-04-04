import { Zap, CheckCircle, Database, Shield } from 'lucide-react';

export default function BenefitsPillars() {
  const benefits = [
    {
      icon: Zap,
      title: 'Days, Not Months',
      description: 'Go from zero to live data integration in 7 days. No custom development required.'
    },
    {
      icon: CheckCircle,
      title: 'One API for All',
      description: 'Stop building separate integrations for each device. Add Apple, Fitbit, Oura from your dashboard.'
    },
    {
      icon: Database,
      title: 'Your Infrastructure',
      description: 'Deploy on your servers. Own your data. No recurring per-user fees or vendor lock-in.'
    },
    {
      icon: Shield,
      title: 'Enterprise Ready',
      description: 'HIPAA compliant, SOC 2 audited, role-based access control. Built for regulated industries.'
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            The Fastest Way to Unified Wearable Data
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Seven days from signing to production. Own your data pipeline.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 p-8 hover:shadow-lg hover:border-cyan-300 transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-700 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Enterprise Checklist Row */}
        <div className="mt-16 bg-white rounded-xl border border-slate-200 p-8">
          <p className="text-center text-slate-600 font-semibold uppercase tracking-wider mb-8">Built for Enterprise</p>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
                <span className="text-green-700 font-bold">✓</span>
              </div>
              <span className="text-slate-900 font-semibold text-center">HIPAA Compliant</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
                <span className="text-green-700 font-bold">✓</span>
              </div>
              <span className="text-slate-900 font-semibold text-center">SOC 2 Type II Audited</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
                <span className="text-green-700 font-bold">✓</span>
              </div>
              <span className="text-slate-900 font-semibold text-center">99.9% Uptime SLA</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
                <span className="text-green-700 font-bold">✓</span>
              </div>
              <span className="text-slate-900 font-semibold text-center">Data Governance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
