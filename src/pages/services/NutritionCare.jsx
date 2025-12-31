import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiTrendingUp, FiActivity, FiAlertCircle, FiTool, FiUsers, FiSearch, FiCalendar, FiCheckCircle, FiArrowRight, FiBarChart2, FiRefreshCw, FiShield } = FiIcons;

const NutritionCare = () => {
  const causes = [
    {
      title: "Metabolic Adaptation",
      desc: "Over time, the body fights to regain weight by lowering metabolic rate and increasing hunger hormones like Ghrelin.",
      icon: FiActivity
    },
    {
      title: "Anatomical Changes",
      desc: "The stomach pouch or stoma may stretch slightly over years, allowing for larger portion sizes than intended.",
      icon: FiRefreshCw
    },
    {
      title: "Behavioral Drift",
      desc: "Old habits like 'grazing' (eating small amounts constantly) or drinking high-calorie liquids can creep back in.",
      icon: FiUsers
    }
  ];

  const earlySigns = [
    "Feeling hungry sooner after meals (less than 3 hours)",
    "Ability to eat significantly larger portions than before",
    "Return of acid reflux or heartburn",
    "Weight plateau or gradual increase of 2-3 kgs",
    "Cravings for sweets or processed carbohydrates"
  ];

  const tools = [
    {
      title: "Diagnostic FGS",
      subtitle: "Endoscopy",
      desc: "We perform an Upper GI Endoscopy to check for pouch dilation, stoma widening, or fistulas that might permit overeating.",
      color: "bg-blue-50 text-blue-700"
    },
    {
      title: "Medical Therapy",
      subtitle: "GLP-1 Injectables",
      desc: "Modern weight loss medications (Semaglutide/Liraglutide) can be added to suppress appetite and boost metabolism without further surgery.",
      color: "bg-emerald-50 text-emerald-700"
    },
    {
      title: "Behavioral Support",
      subtitle: "Counselling",
      desc: "Our psychologists help identify emotional triggers and reset the 'mindset' required for long-term maintenance.",
      color: "bg-indigo-50 text-indigo-700"
    },
    {
      title: "Nutritional Reset",
      subtitle: "Pouch Reset Diet",
      desc: "A structured 10-day dietary program to shrink the stomach lining and reset satiety signals.",
      color: "bg-cyan-50 text-cyan-700"
    }
  ];

  const caseStudies = [
    {
      id: 1,
      profile: "Patient A (45, Female)",
      issue: "Regained 12kg, 5 years post-sleeve",
      diagnosis: "Anatomical stretching + Grazing habit",
      solution: "Prescribed GLP-1 therapy for 6 months + Nutritional counseling.",
      outcome: "Lost 10kg and stabilized weight successfully."
    },
    {
      id: 2,
      profile: "Patient B (38, Male)",
      issue: "Diabetes recurrence, weight gain",
      diagnosis: "Metabolic relapse",
      solution: "Revision surgery (Sleeve to Bypass) + Lifestyle modification.",
      outcome: "Diabetes in remission again, weight loss resumed."
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
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://brandingpioneers.co.in/scod/scod-breadcrumbs/Managing Weight Regain.webp" 
            alt="Weight Management" 
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
            className="max-w-2xl"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
              <SafeIcon icon={FiTrendingUp} className="w-5 h-5 text-emerald-300" />
              <span className="text-sm font-bold tracking-wide uppercase">Long-Term Success</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Managing <br /> <span className="text-emerald-300">Weight Regain</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed font-light">
              Weight fluctuation is normal, but significant regain doesn't have to be. We provide the medical tools, diagnostics, and support to get you back on track.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link 
                to="/contact" 
                className="bg-white text-scod px-8 py-3 rounded-full font-bold text-base hover:bg-gray-100 transition-all shadow-lg flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiCalendar} className="w-5 h-5" />
                <span>Book Regain Assessment</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. WHY IT HAPPENS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12">
            <span className="text-scod font-bold tracking-widest uppercase text-sm">Understanding The Cause</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Why Does Regain Happen?</h2>
            <p className="text-gray-600 mt-4 max-w-2xl text-lg">
              Obesity is a chronic disease. Surgery is a powerful tool, but biology and behavior can sometimes push back. It is not a failure of will; it is a signal to adjust treatment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {causes.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-scod shadow-sm mb-6">
                  <SafeIcon icon={item.icon} className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EARLY SIGNS CHECKLIST */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center space-x-3 mb-4">
                <SafeIcon icon={FiAlertCircle} className="w-6 h-6 text-scod" />
                <h2 className="text-3xl font-bold text-gray-900">Early Warning Signs</h2>
              </div>
              <p className="text-gray-600 mb-8 text-lg">
                Catching regain early makes it much easier to reverse. If you notice these signs, schedule a follow-up immediately.
              </p>
              <ul className="space-y-4">
                {earlySigns.map((sign, index) => (
                  <li key={index} className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-blue-100">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{sign}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80" alt="Doctor Consultation" className="w-full h-auto object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-scod text-white p-6 rounded-2xl shadow-xl max-w-xs">
                <p className="font-bold text-lg mb-1">Don't Wait.</p>
                <p className="text-sm text-blue-100">Early intervention prevents long-term relapse. We are here to help, not judge.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. THE TOOLKIT */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12">
            <span className="text-scod font-bold tracking-widest uppercase text-sm">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">The Regain Management Toolkit</h2>
            <p className="text-gray-600 mt-4 max-w-2xl">
              We use a multimodal approach to get you back on track, combining medical science with lifestyle support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 group`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${tool.color}`}>
                  <SafeIcon icon={FiTool} className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">{tool.subtitle}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{tool.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tool.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MONITORING & SUPPORT */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <SafeIcon icon={FiBarChart2} className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl text-white font-bold mb-2">Biometric Tracking</h3>
              <p className="text-blue-200">Regular BMI and body composition analysis to track fat mass vs. muscle mass.</p>
            </div>
            <div className="p-6 border-l border-r border-gray-700">
              <SafeIcon icon={FiSearch} className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl text-white font-bold mb-2">Lab Monitoring</h3>
              <p className="text-blue-200">Checking for vitamin deficiencies (Iron, B12, D3) which can affect metabolism and energy.</p>
            </div>
            <div className="p-6">
              <SafeIcon icon={FiUsers} className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl text-white font-bold mb-2">Support Groups</h3>
              <p className="text-blue-200">Connect with others who have navigated regain. Peer support is a proven factor in long-term success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CASE EXAMPLES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Success Stories</h2>
            <p className="text-gray-600">Real examples of overcoming weight regain (Identities protected).</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3 mb-6 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 bg-scod text-white rounded-full flex items-center justify-center font-bold">
                    {study.id}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{study.profile}</h4>
                    <span className="text-xs text-red-500 font-bold bg-red-50 px-2 py-1 rounded">{study.issue}</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold">Diagnosis</p>
                    <p className="text-gray-800 font-medium">{study.diagnosis}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold">Intervention</p>
                    <p className="text-gray-800 font-medium">{study.solution}</p>
                  </div>
                  <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                    <p className="text-xs text-emerald-600 uppercase font-bold">Outcome</p>
                    <p className="text-emerald-800 font-bold">{study.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Take Control Today</h2>
            <p className="text-xl text-gray-600 mb-8">
              Don't let shame or hesitation stop you. Our Regain Assessment Clinic is a judgment-free zone dedicated to your health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-scod text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center space-x-2" >
                <SafeIcon icon={FiShield} className="w-5 h-5" />
                <span>Book "Regain Assessment Clinic"</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default NutritionCare;