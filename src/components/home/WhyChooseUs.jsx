import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      id: '01',
      title: 'Super-Specialized Bariatric & Metabolic Care',
      description: 'Your treatment is led exclusively by highly trained bariatric surgeons who focus 100% on obesity, metabolic disorders, and advanced minimally invasive surgery — ensuring unmatched expertise at every step.',
    },
    {
      id: '02',
      title: 'Holistic, Multidisciplinary Approach',
      description: 'SCOD integrates surgeons, nutritionists, psychologists, and lifestyle coaches under one roof. You receive a complete care plan — surgery, diet, counselling, and follow-ups — designed for long-term success.',
    },
    {
      id: '03',
      title: 'Precision Surgery With Latest-Generation Tech',
      description: 'We use the latest HD/4K laparoscopic platforms, AI-assisted diagnostics, and advanced energy devices to deliver safer surgeries, minimal scars, and faster recovery compared to traditional methods.',
    },
    {
      id: '04',
      title: 'Personalised Treatment Plans',
      description: 'No two bodies are the same. Your procedure, nutrition protocol, and recovery pathway are customized based on your metabolism, medical history, lifestyle, and weight-loss goals for maximum effectiveness.',
    },
    {
      id: '05',
      title: 'Exceptional Outcomes & Post-Surgery Support',
      description: 'With thousands of successful transformations and long-term follow-ups, we ensure your journey continues well beyond surgery. Continuous monitoring, nutrition counselling, and lifestyle support help you sustain results.',
    },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Interactive Content */}
          <div className="lg:pr-8">
            <div className="mb-8">
              {/* Standardized Eyebrow Header */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="h-px w-10 bg-scod"></div>
                <span className="uppercase tracking-widest text-sm font-bold text-scod">Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Experience Care <br /> Like Never Before
              </h2>
            </div>

            <div className="space-y-2">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="cursor-pointer group"
                  onClick={() => setActiveIndex(index)}
                >
                  {/* Header Line */}
                  <div className={`flex items-center py-5 border-b transition-colors duration-300 ${activeIndex === index ? 'border-scod' : 'border-gray-200'}`}>
                    <span className={`text-xl font-medium mr-8 transition-colors duration-300 ${activeIndex === index ? 'text-scod' : 'text-gray-400'}`}>
                      {feature.id}
                    </span>
                    <h3 className={`text-xl font-semibold transition-colors duration-300 ${activeIndex === index ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-700'}`}>
                      {feature.title}
                    </h3>
                  </div>
                  
                  {/* Expanded Content */}
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 pb-6 text-gray-600 leading-relaxed pl-[3.5rem] text-lg">
                          {feature.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image Grid */}
          <div className="grid grid-cols-2 gap-6 h-full">
            {/* Top Large Image - Clinic Interior */}
            <div className="col-span-2 h-80 rounded-[2rem] overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80" 
                alt="Modern Clinic Interior" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
              />
            </div>
            {/* Bottom Left Image - Medical Model/Equipment */}
            <div className="h-64 rounded-[2rem] overflow-hidden shadow-lg">
              <img 
                src="https://brandingpioneers.co.in/scod/Technology & Equipment.png" 
                alt="Advanced Medical Equipment" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
              />
            </div>
            {/* Bottom Right Image - Doctor/Patient */}
            <div className="h-64 rounded-[2rem] overflow-hidden shadow-lg">
              <img 
                src="https://brandingpioneers.co.in/scod/Why-choose-us-scod.webp" 
                alt="Compassionate Patient Care" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;