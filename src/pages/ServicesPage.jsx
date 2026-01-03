import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {
  FiAward, FiMic, FiVideo, FiDownload, FiFileText,
  FiGlobe, FiCalendar, FiArrowRight, FiCheck, FiCast,
  FiTrendingUp, FiImage
} = FiIcons;

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  // 1. Press Logos Data
  const pressLogos = [
    { name: "Times of India", color: "text-gray-800" },
    { name: "Hindustan Times", color: "text-gray-800" },
    { name: "NDTV Health", color: "text-gray-800" },
    { name: "Zee News", color: "text-gray-800" },
    { name: "India Today", color: "text-gray-800" },
    { name: "The Hindu", color: "text-gray-800" }
  ];

  // 2. Awards Timeline Data
  const awards = [
    {
      year: "2023",
      title: "Center of Excellence",
      organization: "Obesity Surgery Society of India (OSSI)",
      desc: "Recognized for maintaining highest standards in patient safety and surgical outcomes."
    },
    {
      year: "2021",
      title: "Best Bariatric Surgeon",
      organization: "Global Healthcare Awards",
      desc: "Awarded for innovation in minimally invasive metabolic procedures."
    },
    {
      year: "2019",
      title: "Service Excellence Award",
      organization: "Times Health Survey",
      desc: "Honored for outstanding contribution to diabetes remission surgery."
    },
    {
      year: "2016",
      title: "Young Surgeon of the Year",
      organization: "Indian Medical Association (IMA)",
      desc: "Acknowledging early career excellence and surgical precision."
    }
  ];

  // 3. Media Coverage Data
  const mediaItems = [
    {
      type: "article",
      title: "Diabetes Remission: Is Surgery the Cure?",
      source: "Times of India",
      date: "Oct 12, 2023",
      image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      type: "video",
      title: "Understanding the Obesity Epidemic",
      source: "NDTV Interview",
      date: "Aug 05, 2023",
      image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      type: "article",
      title: "The Rise of Medical Tourism in India",
      source: "Healthcare Global",
      date: "Jan 15, 2023",
      image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      type: "video",
      title: "Live Q&A: Post-Op Nutrition",
      source: "Facebook Live",
      date: "Nov 20, 2022",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      link: "#"
    }
  ];

  // 4. Press Snippets
  const quotes = [
    {
      text: "Dr. Arush Sabharwal is revolutionizing how we perceive metabolic diseases, shifting the focus from management to remission.",
      author: "Health Editor",
      publication: "The Indian Express"
    },
    {
      text: "A beacon of hope for patients struggling with morbid obesity. SCOD's integrated approach sets a new benchmark.",
      author: "Senior Correspondent",
      publication: "Medical Daily"
    }
  ];

  // 5. Media Kit Resources
  const mediaResources = [
    { title: "Official Biography", format: "PDF", size: "2.4 MB", icon: FiFileText },
    { title: "High-Res Photos", format: "ZIP", size: "15 MB", icon: FiImage },
    { title: "Press Release Kit", format: "PDF", size: "1.8 MB", icon: FiMic },
    { title: "Brand Assets/Logos", format: "ZIP", size: "5 MB", icon: FiDownload }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 font-sans text-gray-900 bg-white"
    >

      {/* 1. HERO SECTION */}
      <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1920&q=80"
            alt="Press and Media"
            className="w-full h-full object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-scod via-scod/95 to-transparent mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
              <SafeIcon icon={FiMic} className="w-5 h-5 text-emerald-300" />
              <span className="text-sm font-bold tracking-wide uppercase">Newsroom</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Press, Media & <br />
              <span className="text-emerald-300">Achievements</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-10">
              Chronicling our journey of clinical excellence. Explore our latest awards, media features, and public health initiatives.
            </p>
            <div className="flex justify-center gap-4">
              <a href="#media-kit" className="bg-white text-scod px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg flex items-center">
                <SafeIcon icon={FiDownload} className="w-5 h-5 mr-2" />
                Download Media Kit
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. PRESS LOGOS STRIP */}
      <section className="py-10 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Featured In</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {pressLogos.map((logo, index) => (
              <div key={index} className="text-xl md:text-2xl font-black font-serif text-gray-400 hover:text-scod cursor-default transition-colors">
                {logo.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. AWARDS & TIMELINE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Left: Heading */}
            <div className="lg:col-span-4">
              <span className="text-scod font-bold tracking-widest uppercase text-sm">Recognition</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">Hall of <span className="text-scod">Fame</span></h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our commitment to quality and patient safety has been recognized by leading national and international bodies.
              </p>
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <div className="flex items-center space-x-3 mb-2">
                  <SafeIcon icon={FiAward} className="w-6 h-6 text-scod" />
                  <span className="font-bold text-gray-900">Consistent Excellence</span>
                </div>
                <p className="text-sm text-gray-600">Rated as a top-tier bariatric center for 5 consecutive years.</p>
              </div>
            </div>

            {/* Right: Timeline */}
            <div className="lg:col-span-8">
              <div className="relative border-l-4 border-gray-100 ml-4 md:ml-0 space-y-12">
                {awards.map((award, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 md:pl-12"
                  >
                    {/* Dot */}
                    <div className="absolute -left-[10px] top-2 w-5 h-5 rounded-full bg-scod border-4 border-white shadow-md"></div>

                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-gray-200">{award.year}</span>
                      <h3 className="text-xl font-bold text-gray-900">{award.title}</h3>
                    </div>
                    <p className="text-sm font-bold text-scod uppercase tracking-wide mb-2">{award.organization}</p>
                    <p className="text-gray-600">{award.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. MEDIA COVERAGE GRID */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">In The <span className="text-scod">News</span></h2>
            <p className="text-gray-600 mt-4">Latest articles, interviews, and features.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mediaItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900 flex items-center">
                    <SafeIcon icon={item.type === 'video' ? FiVideo : FiFileText} className="w-3 h-3 mr-1 text-scod" />
                    {item.type === 'video' ? 'Video' : 'Article'}
                  </div>
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <SafeIcon icon={FiCast} className="w-5 h-5 text-scod ml-1" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-scod uppercase">{item.source}</span>
                    <span className="text-xs text-gray-400">{item.date}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-4 line-clamp-2">{item.title}</h3>
                  <a href={item.link} className="text-sm font-bold text-gray-500 hover:text-scod flex items-center transition-colors">
                    Read More <SafeIcon icon={FiArrowRight} className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRESS SNIPPETS */}
      <section className="py-20 bg-scod text-white overflow-hidden relative">
        {/* Decorative BG */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <SafeIcon icon={FiMic} className="w-12 h-12 text-emerald-300 mx-auto mb-8" />

          <div className="relative">
            {quotes.map((quote, index) => (
              <div key={index} className="mb-12 last:mb-0">
                <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-6">
                  "{quote.text}"
                </blockquote>
                <cite className="not-italic">
                  <span className="font-bold block text-lg">{quote.author}</span>
                  <span className="text-blue-200 text-sm uppercase tracking-wider">{quote.publication}</span>
                </cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MEDIA KIT DOWNLOAD */}
      <section id="media-kit" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-16 text-center border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Resources for Journalists</h2>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
              Access our official press kit, high-resolution logos, and surgeon biographies for your stories.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mediaResources.map((res, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:border-scod hover:shadow-lg transition-all group flex flex-col items-center"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-scod mb-4 group-hover:scale-110 transition-transform">
                    <SafeIcon icon={res.icon} className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{res.title}</h4>
                  <p className="text-xs text-gray-500 mb-4">{res.format} • {res.size}</p>
                  <span className="text-scod text-sm font-bold flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    Download <SafeIcon icon={FiDownload} className="ml-1 w-3 h-3" />
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-500 text-sm">
                For press inquiries, interviews, or urgent requests, please contact:<br />
                <a href="mailto:info@scodclinic.com" className="text-scod font-bold hover:underline">info@scodclinic.com</a> or call <a href="tel:+918130130489" className="font-bold text-gray-900 hover:text-scod transition-colors">+91 8130130489</a>
              </p>
            </div>
          </div>
        </div>
      </section>

    </motion.div>
  );
};

export default ServicesPage;