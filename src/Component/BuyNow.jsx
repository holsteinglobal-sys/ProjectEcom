const BuyNow = ({ product, onClose }) => {
  return (
    <div className="mt-6 p-5 rounded-xl bg-base-100 border space-y-4">
      <h3 className="text-lg font-semibold">Checkout</h3>

      {/* Product summary */}
      <div className="flex justify-between text-sm">
        <span>{product.title}</span>
        <span>₹{product.price}</span>
      </div>

      {/* Payment methods */}
      <div className="space-y-2 text-sm">
        <p className="font-medium">Payment Method</p>
        <div className="flex flex-col gap-2">
          <label><input type="radio" name="pay" /> UPI</label>
          <label><input type="radio" name="pay" /> Card</label>
          <label><input type="radio" name="pay" /> Cash on Delivery</label>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-3">
        <button className="btn btn-outline flex-1" onClick={onClose}>
          Back
        </button>
        <button className="btn btn-primary flex-1">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default BuyNow;
