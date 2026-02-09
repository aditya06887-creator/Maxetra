import Consultation from "../Consultation";
import Proposal2 from "../Proposal2";
import Rating from "../Rating";
import Shoot from "./Shoot";

import local from "../../assets/SVG FOR Ad/seo_card/Local Seo.png";
import seo from "../../assets/SVG FOR Ad/Card/SEO.png";
import webd from "../../assets/SVG FOR Ad/Card/Web Development.png";
import ppc from "../../assets/SVG FOR Ad/Card/PPC.png";
import cro from "../../assets/SVG FOR Ad/Card/Conversion Rate Optimization.png";
import tech from "../../assets/SVG FOR Ad/seo_card/Technical SEO.png";
import link from "../../assets/SVG FOR Ad/seo_card/link-building.png";
import graphic from "../../assets/SVG FOR Ad/seo_card/Graphic Designing.png";
import social from "../../assets/SVG FOR Ad/Card/Social media marketing.png";
import { Link } from "react-router-dom";
import man from '../../assets/SVG FOR Ad/General/Man_img.png'

import { FaHome, FaChevronRight } from "react-icons/fa";
import ServiceCards from "../ServiceCards";
import FAQ from "../FAQ";
import img2 from '../../assets/SVG FOR Ad/General/digital_2.png'
import phone1 from '../../assets/SVG FOR Ad/Desk/digital_con.png';
import phone2 from '../../assets/SVG FOR Ad/Mobile/digital_conm.png'


const services = {
  heading: "Results-Driven Digital Marketing Services",
  subText:
    "Maxetra provides end-to-end digital marketing solutions tailored to your business goals, combining strategy, technology, and execution to deliver measurable results across channels.",

  items: [

    {
      title: "Search Engine Optimization",
      description: "Improve your website’s organic visibility with data-driven SEO strategies. We focus on keyword research, on-page optimization, technical SEO, and content improvements to help your brand rank higher across search engines and AI-powered discovery platforms.",
      icon: seo,
      iconBg: "bg-blue-100 text-blue-600",
    },
    {
      title: "Pay Per Click Management",
      description: "Drive immediate traffic and qualified leads with performance-focused PPC campaigns. We manage targeting, ad creatives, bidding strategies, and landing page optimization to maximize ROI, control costs, and deliver consistent, measurable results across paid search and social platforms.",
      icon: ppc,
      iconBg: "bg-cyan-100 text-cyan-600",
    },
    {
      title: "Local SEO",
      description: "Increase visibility in local search results and attract nearby customers. We optimize Google Business Profiles, local listings, and location pages to improve map rankings, generate more calls, visits, and deliver high-intent local leads for your business.",
      icon: local,
      iconBg: "bg-emerald-100 text-emerald-600",
    },
    {
      title: "Technical SEO",
      description: "Strengthen your website’s technical foundation for improved search performance.We optimize site speed, crawlability, indexing, and core web vitals.Our process ensures better accessibility for search engines and users.Built to support scalability, stability, and long-term organic growth.",
      icon: tech,
      iconBg: "bg-lime-100 text-lime-600",
    },
    {
      title: "Conversion Rate Optimization",
      description: "Increase conversions by turning more visitors into leads and customers.We analyze user behavior, funnels, and drop-off points across your website.Using A/B testing and data insights, we improve engagement and actions.Focused on maximizing ROI from your existing traffic and campaigns.",
      icon: cro,
      iconBg: "bg-sky-100 text-sky-600",
    },
    {
      title: "Link Building",
      description: "Build domain authority with high-quality, white-hat link building strategies focused on relevance and trust. We earn backlinks from authoritative websites within your industry to strengthen credibility. Our approach avoids shortcuts and spam tactics, ensuring long-term SEO value.",
      icon: link,
      iconBg: "bg-green-100 text-green-600",
    },
    {
      title: "Web Design & Development",
      description: "Create fast, modern, and conversion-focused websites designed for performance and scalability. We build responsive, SEO-friendly websites with clean design and strong user experience. Our development approach focuses on speed, security, and usability across all devices.",
      icon: webd,
      iconBg: "bg-orange-100 text-orange-600",
    },
    {
      title: "Graphic Design",
      description: "Create visually compelling designs that strengthen your brand identity and communication. We design high-quality graphics for digital marketing and social media that align with your brand voice. Our focus is on clarity, consistency, and impactful visuals that support engagement and business growth.",
      icon: graphic,
      iconBg: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Social Media Marketing",
      description: "Build a strong brand presence and engage your audience. We create strategic content, manage campaigns, and optimize performance to increase reach and engagement. Our approach focuses on consistency, audience growth, and measurable results that support your overall marketing goals.",
      icon: social,
      iconBg: "bg-indigo-100 text-indigo-600",
    },
  ]
}

const faqs = [
  {
      question: "What are digital marketing services?",
      answer:
          "Digital marketing services include strategies like SEO, PPC, social media marketing, content marketing, and conversion optimization to increase online visibility, generate leads, and drive business growth through digital channels",
  },
  {
      question:
          "How does digital marketing help my business grow?",
      answer:
          "Digital marketing helps you reach the right audience, attract qualified traffic, and convert visitors into customers. It improves brand visibility, lead quality, and ROI through data-driven strategies and continuous optimization.",
  },
  {
      question:
          "Which digital marketing services do I need?",
      answer:
          "The right services depend on your goals, industry, and target audience. Some businesses benefit most from SEO and content, while others need PPC, social media, or conversion optimization. A customized strategy delivers the best results.",
  },
  {
      question:
          "How do you measure digital marketing performance?",
      answer:
          "We track key metrics such as traffic quality, conversions, leads, cost per acquisition, and ROI. Transparent reporting ensures you understand performance and progress at every stage.",
  },
  {
      question:
          "Is digital marketing suitable for small businesses?",
      answer:
          "Yes. Digital marketing is scalable and cost-effective, making it ideal for small businesses looking to compete, generate leads, and grow without large upfront investments.",
  },
];


export default function DigitalLanding() {

  return (
    <>
      <Shoot />

      <div className="flex py-4 px-10 text-sm bg-[#001e37] max-w-7xl mx-auto w-full">
        <ol className="flex items-center space-x-2 md:space-x-4 text-white">

          {/* Step 1: Home */}
          <li className="flex items-center ">
            <Link to="/" className="flex items-center gap-1 hover:text-orange-500 transition-colors">
              <FaHome className="text-base" />
            </Link>
          </li>



          {/* Separator */}
          <FaChevronRight className="text-[10px] text-gray-400" />

          {/* Step 3: Current Page (e.g., Digital Marketing) */}
          <li className="flex items-center">
            <span className="cursor-pointer hover:text-orange-500 font-semibold">
              Digital Marketing
            </span>
          </li>

        </ol>
      </div>
      
      <section className="bg-white py-6 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#001e37] mb-6 text-center">
          Why Choose Maxetra 
          for <span>Digital Marketing</span> Services
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

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
              src={img2}
              alt="DevOps Rocket"
              className="max-w-xs md:max-w-sm lg:max-w-md"
            />
          </div>

        </div>
      </section>
      <Rating />
      <ServiceCards service={services} />
      <FAQ faqs={faqs}/>
      <Consultation />
      <Proposal2 phone1={phone1} phone2={phone2} />
    </>
  )
}
