import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

const BenefitCard: React.FC<{ icon: React.ReactNode; title: string; description: string, delay: number }> = ({ icon, title, description, delay }) => {
    const [ref, isOnScreen] = useOnScreen<HTMLDivElement>({ threshold: 0.2 });

    return (
        <div ref={ref} className={`bg-white p-6 rounded-lg shadow-lg text-center transition-all duration-500 ease-out ${isOnScreen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: `${delay}ms`}}>
            <div className="flex justify-center items-center h-16 w-16 rounded-full bg-[#C3E8C9] mx-auto mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-[#293855] mb-2">{title}</h3>
            <p className="text-[#293855]/80">{description}</p>
        </div>
    );
};

const Sponsors: React.FC = () => {
    return (
        <section id="sponsors" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-4 text-[#293855]">Power the Next Wave of Innovators</h2>
                <p className="text-center max-w-3xl mx-auto text-lg text-[#293855]/80 mb-16">
                    Your support helps us provide free, high-quality tech education. Partner with us to shape the future of tech in Africa.
                </p>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                    <BenefitCard 
                        delay={0}
                        icon={<svg className="w-8 h-8 text-[#293855]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>}
                        title="Talent Pipeline"
                        description="Get early access to a pool of bright, vetted, and project-ready engineering talent."
                    />
                    <BenefitCard
                         delay={150}
                        icon={<svg className="w-8 h-8 text-[#293855]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path></svg>}
                        title="Brand Visibility"
                        description="Showcase your brand to thousands of students and tech enthusiasts across our events and digital platforms."
                    />
                    <BenefitCard
                        delay={300}
                        icon={<svg className="w-8 h-8 text-[#293855]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>}
                        title="Community Impact"
                        description="Make a tangible difference by investing in local tech education and empowering the next generation of leaders."
                    />
                </div>

                <div className="text-center">
                    <a 
                        href="#contact"
                        className="inline-block bg-[#F1AC20] text-white py-4 px-10 rounded-full font-bold text-lg hover:bg-[#293855] transition-all duration-300 transform hover:scale-105"
                    >
                        Become a Sponsor
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Sponsors;