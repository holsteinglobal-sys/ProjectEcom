import React from "react";

const Card = ({ image, title, description, buttonText }) => {
  return (
    <div className="flex justify-center m-4">
   <div className="card bg-base-100 w-64 md:w-62 lg:w-70 sm:w-50 shadow-sm mx-auto overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-00">
      <figure className="h-75 bg-gray-100 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="h-full max-w-full object-contain"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>

<div className="rating flex gap-1">
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-500 w-4 h-6"
    aria-label="1 star"
  />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-500 w-4 h-6"
    aria-label="2 star"
    defaultChecked
  />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-500 w-4 h-6"
    aria-label="3 star"
  />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-500 w-4 h-6"
    aria-label="4 star"
  />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-500 w-4 h-6"
    aria-label="5 star"
  />
</div>

        <div className="card-actions justify-center mt-4">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card;
