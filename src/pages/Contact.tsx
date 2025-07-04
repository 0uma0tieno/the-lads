import React, { useState } from 'react';
import Chatbot from '../components/Chatbot';

const FloatingRobotButton: React.FC<{ onClick: () => void, isChatOpen: boolean }> = ({ onClick, isChatOpen }) => (
    <button 
        onClick={onClick}
        className={`absolute w-32 h-32 -top-16 -right-4 lg:w-48 lg:h-48 lg:-top-20 lg:-right-10 z-20 transition-transform hover:scale-110 ${isChatOpen ? 'animate-jiggle' : 'animate-float'}`}
        aria-label="Open Chatbot"
    >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#C3E8C9" d="M49.8,-54.6C62,-40.5,67.6,-20.3,69.5,1.5C71.4,23.3,69.6,46.5,56.9,60.8C44.2,75.1,22.1,80.4,-1.8,82.2C-25.7,84,-51.4,82.3,-65.4,68.4C-79.4,54.5,-81.7,28.4,-78.9,5.7C-76.1,-17,-68.1,-36.4,-54.5,-50.2C-40.9,-63.9,-20.4,-72,1.3,-73.2C23.1,-74.4,40,-66.6,49.8,-54.6Z" transform="translate(100 100)" />
            <circle cx="90" cy="90" r="10" className="transition-colors duration-300" fill={isChatOpen ? '#F1AC20' : '#293855'} />
            <circle cx="125" cy="95" r="12" className="transition-colors duration-300" fill={isChatOpen ? '#F1AC20' : '#293855'} />
            <path d="M 95 120 A 20 10 0 0 0 125 120" stroke="#293855" strokeWidth="3" fill="none" />
        </svg>
    </button>
);

const Contact: React.FC = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);

    return (
        <section id="contact" className="py-20 bg-gray-50 overflow-visible">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-4 text-[#293855]">Let's Collaborate</h2>
                <p className="text-center max-w-3xl mx-auto text-lg text-[#293855]/80 mb-12">
                   Have a project idea, a sponsorship query, or want to bring us to your school? Drop us a line!
                </p>
                <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-2xl relative">
                    <FloatingRobotButton onClick={() => setIsChatOpen(true)} isChatOpen={isChatOpen} />
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <input type="text" placeholder="Your Name" className="w-full p-3 bg-[#293855] text-white border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1AC20] placeholder:text-gray-400" />
                            <input type="email" placeholder="Your Email" className="w-full p-3 bg-[#293855] text-white border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1AC20] placeholder:text-gray-400" />
                        </div>
                        <div className="mb-6">
                            <select className="w-full p-3 bg-[#293855] text-white border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1AC20] appearance-none" style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23F1AC20' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}>
                                <option>General Question</option>
                                <option>Sponsorship Inquiry</option>
                                <option>School Partnership</option>
                            </select>
                        </div>
                        <textarea placeholder="Your Message" rows={5} className="w-full p-3 bg-[#293855] text-white border border-gray-500 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-[#F1AC20] placeholder:text-gray-400"></textarea>
                        <button type="submit" className="w-full bg-[#F1AC20] text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-[#293855] transition-all duration-300 transform hover:scale-105">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
            {isChatOpen && <Chatbot onClose={() => setIsChatOpen(false)} />}
        </section>
    );
};

export default Contact;