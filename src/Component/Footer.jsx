import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content border-t px-6 py-10 sm:px-12 md:px-16 lg:px-35">
      
      <div className="flex flex-col sm:flex-col md:flex-row md:justify-between md:items-start gap-10">
        
        {/* Logo Section */}
        <aside className="flex-1 flex justify-center md:justify-start">
          <a href="/" className="flex items-center">
            <img
              src="/public/image/holstein-logo.png"
              alt="Holstein Logo"
              className="max-h-25 sm:max-h-20 md:max-h-24 lg:max-h-35 object-contain"
            />
          </a>
        </aside>
        
        {/* Links Section */}
        <div className="flex flex-col sm:flex-row md:flex-row flex-wrap gap-8 sm:gap-12 md:gap-16 lg:gap-20 justify-center md:justify-start">
          
          <nav className="flex flex-col text-center md:text-left">
            <h6 className="footer-title mb-3 font-semibold">Services</h6>
            <a className="link link-hover mb-1">Branding</a>
            <a className="link link-hover mb-1">Design</a>
            <a className="link link-hover mb-1">Marketing</a>
            <a className="link link-hover mb-1">Advertisement</a>
          </nav>
          
          <nav className="flex flex-col text-center md:text-left">
            <h6 className="footer-title mb-3 font-semibold">Company</h6>
            <a className="link link-hover mb-1">About us</a>
            <a className="link link-hover mb-1">Contact</a>
            <a className="link link-hover mb-1">Jobs</a>
            <a className="link link-hover mb-1">Press kit</a>
          </nav>
          
          <nav className="flex flex-col text-center md:text-left">
            <h6 className="footer-title mb-3 font-semibold">Legal</h6>
            <a className="link link-hover mb-1">Terms of use</a>
            <a className="link link-hover mb-1">Privacy policy</a>
            <a className="link link-hover mb-1">Cookie policy</a>
          </nav>

        </div>
      </div>
      
    </footer>
  )
}

export default Footer
