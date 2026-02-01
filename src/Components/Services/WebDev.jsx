import Consultation from "../Consultation";
import Proposal2 from "../Proposal2";
import Rating from "../Rating";
import Shoot from "./Shoot";

import comp from "../../assets/SVG FOR Ad/WEBD/Compliance.png";
import code from "../../assets/SVG FOR Ad/WEBD/Custom_code.png";
import ecom from "../../assets/SVG FOR Ad/WEBD/ecom_dev.png";
import landing from "../../assets/SVG FOR Ad/WEBD/Landing_page.png";
import uiux from "../../assets/SVG FOR Ad/WEBD/Mobile-UXUI.png";
import location from "../../assets/SVG FOR Ad/WEBD/Multi-Location.png";
import web_seo from "../../assets/SVG FOR Ad/WEBD/Web_seo.png";
import wordpress from "../../assets/SVG FOR Ad/WEBD/WordPress.png";
import shopify from "../../assets/SVG FOR Ad/seo_card/Shopify.png";

import { Link } from "react-router-dom";
import man from '../../assets/SVG FOR Ad/General/Man_img.png'

import { FaHome, FaChevronRight, FaArrowRight } from "react-icons/fa";
import Clutch from '../../assets/SVG FOR Ad/General/Clutch.png';
import ServiceCards from "../ServiceCards";
import FAQ from "../FAQ";
import phone1 from '../../assets/SVG FOR Ad/Desk/E-com_con.png';
import phone2 from '../../assets/SVG FOR Ad/Mobile/E-com_conm.png'


const services = {
  
  heading: "Web Development That Powers Business Growth ",
  subText:
    "Maxetra creates high-performance websites that attract users, improve engagement, and convert traffic into measurable results.",

  items: [

    {
      title: "WordPress",
      description: "We build secure, scalable WordPress websites that are easy to manage and optimized for performance. Custom themes, plugins, and clean architecture ensure flexibility, speed, and  growth. ",
      icon: wordpress,
    },
    {
      title: "Shopify",
      description: "We create high-converting Shopify stores designed to sell. From custom themes to app integrations and checkout optimization, our Shopify builds focus on speed, UX, and revenue.",
      icon: shopify,
    },
    {
      title: "Custom Coded",
      description: "For advanced requirements, we develop fully custom-coded websites with clean, efficient code. These solutions offer maximum control, performance, and scalability for complex projects. ",
      icon: code,
    },
    {
      title: "Website Speed Optimization",
      description: "We optimize load times to improve user experience and conversions. Faster websites reduce bounce rates, rank better on search engines, and perform stronger across devices.",
      icon: web_seo,
    },
    {
      title: "ADA Compliance",
      description: "We build and optimize websites to meet ADA accessibility standards. Accessible websites improve usability, reduce legal risk, and reach a wider audience.",
      icon: comp,
    },
    {
      title: "Mobile-First UX/UI Design",
      description: "We design websites with a mobile-first approach to ensure seamless experiences on all devices. Intuitive UX and clean UI help increase engagement and conversions.",
      icon: uiux,
    },
    {
      title: "Landing Page Design",
      description: "We design high-converting landing pages focused on lead generation and sales. Clear messaging, strong CTAs, and optimized layouts drive action.",
      icon: landing,
      iconBg: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Ecommerce Development",
      description: "We build secure, scalable eCommerce platforms designed for growth. Smooth navigation, fast checkout, and performance optimization help increase sales.",
      icon: ecom,
    },
    {
      title: "Multi-Location Website Systems",
      description: "We develop websites for businesses with multiple locations. Structured location pages improve local SEO, usability, and scalable content management.",
      icon: location,
    },
  ]
}

const faqs = [ 
  {
    question: "What types of websites do you develop?",
    answer:
      "We develop WordPress, Shopify, custom-coded, eCommerce, landing pages, and multi-location websites. Each project is tailored to business goals, performance and scalability.",
  },
  {
    question:
      "Do you build SEO-friendly websites? ",
    answer:
      "Absolutely. Our web development process includes clean code, proper structure, and SEO best practices to support long-term organic visibility. ",
  },
  {
    question:
      "Can you redesign or optimize an existing website? ",
    answer:
      "Yes. We can redesign, optimize, or upgrade existing websites to improve speed, usability, conversions, and overall performance.",
  },
  {
    question:
      "Do you provide ongoing website maintenance and support? ",
    answer:
      "Yes. We offer website maintenance, security updates, and performance monitoring to keep your site running smoothly and securely.",
  },
  {
    question:
      "Are your websites mobile-friendly and fast?",
    answer:
      "Yes. All our websites follow a mobile-first design approach and are optimized for speed. This ensures better user experience, engagement, and search engine rankings.",
  },
];

export default function ECOM() {

  return (
    <>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* LEFT CONTENT */}
            <div>

              {/* Heading */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
                Services That Build <span className="text-orange-500">Fast, Secure & Scalable </span> Websites
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
          Web Development Solutions Built for Performance & Growth Services
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Our web development solutions are designed to help businesses build fast, secure, and
              scalable websites that support long-term growth. We focus on performance-driven development
              that improves user experience, engagement, and conversions.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              From clean code and responsive
              layouts to SEO-friendly structure and strong security, every website is built to perform across
              devices and platforms. We analyze business goals, user behavior, and technical requirements
              to deliver custom solutions that align with your brand and audience.

            </p>

            <p className="text-gray-600 leading-relaxed">
              By optimizing speed,
              usability, and functionality, we ensure your website loads faster, ranks better, and converts more
              visitors. These web development solutions provide a strong digital foundation that supports
              marketing efforts, improves credibility, and helps businesses grow with confidence.
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
