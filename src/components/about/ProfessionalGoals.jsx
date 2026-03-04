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
                Currently Building
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="p-4 rounded-lg bg-gradient-to-br from-accent-50 to-primary-50 dark:from-accent-900/10 dark:to-primary-900/10 border border-accent-100 dark:border-accent-800/20">
                  <h4 className="font-semibold text-base text-primary-800 dark:text-white mb-2">
                    SmartSchedule Healthcare — Enterprise AI Scheduling SaaS
                  </h4>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-2">
                    .NET 10 + Azure + ML.NET | MVP target: Q2 2026
                  </p>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    Addressing a $150B market with AI-powered no-show prediction (85% accuracy target), HIPAA-compliant architecture, and bidirectional EHR integration with Epic, Cerner, and Athena.
                  </p>
                </div>
              </div>
            </motion.div>
            
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
                  <span className="font-medium">Advanced .NET patterns</span>: CQRS, Clean Architecture, Event Sourcing
                </GoalItem>
                <GoalItem 
                  icon={Target} 
                  color="primary"
                >
                  <span className="font-medium">Azure cloud services</span>: Service Bus, Key Vault, Cosmos DB, OpenAI
                </GoalItem>
                <GoalItem 
                  icon={Target} 
                  color="secondary"
                >
                  <span className="font-medium">AI/ML integration</span>: Azure OpenAI GPT-4o, ML.NET predictive models
                </GoalItem>
                <GoalItem 
                  icon={Target} 
                  color="accent"
                >
                  <span className="font-medium">HIPAA-compliant</span> and zero-trust security architecture patterns
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
                  <span className="font-medium">Leading development teams</span> on impactful enterprise projects
                </GoalItem>
                <GoalItem 
                  icon={Globe} 
                  color="primary"
                >
                  <span className="font-medium">Contributing to East Africa's tech ecosystem</span> through mentorship and knowledge sharing
                </GoalItem>
                <GoalItem 
                  icon={Users} 
                  color="secondary"
                >
                  <span className="font-medium">Building scalable SaaS products</span> that solve real-world problems for global markets
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
                    "I started building software to solve problems I saw around me in East Africa. That instinct — to build things that actually matter to real people — is what drives every technical decision I make today, whether I'm designing a distributed system or a healthcare SaaS architecture."
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