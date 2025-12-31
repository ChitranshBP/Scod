import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import HeroSection from '../components/home/HeroSection';
import ServicesOverview from '../components/home/ServicesOverview';
import AboutPreview from '../components/home/AboutPreview';
import DoctorInfo from '../components/home/DoctorInfo';
import Testimonials from '../components/home/Testimonials';
import StatsSection from '../components/home/StatsSection';
import CTASection from '../components/home/CTASection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import MoreStories from '../components/home/MoreStories';
import PatientTransformations from '../components/home/PatientTransformations';
import AwardsSection from '../components/home/AwardsSection';
import MedicalAwareness from '../components/home/MedicalAwareness';

const { FiAward, FiUsers, FiHeart, FiTrendingUp } = FiIcons;

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <HeroSection />
    <AboutPreview />

      <ServicesOverview />
  
      {/* Doctor Info Section */}
      <DoctorInfo />
      {/* Why Choose Us Section */}
      <WhyChooseUs />
<Testimonials />
      {/* New Patient Transformations Section */}
      <PatientTransformations />
      
      <MoreStories />
      <AwardsSection />
            {/* Medical Awareness Section - Dark Theme Break */}
      <MedicalAwareness />
    </motion.div>
  );
};

export default HomePage;