import React, { useState } from "react";
import { IoTrendingUpOutline } from "react-icons/io5";
import { FaGlobe, FaUsers, FaUserTie, FaClock, FaArrowRight, FaCheckCircle, FaUpload, FaClipboardCheck, FaGift } from 'react-icons/fa';
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import bg from "../assets/SVG FOR Ad/General/Career_bg.jpeg"



const steps = [
  {
    label: "Apply",
    icon: FaCheckCircle,
  },
  {
    label: "Skill Review",
    icon: FaClipboardCheck,
  },
  {
    label: "Interview",
    icon: FaUserTie,
  },
  {
    label: "Offer",
    icon: FaGift,
  },
];

const Career = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    resume: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const isFormValid =
    formData.name &&
    formData.email &&
    formData.position &&
    formData.resume &&
    formData.message;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    console.log("Form Submitted:", formData);
    alert("Application Submitted Successfully!");
  };

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative min-h-[70vh] py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <img
            src={bg}
            alt="Career background"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          {/* <div className="absolute inset-0 bg-white/70"></div> */}
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 ">
                Design the Future of
                <span className="text-orange-500 block my-2">Digital Growth</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Work with a forward-thinking team shaping tomorrow's marketing
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium cursor-pointer">
                  Explore Careers
                </button>
                <button className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-3 rounded-md font-medium cursor-pointer">
                  Join Talent Network
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Why Join Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Join Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <IoTrendingUpOutline className="text-orange-500 text-2xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation-Driven Work</h3>
              <p className="text-gray-600 text-sm">Be relevant agile, digital & creative thinking client across multiple</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaGlobe className="text-orange-500 text-2xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Remote-First Culture</h3>
              <p className="text-gray-600 text-sm">Connect & leverage partners, supervisors and extended</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-orange-500 text-2xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Rapid Skill Growth</h3>
              <p className="text-gray-600 text-sm">Share secrets to navigate business environments</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaUserTie className="text-orange-500 text-2xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ownership & Impact</h3>
              <p className="text-gray-600 text-sm">Where a metaservice grows your normal interactions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Open Positions</h2>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="divide-y divide-gray-200">
              {[
                'Digital Marketing Strategist',
                'SEO Specialist',
                'PPC Performance Manager',
                'Web Designer & Developer'
              ].map((position, index) => (
                <div
                  key={index}
                  className="p-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between hover:bg-gray-50"
                >
                  {/* Job Title */}
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900">{position}</h3>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm">
                    <span className="text-gray-500">Marketing</span>

                    <div className="flex items-center text-gray-500">
                      <FaCheckCircle className="text-green-500 mr-1" />
                      Remote
                    </div>

                    <div className="flex items-center text-gray-500">
                      <FaClock className="mr-1" />
                      Full Time
                    </div>

                    <button
                      onClick={() =>
                        document
                          .getElementById("apply-form")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="text-orange-500 hover:text-orange-600 font-medium flex items-center cursor-pointer"
                    >
                      Apply <FaArrowRight className="ml-1" />
                    </button>
                  </div>
                </div>

              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Hiring Process */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Hiring Process
        </h2>

        {/* Desktop View */}
        <div className="hidden md:flex items-center justify-center max-w-5xl mx-auto bg-white p-10 rounded-lg shadow">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-[#001e37] text-white flex items-center justify-center">
                    <Icon className="text-xl" />
                  </div>
                  <span className="mt-2 text-sm font-medium text-gray-700">
                    {step.label}
                  </span>
                </div>

                {/* Arrow (not after last step) */}
                {index !== steps.length - 1 && (
                  <div className="flex-1 flex items-center px-2 ">
                    <div className="w-full h-[2px] bg-gray-300 relative px-10 -top-4">
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 
                    border-t-4 border-b-4 border-l-8 
                    border-t-transparent border-b-transparent border-l-gray-300">
                      </span>
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex flex-col items-center gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center">
                    <Icon className="text-lg" />
                  </div>
                  <span className="mt-2 text-sm font-medium text-gray-700">
                    {step.label}
                  </span>
                </div>

                {index !== steps.length - 1 && (
                  <HiOutlineArrowLongRight className="rotate-90 text-2xl text-[#001e37]" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </section>


      {/* Apply Form */}
      {/* Apply Form */}
      <section id="apply-form" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Apply for the Future
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-orange-500"
              />

              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Position */}
            <select
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Position Applying For</option>
              <option value="Digital Marketing Strategist">
                Digital Marketing Strategist
              </option>
              <option value="SEO Specialist">SEO Specialist</option>
              <option value="PPC Performance Manager">
                PPC Performance Manager
              </option>
              <option value="Web Designer & Developer">
                Web Designer & Developer
              </option>
            </select>

            {/* Resume Upload */}
            <div>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleChange}
                className="hidden"
              />

              <label
                htmlFor="resume"
                className="w-full px-4 py-3 border rounded-md cursor-pointer flex items-center justify-center bg-gray-50 hover:bg-gray-100"
              >
                <FaUpload className="mr-2" />
                {formData.resume ? formData.resume.name : "Upload Resume"}
              </label>
            </div>

            {/* Message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Message"
              className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-orange-500"
            />

            {/* Submit */}
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-3 rounded-md font-medium flex items-center justify-center gap-2
          ${isFormValid
                  ? "bg-orange-500 text-white hover:bg-orange-600"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
            >
              Apply for the Future <FaArrowRight />
            </button>

          </form>
        </div>
      </section>



    </div>
  );
};

export default Career;
