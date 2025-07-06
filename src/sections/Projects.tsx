import React from 'react';
import { Link } from 'react-router-dom';
import type { Project as ProjectType } from '../types';
import { projectsData } from '../constants';
import { useOnScreen } from '../hooks/useOnScreen';
import DecorativeBlob from '../components/DecorativeBlob';

const ProjectItem: React.FC<{ project: ProjectType, index: number }> = ({ project, index }) => {
    const [ref, isOnScreen] = useOnScreen<HTMLDivElement>({ threshold: 0.2 });
    const isEven = index % 2 === 0;

    return (
        <div ref={ref} className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mb-20 md:mb-24">
            {/* Image Container */}
            <div className={`w-full md:w-5/12 transition-all duration-700 ease-out ${isEven ? '' : 'md:order-last'} ${isOnScreen ? 'opacity-100 translate-x-0' : `opacity-0 ${isEven ? '-translate-x-10' : 'translate-x-10'}`}`}>
                <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="rounded-lg shadow-2xl object-cover w-full h-80 md:h-96" 
                />
            </div>

            {/* Text Container */}
            <div className={`w-full md:w-5/12 transition-all duration-700 ease-out delay-150 ${isOnScreen ? 'opacity-100 translate-x-0' : `opacity-0 ${isEven ? 'translate-x-10' : '-translate-x-10'}`}`}>
                <span className="text-sm font-bold text-[#F1AC20] uppercase tracking-wider">{project.category}</span>
                <h3 className="text-3xl font-bold mt-2 mb-4 text-[#293855]">{project.title}</h3>
                <p className="text-[#293855]/80 text-lg leading-relaxed">{project.description}</p>
                
                <div className="mt-6">
                    <Link
                        to={`/project/${project.id}`}
                        className="inline-flex items-center font-semibold text-[#F1AC20] hover:underline transition-transform transform hover:translate-x-1"
                    >
                        Learn More
                        <svg className="w-5 h-5 ml-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-20 bg-gray-50 relative overflow-hidden">
             <DecorativeBlob className="bottom-0 -right-40 w-96 h-96 opacity-20" color="#C3E8C9" shapeIndex={1} animationDelay="2s" />
            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl font-bold text-center mb-4 text-[#293855]">What We Do</h2>
                <p className="text-center max-w-3xl mx-auto text-lg text-[#293855]/80 mb-20">
                    We run hands-on sessions that teach students how to design and build solutions. Our students don't just learn theory. They build cool, impactful stuff. Here's a peek.
                </p>
                <div>
                    {projectsData.map((project, index) => (
                        <ProjectItem key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;