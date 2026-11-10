'use server';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createRateLimit } from '@/lib/rate-limit';

const REQUIRED_FIELDS = ['name', 'phone', 'message'];
const retryAfter = createRateLimit(5, 15 * 60);

function sanitizeInput(value = '') {
  return String(value).trim();
}

function validatePayload(payload) {
  const errors = [];
  const processed = {};

  for (const [key, value] of Object.entries(payload)) {
    processed[key] = sanitizeInput(value);
  }

  for (const field of REQUIRED_FIELDS) {
    if (!processed[field]) {
      errors.push(`${field} is required`);
    }
  }

  if (processed.email && !/^\S+@\S+\.\S+$/.test(processed.email)) {
    errors.push('email must be a valid address');
  }

  return { errors, processed };
}

export async function POST(request) {
  try {
    const payload = await request.json().catch(() => null);
    if (!payload || typeof payload !== 'object' || Array.isArray(payload) || Object.values(payload).some(value => typeof value !== 'string' || value.length > 5000)) {
      return NextResponse.json({ success: false, message: 'Invalid submission.' }, { status: 400 });
    }
    const { errors, processed } = validatePayload(payload);

    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }

    const wait = retryAfter(request.headers);
    if (wait) {
      return NextResponse.json(
        { success: false, message: 'Too many consultation requests. Please wait or call the clinic.' },
        { status: 429, headers: { 'Retry-After': String(wait) } }
      );
    }

    const submission = {
      ...processed,
      submittedAt: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || 'unknown'
    };

    let delivered = false;
    // Send email notification using Resend
    try {
      const toEmail = process.env.CONTACT_EMAIL;
      const fromEmail = process.env.CONTACT_FROM_EMAIL;
      if (!fromEmail || !toEmail) throw new Error('Contact email sender or recipient is missing');

      const emailResult = await new Resend(process.env.RESEND_API_KEY).emails.send({
        from: fromEmail,
        to: toEmail,
        subject: `New Contact Form Submission from ${processed.name}`,
        text: `
          Name: ${processed.name}
          Phone: ${processed.phone}
          Email: ${processed.email || 'Not provided'}
          Message: ${processed.message}
          Submitted: ${submission.submittedAt}
        `
      });
      if (emailResult.error) throw new Error(emailResult.error.message);
      delivered = true;
    } catch (emailError) {
      console.error('❌ Email sending failed:', emailError);
      console.error('Error details:', emailError.message);
    }

    // Optional: Forward to webhook URL as well
    const forwardUrl = process.env.CONTACT_FORM_FORWARD_URL;

    if (forwardUrl) {
      try {
        const response = await fetch(forwardUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submission)
        });
        if (!response.ok) throw new Error('Forwarding failed');
        delivered = true;
      } catch (error) {
        console.error('Contact forwarding failed:', error.message);
      }
    }

    if (!delivered) throw new Error('No delivery method accepted the submission');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form handler error:', error);
    return NextResponse.json(
      { success: false, message: 'Unable to submit the form right now.' },
      { status: 500 }
    );
  }
}
