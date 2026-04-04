import { Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/Images/Icon.png" alt="TechnoHealth" className="w-8 h-8" />
              <span className="text-xl font-bold text-white">TechnoHealth</span>
            </div>
            <p className="text-sm text-slate-400 mb-6">
              Unified wearable data platform for healthcare.
            </p>
            <div className="flex gap-3">
              <a href="https://linkedin.com/in/melikaseyedi" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* DOCS */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Docs</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/docs" className="hover:text-cyan-400 transition-colors text-sm">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/docs" className="hover:text-cyan-400 transition-colors text-sm">
                  API Reference
                </Link>
              </li>
              <li>
                <Link to="/docs" className="hover:text-cyan-400 transition-colors text-sm">
                  SDK & Libraries
                </Link>
              </li>
              <li>
                <a href="https://status.technohealth.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors text-sm">
                  System Status
                </a>
              </li>
            </ul>
          </div>

          {/* PRICING */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Pricing</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/pricing" className="hover:text-cyan-400 transition-colors text-sm">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors text-sm">
                  ROI Calculator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors text-sm">
                  Volume Licensing
                </a>
              </li>
              <li>
                <Link to="/get-started" className="hover:text-cyan-400 transition-colors text-sm">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="hover:text-cyan-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-cyan-400 transition-colors text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/compliance" className="hover:text-cyan-400 transition-colors text-sm">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="hover:text-cyan-400 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors text-sm">
                  Blog & Insights
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors text-sm">
                  White Papers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors text-sm">
                  Webinars
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-slate-400">© 2026 TechnoHealth. All rights reserved.</p>
            <div className="flex gap-6 text-slate-400">
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
              <Link to="/compliance" className="hover:text-cyan-400 transition-colors">
                Compliance
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
