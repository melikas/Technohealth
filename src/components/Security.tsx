import { Shield, Lock, FileCheck, Database, Key, Eye } from 'lucide-react';

export default function Security() {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'Secure Architecture',
      description: 'Built on enterprise-grade infrastructure with multi-layer security controls',
    },
    {
      icon: Lock,
      title: 'Encrypted Data Storage',
      description: 'End-to-end encryption for data at rest and in transit',
    },
    {
      icon: Key,
      title: 'Role-Based Access Control',
      description: 'Granular permissions ensure users only access authorized data',
    },
    {
      icon: FileCheck,
      title: 'Comprehensive Audit Logs',
      description: 'Complete audit trail of all data access and system actions',
    },
    {
      icon: Database,
      title: 'Privacy-Aware Data Handling',
      description: 'Designed with privacy-first principles and data minimization',
    },
    {
      icon: Eye,
      title: 'Compliance-First Design',
      description: 'Built to support healthcare compliance requirements',
    },
  ];

  return (
    <section id="security" className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-sm text-cyan-400 mb-6">
            HIPAA-Compliant Wearables Security
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Wearable Data Security at Healthcare Scale
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Continuous wearable streams contain protected health information. We protect every data point with enterprise-grade encryption, compliance controls, and audit logs from day one.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 transition-all duration-300 hover:border-cyan-500/50"
            >
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-10">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Scalable, compliant, and production-ready
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                  <p className="text-slate-300">Scalable cloud deployment architecture</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                  <p className="text-slate-300">Data residency and sovereignty controls</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                  <p className="text-slate-300">Regular security assessments and updates</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                  <p className="text-slate-300">Automated backup and disaster recovery</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                  <p className="text-slate-300">SOC 2 Type II readiness in roadmap</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                  <p className="text-slate-300">Dedicated security and privacy documentation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
