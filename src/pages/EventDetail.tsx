import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import DecorativeBlob from '../components/DecorativeBlob';
import RegistrationModal from '../components/RegistrationModal';
import { useContent } from '../context/ContentContext';



const EventDetail: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { content } = useContent();
  const { eventsData } = content;
  const event = eventsData.find((e) => e.id === eventId);
  

  if (!event) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-3xl font-bold text-[#293855]">Event Not Found</h2>
        <p className="mt-4 text-[#293855]/80">
          Sorry, we couldn't find the event you were looking for.
        </p>
        <Link
          to="/#events"
          className="mt-8 inline-block bg-[#F1AC20] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#293855] transition-all"
        >
          Back to All Events
        </Link>
      </div>
    );
  }

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
    <>
      <section className="bg-white relative overflow-hidden">
        {/* Banner Image */}
        <div className="h-64 md:h-80 w-full bg-cover bg-center" style={{ backgroundImage: `url(${event.imageUrl})` }}>
            <div className="h-full w-full bg-black/40"></div>
        </div>

        <DecorativeBlob className="-bottom-40 -left-40 w-96 h-96 opacity-20" color="#C3E8C9" />
        <DecorativeBlob className="-top-40 -right-40 w-96 h-96 opacity-20" color="#F1AC20" shapeIndex={1} animationDelay="1s"/>

        <div className="container mx-auto px-6 relative z-10 -mt-24 md:-mt-32 pb-20">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-2xl">
            <Link
              to="/#events"
              className="inline-flex items-center text-[#293855] font-semibold hover:text-[#F1AC20] transition-colors mb-6"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
              Back to All Events
            </Link>

            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className={`px-3 py-1 text-sm font-semibold rounded-full ${typeColorMap[event.type]}`}>{event.type}</span>
              <span className="text-[#293855]/80 font-medium">{event.date}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold my-3 text-[#293855]">
              {event.title}
            </h1>

            <div className="flex items-center text-[#293855]/80 font-semibold mt-2 mb-8">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span>{event.location}</span>
            </div>

            <div className="prose prose-lg max-w-none text-[#293855]/90">
              <p>{event.detailedDescription}</p>
            </div>

            <div className="mt-12 text-center border-t border-gray-200 pt-12">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-block bg-[#F1AC20] text-white py-4 px-12 rounded-full font-bold text-lg hover:bg-[#293855] transition-all duration-300 transform hover:scale-105"
                >
                    Register Now
                </button>
                <p className="text-sm mt-4 text-gray-500">Seats are limited, reserve your spot today!</p>
            </div>
          </div>
        </div>
      </section>
      {isModalOpen && (
        <RegistrationModal
          eventTitle={event.title}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default EventDetail;