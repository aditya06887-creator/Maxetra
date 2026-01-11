import React, { useState } from "react";
import { Link } from "react-router-dom";
// React Icons for the mobile section
import {
  FaYoutube, FaInstagram, FaTiktok, FaLinkedinIn,
  FaChevronDown, FaXmark, FaXTwitter, FaWhatsapp
} from "react-icons/fa6";
import {
  MdWorkOutline
} from "react-icons/md";

import casestudy from '../assets/SVG FOR Ad/Case Study1.png'
import testi from '../assets/SVG FOR Ad/Client Testimonial1.png'
import portfolio from '../assets/SVG FOR Ad/Portofolio1.png'
import digim from '../assets/SVG FOR Ad/DigiMark1.png'
import content from '../assets/SVG FOR Ad/Content creation1.png'
import cro from '../assets/SVG FOR Ad/CRO.png'
import ecom from '../assets/SVG FOR Ad/Ecom1.png'
import graphic from '../assets/SVG FOR Ad/Graphics1.png'
import lo_seo from '../assets/SVG FOR Ad/Local Seo1.png'
import email from '../assets/SVG FOR Ad/Email&SMS.png'
import seo from '../assets/SVG FOR Ad/SEO1.png'
import social from '../assets/SVG FOR Ad/Social media1.png'
import v_prod from '../assets/SVG FOR Ad/Video Prod.png'
import performance from '../assets/SVG FOR Ad/Performance Marketing1.png'
import wdev from '../assets/SVG FOR Ad/WebD.png'
import callG from '../assets/SVG FOR Ad/Call_Girl.jpeg'
import logo from '../assets/SVG FOR Ad/final logo.png'
import blog from '../assets/SVG FOR Ad/Blog1.png'
import WWA from '../assets/SVG FOR Ad/Who We Are1.png'
import linkdin from '../assets/SVG FOR Ad/linkedin.png'
import tiktok from '../assets/SVG FOR Ad/tiktok.png'
import twitter from '../assets/SVG FOR Ad/twitter.png'
import whatsapp from '../assets/SVG FOR Ad/whatsapp.png'
import call from '../assets/SVG FOR Ad/phone.png'


export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const openNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const successLinks = [
    {
      label: "Case Study",
      desc: "Real-world growth stories and proven results.",
      icon: casestudy,
      to: "/case-study",
    },
    {
      label: "Client Testimonial",
      desc: "What our clients say about working with us.",
      icon: testi,
      to: "/testimonials",
    },
    {
      label: "Portfolio",
      desc: "A showcase of our best digital projects.",
      icon: portfolio,
      to: "/portfolio",
    },
  ];

  // --- CONTENT MAPPING FOR MOBILE ---

  const servicesData = [
    { title: "Digital Marketing", icon: digim, to: "/services/digi-marketing" },
    { title: "SEO", icon: seo, to: "/services/seo" },
    { title: "Local SEO", icon: lo_seo, to: "/services/local-seo" },
    { title: "Performance Marketing", icon: performance, to: "/services/performance" },
    { title: "CRO Services", icon: cro, to: "/services/cro" },
    { title: "Content Creation", icon: content, to: "/services/content" },
    { title: "Web Development", icon: wdev, to: "/services/webd" },
    { title: "E-commerce", icon: ecom, to: "/services/e-com" },
    { title: "E-mail & SMS Marketing", icon: email, to: "/services/email-sms" },
    { title: "Social Media", icon: social, to: "/services/social-media" }
  ];



  const creativeServicesData = [
    { title: "Video Production", icon: v_prod, to: "services/video-prod" },
    { title: "Graphic Design", icon: graphic, to: "services/graphic" }
  ];

  const aboutData = [
    { title: "Who We Are", icon: WWA, to: "/services/we-are" },
    { title: "Our Blog", icon: blog, to: "/services/blog" },
    { title: "Careers", icon: <MdWorkOutline />, to: "/services/career" },
  ];

  return (
    <header className="w-full border-b bg-white sticky top-0 z-[100]">
      {/* Top Bar (Desktop) - Unchanged */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="font-black cursor-pointer">
          <img src={logo} alt="Maxetra" className="w-[30vw] sm:w-[15vw] h-auto " />
        </Link>

        <nav className="hidden md:flex items-center justify-around space-x-8 font-medium text-gray-700">
          <Link to="/about" className="hover:text-blue-600 transition text-[20px] font-bold">About</Link>
          <div
            className="relative h-full py-2"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => {
              setServicesOpen(false);
              setActiveSection(null);
            }}
          >
            <Link to="/services" className="text-[20px] font-bold flex items-center gap-1 hover:text-blue-600 focus:outline-none cursor-pointer h-full">
              Services
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            {servicesOpen && (
              <div className="fixed left-0 top-[60px] w-screen z-[100] animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="absolute left-1/2 -translate-x-1/2 top-1 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-100 hidden lg:block" />
                <div className="bg-white shadow-2xl border-t border border-gray-100 overflow-hidden">
                  <div className="p-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 overflow-hidden lg:gap-7 max-h-[calc(100vh-120px)] overflow-y-auto">
                    <div className="space-y-6 ">
                      <ServiceItem
                        icon={digim}
                        title="Digital Marketing"
                        desc="Data-driven strategies to grow traffic, leads, and revenue."
                        to="services/digi-marketing"
                      />
                      <ServiceItem
                        icon={social}
                        title="Social Media Management"
                        desc="Build brand presence, engagement, and trust across platforms."
                        to="/services/seo/Social-Media" />
                      <ServiceItem
                        icon={ecom}
                        title="E-commerce"
                        desc="End-to-end solutions to scale online sales effectively."
                        to="e-commerce"
                      />
                    </div>
                    <div className="space-y-6">
                      <ServiceItem
                        icon={seo}
                        title="SEO"
                        desc="Improve rankings, visibility, and long-term organic growth."
                        to="/services/seo"
                      />
                      <ServiceItem
                        icon={cro}
                        title="Conversion Rate Optimization"
                        desc="Turn more visitors into customers with data-backed optimization.
                        "
                        to="cro" />
                      <ServiceItem
                        icon={graphic}
                        title="Graphic Design"
                        desc="Creative visuals that strengthen brand identity."
                        to="graphic" />
                    </div>
                    <div className="space-y-6">
                      <ServiceItem
                        icon={lo_seo}
                        title="Local SEO"
                        desc="Get found by nearby customers and dominate local search results."
                        to="local-seo"
                      />
                      <ServiceItem
                        icon={content}
                        title="Content Creation"
                        desc="High-quality content that attracts, engages, and converts."
                        to="content"
                      />
                      <ServiceItem
                        icon={v_prod}
                        title="Video Production"
                        desc="Professional videos designed to boost brand trust and engagement."
                        to="video-prod" />
                    </div>
                    <div className="lg:ml-auto space-y-6 ">
                      <ServiceItem
                        icon={performance}
                        title="Performance Marketing"
                        desc="ROI-focused campaigns designed for leads, sales, and growth."
                        to="ui-ux"
                      />
                      <ServiceItem
                        icon={wdev}
                        title="Web Development"
                        desc="Fast, secure, and conversion-focused websites."
                        to="webd"
                      />
                      <ServiceItem
                        icon={email}
                        title="Email & SMS Marketing"
                        desc="Automated campaigns that nurture leads and drive repeat sales."
                        to="services/email&sms" />
                    </div>
                    <div className="bg-[#001e37] rounded-xl p-4 mx-5 lg:mx-3 text-center text-white flex flex-col items-center self-start lg:sticky lg:top-0 w-50">
                      <img src={callG} alt="Contact" className="w-16 h-16 rounded-full object-cover border-2 border-orange-500 mb-3" />
                      <h4 className="font-bold text-base">Merve Candan</h4>
                      <p className="text-xs text-gray-400 mb-4">Marketing Head</p>
                      <button onClick={() => openNewTab('https://calendly.com/growixa/30min')} className="w-full bg-orange-500 text-white font-bold py-2.5 rounded-lg hover:bg-orange-700 transition text-sm cursor-pointer hover:opacity-80">Schedule a Meeting</button>
                      <p className="text-[10px] text-gray-400 my-2 italic">Get a Free Consultation</p>
                      <div className="flex items-center text-green-400 text-sm font-semibold gap-2 cursor-pointer hover:opacity-80">
                        <WhatsAppIcon /> WhatsApp
                      </div>
                      <div className="w-full border-t border-gray-700 my-2" />
                      {/* Social */}
                      <div className="flex justify-center items-center gap-2 ">
                        <Link to={linkdin} className="w-5 h-5 rounded-sm flex items-center justify-center cursor-pointer text-blue-700">
                          <img src={whatsapp} alt="" />
                        </Link>
                        <div className="w-5 h-5 rounded-sm flex items-center justify-center bg-white text-[#001e37] cursor-pointer"><FaTiktok /></div>
                        <div className="bg-white text-[#001e37] w-5 h-5 rounded-sm flex items-center justify-center cursor-pointer"><FaInstagram /></div>
                        <Link to="" className="bg-black w-5 h-5 rounded-sm flex items-center justify-center cursor-pointer">
                          <img src={twitter} alt="" />
                        </Link>
                        <Link to="" className=" w-5 h-5 rounded-sm flex items-center justify-center cursor-pointer">
                          <img src={linkdin} alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => setActiveSection("success")}
            onMouseLeave={() => setActiveSection(null)}
          >
            <button className="flex items-center gap-1 hover:text-blue-600 transition text-[20px] font-bold">
              Success
              <FaChevronDown
                className={`text-xs transition-transform ${activeSection === "success" ? "rotate-180" : ""
                  }`}
              />
            </button>

            {activeSection === "success" && (
              <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 z-[200]">
                <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-[340px] h-4  hidden lg:block" />
                <div className="w-[340px] bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">
                  {successLinks.map((item, i) => (
                    <Link
                      key={i}
                      to={item.to}
                      className="flex gap-3 px-5 py-4 hover:bg-gray-50 transition group"
                    >
                      <img
                        src={item.icon}
                        alt={item.label}
                        className="w-8 h-8 object-contain rounded-md"
                      />

                      <div>
                        <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-600">
                          {item.label}
                        </p>
                        <p className="text-xs text-gray-500 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}


          </div>

          <Link to="/contact" className="hover:text-blue-600 transition text-[20px] font-bold">Contact Us</Link>
          <Link to="/contact" className="bg-orange-500 text-white px-5 py-2 rounded-lg font-bold cursor-pointer flex items-center">
            <img src={call} alt="phone" className="w-5 h-5"/>
            <p>
            +918978522677
            </p>
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex">
        <Link to="/contact" className="bg-orange-500 text-white px-5 py-2 rounded-lg font-bold cursor-pointer flex items-center mx-8">
            <img src={call} alt="phone" className="w-5 h-5"/>
          </Link>
        <button onClick={() => setMobileOpen(true)} className="text-2xl p-2">☰</button>
        </div>
      </div>

      {/* --- MOBILE MENU (Updated content based on prompt) --- */}
      {mobileOpen && (
        <div className="fixed inset-y-0 left-0 right-10 sm:right-90 bg-white z-[200] flex flex-col overflow-y-auto overflow-x-auto animate-in slide-in-from-right duration-300">


          <div className="bg-[#004a80] p-6 pt-12 text-white relative text-center">
            <button onClick={() => setMobileOpen(false)} className="absolute top-4 right-4 text-2xl">
              <FaXmark />
            </button>
            <p className="text-sm font-medium leading-snug px-2 mt-4">
              Welcome to our official website, where we deliver unparalleled insights into the ever-evolving world of search engine optimization and other services.
            </p>
          </div>

          <div className="flex-grow divide-y divide-gray-100">
            {/* 1. Services Accordion */}
            <div className="w-full">
              <button
                onClick={() => toggleSection('services')}
                className="w-full flex items-center justify-between px-6 py-4 text-gray-700 font-semibold"
              >
                <div className="flex items-center gap-3 uppercase tracking-wide text-sm">
                  Services
                  <FaChevronDown className={`text-[10px] transition-transform ${activeSection === 'services' ? 'rotate-180' : ''}`} />
                </div>
              </button>
              {activeSection === 'services' && (
                <div className="bg-gray-50 px-10 py-4 grid grid-cols-1 gap-4">
                  {servicesData.map((item, idx) => (
                    <Link
                      to={item.to}
                      onClick={() => setMobileOpen(false)}
                      key={idx}
                      className="flex items-center gap-3 text-sm text-gray-600 font-medium hover:text-blue-600"
                    >

                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-5 h-5 object-contain rounded-[5px]"
                      />
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 2. Creative Services Accordion */}
            <div className="w-full">
              <button
                onClick={() => toggleSection('creative')}
                className="w-full flex items-center justify-between px-6 py-4 text-gray-700 font-semibold"
              >
                <div className="flex items-center gap-3 uppercase tracking-wide text-sm">
                  Creative Services
                  <FaChevronDown className={`text-[10px] transition-transform ${activeSection === 'creative' ? 'rotate-180' : ''}`} />
                </div>
              </button>
              {activeSection === 'creative' && (
                <div className="bg-gray-50 px-10 py-4 grid grid-cols-1 gap-4">
                  {creativeServicesData.map((item, idx) => (
                    <Link to={item.to} key={idx} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-5 h-5 object-contain rounded-[5px]"
                      />

                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 3. About Accordion */}
            <div className="w-full">
              <button
                onClick={() => toggleSection('about')}
                className="w-full flex items-center justify-between px-6 py-4 text-gray-700 font-semibold"
              >
                <div className="flex items-center gap-3 uppercase tracking-wide text-sm">
                  About
                  <FaChevronDown className={`text-[10px] transition-transform ${activeSection === 'about' ? 'rotate-180' : ''}`} />
                </div>
              </button>
              {activeSection === 'about' && (
                <div className="bg-gray-50 px-10 py-4 grid grid-cols-1 gap-4">
                  {aboutData.map((item, idx) => (
                    <Link to={item.to} key={idx} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-5 h-5 object-contain rounded-[5px]"
                      />

                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 4. Case Study (Standalone) */}
            <button to="" className="w-full flex items-center justify-between  text-gray-700 font-semibold border-b border-gray-100">
              <div className="w-full">
                <button
                  onClick={() => toggleSection("success")}
                  className="w-full flex items-center justify-between px-6 py-4 text-gray-700 font-semibold"
                >
                  <div className="flex items-center gap-3 uppercase tracking-wide text-sm">
                    Success
                    <FaChevronDown
                      className={`text-[10px] transition-transform ${activeSection === "success" ? "rotate-180" : ""
                        }`}
                    />
                  </div>
                </button>

                {activeSection === "success" && (
                  <div className="bg-gray-50 px-10 py-4 flex flex-col gap-3">
                    {successLinks.map((item, i) => (
                      <Link to={item.to} key={i} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                        <img
                          src={item.icon}
                          alt={item.label}
                          className="w-5 h-5 object-contain rounded-[5px]"
                        />

                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

            </button>
            <button to="" className="w-full  text-gray-700 font-semibold border-b border-gray-100">
              <div className="w-full">
                <Link to="/contact"
                  className="w-full flex items-center justify-between px-6 py-4 text-gray-700 font-semibold"
                >
                  <div className="uppercase tracking-wide text-sm">
                    Contact Us
                  </div>
                </Link>

              </div>

            </button>
          </div>


          {/* 5. Contact Us Button */}
          <button
            onClick={() => openNewTab('https://calendly.com/growixa/30min')}
            className="w-11/12 flex items-center justify-center bg-[#fd4f4e] py-6 rounded-lg mx-auto font-bold text-white shadow-md transition active:scale-95"
          >
            Schedule a Meeting
          </button>



          {/* Social Icons */}
          <div className="flex justify-center items-center gap-4 py-6">
            <div className="bg-[#cd201f] w-10 h-10 rounded-lg flex items-center justify-center text-white text-xl"><FaYoutube /></div>
            <div className="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] w-10 h-10 rounded-lg flex items-center justify-center text-white text-xl"><FaInstagram /></div>
            <div className="bg-[#25d366] w-10 h-10 rounded-lg flex items-center justify-center text-white text-xl"><FaWhatsapp /></div>
            <div className="bg-black w-10 h-10 rounded-lg flex items-center justify-center text-white text-xl"><FaXTwitter /></div>
            <div className="bg-[#0077b5] w-10 h-10 rounded-lg flex items-center justify-center text-white text-xl"><FaLinkedinIn /></div>
          </div>

          <div className="text-center pb-8 text-[11px] text-gray-400 px-4 border-t pt-4">
            <p>Copyright © 2024 All rights reserved.</p>
            <p>A ClickLocal Digital Advertising LLP Product.</p>
          </div>
        </div>
      )}
    </header>
  );
}

const ServiceItem = ({ icon, title, desc, to }) => (
  <Link
    to={to}
    className="w-full text-left group m-5 transition-all duration-200 block p-2 hover:rounded-lg hover:bg-gray-100 my-5"
  >
    <div className="flex items-center gap-2 mb-1 cursor-pointer">
      <img
        src={icon}
        alt={title}
        className="w-5 h-5 rounded object-contain group-hover:scale-110 transition-transform"
      />
      <h3 className="font-bold text-[15px] group-hover:text-blue-600">
        {title}
      </h3>
    </div>
    <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
  </Link>
);


const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.52 3.48A11.93 11.93 0 0012.06 0C5.44 0 .05 5.39.05 12.02c0 2.12.55 4.2 1.6 6.04L0 24l6.1-1.6a12 12 0 005.96 1.52h.01c6.63 0 12.02-5.39 12.02-12.02a11.95 11.95 0 00-3.57-8.42zM12.07 21.86a9.82 9.82 0 01-5-1.38l-.36-.21-3.62.95.97-3.53-.23-.36a9.86 9.86 0 01-1.51-5.28c0-5.44 4.43-9.87 9.88-9.87a9.82 9.82 0 016.99 2.9 9.82 9.82 0 012.88 6.98c0 5.44-4.43 9.87-9.87 9.87zm5.42-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.77-1.64-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.2-.24-.57-.48-.5-.66-.5h-.56c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.52s1.08 2.93 1.23 3.13c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.71.64.72.23 1.37.2 1.88.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
  </svg>
);