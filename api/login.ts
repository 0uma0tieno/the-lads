// This file is a Vercel Serverless Function that securely handles admin login.
// It will be available at the `/api/login` endpoint.

export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ success: false, message: 'Method not allowed' }), { status: 405 });
  }

  try {
    const { password } = await req.json();

    // Get the correct password from environment variables (set in Vercel project settings).
    const correctPassword = process.env.ADMIN_PASSWORD;

    if (!correctPassword) {
        return new Response(JSON.stringify({ success: false, message: 'Admin password not configured on server.' }), { status: 500 });
    }
    
    if (password === correctPassword) {
      // If the password is correct, return a success response.
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } else {
      // If incorrect, return an error response.
      return new Response(JSON.stringify({ success: false, message: 'Incorrect password.' }), { status: 401 });
    }
  } catch (error) {
    // Handle cases where the request body is not valid JSON, etc.
    return new Response(JSON.stringify({ success: false, message: 'Invalid request.' }), { status: 400 });
  }
}
