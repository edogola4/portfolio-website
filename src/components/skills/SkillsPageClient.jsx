// src/components/skills/SkillsPageClient.jsx
'use client';

import React, { useEffect, useState } from 'react';
import { skillCategories, services, testimonials } from '@/lib/skills';
import SkillCategory from '@/components/skills/SkillCategory';
import ServiceCard from '@/components/skills/ServiceCard';
import TestimonialCard from '@/components/skills/TestimonialCard';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Tilt } from 'react-tilt';

export default function SkillsPageClient() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        delay: i * 0.1,
        duration: 0.8
      }
    })
  };
  
  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };
  
  return (
    <AnimatePresence>
      {isLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="container mx-auto px-4 py-16 overflow-hidden"
        >
          {/* Hero Section with Enhanced Glow Effect */}
          <motion.div 
            style={{ opacity, scale }} 
            className="relative max-w-4xl mx-auto mb-24"
          >
            <div className="absolute top-0 -left-10 w-80 h-80 bg-blue-500/30 rounded-full filter blur-3xl opacity-20 -z-10 animate-blob"></div>
            <div className="absolute bottom-10 -right-10 w-80 h-80 bg-purple-500/30 rounded-full filter blur-3xl opacity-20 -z-10 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-pink-500/20 rounded-full filter blur-3xl opacity-20 -z-10 animate-blob animation-delay-4000"></div>
            
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 12,
                duration: 0.8 
              }}
              className="relative"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                Skills & Services
              </h1>
              
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100px" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-10"
              />
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              As a Full Stack Software Engineer focused on East African markets, I bring a specialized skill set 
              tailored to the unique challenges and opportunities of the region. From offline-first applications 
              to integrated payment solutions, I deliver technology that works for local contexts.
            </motion.p>
          </motion.div>

          {/* Technical Skills Section */}
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="mb-36 relative"
          >
            {/* Background effects */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute -top-20 left-0 w-full h-40 bg-gradient-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 dark:to-transparent"></div>
              <div className="absolute -bottom-20 left-0 w-full h-40 bg-gradient-to-t from-blue-50/30 to-transparent dark:from-blue-900/10 dark:to-transparent"></div>
            </div>
          
            <motion.div 
              className="flex items-center justify-center mb-20"
              variants={fadeInUp}
            >
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  Technical Skills
                </h2>
                <motion.div 
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "8rem" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
            </motion.div>
            
            <div className="space-y-16">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  custom={index}
                  variants={fadeInUp}
                >
                  <SkillCategory category={category} />
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Services Section */}
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="mb-36 relative"
          >
            {/* Enhanced background effect */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-300/20 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30 mix-blend-multiply animate-pulse"></div>
              <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-300/20 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30 mix-blend-multiply animate-pulse animation-delay-2000"></div>
              <div className="absolute top-3/4 left-1/2 w-80 h-80 bg-cyan-300/20 dark:bg-cyan-900/20 rounded-full filter blur-3xl opacity-30 mix-blend-multiply animate-pulse animation-delay-4000"></div>
            </div>
            
            <motion.div 
              className="flex items-center justify-center mb-20"
              variants={fadeInUp}
            >
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  Services Offered
                </h2>
                <motion.div 
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "8rem" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  custom={index}
                  variants={fadeInUp}
                >
                  <Tilt
                    options={{
                      max: 25,
                      scale: 1.05,
                      speed: 800,
                      glare: true,
                      "max-glare": 0.2,
                      perspective: 1000,
                    }}
                    className="h-full"
                  >
                    <ServiceCard service={service} index={index} />
                  </Tilt>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Testimonials Section */}
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="mb-36"
          >
            <motion.div 
              className="flex items-center justify-center mb-20"
              variants={fadeInUp}
            >
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  Client Testimonials
                </h2>
                <motion.div 
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "8rem" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  custom={index}
                  variants={fadeInUp}
                >
                  <Tilt
                    options={{
                      max: 15,
                      scale: 1.03,
                      speed: 600,
                      glare: true,
                      "max-glare": 0.15,
                      perspective: 1000,
                    }}
                    className="h-full"
                  >
                    <TestimonialCard testimonial={testimonial} index={index} />
                  </Tilt>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Call to Action with Enhanced Effects */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-24 text-center rounded-3xl p-16 shadow-2xl relative overflow-hidden"
          >
            {/* Enhanced gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 -z-10"></div>
            
            {/* Enhanced glowing orbs */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/20 rounded-full filter blur-3xl mix-blend-multiply -z-10 animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-400/20 rounded-full filter blur-3xl mix-blend-multiply -z-10 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-400/10 rounded-full filter blur-3xl mix-blend-multiply -z-10 animate-blob animation-delay-4000"></div>
            <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-cyan-400/10 rounded-full filter blur-3xl mix-blend-multiply -z-10 animate-blob animation-delay-6000"></div>
            
            <motion.h3 
              className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Need specialized development for East African markets?
            </motion.h3>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto text-lg"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Let&apos;s discuss how my skills and services can help bring your project to life with solutions
              tailored for the unique challenges and opportunities in the region.
            </motion.p>
            
            <motion.a 
              href="/contact" 
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 55px rgba(59, 130, 246, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium py-4 px-10 rounded-lg transition duration-300 shadow-xl hover:shadow-2xl"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}