import { useState } from 'react';
import { LogOut, Menu, X, Bell, Users, Settings, BarChart3, AlertTriangle, MessageSquare, Brain, Video, Watch, Plus, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FileText } from "lucide-react";

// Sidebar Component
function NIRVANASidebar({ activeTab, setActiveTab, isOpen, setIsOpen, handleLogout }: any) {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'monitoring', label: 'Health Monitoring', icon: Bell },
    { id: 'logs', label: 'Logs & Activity', icon: FileText },
    { id: 'alerts', label: 'Alerts & Anomalies', icon: AlertTriangle },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'models', label: 'ML Models', icon: Brain },
    { id: 'wearables', label: 'Connected Devices', icon: Watch },
    { id: 'users', label: 'Access Management', icon: Users },
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
        } md:translate-x-0 fixed md:relative w-64 h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white p-6 transition-transform duration-300 z-40 flex flex-col`}
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-8 mt-12 md:mt-0">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              N
            </div>
            <div>
              <h1 className="font-bold text-lg">NIRVANA</h1>
              <p className="text-xs text-slate-400">Longevity Center</p>
            </div>
          </div>

          <nav className="space-y-2">
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
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
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
        </div>

        {/* Footer with Logout */}
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
        >
          <LogOut className="w-4 h-4" />
          Logout
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
function NIRVANAHeader({ isDarkMode, setIsDarkMode, doctorName, companyName, showSettings, setShowSettings }: any) {
  const [showCompanySettings, setShowCompanySettings] = useState(false);
  const [centerName, setCenterName] = useState(companyName);

  const handleSaveCompany = () => {
    localStorage.setItem('companyName', centerName);
    setShowCompanySettings(false);
  };

  return (
    <header className={`border-b ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <div className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            NIRVANA Health Hub
          </div>
          <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Dr. {doctorName} - {companyName}
          </div>
        </div>
        <div className="flex items-center gap-4">
          {/* Settings Button (unified for account settings) */}
          <button
            onClick={() => setShowSettings(!showSettings)}
            className={`p-2 rounded-lg transition-colors ${
              showSettings
                ? isDarkMode ? 'bg-cyan-600 text-white' : 'bg-cyan-100 text-cyan-600'
                : isDarkMode ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
            title="Account Settings"
          >
            <Settings className="w-5 h-5" />
          </button>

          {/* Language */}
          <button
            className={`p-2 rounded-lg transition-colors ${
              isDarkMode ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
            title="Language"
          >
            🌐
          </button>

          {/* Dark/Light Mode */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-lg transition-colors ${
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
    { id: 1, name: 'Ahmed', age: 45, status: 'healthy' },
    { id: 2, name: 'Fatima', age: 52, status: 'warning' },
    { id: 3, name: 'Mohammed', age: 38, status: 'healthy' },
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
            className={`w-full p-3 rounded-lg border-2 transition-all text-left ${
              selectedPatient?.id === patient.id
                ? 'border-cyan-600 bg-cyan-50 dark:bg-cyan-900'
                : `border-slate-300 dark:border-slate-700 ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-50 hover:bg-slate-100'}`
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  {patient.name}
                </h4>
                <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Age: {patient.age}
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
  const stats = [
    { label: 'Heart Rate', value: '72 BPM', color: 'from-cyan-500 to-blue-600' },
    { label: 'Blood Pressure', value: '120/80', color: 'from-green-500 to-emerald-600' },
    { label: 'Last Check', value: '2 min ago', color: 'from-purple-500 to-indigo-600' },
    { label: 'Status', value: 'Healthy', color: 'from-pink-500 to-rose-600' },
  ];

  return (
    <div>
      {/* Patient Selector - Only in Overview */}
      <PatientSelector selectedPatient={selectedPatient} setSelectedPatient={setSelectedPatient} isDarkMode={isDarkMode} />

      {/* Only show content if patient is selected */}
      {selectedPatient ? (
        <>
          <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            {selectedPatient.name}'s Health Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, i) => (
              <div key={i} className={`rounded-xl p-6 text-white bg-gradient-to-br ${stat.color} shadow-lg`}>
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
  if (!selectedPatient) {
    return <NoPatientMessage isDarkMode={isDarkMode} />;
  }

  const healthData = [
    { metric: 'Heart Rate', value: '72 BPM', status: 'normal', trend: '↓ -5 BPM' },
    { metric: 'Blood Pressure', value: '120/80', status: 'normal', trend: '↑ +2 mmHg' },
    { metric: 'Oxygen Level', value: '98%', status: 'normal', trend: 'stable' },
    { metric: 'Sleep Duration', value: '7.5 hrs', status: 'good', trend: '↑ +1 hr' },
  ];

  return (
    <div>
      <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
        Real-Time Health Monitoring - {selectedPatient.name}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {healthData.map((data, i) => (
          <div key={i} className={`rounded-xl p-6 border ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
            <h4 className={`font-semibold ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{data.metric}</h4>
            <p className={`text-4xl font-bold mt-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{data.value}</p>
            <p className={`text-sm mt-2 ${data.status === 'normal' ? 'text-green-600' : 'text-blue-600'}`}>{data.trend}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function LogsSection({ isDarkMode, selectedPatient, setSelectedPatient }: any) {
  if (!selectedPatient) {
    return <NoPatientMessage isDarkMode={isDarkMode} />;
  }

  const logs = [
    { id: 1, action: 'Data Added', details: 'Morning vitals recorded', time: '10:30 AM', doctor: 'Dr. Sarah' },
    { id: 2, action: 'Alert Generated', details: 'Routine check-up alert', time: '10:15 AM', doctor: 'Dr. Ahmed' },
    { id: 3, action: 'Recommendation Made', details: 'Increase daily water intake', time: '09:45 AM', doctor: 'Dr. Lisa' },
  ];

  return (
    <div>
      <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
        Activity Logs - {selectedPatient.name}
      </h2>
      <div className="space-y-3">
        {logs.map((log) => (
          <div key={log.id} className={`rounded-lg p-4 border-l-4 border-cyan-500 ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
            <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{log.action}</h4>
            <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{log.details}</p>
            <p className={`text-xs mt-1 ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>By: {log.doctor} | Time: {log.time}</p>
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

  const alerts = [
    { id: 1, type: 'critical', message: 'Scheduled annual checkup due', timestamp: '10:15 AM', isAnomaly: false },
    { id: 2, type: 'warning', message: 'Blood Pressure: 145/90 - ANOMALY DETECTED', timestamp: '09:50 AM', isAnomaly: true },
    { id: 3, type: 'info', message: 'Daily reminder: Take medications', timestamp: '08:00 AM', isAnomaly: false },
    { id: 4, type: 'warning', message: 'Sleep Duration: 4 hours (Low) - ANOMALY DETECTED', timestamp: '07:30 AM', isAnomaly: true },
  ];

  return (
    <div>
      <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
        Alerts & Anomalies - {selectedPatient.name}
      </h2>
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`rounded-xl p-4 border-l-4 flex items-start justify-between ${
              alert.type === 'critical'
                ? `border-red-500 ${isDarkMode ? 'bg-red-900 bg-opacity-30' : 'bg-red-50'}`
                : alert.type === 'warning'
                ? `border-yellow-500 ${isDarkMode ? 'bg-yellow-900 bg-opacity-30' : 'bg-yellow-50'}`
                : `border-blue-500 ${isDarkMode ? 'bg-blue-900 bg-opacity-30' : 'bg-blue-50'}`
            }`}
          >
            <div>
              <p className={`font-semibold ${
                alert.type === 'critical'
                  ? isDarkMode ? 'text-red-400' : 'text-red-800'
                  : alert.type === 'warning'
                  ? isDarkMode ? 'text-yellow-400' : 'text-yellow-800'
                  : isDarkMode ? 'text-blue-400' : 'text-blue-800'
              }`}>
                {alert.message}
              </p>
              {alert.isAnomaly && (
                <span className="text-xs font-bold px-2 py-1 rounded-full bg-orange-100 text-orange-800 mt-2 inline-block">
                  🚨 ANOMALY DETECTED
                </span>
              )}
            </div>
            <span className={`text-xs whitespace-nowrap ml-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
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

function MLModelsSection({ isDarkMode }: any) {
  const models = [
    { id: 1, name: 'Heart Rate Anomaly Detection', accuracy: '94%', status: 'active', description: 'Detects irregular heart patterns' },
    { id: 2, name: 'Blood Pressure Prediction', accuracy: '89%', status: 'active', description: 'Predicts BP trends' },
    { id: 3, name: 'Sleep Quality Assessment', accuracy: '91%', status: 'inactive', description: 'Analyzes sleep patterns' },
    { id: 4, name: 'Custom Health Score', accuracy: '87%', status: 'active', description: 'Your custom model' },
  ];

  return (
    <div>
      <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>ML Models & Tools</h2>
      <div className="space-y-4 mb-8">
        {models.map((model) => (
          <div key={model.id} className={`rounded-xl p-6 border ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{model.name}</h3>
                <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{model.description}</p>
                <div className="flex items-center gap-4 mt-3">
                  <span className={`text-sm font-semibold ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>Accuracy: {model.accuracy}</span>
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${model.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                    {model.status.toUpperCase()}
                  </span>
                </div>
              </div>
              <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700">Apply</button>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold">+ Integrate Custom Model</button>
    </div>
  );
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

// Main Dashboard Component
export default function DashboardPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  
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
        return <MLModelsSection isDarkMode={isDarkMode} />;
      case 'wearables':
        return <WearablesSection isDarkMode={isDarkMode} />;
      case 'users':
        return <UserManagementSection isDarkMode={isDarkMode} />;
      default:
        return <OverviewSection isDarkMode={isDarkMode} selectedPatient={selectedPatient} setSelectedPatient={setSelectedPatient} />;
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="flex h-screen">
        <NIRVANASidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          isOpen={sidebarOpen} 
          setIsOpen={setSidebarOpen}
          handleLogout={handleLogout}
        />
        <div className="flex-1 flex flex-col overflow-hidden">
          <NIRVANAHeader 
            isDarkMode={isDarkMode} 
            setIsDarkMode={setIsDarkMode} 
            doctorName={doctorName}
            companyName={companyName}
            showSettings={showSettings}
            setShowSettings={setShowSettings}
          />
          <div className="flex-1 overflow-auto p-6">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
}
