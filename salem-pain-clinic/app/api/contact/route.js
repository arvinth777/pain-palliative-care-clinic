'use server';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const REQUIRED_FIELDS = ['name', 'phone', 'message'];

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
    const payload = await request.json();
    const { errors, processed } = validatePayload(payload);

    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }

    const submission = {
      ...processed,
      submittedAt: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || 'unknown'
    };

    // Send email notification using Resend
    try {
      const toEmail = process.env.CONTACT_EMAIL;
      // console.log('📧 Attempting to send email to:', toEmail);
      // console.log('🔑 Resend API Key exists:', !!process.env.RESEND_API_KEY);
      
      const emailResult = await resend.emails.send({
        from: 'Salem Pain Clinic <onboarding@resend.dev>', // Using Resend test domain
        to: toEmail,
        subject: `New Contact Form Submission from ${processed.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${processed.name}</p>
          <p><strong>Phone:</strong> ${processed.phone}</p>
          <p><strong>Email:</strong> ${processed.email || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <p>${processed.message}</p>
          <hr>
          <p><small>Submitted: ${new Date(submission.submittedAt).toLocaleString()}</small></p>
        `
      });
      // console.log('✅ Email sent successfully to', toEmail);
      // console.log('📨 Resend Response:', emailResult);
    } catch (emailError) {
      console.error('❌ Email sending failed:', emailError);
      console.error('Error details:', emailError.message);
      // Still return success to user even if email fails
    }

    // Optional: Forward to webhook URL as well
    const forwardUrl = process.env.CONTACT_FORM_FORWARD_URL;

    if (forwardUrl) {
      const forwardResponse = await fetch(forwardUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(submission)
      });

      if (!forwardResponse.ok) {
        console.error('Form forward failed', await forwardResponse.text());
        throw new Error('Forwarding failed');
      }
    } else {
      console.info('Contact form submission (no forward URL configured):', submission);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form handler error:', error);
    return NextResponse.json(
      { success: false, message: 'Unable to submit the form right now.' },
      { status: 500 }
    );
  }
}
