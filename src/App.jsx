import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AboutClinicPage from './pages/AboutClinicPage';
import DrShivaniPage from './pages/DrShivaniPage';
import ServicesPage from './pages/ServicesPage';
import BariatricSurgery from './pages/services/BariatricSurgery';
import MetabolicSurgery from './pages/services/MetabolicSurgery';
import LaparoscopicSurgery from './pages/services/LaparoscopicSurgery';
import BodyContouring from './pages/services/BodyContouring';
import ObesityManagement from './pages/services/ObesityManagement';
import NutritionCare from './pages/services/NutritionCare';
import WeightLossInjectables from './pages/services/WeightLossInjectables';
import RisksCosts from './pages/RisksCosts';
import SurgeryOverview from './pages/SurgeryOverview';
import PatientResources from './pages/PatientResources';
import PatientJourney from './pages/PatientJourney';
import InternationalPatients from './pages/InternationalPatients';
import InternationalBariatric from './pages/InternationalBariatric';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import ThankYouPage from './pages/ThankYouPage';
import FeelGreatSystem from './pages/FeelGreatSystem';
import PrivacyPolicy from './pages/PrivacyPolicy';
import './App.css';

// Component to scroll to top on route change
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
      <div className="min-h-screen bg-white text-gray-900">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about-clinic" element={<AboutClinicPage />} />
            <Route path="/dr-shivani-sabharwal" element={<DrShivaniPage />} />
            <Route path="/services" element={<SurgeryOverview />} />
            <Route path="/services/surgery-overview" element={<SurgeryOverview />} />
            <Route path="/services/bariatric-surgery" element={<BariatricSurgery />} />
            <Route path="/services/metabolic-surgery" element={<MetabolicSurgery />} />
            <Route path="/services/laparoscopic-surgery" element={<LaparoscopicSurgery />} />
            <Route path="/services/body-contouring" element={<BodyContouring />} />
            <Route path="/services/obesity-management" element={<ObesityManagement />} />
            <Route path="/services/weight-regain" element={<NutritionCare />} />
            <Route path="/services/weight-loss-injectables" element={<WeightLossInjectables />} />
            <Route path="/services/risks-costs" element={<RisksCosts />} />
            {/* <Route path="/media-page" element={<ServicesPage />} /> */}
            <Route path="/medical-management" element={<MetabolicSurgery />} />
            <Route path="/resources" element={<PatientResources />} />
            <Route path="/feel-great-system" element={<FeelGreatSystem />} />
            <Route path="/patient-journey" element={<PatientJourney />} />
            <Route path="/international-patients" element={<InternationalPatients />} />
            <Route path="/international-bariatric" element={<InternationalBariatric />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;