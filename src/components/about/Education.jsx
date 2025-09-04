// src/components/about/Education.jsx
import {
  AcademicCapIcon,
  CheckBadgeIcon,
  BeakerIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

// Reusable components for cleaner code
const SectionDivider = ({ title }) => (
  <div className="relative my-6 sm:my-8 md:my-10">
    <div className="absolute inset-0 flex items-center" aria-hidden="true">
      <div className="w-full border-t border-neutral-200 dark:border-neutral-700"></div>
    </div>
    <div className="relative flex justify-start">
      <span className="bg-white dark:bg-neutral-900 pr-3 sm:pr-4 text-base sm:text-lg font-medium text-primary-700 dark:text-primary-300">
        {title}
      </span>
    </div>
  </div>
);

const EducationItem = ({ icon: Icon, title, institution, period, children }) => (
  <div className="relative group">
    <div className="absolute -left-8 sm:-left-11 top-0 h-full w-0.5 bg-neutral-200 dark:bg-neutral-700 group-last:hidden"></div>
    <div className="relative flex items-start pl-8 sm:pl-10 pb-6 group-last:pb-0">
      <div className="absolute left-0 top-1 flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-accent-100 dark:bg-accent-900/30 ring-6 sm:ring-8 ring-white dark:ring-neutral-900">
        <Icon className="h-3 w-3 sm:h-4 sm:w-4 text-accent-600 dark:text-accent-400" aria-hidden="true" />
      </div>
      <div className="w-full">
        <h3 className="text-base sm:text-lg font-semibold text-primary-800 dark:text-white">
          {title}
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
          {institution} • {period}
        </p>
        <div className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
          {children}
        </div>
      </div>
    </div>
  </div>
);

const TrainingItem = ({ icon: Icon, title, institution, period, children }) => (
  <div className="relative group">
    <div className="absolute -left-8 sm:-left-11 top-0 h-full w-0.5 bg-neutral-200 dark:bg-neutral-700 group-last:hidden"></div>
    <div className="relative flex items-start pl-8 sm:pl-10 pb-6 group-last:pb-0">
      <div className="absolute left-0 top-1 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-secondary-100 dark:bg-secondary-900/30 ring-4 sm:ring-6 ring-white dark:ring-neutral-900">
        <Icon className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-secondary-600 dark:text-secondary-400" aria-hidden="true" />
      </div>
      <div className="w-full">
        <h3 className="text-sm sm:text-base font-medium text-primary-800 dark:text-white">
          {title}
        </h3>
        <p className="mt-0.5 text-xs text-neutral-600 dark:text-neutral-300">
          {institution} • {period}
        </p>
        <div className="mt-1.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
          {children}
        </div>
      </div>
    </div>
  </div>
);

const SkillItem = ({ children }) => (
  <li className="flex items-start text-neutral-700 dark:text-neutral-300">
    <CheckCircleIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent-500 mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
    <span className="text-xs sm:text-sm">{children}</span>
  </li>
);

export default function Education() {
  const selfLearningSkills = [
    'Next.js and Server Components',
    'TypeScript and Type-Safe Development',
    'Serverless Architecture Patterns',
    'Performance Optimization Techniques',
    'Modern Authentication Patterns',
    'Mobile-First Responsive Design'
  ];
  
  return (
    <section id="education" aria-labelledby="education-heading" className="py-6 sm:py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          id="education-heading" 
          className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-primary-800 dark:text-white"
        >
          Education & Training
        </h2>
        
        <div className="mt-6 sm:mt-8 space-y-8 md:space-y-10">
          <SectionDivider title="Formal Education" />
          
          <div className="relative">
            <EducationItem 
              icon={AcademicCapIcon}
              title="Bachelor of Science in Computer Science"
              institution="University of Nairobi"
              period="2021 - 2025"
            >
              <p className="text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm">
                Focused on software engineering, database systems, and web technologies. Graduated with honors and completed a capstone project on developing a mobile payment integration system for small businesses in Kenya.
              </p>
            </EducationItem>
            
            <SectionDivider title="Specialized Training" />
          
            <div className="grid gap-6 md:grid-cols-2">
              <TrainingItem 
                icon={CheckBadgeIcon}
                title="Full Stack Web Development Bootcamp"
                institution="Moringa School"
                period="2021"
              >
                <p className="text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm">
                  Intensive 16-week program covering modern JavaScript frameworks, RESTful API design, and deployment strategies.
                </p>
              </TrainingItem>
              
              <TrainingItem 
                icon={BeakerIcon}
                title="AWS Certified Solutions Architect"
                institution="Amazon Web Services"
                period="2022"
              >
                <p className="text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm">
                  Certification focused on designing distributed systems on AWS, with emphasis on high availability and cost optimization for web applications.
                </p>
              </TrainingItem>
            </div>
          
            <SectionDivider title="Self-Learning" />
          
            <div className="rounded-lg bg-white dark:bg-neutral-800 shadow overflow-hidden border border-neutral-100 dark:border-neutral-700/50">
              <div className="p-4 sm:p-5 md:p-6">
                <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
                  Beyond formal education, I maintain a rigorous self-learning regimen. I regularly complete online courses from platforms like Udemy, Frontend Masters, and Egghead.io to stay current with emerging technologies and best practices. Some of the recent areas I've focused on include:
                </p>
                <ul className="mt-4 grid gap-2 sm:gap-3 grid-cols-1 sm:grid-cols-2" aria-label="Self-learning skills">
                  {selfLearningSkills.map((skill, index) => (
                    <SkillItem key={index}>{skill}</SkillItem>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}