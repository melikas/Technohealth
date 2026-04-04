import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Stethoscope, Smartphone, Zap, Heart, Users, Pill, Zap as ZapIcon, DollarSign } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  category: string;
  icon: any;
  image?: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'caily',
    title: 'Building the Future of Family Health: Rethinking Coordinated Caregiving',
    shortTitle: 'Caily: Family Caregiving Platform',
    description: 'We partnered with Caily to build a cross-generational caregiving platform combining healthcare-grade security with family-friendly UX, supporting seamless coordination while honoring care receiver autonomy.',
    category: 'HEALTHTECH CONSULTING | PRODUCT DESIGN',
    icon: Users,
  },
  {
    id: 'bennabis-health',
    title: 'Smart Tech Infrastructure for Scaling Affordable Cannabis Coverage Nationwide',
    shortTitle: 'Bennabis: Cannabis Plan Platform',
    description: 'We helped Bennabis Health expand access to affordable medical cannabis by stabilizing infrastructure, enabling group plan functionality, and preparing the business for long-term national scale.',
    category: 'HEALTHTECH CONSULTING | INFRASTRUCTURE & SECURITY',
    icon: Heart,
  },
  {
    id: 'labplus',
    title: 'From Days to Minutes: How LabPlus Transformed Medical Testing Workflows',
    shortTitle: 'LabPlus: Lab Testing Platform',
    description: 'We built a mobile platform for LabPlus that digitalized medical testing across Poland, transforming a day-long process into minutes while ensuring full medical compliance.',
    category: 'MOBILE APP DEVELOPMENT | PRODUCT DESIGN',
    icon: Zap,
  },
  {
    id: 'egis',
    title: 'Simplified Medication Management: Never Miss a Pill',
    shortTitle: 'Egis: Medication Adherence App',
    description: 'We developed Czas na Lek, a mobile app that helps users organize, track, and adhere to their medication schedules, ensuring they never miss a dose.',
    category: 'MOBILE APP DEVELOPMENT | PRODUCT DESIGN',
    icon: Pill,
  },
  {
    id: 'inngen',
    title: 'Bringing Diagnostic Testing Into the Digital Age With Streamlined Workflows',
    shortTitle: 'InnGen: Diagnostic Platform',
    description: 'We partnered with InnGen to create a digital platform that revolutionizes how people access and purchase medical tests, managing orders efficiently.',
    category: 'WEB APP DEVELOPMENT | PRODUCT DESIGN',
    icon: Smartphone,
  },
  {
    id: 'medical-payment-app',
    title: 'A Secure and Compliant Way to Make Medical Payments More Accessible',
    shortTitle: 'Medical Payment App',
    description: 'We developed a secure Flutter-based mobile app enabling deferred payments for medical services, integrating virtual card functionality with stringent security and user-friendliness.',
    category: 'MOBILE APP DEVELOPMENT | INFRASTRUCTURE & SECURITY',
    icon: DollarSign,
  },
  {
    id: 'pain-relief',
    title: 'Revolutionizing Pain Relief With AI and IoT-Powered Electrotherapy',
    shortTitle: 'AI-Enabled Pain Recovery',
    description: 'We partnered with a HealthTech pioneer to transform postoperative pain management through IoT and AI integration, personalizing treatment and improving patient comfort.',
    category: 'AI IMPLEMENTATION | IOT INTEGRATION',
    icon: ZapIcon,
  },
  {
    id: 'architecture',
    title: 'Sustainable Architecture for Healthcare Systems at Scale',
    shortTitle: 'Healthcare System Architecture',
    description: 'Our architecture services enable healthcare platforms to scale securely while maintaining compliance, integrating EHR systems, and optimizing workflows for maximum clinical value.',
    category: 'INFRASTRUCTURE & SECURITY | SYSTEM DESIGN',
    icon: Stethoscope,
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-16 pt-28">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Success Stories</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how TechnoHealth transforms healthcare technology challenges into scalable, compliant solutions that improve patient outcomes and operational excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {caseStudies.map((study) => {
            const Icon = study.icon;
            return (
              <Link
                key={study.id}
                to={`/case-studies/${study.id}`}
                className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 flex items-center justify-center h-40">
                  <Icon className="w-20 h-20 text-blue-600 group-hover:scale-125 transition-transform duration-300" />
                </div>
                
                <div className="p-6">
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">{study.category}</p>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {study.shortTitle}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{study.description}</p>
                  
                  <div className="mt-5 flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                    View Full Case Study →
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your healthcare platform?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how TechnoHealth can help you build secure, scalable solutions that improve patient outcomes.
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors">
            Start Your Project
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
