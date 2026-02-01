import Consultation from "../Consultation";
import Proposal2 from "../Proposal2";
import Rating from "../Rating";
import Shoot from "./Shoot";

import brand from "../../assets/SVG FOR Ad/Graphic/Brand.png";
import edit from "../../assets/SVG FOR Ad/Graphic/Edit_&_Prod.png";
import email from "../../assets/SVG FOR Ad/Graphic/Email.png";
import info from "../../assets/SVG FOR Ad/Graphic/Infographics.png";
import landing from "../../assets/SVG FOR Ad/Graphic/Landing.png";
import paid from "../../assets/SVG FOR Ad/Graphic/Paid_Ad.png";
import social from "../../assets/SVG FOR Ad/Graphic/Social_Graphics.png";
import whatsapp from "../../assets/SVG FOR Ad/Graphic/WhatsApp.png";
import shopify from "../../assets/SVG FOR Ad/seo_card/Shopify.png";

import { Link } from "react-router-dom";
import man from '../../assets/SVG FOR Ad/General/Man_img.png'

import { FaHome, FaChevronRight, FaArrowRight } from "react-icons/fa";
import Clutch from '../../assets/SVG FOR Ad/General/Clutch.png';
import ServiceCards from "../ServiceCards";
import FAQ from "../FAQ";
import phone1 from '../../assets/SVG FOR Ad/Desk/graphic_con.png';
import phone2 from '../../assets/SVG FOR Ad/Mobile/graphic_conm.png'


const services = {
  heading: "Graphic Design That Builds Strong Brands",
  subText:
    "Maxetra delivers high-impact designs that improve brand recognition, engagement, and marketing performance. ",

  items: [

    {
      title: "Paid Ad Creative",
      description: "We design high-impact ad creatives optimized for clicks and conversions. Visually strong ads help improve engagement and ad performance across platforms.",
      icon: paid,
    },
    {
      title: "Social Media Graphics",
      description: "We create eye-catching social media graphics tailored to each platform. Consistent visuals strengthen brand identity and boost audience engagement. ",
      icon: social,
    },
    {
      title: "Landing Page Layouts Graphic",
      description: "We design conversion-focused landing page layouts that guide users toward action. Clear structure and visual hierarchy improve lead generation. ",
      icon: landing,
    },
    {
      title: "Brand Identity & Style Guide",
      description: "We develop complete brand identity systems including colors, typography, and visual guidelines.Consistent branding builds trust and recognition.",
      icon: brand,
    },
    {
      title: "Email Template Design",
      description: "We design professional email templates that improve readability and click-through rates.Branded layouts help emails look polished and effective. ",
      icon: email,
    },
    {
      title: "Infographics Creative Direction",
      description: "We create visually engaging infographics that simplify complex information. Strong visuals make content easier to understand and more shareable. ",
      icon: info,
      iconBg: "bg-green-100 text-green-600",
    },
    // {
    //   title: "",
    //   description: "Create visually compelling designs that strengthen your brand identity and communication. We design high-quality graphics for digital marketing and social media that align with your brand voice. Our focus is on clarity, consistency, and impactful visuals that support engagement and business growth.",
    //   icon: landing,
    //   iconBg: "bg-yellow-100 text-yellow-600",
    // },
    {
      title: "Editing & Production",
      description: "We handle creative editing and production to refine design quality. Polished visuals ensure consistency across all marketing materials. ",
      icon: edit,
    },
    {
      title: "WhatsApp Marketing Templet",
      description: "We design WhatsApp-ready templates for promotions and updates. Clean, branded templates help improve message clarity and response rates.",
      icon: whatsapp,
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


export default function Graphic() {

  return (
    <>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* LEFT CONTENT */}
            <div>

              {/* Heading */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
                Graphic Designing Services That Build Strong <span className="text-orange-500">Brands & Visual </span>
                Impact
              </h1>

              {/* CTA */}
              <div className="mt-8">
                <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition cursor-pointer">
                  Schedule a Meeting
                  <FaArrowRight />
                </button>
              </div>

              {/* Rating Card */}
              <div className="mt-10 inline-flex items-center gap-4 bg-white shadow-md rounded-lg px-4 py-3 hover:shadow-inner hover:shadow-gray-400">
                <div className="text-lg font-semibold text-gray-900">
                  4.9<span className="text-sm">/5</span>
                </div>

                <div>
                  <div className="flex text-yellow-400 text-sm">
                    ★ ★ ★ ★ ★
                  </div>
                  <p className="text-xs text-gray-500">
                    20 client verified reviews
                  </p>
                </div>

                <img src={Clutch} alt="" className="text-gray-700 font-semibold text-sm w-30 h-10" />
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


      <div className="flex py-4 px-10 text-sm bg-gray-100 mb-4 max-w-7xl mx-auto w-full">
        <ol className="flex items-center space-x-2 md:space-x-4">

          {/* Step 1: Home */}
          <li className="flex items-center">
            <Link to="/" className="flex items-center gap-1 hover:text-orange-500 transition-colors">
              <FaHome className="text-base" />
            </Link>
          </li>



          {/* Separator */}
          <FaChevronRight className="text-[10px] text-gray-400" />

          {/* Step 3: Current Page (e.g., Digital Marketing) */}
          <li className="flex items-center">
            <span className="text-[#001e37] cursor-pointer hover:text-orange-500 font-semibold">
              Digital Marketing
            </span>
          </li>

        </ol>
      </div>
      <Rating />
      <section className="bg-white py-10 px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#001e37] mb-6">
          Graphic Design Solutions Built for Branding & Growth
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Our graphic design solutions are created to help brands communicate clearly, stand out visually,
              and grow with confidence. We focus on building strong brand identity through consistent,
              creative, and purposeful design that connects with your target audience.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              From logos and brand
              visuals to marketing creatives and digital assets, every design is crafted to support branding and
              marketing goals. We combine creativity with strategy to ensure designs are not only attractive
              but also effective across platforms.
            </p>

            <p className="text-gray-600 leading-relaxed">
              By maintaining visual consistency and high-quality design
              standards, we help businesses improve brand recognition, engagement, and trust. These
              graphic design solutions play a key role in strengthening brand presence, enhancing marketing
              performance, and supporting long-term business growth.
            </p>
          </div>

          {/* RIGHT VISUAL SECTION */}
          <div className="relative flex justify-center items-center">
            <img
              src={man}
              alt="DevOps Rocket"
              className="max-w-xs md:max-w-sm lg:max-w-md"
            />
          </div>

        </div>
      </section>
      <ServiceCards service={services} />
      <FAQ faqs={faqs} />
      <Consultation />
      <Proposal2 phone1={phone1} phone2={phone2} />
    </>
  )
}
