import Consultation from "../Consultation";
import Proposal2 from "../Proposal2";
import Rating from "../Rating";


import bounce from "../../assets/SVG FOR Ad/CRO/Bounce_rate.png";
import cta from "../../assets/SVG FOR Ad/CRO/CTA_test.png";
import funnel from "../../assets/SVG FOR Ad/CRO/Funnel_drop.png";
import heatmap from "../../assets/SVG FOR Ad/CRO/Heatmaps.png";
import land from "../../assets/SVG FOR Ad/CRO/Landing_page.png";
import load from "../../assets/SVG FOR Ad/CRO/Page_load.png";
import ux from "../../assets/SVG FOR Ad/CRO/UX_Heuristic.png";
import ppv from "../../assets/SVG FOR Ad/CRO/PPV.png";
import lead from "../../assets/SVG FOR Ad/Content/Lead.png";
import { Link } from "react-router-dom";
import man from '../../assets/SVG FOR Ad/General/CRO_Home.png'
import home2 from '../../assets/SVG FOR Ad/General/CRO_Home_2.png'

import { FaHome, FaChevronRight, FaArrowRight } from "react-icons/fa";
import Clutch from '../../assets/SVG FOR Ad/General/Clutch.png';

import ServiceCards from "../ServiceCards";
import FAQ from "../FAQ";
import phone1 from '../../assets/SVG FOR Ad/Desk/CRO_con.png';
import phone2 from '../../assets/SVG FOR Ad/Mobile/CRO_conm.png'


const services = {
  heading: "CRO That Maximizes Revenue",
  subText:
    "Maxetra identifies conversion blockers, fixes funnel leaks, and optimizes every user touchpoint to deliver higher conversions and measurable ROI.",

  items: [

    {
      title: "UX Heuristic Analysis",
      description: "We identify critical UX flaws that silently block users from converting. By fixing usability issues, clarity gaps, and trust barriers, we make it easier for visitors to take action. This results in smoother experiences. ",
      icon: ux,
    },
    {
      title: "Funnel Drop-Off Analysis ",
      description: "We track every step of your funnel to uncover exactly where users drop off. These insights allow us to remove friction points and recover lost leads. The result is more completed actions and higher revenue. ",
      icon: funnel,
    },
    {
      title: "Landing Page Optimization",
      description: "We optimize landing pages to persuade and convert, not just attract traffic. Through improved messaging, layout, and visual hierarchy, we increase form submissions and sales. Every element is designed for performance. ",
      icon: land,
    },
    {
      title: "Lead magnet",
      description: "We improve lead magnets to attract higher-quality prospects. Stronger value propositions and placement increase sign-ups and lead quality. This helps your sales pipeline grow faster.",
      icon: lead,
    },
    {
      title: "Page Load Time",
      description: "Slow pages kill conversions and waste ad spend. We improve load speed to reduce bounce rates and keep users engaged. Faster experiences lead to immediate conversion gains. ",
      icon: load,
    },
    {
      title: "Bounce Rate",
      description: "We analyze why users leave without engaging and fix the causes. Better content flow, relevance, and UX keep visitors on your site longer. This increases trust and conversion  opportunities. ",
      icon: bounce,
    },
    {
      title: "Pages Per Visit",
      description: "We design smarter internal journeys that encourage users to explore more pages. Increased engagement builds confidence and improves conversion potential. More interaction means  better results.",
      icon: ppv,
    },
    {
      title: "Heatmaps & Session Recordings ",
      description: "We study real user behavior using heatmaps and session recordings. This reveals exactly where users hesitate, click, or abandon pages. Decisions are made using data, not assumptions. ",
      icon: heatmap,
    },
    {
      title: "CTA Testing & Button Design Strategy",
      description: "We test CTA copy, colors, placement, and design to drive action. Optimized buttons remove  hesitation and guide users to convert. Small changes create big revenue impact. ",
      icon: cta,
    },
  ]
}

const faqs = [
  {
    question: "What is Conversion Rate Optimization (CRO)?",
    answer:
      "CRO is the process of improving your website to turn more visitors into leads or customers. Maxetra focuses on data-driven testing and optimization to increase conversions without increasing traffic.",
  },
  {
    question: "How does CRO help increase revenue?",
    answer:
      "CRO removes friction points that stop users from converting. By optimizing landing pages, user funnels, and CTAs , Maxetra helps you get more value from your existing traffic and advertising spend.",
  },
  {
    question: "What tools do you use for CRO analysis?",
    answer:
      "We use analytics platforms, heatmaps, session recordings, A/B testing tools, and user behavior tracking to identify conversion blockers and opportunities. ",
  },
  {
    question: "How long does it take to see CRO results?",
    answer:
      "Some improvements deliver quick wins, while larger tests take a few weeks. Continuous optimization leads to consistent and scalable conversion growth. ",
  },
  {
    question: "Is CRO useful for both lead-generation and eCommerce websites? ",
    answer:
      "Yes. Maxetra customizes CRO strategies for lead-gen, SaaS, and eCommerce businesses to improve sign-ups, sales, and engagement. ",
  },
];


export default function CRO() {

  return (
    <>
      <section className="bg-[#001e37] text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* LEFT CONTENT */}
            <div>

              {/* Heading */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                Conversion Rate Optimization Services for<span className="text-orange-500"> Scalable Business </span>
                Growth
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
            <Link to="/digital-marketing-services/cro" className="flex items-center gap-1 hover:text-orange-500 transition-colors">
            Conversion Rate Optimization
            </Link>
          </li>

        </ol>
      </div>
      
      <section className="bg-white py-10 px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#001e37] mb-6">
          Conversion Rate Optimization Solutions Built to Maximize ROI
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Conversion Rate Optimization is about getting more value from the traffic you already have.
              Maxetra’s CRO solutions focus on turning visitors into leads, customers, and revenue through
              data-driven optimization.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              We analyze user behavior, funnel performance, and conversion
              barriers to identify exactly where users drop off and why. Using A/B testing, UX improvements,
              landing page optimization, and conversion-focused messaging, we continuously refine every
              touchpoint of the user journey.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our approach combines analytics, user intent, and proven
              conversion psychology to improve form submissions, sales, and engagement without increasing
              ad spend. With clear testing frameworks and performance tracking, Maxetra ensures every
              optimization decision is measurable and results-driven. The outcome is higher conversion rates,
              lower acquisition costs, and scalable growth built on smarter optimization—not guesswork.
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
