import Header from '../components/Header';
import Footer from '../components/Footer';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PricingPage() {
  const plans = [
    {
      name: 'Clinic',
      price: 299,
      period: '/month',
      description: 'For small clinics and practices',
      users: 'Up to 100 patients',
      features: [
        'Multi-patient dashboard',
        'Real-time health monitoring',
        'Connected devices (15+ platforms)',
        'Automated alerts & anomaly detection',
        'Basic health scoring',
        'Patient surveys & assessments',
        'HIPAA-compliant encryption',
        'Email support',
      ],
      cta: 'Start Clinic',
      highlight: false
    },
    {
      name: 'Medical Center',
      price: 1499,
      period: '/month',
      description: 'For medical centers and hospitals',
      users: 'Up to 2,000 patients',
      features: [
        'All Clinic features',
        'Advanced ML models (risk prediction)',
        'Clinical data integration (EHR/EMR)',
        'Multi-doctor / multi-department access',
        'Real-time webhooks & API access',
        'Custom health metrics builder',
        'Activity logs & audit trails',
        'Priority support',
        'Advanced SLA (99.95% uptime)',
      ],
      cta: 'Start Center',
      highlight: true
    },
    {
      name: 'Enterprise',
      price: null,
      period: 'Custom pricing',
      description: 'For large health systems',
      users: 'Unlimited patients',
      features: [
        'All Medical Center features',
        'Multi-location management',
        'Dedicated account manager',
        'Custom ML model training',
        'White-label deployment option',
        'FHIR & HL7 integration',
        'On-premises deployment',
        '24/7 premium support',
        'SLA: 99.99% uptime guarantee',
      ],
      cta: 'Contact Sales',
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-slate-900 text-white py-20 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Flexible Pricing, for All Healthcare Providers</h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Affordable patient monitoring platform for clinics, medical centers, and health systems. HIPAA-compliant with real-time health insights.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Note */}
          <div className="text-center mb-16">
            <p className="text-slate-600">
              Looking for a custom solution? <Link to="/contact" className="text-blue-600 font-semibold hover:underline">Get in touch</Link>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border-2 p-8 transition-all hover:shadow-xl ${
                  plan.highlight
                    ? 'border-blue-600 bg-gradient-to-br from-blue-50 to-slate-50 shadow-2xl md:scale-105 relative'
                    : 'border-slate-200 bg-white'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-slate-500 mb-6">{plan.users}</p>

                <div className="mb-6">
                  {plan.price ? (
                    <>
                      <span className="text-5xl font-bold text-slate-900">${plan.price}</span>
                      <span className="text-slate-600 font-semibold ml-2">{plan.period}</span>
                    </>
                  ) : (
                    <div className="text-xl text-slate-600 font-semibold">Custom Pricing</div>
                  )}
                </div>

                <p className="text-slate-600 text-sm mb-8">{plan.description}</p>

                <Link
                  to={plan.cta === 'Contact Sales' ? '/contact' : '/get-started'}
                  className={`w-full py-3 rounded-lg font-semibold mb-8 transition-colors text-center block ${
                    plan.highlight
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {plan.cta}
                </Link>

                <div className="space-y-4">
                  <p className="text-xs font-semibold text-slate-900 uppercase">What's included:</p>
                  {plan.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Compare Plans
            </h2>
            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="text-left px-6 py-4 font-semibold text-slate-900">Feature</th>
                    <th className="text-center px-6 py-4 font-semibold text-slate-900">Clinic</th>
                    <th className="text-center px-6 py-4 font-semibold text-slate-900">Medical Center</th>
                    <th className="text-center px-6 py-4 font-semibold text-slate-900">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-6 py-4 text-slate-900 font-medium">Max Patients</td>
                    <td className="text-center px-6 py-4 text-slate-600">100</td>
                    <td className="text-center px-6 py-4 text-slate-600">2,000</td>
                    <td className="text-center px-6 py-4 text-slate-600">Unlimited</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-6 py-4 text-slate-900 font-medium">Connected Devices</td>
                    <td className="text-center px-6 py-4 text-slate-600">15+ platforms</td>
                    <td className="text-center px-6 py-4 text-slate-600">15+ platforms</td>
                    <td className="text-center px-6 py-4 text-slate-600">15+ platforms</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-slate-900 font-medium">Real-time Alerts</td>
                    <td className="text-center px-6 py-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                    <td className="text-center px-6 py-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                    <td className="text-center px-6 py-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-6 py-4 text-slate-900 font-medium">ML Health Prediction</td>
                    <td className="text-center px-6 py-4"><span className="text-slate-400">—</span></td>
                    <td className="text-center px-6 py-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                    <td className="text-center px-6 py-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-slate-900 font-medium">EHR/EMR Integration</td>
                    <td className="text-center px-6 py-4"><span className="text-slate-400">—</span></td>
                    <td className="text-center px-6 py-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                    <td className="text-center px-6 py-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-6 py-4 text-slate-900 font-medium">Multi-Location Support</td>
                    <td className="text-center px-6 py-4"><span className="text-slate-400">—</span></td>
                    <td className="text-center px-6 py-4"><span className="text-slate-400">—</span></td>
                    <td className="text-center px-6 py-4"><Check className="w-5 h-5 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-slate-900 font-medium">Support</td>
                    <td className="text-center px-6 py-4 text-slate-600">Email</td>
                    <td className="text-center px-6 py-4 text-slate-600">Priority</td>
                    <td className="text-center px-6 py-4 text-slate-600">24/7 Premium</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-slate-900 font-medium">SLA</td>
                    <td className="text-center px-6 py-4 text-slate-600">99.9%</td>
                    <td className="text-center px-6 py-4 text-slate-600">99.95%</td>
                    <td className="text-center px-6 py-4 text-slate-600">99.99%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-24 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Pricing Questions?
            </h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Can I change plans anytime?</h4>
                <p className="text-slate-600">Yes. Upgrade or downgrade at any time. Changes take effect at the start of your next billing cycle.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Is there a free trial?</h4>
                <p className="text-slate-600">Yes. Start with our Clinic plan free for 14 days. Full access to all features, no credit card required.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Does pricing scale with patient count?</h4>
                <p className="text-slate-600">Our plans include patient limits. For Medical Center plan, you can add additional patients at $2/patient/month. Enterprise customers have unlimited patients.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">What's included in "HIPAA-compliant support"?</h4>
                <p className="text-slate-600">All plans include data encryption, access logs, audit trails, and Business Associate Agreements (BAAs). Learn more in our <Link to="/compliance" className="text-blue-600 hover:underline">compliance documentation</Link>.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-24 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to monitor your patients better?</h2>
            <p className="text-lg text-blue-100 mb-8">Start your free trial today and see how Technohealth MVP can improve patient outcomes.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/get-started" className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                Start Free Trial
              </Link>
              <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
