import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiActivity, FiTrendingUp, FiInfo, FiCheckCircle } = FiIcons;

const BMIInfoSection = () => {
  const [activeTab, setActiveTab] = useState('bmi');

  const bmiCategories = [
    { range: 'Below 18.5', category: 'Underweight', color: 'bg-blue-100 text-blue-800', status: 'underweight' },
    { range: '18.5 - 24.9', category: 'Normal Weight', color: 'bg-green-100 text-green-800', status: 'normal' },
    { range: '25.0 - 29.9', category: 'Overweight', color: 'bg-yellow-100 text-yellow-800', status: 'overweight' },
    { range: '30.0 - 34.9', category: 'Obesity Class I', color: 'bg-orange-100 text-orange-800', status: 'obese1' },
    { range: '35.0 - 39.9', category: 'Obesity Class II', color: 'bg-red-100 text-red-800', status: 'obese2' },
    { range: '40.0 and above', category: 'Obesity Class III', color: 'bg-purple-100 text-purple-800', status: 'obese3' },
  ];

  const healthMetrics = [
    {
      icon: FiActivity,
      title: 'Body Mass Index (BMI)',
      description: 'BMI is a measure of body fat based on height and weight. It helps determine if you are at a healthy weight for your height.',
      formula: 'BMI = Weight (kg) / Height² (m²)',
    },
    {
      icon: FiTrendingUp,
      title: 'Healthy Weight Range',
      description: 'Maintaining a healthy weight reduces the risk of chronic diseases like diabetes, heart disease, and certain cancers.',
      formula: 'Ideal Weight varies by individual factors',
    },
  ];

  const tabs = [
    { id: 'bmi', label: 'Understanding BMI', icon: FiInfo },
    { id: 'categories', label: 'BMI Categories', icon: FiActivity },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="h-px w-12 bg-scod"></div>
            <span className="uppercase tracking-widest text-sm font-bold text-scod">Health Metrics</span>
            <div className="h-px w-12 bg-scod"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Understanding Your <span className="text-scod">Body Metrics</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn about Body Mass Index (BMI) and how it relates to your overall health and weight management goals
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full p-2 shadow-lg border border-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-scod text-white shadow-md'
                    : 'text-gray-600 hover:text-scod'
                }`}
              >
                <SafeIcon icon={tab.icon} className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        {activeTab === 'bmi' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Health Metrics Cards */}
              {healthMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-scod group-hover:scale-110 transition-all duration-300">
                      <SafeIcon icon={metric.icon} className="w-8 h-8 text-scod group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{metric.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{metric.description}</p>
                      <div className="bg-blue-50 px-4 py-3 rounded-xl border-l-4 border-scod">
                        <p className="text-sm font-mono text-gray-700">{metric.formula}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* BMI Calculation Example */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-scod to-blue-700 p-10 rounded-3xl shadow-2xl text-white"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold">📏</span>
                  </div>
                  <h4 className="text-lg font-bold mb-2">Height</h4>
                  <p className="text-blue-100 text-sm">Measured in meters or feet</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold">⚖️</span>
                  </div>
                  <h4 className="text-lg font-bold mb-2">Weight</h4>
                  <p className="text-blue-100 text-sm">Measured in kilograms or pounds</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold">📊</span>
                  </div>
                  <h4 className="text-lg font-bold mb-2">BMI Result</h4>
                  <p className="text-blue-100 text-sm">Your body mass index score</p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-blue-100 text-sm mb-4">Ready to calculate your BMI?</p>
                <a
                  href="/contact"
                  className="inline-flex items-center space-x-2 bg-white text-scod px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
                >
                  <span>Consult Our Experts</span>
                  <SafeIcon icon={FiCheckCircle} className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}

        {activeTab === 'categories' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {bmiCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-bold ${category.color}`}>
                      BMI {category.range}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{category.category}</h3>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${category.color.split(' ')[0].replace('100', '500')} transition-all duration-1000`}
                      style={{ width: '100%' }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Important Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-blue-50 border-l-4 border-scod p-8 rounded-2xl"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-scod rounded-xl flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={FiInfo} className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Important Information</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    BMI is a useful screening tool, but it doesn't directly measure body fat or account for muscle mass, bone density, and other individual factors.
                    A comprehensive health assessment by our medical professionals will provide a complete picture of your health status.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-scod flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">BMI may not accurately reflect health for athletes with high muscle mass</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-scod flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Individual factors like age, gender, and ethnicity should be considered</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-scod flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Consult with healthcare professionals for personalized advice</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default BMIInfoSection;
