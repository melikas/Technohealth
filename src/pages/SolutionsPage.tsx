import Header from '../components/Header';
import Footer from '../components/Footer';
import { AlertCircle, LineChart, Users, Building2, Microscope, Package } from 'lucide-react';

export default function SolutionsPage() {
  const solutions = [
    {
      icon: AlertCircle,
      title: 'Remote Patient Monitoring',
      category: 'Healthcare',
      description: 'Monitor chronic disease patients in real-time from anywhere. Get instant alerts for critical health changes and catch deterioration early.',
      useCases: [
        'Heart failure exacerbation detection',
        'Diabetes management with glucose tracking',
        'Post-operative recovery monitoring',
        'Hypertension control tracking'
      ],
      outcome: 'Reduce 30-day readmissions by 15-25%'
    },
    {
      icon: LineChart,
      title: 'Patient Health Scoring',
      category: 'Healthcare',
      description: 'Automatically calculate health scores based on ML models analyzing patient vital signs and behavior. Identify high-risk patients instantly.',
      useCases: [
        'Risk stratification for interventions',
        'Trend analysis over time',
        'Population health insights',
        'Personalized alerts and recommendations'
      ],
      outcome: 'Enhance clinical decision-making with predictive analytics'
    },
    {
      icon: Users,
      title: 'Multi-Patient Clinic Management',
      category: 'Healthcare',
      description: 'Manage dozens or thousands of patients from unified dashboard. Track all connected devices, surveys, and clinical assessments in one place.',
      useCases: [
        'Patient adherence monitoring',
        'Device connectivity status',
        'Survey completion tracking',
        'Automated patient segmentation'
      ],
      outcome: 'Reduce administrative burden by 40%'
    },
    {
      icon: Building2,
      title: 'Hospital Health Systems',
      category: 'Enterprise',
      description: 'Integrate patient monitoring across multiple locations. Support multi-doctor, multi-department workflows with centralized data management.',
      useCases: [
        'Multi-location patient sync',
        'Department-specific dashboards',
        'EHR/EMR integration',
        'Real-time collaboration tools'
      ],
      outcome: 'Improve care coordination and reduce errors'
    },
    {
      icon: Microscope,
      title: 'Clinical Research & Trials',
      category: 'Research',
      description: 'Simplify clinical trial enrollment and monitoring. Collect continuous biometric data from research subjects with automated compliance tracking.',
      useCases: [
        'Real-time data collection',
        'Automated endpoint validation',
        'Subject adherence monitoring',
        'Safety event detection'
      ],
      outcome: 'Reduce trial costs and improve data quality'
    },
    {
      icon: Package,
      title: 'Wearable Device Integration',
      category: 'Healthcare',
      description: 'Connect 15+ device platforms including Apple Watch, Fitbit, Oura Ring, CGMs, blood pressure monitors, and more in one dashboard.',
      useCases: [
        'Multi-device patient ecosystem',
        'Unified data normalization',
        'Automatic sync and updates',
        'Device battery & connectivity alerts'
      ],
      outcome: 'Support all patient device preferences'
    }
  ];

  const categoryColors = {
    'Healthcare': 'bg-cyan-100 text-cyan-700 border-cyan-200',
    'Wellness': 'bg-green-100 text-green-700 border-green-200',
    'Research': 'bg-purple-100 text-purple-700 border-purple-200',
    'Enterprise': 'bg-blue-100 text-blue-700 border-blue-200'
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-20 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Solutions for Everyone</h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Remote monitoring, research, wellness, precision medicine—all use cases covered
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, idx) => {
              const Icon = solution.icon;
              const categoryColor = categoryColors[solution.category as keyof typeof categoryColors];
              return (
                <div key={idx} className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-cyan-300 transition-all">
                  {/* Category Badge */}
                  <div className={`px-6 py-3 border-b ${categoryColor}`}>
                    <span className="text-xs font-bold uppercase tracking-wider">{solution.category}</span>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{solution.title}</h3>
                    <p className="text-slate-700 mb-6 leading-relaxed text-sm">{solution.description}</p>

                    {/* Use Cases */}
                    <div className="bg-white rounded-lg p-4 border border-slate-100 mb-6">
                      <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-3">Use Cases</p>
                      <ul className="space-y-2">
                        {solution.useCases.map((useCase, uidx) => (
                          <li key={uidx} className="flex items-start gap-2 text-xs text-slate-700">
                            <span className="text-cyan-600 font-bold mt-0.5">→</span>
                            <span>{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcome */}
                    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4 border border-cyan-200">
                      <p className="text-xs font-semibold text-cyan-700 uppercase tracking-wider mb-1">Expected Outcome</p>
                      <p className="text-sm font-semibold text-slate-900">{solution.outcome}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cyan-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Implementation</h2>
          <p className="text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's discuss which solution best aligns with your clinical goals and patient population
          </p>
          <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors">
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
