import { Link } from 'react-router-dom';

type Seal = {
  id: string;
  label: string;
  lines: [string, string];
};

const SEALS: Seal[] = [
  { id: 'law25', label: 'Quebec Law 25', lines: ['LAW 25', 'QUEBEC'] },
  { id: 'pipeda', label: 'PIPEDA', lines: ['PIPEDA', 'CANADA'] },
  { id: 'hipaa', label: 'HIPAA ready', lines: ['HIPAA', 'READY'] },
  { id: 'selfhost', label: 'Self hosted', lines: ['SELF', 'HOSTED'] },
];

function SealIcon({ lines }: { lines: [string, string] }) {
  return (
    <svg viewBox="0 0 96 96" className="h-14 w-14 sm:h-16 sm:w-16" aria-hidden>
      <circle cx="48" cy="48" r="45.5" fill="#fff" stroke="#1a1a1a" strokeWidth="2.5" />
      <circle cx="48" cy="48" r="39" fill="none" stroke="#1a1a1a" strokeWidth="1.25" />
      <circle cx="48" cy="48" r="34.5" fill="none" stroke="#1a1a1a" strokeWidth="0.75" opacity="0.35" />
      <text
        x="48"
        y="44"
        textAnchor="middle"
        fill="#111"
        style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.04em', fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
      >
        {lines[0]}
      </text>
      <text
        x="48"
        y="58"
        textAnchor="middle"
        fill="#444"
        style={{ fontSize: '8px', fontWeight: 600, letterSpacing: '0.12em', fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
      >
        {lines[1]}
      </text>
    </svg>
  );
}

export default function ComplianceBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
      {SEALS.map((seal) => (
        <Link
          key={seal.id}
          to="/safety-security"
          className="inline-flex no-underline opacity-90 hover:opacity-100 transition-opacity"
          title={seal.label}
          aria-label={seal.label}
        >
          <SealIcon lines={seal.lines} />
        </Link>
      ))}
    </div>
  );
}
