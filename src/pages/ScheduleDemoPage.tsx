import { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getCalLink } from '../lib/demoRequest';

/**
 * Book-a-demo page modeled on Spike API:
 * https://www.spikeapi.com/book-a-demo
 * — headline, one sentence, then the booking widget.
 */
export default function ScheduleDemoPage() {
  const calLink = getCalLink();

  useEffect(() => {
    document.title = 'Book a Demo | TechnoHealth';
    return () => {
      document.title = 'TechnoHealth - Wearable Data. Clinical Grade. At Scale.';
    };
  }, []);

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: 'demo' });
      cal('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view',
        theme: 'light',
      });
    })();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero — Spike-style: centered title + one line */}
        <section className="pt-28 md:pt-32 pb-8 md:pb-10 px-4">
          <div className="max-w-[720px] mx-auto text-center">
            <h1 className="text-[32px] sm:text-[40px] md:text-[44px] font-semibold tracking-tight text-[#1a1a1a] leading-[1.15] mb-5">
              Schedule a personalized demo with our team
            </h1>
            <p className="text-[16px] sm:text-[18px] leading-relaxed text-[#5c5c5c] max-w-[560px] mx-auto">
              TechnoHealth enables health apps to integrate wearables and health platforms
              without having to build an expensive backend.
            </p>
          </div>
        </section>

        {/* Booking widget — full width, no card chrome */}
        <section className="pb-16 md:pb-24 px-4">
          <div className="max-w-[1000px] mx-auto">
            {calLink ? (
              <div className="w-full min-h-[680px] rounded-2xl overflow-hidden border border-[#e8e8e8] bg-white">
                <Cal
                  namespace="demo"
                  calLink={calLink}
                  style={{ width: '100%', height: '100%', minHeight: '680px', overflow: 'scroll' }}
                  config={{
                    layout: 'month_view',
                    theme: 'light',
                  }}
                />
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-[#5c5c5c] mb-6">Booking calendar is being set up.</p>
                <a
                  href="mailto:melika@technohealth.ai?subject=Book%20a%20demo"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#1A73E8] text-white text-sm font-medium no-underline hover:bg-[#1765CC]"
                >
                  Email us to book a demo
                </a>
              </div>
            )}

            <p className="text-center text-sm text-[#8a8a8a] mt-8">
              Prefer email?{' '}
              <a
                href="mailto:melika@technohealth.ai"
                className="text-[#1A73E8] no-underline hover:underline"
              >
                melika@technohealth.ai
              </a>
              {' · '}
              <a
                href={`https://cal.com/${calLink}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1A73E8] no-underline hover:underline"
              >
                Open calendar in a new tab
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
