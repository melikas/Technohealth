import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Search, Code, Zap, Shield } from 'lucide-react';

export default function DataSourcesPage() {
  const [activeTab, setActiveTab] = useState<'api' | 'sdk'>('api');
  const [searchTerm, setSearchTerm] = useState('');

  const dataSources = {
    api: [
      {
        name: 'Apple Watch',
        category: 'Wearable',
        description: 'Access real-time health data from Apple Watch devices',
        status: 'Production',
        docs: true,
      },
      {
        name: 'Fitbit',
        category: 'Wearable',
        description: 'Connect fitness trackers and smartwatches',
        status: 'Production',
        docs: true,
      },
      {
        name: 'Oura Ring',
        category: 'Wearable',
        description: 'Retrieve sleep and activity data from Oura endpoints',
        status: 'Production',
        docs: true,
      },
      {
        name: 'WHOOP',
        category: 'Wearable',
        description: 'Pull performance and recovery metrics',
        status: 'Production',
        docs: true,
      },
      {
        name: 'Google Fit',
        category: 'Platform',
        description: 'Aggregate fitness data from Google Fit',
        status: 'Production',
        docs: true,
      },
      {
        name: 'Samsung Health',
        category: 'Platform',
        description: 'Integrate Samsung Health mobile app data',
        status: 'Production',
        docs: true,
      },
      {
        name: 'Garmin',
        category: 'Wearable',
        description: 'Connect Garmin devices and portals',
        status: 'Beta',
        docs: true,
      },
      {
        name: 'Polar',
        category: 'Wearable',
        description: 'Access sports watch and tracker data',
        status: 'Production',
        docs: true,
      },
    ],
    sdk: [
      {
        name: 'React SDK',
        language: 'JavaScript/TypeScript',
        description: 'Official React integration library',
        status: 'Production',
        docs: true,
      },
      {
        name: 'Python SDK',
        language: 'Python',
        description: 'Python library for backend integrations',
        status: 'Production',
        docs: true,
      },
      {
        name: 'Node.js SDK',
        language: 'JavaScript',
        description: 'Official Node.js server-side SDK',
        status: 'Production',
        docs: true,
      },
      {
        name: 'iOS SDK',
        language: 'Swift',
        description: 'Native iOS integration framework',
        status: 'Production',
        docs: true,
      },
      {
        name: 'Android SDK',
        language: 'Kotlin/Java',
        description: 'Native Android integration library',
        status: 'Production',
        docs: true,
      },
      {
        name: 'Java SDK',
        language: 'Java',
        description: 'Enterprise Java implementations',
        status: 'Beta',
        docs: true,
      },
    ],
  };

  const filtered = dataSources[activeTab].filter(
    source =>
      source.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      source.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Available Data Sources
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Choose from our comprehensive collection of API integrations and SDKs to connect with any wearable device or health platform.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Search Bar */}
          <div className="mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search integrations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-12 border-b border-slate-200">
            <button
              onClick={() => setActiveTab('api')}
              className={`px-6 py-3 font-semibold transition-colors ${
                activeTab === 'api'
                  ? 'text-cyan-600 border-b-2 border-cyan-600'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Code className="w-5 h-5 inline mr-2" />
              API Integrations
            </button>
            <button
              onClick={() => setActiveTab('sdk')}
              className={`px-6 py-3 font-semibold transition-colors ${
                activeTab === 'sdk'
                  ? 'text-cyan-600 border-b-2 border-cyan-600'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Zap className="w-5 h-5 inline mr-2" />
              SDKs
            </button>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((source, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-cyan-300 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      {source.name}
                    </h3>
                    <p className="text-sm text-slate-500">
                      {'category' in source ? source.category : source.language}
                    </p>
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    source.status === 'Production'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {source.status}
                  </span>
                </div>
                <p className="text-slate-600 mb-4">{source.description}</p>
                <a
                  href="#"
                  className="text-cyan-600 font-semibold hover:text-cyan-700 inline-flex items-center gap-2"
                >
                  View Docs →
                </a>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-slate-600">
                No results found for "{searchTerm}"
              </p>
            </div>
          )}

          {/* Info Section */}
          <div className="mt-20 grid md:grid-cols-2 gap-12">
            <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
              <Shield className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Enterprise Ready</h3>
              <p className="text-slate-700">
                All our integrations are HIPAA compliant, SOC 2 audited, and built with security-first principles to protect your patient data.
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-8 border border-green-200">
              <Code className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Developer Friendly</h3>
              <p className="text-slate-700">
                Comprehensive documentation, code examples, and sandbox environments make integration quick and easy for your development team.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
