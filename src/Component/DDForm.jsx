// import React, { useState } from "react";

// const DDForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     companyName: "",
//     email: "",
//     phone: "",
//     address: "",
//     state: "",
//     businessType: "",
//     years: "",
//     monthlySales: "",
//     products: "",
//     source: "",
//     details: "",
//     confirm: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     alert("Form submitted! Check console for details.");
//   };

//   return (
//     <div className="min-h-screen rounded-4xl  bg-purple-50  flex items-center justify-center p-2">
//       {/* Card */}
//       <div className=" rounded-4xl shadow-lg  p-8 max-w-4xl w-full">
//         <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
//           Dealership Application
//         </h2>
//         <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {/* Full Name */}
//           <div>
//             <label className="block text-gray-800 font-semibold mb-1">Full Name *</label>
//             <input
//               type="text"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               placeholder="Enter your full name"
//               required
//               className="w-full border text-gray-800  rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
//             />
//           </div>

//           {/* Company Name */}
//           <div>
//             <label className="block text-gray-800 font-semibold mb-1">Company Name *</label>
//             <input
//               type="text"
//               name="companyName"
//               value={formData.companyName}
//               onChange={handleChange}
//               placeholder="Legal name of business"
//               required
//               className="w-full border text-gray-800  rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-gray-800 font-semibold mb-1">Email Address *</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="your@email.com"
//               required
//               className="w-full border text-gray-800 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
//             />
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="block text-gray-800 font-semibold mb-1">Phone Number *</label>
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="+91 XXXXX XXXXX"
//               required
//               className="w-full border text-gray-800  rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
//             />
//           </div>

//           {/* Business Address */}
//           <div className="md:col-span-2">
//             <label className="block text-gray-800 font-semibold mb-1">Business Address *</label>
//             <textarea
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               rows="2"
//               placeholder="Complete business address"
//               required
//               className="w-full border text-gray-800 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
//             ></textarea>
//           </div>

//           {/* State/Region */}
//           <div>
//             <label className="block text-gray-800 font-semibold mb-1">State/Region</label>
//             <input
//               type="text"
//               name="state"
//               value={formData.state}
//               onChange={handleChange}
//               className="w-full border text-gray-800 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
//             />
//           </div>

//           {/* Business Type */}
//           <div>
//             <label className="block text-gray-800 font-semibold mb-1">Business Type</label>
//             <input
//               type="text"
//               name="businessType"
//               value={formData.businessType}
//               onChange={handleChange}
//               className="w-full border text-gray-800  rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
//             />
//           </div>

//           {/* Years in Business */}
//           <div>
//             <label className="block text-gray-800 font-semibold mb-1">Years in Business</label>
//             <input
//               type="number"
//               name="years"
//               value={formData.years}
//               onChange={handleChange}
//               className="w-full border text-gray-800  rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
//             />
//           </div>

//           {/* Monthly Sales Volume */}
//           <div>
//             <label className="block text-gray-800 font-semibold mb-1">Monthly Sales Volume</label>
//             <input
//               type="number"
//               name="monthlySales"
//               value={formData.monthlySales}
//               onChange={handleChange}
//               className="w-full border text-gray-800 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
//             />
//           </div>

//           {/* Interested Products */}
//           <div>
//             <label className="block text-gray-800 font-semibold mb-1">Interested Products *</label>
//             <select
//               name="products"
//               value={formData.products}
//               onChange={handleChange}
//               required
//               className="w-full border text-gray-800 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
//             >
//               <option value="">Select Products</option>
//               <option value="product1">Product 1</option>
//               <option value="product2">Product 2</option>
//               <option value="product3">Product 3</option>
//             </select>
//           </div>

//           {/* How did you hear about us */}
//           <div>
//             <label className="block text-gray-800 font-semibold mb-1">How did you hear about us?</label>
//             <input
//               type="text"
//               name="source"
//               value={formData.source}
//               onChange={handleChange}
//               className="w-full border text-gray-800  rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
//             />
//           </div>

//           {/* Additional Details */}
//           <div className="md:col-span-2">
//             <label className="block text-gray-800 font-semibold mb-1">Additional Details</label>
//             <textarea
//               name="details"
//               value={formData.details}
//               onChange={handleChange}
//               rows="3"
//               placeholder="Tell us about your interest, capacity, and any specific requirements..."
//               className="w-full text-gray-800 border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
//             ></textarea>
//           </div>

//           {/* Confirm Checkbox */}
//           <div className="md:col-span-2 text-gray-800 flex items-center space-x-2">
//             <input
//               type="checkbox"
//               name="confirm"
//               checked={formData.confirm}
//               onChange={handleChange}
//               required
//               className="w-4 h-4"
              
//             />
//             <label  className="font-medium">I confirm that the above information is correct</label>
//           </div>

//           {/* Submit Button */}
//           <div className="md:col-span-2">
//             <button
//               type="submit"
//               className="w-full bg-purple-500 font-medium  py-3 rounded-full hover:bg-purple-600 transition"
//             >
//               Apply for Dealership
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default DDForm;
