import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiPhone, FiMail, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiArrowRight } = FiIcons;

const Footer = () => {
  const socialLinks = [
    { icon: FiFacebook, href: "https://www.facebook.com/scodllp/", label: "Facebook" },
    // { icon: FiTwitter, href: "#", label: "Twitter" },
    { icon: FiInstagram, href: "https://www.instagram.com/scodclinic/", label: "Instagram" },
    { icon: FiLinkedin, href: "https://in.linkedin.com/company/scodclinic", label: "LinkedIn" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About SCOD Clinic", path: "/about-clinic" },
    { name: "Treatments", path: "/services" },
    { name: "Plant-Based Nutrition (FGS)", path: "/feel-great-system" },
    { name: "Patient Journey", path: "/patient-journey" },
    { name: "Resources & FAQ", path: "/resources" },
    { name: "Success Stories", path: "/testimonials" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t-4 border-scod font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Column 1: Brand & Info */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="inline-block bg-white/5 p-3 rounded-xl backdrop-blur-sm">
              <img src="https://brandingpioneers.co.in/scod/Scod-Logo-Big-Size-180x74.webp" alt="SCOD Logo" className="h-10 w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="text-slate-400 leading-relaxed pr-4">
              Transforming lives through advanced bariatric and metabolic surgery. We provide compassionate, expert care to help you achieve lasting health and wellness.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} aria-label={social.label} className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-scod hover:text-white transition-all duration-300 transform hover:-translate-y-1" >
                  <SafeIcon icon={social.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-scod rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-slate-400 hover:text-scod transition-colors flex items-center group text-sm" >
                    <SafeIcon icon={FiArrowRight} className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Our Locations
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-scod rounded-full"></span>
            </h3>

            <div className="space-y-6">
              {/* Vasant Vihar Location */}
              <div className="group">
                <div className="flex items-start space-x-3 mb-3">
                  <SafeIcon icon={FiMapPin} className="w-5 h-5 text-scod mt-1 shrink-0" />
                  <div className="text-sm">
                    <p className="text-white font-bold mb-1">Vasant Vihar</p>
                    <p className="text-slate-400">87, Paschimi Marg, Block D, Vasant Vihar, New Delhi, 110057</p>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.3344885842643!2d77.15318687549895!3d28.58871418606939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dbe87c8c90b%3A0x7b6c7c7c7c7c7c7c!2s87%2C%20Paschimi%20Marg%2C%20Block%20D%2C%20Vasant%20Vihar%2C%20New%20Delhi%2C%20Delhi%20110057!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-sm font-semibold text-scod hover:text-blue-400 transition-colors ml-8"
                >
                  <SafeIcon icon={FiMapPin} className="w-4 h-4" />
                  <span>Get Directions</span>
                  <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                </a>
              </div>

              {/* Karol Bagh Location */}
              <div className="group">
                <div className="flex items-start space-x-3 mb-3">
                  <SafeIcon icon={FiMapPin} className="w-5 h-5 text-scod mt-1 shrink-0" />
                  <div className="text-sm">
                    <p className="text-white font-bold mb-1">Karol Bagh</p>
                    <p className="text-slate-400">Apollo Spectra Hospital, Karol Bagh, New Delhi</p>
                  </div>
                </div>
                <a
                  href="https://maps.app.goo.gl/3NFgtZRi4VpqgMns9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-sm font-semibold text-scod hover:text-blue-400 transition-colors ml-8"
                >
                  <SafeIcon icon={FiMapPin} className="w-4 h-4" />
                  <span>Get Directions</span>
                  <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                </a>
              </div>

              <div className="flex flex-col space-y-2 border-t border-slate-800 pt-4">
                <div className="flex items-center space-x-3 group">
                  <SafeIcon icon={FiPhone} className="w-5 h-5 text-scod shrink-0" />
                  <a href="tel:+918130130489" className="text-slate-400 hover:text-white transition-colors">+91 8130130489</a>
                </div>
                <div className="flex items-center space-x-3 group">
                  <SafeIcon icon={FiMail} className="w-5 h-5 text-scod shrink-0" />
                  <a href="mailto:info@scodclinic.com" className="text-slate-400 hover:text-white transition-colors">info@scodclinic.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section - Two Locations */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Vasant Vihar Map */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
              <div className="bg-slate-800 px-4 py-3 border-b border-slate-700">
                <h4 className="text-white font-bold text-sm flex items-center">
                  <SafeIcon icon={FiMapPin} className="w-4 h-4 mr-2 text-scod" />
                  Vasant Vihar Clinic
                </h4>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.3344885842643!2d77.15318687549895!3d28.58871418606939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dbe87c8c90b%3A0x7b6c7c7c7c7c7c7c!2s87%2C%20Paschimi%20Marg%2C%20Block%20D%2C%20Vasant%20Vihar%2C%20New%20Delhi%2C%20Delhi%20110057!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SCOD Vasant Vihar Location"
                className="w-full"
              ></iframe>
            </div>

            {/* Karol Bagh Map */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
              <div className="bg-slate-800 px-4 py-3 border-b border-slate-700">
                <h4 className="text-white font-bold text-sm flex items-center">
                  <SafeIcon icon={FiMapPin} className="w-4 h-4 mr-2 text-scod" />
                  Karol Bagh Clinic
                </h4>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.0449344564686!2d77.1935835!3d28.6583732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03b0ae47efd7%3A0xab60af21234f2b78!2sDr%20Arush%20Sabharwal%20-%20Best%20Bariatric%20Surgeon%20in%20Karol%20Bagh%20Delhi!5e0!3m2!1sen!2sin!4v1767703358049!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SCOD Karol Bagh Location"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Disclaimer Area */}
        <div className="py-6 border-t border-slate-800 text-[11px] text-slate-500 leading-relaxed italic">
          <p><strong>FGS Disclaimer:</strong> The Feel Great System is a nutrition-based metabolic support program. It is not intended to diagnose, treat, cure, or prevent any disease. Results may vary between individuals. All medication changes must be made under the supervision of a qualified professional.</p>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} SCOD Medical Center. All rights reserved.
          </div>
          <div className="text-slate-500 text-sm md:text-center">
            Made and Design by <a href="https://brandingpioneers.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Branding Pioneers</a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/privacy-policy" className="text-slate-500 hover:text-white transition-colors cursor-pointer">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;