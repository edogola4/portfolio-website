// src/components/about/Education.jsx
//import { AcademicCapIcon, BadgeCheckIcon, BeakerIcon, CheckCircleIcon } from '@heroicons/react/outline';
import {
    AcademicCapIcon,
    CheckBadgeIcon, // ✅ Replace BadgeCheckIcon
    BeakerIcon,
    CheckCircleIcon,
  } from '@heroicons/react/24/outline';
  
// Reusable components for cleaner code
const SectionDivider = ({ title }) => (
  <div className="relative my-6">
    <div className="absolute inset-0 flex items-center" aria-hidden="true">
      <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
    </div>
    <div className="relative flex justify-start">
      <span className="bg-white dark:bg-gray-900 pr-3 text-lg font-medium text-gray-900 dark:text-white">
        {title}
      </span>
    </div>
  </div>
);

const EducationItem = ({ icon: Icon, title, institution, period, children }) => (
  <div className="rounded-lg bg-white dark:bg-gray-800 shadow overflow-hidden">
    <div className="px-4 py-5 sm:p-6">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <Icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
            {institution} • {period}
          </p>
          <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            {children}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TrainingItem = ({ icon: Icon, title, institution, period, children }) => (
  <div className="rounded-lg bg-white dark:bg-gray-800 shadow overflow-hidden">
    <div className="px-4 py-5 sm:p-6">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
        </div>
        <div className="ml-4">
          <h3 className="text-md font-medium text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
            {institution} • {period}
          </p>
          <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            {children}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SkillItem = ({ children }) => (
  <li className="flex items-center text-gray-600 dark:text-gray-300">
    <CheckCircleIcon className="h-5 w-5 text-indigo-500 mr-2" aria-hidden="true" />
    {children}
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
    <section id="education" aria-labelledby="education-heading" className="py-8">
      <h2 
        id="education-heading" 
        className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        Education & Training
      </h2>
      
      <div className="mt-6 space-y-8">
        <SectionDivider title="Formal Education" />
        
        <EducationItem 
          icon={AcademicCapIcon}
          title="Bachelor of Science in Computer Science"
          institution="University of Nairobi"
          period="2016 - 2020"
        >
          Focused on software engineering, database systems, and web technologies. Graduated with honors and completed a capstone project on developing a mobile payment integration system for small businesses in Kenya.
        </EducationItem>
        
        <SectionDivider title="Specialized Training" />
        
        <div className="grid gap-6 md:grid-cols-2">
          <TrainingItem 
            icon={CheckBadgeIcon}
            title="Full Stack Web Development Bootcamp"
            institution="Moringa School"
            period="2021"
          >
            Intensive 16-week program covering modern JavaScript frameworks, RESTful API design, and deployment strategies.
          </TrainingItem>
          
          <TrainingItem 
            icon={BeakerIcon}
            title="AWS Certified Solutions Architect"
            institution="Amazon Web Services"
            period="2022"
          >
            Certification focused on designing distributed systems on AWS, with emphasis on high availability and cost optimization for web applications.
          </TrainingItem>
        </div>
        
        <SectionDivider title="Self-Learning" />
        
        <div className="rounded-lg bg-white dark:bg-gray-800 shadow overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <p className="text-gray-600 dark:text-gray-300">
              Beyond formal education, I maintain a rigorous self-learning regimen. I regularly complete online courses from platforms like Udemy, Frontend Masters, and Egghead.io to stay current with emerging technologies and best practices. Some of the recent areas I've focused on include:
            </p>
            <ul className="mt-4 grid gap-3 md:grid-cols-2" aria-label="Self-learning skills">
              {selfLearningSkills.map((skill, index) => (
                <SkillItem key={index}>{skill}</SkillItem>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}