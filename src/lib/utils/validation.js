// src/lib/utils/validation.js
export function validateResumeData(data) {
  const errors = [];
  
  if (!data.name || data.name.trim().length === 0) {
    errors.push('Name is required');
  }
  
  if (!data.title || data.title.trim().length === 0) {
    errors.push('Job title is required');
  }
  
  if (!data.experience || !Array.isArray(data.experience) || data.experience.length === 0) {
    errors.push('At least one work experience entry is required');
  }
  
  if (data.experience) {
    data.experience.forEach((exp, index) => {
      if (!exp.title || !exp.company || !exp.period) {
        errors.push(`Experience entry ${index + 1} is missing required fields`);
      }
    });
  }
  
  if (!data.skills || Object.keys(data.skills).length === 0) {
    errors.push('Skills section is required');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}