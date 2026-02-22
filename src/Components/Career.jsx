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
      {/* Why Join Us */} 
      <section className="py-16 bg-white"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Join Maxetra</h2> 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> <div className="text-center p-6"> 
      <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"> 
      <IoTrendingUpOutline className="text-[#001e37] text-2xl" /> 
      </div> <h3 className="text-lg font-semibold text-gray-900 mb-2">Growth-Driven Work</h3> 
      <p className="text-gray-600 text-sm">Work on global projects that challenge your skills and accelerate your career.</p> </div> <div className="text-center p-6"> <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"> <FaGlobe className="text-[#001e37] text-2xl" /> </div> <h3 className="text-lg font-semibold text-gray-900 mb-2">Remote & Flexible Culture</h3> <p className="text-gray-600 text-sm">We focus on performance, flexibility, and work-life balance.</p> </div> <div className="text-center p-6"> <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"> <FaUsers className="text-[#001e37] text-2xl" /> </div> <h3 className="text-lg font-semibold text-gray-900 mb-2"> Continuous Learning</h3> <p className="text-gray-600 text-sm">Gain hands-on experience and grow with real-world marketing and tech exposure.</p> </div> <div className="text-center p-6"> <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"> <FaUserTie className="text-[#001e37] text-2xl" /> </div> <h3 className="text-lg font-semibold text-gray-900 mb-2">Ownership & Impact</h3> <p className="text-gray-600 text-sm">Take responsibility, share ideas, and make a real impact on client success.</p> </div> </div> </div> </section> {/* Open Positions */} <section className="py-16 bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Open Positions</h2> <div className="divide-y divide-gray-200"> {jobs.map((job, index) => (<div key={index} className="p-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between hover:bg-gray-50" > <div className="flex-1"> <h3 className="text-lg font-medium text-gray-900"> {job.title} </h3> </div> <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm"> <span className="text-gray-500">{job.department}</span> <div className="flex items-center text-gray-500"> <FaCheckCircle className="text-green-500 mr-1" /> {job.location} </div> <div className="flex items-center text-gray-500"> <FaClock className="mr-1" /> {job.type} </div> <button onClick={() => document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" })} className="text-orange-500 hover:text-orange-600 font-medium flex items-center cursor-pointer" > Apply <FaArrowRight className="ml-1" /> </button> </div> </div>))} </div> </div> </section> {/* Hiring Process */} <section className="py-16 bg-gray-50"> <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center"> Hiring Process </h2> {/* Desktop View */} <div className="hidden md:flex items-center justify-center max-w-5xl mx-auto bg-white p-10 rounded-lg shadow"> {steps.map((step, index) => { const Icon = step.icon; return (<React.Fragment key={index}> <div className="flex flex-col items-center text-center"> <div className="w-14 h-14 rounded-full bg-[#001e37] text-white flex items-center justify-center"> <Icon className="text-xl" /> </div> <span className="mt-2 text-sm font-medium text-gray-700"> {step.label} </span> </div> {/* Arrow (not after last step) */} {index !== steps.length - 1 && (<div className="flex-1 flex items-center px-2 "> <div className="w-full h-[2px] bg-gray-300 relative px-10 -top-4"> <span className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-8 border-t-transparent border-b-transparent border-l-gray-300"> </span> </div> </div>)} </React.Fragment>); })} </div> {/* Mobile View */} <div className="md:hidden flex flex-col items-center gap-6"> {steps.map((step, index) => { const Icon = step.icon; return (<React.Fragment key={index}> <div className="flex flex-col items-center text-center"> <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center"> <Icon className="text-lg" /> </div> <span className="mt-2 text-sm font-medium text-gray-700"> {step.label} </span> </div> {index !== steps.length - 1 && (<HiOutlineArrowLongRight className="rotate-90 text-2xl text-[#001e37]" />)} </React.Fragment>); })} </div> </section>

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
