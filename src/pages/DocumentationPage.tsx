import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function DocumentationPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const codeExamples = [
    {
      id: 'curl',
      language: 'curl',
      label: 'cURL',
      code: `curl -X GET "https://api.technohealth.com/v1/users/42/health-data" \\
  -H "Authorization: Bearer <TOKEN>" \\
  -H "Accept: application/json"`,
      response: `{
  "heart_rate": 72,
  "steps": 10234,
  "sleep_duration": 420,
  "activity_level": "moderate"
}`
    },
    {
      id: 'python',
      language: 'python',
      label: 'Python SDK',
      code: `from technohealth import TechnoClient

client = TechnoClient(api_key="YOUR_API_KEY")
data = client.get_health_data(
    user_id=42, 
    start_date="2026-04-01",
    end_date="2026-04-07"
)
print(data['steps'], data['heart_rate'])`,
      response: `10234 72`
    },
    {
      id: 'javascript',
      language: 'javascript',
      label: 'JavaScript/Node.js',
      code: `const TechnoClient = require('technohealth');

const client = new TechnoClient({
  apiKey: 'YOUR_API_KEY'
});

const data = await client.getHealthData({
  userId: 42,
  startDate: '2026-04-01',
  endDate: '2026-04-07'
});

console.log(data.steps, data.heart_rate);`,
      response: `10234 72`
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-slate-900 text-white py-20 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Documentation</h1>
          <p className="text-xl text-slate-300">
            Guides and references for developers.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          {/* Sidebar */}
          <aside className="md:col-span-1">
            <div className="bg-slate-50 rounded-lg p-6 sticky top-24">
              <h3 className="font-bold text-slate-900 mb-4">Sections</h3>
              <nav className="space-y-3">
                {[
                  { label: 'Quickstart Guide', href: '#quickstart' },
                  { label: 'API Reference', href: '#api-reference' },
                  { label: 'SDK Guides', href: '#sdk-guides' },
                  { label: 'Tutorials', href: '#tutorials' },
                  { label: 'FAQ', href: '#faq' },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm block"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="md:col-span-3 space-y-16">
            {/* Quickstart */}
            <section id="quickstart">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Quickstart Guide</h2>
              <div className="space-y-4">
                <p className="text-slate-600">
                  Get up and running with TechnoHealth in three steps:
                </p>
                <ol className="space-y-4">
                  <li>
                    <h4 className="font-semibold text-slate-900 mb-2">1. Create Account</h4>
                    <p className="text-slate-600">Sign up for a free developer account at <Link to="/get-started" className="text-blue-600 hover:underline">Get Started</Link>. You'll receive your API key via email.</p>
                  </li>
                  <li>
                    <h4 className="font-semibold text-slate-900 mb-2">2. Connect a Device</h4>
                    <p className="text-slate-600">Use our dashboard to link a wearable device (Apple Watch, Fitbit, Garmin, Oura Ring, etc.) through OAuth. The device will start syncing data automatically.</p>
                  </li>
                  <li>
                    <h4 className="font-semibold text-slate-900 mb-2">3. Fetch Data</h4>
                    <p className="text-slate-600">Use your API key to fetch health data from the device. See examples below.</p>
                  </li>
                </ol>
              </div>
            </section>

            {/* API Reference */}
            <section id="api-reference">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">API Reference</h2>
              
              <div className="space-y-8">
                {/* Authentication */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Authentication</h3>
                  <p className="text-slate-600 mb-4">
                    All API requests require a Bearer token in the Authorization header:
                  </p>
                  <div className="bg-slate-900 text-slate-50 rounded-lg p-4 mb-4">
                    <code className="text-sm">Authorization: Bearer YOUR_API_KEY</code>
                  </div>
                </div>

                {/* Base URL */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Base URL</h3>
                  <div className="bg-slate-900 text-slate-50 rounded-lg p-4">
                    <code className="text-sm">https://api.technohealth.com/v1</code>
                  </div>
                </div>

                {/* Endpoints */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Core Endpoints</h3>
                  <div className="space-y-4">
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="font-mono text-blue-600 font-semibold mb-2">GET /users/{'{id}'}/devices</p>
                      <p className="text-slate-600 text-sm">List all connected devices for a user</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="font-mono text-blue-600 font-semibold mb-2">GET /users/{'{id}'}/health-data</p>
                      <p className="text-slate-600 text-sm">Fetch health data for a user (accepts date range filters)</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="font-mono text-blue-600 font-semibold mb-2">POST /webhooks</p>
                      <p className="text-slate-600 text-sm">Register a webhook endpoint for real-time data updates</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SDK Guides */}
            <section id="sdk-guides">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">SDK Guides</h2>
              <p className="text-slate-600 mb-8">
                TechnoHealth provides official SDKs for popular languages. Choose your language and see usage examples:
              </p>

              <div className="space-y-8">
                {codeExamples.map((example) => (
                  <div key={example.id} className="border border-slate-200 rounded-lg overflow-hidden">
                    <div className="bg-slate-50 px-6 py-4 flex items-center justify-between border-b border-slate-200">
                      <h4 className="font-semibold text-slate-900">{example.label}</h4>
                      <button
                        onClick={() => copyToClipboard(example.code, example.id)}
                        className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900"
                      >
                        {copiedCode === example.id ? (
                          <>
                            <Check className="w-4 h-4" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            Copy
                          </>
                        )}
                      </button>
                    </div>
                    <div className="bg-slate-900 text-slate-50 p-6 overflow-x-auto">
                      <pre className="text-sm font-mono whitespace-pre-wrap break-words">{example.code}</pre>
                    </div>
                    <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                      <p className="text-sm text-slate-600 mb-2 font-semibold">Response:</p>
                      <pre className="text-sm font-mono text-slate-700 whitespace-pre-wrap">{example.response}</pre>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Tutorials */}
            <section id="tutorials">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Tutorials</h2>
              <div className="grid gap-6">
                {[
                  {
                    title: 'Building a Health Dashboard',
                    desc: 'Step-by-step guide to create a real-time health dashboard'
                  },
                  {
                    title: 'Integrating with EHR Systems',
                    desc: 'Connect TechnoHealth to Epic, Cerner, or other EMR platforms'
                  },
                  {
                    title: 'Setting Up Webhooks',
                    desc: 'Receive real-time health data updates via webhooks'
                  },
                  {
                    title: 'HIPAA Compliance Checklist',
                    desc: 'Implementation guide for HIPAA-compliant applications'
                  },
                ].map((tutorial, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-lg p-6 hover:shadow-md transition">
                    <h4 className="font-semibold text-slate-900 mb-2">{tutorial.title}</h4>
                    <p className="text-slate-600 mb-4">{tutorial.desc}</p>
                    <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                      Read Tutorial →
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section id="faq">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What devices does TechnoHealth support?',
                    a: 'TechnoHealth supports 400+ devices including Apple Watch, Fitbit, Garmin, Oura Ring, Whoop, Samsung Galaxy Watch, and many more. See our complete device list here.'
                  },
                  {
                    q: 'How often is data synced?',
                    a: 'Data syncs in real-time for most devices. Once connected, health metrics are synchronized every 5-15 minutes depending on the device and network connectivity.'
                  },
                  {
                    q: 'Is my data encrypted?',
                    a: 'Yes. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We also maintain audit logs of all data access.'
                  },
                  {
                    q: 'Can I export data in FHIR format?',
                    a: 'Yes, but only on Business and Enterprise plans. FHIR export is available via the API endpoint /v1/users/{id}/fhir-export'
                  },
                  {
                    q: 'What is your uptime SLA?',
                    a: 'Core: 99.9%, Business: 99.95%, Enterprise: 99.99%'
                  },
                ].map((item, idx) => (
                  <div key={idx}>
                    <h4 className="font-semibold text-slate-900 mb-2">{item.q}</h4>
                    <p className="text-slate-600">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Support CTA */}
            <section className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-12 border border-blue-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Still have questions?</h3>
              <p className="text-slate-600 mb-6">Our support team is here to help. Reach out anytime.</p>
              <div className="flex gap-4 flex-wrap">
                <a href="mailto:support@technohealth.com" className="text-blue-600 font-semibold hover:text-blue-700">
                  Email Support
                </a>
                <Link to="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700">
                  Contact Us
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
