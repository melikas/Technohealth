import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

export default function UseCaseShowcase() {
  const showcases = [
    {
      industry: 'Remote Patient Monitoring',
      company: 'Digital Health Platform',
      stat: '+25% Readmission Reduction',
      testimonial: 'TechnoHealth unified our wearable integrations in 4 weeks. We now monitor 10,000+ patients with real-time alerts.'
    },
    {
      industry: 'Clinical Research',
      company: 'Medical Research Institute',
      stat: '5,000+ Study Participants',
      testimonial: 'Finally, continuous objective data from research subjects without custom device integrations.'
    },
    {
      industry: 'Corporate Wellness',
      company: 'Fortune 500 Company',
      stat: '30,000 Employees Tracked',
      testimonial: 'Population-level health insights while keeping data on-premise. Mission-critical for compliance.'
    },
    {
      industry: 'Precision Medicine',
      company: 'Healthcare System',
      stat: '+40% Treatment Success',
      testimonial: 'Correlated wearable data with clinical outcomes. Personalized medicine at scale.'
    },
    {
      industry: 'Digital Therapeutics',
      company: 'MedTech Company',
      stat: '+50% Patient Engagement',
      testimonial: 'Real-time biometric feedback powers our AI-driven health coaching platform.'
    },
    {
      industry: 'Aging Care',
      company: 'Senior Living Network',
      stat: '15,000+ Residents',
      testimonial: 'Proactive health monitoring. Alerts caregivers before clinical events occur.'
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Real-World Results
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Hospitals, researchers, and wellness companies using TechnoHealth today
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {showcases.map((showcase, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 p-8 hover:shadow-lg hover:border-cyan-300 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <MessageCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{showcase.industry}</h3>
                  <p className="text-sm text-slate-600 mt-1">{showcase.company}</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-slate-200 mb-4">
                <p className="text-slate-700 italic text-sm leading-relaxed">"{showcase.testimonial}"</p>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-sm font-bold text-slate-900">{showcase.stat}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 text-cyan-600 font-bold hover:text-cyan-700 transition-colors text-lg"
          >
            View Case Studies →
          </Link>
        </div>
      </div>
    </section>
  );
}
