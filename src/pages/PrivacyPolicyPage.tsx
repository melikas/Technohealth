import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

/**
 * Placeholder Privacy Policy page — full Law 25 / PIPEDA policy to be completed
 * with the data table and officer details. Linked from Terms and Footer.
 */
export default function PrivacyPolicyPage() {
  const { language, setLanguage } = useLanguage();
  const isFr = language === 'fr';

  useEffect(() => {
    document.title = isFr
      ? 'Politique de confidentialité | TechnoHealth'
      : 'Privacy Policy | TechnoHealth';
    return () => {
      document.title = 'TechnoHealth. Wearable health data infrastructure';
    };
  }, [isFr]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-surface)' }}>
      <Header />
      <main className="pt-24 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <button
              type="button"
              onClick={() => setLanguage('fr')}
              className="px-3 py-1.5 text-xs font-semibold rounded-full border cursor-pointer"
              style={{
                borderColor: isFr ? 'var(--color-brand-blue)' : 'var(--color-border)',
                backgroundColor: isFr ? 'var(--color-surface-info)' : 'transparent',
                color: isFr ? 'var(--color-brand-blue)' : 'var(--color-text-secondary)',
              }}
            >
              Français
            </button>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className="px-3 py-1.5 text-xs font-semibold rounded-full border cursor-pointer"
              style={{
                borderColor: !isFr ? 'var(--color-brand-blue)' : 'var(--color-border)',
                backgroundColor: !isFr ? 'var(--color-surface-info)' : 'transparent',
                color: !isFr ? 'var(--color-brand-blue)' : 'var(--color-text-secondary)',
              }}
            >
              English
            </button>
          </div>

          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2" style={{ color: 'var(--color-text)' }}>
            {isFr ? 'Politique de confidentialité' : 'Privacy Policy'}
          </h1>
          <p className="text-base mb-6" style={{ color: 'var(--color-text-secondary)' }}>
            {isFr ? 'TechnoHealth — Privacy Policy' : 'Politique de confidentialité de TechnoHealth'}
          </p>
          <p className="text-[15px] leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
            {isFr
              ? 'Cette page accueillera la politique complète exigée au Québec (Loi 25) et au Canada (PIPEDA) : données collectées, finalités, tiers, protections, témoins, droits des personnes et coordonnées du responsable de la protection des renseignements personnels.'
              : 'This page will host the full privacy policy required in Québec (Law 25) and Canada (PIPEDA): data collected, purposes, third parties, protections, cookies, individual rights, and contact details for the person responsible for personal information.'}
          </p>
          <p className="text-[15px] leading-relaxed mb-8" style={{ color: 'var(--color-text-secondary)' }}>
            {isFr
              ? 'Pour toute question dès maintenant : privacy@technohealth.ca'
              : 'For questions in the meantime: privacy@technohealth.ca'}
          </p>
          <Link to="/terms" className="text-sm font-medium no-underline hover:underline" style={{ color: 'var(--color-brand-blue)' }}>
            {isFr ? 'Voir les Conditions d’utilisation' : 'See Terms of Use'}
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
