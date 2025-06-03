// src/components/resume/Timeline.jsx

// src/components/resume/Timeline.js (Enhanced version)
import React from 'react';
import { memo } from 'react';

const TimelineItem = memo(({ item, className, cardClassName, dotClassName }) => {
  return (
    <div className={`relative ${className || ''}`}>
      {/* Timeline dot */}
      <div className={`absolute ${dotClassName || 'left-4 top-6 w-3 h-3 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900'}`}></div>
      
      {/* Timeline line */}
      <div className="absolute left-5 top-9 w-0.5 h-full bg-gray-300 dark:bg-gray-600"></div>
      
      {/* Content card */}
      <div className={`ml-12 ${cardClassName || 'bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300'}`}>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {item.title}
            </h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium">
              {item.company}
            </p>
            {item.location && (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                📍 {item.location}
              </p>
            )}
          </div>
          <div className="mt-2 sm:mt-0 sm:ml-4">
            <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
              {item.period}
            </span>
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {item.description}
        </p>
        
        {/* Achievements */}
        {item.achievements && item.achievements.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Key Achievements:
            </h4>
            <ul className="space-y-1">
              {item.achievements.map((achievement, index) => (
                <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                  <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Technologies */}
        {item.technologies && item.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {item.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs font-medium border border-blue-200 dark:border-blue-700"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        
        {/* Additional info for education */}
        {item.grade && (
          <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-medium">Grade:</span> {item.grade}
            </p>
          </div>
        )}
        
        {item.credentialId && (
          <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-medium">Credential ID:</span> {item.credentialId}
            </p>
          </div>
        )}
      </div>
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';

const Timeline = memo(({ items, className, itemClassName, cardClassName, dotClassName }) => {
  if (!items || items.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500 dark:text-gray-400">
        No items to display
      </div>
    );
  }

  return (
    <div className={`relative ${className || ''}`} role="list">
      {items.map((item, index) => (
        <div key={item.id || index} role="listitem">
          <TimelineItem
            item={item}
            className={itemClassName}
            cardClassName={cardClassName}
            dotClassName={dotClassName}
          />
        </div>
      ))}
    </div>
  );
});

Timeline.displayName = 'Timeline';

export default Timeline;