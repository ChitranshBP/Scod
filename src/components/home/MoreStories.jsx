import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiArrowRight } = FiIcons;

const stories = [
  {
    name: "Atul Kumar Singh",
    role: "Bariatric Surgery Patient",
    image: "https://brandingpioneers.co.in/scod/google_g_icon_download.png",
    text: "We are highly satisfied with the life-changing bariatric surgery performed by Dr. Aarush Sabarwal for my wife. The entire process—from counseling to recovery—was handled with exceptional care."
  },
  {
    name: "Ujwala B",
    role: "Bariatric Surgery Patient",
    image: "https://brandingpioneers.co.in/scod/google_g_icon_download.png",
    text: "I went to Dr. Arush clueless about bariatric surgery and had hundreds of questions. He answered everything with patience and clarity."
  },
  {
    name: "Nazim Saifi",
    role: "Bariatric Surgery Patient",
    image: "https://brandingpioneers.co.in/scod/google_g_icon_download.png",
    text: "Absolutely loved their services. The best bariatric facility around Delhi. A must-visit for anyone considering bariatric surgery."
  },
  {
    name: "Arif",
    role: "Bariatric Surgery Patient",
    image: "https://brandingpioneers.co.in/scod/google_g_icon_download.png",
    text: "After thorough research, I chose SCOD Clinic and have zero regrets. Ethical practice and amazing patient care."
  },
  {
    name: "Parkash Raina",
    role: "Patient",
    image: "https://brandingpioneers.co.in/scod/google_g_icon_download.png",
    text: "All insurances cover bariatric and metabolic surgery if the patient meets guidelines. SCOD follows proper standards and procedures."
  },
  {
    name: "Parkash Raina",
    role: "Bariatric Surgery Patient",
    image: "https://brandingpioneers.co.in/scod/google_g_icon_download.png",
    text: "My aunt was suffering from morbid obesity and breathlessness. Her journey to good health began after consulting Dr. Aarush Sabarwal."
  },
  {
    name: "Savita Ranga",
    role: "Bariatric Surgery Patient",
    image: "https://brandingpioneers.co.in/scod/google_g_icon_download.png",
    text: "Best bariatric surgery experience. I joined after seeing my sister’s results. Proud to be part of the SCOD family now."
  },
  {
    name: "Anuj Gupta",
    role: "Bariatric Surgery Patient",
    image: "https://brandingpioneers.co.in/scod/google_g_icon_download.png",
    text: "Wonderful experience with Dr. Arush Sabharwal. Smooth procedure and very helpful staff. Highly recommended."
  },
  {
    name: "Kaushal Suraj",
    role: "Bariatric Surgery Patient",
    image: "https://brandingpioneers.co.in/scod/google_g_icon_download.png",
    text: "Got my surgery done in 2019. A very successful procedure and I’m extremely happy."
  },
  {
    name: "Tribhuvan",
    role: "Bariatric Surgery Patient",
    image: "https://brandingpioneers.co.in/scod/google_g_icon_download.png",
    text: "The surgeon explains everything in the first consultation and answers all questions clearly. Very transparent approach."
  },
  {
    name: "IxRxMADARA",
    role: "Mini Gastric Bypass Patient",
    image: "https://brandingpioneers.co.in/scod/google_g_icon_download.png",
    text: "Very satisfied with all the services. My wife had her mini gastric bypass from Dr. Arush and the team made her feel extremely comfortable."
  },
  {
    name: "Alisha Khan",
    role: "Bariatric Surgery Patient",
    image: "https://brandingpioneers.co.in/scod/google_g_icon_download.png",
    text: "Excellent facility for bariatric surgery. Dr. Arush and the team are exceptional at their work."
  },
];

const MoreStories = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Alignment Fixed */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-left flex flex-col items-start"
          >
            {/* Standardized Eyebrow Header */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="h-px w-10 bg-scod"></div>
              <span className="uppercase tracking-widest text-sm font-bold text-scod">
                From The Community
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Read more <span className="text-scod">stories</span>
            </h2>
          </motion.div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-2 md:mb-0"
          >
            <Link
              to="/testimonials"
              className="group flex items-center gap-2 text-scod font-bold text-lg hover:gap-3 transition-all"
            >
              <span>View All Reviews</span>
              <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        {/* Stories - Horizontal Scroll on Mobile, Columns on Desktop */}
        <div className="
          flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 -mx-4 px-4
          md:block md:columns-2 lg:columns-3 md:gap-6 md:space-y-6 md:mx-0 md:px-0 md:pb-0
          [&::-webkit-scrollbar]:hidden
        ">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="
                flex-shrink-0 w-[85%] md:w-full snap-center h-auto
                break-inside-avoid bg-gray-50 rounded-2xl p-6 
                shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] 
                hover:shadow-xl transition-all duration-300 border border-gray-100
                mb-0 md:mb-6
              "
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{story.name}</h4>
                  <p className="text-xs text-gray-500 font-medium">{story.role}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {story.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreStories;