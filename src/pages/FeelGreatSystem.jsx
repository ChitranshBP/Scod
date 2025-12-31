import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { 
  FiActivity, FiShield, FiCheckCircle, FiArrowRight, 
  FiInfo, FiHeart, FiZap, FiDroplet, FiUsers, 
  FiTrendingDown, FiPieChart, FiClipboard, FiCalendar,
  FiShoppingBag, FiExternalLink
} = FiIcons;

const FeelGreatSystem = () => {
  const [activeTab, setActiveTab] = useState('non-surgical');
  const purchaseLink = "https://ufeelgreat.com/ind/en/c/320467391";

  const components = [
    {
      id: 1,
      title: "Targeted Dietary Fibre & Phytonutrient Formulation",
      icon: FiZap,
      benefits: [
        "Healthier post-meal glucose & insulin response",
        "Reduced insulin resistance",
        "Appetite regulation and satiety",
        "Improved gut health & microbiome balance",
        "Cholesterol & Triglyceride metabolism support"
      ],
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      id: 2,
      title: "Plant-Based Metabolic Support Beverage",
      icon: FiDroplet,
      benefits: [
        "Metabolic energy and mental clarity",
        "Consistency with daily routines",
        "Reduced reliance on refined carbohydrates",
        "Decreased dependence on artificial stimulants"
      ],
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    }
  ];

  const conditions = [
    {
      title: "Type 2 Diabetes",
      desc: "Improved insulin sensitivity and glucose stability may allow for reduction in medications under physician supervision.",
      icon: FiActivity
    },
    {
      title: "PCOS",
      desc: "Improved insulin signalling supports hormonal balance, menstrual regularity, and weight-related outcomes.",
      icon: FiUsers
    },
    {
      title: "Hypertension",
      desc: "By reducing insulin-driven sodium retention and visceral fat, FGS supports healthier vascular function.",
      icon: FiShield
    },
    {
      title: "Dyslipidaemia",
      desc: "Supports reduction in LDL cholesterol and triglycerides while improving overall cardiometabolic profile.",
      icon: FiPieChart
    }
  ];

  const roles = {
    'non-surgical': {
      title: "Non-Surgical Management",
      desc: "A structured metabolic intervention for patients unable or unwilling to undergo surgery.",
      points: ["Insulin sensitivity restoration", "Appetite regulation", "Sustainable weight loss"]
    },
    'pre-op': {
      title: "Pre-Operative Optimization",
      desc: "Used prior to surgery to ensure the safest possible procedure and best initial outcomes.",
      points: ["Reduce liver size & visceral fat", "Improve insulin resistance", "Establish nutritional discipline"]
    },
    'post-op': {
      title: "Post-Surgical Support",
      desc: "Crucial for preventing weight regain and maintaining the metabolic benefits of surgery.",
      points: ["Reinforce structured routines", "Reduce cravings & snacking", "Maintain long-term stability"]
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 font-sans text-gray-900 bg-white"
    >
      {/* 1. HERO SECTION */}
      <section className="relative h-[600px] flex items-center bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1920&q=80" 
            alt="Metabolic Health" 
            className="w-full h-full object-cover opacity-30" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-scod via-scod/90 to-transparent"></div>
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
              <span className="text-sm font-bold tracking-wide uppercase">Clinically Studied Metabolic Reset</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Feel Great <br /> <span className="text-emerald-300">System (FGS)</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
              Address the root causes of metabolic disease through science-based insulin management and hormonal balancing.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href={purchaseLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-600 transition-all shadow-xl flex items-center gap-2 group"
              >
                <SafeIcon icon={FiShoppingBag} className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Order FGS System
              </a>
              <Link to="/contact" className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center gap-2">
                <SafeIcon icon={FiCalendar} className="w-5 h-5" />
                Consult Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
                Beyond Weight Loss: <br/><span className="text-scod">A Science-Based Reset</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  At SCOD Clinics, we recognize that obesity, Type 2 diabetes, PCOS, and hypertension are <strong>metabolic diseases</strong>, not merely weight-related conditions.
                </p>
                <p>
                  The Feel Great System is a science-based program designed to address insulin resistance and impaired metabolic signalling. Under medical supervision, it supports disease remission and long-term risk reduction.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Regain Hunger Control", "Stabilize Blood Sugar", "Improve Lipid Profile", "Durable Weight Stability"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <SafeIcon icon={FiCheckCircle} className="text-emerald-500 w-5 h-5 flex-shrink-0" />
                    <span className="font-bold text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-50">
                <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80" alt="Metabolic Reset" className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-scod text-white p-8 rounded-2xl shadow-xl max-w-xs">
                <p className="font-bold text-lg mb-2">Root Cause Therapy</p>
                <p className="text-sm text-blue-100 leading-relaxed">FGS targets insulin resistance, the primary driver of metabolic syndrome.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. SYSTEM COMPONENTS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-scod font-bold tracking-widest uppercase text-sm">System Architecture</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">The Dual-Action Components</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {components.map((comp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group flex flex-col h-full"
              >
                <div className={`w-16 h-16 ${comp.bg} ${comp.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <SafeIcon icon={comp.icon} className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{comp.title}</h3>
                <ul className="space-y-4 flex-grow mb-8">
                  {comp.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <SafeIcon icon={FiCheckCircle} className={`${comp.color} w-5 h-5 flex-shrink-0 mt-1`} />
                      <span className="text-gray-600 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={purchaseLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm transition-all border-2 ${index === 0 ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-200'}`}
                >
                  <SafeIcon icon={FiShoppingBag} />
                  Get Started with {index === 0 ? 'Unicity Balance' : 'Unimate'}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CLINICAL OUTCOMES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Metabolic <span className="text-scod">Remission Support</span></h2>
            <p className="text-gray-600 mt-4 max-w-2xl text-lg">
              By improving insulin sensitivity, FGS supports the reversal or remission of chronic conditions under medical supervision.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {conditions.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-blue-50 border border-blue-100 hover:bg-scod hover:text-white transition-all group"
              >
                <SafeIcon icon={item.icon} className="w-10 h-10 text-scod group-hover:text-white mb-6" />
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-sm leading-relaxed opacity-80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ROLE IN CARE (TABS) */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-white font-bold mb-4">Integrated Patient Care</h2>
            <p className="text-blue-200">How FGS fits into your surgical or non-surgical journey.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(roles).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-8 py-3 rounded-full font-bold text-sm transition-all border-2 ${activeTab === key ? 'bg-scod border-scod text-white shadow-lg' : 'bg-white/5 border-white/20 text-blue-200 hover:bg-white/10'}`}
              >
                {roles[key].title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/10"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7">
                  <h3 className="text-3xl font-bold mb-4 text-emerald-300">{roles[activeTab].title}</h3>
                  <p className="text-blue-100 text-lg mb-8 leading-relaxed">{roles[activeTab].desc}</p>
                  <div className="space-y-4">
                    {roles[activeTab].points.map((p, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <SafeIcon icon={FiCheckCircle} className="text-emerald-400 w-5 h-5 flex-shrink-0" />
                        <span className="font-medium">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-5 flex justify-center">
                  <div className="w-32 h-32 rounded-full bg-scod/20 flex items-center justify-center border-4 border-scod/30">
                    <SafeIcon icon={FiHeart} className="w-16 h-16 text-emerald-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 6. SCIENTIFIC BASIS */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SafeIcon icon={FiClipboard} className="w-12 h-12 text-scod mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Scientific & Clinical Basis</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            The ingredients in the Feel Great System have been evaluated in human clinical studies for glycaemic control, satiety, and lipid parameter improvements. It is used as a complement to medical care, not a replacement for clinically indicated medication or surgery.
          </p>
          <div className="p-8 bg-blue-50 rounded-2xl border border-blue-100 text-left flex gap-6 items-start">
            <SafeIcon icon={FiInfo} className="w-6 h-6 text-scod flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Medical Supervision Required</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                All medication changes and participation in metabolic reset programs must be performed only under the guidance of our qualified medical team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="py-20 bg-scod text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Reset Your Metabolic Future</h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Ready to start your reset? Order the Feel Great System today or consult with our medical team for a tailored treatment plan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={purchaseLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-emerald-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-600 transition-all shadow-xl flex items-center justify-center gap-2 group"
            >
              <SafeIcon icon={FiShoppingBag} className="group-hover:rotate-12 transition-transform" />
              Buy FGS System Now
            </a>
            <Link to="/contact" className="bg-white text-scod px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl flex items-center justify-center gap-2">
              <SafeIcon icon={FiCalendar} />
              Book Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* 8. DISCLAIMER */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white p-8 rounded-xl border border-gray-200 text-sm text-gray-500 leading-relaxed">
            <p className="font-bold uppercase tracking-widest mb-4 text-gray-900">Medical Disclaimer</p>
            The Feel Great System is a nutrition-based metabolic support program. It is not intended to diagnose, treat, cure, or prevent any disease. Results may vary between individuals. All medication changes must be made under the supervision of a qualified healthcare professional.
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default FeelGreatSystem;