import { useEffect, useState } from 'react';
import { X, Calendar, ArrowRight, ArrowLeft } from 'lucide-react';
import {
  DEMO_REQUEST_EVENT,
  buildCalEmbedUrl,
  getCalLink,
} from '../lib/demoRequest';

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

export default function RequestDemoModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<'intro' | 'book'>('intro');
  const [form, setForm] = useState<FormState>(initialForm);

  useEffect(() => {
    const onOpen = () => {
      setOpen(true);
      setStep('intro');
    };
    window.addEventListener(DEMO_REQUEST_EVENT, onOpen);
    return () => window.removeEventListener(DEMO_REQUEST_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  const notes = [
    form.company && `Company: ${form.company}`,
    form.role && `Role: ${form.role}`,
    form.needs && `Needs: ${form.needs}`,
  ]
    .filter(Boolean)
    .join('\n');

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

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('book');
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="request-demo-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/40 border-0 cursor-default"
        aria-label="Close"
        onClick={() => setOpen(false)}
      />

      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-xl shadow-gelevated border"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderColor: 'var(--color-border)',
        }}
      >
        <div
          className="sticky top-0 flex items-center justify-between px-5 py-4 border-b"
          style={{
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
          }}
        >
          <div>
            <h2
              id="request-demo-title"
              className="text-lg font-medium"
              style={{ color: 'var(--color-text)' }}
            >
              {step === 'intro' ? 'Request a demo' : 'Book a 30-min meeting'}
            </h2>
            <p className="text-sm mt-0.5" style={{ color: 'var(--color-text-secondary)' }}>
              {step === 'intro'
                ? 'Tell us who you are and what you need'
                : 'Pick a time with Support Team'}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="p-2 rounded-full transition-colors"
            style={{ color: 'var(--color-text-secondary)' }}
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" strokeWidth={1.75} />
          </button>
        </div>

        {step === 'intro' ? (
          <form onSubmit={handleContinue} className="p-5 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-text)' }}>
                Full name <span style={{ color: 'var(--color-google-red)' }}>*</span>
              </label>
              <input
                required
                name="name"
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
                name="email"
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
                  name="company"
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
                  name="role"
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
                name="needs"
                value={form.needs}
                onChange={(e) => setForm((f) => ({ ...f, needs: e.target.value }))}
                placeholder="Describe your product, devices, and what you’d like from a demo…"
                rows={4}
                className={`${inputClass} resize-none`}
                style={inputStyle}
              />
            </div>

            <button type="submit" className="g-btn-primary w-full no-underline mt-2">
              Continue to book time
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </button>
          </form>
        ) : (
          <div className="p-5 space-y-4">
            <button
              type="button"
              onClick={() => setStep('intro')}
              className="g-btn-text inline-flex items-center gap-1 px-0"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={2} />
              Back to details
            </button>

            <div
              className="rounded-lg border p-3 text-sm"
              style={{
                backgroundColor: 'var(--color-surface-alt)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-text-secondary)',
              }}
            >
              <p>
                <span style={{ color: 'var(--color-text)' }}>{form.name}</span>
                {' · '}
                {form.email}
              </p>
              {form.needs && <p className="mt-1 line-clamp-2">{form.needs}</p>}
            </div>

            {hasCal && calUrl ? (
              <div
                className="rounded-lg border overflow-hidden"
                style={{ borderColor: 'var(--color-border)', minHeight: 520 }}
              >
                <iframe
                  title="Book a 30-minute demo"
                  src={calUrl}
                  className="w-full border-0"
                  style={{ height: 560 }}
                  loading="lazy"
                />
              </div>
            ) : (
              <div
                className="rounded-lg border p-6 text-center space-y-4"
                style={{
                  borderColor: 'var(--color-border)',
                  backgroundColor: 'var(--color-surface-alt)',
                }}
              >
                <Calendar
                  className="w-10 h-10 mx-auto"
                  style={{ color: 'var(--color-primary)' }}
                  strokeWidth={1.5}
                />
                <div>
                  <p className="font-medium mb-1" style={{ color: 'var(--color-text)' }}>
                    Calendar not connected yet
                  </p>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    Add your Cal.com link in <code className="text-xs">.env</code> as{' '}
                    <code className="text-xs">VITE_CAL_LINK=username/30min</code>, or email Support Team
                    directly.
                  </p>
                </div>
                <a
                  href={`mailto:hello@technohealth.ai?subject=${encodeURIComponent(
                    'Demo request — 30 min meeting'
                  )}&body=${encodeURIComponent(
                    `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nRole: ${form.role}\n\nWhat I need:\n${form.needs}`
                  )}`}
                  className="g-btn-primary inline-flex no-underline"
                >
                  Email SUPPORT TEAM
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
