import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
   <div>
  <div className="navbar bg-base-200 shadow-sm h-25 px-20 fixed top-0 z-50 border-b w-full">
    
    {/* LOGO */}
    <div className="flex-1 flex items-center">
      <a href="/" className="flex items-center h-full px-15">
        <img
          src="/public/image/holstein-logo.png"
          alt="Holstein Logo"
          className="max-h-27 w-auto object-contain"
        />
      </a>
    </div>

    {/* MENU */}
    <div className="flex-none">
      <ul className="menu menu-horizontal px-18 flex gap-10 font-semibold text-lg items-center h-full">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/product">Services</Link>
        <Link to="/product">Blog</Link>
        <Link to="/product">Contact Us</Link>
      </ul>
    </div>

  </div>
</div>

  )
}

export default navbar