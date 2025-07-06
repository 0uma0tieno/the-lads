import React from 'react';
import { useParams } from 'react-router-dom';
import { blogData } from '../constants';

const BlogDetails: React.FC = () => {
  const { id } = useParams();
  const post = blogData.find(p => p.id === id);

  if (!post) {
    return <div className="text-center text-red-600 py-20">Post not found.</div>;
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-bold text-[#293855] mb-2">{post.title}</h1>
        <p className="text-sm text-[#293855]/60 mb-6">By {post.author} • {post.date}</p>
        <p className="text-lg text-[#293855]/80 leading-relaxed">{post.details}</p>
      </div>
    </section>
  );
};

export default BlogDetails;
