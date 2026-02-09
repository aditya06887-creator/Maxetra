import Consultation from "../Consultation";
import Proposal2 from "../Proposal2";
import Rating from "../Rating";

import long from "../../assets/SVG FOR Ad/Content/Long-Form.png";
import visible from "../../assets/SVG FOR Ad/Content/Online_visibility.png";
import ecom from "../../assets/SVG FOR Ad/Content/eCom_content.png";
import gap from "../../assets/SVG FOR Ad/Content/gap_content.png";
import calender from "../../assets/SVG FOR Ad/Content/Calendar.png";
import trust from "../../assets/SVG FOR Ad/Content/Trust.png";
import blog from "../../assets/SVG FOR Ad/Content/blog.png";
import ads from "../../assets/SVG FOR Ad/Content/Ad_copy.png";
import lead from "../../assets/SVG FOR Ad/Content/Lead.png";
import { Link } from "react-router-dom";
import man from '../../assets/SVG FOR Ad/General/Content_Marketing_Home.png'
import home2 from '../../assets/SVG FOR Ad/General/Content_Marketing_Home_2.png'

import { FaHome, FaChevronRight, FaArrowRight } from "react-icons/fa";
import Clutch from '../../assets/SVG FOR Ad/General/Clutch.png';
import ServiceCards from "../ServiceCards";
import FAQ from "../FAQ";
import phone1 from '../../assets/SVG FOR Ad/Desk/content_con.png';
import phone2 from '../../assets/SVG FOR Ad/Mobile/Content_conm.png'


const services = {
  heading: "Fuel Your Growth with High-Impact, Search-Optimized Content",
  subText:
    "Our content marketing solutions bridge the gap between your brand and your audience through strategic storytelling and data-backed SEO. We create high-value assets that drive organic traffic while establishing your business as a trusted industry authority.",

  items: [

    {
      title: "Blog Strategy & SEO Content Creation",
      description: "We develop data-driven blogging strategies that target high-intent keywords. Our team crafts high-quality, relevant articles designed to educate your audience while steadily improving your organic search rankings.",
      icon: blog,
    },
    {
      title: "Long-Form & Pillar Page",
      description: "Establish your brand as an industry authority with comprehensive pillar pages. We create in-depth, long-form content that covers topics exhaustively, helping you dominate search results for broad, high-volume terms.",
      icon: long,
    },
    {
      title: "Content Gap Analysis",
      description: "Discover what your competitors are ranking for that you aren’t. Our analysis identifies missing opportunities in your content library, providing a roadmap to capture more traffic and answer unanswered user queries.",
      icon: gap,
    },
    {
      title: "Whitepapers, Ebooks & Lead Magnets",
      description: "Turn visitors into leads with premium gated content. From whitepapers to detailed ebooks, we produce high-value resources that showcase your expertise and encourage users to share their contact information.",
      icon: lead,
    },
    {
      title: "Content Calendar Management",
      description: "Consistency is key to SEO success. We handle the heavy lifting of planning, scheduling, and publishing, ensuring your website remains fresh with a steady stream of optimized content that keeps users coming back.",
      icon: calender,
    },
    {
      title: "Improve  Online Visibility",
      description: "Elevate your digital presence across all platforms. By aligning your brand voice with SEO best practices, we ensure your message reaches the right audience at the right time, increasing overall brand awareness.",
      icon: visible,
    },
    {
      title: "Build Trust and Credibility",
      description: "Position your business as a thought leader. Through fact-based reporting and professional storytelling, we help you build a library of content that establishes deep trust with your customers and search engines alike.",
      icon: trust,
    },
    {
      title: "Ad Copywriting ",
      description: "Maximize your ROI on paid channels with compelling, high-conversion copy. We craft punchy, persuasive headlines and descriptions for PPC and social ads that drive clicks and lower your acquisition costs.",
      icon: ads,
    },
    {
      title: "eCommerce Content Creation",
      description: "Drive more sales with optimized product descriptions and category pages. We focus on highlight features, benefits, and technical specs to improve user experience and help your products stand out in a crowded market.",
      icon: ecom,
    },
  ]
}

const faqs = [
  {
    question: "What type of content do you create?",
    answer:
      "We create SEO-optimized website content, blogs, service pages, landing pages, local content, product descriptions, and social media copy. All content is written to rank, engage, and convert.",
  },
  {
    question:
      "Is your content optimized for SEO?",
    answer:
      "Yes. Every piece of content is written with keyword research, search intent, and on-page SEO best practices. This helps improve rankings, organic traffic, and long-term visibility.",
  },
  {
    question:
      "Can content creation help generate leads and sales?",
    answer:
      "Absolutely. Our content is designed to attract the right audience and guide them toward action. Strong messaging and structure help turn visitors into leads and customers.",
  },
  {
    question:
      "Do you optimize existing website content?",
    answer:
      "Yes. We audit and optimize existing content to improve rankings, readability, and conversions. This includes keyword optimization, content restructuring, and performance improvements.",
  },
  {
    question:
      "How long does it take to see results from content creation?",
    answer:
      "SEO content typically shows results within a few weeks to a few months, depending on competition. High-quality, consistent content delivers long-term traffic and growth.",
  },
];

export default function LoSEO() {

  return (
    <>
      <section className="bg-[#001e37] text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* LEFT CONTENT */}
            <div>

              {/* Heading */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                Content Creation Services That Drive <span className="text-orange-500">Traffic, Leads & Sales  </span>
              </h1>

              {/* CTA */}
              <div className="mt-8">
                <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition cursor-pointer">
                  Schedule a Meeting
                  <FaArrowRight />
                </button>
              </div>

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
            <div className="flex justify-center lg:justify-end">
              <img
                src={man}
                className="max-w-xs md:max-w-sm lg:max-w-md"
              />
            </div>

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
            <Link to="/digital-marketing-services/content" className="flex items-center gap-1 hover:text-orange-500 transition-colors">
            Content Marketing
            </Link>
          </li>

        </ol>
      </div>
    
      <section className="bg-white py-10 px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#001e37] mb-6">
          Strategic Content Creation <span>Content Creation</span> for Long-Term Results
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Maxetra provides high-impact content creation services built to drive traffic, generate qualified leads, and increase sales. We don’t create content just to look good — we create content that ranks on search engines and turns visitors into paying customers. Every piece is crafted with a clear focus on SEO, user intent, and conversion performance.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Our team develops website content, service pages, blogs, and landing pages designed to dominate search results. By combining keyword intelligence, competitive research, and persuasive messaging, Maxetra ensures your content attracts the right audience and keeps them engaged.

            </p>

            <p className="text-gray-600 leading-relaxed">
              With a results-driven approach, Maxetra helps businesses build authority, boost organic visibility, and convert attention into revenue. Our content works 24/7 to support long-term growth and measurable success.
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
      <FAQ faqs={ faqs }/>
      <Consultation />
      <Proposal2 phone1={phone1} phone2={phone2} />
    </>
  )
}
