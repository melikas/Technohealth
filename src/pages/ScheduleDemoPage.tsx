import { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';
import { Clock, Video } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getCalLink } from '../lib/demoRequest';

/**
 * Layout mirrors Spike’s book-a-demo page structure
 * (centered title + short line + booking panel),
 * with original TechnoHealth copy — not Spike’s wording.
 * https://www.spikeapi.com/book-a-demo
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
        hideEventTypeDetails: true,
        layout: 'month_view',
        theme: 'light',
      });
    })();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#222]">
      <Header />

      <main className="flex-1 w-full">
        {/* Spike-style centered intro */}
        <section className="pt-[120px] md:pt-[140px] pb-10 md:pb-12 px-5">
          <div className="mx-auto max-w-[680px] text-center">
            <h1 className="font-semibold text-[28px] sm:text-[36px] md:text-[42px] leading-[1.2] tracking-[-0.02em] text-[#111] mb-4">
              Book a live product demo with Support Team
            </h1>
            <p className="text-[15px] sm:text-[17px] leading-[1.6] text-[#666] max-w-[520px] mx-auto">
              See how TechnoHealth connects wearables and health data sources into one API
              so your team can ship faster — without owning the integration stack.
            </p>
          </div>
        </section>

        {/* HubSpot/Spike-style meeting panel: details | calendar */}
        <section className="px-4 sm:px-6 pb-20 md:pb-28">
          <div className="mx-auto max-w-[920px]">
            <div className="bg-white border border-[#e6e6e6] rounded-[12px] shadow-[0_2px_12px_rgba(0,0,0,0.06)] overflow-hidden">
              <div className="grid md:grid-cols-[320px_1fr] min-h-[620px]">
                {/* Left — meeting meta (Spike/HubSpot pattern) */}
                <aside className="border-b md:border-b-0 md:border-r border-[#e6e6e6] p-7 md:p-8 bg-[#fafafa]">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#e8f0fe] flex items-center justify-center overflow-hidden shrink-0">
                      <img
                        src="/Images/Icon.png"
                        alt=""
                        className="w-7 h-7 object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.08em] text-[#888] font-medium">
                        TechnoHealth
                      </p>
                      <p className="text-[16px] font-semibold text-[#111] leading-tight">
                        SUPPORT TEAM
                      </p>
                    </div>
                  </div>

                  <h2 className="text-[20px] font-semibold text-[#111] mb-4 leading-snug">
                    30-minute product demo
                  </h2>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2.5 text-[14px] text-[#555]">
                      <Clock className="w-4 h-4 text-[#888] shrink-0" strokeWidth={1.75} />
                      30 min
                    </li>
                    <li className="flex items-center gap-2.5 text-[14px] text-[#555]">
                      <Video className="w-4 h-4 text-[#888] shrink-0" strokeWidth={1.75} />
                      Web conference details provided upon confirmation
                    </li>
                  </ul>

                  <p className="text-[14px] leading-relaxed text-[#666]">
                    A focused walkthrough of wearable integrations, data pipelines, and how
                    TechnoHealth fits your clinical or product workflow.
                  </p>
                </aside>

                {/* Right — calendar */}
                <div className="bg-white min-h-[520px] md:min-h-[620px]">
                  {calLink ? (
                    <Cal
                      namespace="demo"
                      calLink={calLink}
                      style={{
                        width: '100%',
                        height: '100%',
                        minHeight: '620px',
                        overflow: 'scroll',
                      }}
                      config={{
                        layout: 'month_view',
                        theme: 'light',
                      }}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full min-h-[420px] p-8 text-center">
                      <p className="text-[#666] mb-5 text-[15px]">
                        Calendar is almost ready. Reach Support Team to pick a time.
                      </p>
                      <a
                        href="mailto:hello@technohealth.ai?subject=Book%20a%20demo"
                        className="inline-flex px-5 py-2.5 rounded-full bg-[#111] text-white text-sm font-medium no-underline hover:bg-[#333]"
                      >
                        Email SUPPORT TEAM
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <p className="text-center text-[13px] text-[#999] mt-6">
              Questions?{' '}
              <a
                href="mailto:hello@technohealth.ai"
                className="text-[#444] underline-offset-2 hover:underline"
              >
                hello@technohealth.ai
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
