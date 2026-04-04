import { Link2, Filter, Activity, BarChart3, GitCompare, Lightbulb, Settings, FileCheck, Lock } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Link2,
      title: '15+ Wearable Platforms Supported',
      description: 'Apple Health, Google Fit, Garmin, Oura, Whoop, Polar, Suunto, and medical devices through one unified API.',
    },
    {
      icon: Filter,
      title: 'Automatic Data Normalization',
      description: 'Convert diverse vendor formats into one clinical data model. Same metric, any device.',
    },
    {
      icon: Activity,
      title: 'Real-Time Monitoring Dashboards',
      description: 'Stream continuous vitals to caregiver dashboards. Heart rate, activity, sleep, glucose—all visible at a glance.',
      featured: true,
    },
    {
      icon: BarChart3,
      title: 'Custom Health Scores',
      description: 'Define clinical thresholds once. Platform monitors 24/7 and surfaces clinically relevant metrics.',
    },
    {
      icon: GitCompare,
      title: 'Threshold-Based Alerts',
      description: 'Automated caregiver notifications when patient vitals cross predefined risk boundaries.',
    },
    {
      icon: Lightbulb,
      title: 'Predictive AI & Anomaly Detection',
      description: 'ML-powered insights that flag unusual patterns and predict deterioration before clinical events.',
    },
    {
      icon: Settings,
      title: 'FHIR-Compliant Export',
      description: 'Export normalized wearable data directly to EHR systems for seamless clinical workflow integration.',
    },
    {
      icon: FileCheck,
      title: 'Self-Hosted Infrastructure',
      description: 'Your data stays on-premise. HIPAA compliance built into architecture—no third-party SaaS.',
    },
    {
      icon: Lock,
      title: 'Enterprise Security & Audit',
      description: 'Encryption, access controls, comprehensive audit logs, and role-based permissions for protected health data.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Enterprise Wearables Integration Features
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Tools built for healthcare platforms, remote monitoring systems, and digital health providers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1 ${
                feature.featured
                  ? 'bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-300 shadow-lg'
                  : 'bg-white border-slate-200 hover:border-cyan-200 hover:shadow-lg'
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  feature.featured
                    ? 'bg-gradient-to-br from-cyan-500 to-blue-500'
                    : 'bg-slate-100'
                }`}
              >
                <feature.icon className={`w-6 h-6 ${feature.featured ? 'text-white' : 'text-slate-700'}`} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
