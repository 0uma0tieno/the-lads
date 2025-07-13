import React, { useState, FormEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAdmin } from '../../context/AdminContext';

// This component provides the UI for the admin login page.

const AdminLoginPage: React.FC = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useAdmin();

    // The destination to redirect to after successful login.
    // Defaults to /admin, but can be another page if the user was redirected here.
    const from = location.state?.from?.pathname || '/admin';

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Simulate a network delay for better UX
        setTimeout(() => {
            const loginSuccess = login(password);
            
            if (loginSuccess) {
                // On successful login, navigate to the intended destination.
                navigate(from, { replace: true });
            } else {
                // On failure, show an error message.
                setError('Incorrect password. Please try again.');
                setIsLoading(false);
            }
        }, 500);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
            <div className="max-w-md w-full mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-2xl">
                <div className="text-center mb-8">
                     <h1 className="text-3xl font-bold text-[#293855]">
                        Admin Access
                    </h1>
                     <p className="text-[#293855]/80 mt-2">Enter the password to manage site content.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1AC20] placeholder:text-gray-500"
                            placeholder="Password"
                            disabled={isLoading}
                        />
                    </div>

                    {error && (
                        <p className="text-red-500 text-sm text-center">{error}</p>
                    )}

                    <div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-[#293855] text-white py-3 px-6 rounded-lg font-bold text-lg hover:bg-[#F1AC20] transition-all duration-300 disabled:opacity-50 flex items-center justify-center"
                        >
                            {isLoading && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>}
                            {isLoading ? 'Verifying...' : 'Login'}
                        </button>
                    </div>
                </form>
            </div>
             <div className="mt-8 text-center">
                <a href="/" className="font-medium text-[#293855] hover:text-[#F1AC20]">
                    &larr; Back to site
                </a>
            </div>
        </div>
    );
};

export default AdminLoginPage;
