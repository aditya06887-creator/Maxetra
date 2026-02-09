import Consultation from "../Consultation";
import Proposal2 from "../Proposal2";
import Rating from "../Rating";


import script from "../../assets/SVG FOR Ad/Video/Content_script.png";
import media from "../../assets/SVG FOR Ad/Video/Creative_media.png";
import drone from "../../assets/SVG FOR Ad/Video/Drone.png";
import post_prod from "../../assets/SVG FOR Ad/Video/Post_prod.png";
import photo from "../../assets/SVG FOR Ad/Video/Product_photo.png";
import social from "../../assets/SVG FOR Ad/Video/Social_prod.png";
import video_prod from "../../assets/SVG FOR Ad/Video/Video_prod.png";
import test from "../../assets/SVG FOR Ad/Video/Video_test.png";
import graphic from "../../assets/SVG FOR Ad/seo_card/Graphic Designing.png";

import { Link } from "react-router-dom";
import man from '../../assets/SVG FOR Ad/General/Man_img.png'
import home2 from '../../assets/SVG FOR Ad/General/Video_Home_2.png'

import { FaHome, FaChevronRight, FaArrowRight } from "react-icons/fa";
import Clutch from '../../assets/SVG FOR Ad/General/Clutch.png';
import ServiceCards from "../ServiceCards";
import FAQ from "../FAQ";
import phone1 from '../../assets/SVG FOR Ad/Desk/video_con.png';
import phone2 from '../../assets/SVG FOR Ad/Mobile/video_conm.png'


const services = {
  heading: "Maxetra’s Professional Video Production for Modern Brands ",
  subText:
    "Create high-impact videos that capture attention, communicate your brand story, and drive real engagement across digital platforms. ",

  items: [

    {
      title: "Creative Media Production",
      description: "We create impactful creative media that strengthens brand identity and visual storytelling. Our production process focuses on clarity, creativity, and consistency across all digital platforms. ",
      icon: media,
    },
    {
      title: "Video Production",
      description: "We produce high-quality videos from concept development to final delivery. Our team handles planning, filming, and editing to create videos that capture attention and communicate value. ",
      icon: video_prod,
    },
    {
      title: "Video Testimonial Services",
      description: "We create authentic customer testimonial videos that build trust and credibility. Real customer stories help influence buying decisions and strengthen brand reputation. These videos are  powerful tools for conversions. ",
      icon: test,
    },
    {
      title: "Product Photography",
      description: "We capture professional product images that highlight features, quality, and details. High-quality photography improves visual appeal and builds customer confidence. Our images are optimized for websites, ads, and eCommerce platforms.",
      icon: photo,
    },
    {
      title: "Drone Video",
      description: "We produce cinematic drone videos that add scale, motion, and visual impact. Aerial footage enhances storytelling and delivers a premium brand experience. Perfect for real estate, events, and promotional content. ",
      icon: drone,
    },
    {
      title: "Content Scriptwriting",
      description: "We write clear, engaging scripts that communicate your message effectively. Strong storytelling ensures viewers stay engaged from start to finish. Our scripts are tailored to your brand voice and goals. ",
      icon: script,
    },
    {
      title: "Social Media Production",
      description: "We create social media content designed to stop the scroll and boost engagement. Each piece is optimized for platform formats and audience behavior. Consistent production helps build visibility and brand awareness. ",
      icon: social,
    },
    {
      title: "Graphic Design and Animation",
      description: "We design creative visuals and animations that bring ideas to life. Motion graphics enhance storytelling and improve brand recall. Our designs support marketing, advertising, and digital campaigns. ",
      icon: graphic,
    },
    {
      title: "Post-Production Services",
      description: "We handle professional editing, color grading, sound design, and final polishing. High-quality post-production ensures your content looks polished and ready to publish. Attention to detail delivers a flawless final result. ",
      icon: post_prod,
    },
  ]
}


const faqs = [
  {
    question: "What types of video production services do you offer?",
    answer:
      "We offer end-to-end video production including brand videos, promotional videos, testimonials, social media videos, drone footage, and post-production services tailored to business goals.",
  },
  {
    question: "Do you handle the entire video production process?",
    answer:
      "Yes. We manage everything from concept development and scriptwriting to filming, editing, and final delivery, ensuring a smooth and professional production experience.",
  },
  {
    question: "Can videos be optimized for social media and ads?",
    answer:
      "Absolutely. We create videos optimized for different platforms, formats, and ad requirements to maximize engagement, reach, and performance.  ",
  },
  {
    question: "How long does it take to complete a video project?",
    answer:
      "Timelines depend on project scope and complexity. Most video projects are completed within a few weeks, with clear milestones and approvals at every stage. ",
  },
];

export default function Video() {

  return (
    <>
      <section className="bg-[#001e37] text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* grid grid-cols-1 lg:grid-cols-2 */}
          <div className=" gap-10 items-center">

            {/* LEFT CONTENT */}
            <div>

              {/* Heading */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-center py-12">
                Results-Driven <span className="text-orange-500">Video Production </span>
                Services by Maxetra
              </h1>

              {/* CTA */}
              {/* <div className="mt-8">
                <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition cursor-pointer">
                  Schedule a Meeting
                  <FaArrowRight />
                </button>
              </div> */}

              {/* Rating Card */}
              <div className="mt-10 ">
                <div className="
    inline-flex items-center gap-3
    bg-white shadow-md rounded-lg
    px-3 py-2
    sm:gap-4 sm:px-4 sm:py-3
    hover:shadow-inner hover:shadow-gray-400
    w-full max-w-xs sm:w-auto
  ">

                  {/* Rating */}
                  <div className="text-base sm:text-lg font-semibold text-gray-900 whitespace-nowrap">
                    4.9<span className="text-xs sm:text-sm">/5</span>
                  </div>

                  {/* Stars + Reviews */}
                  <div className="min-w-0">
                    <div className="flex text-yellow-400 text-xs sm:text-sm leading-none">
                      ★ ★ ★ ★ ★
                    </div>
                    <p className="text-[8px] sm:text-xs text-gray-500 truncate">
                      20+ Client Reviews
                    </p>
                  </div>

                  {/* Logo */}
                  <img
                    src={Clutch}
                    alt="Clutch"
                    className="w-20 sm:w-28 h-auto object-contain shrink-0"
                  />
                </div>
              </div>

            </div>

            {/* RIGHT ILLUSTRATION */}
            {/* <div className="flex justify-center lg:justify-end">
              <img
                src={man}
                className="max-w-xs md:max-w-sm lg:max-w-md"
              />
            </div> */}

          </div>
        </div>
      </section>

      <div className="flex py-4 px-10 text-sm bg-[#001e37]  max-w-7xl mx-auto w-full">
        <ol className="flex items-center space-x-2 md:space-x-4 text-white">

          {/* Step 1: Home */}
          <li className="flex items-center">
            <Link to="/" className="flex items-center gap-1 hover:text-orange-500 transition-colors">
              <FaHome className="text-base" />
            </Link>
          </li>



          {/* Separator */}
          <FaChevronRight className="text-[10px] text-gray-400" />

          <li className="flex items-center">
            <Link to="/digital-marketing-services" className="flex items-center gap-1 hover:text-orange-500 transition-colors">
              Digital Marketing
            </Link>
          </li>
          <FaChevronRight className="text-[10px] text-gray-400" />

          {/* Step 3: Current Page (e.g., Digital Marketing) */}
          <li className="flex items-center">
            <Link to="/digital-marketing-services/video-prod" className="flex items-center gap-1 hover:text-orange-500 transition-colors">
              Video Production
            </Link>
          </li>

        </ol>
      </div>

      <section className="bg-white py-10 px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#001e37] mb-6">
          Video Production Solutions Built to Tell Your Brand Story
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Video is one of the most powerful tools for capturing attention, building trust, and driving action.
              Maxetra’s video production solutions are designed to tell your brand story in a way that connects
              emotionally and converts viewers into customers.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              From concept and scripting to filming, editing,
              and final delivery, we create high-quality videos that align with your marketing goals. Our videos
              are built to perform across websites, social media, ads, and landing pages, ensuring maximum
              reach and impact.
            </p>

            <p className="text-gray-600 leading-relaxed">
              By combining creative storytelling, professional visuals, and strategic
              messaging, Maxetra helps brands increase engagement, improve conversions, and stand out in
              competitive markets. Whether you need promotional videos, brand storytelling, or
              performance-driven video content, our approach focuses on results—not just visuals.
            </p>
          </div>

          {/* RIGHT VISUAL SECTION */}
          <div className="relative flex justify-center items-center">
            <img
              src={home2}
              alt="DevOps Rocket"
              className="max-w-xs md:max-w-sm lg:max-w-md"
            />
          </div>

        </div>
      </section>

      <Rating />

      <ServiceCards service={services} />
      <FAQ faqs={faqs} />
      <Consultation />
      <Proposal2 phone1={phone1} phone2={phone2} />
    </>
  )
}
