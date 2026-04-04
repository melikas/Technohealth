import Header from '../components/Header';
import Footer from '../components/Footer';
import { Database, Zap, Users, Brain } from 'lucide-react';

export default function ProcessPage() {
  const steps = [
    {
      number: '1',
      icon: Users,
      title: 'Discovery & Requirements',
      description: 'We understand your clinical goals, patient population, required wearables, and success metrics before development starts.',
      points: [
        'Clinical outcome mapping',
        'Wearable device selection',
        'Data requirement definition',
        'Success metric alignment',
        'Compliance assessment'
      ]
    },
    {
      number: '2',
      icon: Database,
      title: 'Architecture & Design',
      description: 'Design the complete data pipeline: device integrations, data models, sync strategy, security, and EHR integration.',
      points: [
        'System architecture design',
        'OAuth flow planning',
        'Data model specification',
        'Sync strategy definition',
        'Security framework'
      ]
    },
    {
      number: '3',
      icon: Zap,
      title: 'Development & Integration',
      description: 'Build SDK integrations, normalize data, create dashboards, and set up health score algorithms.',
      points: [
        'SDK implementation',
        'Data normalization pipeline',
        'Dashboard development',
        'Alert system setup',
        'Cross-device testing'
      ]
    },
    {
      number: '4',
      icon: Brain,
      title: 'Launch & Optimization',
      description: 'Deploy to production, monitor performance, optimize thresholds, and scale for patient population.',
      points: [
        'Production deployment',
        'Performance monitoring',
        'Threshold optimization',
        'User training',
        'Ongoing support'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-20 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">How We Build It</h1>
          <p className="text-xl text-slate-300">
            Four simple steps from discovery to production
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-12">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="flex gap-8">
                  {/* Left: Number */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4">
                      {step.number}
                    </div>
                    {idx !== steps.length - 1 && (
                      <div className="w-0.5 h-32 bg-slate-200"></div>
                    )}
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1 pt-2">
                    <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-8 hover:border-cyan-300 hover:shadow-lg transition-all">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                          <p className="text-slate-600 mt-1">{step.description}</p>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-6 border border-slate-100">
                        <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-4">Key Activities</p>
                        <ul className="grid md:grid-cols-2 gap-3">
                          {step.points.map((point, pidx) => (
                            <li key={pidx} className="flex items-center gap-2 text-slate-700">
                              <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Estimate */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Implementation Timeline</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">2-4 weeks</div>
              <p className="text-slate-700 font-semibold">Discovery & Design</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">4-8 weeks</div>
              <p className="text-slate-700 font-semibold">Development</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">1-2 weeks</div>
              <p className="text-slate-700 font-semibold">Testing & QA</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">Ongoing</div>
              <p className="text-slate-700 font-semibold">Support & Optimization</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
