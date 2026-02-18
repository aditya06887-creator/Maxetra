import React, { useState } from "react";
import { IoTrendingUpOutline } from "react-icons/io5";
import { FaGlobe, FaUsers, FaUserTie, FaClock, FaArrowRight, FaCheckCircle, FaClipboardCheck, FaGift } from 'react-icons/fa';
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import bg from "../assets/SVG FOR Ad/General/Career_bg.jpeg";
import Thanks from '../Components/Thanks';

const steps = [
  { label: "Apply", icon: FaCheckCircle },
  { label: "Skill Review", icon: FaClipboardCheck },
  { label: "Interview", icon: FaUserTie },
  { label: "Offer", icon: FaGift },
];

const jobs = [
  { title: "Client Relationship Manager", department: "Sales", type: "Full Time", location: "Remote" },
  { title: "Sales Executive (US/Europe Market)", department: "Sales", type: "Full Time", location: "Remote" },
  { title: "Meta Ads Specialist", department: "Marketing", type: "Full Time", location: "Remote" },
  { title: "SEO Executive", department: "Marketing", type: "Full Time", location: "Remote" },
  { title: "Google Ads Specialist", department: "Marketing", type: "Full Time", location: "Remote" },
  { title: "UI/UX Designer", department: "Designing", type: "Full Time", location: "Remote" },
  { title: "Graphic Designer", department: "Designing", type: "Full Time", location: "Remote" },
  { title: "Video Editor", department: "Designing", type: "Full Time", location: "Remote" },
  { title: "Content Writer", department: "Marketing", type: "Full Time", location: "Remote" },
  { title: "Social Media Manager", department: "Marketing", type: "Full Time", location: "Remote" },
  { title: "Social Media Intern", department: "Marketing", type: "Full Time", location: "Remote" },
  { title: "SEO Intern", department: "Marketing", type: "Full Time", location: "Remote" },
  { title: "UI/UX Designer Intern", department: "Designing", type: "Full Time", location: "Remote" },
];

const Career = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid = formData.name && formData.email && formData.position && formData.phone;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    const submitData = new FormData();
    submitData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    submitData.append("name", formData.name);
    submitData.append("email", formData.email);
    submitData.append("position", formData.position);
    submitData.append("phone", formData.phone);
    submitData.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData,
      });

      const result = await response.json();

      if (result.success) {
        window.scrollTo({ top: 0, behavior: "smooth" }); 

        setIsSubmitted(true);
        
        setFormData({ name: "", email: "", position: "", phone: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Submission failed.");
    }
  };

  // ✅ Show Thank You page after successful submit
  if (isSubmitted) {
    return <Thanks />;
  }

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative min-h-[70vh] py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={bg} alt="Career background" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Empowering Talent to
                <span className="text-orange-500 my-2"> Innovate and Lead </span>
                in the Digital World
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Work with a forward-thinking team shaping tomorrow's marketing
              </p>
              <button
                onClick={() => document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium"
              >
                Explore Careers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Form */}
      <section id="apply-form" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Apply for This Position</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="w-full px-4 py-3 border rounded-md" required />
              <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="w-full px-4 py-3 border rounded-md" required />
            </div>

            <input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="w-full px-4 py-3 border rounded-md" required />

            <select name="position" value={formData.position} onChange={handleChange} className="w-full px-4 py-3 border rounded-md" required>
              <option value="">Select Position</option>
              {jobs.map((job, index) => (
                <option key={index} value={job.title}>{job.title}</option>
              ))}
            </select>

            <textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Message (Optional)" className="w-full px-4 py-3 border rounded-md" />

            <button type="submit" disabled={!isFormValid} className={`w-full py-3 rounded-md font-medium flex items-center justify-center cursor-pointer gap-2 ${isFormValid ? "bg-orange-500 text-white" : "bg-gray-300 text-gray-500"}`}>
              Submit Application <FaArrowRight />
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Career;
