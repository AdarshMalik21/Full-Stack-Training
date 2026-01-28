import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="bg-linear-to-r from-blue-600 to-purple-600 shadow-lg">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-2xl font-bold">MyApp</h1>
          <div className="flex gap-6">
            <Link to="/" className="text-white hover:text-blue-200 font-semibold transition duration-300 text-lg">Home</Link>
            <NavLink to="/about" className= {({isActive}) => isActive?"text-red-400 hover:text-blue-200 font-semibold transition duration-300 text-lg":"text-white hover:text-blue-200 font-semibold transition duration-300 text-lg"} >About</NavLink>
            <Link to="/blog" className="text-white hover:text-blue-200 font-semibold transition duration-300 text-lg">Blog</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
