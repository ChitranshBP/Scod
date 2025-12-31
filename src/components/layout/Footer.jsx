import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiPhone, FiMail, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiArrowRight } = FiIcons;

const Footer = () => {
  const socialLinks = [
    { icon: FiFacebook, href: "#", label: "Facebook" },
    { icon: FiTwitter, href: "#", label: "Twitter" },
    { icon: FiInstagram, href: "#", label: "Instagram" },
    { icon: FiLinkedin, href: "#", label: "LinkedIn" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About SCOD Clinic", path: "/about-clinic" },
    { name: "Treatments", path: "/services" },
    { name: "Feel Great System (FGS)", path: "/feel-great-system" },
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
              <div className="flex items-start space-x-3 group">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 text-scod mt-1 shrink-0" />
                <div className="text-sm">
                  <p className="text-white font-bold mb-1">Vasant Vihar</p>
                  <p className="text-slate-400">87, Paschimi Marg, Block D, Vasant Vihar, New Delhi, 110057</p>
                </div>
              </div>

              <div className="flex flex-col space-y-2 border-t border-slate-800 pt-4">
                <div className="flex items-center space-x-3 group">
                  <SafeIcon icon={FiPhone} className="w-5 h-5 text-scod shrink-0" />
                  <a href="tel:+919873927874" className="text-slate-400 hover:text-white transition-colors">+91-9873927874</a>
                </div>
                <div className="flex items-center space-x-3 group">
                  <SafeIcon icon={FiMail} className="w-5 h-5 text-scod shrink-0" />
                  <a href="mailto:info@scodmedical.com" className="text-slate-400 hover:text-white transition-colors">info@scodmedical.com</a>
                </div>
              </div>
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
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <span className="text-slate-500 hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="text-slate-500 hover:text-white transition-colors cursor-pointer">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;