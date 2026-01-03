import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheckCircle, FiPhone, FiMail, FiHome, FiClock, FiCalendar } = FiIcons;

const ThankYouPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const nextSteps = [
    {
      icon: FiPhone,
      title: "We'll Call You",
      description: "Our team will reach out to you within 24 hours to discuss your consultation.",
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      icon: FiCalendar,
      title: "Schedule Appointment",
      description: "We'll help you book a convenient time for your in-person or virtual consultation.",
      color: "bg-purple-50 text-purple-600"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 font-sans bg-gradient-to-br from-blue-50 via-white to-emerald-50"
    >
      {/* Success Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-emerald-100 rounded-full mb-6">
              <SafeIcon icon={FiCheckCircle} className="w-14 h-14 text-emerald-600" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Thank You for Reaching Out!
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Your message has been successfully received. We're excited to help you on your health journey.
            </p>
          </motion.div>

 

          {/* Next Steps */}
          <div className="text-left mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              What Happens Next?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {nextSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${step.color}`}>
                    <SafeIcon icon={step.icon} className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="bg-gradient-to-r from-scod to-blue-700 text-white p-8 rounded-2xl shadow-xl mb-8"
          >
            <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
            <p className="text-blue-100 mb-6">Our team is available to answer your questions</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+918130130489"
                className="inline-flex items-center bg-white text-scod px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" />
                Call: +91 8130130489
              </a>
              <a
                href="mailto:info@scodclinic.com"
                className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
              >
                <SafeIcon icon={FiMail} className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/"
              className="inline-flex items-center justify-center bg-scod text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <SafeIcon icon={FiHome} className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center bg-white text-scod border-2 border-scod px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg"
            >
              Explore Our Treatments
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <SafeIcon icon={FiClock} className="w-8 h-8 text-scod mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Response Time</h3>
            <p className="text-gray-600">
              Our team typically responds within 24 hours during business days (Mon-Sat, 9 AM - 6 PM).
              For urgent matters, please call us directly.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ThankYouPage;
