import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import SEO from '../../components/common/SEO';
import MedicalAwareness from '../../components/common/MedicalAwareness';
import BMIInfoSection from '../../components/home/BMIInfoSection';

const { FiActivity, FiShield, FiUserCheck, FiTrendingUp, FiCheckCircle, FiArrowRight, FiClipboard, FiHeart, FiUsers, FiTarget, FiPlus, FiPieChart, FiChevronRight, FiCheck } = FiIcons;

const MedicalManagement = () => {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      id: 0,
      title: "Advanced Diagnostics",
      icon: FiActivity,
      desc: "We move beyond simple BMI calculations. Our diagnostic protocol involves a deep dive into your metabolic profile to understand the 'why' behind your weight. By identifying hormonal imbalances and genetic predispositions, we tailor a plan that works with your biology, not against it.",
      details: [
        "Comprehensive body composition analysis",
        "Full hormonal mapping (Insulin, Cortisol, Thyroid)",
        "Genetic susceptibility testing",
        "Resting metabolic rate assessment"
      ],
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200"
    },
    {
      id: 1,
      title: "Pharmacotherapy",
      icon: FiShield,
      desc: "Modern medicine has revolutionized weight management. We utilize FDA-approved anti-obesity medications, such as GLP-1 receptor agonists, to safely regulate appetite and improve insulin sensitivity. These are not 'diet pills' but metabolic regulators.",
      details: [
        "GLP-1 Agonists (Semaglutide/Liraglutide)",
        "Appetite regulation & satiety enhancement",
        "Insulin resistance management",
        "Strict medical monitoring for safety"
      ],
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-200"
    },
    {
      id: 2,
      title: "Lifestyle Medicine",
      icon: FiHeart,
      desc: "Sustainable weight loss requires a lifestyle you can actually maintain. We don't prescribe starvation diets. Instead, we focus on circadian biology, sleep hygiene, and 'activity snacking'—small, effective movements integrated into your daily routine.",
      details: [
        "Circadian rhythm optimization",
        "Sleep hygiene protocols",
        "Sustainable nutrition planning",
        "Non-exercise activity thermogenesis (NEAT)"
      ],
      image: "/assets/scod/treatment/medical management/indian-lifestyle.png",
      color: "text-orange-600",
      bg: "bg-orange-50",
      border: "border-orange-200"
    },
    {
      id: 3,
      title: "Targeted Supplementation",
      icon: FiPieChart,
      desc: "Micronutrient deficiencies can stall your metabolism and drain your energy. We identify gaps in your nutrition and provide medical-grade supplementation to optimize cellular function, ensuring you feel as good as you look.",
      details: [
        "Vitamin D3 & B12 optimization",
        "Iron & Ferritin management",
        "Protein intake strategies",
        "Gut microbiome support"
      ],
      image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=800&q=80",
      color: "text-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-200"
    },
    {
      id: 4,
      title: "Behavioral Counselling",
      icon: FiUsers,
      desc: "Weight is often tied to emotion. Our psychological support helps you identify triggers, manage stress without food, and break the cycle of emotional eating. We build mental resilience alongside physical health.",
      details: [
        "Emotional eating triggers identification",
        "Stress management techniques",
        "Cognitive behavioral strategies",
        "Long-term habit formation"
      ],
      image: "/assets/scod/treatment/medical management/indian-counselling.png",
      color: "text-pink-600",
      bg: "bg-pink-50",
      border: "border-pink-200"
    }
  ];

  const comparison = [
    {
      type: "Medical Management",
      suitable: true,
      features: [
        "BMI 27-35 with comorbidities",
        "Early-stage metabolic issues",
        "Preference for non-invasive care",
        "Weight regain prevention",
        "Cosmetic weight loss goals"
      ]
    },
    {
      type: "Bariatric Surgery",
      suitable: false,
      features: [
        "BMI > 35-40",
        "Severe/Uncontrolled Diabetes",
        "Long-standing severe obesity",
        "Obstructive Sleep Apnea",
        "When medical management plateaus"
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 font-sans text-gray-900"
    >
      <SEO
        title="Metabolic Surgery for Diabetes | SCOD Clinic Delhi"
        description="Achieve Type 2 Diabetes remission with advanced metabolic surgery at SCOD Clinic. Our procedures target the hormonal root causes of diabetes for long-term blood sugar control and vitality."
      />

      {/* 1. HERO SECTION */}
      <section className="relative h-[500px] flex items-center bg-gray-900 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://brandingpioneers.co.in/scod/scod-breadcrumbs/Medical Metabolic Management.webp"
            alt="Medical Management"
            className="w-full h-full object-cover object-center opacity-40"
          />
          {/* Gradient Overlay - Consistent with Treatment Pages */}
          <div className="absolute inset-0 bg-gradient-to-r from-scod/95 via-scod/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
              <SafeIcon icon={FiActivity} className="w-5 h-5 text-emerald-300" />
              <span className="text-sm font-bold tracking-wide uppercase">Non-Surgical Excellence</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Medical Metabolic <br /> <span className="text-emerald-300">Management</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed mb-8">
              A scientific, non-invasive approach to weight loss and metabolic health. We combine advanced diagnostics, modern pharmacotherapy, and lifestyle precision to transform your health without surgery.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                to="/contact"
                className="bg-white text-scod px-8 py-3 rounded-full font-bold text-base hover:bg-gray-100 transition-all shadow-lg flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiClipboard} className="w-5 h-5" />
                <span>Book Medical Consult</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. PHILOSOPHY SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-px w-12 bg-scod"></div>
                <span className="uppercase tracking-widest text-sm font-bold text-scod">Our Philosophy</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Treating Obesity as a <br /> <span className="text-scod">Disease, Not a Choice</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At SCOD, we understand that weight is regulated by complex biological systems, not just willpower. Our non-surgical approach respects your body's physiology.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe in a tiered approach to metabolic care. While surgery is a powerful tool for severe cases, **Medical Management** is the foundation. It is designed for patients seeking significant health improvements through scientifically backed, non-invasive methods.
              </p>

              <div className="flex items-center gap-4">
                <div className="px-4 py-2 bg-blue-50 text-scod rounded-lg font-bold text-sm">Evidence Based</div>
                <div className="px-4 py-2 bg-blue-50 text-scod rounded-lg font-bold text-sm">Physician Led</div>
                <div className="px-4 py-2 bg-blue-50 text-scod rounded-lg font-bold text-sm">Holistic</div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-50">
                <img src="/assets/scod/treatment/medical management/indian-philosophy.png" alt="Doctor Consultation" className="w-full h-auto object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. WHEN TO CHOOSE: MEDICAL VS SURGERY */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-scod font-bold tracking-widest uppercase text-sm">Making the Right Choice</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Which Path is Right for You?</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Dr. Arush Sabharwal helps you decide between medical management and surgery based on clinical guidelines and your personal goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Medical Management Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-xl border-t-8 border-emerald-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <SafeIcon icon={FiUserCheck} className="w-32 h-32" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Medical Management</h3>
              <p className="text-emerald-600 font-bold mb-6 text-sm uppercase tracking-wide">The Non-Surgical Path</p>

              <ul className="space-y-4">
                {comparison[0].features.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Surgery Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-xl border-t-8 border-scod relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <SafeIcon icon={FiActivity} className="w-32 h-32" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Bariatric Surgery</h3>
              <p className="text-scod font-bold mb-6 text-sm uppercase tracking-wide">The Surgical Intervention</p>

              <ul className="space-y-4">
                {comparison[1].features.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <SafeIcon icon={FiArrowRight} className="w-5 h-5 text-scod mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. THE 5 PILLARS - REDESIGNED INTERACTIVE SECTION */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-scod font-bold tracking-widest uppercase text-sm">Comprehensive Care</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">The 5 Pillars of Medical Management</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Our holistic approach addresses every aspect of metabolic health for sustainable results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Navigation List */}
            <div className="lg:col-span-5 space-y-3">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className={`group relative p-4 rounded-xl cursor-pointer transition-all duration-300 border-2 flex items-center gap-4 ${activePillar === index ? 'bg-white border-scod shadow-lg translate-x-2' : 'bg-gray-50 border-transparent hover:bg-white hover:border-gray-200'}`}
                  onClick={() => setActivePillar(index)}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 ${activePillar === index ? `${pillar.bg} ${pillar.color}` : 'bg-white text-gray-400 group-hover:text-gray-600'}`}>
                    <SafeIcon icon={pillar.icon} className="w-5 h-5" />
                  </div>
                  <div className="flex-grow">
                    <h3 className={`text-base font-bold transition-colors duration-300 ${activePillar === index ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-800'}`}>
                      {pillar.title}
                    </h3>
                  </div>
                  {activePillar === index && (
                    <SafeIcon icon={FiChevronRight} className="w-5 h-5 text-scod" />
                  )}
                </div>
              ))}
            </div>

            {/* Right: Active Content Display */}
            <div className="lg:col-span-7 h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePillar}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 h-full"
                >
                  {/* Image Header */}
                  <div className="relative h-64 overflow-hidden">
                    <img src={pillars[activePillar].image} alt={pillars[activePillar].title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-8">
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 bg-white text-gray-900`}>
                          Pillar {activePillar + 1}
                        </div>
                        <h3 className="text-3xl font-bold text-white">
                          {pillars[activePillar].title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-8 md:p-10">
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                      {pillars[activePillar].desc}
                    </p>

                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                      <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4 flex items-center">
                        <SafeIcon icon={FiTarget} className="w-4 h-4 mr-2 text-scod" />
                        Key Components
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                        {pillars[activePillar].details.map((detail, idx) => (
                          <div key={idx} className="flex items-start">
                            <SafeIcon icon={FiCheck} className={`w-5 h-5 mr-3 flex-shrink-0 ${pillars[activePillar].color}`} />
                            <span className="text-gray-700 text-sm font-medium">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HYBRID APPROACH (Surgery + Medical) */}
      <section className="py-20 bg-scod text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
                <SafeIcon icon={FiPlus} className="w-5 h-5 text-emerald-300" />
                <span className="text-sm font-bold tracking-wide uppercase">The Hybrid Approach</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                Surgery + <br /> Medical Management
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                For many patients, the best results come from a combination. We utilize medical management to <strong>optimize health before surgery</strong> and to <strong>prevent weight regain</strong> years after surgery.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-blue-50">
                  <SafeIcon icon={FiCheckCircle} className="w-6 h-6 text-emerald-400 mr-3" />
                  <span>Pre-op optimization to reduce surgical risk</span>
                </li>
                <li className="flex items-center text-blue-50">
                  <SafeIcon icon={FiCheckCircle} className="w-6 h-6 text-emerald-400 mr-3" />
                  <span>Managing "stalls" or plateaus in weight loss</span>
                </li>
                <li className="flex items-center text-blue-50">
                  <SafeIcon icon={FiCheckCircle} className="w-6 h-6 text-emerald-400 mr-3" />
                  <span>Long-term maintenance for lifelong results</span>
                </li>
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 text-center">
              <SafeIcon icon={FiTrendingUp} className="w-16 h-16 text-emerald-300 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Long-Term Success</h3>
              <p className="text-blue-100 mb-6">
                "Obesity is a chronic disease. Whether you choose surgery or medical management, continuous care is the key to lasting wellness."
              </p>
              <p className="font-bold text-white text-lg">- Dr. Arush Sabharwal</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Medical Awareness Section */}
      <MedicalAwareness />

      {/* BMI Info Section */}
      <BMIInfoSection />

      {/* 6. CTA SECTION */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Start Your Medical Journey</h2>
            <p className="text-xl text-gray-600 mb-8">
              Not ready for surgery? Let's explore what medical management can do for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-scod text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center space-x-2" >
                <SafeIcon icon={FiClipboard} className="w-5 h-5" />
                <span>Book Medical Consultation</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default MedicalManagement;