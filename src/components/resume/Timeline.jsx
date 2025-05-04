// src/components/resume/Timeline.jsx

import React from 'react';
import Tag from '@/components/ui/Tag';

const Timeline = ({ items }) => {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <div key={index} className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700">
          {/* Timeline dot */}
          <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary border-4 border-white dark:border-gray-900"></div>
          
          {/* Content */}
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <span className="text-primary font-medium mt-1 md:mt-0">{item.period}</span>
            </div>
            
            <div className="flex flex-col md:flex-row text-gray-600 dark:text-gray-300 mb-3">
              <span className="font-medium">{item.company}</span>
              {item.location && (
                <>
                  <span className="hidden md:block mx-2">•</span>
                  <span>{item.location}</span>
                </>
              )}
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">{item.description}</p>
            
            {item.technologies && item.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech, techIndex) => (
                  <Tag key={techIndex} text={tech} />
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;