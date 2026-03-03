// src/components/ui/LoadingSpinner.js
import React from 'react';

export default function LoadingSpinner({ size = 'md', className = '' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`flex justify-center items-center p-4 ${className}`} role="status" aria-label="Loading">
      <div className={`animate-spin rounded-full border-4 border-gray-300 border-t-blue-600 ${sizeClasses[size]}`}></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}