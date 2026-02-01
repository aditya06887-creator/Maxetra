import React from "react";
import { FaRocket } from "react-icons/fa";
import Location from "./Location";

import about_1 from '../assets/SVG FOR Ad/General/About_1.jpeg'

const openNewTab = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}

const About = () => {
  return (
    <section className="w-full">
      {/* ===== HERO / WELCOME SECTION ===== */}
      <div className="bg-[#001e37] text-white py-24 px-6">
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto">

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-center md:text-left max-w-5xl">
            About Maxetra — A{"  "}
            <span className="text-orange-500">Digital Marketing</span>{" "}
            Agency Built for Growth.
          </h1>

          {/* Image */}
          <img
            src={about_1}
            alt="Image"
            className="rounded-lg w-full md:w-[40vw] max-w-md md:max-w-none transition-transform duration-300 ease-in-out hover:shadow-amber-500 hover:shadow-inner"
          />
        </div>
      </div>


      {/* ===== VALUES SECTION ===== */}
      <div className="space-y-6 p-4 sm:p-10">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl mx-auto font-bold text-center py-6">Why Businesses Choose Maxetra</h1>
        <p className="text-base text-gray-600 leading-relaxed text-left">
          Maxetra is a performance-focused digital marketing agency helping businesses grow in an increasingly competitive and AI-driven digital landscape. We partner with startups, local businesses, and established brands to build strong online visibility, generate qualified leads, and deliver measurable growth.
        </p>

        <p className="text-base text-gray-600 leading-relaxed text-left">
          Our approach is rooted in strategy, data, and execution. Instead of generic solutions, we design customized digital marketing strategies aligned with your business goals, industry, and target audience. From SEO and local SEO to performance marketing, content, and conversion optimization, every solution we deliver is built for long-term impact.
        </p>

        <p className="text-base text-gray-600 leading-relaxed text-left">
          Search behavior is evolving rapidly with the rise of AI-powered platforms, and visibility today requires more than traditional tactics. Maxetra helps brands stay ahead by optimizing their digital presence for both search engines and modern AI-driven discovery. We focus on relevance, authority, and performance to ensure consistent results across channels.
        </p>

        <p className="text-base text-gray-600 leading-relaxed text-left">
          Transparency and measurable outcomes guide everything we do. Through continuous optimization, clear reporting, and data-driven insights, Maxetra turns digital marketing into a reliable growth engine for your business.
        </p>
      </div>
      <div className="bg-white py-15 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <p className=" font-semibold tracking-widest text-sm mb-2">
            OUR AGENCY’S VALUES
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center justify-center gap-2">
            What We Stand For <FaRocket className="text-orange-500" />
          </h2>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-4 text-left">
            {/* Card 1 */}
            <div className="border-2 border-[#001e37] rounded-2xl py-8 px-4 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-3">
                We Go Beyond Expectations
              </h3>
              <p className="text-gray-600 leading-relaxed">
                At Maxetra, we don’t stop at “good enough.” Every strategy, campaign, and execution is designed with precision, creativity, and attention to detail to deliver digital work that truly stands out and drives measurable growth.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border-2 border-[#001e37] rounded-2xl p-8 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-3">
                Time Matters. Results Matter More.

              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our team follows agile workflows and data-driven execution to ensure timely delivery without cutting corners. From strategy to launch, we move efficiently while keeping performance, accuracy, and business impact at the core.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border-2 border-[#001e37] rounded-2xl p-8 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-3">
                Marketing Should Feel Human

              </h3>
              <p className="text-gray-600 leading-relaxed">
                Digital marketing doesn’t have to be boring or overwhelming. We focus on clear communication, smooth collaboration, and enjoyable partnerships—so working with Maxetra feels simple, transparent, and worth repeating.
              </p>
            </div>
          </div>

        </div>
      </div>
      <Location />
    </section>
  );
};

export default About;
