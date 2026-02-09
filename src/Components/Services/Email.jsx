import Consultation from "../Consultation";
import Proposal2 from "../Proposal2";
import Rating from "../Rating";
import Shoot from "./Shoot";

import personal from "../../assets/SVG FOR Ad/Email/Personalization.png";
import franch from "../../assets/SVG FOR Ad/Email/Franchise.png";
import market from "../../assets/SVG FOR Ad/Email/Email_marketing.png";
import drip from "../../assets/SVG FOR Ad/Email/Drip.png";
import audit from "../../assets/SVG FOR Ad/Email/Audits.png";
import can from "../../assets/SVG FOR Ad/Email/CAN.png";
import cold from "../../assets/SVG FOR Ad/Email/Cold.png";
import news from "../../assets/SVG FOR Ad/Email/Newsletter.png";
import ab from "../../assets/SVG FOR Ad/Performance/AB Testing.png";

import { Link } from "react-router-dom";
import man from '../../assets/SVG FOR Ad/General/Email_Marketing_Home.png'
import home2 from '../../assets/SVG FOR Ad/General/Email_Marketing_Home_2.png'

import { FaHome, FaChevronRight, FaArrowRight } from "react-icons/fa";
import Clutch from '../../assets/SVG FOR Ad/General/Clutch.png';
import ServiceCards from "../ServiceCards";
import FAQ from "../FAQ";
import phone1 from '../../assets/SVG FOR Ad/Desk/Email_con.png';
import phone2 from '../../assets/SVG FOR Ad/Mobile/Email_conm.png'


const services = {
  heading: "Email & SMS Marketing That Drives Sales & Retention",
  subText:
    "Maxetra delivers performance-focused messaging strategies that turn conversations into leads, sales, and repeat customers. ",

  items: [

    {
      title: "Email Marketing Strategy",
      description: "We build data-driven email marketing strategies aligned with your business goals. Every campaign is planned to improve engagement, conversions, and long-term customer value. ",
      icon: market,
    },
    {
      title: "Drip Campaign Setup",
      description: "We design automated drip campaigns that nurture leads step by step. Timed messaging helps move subscribers closer to conversion without manual effort. ",
      icon: drip,
    },
    {
      title: "Newsletter Design & Deployment",
      description: "We create visually appealing newsletters that keep your audience informed and engaged.Consistent newsletters strengthen brand loyalty and retention. ",
      icon: news,
    },
    {
      title: "Deliverability Audits",
      description: "We audit email deliverability to improve inbox placement and sender reputation. Better deliverability means higher open rates and campaign success. ",
      icon: audit,
    },
    {
      title: "Personalization Strategy",
      description: "We implement advanced personalization using audience data and behavior. Relevant messaging increases engagement, clicks, and conversions.",
      icon: personal,
    },
    {
      title: "Email A/B Testing",
      description: "We test subject lines, content, and CTAs to find what performs best. Continuous testing helps optimize results and improve ROI.",
      icon: ab,
    },
    {
      title: "Compliance with CAN-SPAM/GDPR",
      description: "We ensure all email campaigns follow CAN-SPAM and GDPR guidelines. Compliance protects your brand and builds subscriber trust. ",
      icon: can,
    },
    {
      title: "Franchise Email Templates",
      description: "We design scalable email templates for franchise and multi-location businesses. Consistent branding ensures uniform communication across locations.",
      icon: franch,
    },
    {
      title: "Cold Email Marketing",
      description: "We create targeted cold email campaigns focused on outreach and lead generation. Strategic messaging improves response rates and qualified leads. ",
      icon: cold,
    },
  ]
}

const faqs = [
  {
    question: "Can you create designs that match my brand identity?",
    answer:
      "Yes. All designs are created to align with your brand colors, typography, and visual style. Consistent branding helps build recognition and trust.",
  },
  {
    question: "Do you design creatives for paid ads and social media?",
    answer:
      "Absolutely. We design conversion-focused creatives for paid ads and social media platforms that improve engagement, clicks, and campaign performance.",
  },
  {
    question: "Are your designs optimized for digital platforms?",
    answer:
      "Yes. Our designs are optimized for websites, mobile devices, email marketing, and social media platforms to ensure clarity and performance everywhere.",
  },
  {
    question: "Do you provide ongoing graphic design support?",
    answer:
      "Yes. We offer ongoing design support for businesses that need regular creatives, updates, and consistent branding across marketing channels.",
  },
];


export default function Email() {

  return (
    <>
      <section className="bg-[#001e37] text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* LEFT CONTENT */}
            <div>

              {/* Heading */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                Results-Driven <span className="text-orange-500">Email & SMS Marketing </span>
                Services by Maxetra
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

          
          <li className="flex items-center">
            <Link to="/digital-marketing-services/email-sms" className="flex items-center gap-1 hover:text-orange-500 transition-colors">
            Email & SMS Marketing 
            </Link>
          </li>

        </ol>
      </div>
      
      <section className="bg-white py-10 px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#001e37] mb-6">
          Turn Messages into Leads, Sales & Repeat Customers
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-gray-600 mb-6 leading-relaxed">

              Email and SMS marketing are powerful tools for building direct relationships with your audience
              and driving measurable results. Our strategies focus on delivering timely, relevant messages
              that encourage action and strengthen customer loyalty.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              We use audience segmentation,
              personalization, and automation to ensure every message reaches the right people at the right
              moment. From promotional campaigns and product launches to reminders and follow-ups, each
              message is designed to increase opens, clicks, and conversions.

            </p>

            <p className="text-gray-600 leading-relaxed">
              By analyzing engagement
              data and optimizing content and timing, we help businesses turn conversations into leads,
              one-time buyers into repeat customers, and messaging into a consistent revenue channel. This
              results-driven approach ensures stronger engagement, higher lifetime value, and sustainable
              business growth.
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
