import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import ProcessPage from './pages/ProcessPage';
import AboutPage from './pages/AboutPage';
import DemoPage from './pages/DemoPage';
import GetStartedPage from './pages/GetStartedPage';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import ServicesPage from './pages/ServicesPage';
import DocumentationPage from './pages/DocumentationPage';
import SafetySecurityPage from './pages/SafetySecurityPage';
import ContactPage from './pages/ContactPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ScheduleDemoPage from './pages/ScheduleDemoPage';
import DataSourcesPage from './pages/DataSourcesPage';
import TermsOfUsePage from './pages/TermsOfUsePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

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
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/schedule-demo" element={<ScheduleDemoPage />} />
        <Route path="/book-a-demo" element={<ScheduleDemoPage />} />
        <Route path="/data-sources" element={<DataSourcesPage />} />
        <Route path="/integrations" element={<DataSourcesPage />} />
        <Route path="/get-started" element={<GetStartedPage />} />
        <Route path="/docs" element={<DocumentationPage />} />
        <Route path="/safety-security" element={<SafetySecurityPage />} />
        <Route path="/compliance" element={<Navigate to="/safety-security" replace />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/terms" element={<TermsOfUsePage />} />
        <Route path="/terms-of-use" element={<Navigate to="/terms" replace />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/privacy-policy" element={<Navigate to="/privacy" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
