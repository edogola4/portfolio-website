// src/utils/emailService.js
import nodemailer from 'nodemailer';

/**
 * Send email using Nodemailer with Gmail SMTP
 * 
 * @param {Object} params - Email parameters
 * @param {string} params.from - Display name/email for sender
 * @param {string} params.to - Recipient email address
 * @param {string} params.subject - Email subject
 * @param {string} params.text - Plain text email content
 * @param {string} [params.html] - HTML email content (optional)
 * @returns {Promise<boolean|Object>} - Success indicator or email info
 */
export async function sendEmail({ from, to, subject, text, html }) {
  try {
    // Create a Nodemailer transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD, // Use an App Password if 2FA is enabled
      },
    });
    
    // Prepare mail options
    const mailOptions = {
      from: process.env.EMAIL_USER, // The actual Gmail address always goes here
      replyTo: from, // Optional: If you want replies to go to a different address
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