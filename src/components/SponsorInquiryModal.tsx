import React, { useState, useEffect } from 'react';
import type { SponsorshipTier } from '../types';

interface SponsorInquiryModalProps {
  tier: SponsorshipTier;
  onClose: () => void;
}

const SponsorInquiryModal: React.FC<SponsorInquiryModalProps> = ({ tier, onClose }) => {
    const [formData, setFormData] = useState({
        companyName: '',
        contactName: '',
        email: '',
        message: `We are very interested in the ${tier.name} package and would love to learn more about how we can partner with The Lads.`
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const emailTo = 'sponsorship@thelads.com';
        const emailSubject = `Sponsorship Inquiry: ${tier.name} - ${formData.companyName}`;
        const emailBody = `Hello Lads Partnership Team,

We are writing to express our interest in the "${tier.name}" sponsorship package.

Company Name: ${formData.companyName}
Contact Name: ${formData.contactName}
Contact Email: ${formData.email}

Message:
${formData.message}

We look forward to discussing this opportunity further.

Best regards,
${formData.contactName}
`.trim();

        const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        
        window.location.href = mailtoLink;
        onClose();
    };

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
          document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-[60] animate-fade-in"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div
                className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 m-4 transition-transform duration-300 animate-slide-up"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800" aria-label="Close form">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-[#293855]">Sponsorship Inquiry</h2>
                    <p className="text-lg text-[#F1AC20] font-semibold mb-2">{tier.name}</p>
                    <p className="text-sm text-[#293855]/80 mb-6">Complete the form below to generate a pre-filled email in your default mail client.</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <div>
                            <label htmlFor="companyName" className="block text-sm font-medium text-[#293855]">Company Name</label>
                            <input type="text" name="companyName" id="companyName" value={formData.companyName} onChange={handleInputChange} required className="mt-1 w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1AC20]" />
                        </div>
                        <div>
                            <label htmlFor="contactName" className="block text-sm font-medium text-[#293855]">Your Name</label>
                            <input type="text" name="contactName" id="contactName" value={formData.contactName} onChange={handleInputChange} required className="mt-1 w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1AC20]" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#293855]">Your Email</label>
                        <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} required className="mt-1 w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1AC20]" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-[#293855]">Message</label>
                        <textarea name="message" id="message" value={formData.message} onChange={handleInputChange} rows={4} required className="mt-1 w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1AC20]"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-[#F1AC20] text-white py-3 px-6 rounded-lg font-bold text-lg hover:bg-[#293855] transition-all duration-300">
                        Generate Email
                    </button>
                </form>
            </div>
            <style>{`
              @keyframes fade-in {
                  from { opacity: 0; }
                  to { opacity: 1; }
              }
              @keyframes slide-up {
                  from { transform: translateY(20px); opacity: 0; }
                  to { transform: translateY(0); opacity: 1; }
              }
              .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
              .animate-slide-up { animation: slide-up 0.4s ease-out forwards; }
            `}</style>
        </div>
    );
};

export default SponsorInquiryModal;