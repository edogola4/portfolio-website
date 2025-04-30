// src/app/contact/page.js
"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import {
    MapPin,
    Mail,
    Phone,
    Clock,
    Github,
    Linkedin,
    Twitter,
    MessageCircle,
    ArrowRight,
    CheckCircle,
    AlertCircle,
    Loader
} from 'lucide-react';

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');
    const [statusType, setStatusType] = useState(''); // 'success', 'error', 'loading'
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();

    // Form validation states
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setMounted(true);
    }, []);

    const validateField = (name, value) => {
        let error = '';

        switch (name) {
            case 'name':
                if (!value.trim()) error = 'Name is required';
                else if (value.trim().length < 2) error = 'Name must be at least 2 characters';
                break;
            case 'email':
                if (!value.trim()) error = 'Email is required';
                else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Email is invalid';
                break;
            case 'message':
                if (!value.trim()) error = 'Message is required';
                else if (value.trim().length < 10) error = 'Message must be at least 10 characters';
                break;
            default:
                break;
        }

        return error;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Validate on change if field has been touched
        if (touched[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: validateField(name, value)
            }));
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;

        // Mark field as touched
        setTouched(prev => ({
            ...prev,
            [name]: true
        }));

        // Validate on blur
        setErrors(prev => ({
            ...prev,
            [name]: validateField(name, value)
        }));
    };

    const validateForm = () => {
        const newErrors = {
            name: validateField('name', formData.name),
            email: validateField('email', formData.email),
            message: validateField('message', formData.message)
        };

        setErrors(newErrors);
        setTouched({ name: true, email: true, message: true });

        // Return true if no errors
        return !Object.values(newErrors).some(error => error);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate all fields before submission
        if (!validateForm()) return;

        setStatus('Sending your message...');
        setStatusType('loading');

        try {
            // Simulate network delay (remove in production)
            await new Promise(resolve => setTimeout(resolve, 1500));

            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('Message sent successfully! I\'ll get back to you soon.');
                setStatusType('success');
                setFormData({ name: '', email: '', message: '' });
                setTouched({});
            } else {
                setStatus('Failed to send message. Please try again later.');
                setStatusType('error');
            }
        } catch (err) {
            console.error(err);
            setStatus('An error occurred. Please try again later.');
            setStatusType('error');
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const formFieldVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: i => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.4
            }
        })
    };

    const socialIconVariants = {
        hidden: { scale: 0 },
        visible: i => ({
            scale: 1,
            transition: {
                delay: i * 0.1,
                type: "spring",
                stiffness: 260,
                damping: 20
            }
        }),
        hover: {
            scale: 1.2,
            rotate: 5,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    };

    // 3D Card tilt effect
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const cardRect = card.getBoundingClientRect();

        // Calculate mouse position relative to the card
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;
        const mouseX = e.clientX - cardCenterX;
        const mouseY = e.clientY - cardCenterY;

        // Calculate rotation values (limited to small angles)
        const rotateY = mouseX * 0.01; // Horizontal tilt
        const rotateX = -mouseY * 0.01; // Vertical tilt

        setTilt({ x: rotateX, y: rotateY });
    };

    const resetTilt = () => {
        setTilt({ x: 0, y: 0 });
    };

    if (!mounted) {
        return null; // Prevent theme flash during hydration
    }

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-transparent bg-clip-text">
                        Let&apos;s Work Together
                    </h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                        I&apos;m always open to discussing new projects, job opportunities, or partnerships.
                        Feel free to reach out using the form below or through my social channels.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-5 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        className="md:col-span-3"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div
                            className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
                            style={{
                                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                                transition: 'transform 0.1s ease-out'
                            }}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={resetTilt}
                        >
                            {/* Decorative gradient blob */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-20 blur-3xl"></div>

                            {/* Form content */}
                            <div className="relative p-8">
                                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                                    <MessageCircle className="mr-3 text-blue-500" />
                                    Send a Message
                                </h2>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <motion.div
                                        custom={0}
                                        variants={formFieldVariants}
                                        initial="hidden"
                                        animate="visible"
                                    >
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border ${errors.name && touched.name
                                                ? 'border-red-500 dark:border-red-400'
                                                : 'border-gray-200 dark:border-gray-600'
                                                } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors`}
                                            placeholder="Bran Don"
                                        />
                                        {errors.name && touched.name && (
                                            <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.name}</p>
                                        )}
                                    </motion.div>

                                    <motion.div
                                        custom={1}
                                        variants={formFieldVariants}
                                        initial="hidden"
                                        animate="visible"
                                    >
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border ${errors.email && touched.email
                                                ? 'border-red-500 dark:border-red-400'
                                                : 'border-gray-200 dark:border-gray-600'
                                                } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors`}
                                            placeholder="your.email@example.com"
                                        />
                                        {errors.email && touched.email && (
                                            <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.email}</p>
                                        )}
                                    </motion.div>

                                    <motion.div
                                        custom={2}
                                        variants={formFieldVariants}
                                        initial="hidden"
                                        animate="visible"
                                    >
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Your Message
                                        </label>
                                        <textarea
                                            name="message"
                                            id="message"
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border ${errors.message && touched.message
                                                ? 'border-red-500 dark:border-red-400'
                                                : 'border-gray-200 dark:border-gray-600'
                                                } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors`}
                                            placeholder="Tell me about your project or job opportunity..."
                                        />
                                        {errors.message && touched.message && (
                                            <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.message}</p>
                                        )}
                                    </motion.div>

                                    <motion.div
                                        custom={3}
                                        variants={formFieldVariants}
                                        initial="hidden"
                                        animate="visible"
                                    >
                                        <button
                                            type="submit"
                                            disabled={statusType === 'loading'}
                                            className="w-full inline-flex justify-center items-center py-3 px-6 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 disabled:opacity-70"
                                        >
                                            {statusType === 'loading' ? (
                                                <>
                                                    <Loader size={20} className="mr-2 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </motion.div>

                                    {status && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className={`mt-4 p-3 rounded-lg flex items-center ${statusType === 'success'
                                                ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200'
                                                : statusType === 'error'
                                                    ? 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200'
                                                    : 'bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200'
                                                }`}
                                        >
                                            {statusType === 'success' ? (
                                                <CheckCircle size={18} className="mr-2 flex-shrink-0" />
                                            ) : statusType === 'error' ? (
                                                <AlertCircle size={18} className="mr-2 flex-shrink-0" />
                                            ) : (
                                                <Loader size={18} className="mr-2 flex-shrink-0 animate-spin" />
                                            )}
                                            <span className="text-sm">{status}</span>
                                        </motion.div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        className="md:col-span-2"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.2 }}
                    >
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 h-full">
                            <div className="relative overflow-hidden h-full flex flex-col justify-between">
                                {/* Decorative elements */}
                                <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full opacity-10 blur-3xl"></div>

                                <div className="relative">
                                    <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Contact Information</h2>

                                    <ul className="space-y-6">
                                        <motion.li
                                            className="flex items-start"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            <div className="mr-4 mt-1 bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                                                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-medium mb-1 text-gray-900 dark:text-white">Location</h3>
                                                <p className="text-gray-600 dark:text-gray-300">Nairobi, Kenya</p>
                                            </div>
                                        </motion.li>

                                        <motion.li
                                            className="flex items-start"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.4 }}
                                        >
                                            <div className="mr-4 mt-1 bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-lg">
                                                <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-medium mb-1 text-gray-900 dark:text-white">Email</h3>
                                                <a
                                                    href="mailto:brandon14ogola@gmail.com"
                                                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                                >
                                                    brandon14ogola@gmail.com
                                                </a>
                                            </div>
                                        </motion.li>

                                        <motion.li
                                            className="flex items-start"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.5 }}
                                        >
                                            <div className="mr-4 mt-1 bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg">
                                                <Phone className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-medium mb-1 text-gray-900 dark:text-white">Phone/WhatsApp</h3>
                                                <a
                                                    href="tel:+254706322944"
                                                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                                >
                                                    +254 706 322 944
                                                </a>
                                            </div>
                                        </motion.li>

                                        <motion.li
                                            className="flex items-start"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.6 }}
                                        >
                                            <div className="mr-4 mt-1 bg-teal-100 dark:bg-teal-900/30 p-2 rounded-lg">
                                                <Clock className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-medium mb-1 text-gray-900 dark:text-white">Availability</h3>
                                                <p className="text-gray-600 dark:text-gray-300">
                                                    Freelance & full-time<br />
                                                    9 AM – 6 PM EAT
                                                </p>
                                            </div>
                                        </motion.li>
                                    </ul>
                                </div>

                                <div className="mt-10">
                                    <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">Connect With Me</h3>
                                    <div className="flex space-x-4">
                                        <motion.a
                                            href="https://github.com/edogola4"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="GitHub"
                                            custom={0}
                                            variants={socialIconVariants}
                                            initial="hidden"
                                            animate="visible"
                                            whileHover="hover"
                                            className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full hover:shadow-md transition-shadow"
                                        >
                                            <Github className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                                        </motion.a>

                                        <motion.a
                                            href="https://www.linkedin.com/in/brandon-ogola-b77063232/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="LinkedIn"
                                            custom={1}
                                            variants={socialIconVariants}
                                            initial="hidden"
                                            animate="visible"
                                            whileHover="hover"
                                            className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full hover:shadow-md transition-shadow"
                                        >
                                            <Linkedin className="w-5 h-5 text-blue-700 dark:text-blue-300" />
                                        </motion.a>

                                        <motion.a
                                            href="https://x.com/BrandonOgola"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="X (Twitter)"
                                            custom={2}
                                            variants={socialIconVariants}
                                            initial="hidden"
                                            animate="visible"
                                            whileHover="hover"
                                            className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full hover:shadow-md transition-shadow"
                                        >
                                            <Twitter className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                                        </motion.a>

                                        <motion.a
                                            href="https://wa.me/+254706322944"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="WhatsApp"
                                            custom={3}
                                            variants={socialIconVariants}
                                            initial="hidden"
                                            animate="visible"
                                            whileHover="hover"
                                            className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full hover:shadow-md transition-shadow"
                                        >
                                            <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                            </svg>
                                        </motion.a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Quote Section */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    <blockquote className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl shadow-lg max-w-3xl mx-auto">
                        <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                            &quot;The best way to predict the future is to create it. Let&apos;s build something amazing together.&quot;
                        </p>
                        <footer className="text-gray-600 dark:text-gray-400">
                            — Edwin Ogola, Full Stack Software Engineer
                        </footer>
                    </blockquote>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactPage;