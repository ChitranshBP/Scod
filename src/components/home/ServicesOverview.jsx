import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiActivity, FiLayers, FiUser, FiArrowRight, FiCheck } = FiIcons;

const ServicesOverview = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: FiActivity,
      title: 'Bariatric Surgery',
      subtitle: 'Surgical Weight Loss Solutions',
      description: 'Advanced surgical procedures including gastric bypass and sleeve gastrectomy for effective, long-term weight loss with minimally invasive techniques.',
      procedures: ['Gastric Bypass', 'Sleeve Gastrectomy', 'Adjustable Gastric Band'],
      benefits: [
        'Significant long-term weight loss',
        'Improved metabolic health',
        'Enhanced quality of life',
        'Reduced obesity conditions'
      ],
      image: 'https://brandingpioneers.co.in/scod/b461ecb8-4def-4ef8-a9d6-45e3326bc646.png',
      link: '/services/bariatric-surgery',
      stats: { value: '95%', label: 'Success Rate' }
    },
    {
      icon: FiLayers,
      title: 'Laparoscopic Surgery',
      subtitle: 'Minimally Invasive Procedures',
      description: 'State-of-the-art keyhole surgery for gallstones, hernias, and other abdominal conditions, ensuring faster recovery and minimal scarring.',
      procedures: ['Gallbladder Removal', 'Hernia Repair', 'Appendectomy'],
      benefits: [
        'Minimal post-op pain',
        'Tiny incisions',
        'Fast recovery time',
        'Same-day discharge (often)'
      ],
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
      link: '/services/laparoscopic-surgery',
      stats: { value: '100%', label: 'Precision Tech' }
    },
    {
      icon: FiUser,
      title: 'Body Contouring',
      subtitle: 'Post-Weight Loss Reconstruction',
      description: 'Specialized plastic surgery procedures to remove excess skin and contour the body after significant weight loss.',
      procedures: ['Tummy Tuck', 'Body Lift', 'Arm/Thigh Lift'],
      benefits: [
        'Restored body shape',
        'Improved clothing fit',
        'Removal of excess skin',
        'Enhanced confidence'
      ],
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80',
      link: '/services/body-contouring',
      stats: { value: 'Top', label: 'Aesthetic Results' }
    }
  ];

  const currentService = services[activeService];

  return (
    <section className="py-10 font-sans bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 lg:mb-10 text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="h-px w-10 bg-scod"></div>
              <span className="uppercase tracking-widest text-sm font-bold text-scod">
                Our Expertise
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Specialized Medical Care
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              Advanced surgical treatments for obesity, metabolic disorders, and general abdominal conditions.
            </p>
          </motion.div>
        </div>

        {/* Service Tabs - Mobile Optimized */}
        <div className="mb-8 sticky top-20 z-30 lg:static lg:z-auto">
          <div className="bg-white border border-gray-200 rounded-xl p-2 shadow-lg shadow-gray-100/50 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            <div className="flex space-x-2 min-w-max lg:min-w-0 lg:grid lg:grid-cols-3">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`
                    flex-shrink-0 flex items-center justify-center space-x-2 px-6 py-4 rounded-lg font-semibold text-sm transition-all duration-300
                    ${activeService === index 
                      ? 'bg-scod text-white shadow-md transform scale-105' 
                      : 'bg-transparent text-gray-600 hover:bg-gray-50'}
                  `}
                >
                  <SafeIcon icon={service.icon} className={`w-5 h-5 ${activeService === index ? 'text-white' : 'text-scod'}`} />
                  <span className="whitespace-nowrap">{service.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Service Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-xl"
          >
            <div className="flex flex-col lg:flex-row items-stretch">
              {/* Image Section */}
              <div className="lg:w-2/5 relative min-h-[300px] lg:min-h-[500px]">
                <img src={currentService.image} alt={currentService.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10"></div>
                
                {/* Stats Badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-lg border border-white/20">
                  <div className="text-2xl font-bold text-scod">{currentService.stats.value}</div>
                  <div className="text-xs text-gray-600 font-bold uppercase tracking-wide">{currentService.stats.label}</div>
                </div>

                {/* Service Icon Badge */}
                <div className="absolute top-6 left-6 bg-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg">
                  <SafeIcon icon={currentService.icon} className="w-6 h-6 text-scod" />
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-3/5 p-6 md:p-10 lg:p-12">
                <div className="mb-3">
                  <span className="text-sm font-bold text-scod uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
                    {currentService.subtitle}
                  </span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {currentService.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                  {currentService.description}
                </p>

                {/* Two Column Layout */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Procedures */}
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide flex items-center">
                      <span className="w-1.5 h-1.5 bg-scod rounded-full mr-2"></span> Key Procedures
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentService.procedures.map((procedure, idx) => (
                        <div key={idx} className="px-3 py-1.5 bg-gray-50 text-gray-700 text-sm rounded-lg font-medium border border-gray-100">
                          {procedure}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide flex items-center">
                      <span className="w-1.5 h-1.5 bg-scod rounded-full mr-2"></span> Key Benefits
                    </h4>
                    <div className="space-y-2">
                      {currentService.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start space-x-3 text-gray-700 text-sm">
                          <SafeIcon icon={FiCheck} className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100">
                  <Link to={currentService.link} className="inline-flex items-center justify-center space-x-2 bg-scod text-white px-8 py-4 rounded-xl text-base font-bold hover:bg-scod/90 transition-all duration-300 shadow-lg shadow-blue-900/10">
                    <span>Schedule Consultation</span>
                    <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-1" />
                  </Link>
                  <Link to={currentService.link} className="inline-flex items-center justify-center space-x-2 bg-white text-gray-700 px-8 py-4 rounded-xl text-base font-bold border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300">
                    <span>Learn More</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServicesOverview;