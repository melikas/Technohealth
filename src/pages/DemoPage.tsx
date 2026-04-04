import Header from '../components/Header';
import Footer from '../components/Footer';
import { Heart, Activity, Zap, TrendingUp, Bell, Users, CheckCircle, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DemoPage() {
  const [selectedPatient, setSelectedPatient] = useState(0);

  const patients = [
    {
      name: 'Sarah Mitchell',
      age: 62,
      condition: 'Heart Failure',
      status: 'Stable',
      riskLevel: 'Low',
      heartRate: 68,
      steps: 4821,
      sleep: '7h 24m',
      glucose: 110,
      lastSync: '2 mins ago'
    },
    {
      name: 'James Chen',
      age: 55,
      condition: 'Hypertension',
      status: 'Monitored',
      riskLevel: 'Medium',
      heartRate: 92,
      steps: 3412,
      sleep: '6h 45m',
      glucose: 125,
      lastSync: '5 mins ago'
    },
    {
      name: 'Maria Rodriguez',
      age: 71,
      condition: 'Diabetes',
      status: 'Alert',
      riskLevel: 'High',
      heartRate: 105,
      steps: 1250,
      sleep: '5h 30m',
      glucose: 218,
      lastSync: 'Now'
    }
  ];

  const currentPatient = patients[selectedPatient];

  const alerts = [
    { type: 'High Heart Rate', value: '105 bpm', time: '2 mins ago', severity: 'warning' },
    { type: 'Low Activity', value: '1,250 steps', time: '1 hour ago', severity: 'info' },
    { type: 'Elevated Glucose', value: '218 mg/dL', time: 'Now', severity: 'critical' }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-20 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Live Demo Dashboard</h1>
          <p className="text-xl text-slate-300">
            See real-time patient monitoring in action
          </p>
        </div>
      </section>

      {/* Main Dashboard */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Left: Patient List */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="p-4 border-b border-slate-200 bg-slate-50">
                  <h3 className="font-bold text-slate-900">Patients</h3>
                </div>
                <div className="divide-y divide-slate-200">
                  {patients.map((patient, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedPatient(idx)}
                      className={`w-full text-left p-4 transition-colors ${
                        selectedPatient === idx
                          ? 'bg-cyan-50 border-l-4 border-cyan-600'
                          : 'hover:bg-slate-50'
                      }`}
                    >
                      <div className="font-semibold text-slate-900 text-sm">{patient.name}</div>
                      <div className="text-xs text-slate-500 mt-1">{patient.condition}</div>
                      <div className="flex items-center gap-2 mt-2">
                        <span
                          className={`text-xs px-2 py-1 rounded font-semibold ${
                            patient.riskLevel === 'Low'
                              ? 'bg-green-100 text-green-700'
                              : patient.riskLevel === 'Medium'
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-red-100 text-red-700'
                          }`}
                        >
                          {patient.status}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Patient Details */}
            <div className="lg:col-span-3 space-y-6">
              {/* Patient Header */}
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">{currentPatient.name}</h2>
                    <p className="text-slate-600 mt-1">
                      {currentPatient.age} years • {currentPatient.condition}
                    </p>
                  </div>
                  <div className="text-right">
                    <span
                      className={`text-lg font-bold px-4 py-2 rounded-lg ${
                        currentPatient.riskLevel === 'Low'
                          ? 'bg-green-100 text-green-700'
                          : currentPatient.riskLevel === 'Medium'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {currentPatient.riskLevel} Risk
                    </span>
                  </div>
                </div>
                <p className="text-sm text-slate-500">Last sync: {currentPatient.lastSync}</p>
              </div>

              {/* Real-Time Metrics */}
              <div className="grid md:grid-cols-2 gap-4">
                {/* Heart Rate */}
                <div className="bg-white rounded-xl border border-slate-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-red-600" />
                      <span className="font-semibold text-slate-900">Heart Rate</span>
                    </div>
                    <span className="text-xs bg-red-50 text-red-700 px-3 py-1 rounded-full font-semibold">
                      Real-time
                    </span>
                  </div>
                  <div className="text-4xl font-bold text-slate-900 mb-2">
                    {currentPatient.heartRate}
                    <span className="text-lg text-slate-600 ml-2">bpm</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div
                      className="bg-red-600 h-2 rounded-full"
                      style={{ width: `${(currentPatient.heartRate / 120) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-slate-600 mt-3">Normal range: 60-100 bpm</p>
                </div>

                {/* Activity */}
                <div className="bg-white rounded-xl border border-slate-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Activity className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold text-slate-900">Steps Today</span>
                    </div>
                    <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-semibold">
                      10K goal
                    </span>
                  </div>
                  <div className="text-4xl font-bold text-slate-900 mb-2">
                    {currentPatient.steps.toLocaleString()}
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${(currentPatient.steps / 10000) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-slate-600 mt-3">
                    {Math.round((currentPatient.steps / 10000) * 100)}% of daily goal
                  </p>
                </div>

                {/* Sleep */}
                <div className="bg-white rounded-xl border border-slate-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-purple-600" />
                      <span className="font-semibold text-slate-900">Sleep Last Night</span>
                    </div>
                    <span className="text-xs bg-purple-50 text-purple-700 px-3 py-1 rounded-full font-semibold">
                      7h avg
                    </span>
                  </div>
                  <div className="text-4xl font-bold text-slate-900 mb-2">{currentPatient.sleep}</div>
                  <div className="text-sm text-slate-600">Quality: 78% • Deep: 2h 10m</div>
                </div>

                {/* Glucose */}
                <div className="bg-white rounded-xl border border-slate-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-slate-900">Glucose</span>
                    </div>
                    <span className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full font-semibold">
                      Tracked
                    </span>
                  </div>
                  <div className="text-4xl font-bold text-slate-900 mb-2">
                    {currentPatient.glucose}
                    <span className="text-lg text-slate-600 ml-2">mg/dL</span>
                  </div>
                  <div className="text-sm text-slate-600">Normal: 70-100 mg/dL</div>
                </div>
              </div>

              {/* Alerts */}
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Bell className="w-5 h-5 text-orange-600" />
                  <h3 className="font-bold text-slate-900">Recent Alerts</h3>
                </div>
                <div className="space-y-3">
                  {alerts.map((alert, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-lg border ${
                        alert.severity === 'critical'
                          ? 'bg-red-50 border-red-200'
                          : alert.severity === 'warning'
                          ? 'bg-yellow-50 border-yellow-200'
                          : 'bg-blue-50 border-blue-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-slate-900 text-sm">{alert.type}</p>
                          <p className="text-xs text-slate-600 mt-1">{alert.value}</p>
                        </div>
                        <span className="text-xs text-slate-500">{alert.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Dashboard Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-8">
              <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Real-Time Vitals</h3>
              <p className="text-slate-600 text-sm">
                Watch heart rate, activity, sleep, glucose—all streamed live from wearables.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl border border-slate-200 p-8">
              <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Smart Alerts</h3>
              <p className="text-slate-600 text-sm">
                Instant notifications when vitals cross clinical thresholds. Customizable rules.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl border border-slate-200 p-8">
              <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Historical Trends</h3>
              <p className="text-slate-600 text-sm">
                Track health patterns over weeks and months. Spot anomalies automatically.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl border border-slate-200 p-8">
              <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Multi-Patient View</h3>
              <p className="text-slate-600 text-sm">
                Monitor dozens of patients. Risk stratification. Bulk alerts. Priority sorting.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl border border-slate-200 p-8">
              <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Clinical Compliance</h3>
              <p className="text-slate-600 text-sm">
                HIPAA audit logs. FHIR export. EHR integration. All data stays on-premise.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl border border-slate-200 p-8">
              <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Custom Workflows</h3>
              <p className="text-slate-600 text-sm">
                Build clinical decision rules. Automate interventions. Connect your systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to start?</h2>
          <p className="text-cyan-100 mb-8 max-w-2xl mx-auto">
            See what real-time patient monitoring can do for your clinical outcomes
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors inline-flex items-center justify-center gap-2">
              Full Live Demo <ChevronRight className="w-4 h-4" />
            </button>
            <Link to="/get-started" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors inline-flex items-center justify-center">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
