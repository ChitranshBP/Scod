import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import SEO from '../../components/common/SEO';
import MedicalAwareness from '../../components/common/MedicalAwareness';
import BMIInfoSection from '../../components/home/BMIInfoSection';

const { FiActivity, FiShield, FiTrendingDown, FiCheckCircle, FiAlertTriangle, FiCalendar, FiArrowRight, FiTrendingUp, FiDroplet, FiUserCheck, FiClock, FiX } = FiIcons;

const WeightLossInjectables = () => {
  const [activeDrug, setActiveDrug] = useState('semaglutide');

  const drugs = {
    semaglutide: {
      name: "Semaglutide",
      brands: "Wegovy, Ozempic, Rybelsus",
      type: "GLP-1 Agonist",
      desc: "A weekly injection that mimics a natural hormone to regulate appetite and food intake. It has shown remarkable results in reducing body weight by 15% on average.",
      benefits: [
        "Once-weekly injection",
        "Significant appetite suppression",
        "Improved cardiovascular health",
        "Proven long-term safety"
      ],
      color: "bg-blue-50 border-blue-200 text-blue-800",
      image: "/assets/scod/treatment/weight loss/Semaglutide.webp"
    },
    tirzepatide: {
      name: "Tirzepatide",
      brands: "Mounjaro, Zepbound",
      type: "Dual GLP-1 & GIP Agonist",
      desc: "The newest generation therapy targeting two hormone receptors (GLP-1 and GIP) simultaneously. Clinical trials demonstrate superior weight loss results, often exceeding 20%.",
      benefits: [
        "Dual-action mechanism",
        "Highest weight loss potential",
        "Better blood sugar control",
        "Once-weekly dosing"
      ],
      color: "bg-emerald-50 border-emerald-200 text-emerald-800",
      image: "/assets/scod/treatment/weight loss/Tirzepatide.webp"
    },
    liraglutide: {
      name: "Liraglutide",
      brands: "Saxenda",
      type: "Daily GLP-1 Agonist",
      desc: "An established daily injectable option for weight management. While slightly less potent than weekly options, it remains a highly effective tool for many patients.",
      benefits: [
        "Daily routine consistency",
        "Adjustable titration",
        "Good for maintenance",
        "Well-established safety profile"
      ],
      color: "bg-cyan-50 border-cyan-200 text-cyan-800",
      image: "/assets/scod/treatment/weight loss/Liraglutide.webp"
    }
  };

  const comparison = [
    {
      feature: "Expected Weight Loss",
      injectables: "15-22%",
      surgery: "30-40%",
      diet: "5-10%"
    },
    {
      feature: "Invasiveness",
      injectables: "Non-Invasive (Needle)",
      surgery: "Minimally Invasive",
      diet: "None"
    },
    {
      feature: "Reversibility",
      injectables: "Fully Reversible",
      surgery: "Permanent / Semi-Perm",
      diet: "Reversible"
    },
    {
      feature: "Maintenance Required",
      injectables: "Ongoing Medication",
      surgery: "Lifestyle + Vitamins",
      diet: "High Willpower"
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
        title="Weight Loss Injections in Delhi | Dr. Arush Sabharwal"
        description="Seeking effective weight loss injections in Delhi? Get expert-guided, medically supervised solutions with Dr. Arush Sabharwal for healthy, sustainable results."
      />

      {/* 1. HERO SECTION */}
      <section className="relative h-[500px] flex items-center bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://brandingpioneers.co.in/scod/scod-breadcrumbs/Weight Loss Injectables.webp"
            alt="Weight Loss Injectables"
            className="w-full h-full object-cover object-center opacity-40"
          />
          {/* Updated Gradient to Match Surgery Overview */}
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
              <SafeIcon icon={FiDroplet} className="w-5 h-5 text-emerald-300" />
              <span className="text-sm font-bold tracking-wide uppercase">Modern Pharmacotherapy</span>
            </div>
            <h1 className="text-4xl md:text-6xl text-white font-bold mb-6 leading-tight">
              Weight Loss <br /> <span className="text-emerald-300">Injectables</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed mb-8">
              Discover the power of GLP-1 therapies like Ozempic, Wegovy, and Mounjaro. A scientifically proven, non-surgical path to significant weight loss under expert medical supervision.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                to="/contact"
                className="bg-white text-scod px-8 py-3 rounded-full font-bold text-base hover:bg-gray-100 transition-all shadow-lg flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiActivity} className="w-5 h-5" />
                <span>Book Therapy Evaluation</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. INTRO: PLAIN LANGUAGE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-px w-12 bg-scod"></div>
                <span className="uppercase tracking-widest text-sm font-bold text-scod">The Science</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Not Just Willpower. <br /> <span className="text-scod">It's Biology.</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                You've likely heard names like <strong>Ozempic</strong>, <strong>Wegovy</strong>, or <strong>Mounjaro</strong>. These are not "magic diet pills" but advanced medications known as <strong>GLP-1 agonists</strong>.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                <strong>How they work in simple terms:</strong> Your body naturally produces a hormone called GLP-1 after you eat, which tells your brain "I'm full." In many people struggling with weight, this signal is weak. These injectables mimic that hormone at a higher level, quieting the "food noise" in your brain and slowing down digestion so you feel satisfied with smaller portions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 bg-blue-50 p-4 rounded-xl">
                  <SafeIcon icon={FiTrendingDown} className="w-6 h-6 text-scod" />
                  <span className="font-bold text-gray-800">Reduces Hunger</span>
                </div>
                <div className="flex items-center space-x-3 bg-blue-50 p-4 rounded-xl">
                  <SafeIcon icon={FiShield} className="w-6 h-6 text-scod" />
                  <span className="font-bold text-gray-800">Regulates Insulin</span>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-50">
                <img src="/assets/scod/treatment/weight loss/Weight Loss.webp" alt="Weight Loss Injectables" className="w-full h-auto object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs hidden md:block">
                <p className="text-scod font-bold text-4xl mb-1">20%</p>
                <p className="text-gray-600 text-sm">Average weight loss observed in latest clinical trials.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. DRUG TYPES TABS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-scod font-bold tracking-widest uppercase text-sm">Therapy Options</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Understanding the Medications</h2>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(drugs).map((key) => (
              <button
                key={key}
                onClick={() => setActiveDrug(key)}
                className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 border-2 ${activeDrug === key ? 'bg-scod text-white border-scod shadow-lg scale-105' : 'bg-white text-gray-600 border-gray-200 hover:border-scod hover:text-scod'}`}
              >
                {drugs[key].name}
              </button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDrug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`rounded-3xl p-8 md:p-12 border ${drugs[activeDrug].color} bg-white shadow-xl`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <div className="inline-block px-4 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-500 mb-4 uppercase tracking-wide">
                    {drugs[activeDrug].type}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{drugs[activeDrug].name}</h3>
                  <p className="text-sm text-gray-500 font-medium mb-6">Common Brands: {drugs[activeDrug].brands}</p>

                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {drugs[activeDrug].desc}
                  </p>

                  <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 mr-2 text-scod" />
                    Key Benefits
                  </h4>
                  <ul className="space-y-3">
                    {drugs[activeDrug].benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <div className="w-1.5 h-1.5 bg-scod rounded-full mt-2 mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>


                <div className="flex flex-col items-center justify-center bg-gray-50 rounded-2xl p-8">
                  <div className="w-full h-48 mb-6 rounded-xl overflow-hidden">
                    <img
                      src={drugs[activeDrug].image}
                      alt={drugs[activeDrug].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Prescription Only</h4>
                    <p className="text-gray-500 text-sm max-w-xs mx-auto">
                      These medications must be prescribed by a specialist after a full metabolic evaluation to ensure safety and efficacy.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 4. PROCESS & SAFETY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* The Process */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <SafeIcon icon={FiActivity} className="w-8 h-8 mr-3 text-scod" />
                Treatment Protocol
              </h3>
              <div className="space-y-8 relative">
                <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-100"></div>

                {[
                  { title: "Medical Assessment", desc: "Full blood panel, thyroid check, and history review." },
                  { title: "Customized Prescription", desc: "Selecting the right molecule starting at a low dose." },
                  { title: "Titration Phase", desc: "Gradually increasing dosage over weeks to minimize side effects." },
                  { title: "Maintenance Mode", desc: "Monthly monitoring to sustain weight loss and adjust as needed." }
                ].map((step, i) => (
                  <div key={i} className="relative flex items-start pl-12">
                    <div className="absolute left-0 w-8 h-8 bg-scod rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md border-4 border-white">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{step.title}</h4>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety & Side Effects */}
            <div className="bg-orange-50 rounded-3xl p-8 border border-orange-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center text-orange-800">
                <SafeIcon icon={FiAlertTriangle} className="w-6 h-6 mr-3" />
                Safety & Side Effects
              </h3>
              <p className="text-gray-700 mb-6">
                While highly effective, these medications are potent and require medical supervision. Most side effects are gastrointestinal and improve over time.
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white p-4 rounded-xl border border-orange-100 shadow-sm">
                  <h5 className="font-bold text-gray-900 text-sm uppercase mb-2">Common Side Effects</h5>
                  <div className="flex flex-wrap gap-2">
                    {["Nausea", "Heartburn", "Bloating", "Constipation"].map(e => (
                      <span key={e} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-lg text-xs font-bold">{e}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-orange-100 shadow-sm">
                  <h5 className="font-bold text-gray-900 text-sm uppercase mb-2">Contraindications</h5>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• History of Medullary Thyroid Cancer</li>
                    <li>• Multiple Endocrine Neoplasia syndrome type 2</li>
                    <li>• Pregnancy or breastfeeding</li>
                    <li>• History of pancreatitis</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-sm text-orange-800 font-medium bg-orange-100 p-4 rounded-lg">
                <SafeIcon icon={FiClock} className="w-5 h-5 flex-shrink-0" />
                <p>We start with a low dose and increase slowly ("titration") to help your body adapt comfortably.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COMPARISON TABLE */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">Injectables vs. Surgery</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Understanding where medical therapy fits in the spectrum of obesity treatment.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-sm font-bold uppercase tracking-wider text-gray-400 border-b border-gray-700">Feature</th>
                  <th className="p-4 text-lg font-bold text-emerald-400 border-b border-gray-700 bg-white/5 rounded-t-xl min-w-[200px]">Medical Injectables</th>
                  <th className="p-4 text-lg font-bold text-scod border-b border-gray-700 min-w-[200px]">Bariatric Surgery</th>
                  <th className="p-4 text-lg font-bold text-gray-400 border-b border-gray-700 min-w-[200px]">Diet & Lifestyle</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-800 hover:bg-white/5 transition-colors">
                    <td className="p-4 font-medium text-gray-300">{row.feature}</td>
                    <td className="p-4 text-white font-bold bg-white/5">{row.injectables}</td>
                    <td className="p-4 text-gray-300">{row.surgery}</td>
                    <td className="p-4 text-gray-400">{row.diet}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400 italic">
              * Results vary by individual. Surgery is generally recommended for BMI &gt;35/40, while injectables are ideal for BMI 27-35 or pre-surgical optimization.
            </p>
          </div>
        </div>
      </section>

      {/* Medical Awareness Section */}
      <MedicalAwareness />

      {/* BMI Info Section */}
      <BMIInfoSection />

      {/* 6. CTA SECTION */}
      <section className="py-20 bg-scod text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl text-white font-bold mb-6">Is Medical Weight Loss Right for You?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Stop guessing and start treating. Book a comprehensive evaluation with Dr. Arush Sabharwal to see if you qualify for GLP-1 therapy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-scod px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center space-x-2">
                <SafeIcon icon={FiCalendar} className="w-5 h-5" />
                <span>Book Evaluation</span>
              </Link>
              <a href="tel:+918130130489" className="bg-scod border border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg flex items-center justify-center space-x-2">
                <SafeIcon icon={FiClock} className="w-5 h-5" />
                <span>Call to Inquire</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default WeightLossInjectables;