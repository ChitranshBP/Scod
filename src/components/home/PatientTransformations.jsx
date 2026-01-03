import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiChevronLeft, FiChevronRight, FiStar } = FiIcons;

const transformData = [
  {
    id: 1,
    quote: "Losing 45kg was just the beginning. The real victory was reversing my Type 2 Diabetes and regaining the energy to run with my grandchildren. Dr. Arush and his team didn't just perform a surgery; they gave me a second life.",
    author: "Atul Kumar Singh",
    role: "Bariatric Success Story",
    rating: 5,
    beforeImage: "https://brandingpioneers.co.in/scod/patient3-scod.webp",
    afterImage: "https://brandingpioneers.co.in/scod/patient2-scod.webp"
  },
  {
    id: 2,
    quote: "I was hesitant about surgery, but the counseling at SCOD changed my perspective. Today, I am 38kg lighter and my hypertension is a thing of the past. The holistic approach—from nutrition to mental support—is what makes them the best.",
    author: "Savita Ranga",
    role: "Metabolic Transformation",
    rating: 5,
    beforeImage: "https://brandingpioneers.co.in/scod/patient4-scod.webp",
    afterImage: "https://brandingpioneers.co.in/scod/patient5-scod.webp"
  },
  {
    id: 3,
    quote: "The personalized care I received was unmatched. Every question was answered, and every fear was addressed. 18 months post-surgery, I have maintained my weight loss and feel stronger than I did in my 20s. Truly life-changing.",
    author: "Anuj Gupta",
    role: "Gastric Bypass Patient",
    rating: 5,
    beforeImage: "https://brandingpioneers.co.in/scod/patient1-scod.webp",
    afterImage: "https://brandingpioneers.co.in/scod/patient3-scod.webp"
  }
];

const PatientTransformations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % transformData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + transformData.length) % transformData.length);
  };

  const currentData = transformData[currentIndex];

  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Standardized Eyebrow Header */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="h-px w-10 bg-scod"></div>
                <span className="uppercase tracking-widest text-sm font-bold text-scod">Real Results</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Trusted by Thousands of <br />
                <span className="text-scod">Transformed Patients</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From first-time consultations to full lifestyle transformations, our patients share their inspiring stories of reclaiming their health.
              </p>

              {/* Testimonial Quote */}
              <div className="min-h-[160px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-xl md:text-2xl font-medium text-gray-900 mb-6 leading-relaxed">
                      "{currentData.quote}"
                    </p>
                    <div>
                      <h4 className="font-bold text-gray-900">{currentData.author}</h4>
                      <p className="text-gray-500">{currentData.role}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Buttons */}
              <div className="flex space-x-4 mt-8">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-all text-gray-600 shadow-sm"
                >
                  <SafeIcon icon={FiChevronLeft} className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-all text-gray-600 shadow-sm"
                >
                  <SafeIcon icon={FiChevronRight} className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Before/After Images */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 gap-6"
              >
                {/* Before Image */}
                <div className="relative rounded-[2rem] overflow-hidden h-64 md:h-72 shadow-xl group">
                  <img
                    src={currentData.beforeImage}
                    alt="Before transformation"
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                {/* After Image */}
                <div className="relative rounded-[2rem] overflow-hidden h-64 md:h-72 shadow-xl group">
                  <img
                    src={currentData.afterImage}
                    alt="After transformation"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Decorative Element */}
            <div className="absolute -z-10 -right-12 top-1/2 transform -translate-y-1/2 w-64 h-64 bg-scod/10 rounded-full blur-3xl opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientTransformations;