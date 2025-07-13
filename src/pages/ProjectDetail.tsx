import React from 'react';
import { useParams, Link } from 'react-router-dom';
import DecorativeBlob from '../components/DecorativeBlob';
import { useContent } from '../context/ContentContext';


const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const { content } = useContent();
  const { projectsData } = content;
  const project = projectsData.find((p) => p.id === projectId);
 


  if (!project) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-3xl font-bold text-[#293855]">Project Not Found</h2>
        <p className="mt-4 text-[#293855]/80">
          Sorry, we couldn't find the project you were looking for.
        </p>
        <Link
          to="/#projects"
          className="mt-8 inline-block bg-[#F1AC20] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#293855] transition-all"
        >
          Back to All Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <DecorativeBlob className="-top-40 -left-40 w-96 h-96 opacity-20" color="#C3E8C9" />
      <DecorativeBlob className="-bottom-40 -right-40 w-96 h-96 opacity-20" color="#F1AC20" shapeIndex={1} animationDelay="1s"/>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/#projects"
            className="inline-flex items-center text-[#293855] font-semibold hover:text-[#F1AC20] transition-colors mb-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back to All Projects
          </Link>

          <span className="text-sm font-bold text-[#F1AC20] uppercase tracking-wider">{project.category}</span>
          <h1 className="text-4xl md:text-5xl font-bold my-3 text-[#293855]">
            {project.title}
          </h1>

          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-2xl my-8"
          />

          <div className="prose prose-lg max-w-none text-[#293855]/90">
            <p className="lead text-xl !mb-6 !mt-0">{project.description}</p>
            <h3 className="text-[#293855]">The Full Story</h3>
            <p>{project.detailedDescription}</p>
          </div>

          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-[#293855] mb-4">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                {project.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-[#C3E8C9] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="text-[#293855]/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.techStack && project.techStack.length > 0 && (
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-[#293855] mb-4">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          <div className="mt-16 text-center border-t border-gray-200 pt-12">
              <h3 className="text-2xl font-bold text-[#293855]">Inspired?</h3>
              <p className="text-lg text-[#293855]/80 mt-2">See what else we've been building or get in touch to start a project of your own.</p>
              <div className="mt-6 flex justify-center gap-4">
                  <Link
                      to="/#projects"
                      className="inline-block bg-gray-200 text-[#293855] py-3 px-6 rounded-full font-bold hover:bg-gray-300 transition-all"
                  >
                      View Other Projects
                  </Link>
                   <Link
                      to="/#contact"
                      className="inline-block bg-[#F1AC20] text-white py-3 px-6 rounded-full font-bold hover:bg-[#293855] transition-all"
                  >
                      Get In Touch
                  </Link>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;