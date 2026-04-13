import Header from '../components/Header';
import Footer from '../components/Footer';
import { LineChart, Building2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const solutions = [
    {
      icon: AlertCircle,
      title: 'Real-Time Patient Monitoring',
      category: 'Healthcare',
      description: 'Track vital signs and health metrics from multiple connected devices. Instant alerts for critical changes.',
      outcome: 'Detect health issues 24-48 hours earlier'
    },
    {
      icon: LineChart,
      title: 'Predictive Health Analytics',
      category: 'Healthcare',
      description: 'ML-powered risk prediction models identify patients at risk of hospitalization, complications, or adverse events.',
      outcome: 'Improve clinical outcomes by 35%'
    },
    {
      icon: Building2,
      title: 'Multi-Location Health Systems',
      category: 'Enterprise',
      description: 'Centralized patient management across multiple clinics and hospitals with location-specific dashboards.',
      outcome: 'Streamline operations and improve coordination'
    }
  ];

  const categoryColors: Record<string, string> = {
    'Healthcare': 'bg-cyan-100 text-cyan-700 border-cyan-200',
    'Wellness': 'bg-green-100 text-green-700 border-green-200',
    'Research': 'bg-purple-100 text-purple-700 border-purple-200',
    'Enterprise': 'bg-blue-100 text-blue-700 border-blue-200'
  };

  const process = [
    {
      step: '1',
      title: 'Patient Selection',
      description: 'Identify and enroll patients. Set up device integration preferences and health goals.'
    },
    {
      step: '2',
      title: 'Device Setup',
      description: 'Connect patient wearables and medical devices. Configure data collection and sync frequency.'
    },
    {
      step: '3',
      title: 'Monitoring & Analysis',
      description: 'Track health metrics in real-time. ML models analyze patterns and predict risks.'
    },
    {
      step: '4',
      title: 'Intervention',
      description: 'Automated alerts trigger interventions. Share insights with patients and care team.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner with Image */}
      <section className="mt-16">
        <div className="relative h-96 bg-gradient-to-br from-blue-900 to-slate-900 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/Images/Services-Hero.png" 
              alt="Services Hero" 
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
          
          {/* Hero Content */}
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <h1 className="text-6xl font-bold text-white mb-6">Our Solutions</h1>
              <p className="text-xl text-slate-200 max-w-2xl">
                Comprehensive patient monitoring dashboard with real-time alerts, ML predictive models, multi-device integration, and clinical data management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview - Image Left, Description Right */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden h-96">
                <img 
                  src="/Images/Services.png" 
                  alt="Services Overview" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23E0F2FE" width="400" height="300"/%3E%3Ctext x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="24" fill="%231E40AF"%3EServices Overview%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
            </div>

            {/* Right: Description */}
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Doctor-Centric Patient Monitoring</h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                From device integration to predictive analytics, everything is designed for clinical workflow efficiency.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm font-bold">✓</div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Multi-Device Integration</h3>
                    <p className="text-slate-600 text-sm">Apple Watch, Fitbit, Oura, CGMs, Blood Pressure monitors, and 10+ more</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm font-bold">✓</div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Real-Time Health Alerts</h3>
                    <p className="text-slate-600 text-sm">Automated anomaly detection with customizable alerts and clinical severity indicators</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm font-bold">✓</div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">ML Predictive Models</h3>
                    <p className="text-slate-600 text-sm">Risk prediction, anomaly detection, and health scoring with explainable AI</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm font-bold">✓</div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Patient Surveys & Assessments</h3>
                    <p className="text-slate-600 text-sm">Automated clinical questionnaires and symptom tracking</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm font-bold">✓</div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">HIPAA Compliant Security</h3>
                    <p className="text-slate-600 text-sm">Enterprise-grade encryption and audit trails for regulatory compliance</p>
                  </div>
                </div>
              </div>

              <Link 
                to="/get-started"
                className="inline-block px-8 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Implementation Process</h2>
            <p className="text-xl text-slate-600">From enrollment to clinical insights in 4 simple steps</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl p-8">
              <div className="w-12 h-12 bg-cyan-600 text-white rounded-lg flex items-center justify-center mb-6 text-xl font-bold">1</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Data Fragmentation</h3>
              <p className="text-slate-700 mb-6">Apple Watch, Fitbit, Oura—different APIs, different formats, different update cycles. We normalize everything into one clean data model.</p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>✓ 15+ device platforms unified</li>
                <li>✓ Preserves metadata & context</li>
                <li>✓ Add new devices in minutes</li>
                <li>✓ No code changes needed</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 border border-yellow-200 rounded-xl p-8">
              <div className="w-12 h-12 bg-yellow-600 text-white rounded-lg flex items-center justify-center mb-6 text-xl font-bold">2</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Lack of Interpretability</h3>
              <p className="text-slate-700 mb-6">Raw wearable data is meaningless to clinicians. We extract interpretable metrics: sleep quality, activity patterns, biological rhythms, risk indicators.</p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>✓ Clinician-friendly dashboards</li>
                <li>✓ Standardized health metrics</li>
                <li>✓ Longitudinal pattern detection</li>
                <li>✓ Custom scoring algorithms</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-8">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-6 text-xl font-bold">3</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Operational Burden</h3>
              <p className="text-slate-700 mb-6">Healthcare teams are overwhelmed processing raw data. Our platform automates analysis, generating alerts and insights so your team focuses on care.</p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>✓ Automated alerts & insights</li>
                <li>✓ Real-time monitoring</li>
                <li>✓ Minimal manual intervention</li>
                <li>✓ AI-driven recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Who Benefits</h2>
            <p className="text-xl text-slate-600">From clinical teams to digital startups to research labs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, idx) => {
              const Icon = solution.icon;
              const categoryColor = categoryColors[solution.category];
              return (
                <div key={idx} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-cyan-300 transition-all">
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

                    {/* Outcome */}
                    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4 border border-cyan-200">
                      <p className="text-xs font-semibold text-cyan-700 uppercase tracking-wider mb-1">Expected Benefit</p>
                      <p className="text-sm font-semibold text-slate-900">{solution.outcome}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">From Chaos to Clarity in 7 Days</h2>
            <p className="text-xl text-slate-600">How we get you from zero to live data integration</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((phase, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-cyan-600 text-white text-2xl font-bold mb-6">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{phase.title}</h3>
                <p className="text-slate-700 leading-relaxed text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why TechnoHealth</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-cyan-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Speed</h3>
              <p className="text-slate-700">7 days from contract to live data. Hundreds of integrations, zero surprises.</p>
            </div>

            <div className="bg-white border border-cyan-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Ownership</h3>
              <p className="text-slate-700">Your infrastructure. Your data. No per-user fees. No vendor lock-in.</p>
            </div>

            <div className="bg-white border border-cyan-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Compliance</h3>
              <p className="text-slate-700">Enterprise security from day one. HIPAA, SOC 2, FHIR ready.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's scope your project and show you what's possible in 7 days.
          </p>
          <Link to="/get-started" className="inline-block bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors">
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
