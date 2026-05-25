// src/app/contact/page.js
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import {
  Mail, Phone, MapPin, Send, CheckCircle, AlertCircle,
  Loader2, Github, Linkedin, Clock, FileText,
} from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';

// ─── Brand tokens ─────────────────────────────────────────────────────────────
const PRIMARY   = '#2C5E4F';
const ACCENT    = '#E07A5F';
const BG_LIGHT  = '#F8F5F0';
const TEXT_DARK = '#2B2D42';

// ─── Input class ──────────────────────────────────────────────────────────────
const inputCls =
  'w-full rounded-lg border-2 border-[#e8e2d6] dark:border-[#3A5A6B]/40 ' +
  'bg-white dark:bg-[#1E2A35] text-[#2B2D42] dark:text-[#F8F5F0] ' +
  'px-4 py-3 text-sm placeholder:text-[#2B2D42]/40 dark:placeholder:text-[#F8F5F0]/35 ' +
  'focus:outline-none focus:border-[#2C5E4F] dark:focus:border-[#6B9FB1] ' +
  'focus:ring-2 focus:ring-[#2C5E4F]/20 dark:focus:ring-[#6B9FB1]/20 ' +
  'transition-colors duration-200';

// ─── Success screen ───────────────────────────────────────────────────────────
function SuccessScreen({ name, onReset }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="flex flex-col items-center justify-center text-center py-16 px-6"
    >
      {/* Animated check circle */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 260, damping: 20 }}
        className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
        style={{ background: `linear-gradient(135deg, ${PRIMARY}, #3D7A6B)` }}
      >
        <CheckCircle className="w-10 h-10 text-white" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="text-2xl font-bold text-[#2B2D42] dark:text-[#F8F5F0] mb-3"
      >
        Message received, {name.split(' ')[0]}!
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="text-[#2B2D42]/75 dark:text-[#F8F5F0]/75 max-w-md mb-3 leading-relaxed"
      >
        Thanks for reaching out. I read every message personally and typically reply within{' '}
        <strong className="text-[#2C5E4F] dark:text-[#6B9FB1]">24–48 hours</strong>.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="text-sm text-[#2B2D42]/55 dark:text-[#F8F5F0]/50 mb-10"
      >
        While you wait, feel free to explore my work or connect on LinkedIn.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col sm:flex-row gap-3"
      >
        <Link
          href="/projects"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          style={{ background: `linear-gradient(135deg, ${PRIMARY}, #3D7A6B)` }}
        >
          View My Projects
        </Link>
        <button
          onClick={onReset}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold border-2 border-[#e8e2d6] dark:border-[#3A5A6B]/40 text-[#2B2D42] dark:text-[#F8F5F0] hover:border-[#2C5E4F] dark:hover:border-[#6B9FB1] transition-all duration-200"
        >
          Send Another Message
        </button>
      </motion.div>
    </motion.div>
  );
}

// ─── Contact form ─────────────────────────────────────────────────────────────
function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' }); // type: '' | 'error'
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    if (status.type === 'error') setStatus({ type: '', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const token = await executeRecaptcha('contact_form');
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, token }),
      });
      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
      } else {
        setStatus({
          type: 'error',
          message: result.error || 'Something went wrong. Please try again or email me directly.',
        });
      }
    } catch {
      setStatus({
        type: 'error',
        message: 'Network error. Please check your connection or email me directly at edogola4@gmail.com.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setStatus({ type: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] dark:bg-[#141E26] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        {/* ── Page header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#2B2D42] dark:text-[#F8F5F0] mb-4">
            Get In Touch
          </h1>
          <div className="h-1 w-16 bg-[#E07A5F] mx-auto mb-6 rounded-full" />
          <p className="text-lg text-[#2B2D42]/75 dark:text-[#F8F5F0]/75 max-w-2xl mx-auto mb-8 leading-relaxed">
            Open to full-time roles, freelance projects, and interesting collaborations.
            Whether you have a project in mind or just want to connect — I&apos;d love to hear from you.
          </p>

          {/* Availability pills */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2C5E4F]/30 bg-[#2C5E4F]/8 dark:bg-[#2C5E4F]/20 text-[#2C5E4F] dark:text-[#6B9FB1] font-medium">
              <span className="w-2 h-2 bg-[#2C5E4F] dark:bg-[#6B9FB1] rounded-full animate-pulse" />
              Available — open to full-time &amp; freelance
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#e8e2d6] dark:border-[#3A5A6B]/40 text-[#2B2D42]/70 dark:text-[#F8F5F0]/65 font-medium">
              <MapPin className="h-3.5 w-3.5" />
              Nairobi, Kenya · Remote globally
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#e8e2d6] dark:border-[#3A5A6B]/40 text-[#2B2D42]/70 dark:text-[#F8F5F0]/65 font-medium">
              <Clock className="h-3.5 w-3.5" />
              Replies within 24–48 hours
            </span>
          </div>
        </motion.div>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8">

          {/* ── Left: contact info ── */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white dark:bg-[#1E2A35] rounded-2xl p-7 border border-[#e8e2d6] dark:border-[#3A5A6B]/35 shadow-sm h-fit"
          >
            <h2 className="text-lg font-bold text-[#2B2D42] dark:text-[#F8F5F0] mb-6">Contact Details</h2>

            <div className="space-y-5">
              {[
                { icon: Mail,  label: 'Email',    value: 'edogola4@gmail.com',  href: 'mailto:edogola4@gmail.com' },
                { icon: Phone, label: 'Phone',    value: '+254-717-248673',     href: 'tel:+254717248673' },
                { icon: MapPin,label: 'Location', value: 'Nairobi, Kenya',      href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${PRIMARY}18` }}>
                    <Icon className="h-4 w-4" style={{ color: PRIMARY }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#2B2D42]/45 dark:text-[#F8F5F0]/40 mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm text-[#2B2D42] dark:text-[#F8F5F0] hover:text-[#2C5E4F] dark:hover:text-[#6B9FB1] transition-colors font-medium">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-[#2B2D42] dark:text-[#F8F5F0] font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-[#e8e2d6] dark:border-[#3A5A6B]/30 my-6" />

            {/* Social links */}
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#2B2D42]/45 dark:text-[#F8F5F0]/40 mb-4">Connect</h3>
            <div className="space-y-2.5">
              {[
                { icon: Github,    label: 'GitHub',   href: 'https://github.com/edogola4',                          text: 'github.com/edogola4' },
                { icon: Linkedin,  label: 'LinkedIn', href: 'https://www.linkedin.com/in/brandon-ogola-b77063232/', text: 'linkedin.com/in/brandon-ogola' },
                { icon: FaXTwitter,label: 'X',        href: 'https://x.com/BrandonOgola',                          text: 'x.com/BrandonOgola' },
              ].map(({ icon: Icon, label, href, text }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border border-[#e8e2d6] dark:border-[#3A5A6B]/35 group-hover:border-[#2C5E4F] dark:group-hover:border-[#6B9FB1] group-hover:bg-[#2C5E4F]/8 transition-all duration-200">
                    <Icon className="h-3.5 w-3.5 text-[#2B2D42]/60 dark:text-[#F8F5F0]/60 group-hover:text-[#2C5E4F] dark:group-hover:text-[#6B9FB1] transition-colors" />
                  </div>
                  <span className="text-sm text-[#2B2D42]/70 dark:text-[#F8F5F0]/65 group-hover:text-[#2C5E4F] dark:group-hover:text-[#6B9FB1] transition-colors">
                    {text}
                  </span>
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-[#e8e2d6] dark:border-[#3A5A6B]/30 my-6" />

            {/* Resume download */}
            <a
              href="/files/Brandon_Ogola_CV.pdf"
              download="Brandon_Ogola_CV.pdf"
              className="flex items-center gap-3 w-full px-4 py-3 rounded-lg border-2 border-dashed border-[#2C5E4F]/30 dark:border-[#6B9FB1]/30 hover:border-[#2C5E4F] dark:hover:border-[#6B9FB1] hover:bg-[#2C5E4F]/5 transition-all duration-200 group"
            >
              <FileText className="h-4 w-4 text-[#2C5E4F] dark:text-[#6B9FB1] shrink-0" />
              <div>
                <p className="text-sm font-semibold text-[#2B2D42] dark:text-[#F8F5F0] group-hover:text-[#2C5E4F] dark:group-hover:text-[#6B9FB1] transition-colors">Download CV</p>
                <p className="text-xs text-[#2B2D42]/50 dark:text-[#F8F5F0]/45">Brandon_Ogola_CV.pdf</p>
              </div>
            </a>
          </motion.aside>

          {/* ── Right: form or success ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white dark:bg-[#1E2A35] rounded-2xl border border-[#e8e2d6] dark:border-[#3A5A6B]/35 shadow-sm overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <SuccessScreen key="success" name={formData.name || 'there'} onReset={handleReset} />
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-7 sm:p-8"
                >
                  <h2 className="text-xl font-bold text-[#2B2D42] dark:text-[#F8F5F0] mb-1">Send a Message</h2>
                  <p className="text-sm text-[#2B2D42]/60 dark:text-[#F8F5F0]/55 mb-7">
                    All fields are required. I&apos;ll reply to your email directly.
                  </p>

                  {/* Error banner */}
                  <AnimatePresence>
                    {status.type === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="flex items-start gap-3 mb-6 p-4 rounded-xl bg-[#E07A5F]/10 border border-[#E07A5F]/30 text-[#c05a42] dark:text-[#E07A5F]"
                      >
                        <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                        <p className="text-sm leading-relaxed">{status.message}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-[#2B2D42] dark:text-[#F8F5F0] mb-1.5">
                          Full Name <span className="text-[#E07A5F]">*</span>
                        </label>
                        <input
                          id="name" name="name" type="text"
                          value={formData.name} onChange={handleChange}
                          required placeholder="Brandon Ogola"
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-[#2B2D42] dark:text-[#F8F5F0] mb-1.5">
                          Email Address <span className="text-[#E07A5F]">*</span>
                        </label>
                        <input
                          id="email" name="email" type="email"
                          value={formData.email} onChange={handleChange}
                          required placeholder="you@example.com"
                          className={inputCls}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-[#2B2D42] dark:text-[#F8F5F0] mb-1.5">
                        Subject <span className="text-[#E07A5F]">*</span>
                      </label>
                      <input
                        id="subject" name="subject" type="text"
                        value={formData.subject} onChange={handleChange}
                        required placeholder="e.g. Job opportunity, Project collaboration, Freelance work"
                        className={inputCls}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-[#2B2D42] dark:text-[#F8F5F0] mb-1.5">
                        Message <span className="text-[#E07A5F]">*</span>
                      </label>
                      <textarea
                        id="message" name="message" rows={5}
                        value={formData.message} onChange={handleChange}
                        required placeholder="Tell me about your project, role, or what you'd like to discuss..."
                        className={`${inputCls} resize-none`}
                      />
                      <p className="mt-1.5 text-xs text-[#2B2D42]/45 dark:text-[#F8F5F0]/40 text-right">
                        {formData.message.length} characters
                      </p>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none focus:outline-none focus:ring-2 focus:ring-[#2C5E4F]/50 focus:ring-offset-2"
                      style={{ background: isSubmitting ? '#6B9FB1' : `linear-gradient(135deg, ${PRIMARY}, #3D7A6B)` }}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-[#2B2D42]/40 dark:text-[#F8F5F0]/35">
                      Protected by reCAPTCHA · Or email me directly at{' '}
                      <a href="mailto:edogola4@gmail.com" className="text-[#2C5E4F] dark:text-[#6B9FB1] hover:underline">
                        edogola4@gmail.com
                      </a>
                    </p>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

// ─── Page export ──────────────────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
      <ContactForm />
    </GoogleReCaptchaProvider>
  );
}
