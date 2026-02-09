import Consultation from "../Consultation";
import Proposal2 from "../Proposal2";
import Rating from "../Rating";

import multi from "../../assets/SVG FOR Ad/Social/Multi-Platform.png";
import paid from "../../assets/SVG FOR Ad/Social/Paid_social.png";
import better from "../../assets/SVG FOR Ad/Social/Better_exposure.png";
import listen from "../../assets/SVG FOR Ad/Social/Listen.png";
import community from "../../assets/SVG FOR Ad/Social/Community.png";
import perform from "../../assets/SVG FOR Ad/Social/social_perform.png";
import ugc from "../../assets/SVG FOR Ad/Social/UGC.png";
import calender from "../../assets/SVG FOR Ad/Content/Calendar.png";
import high from "../../assets/SVG FOR Ad/Social/High_search.png";
import { Link } from "react-router-dom";
import man from '../../assets/SVG FOR Ad/General/Social_Media_home.png'
import home2 from '../../assets/SVG FOR Ad/General/Social_Media_home_2.png'

import { FaHome, FaChevronRight, FaArrowRight } from "react-icons/fa";
import Clutch from '../../assets/SVG FOR Ad/General/Clutch.png';
import ServiceCards from "../ServiceCards";
import FAQ from "../FAQ";
import phone1 from '../../assets/SVG FOR Ad/Desk/Social_con.png';
import phone2 from '../../assets/SVG FOR Ad/Mobile/Social_conm.png'


const services = {
  heading: "Social Media Marketing by Maxetra",
  subText:
    "Drive Visibility, Engagement, and Conversions with Performance-Focused Social Media Strategies.",

  items: [

    {
      title: "Multi-Platform Social Strategy",
      description: "We build customized social media strategies across multiple platforms to maximize reach and impact. Each strategy is aligned with your business goals, audience behavior, and platform strengths.",
      icon: multi,
    },
    {
      title: "Organic Content Calendars",
      description: "We create structured organic content calendars to ensure consistent posting and engagement. Planned content helps build brand authority and keeps your audience active and connected.",
      icon: calender,
    },
    {
      title: "Paid Social Campaign Management",
      description: "Our paid social campaigns are optimized for leads, sales, and ROI. From audience targeting to creative testing, we manage every detail to maximize performance.",
      icon: paid,
    },
    {
      title: "Influencer & UGC Integration",
      description: "We leverage influencers and user-generated content to build trust and authenticity. Strategic collaborations help expand reach and improve audience engagement.",
      icon: ugc,
      iconBg: "bg-lime-100 text-lime-600",
    },
    {
      title: "Community Engagement",
      description: "We actively manage comments, messages, and interactions to strengthen brand relationships. Consistent engagement builds loyalty, trust, and long-term audience growth.",
      icon: community,
      iconBg: "bg-sky-100 text-sky-600",
    },
    {
      title: "Social Listening & Engagement",
      description: "We monitor conversations, trends, and audience feedback in real time. Social listening helps refine strategy and improve brand perception across platforms.",
      icon: listen,
      iconBg: "bg-green-100 text-green-600",
    },
    {
      title: "Social Performance Reporting",
      description: "We provide clear performance reports covering reach, engagement, and conversions. Transparent insights help track growth and optimize future campaigns.",
      icon: perform,
      iconBg: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Better Online Exposure",
      description: "Our social media strategies increase your brand’s online visibility across platforms. Consistent exposure helps attract new audiences and strengthen brand recall.",
      icon: better,
      iconBg: "bg-indigo-100 text-indigo-600",
    },
    {
      title: "High Search Rankings",
      description: "Strong social signals support better search visibility and brand authority. Our integrated approach helps improve discoverability and long-term online presence.",
      icon: high,
      iconBg: "bg-orange-100 text-orange-600",
    },
  ]
}

const faqs = [
  {
    question: "What social media platforms does Maxetra manage?",
    answer:
      "Maxetra manages major platforms including Facebook, Instagram, LinkedIn, TikTok, Twitter (X), and YouTube. We tailor strategies based on platform behavior and your business goals.",
  },
  {
    question:
      "Does social media marketing really help generate leads and sales?",
    answer:
      "When done strategically, social media drives qualified traffic, builds trust, and supports lead generation and sales through organic content and paid campaigns.",
  },
  {
    question:
      "Do you provide both organic and paid social media services?",
    answer:
      "Absolutely. Maxetra offers complete social media solutions including organic content creation, community management, and performance-driven paid social advertising.",
  },
  {
    question:
      "How does Maxetra measure campaign performance and ROI?",
    answer:
      "We track key metrics including conversions, cost per lead, return on ad spend, and funnel performance. Transparent reporting ensures you always know how your budget is performing.",
  },
  {
    question:
      "How do you measure social media marketing success?",
    answer:
      "We track engagement, reach, clicks, leads, and conversions using clear performance metrics. Transparent reporting shows exactly how your campaigns are performing.",
  },
  {
    question:
      "How long does it take to see results from social media marketing?",
    answer:
      "Organic growth builds over time, while paid campaigns can deliver quicker results. Maxetra focuses on consistent optimization for long-term growth and measurable ROI.",
  },
];


export default function Social() {

  return (
    <>
      <section className="bg-[#001e37] text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* LEFT CONTENT */}
            <div>

              {/* Heading */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold  leading-tight">
                Results-Driven<span className="text-orange-500"> Social Media Marketing </span> Services by Maxetra
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
            <Link to="/digital-marketing-services/social-media" className="flex items-center gap-1 hover:text-orange-500 transition-colors">
            Social Media Marketing
            </Link>
          </li>

        </ol>
      </div>
      
      <section className="bg-white py-10 px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#001e37] mb-6">
          Turn <span>Social Media</span>into Leads, Sales & Brand Authority
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            <p className="text-gray-600 mb-6 leading-relaxed">
            Social media is no longer just about posting content—it’s about driving real business results. Our social media marketing strategies are built to turn attention into leads, conversations into customers, and consistent presence into long-term brand authority.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
            We focus on creating platform-specific content, targeting the right audiences, and optimizing performance based on real engagement and conversion data.
            </p>

            <p className="text-gray-600 leading-relaxed">
            From organic growth to paid social campaigns, every action is aligned with measurable goals such as lead generation, sales, and brand visibility. By combining creative storytelling, audience insights, and continuous optimization, we help businesses stand out in crowded social feeds. This results-driven approach ensures your brand builds trust, increases reach, and converts social media activity into sustainable revenue growth.
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
