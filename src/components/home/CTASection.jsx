import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiPhone, FiCalendar, FiArrowRight } = FiIcons;

const CTASection = () => {
  return (
    <section className="py-12 bg-scod">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform <span className="block text-blue-200 mt-2">Your Life?</span>
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
            Take the first step towards a healthier, happier you. Our expert team is here to guide you through every step of your weight loss journey with personalized care and proven results.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Link
              to="/contact"
              className="bg-white text-scod px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg flex items-center space-x-3"
            >
              <SafeIcon icon={FiCalendar} className="w-5 h-5" />
              <span>Schedule Free Consultation</span>
              <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
            </Link>
            <a
              href="tel:+1-555-SCOD-MED"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-scod transition-all duration-300 flex items-center space-x-3"
            >
              <SafeIcon icon={FiPhone} className="w-5 h-5" />
              <span>Call (555) SCOD-MED</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;