// src/lib/utils/analytics.js
export function trackResumeEvent(action, properties = {}) {
  // In a real application, you would integrate with your analytics service
  // For example: Google Analytics, Mixpanel, etc.
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: 'Resume',
      ...properties
    });
  }
  
  // Console log for development
  console.log('Resume Event:', { action, properties });
}
