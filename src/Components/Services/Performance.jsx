import Consultation from "../Consultation";
import Proposal2 from "../Proposal2";
import Rating from "../Rating";
import Shoot from "./Shoot";

import ab from "../../assets/SVG FOR Ad/Performance/AB Testing.png";
import display from "../../assets/SVG FOR Ad/Performance/Display_Ad.png";
import meta from "../../assets/SVG FOR Ad/Performance/Meta.png";
import social from "../../assets/SVG FOR Ad/Performance/Paid_social.png";
import remark from "../../assets/SVG FOR Ad/Performance/Remark.png";
import tiktok from "../../assets/SVG FOR Ad/Performance/TikTok_Ads.png";
import twitter from "../../assets/SVG FOR Ad/Performance/Twitter_Ads.png";
import yt from "../../assets/SVG FOR Ad/Performance/Yt.png";
import g_ads from "../../assets/SVG FOR Ad/local/Google_ads.png";
import { Link } from "react-router-dom";
import man from '../../assets/SVG FOR Ad/General/Man_img.png'

import { FaHome, FaChevronRight, FaArrowRight } from "react-icons/fa";
import Clutch from '../../assets/SVG FOR Ad/General/Clutch.png';
import ServiceCards from "../ServiceCards";
import FAQ from "../FAQ";
import phone1 from '../../assets/SVG FOR Ad/Desk/Perform_con.png';
import phone2 from '../../assets/SVG FOR Ad/Mobile/perform_conm.png'


const services = {
  heading: "Performance Marketing That Scales Revenue",
  subText:
    "Maxetra helps brands maximize ROI through high-impact paid campaigns built on data, testing, and continuous optimization.",

  items: [

    {
      title: "Google Ads Management Services",
      description: "Maxetra manages high-performance Google Ads campaigns focused on leads, sales, and ROI. From keyword targeting to bid optimization and conversion tracking, we ensure every click drives measurable results.",
      icon: g_ads,
      iconBg: "bg-blue-100 text-blue-600",
    },
    {
      title: "Remarketing & Retargeting Campaigns",
      description: "We re-engage users who have already interacted with your brand and turn them into customers. Our remarketing strategies increase conversions while reducing overall ad costs.",
      icon: remark,
      iconBg: "bg-cyan-100 text-cyan-600",
    },
    {
      title: "Display Advertising",
      description: "Maxetra runs targeted display advertising campaigns that increase brand visibility and reach. We place your ads in front of the right audience across high-quality websites and apps.",
      icon: display,
      iconBg: "bg-emerald-100 text-emerald-600",
    },
    {
      title: "YouTube Campaigns",
      description: "We create high-impact YouTube ad campaigns designed to build awareness and drive conversions. From skippable ads to video retargeting, we maximize reach and engagement.",
      icon: yt,
      iconBg: "bg-lime-100 text-lime-600",
    },
    {
      title: "A/B Testing for Paid Social Campaigns",
      description: "We continuously test ad creatives, audiences, and messaging to identify what converts best. This data-driven approach helps scale winning campaigns and improve ROI.",
      icon: ab,
      iconBg: "bg-green-100 text-green-600",
    },
    {
      title: "Meta (Facebook & Instagram)",
      description: "Maxetra manages result-driven Meta ad campaigns optimized for leads, sales, and engagement. Precise targeting and creative optimization ensure consistent performance.",
      icon: meta,
      iconBg: "bg-orange-100 text-orange-600",
    },
    {
      title: "TikTok Ads",
      description: "We create scroll-stopping TikTok ad campaigns that capture attention and drive action. Our strategy focuses on creative testing, audience targeting, and conversion tracking.",
      icon: tiktok,
      iconBg: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "LinkedIn B2B Paid Social Services",
      description: "We run highly targeted LinkedIn ad campaigns for B2B lead generation and brand authority. Our approach connects your business with decision-makers and high-value prospects.",
      icon: social,
      iconBg: "bg-indigo-100 text-indigo-600",
    },
    {
      title: "Twitter Advertising",
      description: "Maxetra manages Twitter ad campaigns that increase visibility and engagement in real time. We help brands reach relevant audiences through targeted and performance-focused ads.",
      icon: twitter,
      iconBg: "bg-sky-100 text-sky-600",
    },
  ]
}

const faqs = [
  {
      question: "What is performance marketing and how does Maxetra approach it?",
      answer:
          "Performance marketing focuses on measurable results such as leads, sales, and ROI. Maxetra uses data-driven strategies, advanced tracking, and continuous optimization to ensure every campaign delivers real business growth.",
  },
  {
      question:
          "Which platforms does Maxetra manage for performance marketing?",
      answer:
          "Maxetra manages Google Ads, Meta (Facebook & Instagram), YouTube, LinkedIn, TikTok, Display Ads, and remarketing campaigns. Each platform is optimized based on audience behavior and business goals.",
  },
  {
      question:
          "Can performance marketing work for both B2B and B2C businesses?",
      answer:
          "Yes. Maxetra designs customized performance marketing strategies for both B2B and B2C brands, focusing on high-intent audiences and platform-specific targeting.",
  },
  {
      question:
          "How does Maxetra measure campaign performance and ROI?",
      answer:
          "We track key metrics including conversions, cost per lead, return on ad spend, and funnel performance. Transparent reporting ensures you always know how your budget is performing.",
  },
  {
    question:
        "How soon can I expect results from performance marketing?",
    answer:
        "Paid campaigns can start generating results within days of launch. With continuous optimization, Maxetra helps scale performance and ROI over time.",
},
];


export default function Performance() {

  return (
    <>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* LEFT CONTENT */}
            <div>

              {/* Heading */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
                High-Impact <span className="text-orange-500"> Performance Marketing </span> Built for Maximum ROI
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
        <h2 className="text-3xl text-center md:text-4xl font-bold text-[#001e37] mb-6">
          Maxetra’s <span>Performance Marketing</span>Built for ROI
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Maxetra delivers performance marketing solutions designed to turn ad spend into measurable, scalable revenue. We focus on what truly matters—qualified leads, sales, and return on investment—eliminating wasted budget on vanity metrics.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Maxetra uses data-driven strategies to optimize every stage of the funnel, from precise audience targeting and high-impact ad creatives to landing page optimization and conversion tracking. Through continuous testing, performance analysis, and real-time optimization, we ensure campaigns run at peak efficiency.

            </p>

            <p className="text-gray-600 leading-relaxed">
              Our approach combines paid search, paid social, and retargeting to capture high-intent users across platforms. With clear benchmarks and transparent reporting, Maxetra shows exactly how your budget performs and where growth is coming from. These performance marketing solutions help businesses scale faster, improve conversion rates, and achieve predictable, long-term ROI.
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
      <FAQ faqs={faqs}/>
      <Consultation />
      <Proposal2 phone1={phone1} phone2={phone2} />
    </>
  )
}
