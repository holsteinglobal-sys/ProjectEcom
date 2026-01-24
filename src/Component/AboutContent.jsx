import React from 'react'

const AboutContent = () => {
  return (
    <div>
<div className="hero  min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse max-w-6xl">

    <div className="text-left">
      
      {/* Brand Tag */}
      <span className="block text-blue-500 dark:text-blue-400 text-sm uppercase tracking-[0.3em] font-semibold mb-3">
        Holstein
      </span>

      {/* Heading */}
      <h1 className="text-5xl font-bold mb-6 text-base-content">
        Who are we?
      </h1>

      {/* Paragraph */}
      <p className="py-6 leading-relaxed text-justify text-base-content/80">
        Holstein Nutrition is best known as a livestock feed-producing company. 
        It is a sister concern of MMC Group, founded in 2001 under the name of 
        Mahajan Molasses Company. Being a trusted and proud supplier of top-quality 
        raw materials for cattle feed, we started our subsidiary to produce the 
        best quality cattle feed under the brand HOLSTEIN.
        <br /><br />
        As a subsidiary of MMC Group, Holstein benefits from the strength and 
        expertise of our parent company. With MMC's vast experience in processing 
        and supplying key raw materials like molasses, maize, and DORB, we have 
        access to the finest ingredients for balanced cattle feed. This connection 
        allows us to focus on producing the best quality feed and ensure superior 
        nutrition and health for livestock. MMC's strong reputation and resources 
        enable us to consistently deliver high-standard cattle feed products. 
        Together, we ensure that farmers receive only the best feed for their cattle.
      </p>

      {/* Button */}
     <button className="btn  btn-dash btn-primary px-8 rounded-full">Get Start</button>

    </div>
  </div>
</div>

    </div>
  )
}

export default AboutContent