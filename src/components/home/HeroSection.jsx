import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiArrowRight, FiSearch, FiPlayCircle } = FiIcons;

const HeroSection = () => {
  const sideLinks = [
    "The Science Behind Weight Loss",
    "Start Your Journey Now",
    "Get Inspired",
    "Find Your Answers",
    "SCOD x Health Collaboration"
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden font-sans">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://brandingpioneers.co.in/scod/scod-bannner-2.webp" 
          alt="SCOD Banner" 
          className="w-full h-full object-cover object-center" 
        />
        {/* Gradient Overlay - Made lighter for better visibility (black/60 instead of black/90) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      </div>

      {/* Search Icon - Top Right (Absolute) */}


      {/* Main Content Container */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-full flex flex-col justify-center relative">
          
          {/* Left Side Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white pt-20"
          >
            {/* Headline - Forced White Text with Drop Shadow */}
            <motion.h1 
              className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight text-white drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="italic font-serif font-light block text-4xl md:text-5xl mb-2 text-blue-100">Transforming Lives</span>
              Through <span className="italic text-white">Advanced</span> Care.
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              className="text-lg md:text-xl text-gray-100 font-medium mb-10 leading-relaxed max-w-xl drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your weight management journey is personal. We provide the scientific expertise and compassionate support you need to achieve lasting results.
            </motion.p>

            {/* Buttons - Redesigned CTA */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-5 items-start w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Primary Button */}
              <Link 
                to="/contact" 
                className="group bg-scod text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-blue-700 transition-all duration-300 shadow-[0_0_20px_rgba(24,118,170,0.4)] hover:shadow-[0_0_30px_rgba(24,118,170,0.6)] min-w-[260px] text-center flex justify-center items-center border-2 border-transparent"
              >
                <span>Book Consultation</span>
                <SafeIcon icon={FiArrowRight} className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary Button */}
              <Link 
                to="/contact" 
                className="group bg-transparent backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-scod transition-all duration-300 shadow-lg min-w-[260px] text-center flex justify-center items-center border-2 border-white"
              >
                <span>Call Now</span>
                <SafeIcon icon={FiSearch} className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side Navigation Links 
          <motion.div 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col items-end gap-8 pr-4"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {sideLinks.map((link, index) => (
              <Link 
                key={index} 
                to="#" 
                className="group flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <span className="font-semibold text-sm tracking-wide drop-shadow-md group-hover:translate-x-[-5px] transition-transform duration-300">
                  {link}
                </span>
                <div className="w-8 h-[1px] bg-white/50 group-hover:bg-white group-hover:w-12 transition-all duration-300"></div>
              </Link>
            ))}
          </motion.div>
            */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;