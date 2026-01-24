import { useState, useEffect } from "react";

const ImageGallery = ({ images, title }) => {
  const [activeImage, setActiveImage] = useState(images[0]);

  // Reset active image whenever `images` prop changes
  useEffect(() => {
    setActiveImage(images[0]);
  }, [images]);

  return (
    <div>
      <div className="bg-base-200 rounded-2xl p-6 flex justify-center items-center">
        <img
          src={activeImage}
          alt={title}
          className="max-h-[420px] object-contain transition-all duration-300"
        />
      </div>

      <div className="flex gap-3 mt-4 flex-wrap">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(img)}
            className={`w-16 h-16 rounded-xl bg-base-100 flex items-center justify-center
              border transition-all duration-300
              ${activeImage === img ? "border-primary ring-1 ring-primary scale-105" : "border-base-300 "}`}
          >
            <img src={img} alt="product" className="h-12 object-contain" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
