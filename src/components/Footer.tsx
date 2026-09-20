import { Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

type FooterLink = { label: string; to: string } | { label: string; href: string };

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
      title: 'Pricing',
      links: [
        { label: 'Pricing Plans', to: '/pricing' },
        { label: 'ROI Calculator', href: '#' },
        { label: 'Volume Licensing', href: '#' },
        { label: 'Book a demo', to: '/schedule-demo' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', to: '/about' },
        { label: 'Services', to: '/services' },
        { label: 'Case Studies', to: '/case-studies' },
        { label: 'Compliance', to: '/compliance' },
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
                href="https://www.linkedin.com/company/technohealth.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-colors no-underline"
                style={linkStyle}
                aria-label="LinkedIn"
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

        <div className="border-t pt-4 pb-2" style={{ borderColor: 'var(--color-border)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p style={{ color: 'var(--color-text-secondary)' }}>
              © 2026 TechnoHealth. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="no-underline hover:underline" style={linkStyle}>
                Privacy
              </a>
              <a href="#" className="no-underline hover:underline" style={linkStyle}>
                Terms
              </a>
              <Link to="/compliance" className="no-underline hover:underline" style={linkStyle}>
                Compliance
              </Link>
              <a href="#" className="no-underline hover:underline" style={linkStyle}>
                Advertising
              </a>
              <Link to="/about" className="no-underline hover:underline" style={linkStyle}>
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
