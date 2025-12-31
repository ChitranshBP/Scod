import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiUser, FiMessageSquare, FiArrowRight, FiGlobe } = FiIcons;

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactCards = [
    { icon: FiPhone, title: "Call Us", info: ["+91-9873927874", "+91-8130130489"], action: "Call Now", link: "tel:+919873927874", color: "bg-blue-50 text-blue-600" },
    { icon: FiMail, title: "Email Us", info: ["info@scodmedical.com", "patients@scodmedical.com"], action: "Send Email", link: "mailto:info@scodmedical.com", color: "bg-emerald-50 text-emerald-600" },
    { icon: FiMapPin, title: "Headquarters", info: ["87, Paschimi Marg", "Vasant Vihar, New Delhi"], action: "Get Directions", link: "https://maps.google.com", color: "bg-indigo-50 text-indigo-600" },
    { icon: FiClock, title: "Working Hours", info: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"], action: "Book Appointment", link: "#appointment", color: "bg-orange-50 text-orange-600" }
  ];

  const locations = [
    { city: "Vasant Vihar, New Delhi", address: "87, Paschimi Marg, Block D, Vasant Vihar, New Delhi, 110057", phone: "+91-9873927874" },
    { city: "Karol Bagh, New Delhi", address: "Pal Mohan Bhavan, 3, New Rohtak Rd, Block 66A, Karol Bagh, Delhi, 110005", phone: "+91-8130130489" },
    { city: "Noida, UP", address: "SCOD Clinic, Sector 51, Noida, Uttar Pradesh", phone: "+91-9873927874" },
    { city: "Tanzania, Africa", address: "Dar es Salaam, Tanzania", phone: "+255 754 000 000" }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen pt-20 font-sans text-gray-900" >
      {/* 1. HERO SECTION */}
      <section className="relative h-[500px] flex items-center bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=1920&q=80" alt="Contact Us" className="w-full h-full object-cover object-center opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-scod/95 via-scod/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl" >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
              <SafeIcon icon={FiMessageSquare} className="w-5 h-5 text-emerald-300" />
              <span className="text-sm font-bold tracking-wide uppercase">Get In Touch</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white"> We're Here to <br /> <span className="text-emerald-300">Help You.</span> </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed"> Have questions about surgery, costs, or appointments? Our team is ready to guide you. </p>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTACT CARDS */}
      <section className="py-16 bg-white relative -mt-20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 text-left group" >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${card.color} transition-transform group-hover:scale-110`}>
                  <SafeIcon icon={card.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <div className="space-y-1 mb-6 min-h-[40px]">
                  {card.info.map((line, i) => (
                    <p key={i} className="text-gray-600 text-sm">{line}</p>
                  ))}
                </div>
                <a href={card.link} className="inline-flex items-center text-scod font-bold text-sm hover:text-blue-800 transition-colors">
                  {card.action}
                  <SafeIcon icon={FiArrowRight} className="ml-2 w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FORM & MAP SECTION */}
      <section className="py-20 bg-gray-50" id="appointment">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Contact Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true}}>
              <div className="mb-8 text-left">
                <span className="text-scod font-bold tracking-widest uppercase text-sm">Consultation</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Send Us a Message</h2>
                <p className="text-gray-600 mt-4"> Fill out the form below to request an appointment. We typically respond within 24 hours. </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-scod focus:border-transparent outline-none transition-all" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-scod focus:border-transparent outline-none transition-all" placeholder="+91 ..." required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select name="subject" value={formData.subject} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-scod focus:border-transparent outline-none transition-all" >
                    <option value="">Select Topic</option>
                    <option value="New Appointment">New Appointment</option>
                    <option value="Surgery Inquiry">Surgery Inquiry</option>
                    <option value="International Patient">International Patient</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleInputChange} rows="4" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-scod focus:border-transparent outline-none transition-all" placeholder="How can we help you?" required ></textarea>
                </div>
                <button type="submit" className="w-full bg-scod text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center">
                  <SafeIcon icon={FiSend} className="w-5 h-5 mr-2" /> Send Message
                </button>
              </form>
            </motion.div>

            {/* Right: Locations & Map */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col h-full text-left">
              <div className="mb-8">
                <span className="text-scod font-bold tracking-widest uppercase text-sm">Our Network</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Visit Our Centers</h2>
              </div>
              <div className="bg-gray-200 rounded-3xl overflow-hidden h-64 mb-8 relative shadow-md">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80" alt="Locations Map" className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold shadow-xl hover:scale-105 transition-transform flex items-center">
                    <SafeIcon icon={FiMapPin} className="w-5 h-5 text-scod mr-2" /> View on Google Maps
                  </a>
                </div>
              </div>
              <div className="grid gap-4 flex-grow">
                {locations.map((loc, index) => (
                  <div key={index} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-start hover:border-scod transition-colors group text-left">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-scod flex-shrink-0 mr-4 group-hover:bg-scod group-hover:text-white transition-colors">
                      <SafeIcon icon={FiGlobe} className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{loc.city}</h4>
                      <p className="text-sm text-gray-600 mt-1">{loc.address}</p>
                      <a href={`tel:${loc.phone}`} className="text-sm font-bold text-scod mt-2 inline-block hover:underline">{loc.phone}</a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. EMERGENCY CTA */}
      <section className="py-16 bg-scod text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-4">Medical Emergency?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl"> For post-operative emergencies, please call our 24/7 helpline immediately. </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+919873927874" className="inline-flex items-center bg-white text-scod px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg">
                <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" /> Call: +91-9873927874
              </a>
              <a href="tel:+918130130489" className="inline-flex items-center bg-white text-scod px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg">
                <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" /> Call: +91-8130130489
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;