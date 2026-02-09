import Consultation from "../Consultation";
import Proposal2 from "../Proposal2";
import Rating from "../Rating";

import review from "../../assets/SVG FOR Ad/local/Manage_reviews.png";
import visual from "../../assets/SVG FOR Ad/local/Visual.png";
import competitor from "../../assets/SVG FOR Ad/local/Competitor.png";
import google from "../../assets/SVG FOR Ad/local/Google.png";
import key from "../../assets/SVG FOR Ad/local/Local_key.png";
import perform from "../../assets/SVG FOR Ad/local/Perform_score.png";
import cit from "../../assets/SVG FOR Ad/local/citations.png";
import ads from "../../assets/SVG FOR Ad/local/Ads.png";
import g_ads from "../../assets/SVG FOR Ad/local/Google_ads.png";
import { Link } from "react-router-dom";
import man from '../../assets/SVG FOR Ad/General/Man_img.png'
import home2 from '../../assets/SVG FOR Ad/General/Local_Seo_Home_1.png'

import { FaHome, FaChevronRight, FaArrowRight } from "react-icons/fa";
import Clutch from '../../assets/SVG FOR Ad/General/Clutch.png';
import ServiceCards from "../ServiceCards";
import FAQ from "../FAQ";
import phone1 from '../../assets/SVG FOR Ad/Desk/Local_con.png';
import phone2 from '../../assets/SVG FOR Ad/Mobile/Local_conm.png'


const services = {
  heading: "Data-Driven Local SEO Services Built for Long-Term Success",
  subText:
    "Our local SEO solutions focus on improving map rankings, search visibility, and customer trust through proven strategies, accurate optimization, and measurable performance.",

  items: [

    {
      title: "Competitor Analysis",
      description: "We study your local competitors to understand their rankings, keywords, listings, and reviews. This helps us identify gaps and opportunities to build a stronger local SEO strategy for your business.",
      icon: competitor,
      iconBg: "bg-blue-100 text-blue-600",
    },
    {
      title: "Optimize Google My Business",
      description: "We optimize your Google Business Profile with accurate details, proper categories, and engaging content. This improves map visibility, customer trust, and local search performance.",
      icon: g_ads,
      iconBg: "bg-cyan-100 text-cyan-600",
    },
    {
      title: "Target Local Keywords",
      description: "We research and target high-intent local keywords your customers actually search for. This helps your business appear in relevant local results, map packs, and location-based searches that drive conversions.",
      icon: key,
      iconBg: "bg-emerald-100 text-emerald-600",
    },
    {
      title: "Manage Online Reviews",
      description: "Online reviews directly impact local rankings and trust. We help manage, monitor, and improve your reviews to build credibility, increase engagement, and strengthen your local reputation.",
      icon: review,
      iconBg: "bg-lime-100 text-lime-600",
    },
    {
      title: "Performance Score",
      description: "We track your local SEO performance using key metrics like visibility, rankings, traffic, and engagement. Our performance scoring system shows what’s working and where improvements are needed. ",
      icon: perform,
      iconBg: "bg-sky-100 text-sky-600",
    },
    {
      title: "Paid Ads Management",
      description: "We manage targeted local paid ad campaigns to complement your SEO efforts. Our approach focuses on maximizing ROI through precise location targeting and conversion-focused ad strategies.",
      icon: ads,
      iconBg: "bg-green-100 text-green-600",
    },
    {
      title: "Visual Reports",
      description: "Get clear, easy-to-understand visual reports that show real progress. We provide transparent insights into rankings, traffic growth, and local performance without confusing data.",
      icon: visual,
      iconBg: "bg-orange-100 text-orange-600",
    },
    {
      title: "Local Citations",
      description: "We build and manage consistent local citations across trusted directories. Accurate business listings strengthen local authority, improve map rankings, and increase search engine trust.",
      icon: cit,
      iconBg: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Google My Business Posting",
      description: "Regular Google Business Profile posts improve engagement and visibility. We create optimized posts for updates, offers, and announcements to keep your listing active and competitive.",
      icon: google,
      iconBg: "bg-indigo-100 text-indigo-600",
    },
  ]
}

const faqs = [
  {
    question: "What is Local SEO and why is it important for my business?",
    answer:
      "Local SEO helps your business appear in local search results and map listings when nearby customers search for your services. It increases visibility, trust, and leads from people who are ready to buy.",
  },
  {
    question:
      "Can you help my business rank on Google Maps and Apple Maps?",
    answer:
      "We optimize your business for both Google Maps and Apple Maps by improving listings, local keywords, citations, reviews, and location signals to increase map visibility.",
  },
  {
    question:
      "How long does it take to see results from Local SEO?",
    answer:
      "Local SEO results typically start showing within 30–60 days, depending on competition and location. Strong and consistent optimization leads to long-term ranking and traffic growth.",
  },
  {
    question:
      "Is Local SEO better than paid ads for long-term growth?",
    answer:
      "Local SEO provides long-term, sustainable visibility and organic leads, while paid ads offer quicker results. Using both together delivers the best overall growth strategy.",
  },
];

export default function Content() {

  return (
    <>
      <section className="bg-[#001e37] text-white">
        <div className=" mx-auto px-4 py-12">
          <div className=" gap-10 items-center">

            {/* LEFT CONTENT */}
            <div>

              {/* Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold  leading-tight text-center my-10">
                Local SEO Services for <span className="text-orange-500">Google Maps & Apple Maps  </span> Growth
              </h1>



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
            <Link to="/digital-marketing-services/local-seo" className="flex items-center gap-1 hover:text-orange-500 transition-colors">
             Local SEO
            </Link>
          </li>

        </ol>
      </div>

      <section className="bg-white py-10 px-4">
        <h2 className="text-3xl text-center md:text-4xl font-bold text-[#001e37] mb-6">
          Strategic Research
          for <span>Google & Apple Maps</span> Rankings
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              We analyze local search trends, map-ranking factors, and customer intent to identify real opportunities for growth. Our research focuses on Google Maps and Apple Maps algorithms, competitor positioning, and location-based keywords that drive high-intent local traffic.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Our local market and map ranking research is designed to uncover the exact factors that influence visibility on Google Maps and Apple Maps. We analyze location-based search behavior, customer intent, and competitive landscapes to identify high-impact opportunities for growth. By studying local ranking signals such as proximity, relevance, prominence, and user engagement, we build a clear roadmap for map performance improvement.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our research also includes deep analysis of competitors’ map listings, categories, reviews, and keyword usage. This data-driven approach allows us to target the right locations, optimize map profiles accurately, and attract high-intent local customers who are actively searching for your services.
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
