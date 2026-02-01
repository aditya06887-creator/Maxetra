import React from 'react';
import { IoTrendingUpOutline } from "react-icons/io5";
import {
  FaGlobe,
  FaUsers,
  FaUserTie,
  FaClock,
  FaArrowRight,
  FaCheckCircle,
  FaUpload,
  FaClipboardCheck,
  FaGift
} from 'react-icons/fa';
import { HiOutlineArrowLongRight } from "react-icons/hi2";



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
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Design the Future of
                <span className="text-orange-500 block">Digital Growth</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Work with a forward-thinking team shaping tomorrow's marketing
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium">
                  Explore Careers
                </button>
                <button className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-3 rounded-md font-medium">
                  Join Talent Network
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-orange-200 to-orange-400 rounded-full opacity-20"></div>
                <FaGlobe className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl text-orange-500" />
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
      <section id="apply-form" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Apply for the Future</h2>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option>Position Applying For</option>
              <option>Digital Marketing Strategist</option>
              <option>SEO Specialist</option>
              <option>PPC Performance Manager</option>
              <option>Web Designer & Developer</option>
            </select>
            <div className="relative">
              <input
                type="file"
                className="hidden"
                id="resume"
              />
              <label
                htmlFor="resume"
                className="w-full px-4 py-3 border border-gray-300 rounded-md cursor-pointer flex items-center justify-center bg-gray-50 hover:bg-gray-100"
              >
                <FaUpload className="mr-2" />
                Upload Resume
              </label>
            </div>
            <textarea
              rows={4}
              placeholder="Message"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
            <div className="text-center">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-medium flex items-center mx-auto"
              >
                Apply for the Future <FaArrowRight className="ml-2" />
              </button>
            </div>
          </form>
        </div>
      </section>


    </div>
  );
};

export default Career;
