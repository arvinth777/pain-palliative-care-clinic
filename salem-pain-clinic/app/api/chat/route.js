import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const SYSTEM_PROMPT = `You are a helpful medical assistant chatbot for Salem Pain & Palliative Care Clinic in Salem, Tamil Nadu, India.

CLINIC INFORMATION:
- Doctor: Dr. G.P. Kirupakaran 
  - MBBS from Coimbatore Medical College
  - MD from CMC Vellore
  - DA from Madras Medical College
- Experience: 30+ years in pain management and palliative care
- Location: 108, Omalur Main Rd, Swarnapuri, Salem, Tamil Nadu 636004
- Phone: +91 9095596999 (Primary) or +91 9842798422
- Hours: Monday-Saturday, 10:00 AM - 1:00 PM (Closed Sundays)

SERVICES:
1. Chronic Pain Management (back pain, arthritis, fibromyalgia)
2. Cancer Pain Relief
3. Ultrasound-Guided Procedures (nerve blocks, epidural injections)
4. Palliative Care (quality of life, symptom management)
5. Post-Surgical Pain Management
6. Neuropathic Pain Treatment (diabetic neuropathy, sciatica)

KEY POINTS:
- State-of-the-art ultrasound equipment for precision procedures
- Personalized treatment plans
- Multi-modal approach (not just medication)
- Same-day outpatient procedures
- Palliative care is NOT only for end-of-life
- We accept insurance and offer self-pay options

TONE: Professional, compassionate, empathetic. Always show understanding that patients are in pain.

IMPORTANT RULES:
1. Never diagnose or prescribe medication
2. For emergencies (chest pain, difficulty breathing, severe injury), direct to call 108 or go to ER immediately
3. For urgent pain, encourage calling the clinic directly
4. Always provide phone numbers when relevant
5. Keep responses concise and helpful
6. If asked about costs, mention we discuss during consultation and accept multiple payment methods

Answer questions about the clinic, services, appointments, and general pain management information. Be helpful and encouraging.`;

export async function POST(request) {
  try {
    const { message } = await request.json();

    // Validate request
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return Response.json(
        { response: 'Please provide a valid message.' },
        { status: 400 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      throw new Error('GEMINI_API_KEY is not configured');
    }

    // Use the model that worked in our test
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-2.0-flash'  // This model works on v1beta
    });

    // Create a comprehensive prompt instead of using chat history
    const fullPrompt = `${SYSTEM_PROMPT}

User Question: ${message.trim()}

Please provide a helpful, compassionate response following the guidelines above.`;

    const result = await model.generateContent(fullPrompt);
    const response = result.response.text();

    return Response.json({ response });
  } catch (error) {
    console.error('Chatbot API Error:', error);
    console.error('Error message:', error.message);
    console.error('Error details:', error?.errorDetails || 'No additional details');
    console.error('API Key present:', !!process.env.GEMINI_API_KEY);
    
    // More specific error handling
    if (error.message.includes('API key')) {
      return Response.json(
        { response: 'Configuration error. Please contact support.' },
        { status: 500 }
      );
    }
    
    if (error.message.includes('quota') || error.message.includes('limit')) {
      return Response.json(
        { response: 'Service temporarily unavailable due to high demand. Please try again in a few minutes or call us directly at +91 9095596999.' },
        { status: 429 }
      );
    }
    
    return Response.json(
      { 
        response: `I apologize, but I'm having trouble responding right now. Please call us at +91 9095596999 or +91 9842798422 for immediate assistance. Our office hours are Monday-Saturday, 10 AM - 1 PM.` 
      },
      { status: 500 }
    );
  }
}
