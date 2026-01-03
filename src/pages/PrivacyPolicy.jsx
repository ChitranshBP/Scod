import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiShield, FiLock, FiEye, FiFileText } = FiIcons;

const PrivacyPolicy = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen pt-20 font-sans text-gray-900 bg-gray-50"
        >
            <SEO
                title="Privacy Policy | SCOD Clinic"
                description="Learn about how SCOD Clinic protects your personal and medical information. Our privacy policy outlines our commitment to patient confidentiality and data security."
            />

            {/* Hero Section */}
            <section className="bg-slate-900 text-white py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
                            <SafeIcon icon={FiShield} className="w-8 h-8 text-scod" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                        <p className="text-xl text-slate-300">Your privacy and data security are our top priorities.</p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">

                        {/* Last Updated */}
                        <div className="text-sm text-gray-500 border-b border-gray-100 pb-6">
                            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                        </div>

                        {/* 1. Introduction */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                <SafeIcon icon={FiFileText} className="w-6 h-6 mr-3 text-scod" />
                                1. Introduction
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                Welcome to SCOD - Surgical Center for Obesity and Diabetes ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this policy, or our practices with regards to your personal information, please contact us at info@scodclinic.com.
                            </p>
                        </div>

                        {/* 2. Information We Collect */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                <SafeIcon icon={FiEye} className="w-6 h-6 mr-3 text-scod" />
                                2. Information We Collect
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                                <li>Name and Contact Data (Phone number, email address, postal address)</li>
                                <li>Health Information (Medical history, symptoms, treatment interests)</li>
                                <li>Appointment Details (Preferred dates, types of consultation)</li>
                            </ul>
                        </div>

                        {/* 3. How We Use Your Information */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                <SafeIcon icon={FiLock} className="w-6 h-6 mr-3 text-scod" />
                                3. How We Use Your Information
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                                <li>To facilitate account creation and logon process.</li>
                                <li>To send you administrative information.</li>
                                <li>To fulfill and manage your orders/appointments.</li>
                                <li>To post testimonials (with your consent).</li>
                                <li>To request feedback and contact you about your use of our website.</li>
                            </ul>
                        </div>

                        {/* 4. Contact Us */}
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h2>
                            <p className="text-gray-600 mb-4">
                                If you have questions or comments about this policy, you may contact us by email at info@scodclinic.com, or by post to:
                            </p>
                            <address className="not-italic text-gray-700 font-medium">
                                SCOD Clinic<br />
                                87, Paschimi Marg, Block D<br />
                                Vasant Vihar, New Delhi, 110057<br />
                                India<br />
                                Phone: +91 8130130489
                            </address>
                        </div>

                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default PrivacyPolicy;
