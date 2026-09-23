import type { ReactElement, ReactNode, CSSProperties } from 'react';
import type { SegmentVisualId } from '../config/segments';

function Panel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border p-5 sm:p-6 ${className}`}
      style={{
        borderColor: 'var(--color-border)',
        background:
          'linear-gradient(145deg, #E8F0FE 0%, #FFFFFF 48%, #F8F9FA 100%)',
      }}
    >
      {children}
    </div>
  );
}

function Chip({ children, tone = 'default' }: { children: ReactNode; tone?: 'default' | 'good' | 'warn' | 'bad' | 'brand' }) {
  const styles: Record<string, CSSProperties> = {
    default: { backgroundColor: '#fff', borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' },
    good: { backgroundColor: '#E6F4EA', borderColor: '#CEEAD6', color: '#137333' },
    warn: { backgroundColor: '#FEF7E0', borderColor: '#FDE293', color: '#B06000' },
    bad: { backgroundColor: '#FCE8E6', borderColor: '#F6AEA9', color: '#C5221F' },
    brand: { backgroundColor: 'var(--color-brand-blue)', borderColor: 'transparent', color: '#fff' },
  };
  return (
    <span className="inline-flex px-2.5 py-1 text-[11px] font-medium rounded-full border" style={styles[tone]}>
      {children}
    </span>
  );
}

function FlowArrow() {
  return (
    <div className="hidden sm:flex items-center justify-center px-1 text-sm" style={{ color: 'var(--color-brand-blue)' }}>
      →
    </div>
  );
}

export function MemberTimelineVisual() {
  const rows = [
    { label: 'Sleep', w: '72%' },
    { label: 'Activity', w: '58%' },
    { label: 'Mobility', w: '65%' },
    { label: 'Routine regularity', w: '48%' },
    { label: 'Data coverage', w: '88%' },
  ];
  return (
    <Panel>
      <div className="flex items-center justify-between mb-5 gap-3 flex-wrap">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: 'var(--color-brand-blue)' }}>
            Member timeline
          </p>
          <p className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
            Week 1 → Week 8
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Chip tone="warn">Routine changed</Chip>
          <Chip tone="bad">Device disconnected</Chip>
        </div>
      </div>
      <div className="space-y-3">
        {rows.map((r) => (
          <div key={r.label} className="grid grid-cols-[110px_1fr] gap-3 items-center">
            <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
              {r.label}
            </span>
            <div className="h-2.5 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--color-brand-blue-soft)' }}>
              <div className="h-full rounded-full" style={{ width: r.w, backgroundColor: 'var(--color-brand-blue)' }} />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-5 text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
        Distinguish a real routine shift from a sync failure — before you act on the signal.
      </p>
    </Panel>
  );
}

export function PatientSignalVisual() {
  return (
    <Panel>
      <p className="text-xs font-semibold uppercase tracking-wide mb-4" style={{ color: 'var(--color-brand-blue)' }}>
        Know when the patient changed — and when the data changed
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-xl border bg-white p-4" style={{ borderColor: 'var(--color-border)' }}>
          <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-text)' }}>
            Patient activity ↓ 35%
          </p>
          <ul className="text-xs space-y-1.5 mb-3" style={{ color: 'var(--color-text-secondary)' }}>
            <li>device worn? ✅</li>
            <li>data coverage? ✅</li>
            <li>sync delay? ❌</li>
            <li>source changed? ❌</li>
          </ul>
          <Chip tone="good">Likely behavioral change</Chip>
        </div>
        <div className="rounded-xl border bg-white p-4" style={{ borderColor: 'var(--color-border)' }}>
          <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-text)' }}>
            Activity ↓ 60%
          </p>
          <ul className="text-xs space-y-1.5 mb-3" style={{ color: 'var(--color-text-secondary)' }}>
            <li>coverage: 32%</li>
            <li>device disconnected</li>
          </ul>
          <Chip tone="bad">Data-quality issue</Chip>
        </div>
      </div>
    </Panel>
  );
}

export function TeamGridVisual() {
  const rows = [
    { athlete: 'A', recovery: 'Stable', sleep: 'Stable', routine: '—', quality: 'Good', tone: 'good' as const },
    { athlete: 'B', recovery: '↓', sleep: '↓', routine: 'Changed', quality: 'Good', tone: 'warn' as const },
    { athlete: 'C', recovery: '—', sleep: '—', routine: 'Unknown', quality: 'Device offline', tone: 'bad' as const },
  ];
  return (
    <Panel>
      <p className="text-xs font-semibold uppercase tracking-wide mb-4" style={{ color: 'var(--color-brand-blue)' }}>
        Team performance view
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead>
            <tr style={{ color: 'var(--color-text-secondary)' }}>
              <th className="pb-2 font-medium">Athlete</th>
              <th className="pb-2 font-medium">Recovery</th>
              <th className="pb-2 font-medium">Sleep</th>
              <th className="pb-2 font-medium">Routine</th>
              <th className="pb-2 font-medium">Data quality</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.athlete} className="border-t" style={{ borderColor: 'var(--color-border)' }}>
                <td className="py-2.5 font-semibold" style={{ color: 'var(--color-text)' }}>
                  {r.athlete}
                </td>
                <td className="py-2.5">{r.recovery}</td>
                <td className="py-2.5">{r.sleep}</td>
                <td className="py-2.5">{r.routine}</td>
                <td className="py-2.5">
                  <Chip tone={r.tone}>{r.quality}</Chip>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
        Example: Athlete A usually sleeps 7.5h — last three nights 6.1 / 5.8 / 6.0 with morning activity ↓ and resting HR ↑.
      </p>
    </Panel>
  );
}

export function StudyWorkspaceVisual() {
  return (
    <Panel>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-xl border p-4" style={{ borderColor: '#F6AEA9', backgroundColor: '#FFF8F6' }}>
          <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#C5221F' }}>
            Without TechnoHealth
          </p>
          <p className="text-sm font-medium mb-3" style={{ color: 'var(--color-text)' }}>
            100 participants · 3 devices · 12 months
          </p>
          <ul className="text-xs space-y-1.5" style={{ color: 'var(--color-text-secondary)' }}>
            <li>17 scripts</li>
            <li>Different CSVs</li>
            <li>Manual preprocessing</li>
            <li>Unknown missingness</li>
          </ul>
        </div>
        <div className="rounded-xl border p-4 bg-white" style={{ borderColor: 'var(--color-border)' }}>
          <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--color-brand-blue)' }}>
            With TechnoHealth
          </p>
          <p className="text-sm font-medium mb-3" style={{ color: 'var(--color-text)' }}>
            One study workspace
          </p>
          <div className="flex flex-wrap gap-2">
            {['Participants', 'Sources', 'Coverage', 'Timeline', 'Export'].map((x) => (
              <Chip key={x} tone="brand">
                {x}
              </Chip>
            ))}
          </div>
          <p className="mt-4 text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            Raw → preprocessing version → derived variables → export version — each step traceable.
          </p>
        </div>
      </div>
    </Panel>
  );
}

export function TrialLineageVisual() {
  const steps = ['Device data', 'Provenance', 'Quality checks', 'Longitudinal structure', 'Endpoint / stats / AI'];
  return (
    <Panel>
      <p className="text-xs font-semibold uppercase tracking-wide mb-4" style={{ color: 'var(--color-brand-blue)' }}>
        Sensor data layer for trials
      </p>
      <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <span
              className="px-3 py-2 text-xs font-medium rounded-lg text-white"
              style={{ backgroundColor: i === 0 || i === steps.length - 1 ? 'var(--color-brand-blue-deep)' : 'var(--color-brand-blue)' }}
            >
              {s}
            </span>
            {i < steps.length - 1 && <FlowArrow />}
          </div>
        ))}
      </div>
      <p className="mt-5 text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
        Not just API access — a traceable path from source measurement to analysis.
      </p>
    </Panel>
  );
}

export function ChallengeFlowVisual() {
  const steps = ['Device', 'Normalize activity', 'Identity mapping', 'Rules', 'Leaderboard / rewards'];
  return (
    <Panel>
      <p className="text-xs font-semibold uppercase tracking-wide mb-4" style={{ color: 'var(--color-brand-blue)' }}>
        Challenge backend flow
      </p>
      <div className="flex flex-wrap items-center gap-2">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <Chip tone={i === steps.length - 1 ? 'brand' : 'default'}>{s}</Chip>
            {i < steps.length - 1 && <span style={{ color: 'var(--color-brand-blue)' }}>→</span>}
          </div>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        <Chip tone="good">Data-quality flags</Chip>
        <Chip>Consistency challenge</Chip>
        <Chip>Weekly streak</Chip>
        <Chip>Sleep routine (premium)</Chip>
      </div>
    </Panel>
  );
}

export function LongevityViewVisual() {
  return (
    <Panel>
      <p className="text-xs font-semibold uppercase tracking-wide mb-4" style={{ color: 'var(--color-brand-blue)' }}>
        Longitudinal client view
      </p>
      <div className="grid sm:grid-cols-3 gap-3 mb-4">
        {[
          { label: 'Sleep timing', note: 'Personal baseline' },
          { label: 'Activity pattern', note: 'Week vs. normal' },
          { label: 'Mobility', note: 'Trend + coverage' },
        ].map((x) => (
          <div key={x.label} className="rounded-xl border bg-white p-3" style={{ borderColor: 'var(--color-border)' }}>
            <p className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
              {x.label}
            </p>
            <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>
              {x.note}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        <Chip tone="warn">Routine beginning to shift</Chip>
        <Chip tone="good">Coverage OK</Chip>
      </div>
    </Panel>
  );
}

export function SegmentWorkflowVisual({
  before,
  after,
  label,
}: {
  before: string[];
  after: string[];
  label: string;
}) {
  return (
    <div id="data-flow" className="scroll-mt-24 grid md:grid-cols-2 gap-4">
      <div className="rounded-2xl border p-5" style={{ borderColor: '#F6AEA9', backgroundColor: '#FFF8F6' }}>
        <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: '#C5221F' }}>
          Before TechnoHealth
        </p>
        <div className="flex flex-wrap items-center gap-1.5 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
          {before.map((b, i) => (
            <span key={`${b}-${i}`} className="inline-flex items-center gap-1.5">
              <span className="px-2 py-1 rounded-md border bg-white" style={{ borderColor: '#F6AEA9' }}>
                {b}
              </span>
              {i < before.length - 1 && <span>→</span>}
            </span>
          ))}
        </div>
      </div>
      <div
        className="rounded-2xl border p-5"
        style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface-info)' }}
      >
        <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: 'var(--color-brand-blue)' }}>
          With TechnoHealth
        </p>
        <div className="flex flex-wrap items-center gap-1.5 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
          {after.map((a, i) => (
            <span key={`${a}-${i}`} className="inline-flex items-center gap-1.5">
              <span
                className="px-2 py-1 rounded-md text-white"
                style={{ backgroundColor: i === 1 ? 'var(--color-brand-blue)' : 'var(--color-brand-blue-deep)' }}
              >
                {a}
              </span>
              {i < after.length - 1 && <span style={{ color: 'var(--color-brand-blue)' }}>→</span>}
            </span>
          ))}
        </div>
        <p className="mt-3 text-[11px]" style={{ color: 'var(--color-text-tertiary)' }}>
          {label}
        </p>
      </div>
    </div>
  );
}

export function SegmentHeroFlow({ sources, destination }: { sources: string[]; destination: string }) {
  return (
    <div
      className="rounded-2xl border px-4 py-6 sm:px-6"
      style={{
        borderColor: 'var(--color-border)',
        background: 'linear-gradient(135deg, #E8F0FE 0%, #FFFFFF 50%, #F8F9FA 100%)',
      }}
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 flex-wrap">
        <div className="flex flex-wrap justify-center gap-2">
          {sources.map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
        </div>
        <span className="text-sm font-medium" style={{ color: 'var(--color-brand-blue)' }}>
          →
        </span>
        <Chip tone="brand">TechnoHealth</Chip>
        <span className="text-sm font-medium" style={{ color: 'var(--color-brand-blue)' }}>
          →
        </span>
        <Chip tone="brand">{destination}</Chip>
      </div>
    </div>
  );
}

const visualMap: Record<SegmentVisualId, () => ReactElement> = {
  'member-timeline': MemberTimelineVisual,
  'patient-signal': PatientSignalVisual,
  'team-grid': TeamGridVisual,
  'study-workspace': StudyWorkspaceVisual,
  'trial-lineage': TrialLineageVisual,
  'challenge-flow': ChallengeFlowVisual,
  'longevity-view': LongevityViewVisual,
};

export function SegmentMainVisual({ id }: { id: SegmentVisualId }) {
  const Comp = visualMap[id];
  return <Comp />;
}
