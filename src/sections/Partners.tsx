import React from 'react';
import { partnersData } from '../constants';
import { useOnScreen } from '../hooks/useOnScreen';

const Partners: React.FC = () => {
    const [ref, isOnScreen] = useOnScreen<HTMLDivElement>({ threshold: 0.1 });

    return (
        <section id="partners" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-4 text-[#293855]">Trusted By</h2>
                <p className="text-center max-w-3xl mx-auto text-lg text-[#293855]/80 mb-16">
                    We're proud to collaborate with leading institutions and companies to foster the next generation of tech talent.
                </p>
                <div ref={ref} className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10">
                    {partnersData.map((partner, index) => (
                        <div 
                            key={partner.name} 
                            className={`transition-all duration-500 ease-out ${isOnScreen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <img
                                src={partner.logoUrl}
                                alt={partner.name}
                                className="h-20 w-auto object-contain transition-transform hover:scale-105"
                                style={{ maxHeight: 100 }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;