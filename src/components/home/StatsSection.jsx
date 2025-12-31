import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiUsers, FiAward, FiHeart, FiTrendingUp } = FiIcons;

const StatsSection = () => {
  const stats = [
    {
      icon: FiUsers,
      number: '5,000+',
      label: 'Successful Procedures',
      description: 'Lives transformed through expert surgical care'
    },
    {
      icon: FiAward,
      number: '98%',
      label: 'Patient Satisfaction',
      description: 'Consistently rated excellent by our patients'
    },
    {
      icon: FiHeart,
      number: '15+',
      label: 'Years Experience',
      description: 'Decades of expertise in bariatric medicine'
    },
    {
      icon: FiTrendingUp,
      number: '85%',
      label: 'Excess Weight Loss',
      description: 'Average weight loss success rate'
    }
  ];

  return (
    <section className="py-12 bg-scod">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Proven Track Record of <span className="text-blue-200">Excellence</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our commitment to exceptional care is reflected in our outstanding results and the trust our patients place in us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={stat.icon} className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-3">{stat.number}</div>
                <div className="text-xl font-semibold text-blue-200 mb-2">{stat.label}</div>
                <div className="text-blue-100 leading-relaxed">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;