import Header from '../components/Header';
import Hero from '../components/Hero';
import BenefitsPillars from '../components/BenefitsPillars';
import UseCaseShowcase from '../components/UseCaseShowcase';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-surface)' }}>
      <Header />
      <Hero />
      <BenefitsPillars />
      <UseCaseShowcase />
      <Footer />
    </div>
  );
}
