import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiActivity, FiCheck, FiArrowRight, FiClock, FiDroplet, FiPieChart, FiCoffee, FiSmile, FiHeart, FiClipboard, FiAlertCircle, FiCalendar, FiUsers, FiBookOpen } = FiIcons;

const ObesityManagement = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      id: 0,
      title: "Phase 1: Clear Liquids",
      duration: "Days 1-2 Post-Op",
      icon: FiDroplet,
      focus: "Hydration & Healing",
      allowed: ["Water", "Clear Broth", "Sugar-free Gelatin", "Diluted Fruit Juice"],
      avoid: ["Carbonated drinks", "Caffeine", "Sugary drinks", "Solid food"],
      tip: "Sip slowly. Aim for 30ml every 15 minutes."
    },
    {
      id: 1,
      title: "Phase 2: Full Liquids",
      duration: "Days 3-14 Post-Op",
      icon: FiCoffee,
      focus: "Protein Intake",
      allowed: ["Protein Shakes", "Skim Milk", "Thin Low-fat Yogurt", "Strained Cream Soup"],
      avoid: ["Chunks of food", "seeds", "skins", "High-fat liquids"],
      tip: "Protein is priority. Aim for 60g daily via shakes."
    },
    {
      id: 2,
      title: "Phase 3: Pureed/Soft",
      duration: "Weeks 3-4 Post-Op",
      icon: FiPieChart,
      focus: "Texture Adaptation",
      allowed: ["Scrambled Eggs", "Cottage Cheese", "Pureed Chicken/Fish", "Mashed Soft Fruit"],
      avoid: ["Bread", "Rice", "Raw Vegetables", "Tough Meats"],
      tip: "Chew thoroughly. Consistency should be like baby food."
    },
    {
      id: 3,
      title: "Phase 4: Solid Foods",
      duration: "Week 5 Onwards",
      icon: FiActivity,
      focus: "Long-term Maintenance",
      allowed: ["Lean Meats", "Cooked Vegetables", "Whole Grains", "Fruits"],
      avoid: ["Processed Sugars", "Fried Foods", "Grazing/Snacking"],
      tip: "Eat small portions. Stop before you feel full."
    }
  ];

  const sampleMenu = [
    { time: "8:00 AM", meal: "Breakfast", item: "1 Scrambled Egg + 1/2 slice Whole Wheat Toast" },
    { time: "11:00 AM", meal: "Snack", item: "High-Protein Yogurt or Protein Shake" },
    { time: "1:30 PM", meal: "Lunch", item: "Grilled Chicken Breast (3oz) + Steamed Broccoli" },
    { time: "4:30 PM", meal: "Snack", item: "Cottage Cheese or Apple Slices" },
    { time: "7:30 PM", meal: "Dinner", item: "Baked Fish + Quinoa + Green Beans" }
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
            src="https://brandingpioneers.co.in/scod/scod-breadcrumbs/Diet,Nutrition & Counselling,.webp" 
            alt="Healthy Nutrition" 
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
              <SafeIcon icon={FiHeart} className="w-5 h-5 text-emerald-300" />
              <span className="text-sm font-bold tracking-wide uppercase">Holistic Care</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Diet, Nutrition & <br /> <span className="text-emerald-300">Counselling</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed mb-8">
              Surgery is the tool; nutrition is the fuel. Our comprehensive program combines medical nutrition therapy with behavioral counselling to ensure lifelong success.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link 
                to="/contact" 
                className="bg-white text-scod px-8 py-3 rounded-full font-bold text-base hover:bg-gray-100 transition-all shadow-lg flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiClipboard} className="w-5 h-5" />
                <span>Book Diet Consult</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE ROLE OF DIET */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-px w-12 bg-scod"></div>
                <span className="uppercase tracking-widest text-sm font-bold text-scod">The Foundation</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                More Than Just <br/> <span className="text-scod">Calories In, Calories Out</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                For patients with obesity and diabetes, food acts as a hormonal signal. The right nutrition can lower insulin resistance, reduce inflammation, and enhance surgical outcomes.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At SCOD, we don't believe in "dieting" in the traditional sense. We teach <strong>Metabolic Nutrition</strong>—eating to fuel your body's recovery and maintain a healthy weight set-point long-term.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mt-1">
                    <SafeIcon icon={FiCheck} className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">Pre-Op Optimization</h4>
                    <p className="text-sm text-gray-500">Liver-shrinking diet to ensure surgical safety.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mt-1">
                    <SafeIcon icon={FiCheck} className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">Post-Op Recovery</h4>
                    <p className="text-sm text-gray-500">Phased reintroduction of foods to protect the stomach.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-50">
                <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80" alt="Healthy Food Plate" className="w-full h-auto object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs hidden md:block">
                <p className="text-scod font-bold text-4xl mb-1">80g</p>
                <p className="text-gray-600 text-sm">Daily protein target for optimal recovery.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. POST-OP DIET PHASES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-scod font-bold tracking-widest uppercase text-sm">Recovery Roadmap</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Post-Surgery Diet Phases</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Your stomach needs time to heal. We guide you through a structured 4-phase progression from liquids to solids.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Phase Navigation */}
            <div className="lg:col-span-4 space-y-3">
              {phases.map((phase, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActivePhase(idx)}
                  className={`w-full text-left p-5 rounded-xl transition-all duration-300 flex items-center border-2 ${activePhase === idx ? 'bg-white border-scod shadow-md' : 'bg-white/50 border-transparent hover:bg-white hover:border-gray-200'}`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${activePhase === idx ? 'bg-scod text-white' : 'bg-gray-100 text-gray-400'}`}>
                    <SafeIcon icon={phase.icon} className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className={`font-bold ${activePhase === idx ? 'text-gray-900' : 'text-gray-500'}`}>{phase.title}</h4>
                    <p className="text-xs text-gray-400">{phase.duration}</p>
                  </div>
                  {activePhase === idx && <SafeIcon icon={FiArrowRight} className="ml-auto text-scod" />}
                </button>
              ))}
            </div>

            {/* Phase Content */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activePhase}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 h-full"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">{phases[activePhase].title}</h3>
                      <p className="text-scod font-medium">{phases[activePhase].duration}</p>
                    </div>
                    <div className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-bold border border-emerald-100">
                      Focus: {phases[activePhase].focus}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                        <SafeIcon icon={FiCheck} className="text-emerald-500 mr-2" />
                        Allowed Foods
                      </h4>
                      <ul className="space-y-2">
                        {phases[activePhase].allowed.map((item, i) => (
                          <li key={i} className="flex items-center text-gray-600 bg-gray-50 px-3 py-2 rounded-lg text-sm">
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                        <SafeIcon icon={FiAlertCircle} className="text-red-500 mr-2" />
                        Foods to Avoid
                      </h4>
                      <ul className="space-y-2">
                        {phases[activePhase].avoid.map((item, i) => (
                          <li key={i} className="flex items-center text-gray-600 bg-red-50 px-3 py-2 rounded-lg text-sm">
                            <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-scod p-4 rounded-r-lg">
                    <p className="text-blue-800 text-sm font-medium flex items-start">
                      <SafeIcon icon={FiBookOpen} className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      <strong>Doctor's Tip:</strong> {phases[activePhase].tip}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROTEIN & HYDRATION TARGETS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white shadow-lg">
              <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <SafeIcon icon={FiActivity} className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-4xl font-bold mb-2">60-80g</h3>
              <p className="text-blue-100 font-medium mb-4">Daily Protein Goal</p>
              <p className="text-sm text-blue-50 opacity-90">Essential for wound healing and preserving muscle mass during rapid weight loss.</p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-8 text-white shadow-lg">
              <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <SafeIcon icon={FiDroplet} className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-4xl font-bold mb-2">2.5 L</h3>
              <p className="text-emerald-100 font-medium mb-4">Daily Water Intake</p>
              <p className="text-sm text-emerald-50 opacity-90">Dehydration is the #1 cause of re-admission. Sip constantly throughout the day.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 text-white shadow-lg">
              <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <SafeIcon icon={FiPieChart} className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-4xl font-bold mb-2">Daily</h3>
              <p className="text-purple-100 font-medium mb-4">Vitamins & Minerals</p>
              <p className="text-sm text-purple-50 opacity-90">Multivitamins, Calcium, and Iron are non-negotiable for lifelong health.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SAMPLE MENU & SNACKS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Sample Menu: Solid Phase</h2>
            <p className="text-gray-600 mt-2">A balanced day of eating for long-term weight maintenance.</p>
          </div>
          <div className="space-y-4">
            {sampleMenu.map((slot, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center justify-between hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-4 mb-2 sm:mb-0 w-full sm:w-auto">
                  <div className="px-3 py-1 bg-blue-50 text-scod rounded text-sm font-bold w-24 text-center">
                    {slot.time}
                  </div>
                  <span className="font-bold text-gray-900">{slot.meal}</span>
                </div>
                <div className="text-gray-600 text-sm sm:text-right w-full sm:w-auto pl-4 sm:pl-0 border-l-2 sm:border-l-0 border-gray-100 sm:border-transparent">
                  {slot.item}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 italic">
              * Portion sizes will vary based on individual tolerance and stage of recovery.
            </p>
          </div>
        </div>
      </section>

      {/* 6. COUNSELLING SECTION */}
      <section className="py-20 bg-orange-50 border-y border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full mb-6 border border-orange-100 shadow-sm">
                <SafeIcon icon={FiSmile} className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-bold text-orange-700 uppercase tracking-wide">Mind & Behavior</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Healing Your Relationship <br/> with Food
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Surgery changes your stomach, but not your brain. Emotional eating, stress triggers, and old habits can resurface. Our behavioural counselling is designed to build mental resilience.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <SafeIcon icon={FiCheck} className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Identifying emotional triggers vs. physical hunger</span>
                </li>
                <li className="flex items-start">
                  <SafeIcon icon={FiCheck} className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Managing stress without using food as a coping mechanism</span>
                </li>
                <li className="flex items-start">
                  <SafeIcon icon={FiCheck} className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Support groups to share experiences and stay motivated</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100">
                <SafeIcon icon={FiUsers} className="w-10 h-10 text-orange-500 mb-4" />
                <h4 className="font-bold text-gray-900">Group Support</h4>
                <p className="text-sm text-gray-500 mt-2">Weekly meetings with fellow patients.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 translate-y-8">
                <SafeIcon icon={FiHeart} className="w-10 h-10 text-orange-500 mb-4" />
                <h4 className="font-bold text-gray-900">1-on-1 Therapy</h4>
                <p className="text-sm text-gray-500 mt-2">Private sessions with psychologists.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="py-20 bg-scod text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-6">Need Expert Guidance?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Whether you are preparing for surgery or need help getting back on track, our nutritionists and counsellors are here for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-scod px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center space-x-2" >
                <SafeIcon icon={FiCalendar} className="w-5 h-5" />
                <span>Book Nutrition Consult</span>
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all shadow-lg flex items-center justify-center space-x-2" >
                <SafeIcon icon={FiUsers} className="w-5 h-5" />
                <span>Join Support Group</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ObesityManagement;