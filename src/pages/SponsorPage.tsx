import React, { useState } from 'react';
import { sponsorshipTiers } from '../constants';
import DecorativeBlob from '../components/DecorativeBlob';

const TierCard: React.FC<{ tier: typeof sponsorshipTiers[0] }> = ({ tier }) => (
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
        <a href="#sponsor-form" className={`mt-auto block text-center font-bold py-3 px-6 rounded-lg transition-all duration-300 ${tier.highlight ? 'bg-[#F1AC20] text-white hover:bg-[#293855]' : 'bg-gray-200 text-[#293855] hover:bg-gray-300'}`}>
            Select Plan
        </a>
    </div>
);

const SponsorPage: React.FC = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        contactName: '',
        email: '',
        tier: 'Community Partner',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            console.log('Sponsorship Inquiry:', formData);
            setIsLoading(false);
            setIsSubmitted(true);
        }, 1500);
    };

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
                        {sponsorshipTiers.map(tier => <TierCard key={tier.name} tier={tier} />)}
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section id="sponsor-form" className="py-20 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        {isSubmitted ? (
                            <div className="text-center bg-white p-12 rounded-lg shadow-2xl">
                                <div className="w-20 h-20 bg-[#C3E8C9] rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-12 h-12 text-[#293855]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <h2 className="text-3xl font-bold text-[#293855]">Thank You!</h2>
                                <p className="text-gray-600 mt-2 text-lg">
                                    We've received your inquiry and are thrilled about the possibility of partnering with you. Our team will get back to you at <span className="font-semibold">{formData.email}</span> within two business days.
                                </p>
                            </div>
                        ) : (
                            <div className="bg-white p-8 md:p-12 rounded-lg shadow-2xl">
                                <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-[#293855]">Ready to Partner?</h2>
                                <p className="text-center text-[#293855]/80 mb-8">Fill out the form below, and our partnership team will be in touch.</p>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <input type="text" name="companyName" placeholder="Company Name" onChange={handleInputChange} required className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1AC20]" />
                                        <input type="text" name="contactName" placeholder="Your Name" onChange={handleInputChange} required className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1AC20]" />
                                    </div>
                                    <input type="email" name="email" placeholder="Work Email" onChange={handleInputChange} required className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1AC20]" />
                                    <div>
                                        <label htmlFor="tier" className="block text-sm font-medium text-[#293855] mb-1">Partnership Level of Interest</label>
                                        <select name="tier" id="tier" onChange={handleInputChange} className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1AC20]">
                                            <option>Community Partner</option>
                                            <option>Innovation Partner</option>
                                            <option>Visionary Partner</option>
                                        </select>
                                    </div>
                                    <textarea name="message" placeholder="Any questions or specific ideas? (Optional)" rows={4} onChange={handleInputChange} className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1AC20]"></textarea>
                                    <button type="submit" disabled={isLoading} className="w-full bg-[#F1AC20] text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-[#293855] transition-all duration-300 disabled:opacity-50 flex items-center justify-center">
                                        {isLoading && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>}
                                        {isLoading ? 'Submitting...' : 'Submit Inquiry'}
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SponsorPage;
