import Consultation from "../Consultation";
import Proposal2 from "../Proposal2";
import Rating from "../Rating";
import Shoot from "./Shoot";

import social from "../../assets/SVG FOR Ad/ECOM/Social_marketing.png";
import market from "../../assets/SVG FOR Ad/ECOM/Amazon_Marketing.png";
import seo from "../../assets/SVG FOR Ad/ECOM/Amazon_Seo.png";
import ppc from "../../assets/SVG FOR Ad/ECOM/eCom_PPC.png";
import uiux from "../../assets/SVG FOR Ad/WEBD/Mobile-UXUI.png";
// import comp from "../../assets/SVG FOR Ad/WEBD/Multi-Location.png";
import web_seo from "../../assets/SVG FOR Ad/WEBD/Web_seo.png";
import shopify from "../../assets/SVG FOR Ad/seo_card/Shopify.png";

import { Link } from "react-router-dom";
import man from '../../assets/SVG FOR Ad/General/E_Commerce_Home.png'
import home2 from '../../assets/SVG FOR Ad/General/E_Commerce_Home_2.png'

import { FaHome, FaChevronRight, FaArrowRight } from "react-icons/fa";
import Clutch from '../../assets/SVG FOR Ad/General/Clutch.png';
import ServiceCards from "../ServiceCards";
import FAQ from "../FAQ";
import phone1 from '../../assets/SVG FOR Ad/Desk/Web_con.png';
import phone2 from '../../assets/SVG FOR Ad/Mobile/Web_conm.png'


const services = {
  heading: "Maxetra’s eCommerce Development Services",
  subText:
    "Build high-performing online stores designed to convert visitors into customers and scale revenue with speed, security, and seamless user experience.",

  items: [

    {
      title: "eCommerce SEO",
      description: "We optimize your online store to rank higher on search engines and attract high-intent buyers.From product pages to technical SEO, we drive consistent organic sales. ",
      icon: seo,
    },
    {
      title: "eCommerce Content Marketing",
      description: "We create product-focused content that educates, ranks, and converts. Strategic content builds trust, improves visibility, and supports long-term growth. ",
      icon: ppc,
    },
    {
      title: "eCommerce Web Design",
      description: "We design conversion-focused eCommerce websites that are fast, intuitive, and mobile-friendly.Better design improves user experience and checkout completion. ",
      icon: web_seo,
    },
    {
      title: "Shopify SEO",
      description: "We optimize Shopify stores to improve rankings, traffic, and sales. From collections to product SEO, we ensure your store is search-engine ready.",
      icon: shopify,
    },
    {
      title: "Shopify Web Design",
      description: "We design high-converting Shopify stores built for speed and usability. Clean layouts and optimized UX help turn visitors into customers. ",
      icon: uiux,
    },
    {
      title: "Amazon Marketing",
      description: "We manage full-funnel Amazon marketing to increase product visibility and sales. From ads to listing optimization, we help brands grow on Amazon. ",
      icon: market,
    },
    {
      title: "Social Media Marketing",
      description: "We promote your eCommerce brand across social platforms to drive traffic and engagement.Strategic content and ads support awareness and conversions. ",
      icon: social,
    },
    {
      title: "eCommerce PPC",
      description: "We run performance-driven paid campaigns focused on ROAS and conversions. Smart targeting and optimization help scale sales without wasted ad spend.",
      icon: ppc,
    },
    {
      title: "Amazon Seo",
      description: "We optimize Amazon listings with keyword research and conversion-focused content. Better rankings lead to higher visibility, clicks, and sales. ",
      icon: seo,
    },
  ]
}

const faqs = [
  {
    question: "What eCommerce platforms do you work with?",
    answer:
      "We work with Shopify, WooCommerce, custom eCommerce platforms, and Amazon. Our solutions are tailored to your business goals, products, and target audience.",
  }, 
  {
    question: "Can you help increase sales and conversions for my online store?",
    answer:
      "Yes. We focus on performance, UX, SEO, and paid marketing to improve traffic quality, reduce cart abandonment, and increase completed purchases.",
  },
  {
    question: "Do you provide both marketing and development for eCommerce?",
    answer:
      "Absolutely. We offer complete eCommerce solutions including web design, development, SEO, PPC, content marketing, and social media promotion.",
  },
  {
    question: "Is eCommerce SEO important for long-term growth?",
    answer:
      "Yes. eCommerce SEO helps your store rank higher, attract organic buyers, and generate consistent sales without relying only on ads.",
  },
  {
    question: "Do you support Amazon marketing and Amazon SEO?",
    answer:
      "Yes. We optimize Amazon listings, manage ads, and improve rankings to help products gain more visibility and sales on Amazon.",
  },
];


export default function WebDev() {

  return (
    <>
      <section className="bg-[#001e37] text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* LEFT CONTENT */}
            <div>

              {/* Heading */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                Professional <span className="text-orange-500">eCommerce Development </span>
                for Scalable Online Stores
              </h1>

              {/* CTA */}
              <div className="mt-8">
                <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition cursor-pointer">
                  Schedule a Meeting
                  <FaArrowRight />
                </button>
              </div>

              {/* Rating Card */}
              <div className="mt-10 px-4">
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
            <Link to="/digital-marketing-services/e-commerce" className="flex items-center gap-1 hover:text-orange-500 transition-colors">
            E - Commerce Marketing
            </Link>
          </li>

        </ol>
      </div>
      
      <section className="bg-white py-10 px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#001e37] mb-6">
          eCommerce Solutions Built for Performance & Conversions
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our eCommerce solutions are designed to help online businesses sell more through speed,
              usability, and conversion-focused design. We build high-performance stores that load fast, work
              seamlessly across devices, and provide smooth shopping experiences from product discovery
              to checkout.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Every store is developed with clean architecture, secure payment integration, and
              SEO-friendly structure to support long-term growth. We focus on optimizing product pages,
              navigation, and checkout flows to reduce cart abandonment and increase completed purchases.

            </p>

            <p className="text-gray-600 leading-relaxed">
              By combining smart UX, strong visuals, and performance optimization, our eCommerce
              solutions turn visitors into customers and browsers into buyers. The result is an online store that
              delivers higher engagement, better conversions, and scalable revenue growth.
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
