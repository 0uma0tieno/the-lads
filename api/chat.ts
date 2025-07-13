// This file is a Vercel Serverless Function that acts as a secure backend for the chatbot.
// It's located in the `api` directory, so it will be available at the `/api/chat` endpoint.

import { GoogleGenAI, HarmCategory, HarmBlockThreshold } from '@google/genai';
import type { ChatMessage } from '../src/types'; // Assuming Vercel can resolve this path

// The system instruction for the chatbot.
const chatbotSystemInstruction = "You are a friendly, witty, and slightly quirky AI assistant for 'The Lads', a Kenyan tech initiative for university students. Your name is 'Laddie'. Your goal is to be helpful and reflect the brand's voice: ambitious, bold, and curious. Keep responses concise and fun. Use emojis where appropriate! Never say you are an AI model. You are part of The Lads crew.";

// Safety settings for the Gemini model.
const safetySettings = [
  { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
];

export const config = {
  runtime: 'edge', // Use the Vercel Edge Runtime for speed
};

export default async function handler(req: Request) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
  }

  // Get the API key from environment variables (set in Vercel project settings)
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'API key not configured' }), { status: 500 });
  }

  try {
    const { message, history } = await req.json();

    if (!message) {
      return new Response(JSON.stringify({ error: 'Message is required' }), { status: 400 });
    }

    // Initialize the Google GenAI client
    const ai = new GoogleGenAI({ apiKey });
    
    // Convert the message history from the client to the format required by the SDK
    const chatHistory = (history || []).map((msg: ChatMessage) => ({
        role: msg.sender === 'bot' ? 'model' : 'user',
        parts: [{ text: msg.text }]
    }));

    // Start a chat instance with the history and system instruction
    const chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: chatbotSystemInstruction,
            safetySettings,
        },
        history: chatHistory,
    });
    
    // Get the streaming response from the model
    const responseStream = await chat.sendMessageStream({ message });
    
    // Create a new stream to pipe the response to the client
    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of responseStream) {
          controller.enqueue(new TextEncoder().encode(chunk.text));
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });

  } catch (error: any) {
    console.error('Error in chat handler:', error);
    return new Response(JSON.stringify({ error: 'An internal error occurred', details: error.message }), { status: 500 });
  }
}