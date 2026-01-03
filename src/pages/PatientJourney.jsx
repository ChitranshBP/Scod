import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiCalendar, FiClipboard, FiActivity, FiCheckCircle, FiHeart, FiArrowRight, FiCheck, FiClock, FiFileText, FiUserCheck } = FiIcons;

const PatientJourney = () => {
  const [activeStep, setActiveStep] = useState(null);

  // Updated to strictly follow SCOD Theme Colors (Blues, Teals, Indigos)
  const journeySteps = [
    {
      id: 1,
      title: "First Contact",
      subtitle: "Taking the First Step",
      timeframe: "Day 1",
      icon: FiPhone,
      description: "Reach out to our team via phone, email, or our website. Our patient coordinators will listen to your needs and schedule your initial appointment.",
      checklist: [
        "Fill out the online contact form or call us",
        "Have your insurance card ready (if applicable)",
        "Prepare a list of initial questions",
        "Check your calendar for availability"
      ],
      color: "bg-blue-500",
      textColor: "text-blue-600",
      badgeColor: "bg-blue-50 text-blue-700",
      image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Initial Consultation",
      subtitle: "Meeting Dr. Arush",
      timeframe: "Week 1",
      icon: FiUserCheck,
      description: "A comprehensive 45-minute consultation with Dr. Arush Sabharwal to discuss your medical history, weight loss goals, and potential treatment options.",
      checklist: [
        "Bring recent medical records & blood work",
        "List of current medications",
        "Write down your weight loss history",
        "Bring a support person (friend/family) if desired"
      ],
      color: "bg-scod",
      textColor: "text-scod",
      badgeColor: "bg-blue-50 text-scod",
      image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Evaluation & Tests",
      subtitle: "Comprehensive Health Check",
      timeframe: "Week 1-2",
      icon: FiActivity,
      description: "We perform a 360-degree health assessment including metabolic profiling, cardiac clearance, and nutritional evaluation to ensure safety.",
      checklist: [
        "Complete prescribed blood tests (fasting required)",
        "Undergo cardiac evaluation (ECG/ECHO)",
        "Attend nutritional assessment session",
        "Psychological screening (if required)"
      ],
      color: "bg-cyan-600",
      textColor: "text-cyan-600",
      badgeColor: "bg-cyan-50 text-cyan-700",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Decision & Approval",
      subtitle: "Choosing Your Path",
      timeframe: "Week 2-3",
      icon: FiFileText,
      description: "Review test results with the team. We finalize the best procedure for you (Sleeve, Bypass, or Medical Mgmt) and handle insurance pre-authorization.",
      checklist: [
        "Select surgery date",
        "Sign consent forms",
        "Submit insurance documents",
        "Review cost and payment options"
      ],
      color: "bg-indigo-600",
      textColor: "text-indigo-600",
      badgeColor: "bg-indigo-50 text-indigo-700",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Pre-Op Preparation",
      subtitle: "Getting Body Ready",
      timeframe: "Week 3-4",
      icon: FiClipboard,
      description: "Begin the liver-shrinking diet and lifestyle adjustments to optimize your body for a safe surgery and faster recovery.",
      checklist: [
        "Start Pre-Op Liquid/High-Protein Diet",
        "Stop smoking and specific medications (as advised)",
        "Purchase post-op vitamins & protein shakes",
        "Pack your hospital bag"
      ],
      color: "bg-teal-600",
      textColor: "text-teal-600",
      badgeColor: "bg-teal-50 text-teal-700",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Surgery Day",
      subtitle: "The Transformation Begins",
      timeframe: "Day 0",
      icon: FiHeart,
      description: "Arrive at the center for your procedure. Our expert team ensures a comfortable, minimally invasive experience using advanced technology.",
      checklist: [
        "Arrive fasting (nothing to eat/drink for 8 hours)",
        "Bring ID and Insurance Card",
        "Leave valuables at home",
        "Wear loose, comfortable clothing"
      ],
      color: "bg-blue-800",
      textColor: "text-blue-800",
      badgeColor: "bg-blue-50 text-blue-900",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      title: "Recovery & Aftercare",
      subtitle: "Lifetime Support",
      timeframe: "Week 1 Onwards",
      icon: FiCheckCircle,
      description: "Your journey doesn't end at surgery. We provide lifetime follow-up, support groups, and nutritional counseling to ensure lasting success.",
      checklist: [
        "Follow discharge diet instructions strictly",
        "Attend 1-week post-op checkup",
        "Join our monthly support group",
        "Schedule 3, 6, and 12-month follow-ups"
      ],
      color: "bg-emerald-600",
      textColor: "text-emerald-600",
      badgeColor: "bg-emerald-50 text-emerald-700",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80"
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
            src="https://brandingpioneers.co.in/scod/scod-breadcrumbs/Patient Journey.webp"
            alt="Patient Journey"
            className="w-full h-full object-cover object-center opacity-40"
          />
          {/* Consistent Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-scod/95 via-scod/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
              <SafeIcon icon={FiCalendar} className="w-5 h-5 text-emerald-300" />
              <span className="text-sm font-bold tracking-wide uppercase">Your Path to Wellness</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Your Journey at <span className="text-emerald-300">SCOD</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
              From your first consultation to your new healthy life, we are with you every step of the way. Explore our structured pathway to transformation.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-white text-scod px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>Start Your Journey</span>
                <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TIMELINE SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <span className="text-scod font-bold tracking-widest uppercase text-sm">Step-by-Step Guide</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">The Roadmap to Health</h2>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform md:-translate-x-1/2 rounded-full"></div>

            {journeySteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center mb-16 last:mb-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Desktop Image Side (Fills Blank Space) */}
                <div className="flex-1 w-full hidden md:block px-8 lg:px-12">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg h-64 border-4 border-white transform transition-transform hover:scale-[1.02] duration-300 group">
                    <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                    <div className={`absolute inset-0 ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                  <div className={`w-12 h-12 rounded-full ${step.color} border-4 border-white shadow-lg flex items-center justify-center text-white`}>
                    <SafeIcon icon={step.icon} className="w-5 h-5" />
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 w-full pl-16 md:pl-0 md:px-12">
                  <div
                    className={`bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 relative group cursor-pointer ${activeStep === step.id ? 'ring-2 ring-scod' : ''}`}
                    onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                  >
                    {/* Header Layout - Flex-col on mobile to prevent collision */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                      <div className="pr-0 sm:pr-4">
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        <p className={`text-sm font-medium ${step.textColor}`}>
                          {step.subtitle}
                        </p>
                      </div>
                      {/* Timeframe Badge - Below title on mobile, side on desktop */}
                      <span className={`self-start text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${step.badgeColor} whitespace-nowrap`}>
                        {step.timeframe}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {step.description}
                    </p>

                    {/* Expandable Checklist */}
                    <div className="border-t border-gray-100 pt-4 mt-2">
                      <button className="flex items-center text-sm font-bold text-gray-700 hover:text-scod transition-colors w-full justify-between">
                        <span className="flex items-center">
                          <SafeIcon icon={FiClipboard} className="w-4 h-4 mr-2" />
                          Patient Checklist
                        </span>
                        <SafeIcon icon={FiArrowRight} className={`w-4 h-4 transform transition-transform duration-300 ${activeStep === step.id ? 'rotate-90' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {(activeStep === step.id || window.innerWidth >= 768) && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="space-y-2 mt-4 overflow-hidden"
                          >
                            {step.checklist.map((item, i) => (
                              <li key={i} className="flex items-start text-sm text-gray-600 bg-gray-50 p-2 rounded-lg">
                                <SafeIcon icon={FiCheck} className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-scod to-blue-700 text-white text-left relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-6">Ready to Take the First Step?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              You've seen the path ahead. Now, let's walk it together. Our team is ready to guide you towards a healthier, happier you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <Link to="/contact" className="bg-white text-scod px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-50 transition-all transform hover:scale-105">
                Book Consultation
              </Link>
              <a href="tel:+918130130489" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <SafeIcon icon={FiPhone} className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default PatientJourney;