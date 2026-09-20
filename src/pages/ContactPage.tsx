import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

/** Delivery address only — never shown in the UI */
const CONTACT_INBOX = 'melikamirzaseyedi@gmail.com';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: 'general',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subjectLabel: Record<string, string> = {
      general: 'General Inquiry',
      sales: 'Sales Question',
      technical: 'Technical Support',
      compliance: 'Compliance & Legal',
      partnership: 'Partnership',
    };

    const subject = encodeURIComponent(
      `[TechnoHealth Contact] ${subjectLabel[formData.subject] || 'Message'}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || '—'}\nSubject: ${subjectLabel[formData.subject]}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${CONTACT_INBOX}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const field =
    'w-full px-4 py-3 text-sm rounded-lg border border-[#dadce0] bg-white text-[#202124] outline-none focus:border-[#1A73E8] focus:shadow-[0_0_0_2px_rgba(26,115,232,0.15)]';

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-28 pb-10 md:pt-32 md:pb-12 px-4" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#111] mb-3">
            Contact us
          </h1>
          <p className="text-[16px] text-[#666] max-w-md mx-auto">
            Ask a question and we’ll get back to you soon.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4">
        <div className="max-w-xl mx-auto">
          <div className="flex items-start gap-3 mb-8 p-4 rounded-xl border border-[#e6e6e6] bg-[#fafafa]">
            <div className="w-10 h-10 rounded-full bg-[#e8f0fe] flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-[#1A73E8]" strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-sm font-medium text-[#111]">Headquarters</p>
              <p className="text-sm text-[#555] mt-0.5">Montreal</p>
            </div>
          </div>

          <div className="rounded-xl border border-[#e6e6e6] shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-6 md:p-8 bg-white">
            <h2 className="text-xl font-semibold text-[#111] mb-6">Send a message</h2>

            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle className="w-10 h-10 text-[#1E8E3E] mx-auto mb-3" strokeWidth={1.75} />
                <h3 className="text-lg font-medium text-[#111] mb-2">Almost done</h3>
                <p className="text-sm text-[#666] max-w-sm mx-auto mb-4">
                  Your email app should open with the message ready. Send it and we’ll reply soon.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      company: '',
                      subject: 'general',
                      message: '',
                    });
                  }}
                  className="text-sm text-[#1A73E8] bg-transparent border-0 cursor-pointer hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-[#333] mb-1.5">Full name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={field}
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#333] mb-1.5">Your email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={field}
                    placeholder="you@company.com"
                    autoComplete="email"
                  />
                  <p className="text-xs text-[#888] mt-1.5">So we can reply to you — not shown publicly.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#333] mb-1.5">
                    Company <span className="text-[#999] font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={field}
                    placeholder="Company"
                    autoComplete="organization"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#333] mb-1.5">Topic</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={field}
                  >
                    <option value="general">General question</option>
                    <option value="sales">Sales</option>
                    <option value="technical">Technical support</option>
                    <option value="compliance">Compliance & legal</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#333] mb-1.5">Your question</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`${field} resize-none`}
                    placeholder="What would you like to know?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#1A73E8] text-white text-sm font-medium border-0 cursor-pointer hover:bg-[#1765CC] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" strokeWidth={2} />
                  Send message
                </button>
              </form>
            )}
          </div>

          <p className="text-center text-sm text-[#888] mt-8">
            Prefer a call?{' '}
            <Link to="/schedule-demo" className="text-[#1A73E8] hover:underline no-underline">
              Book a demo
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
