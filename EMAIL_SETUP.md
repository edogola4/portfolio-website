# Contact Form Email Setup

## Overview
The contact form now sends emails to `edogola4@gmail.com` when someone submits a message.

## Setup Instructions

### 1. Create `.env.local` file
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

### 2. Configure Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to Security → 2-Step Verification (enable if not already)
3. Scroll down to "App passwords"
4. Generate a new app password for "Mail"
5. Copy the 16-character password

### 3. Update `.env.local`

```env
# Use your Gmail account
EMAIL_USER=edogola4@gmail.com
EMAIL_PASS=your-16-character-app-password

# Where to receive contact form emails
CONTACT_EMAIL=edogola4@gmail.com

# reCAPTCHA keys (already configured)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-existing-site-key
RECAPTCHA_SECRET_KEY=your-existing-secret-key
```

### 4. Restart Development Server
```bash
npm run dev
```

## Testing

1. Go to `/contact` page
2. Fill out the form
3. Submit
4. Check `edogola4@gmail.com` inbox for the email

## Email Format

**Subject:** Contact Form: [Subject from form]

**Body includes:**
- Name
- Email (with reply-to set)
- Subject
- Message

## Troubleshooting

**Error: "Missing EMAIL_USER or EMAIL_PASS"**
- Make sure `.env.local` exists with correct variables
- Restart the dev server after adding env variables

**Error: "Invalid login"**
- Use App Password, not your regular Gmail password
- Make sure 2-Step Verification is enabled

**Emails not arriving:**
- Check spam folder
- Verify `CONTACT_EMAIL` is set correctly
- Check server logs for errors
