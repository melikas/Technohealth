import { Link } from 'react-router-dom';

type Badge = {
  id: string;
  title: string;
  subtitle: string;
};

const BADGES: Badge[] = [
  { id: 'law25', title: 'Law 25', subtitle: 'Quebec' },
  { id: 'pipeda', title: 'PIPEDA', subtitle: 'Canada' },
  { id: 'hipaa', title: 'HIPAA', subtitle: 'Ready' },
  { id: 'selfhost', title: 'Self-hosted', subtitle: 'On-prem' },
];

function SealMark({ id }: { id: string }) {
  const stroke = 'currentColor';
  switch (id) {
    case 'law25':
      return (
        <svg viewBox="0 0 32 32" className="w-5 h-5" aria-hidden>
          <path
            d="M16 4 L24 7.5 V15.5 C24 21 20.5 25.2 16 27 C11.5 25.2 8 21 8 15.5 V7.5 Z"
            fill="none"
            stroke={stroke}
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M12.5 16.2 L15 18.7 L20 12.8"
            fill="none"
            stroke={stroke}
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'pipeda':
      return (
        <svg viewBox="0 0 32 32" className="w-5 h-5" aria-hidden>
          <circle cx="16" cy="16" r="11" fill="none" stroke={stroke} strokeWidth="1.6" />
          <path
            d="M16 8.5 L17.2 12.2 L21.2 12.2 L18 14.6 L19.2 18.4 L16 15.9 L12.8 18.4 L14 14.6 L10.8 12.2 L14.8 12.2 Z"
            fill="none"
            stroke={stroke}
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'hipaa':
      return (
        <svg viewBox="0 0 32 32" className="w-5 h-5" aria-hidden>
          <circle cx="16" cy="16" r="11" fill="none" stroke={stroke} strokeWidth="1.6" />
          <path
            d="M16 9.5 V22.5 M11.5 13.5 H20.5 M11.5 18.5 H20.5"
            fill="none"
            stroke={stroke}
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 32 32" className="w-5 h-5" aria-hidden>
          <rect
            x="8"
            y="7"
            width="16"
            height="18"
            rx="2.5"
            fill="none"
            stroke={stroke}
            strokeWidth="1.6"
          />
          <path
            d="M11 12 H21 M11 16 H21 M11 20 H17"
            fill="none"
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

export default function ComplianceBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2.5">
      {BADGES.map((badge) => (
        <Link
          key={badge.id}
          to="/safety-security"
          className="group inline-flex items-center gap-2.5 no-underline rounded-lg border px-3 py-2 transition-colors"
          style={{
            borderColor: 'var(--color-border)',
            backgroundColor: 'var(--color-surface)',
            color: 'var(--color-text)',
          }}
          title={`${badge.title} — ${badge.subtitle}`}
          aria-label={`${badge.title}, ${badge.subtitle}`}
        >
          <span
            className="flex h-8 w-8 items-center justify-center rounded-md shrink-0"
            style={{
              backgroundColor: 'var(--color-surface-info)',
              color: 'var(--color-brand-blue-deep)',
            }}
          >
            <SealMark id={badge.id} />
          </span>
          <span className="text-left leading-tight">
            <span className="block text-[12px] font-semibold tracking-tight">{badge.title}</span>
            <span
              className="block text-[10px] uppercase tracking-[0.06em]"
              style={{ color: 'var(--color-text-tertiary)' }}
            >
              {badge.subtitle}
            </span>
          </span>
        </Link>
      ))}
    </div>
  );
}
