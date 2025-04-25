// src/components/home/AboutPreview.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight } from 'react-icons/fi';

const AboutPreview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="section-heading">About Me</h2>
          
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
            I'm a passionate Full Stack Software Engineer with expertise in building 
            scalable web applications that solve real problems for businesses and communities 
            across East Africa.
          </p>
          
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
            With a focus on React, Node.js, and modern cloud technologies, I create 
            efficient, user-friendly solutions that work reliably even in challenging 
            connectivity environments.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/about" className="btn btn-outline flex items-center">
              Learn More About Me <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;