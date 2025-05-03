// src/app/projects/page.js
"use client";

import React, { Suspense } from 'react';
import { getAllProjects, getAllCategories } from '@/lib/projects';
import ProjectFilter from '@/components/projects/ProjectFilter';
import ProjectCard from '@/components/projects/ProjectCard';

// Metadata can't be used in client components, so we'll need to move this to a separate layout file
// or handle it differently if needed

// Client component for the projects content
function ProjectsContent() {
  const projects = getAllProjects();
  const categories = getAllCategories();
  
  return (
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
  );
}

// Main wrapper component with Suspense boundary
export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <Suspense fallback={
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <svg className="animate-spin h-8 w-8 mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Loading projects...</p>
          </div>
        </div>
      }>
        <ProjectsContent />
      </Suspense>
    </main>
  );
}