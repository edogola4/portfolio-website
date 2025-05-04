// src/components/ui/Tag.jsx

import React from 'react';

const Tag = ({ text, color = 'primary' }) => {
  // Color variants
  const colorClasses = {
    primary: 'bg-primary-50 text-primary-700 dark:bg-primary-900 dark:text-primary-300',
    secondary: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
    success: 'bg-green-50 text-green-700 dark:bg-green-900 dark:text-green-300',
    danger: 'bg-red-50 text-red-700 dark:bg-red-900 dark:text-red-300',
    warning: 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
    info: 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
  };

  const selectedColor = colorClasses[color] || colorClasses.primary;

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium ${selectedColor}`}>
      {text}
    </span>
  );
};

export default Tag;