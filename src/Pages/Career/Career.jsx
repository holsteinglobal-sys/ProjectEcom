import { db } from "../../lib/firebase";
import { useState } from "react";
import toast from 'react-hot-toast';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useAuth } from "../../context/AuthContext";

const initialFormState = {
  fullName: "",
  email: "",
  phone: "",
  position: "",
  city: "",
  totalExperience: "",
  relevantExperience: "",
};

const Career = () => {
  const { currentUser } = useAuth();
  const [form, setForm] = useState(initialFormState);
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resume) {
      toast.error("Please upload your resume");
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, "careerApplications"), {
        ...form,
        uid: currentUser?.uid || null,
        resumeName: resume.name,
        createdAt: serverTimestamp(),
      });

      toast.success("Application submitted successfully");
      setForm(initialFormState);
      setResume(null);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-indigo-50 px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8">
        
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-indigo-600">
          Careers
        </h2>
        <p className="text-center text-gray-500 mt-2 mb-8">
          Apply now and grow your career with us
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
            value={form.fullName}
            onChange={handleChange}
            className="input w-full rounded-full bg-indigo-50 border-none
             focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
                     transition-all duration-200
            "
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="input w-full rounded-full bg-indigo-50 border-none
             focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
                     transition-all duration-200
            "
            required
          />

          {/* Row 2 */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="input w-full rounded-full bg-indigo-50 border-none
             focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
                     transition-all duration-200
            
            "
            required
          />

          <input
            type="text"
            name="position"
            placeholder="Position Applying For"
            value={form.position}
            onChange={handleChange}
            className="input w-full rounded-full bg-indigo-50 border-none
             focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
                     transition-all duration-200
            "
            required
          />

          {/* Row 3 */}
          <input
            type="text"
            name="city"
            placeholder="Current City / Location"
            value={form.city}
            onChange={handleChange}
            className="input w-full rounded-full bg-indigo-50 border-none
             focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
                     transition-all duration-200
            "
            required
          />

          <select
            name="totalExperience"
            value={form.totalExperience}
            onChange={handleChange}
            className="select w-full rounded-full bg-indigo-50 border-none
             focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
                     transition-all duration-200
            "
            required
          >
            <option value="">Total Work Experience</option>
            <option>Fresher</option>
            <option>1 - 3 Years</option>
            <option>3 - 5 Years</option>
            <option>5+ Years</option>
          </select>

          {/* Full width */}
          <textarea
            name="relevantExperience"
            placeholder="Relevant Experience Summary"
            value={form.relevantExperience}
            onChange={handleChange}
            className="textarea w-full rounded-xl bg-indigo-50 border-none md:col-span-2
             focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
                     transition-all duration-200
            "
            rows="4"
            required
          />

          {/* Resume Upload */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-600 mb-2
             focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
                     transition-all duration-200
            ">
              Upload Resume
            </label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setResume(e.target.files[0])}
              className="file-input file-input-bordered w-full
               focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
                     transition-all duration-200
              "
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="md:col-span-2 w-full py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Career;
