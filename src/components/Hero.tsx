import { Link } from 'react-router-dom';

export default function Hero() {
  const stats = [
    { label: 'Connected Devices', description: '15+ wearable platforms', highlight: true },
    { label: 'Setup Time', description: '7 days to live integration', highlight: false },
    { label: 'Uptime', description: '99.9% data reliability', highlight: false },
    { label: 'Compliance', description: 'HIPAA, HITRUST, SOC 2 ready', highlight: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-32 pb-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            Wearables Integration
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            For your health tracking app 
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Connect +100 wearables and health platforms with one integration. We build digital products that accelerate healthcare and empower people.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mb-20">
            <Link
              to="/auth"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all text-lg"
            >
              Get Started
            </Link>
            <Link
              to="/demo"
              className="px-8 py-4 border-2 border-cyan-400/50 text-cyan-300 rounded-lg font-bold hover:bg-cyan-400/10 transition-all text-lg"
            >
              Schedule a demo
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`rounded-xl border backdrop-blur-sm transition-all ${
                stat.highlight
                  ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-400/50'
                  : 'bg-slate-800/50 border-slate-700/50'
              } p-8 text-center group hover:border-cyan-400/80 hover:bg-slate-800/70`}
            >
              <div className={`text-4xl md:text-5xl font-bold mb-3 ${stat.highlight ? 'text-cyan-300' : 'text-blue-300'}`}>
                {stat.label}
              </div>
              <div className="text-slate-300 text-sm font-semibold">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl backdrop-blur-sm p-8 text-center">
          <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-4">Enterprise-Grade Security</p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-slate-500">
            <span className="flex items-center gap-2">
              <span className="text-cyan-400">✓</span> HIPAA Compliant
            </span>
            <span className="flex items-center gap-2">
              <span className="text-cyan-400">✓</span> HITRUST Certified
            </span>
            <span className="flex items-center gap-2">
              <span className="text-cyan-400">✓</span> SOC 2 Type II
            </span>
            <span className="flex items-center gap-2">
              <span className="text-cyan-400">✓</span> Self-Hosted
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
