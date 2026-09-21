import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Mic } from 'lucide-react';
import { resolveSearchDestination, searchSite, type SiteSearchResult } from '../lib/siteSearch';
import { useLanguage } from '../context/LanguageContext';
import { getSiteCopy } from '../config/siteCopy';

export default function Hero() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = getSiteCopy(language);
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);

  const metrics = [
    {
      title: t.metric1Title,
      description: t.metric1Desc,
      accent: 'var(--color-brand-blue-deep)',
    },
    {
      title: t.metric2Title,
      description: t.metric2Desc,
      accent: 'var(--color-brand-blue)',
    },
    {
      title: t.metric3Title,
      description: t.metric3Desc,
      accent: 'var(--color-brand-blue-light)',
    },
  ];

  const results = useMemo(() => searchSite(query), [query]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, []);

  const goTo = (destination: string) => {
    setOpen(false);
    navigate(destination);
  };

  const goToResult = (result: SiteSearchResult) => {
    setQuery(result.label);
    goTo(result.to);
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (results[activeIndex]) {
      goToResult(results[activeIndex]);
      return;
    }
    goTo(resolveSearchDestination(query));
  };

  return (
    <section
      className="pt-28 pb-20 md:pt-32 md:pb-24 relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-14">
          <h1 className="g-wordmark text-4xl sm:text-5xl md:text-[56px] font-medium tracking-tight leading-tight mb-2">
            TechnoHealth
          </h1>

          <p
            className="text-base md:text-lg mt-5 max-w-2xl leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {t.heroTagline}
          </p>

          <div ref={wrapRef} className="relative mt-10 max-w-[584px] w-full z-20">
            <form onSubmit={onSubmit} className="g-search w-full max-w-none" role="search">
              <Search
                className="w-5 h-5 shrink-0"
                style={{ color: 'var(--color-text-tertiary)' }}
                strokeWidth={1.75}
                aria-hidden
              />
              <input
                type="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setOpen(true);
                }}
                onFocus={() => setOpen(true)}
                onKeyDown={(e) => {
                  if (!open || results.length === 0) return;
                  if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    setActiveIndex((i) => (i + 1) % results.length);
                  } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    setActiveIndex((i) => (i - 1 + results.length) % results.length);
                  } else if (e.key === 'Escape') {
                    setOpen(false);
                  }
                }}
                placeholder={t.heroSearchPlaceholder}
                className="flex-1 min-w-0 bg-transparent border-0 outline-none text-left text-base px-3"
                style={{ color: 'var(--color-text)' }}
                aria-label={t.heroSearchAria}
                aria-expanded={open}
                aria-controls="hero-search-results"
                autoComplete="off"
              />
              <Mic
                className="w-5 h-5 shrink-0"
                style={{ color: 'var(--color-brand-blue)' }}
                strokeWidth={1.75}
                aria-hidden
              />
            </form>

            {open && results.length > 0 && (
              <ul
                id="hero-search-results"
                role="listbox"
                className="absolute left-0 right-0 mt-2 py-2 rounded-gcard border text-left overflow-hidden"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderColor: 'var(--color-border)',
                  boxShadow: 'var(--shadow-elevated)',
                }}
              >
                {results.map((result, index) => (
                  <li key={result.id} role="option" aria-selected={index === activeIndex}>
                    <button
                      type="button"
                      onMouseEnter={() => setActiveIndex(index)}
                      onClick={() => goToResult(result)}
                      className="w-full px-4 py-2.5 flex flex-col gap-0.5 text-left transition-colors"
                      style={{
                        backgroundColor:
                          index === activeIndex ? 'var(--color-surface-chip)' : 'transparent',
                      }}
                    >
                      <span className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                        {result.label}
                      </span>
                      <span className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>
                        {result.description}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Link
              to="/schedule-demo"
              className="g-btn-primary no-underline min-w-[140px]"
              style={{ color: 'var(--color-text-on-primary)' }}
            >
              {t.bookDemo}
            </Link>
            <Link
              to="/schedule-demo"
              className="g-btn-secondary no-underline min-w-[140px]"
            >
              {t.scheduleDemo}
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-2">
            <img
              src="/Images/Picture2.png"
              alt="TechnoHealth data flow from wearables to API dashboard"
              className="w-full h-auto object-contain"
            />
          </div>

          <ul className="space-y-7 lg:pl-2">
            {[
              { title: t.heroPoint1Title, desc: t.heroPoint1Desc },
              { title: t.heroPoint2Title, desc: t.heroPoint2Desc },
              { title: t.heroPoint3Title, desc: t.heroPoint3Desc },
            ].map((point) => (
              <li key={point.title} className="text-left">
                <p
                  className="text-base font-medium tracking-tight"
                  style={{ color: 'var(--color-text)' }}
                >
                  {point.title}
                </p>
                <p
                  className="text-sm mt-1 leading-relaxed"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {point.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="grid md:grid-cols-3 gap-10 md:gap-0 md:divide-x pt-2 text-center"
          style={{ borderColor: 'var(--color-border)' }}
        >
          {metrics.map((metric, index) => (
            <div
              key={metric.title}
              className={`flex flex-col items-center md:px-8 ${index === 0 ? 'md:pl-0' : ''} ${
                index === metrics.length - 1 ? 'md:pr-0' : ''
              }`}
            >
              <h3
                className="text-2xl md:text-[28px] font-semibold tracking-tight leading-snug mb-2"
                style={{ color: metric.accent }}
              >
                {metric.title}
              </h3>
              <p
                className="text-sm md:text-[15px] leading-relaxed max-w-[220px]"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
