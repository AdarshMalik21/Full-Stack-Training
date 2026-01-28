import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-3">About Us</h3>
            <p className="text-gray-300 text-sm">We provide quality content and services for developers worldwide.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Quick Links</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Contact</h3>
            <p className="text-gray-300 text-sm">Email: info@myapp.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
          <p>&copy; 2026 MyApp. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
