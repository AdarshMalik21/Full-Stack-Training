import React from 'react'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React",
      date: "January 28, 2026",
      author: "John Doe",
      excerpt: "Learn the basics of React and start building modern web applications. This comprehensive guide covers components, hooks, and best practices.",
      category: "React"
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS",
      date: "January 25, 2026",
      author: "Jane Smith",
      excerpt: "Discover the power of utility-first CSS with Tailwind. We'll explore how to build beautiful, responsive designs without writing custom CSS.",
      category: "CSS"
    },
    {
      id: 3,
      title: "Web Performance Optimization",
      date: "January 20, 2026",
      author: "Mike Johnson",
      excerpt: "Learn essential techniques to optimize your website's performance. From lazy loading to code splitting, we cover it all.",
      category: "Performance"
    },
    {
      id: 4,
      title: "Building Scalable Applications",
      date: "January 15, 2026",
      author: "John Doe",
      excerpt: "Explore architecture patterns and best practices for building applications that can scale with your business needs.",
      category: "Architecture"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600">Insights, tutorials, and best practices from our team of experts</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">{post.category}</span>
                  <span className="text-gray-500 text-sm">{post.date}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3 hover:text-blue-600 cursor-pointer">{post.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">By {post.author}</span>
                  <button className="text-blue-600 hover:text-blue-800 font-semibold">Read More →</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-6">Get the latest articles and updates delivered to your inbox</p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg transition duration-300">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
