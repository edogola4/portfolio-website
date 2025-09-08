'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { testimonials, skillCategories, allSkills } from '@/data/testimonials';

// Imported skillCategories and allSkills from testimonials.ts
const categories = ['All', ...skillCategories.map(cat => cat.name)];

export default function SkillsPageClient() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('skills');
  
  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);
  
  const filteredSkills = selectedCategory === 'All' 
    ? allSkills 
    : skillCategories.find(cat => cat.name === selectedCategory)?.skills || [];
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  const getExperienceLevel = (years: number) => {
    if (years >= 4) return 'Expert';
    if (years >= 2) return 'Proficient';
    return 'Familiar';
  };
  
  const getExperienceColor = (years: number) => {
    if (years >= 4) return 'text-green-500';
    if (years >= 2) return 'text-blue-500';
    return 'text-yellow-500';
  };
  
  // Render star rating component
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <FaStar 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-200'}`} 
        fill={i < rating ? 'currentColor' : 'none'}
      />
    ));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Skills & Expertise</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          A comprehensive overview of my technical skills and areas of expertise, developed through years of hands-on experience in building scalable web applications.
        </p>
        
        {/* Tabs */}
        <div className="flex justify-center mt-8 mb-6">
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1 shadow-sm">
            <button
              onClick={() => setActiveTab('skills')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${activeTab === 'skills' 
                ? 'bg-primary-500 text-white' 
                : 'text-gray-700 hover:bg-gray-50'}`}
            >
              Skills
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${activeTab === 'experience' 
                ? 'bg-primary-500 text-white' 
                : 'text-gray-700 hover:bg-gray-50'}`}
            >
              Experience
            </button>
          </div>
        </div>
      </motion.div>
      
      {activeTab === 'skills' ? (
        <>
          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial="hidden"
            animate="show"
            variants={container}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                variants={item}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
          
          {/* Skills Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
          >
            {filteredSkills.map((skill) => {
              // Using the icon directly since we're not using the Icon component
              const iconElement = skill.iconComponent ? (
                <skill.iconComponent className="text-xl" />
              ) : (
                <span className="text-xl">{skill.icon}</span>
              );
              return (
                <motion.div
                  key={skill.id}
                  variants={item}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1"
                  style={{
                    borderTop: `4px solid ${skill.gradientStart}`,
                  }}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center text-white mr-3"
                          style={{
                            background: `linear-gradient(135deg, ${skill.gradientStart}, ${skill.gradientEnd})`
                          }}
                        >
                          {iconElement}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                          <span className={`text-xs font-medium ${getExperienceColor(skill.years)}`}>
                            {getExperienceLevel(skill.years)}
                          </span>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-primary-600 bg-primary-50 px-2.5 py-0.5 rounded-full">
                        {skill.category}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex-1">
                        <div className="flex justify-between text-xs text-gray-500 mb-1">
                          <span>Experience</span>
                          <span className="font-medium">{skill.years}+ year{skill.years !== 1 ? 's' : ''}</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                          <div 
                            className="h-2 rounded-full"
                            style={{
                              width: `${Math.min(100, skill.years * 25)}%`,
                              background: `linear-gradient(90deg, ${skill.gradientStart}, ${skill.gradientEnd})`
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </>
      ) : (
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={item}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1"
              style={{
                borderTop: `4px solid ${category.gradientStart}`,
              }}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-white mr-3"
                    style={{
                      background: `linear-gradient(135deg, ${category.gradientStart}, ${category.gradientEnd})`
                    }}
                  >
                    <category.iconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
                </div>
                
                <p className="text-gray-600 mb-4">{category.description}</p>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map(skill => (
                      <span 
                        key={skill.id}
                        className="px-3 py-1 bg-gray-50 text-gray-700 text-xs font-medium rounded-full border border-gray-200"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
      
      {/* Testimonials Section */}
      <motion.div 
        className="mt-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What People Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take my word for it. Here&apos;s what colleagues and clients have to say about working with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              style={{
                borderTop: `4px solid ${testimonial.gradientStart}`,
              }}
            >
              <div className="flex items-center mb-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4"
                  style={{
                    background: `linear-gradient(135deg, ${testimonial.gradientStart}, ${testimonial.gradientEnd})`
                  }}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
              
              <div className="relative">
                <FaQuoteLeft className="text-gray-200 text-3xl absolute -top-2 -left-1" />
                <p className="text-gray-700 pl-6 mb-4 italic">&quot;{testimonial.content}&quot;</p>
              </div>
              
              <div className="flex items-center">
                <div className="flex space-x-1 mr-2">
                  {renderStars(testimonial.rating)}
                </div>
                <span className="text-sm text-gray-500">
                  {testimonial.rating}.0/5.0
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        className="mt-24 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">Let&apos;s Build Something Amazing Together</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          I&apos;m always excited to discuss new projects, creative ideas, or opportunities to be part of your vision. 
          Whether you need a full-stack application, API development, or technical consulting, I&apos;m here to help.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <span>Get in Touch</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          <Link
            href="/resume"
            className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-8 rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          >
            <span>View My Resume</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
