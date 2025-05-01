'use client';

import React from 'react';
import { skillCategories, services, testimonials } from '@/lib/skills';
import SkillCategory from '@/components/skills/SkillCategory';
import ServiceCard from '@/components/skills/ServiceCard';
import TestimonialCard from '@/components/skills/TestimonialCard';
import { motion } from 'framer-motion';

export default function SkillsPageClient() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
        >
          Skills & Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-300"
        >
          As a Full Stack Software Engineer focused on East African markets, I bring a specialized skill set 
          tailored to the unique challenges and opportunities of the region. From offline-first applications 
          to integrated payment solutions, I deliver technology that works for local contexts.
        </motion.p>
      </div>

      {/* Technical Skills Section */}
      <section className="mb-20">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-white"
        >
          Technical Skills
        </motion.h2>
        <div className="space-y-8">
          {skillCategories.map(category => (
            <SkillCategory key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-20">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-white"
        >
          Services Offered
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-20">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-white"
        >
          Client Testimonials
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-20 text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8 shadow-md"
      >
        <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
          Need specialized development for East African markets?
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Let&apos;s discuss how my skills and services can help bring your project to life with solutions
          tailored for the unique challenges and opportunities in the region.
        </p>
        <motion.a 
          href="/contact" 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-lg"
        >
          Get in Touch
        </motion.a>
      </motion.div>
    </div>
  );
}