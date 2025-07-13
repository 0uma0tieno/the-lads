import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { useAdmin } from '../context/AdminContext';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isAdmin, logout } = useAdmin();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <header className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <Link to="/" className="transition-transform hover:scale-105 block">
                        <img 
                            src="/images/the lads favicon.png"
                            alt="The lads logo"
                            className="mr-2 h-16 w-auto"
                        />
                    </Link>

                    {isAdmin && (
                            <Link 
                                to="/admin" 
                                className="font-medium transition-colors duration-300 text-blue-600 hover:text-[#F1AC20]"
                            >
                                Admin
                            </Link>
                        )}

                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.name} 
                                to={link.href} 
                                className="font-medium transition-colors duration-300 text-[#293855] hover:text-[#F1AC20]"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                     <Link to="/#contact" className="hidden md:inline-block bg-[#F1AC20] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#293855] transition-all duration-300 transform hover:scale-105">
                        Get In Touch
                    </Link>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} aria-label="Open menu">
                            <svg className="w-6 h-6 text-[#293855]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                        </button>
                    </div>
                </div>
            </header>
            
            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                <div className="flex justify-end p-7">
                     <button onClick={toggleMenu} aria-label="Close menu">
                        <svg className="w-8 h-8 text-[#293855]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
                <nav className="flex flex-col items-center justify-center h-full -mt-20 space-y-8">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            to={link.href} 
                            onClick={closeMenu}
                            className="text-3xl font-bold transition-colors duration-300 text-[#293855] hover:text-[#F1AC20]"
                        >
                            {link.name}
                        </Link>
                    ))}

                    {isAdmin && (
                        <Link to="/admin" onClick={closeMenu} className="text-3xl font-bold transition-colors duration-300 text-blue-600 hover:text-[#F1AC20]">
                            Admin
                        </Link>
                    )}
                    {isAdmin ? (
                        <button onClick={() => { logout(); closeMenu(); }} className="mt-8 bg-red-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#293855] transition-all duration-300 transform hover:scale-105">
                            Logout
                        </button>
                    ) : (
                     <Link to="/#contact" onClick={closeMenu} className="mt-8 bg-[#F1AC20] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#293855] transition-all duration-300 transform hover:scale-105">
                        Get In Touch
                    </Link>
                    
                    )}</nav>
            </div>
        </>
    );
};

export default Header;