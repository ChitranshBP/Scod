import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiPlay, FiChevronLeft, FiChevronRight, FiX, FiQuote, FiArrowRight } = FiIcons;

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Mr. Sudesh Gupta",
      role: "Weight Loss Surgery",
      quote: "Mr. Sudesh Gupta shares all the things he is able to do and how much more he enjoys life since having weight loss surgery with Dr. Arush Sabharwal at SCOD, Delhi, India.",
      image: "https://img.youtube.com/vi/NnSd1zg_Ndk/maxresdefault.jpg",
      videoId: "R_1SeIg3FaQ&t"
    },
    {
      id: 2,
      name: "Akanksha Bhardwaj ",
      role: "Gastric Bypass",
      quote: "Akanksha Bhardwaj underwent a Gastric Bypass with HDFC ERGO Insurance",
      image: "https://img.youtube.com/vi/u_dbxl4Y7Vs/maxresdefault.jpg",
      videoId: "u_dbxl4Y7Vs"
    },
    {
      id: 3,
      name: "Mrs. Noor Bano",
      role: "",
      quote: "Mrs. Noor Bano who fought the battle suffering from Super obesity with Multiple Obesity associated comorbidities (obesity hypoventilation syndrome, severe OSA, Type 2 diabetes etc)",
      image: "https://img.youtube.com/vi/1GjE_mEZMBM/maxresdefault.jpg",
      videoId: "1QnINDPc1WU"
    },
    {
      id: 4,
      name: "Mrs. Neetu Aggarwal ",
      role: "Surgery",
      quote: "Mrs. Neetu Aggarwal is a story worth sharing. Before the surgery, her weight was 88 kg with diabetes level very low and after the surgery, it is 52 Kg and with diabetes level maintained",
      image: "https://img.youtube.com/vi/_IBJ0_YzXog/maxresdefault.jpg",
      videoId: "_IBJ0_YzXog"
    },
    {
      id: 5,
      name: "Mrs. Shabana ",
      role: "Laparoscopic Gastric Sleeve",
      quote: "Mrs. Shabana from Roorkee who underwent Laparoscopic Gastric Sleeve",
      image: "https://img.youtube.com/vi/6Z4eXkmuRJU/maxresdefault.jpg",
      videoId: "6Z4eXkmuRJU"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getCardStyle = (index) => {
    const length = testimonials.length;
    const distance = (index - activeIndex + length) % length;

    let position = 'hidden';
    let zIndex = 0;
    let opacity = 0;
    let scale = 0.8;
    let translateX = '0%';

    if (distance === 0) {
      position = 'center';
      zIndex = 20;
      opacity = 1;
      scale = 1;
      translateX = '0%';
    } else if (distance === 1 || distance === - (length - 1)) {
      position = 'right';
      zIndex = 10;
      opacity = 0.6;
      scale = 0.85;
      translateX = '60%';
    } else if (distance === length - 1 || distance === -1) {
      position = 'left';
      zIndex = 10;
      opacity = 0.6;
      scale = 0.85;
      translateX = '-60%';
    }

    return { position, zIndex, opacity, scale, translateX };
  };

  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-left flex flex-col items-start"
          >
            {/* Standardized Eyebrow Header */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="h-px w-10 bg-scod"></div>
              <span className="uppercase tracking-widest text-sm font-bold text-scod">Patient Stories</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Watch their <span className="text-scod">stories</span>
            </h2>
            <p className="text-xl text-gray-500">Real patients, real results.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-4 md:mb-0"
          >
             <Link to="/resources" className="group flex items-center gap-2 text-scod font-bold text-lg hover:gap-3 transition-all">
                <span>View All Stories</span>
                <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        {/* Carousel Container */}
        <div className="relative h-[500px] flex items-center justify-center perspective-1000">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 md:left-12 z-30 p-3 rounded-full bg-white shadow-lg text-gray-800 hover:bg-emerald-50 transition-colors border border-gray-100"
          >
            <SafeIcon icon={FiChevronLeft} className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 md:right-12 z-30 p-3 rounded-full bg-white shadow-lg text-gray-800 hover:bg-emerald-50 transition-colors border border-gray-100"
          >
            <SafeIcon icon={FiChevronRight} className="w-6 h-6" />
          </button>

          {/* Cards */}
          <div className="relative w-full max-w-4xl h-[400px] flex justify-center items-center">
            {testimonials.map((testimonial, index) => {
              const style = getCardStyle(index);
              if (style.position === 'hidden') return null;

              return (
                <motion.div
                  key={testimonial.id}
                  className="absolute w-[300px] md:w-[600px] h-[350px] md:h-[400px] rounded-2xl shadow-2xl overflow-hidden bg-gray-900 cursor-pointer"
                  initial={false}
                  animate={{
                    scale: style.scale,
                    x: style.translateX,
                    opacity: style.opacity,
                    zIndex: style.zIndex,
                    filter: style.position === 'center' ? 'blur(0px)' : 'blur(1px) brightness(0.7)'
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  onClick={() => {
                    if (style.position === 'center') {
                      // Nothing, play handled by button
                    } else if (style.position === 'left') {
                      prevSlide();
                    } else if (style.position === 'right') {
                      nextSlide();
                    }
                  }}
                >
                  {/* Background Image */}
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover opacity-80" 
                  />
                  
                  {/* Dark Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-8">
                    {/* Center Play Button */}
                    <div className="flex-1 flex items-center justify-center">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          if (style.position === 'center') setIsPlaying(true);
                          else if (style.position === 'left') prevSlide();
                          else nextSlide();
                        }}
                        className={`w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform duration-300 group border border-white/30 ${style.position !== 'center' ? 'cursor-default' : 'cursor-pointer'}`}
                      >
                        <SafeIcon icon={FiPlay} className="w-6 h-6 text-white fill-current ml-1" />
                      </button>
                    </div>

                    {/* Bottom Text */}
                    <div className="relative z-10">
                      <div className="flex items-start gap-2 mb-3">
                        <p className="text-white text-lg md:text-xl font-medium leading-relaxed line-clamp-3">
                          "{testimonial.quote}"
                        </p>
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg">{testimonial.name}</h3>
                        <p className="text-gray-300 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setIsPlaying(false)}
          >
            <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
              <button 
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 z-10 text-white/70 hover:text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-all"
              >
                <SafeIcon icon={FiX} className="w-6 h-6" />
              </button>
              <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.youtube.com/embed/${testimonials[activeIndex].videoId}?autoplay=1`} 
                title="Patient Testimonial" 
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

export default Testimonials;