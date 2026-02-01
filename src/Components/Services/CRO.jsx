import Consultation from "../Consultation";
import Proposal2 from "../Proposal2";
import Rating from "../Rating";
import Shoot from "./Shoot";

import bounce from "../../assets/SVG FOR Ad/CRO/Bounce_rate.png";
import cta from "../../assets/SVG FOR Ad/CRO/CTA_test.png";
import funnel from "../../assets/SVG FOR Ad/CRO/Funnel_drop.png";
import heatmap from "../../assets/SVG FOR Ad/CRO/Heatmaps.png";
import land from "../../assets/SVG FOR Ad/CRO/Landing_page.png";
import load from "../../assets/SVG FOR Ad/CRO/Page_load.png";
import ux from "../../assets/SVG FOR Ad/CRO/UX_Heuristic.png";
import ppv from "../../assets/SVG FOR Ad/CRO/PPV.png";
import lead from "../../assets/SVG FOR Ad/Content/lead.png";
import { Link } from "react-router-dom";
import man from '../../assets/SVG FOR Ad/General/Man_img.png'

import { FaHome, FaChevronRight } from "react-icons/fa";
import ServiceCards from "../ServiceCards";
import FAQ from "../FAQ";
import phone1 from '../../assets/SVG FOR Ad/Desk/CRO_con.png';
import phone2 from '../../assets/SVG FOR Ad/Mobile/CRO_conm.png'


const services = {
  heading: "Results-Driven Digital Marketing Services",
  subText:
    "Maxetra provides end-to-end digital marketing solutions tailored to your business goals, combining strategy, technology, and execution to deliver measurable results across channels.",

  items :[

    {
      title: "UX Heuristic Analysis",
      description: "Improve your website’s organic visibility with data-driven SEO strategies. We focus on keyword research, on-page optimization, technical SEO, and content improvements to help your brand rank higher across search engines and AI-powered discovery platforms.",
      icon: ux,
      iconBg: "bg-blue-100 text-blue-600",
    },
    {
      title: "Funnel Drop-Off Analysis ",
      description: "Drive immediate traffic and qualified leads with performance-focused PPC campaigns. We manage targeting, ad creatives, bidding strategies, and landing page optimization to maximize ROI, control costs, and deliver consistent, measurable results across paid search and social platforms.",
      icon: funnel,
      iconBg: "bg-cyan-100 text-cyan-600",
    },
    {
      title: "Landing Page Optimization",
      description: "Increase visibility in local search results and attract nearby customers. We optimize Google Business Profiles, local listings, and location pages to improve map rankings, generate more calls, visits, and deliver high-intent local leads for your business.",
      icon: land,
      iconBg: "bg-emerald-100 text-emerald-600",
    },
    {
      title: "Lead magnet",
      description: "Strengthen your website’s technical foundation for improved search performance.We optimize site speed, crawlability, indexing, and core web vitals.Our process ensures better accessibility for search engines and users.Built to support scalability, stability, and long-term organic growth.",
      icon: lead,
      iconBg: "bg-lime-100 text-lime-600",
    },
    {
      title: "Page Load Time",
      description: "Increase conversions by turning more visitors into leads and customers.We analyze user behavior, funnels, and drop-off points across your website.Using A/B testing and data insights, we improve engagement and actions.Focused on maximizing ROI from your existing traffic and campaigns.",
      icon: load,
      iconBg: "bg-sky-100 text-sky-600",
    },
    {
      title: "Bounce Rate",
      description: "Build domain authority with high-quality, white-hat link building strategies focused on relevance and trust. We earn backlinks from authoritative websites within your industry to strengthen credibility. Our approach avoids shortcuts and spam tactics, ensuring long-term SEO value.",
      icon: bounce,
      iconBg: "bg-green-100 text-green-600",
    },
    {
      title: "Pages Per Visit",
      description: "Create fast, modern, and conversion-focused websites designed for performance and scalability. We build responsive, SEO-friendly websites with clean design and strong user experience. Our development approach focuses on speed, security, and usability across all devices.",
      icon: ppv,
      iconBg: "bg-orange-100 text-orange-600",
    },
    {
      title: "Heatmaps & Session Recordings ",
      description: "Create visually compelling designs that strengthen your brand identity and communication. We design high-quality graphics for digital marketing and social media that align with your brand voice. Our focus is on clarity, consistency, and impactful visuals that support engagement and business growth.",
      icon: heatmap,
      iconBg: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "CTA Testing & Button Design Strategy",
      description: "Build a strong brand presence and engage your audience. We create strategic content, manage campaigns, and optimize performance to increase reach and engagement. Our approach focuses on consistency, audience growth, and measurable results that support your overall marketing goals.",
      icon: cta,
      iconBg: "bg-indigo-100 text-indigo-600",
    },
  ]
}



export default function CRO() {
  
  return (
    <>
      <Shoot />

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
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#001e37] mb-6">
              Why Choose Maxetra <br />
              for <span>Digital Marketing</span> Services
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
            Maxetra is a results-driven digital marketing agency helping businesses grow through strategic and data-backed solutions. We work with startups, growing companies, and established brands to deliver marketing services aligned with real business goals.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
            Our digital marketing approach is fully customized. We analyze your industry, audience, and competition to build strategies across SEO, AI search optimization, performance marketing, content marketing, and conversion rate optimization. Every campaign is designed to generate measurable results, not vanity metrics.

            </p>

            <p className="text-gray-600 leading-relaxed">
            We operate as an extension of your team, offering clear communication, transparent reporting, and continuous optimization. As search continues to evolve with AI-powered platforms, Maxetra ensures your brand stays visible, relevant, and competitive for long-term digital growth.
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
      <ServiceCards service={services}/>
      <FAQ/>
      <Consultation />
      <Proposal2 phone1={phone1} phone2={phone2}/>
    </>
  )
}
