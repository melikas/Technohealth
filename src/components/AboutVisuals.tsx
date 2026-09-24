import { useState } from 'react';

/** Product explanation visuals for the About page */

export function HeroFlowVisual() {
  const sources = ['Apple Watch', 'Garmin', 'Fitbit', 'Phone'];
  const outputs = ['Trusted Data', 'Routine', 'Analysis', 'AI'];

  return (
    <div className="w-full overflow-hidden rounded-2xl border px-4 py-8 sm:px-8 sm:py-10"
      style={{
        borderColor: 'var(--color-border)',
        background:
          'linear-gradient(135deg, #D5F0F8 0%, #FFFFFF 45%, #F8F9FA 100%)',
      }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4">
        <div className="flex flex-wrap justify-center gap-2 max-w-[220px]">
          {sources.map((s, i) => (
            <span
              key={s}
              className="about-flow-in px-3 py-1.5 text-xs font-medium rounded-full border bg-white"
              style={{
                borderColor: 'var(--color-border)',
                color: 'var(--color-text-secondary)',
                animationDelay: `${i * 120}ms`,
              }}
            >
              {s}
            </span>
          ))}
        </div>

        <div className="hidden lg:block flex-1 h-px mx-2 relative" style={{ backgroundColor: 'var(--color-brand-blue-soft)' }}>
          <span className="absolute inset-y-0 left-0 w-1/3 about-flow-pulse" style={{ background: 'linear-gradient(90deg, transparent, var(--color-brand-blue), transparent)' }} />
        </div>

        <div
          className="shrink-0 px-5 py-3 rounded-xl text-sm font-semibold text-white shadow-sm"
          style={{ backgroundColor: 'var(--color-brand-blue)' }}
        >
          TechnoHealth
        </div>

        <div className="hidden lg:block flex-1 h-px mx-2 relative" style={{ backgroundColor: 'var(--color-brand-blue-soft)' }}>
          <span className="absolute inset-y-0 left-0 w-1/3 about-flow-pulse" style={{ background: 'linear-gradient(90deg, transparent, var(--color-brand-blue), transparent)', animationDelay: '0.6s' }} />
        </div>

        <div className="flex flex-wrap justify-center gap-2 max-w-[240px]">
          {outputs.map((o, i) => (
            <span
              key={o}
              className="about-flow-out px-3 py-1.5 text-xs font-medium rounded-full text-white"
              style={{
                backgroundColor: 'var(--color-brand-blue-deep)',
                animationDelay: `${400 + i * 100}ms`,
              }}
            >
              {o}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function MessyUsableVisual() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="rounded-xl border p-5" style={{ borderColor: 'var(--color-border)', backgroundColor: '#FFF8F6' }}>
        <p className="text-xs font-semibold uppercase tracking-wide mb-4" style={{ color: '#C5221F' }}>
          Messy streams
        </p>
        <div className="space-y-3 font-mono text-[11px]" style={{ color: 'var(--color-text-secondary)' }}>
          <div className="flex gap-1 items-center flex-wrap">
            <span className="h-2 w-8 rounded-sm bg-[#EA4335]" />
            <span className="h-2 w-3 rounded-sm bg-transparent border border-dashed border-[#EA4335]" />
            <span className="h-2 w-10 rounded-sm bg-[#EA4335]/opacity-40" />
            <span className="text-[10px]">gap · late sync</span>
          </div>
          <div className="flex gap-1 items-center flex-wrap">
            <span className="h-2 w-5 rounded-sm bg-[#FBBC04]" />
            <span className="h-2 w-2 rounded-sm opacity-0" />
            <span className="h-2 w-6 rounded-sm bg-[#FBBC04]" />
            <span className="h-2 w-4 rounded-sm bg-transparent border border-dashed border-[#FBBC04]" />
            <span className="text-[10px]">missing · mixed source</span>
          </div>
          <div className="flex gap-1 items-center flex-wrap">
            <span className="h-2 w-12 rounded-sm bg-[#0B9BC2] opacity-50" />
            <span className="h-2 w-7 rounded-sm bg-[#0B9BC2]" />
            <span className="text-[10px]">08:42 vs 09:05</span>
          </div>
          <p className="pt-2 text-xs leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            Disconnects, delayed syncs, missing measurements, format drift.
          </p>
        </div>
      </div>

      <div className="rounded-xl border p-5" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface-info)' }}>
        <p className="text-xs font-semibold uppercase tracking-wide mb-4" style={{ color: 'var(--color-brand-blue-deep)' }}>
          Usable timeline
        </p>
        <div className="space-y-3">
          {['Sleep', 'HR', 'Steps', 'Recovery'].map((label, i) => (
            <div key={label} className="flex items-center gap-3">
              <span className="w-16 text-xs font-medium" style={{ color: 'var(--color-text)' }}>{label}</span>
              <div className="flex-1 h-2.5 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(8,122,156,0.12)' }}>
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${70 + i * 6}%`,
                    backgroundColor: 'var(--color-brand-blue)',
                    opacity: 0.85 - i * 0.1,
                  }}
                />
              </div>
            </div>
          ))}
          <p className="pt-2 text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            One aligned timeline — complete, timed, and ready to analyze.
          </p>
        </div>
      </div>
    </div>
  );
}

export function ProvenanceVisual() {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative rounded-xl border p-6 sm:p-8"
      style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <p className="text-xs font-semibold uppercase tracking-wide mb-6" style={{ color: 'var(--color-text-tertiary)' }}>
        Provenance on every point
      </p>
      <div className="relative h-28 flex items-end gap-1.5 sm:gap-2">
        {[40, 55, 48, 72, 65, 80, 58, 90, 70, 62, 85, 75].map((h, i) => (
          <button
            key={i}
            type="button"
            className="flex-1 rounded-t-sm border-0 cursor-pointer transition-transform origin-bottom"
            style={{
              height: `${h}%`,
              backgroundColor: i === 7 ? 'var(--color-brand-blue)' : 'var(--color-brand-blue-soft)',
              transform: hover && i === 7 ? 'scaleY(1.08)' : undefined,
            }}
            aria-label={i === 7 ? 'Datapoint with provenance' : undefined}
            onFocus={() => setHover(true)}
            onBlur={() => setHover(false)}
          />
        ))}
      </div>
      <div
        className={`mt-4 rounded-lg border p-4 text-sm transition-opacity ${hover ? 'opacity-100' : 'opacity-90'}`}
        style={{
          borderColor: 'var(--color-brand-blue-soft)',
          backgroundColor: 'var(--color-surface-info)',
        }}
      >
        <p className="font-semibold mb-2" style={{ color: 'var(--color-text)' }}>
          Heart rate · 72 bpm
        </p>
        <ul className="space-y-1 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
          <li><span className="font-medium" style={{ color: 'var(--color-text)' }}>Source:</span> Garmin</li>
          <li><span className="font-medium" style={{ color: 'var(--color-text)' }}>Collected:</span> 08:42</li>
          <li><span className="font-medium" style={{ color: 'var(--color-text)' }}>Synced:</span> 09:05</li>
          <li><span className="font-medium" style={{ color: 'var(--color-text)' }}>Status:</span> Complete</li>
        </ul>
      </div>
    </div>
  );
}

export function RoutineVisual() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const bands = [
    { name: 'Sleep', color: '#013A52', pattern: [0.7, 0.72, 0.68, 0.5, 0.45, 0.75, 0.78] },
    { name: 'Activity', color: '#087A9C', pattern: [0.55, 0.6, 0.58, 0.35, 0.3, 0.65, 0.5] },
    { name: 'Mobility', color: '#0B9BC2', pattern: [0.4, 0.42, 0.45, 0.25, 0.22, 0.5, 0.48] },
    { name: 'Screen', color: '#8AB4F8', pattern: [0.35, 0.3, 0.32, 0.55, 0.6, 0.4, 0.38] },
  ];

  return (
    <div className="rounded-xl border p-5 sm:p-6" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
      <div className="flex items-center justify-between mb-4 gap-3 flex-wrap">
        <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--color-text-tertiary)' }}>
          Routine view · 7 days
        </p>
        <span className="text-[11px] px-2 py-1 rounded-full" style={{ backgroundColor: '#FCE8E6', color: '#C5221F' }}>
          Shift highlighted · Thu–Fri
        </span>
      </div>
      <div className="space-y-3">
        {bands.map((band) => (
          <div key={band.name} className="flex items-center gap-3">
            <span className="w-16 text-xs font-medium shrink-0" style={{ color: 'var(--color-text)' }}>{band.name}</span>
            <div className="flex-1 grid grid-cols-7 gap-1.5">
              {band.pattern.map((v, i) => (
                <div
                  key={i}
                  className="h-8 rounded-sm relative"
                  style={{
                    backgroundColor: band.color,
                    opacity: 0.25 + v * 0.75,
                    outline: i >= 3 && i <= 4 ? '2px solid #EA4335' : undefined,
                    outlineOffset: 1,
                  }}
                  title={`${days[i]} ${band.name}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex justify-between text-[10px]" style={{ color: 'var(--color-text-tertiary)' }}>
        {days.map((d) => (
          <span key={d} className="flex-1 text-center">{d}</span>
        ))}
      </div>
    </div>
  );
}

export function SignalOrSensorVisual() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="rounded-xl border p-5" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
        <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-text)' }}>Real behavior change</p>
        <p className="text-xs mb-4" style={{ color: 'var(--color-text-secondary)' }}>Morning activity declining for 3 weeks</p>
        <svg viewBox="0 0 200 80" className="w-full h-20" aria-hidden>
          <polyline
            fill="none"
            stroke="#087A9C"
            strokeWidth="2.5"
            points="0,20 40,22 80,28 120,40 160,55 200,68"
          />
        </svg>
      </div>
      <div className="rounded-xl border p-5" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
        <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-text)' }}>Sensor / sync problem</p>
        <p className="text-xs mb-4" style={{ color: 'var(--color-text-secondary)' }}>Gap from device disconnect — not a true drop</p>
        <svg viewBox="0 0 200 80" className="w-full h-20" aria-hidden>
          <polyline fill="none" stroke="#087A9C" strokeWidth="2.5" points="0,35 50,32 90,38" />
          <line x1="90" y1="20" x2="90" y2="70" stroke="#EA4335" strokeWidth="1.5" strokeDasharray="4 3" />
          <line x1="140" y1="20" x2="140" y2="70" stroke="#EA4335" strokeWidth="1.5" strokeDasharray="4 3" />
          <polyline fill="none" stroke="#087A9C" strokeWidth="2.5" points="140,36 170,34 200,38" />
          <text x="100" y="16" fill="#C5221F" fontSize="9">disconnect</text>
        </svg>
      </div>
    </div>
  );
}

export function PipelineVisual() {
  const steps = ['Connect', 'Verify', 'Understand', 'Analyze', 'Build'];
  return (
    <div className="rounded-xl border p-5 sm:p-6" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface-alt)' }}>
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-5 text-sm">
        <span className="px-3 py-1.5 rounded-full border bg-white" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }}>
          Wearable API → Data access
        </span>
        <span className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>connectivity only</span>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-semibold mr-1" style={{ color: 'var(--color-brand-blue)' }}>TechnoHealth</span>
        {steps.map((step, i) => (
          <span key={step} className="inline-flex items-center gap-2">
            <span
              className="px-3 py-1.5 text-xs font-semibold rounded-full text-white"
              style={{ backgroundColor: i === 0 ? 'var(--color-brand-blue-deep)' : 'var(--color-brand-blue)' }}
            >
              {step}
            </span>
            {i < steps.length - 1 ? (
              <span style={{ color: 'var(--color-brand-blue-soft)' }}>→</span>
            ) : null}
          </span>
        ))}
      </div>
      <p className="mt-4 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
        Quality · Provenance · Routine · Analysis / AI — in the same workspace.
      </p>
    </div>
  );
}

export function AiReadyVisual() {
  return (
    <div className="rounded-xl border p-6 sm:p-8" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
      <div className="flex flex-col items-center">
        <div
          className="px-5 py-3 rounded-xl text-sm font-semibold text-white mb-6"
          style={{ backgroundColor: 'var(--color-brand-blue-deep)' }}
        >
          Trusted longitudinal dataset
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 w-full max-w-lg">
          {['Dashboard', 'ML Model', 'AI Agent'].map((label) => (
            <div key={label} className="flex-1 text-center">
              <div className="mx-auto w-px h-8 mb-2" style={{ backgroundColor: 'var(--color-brand-blue-soft)' }} />
              <div
                className="px-3 py-3 rounded-lg border text-sm font-medium"
                style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface-info)', color: 'var(--color-text)' }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-5 text-xs text-center max-w-sm" style={{ color: 'var(--color-text-secondary)' }}>
          TechnoHealth is the foundation — not just another endpoint.
        </p>
      </div>
    </div>
  );
}
