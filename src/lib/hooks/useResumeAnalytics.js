// src/lib/hooks/useResumeAnalytics.js
import { useEffect } from 'react';
import { trackResumeEvent } from '../utils/analytics';

export function useResumeAnalytics() {
  useEffect(() => {
    // Track page view
    trackResumeEvent('page_view', {
      page: 'resume',
      timestamp: new Date().toISOString()
    });

    // Track scroll depth
    let maxScrollDepth = 0;
    const handleScroll = () => {
      const scrollDepth = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
      }
    };

    // Track time spent on page
    const startTime = Date.now();
    
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackResumeEvent('page_exit', {
        time_spent: timeSpent,
        max_scroll_depth: maxScrollDepth
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return {
    trackDownload: () => trackResumeEvent('download_pdf'),
    trackPrint: () => trackResumeEvent('print_resume'),
    trackSection: (section) => trackResumeEvent('section_view', { section })
  };
}