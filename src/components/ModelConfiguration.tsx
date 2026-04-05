import { useState } from 'react';
import { ChevronRight, Plus, Trash2, Settings, Target } from 'lucide-react';

interface HFModel {
  id: string;
  name: string;
  description: string;
  downloads: number;
  rating: number;
  tags: string[];
  category: string;
}

interface ModelConfigProps {
  model: HFModel;
  isDarkMode: boolean;
  selectedPatient: any;
  onBack: () => void;
  onApply: (config: any) => void;
}

export default function ModelConfiguration({ model, isDarkMode, selectedPatient, onBack, onApply }: ModelConfigProps) {
  const [selectedDataSources, setSelectedDataSources] = useState<string[]>([]);
  const [modelObjective, setModelObjective] = useState('');
  const [outputMetrics, setOutputMetrics] = useState<string[]>(['']);
  const [threshold, setThreshold] = useState('0.5');
  const [hyperparameters, setHyperparameters] = useState({
    learningRate: '0.001',
    batchSize: '32',
    epochs: '100',
    validationSplit: '0.2'
  });

  const availableDataSources = [
    { id: 'heart-rate', label: 'Heart Rate', icon: '❤️' },
    { id: 'blood-pressure', label: 'Blood Pressure', icon: '📊' },
    { id: 'sleep', label: 'Sleep Data', icon: '😴' },
    { id: 'activity', label: 'Activity Level', icon: '🏃' },
    { id: 'stress', label: 'Stress Level', icon: '😰' },
    { id: 'oxygen', label: 'Oxygen Level', icon: '🫁' },
    { id: 'temperature', label: 'Temperature', icon: '🌡️' },
    { id: 'hrv', label: 'HRV', icon: '📈' },
  ];

  const toggleDataSource = (sourceId: string) => {
    setSelectedDataSources(prev =>
      prev.includes(sourceId)
        ? prev.filter(id => id !== sourceId)
        : [...prev, sourceId]
    );
  };

  const addOutputMetric = () => {
    setOutputMetrics([...outputMetrics, '']);
  };

  const removeOutputMetric = (idx: number) => {
    setOutputMetrics(outputMetrics.filter((_, i) => i !== idx));
  };

  const handleApply = () => {
    if (!modelObjective || selectedDataSources.length === 0) {
      alert('Please select at least one data source and define an objective');
      return;
    }

    const config = {
      model,
      selectedDataSources,
      modelObjective,
      outputMetrics: outputMetrics.filter(m => m.trim()),
      threshold: parseFloat(threshold),
      hyperparameters
    };

    onApply(config);
  };

  return (
    <div className={`rounded-xl border ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
      {/* Header */}
      <div className={`p-6 border-b ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
        <button
          onClick={onBack}
          className={`flex items-center gap-2 mb-4 text-sm font-semibold ${
            isDarkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600'
          }`}
        >
          ← Back
        </button>
        <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
          {model.name}
        </h3>
        <p className={`text-sm mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          Patient: <span className="font-semibold">{selectedPatient.name}</span>
        </p>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6 max-h-96 overflow-y-auto">
        
        {/* 1. Model Objective */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-5 h-5 text-cyan-500" />
            <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Define Model Objective
            </h4>
          </div>
          <textarea
            value={modelObjective}
            onChange={(e) => setModelObjective(e.target.value)}
            placeholder="e.g., Predict heart anomalies based on HR patterns and predict the risk of arrhythmia within 24 hours"
            rows={3}
            className={`w-full px-3 py-2 rounded-lg border ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
          />
        </div>

        {/* 2. Select Data Sources */}
        <div>
          <h4 className={`font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Select Data Sources
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {availableDataSources.map((source) => (
              <button
                key={source.id}
                onClick={() => toggleDataSource(source.id)}
                className={`p-3 rounded-lg border-2 transition-all text-left ${
                  selectedDataSources.includes(source.id)
                    ? 'border-cyan-500 bg-cyan-500/10'
                    : isDarkMode ? 'border-slate-700 bg-slate-800 hover:border-slate-600' : 'border-slate-300 bg-slate-50 hover:border-slate-400'
                }`}
              >
                <div className="text-lg mb-1">{source.icon}</div>
                <p className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  {source.label}
                </p>
                {selectedDataSources.includes(source.id) && (
                  <span className="text-xs text-cyan-500 mt-1">✓ Selected</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Output Metrics */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Define Output Metrics
            </h4>
            <button
              onClick={addOutputMetric}
              className="flex items-center gap-1 px-2 py-1 text-xs bg-cyan-600 text-white rounded hover:bg-cyan-700"
            >
              <Plus className="w-3 h-3" />
              Add
            </button>
          </div>
          <div className="space-y-2">
            {outputMetrics.map((metric, idx) => (
              <div key={idx} className="flex gap-2">
                <input
                  type="text"
                  value={metric}
                  onChange={(e) => {
                    const updated = [...outputMetrics];
                    updated[idx] = e.target.value;
                    setOutputMetrics(updated);
                  }}
                  placeholder={`Output metric ${idx + 1} (e.g., anomaly_score, risk_level)`}
                  className={`flex-1 px-3 py-2 rounded-lg border ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
                />
                {outputMetrics.length > 1 && (
                  <button
                    onClick={() => removeOutputMetric(idx)}
                    className="px-2 py-2 text-red-600 hover:bg-red-50"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 4. Threshold */}
        <div>
          <label className={`block text-sm font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Alert Threshold (0-1)
          </label>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={threshold}
              onChange={(e) => setThreshold(e.target.value)}
              className="flex-1"
            />
            <input
              type="number"
              value={threshold}
              onChange={(e) => setThreshold(e.target.value)}
              min="0"
              max="1"
              step="0.1"
              className={`w-20 px-2 py-1 rounded border ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
            />
          </div>
          <p className={`text-xs mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Alert triggers when prediction confidence exceeds this threshold
          </p>
        </div>

        {/* 5. Hyperparameters */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Settings className="w-5 h-5 text-cyan-500" />
            <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Hyperparameters
            </h4>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={`text-xs font-semibold block mb-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Learning Rate
              </label>
              <input
                type="text"
                value={hyperparameters.learningRate}
                onChange={(e) => setHyperparameters({ ...hyperparameters, learningRate: e.target.value })}
                className={`w-full px-2 py-1 rounded border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
              />
            </div>
            <div>
              <label className={`text-xs font-semibold block mb-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Batch Size
              </label>
              <input
                type="number"
                value={hyperparameters.batchSize}
                onChange={(e) => setHyperparameters({ ...hyperparameters, batchSize: e.target.value })}
                className={`w-full px-2 py-1 rounded border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
              />
            </div>
            <div>
              <label className={`text-xs font-semibold block mb-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Epochs
              </label>
              <input
                type="number"
                value={hyperparameters.epochs}
                onChange={(e) => setHyperparameters({ ...hyperparameters, epochs: e.target.value })}
                className={`w-full px-2 py-1 rounded border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
              />
            </div>
            <div>
              <label className={`text-xs font-semibold block mb-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Validation Split
              </label>
              <input
                type="number"
                value={hyperparameters.validationSplit}
                onChange={(e) => setHyperparameters({ ...hyperparameters, validationSplit: e.target.value })}
                min="0"
                max="1"
                step="0.1"
                className={`w-full px-2 py-1 rounded border text-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={`p-6 border-t flex gap-3 ${isDarkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-slate-50'}`}>
        <button
          onClick={onBack}
          className={`flex-1 px-4 py-2 rounded font-semibold ${isDarkMode ? 'bg-slate-700 text-white hover:bg-slate-600' : 'bg-slate-200 text-slate-900 hover:bg-slate-300'}`}
        >
          Cancel
        </button>
        <button
          onClick={handleApply}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 font-semibold"
        >
          Apply Model
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
