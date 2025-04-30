// src/app/api/contact/route.js
import { NextResponse } from 'next/server';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * POST /api/contact
 * Accepts JSON { name, email, message, [subject], [budget], [timeline] }
 * Validates required fields & email format, simulates processing, returns JSON.
 */
export async function POST(request) {
  try {
    const data = await request.json();                              // parse JSON body :contentReference[oaicite:0]{index=0}
    const { name, email, message, subject, budget, timeline } = data;

    // Validate required fields
    if (!name || !email || !message) {                              // required fields :contentReference[oaicite:1]{index=1}
      return NextResponse.json(
        { success: false, error: 'Name, email and message are required.' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!emailRegex.test(email)) {                                  // basic email regex :contentReference[oaicite:2]{index=2}
      return NextResponse.json(
        { success: false, error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // (Here you could integrate with an email service: SendGrid, Mailgun, etc.)

    // Simulate processing delay
    await new Promise(res => setTimeout(res, 1000));

    return NextResponse.json(
      { success: true, message: 'Your message has been received!' },
      { status: 200 }
    );
  } catch (err) {
    console.error('Contact API error:', err);                       // server-side logging :contentReference[oaicite:3]{index=3}
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
  );                                                               // simple JSON response :contentReference[oaicite:4]{index=4}
}
