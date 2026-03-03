// src/app/contact/page.js
"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({ 
        name: '', 
        email: '', 
        message: ''
    });
    
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { executeRecaptcha } = useGoogleReCaptcha();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            await executeRecaptcha('contact_form');
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            setStatus({
                type: 'success',
                message: 'Your message has been sent successfully! I&apos;ll get back to you soon.'
            });
            setFormData({ name: '', email: '', message: '' });
        } catch {
            setStatus({
                type: 'error',
                message: 'There was an error sending your message. Please try again later.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-contact-neutral py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold text-contact-text dark:text-contact-dark-text-primary mb-4">Get In Touch</h1>
                    <p className="text-lg text-contact-text-light dark:text-contact-dark-text-secondary max-w-2xl mx-auto">
                        Have a project in mind or want to discuss potential opportunities? I&apos;d love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Information */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-contact-neutral-dark"
                    >
                        <h2 className="text-xl font-semibold text-contact-text mb-6">Contact Information</h2>
                        
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-contact-primary/10 p-2 rounded-lg">
                                    <Mail className="h-5 w-5 text-contact-primary" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-sm font-medium text-contact-text-muted">Email</h3>
                                    <a href="mailto:hello@edogola.com" className="text-contact-text hover:text-contact-primary transition-colors">
                                        hello@edogola.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-contact-primary/10 p-2 rounded-lg">
                                    <Phone className="h-5 w-5 text-contact-primary" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-sm font-medium text-contact-text-muted">Phone</h3>
                                    <a href="tel:+1234567890" className="text-contact-text hover:text-contact-primary transition-colors">
                                        +254 (234) 567-890
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-contact-primary/10 p-2 rounded-lg">
                                    <MapPin className="h-5 w-5 text-contact-primary" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-sm font-medium text-contact-text-muted">Location</h3>
                                    <p className="text-contact-text">Nairobi, Kenya</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-contact-neutral-dark"
                    >
                        {status.message && (
                            <div className={`mb-6 p-4 rounded-lg ${
                                status.type === 'success' 
                                    ? 'bg-green-50 text-green-800 border border-green-200' 
                                    : 'bg-red-50 text-red-800 border border-red-200'
                            }`}>
                                <div className="flex items-center">
                                    {status.type === 'success' ? (
                                        <CheckCircle className="h-5 w-5 mr-2" />
                                    ) : (
                                        <AlertCircle className="h-5 w-5 mr-2" />
                                    )}
                                    <p>{status.message}</p>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-contact-text dark:text-gray-100 mb-1">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full rounded-lg border-2 border-gray-200 dark:border-gray-600 focus:border-contact-primary focus:ring-2 focus:ring-contact-primary/50 dark:focus:ring-contact-primary/30 transition-colors duration-200 px-4 py-2.5 text-contact-text dark:text-gray-100 bg-white dark:bg-gray-700"
                                        placeholder="Bran Don"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-contact-text dark:text-gray-100 mb-1">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full rounded-lg border-2 border-gray-200 dark:border-gray-600 focus:border-contact-primary focus:ring-2 focus:ring-contact-primary/50 dark:focus:ring-contact-primary/30 transition-colors duration-200 px-4 py-2.5 text-contact-text dark:text-gray-100 bg-white dark:bg-gray-700"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-contact-text dark:text-gray-100 mb-1">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full rounded-lg border-2 border-gray-200 dark:border-gray-600 focus:border-contact-primary focus:ring-2 focus:ring-contact-primary/50 dark:focus:ring-contact-primary/30 transition-colors duration-200 px-4 py-2.5 text-contact-text dark:text-gray-100 bg-white dark:bg-gray-700"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full flex items-center justify-center px-6 py-3.5 rounded-lg bg-contact-primary hover:bg-contact-primary-dark text-white font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-contact-primary/50 dark:focus:ring-offset-gray-800 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="-ml-1 mr-2 h-5 w-5" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

// Wrap the ContactForm with GoogleReCaptchaProvider
const ContactPage = () => {
    return (
        <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
            <ContactForm />
        </GoogleReCaptchaProvider>
    );
};

export default ContactPage;