import { Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getSiteCopy } from '../config/siteCopy';

type FooterLink = { label: string; to: string } | { label: string; href: string };

const COMPLIANCE_BADGES = [
  { label: 'Quebec Law 25', src: '/Images/compliance/law25.png' },
  { label: 'PIPEDA', src: '/Images/compliance/pipeda.png' },
  { label: 'HIPAA ready', src: '/Images/compliance/hipaa.png' },
  { label: 'Self hosted', src: '/Images/compliance/self-hosted.png' },
];

export default function Footer() {
  const { language } = useLanguage();
  const t = getSiteCopy(language);

  const linkStyle = {
    color: 'var(--color-text-secondary)',
  };

  const columns: { title: string; links: FooterLink[] }[] = [
    {
      title: t.footerServicesCol,
      links: [
        { label: t.footerApiDocs, to: '/docs#api' },
        { label: t.footerResearchDashboard, to: '/schedule-demo' },
        { label: t.footerMcp, to: '/docs#mcp' },
        { label: t.footerSdk, to: '/docs#sdk-react' },
      ],
    },
    {
      title: t.footerUseCases,
      links: [
        { label: t.footerUseCaseInsurers, to: '/solutions' },
        { label: t.footerUseCaseDigitalHealth, to: '/solutions' },
        { label: t.footerUseCaseFitness, to: '/solutions' },
        { label: t.footerUseCaseResearch, to: '/solutions' },
        { label: t.footerUseCasePharma, to: '/solutions' },
        { label: t.footerUseCaseGamification, to: '/solutions' },
      ],
    },
    {
      title: t.footerCompany,
      links: [
        { label: t.footerContact, to: '/contact' },
        { label: t.footerAbout, to: '/about' },
        { label: t.footerTerms, href: '#' },
        { label: t.footerPrivacy, href: '#' },
        { label: t.footerBookDemo, to: '/schedule-demo' },
      ],
    },
  ];

  return (
    <footer style={{ backgroundColor: 'var(--color-surface-footer)', color: 'var(--color-text-secondary)' }}>
      <div className="max-w-5xl mx-auto px-8 sm:px-12 lg:px-16 pt-14 pb-8">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center gap-2 mb-3">
            <img src="/Images/Icon.png" alt="TechnoHealth" className="w-7 h-7" />
            <span className="g-wordmark text-lg font-medium">TechnoHealth</span>
          </div>
          <p className="text-sm max-w-md leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
            {t.footerTagline}
          </p>
          <div className="flex gap-3 justify-center">
            <a
              href="https://www.linkedin.com/company/technohealth.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full transition-colors no-underline"
              style={linkStyle}
              aria-label={t.footerLinkedIn}
            >
              <Linkedin className="w-5 h-5" strokeWidth={1.75} />
            </a>
            <a href="#" className="p-2 rounded-full no-underline" style={linkStyle} aria-label="Twitter">
              <Twitter className="w-5 h-5" strokeWidth={1.75} />
            </a>
            <a href="#" className="p-2 rounded-full no-underline" style={linkStyle} aria-label="GitHub">
              <Github className="w-5 h-5" strokeWidth={1.75} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12 mb-12 text-center sm:text-left max-w-3xl mx-auto">
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col items-center sm:items-start">
              <h4 className="text-sm font-medium mb-4" style={{ color: 'var(--color-text)' }}>
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {'to' in link ? (
                      <Link
                        to={link.to}
                        className="text-sm no-underline hover:underline"
                        style={linkStyle}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm no-underline hover:underline"
                        style={linkStyle}
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t pt-6" style={{ borderColor: 'var(--color-border)' }}>
          <div className="flex flex-col items-center gap-4 text-center">
            <div>
              <p
                className="text-xs font-medium mb-3"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {t.footerCompliantWith}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {COMPLIANCE_BADGES.map((badge) => (
                  <Link
                    key={badge.label}
                    to="/safety-security"
                    className="inline-flex items-center no-underline opacity-75 hover:opacity-100 transition-opacity"
                    title={badge.label}
                    aria-label={badge.label}
                  >
                    <img
                      src={badge.src}
                      alt={badge.label}
                      className="h-8 w-8 object-contain"
                    />
                  </Link>
                ))}
              </div>
            </div>
            <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              {t.footerRights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
