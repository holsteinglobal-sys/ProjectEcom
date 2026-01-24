const ProductAccordion = ({ longDescription }) => {
  return (
    <div className="mt-20  join join-vertical w-full">
      <div className="collapse rounded-2xl collapse-arrow join-item border">
        <input type="radio" name="accordion" defaultChecked />
        <div className="collapse-title  font-medium">Details</div>
        <div className="collapse-content text-sm text-gray-600">
          {longDescription || "No additional details available."}
        </div>
      </div>

      <div className="collapse  rounded-2xl collapse-arrow join-item border">
        <input type="radio" name="accordion" />
        <div className="collapse-title font-medium">Shipping</div>
        <div className="collapse-content text-sm text-gray-600">
          Free shipping on orders above ₹999.
        </div>
      </div>

      <div className="collapse rounded-2xl collapse-arrow join-item border">
        <input type="radio" name="accordion" />
        <div className="collapse-title font-medium">Payment methods</div>
        <div className="collapse-content text-sm text-gray-600">
          UPI, Cards, Net Banking, COD available.
        </div>
      </div>

      <div className="collapse rounded-2xl collapse-arrow join-item border">
        <input type="radio" name="accordion" />
        <div className="collapse-title font-medium">
          Good for the Planet
        </div>
        <div className="collapse-content rounded-2xl text-sm text-gray-600">
          Eco-friendly materials and sustainable packaging.
        </div>
      </div>
    </div>
  );
};

export default ProductAccordion;
