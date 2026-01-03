import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiPlay, FiPause } = FiIcons;

const AboutPreview = () => {
  // Video Control State - Initialized to false so it doesn't autoplay
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-12 bg-white text-gray-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Text Content (Span 5) */}
          <div className="lg:col-span-5 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Standardized Eyebrow Header */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="h-px w-10 bg-scod"></div>
                <span className="uppercase tracking-widest text-sm font-bold text-scod">About Us</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">
                Healthier Lives <br /> Start Here At <br /> <span className="text-scod">SCOD.</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-md">
                We understand that the journey to wellness is personal. Our advanced medical practices focus on preventive care, surgical excellence, and long-term treatment for a healthier future.
              </p>
              <div className="flex items-center space-x-8 relative">
                <Link 
                  to="/about" 
                  className="bg-scod text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors z-20 shadow-lg"
                >
                  More About Us
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Center Column - Video (Span 4) */}
          <div className="lg:col-span-4 relative mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden h-[500px] w-full shadow-2xl bg-gray-100 group"
            >
              {/* Removed 'autoPlay' and 'muted' attributes */}
              <video 
                ref={videoRef}
                src="https://brandingpioneers.co.in/scod/Dr-Arush-Intro.mp4" 
                className="w-full h-full object-cover cursor-pointer"
                loop 
                playsInline
                onClick={togglePlay}
              />

              {/* Desktop Circular Badge Overlay (Hidden on Mobile) */}
              <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 hidden md:block z-20">
                <div 
                  className="relative w-32 h-32 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-xl group border border-gray-100"
                  onClick={togglePlay}
                >
                  {/* Rotating Text */}
                  <div className={`absolute inset-0 ${isPlaying ? 'animate-spin-slow' : ''} p-1`}>
                    <svg viewBox="0 0 100 100" width="100%" height="100%" className="overflow-visible">
                      <defs>
                        <path id="circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                      </defs>
                      <text fontSize="11.5" fontWeight="bold" fill="#111827" letterSpacing="1.5">
                        <textPath xlinkHref="#circle">
                          {isPlaying ? '• CLICK TO PAUSE • WATCH VIDEO' : '• CLICK TO PLAY • WATCH VIDEO'}
                        </textPath>
                      </text>
                    </svg>
                  </div>

                  {/* Play/Pause Icon */}
                  <div className="w-12 h-12 bg-scod rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform text-white shadow-lg">
                    <SafeIcon icon={isPlaying ? FiPause : FiPlay} className="w-5 h-5 ml-1" />
                  </div>
                </div>
              </div>

              {/* Mobile Play/Pause Center Button (Visible only on Mobile) */}
              <div 
                className={`absolute inset-0 flex items-center justify-center md:hidden z-20 ${!isPlaying ? 'bg-black/30' : 'bg-transparent'}`}
                onClick={togglePlay}
              >
                {!isPlaying && (
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg animate-fade-in-up">
                    <SafeIcon icon={FiPlay} className="w-6 h-6 text-scod ml-1" />
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Stats (Span 3) */}
          <div className="lg:col-span-3 flex flex-col justify-center space-y-12 lg:pl-12 mt-12 lg:mt-0">
            {[
              { number: "15+", label: "Expert Surgeons" },
              { number: "4+", label: "Specialized Depts" },
              { number: "5k+", label: "Happy Patients" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-gray-900 mb-2 tracking-tight">{stat.number}</div>
                <div className="text-gray-50 font-medium text-lg uppercase tracking-wide pl-1 !text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutPreview;