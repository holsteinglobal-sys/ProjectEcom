import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar bg-base-200 shadow-md fixed top-0 z-50 w-full px-4 md:px-16 h-20 border-b">
      
      {/* LOGO */}
      <div className="flex-1">
        <Link to="/" className="flex items-center">
          <img
            src="/public/image/holstein-logo.png"
            alt="Holstein Logo"
            className="h-25 w-auto object-contain"
          />
        </Link>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex">
        <ul className="flex gap-8 font-semibold text-lg items-center">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/product">Services</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>

      {/* MOBILE MENU BUTTON */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)} className="btn btn-ghost ">
          ☰
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="absolute top-20 left-0 w-full bg-base-200 shadow-md md:hidden">
          <ul className="flex flex-col gap-4 p-6 font-semibold text-lg">
            <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setOpen(false)}>About Us</Link></li>
            <li><Link to="/product" onClick={() => setOpen(false)}>Services</Link></li>
            <li><Link to="/blog" onClick={() => setOpen(false)}>Blog</Link></li>
            <li><Link to="/contact" onClick={() => setOpen(false)}>Contact Us</Link></li>
          </ul>
        </div>
      )}

    </div>
  );
};

export default Navbar;
