import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const {
  FiMenu, FiX, FiChevronDown, FiPhone, FiGlobe, FiActivity,
  FiShield, FiFileText, FiUsers, FiAward, FiHeart,
  FiTrendingUp, FiPlus, FiMinus, FiUser, FiZap, FiHelpCircle, FiPlane
} = FiIcons;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [medicalOpen, setMedicalOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [internationalOpen, setInternationalOpen] = useState(false);
  const [mobileActiveTab, setMobileActiveTab] = useState(null);

  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setMobileActiveTab(null);
  }, [location.pathname]);

  const toggleMobileTab = (tab) => {
    setMobileActiveTab(mobileActiveTab === tab ? null : tab);
  };

  const isTransparent = isHome && !isScrolled;
  const textColor = isTransparent ? 'text-white hover:text-blue-200' : 'text-gray-700 hover:text-scod';
  const activeColor = isTransparent ? 'text-white font-semibold' : 'text-scod font-semibold';
  const logoFilter = isTransparent ? 'brightness-0 invert' : '';
  const navBackgroundClass = isTransparent ? 'bg-transparent py-4' : 'bg-white shadow-md border-b border-gray-100 py-2';

  const getLinkClass = (path) => {
    const isActive = location.pathname === path || (path !== '/' && location.pathname.includes(path));
    return `relative font-medium transition-colors duration-300 ${isActive ? activeColor : textColor}`;
  };

  const DesktopSubmenuItem = ({ to, icon, label, isHeader = false }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        className={`flex items-center px-4 py-3 transition-colors ${isActive ? `bg-blue-50 text-scod font-medium ${isHeader ? 'border-b border-blue-100' : ''}` : isHeader ? 'text-gray-900 font-medium border-b border-gray-100 hover:bg-gray-50 hover:text-scod' : 'text-gray-600 hover:bg-gray-50 hover:text-scod'}`}
        onClick={() => {
          setAboutOpen(false);
          setServicesOpen(false);
          setMedicalOpen(false);
          setResourcesOpen(false);
          setInternationalOpen(false);
        }}
      >
        <div className={`mr-3 ${isActive || isHeader ? 'text-scod' : 'text-gray-400 group-hover:text-scod'}`}>
          <SafeIcon icon={icon} className="w-4 h-4" />
        </div>
        <span className="text-sm">{label}</span>
      </Link>
    );
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${navBackgroundClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center z-50">
            <img src="https://brandingpioneers.co.in/scod/Scod-Logo-Big-Size-180x74.webp" alt="SCOD Logo" className={`h-12 md:h-14 w-auto object-contain transition-all duration-300 ${logoFilter}`} />
          </Link>

          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/" className={getLinkClass('/')}>Home</Link>

            {/* About Dropdown */}
            <div className="relative h-full flex items-center group" onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}>
              <button className={`font-medium flex items-center space-x-1 transition-colors duration-300 ${location.pathname.includes('/about') ? activeColor : textColor}`}>
                <span>About</span>
                <SafeIcon icon={FiChevronDown} className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <AnimatePresence>
                {aboutOpen && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border-t-4 border-scod ring-1 ring-black/5 overflow-hidden" >
                    <DesktopSubmenuItem to="/about" icon={FiUser} label="About Dr. Arush" />
                    <DesktopSubmenuItem to="/dr-shivani-sabharwal" icon={FiHeart} label="About Dr. Shivani" />
                    <DesktopSubmenuItem to="/about-clinic" icon={FiActivity} label="About SCOD Clinic" />
                    {/* <DesktopSubmenuItem to="/media-page" icon={FiAward} label="Press & Achievements" /> */}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Treatments Dropdown */}
            <div className="relative h-full flex items-center group" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <Link to="/services" className={`font-medium flex items-center space-x-1 transition-colors duration-300 ${location.pathname.includes('/services') || location.pathname.includes('/feel-great-system') ? activeColor : textColor}`}>
                <span>Treatments</span>
                <SafeIcon icon={FiChevronDown} className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </Link>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border-t-4 border-scod ring-1 ring-black/5 overflow-hidden" >
                    <DesktopSubmenuItem to="/services/surgery-overview" icon={FiActivity} label="Surgery Overview" isHeader={true} />
                    <DesktopSubmenuItem to="/services/bariatric-surgery" icon={FiTrendingUp} label="Bariatric Surgery" />
                    <DesktopSubmenuItem to="/services/laparoscopic-surgery" icon={FiActivity} label="Laparoscopic Surgery" />
                    <DesktopSubmenuItem to="/services/body-contouring" icon={FiUsers} label="Body Contouring" />
                    <DesktopSubmenuItem to="/feel-great-system" icon={FiZap} label="Plant-Based Nutrition (FGS)" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Medical Mgmt Dropdown */}
            <div className="relative h-full flex items-center group" onMouseEnter={() => setMedicalOpen(true)} onMouseLeave={() => setMedicalOpen(false)}>
              <Link to="/medical-management" className={`font-medium flex items-center space-x-1 transition-colors duration-300 ${location.pathname.includes('/medical-management') ? activeColor : textColor}`}>
                <span>Medical Mgmt</span>
                <SafeIcon icon={FiChevronDown} className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </Link>
              <AnimatePresence>
                {medicalOpen && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border-t-4 border-scod ring-1 ring-black/5 overflow-hidden" >
                    <DesktopSubmenuItem to="/medical-management" icon={FiShield} label="Metabolic Management" isHeader={true} />
                    <DesktopSubmenuItem to="/services/weight-loss-injectables" icon={FiActivity} label="Weight Loss Injectables" />
                    <DesktopSubmenuItem to="/services/obesity-management" icon={FiHeart} label="Diet & Counselling" />
                    <DesktopSubmenuItem to="/services/weight-regain" icon={FiTrendingUp} label="Weight Regain Support" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* International Dropdown */}
            <div className="relative h-full flex items-center group" onMouseEnter={() => setInternationalOpen(true)} onMouseLeave={() => setInternationalOpen(false)}>
              <button className={`font-medium flex items-center space-x-1 transition-colors duration-300 ${location.pathname.includes('/international') || location.pathname.includes('/patient-journey') ? activeColor : textColor}`}>
                <span>International</span>
                <SafeIcon icon={FiChevronDown} className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <AnimatePresence>
                {internationalOpen && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border-t-4 border-scod ring-1 ring-black/5 overflow-hidden">
                    <DesktopSubmenuItem to="/international-patients" icon={FiGlobe} label="Overseas Patient Guide" isHeader={true} />
                    <DesktopSubmenuItem to="/international-bariatric" icon={FiPlane} label="Bariatric Medical Travel" />
                    <DesktopSubmenuItem to="/patient-journey" icon={FiActivity} label="International Patient Journey" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resources Dropdown */}
            <div className="relative h-full flex items-center group" onMouseEnter={() => setResourcesOpen(true)} onMouseLeave={() => setResourcesOpen(false)}>
              <button className={`font-medium flex items-center space-x-1 transition-colors duration-300 ${location.pathname.includes('/resources') ? activeColor : textColor}`}>
                <span>Resources</span>
                <SafeIcon icon={FiChevronDown} className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <AnimatePresence>
                {resourcesOpen && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border-t-4 border-scod ring-1 ring-black/5 overflow-hidden" >
                    <DesktopSubmenuItem to="/resources" icon={FiHelpCircle} label="FAQs & Guides" />
                    <DesktopSubmenuItem to="/testimonials" icon={FiUsers} label="Success Stories" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/contact" className={getLinkClass('/contact')}>Contact</Link>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+918130130489" className={`flex items-center space-x-2 px-6 py-3 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${isTransparent ? 'bg-white text-scod hover:bg-blue-50' : 'bg-scod text-white hover:bg-blue-700'}`}>
              <SafeIcon icon={FiPhone} className="w-4 h-4" />
              <span className="text-sm font-bold">Call Now</span>
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className={`lg:hidden p-2 rounded-lg transition-colors z-50 ${isTransparent && !isOpen ? 'text-white' : 'text-gray-700'}`} >
            <SafeIcon icon={isOpen ? FiX : FiMenu} className="w-7 h-7" />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-40"
              onClick={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-2xl border-t border-gray-100 rounded-b-2xl overflow-hidden max-h-[85vh] overflow-y-auto z-50" >
              <div className="px-4 py-6 space-y-2">
                <Link to="/" className={`block font-bold text-lg px-2 py-2 rounded-lg ${location.pathname === '/' ? 'text-scod bg-blue-50' : 'text-gray-700'}`}>Home</Link>

                {/* About Section */}
                <div className="border-b border-gray-100 pb-2">
                  <button onClick={() => toggleMobileTab('about')} className="flex items-center justify-between w-full px-2 py-3 text-left">
                    <span className="font-bold text-lg text-gray-700">About</span>
                    <SafeIcon icon={mobileActiveTab === 'about' ? FiMinus : FiPlus} className="w-5 h-5" />
                  </button>
                  <AnimatePresence>
                    {mobileActiveTab === 'about' && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pl-4 space-y-1 bg-gray-50 rounded-lg mb-2">
                        <Link to="/about" className="block px-3 py-3 text-gray-600 font-medium">About Dr. Arush</Link>
                        <Link to="/dr-shivani-sabharwal" className="block px-3 py-3 text-gray-600 font-medium">About Dr. Shivani</Link>
                        <Link to="/about-clinic" className="block px-3 py-3 text-gray-600 font-medium">About SCOD Clinic</Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="border-b border-gray-100 pb-2">
                  <button onClick={() => toggleMobileTab('international')} className="flex items-center justify-between w-full px-2 py-3 text-left">
                    <span className="font-bold text-lg text-gray-700">International</span>
                    <SafeIcon icon={mobileActiveTab === 'international' ? FiMinus : FiPlus} className="w-5 h-5" />
                  </button>
                  <AnimatePresence>
                    {mobileActiveTab === 'international' && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pl-4 space-y-1 bg-gray-50 rounded-lg mb-2">
                        <Link to="/international-patients" className="block px-3 py-3 text-gray-600 font-medium">Overseas Patient Guide</Link>
                        <Link to="/international-bariatric" className="block px-3 py-3 text-gray-600 font-medium">Bariatric Medical Travel</Link>
                        <Link to="/patient-journey" className="block px-3 py-3 text-gray-600 font-medium">International Patient Journey</Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="border-b border-gray-100 pb-2">
                  <button onClick={() => toggleMobileTab('treatments')} className="flex items-center justify-between w-full px-2 py-3 text-left">
                    <span className="font-bold text-lg text-gray-700">Treatments</span>
                    <SafeIcon icon={mobileActiveTab === 'treatments' ? FiMinus : FiPlus} className="w-5 h-5" />
                  </button>
                  <AnimatePresence>
                    {mobileActiveTab === 'treatments' && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pl-4 space-y-1 bg-gray-50 rounded-lg mb-2">
                        <Link to="/services/surgery-overview" className="block px-3 py-3 text-gray-600 font-medium">Surgery Overview</Link>
                        <Link to="/services/bariatric-surgery" className="block px-3 py-3 text-gray-600 font-medium">Bariatric Surgery</Link>
                        <Link to="/services/laparoscopic-surgery" className="block px-3 py-3 text-gray-600 font-medium">Laparoscopic Surgery</Link>
                        <Link to="/services/body-contouring" className="block px-3 py-3 text-gray-600 font-medium">Body Contouring</Link>
                        <Link to="/feel-great-system" className="block px-3 py-3 text-gray-600 font-medium">Plant-Based Nutrition (FGS)</Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Medical Management Section */}
                <div className="border-b border-gray-100 pb-2">
                  <button onClick={() => toggleMobileTab('medical')} className="flex items-center justify-between w-full px-2 py-3 text-left">
                    <span className="font-bold text-lg text-gray-700">Medical Mgmt</span>
                    <SafeIcon icon={mobileActiveTab === 'medical' ? FiMinus : FiPlus} className="w-5 h-5" />
                  </button>
                  <AnimatePresence>
                    {mobileActiveTab === 'medical' && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pl-4 space-y-1 bg-gray-50 rounded-lg mb-2">
                        <Link to="/medical-management" className="block px-3 py-3 text-gray-600 font-medium">Metabolic Management</Link>
                        <Link to="/services/weight-loss-injectables" className="block px-3 py-3 text-gray-600 font-medium">Weight Loss Injectables</Link>
                        <Link to="/services/obesity-management" className="block px-3 py-3 text-gray-600 font-medium">Diet & Counselling</Link>
                        <Link to="/services/weight-regain" className="block px-3 py-3 text-gray-600 font-medium">Weight Regain Support</Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="border-b border-gray-100 pb-2">
                  <button onClick={() => toggleMobileTab('resources')} className="flex items-center justify-between w-full px-2 py-3 text-left">
                    <span className="font-bold text-lg text-gray-700">Resources</span>
                    <SafeIcon icon={mobileActiveTab === 'resources' ? FiMinus : FiPlus} className="w-5 h-5" />
                  </button>
                  <AnimatePresence>
                    {mobileActiveTab === 'resources' && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pl-4 space-y-1 bg-gray-50 rounded-lg mb-2">
                        <Link to="/resources" className="block px-3 py-3 text-gray-600 font-medium">FAQs & Guides</Link>
                        <Link to="/testimonials" className="block px-3 py-3 text-gray-600 font-medium">Success Stories</Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link to="/contact" className={`block font-bold text-lg px-2 py-3 rounded-lg ${location.pathname === '/contact' ? 'text-scod' : 'text-gray-700'}`}>Contact</Link>

                <div className="pt-4">
                  <a href="tel:+918130130489" className="flex items-center justify-center space-x-2 w-full bg-scod text-white py-4 rounded-xl font-bold shadow-lg">
                    <SafeIcon icon={FiPhone} className="w-5 h-5" />
                    <span>Call +91 8130130489</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;