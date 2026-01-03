import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiGlobe, FiMapPin, FiCheck, FiPhone, FiCalendar, FiHome, FiActivity, FiPlane, FiFileText, FiMessageCircle, FiShield, FiSun, FiChevronLeft, FiChevronRight, FiCamera, FiPlay, FiX, FiDollarSign, FiAward, FiHeart } = FiIcons;

const InternationalBariatric = () => {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsPerView(3);
      else if (window.innerWidth >= 768) setItemsPerView(2);
      else setItemsPerView(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const whyIndia = [
    {
      icon: FiDollarSign,
      title: "Cost Effective",
      desc: "Save up to 60-80% compared to US/UK prices without compromising quality."
    },
    {
      icon: FiAward,
      title: "Global Expertise",
      desc: "Dr. Arush Sabharwal holds international fellowships (USA, France, Australia)."
    },
    {
      icon: FiActivity,
      title: "Advanced Tech",
      desc: "FDA-approved staplers, 4K imaging, and advanced energy devices."
    },
    {
      icon: FiSun,
      title: "Zero Waiting",
      desc: "Priority scheduling. Surgery often performed within 48 hours of arrival."
    }
  ];

  const eastAfricaFocus = [
    "Regular OPDs in Dar es Salaam, Tanzania",
    "Dedicated Swahili-speaking coordinators",
    "Referral network in Kenya & Uganda",
    "Assistance with Medical Visa Letters",
    "Direct flights to New Delhi"
  ];

  const packages = [
    { label: "Airport Transfer", detail: "VIP Pick & Drop included" },
    { label: "Hospital Stay", detail: "3 Days Private Deluxe Room" },
    { label: "Pre-Op Tests", detail: "Cardiac & Metabolic Profile" },
    { label: "Surgery", detail: "Laparoscopic Sleeve / Bypass" },
    { label: "Medication", detail: "Discharge Kit & Supplements" },
    { label: "Guest Stay", detail: "Partner Hotel Assistance" }
  ];

  const processSteps = [
    { step: "01", title: "Remote Consult", desc: "Video call with Dr. Arush.", icon: FiMessageCircle },
    { step: "02", title: "Travel Plan", desc: "Visa letter & flight booking.", icon: FiPlane },
    { step: "03", title: "Surgery", desc: "Admission & procedure.", icon: FiActivity },
    { step: "04", title: "Recovery", desc: "Hotel stay with nursing.", icon: FiHome },
    { step: "05", title: "Follow-up", desc: "Telemedicine back home.", icon: FiGlobe }
  ];

  const galleryImages = [
    { id: 1, src: "/assets/scod/africa/african-weightloss.png", caption: "Patient from Tanzania", desc: "Successful Transformation" },
    { id: 2, src: "/assets/scod/africa/tanzanean-weightloss.png", caption: "Tanzanian Success Story", desc: "Bariatric Journey" },
    { id: 3, src: "/assets/scod/africa/african-weightloss-3.png", caption: "Patient from Kenya", desc: "Health Transformation" },
    { id: 4, src: "/assets/scod/africa/african-realistic-1.png", caption: "International Patient", desc: "Realistic Progress" },
    { id: 5, src: "/assets/scod/africa/african-realistic-2.png", caption: "Amina from Nairobi", desc: "Happy & Healthy" },
    { id: 6, src: "/assets/scod/africa/tanzanean-realistic-3.png", caption: "John from Dar es Salaam", desc: "Life Changing Results" }
  ];

  const awarenessVideos = [
    { title: "Why Choose India?", videoId: "rEd-4Pov_iw", thumbnail: "https://img.youtube.com/vi/rEd-4Pov_iw/hqdefault.jpg" },
    { title: "Safety First", videoId: "wBhZyyHeWtI", thumbnail: "https://img.youtube.com/vi/wBhZyyHeWtI/hqdefault.jpg" },
    { title: "Patient Journey", videoId: "vs2gB7Zyuks", thumbnail: "https://img.youtube.com/vi/vs2gB7Zyuks/hqdefault.jpg" }
  ];

  const handleNext = (index, setIndex, total) => {
    if (index < total - itemsPerView) setIndex(prev => prev + 1);
    else setIndex(0);
  };

  const handlePrev = (index, setIndex, total) => {
    if (index > 0) setIndex(prev => prev - 1);
    else setIndex(Math.max(0, total - itemsPerView));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 font-sans text-gray-900"
    >

      {/* 1. HERO SECTION - Standardized */}
      <section className="relative h-[500px] flex items-center bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://brandingpioneers.co.in/scod/scod-breadcrumbs/International Bariatric Surgery.webp"
            alt="International Bariatric"
            className="w-full h-full object-cover opacity-40"
          />
          {/* Consistent SCOD Blue Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-scod/95 via-scod/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
              <SafeIcon icon={FiActivity} className="w-5 h-5 text-emerald-300" />
              <span className="text-sm font-bold uppercase">International Center of Excellence</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Bariatric Surgery <br /> <span className="text-emerald-300">Beyond Borders</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mb-8">
              Simplified medical travel for weight loss surgery. Expert care, all-inclusive packages, and a dedicated team for international patients.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 items-start">
              <Link to="/contact" className="bg-white text-scod px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg flex items-center justify-center space-x-2">
                <SafeIcon icon={FiPlane} className="w-5 h-5" />
                <span>Get a Quote</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why India & SCOD */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <span className="text-scod font-bold uppercase text-sm">The Advantage</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Why India & SCOD?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {whyIndia.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-left hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 mr-auto text-scod">
                  <SafeIcon icon={item.icon} className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* East Africa Focus */}
      <section className="py-20 bg-scod text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full mb-6 border border-white/20">
                <SafeIcon icon={FiMapPin} className="w-4 h-4 text-emerald-300" />
                <span className="text-xs font-bold uppercase text-emerald-100">Special Focus</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Trusted in <br /><span className="text-emerald-300">Tanzania & East Africa</span></h2>
              <p className="text-xl text-blue-100 mb-8">
                Dr. Arush Sabharwal regularly conducts OPDs in Dar es Salaam. We are the preferred choice for patients from Kenya, Uganda, and Tanzania.
              </p>

              <ul className="space-y-4 mb-8">
                {eastAfricaFocus.map((item, index) => (
                  <li key={index} className="flex items-center bg-white/10 px-4 py-3 rounded-lg backdrop-blur-sm">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img src="assets/scod/africa/african-1.webp" alt="Africa Focus" className="w-full h-[500px] object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Packages & Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Packages & Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-scod">
                  <SafeIcon icon={FiCheck} className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm uppercase">{pkg.label}</h4>
                  <p className="text-gray-600 font-medium">{pkg.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-start text-left group">
                <div className="w-24 h-24 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center shadow-lg mb-6 group-hover:border-scod transition-colors">
                  <SafeIcon icon={step.icon} className="w-10 h-10 text-scod" />
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">{step.title}</h4>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Videos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Safety & Accreditation</h2>
              <p className="text-gray-600 mb-8">Rigorous protocols ensuring you feel safe and cared for.</p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiShield} className="w-6 h-6 text-scod" />
                  <span className="font-medium text-gray-700">JCI & NABH Standards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiMessageCircle} className="w-6 h-6 text-scod" />
                  <span className="font-medium text-gray-700">Multi-lingual Interpreters</span>
                </div>
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiHeart} className="w-6 h-6 text-scod" />
                  <span className="font-medium text-gray-700">24/7 International Patient Ward</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Dr. Awareness Videos</h3>
                <div className="flex gap-2">
                  <button onClick={() => handlePrev(videoIndex, setVideoIndex, awarenessVideos.length)} className="p-2 rounded-full bg-gray-100 hover:bg-scod hover:text-white transition-colors"><SafeIcon icon={FiChevronLeft} className="w-5 h-5" /></button>
                  <button onClick={() => handleNext(videoIndex, setVideoIndex, awarenessVideos.length)} className="p-2 rounded-full bg-gray-100 hover:bg-scod hover:text-white transition-colors"><SafeIcon icon={FiChevronRight} className="w-5 h-5" /></button>
                </div>
              </div>

              <div className="overflow-hidden">
                <motion.div
                  className="flex"
                  animate={{ x: `-${videoIndex * (100 / (window.innerWidth >= 1024 ? 2 : 1))}%` }}
                  style={{ width: `${awarenessVideos.length * (100 / (window.innerWidth >= 1024 ? 2 : 1))}%` }}
                >
                  {awarenessVideos.map((video, index) => (
                    <motion.div key={index} className="w-full lg:w-1/2 px-2 flex-shrink-0" style={{ width: `${100 / awarenessVideos.length}%` }}>
                      <div className="relative rounded-xl overflow-hidden aspect-video cursor-pointer group" onClick={() => setSelectedVideo(video)}>
                        <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                          <SafeIcon icon={FiPlay} className="w-12 h-12 text-white" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Gallery */}
      <section className="py-20 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-4xl text-white font-bold">International <span className="text-blue-400">Smiles</span></h2>
            <div className="flex gap-3">
              <button onClick={() => handlePrev(galleryIndex, setGalleryIndex, galleryImages.length)} className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all"><SafeIcon icon={FiChevronLeft} className="w-6 h-6" /></button>
              <button onClick={() => handleNext(galleryIndex, setGalleryIndex, galleryImages.length)} className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all"><SafeIcon icon={FiChevronRight} className="w-6 h-6" /></button>
            </div>
          </div>

          <div className="-mx-4 overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${galleryIndex * (100 / galleryImages.length)}%` }}
              style={{ width: `${(galleryImages.length * 100) / itemsPerView}%` }}
            >
              {galleryImages.map((image, index) => (
                <motion.div key={image.id} className="w-full px-4 flex-shrink-0" style={{ width: `${100 / galleryImages.length}%` }}>
                  <div className="relative rounded-2xl overflow-hidden h-80">
                    <img src={image.src} alt={image.caption} className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                      <p className="text-emerald-400 text-xs font-bold uppercase mb-1">{image.desc}</p>
                      <h3 className="text-xl font-bold">{image.caption}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-left">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Start Your Transformation</h2>
          <p className="text-lg text-gray-600 mb-8">Get a free quote and treatment plan. Our international team responds within 24 hours.</p>
          <Link to="/contact" className="bg-scod text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg">Enquire Now</Link>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 text-white bg-black/50 rounded-full p-2"
              >
                <SafeIcon icon={FiX} className="w-6 h-6" />
              </button>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default InternationalBariatric;