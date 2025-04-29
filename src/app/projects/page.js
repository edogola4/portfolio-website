// src/app/projects/page.js
import { getAllProjects, getAllCategories } from '@/lib/projects';
import ProjectFilter from '@/components/projects/ProjectFilter';
import ProjectCard from '@/components/projects/ProjectCard';

export const metadata = {
  title: 'Projects | Edwin Ogola',
  description: 'Explore my portfolio of web and mobile development projects focused on East African markets.'
};

export default function ProjectsPage() {
  const projects = getAllProjects();
  const categories = getAllCategories();
  
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">My Projects</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          A showcase of my development work, focusing on scalable solutions for East African markets.
        </p>
        
        <ProjectFilter categories={categories} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}