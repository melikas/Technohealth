import Header from '../components/Header';
import Footer from '../components/Footer';
import { Heart, Users, Award, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-20 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">About TechnoHealth</h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Making clinical-grade wearables accessible to every hospital
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Healthcare Teams Choose TechnoHealth</h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Wearable devices are powerful—but only if your data works. Every vendor uses different formats, APIs, and update cycles. Building it yourself takes months and costs six figures.
              </p>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                TechnoHealth eliminates the integration headache. Connect your patients' Apple Watches, Fitbits, Oura rings,and clinical devices—all in one platform. Start analyzing data in days, not months.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Your infrastructure. Your data. Enterprise security. No vendor lock-in.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border-2 border-cyan-200 p-12">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <Heart className="w-8 h-8 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Patient-Centric</h3>
                    <p className="text-slate-700 text-sm">Every decision prioritizes patient data security and care outcomes</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Users className="w-8 h-8 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Open Standards</h3>
                    <p className="text-slate-700 text-sm">Built on FHIR, HL7, and open protocols—never locked in</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Award className="w-8 h-8 text-yellow-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Clinical Grade</h3>
                    <p className="text-slate-700 text-sm">HIPAA compliant, audit-ready, designed for regulated environments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Wearables Matter */}
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">The Problem With Wearable Integration</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-yellow-600" />
                  It's Expensive
                </h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Building integrations for Apple, Fitbit, Oura, Empatica? That's $150K-$400K in development</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Each vendor updates their API. Your code breaks. Maintenance never stops</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Your team spends 60% of sprint time on data plumbing, not features</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Adding a new device means rewriting entire pipelines</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>SaaS vendors lock you in and charge per-user fees forever</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-green-600" />
                  TechnoHealth Solves It
                </h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span>7-day integration. Connect any wearable your patients use</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span>One unified API—add Apple, Fitbit, Oura without touching code</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Deploy to your servers. Zero vendor lock-in</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Enterprise-grade security. HIPAA compliant from day one</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Scale to millions of data points. No per-user fees</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Trust */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Trust & Compliance</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
              <Award className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">HIPAA Compliant</h3>
              <p className="text-slate-600 text-sm">Built from ground up for protected health information</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">HITRUST Certified</h3>
              <p className="text-slate-600 text-sm">Information protection management validation</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
              <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">SOC 2 Type II</h3>
              <p className="text-slate-600 text-sm">Third-party audited security and controls</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
              <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">ISO 27001</h3>
              <p className="text-slate-600 text-sm">Information security management system</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cyan-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Wearable Research Project</h2>
          <p className="text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your research goals, device requirements, and deployment timeline over a 30-minute call
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
