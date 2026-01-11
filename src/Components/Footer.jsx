import React from "react";
import {
  FaEnvelope,
  FaArrowRight,
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const links = [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Security", href: "#" },
    { label: "Website Terms of Use", href: "#" },
    { label: "Cookie Settings", href: "#" },
    { label: "Accessibility", href: "#" },
  ];

  return (
    <footer className="bg-[#001e37] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand & Contact */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              Maxetra<span className="text-red-500">.</span>
            </h2>

            <div className="space-y-4 text-gray-400 text-sm">
              <p className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-gray-500" />
                29 SE 2nd Ave, Miami Florida 33131, United States
              </p>

              <p className="flex gap-3">
                <FaEnvelope className="mt-1 shrink-0 text-gray-500" />
                Seattle@maxetra.com
              </p>

              <p className="text-lg text-white font-semibold">
                +1 664 679 4564
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="mx-auto">
            <h4 className="font-semibold mb-5 uppercase tracking-wider text-sm">
              Services
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {[
                "Digital Marketing",
                "PPC",
                "Web Development",
                "CRO Services",
                "Video Production",
                "UI / UX",
              ].map((item, i) => (
                <li key={i} className="hover:text-white cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="mx-auto">
            <h4 className="font-semibold mb-5 uppercase tracking-wider text-sm">
              Resources
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {["Case Study", "Our Blogs", "Careers", "Gift Cards"].map(
                (item, i) => (
                  <li key={i} className="hover:text-white cursor-pointer">
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-5 text-lg">
              Let’s keep in touch
            </h4>

            <div className="relative mb-6 max-w-md">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-transparent border border-gray-600 rounded-md py-3 px-4 pr-12 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-white"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white">
                <FaArrowRight />
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-3">
              <Social bg="bg-[#cd201f]"><FaYoutube /></Social>
              <Social bg="bg-black"><FaTiktok /></Social>
              <Social bg="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                <FaInstagram />
              </Social>
              <Social bg="bg-black"><FaXTwitter /></Social>
              <Social bg="bg-[#0077b5]"><FaLinkedinIn /></Social>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Links */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-gray-400">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

/* Social Icon Wrapper */
const Social = ({ children, bg }) => (
  <div
    className={`${bg} w-9 h-9 rounded-md flex items-center justify-center cursor-pointer hover:opacity-80`}
  >
    {children}
  </div>
);
