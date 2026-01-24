import React from "react";

const HomeImage = () => {
  return (
    <div>
      
      <div
        className="hero min-h-[40vh] md:min-h-[90vh] bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/public/image/HomeImage.png')",
        }}
      >
        {/* Optional overlay */}
        <div className="absolute inset-0"></div>

        <div className="hero-content text-neutral-content text-center relative z-10">
          <div className="max-w-2xl px-4">
           
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeImage;
