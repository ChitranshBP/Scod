import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiGlobe, FiMapPin, FiCheck, FiPhone, FiCalendar, FiBriefcase, FiHome, FiUser, FiActivity, FiArrowRight, FiPlane, FiFileText, FiMessageCircle, FiShield, FiSun, FiHeart, FiUsers, FiAward, FiDollarSign } = FiIcons;

const InternationalPatients = () => {
  const whyChooseSCOD = [
    {
      icon: FiAward,
      title: "Global Expertise",
      desc: "Led by Dr. Arush Sabharwal, a surgeon with international fellowships from USA, France, and Australia."
    },
    {
      icon: FiDollarSign,
      title: "Cost Advantage",
      desc: "World-class treatment at 60-80% less cost compared to US, UK, or UAE, with transparent pricing."
    },
    {
      icon: FiActivity,
      title: "Advanced Technology",
      desc: "We use the latest 4K laparoscopic systems and FDA-approved staplers for maximum safety."
    },
    {
      icon: FiBriefcase,
      title: "Concierge Care",
      desc: "A dedicated international team handles your logistics, appointments, and non-medical needs."
    }
  ];

  const packages = [
    { label: "Airport Transfer", detail: "Complimentary VIP Pick & Drop" },
    { label: "Hospital Stay", detail: "Private Deluxe Room Included" },
    { label: "Pre-Op Evaluation", detail: "Complete Cardiac & Metabolic Profile" },
    { label: "Surgery", detail: "All OT Charges, Consumables & Surgeon Fees" },
    { label: "Medication", detail: "Discharge Kit & Initial Supplements" },
    { label: "Post-Op Care", detail: "Telemedicine Follow-up Back Home" }
  ];

  const logistics = [
    {
      title: "Visa Assistance",
      icon: FiFileText,
      desc: "We provide official medical invitation letters to expedite your medical visa processing for you and your attendant."
    },
    {
      title: "Accommodation",
      icon: FiHome,
      desc: "We have partnerships with hotels and guest houses near the clinic, ranging from budget-friendly to 5-star luxury."
    },
    {
      title: "Language Support",
      icon: FiMessageCircle,
      desc: "Communication is never a barrier. We offer interpretation services for Arabic, French, Swahili, and Russian speakers."
    }
  ];

  const patientCollage = [
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80",
    "https://brandingpioneers.co.in/scod/patient2-scod.webp",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    "https://brandingpioneers.co.in/scod/patient4-scod.webp",
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
    "https://brandingpioneers.co.in/scod/patient1-scod.webp"
  ];

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
            src="https://brandingpioneers.co.in/scod/scod-breadcrumbs/International Patient Guide.webp" 
            alt="International Medical Travel" 
            className="w-full h-full object-cover object-center opacity-40" 
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
              <SafeIcon icon={FiGlobe} className="w-5 h-5 text-emerald-300" />
              <span className="text-sm font-bold tracking-wide uppercase">International Patient Center</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              World-Class Care <br /> <span className="text-emerald-300">Global Destination</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl leading-relaxed mb-8">
              Seamless medical travel to India. We combine surgical excellence with compassionate hospitality to make your healing journey comfortable and successful.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 items-start">
              <Link 
                to="/contact" 
                className="bg-white text-scod px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiPlane} className="w-5 h-5" />
                <span>Get a Quote</span>
              </Link>
              <a 
                href="mailto:international@scodmedical.com" 
                className="bg-transparent border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiMessageCircle} className="w-5 h-5" />
                <span>Talk to Coordinator</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. WHY CHOOSE SCOD */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <span className="text-scod font-bold tracking-widest uppercase text-sm">The SCOD Advantage</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Why Choose Us?</h2>
            <p className="text-gray-600 mt-4 max-w-2xl">
              We understand the anxiety of traveling for surgery. Here is why patients from over 20 countries trust us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseSCOD.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-scod hover:shadow-xl transition-all duration-300 group text-left"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 mr-auto group-hover:bg-scod group-hover:text-white transition-colors text-scod">
                  <SafeIcon icon={item.icon} className="w-8 h-8" />
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

      {/* 3. FOCUS: TANZANIA & EAST AFRICA */}
      <section className="py-20 bg-scod text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full mb-6 border border-white/20">
                <SafeIcon icon={FiMapPin} className="w-4 h-4 text-emerald-300" />
                <span className="text-xs font-bold tracking-wide uppercase text-emerald-100">Regional Focus</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Trusted in <br /> <span className="text-emerald-300">Tanzania & East Africa</span>
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                We have a special connection with East Africa. Dr. Arush Sabharwal regularly conducts OPDs in Dar es Salaam, making us the preferred choice for patients from Kenya, Uganda, and Tanzania.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center bg-white/10 px-4 py-3 rounded-lg backdrop-blur-sm border border-white/5">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                  <span>Regular OPDs in Dar es Salaam</span>
                </li>
                <li className="flex items-center bg-white/10 px-4 py-3 rounded-lg backdrop-blur-sm border border-white/5">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                  <span>Dedicated Swahili-speaking coordinators</span>
                </li>
                <li className="flex items-center bg-white/10 px-4 py-3 rounded-lg backdrop-blur-sm border border-white/5">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                  <span>Direct flight connectivity to New Delhi</span>
                </li>
              </ul>
              
              <Link to="/contact" className="inline-flex items-center bg-emerald-500 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-600 transition-all shadow-lg">
                <span>Check Next OPD Dates</span>
                <SafeIcon icon={FiCalendar} className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&w=800&q=80" alt="SCOD Africa Connection" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Bridging Continents</h3>
                  <p className="text-blue-200">Bringing advanced metabolic care to your doorstep.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. PACKAGES & EXPECTATIONS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <span className="text-scod font-bold tracking-widest uppercase text-sm">Transparent Pricing</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">All-Inclusive Packages</h2>
            <p className="text-gray-600 mt-4 max-w-2xl">
              No hidden costs. Our international packages are designed to cover your entire medical journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: index * 0.05 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-scod flex-shrink-0">
                  <SafeIcon icon={FiCheck} className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide">{pkg.label}</h4>
                  <p className="text-gray-600 font-medium">{pkg.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LOGISTICS: VISA, STAY, LANGUAGE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-scod font-bold tracking-widest uppercase text-sm">Hassle-Free Travel</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">We Handle the Logistics</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Traveling for surgery can be daunting. Our concierge team takes care of the paperwork, stay, and communication so you can focus solely on your recovery.
              </p>
              
              <div className="space-y-8">
                {logistics.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0 mr-4">
                      <SafeIcon icon={item.icon} className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{item.title}</h4>
                      <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80" alt="Luxury Hotel" className="rounded-2xl shadow-lg w-full h-64 object-cover transform translate-y-8" />
                <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80" alt="Travel" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PATIENT COLLAGE SECTION */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12">
            <span className="text-scod font-bold tracking-widest uppercase text-sm">Global Smiles</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Our International Family</h2>
          </div>
          
          <div className="columns-1 md:columns-3 gap-6 space-y-6">
            {patientCollage.map((src, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg border border-gray-100 group relative"
              >
                <img src={src} alt="Happy Patient" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-bold tracking-wide">SCOD Patient</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="py-20 bg-scod text-white text-left">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Your Medical Journey</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              Get a free treatment plan and cost estimate. Our international team will respond within 24 hours.
            </p>
            
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl max-w-lg border border-white/20">
              <form className="space-y-4 text-left">
                <div>
                  <label className="text-sm font-bold text-blue-100 ml-1">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-300" placeholder="Your Name" />
                </div>
                <div>
                  <label className="text-sm font-bold text-blue-100 ml-1">Country</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-300">
                    <option>Select Country</option>
                    <option>Tanzania</option>
                    <option>Kenya</option>
                    <option>Uganda</option>
                    <option>USA/UK</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-bold text-blue-100 ml-1">Phone / WhatsApp</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-300" placeholder="+1 ..." />
                </div>
                <button className="w-full bg-emerald-500 text-white font-bold py-4 rounded-lg hover:bg-emerald-600 transition-all shadow-lg mt-2">
                  Enquire Now
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default InternationalPatients;