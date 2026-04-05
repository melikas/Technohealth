import { Smartphone, Watch, Heart, Activity, Zap } from 'lucide-react';

interface Device {
  id: string;
  name: string;
  icon: any;
  type: string;
  status: 'connected' | 'disconnected';
  lastSync: string;
  dataPoints: string[];
  color: string;
}

const AVAILABLE_DEVICES: Device[] = [
  {
    id: 'apple-watch',
    name: 'Apple Watch',
    icon: Watch,
    type: 'Smartwatch',
    status: 'connected',
    lastSync: '2 min ago',
    dataPoints: ['Heart Rate', 'Blood Pressure', 'Sleep', 'Steps', 'Calories'],
    color: 'from-gray-400 to-gray-600'
  },
  {
    id: 'fitbit',
    name: 'Fitbit Charge',
    icon: Activity,
    type: 'Fitness Tracker',
    status: 'connected',
    lastSync: '5 min ago',
    dataPoints: ['Steps', 'Calories', 'Sleep', 'Heart Rate'],
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: 'garmin',
    name: 'Garmin Watch',
    icon: Zap,
    type: 'Smartwatch',
    status: 'connected',
    lastSync: '1 hour ago',
    dataPoints: ['Heart Rate', 'VO2 Max', 'Steps', 'Stress'],
    color: 'from-yellow-400 to-orange-600'
  },
  {
    id: 'omron',
    name: 'Omron Monitor',
    icon: Heart,
    type: 'Blood Pressure',
    status: 'disconnected',
    lastSync: '3 hours ago',
    dataPoints: ['Blood Pressure', 'Heart Rate'],
    color: 'from-red-400 to-red-600'
  },
  {
    id: 'iphone',
    name: 'iPhone Health',
    icon: Smartphone,
    type: 'Mobile Phone',
    status: 'connected',
    lastSync: 'Real-time',
    dataPoints: ['Steps', 'Distance', 'Flights Climbed', 'Sleep', 'Heart Rate'],
    color: 'from-cyan-400 to-blue-500'
  },
];

interface DeviceSelectorProps {
  selectedDevices: string[];
  onDeviceSelect: (devices: string[]) => void;
  isDarkMode: boolean;
}

export default function DeviceSelector({ selectedDevices, onDeviceSelect, isDarkMode }: DeviceSelectorProps) {
  const toggleDevice = (deviceId: string) => {
    if (selectedDevices.includes(deviceId)) {
      onDeviceSelect(selectedDevices.filter(id => id !== deviceId));
    } else {
      onDeviceSelect([...selectedDevices, deviceId]);
    }
  };

  return (
    <div className={`rounded-xl p-6 border mb-8 ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
      <div className="mb-6">
        <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
          📱 Connected Devices
        </h3>
        <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          Select devices to view and compare data
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {AVAILABLE_DEVICES.map((device) => {
          const DeviceIcon = device.icon;
          const isSelected = selectedDevices.includes(device.id);
          
          return (
            <button
              key={device.id}
              onClick={() => device.status === 'connected' && toggleDevice(device.id)}
              disabled={device.status === 'disconnected'}
              className={`p-4 rounded-lg border-2 transition-all text-left ${
                isSelected
                  ? 'border-cyan-500 bg-cyan-500/10'
                  : isDarkMode ? 'border-slate-700 bg-slate-800 hover:border-slate-600' : 'border-slate-300 bg-slate-50 hover:border-slate-400'
              } ${device.status === 'disconnected' ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3 flex-1">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${device.color} text-white`}>
                    <DeviceIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      {device.name}
                    </h4>
                    <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      {device.type}
                    </p>
                  </div>
                </div>
                <div className={`flex-shrink-0 w-5 h-5 rounded border-2 transition-all ${
                  isSelected 
                    ? 'bg-cyan-500 border-cyan-500' 
                    : isDarkMode ? 'border-slate-600' : 'border-slate-300'
                }`}>
                  {isSelected && <span className="text-white text-xs flex items-center justify-center">✓</span>}
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  device.status === 'connected'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {device.status === 'connected' ? '🟢 Connected' : '🔴 Disconnected'}
                </span>
                <span className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {device.lastSync}
                </span>
              </div>

              {/* Data Points */}
              <div className="flex flex-wrap gap-1">
                {device.dataPoints.map((dataPoint, idx) => (
                  <span
                    key={idx}
                    className={`text-xs px-2 py-1 rounded  ${
                      isDarkMode
                        ? 'bg-slate-700 text-slate-300'
                        : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {dataPoint}
                  </span>
                ))}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Devices Summary */}
      {selectedDevices.length > 0 && (
        <div className={`mt-6 p-4 rounded-lg ${isDarkMode ? 'bg-slate-800/50 border border-slate-700' : 'bg-blue-50 border border-blue-200'}`}>
          <p className={`text-sm font-semibold mb-2 ${isDarkMode ? 'text-cyan-400' : 'text-blue-900'}`}>
            📊 Selected for Comparison: {selectedDevices.length} device{selectedDevices.length > 1 ? 's' : ''}
          </p>
          <div className="flex flex-wrap gap-2">
            {selectedDevices.map(deviceId => {
              const device = AVAILABLE_DEVICES.find(d => d.id === deviceId);
              return device ? (
                <span
                  key={deviceId}
                  className={`text-xs px-3 py-1 rounded-full ${
                    isDarkMode
                      ? 'bg-cyan-600/20 text-cyan-300 border border-cyan-500/50'
                      : 'bg-blue-100 text-blue-700'
                  }`}
                >
                  ✓ {device.name}
                </span>
              ) : null;
            })}
          </div>
        </div>
      )}
    </div>
  );
}
