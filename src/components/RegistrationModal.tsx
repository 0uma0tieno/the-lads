import React, { useState, useEffect } from 'react';

interface RegistrationModalProps {
  eventTitle: string;
  onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ eventTitle, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [university, setUniversity] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handle form submission with a real API call
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // This is where you would replace the setTimeout with a real fetch call
    try {
      const response = await fetch('/api/register', { // Replace with your actual serverless function endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          university,
          eventTitle,
        }),
      });

      if (!response.ok) {
        // Handle server-side errors (e.g., validation failed)
        throw new Error('Something went wrong on our end. Please try again.');
      }

      // If the request was successful
      setIsSubmitted(true);

    } catch (err: any) {
      console.error('Registration failed:', err);
      setError(err.message || 'Failed to register. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const FormView = () => (
    <>
      <h2 className="text-2xl font-bold text-[#293855] text-center">Register for</h2>
      <p className="text-lg text-[#F1AC20] font-semibold text-center mb-6">{eventTitle}</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#293855]">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1AC20]"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#293855]">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1AC20]"
          />
        </div>
        <div>
          <label htmlFor="university" className="block text-sm font-medium text-[#293855]">University / Institution</label>
          <input
            type="text"
            id="university"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
            required
            className="mt-1 w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1AC20]"
          />
        </div>

        {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative text-sm" role="alert">
                <span className="block sm:inline">{error}</span>
            </div>
        )}
        
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#F1AC20] text-white py-3 px-6 rounded-lg font-bold text-lg hover:bg-[#293855] transition-all duration-300 disabled:opacity-50 flex items-center justify-center"
        >
          {isLoading && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>}
          {isLoading ? 'Registering...' : 'Confirm Registration'}
        </button>
      </form>
    </>
  );

  const SuccessView = () => (
    <div className="text-center">
        <div className="w-20 h-20 bg-[#C3E8C9] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-[#293855]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h2 className="text-2xl font-bold text-[#293855]">You're In!</h2>
        <p className="text-gray-600 mt-2">
            Thanks for registering, {name}. We've sent a confirmation to <span className="font-semibold">{email}</span>. See you at the event!
        </p>
        <button
            onClick={onClose}
            className="mt-8 w-full bg-[#293855] text-white py-3 px-6 rounded-lg font-bold hover:bg-opacity-80 transition-all"
        >
            Close
        </button>
    </div>
  );

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-fade-in"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 m-4 transition-transform duration-300 animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800" aria-label="Close registration form">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        {isSubmitted ? <SuccessView /> : <FormView />}
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

export default RegistrationModal;