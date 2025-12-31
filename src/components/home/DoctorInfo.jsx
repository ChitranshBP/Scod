import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiCheckCircle, FiArrowRight, FiAward } = FiIcons;

const DoctorInfo = () => {
  return (
    <section className="py-10 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image Section (Span 5) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative pr-4 pb-4">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-10">
                <img 
                  src="https://brandingpioneers.co.in/scod/dr-arush-final-image.png" 
                  alt="Dr. Arush Sabharwal" 
                  className="w-full h-[500px] object-cover object-top" 
                />
                {/* Gradient Overlay with Name */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-scod/90 via-scod/70 to-transparent pt-20 pb-6 px-6 text-white">
                  <h3 className="text-2xl font-bold">Dr. Arush Sabharwal</h3>
                  <p className="text-blue-100 font-medium">Chairman & Chief Surgeon</p>
                </div>
              </div>
              {/* Decorative Border Box behind */}
              <div className="absolute bottom-0 right-0 w-full h-full border-2 border-scod/20 rounded-2xl -z-10 translate-x-4 translate-y-4"></div>
              {/* Experience Badge */}
            </div>
          </motion.div>

          {/* Content Section (Span 7) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 lg:pl-10"
          >
            {/* Standardized Eyebrow Header */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="h-px w-10 bg-scod"></div>
              <span className="uppercase tracking-widest text-sm font-bold text-scod">Meet The Surgeon</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Your Health in <br />
              <span className="text-scod">Expert Hands</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Dr. Arush Sabharwal is a globally recognized pioneer in Minimal Access, Metabolic, and Bariatric Surgery. With a patient-centric approach and mastery of advanced surgical techniques, he has dedicated his career to transforming lives through sustainable weight loss and diabetes management solutions.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              As the founder of SCOD, he leads a multidisciplinary team that combines surgical excellence with compassionate care, ensuring every patient receives a personalized path to long-term wellness.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-8">
              {[
                "Designated Center of Excellence Surgeon",
                "Fellow of American College of Surgeons (FACS)",
                "Over 5,000 Successful Procedures",
                "Pioneer in Single-Incision Surgery"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <Link 
                to="/about"
                className="inline-flex items-center space-x-3 bg-scod text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-scod/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <span>View Full Profile</span>
                <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DoctorInfo;