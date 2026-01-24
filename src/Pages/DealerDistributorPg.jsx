import {db} from '../lib/firebase';
import { useState } from "react";
import toast from 'react-hot-toast';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";

const DealerDistributorPg = () => {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    address: "",
    state: "",
    businessType: "",
    yearsInBusiness: "",
    monthlySales: "",
    interestedProducts: "",
    hearAboutUs: "",
    additionalDetails: "",
    confirm: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentUser) {
      toast.error("Please login first");
      return;
    }

    if (!form.confirm) {
      toast.error("Please confirm the details");
      return;
    }

    try {
      setLoading(true);
      await addDoc(collection(db, "businessEnquiries"), {
        ...form,
        uid: currentUser.uid,
        createdAt: serverTimestamp(),
      });

      toast.success("Form submitted successfully");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
    setForm({
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      address: "",
      state: "",
      businessType: "",
      yearsInBusiness: "",
      monthlySales: "",
      interestedProducts: "",
      hearAboutUs: "",
      additionalDetails: "",
      confirm: false,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-indigo-50 px-4 py-35">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8">
        
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-indigo-600">
          Dealer & Distributor 
        </h2>
        <p className="text-center text-gray-500 mt-2 mb-8">
          Fill in the details to get started with us
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {/* Row 1 */}
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            onChange={handleChange}
            className="input w-full rounded-full bg-indigo-50 border-none
             focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
                     transition-all duration-200"
        
            
            required
          />

          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            onChange={handleChange}
            className="input w-full rounded-full bg-indigo-50 border-none
             focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
                     transition-all duration-200"
        
            required
          />

          {/* Row 2 */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="input w-full rounded-full bg-indigo-50 border-none
             focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
                     transition-all duration-200
            "
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="input w-full rounded-full bg-indigo-50 border-none
             focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
                     transition-all duration-200
            "
            required
          />

          {/* Full width */}
          <input
            type="text"
            name="address"
            placeholder="Business Address"
            onChange={handleChange}
            className="input w-full rounded-full bg-indigo-50 border-none md:col-span-2
             focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
                     transition-all duration-200
            "
            required
          />

          {/* Row 3 */}
          <input
            type="text"
            name="state"
            placeholder="State / Region"
            onChange={handleChange}
            className="input w-full rounded-full bg-indigo-50 border-none
             focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
                     transition-all duration-200
            "
            required
          />

          <select
            name="businessType"
            onChange={handleChange}
            className="select w-full rounded-full bg-indigo-50 border-none
             focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
                     transition-all duration-200
            "
            required
          >
            <option value="">Business Type</option>
            <option>Dairy Farm</option>
            <option>Cattel Feed Shop</option>
            <option>Distributor</option>
            <option>other</option>
          </select>

          {/* Row 4 */}
          <select
            name="yearsInBusiness"
            onChange={handleChange}
            className="select w-full rounded-full bg-indigo-50 border-none
             focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
                     transition-all duration-200
            "
            required
          >
            <option value="">Years in Business</option>
            <option>Less than 1 year</option>
            <option>1 - 3 years</option>
            <option>3 - 5 years</option>
            <option>5+ years</option>
          </select>

          <select
            name="monthlySales"
            onChange={handleChange}
            className="select w-full rounded-full bg-indigo-50 border-none"
            required
          >
            <option value="">Monthly Sales Volume</option>
            <option>Less then ₹50,000</option>
            <option>₹50,000- ₹1,00,000L</option>
            <option>₹1,00,000L - ₹5,00,000L</option>
            <option>₹5,00,000L +</option>
          </select>

          {/* Row 5 */}
          <select
            name="interestedProducts"
            onChange={handleChange}
            className="select w-full rounded-full bg-indigo-50 border-none"
            required
          >
            <option value="">Interested Products</option>
            <option>Calf Starter</option>
            <option>Calf Growth Booster</option>
            <option>Heifer Prime Care</option>
            <option>Ultimate Dry Care</option>
            <option>Transition Wellness(Pre-20)</option>
            <option>Transition Wellness(Post-20)</option> 
            <option>Xtra Milk</option>
            <option>Xtra Milk 8000</option>
            <option>Xtra Milk Prime</option>
            <option>Xtra Milk Buff</option>

          </select>

          <input
            type="text"
            name="hearAboutUs"
            placeholder="How did you hear about us?"
            onChange={handleChange}
            className="input w-full rounded-full bg-indigo-50 border-none
             focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
                     transition-all duration-200
            "
          />

          {/* Full width textarea */}
          <textarea
            name="additionalDetails"
            placeholder="Additional Details"
            onChange={handleChange}
            className="textarea w-full rounded-xl bg-indigo-50 border-none md:col-span-2
             focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
                     transition-all duration-200 resize-none
            "
            rows="3"
          />

          {/* Confirm */}
          <div className="md:col-span-2 flex items-start gap-3 text-sm text-gray-600
           focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
                     transition-all duration-200
          ">
            <input
              type="checkbox"
              name="confirm"
              onChange={handleChange}
              className="checkbox checkbox-primary "
              required
            
            />
            <span>
              I confirm that the above information is correct
            </span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="md:col-span-2 w-full py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
          >
            {loading ? "Submitting..." : "Submit Enquiry"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DealerDistributorPg;
