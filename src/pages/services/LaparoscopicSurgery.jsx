import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import SEO from '../../components/common/SEO';

const { FiActivity, FiCheck, FiArrowRight, FiAlertTriangle, FiTrendingUp, FiDownload, FiCalendar, FiUserCheck, FiHelpCircle, FiClock, FiShield, FiPlus, FiMinus, FiUser, FiMail, FiPhone, FiMessageSquare, FiSend, FiAlertCircle, FiInfo, FiPlay, FiChevronLeft, FiChevronRight, FiYoutube, FiX } = FiIcons;

const LaparoscopicSurgery = () => {
  const [activeTab, setActiveTab] = useState('gallbladder');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Slider & Video States
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [awarenessIndex, setAwarenessIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

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
    gallbladder: {
      title: "Laparoscopic Cholecystectomy",
      subtitle: "The gold standard for gallstones",
      what: "A minimally invasive procedure to remove the gallbladder containing stones through small 'keyhole' incisions.",
      indications: "Symptomatic gallstones (pain after eating), gallbladder infection (cholecystitis), or pancreatitis caused by stones.",
      benefits: "Minimal post-operative pain, cosmetic advantage (tiny scars), and many patients go home the same day.",
      recovery: "Most patients return to normal activities within 1 week. Short-term dietary adjustments (low fat) are recommended.",
      image: "/assets/scod/treatment/laparoscopic/gallstones.webp"
    },
    hernia: {
      title: "Laparoscopic Hernia Repair",
      subtitle: "Advanced mesh repair techniques",
      what: "Repair of a defect or 'hole' in the abdominal wall muscles through which tissue bulges out, reinforced with a surgical mesh.",
      indications: "Inguinal (groin), Umbilical (belly button), or Incisional (previous surgery site) hernias causing pain or visible bulge.",
      benefits: "Significantly lower risk of wound infection, less chronic pain, and faster return to work compared to open surgery.",
      recovery: "Walking immediately after surgery. Return to desk work in 1 week. Avoid heavy lifting for 4-6 weeks.",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=80"
    },
    appendix: {
      title: "Laparoscopic Appendectomy",
      subtitle: "Emergency & elective removal",
      what: "Removal of an inflamed or infected appendix through 3 small incisions.",
      indications: "Acute Appendicitis (sudden severe pain) or occasionally for chronic recurring abdominal pain.",
      benefits: "Better visualization of the abdomen, lower risk of wound complications, and shorter hospital stay.",
      recovery: "1-2 days hospital stay. Return to school or work typically within 1-2 weeks.",
      image: "/assets/scod/treatment/laparoscopic/apendix.webp"
    },
    reflux: {
      title: "Anti-Reflux Surgery",
      subtitle: "Long-term GERD solution",
      what: "Wrapping the upper part of the stomach around the lower esophagus to reinforce the valve and prevent acid reflux.",
      indications: "Severe GERD not responding to medication, presence of Hiatal Hernia, or desire to stop long-term medication.",
      benefits: "Long-term relief from heartburn and regurgitation. Most patients can stop taking acid suppression medication.",
      recovery: "Soft diet is required for 2-4 weeks post-surgery. Full recovery and return to normal diet by 6 weeks.",
      image: "/assets/scod/treatment/laparoscopic/Anti-Reflux.webp"
    }
  };

  const generalFaqs = [
    {
      q: "What does 'Laparoscopic' mean?",
      a: "Laparoscopic surgery, also known as minimally invasive or keyhole surgery, uses a specialized instrument called a laparoscope (a thin tube with a camera). This allows the surgeon to see inside the body and perform operations through very small incisions (0.5-1 cm) rather than large cuts."
    },
    {
      q: "Is general anesthesia required?",
      a: "Yes, laparoscopic procedures are performed under general anesthesia, meaning you will be completely asleep and pain-free during the surgery."
    },
    {
      q: "Will I have big scars?",
      a: "No. One of the main benefits is cosmetic. The incisions are very small, often requiring only a single stitch or surgical glue, leaving barely visible scars once healed."
    },
    {
      q: "When can I drive after surgery?",
      a: "Typically, you can resume driving once you are off prescription pain medication and can perform emergency maneuvers without pain, usually 3-5 days post-surgery."
    },
    {
      q: "Do I need a special diet?",
      a: "For most general laparoscopic procedures (like gallbladder or hernia), a light, liquid-based diet is recommended for the first 24 hours, advancing to soft foods as tolerated. Anti-reflux surgery requires a specific soft diet for several weeks."
    },
    {
      q: "How is pain managed?",
      a: "Pain is generally mild compared to open surgery. We use a multimodal approach including local anesthesia at incision sites and oral pain relievers for a few days."
    },
    {
      q: "Can I shower after surgery?",
      a: "Yes, you can typically shower 24-48 hours after surgery. We use waterproof dressings or surgical glue that allows for gentle washing."
    }
  ];

  const testimonialVideos = [
    {
      title: "Gallbladder Surgery Recovery",
      author: "Priya Sharma",
      videoId: "G4Cqz8ZMGts",
      thumbnail: "https://img.youtube.com/vi/G4Cqz8ZMGts/hqdefault.jpg"
    },
    {
      title: "Hernia Repair Success",
      author: "Rahul Verma",
      videoId: "JPaK5uLhBsw",
      thumbnail: "https://img.youtube.com/vi/JPaK5uLhBsw/hqdefault.jpg"
    },
    {
      title: "Patient Experience",
      author: "Amit Kumar",
      videoId: "TaOuNUjv_Dc",
      thumbnail: "https://img.youtube.com/vi/TaOuNUjv_Dc/hqdefault.jpg"
    }
  ];

  const awarenessVideos = [
    {
      title: "Understanding Gallstones",
      videoId: "rEd-4Pov_iw",
      thumbnail: "https://img.youtube.com/vi/rEd-4Pov_iw/hqdefault.jpg"
    },
    {
      title: "Hernia Symptoms & Repair",
      videoId: "wBhZyyHeWtI",
      thumbnail: "https://img.youtube.com/vi/wBhZyyHeWtI/hqdefault.jpg"
    },
    {
      title: "Benefits of Laparoscopy",
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
      <SEO
        title="Advanced Laparoscopic Surgery | Minimally Invasive Procedures - SCOD"
        description="Expert laparoscopic and minimally invasive surgeries at SCOD Clinic. Benefit from faster recovery, minimal scarring, and precision care for a wide range of surgical and metabolic conditions."
      />

      {/* 1. HERO SECTION */}
      <section className="relative h-[500px] flex items-center bg-gray-900 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://brandingpioneers.co.in/scod/scod-breadcrumbs/Laparoscopic Surgery.webp"
            alt="Laparoscopic Surgery"
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient Overlay */}
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
              <SafeIcon icon={FiActivity} className="w-5 h-5 text-emerald-300" />
              <span className="text-sm font-bold tracking-wide uppercase">General & Advanced Surgery</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Advanced <br /> <span className="text-emerald-300">Laparoscopic Surgery</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed font-light">
              Minimally invasive solutions for hernias, gallstones, and abdominal conditions. Faster recovery, less pain, and minimal scarring.
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
                href="tel:+918130130489"
                className="bg-transparent border-2 border-white/30 backdrop-blur-sm text-white px-8 py-3 rounded-full font-bold text-base hover:bg-white/10 transition-all flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5" />
                <span>Emergency: Call Us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. INTRO: WHAT IS LAPAROSCOPY? */}
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
                <span className="uppercase tracking-widest text-sm font-bold text-scod">Technology</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                What is <br /><span className="text-scod">Laparoscopic Surgery?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Often called "Keyhole Surgery," laparoscopic surgery is a modern technique where operations are performed through small incisions (usually 0.5–1.5 cm) far from the location.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Using a high-definition camera (laparoscope) and specialized precision instruments, Dr. Arush Sabharwal can perform complex procedures with enhanced vision and control, without the need for large open incisions.
              </p>

              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <SafeIcon icon={FiCheck} className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Reduced Pain</h4>
                    <p className="text-sm text-gray-500">Significantly less post-operative discomfort.</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <SafeIcon icon={FiClock} className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Faster Recovery</h4>
                    <p className="text-sm text-gray-500">Return to work and daily life much sooner.</p>
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
                  src="/assets/scod/Laparoscopic Surgery.webp"
                  alt="Laparoscopic Surgery"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. COMMON PROCEDURES TABS */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="uppercase tracking-widest text-sm font-bold text-scod">Our Expertise</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Common Procedures</h2>
          </div>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {Object.keys(procedures).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 shadow-sm border-2 ${activeTab === key ? 'bg-scod text-white border-scod shadow-lg scale-105' : 'bg-white text-gray-600 border-gray-100 hover:border-scod hover:text-scod'}`}
              >
                {key === 'gallbladder' ? 'Gallbladder' : key === 'hernia' ? 'Hernia Repair' : key === 'appendix' ? 'Appendix' : 'Anti-Reflux'}
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
                className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-gray-100 shadow-xl"
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
                          Benefits of Laparoscopy
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
                      <div className="absolute top-4 right-4 bg-scod text-white text-xs font-bold px-3 py-1 rounded-full">
                        Minimally Invasive
                      </div>
                    </div>

                    <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100 mb-4 flex-grow">
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <SafeIcon icon={FiClock} className="w-6 h-6 text-emerald-600 mr-2" />
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

      {/* 4. DOCTOR PROFILE SECTION */}
      <section className="py-16 bg-white overflow-hidden">
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
                Dr. Arush Sabharwal is a globally recognized pioneer in Minimal Access Surgery. He specializes in advanced laparoscopic procedures, ensuring faster recovery and minimal scarring for his patients.
              </p>
              <blockquote className="text-xl font-medium text-gray-800 italic mb-8 relative z-10">
                "Precision in surgery translates to quality of life for the patient. My goal is to get you back to your routine as safely and quickly as possible."
              </blockquote>

              <div className="flex flex-wrap gap-4 items-center">
                <Link to="/about" className="inline-flex items-center space-x-2 bg-scod text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1" >
                  <span>View Full Profile</span>
                  <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                </Link>
                <div className="flex items-center space-x-4 ml-4">
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-900">FACS</span>
                    <span className="text-xs text-gray-500">USA</span>
                  </div>
                  <div className="w-px h-8 bg-gray-300"></div>
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-900">FMAS</span>
                    <span className="text-xs text-gray-500">India</span>
                  </div>
                  <div className="w-px h-8 bg-gray-300"></div>
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-900">FIAGES</span>
                    <span className="text-xs text-gray-500">Fellow</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EMERGENCY WARNING SECTION (Moved Here) */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-red-50 border-l-8 border-red-500 rounded-r-2xl p-8 md:p-12 shadow-sm"
          >
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="bg-red-100 p-4 rounded-full text-red-600 flex-shrink-0">
                <SafeIcon icon={FiAlertTriangle} className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-red-700 mb-4">When to seek Emergency Care?</h3>
                <p className="text-gray-700 mb-6 text-lg">
                  Some abdominal conditions require immediate attention. Do not delay if you experience:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-800 font-medium">
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                      Sudden, severe abdominal pain
                    </li>
                    <li className="flex items-center text-gray-800 font-medium">
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                      Persistent vomiting or inability to keep liquids down
                    </li>
                    <li className="flex items-center text-gray-800 font-medium">
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                      High fever with chills
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-800 font-medium">
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                      Pain that settles in the lower right abdomen
                    </li>
                    <li className="flex items-center text-gray-800 font-medium">
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                      Yellowing of skin or eyes (Jaundice)
                    </li>
                    <li className="flex items-center text-gray-800 font-medium">
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                      Inability to pass gas or stool with bloating
                    </li>
                  </ul>
                </div>
                <a href="tel:911" className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors" >
                  <SafeIcon icon={FiPhone} className="w-5 h-5" />
                  <span>Call Emergency Services or Visit ER</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. PATIENT TESTIMONIALS (Slider) */}
      <section className="py-12 bg-gray-50 overflow-hidden">
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

      {/* 7. EDUCATIONAL RESOURCES (Slider) */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <div className="text-left">
              <span className="uppercase tracking-widest text-sm font-bold text-scod">Medical Education</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2">Educational <span className="text-scod">Resources</span></h2>
              <p className="text-gray-600 mt-4 max-w-2xl">
                Learn more about procedures, conditions, and recovery from Dr. Arush Sabharwal.
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
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-scod font-bold hover:text-blue-700 transition-colors">
                <span>View All Videos</span>
                <SafeIcon icon={FiYoutube} className="w-5 h-5" />
              </a>
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
                    className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100 h-full flex flex-col"
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

      {/* 8. FAQ SECTION */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">General <span className="text-scod">FAQs</span></h2>
          </div>
          <div className="space-y-4">
            {generalFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white focus:outline-none"
                >
                  <span className="text-lg font-bold text-gray-900 pr-8">{faq.q}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${openFaqIndex === index ? 'bg-scod text-white' : 'bg-gray-100 text-gray-500'}`}>
                    <SafeIcon icon={openFaqIndex === index ? FiMinus : FiPlus} className="w-4 h-4" />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-gray-50"
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

      {/* 9. CONTACT FORM SECTION */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Details */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Schedule Your <br /><span className="text-scod">Surgery</span></h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Whether it's a planned hernia repair or a gallstone consultation, our expert team ensures your safety and comfort.
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl shadow-sm flex items-center justify-center text-scod border border-gray-100">
                    <SafeIcon icon={FiPhone} className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Call Us</h4>
                    <p className="text-gray-600">+91 8130130489</p>
                    <p className="text-sm text-gray-400">Mon-Sat, 9am - 6pm</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl shadow-sm flex items-center justify-center text-scod border border-gray-100">
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
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gray-50 rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Appointment</h3>
              <form acceptCharset="UTF-8" action="https://app.formester.com/forms/vt4kzZ2it/submissions" method="POST" className="space-y-4">
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Condition / Procedure</label>
                  <div className="relative">
                    <SafeIcon icon={FiMessageSquare} className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                    <textarea name="message" value={formData.message} onChange={handleInputChange} rows="3" placeholder="E.g. Gallstones, Hernia, or General checkup..." className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scod focus:border-scod transition-all bg-white" ></textarea>
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

export default LaparoscopicSurgery;