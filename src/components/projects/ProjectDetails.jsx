// src/components/projects/ProjectDetails.jsx
import Image from 'next/image';
import Tag from '@/components/ui/Tag';

export default function ProjectDetails({ project }) {
  return (
    <article>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
      
      {project.status && (
        <div className="mb-4">
          <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium px-3 py-1.5 rounded">
            {project.status}
          </span>
        </div>
      )}
      
      <div className="flex flex-wrap gap-2 mb-8">
        {project.technologies.map(tech => (
          <Tag key={tech} text={tech} />
        ))}
      </div>
      
      <div className="relative h-[400px] w-full rounded-xl overflow-hidden mb-8">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          priority
        />
      </div>
      
      <div className="flex justify-between items-center mb-8">
        <div className="flex space-x-4">
          {project.demoUrl && (
            <a 
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors inline-flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Live Demo
            </a>
          )}
          
          {project.githubUrl && (
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-lg transition-colors inline-flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a8 8 0 00-2.53 15.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0010 2z" clipRule="evenodd" />
              </svg>
              View Code
            </a>
          )}
        </div>
      </div>
      
      <div className="prose dark:prose-invert max-w-none">
        <h2>Overview</h2>
        <p className="text-lg leading-relaxed">{project.longDescription}</p>
        
        {project.challenges && project.challenges.length > 0 && project.solutions && project.solutions.length > 0 && (
          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div>
              <h2>Challenges</h2>
              <ul>
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2>Solutions</h2>
              <ul>
                {project.solutions.map((solution, index) => (
                  <li key={index}>{solution}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        
        {project.stats && project.stats.length > 0 && (
          <div className="my-8">
            <h2>Key Stats</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 not-prose">
              {project.stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {project.testimonial && (
          <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg my-8 border-l-4 border-blue-500">
            <blockquote className="text-lg italic mb-4">
              "{project.testimonial.text}"
            </blockquote>
            <div className="font-bold">— {project.testimonial.author}</div>
          </div>
        )}
      </div>
    </article>
  );
}