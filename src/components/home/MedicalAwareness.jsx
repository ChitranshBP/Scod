import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiPlay, FiX, FiArrowRight, FiChevronLeft, FiChevronRight } = FiIcons;

const MedicalAwareness = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  const videos = [
    {
      id: 1,
      title: "Weightloss Experience with Bariatric Surgery and Options for weight regain explained with GLP1",
      category: "Awareness",
      description: "",
      thumbnail: "https://img.youtube.com/vi/TaOuNUjv_Dc/hqdefault.jpg",
      videoId: "TaOuNUjv_Dc",
      duration: ""
    },
    {
      id: 2,
      title: "Shri Durgiana Temple, Amritsar is the oldest temple of lord hanuman",
      category: "Awareness",
      description: "",
      thumbnail: "https://img.youtube.com/vi/G4Cqz8ZMGts/hqdefault.jpg",
      videoId: "G4Cqz8ZMGts",
      duration: ""
    },
    {
      id: 3,
      title: "A New Beginning Post-Surgery at SCOD Clinic Associated Hospital, New Delhi",
      category: "Recovery",
      description: "",
      thumbnail: "https://img.youtube.com/vi/JPaK5uLhBsw/hqdefault.jpg",
      videoId: "JPaK5uLhBsw",
      duration: ""
    },
    {
      id: 4,
      title: "Happy Diwali to you and your loved ones from SCOD Family",
      category: "Festive",
      description: "",
      thumbnail: "https://img.youtube.com/vi/SKy44XwIORo/hqdefault.jpg",
      videoId: "SKy44XwIORo",
      duration: ""
    },
    {
      id: 5,
      title: "Enjoy festive feast without any guilt!",
      category: "Festive",
      description: "",
      thumbnail: "https://img.youtube.com/vi/XOm8ba9_h4M/hqdefault.jpg",
      videoId: "XOm8ba9_h4M",
      duration: ""
    },
    {
      id: 6,
      title: "Types of weight loss surgeries",
      category: "Education",
      description: "",
      thumbnail: "https://img.youtube.com/vi/rEd-4Pov_iw/hqdefault.jpg",
      videoId: "rEd-4Pov_iw",
      duration: ""
    },
    {
      id: 7,
      title: "The truth about diabetes!",
      category: "Diabetes",
      description: "",
      thumbnail: "https://img.youtube.com/vi/V-gaaGIaKGw/hqdefault.jpg",
      videoId: "V-gaaGIaKGw",
      duration: ""
    },
    {
      id: 8,
      title: "OMAD- Shortcut or Setback?",
      category: "Lifestyle",
      description: "",
      thumbnail: "https://img.youtube.com/vi/c0s3MIIC4Nc/hqdefault.jpg",
      videoId: "c0s3MIIC4Nc",
      duration: ""
    },
    {
      id: 9,
      title: "How Bariatric Surgery is done?",
      category: "Education",
      description: "",
      thumbnail: "https://img.youtube.com/vi/bNoFXoLDnEc/hqdefault.jpg",
      videoId: "bNoFXoLDnEc",
      duration: ""
    },
    {
      id: 10,
      title: "Is Bariatric Surgery covered in Insurance?",
      category: "Insurance",
      description: "",
      thumbnail: "https://img.youtube.com/vi/wBhZyyHeWtI/hqdefault.jpg",
      videoId: "wBhZyyHeWtI",
      duration: ""
    },
    {
      id: 11,
      title: "PM targets obesity crisis",
      category: "Awareness",
      description: "",
      thumbnail: "https://img.youtube.com/vi/xeHuxyORptg/hqdefault.jpg",
      videoId: "xeHuxyORptg",
      duration: ""
    },
    {
      id: 12,
      title: "Changes after Bariatric Surgery!",
      category: "Post-Surgery",
      description: "",
      thumbnail: "https://img.youtube.com/vi/vs2gB7Zyuks/hqdefault.jpg",
      videoId: "vs2gB7Zyuks",
      duration: ""
    },
    {
      id: 13,
      title: "TIPS FOR GUT HEALTH!",
      category: "Gut Health",
      description: "",
      thumbnail: "https://img.youtube.com/vi/RxVX8HEQULc/hqdefault.jpg",
      videoId: "RxVX8HEQULc",
      duration: ""
    },
    {
      id: 14,
      title: "Amit Shah beats diabetes: Dr. Arush’s take!",
      category: "Diabetes",
      description: "",
      thumbnail: "https://img.youtube.com/vi/RXYX-e51hsA/hqdefault.jpg",
      videoId: "RXYX-e51hsA",
      duration: ""
    },
    {
      id: 15,
      title: "Is Bariatric Surgery cheating?",
      category: "Myths",
      description: "",
      thumbnail: "https://img.youtube.com/vi/N1eoPQnLlis/hqdefault.jpg",
      videoId: "N1eoPQnLlis",
      duration: ""
    }
  ];

  // Responsive items per view
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

  const nextSlide = () => {
    if (currentIndex < videos.length - itemsPerView) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0); // Loop back to start
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      setCurrentIndex(videos.length - itemsPerView); // Loop to end
    }
  };

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-50 rounded-full blur-[100px] opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Controls */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
            {/* Standardized Eyebrow Header */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="h-px w-10 bg-scod"></div>
              <span className="uppercase tracking-widest text-sm font-bold text-scod">Expert Insights</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Medical <span className="text-scod">Awareness</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Empowering you with knowledge. Watch Dr. Arush Sabharwal explain complex medical topics in simple terms.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-end gap-6 mb-4 md:mb-0"
          >
            {/* Slider Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-scod hover:text-white hover:border-scod transition-all duration-300 shadow-sm hover:shadow-md bg-white"
                aria-label="Previous video"
              >
                <SafeIcon icon={FiChevronLeft} className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-scod hover:text-white hover:border-scod transition-all duration-300 shadow-sm hover:shadow-md bg-white"
                aria-label="Next video"
              >
                <SafeIcon icon={FiChevronRight} className="w-6 h-6" />
              </button>
            </div>
            
            {/* YouTube Link */}
            <a 
              href="https://www.youtube.com/@drarushsabharwal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-scod font-bold text-lg hover:text-blue-700 transition-all"
            >
              <span>Visit YouTube Channel</span>
              <SafeIcon icon={FiArrowRight} className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Slider Window */}
        <div className="-mx-4 overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * (100 / videos.length)}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ width: `${(videos.length * 100) / itemsPerView}%` }}
          >
            {videos.map((video) => (
              <motion.div
                key={video.id}
                className="w-full md:w-1/2 lg:w-1/3 px-4 flex-shrink-0"
                style={{ width: `${100 / videos.length}%` }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="group h-full flex flex-col">
                  {/* Thumbnail Container */}
                  <div 
                    className="relative rounded-2xl overflow-hidden aspect-video mb-6 shadow-lg cursor-pointer group-hover:shadow-xl transition-all duration-300 border border-gray-100 bg-gray-100"
                    onClick={() => setSelectedVideo(video)}
                  >
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <SafeIcon icon={FiPlay} className="w-6 h-6 text-scod fill-current ml-1" />
                      </div>
                    </div>
                    {/* Duration Badge */}
                    <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-scod text-sm font-bold uppercase tracking-wider">{video.category}</span>
                    </div>
                    <h3 
                      className="text-xl font-bold text-gray-900 mb-2 group-hover:text-scod transition-colors line-clamp-2"
                      title={video.title}
                    >
                      {video.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {video.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
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
    </section>
  );
};

export default MedicalAwareness;