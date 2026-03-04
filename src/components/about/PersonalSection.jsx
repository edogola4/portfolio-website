// src/components/about/PersonalSection.jsx
"use client";

import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Map, 
  Camera, 
  Lightbulb,
  Users,
  Mountain,
  Coffee,
  Code
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const InterestItem = ({ icon: Icon, children }) => (
  <motion.li 
    variants={fadeInUp}
    className="flex items-start p-2 sm:p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-all duration-300 group"
  >
    <div className="flex-shrink-0 mr-2 sm:mr-3">
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="p-1.5 sm:p-2 bg-accent-50 dark:bg-accent-900/30 rounded-full text-accent-600 dark:text-accent-300 group-hover:bg-accent-100 dark:group-hover:bg-accent-800/40 transition-colors"
      >
        <Icon size={16} className="stroke-current w-4 h-4 sm:w-[18px] sm:h-[18px]" />
      </motion.div>
    </div>
    <div className="mt-0.5 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
      {children}
    </div>
  </motion.li>
);

export default function PersonalSection() {
  return (
    <section id="personal" className="py-10 sm:py-14 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative"
        >
          {/* Visual background elements */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1.5 }}
            className="absolute -top-10 -right-10 h-48 w-48 sm:h-64 sm:w-64 bg-primary-400/20 dark:bg-primary-600/20 rounded-full filter blur-3xl opacity-10 z-0"
          />
          
          <motion.div
            variants={fadeInUp}
            className="relative z-10"
          >
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-primary-800 dark:text-white mb-2 text-center sm:text-left"
              whileInView={{ 
                textShadow: ["0px 0px 0px rgba(44, 94, 79, 0)", "0px 0px 12px rgba(44, 94, 79, 0.3)", "0px 0px 0px rgba(44, 94, 79, 0)"],
              }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
            >
              Beyond Coding
            </motion.h2>
            
            <motion.div
              variants={fadeInUp}
              className="h-1 w-16 sm:w-20 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full mb-6 sm:mb-8 mx-auto sm:mx-0"
            />
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="space-y-6 sm:space-y-8 text-neutral-700 dark:text-neutral-300"
          >
            <motion.p
              className="text-base sm:text-lg leading-relaxed text-center sm:text-left"
              variants={fadeInUp}
            >
              Being part of Nairobi's tech community is something I take seriously. East Africa has an extraordinary generation of developers coming up, and I want to play an active role in that growth.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.01 }}
              className="rounded-xl bg-gradient-to-br from-neutral-50 to-primary-50 dark:from-neutral-900/30 dark:to-primary-900/10 p-4 sm:p-6 border border-neutral-100 dark:border-neutral-800/50 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center mb-3">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-accent-600 dark:text-accent-400 mr-2" />
                <h3 className="font-semibold text-lg sm:text-xl text-primary-800 dark:text-primary-200">
                  Community Involvement
                </h3>
              </div>
              <ul className="space-y-2 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 pl-6 sm:pl-7">
                <li className="flex items-start">
                  <span className="mr-2">🧑‍🏫</span>
                  <span>Peer mentor during ALX Software Engineering cohort — supporting fellow engineers through system design and algorithm challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🤝</span>
                  <span>Member of @Krypto-Hashers-Community on GitHub — collaborating on blockchain and Web3 exploration projects</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">📝</span>
                  <span>Committed to publishing technical blog posts on .NET, Blazor, Azure, and AI/ML in 2026 to contribute to the ecosystem</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🎯</span>
                  <span>2026 goal: mentor 5+ junior developers in the Nairobi tech community and organise monthly coding sessions for aspiring engineers</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🌍</span>
                  <span>Open source contributor with 2,535 GitHub contributions in the last year across enterprise and personal projects</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="flex items-center mb-3 sm:mb-4">
                <Coffee className="h-4 w-4 sm:h-5 sm:w-5 text-accent-600 dark:text-accent-400 mr-2" />
                <h3 className="font-semibold text-lg sm:text-xl text-primary-800 dark:text-white">
                  Interests & Hobbies
                </h3>
              </div>
              
              <motion.ul 
                className="space-y-1.5 sm:space-y-2 pl-1 sm:pl-2"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <InterestItem icon={BookOpen}>
                  Reading tech blogs and books on software architecture, .NET patterns, and cloud-native design
                </InterestItem>
                
                <InterestItem icon={Mountain}>
                  Exploring Nairobi's tech community through meetups and knowledge-sharing sessions
                </InterestItem>
                
                <InterestItem icon={Camera}>
                  Building side projects to experiment with new technologies and frameworks
                </InterestItem>
                
                <InterestItem icon={Code}>
                  Contributing to open-source projects that focus on emerging market solutions
                </InterestItem>
              </motion.ul>
            </motion.div>

            {/* Visual element - image grid */}
            <motion.div
              variants={fadeInUp}
              className="mt-6 sm:mt-8 rounded-xl overflow-hidden shadow-lg border border-neutral-100 dark:border-neutral-800/50"
            >
              <div className="grid grid-cols-2 gap-0.5 sm:gap-1">
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  className="relative aspect-square bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/80 dark:to-primary-800/60 overflow-hidden"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Mountain className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-primary-700 dark:text-primary-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 sm:p-3">
                    <p className="text-white text-xs sm:text-sm font-medium">Tech Meetups</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  className="relative aspect-square bg-gradient-to-br from-accent-100 to-accent-200 dark:from-accent-900/30 dark:to-accent-800/20 overflow-hidden"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Camera className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-accent-600 dark:text-accent-400" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 sm:p-3">
                    <p className="text-white text-xs sm:text-sm font-medium">Side Projects</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  className="relative aspect-square bg-gradient-to-br from-secondary-100 to-secondary-200 dark:from-secondary-900/30 dark:to-secondary-800/20 overflow-hidden"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-secondary-700 dark:text-secondary-400" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 sm:p-3">
                    <p className="text-white text-xs sm:text-sm font-medium">Community</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  className="relative aspect-square bg-gradient-to-br from-primary-200 to-accent-100 dark:from-primary-800/40 dark:to-accent-900/20 overflow-hidden"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Lightbulb className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-primary-600 dark:text-accent-400" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 sm:p-3">
                    <p className="text-white text-xs sm:text-sm font-medium">Innovation</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}