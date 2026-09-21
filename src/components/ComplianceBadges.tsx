import { Link } from 'react-router-dom';

const BADGES = [
  { label: 'Quebec Law 25', src: '/Images/compliance/law25.png' },
  { label: 'PIPEDA', src: '/Images/compliance/pipeda.png' },
  { label: 'HIPAA ready', src: '/Images/compliance/hipaa.png' },
  { label: 'Self hosted', src: '/Images/compliance/self-hosted.png' },
];

export default function ComplianceBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
      {BADGES.map((badge) => (
        <Link
          key={badge.label}
          to="/safety-security"
          className="inline-flex no-underline opacity-90 hover:opacity-100 transition-opacity"
          title={badge.label}
          aria-label={badge.label}
        >
          <img
            src={badge.src}
            alt={badge.label}
            className="h-14 w-14 sm:h-16 sm:w-16 object-contain"
            width={64}
            height={64}
          />
        </Link>
      ))}
    </div>
  );
}
