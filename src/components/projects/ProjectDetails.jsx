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
      
      {project.badges && project.badges.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {project.badges.map((badge, index) => {
            const colorClasses = {
              green: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
              blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
              yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
            };
            return (
              <span key={index} className={`inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded ${colorClasses[badge.color] || colorClasses.blue}`}>
                {badge.label}: {badge.value}
              </span>
            );
          })}
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
            <div className="inline-flex items-center">
              {project.isPrivate ? (
                <span className="bg-gray-800 text-white px-6 py-2 rounded-lg inline-flex items-center cursor-not-allowed opacity-75">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a8 8 0 00-2.53 15.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0010 2z" clipRule="evenodd" />
                  </svg>
                  Private Repository
                </span>
              ) : (
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
        
        {project.architecture && project.architecture.layers && (
          <div className="my-8">
            <h2>Architecture Overview</h2>
            <div className="not-prose bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <div className="space-y-4">
                {project.architecture.layers.map((layer, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex-1">
                      <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-3 rounded-lg text-center font-medium text-sm">
                        {layer}
                      </div>
                    </div>
                    {index < project.architecture.layers.length - 1 && (
                      <div className="flex justify-center w-full py-2">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {project.languages && project.languages.length > 0 && (
          <div className="my-8">
            <h2>Languages</h2>
            <div className="not-prose">
              <div className="w-full h-2 rounded-full overflow-hidden flex mb-4">
                {project.languages.map((lang, index) => (
                  lang.percentage > 0 && (
                    <div
                      key={index}
                      style={{
                        width: `${lang.percentage}%`,
                        backgroundColor: lang.color
                      }}
                      className="h-full"
                      title={`${lang.name}: ${lang.percentage}%`}
                    />
                  )
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                {project.languages.map((lang, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: lang.color }}
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {lang.name}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {lang.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {project.technologies && project.technologies.length > 0 && (
          <div className="my-8">
            <h2>Languages & Tools</h2>
            <div className="not-prose">
              <div className="w-full h-2 rounded-full overflow-hidden flex mb-4">
                {project.technologies.map((tech, index) => {
                  const percentage = 100 / project.technologies.length;
                  const colors = ['#3572A5', '#178600', '#f1e05a', '#3178c6', '#0078D4', '#e34c26', '#563d7c', '#89e051', '#384d54', '#cb171e', '#f34b7d', '#fedf5b'];
                  return (
                    <div
                      key={index}
                      style={{
                        width: `${percentage}%`,
                        backgroundColor: colors[index % colors.length]
                      }}
                      className="h-full"
                      title={`${tech}`}
                    />
                  );
                })}
              </div>
              <div className="flex flex-wrap gap-4">
                {project.technologies.map((tech, index) => {
                  const colors = ['#3572A5', '#178600', '#f1e05a', '#3178c6', '#0078D4', '#e34c26', '#563d7c', '#89e051', '#384d54', '#cb171e', '#f34b7d', '#fedf5b'];
                  return (
                    <div key={index} className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: colors[index % colors.length] }}
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {tech}
                      </span>
                    </div>
                  );
                })}
              </div>
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