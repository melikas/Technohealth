import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function SafetySecurityPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-surface)' }}>
      <Header />

      <section
        className="pt-28 pb-10 md:pt-32 md:pb-12 px-4"
        style={{ backgroundColor: 'var(--color-surface-alt)' }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#111] mb-3">
            Safety and Security
          </h1>
          <p className="text-[16px] text-[#666] max-w-xl mx-auto">
            What you need to know before putting wearable health data on TechnoHealth.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-12 text-[15px] leading-relaxed text-[#444]">
          <div>
            <h2 className="text-xl font-semibold text-[#111] mb-3">We are based in Montreal</h2>
            <p>
              TechnoHealth is a Quebec company. That means Quebec privacy law is our starting point, not an
              afterthought. If you sell across Canada or work with US healthcare teams, we cover those cases too.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#111] mb-3">What applies to you</h2>
            <ul className="space-y-4">
              <li>
                <p className="font-medium text-[#111]">Quebec Law 25</p>
                <p className="mt-1">
                  Required for personal information handled in Quebec. Health data counts as sensitive, so consent
                  must be clear. Moving data outside Quebec needs a privacy review and solid contracts.
                </p>
              </li>
              <li>
                <p className="font-medium text-[#111]">PIPEDA</p>
                <p className="mt-1">
                  Canada&apos;s federal privacy rules matter when data crosses provincial or national borders in a
                  commercial setting.
                </p>
              </li>
              <li>
                <p className="font-medium text-[#111]">HIPAA for US customers</p>
                <p className="mt-1">
                  HIPAA is US law. It applies when you handle US patient data for a US covered entity. We support
                  the usual controls and can sign a Business Associate Agreement when you need one.
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#111] mb-3">Where the data lives</h2>
            <p>
              You can run TechnoHealth on your own infrastructure. That keeps ownership with you, simplifies
              security reviews, and helps with Quebec rules around transfers outside the province.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#111] mb-3">How we protect it</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Encryption in transit (TLS 1.3) and at rest (AES-256)</li>
              <li>Role based access, with MFA where you need it</li>
              <li>Audit logs for sensitive actions</li>
              <li>Breach response you can include in your own policies</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#111] mb-3">Certifications</h2>
            <p>
              We do not put unfinished seals on the site. If your procurement team needs SOC 2, HITRUST, or another
              attestation, ask us for the current status and timeline.
            </p>
          </div>

          <div
            className="rounded-xl border border-[#e6e6e6] bg-[#fafafa] p-6 sm:p-8 text-center"
          >
            <h2 className="text-lg font-semibold text-[#111] mb-2">Need details for legal or security review?</h2>
            <p className="text-[#666] mb-5">
              Send us your questionnaire or BAA request. We will answer with what is in place today.
            </p>
            <Link
              to="/contact"
              className="inline-block g-btn-primary no-underline"
              style={{ color: 'var(--color-text-on-primary)' }}
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
