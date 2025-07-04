import React from 'react';
import type { TimelineItem as TimelineItemType } from '../types';
import { timelineData } from '../constants';
import { useOnScreen } from '../hooks/useOnScreen';
import DecorativeBlob from '../components/DecorativeBlob';

// Helper component defined outside the main component to prevent re-creation on re-renders
const TimelineItem: React.FC<{ item: TimelineItemType, index: number }> = ({ item, index }) => {
    const [ref, isOnScreen] = useOnScreen<HTMLDivElement>({ threshold: 0.3 });
    const isEven = index % 2 === 0;

    return (
        <div ref={ref} className={`flex justify-between items-center w-full mb-8 ${isEven ? 'flex-row-reverse' : ''}`}>
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-[#F1AC20] shadow-xl w-12 h-12 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">{item.year}</h1>
            </div>
            <div className={`order-1 bg-[#C3E8C9] rounded-lg shadow-xl w-5/12 px-6 py-4 transition-all duration-700 ease-out ${isOnScreen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h3 className="font-bold text-[#293855] text-xl">{item.title}</h3>
                <p className="text-sm leading-snug tracking-wide text-[#293855]/80 mt-1">{item.description}</p>
            </div>
        </div>
    );
};

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-white relative overflow-hidden">
            <DecorativeBlob className="top-0 -left-40 w-96 h-96 opacity-20" color="#F1AC20" animationDelay="1s" />
            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl font-bold text-center mb-4 text-[#293855]">Our Story</h2>
                <p className="text-center max-w-3xl mx-auto text-lg text-[#293855]/80 mb-16">
                    From a humble beginning to a national movement. Here's how we got here.
                </p>
                <div className="relative wrap overflow-hidden h-full">
                    <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>
                    {timelineData.map((item, index) => (
                        <TimelineItem key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;