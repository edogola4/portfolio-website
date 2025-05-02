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
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const InterestItem = ({ icon: Icon, children }) => (
  <motion.li 
    variants={fadeInUp}
    className="flex items-start p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
  >
    <div className="flex-shrink-0 mr-3">
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-full text-indigo-600 dark:text-indigo-300"
      >
        <Icon size={18} className="stroke-current" />
      </motion.div>
    </div>
    <div className="mt-1">{children}</div>
  </motion.li>
);

export default function PersonalSection() {
  return (
    <section id="personal" className="py-12">
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
          className="absolute -top-10 -right-10 h-64 w-64 bg-indigo-300 dark:bg-indigo-700 rounded-full filter blur-3xl opacity-10 z-0"
        />
        
        <motion.div
          variants={fadeInUp}
          className="relative z-10"
        >
          <motion.h2 
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-2"
            whileInView={{ 
              textShadow: ["0px 0px 0px rgba(99, 102, 241, 0)", "0px 0px 8px rgba(99, 102, 241, 0.3)", "0px 0px 0px rgba(99, 102, 241, 0)"],
            }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
          >
            Beyond Coding
          </motion.h2>
          
          <motion.div
            variants={fadeInUp}
            className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-6"
          />
        </motion.div>

        <motion.div 
          variants={fadeInUp}
          className="mt-6 space-y-8 text-gray-600 dark:text-gray-300"
        >
          <motion.p
            className="text-lg leading-relaxed"
            variants={fadeInUp}
          >
            When I'm not diving into code, I enjoy exploring the natural beauty of East Africa through hiking and photography. These activities not only provide a refreshing break but also inspire creative thinking that I bring back to my development work.
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            whileHover={{ scale: 1.01 }}
            className="rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 p-6 border border-indigo-100 dark:border-indigo-800 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center mb-3">
              <Users className="h-5 w-5 text-indigo-600 dark:text-indigo-300 mr-2" />
              <h3 className="font-semibold text-xl text-indigo-800 dark:text-indigo-300">
                Community Involvement
              </h3>
            </div>
            <p className="text-indigo-700 dark:text-indigo-300 pl-7"> 
              I'm an active member of Nairobi's tech community, where I volunteer as a mentor for aspiring developers through the 
              <motion.span 
                className="font-medium mx-1"
                whileHover={{ color: "#6366F1" }}
              >
                KamiLimu Mentorship Program
              </motion.span>. 
              I also organize monthly meetups for the 
              <motion.span 
                className="font-medium mx-1"
                whileHover={{ color: "#6366F1" }}
              >
                Nairobi JavaScript Community
              </motion.span>, 
              fostering knowledge sharing and networking among local developers.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="flex items-center mb-4">
              <Coffee className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2" />
              <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
                Interests & Hobbies
              </h3>
            </div>
            
            <motion.ul 
              className="space-y-2 pl-2"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <InterestItem icon={BookOpen}>
                Reading tech blogs and books on software architecture and entrepreneurship
              </InterestItem>
              
              <InterestItem icon={Mountain}>
                Exploring new hiking trails around Mount Kenya and the Aberdare Ranges
              </InterestItem>
              
              <InterestItem icon={Camera}>
                Wildlife photography, with a focus on Kenya's rich biodiversity
              </InterestItem>
              
              <InterestItem icon={Code}>
                Contributing to open-source projects that focus on emerging market solutions
              </InterestItem>
            </motion.ul>
          </motion.div>

          {/* New visual element - image grid */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 rounded-xl overflow-hidden shadow-lg"
          >
            <div className="grid grid-cols-2 gap-1">
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="relative aspect-square bg-gradient-to-br from-indigo-100 to-purple-200 dark:from-indigo-900 dark:to-purple-900 rounded-tl-xl overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Mountain className="h-12 w-12 text-indigo-600 dark:text-indigo-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-3">
                  <p className="text-white text-sm font-medium">Hiking Adventures</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="relative aspect-square bg-gradient-to-br from-purple-100 to-pink-200 dark:from-purple-900 dark:to-pink-900 rounded-tr-xl overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="h-12 w-12 text-purple-600 dark:text-purple-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-3">
                  <p className="text-white text-sm font-medium">Photography</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="relative aspect-square bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-blue-900 dark:to-indigo-900 rounded-bl-xl overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Users className="h-12 w-12 text-blue-600 dark:text-blue-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-3">
                  <p className="text-white text-sm font-medium">Community</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="relative aspect-square bg-gradient-to-br from-green-100 to-teal-200 dark:from-green-900 dark:to-teal-900 rounded-br-xl overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Lightbulb className="h-12 w-12 text-green-600 dark:text-green-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-3">
                  <p className="text-white text-sm font-medium">Innovation</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}