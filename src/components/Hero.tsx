import { Link } from 'react-router-dom';

export default function Hero() {
  const metrics = [
    { 
      number: '+100', 
      label: 'Data Resources',
      description: 'Integrated Data Platforms',
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'from-cyan-500/15 to-cyan-600/10'
    },
    { 
      number: 'AI', 
      label: 'Advanced ML Models',
      description: 'Predicting Health, Powering Care',
      color: 'from-blue-400 to-blue-500',
      bgColor: 'from-blue-500/15 to-blue-600/10'
    },
    { 
      number: '+30%', 
      label: 'Efficiency Boost',
      description: 'Developer Time Saved',
      color: 'from-purple-400 to-purple-500',
      bgColor: 'from-purple-500/15 to-purple-600/10'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-32 pb-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side - Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <div className="mb-4">Wearables Integration</div>
              <div className="mb-4">For your</div>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Health Tracking App 
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Connect wearables and health platforms with one integration. We build digital products that accelerate healthcare services.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-12">
              <Link
                to="/auth"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all text-lg"
              >
                Get Started
              </Link>
              <Link
                to="/schedule-demo"
                className="px-8 py-4 border-2 border-cyan-400/50 text-cyan-300 rounded-lg font-bold hover:bg-cyan-400/10 transition-all text-lg"
              >
                Schedule a demo
              </Link>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <div className="w-full h-96 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl overflow-hidden border border-cyan-400/30 shadow-2xl relative">
              <img 
                src="/Images/hero-second.png" 
                alt="Hero Illustration"
                className="w-full h-full object-cover opacity-80 transition-opacity duration-300 hover:opacity-95"
                style={{ mixBlendMode: 'screen' }}
              />
              {/* Blend overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 pointer-events-none"
                style={{ mixBlendMode: 'multiply' }}
              ></div>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border backdrop-blur-md bg-gradient-to-br ${metric.bgColor} border-white/10 p-8`}
            >
              {/* Number */}
              <div className={`text-6xl font-bold mb-3 bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                {metric.number}
              </div>

              {/* Main Label */}
              <h3 className="text-xl font-bold text-white mb-2">
                {metric.label}
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed">
                {metric.description}
              </p>

              {/* Accent Line */}
              <div className={`border-t border-gradient-to-r ${metric.color} mt-4 pt-4`}></div>
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
