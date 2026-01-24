import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-300 px-6 sm:px-12 md:px-16 lg:px-24 pt-16">
      
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="public/image/Final-logo.png"
              alt="Holstein Logo"
              className="h-20 object-contain"
            />
          </div>

          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            Premium dairy cattle feed for higher milk yield, better fat
            percentage, and healthier livestock. Feeding the future of dairy.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
              (Icon, i) => (
                <span
                  key={i}
                  className="p-3 rounded-lg bg-slate-800 hover:bg-indigo-600 transition cursor-pointer"
                >
                  <Icon />
                </span>
              )
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h6 className="text-white font-semibold mb-4 relative">
            Quick Links
            <span className="block w-8 h-1 bg-emerald-500 mt-2"></span>
          </h6>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/products" className="hover:text-white">Products</Link></li>
            <li><Link to="/dealerdistributor" className="hover:text-white">Dealer & Distributor</Link></li>
            <li><Link to="/career" className="hover:text-white">Career</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h6 className="text-white font-semibold mb-4 relative">
            Support
            <span className="block w-8 h-1 bg-emerald-500 mt-2"></span>
          </h6>
          <ul className="space-y-3 text-sm">
            <li><Link to="/faq" className="hover:text-white">FAQs</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
            <li><Link to="/refund-policy" className="hover:text-white">Refund Policy</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h6 className="text-white font-semibold mb-4 relative">
            Contact Us
            <span className="block w-8 h-1 bg-emerald-500 mt-2"></span>
          </h6>

          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <FaEnvelope className="text-indigo-400 mt-1" />
              support@holsteinfeeds.com
            </li>
            <li className="flex gap-3">
              <FaPhoneAlt className="text-indigo-400 mt-1" />
              +91 98765 43210
            </li>
            <li className="flex gap-3">
              <FaMapMarkerAlt className="text-indigo-400 mt-1" />
              Punjab, India
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-700 mt-14"></div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 py-6 max-w-7xl mx-auto">
        <p>© {new Date().getFullYear()} Holstein. All rights reserved.</p>
        <p>
          Made with <span className="text-red-500">❤</span> by Holstein Team
        </p>
      </div>
    </footer>
  );
};

export default Footer;
