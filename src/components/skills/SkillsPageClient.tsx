'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { skillCategories, allSkills } from '@/data/testimonials';
import { testimonials } from '@/data/shared-testimonials';

const categories = ['All', ...skillCategories.map(cat => cat.name)];

export default function SkillsPageClient() {
  const locale = useLocale();
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
    show:   { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
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

  const renderStars = (rating: number) =>
    Array(5).fill(0).map((_, i) => (
      <FaStar
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-[#e8e2d6] dark:text-[#3A5A6B]/40'}`}
        fill={i < rating ? 'currentColor' : 'none'}
      />
    ));

  return (
    <div className="container-custom py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-[#2B2D42] dark:text-[#F8F5F0] mb-4">
          Skills &amp; Expertise
        </h1>
        <div className="h-1 w-24 bg-[#3A5A6B] dark:bg-[#6B7F82] mx-auto mb-6 rounded-full" />
        <p className="text-lg text-[#2B2D42]/75 dark:text-[#F8F5F0]/75 max-w-3xl mx-auto">
          A comprehensive overview of my technical skills and areas of expertise, developed through
          years of hands-on experience building scalable web applications.
        </p>

        {/* Tabs */}
        <div className="flex justify-center mt-8 mb-6">
          <div className="inline-flex rounded-lg border border-[#e8e2d6] dark:border-[#3A5A6B]/35 bg-white dark:bg-[#1E2A35] p-1 shadow-sm">
            {(['skills', 'experience'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium rounded-md capitalize transition-colors ${
                  activeTab === tab
                    ? 'bg-[#3A5A6B] text-white dark:bg-[#6B7F82]'
                    : 'text-[#2B2D42]/80 dark:text-[#F8F5F0]/80 hover:bg-[#F8F5F0] dark:hover:bg-[#3A5A6B]/20'
                }`}
              >
                {tab}
              </button>
            ))}
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
            {categories.map(category => (
              <motion.button
                key={category}
                variants={item}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#3A5A6B] text-white shadow-md dark:bg-[#6B7F82]'
                    : 'bg-white dark:bg-[#1E2A35] text-[#2B2D42]/80 dark:text-[#F8F5F0]/80 hover:bg-[#F8F5F0] dark:hover:bg-[#3A5A6B]/20 border border-[#e8e2d6] dark:border-[#3A5A6B]/35'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {filteredSkills.map(skill => {
              const iconElement = skill.iconComponent
                ? <skill.iconComponent className="text-xl" />
                : <span className="text-xl">{skill.icon}</span>;
              return (
                <motion.div
                  key={skill.id}
                  variants={item}
                  className="bg-white dark:bg-[#1E2A35] rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-[#e8e2d6] dark:border-[#3A5A6B]/35 hover:-translate-y-1"
                  style={{ borderTop: `4px solid ${skill.gradientStart}` }}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center text-white mr-3"
                          style={{ background: `linear-gradient(135deg, ${skill.gradientStart}, ${skill.gradientEnd})` }}
                        >
                          {iconElement}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-[#2B2D42] dark:text-[#F8F5F0]">
                            {skill.name}
                          </h3>
                          <span className={`text-xs font-medium ${getExperienceColor(skill.years)}`}>
                            {getExperienceLevel(skill.years)}
                          </span>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-[#3A5A6B] dark:text-[#6B9FB1] bg-[#3A5A6B]/10 dark:bg-[#3A5A6B]/20 px-2.5 py-0.5 rounded-full">
                        {skill.category}
                      </span>
                    </div>
                    <div className="mt-4">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-[#F8F5F0] dark:bg-[#3A5A6B]/20 text-[#2B2D42]/75 dark:text-[#F8F5F0]/75 rounded-full">
                        {skill.years}+ year{skill.years !== 1 ? 's' : ''} experience
                      </span>
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
          animate={isVisible ? 'show' : 'hidden'}
        >
          {skillCategories.map(category => (
            <motion.div
              key={category.id}
              variants={item}
              className="bg-white dark:bg-[#1E2A35] rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-[#e8e2d6] dark:border-[#3A5A6B]/35 hover:-translate-y-1"
              style={{ borderTop: `4px solid ${category.gradientStart}` }}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-white mr-3"
                    style={{ background: `linear-gradient(135deg, ${category.gradientStart}, ${category.gradientEnd})` }}
                  >
                    <category.iconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2B2D42] dark:text-[#F8F5F0]">
                    {category.name}
                  </h3>
                </div>
                <p className="text-[#2B2D42]/75 dark:text-[#F8F5F0]/75 mb-4">{category.description}</p>
                <div className="mt-4 pt-4 border-t border-[#e8e2d6] dark:border-[#3A5A6B]/25">
                  <h4 className="text-sm font-semibold text-[#2B2D42]/80 dark:text-[#F8F5F0]/80 mb-3">
                    Key Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map(skill => (
                      <span
                        key={skill.id}
                        className="px-3 py-1 bg-[#F8F5F0] dark:bg-[#3A5A6B]/20 text-[#2B2D42]/80 dark:text-[#F8F5F0]/80 text-xs font-medium rounded-full border border-[#e8e2d6] dark:border-[#3A5A6B]/35"
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

      {/* Testimonials */}
      <motion.div
        className="mt-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2B2D42] dark:text-[#F8F5F0] mb-4">
            What People Say
          </h2>
          <div className="h-1 w-24 bg-[#3A5A6B] dark:bg-[#6B7F82] mx-auto mb-6 rounded-full" />
          <p className="text-[#2B2D42]/75 dark:text-[#F8F5F0]/75 max-w-2xl mx-auto">
            Don&apos;t just take my word for it. Here&apos;s what colleagues and clients have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-[#1E2A35] rounded-xl shadow-md p-6 border border-[#e8e2d6] dark:border-[#3A5A6B]/35 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              style={{ borderTop: '4px solid #3A5A6B' }}
            >
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4"
                  style={{ background: 'linear-gradient(135deg, #3A5A6B, #6B7F82)' }}
                >
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-[#2B2D42] dark:text-[#F8F5F0]">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-[#2B2D42]/65 dark:text-[#F8F5F0]/65">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
              <div className="relative">
                <FaQuoteLeft className="text-[#e8e2d6] dark:text-[#3A5A6B]/40 text-3xl absolute -top-2 -left-1" />
                <p className="text-[#2B2D42]/80 dark:text-[#F8F5F0]/80 pl-6 mb-4 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>
              <div className="flex items-center">
                <div className="flex space-x-1 mr-2">{renderStars(5)}</div>
                <span className="text-sm text-[#2B2D42]/55 dark:text-[#F8F5F0]/55">5.0/5.0</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="mt-24 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-[#2B2D42] dark:text-[#F8F5F0] mb-4">
          Let&apos;s Build Something Amazing Together
        </h2>
        <p className="text-[#2B2D42]/75 dark:text-[#F8F5F0]/75 mb-8 max-w-2xl mx-auto">
          I&apos;m always excited to discuss new projects, creative ideas, or opportunities to be part
          of your vision.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center justify-center gap-2 bg-[#3A5A6B] hover:bg-[#2B3D4D] dark:bg-[#6B7F82] dark:hover:bg-[#5A6D72] text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Get in Touch <FiArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href={`/${locale}/resume`}
            className="inline-flex items-center justify-center gap-2 bg-white dark:bg-[#1E2A35] hover:bg-[#F8F5F0] dark:hover:bg-[#3A5A6B]/20 text-[#2B2D42] dark:text-[#F8F5F0] font-medium py-3 px-8 rounded-lg border border-[#e8e2d6] dark:border-[#3A5A6B]/35 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          >
            View My Resume <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
