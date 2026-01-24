import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";
import { useAuth } from "../context/AuthContext";
import ProfileAvtar from "./ProfileAvtar.jsx";
import Profile from "../Pages/Profile.jsx";
import Product from "../Pages/HomeImage.jsx";
import NotificationBell from "./NotificationBell.jsx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { currentUser } = useAuth();

  return (
    <div className="navbar bg-base-200 shadow-md fixed top-0 z-50 w-full h-20 border-b">
      <div className="flex items-center justify-between w-full px-2 md:px-100">
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src="/public/image/holstein-logo.png"
            alt="Holstein Logo"
            className="h-25 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex">
          <ul className="flex gap-10 font-semibold text-lg items-center">
            {/* Menu Items */}
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `transition-colors duration-300 ${
                    isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-500"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `transition-colors duration-300 ${
                    isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-500"
                  }`
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product"
                className={({ isActive }) =>
                  `transition-colors duration-300 ${
                    isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-500"
                  }`
                }
              >
                Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `transition-colors duration-300 ${
                    isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-500"
                  }`
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `transition-colors duration-300 ${
                    isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-500"
                  }`
                }
              >
                Contact Us
              </NavLink>
            </li>

            {/* User Section */}
            <li className="flex items-center gap-3">
              {currentUser ? (
                <>
                  <span className="text-primary font-bold">
                    Hi, {currentUser.displayName}
                  </span>
                  <NotificationBell />
                  <ProfileAvtar />
                </>
              ) : (
                <>
                  <li>
                    <NavLink
                      to="/login"
                      className="btn btn-sm btn-outline rounded-full border-blue-700 text-blue-700 text-base font-semibold hover:bg-blue-700 hover:text-white transition-all duration-300"
                    >
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/signup"
                      className="btn btn-sm btn-primary rounded-full text-base font-semibold px-4 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      Sign Up
                    </NavLink>
                  </li>
                </>
              )}
            </li>
          </ul>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className={`btn btn-ghost text-2xl ${
              open ? "text-primary" : "text-red-500"
            }`}
          >
            ☰
          </button>
        </div>
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

            {currentUser ? (
              <li><Profile /></li>
            ) : (
              <>
                <li><Link to="/login" onClick={() => setOpen(false)}>Login</Link></li>
                <li><Link to="/signup" onClick={() => setOpen(false)}>Sign Up</Link></li>
              </>
            )}

            <a href="tel:+911800-296-5555">📞 1800-296-5555</a>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
