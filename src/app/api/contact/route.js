// src/app/api/contact/route.js
import { NextResponse } from 'next/server';
import { sendEmail } from '../../../utils/emailService';
import axios from 'axios';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, message, subject, budget, timeline, token } = data;

    // Validate required fields
    if (!name || !email || !message || !token) {
      return NextResponse.json(
        { success: false, error: 'Name, email, message, and reCAPTCHA token are required.' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // ✅ Verify reCAPTCHA token with Google
    const recaptchaResponse = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      null,
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET_KEY, // In .env.local
          response: token,
        },
      }
    );

    const recaptchaData = recaptchaResponse.data;

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return NextResponse.json(
        { success: false, error: 'reCAPTCHA validation failed. Please try again.' },
        { status: 400 }
      );
    }

    // ✉️ Prepare email
    const emailSubject = subject
      ? `Contact Form: ${subject}`
      : `New Contact Form Submission from ${name}`;

    const emailText = `
Name: ${name}
Email: ${email}
${budget ? `Budget: ${budget}\n` : ''}
${timeline ? `Timeline: ${timeline}\n` : ''}
Message:
${message}
    `.trim();

    const emailHtml = `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ''}
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
    `.trim();

    // 🚀 Send email
    await sendEmail({
      from: `"Contact Form" <${email}>`,
      to: process.env.CONTACT_EMAIL,
      subject: emailSubject,
      text: emailText,
      html: emailHtml
    });

    return NextResponse.json(
      { success: true, message: 'Your message has been sent successfully!' },
      { status: 200 }
    );
  } catch (err) {
    console.error('Contact API error:', err.response?.data || err.message);
    return NextResponse.json(
      { success: false, error: 'Server error—please try again later.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { status: 'OK', timestamp: new Date().toISOString() },
    { status: 200 }
  );
}
