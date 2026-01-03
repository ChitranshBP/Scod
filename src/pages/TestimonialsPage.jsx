import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { Link } from 'react-router-dom';

const { FiStar, FiPlay, FiX, FiArrowRight, FiCheckCircle, FiMoreHorizontal, FiChevronLeft, FiChevronRight } = FiIcons;

const TestimonialsPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 6;

  // --- DATA SECTIONS ---
  const googleReviews = [
    { id: 1, name: "Atul Kumar Singh", date: "Bariatric Surgery Patient", rating: 5, text: "We are highly satisfied with the life-changing bariatric surgery performed by Dr. Aarush Sabharwal for my wife. The entire process—from counseling to recovery—was handled with exceptional care.", initial: "A", bg: "bg-purple-100 text-purple-600" },
    { id: 2, name: "Ujwala B", date: "Bariatric Surgery Patient", rating: 5, text: "I went to Dr. Arush clueless about bariatric surgery and had hundreds of questions. He answered everything with patience and clarity.", initial: "U", bg: "bg-emerald-100 text-emerald-600" },
    { id: 3, name: "Nazim Saifi", date: "Bariatric Surgery Patient", rating: 5, text: "Absolutely loved their services. The best bariatric facility around Delhi. A must-visit for anyone considering bariatric surgery.", initial: "N", bg: "bg-blue-100 text-blue-600" },
    { id: 4, name: "Arif", date: "Bariatric Surgery Patient", rating: 5, text: "After thorough research, I chose SCOD Clinic and have zero regrets. Ethical practice and amazing patient care.", initial: "A", bg: "bg-orange-100 text-orange-600" },
    { id: 5, name: "Parkash Raina", date: "Patient", rating: 5, text: "All insurances cover bariatric and metabolic surgery if the patient meets guidelines. SCOD follows proper standards and procedures.", initial: "P", bg: "bg-indigo-100 text-indigo-600" },
    { id: 6, name: "Savita Ranga", date: "Bariatric Surgery Patient", rating: 5, text: "Best bariatric surgery experience. I joined after seeing my sister’s results. Proud to be part of the SCOD family now.", initial: "S", bg: "bg-pink-100 text-pink-600" },
    { id: 7, name: "Anuj Gupta", date: "Bariatric Surgery Patient", rating: 5, text: "Wonderful experience with Dr. Arush Sabharwal. Smooth procedure and very helpful staff. Highly recommended.", initial: "A", bg: "bg-teal-100 text-teal-600" },
    { id: 8, name: "Kaushal Suraj", date: "Bariatric Surgery Patient", rating: 5, text: "Got my surgery done in 2019. A very successful procedure and I’m extremely happy.", initial: "K", bg: "bg-cyan-100 text-cyan-600" },
    { id: 9, name: "Tribhuvan", date: "Bariatric Surgery Patient", rating: 5, text: "The surgeon explains everything in the first consultation and answers all questions clearly. Very transparent approach.", initial: "T", bg: "bg-lime-100 text-lime-600" },
    { id: 11, name: "Alisha Khan", date: "Bariatric Surgery Patient", rating: 5, text: "Excellent facility for bariatric surgery. Dr. Arush and the team are exceptional at their work.", initial: "A", bg: "bg-fuchsia-100 text-fuchsia-600" }
  ];

  const videos = [
    // YouTube Testimonials First
    { id: 1, title: "Weight Loss Surgery", author: "Mr. Sudesh Gupta", videoId: "R_1SeIg3FaQ", type: "youtube", thumbnail: "https://img.youtube.com/vi/NnSd1zg_Ndk/maxresdefault.jpg", quote: "Mr. Sudesh Gupta shares all the things he is able to do and how much more he enjoys life since having weight loss surgery." },
    { id: 2, title: "Gastric Bypass", author: "Akanksha Bhardwaj", videoId: "u_dbxl4Y7Vs", type: "youtube", thumbnail: "https://img.youtube.com/vi/u_dbxl4Y7Vs/maxresdefault.jpg", quote: "Akanksha Bhardwaj underwent a Gastric Bypass with HDFC ERGO Insurance." },
    { id: 3, title: "Super Obesity Transformation", author: "Mrs. Noor Bano", videoId: "1QnINDPc1WU", type: "youtube", thumbnail: "https://img.youtube.com/vi/1GjE_mEZMBM/maxresdefault.jpg", quote: "Mrs. Noor Bano who fought the battle suffering from Super obesity with Multiple Obesity associated comorbidities." },
    { id: 4, title: "Metabolic Surgery", author: "Mrs. Neetu Aggarwal", videoId: "_IBJ0_YzXog", type: "youtube", thumbnail: "https://img.youtube.com/vi/_IBJ0_YzXog/maxresdefault.jpg", quote: "Mrs. Neetu Aggarwal is a story worth sharing. Before the surgery, her weight was 88 kg with diabetes level very low." },
    { id: 5, title: "Laparoscopic Gastric Sleeve", author: "Mrs. Shabana", videoId: "6Z4eXkmuRJU", type: "youtube", thumbnail: "https://img.youtube.com/vi/6Z4eXkmuRJU/maxresdefault.jpg", quote: "Mrs. Shabana from Roorkee who underwent Laparoscopic Gastric Sleeve." },
    
    // Gumlet Testimonials Following
    { 
      id: 6, 
      title: "Patient Success Story 1", 
      author: "Verified Patient", 
      videoId: "69539d8dd73a53e69e26a898", 
      type: "gumlet",
      thumbnail: "https://video.gumlet.io/6553f91b3699cbd2c01ab6a9/69539d8dd73a53e69e26a898/thumbnail-1-0.png", 
      quote: "Witness the life-changing results and incredible journey of our patients who chose health and vitality." 
    },
    { 
      id: 7, 
      title: "Patient Success Story 2", 
      author: "Verified Patient", 
      videoId: "69539d8df3928b38fcf8f0a8", 
      type: "gumlet",
      thumbnail: "https://video.gumlet.io/6553f91b3699cbd2c01ab6a9/69539d8df3928b38fcf8f0a8/thumbnail-1-0.png", 
      quote: "A remarkable journey of regaining health and confidence through advanced metabolic care." 
    },
    { 
      id: 8, 
      title: "Patient Success Story 3", 
      author: "Verified Patient", 
      videoId: "69539d9415b21a591c0e9cde", 
      type: "gumlet",
      thumbnail: "https://video.gumlet.io/6553f91b3699cbd2c01ab6a9/69539d9415b21a591c0e9cde/thumbnail-1-0.png", 
      quote: "Sharing the experience of transformation and the support received during the recovery phase." 
    },
    { 
      id: 9, 
      title: "Patient Success Story 4", 
      author: "Verified Patient", 
      videoId: "69539d8ef3928b38fcf8f0cd", 
      type: "gumlet",
      thumbnail: "https://video.gumlet.io/6553f91b3699cbd2c01ab6a9/69539d8ef3928b38fcf8f0cd/thumbnail-1-0.png", 
      quote: "How specialized bariatric surgery helped overcome long-standing health challenges." 
    },
    { 
      id: 11, 
      title: "Patient Success Story 6", 
      author: "Verified Patient", 
      videoId: "69539d56f3928b38fcf8ec28", 
      type: "gumlet",
      thumbnail: "https://video.gumlet.io/6553f91b3699cbd2c01ab6a9/69539d56f3928b38fcf8ec28/thumbnail-1-0.png", 
      quote: "Every step of the way was handled with care, from the first consult to post-op follow-ups." 
    },
    { 
      id: 12, 
      title: "Patient Success Story 7", 
      author: "Verified Patient", 
      videoId: "69539d5615b21a591c0e97c5", 
      type: "gumlet",
      thumbnail: "https://video.gumlet.io/6553f91b3699cbd2c01ab6a9/69539d5615b21a591c0e97c5/thumbnail-1-0.png", 
      quote: "Finding health and wellness again. A heartfelt testimonial of a life transformed." 
    },
    { 
      id: 13, 
      title: "Patient Success Story 8", 
      author: "Verified Patient", 
      videoId: "69539d53d73a53e69e26a3b4", 
      type: "gumlet",
      thumbnail: "https://video.gumlet.io/6553f91b3699cbd2c01ab6a9/69539d53d73a53e69e26a3b4/thumbnail-1-0.png", 
      quote: "Overcoming obesity and diabetes. A true story of resilience and medical excellence." 
    },
    { 
      id: 14, 
      title: "Patient Success Story 9", 
      author: "Verified Patient", 
      videoId: "69539c6df3928b38fcf8d9dd", 
      type: "gumlet",
      thumbnail: "https://video.gumlet.io/6553f91b3699cbd2c01ab6a9/69539c6df3928b38fcf8d9dd/thumbnail-1-0.png", 
      quote: "A journey of hope turned into reality. Witness the metabolic transformation that changed everything." 
    },
    { 
      id: 15, 
      title: "Patient Success Story 10", 
      author: "Verified Patient", 
      videoId: "69539cf4d73a53e69e269ca1", 
      type: "gumlet",
      thumbnail: "https://video.gumlet.io/6553f91b3699cbd2c01ab6a9/69539cf4d73a53e69e269ca1/thumbnail-1-0.png", 
      quote: "Reclaiming vitality and freedom. How our specialized care protocols supported this patient's success." 
    },
    { 
      id: 16, 
      title: "Patient Success Story 11", 
      author: "Verified Patient", 
      videoId: "69539c6dd73a53e69e2691c8", 
      type: "gumlet",
      thumbnail: "https://video.gumlet.io/6553f91b3699cbd2c01ab6a9/69539c6dd73a53e69e2691c8/thumbnail-1-0.png", 
      quote: "Sustainable results and a brand new lifestyle. A powerful account of the SCOD surgical experience." 
    }
  ];

  // Pagination Logic
  const totalPages = Math.ceil(videos.length / videosPerPage);
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    const element = document.getElementById('video-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const transformations = [
    { id: 'st1', type: 'single', image: "https://brandingpioneers.co.in/scod/Scod-testimonial-images/ST-1.webp" },
    { id: 'st2', type: 'single', image: "https://brandingpioneers.co.in/scod/Scod-testimonial-images/ST-2.webp" },
    { id: 'st3', type: 'single', image: "https://brandingpioneers.co.in/scod/Scod-testimonial-images/ST-3.webp" },
    { id: 'st4', type: 'single', image: "https://brandingpioneers.co.in/scod/Scod-testimonial-images/ST-4.webp" },
    { id: 'st5', type: 'single', image: "https://brandingpioneers.co.in/scod/Scod-testimonial-images/ST-5.webp" },
    { id: 'st6', type: 'single', image: "https://brandingpioneers.co.in/scod/Scod-testimonial-images/ST-6.webp" },
    { id: 'st7', type: 'single', image: "https://brandingpioneers.co.in/scod/Scod-testimonial-images/ST-7.webp" },
    { id: 'st8', type: 'single', image: "https://brandingpioneers.co.in/scod/Scod-testimonial-images/ST-8.webp" },
    { id: 'st9', type: 'single', image: "https://brandingpioneers.co.in/scod/Scod-testimonial-images/ST-9.webp" },
    { id: 'st10', type: 'single', image: "https://brandingpioneers.co.in/scod/Scod-testimonial-images/ST-10.webp" },
    { id: 'st11', type: 'single', image: "https://brandingpioneers.co.in/scod/Scod-testimonial-images/ST-11.webp" },
    { id: 'st12', type: 'single', image: "https://brandingpioneers.co.in/scod/Scod-testimonial-images/ST-12.webp" },
    { id: 'st13', type: 'single', image: "https://brandingpioneers.co.in/scod/Scod-testimonial-images/ST-13.webp" },
    { id: 'st14', type: 'single', image: "https://brandingpioneers.co.in/scod/Scod-testimonial-images/ST-14.webp" }
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
        <div className="absolute inset-0 z-0">
          <img 
            src="https://brandingpioneers.co.in/scod/scod-breadcrumbs/Testimonials.webp" 
            alt="Happy Patients" 
            className="w-full h-full object-cover object-center opacity-40" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-scod/95 via-scod/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
              <SafeIcon icon={FiStar} className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-bold tracking-wide uppercase">Success Stories</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Real Patients. <span className="text-emerald-300">Real Results.</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
              Discover how thousands of people have transformed their lives, regained their health, and found new confidence with SCOD.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <div className="bg-white border-b border-gray-100 py-8 relative -mt-8 z-20 mx-4 md:mx-auto max-w-7xl rounded-xl shadow-lg flex flex-wrap justify-between items-center px-8 lg:px-16">
        <div className="flex items-center space-x-4">
          <div className="text-4xl font-bold text-scod">5k+</div>
          <div className="text-sm text-gray-500 font-medium">Successful<br/>Surgeries</div>
        </div>
        <div className="w-px h-12 bg-gray-200 hidden md:block"></div>
        <div className="flex items-center space-x-4">
          <div className="text-4xl font-bold text-scod">4.9</div>
          <div className="flex flex-col">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <SafeIcon key={i} icon={FiStar} className="w-4 h-4 fill-current" />)}
            </div>
            <div className="text-sm text-gray-500 font-medium">Google Rating</div>
          </div>
        </div>
        <div className="w-px h-12 bg-gray-200 hidden md:block"></div>
        <div className="flex items-center space-x-4">
          <div className="text-4xl font-bold text-scod">15+</div>
          <div className="text-sm text-gray-500 font-medium">Years of<br/>Excellence</div>
        </div>
      </div>

      {/* 3. VIDEO TESTIMONIALS */}
      <section id="video-section" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12">
            <span className="text-scod font-bold tracking-widest uppercase text-sm">Watch Their Journey</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Video Testimonials</h2>
            <p className="text-gray-600 mt-4 max-w-2xl">
              Hear directly from our patients about their experiences before, during, and after surgery.
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={currentPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {currentVideos.map((video, index) => (
                <motion.div 
                  key={video.videoId || video.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
                >
                  <div className="relative aspect-video overflow-hidden cursor-pointer" onClick={() => setSelectedVideo(video)}>
                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <SafeIcon icon={FiPlay} className="w-6 h-6 text-scod fill-current ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4 flex-grow">
                      <p className="text-gray-600 italic text-sm leading-relaxed">"{video.quote}"</p>
                    </div>
                    <div className="border-t border-gray-100 pt-4 mt-auto">
                      <h3 className="font-bold text-gray-900">{video.author}</h3>
                      <p className="text-sm text-scod font-medium">{video.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-16 flex justify-center items-center space-x-2">
              <button 
                onClick={() => paginate(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`p-3 rounded-full border transition-all ${currentPage === 1 ? 'text-gray-300 border-gray-200 cursor-not-allowed' : 'text-scod border-scod hover:bg-scod hover:text-white shadow-sm'}`}
              >
                <SafeIcon icon={FiChevronLeft} className="w-5 h-5" />
              </button>
              
              <div className="flex items-center space-x-2 px-4">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => paginate(i + 1)}
                    className={`w-10 h-10 rounded-full font-bold transition-all ${currentPage === i + 1 ? 'bg-scod text-white shadow-lg' : 'text-gray-500 hover:bg-gray-100'}`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button 
                onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className={`p-3 rounded-full border transition-all ${currentPage === totalPages ? 'text-gray-300 border-gray-200 cursor-not-allowed' : 'text-scod border-scod hover:bg-scod hover:text-white shadow-sm'}`}
              >
                <SafeIcon icon={FiChevronRight} className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. TRANSFORMATIONS GALLERY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-scod font-bold tracking-widest uppercase text-sm">Visual Evidence</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">Patient Transformations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Actual results from the Surgical Center for Obesity and Diabetes. Every transformation tells a story of health reclaimed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transformations.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative group rounded-2xl overflow-hidden shadow-lg border border-gray-100 aspect-[2.2/1] bg-gray-50 flex"
              >
                {item.type === 'single' ? (
                  <img src={item.image} alt={`Transformation ${index + 1}`} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" />
                ) : (
                  <div className="flex w-full h-full gap-0.5 bg-white">
                    <img src={item.before} alt="Before" className="w-1/2 h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all" />
                    <img src={item.after} alt="After" className="w-1/2 h-full object-cover" />
                  </div>
                )}
                
                <div className="absolute top-3 left-3">
                  <div className="bg-black/70 backdrop-blur-md text-white text-[9px] font-bold px-2.5 py-1 rounded-full tracking-wider border border-white/10 uppercase shadow-lg">
                    Before
                  </div>
                </div>
                <div className="absolute top-3 right-3">
                  <div className="bg-scod/95 backdrop-blur-md text-white text-[9px] font-bold px-2.5 py-1 rounded-full tracking-wider border border-white/10 uppercase shadow-lg">
                    After
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/contact" className="inline-flex items-center space-x-3 bg-scod text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:-translate-y-1">
              <span>Begin Your Own Journey</span>
              <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. GOOGLE REVIEWS */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <div className="flex items-center justify-start space-x-2 mb-4">
              <img src="https://brandingpioneers.co.in/scod/google_g_icon_download.png" alt="Google" className="w-8 h-8" />
              <span className="text-2xl font-bold text-gray-700">Reviews</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900">What Our Patients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {googleReviews.map((review, index) => (
              <motion.div 
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 flex flex-col h-full"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${review.bg} rounded-full flex items-center justify-center font-bold text-xl`}>
                      {review.initial}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{review.name}</h4>
                      <p className="text-xs text-gray-500">{review.date}</p>
                    </div>
                  </div>
                  <SafeIcon icon={FiMoreHorizontal} className="text-gray-300" />
                </div>
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed flex-grow text-sm">
                  "{review.text}"
                </p>
                <div className="mt-6 pt-4 border-t border-gray-50 flex items-center text-sm text-gray-400">
                  <SafeIcon icon={FiCheckCircle} className="w-4 h-4 mr-2 text-blue-400" />
                  Verified Patient
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="https://www.google.com/search?q=scod+reviews" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-scod font-bold border-b-2 border-scod pb-1 hover:text-blue-800 transition-colors" >
              <span>Read All Reviews on Google</span>
              <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
            </a>
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
                src={selectedVideo.type === 'gumlet' ? `https://play.gumlet.io/embed/${selectedVideo.videoId}` : `https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`} 
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

export default TestimonialsPage;