import { useEffect, useMemo, useState } from 'react';
import { Clock, Video, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { buildCalEmbedUrl, getCalLink } from '../lib/demoRequest';
import { submitLead } from '../lib/submitLead';

const TIME_SLOTS = [
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
];

function nextWeekdays(count: number) {
  const days: { value: string; label: string }[] = [];
  const d = new Date();
  while (days.length < count) {
    d.setDate(d.getDate() + 1);
    const day = d.getDay();
    if (day === 0 || day === 6) continue;
    const value = d.toISOString().slice(0, 10);
    const label = d.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
    days.push({ value, label });
  }
  return days;
}

/** True when VITE_CAL_LINK includes an event type, e.g. user/30min */
function hasCalEventType(link: string) {
  return link.includes('/');
}

/**
 * Book a demo: Cal.com when an event type exists (emails you + puts it on your calendar).
 * Otherwise a request form emails your inbox (never hello@technohealth.ai — that domain does not exist).
 */
export default function ScheduleDemoPage() {
  const calLink = getCalLink();
  const useCal = hasCalEventType(calLink);
  const calSrc = useMemo(() => (useCal ? buildCalEmbedUrl() : ''), [useCal]);

  const dates = useMemo(() => nextWeekdays(10), []);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [note, setNote] = useState('');
  const [sent, setSent] = useState(false);
  const [sentViaMailto, setSentViaMailto] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = 'Book a Demo | TechnoHealth';
    return () => {
      document.title = 'TechnoHealth. Wearable health data infrastructure';
    };
  }, []);

  useEffect(() => {
    if (dates.length && !date) setDate(dates[0].value);
  }, [dates, date]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!time || submitting) return;

    const dateLabel = dates.find((d) => d.value === date)?.label || date;
    setSubmitting(true);
    setError('');

    try {
      const result = await submitLead({
        name,
        email,
        subject: 'Demo request — TechnoHealth',
        message: [
          'I would like a 30 minute product demo.',
          `Preferred: ${dateLabel} at ${time}`,
          note ? `Note: ${note}` : '',
          '',
          `Reply to: ${email}`,
        ]
          .filter((line) => line !== undefined)
          .join('\n'),
        meta: {
          preferred_day: dateLabel,
          preferred_time: time,
          source: 'schedule-demo',
        },
      });
      setSentViaMailto(result.via === 'mailto');
      setSent(true);
    } catch {
      setError('We could not send your request. Please try again in a moment.');
    } finally {
      setSubmitting(false);
    }
  };

  const field =
    'w-full px-3 py-2.5 text-sm rounded-lg border border-[#ddd] bg-white text-[#222] outline-none focus:border-[#999]';

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#222]">
      <Header />

      <main className="flex-1 w-full">
        <section className="pt-[120px] md:pt-[140px] pb-8 md:pb-10 px-5">
          <div className="mx-auto max-w-[640px] text-center">
            <h1 className="font-semibold text-[28px] sm:text-[36px] md:text-[40px] leading-[1.2] tracking-[-0.02em] text-[#111] mb-3">
              Schedule a demo with our team
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed text-[#666] max-w-[480px] mx-auto">
              {useCal
                ? 'Pick a time that works. You will get a calendar invite right away.'
                : 'Tell us a preferred time. We will confirm by email and send a calendar invite.'}
            </p>
          </div>
        </section>

        <section className="px-4 sm:px-6 pb-20 md:pb-28">
          <div className="mx-auto max-w-[920px]">
            {useCal ? (
              <div className="bg-white border border-[#e6e6e6] rounded-[12px] shadow-[0_2px_12px_rgba(0,0,0,0.06)] overflow-hidden">
                <iframe
                  title="Book a TechnoHealth demo"
                  src={calSrc}
                  className="w-full border-0"
                  style={{ minHeight: 720 }}
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="bg-white border border-[#e6e6e6] rounded-[12px] shadow-[0_2px_12px_rgba(0,0,0,0.06)] overflow-hidden">
                <div className="grid md:grid-cols-[300px_1fr]">
                  <aside className="border-b md:border-b-0 md:border-r border-[#e6e6e6] p-7 md:p-8 bg-[#fafafa]">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-11 h-11 rounded-full bg-[#eee] flex items-center justify-center shrink-0">
                        <img src="/Images/Icon.png" alt="" className="w-6 h-6 object-contain" />
                      </div>
                      <div>
                        <p className="text-[12px] text-[#888]">TechnoHealth</p>
                        <p className="text-[15px] font-semibold text-[#111]">SUPPORT TEAM</p>
                      </div>
                    </div>

                    <h2 className="text-[18px] font-semibold text-[#111] mb-4">Product demo</h2>

                    <ul className="space-y-3 mb-5">
                      <li className="flex items-center gap-2.5 text-[14px] text-[#555]">
                        <Clock className="w-4 h-4 text-[#888] shrink-0" strokeWidth={1.75} />
                        30 min
                      </li>
                      <li className="flex items-center gap-2.5 text-[14px] text-[#555]">
                        <Video className="w-4 h-4 text-[#888] shrink-0" strokeWidth={1.75} />
                        Video call
                      </li>
                    </ul>

                    <p className="text-[14px] leading-relaxed text-[#666]">
                      Your request goes straight to our team inbox. We reply with a confirmed time and calendar invite.
                    </p>
                  </aside>

                  <div className="p-6 md:p-8 bg-white">
                    {sent ? (
                      <div className="flex flex-col items-center justify-center text-center min-h-[360px] gap-3">
                      <CheckCircle className="w-10 h-10 text-[#34A853]" strokeWidth={1.75} />
                      <p className="text-[17px] font-medium text-[#111]">
                        {sentViaMailto ? 'Almost done' : 'Request received'}
                      </p>
                      <p className="text-[14px] text-[#666] max-w-xs">
                        {sentViaMailto
                          ? 'Your email app should open with the request. Hit Send and we will confirm your demo time.'
                          : 'Thanks — we got your preferred time and will confirm with a calendar invite soon.'}
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setSent(false);
                          setSentViaMailto(false);
                        }}
                        className="mt-2 text-sm text-[#555] underline bg-transparent border-0 cursor-pointer"
                      >
                        Request another time
                      </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
                        <div>
                          <label className="block text-sm font-medium text-[#333] mb-1.5">Your name</label>
                          <input
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={field}
                            placeholder="Alex"
                            autoComplete="name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#333] mb-1.5">Work email</label>
                          <input
                            required
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={field}
                            placeholder="alex@company.com"
                            autoComplete="email"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#333] mb-1.5">Preferred day</label>
                          <select
                            required
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className={field}
                          >
                            {dates.map((d) => (
                              <option key={d.value} value={d.value}>
                                {d.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#333] mb-2">Preferred time</label>
                          <div className="flex flex-wrap gap-2">
                            {TIME_SLOTS.map((slot) => (
                              <button
                                key={slot}
                                type="button"
                                onClick={() => setTime(slot)}
                                className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
                                  time === slot
                                    ? 'bg-[#111] text-white border-[#111]'
                                    : 'bg-white text-[#444] border-[#ddd] hover:border-[#aaa]'
                                }`}
                              >
                                {slot}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#333] mb-1.5">
                            Anything we should know?{' '}
                            <span className="text-[#999] font-normal">(optional)</span>
                          </label>
                          <textarea
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            rows={3}
                            className={`${field} resize-none`}
                            placeholder="What you’re building, devices you use…"
                          />
                        </div>
                        {error ? (
                          <p className="text-sm text-[#c5221f]" role="alert">
                            {error}
                          </p>
                        ) : null}
                        <button
                          type="submit"
                          disabled={!time || submitting}
                          className="w-full py-2.5 rounded-full bg-[#111] text-white text-sm font-medium border-0 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#333]"
                        >
                          {submitting ? 'Sending…' : 'Request this time'}
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            )}

            <p className="text-center text-[13px] text-[#999] mt-6">
              Prefer writing first? Use the{' '}
              <a href="/contact" className="text-[#555] hover:underline">
                contact form
              </a>
              .
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
