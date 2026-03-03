// src/lib/utils/export.js
export async function generatePDF(elementId = 'resume-container') {
  // This is a placeholder for PDF generation
  // In a real application, you would use a library like jsPDF, Puppeteer, or a server-side service
  
  try {
    // Example using browser's print to PDF functionality
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error('Resume element not found');
    }
    
    // Add print-specific styles
    document.body.classList.add('printing');
    
    // Use browser's print dialog
    window.print();
    
    // Clean up
    setTimeout(() => {
      document.body.classList.remove('printing');
    }, 1000);
    
  } catch (error) {
    console.error('PDF generation failed:', error);
    throw error;
  }
}

export function downloadJSON(data, filename = 'resume-data.json') {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: 'application/json'
  });
  
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  
  URL.revokeObjectURL(url);
}