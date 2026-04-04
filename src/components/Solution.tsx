import { Database, Brain, CheckCircle, Zap } from 'lucide-react';

export default function Solution() {
  const workflow = [
    { step: 'Connect Devices', icon: CheckCircle },
    { step: 'Normalize Data', icon: CheckCircle },
    { step: 'Set Thresholds', icon: CheckCircle },
    { step: 'Monitor & Alert', icon: CheckCircle },
  ];

  return (
    <section id="product" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Wearables Integration Platform
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl">
            Unified API connecting 15+ wearable platforms. Normalize streaming health data. Build clinical workflows. All HIPAA-compliant, self-hosted infrastructure you own.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-blue-50 p-8 rounded-lg border-2 border-blue-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Device Integration</h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold mt-1">✓</span>
                <span><strong>Apple Health & watchOS</strong> - Seamless iOS integration</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold mt-1">✓</span>
                <span><strong>Google Fit & Wear OS</strong> - Android ecosystem</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold mt-1">✓</span>
                <span><strong>Garmin, Oura, Whoop</strong> - Fitness wearables</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold mt-1">✓</span>
                <span><strong>CGM, ECG, Biosensors</strong> - Medical devices</span>
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 p-8 rounded-lg border-2 border-purple-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Clinical Intelligence</h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start space-x-2">
                <span className="text-purple-600 font-bold mt-1">✓</span>
                <span><strong>Data Normalization</strong> - One model, any device</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-purple-600 font-bold mt-1">✓</span>
                <span><strong>Custom Health Scores</strong> - Clinical outcome focused</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-purple-600 font-bold mt-1">✓</span>
                <span><strong>Threshold Alerts</strong> - Real-time caregiver notifications</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-purple-600 font-bold mt-1">✓</span>
                <span><strong>ML-Ready Pipelines</strong> - Predictive analytics</span>
              </li>
            </ul>
          </div>
        </div>

        <div id="platform" className="bg-gradient-to-r from-slate-900 to-slate-800 p-12 rounded-lg">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-3">Wearables Integration Journey</h3>
            <p className="text-slate-300">From raw device data to clinical insights in four stages</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
            {workflow.map((item, index) => (
              <div key={index} className="flex items-center w-full md:w-auto">
                <div className="bg-cyan-600 rounded-lg px-6 py-3 flex items-center space-x-3 w-full md:w-auto justify-center">
                  <item.icon className="w-5 h-5 text-white" />
                  <span className="text-white font-semibold">{item.step}</span>
                </div>
                {index < workflow.length - 1 && (
                  <div className="hidden md:block w-8 h-0.5 bg-slate-600 mx-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
