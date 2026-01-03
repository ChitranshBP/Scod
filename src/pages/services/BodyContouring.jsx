import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiActivity, FiCheck, FiArrowRight, FiAlertTriangle, FiTrendingUp, FiDownload, FiCalendar, FiUserCheck, FiHelpCircle, FiClock, FiShield, FiPlus, FiMinus, FiUser, FiMail, FiPhone, FiMessageSquare, FiSend, FiAlertCircle, FiInfo, FiPlay, FiChevronLeft, FiChevronRight, FiYoutube, FiX, FiLayers, FiScissors, FiSmile } = FiIcons;

const BodyContouring = () => {
  const [activeTab, setActiveTab] = useState('tummy');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Slider & Video States
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [awarenessIndex, setAwarenessIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [galleryIndex, setGalleryIndex] = useState(0);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Responsive Items Per View
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your inquiry. Our team will contact you shortly.");
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Slider Handlers
  const nextTestimonial = () => {
    if (testimonialIndex < testimonialVideos.length - itemsPerView) {
      setTestimonialIndex(prev => prev + 1);
    } else {
      setTestimonialIndex(0);
    }
  };

  const prevTestimonial = () => {
    if (testimonialIndex > 0) {
      setTestimonialIndex(prev => prev - 1);
    } else {
      setTestimonialIndex(Math.max(0, testimonialVideos.length - itemsPerView));
    }
  };

  const nextAwareness = () => {
    if (awarenessIndex < awarenessVideos.length - itemsPerView) {
      setAwarenessIndex(prev => prev + 1);
    } else {
      setAwarenessIndex(0);
    }
  };

  const prevAwareness = () => {
    if (awarenessIndex > 0) {
      setAwarenessIndex(prev => prev - 1);
    } else {
      setAwarenessIndex(Math.max(0, awarenessVideos.length - itemsPerView));
    }
  };

  // --- Data ---
  const procedures = {
    tummy: {
      title: "Abdominoplasty (Tummy Tuck)",
      subtitle: "Restore your core",
      what: "Surgical removal of excess skin and fat from the abdomen, often including tightening of the abdominal wall muscles (plication) to restore a flatter, firmer profile.",
      indications: "Hanging abdominal skin (pannus), separated muscles (diastasis recti), and rashes/infections in skin folds.",
      benefits: "Improved posture, relief from back pain, better fitting clothes, and elimination of skin irritation.",
      recovery: "2-4 weeks off work. Strict avoidance of heavy lifting for 6 weeks. Compression garment worn for 6-8 weeks.",
      image: "/assets/scod/treatment/body contouring/Abdominoplasty (Tummy Tuck).webp"
    },
    breast: {
      title: "Breast Procedures",
      subtitle: "Lift & Augmentation",
      what: "Mastopexy (Breast Lift) removes excess skin to reshape and raise droopy breasts. Augmentation (Implants) adds volume if lost.",
      indications: "Ptosis (sagging) due to weight loss, loss of breast volume, or asymmetry.",
      benefits: "Restored feminine contour, improved breast shape and projection, and youthful appearance.",
      recovery: "1-2 weeks off work. Avoid upper body exercise for 4-6 weeks.",
      image: "/assets/scod/treatment/body contouring/Breast Procedures.webp"
    },
    limbs: {
      title: "Arm & Thigh Lifts",
      subtitle: "Contouring extremities",
      what: "Brachioplasty (Arm Lift) and Thighplasty (Thigh Lift) remove excess hanging skin from the upper arms and inner/outer thighs.",
      indications: "'Bat wings' on arms or rubbing/chaffing of inner thighs causing difficulty in walking.",
      benefits: "Toned appearance, ability to wear sleeveless tops, and improved comfort during movement.",
      recovery: "2-3 weeks. Compression garments are essential to minimize swelling.",
      image: "/assets/scod/treatment/body contouring/Arm & Thigh Lifts.webp"
    },
    lipo: {
      title: "Liposuction Adjunct",
      subtitle: "Refining the results",
      what: "Suction-assisted removal of stubborn fat deposits used in combination with skin removal surgeries.",
      indications: "Localized fat pockets that persist despite weight loss, often in the flanks, hips, or knees.",
      benefits: "Smoother contours and better definition when combined with lifting procedures.",
      recovery: "Varies, but usually shorter than excisional surgery. 3-5 days for small areas.",
      image: "/assets/scod/treatment/body contouring/Liposuction Adjunct.webp"
    }
  };

  const galleryImages = [
    {
      before: "https://brandingpioneers.co.in/scod/patient3-scod.webp",
      after: "https://brandingpioneers.co.in/scod/patient2-scod.webp",
      label: "Tummy Tuck"
    },
    {
      before: "https://brandingpioneers.co.in/scod/patient4-scod.webp",
      after: "https://brandingpioneers.co.in/scod/patient5-scod.webp",
      label: "Body Lift"
    },
  ];

  const generalFaqs = [
    {
      q: "When can I have body contouring?",
      a: "We recommend waiting until your weight has been stable for at least 6-12 months, usually 12-18 months after your bariatric surgery. This ensures safety and optimal long-term results."
    },
    {
      q: "Will insurance cover it?",
      a: "In some cases, removal of the abdominal apron (panniculectomy) may be covered if it causes documented medical issues like recurrent infections. Most other contouring procedures are considered cosmetic."
    },
    {
      q: "Can I do everything at once?",
      a: "Safety is our priority. While some procedures can be combined (e.g., Tummy Tuck + Breast Lift), 'Total Body Lifts' are often staged 3-6 months apart to reduce surgical time, blood loss, and complication risks."
    },
    {
      q: "What about the scars?",
      a: "Scars are inevitable with skin removal. However, our surgeons place incisions strategically (e.g., bikini line, inner arm) to hide them in clothing or natural folds. They fade significantly over time."
    },
    {
      q: "Is it painful?",
      a: "Discomfort is managed with medication. Tummy tucks often involve muscle tightening which can be sore for a few weeks, but most patients find the relief from heavy skin outweighs the temporary surgical pain."
    }
  ];

  const testimonialVideos = [
    {
      title: "My Tummy Tuck Journey",
      author: "Sarah Jenkins",
      videoId: "G4Cqz8ZMGts",
      thumbnail: "https://img.youtube.com/vi/G4Cqz8ZMGts/hqdefault.jpg"
    },
    {
      title: "Body Lift Transformation",
      author: "Mike Ross",
      videoId: "JPaK5uLhBsw",
      thumbnail: "https://img.youtube.com/vi/JPaK5uLhBsw/hqdefault.jpg"
    },
    {
      title: "Regaining Confidence",
      author: "Emily Chen",
      videoId: "TaOuNUjv_Dc",
      thumbnail: "https://img.youtube.com/vi/TaOuNUjv_Dc/hqdefault.jpg"
    }
  ];

  const awarenessVideos = [
    {
      title: "Timing for Plastic Surgery",
      videoId: "rEd-4Pov_iw",
      thumbnail: "https://img.youtube.com/vi/rEd-4Pov_iw/hqdefault.jpg"
    },
    {
      title: "Tummy Tuck vs Lipo",
      videoId: "wBhZyyHeWtI",
      thumbnail: "https://img.youtube.com/vi/wBhZyyHeWtI/hqdefault.jpg"
    },
    {
      title: "Skin Removal Explained",
      videoId: "vs2gB7Zyuks",
      thumbnail: "https://img.youtube.com/vi/vs2gB7Zyuks/hqdefault.jpg"
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
            src="https://brandingpioneers.co.in/scod/scod-breadcrumbs/Body Contouring.webp"
            alt="Body Contouring Surgery"
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient Overlay - Updated to SCOD Blue */}
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
              <SafeIcon icon={FiScissors} className="w-5 h-5 text-emerald-300" />
              <span className="text-sm font-bold tracking-wide uppercase text-white">Aesthetics & Reconstruction</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Body Contouring & <br /> <span className="text-emerald-300">Post-Weight Loss</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed font-light">
              Complete your transformation. Remove excess skin, restore natural contours, and reveal the body you've worked so hard for.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                to="/contact"
                className="bg-white text-scod px-8 py-3 rounded-full font-bold text-base hover:bg-gray-100 transition-all shadow-lg flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiCalendar} className="w-5 h-5" />
                <span>Book Consultation</span>
              </Link>
              <a
                href="#gallery"
                className="bg-transparent border-2 border-white/30 backdrop-blur-sm text-white px-8 py-3 rounded-full font-bold text-base hover:bg-white/10 transition-all flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiSmile} className="w-5 h-5" />
                <span>See Results</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. INTRO: THE REALITY OF WEIGHT LOSS */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="h-px w-10 bg-scod"></div>
                <span className="uppercase tracking-widest text-sm font-bold text-scod">The Final Step</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Addressing <br /><span className="text-scod">Loose Skin</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Massive weight loss is a tremendous achievement, but for many, it leaves behind significant amounts of loose, hanging skin. This skin often does not shrink back, regardless of exercise.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Beyond aesthetics, excess skin can cause functional issues like rashes, infections, back pain, and difficulty finding clothes that fit. Body contouring surgery is not just cosmetic; it is reconstructive surgery to restore function and comfort.
              </p>

              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <SafeIcon icon={FiCheck} className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Restore Comfort</h4>
                    <p className="text-sm text-gray-500">Eliminate chafing and skin irritation.</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <SafeIcon icon={FiLayers} className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Reveal Definition</h4>
                    <p className="text-sm text-gray-500">Showcase the muscle tone hidden by skin.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border-8 border-gray-50">
                <img
                  src="/assets/scod/treatment/body contouring/Loose Skin.webp"
                  alt="Loose Skin After Weight Loss"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. QUALIFICATION & SAFETY */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-scod"
            >
              <SafeIcon icon={FiUserCheck} className="w-10 h-10 text-scod mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Who Qualifies?</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start"><SafeIcon icon={FiCheck} className="w-5 h-5 text-emerald-500 mr-2 mt-1" /> <span>Weight stable for at least 6-12 months.</span></li>
                <li className="flex items-start"><SafeIcon icon={FiCheck} className="w-5 h-5 text-emerald-500 mr-2 mt-1" /> <span>BMI ideally below 30 or close to goal weight.</span></li>
                <li className="flex items-start"><SafeIcon icon={FiCheck} className="w-5 h-5 text-emerald-500 mr-2 mt-1" /> <span>Non-smoker (nicotine impairs healing).</span></li>
                <li className="flex items-start"><SafeIcon icon={FiCheck} className="w-5 h-5 text-emerald-500 mr-2 mt-1" /> <span>Realistic expectations about scarring.</span></li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-emerald-500"
            >
              <SafeIcon icon={FiShield} className="w-10 h-10 text-emerald-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Safety First: Staged Approach</h3>
              <p className="text-gray-600 mb-4">
                Combining too many procedures increases the risk of complications. We prioritize your safety by staging surgeries.
              </p>
              <p className="text-sm font-bold text-gray-800 uppercase tracking-wide mb-2">Typical Stages:</p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Stage 1: Lower Body (Tummy Tuck / Body Lift)</li>
                <li>• Stage 2: Upper Body (Breasts / Arms) - 3-6 months later</li>
                <li>• Stage 3: Thighs / Refinements</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. PROCEDURES TABS */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="uppercase tracking-widest text-sm font-bold text-scod">Our Expertise</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Surgical Options</h2>
          </div>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {Object.keys(procedures).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 shadow-sm border-2 ${activeTab === key ? 'bg-scod text-white border-scod shadow-lg scale-105' : 'bg-white text-gray-600 border-gray-100 hover:border-scod hover:text-scod'}`}
              >
                {key === 'tummy' ? 'Tummy Tuck' : key === 'breast' ? 'Breast Surgery' : key === 'limbs' ? 'Arm & Thigh' : 'Liposuction'}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-50 rounded-[2.5rem] p-8 md:p-10 border border-gray-100 shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <span className="inline-block px-4 py-1 bg-blue-100 text-scod rounded-full text-sm font-bold mb-4">
                      {procedures[activeTab].subtitle}
                    </span>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                      {procedures[activeTab].title}
                    </h3>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                          <SafeIcon icon={FiInfo} className="w-5 h-5 text-scod mr-2" />
                          What is it?
                        </h4>
                        <p className="text-gray-600 leading-relaxed">{procedures[activeTab].what}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                          <SafeIcon icon={FiAlertCircle} className="w-5 h-5 text-scod mr-2" />
                          Indications
                        </h4>
                        <p className="text-gray-600 leading-relaxed">{procedures[activeTab].indications}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                          <SafeIcon icon={FiTrendingUp} className="w-5 h-5 text-scod mr-2" />
                          Benefits
                        </h4>
                        <p className="text-gray-600 leading-relaxed">{procedures[activeTab].benefits}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Image + Recovery */}
                  <div className="flex flex-col h-full">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 h-64 mb-8 flex items-center justify-center relative group">
                      <img
                        src={procedures[activeTab].image}
                        alt={procedures[activeTab].title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 mb-4 flex-grow">
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <SafeIcon icon={FiClock} className="w-6 h-6 text-scod mr-2" />
                        Recovery Expectations
                      </h4>
                      <p className="text-gray-700 font-medium leading-relaxed">
                        {procedures[activeTab].recovery}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 5. BEFORE/AFTER GALLERY */}
      <section id="gallery" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900">Patient <span className="text-scod">Transformations</span></h2>
            <p className="text-gray-600 mt-2">Real results from our body contouring patients.</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <motion.div
              key={galleryIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="relative group">
                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-bold">Before</div>
                <img src={galleryImages[galleryIndex].before} alt="Before" className="w-full h-80 object-cover rounded-2xl shadow-lg border border-gray-100" />
              </div>
              <div className="relative group">
                <div className="absolute top-4 left-4 bg-scod text-white px-3 py-1 rounded-full text-sm font-bold">After</div>
                <img src={galleryImages[galleryIndex].after} alt="After" className="w-full h-80 object-cover rounded-2xl shadow-lg border border-gray-100" />
              </div>
            </motion.div>

            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={() => setGalleryIndex(prev => (prev === 0 ? galleryImages.length - 1 : prev - 1))}
                className="p-3 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-scod transition-all"
              >
                <SafeIcon icon={FiChevronLeft} className="w-6 h-6" />
              </button>
              <div className="py-2 px-6 bg-gray-50 rounded-full font-bold text-gray-800">
                {galleryImages[galleryIndex].label}
              </div>
              <button
                onClick={() => setGalleryIndex(prev => (prev === galleryImages.length - 1 ? 0 : prev + 1))}
                className="p-3 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-scod transition-all"
              >
                <SafeIcon icon={FiChevronRight} className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DOCTOR PROFILE SECTION */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white h-[400px] lg:h-[500px] z-10">
                <img
                  src="https://brandingpioneers.co.in/scod/dr-arush-final-image.png"
                  alt="Dr. Arush Sabharwal"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative background element behind image */}
              <div className="absolute top-10 -left-10 w-full h-full bg-scod/5 rounded-2xl -z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50 -z-0"></div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-px w-12 bg-scod"></div>
                <span className="text-scod font-bold tracking-widest uppercase text-sm">Meet The Surgeon</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Dr. Arush Sabharwal
              </h2>
              <h3 className="text-xl text-gray-500 font-medium mb-8 border-l-4 border-scod pl-4">
                Chairman & Chief Surgeon, SCOD
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                Dr. Arush Sabharwal collaborates with top plastic surgeons to ensure your body contouring journey is seamless. His understanding of post-bariatric physiology ensures safety and optimal outcomes.
              </p>
              <blockquote className="text-xl font-medium text-gray-800 italic mb-8 relative z-10">
                "The journey doesn't end at weight loss. Restoring your body's form is the final step in reclaiming your confidence and life."
              </blockquote>

              <div className="flex flex-wrap gap-4 items-center">
                <Link to="/about" className="inline-flex items-center space-x-2 bg-scod text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1" >
                  <span>View Full Profile</span>
                  <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PATIENT TESTIMONIALS (Slider) */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <div className="text-left">
              <span className="uppercase tracking-widest text-sm font-bold text-scod">Success Stories</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2">Patient <span className="text-scod">Experiences</span></h2>
            </div>

            {/* Slider Controls */}
            <div className="flex flex-col items-end gap-4">
              <div className="flex items-center gap-3">
                <button onClick={prevTestimonial} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-scod hover:text-white hover:border-scod transition-all duration-300 shadow-sm bg-white" >
                  <SafeIcon icon={FiChevronLeft} className="w-5 h-5" />
                </button>
                <button onClick={nextTestimonial} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-scod hover:text-white hover:border-scod transition-all duration-300 shadow-sm bg-white" >
                  <SafeIcon icon={FiChevronRight} className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Videos Slider */}
          <div className="-mx-4 overflow-hidden px-4 md:px-0">
            <motion.div
              className="flex"
              animate={{ x: `-${testimonialIndex * (100 / testimonialVideos.length)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ width: `${(testimonialVideos.length * 100) / itemsPerView}%` }}
            >
              {testimonialVideos.map((video, index) => (
                <motion.div
                  key={index}
                  className="w-full px-4 flex-shrink-0"
                  style={{ width: `${100 / testimonialVideos.length}%` }}
                >
                  <div
                    className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group cursor-pointer h-full flex flex-col"
                    onClick={() => setSelectedVideo(video)}
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                        <div className="w-16 h-16 bg-scod/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <SafeIcon icon={FiPlay} className="w-6 h-6 text-white ml-1" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6 flex-grow">
                      <h3 className="font-bold text-lg text-gray-900 mb-1">{video.title}</h3>
                      <p className="text-scod font-medium">{video.author}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. EDUCATIONAL RESOURCES (Slider) */}
      <section className="py-12 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <div className="text-left">
              <span className="uppercase tracking-widest text-sm font-bold text-scod">Medical Education</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2">Patient <span className="text-scod">Awareness</span></h2>
              <p className="text-gray-600 mt-4 max-w-2xl">
                Learn more about body contouring procedures and what to expect.
              </p>
            </div>

            {/* Slider Controls */}
            <div className="flex flex-col items-end gap-4">
              <div className="flex items-center gap-3">
                <button onClick={prevAwareness} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-scod hover:text-white hover:border-scod transition-all duration-300 shadow-sm bg-white" >
                  <SafeIcon icon={FiChevronLeft} className="w-5 h-5" />
                </button>
                <button onClick={nextAwareness} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-scod hover:text-white hover:border-scod transition-all duration-300 shadow-sm bg-white" >
                  <SafeIcon icon={FiChevronRight} className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Videos Slider */}
          <div className="-mx-4 overflow-hidden px-4 md:px-0">
            <motion.div
              className="flex"
              animate={{ x: `-${awarenessIndex * (100 / awarenessVideos.length)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ width: `${(awarenessVideos.length * 100) / itemsPerView}%` }}
            >
              {awarenessVideos.map((video, index) => (
                <motion.div
                  key={index}
                  className="w-full px-4 flex-shrink-0"
                  style={{ width: `${100 / awarenessVideos.length}%` }}
                >
                  <div
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100 h-full flex flex-col"
                    onClick={() => setSelectedVideo(video)}
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <SafeIcon icon={FiPlay} className="w-5 h-5 text-scod ml-1" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6 flex-grow">
                      <h3 className="font-bold text-lg text-gray-900 group-hover:text-scod transition-colors">{video.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Common <span className="text-scod">Questions</span></h2>
          </div>
          <div className="space-y-4">
            {generalFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-gray-50"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-gray-50 focus:outline-none"
                >
                  <span className="text-lg font-bold text-gray-900 pr-8">{faq.q}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${openFaqIndex === index ? 'bg-scod text-white' : 'bg-gray-200 text-gray-500'}`}>
                    <SafeIcon icon={openFaqIndex === index ? FiMinus : FiPlus} className="w-4 h-4" />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-white"
                    >
                      <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CONTACT FORM SECTION */}
      <section className="py-12 bg-blue-50 border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Details */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Schedule Your <br /><span className="text-scod">Consultation</span></h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discuss your goals with our body contouring experts. We'll create a personalized plan to complete your transformation.
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-scod border border-blue-100">
                    <SafeIcon icon={FiPhone} className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Call Us</h4>
                    <a href="tel:+918130130489" className="text-gray-600 hover:text-scod transition-colors">+91 8130130489</a>
                    <p className="text-sm text-gray-400">Mon-Sat, 9am - 6pm</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-scod border border-blue-100">
                    <SafeIcon icon={FiMail} className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Email Us</h4>
                    <a href="mailto:info@scodclinic.com" className="text-gray-600 hover:text-scod transition-colors">info@scodclinic.com</a>
                    <p className="text-sm text-gray-400">We reply within 24 hours</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100" >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Appointment</h3>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <div className="relative">
                    <SafeIcon icon={FiUser} className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="John Doe" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scod focus:border-scod transition-all bg-white" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <div className="relative">
                      <SafeIcon icon={FiMail} className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="john@example.com" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scod focus:border-scod transition-all bg-white" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <div className="relative">
                      <SafeIcon icon={FiPhone} className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required placeholder="+91 00000 00000" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scod focus:border-scod transition-all bg-white" />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Area of Interest</label>
                  <div className="relative">
                    <SafeIcon icon={FiMessageSquare} className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                    <textarea name="message" value={formData.message} onChange={handleInputChange} rows="3" placeholder="E.g. Tummy Tuck, Arm Lift, General inquiry..." className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scod focus:border-scod transition-all bg-white" ></textarea>
                  </div>
                </div>
                <button type="submit" className="w-full bg-scod text-white font-bold text-lg py-4 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2" >
                  <SafeIcon icon={FiSend} className="w-5 h-5" />
                  <span>Send Request</span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800" onClick={e => e.stopPropagation()}>
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 text-white/70 hover:text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-all"
              >
                <SafeIcon icon={FiX} className="w-6 h-6" />
              </button>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default BodyContouring;