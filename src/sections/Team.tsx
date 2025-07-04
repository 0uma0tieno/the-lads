import React from 'react';
import type { TeamMember as TeamMemberType } from '../types';
import { teamData } from '../constants';
import { useOnScreen } from '../hooks/useOnScreen';

const TeamCard: React.FC<{ member: TeamMemberType, index: number }> = ({ member, index }) => {
    const [ref, isOnScreen] = useOnScreen<HTMLDivElement>({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={`
                group transition-all duration-700 ease-out
                ${isOnScreen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}
                animate-float
            `}
            style={{ animationDelay: `${index * 0.4}s` }}
        >
            <div className="relative bg-white rounded-2xl shadow-lg p-6 text-center overflow-hidden h-80 flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                {/* Decorative Blobs */}
                <div className="absolute -top-12 -left-12 w-32 h-32 bg-[#C3E8C9]/50 rounded-full transition-transform duration-500 group-hover:scale-[1.7]"></div>
                <div className="absolute -bottom-16 -right-8 w-40 h-40 bg-[#F1AC20]/40 rounded-full transition-transform duration-700 group-hover:scale-125"></div>

                {/* Image - This is the default state, disappears on hover */}
                <div className="relative z-10 transition-opacity duration-300 ease-in-out group-hover:opacity-0">
                    <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-md"
                    />
                </div>
                
                {/* Overlay with all info - This is the hover state */}
                <div className="absolute inset-0 bg-white/95 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-20">
                     <h3 className="text-2xl font-bold text-[#293855]">{member.name}</h3>
                    <p className="text-[#293855]/80 text-md mb-4">{member.role}</p>
                    
                    <p className="text-base italic text-[#293855] leading-snug text-center mb-6">"{member.funFact}"</p>

                    <div className="flex justify-center items-center space-x-4">
                        {member.linkedinUrl && (
                             <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0077b5] transition-colors" aria-label={`${member.name}'s LinkedIn Profile`}>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            </a>
                        )}
                        {member.githubUrl && (
                           <a href={member.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#333] transition-colors" aria-label={`${member.name}'s GitHub Profile`}>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12.011c0 4.434 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12.011C22 6.477 17.523 2 12 2z" clipRule="evenodd"></path></svg>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Team: React.FC = () => {
    return (
        <section id="team" className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-4 text-[#293855]">The Brains Trust</h2>
                <p className="text-center max-w-3xl mx-auto text-lg text-[#293855]/80 mb-16">
                    Meet the slightly-crazy, caffeine-fueled individuals behind the mission.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                    {teamData.map((member, index) => (
                        <TeamCard key={index} member={member} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;