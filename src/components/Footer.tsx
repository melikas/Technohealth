import { Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

type FooterLink = { label: string; to: string } | { label: string; href: string };

const COMPLIANCE_BADGES = [
  { label: 'Quebec Law 25', src: '/Images/compliance/law25.png' },
  { label: 'PIPEDA', src: '/Images/compliance/pipeda.png' },
  { label: 'HIPAA ready', src: '/Images/compliance/hipaa.png' },
  { label: 'Self hosted', src: '/Images/compliance/self-hosted.png' },
];

export default function Footer() {
  const linkStyle = {
    color: 'var(--color-text-secondary)',
  };

  const columns: { title: string; links: FooterLink[] }[] = [
    {
      title: 'Docs',
      links: [
        { label: 'Documentation', to: '/docs' },
        { label: 'API Reference', to: '/docs' },
        { label: 'SDK and Libraries', to: '/docs' },
        { label: 'System Status', href: 'https://status.technohealth.com' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', to: '/about' },
        { label: 'Services', to: '/services' },
        { label: 'Case Studies', to: '/case-studies' },
        { label: 'Safety and Security', to: '/safety-security' },
      ],
    },
    {
      title: 'Product',
      links: [
        { label: 'Data Sources', to: '/data-sources' },
        { label: 'Solutions', to: '/solutions' },
        { label: 'Book a demo', to: '/schedule-demo' },
        { label: 'Get Started', to: '/get-started' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Contact Us', to: '/contact' },
        { label: 'Blog and Insights', href: '#' },
        { label: 'White Papers', href: '#' },
        { label: 'Webinars', href: '#' },
      ],
    },
  ];

  return (
    <footer style={{ backgroundColor: 'var(--color-surface-footer)', color: 'var(--color-text-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-6">
        <div className="grid md:grid-cols-5 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src="/Images/Icon.png" alt="TechnoHealth" className="w-7 h-7" />
              <span className="g-wordmark text-lg font-medium">
                TechnoHealth
              </span>
            </div>
            <p className="text-sm mb-5 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              One infrastructure for wearable health data.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/technohealth.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-colors no-underline"
                style={linkStyle}
                aria-label="TechnoHealth on LinkedIn"
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

          {columns.map((col) => (
            <div key={col.title}>
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
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
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

        <div className="border-t pt-6 pb-2" style={{ borderColor: 'var(--color-border)' }}>
          <div className="flex flex-col gap-4">
            <div>
              <p
                className="text-xs font-medium mb-3"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Compliant with
              </p>
              <div className="flex flex-wrap items-center gap-3">
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
              © 2026 TechnoHealth. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
