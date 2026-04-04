import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-600 to-indigo-600">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to simplify your wearable integration?
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          From chaos to clarity in 7 days. Let's get your platform live.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link to="/schedule-demo" className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-all hover:shadow-xl flex items-center justify-center space-x-2">
            <span>Schedule Demo</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link to="/get-started" className="px-8 py-4 bg-blue-700 text-white rounded-lg font-bold border-2 border-white/30 hover:bg-blue-800 transition-all flex items-center justify-center space-x-2">
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 inline-block">
          <p className="text-blue-100 text-sm mb-2">Questions? Email us:</p>
          <a href="mailto:hello@technohealth.ai" className="text-white font-bold hover:underline flex items-center gap-2 justify-center">
            <Mail className="w-4 h-4" />
            hello@technohealth.ai
          </a>
        </div>
      </div>
    </section>
  );
}
