import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  HeroFlowVisual,
  MessyUsableVisual,
  ProvenanceVisual,
  RoutineVisual,
  SignalOrSensorVisual,
} from '../components/AboutVisuals';

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About | TechnoHealth';
    return () => {
      document.title = 'TechnoHealth. Wearable health data infrastructure';
    };
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-surface)' }}>
      <Header />

      {/* Hero — full-bleed image plane */}
      <section className="relative min-h-[88vh] flex items-end overflow-hidden pt-16">
        <img
          src="/Images/about/hero-wearable.jpg"
          alt="Wearable health device on a wrist"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(1,58,82,0.92) 0%, rgba(1,58,82,0.72) 42%, rgba(8,122,156,0.35) 100%)',
          }}
        />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 pb-16 md:pb-20 pt-28">
          <p className="text-2xl sm:text-3xl font-medium mb-6 text-white tracking-tight">
            TechnoHealth
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-[44px] font-semibold tracking-tight leading-[1.15] text-white max-w-3xl mb-5">
            Your wearable data is connected. But can you actually trust and use it?
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed mb-8">
            TechnoHealth turns fragmented wearable and smartphone data into reliable, analysis-ready
            health data — with provenance, data quality, and a clear view of each person&apos;s
            routine over time.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <a href="#how-it-works" className="g-btn-primary no-underline text-center min-w-[160px]">
              See how it works
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center min-w-[160px] px-6 py-2.5 text-sm font-medium rounded-full border no-underline transition-colors"
              style={{
                color: '#FFFFFF',
                borderColor: 'rgba(255,255,255,0.45)',
                backgroundColor: 'rgba(255,255,255,0.12)',
              }}
            >
              Talk to us
            </Link>
          </div>
          <p className="text-sm text-white/75 max-w-xl leading-relaxed">
            Built for digital health companies, longevity clinics, remote-care teams, and researchers
            working with continuous health data.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-12 px-5" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-5xl mx-auto">
          <HeroFlowVisual />
        </div>
      </section>

      {/* The problem */}
      <section className="py-16 md:py-24 px-5" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] mb-3" style={{ color: 'var(--color-brand-blue)' }}>
                The problem
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-snug mb-4" style={{ color: 'var(--color-text)' }}>
                More data doesn&apos;t mean better insight.
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                Your users may already wear an Apple Watch, Garmin, Fitbit, Oura, or connected medical
                device. But real-world wearable data is messy.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                Devices disconnect. Data arrives late. Measurements are missing. Users stop wearing
                devices. Manual and automatic measurements get mixed together. APIs and formats change.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                Before your team can analyze anything, you first have to ask: Is this data complete?
                Where did it come from? Can I trust it?
              </p>
              <p className="text-[15px] font-medium leading-relaxed" style={{ color: 'var(--color-text)' }}>
                That&apos;s the problem TechnoHealth is built to solve.
              </p>
            </div>
            <div className="lg:col-span-7">
              <MessyUsableVisual />
              <div className="mt-6 overflow-hidden rounded-2xl">
                <img
                  src="/Images/about/wrist-watch.jpg"
                  alt="Person checking a smartwatch"
                  className="w-full h-56 sm:h-64 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What TechnoHealth does */}
      <section id="how-it-works" className="scroll-mt-24 py-16 md:py-24 px-5" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] mb-3" style={{ color: 'var(--color-brand-blue)' }}>
            What TechnoHealth does
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-snug mb-4 max-w-2xl" style={{ color: 'var(--color-text)' }}>
            One place to make wearable data usable.
          </h2>
          <p className="text-[15px] leading-relaxed max-w-2xl mb-10" style={{ color: 'var(--color-text-secondary)' }}>
            TechnoHealth connects data from multiple sources, organizes it into a consistent structure,
            and keeps the context behind every measurement. You can see where the data came from, when
            it was collected, what is missing, and whether gaps or changes may be caused by the person
            — or simply by the device. From there, the same data is ready for your dashboard, analytics,
            machine-learning models, or AI agents.
          </p>
          <ProvenanceVisual />
        </div>
      </section>

      {/* Differentiator */}
      <section className="py-16 md:py-24 px-5" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12">
            <div className="lg:col-span-5 order-2 lg:order-1 overflow-hidden rounded-2xl">
              <img
                src="/Images/about/clinician-data.jpg"
                alt="Clinician reviewing health data"
                className="w-full h-72 object-cover"
                loading="lazy"
              />
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] mb-3" style={{ color: 'var(--color-brand-blue)' }}>
                Your differentiator
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-snug mb-4" style={{ color: 'var(--color-text)' }}>
                Not just the data. The person behind it.
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                Alongside the measurements, TechnoHealth gives you a longitudinal view of the
                person&apos;s routine and rhythm.
              </p>
              <p className="text-[15px] leading-relaxed mb-3" style={{ color: 'var(--color-text-secondary)' }}>
                Instead of only seeing <span className="font-medium" style={{ color: 'var(--color-text)' }}>3,200 steps today</span>,
                you can start asking: Has this person&apos;s morning activity been declining for three
                weeks? Has their sleep timing shifted? Is their daily routine becoming less regular? Or
                are we simply looking at missing or unreliable sensor data?
              </p>
              <p className="text-[15px] leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                That context is especially valuable in longevity, healthy aging, sleep, mental health,
                preventive care, and remote monitoring.
              </p>
            </div>
          </div>
          <RoutineVisual />
          <div className="mt-8">
            <p className="text-sm font-medium mb-4" style={{ color: 'var(--color-text)' }}>
              Signal or sensor problem?
            </p>
            <SignalOrSensorVisual />
            <p className="mt-4 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              TechnoHealth helps you tell the difference.
            </p>
          </div>
        </div>
      </section>

      {/* Why not just an API */}
      <section className="py-16 md:py-24 px-5" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] mb-3" style={{ color: 'var(--color-brand-blue)' }}>
            Why not just use an API?
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-snug mb-4 max-w-2xl" style={{ color: 'var(--color-text)' }}>
            Connectivity is only the first step.
          </h2>
          <p className="text-[15px] leading-relaxed max-w-2xl mb-4" style={{ color: 'var(--color-text-secondary)' }}>
            Wearable APIs can give you access to the data. Internal teams can also build custom
            pipelines. But after the connection, someone still has to check data quality, track
            provenance, handle missingness, align data over time, prepare it for analysis, and make
            sense of longitudinal changes.
          </p>
          <p className="text-[15px] leading-relaxed max-w-2xl" style={{ color: 'var(--color-text-secondary)' }}>
            TechnoHealth brings those steps into the same workspace.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
