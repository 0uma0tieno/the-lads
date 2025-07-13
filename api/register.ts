// This file is a Vercel Serverless Function that handles event registration submissions.
// It will be available at the `/api/register` endpoint.

export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ success: false, message: 'Method not allowed' }), { status: 405 });
  }

  try {
    const body = await req.json();
    const { name, email, university, eventTitle } = body;

    // Basic validation
    if (!name || !email || !university || !eventTitle) {
      return new Response(JSON.stringify({ success: false, message: 'Missing required fields.' }), { status: 400 });
    }

    // In a real-world application, you would do something with this data, for example:
    // 1. Save it to a database (e.g., Vercel Postgres, MongoDB Atlas, Supabase).
    // 2. Send a confirmation email to the user (e.g., using Resend, SendGrid).
    // 3. Notify the event organizers (e.g., via Slack, email).
    
    console.log('New Registration:', { name, email, university, eventTitle });
    
    // For this example, we'll just return a success message.
    return new Response(JSON.stringify({ success: true, message: 'Registration successful!' }), { status: 200 });

  } catch (error) {
    console.error('Registration error:', error);
    return new Response(JSON.stringify({ success: false, message: 'Invalid request body.' }), { status: 400 });
  }
}
