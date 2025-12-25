import React from 'react'

const About = () => {
  return (
    <div>
        <div
  className="hero h-[747px]"
  style={{
    backgroundImage:
      "url(https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">About Us</h1>
      

<div className="flex gap-5 justify-center mb-5">
    <div className="hover-3d">
  {/* content */}
  <figure className="w-60 rounded-2xl">
    <img src="https://img.daisyui.com/images/stock/card-1.webp?x" alt="Tailwind CSS 3D card" />
  </figure>
  {/* 8 empty divs needed for the 3D effect */}
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>

<div className="hover-3d">
  {/* content */}
  <figure className="w-60 rounded-2xl">
    <img src="https://img.daisyui.com/images/stock/card-2.webp?x" alt="Tailwind CSS 3D hover" />
  </figure>
  {/* 8 empty divs needed for the 3D effect */}
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>

<div className="hover-3d">
  {/* content */}
  <figure className="w-60 rounded-2xl">
    <img src="https://img.daisyui.com/images/stock/card-3.webp?x" alt="Tailwind CSS 3D hover" />
  </figure>
  {/* 8 empty divs needed for the 3D effect */}
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
</div>

      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default About