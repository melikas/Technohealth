import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import RequestDemoModal from './RequestDemoModal';
import { useLanguage } from '../context/LanguageContext';
import { getSiteCopy } from '../config/siteCopy';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();
  const t = getSiteCopy(language);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setShowServicesMenu(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const serviceItems = [
    { label: t.footerApiDocs, path: '/docs#api' },
    { label: t.footerResearchDashboard, path: '/schedule-demo' },
    { label: t.footerMcp, path: '/docs#mcp' },
    { label: t.footerSdk, path: '/docs#sdk-react' },
  ];

  const navLinks = [
    { label: t.navServices, hasDropdown: true },
    { label: t.navDocs, path: '/docs' },
    { label: t.navAbout, path: '/about' },
    { label: t.navContact, path: '/contact' },
  ];

  const langButton = (
    <button
      type="button"
      onClick={toggleLanguage}
      className="g-btn-text uppercase tracking-wide min-w-[2.25rem] justify-center"
      style={{ color: 'var(--color-text-secondary)' }}
      aria-label={t.switchLanguage}
      title={t.switchLanguage}
    >
      {language === 'en' ? 'FR' : 'EN'}
    </button>
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-200 ${
          isScrolled ? 'shadow-gcard' : ''
        }`}
        style={{ backgroundColor: 'var(--color-surface)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center hover:opacity-90 transition-opacity no-underline"
            aria-label="TechnoHealth home"
          >
            <img src="/Images/Icon3.png" alt="TechnoHealth" className="h-9 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative">
                {link.hasDropdown ? (
                  <div
                    onMouseEnter={() => setShowServicesMenu(true)}
                    onMouseLeave={() => setShowServicesMenu(false)}
                  >
                    <button
                      type="button"
                      className="g-btn-text flex items-center gap-1"
                      style={{
                        color: showServicesMenu ? 'var(--color-text)' : 'var(--color-text-secondary)',
                        backgroundColor: showServicesMenu ? 'var(--color-surface-chip)' : undefined,
                      }}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${showServicesMenu ? 'rotate-180' : ''}`}
                        strokeWidth={1.75}
                      />
                    </button>

                    {showServicesMenu && (
                      <div
                        className="absolute top-full left-0 mt-1 py-2 w-52 rounded-lg border shadow-gelevated"
                        style={{
                          backgroundColor: 'var(--color-surface)',
                          borderColor: 'var(--color-border)',
                        }}
                      >
                        {serviceItems.map((item) => (
                          <Link
                            key={item.label}
                            to={item.path}
                            onClick={() => setShowServicesMenu(false)}
                            className="block px-4 py-2.5 text-sm no-underline transition-colors"
                            style={{
                              color: isActive(item.path) ? 'var(--color-primary)' : 'var(--color-text)',
                              backgroundColor: isActive(item.path)
                                ? 'var(--color-surface-chip)'
                                : undefined,
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = 'var(--color-surface-chip)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = isActive(item.path)
                                ? 'var(--color-surface-chip)'
                                : 'transparent';
                            }}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path || '#'}
                    className="g-btn-text"
                    style={{
                      color: isActive(link.path || '')
                        ? 'var(--color-primary)'
                        : 'var(--color-text-secondary)',
                      backgroundColor: isActive(link.path || '')
                        ? 'var(--color-surface-chip)'
                        : undefined,
                    }}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            {langButton}

            <Link
              to="/schedule-demo"
              className="g-btn-primary ml-1 no-underline"
              style={{ color: 'var(--color-text-on-primary)' }}
            >
              {t.bookDemo}
            </Link>
          </nav>

          <div className="flex md:hidden items-center gap-1">
            {langButton}
            <button
              type="button"
              className="p-2 rounded-full"
              style={{ color: 'var(--color-text-secondary)' }}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={t.menu}
            >
              {mobileOpen ? (
                <X className="w-6 h-6" strokeWidth={1.75} />
              ) : (
                <Menu className="w-6 h-6" strokeWidth={1.75} />
              )}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div
            className="md:hidden border-t px-4 py-3 space-y-1"
            style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}
          >
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.label}>
                  <p
                    className="px-3 py-2 text-xs font-medium uppercase tracking-wide"
                    style={{ color: 'var(--color-text-tertiary)' }}
                  >
                    {t.navServices}
                  </p>
                  {serviceItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.path}
                      className="block px-3 py-2.5 text-sm rounded-lg no-underline"
                      style={{ color: 'var(--color-text)' }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.path || '#'}
                  className="block px-3 py-2.5 text-sm rounded-lg no-underline"
                  style={{ color: 'var(--color-text)' }}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              to="/schedule-demo"
              className="g-btn-primary w-full mt-2 no-underline"
              style={{ color: 'var(--color-text-on-primary)' }}
            >
              {t.bookDemo}
            </Link>
          </div>
        )}
      </header>

      <RequestDemoModal />
    </>
  );
}
