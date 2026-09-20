import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Server, Lock } from 'lucide-react';

export default function SafetySecurityPage() {
  const pillars = [
    { label: 'Law 25', desc: 'Quebec privacy law' },
    { label: 'PIPEDA', desc: 'Canada federal privacy' },
    { label: 'HIPAA ready', desc: 'US customer workflows' },
    { label: 'Self hosted', desc: 'Your infrastructure' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-gradient-to-r from-blue-900 to-slate-900 text-white py-20 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Safety and Security</h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            How TechnoHealth protects health data for a Quebec based company serving customers in Canada and beyond.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 rounded-xl p-10 md:p-12 border border-slate-200 bg-slate-50">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Built for regulated health data</h2>
            <p className="text-slate-600 mb-8 max-w-3xl">
              TechnoHealth is based in Montreal, Quebec. For us, the baseline is Quebec Law 25 and Canadian
              federal privacy rules. When customers handle US protected health information, we also support HIPAA
              style controls and Business Associate Agreements.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {pillars.map((item) => (
                <div key={item.label} className="text-center">
                  <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold text-slate-900">{item.label}</p>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Law 25 */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Quebec Law 25</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Why it matters</h3>
                <p className="text-slate-600 mb-4">
                  Law 25 modernized Quebec&apos;s Act respecting the protection of personal information in the private
                  sector. It applies to private organizations that collect, use, or disclose personal information in
                  Quebec, including health related data.
                </p>
                <p className="text-slate-600">
                  Health information is treated as sensitive. Consent must be clear and express. Transfers outside
                  Quebec require a privacy impact assessment and contractual safeguards.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">How we design for it</h3>
                <ul className="space-y-3">
                  {[
                    'Privacy by default in product settings',
                    'Clear consent and purpose limitation for wearable data',
                    'Privacy impact assessments for new systems and transfers',
                    'Incident register and breach response process',
                    'Written processor agreements with customers and vendors',
                    'Support for access, correction, and portability requests',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-blue-50 rounded-lg p-6 border border-blue-200">
              <p className="text-sm text-slate-700">
                Quebec also has the Act respecting health and social services information for certain health and
                social services bodies. If your deployment falls under that regime, we help you keep controls aligned
                with your institutional obligations.
              </p>
            </div>
          </section>

          {/* PIPEDA */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">PIPEDA (Canada federal)</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Why it matters</h3>
                <p className="text-slate-600 mb-4">
                  PIPEDA is Canada&apos;s federal private sector privacy law. Quebec has a substantially similar
                  provincial law for activity inside Quebec, but PIPEDA still matters for commercial personal
                  information that crosses provincial or national borders.
                </p>
                <p className="text-slate-600">
                  For a Montreal company shipping health products across Canada or abroad, PIPEDA principles remain
                  part of a complete privacy program.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">How we design for it</h3>
                <ul className="space-y-3">
                  {[
                    'Accountability through a designated privacy contact',
                    'Identified purposes before collection',
                    'Meaningful consent and limited collection',
                    'Safeguards matched to sensitivity of health data',
                    'Breach assessment and notification when required',
                    'Openness about policies and practices',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* HIPAA */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">HIPAA ready for US customers</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Important distinction</h3>
                <p className="text-slate-600 mb-4">
                  HIPAA is US law. A Quebec company is not automatically under HIPAA for Canadian operations. HIPAA
                  becomes relevant when you handle US Protected Health Information for a US covered entity, usually
                  under a Business Associate Agreement.
                </p>
                <p className="text-slate-600">
                  TechnoHealth supports those workflows so US healthcare customers can use our platform with the
                  safeguards they expect.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Controls we support</h3>
                <ul className="space-y-3">
                  {[
                    'Encryption in transit (TLS 1.3)',
                    'Encryption at rest (AES-256)',
                    'Access control and authentication',
                    'Audit logs for data access',
                    'Business Associate Agreement support',
                    'Breach notification workflows',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Self hosted + security */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Safety architecture</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-slate-200 rounded-lg p-6">
                <Server className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">Self hosted by default mindset</h3>
                <p className="text-slate-600 mb-4">
                  Deploy on your servers so you keep ownership of the data path. That helps with Quebec transfer
                  assessments and customer security reviews.
                </p>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>• Customer controlled hosting regions</li>
                  <li>• No forced multi tenant lock in</li>
                  <li>• Clear processor boundaries</li>
                </ul>
              </div>
              <div className="border border-slate-200 rounded-lg p-6">
                <Lock className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">Technical safeguards</h3>
                <ul className="space-y-3">
                  {[
                    'AES-256 at rest and TLS 1.3 in transit',
                    'Role based access and MFA support',
                    'Audit logging for sensitive actions',
                    'Network isolation and hardened defaults',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What we do not claim lightly</h2>
            <p className="text-slate-600 max-w-3xl">
              Voluntary frameworks such as SOC 2 or HITRUST are useful when independently audited. We do not present
              unfinished certifications as completed seals. Ask us for the current status of any attestation you need
              for procurement.
            </p>
          </section>

          <section className="rounded-xl p-10 md:p-12 border border-slate-200 bg-slate-50 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Questions about safety and security?</h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Talk with us about Law 25, PIPEDA, HIPAA ready deployments, or self hosted architecture for your team.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Contact us
            </Link>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
}
