import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle } from 'lucide-react';

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-slate-900 text-white py-20 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Compliance & Security</h1>
          <p className="text-xl text-slate-300">
            HIPAA, PIPEDA, and PHIPA compliant healthcare data platform.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Overview */}
          <div className="mb-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-12 border border-green-200">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Enterprise-Grade Security</h2>
            <p className="text-slate-600 mb-6">
              TechnoHealth is built on compliance from day one. We meet the regulatory requirements of healthcare providers, payers, and app developers in the US and Canada.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { label: 'HIPAA', desc: 'US Federal compliance' },
                { label: 'PIPEDA', desc: 'Canada Federal privacy' },
                { label: 'PHIPA', desc: 'Ontario health privacy' },
                { label: 'SOC 2 Type II', desc: 'Audit ready' },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold text-slate-900">{item.label}</p>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* HIPAA */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">HIPAA Compliance (United States)</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">What is HIPAA?</h3>
                <p className="text-slate-600 mb-4">
                  The Health Insurance Portability and Accountability Act (HIPAA) is US federal law regulating the use and disclosure of Protected Health Information (PHI).
                </p>
                <p className="text-slate-600">
                  If your application handles US patient health data, HIPAA compliance is required.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">Our Approach</h3>
                <ul className="space-y-3">
                  {[
                    'Encryption in transit (TLS 1.3)',
                    'Encryption at rest (AES-256)',
                    'Access control & authentication',
                    'Audit logs for all data access',
                    'Business Associate Agreements (BAAs)',
                    'Breach notification protocols',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-3">Privacy & Security Rules</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-2">Privacy Rule</p>
                  <p className="text-sm text-slate-600">
                    Controls the use and disclosure of PHI. TechnoHealth implements minimum necessary standard—we only collect data required for the service.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-2">Security Rule</p>
                  <p className="text-sm text-slate-600">
                    Mandates administrative, physical, and technical safeguards. We maintain access controls, audit logs, and encryption across all systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h4 className="font-semibold text-slate-900 mb-3">Business Associate Agreements (BAAs)</h4>
              <p className="text-slate-600 mb-4">
                HIPAA requires covered entities to sign BAAs with business associates who handle PHI on their behalf. All TechnoHealth plans include BAA support.
              </p>
              <a href="mailto:legal@technohealth.com" className="text-blue-600 font-semibold hover:text-blue-700">
                Request a BAA Template →
              </a>
            </div>
          </section>

          {/* PIPEDA */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">PIPEDA Compliance (Canada Federal)</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">What is PIPEDA?</h3>
                <p className="text-slate-600 mb-4">
                  The Personal Information Protection and Electronic Documents Act (PIPEDA) is Canada's federal privacy law governing how private-sector organizations handle personal data.
                </p>
                <p className="text-slate-600">
                  TechnoHealth collects and processes personal health data in compliance with PIPEDA across all Canadian operations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">Our Approach</h3>
                <ul className="space-y-3">
                  {[
                    'Transparent data collection',
                    'User consent for data use',
                    'Right to access & correction',
                    'Data minimization',
                    'Breach notification',
                    'Data retention limits',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-3">PIPEDA Principles</h4>
              <div className="space-y-4">
                {[
                  { num: '1', title: 'Accountability', desc: 'TechnoHealth designates a privacy officer for PIPEDA compliance.' },
                  { num: '2', title: 'Identification of Purpose', desc: 'We clearly communicate why we collect health data.' },
                  { num: '3', title: 'Consent', desc: 'Users consent to data collection and use through clear opt-in mechanisms.' },
                  { num: '4', title: 'Limiting Collection', desc: 'We collect only data necessary for wearable-to-health purposes.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                      {item.num}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{item.title}</p>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PHIPA */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">PHIPA Compliance (Ontario)</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">What is PHIPA?</h3>
                <p className="text-slate-600 mb-4">
                  The Personal Health Information Protection Act (PHIPA) is Ontario's provincial law governing the collection, use, and disclosure of personal health information by regulated health-care providers.
                </p>
                <p className="text-slate-600">
                  If you operate in Ontario or serve Ontario residents, PHIPA compliance is required.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">Our Approach</h3>
                <ul className="space-y-3">
                  {[
                    'Circle of care validation',
                    'Patient consent recording',
                    'Patient access restrictions',
                    'Audit logs (7-year retention)',
                    'Data segregation',
                    'Breach reporting to authorities',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-3">Key PHIPA Features in TechnoHealth</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-2">Circle of Care</p>
                  <p className="text-sm text-slate-600">
                    TechnoHealth validates that data access is within the patient's circle of care (treating physician, hospital).
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-2">Patient Consent</p>
                  <p className="text-sm text-slate-600">
                    We record patient consent for health information use. Patients can restrict access at any time.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-2">Mandatory Audit Logs</p>
                  <p className="text-sm text-slate-600">
                    All access to PHI is logged and retained for 7 years. Logs are available for compliance audits.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-2">Breach Notification</p>
                  <p className="text-sm text-slate-600">
                    In case of unauthorized access, TechnoHealth notifies affected individuals and regulatory authorities.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Security Infrastructure */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Security Infrastructure</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Data Protection',
                  items: [
                    'AES-256 encryption at rest',
                    'TLS 1.3 encryption in transit',
                    'Encrypted databases',
                    'Secure key management (AWS KMS)',
                  ]
                },
                {
                  title: 'Access Control',
                  items: [
                    'Role-based access control (RBAC)',
                    'Multi-factor authentication (MFA)',
                    'IP whitelisting',
                    'Session management & timeout',
                  ]
                },
                {
                  title: 'Infrastructure',
                  items: [
                    'AWS cloud hosting (us-east-1, Canada Central)',
                    'DDoS protection',
                    'Web Application Firewall (WAF)',
                    'Security groups & VPCs',
                  ]
                },
                {
                  title: 'Monitoring',
                  items: [
                    'Real-time threat detection',
                    'Intrusion detection systems',
                    'Security Information & Event Management (SIEM)',
                    'Penetration testing (annual)',
                  ]
                },
              ].map((sec, idx) => (
                <div key={idx} className="border border-slate-200 rounded-lg p-6">
                  <h4 className="font-bold text-slate-900 mb-4">{sec.title}</h4>
                  <ul className="space-y-3">
                    {sec.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-sm text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications & Attestations */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Certifications & Attestations</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'SOC 2 Type II', desc: 'Security, availability, and confidentiality controls', status: 'In Progress' },
                { name: 'ISO 27001', desc: 'Information security management systems', status: 'Planned 2026' },
                { name: 'GDPR', desc: 'General Data Protection Regulation (EU), if operating in EU', status: 'Ready' },
              ].map((cert, idx) => (
                <div key={idx} className="border-l-4 border-blue-600 pl-6 py-3">
                  <p className="font-semibold text-slate-900">{cert.name}</p>
                  <p className="text-sm text-slate-600 mb-3">{cert.desc}</p>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                    {cert.status}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Resources */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Resources & Documentation</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Privacy Policy', desc: 'Complete privacy policy and data practices' },
                { title: 'Terms of Service', desc: 'Legal terms for using TechnoHealth' },
                { title: 'Data Processing Agreement (DPA)', desc: 'Standard DPA for GDPR compliance' },
                { title: 'Security Whitepaper', desc: 'Detailed technical security documentation' },
              ].map((resource, idx) => (
                <a key={idx} href="#" className="border border-slate-200 rounded-lg p-6 hover:shadow-md transition">
                  <p className="font-semibold text-slate-900 mb-2">{resource.title}</p>
                  <p className="text-sm text-slate-600 mb-4">{resource.desc}</p>
                  <span className="text-blue-600 font-semibold text-sm">Download →</span>
                </a>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-12 border border-blue-200 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Compliance Questions?</h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Our legal and compliance team is ready to answer questions about HIPAA, PIPEDA, PHIPA, and data security.
            </p>
            <Link to="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Contact Our Compliance Team
            </Link>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
}
