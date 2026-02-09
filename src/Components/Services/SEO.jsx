import React from "react";
import Rating from "../Rating";
import Agile from "../Agile";
import {
    FaHome,
    FaChevronRight
} from "react-icons/fa";
import Consultation from "../Consultation";
import Clutch from '../../assets/SVG FOR Ad/General/Clutch.png'
import { FiArrowRight } from "react-icons/fi";

import content from '../../assets/SVG FOR Ad/Card/Content writing.png';
import AI from '../../assets/SVG FOR Ad/seo_card/AI SEO.png';

import link from '../../assets/SVG FOR Ad/seo_card/link-building.png';
import off from '../../assets/SVG FOR Ad/seo_card/Off-Page SEO.png';
import on from '../../assets/SVG FOR Ad/seo_card/On-Page SEO.png';
import seo from '../../assets/SVG FOR Ad/seo_card/Technical SEO.png';
import ecom from '../../assets/SVG FOR Ad/seo_card/eCommerce.png';
import key from '../../assets/SVG FOR Ad/seo_card/Keyword Research.png';
import lo_seo from '../../assets/SVG FOR Ad/seo_card/Local Seo.png';
import { Link } from "react-router-dom";
import man from '../../assets/SVG FOR Ad/General/seo.png'
import home2 from '../../assets/SVG FOR Ad/General/SEO_home_2.png'

import Proposal2 from "../Proposal2";
import phone1 from '../../assets/SVG FOR Ad/Desk/Seo_con.png';
import phone2 from '../../assets/SVG FOR Ad/Mobile/Seo_conm.png'
import ServiceCards from "../ServiceCards";


const services = {
    heading: "Results-Driven SEO Services That Grow Your Business",
    subText:
        "We help brands rank higher on Google, attract qualified traffic, and turn visitors into paying customers through proven, data-backed SEO strategies.",
    items :[
        {
            title: " Keyword Research & Strategy",
            description:
                "We identify high-value, low-competition keywords that align with your business goals. Our strategic keyword research helps you rank faster, attract the right audience, and stay ahead of competitors in search results.",
            icon: key,
            color: "text-blue-600",
        },
        {
            title: "Link Building",
            description:
                "High-quality backlinks are essential for strong rankings. We build authoritative, white-hat links from trusted websites to increase your domain authority, credibility, and long-term organic growth.",
            icon: link,
            color: "text-green-600",
        },
        {
            title: "Technical SEO Audit",
            description:
                "A healthy website ranks better. We audit and fix technical issues such as site speed, crawl errors, mobile usability, indexing, and core web vitals to ensure search engines can easily access your site.",
            icon: seo,
            color: "text-teal-600",
        },
        {
            title: "Competitor Analysis",
            description:
                "We analyze your competitors’ SEO strategies to uncover gaps and opportunities. This data-driven approach helps you outperform competitors and capture more market share in your niche.",
            icon: lo_seo,
            color: "text-lime-600",
        },
        {
            title: "AI SEO",
            description:
                "We combine AI insights with expert SEO practices to optimize content, structure, and relevance. Our AI-driven SEO improves topical authority, search intent matching, and E-E-A-T signals.",
            icon: AI,
            color: "text-emerald-600",
        },
        {
            title: "On-Page SEO",
            description:
                "From optimized content and headings to meta tags and internal linking, we enhance every on-page element to improve visibility, user experience, and search engine relevance.",
            icon: on,
            color: "text-orange-600",
        },
        {
            title: "eCommerce SEO",
            description:
                "Drive more sales with SEO tailored for online stores. We optimize product pages, categories, and site structure to improve rankings, traffic, and conversions across search engines.",
            icon: ecom,
            color: "text-blue-600",
        },
        {
            title: "Analytics & Reporting",
            description:
                "Transparent reporting that shows real results. We track rankings, traffic, conversions, and performance metrics so you always know how your SEO campaign is performing.",
            icon: content,
            color: "text-green-600",
        },

        {
            title: "Off-Page SEO",
            description:
                "Build trust beyond your website. Our off-page SEO strategies include brand mentions, citations, reputation management, and outreach to strengthen authority and online presence.",
            icon: off,
            color: "text-yellow-600",
        },
    ]
}

export default function SEO() {
    return (
        <div>
            <section className="bg-[#001e37] text-white">
                <div className="max-w-7xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                        {/* LEFT CONTENT */}
                        <div>

                            {/* Heading */}
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold  leading-tight">
                                SEO Strategies Built for Search Engines and   <span className="text-orange-500">AI-Driven Discovery</span>
                            </h1>

                            {/* CTA */}
                            <div className="mt-8">
                                <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition cursor-pointer">
                                    Schedule a Meeting
                                    <FiArrowRight />
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
            <div className="flex py-4 px-10 text-sm bg-[#001e37] text-white mb-4 max-w-7xl mx-auto w-full">
                <ol className="flex items-center space-x-2 md:space-x-4">

                    {/* Step 1: Home */}
                    <li className="flex items-center">
                        <Link to="/" className="flex items-center gap-1 hover:text-orange-500 transition-colors">
                            <FaHome className="text-base" />
                        </Link>
                    </li>



                    {/* Separator */}
                    <FaChevronRight className="text-[10px] text-gray-400" />

                    <li className="flex items-center">
                        <Link to='/digital-marketing-services' className="hover:text-orange-500 font-semibold">
                            Digital Marketing
                        </Link>
                    </li>

                    {/* Separator */}
                    <FaChevronRight className="text-[10px] text-gray-400" />

                    {/* Step 3: Current Page  */}
                    <li className="flex items-center">
                        <span className=" cursor-pointer hover:text-orange-500 font-semibold">
                            SEO
                        </span>
                    </li>

                </ol>
            </div>
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#001e37] mb-6">
                            Focused on rankings, traffic quality, and conversion growth
                        </h2>

                        <p className="text-gray-700 mb-4">
                            Our SEO approach goes beyond improving rankings. We focus on attracting the right audience—users actively searching for your products or services and more likely to convert. Through detailed keyword research, technical optimization, and high-quality content, we improve visibility while maintaining strong relevance and intent.
                            .
                        </p>

                        <p className="text-gray-700 mb-6">
                            We analyze search behavior, competition, and user journeys to ensure your website ranks for keywords that drive meaningful traffic, not vanity visits. From on-page optimization and technical SEO to authority building, every action is aligned with measurable outcomes.
                        </p>

                        <p className="text-gray-700 mb-6">
                            SEO is an ongoing process. We continuously monitor rankings, traffic quality, and conversions to refine strategies, adapt to algorithm changes, and deliver sustainable organic growth that supports long-term business goals
                        </p>
                    </div>

                    {/* RIGHT IMAGE + ICONS */}
                    <div className="relative flex justify-center lg:justify-end">
                        {/* Main Image */}
                        <img
                            src={home2}
                            alt="SEO Expert"
                            className="rounded-xl w-full max-w-md object-cover h-[90vh]"
                        />
                    </div>

                </div>
            </section>
            <Rating />
            <Agile />
            <ServiceCards service={services} />
            <Proposal2 phone1={phone1} phone2={phone2} />
            <Consultation />
        </div>
    );
}
