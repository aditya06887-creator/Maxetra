import React from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaArrowRight,
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaXTwitter,
  FaFacebook,
} from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import white_logo from '../../assets/SVG FOR Ad/General/logo_white1.png'
import Location from '../Location'

export default function Footer() {
  const links = [
    { label: "Terms of Service", link: "/term" },
    { label: "Privacy Policy", link: "/privacy" },
  ];

  return (
    <div>
      <Location />
      <footer className="bg-[#011730] text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 lg:py-14">

          {/* CHANGED: 
            - grid-cols-2 (Mobile: 2 columns to keep services/resources side-by-side)
            - lg:grid-cols-5 (Desktop: 5 columns)
        */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-12">

            {/* Brand & Contact - col-span-2 makes it full width on mobile */}
            <div className="space-y-6 col-span-2 lg:col-span-1">
              <img
                src={white_logo}
                alt="Maxetra Logo"
                className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto object-contain"
              />


              <div className="space-y-4 text-gray-400 text-sm">
                <p className="flex gap-3">
                  <FaMapMarkerAlt className="mt-1 shrink-0 text-gray-500" />
                  7901 4th St N
                  STE 300, St. Petersburg, FL, 33702, USA
                </p>

                <p className="flex gap-3">
                  <FaEnvelope className="mt-1 shrink-0 text-gray-500" />
                  Seattle@maxetra.com
                </p>

                <p className="flex gap-3">
                  <IoIosCall className="mt-1 text-lg shrink-0 text-gray-500" />
                  +1 664 679 4564
                </p>
              </div>
            </div>

            {/* Services - Takes 1 column on mobile */}
            <div className="col-span-1">
              <h4 className="font-semibold mb-5 uppercase tracking-wider text-sm">
                Services
              </h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                {[
                  "Digital Marketing",
                  "Performance",
                  "Web Development",
                  "CRO Services",
                  "Video Production",
                  "Graphic",
                ].map((item, i) => (
                  <li key={i} className="hover:text-white cursor-pointer transition-colors">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources - Takes 1 column on mobile, staying aligned with Services */}
            <div className="col-span-1">
              <h4 className="font-semibold mb-5 uppercase tracking-wider text-sm">
                Resources
              </h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                {["Case Study", "Testimonial", "Portfolio"].map(
                  (item, i) => (
                    <li key={i} className="hover:text-white cursor-pointer transition-colors">
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Newsletter - col-span-2 makes it full width on mobile */}
            <div className="col-span-2 lg:col-span-2">
              <h4 className="font-semibold mb-5 text-lg">
                Let’s keep in touch
              </h4>

              <div className="relative mb-6 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-transparent border border-gray-600 rounded-md py-3 px-4 pr-12 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-white transition-all"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white">
                  <FaArrowRight />
                </button>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center items-center gap-4 py-6">
                <Link
                  to={{ pathname: "https://www.instagram.com/maxetraofficial/" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white w-10 h-10 rounded-lg flex items-center justify-center  text-xl"
                >
                  <FaInstagram className="text-[#001e37]" />
                </Link>

                <Link
                  to={{ pathname: "https://wa.me/XXXXXXXXXX" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white w-10 h-10 rounded-lg flex items-center justify-center  text-xl"
                >
                  <FaWhatsapp className="text-[#001e37]" />
                </Link>

                <Link
                  to={{ pathname: "https://x.com/Maxetraofficial" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white w-10 h-10 rounded-lg flex items-center justify-center  text-xl"
                >
                  <FaXTwitter className="text-[#001e37]" />
                </Link>

                <Link
                  to={{ pathname: "https://www.linkedin.com/maxetraofficial/" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white w-10 h-10 rounded-lg flex items-center justify-center text-[#001e37] text-xl"
                >
                  <FaLinkedinIn />
                </Link>

                <Link
                  to={{ pathname: "https://www.facebook.com/maxetraofficial/" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white w-10 h-10 rounded-lg flex items-center justify-center text-[#001e37] text-xl"
                >
                  <FaFacebook />
                </Link>

                <Link
                  to={{ pathname: "https://www.tiktok.com/@maxetraofficial" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white w-10 h-10 rounded-lg flex items-center justify-center text-[#001e37] text-xl"
                >
                  <FaTiktok />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-3">
            <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm text-gray-400">
              <p>&copy; {new Date().getFullYear()} Maxetra. All rights reserved.</p>
              <div className="flex gap-6">
                {links.map((link, index) => (
                  <div>
                    <Link
                      key={index}
                      to={link.link}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </div>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}

const Social = ({ children, bg }) => (
  <div
    className={`${bg} w-9 h-9 rounded-md flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity`}
  >
    {children}
  </div>
);