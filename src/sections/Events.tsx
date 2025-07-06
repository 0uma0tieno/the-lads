import React from 'react';
import { Link } from 'react-router-dom';
import type { Event as EventType } from '../types';
import { eventsData } from '../constants';
import { useOnScreen } from '../hooks/useOnScreen';

const EventItem: React.FC<{ event: EventType }> = ({ event }) => {
    const [ref, isOnScreen] = useOnScreen<HTMLDivElement>({ threshold: 0.2 });

    const typeColorMap = {
        'Bootcamp': 'bg-blue-100 text-blue-800',
        'Hackathon': 'bg-red-100 text-red-800',
        'Workshop': 'bg-yellow-100 text-yellow-800',
        'Meetup': 'bg-green-100 text-green-800',
        'Outreach': 'bg-purple-100 text-purple-800',
        'Training': 'bg-orange-100 text-orange-800',
        'Partnership': 'bg-teal-100 text-teal-800',
        'Conference': 'bg-pink-100 text-pink-800',
        'Webinar': 'bg-indigo-100 text-indigo-800',
        'Networking': 'bg-gray-100 text-gray-800',
        'Seminar': 'bg-yellow-200 text-yellow-900',
        'Panel Discussion': 'bg-purple-200 text-purple-900',
        'Community Event': 'bg-green-200 text-green-900',
    };

    return (
        <div ref={ref} className={`bg-white p-6 rounded-lg shadow-lg mb-8 transition-all duration-500 ease-out transform ${isOnScreen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
             <div className="flex flex-col md:flex-row items-start">
                <div className="text-center md:text-left md:w-1/4 mb-4 md:mb-0">
                    <div className="text-2xl font-bold text-[#F1AC20]">{event.date.split(',')[0]}</div>
                    <div className="text-sm text-[#293855]/70">{event.date.split(',')[1]}</div>
                </div>
                <div className="w-full md:w-3/4 md:pl-6">
                    <div className="flex items-center mb-2">
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${typeColorMap[event.type]}`}>{event.type}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#293855]">{event.title}</h3>
                    <p className="text-[#293855]/80 mt-1 mb-4">{event.description}</p>
                    <Link
                        to={`/event/${event.id}`}
                        className="inline-flex items-center font-semibold text-[#F1AC20] hover:underline transition-transform transform hover:translate-x-1"
                    >
                        View Details & Register
                        <svg className="w-4 h-4 ml-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </Link>
                </div>
             </div>
        </div>
    );
}

const Events: React.FC = () => {
    return (
        <section id="events" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-4 text-[#293855]">Happenings</h2>
                <p className="text-center max-w-3xl mx-auto text-lg text-[#293855]/80 mb-16">
                    This is where the magic happens. Join us for our next event!
                </p>
                <div className="max-w-4xl mx-auto">
                    {eventsData.map((event, index) => (
                        <EventItem key={index} event={event} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;