import { useState } from "react";
import { db } from "../../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import toast from "react-hot-toast";
import Address from "./Address,";

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState(initialFormState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await addDoc(collection(db, "contactMessages"), {
        ...form,
        createdAt: serverTimestamp(),
      });

      toast.success("Message sent successfully!");
      setForm(initialFormState);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-indigo-50 px-4">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Contact Form */}
        <div className="md:col-span-2 bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center text-indigo-600">
            Contact Us
          </h2>
          <p className="text-center text-gray-500 mt-2 mb-8">
            We’d love to hear from you
          </p>

<form
  onSubmit={handleSubmit}
  className="grid grid-cols-1 md:grid-cols-2 gap-5"
>
  <input
    type="text"
    name="name"
    value={form.name}
    onChange={handleChange}
    placeholder="Full Name"
    className="input w-full rounded-full bg-indigo-50 border-none
             focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
                     transition-all duration-200"
    required
  />

  <input
    type="email"
    name="email"
    value={form.email}
    onChange={handleChange}
    placeholder="Email Address"
    className="input w-full rounded-full bg-indigo-50 border-none
             focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
                     transition-all duration-200"
    required
  />

  <input
    type="tel"
    name="phone"
    value={form.phone}
    onChange={handleChange}
    placeholder="Phone Number"
    className="input w-full rounded-full bg-indigo-50 border-none
             focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
                     transition-all duration-200"
    required
  />

  <textarea
    name="message"
    value={form.message}
    onChange={handleChange}
    placeholder="Your Message"
    rows="4"
    className="textarea w-full rounded-xl bg-indigo-50 border-none md:col-span-2
             focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
                     transition-all duration-200 resize-none"
    required
    
  />

  <button
    type="submit"
    disabled={loading}
    className="md:col-span-2 w-full py-3 rounded-full bg-indigo-600 text-white"
  >
    {loading ? "Sending..." : "Send Message"}
  </button>
</form>

        </div>

        {/* Contact Info */}
        <Address />
      </div>
    </div>
  );
};

export default Contact;
