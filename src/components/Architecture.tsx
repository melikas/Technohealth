import { Database, Layers, BrainCircuit } from 'lucide-react';

export default function Architecture() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Technical architecture built for scale
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A three-layer intelligent infrastructure designed for reproducibility, flexibility, and clinical impact
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl border-2 border-slate-200 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
              <Database className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Data Ingestion Layer</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start">
                <span className="text-cyan-600 mr-2">•</span>
                <span>Multi-source wearable connectors</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-600 mr-2">•</span>
                <span>Heterogeneous format handlers</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-600 mr-2">•</span>
                <span>Real-time and batch processing</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-600 mr-2">•</span>
                <span>Quality validation pipelines</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border-2 border-slate-200 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Layers className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Unified Data Model</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start">
                <span className="text-cyan-600 mr-2">•</span>
                <span>Standardized schema design</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-600 mr-2">•</span>
                <span>Context preservation</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-600 mr-2">•</span>
                <span>Longitudinal record linking</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-600 mr-2">•</span>
                <span>Metadata and provenance tracking</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border-2 border-slate-200 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl flex items-center justify-center mb-6">
              <BrainCircuit className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">AI Analytics Layer</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start">
                <span className="text-cyan-600 mr-2">•</span>
                <span>Flexible model selection</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-600 mr-2">•</span>
                <span>Pattern detection algorithms</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-600 mr-2">•</span>
                <span>Rhythm analysis engine</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-600 mr-2">•</span>
                <span>Interpretable insight generation</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-10">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Platform capabilities
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-300">Adaptive analytics based on dataset size and quality</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-300">Reproducible analysis pipeline for research integrity</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-300">Scalable cloud-native architecture</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-300">API-first design for seamless integration</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-300">Real-time and batch processing modes</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-300">Comprehensive data export and auditability</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
