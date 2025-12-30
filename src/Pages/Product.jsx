import React from "react";

const Product = () => {
  return (
    <div>
      <div
        className="hero min-h-[50vh] md:min-h-[80vh] bg-cover bg-center "
        style={{
          backgroundImage: "url('/public/image/Home.jpg')",
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

export default Product;
