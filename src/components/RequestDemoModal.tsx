import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DEMO_REQUEST_EVENT } from '../lib/demoRequest';
import { submitLead } from '../lib/submitLead';

type FormState = {
  name: string;
  email: string;
  needs: string;
};

const initialForm: FormState = {
  name: '',
  email: '',
  needs: '',
};

export default function RequestDemoModal() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const onOpen = () => {
      setOpen(true);
      setForm(initialForm);
      setSent(false);
      setError('');
      setSubmitting(false);
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

  const inputClass =
    'w-full px-3 py-2.5 text-sm rounded-lg border outline-none';
  const inputStyle = {
    borderColor: 'var(--color-border)',
    color: 'var(--color-text)',
    backgroundColor: 'var(--color-surface)',
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError('');

    try {
      await submitLead({
        name: form.name,
        email: form.email,
        subject: 'Demo request — TechnoHealth',
        message: form.needs,
        meta: { source: 'request-demo-modal' },
      });
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
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
        className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-xl shadow-gelevated border"
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
              Request a demo
            </h2>
            <p className="text-sm mt-0.5" style={{ color: 'var(--color-text-secondary)' }}>
              SUPPORT TEAM will follow up with you.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="p-2 rounded-full"
            style={{ color: 'var(--color-text-secondary)' }}
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" strokeWidth={1.75} />
          </button>
        </div>

        {sent ? (
          <div className="p-8 text-center space-y-2">
            <p className="text-base font-medium" style={{ color: 'var(--color-text)' }}>
              Request received
            </p>
            <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              Thanks — we will email you shortly to schedule the demo.
            </p>
            <button type="button" onClick={() => setOpen(false)} className="g-btn-primary w-full mt-4">
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-text)' }}>
                Your name
              </label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder="Alex"
                className={inputClass}
                style={inputStyle}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-text)' }}>
                Work email
              </label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                placeholder="alex@company.com"
                className={inputClass}
                style={inputStyle}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-text)' }}>
                What do you need?
              </label>
              <textarea
                required
                value={form.needs}
                onChange={(e) => setForm((f) => ({ ...f, needs: e.target.value }))}
                placeholder="A short note about your project…"
                rows={3}
                className={`${inputClass} resize-none`}
                style={inputStyle}
              />
            </div>

            {error ? (
              <p className="text-sm text-red-600" role="alert">
                {error}
              </p>
            ) : null}

            <button type="submit" className="g-btn-primary w-full" disabled={submitting}>
              {submitting ? 'Sending…' : 'Send request'}
            </button>

            <p className="text-center text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              Or{' '}
              <Link
                to="/schedule-demo"
                onClick={() => setOpen(false)}
                className="hover:underline"
                style={{ color: 'var(--color-primary)' }}
              >
                pick a time on the demo page
              </Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
