import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

type Category = 'All' | 'Fitness' | 'Wellness' | 'Sleep' | 'Female Health';

type Device = {
  name: string;
  categories: Exclude<Category, 'All'>[];
  summary: string;
  data: string[];
};

const CATEGORIES: Category[] = ['All', 'Fitness', 'Wellness', 'Sleep', 'Female Health'];

const DEVICES: Device[] = [
  {
    name: 'Apple HealthKit',
    categories: ['Wellness', 'Fitness', 'Sleep', 'Female Health'],
    summary: 'iOS health platform that pulls metrics across apps and Apple devices.',
    data: ['Heart rate', 'Steps & activity', 'Sleep', 'Workouts', 'Cycle tracking'],
  },
  {
    name: 'Health Connect',
    categories: ['Wellness', 'Fitness', 'Sleep', 'Female Health'],
    summary: 'Google’s Android health hub for shared metrics across apps and devices.',
    data: ['Activity', 'Heart rate', 'Sleep', 'Nutrition', 'Vitals'],
  },
  {
    name: 'Fitbit',
    categories: ['Fitness', 'Sleep', 'Wellness'],
    summary: 'Wearables and app for steps, heart rate, sleep, and daily activity.',
    data: ['Steps', 'Heart rate', 'Sleep stages', 'Calories', 'Active minutes'],
  },
  {
    name: 'Garmin',
    categories: ['Fitness', 'Sleep', 'Wellness'],
    summary: 'GPS fitness wearables for training, outdoors, and endurance sports.',
    data: ['GPS workouts', 'Heart rate', 'Training load', 'Sleep', 'Stress'],
  },
  {
    name: 'Oura',
    categories: ['Sleep', 'Wellness', 'Female Health'],
    summary: 'Smart ring for continuous sleep, readiness, and recovery tracking.',
    data: ['Sleep score', 'Readiness', 'HRV', 'Temperature', 'Activity'],
  },
  {
    name: 'WHOOP',
    categories: ['Fitness', 'Sleep'],
    summary: 'Recovery focused band for strain, sleep, and performance.',
    data: ['Strain', 'Recovery', 'Sleep performance', 'HRV', 'Respiratory rate'],
  },
  {
    name: 'Samsung Health',
    categories: ['Fitness', 'Sleep', 'Wellness', 'Female Health'],
    summary: 'Health app and device ecosystem for steps, workouts, and wellness.',
    data: ['Steps', 'Workouts', 'Sleep', 'Heart rate', 'Stress'],
  },
  {
    name: 'Huawei Health',
    categories: ['Fitness', 'Sleep', 'Wellness'],
    summary: 'Huawei wearables platform for fitness, sleep, and daily wellness.',
    data: ['Activity', 'Heart rate', 'Sleep', 'SpO₂', 'Workouts'],
  },
  {
    name: 'Withings',
    categories: ['Sleep', 'Wellness', 'Female Health'],
    summary: 'Connected scales, sleep analyzers, and health watches.',
    data: ['Weight', 'Body composition', 'Sleep', 'Blood pressure', 'Heart rate'],
  },
  {
    name: 'Polar',
    categories: ['Fitness', 'Sleep'],
    summary: 'Heart rate and sports watches built for athletes and training.',
    data: ['Heart rate', 'Training sessions', 'Calories', 'Sleep', 'Recovery'],
  },
  {
    name: 'COROS',
    categories: ['Fitness', 'Sleep', 'Wellness'],
    summary: 'Endurance focused watches for running, cycling, and training load.',
    data: ['Running metrics', 'Heart rate', 'Training load', 'GPS', 'Sleep'],
  },
  {
    name: 'Google Fit',
    categories: ['Fitness', 'Wellness', 'Female Health'],
    summary: 'Activity and wellness data across Android devices and apps.',
    data: ['Steps', 'Activity', 'Heart rate', 'Calories', 'Goals'],
  },
  {
    name: 'Xiaomi / Mi Fitness',
    categories: ['Fitness', 'Sleep', 'Female Health'],
    summary: 'Trackers and bands for activity, sleep, and heart rate.',
    data: ['Steps', 'Heart rate', 'Sleep', 'Workouts', 'SpO₂'],
  },
  {
    name: 'Strava',
    categories: ['Fitness'],
    summary: 'Social fitness app for running, cycling, and workout sharing.',
    data: ['Runs & rides', 'Distance', 'Pace', 'Elevation', 'Segments'],
  },
  {
    name: 'MyFitnessPal',
    categories: ['Fitness', 'Wellness'],
    summary: 'Nutrition and calorie tracking for food and exercise logging.',
    data: ['Calories', 'Macros', 'Food log', 'Exercise', 'Weight'],
  },
  {
    name: 'Dexcom',
    categories: ['Wellness'],
    summary: 'Continuous glucose monitoring for real-time blood sugar trends.',
    data: ['Glucose readings', 'Trends', 'Alerts', 'Time in range'],
  },
  {
    name: 'Freestyle Libre',
    categories: ['Wellness'],
    summary: 'CGM system for ongoing glucose tracking.',
    data: ['Glucose', 'Trends', 'History', 'Insights'],
  },
  {
    name: 'Omron',
    categories: ['Wellness'],
    summary: 'Connected blood pressure monitors and home wellness tools.',
    data: ['Blood pressure', 'Pulse', 'History', 'Trends'],
  },
  {
    name: 'Suunto',
    categories: ['Fitness'],
    summary: 'Sports watches for adventure and endurance training.',
    data: ['GPS sports', 'Heart rate', 'Altitude', 'Training'],
  },
  {
    name: 'Peloton',
    categories: ['Fitness'],
    summary: 'Live and on-demand fitness classes across bike, strength, and more.',
    data: ['Workouts', 'Output', 'Heart rate', 'Class history'],
  },
  {
    name: 'Eight Sleep',
    categories: ['Sleep'],
    summary: 'Smart mattress cover that tracks and improves sleep quality.',
    data: ['Sleep stages', 'HRV', 'Temperature', 'Presence'],
  },
  {
    name: 'Amazfit',
    categories: ['Fitness', 'Female Health'],
    summary: 'Smartwatches and trackers for activity and everyday health.',
    data: ['Steps', 'Heart rate', 'Sleep', 'Workouts', 'SpO₂'],
  },
  {
    name: 'Wear OS',
    categories: ['Fitness', 'Wellness'],
    summary: 'Google smartwatch OS with fitness and health apps.',
    data: ['Activity', 'Heart rate', 'Workouts', 'Notifications health data'],
  },
  {
    name: 'Ultrahuman',
    categories: ['Wellness', 'Female Health'],
    summary: 'Metabolic and recovery insights from ring and companion tools.',
    data: ['Recovery', 'Sleep', 'Movement', 'Metabolic markers'],
  },
  {
    name: 'Biostrap',
    categories: ['Sleep', 'Wellness', 'Female Health'],
    summary: 'Biometric wearable for HRV, sleep, and recovery signals.',
    data: ['HRV', 'Sleep', 'Heart rate', 'Respiratory rate'],
  },
  {
    name: 'InBody',
    categories: ['Fitness', 'Wellness', 'Female Health'],
    summary: 'Body composition analyzers for muscle, fat, and hydration.',
    data: ['Body fat', 'Muscle mass', 'Water', 'BMI', 'Segmental analysis'],
  },
];

export default function DataSourcesPage() {
  const [searchParams] = useSearchParams();
  const [category, setCategory] = useState<Category>('All');
  const [query, setQuery] = useState(() => searchParams.get('q') ?? '');
  const [selected, setSelected] = useState<Device | null>(null);

  useEffect(() => {
    setQuery(searchParams.get('q') ?? '');
  }, [searchParams]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return DEVICES.filter((d) => {
      const catOk = category === 'All' || d.categories.includes(category);
      const textOk =
        !q ||
        d.name.toLowerCase().includes(q) ||
        d.summary.toLowerCase().includes(q) ||
        d.data.some((x) => x.toLowerCase().includes(q));
      return catOk && textOk;
    });
  }, [category, query]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section className="pt-28 md:pt-32 pb-8 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-[42px] font-semibold tracking-tight text-[#111] leading-[1.2] mb-4">
              Get health data from devices and fitness apps through one wearable API
            </h1>
            <p className="text-[15px] sm:text-[16px] text-[#666]">
              Select a provider to see which data it can share.
            </p>
          </div>
        </section>

        <section className="px-4 sm:px-6 pb-6">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  className={`px-4 py-1.5 text-sm rounded-full border transition-colors ${
                    category === c
                      ? 'bg-[#111] text-white border-[#111]'
                      : 'bg-white text-[#555] border-[#ddd] hover:border-[#aaa]'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999]"
                strokeWidth={1.75}
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search devices…"
                className="w-full pl-9 pr-3 py-2 text-sm rounded-full border border-[#ddd] outline-none focus:border-[#5B9AAD]"
              />
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 pb-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-sm font-medium uppercase tracking-[0.08em] text-[#888]">
              Devices
            </p>
          </div>
        </section>

        <section className="px-4 sm:px-6 pb-20">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((device) => (
              <button
                key={device.name}
                type="button"
                onClick={() => setSelected(device)}
                className="text-left p-5 rounded-xl border border-[#e6e6e6] bg-white hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:border-[#ccc] transition-all cursor-pointer"
              >
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {device.categories.map((c) => (
                    <span
                      key={c}
                      className="text-[11px] px-2 py-0.5 rounded-full bg-[#f1f3f4] text-[#5f6368]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <h3 className="text-[17px] font-semibold text-[#111] mb-2">{device.name}</h3>
                <p className="text-sm text-[#666] leading-relaxed line-clamp-3">{device.summary}</p>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-[#888] py-16">No devices match your search.</p>
          )}
        </section>

        <section className="px-4 sm:px-6 pb-24">
          <div className="max-w-3xl mx-auto text-center rounded-2xl border border-[#e6e6e6] bg-[#fafafa] px-6 py-12">
            <h2 className="text-2xl font-semibold text-[#111] mb-3">Want to see it live?</h2>
            <p className="text-[#666] mb-6 max-w-md mx-auto">
              Book a short demo and we will walk through the devices that matter for your product.
            </p>
            <Link
              to="/schedule-demo"
              className="inline-flex px-6 py-2.5 rounded-full bg-[#5B9AAD] text-white text-sm font-medium no-underline hover:bg-[#4A8799]"
            >
              Book a demo
            </Link>
          </div>
        </section>
      </main>

      {selected && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <button
            type="button"
            className="absolute inset-0 bg-black/40 border-0 cursor-default"
            aria-label="Close"
            onClick={() => setSelected(null)}
          />
          <div className="relative w-full max-w-md bg-white rounded-2xl border border-[#e6e6e6] shadow-xl p-6 max-h-[85vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-[#888] hover:bg-[#f1f3f4] border-0 bg-transparent cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" strokeWidth={1.75} />
            </button>

            <div className="flex flex-wrap gap-1.5 mb-3 pr-8">
              {selected.categories.map((c) => (
                <span
                  key={c}
                  className="text-[11px] px-2 py-0.5 rounded-full bg-[#f1f3f4] text-[#5f6368]"
                >
                  {c}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-semibold text-[#111] mb-2">{selected.name}</h3>
            <p className="text-sm text-[#666] leading-relaxed mb-5">{selected.summary}</p>

            <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#888] mb-3">
              Data available
            </p>
            <ul className="space-y-2 mb-6">
              {selected.data.map((item) => (
                <li
                  key={item}
                  className="text-sm text-[#333] flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#5B9AAD] before:shrink-0"
                >
                  {item}
                </li>
              ))}
            </ul>

            <Link
              to="/schedule-demo"
              onClick={() => setSelected(null)}
              className="inline-flex w-full justify-center px-4 py-2.5 rounded-full bg-[#111] text-white text-sm font-medium no-underline hover:bg-[#333]"
            >
              Ask about this device
            </Link>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
