import Header from '../components/Header';
import Hero from '../components/Hero';
import IntegrationShowcase from '../components/IntegrationShowcase';
import BenefitsPillars from '../components/BenefitsPillars';
import UseCaseShowcase from '../components/UseCaseShowcase';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <IntegrationShowcase />
      <BenefitsPillars />
      <UseCaseShowcase />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
