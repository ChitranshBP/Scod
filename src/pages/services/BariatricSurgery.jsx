import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { 
  FiActivity, FiCheck, FiArrowRight, FiAlertTriangle, 
  FiTrendingUp, FiDownload, FiCalendar, FiUserCheck,
  FiHelpCircle, FiClock, FiShield, FiPlus, FiMinus,
  FiUser, FiMail, FiPhone, FiMessageSquare, FiSend,
  FiTrendingDown, FiSun, FiMoon, FiAlertCircle, 
  FiInfo, FiHeart, FiCheckCircle, FiPlay, FiX, 
  FiYoutube, FiChevronLeft, FiChevronRight 
} = FiIcons;

const BariatricSurgery = () => {
  const [activeTab, setActiveTab] = useState('sleeve');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  // Slider States
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

  // --- Data Sections ---
  const generalFaqs = [
    { q: "How much weight can I expect to lose?", a: "Most patients lose between 60% to 80% of their excess body weight within 12-18 months after surgery. The exact amount depends on the procedure chosen and your adherence to lifestyle changes." },
    { q: "Is bariatric surgery safe?", a: "Yes, modern bariatric surgery is considered as safe as gallbladder surgery. At SCOD, we use advanced minimally invasive laparoscopic techniques which significantly reduce risks and recovery time." },
    { q: "Will my insurance cover the procedure?", a: "Many insurance plans cover bariatric surgery if you meet specific medical criteria, such as a BMI over 40, or over 35 with comorbidities like diabetes. Our team helps navigate the insurance approval process." },
    { q: "Can I get pregnant after surgery?", a: "Yes, but we generally recommend waiting 12-18 months after surgery to ensure your weight is stable and nutritional status is optimal for a healthy pregnancy. Women often find their fertility improves significantly after weight loss." },
    { q: "Will I have to take vitamins forever?", a: "Yes. Because these surgeries alter how your body absorbs nutrients, lifelong vitamin and mineral supplementation is essential to prevent deficiencies and maintain health." }
  ];

  const indications = [
    { title: "Obesity Class II & III", desc: "BMI ≥35 with comorbidities or BMI ≥40 regardless of health status.", image: "/assets/scod/treatment/Obesity Class II & III.webp" },
    { title: "Type 2 Diabetes", desc: "Uncontrolled blood sugar despite medication, targeting remission.", image: "/assets/scod/treatment/Type 2 Diabetes.webp" },
    { title: "PCOD / PCOS", desc: "Hormonal imbalances and infertility issues related to excess weight.", image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=600&q=80" },
    { title: "Sleep Apnea", desc: "Obstructive sleep apnea requiring CPAP or causing severe fatigue.", image: "https://images.unsplash.com/photo-1520206183501-b80df61043c2?auto=format&fit=crop&w=600&q=80" },
    { title: "Hypertension", desc: "High blood pressure resistant to standard medical therapy.", image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=600&q=80" },
    { title: "Joint Pain", desc: "Osteoarthritis aggravated by excess weight load on joints.", image: "/assets/scod/treatment/Joint Pain.webp" }
  ];

  const testimonialVideos = [
    { title: "Weight Loss Surgery Journey", author: "Mr. Sudesh Gupta", videoId: "R_1SeIg3FaQ", thumbnail: "https://img.youtube.com/vi/NnSd1zg_Ndk/maxresdefault.jpg" },
    { title: "Gastric Bypass Success", author: "Akanksha Bhardwaj", videoId: "u_dbxl4Y7Vs", thumbnail: "https://img.youtube.com/vi/u_dbxl4Y7Vs/maxresdefault.jpg" },
    { title: "Life After Metabolic Surgery", author: "Mrs. Neetu Aggarwal", videoId: "_IBJ0_YzXog", thumbnail: "https://img.youtube.com/vi/_IBJ0_YzXog/maxresdefault.jpg" }
  ];

  const awarenessVideos = [
    { title: "Types of Weight Loss Surgeries", videoId: "rEd-4Pov_iw", thumbnail: "https://img.youtube.com/vi/rEd-4Pov_iw/hqdefault.jpg" },
    { title: "Is Bariatric Surgery Covered in Insurance?", videoId: "wBhZyyHeWtI", thumbnail: "https://img.youtube.com/vi/wBhZyyHeWtI/hqdefault.jpg" },
    { title: "Life After Bariatric Surgery", videoId: "vs2gB7Zyuks", thumbnail: "https://img.youtube.com/vi/vs2gB7Zyuks/hqdefault.jpg" }
  ];

  const galleryImages = [
    { before: "https://brandingpioneers.co.in/scod/patient3-scod.webp", after: "https://brandingpioneers.co.in/scod/patient2-scod.webp", label: "Gastric Sleeve" },
    { before: "https://brandingpioneers.co.in/scod/patient4-scod.webp", after: "https://brandingpioneers.co.in/scod/patient5-scod.webp", label: "Gastric Bypass" },
    { before: "https://brandingpioneers.co.in/scod/patient1-scod.webp", after: "https://brandingpioneers.co.in/scod/patient3-scod.webp", label: "Metabolic Surgery" }
  ];

  const procedures = {
    sleeve: {
      title: "Laparoscopic Sleeve Gastrectomy (LSG)",
      subtitle: "The restrictive gold standard",
      what: "A minimally invasive procedure where approximately 80% of the stomach is removed, leaving a banana-shaped 'sleeve'.",
      how: "It restricts food intake and removes the hunger-hormone (Ghrelin) producing portion of the stomach, significantly reducing appetite.",
      suitability: "Ideal for patients with BMI >30, lower surgical risk profile, or those taking medications that require stomach absorption.",
      recovery: "1-2 nights hospital stay. Return to work in 1-2 weeks. Full recovery in 4 weeks.",
      faqs: [
        { q: "Is it reversible?", a: "No, the portion of the stomach removed is permanent." },
        { q: "Will I have dietary restrictions?", a: "Yes, focused on protein and small portions, but most foods can be tolerated over time." }
      ]
    },
    rygb: {
      title: "Roux-en-Y Gastric Bypass (RYGB)",
      subtitle: "The metabolic gold standard",
      what: "Creates a small stomach pouch and bypasses a portion of the small intestine to restrict intake and reduce absorption.",
      how: "Changes gut hormones to promote satiety and suppress hunger while limiting calorie absorption.",
      suitability: "Best for patients with severe acid reflux (GERD) or uncontrolled Type 2 Diabetes.",
      recovery: "2 nights hospital stay. Return to work in 2 weeks. Full recovery in 4-6 weeks.",
      faqs: [
        { q: "Does it cure diabetes?", a: "It leads to remission in up to 80% of patients, often within days of surgery." },
        { q: "What is dumping syndrome?", a: "Nausea/dizziness after eating sugar/fats, which acts as a deterrent for unhealthy eating." }
      ]
    },
    mgb: {
      title: "Mini Gastric Bypass (MGB/OAGB)",
      subtitle: "High efficacy, single anastomosis",
      what: "A simplified bypass connecting a long stomach pouch directly to the small intestine loop.",
      how: "Combines restriction with significant malabsorption, often resulting in superior weight loss for higher BMIs.",
      suitability: "Patients with very high BMI or metabolic syndrome. Not recommended for severe reflux sufferers.",
      recovery: "1-2 nights hospital stay. Rapid recovery due to fewer connection points.",
      faqs: [
        { q: "Is it reversible?", a: "It is technically reversible or convertible to standard bypass if needed." },
        { q: "Why choose MGB over RYGB?", a: "Shorter operative time and often greater weight loss maintenance." }
      ]
    },
    revision: {
      title: "Revisional Bariatric Surgery",
      subtitle: "Corrective solutions for long-term success",
      what: "Procedures performed to correct or enhance the results of a previous weight loss surgery.",
      how: "Converts one procedure to another (e.g., Sleeve to Bypass) or modifies existing anatomy.",
      suitability: "Patients with weight regain, unresolved comorbidities, or complications like severe reflux.",
      recovery: "Varies by procedure complexity. Typically 2-3 nights hospital stay.",
      faqs: [
        { q: "Is revision riskier?", a: "It is technically more complex, requiring an expert surgeon like Dr. Arush." },
        { q: "Can I have surgery again?", a: "Yes, evaluation is key to understanding why the first procedure didn't yield optimal results." }
      ]
    }
  };

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
            src="https://brandingpioneers.co.in/scod/scod-breadcrumbs/Bariatric Surgery.webp" 
            alt="Bariatric Surgery" 
            className="w-full h-full object-cover object-center" 
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-scod/95 via-scod/30 to-transparent"></div>
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
              <span className="text-sm font-bold  tracking-wide uppercase">Advanced Metabolic Care</span>
            </div>
            
            <h1 className="text-4xl text-white md:text-6xl font-bold mb-6 leading-tight">
              Bariatric & <br />
              <span className="text-emerald-300">Metabolic Surgery</span>
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed font-light">
              Expert surgical solutions for sustainable weight loss, diabetes remission, and PCOD management. 
              Reclaim your health with minimally invasive precision.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link 
                to="/contact" 
                className="bg-white text-scod px-8 py-3 rounded-full font-bold text-base hover:bg-gray-100 transition-all shadow-lg flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiCalendar} className="w-5 h-5" />
                <span>Book Assessment</span>
              </Link>
              <a 
                href="/resources" 
                className="bg-transparent border-2 border-white/30 backdrop-blur-sm text-white px-8 py-3 rounded-full font-bold text-base hover:bg-white/10 transition-all flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiDownload} className="w-5 h-5" />
                <span>Pre-Op Checklist</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. OVERVIEW SECTION */}
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
                <span className="uppercase tracking-widest text-sm font-bold text-scod">Overview</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Understanding <br/><span className="text-scod">Bariatric Surgery</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Bariatric surgery, often referred to as weight loss surgery, involves making changes to your digestive system to help you lose weight. It is not just about reducing the size of the stomach; it involves complex metabolic changes that affect hunger hormones and insulin sensitivity.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                These procedures are performed when diet and exercise haven't worked or when you have serious health problems because of your weight. At SCOD, we view surgery as a powerful tool that, when combined with lifestyle changes, offers the best chance for long-term weight management and disease resolution.
              </p>
              <div className="flex items-center space-x-8 text-gray-800 font-medium">
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="text-emerald-500 w-5 h-5" />
                  <span>Minimally Invasive</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="text-emerald-500 w-5 h-5" />
                  <span>Evidence Based</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="text-emerald-500 w-5 h-5" />
                  <span>Life Changing</span>
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
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80" 
                  alt="Medical Consultation" 
                  className="w-full h-auto object-cover" 
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs hidden md:block">
                <p className="text-scod font-bold text-4xl mb-1">15+</p>
                <p className="text-gray-600 text-sm">Years of experience in transforming lives through metabolic surgery.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. INDICATIONS SECTION */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900">Who is a <span className="text-scod">Candidate?</span></h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Bariatric surgery is a life-saving medical intervention for those struggling with obesity-related conditions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {indications.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-6 text-xl font-bold text-white mb-0">{item.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
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
                className={`px-8 py-4 rounded-full font-bold text-sm md:text-base transition-all duration-300 shadow-sm border-2 ${
                  activeTab === key 
                    ? 'bg-scod text-white border-scod shadow-lg scale-105' 
                    : 'bg-white text-gray-600 border-gray-100 hover:border-scod hover:text-scod'
                }`}
              >
                {key === 'sleeve' ? 'Gastric Sleeve' : 
                 key === 'rygb' ? 'Gastric Bypass' : 
                 key === 'mgb' ? 'Mini Gastric Bypass' : 'Revisional'}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[500px]">
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
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                      {procedures[activeTab].title}
                    </h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                          <SafeIcon icon={FiActivity} className="w-5 h-5 text-scod mr-2" /> What is it?
                        </h4>
                        <p className="text-gray-600 leading-relaxed">{procedures[activeTab].what}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                          <SafeIcon icon={FiTrendingUp} className="w-5 h-5 text-scod mr-2" /> How it works
                        </h4>
                        <p className="text-gray-600 leading-relaxed">{procedures[activeTab].how}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                          <SafeIcon icon={FiUserCheck} className="w-5 h-5 text-scod mr-2" /> Ideal Candidate
                        </h4>
                        <p className="text-gray-600 leading-relaxed">{procedures[activeTab].suitability}</p>
                      </div>

                      <div className="bg-white p-6 rounded-xl border-l-4 border-scod">
                        <h4 className="font-bold text-gray-900 mb-1">Recovery Timeline</h4>
                        <p className="text-gray-600 text-sm">{procedures[activeTab].recovery}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Visual + FAQ */}
                  <div className="flex flex-col h-full">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 h-64 mb-8 flex items-center justify-center relative group">
                       <img
                        src={
                          activeTab === 'sleeve' ? '/assets/scod/treatment/bariatric/Laparoscopic Sleeve Gastrectomy (LSG).webp' :
                          activeTab === 'rygb' ? '/assets/scod/treatment/bariatric/Roux-en-Y Gastric Bypass (RYGB).webp' :
                          activeTab === 'revision' ? '/assets/scod/treatment/bariatric/Revisional Bariatric Surgery.webp' :
                          'https://brandingpioneers.co.in/scod/Metabolic.webp'
                        }
                        alt={procedures[activeTab].title}
                        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-scod text-white text-xs font-bold px-3 py-1 rounded-full">
                        Minimally Invasive
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex-grow">
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                        <SafeIcon icon={FiHelpCircle} className="w-5 h-5 text-scod mr-2" /> Common Questions
                      </h4>
                      <div className="space-y-4">
                        {procedures[activeTab].faqs.map((faq, i) => (
                          <div key={i} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                            <p className="font-semibold text-gray-800 text-sm mb-1">{faq.q}</p>
                            <p className="text-gray-600 text-sm">{faq.a}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 5. DOCTOR PROFILE SECTION */}
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
                  Dr. Arush Sabharwal is a globally recognized pioneer in Minimal Access, Metabolic, and Bariatric Surgery. With fellowships from prestigious institutions in France, USA, and Australia, he brings world-class surgical expertise to India.
                </p>
                
                <blockquote className="text-xl font-medium text-gray-800 italic mb-8 relative z-10">
                  "My mission is not just to perform surgery, but to partner with patients in their journey towards a healthier, more active life."
                </blockquote>

                <div className="flex flex-wrap gap-4 items-center">
                  <Link 
                    to="/about" 
                    className="inline-flex items-center space-x-2 bg-scod text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
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

      {/* 6. DIABETES REMISSION SPOTLIGHT */}
      <section className="py-12 bg-scod text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                Type 2 Diabetes <br />
                <span className="text-emerald-300">Remission</span>
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Metabolic surgery is currently the most effective treatment for Type 2 Diabetes. Unlike medication which manages symptoms, surgery targets the root metabolic cause.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="text-4xl font-bold text-white mb-1">85%</div>
                  <div className="text-blue-200 text-sm font-medium">Patients achieve remission</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-1">&lt;7.0</div>
                  <div className="text-blue-200 text-sm font-medium">Target HbA1c Levels</div>
                </div>
              </div>
              <Link 
                to="/services/metabolic-surgery" 
                className="inline-flex items-center text-white font-bold border-b-2 border-emerald-400 pb-1 hover:text-emerald-300 transition-colors"
              >
                Learn more about Metabolic Surgery
                <SafeIcon icon={FiArrowRight} className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-4 text-white ">Why it works?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center mr-4 flex-shrink-0 font-bold">1</span>
                  <p className="text-blue-50">Caloric restriction leads to immediate blood sugar reduction.</p>
                </li>
                <li className="flex items-start">
                  <span className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center mr-4 flex-shrink-0 font-bold">2</span>
                  <p className="text-blue-50">Gut hormone changes (GLP-1 increase) enhance insulin production.</p>
                </li>
                <li className="flex items-start">
                  <span className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center mr-4 flex-shrink-0 font-bold">3</span>
                  <p className="text-blue-50">Weight loss reduces insulin resistance long-term.</p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. NEW: BEFORE/AFTER GALLERY */}
      <section id="gallery" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900">Patient <span className="text-scod">Transformations</span></h2>
            <p className="text-gray-600 mt-2">Real results from our bariatric surgery patients.</p>
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

      {/* 8. PATIENT TESTIMONIALS (Slider) */}
      <section className="py-12 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <div className="text-left">
              <span className="uppercase tracking-widest text-sm font-bold text-scod">Success Stories</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2">Real Stories, <span className="text-scod">Real Results</span></h2>
            </div>
            
            {/* Slider Controls */}
            <div className="flex flex-col items-end gap-4">
              <div className="flex items-center gap-3">
                <button 
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-scod hover:text-white hover:border-scod transition-all duration-300 shadow-sm bg-white"
                >
                  <SafeIcon icon={FiChevronLeft} className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-scod hover:text-white hover:border-scod transition-all duration-300 shadow-sm bg-white"
                >
                  <SafeIcon icon={FiChevronRight} className="w-5 h-5" />
                </button>
              </div>
              <Link to="/resources" className="inline-flex items-center space-x-2 text-scod font-bold hover:text-blue-700 transition-colors">
                <span>View All Stories</span>
                <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
              </Link>
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

      {/* 9. DOCTOR AWARENESS (Slider) */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <div className="text-left">
              <span className="uppercase tracking-widest text-sm font-bold text-scod">Medical Education</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2">Educational <span className="text-scod">Resources</span></h2>
              <p className="text-gray-600 mt-4 max-w-2xl">
                Watch Dr. Arush Sabharwal explain the science, safety, and benefits of bariatric procedures.
              </p>
            </div>
            
            {/* Slider Controls */}
            <div className="flex flex-col items-end gap-4">
              <div className="flex items-center gap-3">
                <button 
                  onClick={prevAwareness}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-scod hover:text-white hover:border-scod transition-all duration-300 shadow-sm bg-white"
                >
                  <SafeIcon icon={FiChevronLeft} className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextAwareness}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-scod hover:text-white hover:border-scod transition-all duration-300 shadow-sm bg-white"
                >
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

      {/* 10. FAQ SECTION */}
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
                className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white"
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

      {/* 11. CONTACT FORM SECTION */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Contact Details */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Start Your <br/><span className="text-scod">Journey?</span></h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Take the first step towards a healthier, happier you. Fill out the form to schedule a consultation with Dr. Arush Sabharwal.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl shadow-sm flex items-center justify-center text-scod border border-gray-100">
                    <SafeIcon icon={FiPhone} className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Call Us</h4>
                    <p className="text-gray-600">+1 (555) SCOD-MED</p>
                    <p className="text-sm text-gray-400">Mon-Sat, 9am - 6pm</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl shadow-sm flex items-center justify-center text-scod border border-gray-100">
                    <SafeIcon icon={FiMail} className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Email Us</h4>
                    <p className="text-gray-600">info@scodmedical.com</p>
                    <p className="text-sm text-gray-400">We reply within 24 hours</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Consultation</h3>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <div className="relative">
                    <SafeIcon icon={FiUser} className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scod focus:border-scod transition-all bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <div className="relative">
                      <SafeIcon icon={FiMail} className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@example.com"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scod focus:border-scod transition-all bg-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <div className="relative">
                      <SafeIcon icon={FiPhone} className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+1 (555) 000-0000"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scod focus:border-scod transition-all bg-white"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <div className="relative">
                    <SafeIcon icon={FiMessageSquare} className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      placeholder="Tell us about your goals or questions..."
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scod focus:border-scod transition-all bg-white"
                    ></textarea>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-scod text-white font-bold text-lg py-4 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                >
                  <SafeIcon icon={FiSend} className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
                <p className="text-xs text-gray-500 text-center mt-4">
                  Your information is secure and confidential.
                </p>
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
            <div 
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
              onClick={e => e.stopPropagation()}
            >
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

export default BariatricSurgery;