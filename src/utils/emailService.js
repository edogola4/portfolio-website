// src/utils/emailService.js
import nodemailer from 'nodemailer';

/**
 * Send email using Nodemailer with Gmail SMTP
 * @param {Object} params - Email parameters
 * @param {string} params.from - Display name/email for sender
 * @param {string} params.to - Recipient email address
 * @param {string} params.subject - Email subject
 * @param {string} params.text - Plain text email content
 * @param {string} [params.html] - HTML email content (optional)
 * @returns {Promise<boolean>} - True if email sent successfully
 * @throws {Error} - If email sending fails or credentials are missing
 */
export async function sendEmail({ from, to, subject, text, html }) {
  try {
    // Validate environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error('Missing EMAIL_USER or EMAIL_PASS environment variables');
    }

    // Log environment variable status for debugging
    console.log('Email service initialized with:', {
      EMAIL_USER: process.env.EMAIL_USER,
      EMAIL_PASS: process.env.EMAIL_PASS ? 'Loaded' : 'Not loaded',
    });

    // Create a Nodemailer transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Prepare mail options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      replyTo: from,
      to,
      subject,
      text,
      html: html || text.replace(/\n/g, '<br>'),
    };

    // Send mail
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
}