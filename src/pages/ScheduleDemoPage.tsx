import { useMemo, useState } from 'react';
import { Mail, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { buildCalEmbedUrl, getCalLink } from '../lib/demoRequest';

type FormState = {
  name: string;
  email: string;
  company: string;
  role: string;
  needs: string;
};

const initialForm: FormState = {
  name: '',
  email: '',
  company: '',
  role: '',
  needs: '',
};

export default function ScheduleDemoPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [showCalendar, setShowCalendar] = useState(false);

  const notes = useMemo(
    () =>
      [
        form.company && `Company: ${form.company}`,
        form.role && `Role: ${form.role}`,
        form.needs && `Needs: ${form.needs}`,
      ]
        .filter(Boolean)
        .join('\n'),
    [form]
  );

  const calUrl = buildCalEmbedUrl({
    name: form.name,
    email: form.email,
    notes,
  });
  const hasCal = Boolean(getCalLink());

  const inputClass =
    'w-full px-3 py-2.5 text-sm rounded-lg border outline-none transition-shadow focus:shadow-gsearch';
  const inputStyle = {
    borderColor: 'var(--color-border)',
    color: 'var(--color-text)',
    backgroundColor: 'var(--color-surface)',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCalendar(true);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-surface)' }}>
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h1 className="g-section-title">Request a demo</h1>
            <p className="g-section-sub max-w-xl mx-auto">
              Introduce yourself, tell us what you need, then book a free 30-minute 1:1 with Melika.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div
              className="rounded-gcard border p-6 md:p-8"
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div className="flex items-center gap-4 mb-6 pb-6 border-b" style={{ borderColor: 'var(--color-border)' }}>
                <img
                  src="/Images/Me.png"
                  alt="Melika Seyedi"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium" style={{ color: 'var(--color-text)' }}>
                    Melika Seyedi
                  </p>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    Co-Founder · 30-min intro call
                  </p>
                  <a
                    href="mailto:melika@technohealth.ai"
                    className="inline-flex items-center gap-1.5 text-sm mt-1 no-underline hover:underline"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    <Mail className="w-3.5 h-3.5" strokeWidth={1.75} />
                    melika@technohealth.ai
                  </a>
                </div>
              </div>

              {!showCalendar ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-text)' }}>
                      Full name <span style={{ color: 'var(--color-google-red)' }}>*</span>
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      placeholder="Your name"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-text)' }}>
                      Work email <span style={{ color: 'var(--color-google-red)' }}>*</span>
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      placeholder="you@company.com"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-text)' }}>
                        Company
                      </label>
                      <input
                        value={form.company}
                        onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                        placeholder="Company"
                        className={inputClass}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-text)' }}>
                        Role
                      </label>
                      <input
                        value={form.role}
                        onChange={(e) => setForm((f) => ({ ...f, role: e.target.value }))}
                        placeholder="e.g. CTO"
                        className={inputClass}
                        style={inputStyle}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-text)' }}>
                      What do you need? <span style={{ color: 'var(--color-google-red)' }}>*</span>
                    </label>
                    <textarea
                      required
                      value={form.needs}
                      onChange={(e) => setForm((f) => ({ ...f, needs: e.target.value }))}
                      placeholder="Describe your product, devices, and goals for this meeting…"
                      rows={4}
                      className={`${inputClass} resize-none`}
                      style={inputStyle}
                    />
                  </div>
                  <button type="submit" className="g-btn-primary w-full">
                    Continue to pick a time
                    <ArrowRight className="w-4 h-4" strokeWidth={2} />
                  </button>
                </form>
              ) : (
                <div className="space-y-4">
                  <div
                    className="flex items-start gap-3 rounded-lg border p-4"
                    style={{
                      backgroundColor: 'var(--color-surface-success)',
                      borderColor: 'var(--color-border)',
                    }}
                  >
                    <CheckCircle
                      className="w-5 h-5 shrink-0 mt-0.5"
                      style={{ color: 'var(--color-google-green)' }}
                      strokeWidth={2}
                    />
                    <div className="text-sm" style={{ color: 'var(--color-text)' }}>
                      <p className="font-medium">Thanks, {form.name.split(' ')[0]}!</p>
                      <p style={{ color: 'var(--color-text-secondary)' }}>
                        Now choose a 30-minute slot on the right (or below on mobile).
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowCalendar(false)}
                    className="g-btn-text px-0"
                  >
                    Edit your details
                  </button>
                </div>
              )}
            </div>

            <div
              className="rounded-gcard border overflow-hidden"
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
                boxShadow: 'var(--shadow-card)',
                minHeight: 480,
              }}
            >
              {!showCalendar ? (
                <div className="h-full min-h-[480px] flex flex-col items-center justify-center p-8 text-center gap-3">
                  <Calendar
                    className="w-12 h-12"
                    style={{ color: 'var(--color-text-tertiary)' }}
                    strokeWidth={1.5}
                  />
                  <p className="font-medium" style={{ color: 'var(--color-text)' }}>
                    Calendar unlocks after your intro
                  </p>
                  <p className="text-sm max-w-xs" style={{ color: 'var(--color-text-secondary)' }}>
                    Fill in the form so Melika knows who you are and what you want to discuss.
                  </p>
                </div>
              ) : hasCal && calUrl ? (
                <iframe
                  title="Book a 30-minute demo"
                  src={calUrl}
                  className="w-full border-0"
                  style={{ height: 700 }}
                  loading="lazy"
                />
              ) : (
                <div className="h-full min-h-[480px] flex flex-col items-center justify-center p-8 text-center gap-4">
                  <Calendar
                    className="w-12 h-12"
                    style={{ color: 'var(--color-primary)' }}
                    strokeWidth={1.5}
                  />
                  <div>
                    <p className="font-medium mb-1" style={{ color: 'var(--color-text)' }}>
                      Connect your Cal.com calendar
                    </p>
                    <p className="text-sm max-w-sm mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
                      Create a free account at{' '}
                      <a
                        href="https://cal.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                        style={{ color: 'var(--color-primary)' }}
                      >
                        cal.com
                      </a>
                      , add a 30-min event, connect Google Calendar, then set{' '}
                      <code className="text-xs">VITE_CAL_LINK=username/30min</code> in{' '}
                      <code className="text-xs">.env</code>.
                    </p>
                  </div>
                  <a
                    href={`mailto:melika@technohealth.ai?subject=${encodeURIComponent(
                      'Demo request — 30 min meeting'
                    )}&body=${encodeURIComponent(
                      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nRole: ${form.role}\n\nWhat I need:\n${form.needs}`
                    )}`}
                    className="g-btn-primary no-underline"
                  >
                    Email Melika to schedule
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
