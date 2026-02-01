import { FaCheckCircle } from "react-icons/fa";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Thanks() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f1b2d] to-[#1b2f4a] flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-4xl bg-transparent text-white text-center">

        {/* ICON */}
        <div className="flex justify-center mb-6">
          <FaCheckCircle className="text-teal-400 text-6xl drop-shadow-lg" />
        </div>

        {/* HEADING */}
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
        Your form has been submitted successfully.
        </h1>

        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-10">
        We’ve received your details and our team will contact you shortly.
        </p>

        {/* CTA BUTTONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div>
            <h3 className="font-semibold mb-5">Case Studies</h3>
            <Link to="/case-study" className="bg-teal-400 hover:bg-teal-500 text-[#0f1b2d] font-medium px-6 py-3 rounded-md transition">
              Link to Case Studies
            </Link>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Free Resource</h3>
            <button className="border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-[#0f1b2d] px-6 py-3 rounded-md transition cursor-pointer">
              Download our 2026 SEO Guide
            </button>
          </div>
        </div>

        {/* FOOTER BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#0b1524] px-6 py-4 rounded-lg">
          <div className="flex items-center gap-4 text-gray-300 text-sm">
            <FaLinkedin className="text-xl cursor-pointer hover:text-white" />
            <span>Follow us on LinkedIn</span>
            <FaInstagram className="text-xl cursor-pointer hover:text-white" />
          </div>

          <button className="flex items-center gap-2 bg-teal-400 text-[#0f1b2d] px-4 py-2 rounded-md font-medium hover:bg-teal-500">
            <FaWhatsapp className="text-lg" />
            WhatsApp Us
          </button>
        </div>
      </div>
    </section>
  );
}

