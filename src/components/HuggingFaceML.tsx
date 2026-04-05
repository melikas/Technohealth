import { useState } from 'react';
import { Download, Play, Settings, Trash2, Plus, ChevronDown, Globe, Link as LinkIcon, Search } from 'lucide-react';
import HuggingFaceBrowser from './HuggingFaceBrowser';
import ModelConfiguration from './ModelConfiguration';

interface Model {
  id: string;
  name: string;
  description: string;
  source: 'custom' | 'huggingface' | 'claude' | 'datasever';
  type: 'classification' | 'regression' | 'time-series' | 'anomaly-detection' | 'custom';
  inputParams: string[];
  outputFormat: string;
  status: 'idle' | 'running' | 'error';
  endpoint?: string;
  apiKey?: string;
}

interface CustomOutput {
  id: string;
  name: string;
  description: string;
  outputFields: string[];
  threshold?: string;
}

const BUILTIN_MODELS: Model[] = [
  {
    id: 'hf-heart-anomaly',
    name: 'Heart Rate Anomaly Detection',
    description: 'Detects anomalies in heart rate patterns using LSTM',
    source: 'huggingface',
    type: 'anomaly-detection',
    inputParams: ['heart_rate_array', 'timestamp_array'],
    outputFormat: 'JSON',
    status: 'idle'
  },
  {
    id: 'hf-bp-predict',
    name: 'Blood Pressure Predictor',
    description: 'Predicts blood pressure trends using time-series analysis',
    source: 'huggingface',
    type: 'time-series',
    inputParams: ['systolic_trend', 'diastolic_trend', 'days'],
    outputFormat: 'JSON',
    status: 'idle'
  },
  {
    id: 'hf-sleep-quality',
    name: 'Sleep Quality Classifier',
    description: 'Classifies sleep quality based on wearable data',
    source: 'huggingface',
    type: 'classification',
    inputParams: ['sleep_duration', 'heart_rate_variability', 'movement_data'],
    outputFormat: 'JSON',
    status: 'idle'
  },
  {
    id: 'hf-stress-detection',
    name: 'Stress Level Detector',
    description: 'Detects stress levels from multiple biometric signals',
    source: 'huggingface',
    type: 'classification',
    inputParams: ['heart_rate', 'hrv', 'temperature', 'activity_level'],
    outputFormat: 'JSON',
    status: 'idle'
  },
];

interface MLModelsProps {
  selectedPatient: any;
  isDarkMode: boolean;
}

export default function MLModels({ selectedPatient, isDarkMode }: MLModelsProps) {
  const [builtinModels, setBuiltinModels] = useState<Model[]>(BUILTIN_MODELS);
  const [customModels, setCustomModels] = useState<Model[]>([]);
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);
  const [customOutputs, setCustomOutputs] = useState<CustomOutput[]>([]);
  const [showCustomModelForm, setShowCustomModelForm] = useState(false);
  const [showOutputForm, setShowOutputForm] = useState(false);
  const [showHFBrowser, setShowHFBrowser] = useState(false);
  const [showModelConfig, setShowModelConfig] = useState(false);
  const [selectedHFModel, setSelectedHFModel] = useState<any>(null);
  const [showModelDetails, setShowModelDetails] = useState(false);
  const [selectedModelForDetails, setSelectedModelForDetails] = useState<Model | null>(null);
  const [executionResult, setExecutionResult] = useState<any>(null);
  
  const [newCustomModel, setNewCustomModel] = useState({
    name: '',
    description: '',
    source: 'claude' as 'custom' | 'huggingface' | 'claude' | 'datasever',
    type: 'custom' as any,
    endpoint: '',
    apiKey: '',
    inputParams: [''],
    outputFormat: 'JSON'
  });

  const [newOutput, setNewOutput] = useState({
    name: '',
    description: '',
    outputFields: [''],
    threshold: ''
  });

  const addCustomModel = () => {
    if (newCustomModel.name && newCustomModel.endpoint) {
      const model: Model = {
        id: `custom-${Date.now()}`,
        name: newCustomModel.name,
        description: newCustomModel.description,
        source: newCustomModel.source,
        type: newCustomModel.type,
        inputParams: newCustomModel.inputParams.filter(p => p.trim()),
        outputFormat: newCustomModel.outputFormat,
        endpoint: newCustomModel.endpoint,
        apiKey: newCustomModel.apiKey,
        status: 'idle'
      };

      setCustomModels([...customModels, model]);
      setNewCustomModel({
        name: '',
        description: '',
        source: 'claude',
        type: 'custom',
        endpoint: '',
        apiKey: '',
        inputParams: [''],
        outputFormat: 'JSON'
      });
      setShowCustomModelForm(false);
    }
  };

  const deleteModel = (modelId: string) => {
    setCustomModels(customModels.filter(m => m.id !== modelId));
    if (selectedModel?.id === modelId) {
      setSelectedModel(null);
    }
  };

  const addOutputField = () => {
    setNewOutput({
      ...newOutput,
      outputFields: [...newOutput.outputFields, '']
    });
  };

  const removeOutputField = (idx: number) => {
    setNewOutput({
      ...newOutput,
      outputFields: newOutput.outputFields.filter((_, i) => i !== idx)
    });
  };

  const saveCustomOutput = () => {
    if (newOutput.name && newOutput.outputFields.some(f => f.trim())) {
      const customOutput: CustomOutput = {
        id: `output-${Date.now()}`,
        name: newOutput.name,
        description: newOutput.description,
        outputFields: newOutput.outputFields.filter(f => f.trim()),
        threshold: newOutput.threshold || undefined
      };

      setCustomOutputs([...customOutputs, customOutput]);
      setNewOutput({
        name: '',
        description: '',
        outputFields: [''],
        threshold: ''
      });
      setShowOutputForm(false);
    }
  };

  const deleteCustomOutput = (outputId: string) => {
    setCustomOutputs(customOutputs.filter(o => o.id !== outputId));
  };

  const runModel = () => {
    if (!selectedModel) return;

    const mockResult = {
      modelId: selectedModel.id,
      modelName: selectedModel.name,
      source: selectedModel.source,
      executedAt: new Date().toLocaleTimeString(),
      inputs: {
        patient: selectedPatient.name,
        dataPoints: selectedModel.inputParams.length
      },
      outputs: {
        result: 'Success',
        confidence: 0.92,
        timestamp: new Date().toISOString()
      }
    };

    setExecutionResult(mockResult);
  };

  const handleHFModelSelect = (hfModel: any) => {
    setSelectedHFModel(hfModel);
    setShowHFBrowser(false);
    setShowModelConfig(true);
  };

  const handleModelConfigApply = (config: any) => {
    // Convert HF model to our internal model format
    const newModel: Model = {
      id: `hf-${Date.now()}`,
      name: config.model.name,
      description: config.modelObjective,
      source: 'huggingface',
      type: 'custom',
      inputParams: config.selectedDataSources,
      outputFormat: 'JSON',
      endpoint: config.model.id,
      status: 'idle'
    };

    setCustomModels([...customModels, newModel]);
    setShowModelConfig(false);
    setSelectedHFModel(null);
  };

  const ModelCard = ({ model }: { model: Model }) => {
    const isCustom = customModels.some(m => m.id === model.id);
    const isSelected = selectedModel?.id === model.id;

    return (
      <div
        className={`p-4 rounded-lg border-2 ${
          isSelected
            ? isDarkMode ? 'border-cyan-500 bg-cyan-500/10' : 'border-indigo-500 bg-indigo-50'
            : isDarkMode ? 'border-slate-700 bg-slate-800 hover:border-slate-600' : 'border-slate-300 bg-slate-50 hover:border-slate-400'
        }`}
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              {model.name}
            </h4>
          </div>
        </div>

        <div className="flex items-center justify-between">
          {isCustom ? (
            <>
              <span className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {model.type}
              </span>
              <button
                onClick={() => deleteModel(model.id)}
                className="flex items-center gap-1 px-2 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700"
              >
                <Trash2 className="w-3 h-3" />
                Delete
              </button>
            </>
          ) : (
            <>
              <span className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {model.type}
              </span>
              <button
                onClick={() => {
                  setSelectedModelForDetails(model);
                  setShowModelDetails(true);
                }}
                className={`px-3 py-1 text-xs font-semibold rounded transition-colors ${
                  isDarkMode
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    : 'bg-indigo-500 hover:bg-indigo-600 text-white'
                }`}
              >
                MORE →
              </button>
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h2 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
          Models and Tools
        </h2>
        <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          Patient: <span className="font-semibold">{selectedPatient?.name || 'Select a patient'}</span>
        </p>
      </div>

      {/* Built-in Models */}
      <div className={`rounded-xl p-6 border ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
        <h3 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
          Available Models
        </h3>
        
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {builtinModels.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
      </div>

      {/* Model Details View */}
      {showModelDetails && selectedModelForDetails && (
        <div className={`rounded-xl p-6 border-2 ${isDarkMode ? 'bg-slate-900 border-purple-600' : 'bg-white border-purple-400'}`}>
          <div className="mb-6">
            <button
              onClick={() => {
                setShowModelDetails(false);
                setSelectedModelForDetails(null);
              }}
              className={`text-sm font-semibold mb-4 ${ isDarkMode ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'}`}
            >
              ← Back
            </button>
            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              {selectedModelForDetails.name}
            </h2>
            <p className={`text-sm mt-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              {selectedModelForDetails.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
              <p className={`text-xs font-semibold ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Type</p>
              <p className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{selectedModelForDetails.type}</p>
            </div>
            <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
              <p className={`text-xs font-semibold ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Input Parameters</p>
              <p className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{selectedModelForDetails.inputParams.length} Parameters</p>
            </div>
          </div>

          {/* Capabilities */}
          <div className="mb-6">
            <h3 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>What This Model Can Do</h3>
            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'} space-y-2`}>
              <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>• Analyzes your health data in real-time</p>
              <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>• Identifies patterns and anomalies</p>
              <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>• Provides predictive insights</p>
              <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>• Works with combined data sources</p>
            </div>
          </div>

          {/* Data Selection */}
          <div className="mb-6">
            <h3 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Select Data Sources to Use</h3>
            <p className={`text-xs mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Click to select one or more data sources to combine</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[ 'Heart Rate', 'Blood Pressure', 'Sleep Duration', 'Activity Level', 'Stress Level', 'Oxygen Level', 'Temperature', 'HRV'].map((source) => (
                <label
                  key={source}
                  className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${ 'border-slate-300 bg-slate-50 hover:border-indigo-400'}`}
                >
                  <input type="checkbox" className="mr-2" />
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{source}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              setShowModelDetails(false);
              setSelectedModelForDetails(null);
              setSelectedModel(selectedModelForDetails);
            }}
            className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors ${ isDarkMode ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-indigo-500 hover:bg-indigo-600 text-white'}`}
          >
            Apply Model
          </button>
        </div>
      )}

      {/* Hugging Face Browser Modal */}
      {showHFBrowser && (
        <div className={`rounded-xl p-6 border-2 ${isDarkMode ? 'bg-slate-900 border-indigo-600' : 'bg-white border-indigo-400'}`}>
          <HuggingFaceBrowser
            isDarkMode={isDarkMode}
            onModelSelect={handleHFModelSelect}
            onClose={() => setShowHFBrowser(false)}
          />
        </div>
      )}

      {/* Model Configuration Modal */}
      {showModelConfig && selectedHFModel && (
        <div className={`rounded-xl p-6 border-2 ${isDarkMode ? 'bg-slate-900 border-purple-600' : 'bg-white border-purple-400'}`}>
          <ModelConfiguration
            model={selectedHFModel}
            isDarkMode={isDarkMode}
            selectedPatient={selectedPatient}
            onBack={() => {
              setShowModelConfig(false);
              setSelectedHFModel(null);
            }}
            onApply={handleModelConfigApply}
          />
        </div>
      )}

      {/* Custom Models */}
      <div className={`rounded-xl p-6 border ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Connected Custom Models
          </h3>
          <div className="flex gap-2">
            <button
              onClick={() => setShowHFBrowser(true)}
              className="flex items-center gap-1 px-3 py-1 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              <Download className="w-4 h-4" />
              Browse Hugging Face
            </button>
            <button
              onClick={() => setShowCustomModelForm(!showCustomModelForm)}
              className="flex items-center gap-1 px-3 py-1 text-sm bg-cyan-600 text-white rounded hover:bg-cyan-700"
            >
              <Plus className="w-4 h-4" />
              Connect Model
            </button>
          </div>
        </div>

        {/* Custom Model Form */}
        {showCustomModelForm && (
          <div className={`p-4 rounded-lg border ${isDarkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-300 bg-slate-50'} mb-4`}>
            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Model Name
                </label>
                <input
                  type="text"
                  value={newCustomModel.name}
                  onChange={(e) => setNewCustomModel({ ...newCustomModel, name: e.target.value })}
                  placeholder="e.g., Custom Risk Predictor"
                  className={`w-full px-3 py-2 rounded-lg border ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
                />
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Description
                </label>
                <textarea
                  value={newCustomModel.description}
                  onChange={(e) => setNewCustomModel({ ...newCustomModel, description: e.target.value })}
                  placeholder="What does this model do?"
                  rows={2}
                  className={`w-full px-3 py-2 rounded-lg border ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
                />
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Model Source
                </label>
                <select
                  value={newCustomModel.source}
                  onChange={(e) => setNewCustomModel({ ...newCustomModel, source: e.target.value as any })}
                  className={`w-full px-3 py-2 rounded-lg border ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
                >
                  <option value="claude">Claude API</option>
                  <option value="datasever">Data Server</option>
                  <option value="huggingface">Hugging Face Model</option>
                  <option value="custom">Custom Endpoint</option>
                </select>
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Endpoint URL
                </label>
                <input
                  type="text"
                  value={newCustomModel.endpoint}
                  onChange={(e) => setNewCustomModel({ ...newCustomModel, endpoint: e.target.value })}
                  placeholder="https://api.example.com/model or model-id"
                  className={`w-full px-3 py-2 rounded-lg border ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
                />
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  API Key (Optional)
                </label>
                <input
                  type="password"
                  value={newCustomModel.apiKey}
                  onChange={(e) => setNewCustomModel({ ...newCustomModel, apiKey: e.target.value })}
                  placeholder="Your API key if required"
                  className={`w-full px-3 py-2 rounded-lg border ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
                />
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Input Parameters
                </label>
                <div className="space-y-2">
                  {newCustomModel.inputParams.map((param, idx) => (
                    <div key={idx} className="flex gap-2">
                      <input
                        type="text"
                        value={param}
                        onChange={(e) => {
                          const updated = [...newCustomModel.inputParams];
                          updated[idx] = e.target.value;
                          setNewCustomModel({ ...newCustomModel, inputParams: updated });
                        }}
                        placeholder={`Parameter ${idx + 1}`}
                        className={`flex-1 px-3 py-2 rounded-lg border ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
                      />
                      {newCustomModel.inputParams.length > 1 && (
                        <button
                          onClick={() => {
                            setNewCustomModel({
                              ...newCustomModel,
                              inputParams: newCustomModel.inputParams.filter((_, i) => i !== idx)
                            });
                          }}
                          className="px-2 py-2 text-red-600 hover:bg-red-50"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setNewCustomModel({ ...newCustomModel, inputParams: [...newCustomModel.inputParams, ''] })}
                  className={`mt-2 text-sm ${isDarkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600 hover:text-cyan-700'}`}
                >
                  + Add Parameter
                </button>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={addCustomModel}
                  className="flex-1 px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 font-semibold"
                >
                  Connect Model
                </button>
                <button
                  onClick={() => setShowCustomModelForm(false)}
                  className={`flex-1 px-4 py-2 rounded font-semibold ${isDarkMode ? 'bg-slate-700 text-white hover:bg-slate-600' : 'bg-slate-200 text-slate-900 hover:bg-slate-300'}`}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Custom Models List */}
        {customModels.length > 0 ? (
          <div className="space-y-3">
            {customModels.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </div>
        ) : (
          <div className={`text-center py-8 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            <LinkIcon className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <p className="text-sm">No custom models connected yet</p>
          </div>
        )}
      </div>

      {/* Custom Outputs Configuration */}
      <div className={`rounded-xl p-6 border ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Output Definitions
          </h3>
          <button
            onClick={() => setShowOutputForm(!showOutputForm)}
            className="flex items-center gap-1 px-3 py-1 text-sm bg-cyan-600 text-white rounded hover:bg-cyan-700"
          >
            <Plus className="w-4 h-4" />
            Add Output
          </button>
        </div>

        {/* Output Form */}
        {showOutputForm && (
          <div className={`p-4 rounded-lg border ${isDarkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-300 bg-slate-50'} mb-4`}>
            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Output Name
                </label>
                <input
                  type="text"
                  value={newOutput.name}
                  onChange={(e) => setNewOutput({ ...newOutput, name: e.target.value })}
                  placeholder="e.g., Risk Level"
                  className={`w-full px-3 py-2 rounded-lg border ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
                />
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Description
                </label>
                <textarea
                  value={newOutput.description}
                  onChange={(e) => setNewOutput({ ...newOutput, description: e.target.value })}
                  placeholder="What does this output represent?"
                  rows={2}
                  className={`w-full px-3 py-2 rounded-lg border ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
                />
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Output Fields
                </label>
                <div className="space-y-2">
                  {newOutput.outputFields.map((field, idx) => (
                    <div key={idx} className="flex gap-2">
                      <input
                        type="text"
                        value={field}
                        onChange={(e) => {
                          const updated = [...newOutput.outputFields];
                          updated[idx] = e.target.value;
                          setNewOutput({ ...newOutput, outputFields: updated });
                        }}
                        placeholder={`Field ${idx + 1}`}
                        className={`flex-1 px-3 py-2 rounded-lg border ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
                      />
                      {newOutput.outputFields.length > 1 && (
                        <button
                          onClick={() => removeOutputField(idx)}
                          className="px-2 py-2 text-red-600 hover:bg-red-50"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <button
                  onClick={addOutputField}
                  className={`mt-2 text-sm ${isDarkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600 hover:text-cyan-700'}`}
                >
                  + Add Field
                </button>
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Alert Threshold (Optional)
                </label>
                <input
                  type="text"
                  value={newOutput.threshold}
                  onChange={(e) => setNewOutput({ ...newOutput, threshold: e.target.value })}
                  placeholder="e.g., 0.8"
                  className={`w-full px-3 py-2 rounded-lg border ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={saveCustomOutput}
                  className="flex-1 px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 font-semibold"
                >
                  Save
                </button>
                <button
                  onClick={() => setShowOutputForm(false)}
                  className={`flex-1 px-4 py-2 rounded font-semibold ${isDarkMode ? 'bg-slate-700 text-white hover:bg-slate-600' : 'bg-slate-200 text-slate-900 hover:bg-slate-300'}`}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Saved Outputs */}
        {customOutputs.length > 0 && (
          <div className="space-y-2">
            {customOutputs.map((output) => (
              <div
                key={output.id}
                className={`p-3 rounded-lg border ${isDarkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-300 bg-slate-50'}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      {output.name}
                    </h4>
                    <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      {output.description}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {output.outputFields.map((field, idx) => (
                        <span
                          key={idx}
                          className={`text-xs px-2 py-1 rounded ${isDarkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-200 text-slate-700'}`}
                        >
                          {field}
                        </span>
                      ))}
                    </div>
                    {output.threshold && (
                      <p className={`text-xs mt-1 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
                        Alert: {output.threshold}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => deleteCustomOutput(output.id)}
                    className="text-red-600 hover:bg-red-50 p-1 rounded"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Model Execution */}
      {selectedModel && (
        <div className={`rounded-xl p-6 border ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Run: {selectedModel.name}
            </h3>
            <button
              onClick={runModel}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 font-semibold"
            >
              <Play className="w-4 h-4" />
              Execute
            </button>
          </div>

          <div className="mb-4 p-3 rounded-lg bg-slate-800/50">
            <p className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Input Parameters:
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedModel.inputParams.map((param, idx) => (
                <span
                  key={idx}
                  className={`text-xs px-2 py-1 rounded ${isDarkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-200 text-slate-700'}`}
                >
                  {param}
                </span>
              ))}
            </div>
          </div>

          {executionResult && (
            <div className={`p-4 rounded-lg border-2 ${isDarkMode ? 'border-green-700 bg-green-500/10' : 'border-green-300 bg-green-50'}`}>
              <p className={`font-semibold mb-3 ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>
                Execution Successful
              </p>
              <pre className={`text-xs overflow-auto p-2 rounded ${isDarkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'}`}>
                {JSON.stringify(executionResult, null, 2)}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
