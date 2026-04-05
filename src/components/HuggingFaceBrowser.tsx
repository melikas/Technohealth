import { useState } from 'react';
import { Search, ArrowRight, Heart, TrendingUp, AlertCircle, ZapOff, ChevronRight } from 'lucide-react';

interface HFModel {
  id: string;
  name: string;
  description: string;
  downloads: number;
  rating: number;
  tags: string[];
  category: string;
}

const FEATURED_MODELS: HFModel[] = [
  {
    id: 'google/fnet-base',
    name: 'Google FNet - Medical Time Series',
    description: 'Efficient transformer for time series analysis',
    downloads: 125000,
    rating: 4.8,
    tags: ['time-series', 'healthcare', 'transformer'],
    category: 'Time Series'
  },
  {
    id: 'microsoft/biobert-base-uncased-v1.1',
    name: 'BioBERT - Medical Text Analysis',
    description: 'BERT model fine-tuned on biomedical corpus',
    downloads: 450000,
    rating: 4.9,
    tags: ['nlp', 'healthcare', 'bert'],
    category: 'NLP'
  },
  {
    id: 'facebook/wav2vec2-base',
    name: 'Wav2Vec 2.0 - Audio Analysis',
    description: 'Self-supervised learning model for audio',
    downloads: 280000,
    rating: 4.7,
    tags: ['audio', 'speech', 'healthcare'],
    category: 'Audio'
  },
  {
    id: 'huggingface/distilbert-base-medical',
    name: 'DistilBERT - Medical Classification',
    description: 'Lightweight BERT for medical document classification',
    downloads: 190000,
    rating: 4.6,
    tags: ['classification', 'medical', 'nlp'],
    category: 'Classification'
  },
  {
    id: 'sklearn/ensemble-medical',
    name: 'Ensemble Medical Predictor',
    description: 'Ensemble methods for health prediction',
    downloads: 95000,
    rating: 4.5,
    tags: ['ensemble', 'prediction', 'healthcare'],
    category: 'Regression'
  },
];

interface HuggingFaceBrowserProps {
  isDarkMode: boolean;
  onModelSelect: (model: HFModel) => void;
  onClose: () => void;
}

export default function HuggingFaceBrowser({ isDarkMode, onModelSelect, onClose }: HuggingFaceBrowserProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [models, setModels] = useState<HFModel[]>(FEATURED_MODELS);

  const categories = ['All', 'Time Series', 'NLP', 'Audio', 'Classification', 'Regression'];

  const filteredModels = models.filter(model => {
    const matchesSearch = model.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          model.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          model.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || model.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-400'}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className={`rounded-xl border overflow-hidden ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
      {/* Header */}
      <div className={`p-6 border-b ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Browse Hugging Face Models
          </h3>
          <button
            onClick={onClose}
            className={`px-4 py-2 rounded ${isDarkMode ? 'bg-slate-700 text-white hover:bg-slate-600' : 'bg-slate-200 text-slate-900 hover:bg-slate-300'}`}
          >
            Close
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search models, tags..."
            className={`w-full pl-10 pr-4 py-2 rounded-lg border ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
          />
        </div>
      </div>

      {/* Categories */}
      <div className={`px-6 py-3 border-b flex gap-2 overflow-x-auto ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
              selectedCategory === cat
                ? 'bg-cyan-600 text-white'
                : isDarkMode ? 'bg-slate-700 text-slate-300 hover:bg-slate-600' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Models Grid */}
      <div className="p-6 max-h-96 overflow-y-auto">
        {filteredModels.length > 0 ? (
          <div className="space-y-3">
            {filteredModels.map((model) => (
              <div
                key={model.id}
                className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                  isDarkMode
                    ? 'border-slate-700 bg-slate-800 hover:border-cyan-500 hover:bg-slate-700/50'
                    : 'border-slate-300 bg-slate-50 hover:border-cyan-400 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      {model.name}
                    </h4>
                    <p className={`text-sm mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      {model.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-700/50">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      {renderStars(model.rating)}
                      <span className={`text-xs font-semibold ml-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        {model.rating}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {model.tags.slice(0, 2).map((tag, idx) => (
                        <span
                          key={idx}
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            isDarkMode
                              ? 'bg-cyan-500/20 text-cyan-300'
                              : 'bg-cyan-100 text-cyan-700'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => onModelSelect(model)}
                    className="flex items-center gap-1 px-3 py-1.5 text-sm bg-cyan-600 text-white rounded hover:bg-cyan-700 font-semibold"
                  >
                    Apply
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                <div className={`text-xs mt-2 ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                  ⬇️ {(model.downloads / 1000).toFixed(0)}K downloads
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={`text-center py-12 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            <AlertCircle className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <p className="text-sm">No models found matching your search</p>
          </div>
        )}
      </div>
    </div>
  );
}
