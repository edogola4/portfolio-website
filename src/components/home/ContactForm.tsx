// src/components/home/ContactForm.tsx
'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiSend, FiCheck, FiAlertCircle, FiArrowRight } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isFormEnabled = false; // Set to false to hide the form by default
  
  if (!isFormEnabled) {
    return null;
  }

  const handleViewFullForm = () => {
    router.push('/contact');
  };

  const onSubmit = async (formData: FormData) => {  // Added type annotation
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      reset();
    } catch (err) {
      setSubmitError('Failed to send message. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700"
      >
        <div className="p-6 sm:p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary-800 dark:text-white mb-2">
              Get In Touch
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Have a project in mind? Let&apos;s work together.
            </p>
          </div>

          {submitSuccess ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
                <FiCheck className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h4 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                Message Sent!
              </h4>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Thank you for reaching out. I&apos;ll get back to you soon.
              </p>
              <button
                onClick={() => setSubmitSuccess(false)}
                className="px-6 py-2.5 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors duration-200"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className={`w-full px-4 py-2.5 rounded-lg border ${
                    errors.name ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'
                  } focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-colors duration-200`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Please enter a valid email address',
                    },
                  })}
                  className={`w-full px-4 py-2.5 rounded-lg border ${
                    errors.email ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'
                  } focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-colors duration-200`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register('message', {
                    required: 'Message is required',
                    minLength: {
                      value: 10,
                      message: 'Message must be at least 10 characters',
                    },
                  })}
                  className={`w-full px-4 py-2.5 rounded-lg border ${
                    errors.message ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'
                  } focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-colors duration-200`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-6 py-3.5 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
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
                      <FiSend className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>

              {submitError && (
                <div className="p-4 bg-red-50 dark:bg-red-900/30 rounded-lg text-red-700 dark:text-red-300 flex items-start">
                  <FiAlertCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}
            </form>
          )}
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/50 px-6 py-4 border-t border-slate-200 dark:border-slate-700">
          <button
            onClick={handleViewFullForm}
            className="w-full flex items-center justify-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors duration-200"
          >
            View Full Contact Form <FiArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactForm;