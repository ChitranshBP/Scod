import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAlertTriangle, FiShield, FiDollarSign, FiFileText, FiPhone, FiActivity, FiCheckCircle, FiXCircle, FiHelpCircle, FiCreditCard, FiArrowRight, FiInfo, FiUserCheck } = FiIcons;

const RisksCosts = () => {
  const [activeTab, setActiveTab] = useState('covered');

  const risks = [
    {
      category: "General Surgical Risks",
      items: [
        "Infection at incision sites",
        "Bleeding or blood clots (DVT)",
        "Adverse reactions to anesthesia",
        "Respiratory issues post-surgery"
      ]
    },
    {
      category: "Bariatric Specific Risks",
      items: [
        "Staple line leaks (rare but serious)",
        "Nutritional deficiencies (requires vitamins)",
        "Dumping syndrome (nausea from sugar)",
        "Gallstones due to rapid weight loss"
      ]
    }
  ];

  const emergencySymptoms = [
    "Persistent vomiting (unable to keep liquids down)",
    "Fever > 101°F not controlled by medication",
    "Severe abdominal pain worsening over time",
    "Shortness of breath or chest pain",
    "Redness/pus draining from incision sites"
  ];

  const costDrivers = [
    {
      title: "Hospital & Stay",
      desc: "Includes room charges, nursing care, OT charges, and hospital infrastructure.",
      icon: FiActivity
    },
    {
      title: "Consumables",
      desc: "High-tech FDA-approved staplers, energy devices, and laparoscopic instruments.",
      icon: FiShield
    },
    {
      title: "Professional Fees",
      desc: "Surgeon, Assistant Surgeon, Anesthetist, and Dietitian team fees.",
      icon: FiUserCheck
    }
  ];

  const insuranceData = {
    covered: [
      "BMI > 40 (Morbid Obesity)",
      "BMI > 35 with Comorbidities (Diabetes, BP, Sleep Apnea)",
      "Documented history of failed weight loss attempts",
      "Surgery performed for medical reasons, not cosmetic"
    ],
    notCovered: [
      "BMI < 35 (usually considered cosmetic)",
      "Experimental procedures",
      "Body contouring (tummy tuck) usually excluded unless medically necessary",
      "Vitamins and supplements post-surgery"
    ]
  };

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
            src="https://brandingpioneers.co.in/scod/scod-breadcrumbs/Risks & Costs.webp"
            alt="Financial Planning"
            className="w-full h-full object-cover object-center opacity-40"
          />
          {/* Consistent Gradient */}
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
              <SafeIcon icon={FiInfo} className="w-5 h-5 text-emerald-300" />
              <span className="text-sm font-bold tracking-wide uppercase">Transparency First</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Risks, Costs & <br /> <span className="text-emerald-300">Insurance</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed mb-8">
              We believe in complete transparency. Understand the safety protocols, financial aspects, and insurance eligibility before you begin your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link to="/contact" className="bg-white text-scod px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg flex items-center justify-center space-x-2" >
                <SafeIcon icon={FiFileText} className="w-5 h-5" />
                <span>Get Personalised Quote</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. RISKS & SAFETY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-px w-12 bg-scod"></div>
                <span className="uppercase tracking-widest text-sm font-bold text-scod">Informed Consent</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Understanding <br /><span className="text-scod">The Risks</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                While bariatric surgery is generally safe (comparable to gallbladder surgery), complications can occur. We use advanced protocols to minimize these risks, but it is vital for you to be informed.
              </p>

              <div className="space-y-6">
                {risks.map((risk, idx) => (
                  <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <SafeIcon icon={FiAlertTriangle} className="w-5 h-5 text-orange-500 mr-2" />
                      {risk.category}
                    </h4>
                    <ul className="space-y-2">
                      {risk.items.map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 mt-1.5"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Emergency Protocol */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-red-50 rounded-3xl p-8 md:p-12 border-l-8 border-red-500 h-full">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                  <SafeIcon icon={FiPhone} className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-red-700">Emergency Protocol</h3>
                  <p className="text-red-600 font-medium">When to call us immediately</p>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {emergencySymptoms.map((symptom, idx) => (
                  <li key={idx} className="flex items-start text-gray-800 font-medium">
                    <SafeIcon icon={FiAlertTriangle} className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                    {symptom}
                  </li>
                ))}
              </ul>
              <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm">
                <p className="text-sm text-gray-500 mb-1">24/7 Emergency Helpline</p>
                <a href="tel:+918130130489" className="text-2xl font-bold text-red-600 hover:text-red-700 transition-colors block">
                  +91 8130130489
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. COST STRUCTURE */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <span className="text-scod font-bold tracking-widest uppercase text-sm">Financial Transparency</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">What Drives the Cost?</h2>
            <p className="text-gray-600 mt-4 max-w-2xl">
              We provide fixed package pricing so there are no surprises. Here is a breakdown of what your investment covers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {costDrivers.map((driver, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-scod"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-scod mb-6">
                  <SafeIcon icon={driver.icon} className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{driver.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {driver.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-left p-6 bg-blue-100 rounded-xl border border-blue-200 inline-block w-full">
            <p className="text-blue-900 font-medium flex items-center">
              <SafeIcon icon={FiInfo} className="w-5 h-5 mr-2" />
              Note: Exact costs vary by procedure type (Sleeve vs. Bypass) and room category chosen.
            </p>
          </div>
        </div>
      </section>

      {/* 4. INSURANCE SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Insurance Coverage</h2>
            <p className="text-gray-600 mt-4">
              Most major insurers in India now cover bariatric surgery if specific medical criteria are met.
            </p>
          </div>

          {/* Insurance Toggle */}
          <div className="flex justify-start mb-10">
            <div className="bg-gray-100 p-1 rounded-full inline-flex">
              <button
                onClick={() => setActiveTab('covered')}
                className={`px-8 py-3 rounded-full font-bold text-sm transition-all ${activeTab === 'covered' ? 'bg-emerald-500 text-white shadow-md' : 'text-gray-500 hover:text-gray-700'}`}
              >
                What is Covered
              </button>
              <button
                onClick={() => setActiveTab('notCovered')}
                className={`px-8 py-3 rounded-full font-bold text-sm transition-all ${activeTab === 'notCovered' ? 'bg-red-500 text-white shadow-md' : 'text-gray-500 hover:text-gray-700'}`}
              >
                What is NOT Covered
              </button>
            </div>
          </div>

          {/* Content Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`rounded-2xl p-10 border-2 ${activeTab === 'covered' ? 'border-emerald-100 bg-emerald-50' : 'border-red-100 bg-red-50'}`}
            >
              <div className="flex flex-col items-start">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${activeTab === 'covered' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
                  <SafeIcon icon={activeTab === 'covered' ? FiCheckCircle : FiXCircle} className="w-8 h-8" />
                </div>
                <h3 className={`text-2xl font-bold mb-6 ${activeTab === 'covered' ? 'text-emerald-800' : 'text-red-800'}`}>
                  {activeTab === 'covered' ? 'Generally Approved Criteria' : 'Common Exclusions'}
                </h3>
                <ul className="space-y-4 w-full max-w-lg">
                  {insuranceData[activeTab].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <SafeIcon icon={activeTab === 'covered' ? FiCheckCircle : FiXCircle} className={`w-6 h-6 mr-3 flex-shrink-0 ${activeTab === 'covered' ? 'text-emerald-500' : 'text-red-500'}`} />
                      <span className="text-gray-700 font-medium text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-start gap-4 flex-wrap">
            <img src="https://brandingpioneers.co.in/scod/insurance-logos.png" onError={(e) => e.target.style.display = 'none'} alt="Insurance Partners" className="h-12 opacity-70 grayscale hover:grayscale-0 transition-all" />
            <span className="text-gray-400 text-sm self-center">We work with all major TPA & Insurance providers.</span>
          </div>
        </div>
      </section>

      {/* 5. FINANCIAL OPTIONS (Background Updated to SCOD Blue) */}
      <section className="py-20 bg-scod text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Financial Assistance</h2>
              <p className="text-blue-200 text-lg mb-8 leading-relaxed">
                We believe cost should not be a barrier to health. We have partnered with leading financial institutions to offer easy EMI options.
              </p>

              <div className="space-y-4">
                <div className="flex items-center bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <SafeIcon icon={FiCreditCard} className="w-8 h-8 text-emerald-400 mr-4" />
                  <div>
                    <h4 className="font-bold text-white">0% Interest EMI</h4>
                    <p className="text-sm text-blue-200">Available for 6-12 months tenure.</p>
                  </div>
                </div>
                <div className="flex items-center bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <SafeIcon icon={FiFileText} className="w-8 h-8 text-emerald-400 mr-4" />
                  <div>
                    <h4 className="font-bold text-white">Minimal Documentation</h4>
                    <p className="text-sm text-blue-200">Quick approval process within 24 hours.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 text-gray-900">
              <h3 className="text-2xl font-bold mb-6 text-center">Request Cost Estimate</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-scod outline-none" />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-scod outline-none" />
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-scod outline-none bg-white">
                  <option>Select Procedure</option>
                  <option>Bariatric Surgery</option>
                  <option>Hernia Repair</option>
                  <option>Gallbladder</option>
                </select>
                <div className="flex items-start space-x-2 text-sm text-gray-500">
                  <input type="checkbox" className="mt-1" />
                  <span>I authorize SCOD team to contact me regarding my estimate.</span>
                </div>
                <button className="w-full bg-scod text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-all shadow-lg">
                  Get Estimate Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </motion.div>
  );
};

export default RisksCosts;