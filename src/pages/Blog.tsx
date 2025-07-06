import React from 'react';
import { blogData } from '../constants';
import { useOnScreen } from '../hooks/useOnScreen';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
    const [ref, isOnScreen] = useOnScreen<HTMLDivElement>({ threshold: 0.1 });

    return (
        <section id="blog" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-4 text-[#293855]">From The Lads' Desk</h2>
                <p className="text-center max-w-3xl mx-auto text-lg text-[#293855]/80 mb-16">
                    Thoughts, tutorials, and stories from our journey in the tech trenches.
                </p>
                <div ref={ref} className="max-w-4xl mx-auto space-y-8">
                    {blogData.map((post, index) => (
                         <div key={index} className={`bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 ease-out transform hover:-translate-y-1 ${isOnScreen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                            <a href={post.link}>
                                <h3 className="text-2xl font-bold text-[#293855]">{post.title}</h3>
                                <p className="text-sm text-[#293855]/60 mt-2">By {post.author} on {post.date}</p>
                                <p className="text-[#293855]/80 mt-4">{post.excerpt}</p>
                                <Link
                                    to={`/blog/${post.id}`}
                                        className="inline-flex items-center font-semibold text-[#F1AC20] hover:underline transition-transform transform hover:translate-x-1"
                                >
                                    Read More
                                    <svg className="w-4 h-4 ml-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3">
                                    </path>
                                    </svg>
                                </Link>

                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;