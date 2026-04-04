import { Activity, TrendingUp, AlertCircle, Download, Users, Calendar } from 'lucide-react';

export default function Dashboard() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Clinical intelligence at your fingertips
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A purpose-built dashboard that transforms complex wearable data into clear, actionable clinical insights
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 shadow-2xl">
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-700">
            <div className="flex items-center space-x-4">
              <Activity className="w-6 h-6 text-cyan-400" />
              <span className="text-xl font-semibold text-white">Patient Dashboard</span>
            </div>
            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 bg-slate-800 border border-slate-700 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">Last 30 days</span>
              </button>
              <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span className="text-sm">Export</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-400 text-sm">Sleep Quality</span>
                <TrendingUp className="w-5 h-5 text-green-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">87%</div>
              <div className="text-sm text-green-400">+5% from last week</div>
              <div className="mt-4 h-2 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full w-[87%] bg-gradient-to-r from-cyan-500 to-green-500"></div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-400 text-sm">Recovery Score</span>
                <Activity className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">72%</div>
              <div className="text-sm text-slate-400">Optimal range</div>
              <div className="mt-4 h-2 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full w-[72%] bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-400 text-sm">Rhythm Stability</span>
                <AlertCircle className="w-5 h-5 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">6.8/10</div>
              <div className="text-sm text-yellow-400">Minor disruption detected</div>
              <div className="mt-4 h-2 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full w-[68%] bg-gradient-to-r from-yellow-500 to-orange-500"></div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <span className="text-white font-semibold">Longitudinal Trends</span>
                <span className="text-xs text-cyan-400">30-day pattern</span>
              </div>
              <div className="h-40 flex items-end space-x-2">
                {[65, 70, 68, 72, 75, 73, 78, 82, 80, 85, 87, 84, 88, 90].map((value, i) => (
                  <div key={i} className="flex-1 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t" style={{ height: `${value}%` }}></div>
                ))}
              </div>
              <div className="mt-4 flex justify-between text-xs text-slate-400">
                <span>Week 1</span>
                <span>Week 2</span>
                <span>Week 3</span>
                <span>Week 4</span>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <span className="text-white font-semibold">AI Insights</span>
                <span className="text-xs text-cyan-400">Generated today</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 bg-slate-900/50 rounded-lg border border-slate-700">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <div className="text-sm text-white mb-1">Improved sleep consistency</div>
                    <div className="text-xs text-slate-400">Sleep onset time variance decreased by 23 minutes</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-slate-900/50 rounded-lg border border-slate-700">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <div className="text-sm text-white mb-1">Activity rhythm disruption</div>
                    <div className="text-xs text-slate-400">Unusual pattern detected on Tuesday evening</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-slate-900/50 rounded-lg border border-slate-700">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <div className="text-sm text-white mb-1">Recovery optimization opportunity</div>
                    <div className="text-xs text-slate-400">Consider adjusting evening routine timing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-slate-400" />
                <span className="text-white font-medium">Cohort Comparison</span>
              </div>
              <button className="text-sm text-cyan-400 hover:text-cyan-300">View full analysis →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
