import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import SEO from '../components/common/SEO';

const {
  FiAward, FiUsers, FiHeart, FiTarget, FiCheck, FiGlobe,
  FiBookOpen, FiActivity, FiArrowRight, FiPlay, FiX, FiYoutube,
  FiClock, FiChevronLeft, FiChevronRight
} = FiIcons;

const AboutPage = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false) ;
  const [activeVideo, setActiveVideo] = useState(null);

  // Slider State
  const [currentPodcastIndex, setCurrentPodcastIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  // Responsive slider logic
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

  const nextPodcast = () => {
    if (currentPodcastIndex < podcastVideos.length - itemsPerView) {
      setCurrentPodcastIndex(prev => prev + 1);
    } else {
      setCurrentPodcastIndex(0);
    }
  };

  const prevPodcast = () => {
    if (currentPodcastIndex > 0) {
      setCurrentPodcastIndex(prev => prev - 1);
    } else {
      setCurrentPodcastIndex(podcastVideos.length - itemsPerView);
    }
  };

  // Timeline Data
  const timeline = [
    {
      region: 'India',
      title: 'Foundation & Specialization',
      institution: 'Sir Ganga Ram Hospital',
      description: 'Completed MBBS and MS in General Surgery. Fellowship in Minimal Access, Metabolic and Bariatric Surgery at Sir Ganga Ram Hospital, New Delhi.',
      icon: FiBookOpen,
      color: 'bg-blue-100 text-scod'
    },
    {
      region: 'France',
      title: 'European Advanced Training',
      institution: 'Strasbourg University & IRCAD',
      description: 'Diploma in Minimal Access Surgery (DMAS). Certified Laparoscopic Training at European Institute of Tele Surgery (EITS).',
      icon: FiGlobe,
      color: 'bg-blue-100 text-scod'
    },
    {
      region: 'Australia',
      title: 'International Fellowships',
      institution: 'John Flynn & Holy Spirit Hospitals',
      description: 'Fellowship in Obesity & Metabolic Surgery (Goldcoast) and Advanced Laparoscopy training with Dr. George Hopkins (Brisbane).',
      icon: FiActivity,
      color: 'bg-blue-100 text-scod'
    },
    {
      region: 'USA',
      title: 'Global Expertise',
      institution: 'Fresno, California',
      description: 'Advanced Minimal Access Surgery Training with Dr. Kelvin Higa, a pioneer in the field.',
      icon: FiAward,
      color: 'bg-blue-100 text-scod'
    }
  ];

  // Memberships
  const memberships = [
    "Obesity Surgery Society of India (OSSI)",
    "Intl. Fed. for Surgery of Obesity (IFSO)",
    "American Society of Metabolic & Bariatric Surgery (ASMBS)",
    "Society of American Gastro. Surgeons (SAGES)",
    "Indian Assoc. of Gastro-intestinal Surgeons (IAGES)",
    "Association of Minimal Access Surgeons of India (AMASI)",
    "Indian Hernia Society (IHS)",
    "Association of Surgeons of India (ASI)"
  ];

  // YouTube Podcast Videos
  const podcastVideos = [
    {
      id: 1,
      title: "Weightloss Experience with Bariatric Surgery",
      thumbnail: "https://img.youtube.com/vi/TaOuNUjv_Dc/maxresdefault.jpg",
      videoId: "TaOuNUjv_Dc",
      duration: "15:20"
    },
    {
      id: 2,
      title: "The Truth About Diabetes & Metabolic Surgery",
      thumbnail: "https://img.youtube.com/vi/V-gaaGIaKGw/maxresdefault.jpg",
      videoId: "V-gaaGIaKGw",
      duration: "12:45"
    },
    {
      id: 3,
      title: "Types of Weight Loss Surgeries Explained",
      thumbnail: "https://img.youtube.com/vi/rEd-4Pov_iw/maxresdefault.jpg",
      videoId: "rEd-4Pov_iw",
      duration: "18:30"
    },
    {
      id: 4,
      title: "Bariatric Surgery & Type 2 Diabetes Remission",
      thumbnail: "https://img.youtube.com/vi/bNoFXoLDnEc/maxresdefault.jpg",
      videoId: "bNoFXoLDnEc",
      duration: "10:15"
    },
    {
      id: 5,
      title: "Patient Success Story: Life After Surgery",
      thumbnail: "https://img.youtube.com/vi/vs2gB7Zyuks/maxresdefault.jpg",
      videoId: "vs2gB7Zyuks",
      duration: "08:45"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 font-sans bg-white text-gray-900"
    >
      <SEO
        title="Dr. Arush Sabharwal | Chairman & Chief Surgeon at SCOD Clinic"
        description="Meet Dr. Arush Sabharwal, a pioneer in bariatric and metabolic surgery with 15+ years of global experience. Expert in laparoscopic procedures that transform lives and restore metabolic health."
      />
      {/* 1. HERO SECTION - Light Theme */}
      <section className="relative py-12 lg:py-14 bg-blue-50 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-50 transform skew-x-12 translate-x-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-px w-12 bg-scod"></div>
                <span className="uppercase tracking-widest text-sm font-bold text-scod">Founder & Chairman, SCOD</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
                Dr. Arush <br />
                <span className="text-scod">Sabharwal</span>
              </h1>
              <div className="flex flex-wrap gap-3 mb-8 text-sm font-medium text-gray-600">
                <span className="bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">MBBS</span>
                <span className="bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">MS</span>
                <span className="bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">FMAS</span>
                <span className="bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">DMAS (France)</span>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed mb-10">
                A legacy of healing passed down through generations. Building a healthier future for India through advanced metabolic care.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#origin"
                  className="bg-scod text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg"
                >
                  Read The Origin Story
                </a>
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="group flex items-center space-x-3 bg-white text-scod border border-scod px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all"
                >
                  <SafeIcon icon={FiPlay} className="w-5 h-5 fill-current" />
                  <span>Watch Intro</span>
                </button>
              </div>
            </motion.div>

            {/* Hero Video - Replaced Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white aspect-video bg-black">
                <video
                  src="https://brandingpioneers.co.in/scod/Dr-Arush-Video-2.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. THE ORIGIN STORY - Clean Professional Look */}
      <section id="origin" className="py-12 bg-white">
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
                <span className="text-scod font-bold uppercase tracking-widest">The Legacy</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                The Origin of a <br />
                <span className="text-scod">Medical Dynasty</span>
              </h2>

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  "It all started with my great great grandfather, <span className="font-bold text-gray-900">Lala Jeevanmal Sabharwal</span>, who was a station master in Lahore. One day he heard Gandhiji talking about health and education. Inspired by Gandhiji’s speech, he then insisted that all his four sons would study medicine."
                </p>
                <p>
                  That singular moment of inspiration in 1919 birthed the family's first doctor — <span className="font-bold text-gray-900">Dr. Bodhraj</span>.
                </p>
                <p>
                  Dr. Bodhraj then decreed that every subsequent generation had to study medicine. And every son had to marry a doctor bride. Following the partition, the family moved to Delhi and opened five more hospitals, each bearing the name of the patriarch of the family — <span className="font-bold text-scod">"Jeevan"</span>.
                </p>
                <p className="font-medium p-4 bg-gray-50 border-l-4 border-scod rounded-r-lg">
                  Today, Dr. Arush Sabharwal stands as a proud successor of this lineage — a breed of <span className="text-scod font-bold">Best Bariatric Surgeon</span>, carrying forward a century-old promise to serve humanity.
                </p>
              </div>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <img
                  src="https://brandingpioneers.co.in/scod/sabharwal-family.webp"
                  alt="Medical History"
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-6 border-t border-gray-100">
                  <p className="text-gray-900 font-bold text-lg text-center">Serving Humanity Since 1919</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. VISION & BIOGRAPHY SECTION - With Doctor Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://brandingpioneers.co.in/scod/dr-arush-final-image.png"
                  alt="Dr. Arush Sabharwal Vision"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white font-bold text-lg">Dr. Arush Sabharwal</p>
                  <p className="text-blue-200 text-sm">Founder & Chairman</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Fighting the <span className="text-scod">Silent Epidemic</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Dr. Arush Sabharwal is the founder and chairman of the <span className="font-semibold text-gray-900">Surgical Center for Obesity and Diabetes (SCOD)</span>. With four active clinics in Delhi NCR and plans for pan-India expansion, Dr. Sabharwal is on a mission to establish exclusive state-of-the-art centers for metabolic care across the country.
                </p>
                <p>
                  His vision stems from a deep concern for the growing health crisis. India has become the <span className="font-semibold text-gray-900">Diabetes Capital of the World</span>. Dr. Sabharwal believes that obesity is the root cause of widespread metabolic issues including diabetes, infertility, and joint pain.
                </p>
                <p>
                  He currently serves as the Chief of Bariatric and Metabolic Surgery at prestigious institutions including <span className="font-semibold text-gray-900">Jeewan Mala Hospital, Apollo Spectra Hospital (Karol Bagh), and Fortis C-Doc Hospital (Nehru Place)</span>.
                </p>
              </div>
              <div className="mt-8 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <p className="italic text-gray-800 font-medium text-lg">
                  "I wish to contribute to society by eradicating these metabolic problems from my country. It is not just about surgery; it is about restoring the health of a nation."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. TRAINING JOURNEY - Clean Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <span className="text-scod font-bold tracking-widest uppercase text-sm">International Expertise</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Fellowships & Training</h2>
            <p className="text-gray-600 mt-4 max-w-2xl">
              Dr. Sabharwal has trained with global pioneers in bariatric surgery across three continents to bring world-class care to India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:border-scod/20"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center text-2xl`}>
                    <SafeIcon icon={item.icon} className="w-7 h-7" />
                  </div>
                  <span className="px-4 py-1 bg-white border border-gray-200 text-gray-600 rounded-full text-sm font-bold uppercase tracking-wider">
                    {item.region}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <div className="text-scod font-semibold mb-4 text-sm">{item.institution}</div>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VIDEO PODCASTS SECTION - Slider with SCOD Blue */}
      <section className="py-12 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <div className="flex items-center space-x-3 mb-4 text-scod">
                <SafeIcon icon={FiYoutube} className="w-8 h-8" />
                <span className="font-bold tracking-wider uppercase text-sm">Official Channel</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Dr. Arush on YouTube</h2>
              <p className="text-gray-600 max-w-xl text-lg">
                Watch expert analysis, patient stories, and deep dives into metabolic health.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-end gap-6 mb-4 md:mb-0"
            >
              {/* Slider Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevPodcast}
                  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-scod hover:text-white hover:border-scod transition-all duration-300 shadow-sm hover:shadow-md bg-white"
                  aria-label="Previous video"
                >
                  <SafeIcon icon={FiChevronLeft} className="w-6 h-6" />
                </button>
                <button
                  onClick={nextPodcast}
                  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-scod hover:text-white hover:border-scod transition-all duration-300 shadow-sm hover:shadow-md bg-white"
                  aria-label="Next video"
                >
                  <SafeIcon icon={FiChevronRight} className="w-6 h-6" />
                </button>
              </div>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-scod hover:bg-blue-700 px-6 py-3 rounded-full text-white font-semibold transition-all shadow-lg shadow-blue-900/20"
              >
                <span>Subscribe Now</span>
                <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Slider Container */}
          <div className="-mx-4 overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentPodcastIndex * (100 / podcastVideos.length)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ width: `${(podcastVideos.length * 100) / itemsPerView}%` }}
            >
              {podcastVideos.map((video) => (
                <motion.div
                  key={video.id}
                  className="w-full md:w-1/2 lg:w-1/3 px-4 flex-shrink-0"
                  style={{ width: `${100 / podcastVideos.length}%` }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <div
                    className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col"
                    onClick={() => setActiveVideo(video)}
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                        <div className="w-14 h-14 bg-scod rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <SafeIcon icon={FiPlay} className="w-6 h-6 text-white fill-current ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-bold px-2 py-1 rounded flex items-center">
                        <SafeIcon icon={FiClock} className="w-3 h-3 mr-1" />
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-5 flex-grow">
                      <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-scod transition-colors line-clamp-2 leading-tight">
                        {video.title}
                      </h3>
                      <p className="text-gray-500 text-sm font-medium flex items-center mt-3">
                        <span className="text-scod mr-2">●</span> Watch Video Podcast
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. MEMBERSHIPS - Clean Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Professional <span className="text-scod">Affiliations</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Dr. Sabharwal holds memberships in the world's most prestigious surgical societies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {memberships.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-scod hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shadow-sm mb-4 text-scod group-hover:bg-scod group-hover:text-white transition-colors">
                  <SafeIcon icon={FiCheck} className="w-6 h-6" />
                </div>
                <p className="font-semibold text-gray-800 text-sm leading-relaxed">{member}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal Main */}
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
                src="https://brandingpioneers.co.in/scod/Dr-Arush-Video-2.mp4"
                className="w-full h-full object-cover"
                controls
                autoPlay
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Podcast Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            onClick={() => setActiveVideo(null)}
          >
            <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-white hover:text-black transition-all"
              >
                <SafeIcon icon={FiX} className="w-6 h-6" />
              </button>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=1`}
                title={activeVideo.title}
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

export default AboutPage;