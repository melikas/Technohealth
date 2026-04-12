import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import ProcessPage from './pages/ProcessPage';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';
import DemoPage from './pages/DemoPage';
import GetStartedPage from './pages/GetStartedPage';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import ServicesPage from './pages/ServicesPage';
import DocumentationPage from './pages/DocumentationPage';
import CompliancePage from './pages/CompliancePage';
import ContactPage from './pages/ContactPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ScheduleDemoPage from './pages/ScheduleDemoPage';
import DataSourcesPage from './pages/DataSourcesPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/implementation" element={<ProcessPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/schedule-demo" element={<ScheduleDemoPage />} />
        <Route path="/data-sources" element={<DataSourcesPage />} />
        <Route path="/get-started" element={<GetStartedPage />} />
        <Route path="/docs" element={<DocumentationPage />} />
        <Route path="/compliance" element={<CompliancePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
