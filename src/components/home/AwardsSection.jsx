import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiArrowRight, FiX } = FiIcons;

const AwardsSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const awards = [
    { title: "", organization: "", image: "https://brandingpioneers.co.in/scod/dalailamahonor.jpg" },
    { title: "", organization: "", image: "https://brandingpioneers.co.in/scod/award1.jpg" },
    { title: "", organization: "", image: "https://brandingpioneers.co.in/scod/2016.jpg" },
    { title: "", organization: "", image: "https://brandingpioneers.co.in/scod/2015.jpg" }
  ];

  return (
    <section className="py-12 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Aligned items-start on mobile, items-end on desktop */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-left flex flex-col items-start max-w-2xl"
          >
            {/* Standardized Eyebrow Header */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="h-px w-10 bg-scod"></div>
              <span className="uppercase tracking-widest text-sm font-bold text-scod">
                Excellence
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Accreditations & <span className="text-scod">Awards</span>
            </h2>
            <p className="text-gray-600">
              We are proud to be recognized by leading national organizations for our commitment to safety, quality, and patient outcomes.
            </p>
          </motion.div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-shrink-0 mb-2 md:mb-0"
          >
            <Link to="/about" className="group flex items-center gap-2 text-scod font-bold text-lg hover:gap-3 transition-all">
              <span>View All Awards</span>
              <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        {/* Awards/Certificates - Slider on Mobile, Grid on Desktop */}
        <div className="
          flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 -mx-4 px-4
          md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:pb-0 md:mx-0 md:px-0
          [&::-webkit-scrollbar]:hidden
        ">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="
                flex-shrink-0 w-[85%] md:w-auto snap-center
                flex flex-col items-center text-center group cursor-pointer
              "
              onClick={() => setSelectedImage(award.image)}
            >
              {/* Image Container */}
              <div className={`
                w-full h-64 flex items-center justify-center p-6 mb-4 rounded-2xl
                group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300
                border border-gray-100 group-hover:border-scod/20
                ${index % 2 === 0 ? 'bg-white' : 'bg-white'}
              `}>
                <img
                  src={award.image}
                  alt={award.title}
                  className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Text Content */}
              {award.title && (
                <h3 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-scod transition-colors">
                  {award.title}
                </h3>
              )}
              {award.organization && (
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  {award.organization}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-6xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-white hover:text-black transition-all duration-300"
              >
                <SafeIcon icon={FiX} className="w-6 h-6" />
              </button>
              <motion.img
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                src={selectedImage}
                alt="Award Certificate"
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AwardsSection;