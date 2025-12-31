import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiActivity, FiShield, FiUserCheck, FiTrendingUp, FiCheckCircle, FiArrowRight, FiClipboard, FiAlertCircle, FiHeart, FiUsers } = FiIcons;

const SurgeryOverview = () => {
  const safetyFeatures = [
    {
      icon: FiUsers,
      title: "Expert Multidisciplinary Team",
      desc: "Your care is managed not just by a surgeon, but by a team including anesthesiologists, cardiologists, and specialists."
    },
    {
      icon: FiActivity,
      title: "Advanced Technology",
      desc: "We utilize 4K/3D laparoscopic systems and the latest energy devices to ensure precision, minimal blood loss, and faster healing."
    },
    {
      icon: FiShield,
      title: "Strict Safety Protocols",
      desc: "Adherence to international ERAS (Enhanced Recovery After Surgery) protocols to minimize pain and hospital stay."
    },
    {
      icon: FiCheckCircle,
      title: "Hospital Infrastructure",
      desc: "Operated in high-volume, accredited centers with dedicated surgical setups and ICU backup for absolute safety."
    }
  ];

  const services = [
    {
      title: "Bariatric Surgery",
      desc: "Procedures like Sleeve Gastrectomy and Gastric Bypass to restrict food intake and reduce hunger.",
      link: "/services/bariatric-surgery",
      color: "bg-blue-50 text-blue-700 hover:text-blue-800",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Laparoscopic Surgery",
      desc: "Minimally invasive solutions for gallstones, hernias, and other abdominal conditions.",
      link: "/services/laparoscopic-surgery",
      color: "bg-indigo-50 text-indigo-700 hover:text-indigo-800",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Body Contouring",
      desc: "Reconstructive procedures to remove excess skin and restore body shape after weight loss.",
      link: "/services/body-contouring",
      color: "bg-purple-50 text-purple-700 hover:text-purple-800",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const pathway = [
    {
      title: "Consultation",
      desc: "Initial meeting with Dr. Arush to discuss goals and history.",
      icon: FiUserCheck
    },
    {
      title: "Evaluation",
      desc: "Comprehensive health check, blood work, and fitness clearance.",
      icon: FiClipboard
    },
    {
      title: "Surgery",
      desc: "Minimally invasive procedure with typically 1-2 days hospital stay.",
      icon: FiActivity
    },
    {
      title: "Follow-up",
      desc: "Lifetime support for health monitoring and success.",
      icon: FiTrendingUp
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 font-sans text-gray-900"
    >
      {/* 1. HERO SECTION */}
      <section className="relative h-[500px] flex items-center bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://brandingpioneers.co.in/scod/scod-breadcrumbs/Surgical Solutions.webp" 
            alt="Surgical Solutions" 
            className="w-full h-full object-cover object-center" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-scod/95 via-scod/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
              <SafeIcon icon={FiActivity} className="w-5 h-5 text-emerald-300" />
              <span className="text-sm font-bold tracking-wide uppercase">Clinical Excellence</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Surgical Solutions for <br /> <span className="text-emerald-300">Better Health</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed font-light max-w-2xl">
              When needed, evidence-based surgical interventions offer a path to long-term health and renewed vitality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. WHO NEEDS SURGERY? */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" 
                alt="Doctor Consultation" 
                className="rounded-2xl shadow-lg w-full h-[500px] object-cover" 
              />
            </div>
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Who is a Candidate for <span className="text-scod">Surgery?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Surgery is a major medical decision. It is recommended when other methods haven't provided the necessary results or when specific medical conditions require intervention.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <h4 className="font-bold text-xl text-gray-900 mb-3 flex items-center">
                    <SafeIcon icon={FiAlertCircle} className="text-scod mr-2" />
                    Weight Related
                  </h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• BMI Criteria met</li>
                    <li>• Obesity-related health issues</li>
                    <li>• Previous unsuccessful treatments</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <h4 className="font-bold text-xl text-gray-900 mb-3 flex items-center">
                    <SafeIcon icon={FiHeart} className="text-scod mr-2" />
                    General Surgery
                  </h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Symptomatic Gallstones</li>
                    <li>• Hernias (Inguinal/Ventral)</li>
                    <li>• Appendicitis</li>
                    <li>• Severe Acid Reflux</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SAFETY FRAMEWORK */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">The SCOD <span className="text-scod">Safety Standard</span></h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Your safety is our absolute priority. We combine surgical expertise with world-class infrastructure to ensure the highest standards of care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyFeatures.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-scod/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-scod shadow-sm mb-4">
                  <SafeIcon icon={item.icon} className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES OVERVIEW */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Our Surgical <span className="text-scod">Expertise</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col overflow-hidden group h-full"
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white drop-shadow-md">{service.title}</h3>
                </div>
                <div className="p-8 flex flex-col flex-grow justify-between">
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{service.desc}</p>
                  <Link to={service.link} className={`inline-flex items-center font-bold ${service.color.split(' ')[1]} hover:underline mt-auto`}>
                    Learn More <SafeIcon icon={FiArrowRight} className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PATIENT PATHWAY */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Your Journey <span className="text-scod">to Health</span></h2>
            <p className="text-gray-600 mt-4">A structured pathway designed for your comfort and success.</p>
          </div>
          
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {pathway.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white p-6 rounded-2xl text-center border border-gray-100 shadow-lg md:shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-scod text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg border-4 border-white">
                    <SafeIcon icon={step.icon} className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA STRIP */}
      <section className="py-16 bg-gradient-to-r from-scod to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Take the Next Step?</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/services/bariatric-surgery" className="bg-white text-scod px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg flex items-center justify-center space-x-2">
              <SafeIcon icon={FiActivity} className="w-5 h-5" />
              <span>View Bariatric Surgery</span>
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center space-x-2">
              <SafeIcon icon={FiClipboard} className="w-5 h-5" />
              <span>Book Appointment</span>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default SurgeryOverview;