import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { 
  FiAward, FiUsers, FiHeart, FiCheck, FiGlobe, FiMapPin, 
  FiActivity, FiArrowRight, FiX, FiPhone, FiPlusCircle,
  FiChevronRight, FiUser, FiStethoscope, FiClock, FiCalendar
} = FiIcons;

const AboutClinicPage = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeSpecialty, setActiveSpecialty] = useState(0);

  // Core Values Data
  const values = [
    { title: "Patient-Centric Care", description: "We don't just treat conditions; we care for people. Every decision is made with your comfort, safety, and long-term well-being in mind.", icon: FiHeart },
    { title: "Clinical Excellence", description: "Adhering to the highest global standards of medical practice, utilizing cutting-edge technology and evidence-based surgical techniques.", icon: FiAward },
    { title: "Integrity & Transparency", description: "We believe in honest communication, clear pricing, and ethical medical practices. Trust is the foundation of our patient relationships.", icon: FiCheck },
    { title: "Global Innovation", description: "Bringing world-class metabolic care to India and beyond, constantly updating our methods with international advancements.", icon: FiGlobe }
  ];

  // Main Location Data (Delhi)
  const mainLocation = {
    city: "New Delhi",
    type: "Headquarters & Main Clinic",
    address: "Jeewan Mala Hospital, New Rohtak Road",
    description: "Our primary center offering daily OPDs, comprehensive pre-operative evaluations, and state-of-the-art surgical facilities. This is where Dr. Arush Sabharwal is available for regular consultations.",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b9af922?auto=format&fit=crop&w=800&q=80",
    schedule: "Mon - Sat: 9:00 AM - 6:00 PM"
  };

  // Visiting Locations Data
  const visitingLocations = [
    {
      city: "Noida",
      type: "Visiting Surgery Center",
      address: "Sector 51, Noida, Uttar Pradesh",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
      note: "Scheduled Surgeries & Weekly OPDs"
    },
    {
      city: "Chandigarh",
      type: "Visiting Surgery Center",
      address: "Sector 34-A, Chandigarh",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80",
      note: "Monthly OPDs & Scheduled Surgeries"
    },
    {
      city: "Tanzania, Africa",
      type: "International Center",
      address: "Dar es Salaam, Tanzania",
      image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&w=600&q=80",
      note: "Quarterly Surgical Camps"
    }
  ];

  // Team Data
  const team = [
    { name: "Dr. Arush Sabharwal", role: "Chairman & Chief Surgeon", bio: "A pioneer in bariatric & metabolic surgery with over 15 years of global experience.", image: "https://brandingpioneers.co.in/scod/dr-arush-final-image.png" },
    { name: "Dt. Simran Saini", role: "Head of Nutrition", bio: "Expert in post-bariatric nutrition and metabolic lifestyle management.", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80" },
    { name: "Dr. Priya Kapoor", role: "Clinical Psychologist", bio: "Specializes in behavioral therapy and emotional support for weight loss patients.", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80" },
    { name: "Dr. Rajesh Verma", role: "Senior Consultant", bio: "Specialist in laparoscopic procedures and patient safety protocols.", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80" }
  ];

  // Allied Specialties Data
  const alliedSpecialties = [
    {
      specialty: "Endocrinology & Diabetology",
      desc: "Comprehensive management of hormonal imbalances and diabetes care.",
      doctors: [
        { name: "Dr. Meera Malhotra", degrees: "MD, DM (Endocrinology)", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80" },
        { name: "Dr. Suresh Gupta", degrees: "MD (Medicine), DNB", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80" }
      ]
    },
    {
      specialty: "Plastic & Reconstructive Surgery",
      desc: "Expert body contouring and reconstructive procedures post-weight loss.",
      doctors: [
        { name: "Dr. Ananya Singh", degrees: "MCh (Plastic Surgery)", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=300&q=80" }
      ]
    },
    {
      specialty: "Gastroenterology",
      desc: "Advanced care for digestive system disorders and liver health.",
      doctors: [
        { name: "Dr. Vikram Reddy", degrees: "MD, DM (Gastro)", image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=300&q=80" },
        { name: "Dr. Neha Kapoor", degrees: "MD (Medicine)", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80" }
      ]
    },
    {
      specialty: "Cardiology & Critical Care",
      desc: "Heart health monitoring and critical care support for surgical patients.",
      doctors: [
        { name: "Dr. Rohan Das", degrees: "MD, DM (Cardiology)", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80" }
      ]
    },
    {
      specialty: "Physiotherapy & Rehabilitation",
      desc: "Physical therapy to enhance mobility and recovery post-surgery.",
      doctors: [
        { name: "Dr. Amit Kumar", degrees: "BPT, MPT (Sports)", image: "https://images.unsplash.com/photo-1612916628679-66821a81232c?auto=format&fit=crop&w=300&q=80" },
        { name: "Dr. Suman Verma", degrees: "BPT, MPT (Ortho)", image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=300&q=80" }
      ]
    },
    {
      specialty: "Anesthesiology",
      desc: "Safe and effective anesthesia management for all surgical procedures.",
      doctors: [
        { name: "Dr. Rahul Sharma", degrees: "MD (Anaesthesia)", image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=300&q=80" },
        { name: "Dr. Preeti Jain", degrees: "DA, DNB", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80" }
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 font-sans bg-white text-gray-900"
    >
      {/* 1. HERO SECTION - About SCOD Summary */}
      <section className="relative py-12 bg-blue-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/50 skew-x-12 translate-x-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-px w-12 bg-scod"></div>
                <span className="uppercase tracking-widest text-sm font-bold text-scod">About SCOD</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
                Global Leaders in <br /> <span className="text-scod">Metabolic Wellness</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                The Surgical Center for Obesity and Diabetes (SCOD) is a premier institute dedicated to fighting the global epidemic of obesity and diabetes. Founded by Dr. Arush Sabharwal, SCOD combines a century-old medical legacy with state-of-the-art surgical innovation.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                With our <strong>Headquarters in New Delhi</strong> and visiting surgical centers in <strong>Noida, Chandigarh, and Tanzania</strong>, we are committed to providing accessible, world-class care to patients across geographies.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#locations" className="bg-scod text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg">
                  Find a Center Near You
                </a>
              </div>
            </motion.div>

            {/* Right Column: Clinic Image - Height Increased */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative z-10 h-[450px] md:h-[500px] lg:h-[650px]">
                <img 
                  src="https://brandingpioneers.co.in/scod/scod-clinic.webp" 
                  onError={(e) => {e.target.src='https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80'}} 
                  alt="SCOD Clinic Interior" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="font-bold text-2xl mb-1">State-of-the-Art Facilities</p>
                  <p className="text-lg opacity-90 font-medium">Designed for patient comfort and safety</p>
                </div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-scod/5 rounded-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. FAMILY LEGACY / STORY */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Story Text */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-1 bg-scod"></div>
                <span className="text-scod font-bold uppercase tracking-widest">Our Heritage</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                A Century of <br/> <span className="text-scod">Healing</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  The story begins in 1919 with <span className="font-bold text-gray-900">Lala Jeevanmal Sabharwal</span>, a station master in Lahore, who was inspired by Mahatma Gandhi's call for service through health and education. This inspiration led to the family's first doctor, <span className="font-bold text-gray-900">Dr. Bodhraj</span>.
                </p>
                <p>
                  Since then, a tradition was established: every generation would dedicate themselves to medicine. Following the partition, the family established "Jeevan" hospitals across Delhi, becoming a pillar of healthcare in the capital.
                </p>
                <div className="p-6 bg-blue-50 border-l-4 border-scod rounded-r-lg mt-6">
                  <p className="font-medium text-gray-800 italic">
                    "Today, Dr. Arush Sabharwal carries this torch forward as a specialist in Bariatric Surgery, blending generations of compassionate care with modern surgical excellence."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Visual */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 h-[600px]">
                <img 
                  src="https://brandingpioneers.co.in/scod/sabharwal-family.webp" 
                  alt="Medical History" 
                  className="w-full h-full object-cover  transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="font-bold text-2xl mb-2">Since 1919</p>
                  <p className="text-gray-300">Four generations of medical service to humanity.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES & PHILOSOPHY */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-scod font-bold tracking-widest uppercase text-sm">Our Philosophy</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Core Values</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              The principles that guide every surgery, every consultation, and every patient interaction at SCOD.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-scod mb-6 group-hover:bg-scod group-hover:text-white transition-colors">
                  <SafeIcon icon={value.icon} className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PATIENT-CENTRIC CARE STATEMENT */}
      <section className="py-12 bg-scod text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <SafeIcon icon={FiActivity} className="w-full h-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Vector Image */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden lg:flex justify-center items-center"
            >
              <img 
                src="https://img.freepik.com/free-vector/doctor-examining-patient-clinic-illustrated_23-2148856559.jpg?w=900&t=st=1698765432~exp=1698766032~hmac=..." 
                onError={(e) => {e.target.src='https://cdn-icons-png.flaticon.com/512/3063/3063822.png'}}
                alt="Patient Care Illustration" 
                className="max-w-md w-full drop-shadow-2xl rounded-3xl bg-white/10 p-4 backdrop-blur-sm"
              />
            </motion.div>
            {/* Right Column: Content */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-right flex flex-col items-end"
            >
              <div className="flex items-center space-x-3 mb-6 bg-white/10 px-4 py-2 rounded-full">
                <SafeIcon icon={FiHeart} className="w-6 h-6 text-blue-300" />
                <span className="font-bold text-white uppercase tracking-widest text-sm">Our Promise</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight">
                "We treat the person,<br /> not just the chart."
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mb-8">
                At SCOD, patient-centric care means we walk the entire journey with you. From the anxiety of the first consultation to the triumph of your long-term transformation, our team is your partner. We customize every treatment plan because no two bodies—and no two lives—are the same.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. MEET THE TEAM */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Experts</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A multidisciplinary team of surgeons, nutritionists, and psychologists dedicated to your holistic transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="h-64 overflow-hidden bg-gray-100">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-scod font-medium text-sm mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ALLIED SPECIALTIES SECTION - Redesigned Interactive Grid */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-scod font-bold tracking-widest uppercase text-sm">Comprehensive Care</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Allied Specialties</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              A multidisciplinary ecosystem. We collaborate with top specialists to ensure every aspect of your health is covered under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left: Specialty Navigation */}
            <div className="lg:col-span-4 space-y-2">
              {alliedSpecialties.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSpecialty(index)}
                  className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                    activeSpecialty === index
                      ? 'bg-scod text-white shadow-lg shadow-blue-900/20'
                      : 'bg-gray-50 text-gray-600 hover:bg-white hover:shadow-md border border-transparent hover:border-gray-100'
                  }`}
                >
                  <span className="font-bold text-lg">{item.specialty}</span>
                  {activeSpecialty === index && <SafeIcon icon={FiChevronRight} className="w-5 h-5" />}
                </button>
              ))}
            </div>

            {/* Right: Doctor Display Area */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSpecialty}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-50 rounded-3xl p-8 border border-gray-100 h-full"
                >
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-white rounded-xl shadow-sm text-scod">
                         <SafeIcon icon={FiStethoscope} className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{alliedSpecialties[activeSpecialty].specialty}</h3>
                        <p className="text-gray-500 text-sm mt-1">{alliedSpecialties[activeSpecialty].desc}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {alliedSpecialties[activeSpecialty].doctors.map((doc, idx) => (
                      <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-4 hover:shadow-md transition-all group">
                        <div className="relative flex-shrink-0">
                          <img
                            src={doc.image}
                            alt={doc.name}
                            className="w-20 h-20 rounded-2xl object-cover border-2 border-gray-50 group-hover:border-blue-100 transition-colors"
                          />
                          <div className="absolute -bottom-2 -right-2 bg-scod text-white p-1.5 rounded-lg shadow-sm">
                            <SafeIcon icon={FiUser} className="w-3 h-3" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg leading-tight mb-1">{doc.name}</h4>
                          <p className="text-sm text-scod font-bold mb-2">{doc.degrees}</p>
                          <span className="inline-block px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md font-medium">Senior Consultant</span>
                        </div>
                      </div>
                    ))}
                  </div>
                   {/* Contextual Info */}
                   <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 gap-4">
                      <p className="flex items-center">
                        <SafeIcon icon={FiActivity} className="w-4 h-4 mr-2" />
                        Integrated care with bariatric protocols.
                      </p>
                      <Link to="/contact" className="font-bold text-scod hover:underline flex items-center">
                        Book Appointment <SafeIcon icon={FiArrowRight} className="ml-1 w-4 h-4" />
                      </Link>
                   </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 7. GLOBAL PRESENCE (LOCATIONS) */}
      <section id="locations" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-scod font-bold tracking-widest uppercase text-sm">Our Footprint</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Centers of Excellence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Headquartered in New Delhi with visiting surgical centers across India and Africa to bring expert care closer to you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Center - Prominent Display */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-12 relative rounded-3xl overflow-hidden shadow-xl group h-[400px] lg:h-[500px]"
            >
              <img src={mainLocation.image} alt={mainLocation.city} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent p-8 md:p-12 flex flex-col justify-end">
                <div className="max-w-3xl">
                  <div className="inline-block px-4 py-1 bg-scod text-white text-sm font-bold rounded-full mb-4">
                    {mainLocation.type}
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">{mainLocation.city}</h3>
                  <p className="text-gray-200 text-lg mb-6 leading-relaxed hidden md:block">{mainLocation.description}</p>
                  <div className="flex flex-col md:flex-row gap-6 text-white/90">
                    <div className="flex items-start gap-3">
                      <SafeIcon icon={FiMapPin} className="w-6 h-6 text-scod shrink-0" />
                      <div>
                        <p className="font-semibold text-white">Address</p>
                        <p className="text-sm opacity-80">{mainLocation.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <SafeIcon icon={FiClock} className="w-6 h-6 text-scod shrink-0" />
                      <div>
                        <p className="font-semibold text-white">OPD Hours</p>
                        <p className="text-sm opacity-80">{mainLocation.schedule}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Visiting Centers */}
            <div className="lg:col-span-12 mt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <SafeIcon icon={FiGlobe} className="w-6 h-6 mr-2 text-scod" />
                Visiting Surgical Centers
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {visitingLocations.map((loc, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 flex flex-col"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <img src={loc.image} alt={loc.city} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800">
                        {loc.type}
                      </div>
                    </div>
                    <div className="p-6 flex-grow">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{loc.city}</h4>
                      <p className="text-gray-500 text-sm mb-4 flex items-start gap-2">
                        <SafeIcon icon={FiMapPin} className="w-4 h-4 mt-0.5 shrink-0" />
                        {loc.address}
                      </p>
                      <div className="pt-4 border-t border-gray-100 mt-auto">
                        <p className="text-scod font-medium text-sm flex items-center">
                          <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-2" />
                          {loc.note}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
              <button 
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-white hover:text-black transition-all"
              >
                <SafeIcon icon={FiX} className="w-6 h-6" />
              </button>
              <video 
                src="https://brandingpioneers.co.in/scod/Dr.Arush%20Sabarwal.mp4" 
                className="w-full h-full object-cover" 
                controls 
                autoPlay 
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AboutClinicPage;