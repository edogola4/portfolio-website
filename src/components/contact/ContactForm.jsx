// src/components/contact/ContactForm.jsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Form validation schema
const schema = yup.object().shape({
  name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
  email: yup.string().required('Email is required').email('Please enter a valid email'),
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
  budget: yup.string(),
  timeline: yup.string()
});

const ContactForm = ({ className = "" }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      budget: '',
      timeline: ''
    }
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Your message has been sent successfully! I will get back to you soon.'
        });
        reset();
      } else {
        throw new Error(result.error || 'Something went wrong');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`bg-contact-neutral rounded-xl shadow-lg p-8 ${className}`}>
      <h2 className="text-3xl font-bold mb-2 text-contact-text">Get In Touch</h2>
      <p className="text-contact-text-light mb-8">Have a project in mind? Let's discuss how I can help you.</p>
      
      {submitStatus.message && (
        <div className={`mb-6 p-4 rounded-lg ${
          submitStatus.type === 'success' 
            ? 'bg-green-50 text-green-800 border border-green-200' 
            : 'bg-red-50 text-red-800 border border-red-200'
        }`}>
          {submitStatus.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-contact-text">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              {...register('name')}
              className={`w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-offset-2 focus:outline-none transition-colors duration-200 ${
                errors.name 
                  ? 'border-red-500 focus:ring-red-200' 
                  : 'border-contact-neutral-400 focus:border-contact-primary-500 focus:ring-contact-primary-100'
              }`}
              placeholder="Your name"
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>
          
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-contact-text">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className={`w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-offset-2 focus:outline-none transition-colors duration-200 ${
                errors.email 
                  ? 'border-red-500 focus:ring-red-200' 
                  : 'border-contact-neutral-400 focus:border-contact-primary-500 focus:ring-contact-primary-100'
              }`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
        </div>
        
        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block mb-2 text-sm font-medium text-contact-text">
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="subject"
            {...register('subject')}
            className={`w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-offset-2 focus:outline-none transition-colors duration-200 ${
              errors.subject 
                ? 'border-red-500 focus:ring-red-200' 
                : 'border-contact-neutral-400 focus:border-contact-primary-500 focus:ring-contact-primary-100'
            }`}
            placeholder="How can I help you?"
          />
          {errors.subject && (
            <p className="mt-2 text-sm text-red-600">{errors.subject.message}</p>
          )}
        </div>
        
        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-contact-text">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            {...register('message')}
            className={`w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-offset-2 focus:outline-none transition-colors duration-200 ${
              errors.message 
                ? 'border-red-500 focus:ring-red-200' 
                : 'border-contact-neutral-400 focus:border-contact-primary-500 focus:ring-contact-primary-100'
            }`}
            placeholder="Tell me about your project..."
          />
          {errors.message && (
            <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Budget Field */}
          <div>
            <label htmlFor="budget" className="block mb-2 text-sm font-medium text-contact-text">
              Project Budget (Optional)
            </label>
            <select
              id="budget"
              {...register('budget')}
              className="w-full px-4 py-3 rounded-lg border-2 border-contact-neutral-400 focus:border-contact-primary-500 focus:ring-2 focus:ring-contact-primary-100 focus:ring-offset-2 focus:outline-none transition-colors duration-200 bg-white text-contact-text"
            >
              <option value="">Select budget range</option>
              <option value="$1,000 - $5,000">$1,000 - $5,000</option>
              <option value="$5,000 - $15,000">$5,000 - $15,000</option>
              <option value="$15,000 - $30,000">$15,000 - $30,000</option>
              <option value="$30,000+">$30,000+</option>
              <option value="Not sure">Not sure yet</option>
            </select>
          </div>
          
          {/* Timeline Field */}
          <div>
            <label htmlFor="timeline" className="block mb-2 text-sm font-medium text-contact-text">
              Project Timeline (Optional)
            </label>
            <select
              id="timeline"
              {...register('timeline')}
              className="w-full px-4 py-3 rounded-lg border-2 border-contact-neutral-400 focus:border-contact-primary-500 focus:ring-2 focus:ring-contact-primary-100 focus:ring-offset-2 focus:outline-none transition-colors duration-200 bg-white text-contact-text"
            >
              <option value="">Select timeline</option>
              <option value="1-2 weeks">1-2 weeks</option>
              <option value="2-4 weeks">2-4 weeks</option>
              <option value="1-3 months">1-3 months</option>
              <option value="3-6 months">3-6 months</option>
              <option value="6+ months">6+ months</option>
              <option value="Not sure">Not sure yet</option>
            </select>
          </div>
        </div>
        
        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center px-6 py-3.5 rounded-lg bg-contact-accent hover:bg-contact-accent-600 text-white font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-contact-accent-300 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Message
              </>
            )}
          </button>
        </div>
      </form>
      
      <div className="mt-8 pt-6 border-t border-contact-neutral-300 text-center">
        <p className="text-contact-text-light text-sm">
          Prefer email? Contact me at{' '}
          <a 
            href="mailto:hello@yourdomain.com" 
            className="text-contact-primary-600 hover:text-contact-primary-700 font-medium hover:underline"
          >
            hello@yourdomain.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactForm;