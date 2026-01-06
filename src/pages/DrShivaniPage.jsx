import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import SEO from '../components/common/SEO';

const {
  FiAward, FiBookOpen, FiCheck, FiGlobe, FiFileText, FiTrendingUp,
  FiActivity, FiUsers, FiStar, FiHeart, FiTarget
} = FiIcons;

const DrShivaniPage = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  // Top Diseases/Conditions Treated
  const conditionsTreated = [
    "Abdominal and Vaginal Hysterectomies",
    "Total Laparoscopic Hysterectomy",
    "Laparoscopic Assisted Vaginal Hysterectomy",
    "Laparoscopic Myomectomics",
    "Laparoscopic Radical Hysterectomy with Pelvic Lymphadenectomy",
    "Laparoscopic Ovarian Cystectomies (Endometriotic & Benign Cysts)"
  ];

  // Education
  const education = [
    {
      degree: "MBBS",
      institution: "Sri Ramchandra Medical College, Bangalore",
      icon: FiBookOpen
    },
    {
      degree: "MS (General Surgery)",
      institution: "Sri Ramchandra Medical College, Bangalore",
      icon: FiBookOpen
    },
    {
      degree: "MD (Obstetrics & Gynaecology)",
      institution: "Sri Ramchandra Medical College Centre, Chennai",
      icon: FiAward
    }
  ];

  // Memberships
  const memberships = [
    {
      name: "Association of Obstetricians and Gynaecologists of Delhi",
      abbr: "AOGD",
      icon: FiUsers
    },
    {
      name: "Federation of Obstetric and Gynaecological Societies of India",
      abbr: "FOGSI",
      icon: FiGlobe
    },
    {
      name: "Indian Association Of Gynaecological Endoscopists",
      abbr: "IAGE",
      icon: FiActivity
    },
    {
      name: "AAGL - Advancing Minimally Invasive Gynecology Worldwide",
      abbr: "AAGL",
      icon: FiStar
    }
  ];

  // Research Papers
  const researchPapers = [
    "Comparative study between Bupivacaine versus Bupivacaine with Fentanyl for labour epidural analgesia and its obstetrics outcome in archives",
    "Programmed labour pain relief versus epidural analgesia in archives",
    "Effect of domestic violence on pregnancy in archives"
  ];

  // Awards Highlights
  const awardsHighlights = [
    {
      title: "FOGSI-Dr. Siuli Rudra Sinha Prize",
      description: "Best presentation on gynec endoscopy - A feast of minimally invasive management of adnexal masses",
      year: "2010",
      event: "54th AICOG Hyderabad"
    },
    {
      title: "Multiple Conference Participations",
      description: "Active participation in national and international conferences",
      year: "2007-2016",
      event: "FOGSI, AICOG, ISMAAR"
    },
    {
      title: "Advanced Training Certifications",
      description: "FOGSI certified basic and advanced endoscopic training program",
      year: "2010",
      event: "Mumbai"
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
        title="Dr. Shivani Sabharwal | Consultant Gynaecologist & Laparoscopic Surgeon at SCOD"
        description="Meet Dr. Shivani Sabharwal, an expert in minimally invasive gynaecological procedures with extensive training in laparoscopic surgery and women's healthcare."
      />

      {/* 1. HERO SECTION */}
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
                <span className="uppercase tracking-widest text-sm font-bold text-scod">
                  Consultant Gynaecologist & Laparoscopic Surgeon
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
                Dr. Shivani <br />
                <span className="text-scod">Sabharwal</span>
              </h1>
              <div className="flex flex-wrap gap-3 mb-8 text-sm font-medium text-gray-600">
                <span className="bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">MBBS</span>
                <span className="bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">MS</span>
                <span className="bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">MD (OB/GYN)</span>
                <span className="bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">FOGSI Certified</span>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed mb-10">
                Dedicated to providing comprehensive women's healthcare through advanced laparoscopic and minimally invasive surgical techniques.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#expertise"
                  className="bg-scod text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg"
                >
                  View Expertise
                </a>
                <a
                  href="/contact"
                  className="group flex items-center space-x-3 bg-white text-scod border border-scod px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all"
                >
                  <span>Book Appointment</span>
                </a>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white" style={{ maxHeight: '500px' }}>
                <img
                  src="/assets/scod/dr-shivani/dr.-shivani-image.webp"
                  alt="Dr. Shivani Sabharwal"
                  className="w-full h-full object-cover object-top"
                  style={{ height: '500px' }}
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white font-bold text-lg">Dr. Shivani Sabharwal</p>
                  <p className="text-blue-200 text-sm">Consultant Gynaecologist & Laparoscopic Surgeon</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. CONDITIONS TREATED SECTION */}
      <section id="expertise" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-scod font-bold tracking-widest uppercase text-sm">Areas of Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
              Top Diseases & <span className="text-scod">Conditions Treated</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
              Specialized in advanced laparoscopic procedures for comprehensive gynaecological care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditionsTreated.map((condition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-scod/20"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-scod rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <SafeIcon icon={FiCheck} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">{condition}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EDUCATION & TRAINING */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-scod font-bold tracking-widest uppercase text-sm">Academic Excellence</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">
              Education & <span className="text-scod">Professional Training</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:border-scod/20"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  <SafeIcon icon={edu.icon} className="w-8 h-8 text-scod" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{edu.degree}</h3>
                <p className="text-scod font-semibold text-sm">{edu.institution}</p>
              </motion.div>
            ))}
          </div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-scod p-8 rounded-2xl text-white text-center"
          >
            <h3 className="text-3xl font-bold mb-4">Clinical Experience</h3>
            <p className="text-xl">Sri Ramchandra Medical Centre, Chennai</p>
            <p className="text-blue-100 mt-2">Extensive training in advanced laparoscopic and gynaecological procedures</p>
          </motion.div>
        </div>
      </section>

      {/* 4. MEMBERSHIPS */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-scod font-bold tracking-widest uppercase text-sm">Professional Network</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">
              Scientific <span className="text-scod">Associations</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Active member of prestigious national and international medical organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {memberships.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex items-start space-x-4 group"
              >
                <div className="w-14 h-14 bg-scod rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <SafeIcon icon={member.icon} className="w-7 h-7 text-white" />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-blue-100 text-scod rounded-full text-xs font-bold">
                      {member.abbr}
                    </span>
                  </div>
                  <p className="font-bold text-gray-900 text-lg leading-tight">{member.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. RESEARCH & PUBLICATIONS */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-scod font-bold tracking-widest uppercase text-sm">Academic Contributions</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">
              Research & <span className="text-scod">Publications</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Research Papers */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="flex items-center space-x-3 mb-6">
                <SafeIcon icon={FiFileText} className="w-8 h-8 text-scod" />
                <h3 className="text-2xl font-bold text-gray-900">Published Research Papers</h3>
              </div>
              <div className="space-y-4">
                {researchPapers.map((paper, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-blue-50 rounded-xl">
                    <div className="w-6 h-6 bg-scod rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{paper}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Research Experience */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="flex items-center space-x-3 mb-6">
                <SafeIcon icon={FiActivity} className="w-8 h-8 text-scod" />
                <h3 className="text-2xl font-bold text-gray-900">Research Experience</h3>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 text-xl mb-3">
                  Labour Epidural Analgesia Study
                </h4>
                <p className="text-gray-700 mb-2">
                  Comparison between Bupivacaine versus Bupivacaine with Fentanyl as labour epidural analgesia
                </p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-blue-200">
                  <span className="text-sm font-semibold text-scod">Sri Ramchandra Medical College</span>
                  <span className="text-sm font-bold text-gray-600">2006-2009</span>
                </div>
              </div>

              {/* Notable Abstracts */}
              <div className="mt-6 space-y-3">
                <h4 className="font-bold text-gray-900 text-lg mb-3">Notable Abstracts</h4>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700 mb-1">
                    <strong>First Author:</strong> Rare case of intra uterine device in bladder
                  </p>
                  <p className="text-xs text-scod">51st All India Congress of Obstetrics and Gynaecology, 2008</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700 mb-1">
                    <strong>First Author:</strong> A Feast of minimally invasive management of adnexal masses
                  </p>
                  <p className="text-xs text-scod">52nd All India Congress, 2009</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. AWARDS & ACHIEVEMENTS */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-scod font-bold tracking-widest uppercase text-sm">Recognition</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">
              Awards & <span className="text-scod">Achievements</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {awardsHighlights.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-scod p-8 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105"
              >
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors">
                  <SafeIcon icon={FiAward} className="w-8 h-8 text-white" />
                </div>
                <div className="text-blue-100 text-sm font-bold mb-2">{award.year}</div>
                <h3 className="text-xl font-bold mb-3">{award.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-4">{award.description}</p>
                <div className="pt-4 border-t border-white/20">
                  <p className="text-xs text-blue-100">{award.event}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Certificates Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gray-50 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Professional Certifications & Workshops
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "FOGSI ETHISKILLS COURSE (2008)",
                "Basic & Advanced Endoscopic Training (2010)",
                "Vitrification Hands-on Workshop (2011)",
                "ISMAAR - Mild Approaches in Assisted Reproduction (2011)",
                "Uro-gynaecological Surgeries Workshop, AIIMS (2010)",
                "3D Laparoscopy & Urinary Incontinence Surgery (2013)",
                "Endosuturing Training Workshop (2013)",
                "Robotic Surgery & Advanced Laparoscopy (2012)",
                "Live Laparoscopic & Hysteroscopy Workshops (Multiple)"
              ].map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-scod hover:shadow-md transition-all"
                >
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-scod flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. CONFERENCE PARTICIPATIONS */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-scod font-bold tracking-widest uppercase text-sm">Professional Engagement</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Conference Participations & Faculty Roles</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Active contributor to national and international medical conferences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Faculty Member",
                event: "IAGE - Cutting Edge Technology in Gynae Endoscopy",
                location: "India Habitat Centre, New Delhi",
                year: "2013"
              },
              {
                title: "Chairperson",
                event: "38th Annual Conference of AOGD",
                location: "The Hotel Ashok, New Delhi",
                year: "2016"
              },
              {
                title: "Delegate",
                event: "International Conference on Reproduction, Infertility & Surrogacy",
                location: "AIIMS, New Delhi",
                year: "2014"
              },
              {
                title: "Best Presentation Award",
                event: "54th All India Congress of Obstetrics & Gynaecology",
                location: "Hyderabad",
                year: "2011"
              },
              {
                title: "Delegate",
                event: "2nd International Conference & Live Workshop on Robotic Surgery",
                location: "Pune",
                year: "2012"
              },
              {
                title: "Workshop Facilitator",
                event: "FOGSI Certified Laparoscopic Training Programs (14th, 15th, 16th)",
                location: "Various Locations",
                year: "2010"
              }
            ].map((participation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-xl hover:border-scod/20 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-scod rounded-full text-xs font-bold">{participation.year}</span>
                  <SafeIcon icon={FiTarget} className="w-6 h-6 text-scod" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{participation.title}</h3>
                <p className="text-gray-700 mb-2 font-medium">{participation.event}</p>
                <p className="text-gray-500 text-sm">{participation.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-blue-50 p-12 rounded-3xl border border-gray-100"
          >
            <SafeIcon icon={FiHeart} className="w-16 h-16 text-scod mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Schedule Your Consultation Today
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Experience comprehensive women's healthcare with advanced minimally invasive techniques
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact"
                className="bg-scod text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg inline-flex items-center space-x-2"
              >
                <span>Book Appointment</span>
                <SafeIcon icon={FiTarget} className="w-5 h-5" />
              </a>
              <a
                href="/testimonials"
                className="bg-white text-scod border-2 border-scod px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all inline-flex items-center space-x-2"
              >
                <span>Patient Stories</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default DrShivaniPage;
