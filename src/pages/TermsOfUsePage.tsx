import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { getTermsCopy } from '../config/termsCopy';

export default function TermsOfUsePage() {
  const { language, setLanguage } = useLanguage();
  const t = getTermsCopy(language);
  const [activeId, setActiveId] = useState(t.sections[0]?.id ?? 'about');

  useEffect(() => {
    document.title = `${t.pageTitle} | TechnoHealth`;
    return () => {
      document.title = 'TechnoHealth. Wearable health data infrastructure';
    };
  }, [t.pageTitle]);

  useEffect(() => {
    const ids = t.sections.map((s) => s.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.1, 0.25, 0.5] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [t.sections, language]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-surface)' }}>
      <Header />

      <main className="pt-24 pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 md:mb-14 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <button
                type="button"
                onClick={() => setLanguage('fr')}
                className="px-3 py-1.5 text-xs font-semibold rounded-full border cursor-pointer"
                style={{
                  borderColor: language === 'fr' ? 'var(--color-brand-blue)' : 'var(--color-border)',
                  backgroundColor: language === 'fr' ? 'var(--color-surface-info)' : 'transparent',
                  color: language === 'fr' ? 'var(--color-brand-blue)' : 'var(--color-text-secondary)',
                }}
                aria-pressed={language === 'fr'}
              >
                Français
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className="px-3 py-1.5 text-xs font-semibold rounded-full border cursor-pointer"
                style={{
                  borderColor: language === 'en' ? 'var(--color-brand-blue)' : 'var(--color-border)',
                  backgroundColor: language === 'en' ? 'var(--color-surface-info)' : 'transparent',
                  color: language === 'en' ? 'var(--color-brand-blue)' : 'var(--color-text-secondary)',
                }}
                aria-pressed={language === 'en'}
              >
                English
              </button>
            </div>

            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2" style={{ color: 'var(--color-text)' }}>
              TechnoHealth — {t.pageTitle}
            </h1>
            <p className="text-base mb-4" style={{ color: 'var(--color-text-secondary)' }}>
              {t.bilingualTitle}
            </p>
            <p className="text-sm" style={{ color: 'var(--color-text-tertiary)' }}>
              {t.effectiveLabel}: {t.effectiveDate}
              <span className="mx-2">·</span>
              {t.updatedLabel}: {t.updatedDate}
            </p>
            <p className="mt-5 text-[15px] leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              {t.intro}
            </p>
            <p
              className="mt-4 text-sm leading-relaxed rounded-lg border px-4 py-3"
              style={{
                borderColor: 'var(--color-border)',
                backgroundColor: 'var(--color-surface-alt)',
                color: 'var(--color-text-secondary)',
              }}
            >
              {t.disclaimer}
            </p>
          </div>

          <div className="grid lg:grid-cols-[220px_1fr] gap-10 lg:gap-14 items-start">
            <nav
              className="hidden lg:block sticky top-24 self-start"
              aria-label={t.pageTitle}
            >
              <ul className="space-y-1 border-l" style={{ borderColor: 'var(--color-border)' }}>
                {t.sections.map((section) => {
                  const active = activeId === section.id;
                  return (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        onClick={() => setActiveId(section.id)}
                        className="block pl-4 py-1.5 text-sm no-underline transition-colors -ml-px border-l-2"
                        style={{
                          borderColor: active ? 'var(--color-brand-blue)' : 'transparent',
                          color: active ? 'var(--color-brand-blue)' : 'var(--color-text-secondary)',
                          fontWeight: active ? 600 : 400,
                        }}
                      >
                        {section.nav}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="min-w-0 space-y-12 md:space-y-14">
              {t.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-28">
                  <h2
                    className="text-xl sm:text-2xl font-semibold tracking-tight mb-4"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.blocks.map((block, i) => (
                      <p
                        key={`${section.id}-${i}`}
                        className="text-[15px] leading-relaxed"
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        {block}
                      </p>
                    ))}
                  </div>
                  {section.id === 'security' ? (
                    <p className="mt-4 text-sm">
                      <Link to="/safety-security" className="no-underline hover:underline" style={{ color: 'var(--color-brand-blue)' }}>
                        {language === 'fr' ? 'Voir Safety & Security' : 'See Safety & Security'}
                      </Link>
                    </p>
                  ) : null}
                </section>
              ))}

              <div
                className="rounded-xl border px-5 py-5"
                style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface-info)' }}
              >
                <p className="text-[15px] leading-relaxed mb-3" style={{ color: 'var(--color-text)' }}>
                  {t.relatedPrivacy}
                </p>
                <Link
                  to="/privacy"
                  className="text-sm font-medium no-underline hover:underline"
                  style={{ color: 'var(--color-brand-blue)' }}
                >
                  {t.relatedPrivacyCta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
