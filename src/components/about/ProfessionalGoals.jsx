// src/components/about/ProfessionalGoals.jsx
"use client";

import { motion } from 'framer-motion';
import { Target, ArrowRight, Lightbulb, Users, Globe } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] // Custom easing for smoother animation
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const GoalItem = ({ icon: Icon, color, children }) => (
  <motion.li 
    variants={fadeInUp}
    className="flex items-start p-4 sm:p-5 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800/30 transition-colors duration-300"
  >
    <div className={`flex-shrink-0 h-10 w-10 rounded-full bg-${color}-50 dark:bg-${color}-900/30 flex items-center justify-center mr-4`}>
      <Icon className={`h-5 w-5 text-${color}-600 dark:text-${color}-400`} />
    </div>
    <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 mt-1">{children}</p>
  </motion.li>
);

export default function ProfessionalGoals() {
  return (
    <section id="goals" className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center sm:text-left">
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-primary-800 dark:text-white mb-2"
            >
              Professional Growth
            </motion.h2>
            
            <motion.div 
              className="h-1 w-16 sm:w-20 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full mb-6 sm:mb-8 mx-auto sm:mx-0"
            />
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="space-y-6 sm:space-y-8 text-neutral-700 dark:text-neutral-300"
          >
            <motion.p className="text-base sm:text-lg leading-relaxed">
              I'm constantly evolving as a developer, seeking out new challenges and learning opportunities. Here's what I'm currently focused on in my professional journey:
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="bg-white dark:bg-neutral-800/50 rounded-xl p-5 sm:p-6 shadow-sm border border-neutral-100 dark:border-neutral-700/50"
            >
              <h3 className="flex items-center text-lg sm:text-xl font-semibold text-primary-800 dark:text-white mb-4">
                <Lightbulb className="h-5 w-5 text-accent-600 dark:text-accent-400 mr-2 flex-shrink-0" />
                Currently Learning
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                <GoalItem 
                  icon={Target} 
                  color="accent"
                >
                  <span className="font-medium">Advanced TypeScript patterns</span> for building scalable and maintainable applications
                </GoalItem>
                <GoalItem 
                  icon={Target} 
                  color="primary"
                >
                  <span className="font-medium">Rust</span> for high-performance web backends and systems programming
                </GoalItem>
                <GoalItem 
                  icon={Target} 
                  color="secondary"
                >
                  <span className="font-medium">AI/ML integration</span> in modern web applications
                </GoalItem>
              </ul>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="bg-white dark:bg-neutral-800/50 rounded-xl p-5 sm:p-6 shadow-sm border border-neutral-100 dark:border-neutral-700/50"
            >
              <h3 className="flex items-center text-lg sm:text-xl font-semibold text-primary-800 dark:text-white mb-4">
                <ArrowRight className="h-5 w-5 text-accent-600 dark:text-accent-400 mr-2 flex-shrink-0" />
                Future Aspirations
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                <GoalItem 
                  icon={Users} 
                  color="accent"
                >
                  <span className="font-medium">Leading development teams</span> on impactful, innovative projects
                </GoalItem>
                <GoalItem 
                  icon={Globe} 
                  color="primary"
                >
                  <span className="font-medium">Contributing to East Africa's tech ecosystem</span> through education and infrastructure
                </GoalItem>
                <GoalItem 
                  icon={Users} 
                  color="secondary"
                >
                  <span className="font-medium">Mentoring the next generation</span> of African developers and entrepreneurs
                </GoalItem>
              </ul>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="rounded-xl bg-gradient-to-r from-accent-50 to-primary-50 dark:from-accent-900/10 dark:to-primary-900/10 p-5 sm:p-6 border border-accent-100 dark:border-accent-800/20"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="flex-shrink-0 mb-3 sm:mb-0 sm:mr-4 flex justify-center sm:justify-start">
                  <Lightbulb className="h-6 w-6 text-accent-600 dark:text-accent-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-accent-800 dark:text-accent-300 text-center sm:text-left">My Development Philosophy</h3>
                  <p className="mt-2 text-sm sm:text-base text-accent-700 dark:text-accent-300">
                    "I believe in creating software that not only solves technical challenges but also addresses real human needs. The most elegant code is meaningless if it doesn't improve people's lives."
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}