import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-600 mb-4">Welcome to MyApp</h1>
          <p className="text-xl text-gray-600 mb-8">Build amazing web experiences with modern technologies</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">Get Started</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-blue-600 mb-3">Fast Performance</h2>
            <p className="text-gray-600 leading-relaxed">Experience lightning-fast load times and smooth interactions. Our optimized architecture ensures your application runs efficiently across all devices and network conditions.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-blue-600 mb-3">Easy to Use</h2>
            <p className="text-gray-600 leading-relaxed">Intuitive interface designed for users of all skill levels. Whether you're a beginner or an expert, navigating our platform is simple and straightforward.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-blue-600 mb-3">Secure & Reliable</h2>
            <p className="text-gray-600 leading-relaxed">Your data is protected with enterprise-grade security. We maintain 99.9% uptime and use industry-leading encryption standards.</p>
          </div>
        </div>

        <div className="bg-blue-600 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-6">Join thousands of satisfied customers who are already using MyApp to streamline their workflows.</p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-2 px-6 rounded transition duration-300">Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default Home
