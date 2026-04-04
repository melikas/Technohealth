import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function CaseStudiesShowcase() {
  const featuredCases = [
    {
      id: 'caily',
      title: 'Building the Future of Family Health',
      subtitle: 'Rethinking Coordinated Caregiving',
      highlights: ['85% user engagement', 'HIPAA compliant', '500+ family units'],
      color: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200',
    },
    {
      id: 'labplus',
      title: 'From Days to Minutes',
      subtitle: 'How LabPlus Transformed Medical Testing',
      highlights: ['95% time reduction', '40% cost savings', '50K+ active users'],
      color: 'from-green-50 to-green-100',
      borderColor: 'border-green-200',
    },
    {
      id: 'pain-relief',
      title: 'Revolutionizing Pain Relief',
      subtitle: 'AI and IoT-Powered Electrotherapy',
      highlights: ['70% pain reduction', '85% opioid reduction', 'FDA cleared'],
      color: 'from-purple-50 to-purple-100',
      borderColor: 'border-purple-200',
    },
  ];

  return (
    <section id="case-studies-showcase" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how leading healthcare organizations transform challenges into opportunities with TechnoHealth
          </p>
        </div>

        {/* Featured Cases Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredCases.map((caseItem) => (
            <Link
              key={caseItem.id}
              to={`/case-studies/${caseItem.id}`}
              className={`bg-gradient-to-br ${caseItem.color} border-2 ${caseItem.borderColor} rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group`}
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {caseItem.title}
              </h3>
              <p className="text-sm text-slate-600 mb-6">{caseItem.subtitle}</p>

              <div className="space-y-3 mb-8">
                {caseItem.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-slate-700">{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                Read Full Case Study
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA to All Cases */}
        <div className="text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg"
          >
            View All Case Studies
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-sm text-slate-600 mt-4">
            Explore 8 industry-leading healthcare projects across mobile, web, AI, and infrastructure
          </p>
        </div>
      </div>
    </section>
  );
}
