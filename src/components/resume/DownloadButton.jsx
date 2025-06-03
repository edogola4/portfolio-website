// src/components/resume/DownloadButton.jsx

'use client';

import React from 'react';

export default function DownloadButton() {
  const handleDownload = () => {
    // Example: Trigger a file download (replace with your actual PDF URL or logic)
    const link = document.createElement('a');
    link.href = '/files/edwin-ogola-resume.pdf'; // Update with actual path or URL
    link.download = 'Edwin_Ogola_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      aria-label="Download resume as PDF"
    >
      Download Resume
    </button>
  );
}