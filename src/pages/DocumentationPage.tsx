import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Copy, Check, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

type SectionId = 'introduction' | 'api' | 'sdk-react' | 'mcp';

const NAV: { id: SectionId; label: string; badge?: string }[] = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'api', label: 'API Documentation' },
  { id: 'sdk-react', label: 'SDK Documentation for React' },
  { id: 'mcp', label: 'MCP Tool', badge: 'UPCOMING' },
];

function CodeBlock({
  code,
  id,
  copiedId,
  onCopy,
}: {
  code: string;
  id: string;
  copiedId: string | null;
  onCopy: (code: string, id: string) => void;
}) {
  return (
    <div className="relative group rounded-xl overflow-hidden border border-[#e6e6e6] bg-[#0f172a]">
      <button
        type="button"
        onClick={() => onCopy(code, id)}
        className="absolute top-3 right-3 p-1.5 rounded-md bg-white/10 text-white/80 hover:bg-white/20 border-0 cursor-pointer"
        aria-label="Copy code"
      >
        {copiedId === id ? (
          <Check className="w-4 h-4 text-green-400" strokeWidth={2} />
        ) : (
          <Copy className="w-4 h-4" strokeWidth={1.75} />
        )}
      </button>
      <pre className="p-4 pr-12 overflow-x-auto text-[13px] leading-relaxed text-slate-100">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function DocumentationPage() {
  const location = useLocation();
  const [active, setActive] = useState<SectionId>('introduction');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Documentation | TechnoHealth';
    return () => {
      document.title = 'TechnoHealth — Wearable health data infrastructure';
    };
  }, []);

  useEffect(() => {
    const hash = location.hash.replace('#', '') as SectionId;
    if (NAV.some((n) => n.id === hash)) {
      setActive(hash);
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.hash]);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const goTo = (id: SectionId) => {
    setActive(id);
    window.history.replaceState(null, '', `#${id}`);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-16 border-b border-[#eee]" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-12">
          <p className="text-sm font-medium text-[#1A73E8] mb-2">Documentation</p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#111] mb-3">
            TechnoHealth Docs
          </h1>
          <p className="text-[16px] text-[#666] max-w-2xl">
            Connect wearable health data to your product. Start with the introduction, then use the
            API or the React SDK.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        <div className="grid lg:grid-cols-[240px_1fr] gap-10 lg:gap-14">
          {/* Sidebar — Spike/Mintlify-style */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#999] mb-3 px-3">
              Docs
            </p>
            <nav className="space-y-0.5">
              {NAV.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goTo(item.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm border-0 cursor-pointer transition-colors flex items-center justify-between gap-2 ${
                    active === item.id
                      ? 'bg-[#e8f0fe] text-[#1A73E8] font-medium'
                      : 'bg-transparent text-[#444] hover:bg-[#f5f5f5]'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wide px-1.5 py-0.5 rounded bg-[#fff3cd] text-[#8a6d1d]">
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </nav>

            <div className="mt-8 px-3">
              <Link
                to="/schedule-demo"
                className="inline-flex items-center gap-1 text-sm text-[#1A73E8] no-underline hover:underline"
              >
                Book a demo
                <ChevronRight className="w-4 h-4" strokeWidth={2} />
              </Link>
            </div>
          </aside>

          {/* Content */}
          <div className="min-w-0 space-y-16 md:space-y-20">
            {/* INTRODUCTION */}
            <section id="introduction" className="scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#111] mb-4 tracking-tight">
                Introduction
              </h2>
              <p className="text-[16px] text-[#555] leading-relaxed mb-6">
                TechnoHealth is one infrastructure for wearable health data. Connect devices, normalize
                the messy parts, and read clean metrics in your app — without building every vendor
                integration yourself.
              </p>

              <div className="rounded-xl border border-[#e6e6e6] bg-[#fafafa] p-5 mb-8">
                <h3 className="text-base font-semibold text-[#111] mb-2">What you get</h3>
                <ul className="space-y-2 text-sm text-[#555]">
                  <li>• One API for many wearables and health platforms</li>
                  <li>• Normalized metrics (heart rate, sleep, activity, and more)</li>
                  <li>• A React SDK when you want to move faster in the browser</li>
                </ul>
              </div>

              <h3 className="text-lg font-semibold text-[#111] mb-3">API or React SDK?</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <button
                  type="button"
                  onClick={() => goTo('api')}
                  className="text-left p-4 rounded-xl border border-[#e6e6e6] hover:border-[#1A73E8] bg-white cursor-pointer transition-colors"
                >
                  <p className="font-semibold text-[#111] mb-1">API Documentation</p>
                  <p className="text-sm text-[#666]">
                    Best for backends and full control over auth, sync, and storage.
                  </p>
                </button>
                <button
                  type="button"
                  onClick={() => goTo('sdk-react')}
                  className="text-left p-4 rounded-xl border border-[#e6e6e6] hover:border-[#1A73E8] bg-white cursor-pointer transition-colors"
                >
                  <p className="font-semibold text-[#111] mb-1">SDK Documentation for React</p>
                  <p className="text-sm text-[#666]">
                    Best for product UIs — connect devices and fetch data from React.
                  </p>
                </button>
              </div>

              <p className="text-sm text-[#666]">
                Browse supported providers on the{' '}
                <Link to="/data-sources" className="text-[#1A73E8] hover:underline">
                  Data Sources
                </Link>{' '}
                page.
              </p>
            </section>

            {/* API DOCUMENTATION */}
            <section id="api" className="scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#111] mb-4 tracking-tight">
                API Documentation
              </h2>
              <p className="text-[16px] text-[#555] leading-relaxed mb-8">
                Use the REST API from your server to authenticate users, connect providers, and query
                health data.
              </p>

              <h3 className="text-lg font-semibold text-[#111] mb-2">Base URL</h3>
              <CodeBlock
                id="base-url"
                code="https://api.technohealth.com/v1"
                copiedId={copiedId}
                onCopy={copyToClipboard}
              />

              <h3 className="text-lg font-semibold text-[#111] mt-8 mb-2">Authentication</h3>
              <p className="text-sm text-[#555] mb-3">
                Send your API key as a Bearer token on every request:
              </p>
              <CodeBlock
                id="auth-header"
                code={`Authorization: Bearer YOUR_API_KEY\nAccept: application/json`}
                copiedId={copiedId}
                onCopy={copyToClipboard}
              />

              <h3 className="text-lg font-semibold text-[#111] mt-8 mb-2">Fetch health data</h3>
              <p className="text-sm text-[#555] mb-3">
                Example: get normalized metrics for a user over a date range.
              </p>
              <CodeBlock
                id="curl-health"
                code={`curl -X GET "https://api.technohealth.com/v1/users/42/health-data?from=2026-04-01&to=2026-04-07" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Accept: application/json"`}
                copiedId={copiedId}
                onCopy={copyToClipboard}
              />

              <p className="text-sm text-[#555] mt-4 mb-3">Example response:</p>
              <CodeBlock
                id="api-response"
                code={`{
  "user_id": "42",
  "from": "2026-04-01",
  "to": "2026-04-07",
  "metrics": {
    "heart_rate_avg": 72,
    "steps": 10234,
    "sleep_minutes": 420,
    "activity_level": "moderate"
  }
}`}
                copiedId={copiedId}
                onCopy={copyToClipboard}
              />

              <h3 className="text-lg font-semibold text-[#111] mt-8 mb-2">Common endpoints</h3>
              <div className="overflow-x-auto rounded-xl border border-[#e6e6e6]">
                <table className="w-full text-sm text-left">
                  <thead className="bg-[#fafafa] text-[#555]">
                    <tr>
                      <th className="px-4 py-3 font-medium">Method</th>
                      <th className="px-4 py-3 font-medium">Path</th>
                      <th className="px-4 py-3 font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#333]">
                    {[
                      ['GET', '/users/{id}/health-data', 'Normalized health metrics'],
                      ['GET', '/users/{id}/devices', 'Connected devices for a user'],
                      ['POST', '/users/{id}/devices/connect', 'Start a provider connection'],
                      ['GET', '/providers', 'List available data sources'],
                    ].map(([method, path, desc]) => (
                      <tr key={path} className="border-t border-[#eee]">
                        <td className="px-4 py-3 font-mono text-[#1A73E8]">{method}</td>
                        <td className="px-4 py-3 font-mono text-[13px]">{path}</td>
                        <td className="px-4 py-3 text-[#555]">{desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* SDK DOCUMENTATION FOR REACT */}
            <section id="sdk-react" className="scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#111] mb-4 tracking-tight">
                SDK Documentation for React
              </h2>
              <p className="text-[16px] text-[#555] leading-relaxed mb-8">
                The React SDK helps you connect devices and read TechnoHealth data inside your React
                app with less boilerplate.
              </p>

              <h3 className="text-lg font-semibold text-[#111] mb-2">Install</h3>
              <CodeBlock
                id="npm-install"
                code="npm install @technohealth/react"
                copiedId={copiedId}
                onCopy={copyToClipboard}
              />

              <h3 className="text-lg font-semibold text-[#111] mt-8 mb-2">Wrap your app</h3>
              <p className="text-sm text-[#555] mb-3">
                Provide your API key once with <code className="text-[13px] bg-[#f1f3f4] px-1.5 py-0.5 rounded">TechnoHealthProvider</code>:
              </p>
              <CodeBlock
                id="provider"
                code={`import { TechnoHealthProvider } from '@technohealth/react';

export function App() {
  return (
    <TechnoHealthProvider apiKey={import.meta.env.VITE_TECHNOHEALTH_KEY}>
      <YourApp />
    </TechnoHealthProvider>
  );
}`}
                copiedId={copiedId}
                onCopy={copyToClipboard}
              />

              <h3 className="text-lg font-semibold text-[#111] mt-8 mb-2">Fetch health data</h3>
              <CodeBlock
                id="react-hook"
                code={`import { useHealthData } from '@technohealth/react';

export function DailySummary({ userId }: { userId: string }) {
  const { data, loading, error } = useHealthData({
    userId,
    from: '2026-04-01',
    to: '2026-04-07',
  });

  if (loading) return <p>Loading…</p>;
  if (error) return <p>Something went wrong.</p>;

  return (
    <div>
      <p>Steps: {data?.metrics.steps}</p>
      <p>Avg heart rate: {data?.metrics.heart_rate_avg}</p>
    </div>
  );
}`}
                copiedId={copiedId}
                onCopy={copyToClipboard}
              />

              <h3 className="text-lg font-semibold text-[#111] mt-8 mb-2">Connect a device</h3>
              <p className="text-sm text-[#555] mb-3">
                Start a provider connection from the UI (user completes consent in a secure flow):
              </p>
              <CodeBlock
                id="connect-device"
                code={`import { useConnectDevice } from '@technohealth/react';

export function ConnectFitbit({ userId }: { userId: string }) {
  const { connect, status } = useConnectDevice();

  return (
    <button
      onClick={() => connect({ userId, provider: 'fitbit' })}
      disabled={status === 'pending'}
    >
      {status === 'pending' ? 'Connecting…' : 'Connect Fitbit'}
    </button>
  );
}`}
                copiedId={copiedId}
                onCopy={copyToClipboard}
              />

              <div className="mt-8 rounded-xl border border-[#e8f0fe] bg-[#f8fbff] p-5">
                <p className="text-sm text-[#555]">
                  Need help wiring this into your product?{' '}
                  <Link to="/schedule-demo" className="text-[#1A73E8] font-medium hover:underline">
                    Book a demo with Support Team
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* MCP TOOL — UPCOMING */}
            <section id="mcp" className="scroll-mt-28">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#111] tracking-tight">
                  MCP Tool
                </h2>
                <span className="text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full bg-[#fff3cd] text-[#8a6d1d] border border-[#f0e0a0]">
                  Upcoming
                </span>
              </div>

              <p className="text-[15px] text-[#888] mb-6 italic">
                این بخش به‌زودی در دسترس قرار می‌گیرد — هنوز برای استفاده عمومی باز نیست.
              </p>

              <p className="text-[16px] text-[#555] leading-relaxed mb-5">
                خلاصهٔ ماجرا اینه: می‌خوایم یه ابزار MCP برای TechnoHealth بیاریم تا بتونی از داخل
                دستیارهای AI (مثل Claude یا ChatGPT) مستقیم از داده‌های پوشیدنی سوال بپرسی — بدون اینکه
                خودت endpoint به endpoint API رو دستی بچسبونی.
              </p>

              <p className="text-[16px] text-[#555] leading-relaxed mb-8">
                یعنی به‌جای اینکه اول همه‌چیز رو از API بکشی و بعد به مدل بدی، خود مدل می‌تونه از
                طریق MCP Tool به متریک‌هایی مثل خواب، فعالیت و ضربان قلب دسترسی بگیره و برات تحلیل کنه.
              </p>

              <h3 className="text-lg font-semibold text-[#111] mb-3">چیزایی که بعداً می‌تونی باهاش بپرسی</h3>
              <ul className="space-y-3 text-[15px] text-[#555] mb-8">
                <li className="flex gap-2">
                  <span className="text-[#1A73E8] shrink-0">•</span>
                  <span>خواب این ماه نسبت به ماه قبل چطور بوده؟</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1A73E8] shrink-0">•</span>
                  <span>فعالیت روزای کاری با آخر هفته فرق داره؟</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1A73E8] shrink-0">•</span>
                  <span>بین کیفیت خواب و سطح فعالیت روز بعد رابطه‌ای می‌بینی؟</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1A73E8] shrink-0">•</span>
                  <span>یه خلاصهٔ هفتگی بساز که بشه برای پزشک یا تیم محصول فرستاد.</span>
                </li>
              </ul>

              <div className="rounded-xl border border-[#f0e0a0] bg-[#fffdf5] p-5">
                <p className="text-sm font-medium text-[#8a6d1d] mb-1">Upcoming</p>
                <p className="text-sm text-[#666] leading-relaxed">
                  راهنمای اتصال، لیست toolها و مثال‌های واقعی وقتی آماده بشه همین‌جا اضافه می‌شن.
                  فعلاً می‌تونی از API و React SDK استفاده کنی؛ برای MCP فعلاً صبر کن تا اعلام کنیم.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
