import React, { useState } from 'react';
import { sponsorshipTiers } from '../constants';
import DecorativeBlob from '../components/DecorativeBlob';
import type { SponsorshipTier } from '../types';
import SponsorInquiryModal from '../components/SponsorInquiryModal';

const TierCard: React.FC<{ tier: SponsorshipTier; onSelect: (tier: SponsorshipTier) => void; }> = ({ tier, onSelect }) => (
    <div className={`border rounded-lg p-8 flex flex-col h-full ${tier.highlight ? 'border-[#F1AC20] border-2 relative' : 'border-gray-200'}`}>
        {tier.highlight && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F1AC20] text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider">
                Most Popular
            </div>
        )}
        <h3 className="text-2xl font-bold text-[#293855]">{tier.name}</h3>
        <p className="font-semibold text-[#293855]/70 mt-1">{tier.level}</p>
        <p className="text-[#293855]/80 my-4 flex-grow">{tier.description}</p>
        <ul className="space-y-3 mb-8">
            {tier.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-[#C3E8C9] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>{benefit}</span>
                </li>
            ))}
        </ul>
        <button onClick={() => onSelect(tier)} className={`mt-auto w-full text-center font-bold py-3 px-6 rounded-lg transition-all duration-300 ${tier.highlight ? 'bg-[#F1AC20] text-white hover:bg-[#293855]' : 'bg-gray-200 text-[#293855] hover:bg-gray-300'}`}>
            Select Plan
        </button>
    </div>
);

const SponsorPage: React.FC = () => {
    const [modalTier, setModalTier] = useState<SponsorshipTier | null>(null);

    return (
        <div className="bg-white relative overflow-hidden">
            <DecorativeBlob className="-top-40 -left-40 w-96 h-96 opacity-20" color="#C3E8C9" />
            <DecorativeBlob className="bottom-0 -right-40 w-96 h-96 opacity-20" color="#F1AC20" shapeIndex={1} animationDelay="1s" />
            
            {/* Hero Section */}
            <section className="py-20 text-center relative z-10">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-6xl font-bold text-[#293855]">Partner with The Lads</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-[#293855]/80">
                        Join us in our mission to cultivate the next generation of tech leaders in Africa. Your support directly funds our bootcamps, projects, and community events.
                    </p>
                </div>
            </section>

            {/* Tiers Section */}
            <section className="py-20 bg-gray-50 relative z-10">
                <div className="container mx-auto px-6">
                     <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#293855]">Sponsorship Tiers</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {sponsorshipTiers.map(tier => <TierCard key={tier.name} tier={tier} onSelect={setModalTier} />)}
                    </div>
                </div>
            </section>
            
            {modalTier && (
                <SponsorInquiryModal
                    tier={modalTier}
                    onClose={() => setModalTier(null)}
                />
            )}
        </div>
    );
};

export default SponsorPage;