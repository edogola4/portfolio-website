// src/app/api/contact/route.js
import { NextResponse } from 'next/server';
import { sendEmail } from '../../../utils/emailService';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * POST /api/contact
 * Accepts JSON { name, email, message, [subject], [budget], [timeline] }
 * Validates required fields & email format, sends email, returns JSON response.
 */
export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, message, subject, budget, timeline } = data;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email and message are required.' },
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

    // Prepare email content
    const emailSubject = subject ? `Contact Form: ${subject}` : `New Contact Form Submission from ${name}`;
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

    // Send email
    await sendEmail({
      from: `"Contact Form" <${data.email}>`, // This will show "Contact Form" with the submitter's email for replies
      to: process.env.EMAIL_TO,
      subject: emailSubject,
      text: emailText,
      html: emailHtml
    });

    return NextResponse.json(
      { success: true, message: 'Your message has been sent successfully!' },
      { status: 200 }
    );
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { success: false, error: 'Server error—please try again later.' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/contact
 * Health-check endpoint to verify the route is active.
 */
export async function GET() {
  return NextResponse.json(
    { status: 'OK', timestamp: new Date().toISOString() },
    { status: 200 }
  );
}