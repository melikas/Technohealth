import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  SegmentHeroFlow,
  SegmentMainVisual,
  SegmentWorkflowVisual,
} from '../components/SegmentVisuals';
import { getSegment, segmentList, type SegmentSlug } from '../config/segments';

const HERO_IMAGES: Record<SegmentSlug, string> = {
  insurers: '/Images/segments/insurers-v2.jpg',
  'digital-health': '/Images/segments/digital-v2.jpg',
  sports: '/Images/segments/fitness-v7.jpg',
  research: '/Images/segments/research-v2.jpg',
  pharma: '/Images/segments/pharma-v2.jpg',
  gamification: '/Images/segments/gamification.jpg',
  longevity: '/Images/segments/digital-v2.jpg',
};

const FLOW_DESTINATION: Record<SegmentSlug, string> = {
  insurers: 'Prevention & wellness programs',
  'digital-health': 'Your clinical platform',
  sports: 'Performance team',
  research: 'Dataset / analysis / AI',
  pharma: 'Endpoint analysis',
  gamification: 'Leaderboard / rewards',
  longevity: 'Longitudinal care view',
};

export default function SegmentPage() {
  const { slug } = useParams<{ slug: string }>();
  const segment = slug ? getSegment(slug) : undefined;

  useEffect(() => {
    if (segment) {
      document.title = `${segment.name} | TechnoHealth`;
    }
    return () => {
      document.title = 'TechnoHealth. Wearable health data infrastructure';
    };
  }, [segment]);

  if (!segment || !slug) {
    return <Navigate to="/solutions" replace />;
  }

  const typedSlug = slug as SegmentSlug;

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-surface)' }}>
      <Header />

      {/* Hero */}
      <section className="relative min-h-[78vh] flex items-end overflow-hidden pt-16">
        <img
          src={HERO_IMAGES[typedSlug]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(13,71,161,0.94) 0%, rgba(13,71,161,0.78) 45%, rgba(26,115,232,0.4) 100%)',
          }}
        />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 pb-14 md:pb-18 pt-24">
          <p className="text-sm font-medium text-white/80 mb-3 tracking-wide">{segment.name}</p>
          <h1 className="text-3xl sm:text-4xl md:text-[42px] font-semibold tracking-tight leading-[1.15] text-white max-w-3xl mb-5">
            {segment.heroTitle}
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed mb-8">
            {segment.heroSub}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/schedule-demo" className="g-btn-primary no-underline text-center min-w-[180px]">
              {segment.primaryCta}
            </Link>
            <a
              href={segment.secondaryHref}
              className="inline-flex items-center justify-center min-w-[180px] px-6 py-2.5 text-sm font-medium rounded-full border no-underline transition-colors"
              style={{
                color: '#FFFFFF',
                borderColor: 'rgba(255,255,255,0.45)',
                backgroundColor: 'rgba(255,255,255,0.12)',
              }}
            >
              {segment.secondaryCta}
            </a>
          </div>
        </div>
      </section>

      {/* Workflow animation under hero */}
      <section className="py-10 md:py-12 px-5" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-5xl mx-auto space-y-6">
          <SegmentHeroFlow
            sources={segment.sources ?? ['Wearables', 'Phone']}
            destination={FLOW_DESTINATION[typedSlug]}
          />
          <SegmentWorkflowVisual
            before={segment.flowBefore}
            after={segment.flowAfter}
            label={segment.workflowLabel}
          />
        </div>
      </section>

      {/* Pain */}
      <section className="py-16 md:py-20 px-5 border-t" style={{ borderColor: 'var(--color-border)' }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: 'var(--color-brand-blue)' }}>
            {segment.painEyebrow}
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight max-w-3xl mb-6" style={{ color: 'var(--color-text)' }}>
            {segment.painHeadline}
          </h2>
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
            <ul className="space-y-3">
              {segment.painBody.map((line) => (
                <li key={line} className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {line}
                </li>
              ))}
            </ul>
            {(segment.sources || segment.brokenBits || segment.painAside) && (
              <div
                className="rounded-2xl border p-5"
                style={{ borderColor: 'var(--color-border)', backgroundColor: '#FFF8F6' }}
              >
                {segment.sources && (
                  <div className="mb-4">
                    <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#C5221F' }}>
                      Sources
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {segment.sources.map((s) => (
                        <span
                          key={s}
                          className="px-2.5 py-1 text-xs rounded-full border bg-white"
                          style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {segment.brokenBits && (
                  <div className="mb-3">
                    <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#C5221F' }}>
                      What breaks
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {segment.brokenBits.map((b) => (
                        <span
                          key={b}
                          className="px-2.5 py-1 text-xs rounded-full"
                          style={{ backgroundColor: '#FCE8E6', color: '#C5221F' }}
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {segment.painAside && (
                  <p className="text-sm font-medium mt-2" style={{ color: 'var(--color-text)' }}>
                    {segment.painAside}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 md:py-20 px-5" style={{ backgroundColor: 'var(--color-surface-muted, #F8F9FA)' }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: 'var(--color-brand-blue)' }}>
            {segment.solutionEyebrow}
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight max-w-3xl mb-10" style={{ color: 'var(--color-text)' }}>
            {segment.solutionHeadline}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {segment.solutionBlocks.map((block) => (
              <div key={block.title}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-brand-blue)' }}>
                  {block.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {block.desc}
                </p>
              </div>
            ))}
          </div>

          <div id="workflow" className="scroll-mt-24">
            <SegmentMainVisual id={segment.visual} />
            {segment.visualCaption && (
              <p className="mt-3 text-xs text-center" style={{ color: 'var(--color-text-tertiary)' }}>
                {segment.visualCaption}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* What they get */}
      <section className="py-16 md:py-20 px-5 border-t" style={{ borderColor: 'var(--color-border)' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight max-w-3xl mb-8" style={{ color: 'var(--color-text)' }}>
            {segment.valueHeadline}
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {segment.values.map((v) => (
              <li
                key={v}
                className="flex gap-3 text-sm leading-relaxed"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: 'var(--color-brand-blue)' }} />
                {v}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why + Trust */}
      <section className="py-16 md:py-20 px-5" style={{ backgroundColor: 'var(--color-surface-muted, #F8F9FA)' }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-4" style={{ color: 'var(--color-text)' }}>
              {segment.whyHeadline}
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              {segment.whyBody}
            </p>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-4" style={{ color: 'var(--color-text)' }}>
              {segment.trustHeadline}
            </h2>
            <ul className="space-y-2.5">
              {segment.trustItems.map((item) => (
                <li key={item} className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pilot CTA */}
      <section className="py-16 md:py-20 px-5">
        <div
          className="max-w-5xl mx-auto rounded-2xl px-6 py-10 sm:px-10 sm:py-12 text-center"
          style={{
            background:
              'linear-gradient(135deg, var(--color-brand-blue-deep) 0%, var(--color-brand-blue) 100%)',
          }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-4">
            {segment.pilotHeadline}
          </h2>
          <p className="text-base text-white/90 max-w-2xl mx-auto leading-relaxed mb-8">
            {segment.pilotBody}
          </p>
          <Link
            to="/schedule-demo"
            className="inline-flex items-center justify-center min-w-[200px] px-6 py-3 text-sm font-semibold rounded-full no-underline transition-colors"
            style={{ backgroundColor: '#fff', color: 'var(--color-brand-blue-deep)' }}
          >
            {segment.pilotCta}
          </Link>
        </div>
      </section>

      {/* Other segments */}
      <section className="py-12 px-5 border-t" style={{ borderColor: 'var(--color-border)' }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium mb-4" style={{ color: 'var(--color-text-secondary)' }}>
            Other customer segments
          </p>
          <div className="flex flex-wrap gap-3">
            {segmentList
              .filter((s) => s.slug !== segment.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  to={`/solutions/${s.slug}`}
                  className="text-sm no-underline hover:underline"
                  style={{ color: 'var(--color-brand-blue)' }}
                >
                  {s.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
