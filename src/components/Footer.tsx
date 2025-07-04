import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';

const SocialIcon: React.FC<{ href: string; ariaLabel: string; children: React.ReactNode }> = ({ href, ariaLabel, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} className="text-gray-400 hover:text-white transition-colors duration-300">
        {children}
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#293855] text-white">
            <div className="container mx-auto px-6 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
                    {/* Column 1: Brand Info */}
                    <div className="space-y-4">
                        <Link to="/hero" className="transition-transform hover:scale-105 block">
                            <img 
                                src="/images/GOLDEN YELLOW - HORIZONTAL.png"
                                alt="The Lads Logo"
                                className="mr-20 h-40 w-auto"
                            />
                        </Link>
                        <p className="text-gray-300 max-w-xs">
                            Fostering the next generation of African tech innovators through hands-on learning and real-world projects.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white uppercase tracking-wider mb-4">Navigate</h3>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.href} className="text-gray-300 hover:text-[#F1AC20] transition-colors duration-300">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                             <li>
                                <Link to="/#contact" className="text-gray-300 hover:text-[#F1AC20] transition-colors duration-300">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Connect */}
                    <div>
                         <h3 className="text-lg font-semibold text-white uppercase tracking-wider mb-4">Connect</h3>
                        <div className="flex space-x-5">
                            <SocialIcon href="#" ariaLabel="The Lads on Twitter">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                            </SocialIcon>
                            <SocialIcon href="#" ariaLabel="The Lads on GitHub">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12.011c0 4.434 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12.011C22 6.477 17.523 2 12 2z" clipRule="evenodd"></path></svg>
                            </SocialIcon>
                             <SocialIcon href="#" ariaLabel="The Lads on LinkedIn">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            </SocialIcon>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} The Lads Initiative. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;