import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import men from '../assets/SVG FOR Ad/General/Man_img.png'

import { HiOutlineSparkles } from "react-icons/hi2";
import local from '../assets/SVG FOR Ad/seo_card/Local Seo.png';
import ecom from '../assets/SVG FOR Ad/General/Ecommerce Marketing.png';
import content from '../assets/SVG FOR Ad/General/Content Marketing.png';
import cro from '../assets/SVG FOR Ad/Card/Conversion Rate Optimization.png';
import seo from '../assets/SVG FOR Ad/Card/SEO.png';
import video from '../assets/SVG FOR Ad/Card/Video Production.png';
import webd from '../assets/SVG FOR Ad/Card/Web Development.png';
import perform from '../assets/SVG FOR Ad/General/Performance Marketing.png';
import social from '../assets/SVG FOR Ad/Card/Social media marketing.png';
import brain from '../assets/SVG FOR Ad/General/Brain IMG.png'

// Use the new transparent version

import {
    FaEye,
    FaSearch,
    FaRobot,

} from 'react-icons/fa';
import Rating from './Rating';
import AIStackCards from './AIStackCards';
import Consultation from './Consultation';
import Clients from './Clients';
import ServiceCards from './ServiceCards';

const data = [
    {
        icon: <FaEye />,
        title: "AI Mode Visibility",
        desc: `Google AI Mode redefines how customers discover businesses,
      prioritizing zero-click answers over traditional search results.
      Thrive’s AI SEO experts optimize your content for passage-level
      targeting and conversational queries to build topical authority
      that AI recognizes.`,
        color: "bg-blue-600",
    },
    {
        icon: <FaSearch />,
        title: "Conversational Search",
        desc: `AI-powered conversational search focuses on intent-based
      discovery. We optimize your content so it answers real user
      questions naturally and effectively.`,
        color: "bg-cyan-500",
    },
    {
        icon: <FaRobot />,
        title: "LLM Optimization",
        desc: `Large Language Models evaluate authority, relevance,
      and clarity. Our strategies ensure your brand is cited
      and referenced by AI systems.`,
        color: "bg-emerald-500",
    },
    {
        icon: <HiOutlineSparkles />,
        title: "AI Trust Signals",
        desc: `We strengthen AI trust signals by improving content
      structure, entity relationships, and topical depth across
      your digital presence.`,
        color: "bg-amber-600",
    },
];

const stats = [
    {
        value: "4.9",
        title: "Verified Client Ratings",
        desc: "Clutch, DesignRush",
    },
    {
        value: "150%",
        title: "Retention Rate",
        desc: "Annual growth in renewals",
    },
    {
        value: "2016",
        title: "Year Founded",
        desc: "San Francisco, California",
    },
    {
        value: "100+",
        title: "Customers",
        desc: "Fortune 100 to Startups",
    },
    {
        value: "3.2+",
        title: "Years and growing",
        desc: "Typical customer life",
    },
    {
        value: "20+",
        title: "Countries",
        desc: "Developers across Latin America",
    },
];

export default function Home() {



    const openNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer')
    }


    const services = {
        heading: "Solutions Designed to Drive Digital Growth",
        subText:
            "Maxetra delivers data-driven digital marketing solutions designed to generate real, measurable business growth. From startups to enterprise brands, we combine strategy, technology, and execution to help businesses increase visibility, attract qualified leads, and improve conversions across digital channels.",
        items: [
            {
                title: "Search Engine Optimization",
                description: "Improve your online visibility with data-driven SEO strategies. We focus on keyword research, on-page optimization, technical SEO, and quality content to help your website rank higher across search engines and AI-powered platforms, driving consistent organic traffic and long-term growth.",
                icon: seo,
            },
            {
                title: "Local SEO",
                description: "Reach nearby customers exactly when they are searching for your services. Our local SEO strategies optimize Google Business Profiles, local listings, reviews, and location pages to improve map rankings, increase calls, visits, and generate high-intent local leads for your business.",
                icon: local,
            },
            {
                title: "Conversion Rate Optimization",
                description: "Turn more website visitors into leads and customers. We analyze user behavior, conduct A/B testing, and optimize landing pages and funnels to improve engagement, reduce drop-offs, and maximize conversions, helping you get better results from your existing traffic. ",
                icon: cro
            },
            {
                title: "Web Development",
                description: "Build fast, secure, and scalable websites designed for performance and conversions. Our web development solutions focus on user experience, mobile responsiveness, clean architecture, and SEO-friendly design to support business growth and deliver a seamless digital experience.",
                icon: webd,
            },
            {
                title: "Social Media Marketing",
                description: "Strengthen your brand presence and connect with your audience through strategic social media marketing. We create engaging content, manage campaigns, and optimize performance across platforms to increase brand awareness, engagement, and measurable business impact.",
                icon: social,
            },
            {
                title: "Performance Marketing",
                description: "Drive measurable results with ROI-focused performance marketing strategies. We manage paid campaigns across search and social platforms using data, testing, and optimization to generate qualified leads, increase conversions, and scale your marketing performance efficiently.",
                icon: perform,
            },
            {
                title: "Video Production",
                description: "Tell your brand story with high-quality video content that engages and converts. From promotional videos to social media and campaign assets, we create impactful visuals designed to boost engagement, improve retention, and support your overall marketing strategy.",
                icon: video,
            },
            {
                title: "Content Marketing",
                description: "Build authority and trust with content that educates and converts. Our content marketing strategies focus on creating high-quality, search-optimized content that attracts the right audience, supports SEO, and strengthens your brand across digital channels.",
                icon: content
            },
            {
                title: "Ecommerce Marketing",
                description: "Increase online sales with tailored ecommerce marketing strategies. We optimize product visibility, user experience, and performance campaigns to drive traffic, improve conversions, and maximize revenue across your ecommerce platforms and digital marketplaces.",
                icon: ecom
            }
        ],
    };

    return (
        <div className="bg-[#00162d] overflow-hidden"> {/* Ensures no white gaps between sections */}

            <section className="relative w-full min-h-[70vh] md:min-h-screen overflow-hidden flex items-center px-4">
                <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 items-center gap-8">


                    {/* Left Text */}
                    <motion.div className="z-10 text-center md:text-left">
                        <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl leading-snug md:leading-tight drop-shadow-2xl">
                            Helping Businesses Get More Leads, Sales & Visibility Online
                        </h1>
                    </motion.div>


                    {/* Right Image */}
                    <div className="relative w-full flex justify-center md:justify-end">
                        <img
                            src={brain}
                            alt="illustration"
                            className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain opacity-80"
                        />
                    </div>
                </div>


                {/* Optional subtle background gradient */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0f172a] via-[#020617] to-black" />
            </section>

            <section className="w-full  bg-white py-12">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        {/* Description */}
                        <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-5'>Data-Driven Solutions Designed to Increase Visibility, Leads, and ROI</h3>
                        <p className="text-gray-700 mx-3 leading-relaxed mb-6">
                            <p className='mb-3'>
                                Welcome to Maxetra, a performance-focused digital marketing agency helping businesses grow in today’s competitive digital space. We work with startups, local businesses, and established brands to build strong online visibility and generate high-quality leads.
                            </p>

                            <p className='mb-3'>

                                At Maxetra, we believe successful digital marketing starts with the right strategy. Instead of generic solutions, we create customized marketing plans based on your business goals, industry, and target audience. Our approach combines creativity, analytics, and performance marketing to deliver long-term results.
                            </p>

                            <p className='mb-3'>
                                As a full-service digital marketing agency, Maxetra offers SEO, local SEO, performance marketing, content creation, social media management, and conversion rate optimization. From improving search rankings to running ROI-driven campaigns, our focus is always on measurable growth.
                            </p>

                            <p className='mb-3'>
                                With search evolving through AI-powered platforms, we optimize content for both traditional search engines and modern AI discovery. Using transparent, data-driven insights, Maxetra continuously improves traffic quality, conversions, and real business outcomes.
                            </p>
                        </p>

                    </div>

                    {/* RIGHT IMAGE SECTION */}
                    <div className="relative flex justify-center lg:justify-end my-auto">


                        {/* Person Image */}
                        <img
                            src={men}
                            alt="Marketing Expert"
                            className=" bottom-10 object-contain"
                        />
                    </div>
                </div>

            </section>

            <Rating />

            <section className="w-full bg-white pt-10">
                <div className="max-w-7xl mx-auto px-4">

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            AI SEO Agency Powering Next-Gen <span className="text-orange-500">Search Visibility</span>
                        </h2>
                        <p className="mt-3 text-gray-600">
                            Maxetra boosts AI search visibility, traffic, and measurable business growth
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-5">
                        <div className="rounded-xl bg-[#001e37] text-white p-6 text-center">
                            <h3 className="text-3xl font-bold">+4,302%</h3>
                            <p className="mt-2 text-sm">
                                AI Referral Traffic (Jan–Oct 2025)
                            </p>
                        </div>

                        <div className="rounded-xl bg-[#0d496e] text-white p-6 text-center">
                            <h3 className="text-3xl font-bold">+322%</h3>
                            <p className="mt-2 text-sm">
                                Gemini Traffic (Jan–Oct 2025)
                            </p>
                        </div>

                        <div className="rounded-xl bg-[#146c94] text-white p-6 text-center">
                            <h3 className="text-3xl font-bold">+862%</h3>
                            <p className="mt-2 text-sm  w-full">
                                ChatGPT Search Traffic (Jan–Oct 2025)
                            </p>
                        </div>
                    </div>

                    {/* Content */}
                    <AIStackCards />
                </div>
            </section >
            {/* Services */}
            <ServiceCards service={services} />
            {/* Testimonial */}
            <Clients />
            {/* Expert */}
            <Consultation />
        </div >
    )
}
