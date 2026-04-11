import { useState, useEffect } from 'react';
import { LogOut, Menu, X, Bell, Users, Settings, BarChart3, AlertTriangle, MessageSquare, Brain, Video, Watch, Plus, Calendar, TrendingUp, Heart, ChevronDown } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { FileText } from "lucide-react";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import DeviceSelector from '../components/DeviceSelector';
import MLModels from '../components/HuggingFaceML';

// Sidebar Component
function NIRVANASidebar({ activeTab, setActiveTab, isOpen, setIsOpen, handleLogout, currentLanguage = 'en' }: any) {
  const translations: { [key: string]: { [key: string]: string } } = {
    en: {
      overview: 'Overview',
      monitoring: 'Health Monitoring',
      logs: 'Logs & Activity',
      alerts: 'Alerts & Anomalies',
      messages: 'Messages',
      models: 'ML Models',
      wearables: 'Connected Devices',
      users: 'Access Management',
      logout: 'Logout',
    },
    fr: {
      overview: 'Aperçu',
      monitoring: 'Surveillance de la Santé',
      logs: 'Journaux et Activité',
      alerts: 'Alertes et Anomalies',
      messages: 'Messages',
      models: 'Modèles ML',
      wearables: 'Appareils Connectés',
      users: 'Gestion des Accès',
      logout: 'Déconnexion',
    },
  };

  const menuItems = [
    { id: 'overview', label: translations[currentLanguage].overview, icon: BarChart3 },
    { id: 'monitoring', label: translations[currentLanguage].monitoring, icon: Bell },
    { id: 'logs', label: translations[currentLanguage].logs, icon: FileText },
    { id: 'alerts', label: translations[currentLanguage].alerts, icon: AlertTriangle },
    { id: 'messages', label: translations[currentLanguage].messages, icon: MessageSquare },
    { id: 'models', label: translations[currentLanguage].models, icon: Brain },
    { id: 'wearables', label: translations[currentLanguage].wearables, icon: Watch },
    { id: 'users', label: translations[currentLanguage].users, icon: Users },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 md:hidden bg-white p-2 rounded-lg shadow-lg"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 fixed w-56 h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white p-4 transition-transform duration-300 z-40 flex flex-col overflow-hidden`}
      >
        <Link to="/" className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity mb-6 mt-12 md:mt-0 flex-shrink-0">
          <img src="/Images/Icon3.png" alt="NIRVANA" className="h-8 w-auto" />
        </Link>

        <nav className="space-y-1 flex-1 overflow-y-auto min-h-0 mb-4">
            {menuItems.map((item, index) => (
              <div key={item.id}>
                {item.id === 'users' && (
                  <div className="my-3 border-t border-slate-700"></div>
                )}
                <button
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-all text-sm ${
                    activeTab === item.id
                      ? 'bg-cyan-600 text-white'
                      : 'text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {typeof item.icon === 'string' ? (
                    <span className="text-lg">{item.icon}</span>
                  ) : (
                    <item.icon className="w-5 h-5" />
                  )}
                  <span className="font-medium">{item.label}</span>
                </button>
              </div>
            ))}
          </nav>

        {/* Logout Button at Bottom */}
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 mt-auto bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold text-sm flex-shrink-0"
        >
          <LogOut className="w-3 h-3" />
          {translations[currentLanguage].logout}
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

// Account Settings Panel
function AccountSettingsPanel({ isDarkMode }: any) {
  const [formData, setFormData] = useState({
    companyName: localStorage.getItem('companyName') || 'NIRVANA Longevity Center',
    lineOfBusiness: 'Healthcare',
    name: localStorage.getItem('userEmail') || '',
    role: 'Doctor',
    estimatedUsers: 50,
    companyLogo: null,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    localStorage.setItem('companyName', formData.companyName);
    localStorage.setItem('userEmail', formData.name);
  };

  return (
    <div className={`rounded-xl border p-6 ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
      <div className="mb-6">
        <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
          Account Settings
        </h2>
        <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          Edit your profile
        </p>
      </div>

      <div className="space-y-5">
        {/* Company Name */}
        <div>
          <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Company's name
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Company's name"
            className={`w-full px-4 py-2 rounded-lg border ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
          />
        </div>

        {/* Line of Business */}
        <div>
          <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Line of business
          </label>
          <input
            type="text"
            name="lineOfBusiness"
            value={formData.lineOfBusiness}
            onChange={handleChange}
            placeholder="Example: Insurance"
            className={`w-full px-4 py-2 rounded-lg border ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
          />
        </div>

        {/* Name */}
        <div>
          <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className={`w-full px-4 py-2 rounded-lg border ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
          />
        </div>

        {/* Your Role */}
        <div>
          <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Your Role
          </label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
          >
            <option>Doctor</option>
            <option>Nutritionist</option>
            <option>Admin</option>
            <option>Staff</option>
          </select>
        </div>

        {/* Estimated Users */}
        <div>
          <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Estimated users
          </label>
          <input
            type="number"
            name="estimatedUsers"
            value={formData.estimatedUsers}
            onChange={handleChange}
            placeholder="0"
            className={`w-full px-4 py-2 rounded-lg border ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
          />
        </div>

        {/* Company Logo */}
        <div>
          <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Company logo (Optional)
          </label>
          <div className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition ${isDarkMode ? 'border-slate-700 hover:border-slate-600' : 'border-slate-300 hover:border-slate-400'}`}>
            <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Select a company logo
            </p>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => setFormData(prev => ({ ...prev, companyLogo: e.target.files?.[0] || null }))}
            />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-slate-700">
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 font-semibold"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

// Header Component
function NIRVANAHeader({ isDarkMode, setIsDarkMode, doctorName, companyName, showSettings, setShowSettings, currentLanguage, setCurrentLanguage }: any) {
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [showCompanySettings, setShowCompanySettings] = useState(false);
  const [centerName, setCenterName] = useState(companyName);

  const handleSaveCompany = () => {
    localStorage.setItem('companyName', centerName);
    setShowCompanySettings(false);
  };

  const handleLanguageChange = (lang: 'en' | 'fr') => {
    setCurrentLanguage(lang);
    localStorage.setItem('language', lang);
    setShowLanguageMenu(false);
  };

  return (
    <header className={`fixed left-0 right-0 top-0 z-20 border-b md:left-56 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
      <div className="flex items-center justify-between px-6 py-2">
        <div>
          <div className={`text-base font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            NIRVANA Health Hub
          </div>
          <div className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Dr. {doctorName} - {companyName}
          </div>
        </div>
        <div className="flex items-center gap-4">
          {/* Settings Button (unified for account settings) */}
          <button
            onClick={() => setShowSettings(!showSettings)}
            className={`p-1.5 rounded-lg transition-colors ${
              showSettings
                ? isDarkMode ? 'bg-cyan-600 text-white' : 'bg-cyan-100 text-cyan-600'
                : isDarkMode ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
            title="Account Settings"
          >
            <Settings className="w-4 h-4" />
          </button>

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowLanguageMenu(!showLanguageMenu)}
              className={`p-1.5 rounded-lg transition-colors ${
                showLanguageMenu
                  ? isDarkMode ? 'bg-cyan-600 text-white' : 'bg-cyan-100 text-cyan-600'
                  : isDarkMode ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
              title="Language"
            >
              🌐
            </button>
            {showLanguageMenu && (
              <div className={`absolute right-0 mt-2 w-40 rounded-lg shadow-lg border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
                <button
                  onClick={() => handleLanguageChange('en')}
                  className={`w-full text-left px-4 py-2 rounded-t-lg transition-colors ${
                    currentLanguage === 'en'
                      ? isDarkMode ? 'bg-cyan-600 text-white' : 'bg-cyan-100 text-cyan-600'
                      : isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-slate-100'
                  } ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
                >
                  English
                </button>
                <button
                  onClick={() => handleLanguageChange('fr')}
                  className={`w-full text-left px-4 py-2 rounded-b-lg transition-colors ${
                    currentLanguage === 'fr'
                      ? isDarkMode ? 'bg-cyan-600 text-white' : 'bg-cyan-100 text-cyan-600'
                      : isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-slate-100'
                  } ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
                >
                  Français
                </button>
              </div>
            )}
          </div>

          {/* Dark/Light Mode */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-1.5 rounded-lg transition-colors ${
              isDarkMode ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
}

// Patient Selector Component
function PatientSelector({ selectedPatient, setSelectedPatient, isDarkMode }: any) {
  const [searchTerm, setSearchTerm] = useState('');
  const patients = [
    { id: 1, name: 'Ahmed Hassan', age: 45, status: 'healthy', condition: 'Hypertension Management', lastCheck: '2 hours ago', healthScore: 82 },
    { id: 2, name: 'Fatima Al-Dosari', age: 52, status: 'warning', condition: 'Diabetes Monitoring', lastCheck: '4 hours ago', healthScore: 68 },
    { id: 3, name: 'Mohammed Al-Rashid', age: 38, status: 'healthy', condition: 'Fitness Tracking', lastCheck: '30 min ago', healthScore: 91 },
    { id: 4, name: 'Sarah Johnson', age: 41, status: 'healthy', condition: 'Post-Surgery Recovery', lastCheck: '1 hour ago', healthScore: 75 },
    { id: 5, name: 'Ali Al-Mansouri', age: 55, status: 'warning', condition: 'Cholesterol Management', lastCheck: '6 hours ago', healthScore: 65 },
  ];

  const filteredPatients = patients.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`rounded-xl p-6 border mb-8 ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
      <h3 className={`font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
        Select Patient/User
      </h3>
      
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search patient..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={`w-full px-4 py-2 rounded-lg border mb-4 ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
      />

      {/* Patient List */}
      <div className="space-y-2">
        {filteredPatients.map((patient) => (
          <button
            key={patient.id}
            onClick={() => setSelectedPatient(patient)}
            className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
              selectedPatient?.id === patient.id
                ? 'border-slate-900 bg-slate-400/40 dark:border-slate-400 dark:bg-slate-700/50'
                : `border-slate-300 dark:border-slate-600 ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-50 hover:bg-slate-100'}`
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex-1">
                <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  {patient.name}
                </h4>
                <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Age: {patient.age} • {patient.condition}
                </p>
              </div>
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                patient.status === 'healthy'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {patient.status.toUpperCase()}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>Last: {patient.lastCheck}</span>
              <div className="flex items-center gap-1">
                <Heart className="w-3 h-3 text-red-600" />
                <span className={`font-semibold ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>Score: {patient.healthScore}</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// No Patient Selected Message
function NoPatientMessage({ isDarkMode }: any) {
  return (
    <div className={`rounded-xl p-12 border text-center ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
      <p className={`text-lg font-semibold ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
        👤 Please select a patient first from Overview section to view this data
      </p>
    </div>
  );
}

// Content Sections
function OverviewSection({ isDarkMode, selectedPatient, setSelectedPatient }: any) {
  const getPatientStats = (patient: any) => {
    const statsMap: any = {
      1: [ // Ahmed
        { label: 'Heart Rate', value: '72 BPM', color: 'from-cyan-500 to-blue-600', icon: '❤️' },
        { label: 'Blood Pressure', value: '138/85', color: 'from-green-500 to-emerald-600', icon: '📊' },
        { label: 'Oxygen Level', value: '97%', color: 'from-purple-500 to-indigo-600', icon: '🫁' },
        { label: 'Status', value: 'Stable', color: 'from-pink-500 to-rose-600', icon: '✅' },
      ],
      2: [ // Fatima
        { label: 'Heart Rate', value: '82 BPM', color: 'from-cyan-500 to-blue-600', icon: '❤️' },
        { label: 'Blood Pressure', value: '148/92', color: 'from-orange-500 to-red-600', icon: '⚠️' },
        { label: 'Glucose', value: '145 mg/dL', color: 'from-yellow-500 to-amber-600', icon: '🩸' },
        { label: 'Status', value: 'Monitor', color: 'from-orange-500 to-red-600', icon: '📌' },
      ],
      3: [ // Mohammed
        { label: 'Heart Rate', value: '68 BPM', color: 'from-cyan-500 to-blue-600', icon: '❤️' },
        { label: 'Blood Pressure', value: '120/78', color: 'from-green-500 to-emerald-600', icon: '✅' },
        { label: 'Calories Burned', value: '520 kcal', color: 'from-purple-500 to-indigo-600', icon: '🔥' },
        { label: 'Steps', value: '8,234 steps', color: 'from-pink-500 to-rose-600', icon: '👟' },
      ],
      4: [ // Sarah
        { label: 'Heart Rate', value: '76 BPM', color: 'from-cyan-500 to-blue-600', icon: '❤️' },
        { label: 'Blood Pressure', value: '125/80', color: 'from-green-500 to-emerald-600', icon: '✅' },
        { label: 'Recovery %', value: '85%', color: 'from-purple-500 to-indigo-600', icon: '💪' },
        { label: 'Sleep Quality', value: 'Good (7.2h)', color: 'from-pink-500 to-rose-600', icon: '😴' },
      ],
      5: [ // Ali
        { label: 'Heart Rate', value: '88 BPM', color: 'from-cyan-500 to-blue-600', icon: '❤️' },
        { label: 'Blood Pressure', value: '142/88', color: 'from-orange-500 to-red-600', icon: '⚠️' },
        { label: 'Cholesterol', value: '245 mg/dL', color: 'from-orange-500 to-red-600', icon: '🩸' },
        { label: 'Status', value: 'Caution', color: 'from-orange-500 to-red-600', icon: '🚨' },
      ],
    };
    return statsMap[patient?.id] || statsMap[1];
  };

  const stats = selectedPatient ? getPatientStats(selectedPatient) : [];

  return (
    <div>
      {/* Patient Selector - Only in Overview */}
      <PatientSelector selectedPatient={selectedPatient} setSelectedPatient={setSelectedPatient} isDarkMode={isDarkMode} />

      {/* Only show content if patient is selected */}
      {selectedPatient ? (
        <>
          <div className="mb-6">
            <h2 className={`text-4xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              {selectedPatient.name}'s Health Overview
            </h2>
            <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Health Score: <span className="font-bold text-cyan-600">{selectedPatient.healthScore}/100</span> • Condition: {selectedPatient.condition}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, i) => (
              <div key={i} className={`rounded-xl p-6 text-white bg-gradient-to-br ${stat.color} shadow-lg hover:shadow-xl transition-shadow`}>
                <div className="text-3xl mb-2">{stat.icon}</div>
                <p className="text-sm opacity-90">{stat.label}</p>
                <p className="text-4xl font-bold mt-2">{stat.value}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <NoPatientMessage isDarkMode={isDarkMode} />
      )}
    </div>
  );
}

function MonitoringSection({ isDarkMode, selectedPatient, setSelectedPatient }: any) {
  const [timeline, setTimeline] = useState('daily');
  const [isTimelineDropdownOpen, setIsTimelineDropdownOpen] = useState(false);
  const [selectedDevices, setSelectedDevices] = useState<string[]>(['apple-watch']);
  const [customMetrics, setCustomMetrics] = useState([
    { id: 1, name: 'Stress Level', formula: 'HR × 0.8 + Temp × 0.2', value: '42', unit: '%', color: 'from-red-500 to-red-600' },
    { id: 2, name: 'Fitness Index', formula: 'Steps + (Calories / 100)', value: '115', unit: 'pts', color: 'from-green-500 to-green-600' },
  ]);
  const [showMetricForm, setShowMetricForm] = useState(false);
  const [newMetric, setNewMetric] = useState({ 
    name: '', 
    formula: '', 
    unit: '%',
    parameters: [],
    displayType: 'card',
    color: 'from-purple-500 to-purple-600',
    showTrend: true,
  });

  if (!selectedPatient) {
    return <NoPatientMessage isDarkMode={isDarkMode} />;
  }

  // Data for different timelines
  const timelineData = {
    daily: [
      { time: '6:00 AM', rate: 68, avg: 72 },
      { time: '8:00 AM', rate: 72, avg: 72 },
      { time: '10:00 AM', rate: 75, avg: 72 },
      { time: '12:00 PM', rate: 78, avg: 72 },
      { time: '2:00 PM', rate: 82, avg: 72 },
      { time: '4:00 PM', rate: 79, avg: 72 },
      { time: '6:00 PM', rate: 76, avg: 72 },
    ],
    weekly: [
      { time: 'Mon', rate: 70, avg: 72 },
      { time: 'Tue', rate: 73, avg: 72 },
      { time: 'Wed', rate: 75, avg: 72 },
      { time: 'Thu', rate: 78, avg: 72 },
      { time: 'Fri', rate: 76, avg: 72 },
      { time: 'Sat', rate: 74, avg: 72 },
      { time: 'Sun', rate: 71, avg: 72 },
    ],
    monthly: [
      { time: 'Week 1', rate: 72, avg: 72 },
      { time: 'Week 2', rate: 74, avg: 72 },
      { time: 'Week 3', rate: 76, avg: 72 },
      { time: 'Week 4', rate: 73, avg: 72 },
    ],
  };

  const bloodPressureDataByTimeline = {
    daily: [
      { time: '6:00 AM', systolic: 118, diastolic: 75 },
      { time: '8:00 AM', systolic: 120, diastolic: 78 },
      { time: '10:00 AM', systolic: 125, diastolic: 80 },
      { time: '12:00 PM', systolic: 128, diastolic: 82 },
      { time: '2:00 PM', systolic: 132, diastolic: 85 },
      { time: '4:00 PM', systolic: 130, diastolic: 83 },
      { time: '6:00 PM', systolic: 126, diastolic: 81 },
    ],
    weekly: [
      { time: 'Mon', systolic: 122, diastolic: 80 },
      { time: 'Tue', systolic: 124, diastolic: 81 },
      { time: 'Wed', systolic: 126, diastolic: 79 },
      { time: 'Thu', systolic: 128, diastolic: 82 },
      { time: 'Fri', systolic: 125, diastolic: 80 },
      { time: 'Sat', systolic: 121, diastolic: 78 },
      { time: 'Sun', systolic: 120, diastolic: 77 },
    ],
    monthly: [
      { time: 'Week 1', systolic: 125, diastolic: 80 },
      { time: 'Week 2', systolic: 127, diastolic: 81 },
      { time: 'Week 3', systolic: 126, diastolic: 79 },
      { time: 'Week 4', systolic: 124, diastolic: 78 },
    ],
  };

  const heartRateData = timelineData[timeline as keyof typeof timelineData];
  const bloodPressureData = bloodPressureDataByTimeline[timeline as keyof typeof bloodPressureDataByTimeline];

  const healthData = [
    { metric: 'Heart Rate', current: '72 BPM', normal: '60-100 BPM', status: 'normal', trend: '↓ -5 BPM' },
    { metric: 'Blood Pressure', current: '120/80', normal: '<120/<80', status: 'normal', trend: '→ stable' },
    { metric: 'Oxygen Level', current: '98%', normal: '95-100%', status: 'normal', trend: '↑ +1%' },
    { metric: 'Sleep Duration', current: '7.5 hrs', normal: '7-9 hrs', status: 'good', trend: '↑ +1 hr' },
  ];

  const handleAddMetric = () => {
    if (newMetric.name && newMetric.formula) {
      setCustomMetrics([...customMetrics, {
        id: customMetrics.length + 1,
        name: newMetric.name,
        formula: newMetric.formula,
        unit: newMetric.unit,
        value: Math.floor(Math.random() * 100) + '',
        color: newMetric.color,
      }]);
      setNewMetric({ 
        name: '', 
        formula: '', 
        unit: '%',
        parameters: [],
        displayType: 'card',
        color: 'from-purple-500 to-purple-600',
        showTrend: true,
      });
      setShowMetricForm(false);
    }
  };

  const deleteMetric = (id: number) => {
    setCustomMetrics(customMetrics.filter(m => m.id !== id));
  };

  const availableParameters = [
    { id: 'hr', label: 'Heart Rate (BPM)', category: 'Cardiovascular' },
    { id: 'bp_sys', label: 'Blood Pressure Systolic', category: 'Cardiovascular' },
    { id: 'bp_dia', label: 'Blood Pressure Diastolic', category: 'Cardiovascular' },
    { id: 'spo2', label: 'Oxygen Level (%)', category: 'Respiratory' },
    { id: 'temp', label: 'Body Temperature (°C)', category: 'Vital' },
    { id: 'sleep', label: 'Sleep Duration (hrs)', category: 'Lifestyle' },
    { id: 'steps', label: 'Daily Steps', category: 'Activity' },
    { id: 'calories', label: 'Calories Burned', category: 'Activity' },
    { id: 'stress', label: 'Stress Level', category: 'Mental' },
  ];

  return (
    <div>
      <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
        Health Monitoring - <span className="text-cyan-600">{selectedPatient.name}</span>
      </h2>

      {/* Device Selector */}
      <DeviceSelector 
        selectedDevices={selectedDevices}
        onDeviceSelect={setSelectedDevices}
        isDarkMode={isDarkMode}
      />

      {/* Summary Metrics Bar */}
      <div className={`rounded-xl p-6 border mb-8 ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
        {/* Header with inline Timeline Selector */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
          <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Custom Metrics</h3>
          
          {/* Timeline Dropdown Selector */}
          <div className="relative">
            <button 
              onClick={() => setIsTimelineDropdownOpen(!isTimelineDropdownOpen)}
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all flex items-center space-x-2 border ${
                isDarkMode 
                  ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700' 
                  : 'bg-slate-100 border-slate-300 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>{timeline === 'daily' ? 'Daily' : timeline === 'weekly' ? 'Weekly' : 'Monthly'}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isTimelineDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isTimelineDropdownOpen && (
              <div className={`absolute top-full mt-2 left-0 rounded-lg shadow-xl z-50 min-w-max border ${
                isDarkMode
                  ? 'bg-slate-900 border-slate-700'
                  : 'bg-white border-slate-300'
              }`}>
                {['daily', 'weekly', 'monthly'].map((t) => (
                  <button
                    key={t}
                    onClick={() => {
                      setTimeline(t);
                      setIsTimelineDropdownOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2.5 text-sm transition-colors first:rounded-t-lg last:rounded-b-lg ${
                      timeline === t
                        ? isDarkMode ? 'bg-cyan-600 text-white' : 'bg-cyan-500 text-white'
                        : isDarkMode ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {t === 'daily' ? 'Daily' : t === 'weekly' ? 'Weekly' : 'Monthly'}
                  </button>
                ))}
              </div>
            )}
          </div>
          {isTimelineDropdownOpen && (
            <div 
              className="fixed inset-0 z-40"
              onClick={() => setIsTimelineDropdownOpen(false)}
            />
          )}
        </div>

        {/* Metrics Grid */}
        {customMetrics.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-6">
            {customMetrics.map((metric) => (
              <div
                key={metric.id}
                className={`p-4 rounded-lg text-center bg-gradient-to-br ${metric.color} text-white cursor-pointer hover:shadow-lg transition-all`}
                onClick={() => deleteMetric(metric.id)}
                title="Click to delete"
              >
                <p className="text-xs opacity-90 font-medium">{metric.name}</p>
                <p className="text-xl font-bold mt-2">{metric.value}{metric.unit}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className={`text-center py-8 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            <p className="text-sm">No custom metrics yet. Create your first one!</p>
          </div>
        )}

        {/* Create New Custom Metric Button */}
        <button
          onClick={() => setShowMetricForm(!showMetricForm)}
          className={`w-full py-3 rounded-lg font-semibold transition-all border-2 ${
            showMetricForm
              ? isDarkMode ? 'bg-cyan-600 text-white border-cyan-600' : 'bg-cyan-500 text-white border-cyan-500'
              : isDarkMode ? 'border-dashed border-slate-600 text-slate-300 hover:border-cyan-600 hover:text-cyan-400 hover:bg-slate-800/50' : 'border-dashed border-slate-300 text-slate-600 hover:border-cyan-500 hover:text-cyan-600 hover:bg-cyan-50'
          }`}
        >
          {showMetricForm ? '✕ Close Form' : '+ Create New Custom Metric'}
        </button>
      </div>

      {/* Create Custom Metric Form */}
      {showMetricForm && (
        <div className={`rounded-xl p-6 border mb-8 ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
          <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Define Your Custom Metric
          </h3>

          <div className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-slate-200' : 'text-slate-900'}`}>
                  Metric Name
                </label>
                <input
                  type="text"
                  value={newMetric.name}
                  onChange={(e) => setNewMetric({ ...newMetric, name: e.target.value })}
                  placeholder="e.g., Wellness Score"
                  className={`w-full px-4 py-2 rounded-lg border ${isDarkMode ? 'bg-slate-800 border-slate-600 text-white focus:border-cyan-600' : 'bg-white border-slate-300 text-slate-900 focus:border-cyan-500'} focus:outline-none focus:ring-1`}
                />
              </div>
              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-slate-200' : 'text-slate-900'}`}>
                  Unit
                </label>
                <input
                  type="text"
                  value={newMetric.unit}
                  onChange={(e) => setNewMetric({ ...newMetric, unit: e.target.value })}
                  placeholder="e.g., %, pts, bpm"
                  className={`w-full px-4 py-2 rounded-lg border ${isDarkMode ? 'bg-slate-800 border-slate-600 text-white focus:border-cyan-600' : 'bg-white border-slate-300 text-slate-900 focus:border-cyan-500'} focus:outline-none focus:ring-1`}
                />
              </div>
              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-slate-200' : 'text-slate-900'}`}>
                  Display Type
                </label>
                <select
                  value={newMetric.displayType}
                  onChange={(e) => setNewMetric({ ...newMetric, displayType: e.target.value })}
                  className={`w-full px-4 py-2 rounded-lg border ${isDarkMode ? 'bg-slate-800 border-slate-600 text-white focus:border-cyan-600' : 'bg-white border-slate-300 text-slate-900 focus:border-cyan-500'} focus:outline-none focus:ring-1`}
                >
                  <option value="card">Card</option>
                  <option value="chart">Chart</option>
                  <option value="gauge">Gauge</option>
                  <option value="trend">Trend Line</option>
                </select>
              </div>
            </div>

            {/* Parameters Selection */}
            <div>
              <label className={`block text-sm font-semibold mb-3 ${isDarkMode ? 'text-slate-200' : 'text-slate-900'}`}>
                Select Parameters (what data to use)
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {availableParameters.map((param) => (
                  <div key={param.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={param.id}
                      checked={newMetric.parameters.includes(param.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setNewMetric({ ...newMetric, parameters: [...newMetric.parameters, param.id] });
                        } else {
                          setNewMetric({ ...newMetric, parameters: newMetric.parameters.filter(p => p !== param.id) });
                        }
                      }}
                      className="w-4 h-4 rounded"
                    />
                    <label htmlFor={param.id} className={`ml-2 text-sm cursor-pointer ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      {param.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Formula */}
            <div>
              <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-slate-200' : 'text-slate-900'}`}>
                Formula (how parameters relate)
              </label>
              <div className={`p-3 rounded-lg mb-2 ${isDarkMode ? 'bg-slate-800 border border-slate-700' : 'bg-slate-50 border border-slate-200'}`}>
                <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Example: HR × 0.8 + Temp × 0.2 (multiply Heart Rate by 0.8, add Temperature × 0.2)
                </p>
              </div>
              <textarea
                value={newMetric.formula}
                onChange={(e) => setNewMetric({ ...newMetric, formula: e.target.value })}
                placeholder="Enter your formula here (use parameter names or abbreviations)"
                rows={3}
                className={`w-full px-4 py-3 rounded-lg border font-mono text-sm ${isDarkMode ? 'bg-slate-800 border-slate-600 text-white focus:border-cyan-600' : 'bg-white border-slate-300 text-slate-900 focus:border-cyan-500'} focus:outline-none focus:ring-1`}
              />
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="showTrend"
                  checked={newMetric.showTrend}
                  onChange={(e) => setNewMetric({ ...newMetric, showTrend: e.target.checked })}
                  className="w-4 h-4 rounded"
                />
                <label htmlFor="showTrend" className={`ml-2 text-sm font-medium cursor-pointer ${isDarkMode ? 'text-slate-200' : 'text-slate-900'}`}>
                  Show Trend (↑ up, ↓ down, → stable)
                </label>
              </div>
              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-slate-200' : 'text-slate-900'}`}>
                  Color Theme
                </label>
                <select
                  value={newMetric.color}
                  onChange={(e) => setNewMetric({ ...newMetric, color: e.target.value })}
                  className={`w-full px-4 py-2 rounded-lg border ${isDarkMode ? 'bg-slate-800 border-slate-600 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
                >
                  <option value="from-purple-500 to-purple-600">Purple</option>
                  <option value="from-blue-500 to-blue-600">Blue</option>
                  <option value="from-red-500 to-red-600">Red</option>
                  <option value="from-green-500 to-green-600">Green</option>
                  <option value="from-indigo-500 to-indigo-600">Indigo</option>
                  <option value="from-pink-500 to-pink-600">Pink</option>
                </select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                onClick={handleAddMetric}
                className="px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 font-semibold transition-all"
              >
                ✓ Create Metric
              </button>
              <button
                onClick={() => setShowMetricForm(false)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${isDarkMode ? 'bg-slate-800 text-slate-200 hover:bg-slate-700' : 'bg-slate-200 text-slate-900 hover:bg-slate-300'}`}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {healthData.map((data, i) => (
          <div key={i} className={`rounded-xl p-6 border ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
            <div className="flex items-start justify-between mb-3">
              <h4 className={`font-semibold text-lg ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>{data.metric}</h4>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${data.status === 'normal' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                ✓ {data.status.toUpperCase()}
              </span>
            </div>
            <p className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{data.current}</p>
            <p className={`text-sm mt-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Normal: {data.normal}</p>
            <p className={`text-sm mt-1 font-semibold ${data.status === 'normal' ? 'text-green-600' : 'text-blue-600'}`}>{data.trend}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Heart Rate Chart */}
        <div className={`rounded-xl p-6 border ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
          <h3 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Heart Rate Trend ({timeline === 'daily' ? '24h' : timeline === 'weekly' ? '7d' : '30d'})</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={heartRateData}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#475569' : '#e2e8f0'} />
              <XAxis dataKey="time" stroke={isDarkMode ? '#94a3b8' : '#64748b'} />
              <YAxis stroke={isDarkMode ? '#94a3b8' : '#64748b'} />
              <Tooltip contentStyle={{ backgroundColor: isDarkMode ? '#1e293b' : '#ffffff', border: `1px solid ${isDarkMode ? '#475569' : '#e2e8f0'}`, borderRadius: '8px' }} />
              <Legend />
              <Line type="monotone" dataKey="rate" stroke="#0891b2" strokeWidth={2} name="Actual" />
              <Line type="monotone" dataKey="avg" stroke="#64748b" strokeWidth={1} strokeDasharray="5 5" name="Average" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Blood Pressure Chart */}
        <div className={`rounded-xl p-6 border ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
          <h3 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Blood Pressure Trend ({timeline === 'daily' ? '24h' : timeline === 'weekly' ? '7d' : '30d'})</h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={bloodPressureData}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#475569' : '#e2e8f0'} />
              <XAxis dataKey="time" stroke={isDarkMode ? '#94a3b8' : '#64748b'} />
              <YAxis stroke={isDarkMode ? '#94a3b8' : '#64748b'} />
              <Tooltip contentStyle={{ backgroundColor: isDarkMode ? '#1e293b' : '#ffffff', border: `1px solid ${isDarkMode ? '#475569' : '#e2e8f0'}`, borderRadius: '8px' }} />
              <Legend />
              <Area type="monotone" dataKey="systolic" stackId="1" stroke="#ef4444" fill="#ef4444" fillOpacity={0.6} name="Systolic" />
              <Area type="monotone" dataKey="diastolic" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} name="Diastolic" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Oxygen Level */}
      <div className={`rounded-xl p-6 border ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
        <h3 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Oxygen Level (SpO2) Trend ({timeline === 'daily' ? '24h' : timeline === 'weekly' ? '7d' : '30d'})</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={heartRateData}>
            <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#475569' : '#e2e8f0'} />
            <XAxis dataKey="time" stroke={isDarkMode ? '#94a3b8' : '#64748b'} />
            <YAxis stroke={isDarkMode ? '#94a3b8' : '#64748b'} domain={[90, 100]} />
            <Tooltip contentStyle={{ backgroundColor: isDarkMode ? '#1e293b' : '#ffffff', border: `1px solid ${isDarkMode ? '#475569' : '#e2e8f0'}`, borderRadius: '8px' }} />
            <Bar dataKey="rate" fill="#10b981" radius={[8, 8, 0, 0]} name="SpO2 Level" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function LogsSection({ isDarkMode, selectedPatient, setSelectedPatient }: any) {
  if (!selectedPatient) {
    return <NoPatientMessage isDarkMode={isDarkMode} />;
  }

  const getLogs = (patientId: number) => {
    const logsMap: any = {
      1: [
        { id: 1, action: 'Blood Pressure Check', details: 'BP: 138/85 mmHg - Within normal range', time: '10:30 AM', doctor: 'Dr. Sarah', icon: '📊' },
        { id: 2, action: 'Medication Reminder', details: 'Antihypertensive medication dose taken', time: '08:00 AM', doctor: 'System', icon: '💊' },
        { id: 3, action: 'Exercise Logged', details: '30 min walk - 2.5 km distance', time: '07:15 AM', doctor: 'Patient', icon: '🚶' },
      ],
      2: [
        { id: 1, action: 'Glucose Monitoring', details: 'Fasting glucose: 145 mg/dL - Elevated', time: '08:00 AM', doctor: 'Dr. Ahmed', icon: '🩸' },
        { id: 2, action: 'Nutritionist Consultation', details: 'Diet plan updated - Low carb focus', time: 'Yesterday 3:30 PM', doctor: 'Dr. Lisa', icon: '🥗' },
        { id: 3, action: 'Alert Generated', details: 'Blood glucose trending high this week', time: 'Yesterday 2:15 PM', doctor: 'System', icon: '⚠️' },
      ],
      3: [
        { id: 1, action: 'Workout Completed', details: 'CrossFit session - 8,234 steps logged', time: '06:45 PM', doctor: 'Patient', icon: '💪' },
        { id: 2, action: 'Sleep Analysis', details: 'Sleep quality: Excellent (8.2 hours)', time: '07:00 AM', doctor: 'System', icon: '😴' },
        { id: 3, action: 'Weekly Stats', details: 'Weekly average: 7,500+ steps/day', time: 'Yesterday', doctor: 'System', icon: '📈' },
      ],
      4: [
        { id: 1, action: 'Post-Surgery Assessment', details: 'Wound healing normal, no complications', time: '11:00 AM', doctor: 'Dr. Sarah', icon: '✅' },
        { id: 2, action: 'Pain Level Check', details: 'Pain score: 2/10 - Improving', time: '09:30 AM', doctor: 'Nurse', icon: '📋' },
        { id: 3, action: 'Physical Therapy', details: 'Session 3 - Mobility exercises completed', time: 'Yesterday 2:00 PM', doctor: 'PT', icon: '🏥' },
      ],
      5: [
        { id: 1, action: 'Lipid Panel', details: 'Total Cholesterol: 245 mg/dL (High)', time: '10:00 AM', doctor: 'Dr. Ahmed', icon: '🩸' },
        { id: 2, action: 'Statin Prescription', details: 'New prescription for cholesterol management', time: '10:15 AM', doctor: 'Dr. Ahmed', icon: '💊' },
        { id: 3, action: 'Dietary Consultation', details: 'Mediterranean diet recommended', time: '09:00 AM', doctor: 'Nutritionist', icon: '🥗' },
      ],
    };
    return logsMap[patientId] || logsMap[1];
  };

  const logs = getLogs(selectedPatient.id);

  return (
    <div>
      <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
        Activity Logs - <span className="text-cyan-600">{selectedPatient.name}</span>
      </h2>
      <div className="space-y-4">
        {logs.map((log) => (
          <div key={log.id} className={`rounded-lg p-5 border-l-4 border-cyan-500 ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3 flex-1">
                <span className="text-2xl">{log.icon}</span>
                <div>
                  <h4 className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{log.action}</h4>
                  <p className={`text-sm mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{log.details}</p>
                  <p className={`text-xs mt-2 ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>👤 {log.doctor} • ⏰ {log.time}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AlertsSection({ isDarkMode, selectedPatient, setSelectedPatient }: any) {
  if (!selectedPatient) {
    return <NoPatientMessage isDarkMode={isDarkMode} />;
  }

  const getAlerts = (patientId: number) => {
    const alertsMap: any = {
      1: [ // Ahmed - Hypertension
        { id: 1, type: 'info', message: 'Scheduled annual checkup due', timestamp: '10:15 AM', isAnomaly: false },
        { id: 2, type: 'warning', message: 'Blood Pressure: 138/85 mmHg - Slightly elevated', timestamp: '09:50 AM', isAnomaly: true },
        { id: 3, type: 'info', message: 'Medication refill reminder: 5 days left', timestamp: '08:00 AM', isAnomaly: false },
      ],
      2: [ // Fatima - Diabetes
        { id: 1, type: 'critical', message: 'Blood Glucose: 145 mg/dL - ELEVATED', timestamp: '08:15 AM', isAnomaly: true },
        { id: 2, type: 'warning', message: 'Fasting glucose trending high this week', timestamp: 'Yesterday 3:30 PM', isAnomaly: true },
        { id: 3, type: 'info', message: 'HbA1c test due: Schedule with Dr. Ahmed', timestamp: 'Yesterday 2:00 PM', isAnomaly: false },
      ],
      3: [ // Mohammed - Fitness
        { id: 1, type: 'info', message: 'Excellent weekly performance: 52,000+ steps', timestamp: '10:00 PM', isAnomaly: false },
        { id: 2, type: 'info', message: 'New personal record: 12km in one session', timestamp: 'Yesterday 7:00 PM', isAnomaly: false },
        { id: 3, type: 'warning', message: 'Heart rate spike detected during workout (156 BPM)', timestamp: 'Yesterday 6:45 PM', isAnomaly: true },
      ],
      4: [ // Sarah - Recovery
        { id: 1, type: 'info', message: 'Post-operative day 15: Recovery on track', timestamp: '11:00 AM', isAnomaly: false },
        { id: 2, type: 'warning', message: 'Mild swelling detected - Monitor daily', timestamp: '09:30 AM', isAnomaly: true },
        { id: 3, type: 'info', message: 'Physical therapy session tomorrow at 2:00 PM', timestamp: 'Yesterday', isAnomaly: false },
      ],
      5: [ // Ali - Cholesterol
        { id: 1, type: 'critical', message: 'Total Cholesterol: 245 mg/dL - HIGH', timestamp: '10:00 AM', isAnomaly: true },
        { id: 2, type: 'critical', message: 'LDL Cholesterol: 165 mg/dL - VERY HIGH', timestamp: '10:00 AM', isAnomaly: true },
        { id: 3, type: 'warning', message: 'BP elevated: 142/88 mmHg - ANOMALY DETECTED', timestamp: '09:50 AM', isAnomaly: true },
      ],
    };
    return alertsMap[patientId] || alertsMap[1];
  };

  const alerts = getAlerts(selectedPatient.id);

  return (
    <div>
      <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
        Alerts & Anomalies - <span className="text-cyan-600">{selectedPatient.name}</span>
      </h2>
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`rounded-xl p-5 border-l-4 flex items-start justify-between ${
              alert.type === 'critical'
                ? `border-red-500 ${isDarkMode ? 'bg-red-900 bg-opacity-30' : 'bg-red-50'}`
                : alert.type === 'warning'
                ? `border-yellow-500 ${isDarkMode ? 'bg-yellow-900 bg-opacity-30' : 'bg-yellow-50'}`
                : `border-blue-500 ${isDarkMode ? 'bg-blue-900 bg-opacity-30' : 'bg-blue-50'}`
            }`}
          >
            <div className="flex-1">
              <p className={`font-semibold text-lg ${
                alert.type === 'critical'
                  ? isDarkMode ? 'text-red-400' : 'text-red-800'
                  : alert.type === 'warning'
                  ? isDarkMode ? 'text-yellow-400' : 'text-yellow-800'
                  : isDarkMode ? 'text-blue-400' : 'text-blue-800'
              }`}>
                {alert.message}
              </p>
              {alert.isAnomaly && (
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-100 text-orange-800">
                    🚨 ANOMALY DETECTED
                  </span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-100 text-purple-800">
                    ⚡ ACTION RECOMMENDED
                  </span>
                </div>
              )}
            </div>
            <span className={`text-xs whitespace-nowrap ml-4 font-semibold ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              {alert.timestamp}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MessagingSection({ isDarkMode, selectedPatient, setSelectedPatient }: any) {
  const [messages, setMessages] = useState([
    { id: 1, from: 'Patient', content: 'I feel better after following the recommendations', timestamp: '10:30 AM' },
    { id: 2, from: 'Doctor', content: 'Great! Keep up the good work with your exercises', timestamp: '10:35 AM' },
    { id: 3, from: 'Patient', content: 'When can I see my updated health report?', timestamp: '11:00 AM' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [scheduledMeetings, setScheduledMeetings] = useState([
    { id: 1, date: '2026-04-05', time: '14:00', type: 'Video Call', participant: 'Patient' },
    { id: 2, date: '2026-04-07', time: '10:30', type: 'Chat Session', participant: 'Doctor' },
  ]);
  const [meetingForm, setMeetingForm] = useState({ date: '', time: '', type: 'Video Call' });

  if (!selectedPatient) {
    return <NoPatientMessage isDarkMode={isDarkMode} />;
  }

  const handleScheduleMeeting = () => {
    if (meetingForm.date && meetingForm.time) {
      setScheduledMeetings([...scheduledMeetings, {
        id: scheduledMeetings.length + 1,
        date: meetingForm.date,
        time: meetingForm.time,
        type: meetingForm.type,
        participant: 'Patient'
      }]);
      setMeetingForm({ date: '', time: '', type: 'Video Call' });
      setShowScheduleModal(false);
    }
  };

  return (
    <div>
      <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
        Messages - {selectedPatient.name}
      </h2>

      {/* Communication Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <button className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition-all">
          <MessageSquare className="w-5 h-5" />
          Start Chat
        </button>
        <button className="flex items-center justify-center gap-2 px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold transition-all">
          <Video className="w-5 h-5" />
          Start Video Call
        </button>
        <button 
          onClick={() => setShowScheduleModal(true)}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold transition-all"
        >
          <Calendar className="w-5 h-5" />
          Schedule Meeting
        </button>
      </div>

      {/* Chat Area */}
      <div className={`rounded-xl border mb-6 ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
        <div className="h-96 p-4 space-y-4 overflow-y-auto">
          {messages.map((msg) => (
            <div key={msg.id} className={`p-3 rounded-lg flex ${msg.from === 'Doctor' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs ${msg.from === 'Doctor' ? 'bg-cyan-600 text-white' : isDarkMode ? 'bg-slate-800 text-white' : 'bg-slate-200 text-slate-900'} p-3 rounded-lg`}>
                <p className="font-semibold text-sm">{msg.from}</p>
                <p className="text-sm mt-1">{msg.content}</p>
                <p className={`text-xs mt-1 ${msg.from === 'Doctor' ? 'text-cyan-200' : isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{msg.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t p-4 flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className={`flex-1 px-3 py-2 rounded-lg border ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
          />
          <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700">Send</button>
        </div>
      </div>

      {/* Scheduled Meetings */}
      <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Scheduled Meetings</h3>
      <div className="space-y-3">
        {scheduledMeetings.map((meeting) => (
          <div key={meeting.id} className={`rounded-lg p-4 border flex items-center justify-between ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
            <div>
              <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{meeting.type}</h4>
              <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                📅 {meeting.date} at {meeting.time}
              </p>
            </div>
            <button className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700">Cancel</button>
          </div>
        ))}
      </div>

      {/* Schedule Meeting Modal */}
      {showScheduleModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`rounded-xl p-6 w-96 ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Schedule Meeting</h3>
              <button onClick={() => setShowScheduleModal(false)} className={`p-1 rounded hover:${isDarkMode ? 'bg-slate-700' : 'bg-slate-100'}`}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Date</label>
                <input
                  type="date"
                  value={meetingForm.date}
                  onChange={(e) => setMeetingForm({ ...meetingForm, date: e.target.value })}
                  className={`w-full px-3 py-2 rounded-lg border ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
                />
              </div>
              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Time</label>
                <input
                  type="time"
                  value={meetingForm.time}
                  onChange={(e) => setMeetingForm({ ...meetingForm, time: e.target.value })}
                  className={`w-full px-3 py-2 rounded-lg border ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
                />
              </div>
              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Meeting Type</label>
                <select
                  value={meetingForm.type}
                  onChange={(e) => setMeetingForm({ ...meetingForm, type: e.target.value })}
                  className={`w-full px-3 py-2 rounded-lg border ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
                >
                  <option>Video Call</option>
                  <option>Chat Session</option>
                  <option>Voice Call</option>
                </select>
              </div>
              <div className="flex gap-3 pt-4">
                <button 
                  onClick={handleScheduleMeeting}
                  className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold"
                >
                  Schedule
                </button>
                <button 
                  onClick={() => setShowScheduleModal(false)}
                  className={`flex-1 px-4 py-2 rounded-lg font-semibold ${isDarkMode ? 'bg-slate-700 text-white hover:bg-slate-600' : 'bg-slate-200 text-slate-900 hover:bg-slate-300'}`}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function MLModelsSection({ isDarkMode, selectedPatient }: any) {
  if (!selectedPatient) {
    return <NoPatientMessage isDarkMode={isDarkMode} />;
  }

  return <MLModels selectedPatient={selectedPatient} isDarkMode={isDarkMode} />;
}

function WearablesSection({ isDarkMode }: any) {
  const [devices, setDevices] = useState([
    { id: 1, name: 'Apple Watch Series 8', type: 'Smartwatch', status: 'connected', battery: '85%', lastSync: '2 min ago' },
    { id: 2, name: 'Fitbit Charge 5', type: 'Fitness Tracker', status: 'connected', battery: '72%', lastSync: '5 min ago' },
    { id: 3, name: 'Oura Ring', type: 'Health Ring', status: 'connected', battery: '65%', lastSync: '10 min ago' },
  ]);
  const [showAddModal, setShowAddModal] = useState(false);

  const removeDevice = (id: number) => {
    setDevices(devices.filter(d => d.id !== id));
  };

  return (
    <div>
      <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Connected Wearables & Devices</h2>
      
      <div className="space-y-4 mb-8">
        {devices.map((device) => (
          <div key={device.id} className={`rounded-xl p-6 border ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Watch className="w-6 h-6 text-cyan-600" />
                  <div>
                    <h3 className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{device.name}</h3>
                    <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{device.type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-3 flex-wrap">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${device.status === 'connected' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    ● {device.status.toUpperCase()}
                  </span>
                  <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>🔋 Battery: {device.battery}</span>
                  <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>⏱️ Last Sync: {device.lastSync}</span>
                </div>
              </div>
              <button 
                onClick={() => removeDevice(device.id)}
                className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
              >
                Disconnect
              </button>
            </div>
          </div>
        ))}
      </div>

      <button 
        onClick={() => setShowAddModal(true)}
        className="w-full px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 font-semibold flex items-center justify-center gap-2"
      >
        <Plus className="w-5 h-5" />
        Add New Wearable
      </button>

      {/* Add Device Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`rounded-xl p-6 w-96 ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Add Wearable Device</h3>
              <button onClick={() => setShowAddModal(false)} className={`p-1 rounded hover:${isDarkMode ? 'bg-slate-700' : 'bg-slate-100'}`}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Device Name</label>
                <input
                  type="text"
                  placeholder="e.g., Apple Watch Series 8"
                  className={`w-full px-3 py-2 rounded-lg border ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
                />
              </div>
              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Device Type</label>
                <select className={`w-full px-3 py-2 rounded-lg border ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-slate-300 text-slate-900'}`}>
                  <option>Smartwatch</option>
                  <option>Fitness Tracker</option>
                  <option>Health Ring</option>
                  <option>Blood Pressure Monitor</option>
                  <option>Glucose Monitor</option>
                  <option>Sleep Tracker</option>
                </select>
              </div>
              <div className="flex gap-3 pt-4">
                <button 
                  onClick={() => {
                    setShowAddModal(false);
                  }}
                  className="flex-1 px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 font-semibold"
                >
                  Connect Device
                </button>
                <button 
                  onClick={() => setShowAddModal(false)}
                  className={`flex-1 px-4 py-2 rounded-lg font-semibold ${isDarkMode ? 'bg-slate-700 text-white hover:bg-slate-600' : 'bg-slate-200 text-slate-900 hover:bg-slate-300'}`}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function UserManagementSection({ isDarkMode }: any) {
  const doctors = [
    { id: 1, name: 'Dr. Sarah', role: 'Head Doctor', status: 'active' },
    { id: 2, name: 'Dr. Ahmed', role: 'Cardiologist', status: 'active' },
    { id: 3, name: 'Dr. Lisa', role: 'Nutritionist', status: 'active' },
  ];

  return (
    <div>
      <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>User/Staff Management</h2>
      <div className="space-y-4 mb-8">
        {doctors.map((doctor) => (
          <div key={doctor.id} className={`rounded-xl p-4 border flex items-center justify-between ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
            <div>
              <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{doctor.name}</h3>
              <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{doctor.role}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2 py-1 rounded bg-green-100 text-green-800">{doctor.status.toUpperCase()}</span>
              <button className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700">Remove</button>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold">+ Add Staff Member</button>
    </div>
  );
}

// Notifications Panel - Right Sidebar (Two Tabs)
function NotificationPanel({ selectedPatient, isDarkMode }: any) {
  const [activeTab, setActiveTab] = useState('notifications');

  const getNotifications = (patientId: number | null) => {
    if (!patientId) return [];
    
    const notificationsMap: any = {
      1: [
        { id: 1, message: 'BP slightly elevated', time: '10m ago' },
        { id: 2, message: 'Medication due', time: '2h ago' },
        { id: 3, message: 'New test results', time: '5h ago' },
        { id: 4, message: 'Exercise goal 80% done', time: '1d ago' },
      ],
      2: [
        { id: 1, message: 'HbA1c test scheduled', time: '1h ago' },
        { id: 2, message: 'Diet plan update', time: '3h ago' },
        { id: 3, message: 'Consultation completed', time: '1d ago' },
        { id: 4, message: 'Medication refill reminder', time: '2d ago' },
      ],
      3: [
        { id: 1, message: 'Weekly goal achieved', time: '45m ago' },
        { id: 2, message: 'New personal record', time: '2h ago' },
        { id: 3, message: 'Sync wearables', time: '4h ago' },
        { id: 4, message: 'Sleep quality improved', time: '1d ago' },
      ],
      4: [
        { id: 1, message: 'Recovery on track', time: '1h ago' },
        { id: 2, message: 'PT session tomorrow', time: '5h ago' },
        { id: 3, message: 'Wound healing normal', time: '1d ago' },
        { id: 4, message: 'Pain management tips shared', time: '2d ago' },
      ],
      5: [
        { id: 1, message: 'Statin prescribed', time: '2h ago' },
        { id: 2, message: 'Diet plan shared', time: '1d ago' },
        { id: 3, message: 'Follow-up appointment scheduled', time: '2d ago' },
        { id: 4, message: 'Lipid test reminder', time: '3d ago' },
      ],
    };
    return notificationsMap[patientId] || [];
  };

  const getAlerts = (patientId: number | null) => {
    if (!patientId) return [];
    
    const alertsMap: any = {
      1: [
        { id: 1, type: 'warning', message: 'Blood Pressure 138/85 mmHg', time: '10m ago' },
        { id: 2, type: 'info', message: 'Scheduled annual checkup due', time: '2h ago' },
      ],
      2: [
        { id: 1, type: 'critical', message: 'Glucose level high 145 mg/dL', time: '30m ago' },
        { id: 2, type: 'warning', message: 'Fasting glucose trending high', time: '1h ago' },
      ],
      3: [
        { id: 1, type: 'warning', message: 'Heart rate spike during workout', time: '2h ago' },
        { id: 2, type: 'info', message: 'Low hydration detected', time: '5h ago' },
      ],
      4: [
        { id: 1, type: 'warning', message: 'Mild swelling detected', time: '8h ago' },
        { id: 2, type: 'info', message: 'Increased pain level', time: '12h ago' },
      ],
      5: [
        { id: 1, type: 'critical', message: 'Total Cholesterol 245 mg/dL HIGH', time: '15m ago' },
        { id: 2, type: 'critical', message: 'LDL Cholesterol 165 mg/dL VERY HIGH', time: '15m ago' },
        { id: 3, type: 'warning', message: 'BP elevated 142/88 mmHg', time: '45m ago' },
      ],
    };
    return alertsMap[patientId] || [];
  };

  const notifications = getNotifications(selectedPatient?.id);
  const alerts = getAlerts(selectedPatient?.id);

  const getAlertStyle = (type: string) => {
    switch (type) {
      case 'critical':
        return isDarkMode ? 'border-l-red-600 bg-red-900/20' : 'border-l-red-600 bg-red-50';
      case 'warning':
        return isDarkMode ? 'border-l-yellow-600 bg-yellow-900/20' : 'border-l-yellow-600 bg-yellow-50';
      default:
        return isDarkMode ? 'border-l-cyan-600 bg-cyan-900/20' : 'border-l-cyan-600 bg-cyan-50';
    }
  };

  const getAlertTextStyle = (type: string) => {
    switch (type) {
      case 'critical':
        return isDarkMode ? 'text-red-400' : 'text-red-700';
      case 'warning':
        return isDarkMode ? 'text-yellow-400' : 'text-yellow-700';
      default:
        return isDarkMode ? 'text-cyan-400' : 'text-cyan-700';
    }
  };

  return (
    <div className={`w-80 border-l ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'} flex flex-col`}>
      {/* Tabs Header */}
      <div className={`flex border-b ${isDarkMode ? 'border-slate-700' : 'border-slate-200'}`}>
        <button
          onClick={() => setActiveTab('notifications')}
          className={`flex-1 px-4 py-3 font-semibold transition-colors ${
            activeTab === 'notifications'
              ? isDarkMode ? 'text-cyan-400 border-b-2 border-cyan-600' : 'text-cyan-600 border-b-2 border-cyan-600'
              : isDarkMode ? 'text-slate-400 hover:text-slate-300' : 'text-slate-600 hover:text-slate-700'
          }`}
        >
          Notifications
        </button>
        <button
          onClick={() => setActiveTab('alerts')}
          className={`flex-1 px-4 py-3 font-semibold transition-colors ${
            activeTab === 'alerts'
              ? isDarkMode ? 'text-red-400 border-b-2 border-red-600' : 'text-red-600 border-b-2 border-red-600'
              : isDarkMode ? 'text-slate-400 hover:text-slate-300' : 'text-slate-600 hover:text-slate-700'
          }`}
        >
          Alerts
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {selectedPatient ? (
          activeTab === 'notifications' ? (
            notifications.length > 0 ? (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-3 rounded-lg border-l-4 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'}`}
                >
                  <p className={`text-sm font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    {notification.message}
                  </p>
                  <p className={`text-xs mt-1.5 ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                    {notification.time}
                  </p>
                </div>
              ))
            ) : (
              <div className={`text-center py-8 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <p className="text-sm">No new notifications</p>
              </div>
            )
          ) : (
            alerts.length > 0 ? (
              alerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-3 rounded-lg border-l-4 transition-all ${getAlertStyle(alert.type)}`}
                >
                  <p className={`text-sm font-semibold ${getAlertTextStyle(alert.type)}`}>
                    {alert.message}
                  </p>
                  <p className={`text-xs mt-1.5 ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                    {alert.time}
                  </p>
                </div>
              ))
            ) : (
              <div className={`text-center py-8 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <p className="text-sm">No active alerts</p>
              </div>
            )
          )
        ) : (
          <div className={`text-center py-12 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            <Bell className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <p className="text-xs">
              Select a patient to view updates
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Main Dashboard Component
export default function DashboardPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'fr'>(() => {
    return (localStorage.getItem('language') as 'en' | 'fr') || 'en';
  });
  
  const doctorName = localStorage.getItem('userEmail') || 'Doctor';
  const companyName = localStorage.getItem('companyName') || 'NIRVANA Longevity Center';

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('isLoggedIn');
    navigate('/auth');
  };

  const renderContent = () => {
    // If settings is open, show account settings panel
    if (showSettings) {
      return <AccountSettingsPanel isDarkMode={isDarkMode} />;
    }

    switch (activeTab) {
      case 'overview':
        return <OverviewSection isDarkMode={isDarkMode} selectedPatient={selectedPatient} setSelectedPatient={setSelectedPatient} />;
      case 'monitoring':
        return <MonitoringSection isDarkMode={isDarkMode} selectedPatient={selectedPatient} setSelectedPatient={setSelectedPatient} />;
      case 'logs':
        return <LogsSection isDarkMode={isDarkMode} selectedPatient={selectedPatient} setSelectedPatient={setSelectedPatient} />;
      case 'alerts':
        return <AlertsSection isDarkMode={isDarkMode} selectedPatient={selectedPatient} setSelectedPatient={setSelectedPatient} />;
      case 'messages':
        return <MessagingSection isDarkMode={isDarkMode} selectedPatient={selectedPatient} setSelectedPatient={setSelectedPatient} />;
      case 'models':
        return <MLModelsSection isDarkMode={isDarkMode} selectedPatient={selectedPatient} />;
      case 'wearables':
        return <WearablesSection isDarkMode={isDarkMode} />;
      case 'users':
        return <UserManagementSection isDarkMode={isDarkMode} />;
      default:
        return <OverviewSection isDarkMode={isDarkMode} selectedPatient={selectedPatient} setSelectedPatient={setSelectedPatient} />;
    }
  };

  return (
    <>
      <NIRVANAHeader 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
        doctorName={doctorName}
        companyName={companyName}
        showSettings={showSettings}
        setShowSettings={setShowSettings}
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
      />
      <div className={`min-h-screen flex ${isDarkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
        <NIRVANASidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          isOpen={sidebarOpen} 
          setIsOpen={setSidebarOpen}
          handleLogout={handleLogout}
          currentLanguage={currentLanguage}
        />
        <div className="flex-1 md:ml-56 flex flex-col overflow-hidden pt-16">
          <div className="flex-1 flex overflow-hidden">
            <div className="flex-1 overflow-auto p-6">{renderContent()}</div>
            <NotificationPanel selectedPatient={selectedPatient} isDarkMode={isDarkMode} />
          </div>
        </div>
      </div>
    </>
  );
}
