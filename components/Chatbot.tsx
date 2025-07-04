
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';
import type { Chat } from '@google/genai';
import type { ChatMessage } from '../types';
import { chatbotSystemInstruction } from '../constants';

// Safely access the API key. Vercel exposes public environment variables 
// prefixed with REACT_APP_ to the browser.
const API_KEY = (typeof process !== 'undefined' && process.env) ? process.env.REACT_APP_GEMINI_API_KEY : undefined;

const Chatbot: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [chat, setChat] = useState<Chat | null>(null);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initChat = () => {
            if (!API_KEY) {
                setError("API key is missing. Cannot initialize chatbot.");
                console.error("REACT_APP_GEMINI_API_KEY is not set in Vercel Environment Variables. Please add it in your Vercel project settings and re-deploy.");
                return;
            }
            try {
                const ai = new GoogleGenAI({ apiKey: API_KEY });
                const newChat = ai.chats.create({
                    model: 'gemini-2.5-flash-preview-04-17',
                    config: { systemInstruction: chatbotSystemInstruction }
                });
                setChat(newChat);
                setMessages([{ sender: 'bot', text: "Hey there! I'm Laddie, the bot for The Lads. Got any questions about our bootcamps, projects, or why we love tech? Ask away! 🚀" }]);
            } catch (e: any) {
                setError("Failed to initialize the chatbot.");
                console.error(e);
            }
        };
        initChat();
    }, []);
    
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);


    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userInput.trim() || !chat || isLoading) return;

        const userMessage: ChatMessage = { sender: 'user', text: userInput };
        setMessages(prev => [...prev, userMessage]);
        setUserInput('');
        setIsLoading(true);
        setError(null);
        
        try {
            const responseStream = await chat.sendMessageStream({ message: userMessage.text });
            let botResponse = '';
            
            // Add a placeholder for the bot's message
            setMessages(prev => [...prev, { sender: 'bot', text: '' }]);

            for await (const chunk of responseStream) {
                botResponse += chunk.text;
                // Update the last message (the bot's response) in the array
                setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1].text = botResponse;
                    return newMessages;
                });
            }

        } catch (e) {
            console.error("Error sending message:", e);
            const errorMessage = "Oops! Something went wrong on my end. Maybe try asking that again in a different way?";
            setError(errorMessage);
            setMessages(prev => [...prev, { sender: 'bot', text: errorMessage }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 w-[calc(100%-2rem)] max-w-sm h-[70vh] max-h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden animate-pop-in">
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-[#293855] text-white">
                <h3 className="font-bold text-lg">Chat with Laddie</h3>
                <button onClick={onClose} className="text-white hover:opacity-75" aria-label="Close chat">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex mb-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-3 rounded-2xl ${msg.sender === 'user' ? 'bg-[#F1AC20] text-white rounded-br-none' : 'bg-[#C3E8C9] text-[#293855] rounded-bl-none'}`}>
                           {msg.text}
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex justify-start mb-4">
                        <div className="max-w-[80%] p-3 rounded-2xl bg-[#C3E8C9] text-[#293855] rounded-bl-none">
                            <span className="italic">Laddie is typing...</span>
                        </div>
                    </div>
                )}
                 {error && !isLoading && (
                    <div className="text-center text-red-600 p-2 text-sm font-semibold">{error}</div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <div className="p-4 border-t border-gray-200 bg-white">
                <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder={isLoading ? "Please wait..." : "Ask something..."}
                        className="flex-1 w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1AC20] placeholder:text-gray-500"
                        disabled={isLoading || !chat || !!error}
                        aria-label="Chat input"
                    />
                    <button type="submit" className="bg-[#293855] text-white p-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#F1AC20] transition-colors" disabled={isLoading || !chat || !userInput.trim()} aria-label="Send message">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </button>
                </form>
            </div>
             <style>{`
                @keyframes pop-in {
                    0% { opacity: 0; transform: scale(0.9) translateY(10px); }
                    100% { opacity: 1; transform: scale(1) translateY(0); }
                }
                .animate-pop-in {
                    animation: pop-in 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
                }
            `}</style>
        </div>
    );
};

export default Chatbot;
