import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">About MyApp</h1>
          <p className="text-xl text-gray-600 leading-relaxed">MyApp is a cutting-edge platform dedicated to providing innovative solutions for modern businesses. Founded in 2020, we've been helping organizations worldwide streamline their operations and achieve their goals.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Our mission is to empower businesses with technology solutions that are intuitive, scalable, and secure. We believe that great technology should be accessible to everyone, regardless of their technical expertise.</p>
            <p className="text-gray-600 leading-relaxed">We're committed to continuous innovation and customer satisfaction, ensuring that our platform evolves with the changing needs of modern businesses.</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed mb-4">We envision a world where technology bridges the gap between ambition and achievement. Our vision is to be the leading provider of innovative digital solutions that transform businesses and improve lives.</p>
            <p className="text-gray-600 leading-relaxed">Through constant learning and adaptation, we aim to stay at the forefront of technological advancement and deliver unprecedented value to our customers.</p>
          </div>
        </div>

        <div className="bg-white p-12 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Team</h2>
          <p className="text-gray-600 leading-relaxed mb-6">Our diverse team of experts brings together decades of combined experience in software development, design, and business strategy. We're passionate about creating products that make a real difference.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4"></div>
              <h3 className="font-bold text-gray-800">John Doe</h3>
              <p className="text-gray-600 text-sm">CEO & Founder</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-purple-600 rounded-full mx-auto mb-4"></div>
              <h3 className="font-bold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600 text-sm">CTO</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-pink-600 rounded-full mx-auto mb-4"></div>
              <h3 className="font-bold text-gray-800">Mike Johnson</h3>
              <p className="text-gray-600 text-sm">Head of Design</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
