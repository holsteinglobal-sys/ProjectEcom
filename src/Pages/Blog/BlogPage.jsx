import React, { useEffect, useState } from 'react';
import { getBlogs } from '../../services/adminService';
import BlogHero from './BlogHero';
import BlogCard from './BlogCard';


const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [filter, setFilter] = useState('All');
  // const [loading, setLoading] = useState(true);

  const categories = ['All', 'Newsletter', 'Tips', 'Insight', 'Success Stories'];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();
        setBlogs(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const filteredBlogs =
    filter === 'All'
      ? blogs
      : blogs.filter(blog => blog.category === filter);

  // if (loading) {
  //   return <div className="p-24 text-center">Loading blogs...</div>;
  // }

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-indigo-100 px-4 min-h-screen p-24">
      <BlogHero />

      <main className="max-w-7xl mx-auto px-8 py-8">
        {/* Filter Menu */}
        <div className="flex space-x-4  pb-6 mb-12">
          {categories.map(cat => (
            
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`btn btn-outline btn-primary rounded-full
                ${filter === cat
                  ? 'bg-primary text-white border-primary '
                  : ' '}
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredBlogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      
      </main>
    </div>
  );
};

export default BlogPage;
