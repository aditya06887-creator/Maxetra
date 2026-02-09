import React from "react";
import { FaCheckCircle, FaSearch, FaComments, FaFileAlt, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Thanks() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1e3354] to-[#0f213a] text-white flex items-center justify-center p-6">
      <div className="w-full max-w-4xl text-center mt-10">

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <FaCheckCircle className="text-6xl text-emerald-400" />
        </div>

        {/* Heading */}
        <h1 className="text-2xl md:text-5xl font-bold mb-3">
        Your form has been submitted successfully.
        </h1>

        {/* Subtext */}
        <p className="text-gray-300 text-sm md:text-lg my-4">
        We’ve received your details and 
          our team will contact you shortly.
        </p>

        {/* What's Next */}
        <h2 className="text-xl font-semibold mt-10 mb-4">What's Next?</h2>

        <div className="bg-white text-gray-800 rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-3 overflow-hidden">
          <div className="p-6 border-b md:border-b-0 md:border-r flex flex-col items-center gap-2">
            <FaSearch className="text-2xl" />
            <p className="font-medium">Step 1: Initial Audit</p>
          </div>

          <div className="p-6 border-b md:border-b-0 md:border-r flex flex-col items-center gap-2">
            <FaComments className="text-2xl" />
            <p className="font-medium">Step 2: Strategy Call</p>
          </div>

          <div className="p-6 flex flex-col items-center gap-2">
            <FaFileAlt className="text-2xl" />
            <p className="font-medium">Step 3: Growth Plan</p>
          </div>
        </div>


        {/* Social + WhatsApp */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-gray-300 cursor-pointer">
            <FaLinkedin className="text-xl" />
            <span className="hidden md:block">Follow us on Linkedin</span>
            <FaInstagram className="text-xl ml-4" />
          </div>

          <button className="flex items-center gap-2 bg-emerald-400 text-black px-5 py-3 rounded-xl font-semibold cursor-pointer">
            <FaWhatsapp /> WhatsApp Us
          </button>
        </div>
      </div>
    </div>
  );
}