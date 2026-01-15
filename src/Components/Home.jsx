import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import lapi from '../assets/SVG FOR Ad/lap_lion.png'
import men from '../assets/SVG FOR Ad/Man_img.png'

import { HiOutlineSparkles } from "react-icons/hi2";
import brain from '../assets/SVG FOR Ad/Brain IMG.png';
import local from '../assets/SVG FOR Ad/seo_card/Local Seo.png';
import ecom from '../assets/SVG FOR Ad/Ecommerce Marketing.png';
import content from '../assets/SVG FOR Ad/Content Marketing.png';
import cro from '../assets/SVG FOR Ad/Card/Conversion Rate Optimization.png';
import seo from '../assets/SVG FOR Ad/Card/SEO.png';
import video from '../assets/SVG FOR Ad/Card/Video Production.png';
import webd from '../assets/SVG FOR Ad/Card/Web Development.png';
import perform from '../assets/SVG FOR Ad/Performance Marketing.png';
import social from '../assets/SVG FOR Ad/Card/Social media marketing.png';


// Use the new transparent version

import {
    FaChevronDown,
    FaEye,
    FaSearch,
    FaRobot,
    FaChevronUp,
    FaQuoteRight,
    FaChartBar,
    FaCode,
    FaThumbsUp,
    FaMousePointer,
    FaPlayCircle,
    FaFileAlt,
    FaCheckCircle,
    FaFilter,
    FaAmazon
} from 'react-icons/fa';
import Rating from './Rating';
import Location from './Location';
import AIStackCards from './AIStackCards';

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

    const [active, setActive] = useState(0);
    const cardRefs = useRef([]);
    const [cardHeight, setCardHeight] = useState(0);

    React.useEffect(() => {
        if (cardRefs.current[active]) {
            setCardHeight(cardRefs.current[active].offsetHeight);
        }
    }, [active]);


    const next = () => setActive((prev) => (prev + 1) % data.length);
    const prev = () => setActive((prev) => (prev - 1 + data.length) % data.length);


    const openNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer')
    }

    

    const testimonials = [
        {
            text: "The team I have honestly seems like an extension to our office. I feel like they work daily to make our practice strive. As a scared skeptic at first I must say..... I love my eAssist team!!!!!",
            author: "Aimee Posey",
            title: "Office Manager, Thompson Family & Cosmetic Dentistry",
        },
        {
            text: "I can't tell you how utterly relieved I was to now have the billing portion of my practice completely outside of my office, and in the hands of professionals.",
            author: "Dr. Benjamin Kur",
            title: "Westchester Oral & Maxillofacial Associates",
        },
        {
            text: "eAssist has revolutionized my practice. From streamlining my insurance billing to increasing my overall collection percentages. In addition, we love our eAssist Team member in the cloud Toyla, she is always kind and there to assist with questions or help with the practice.",
            author: "Dr. Darcé A. Slate",
            title: "Pure Dentistry",
        },
    ];

    const services = [
        {
            title: "Search Engine Optimization (SEO)",
            description: "Through careful keyword research and white hat practices, our digital marketing agency helps you achieve high rankings in the major search engines. Our comprehensive SEO strategies include on-page optimization, technical audits and local internet marketing services to drive organic visibility and traffic to your site.",
            icon: seo,
        },
        {
            title: "Local SEO",
            description: "Generate more leads and sales with Maxetra hyperlocal digital marketing services.Get discovered by customers searching for your business nearby.We optimize Google Business Profiles, local listings, and location pages.Improve map rankings, reviews, and local search visibility.Drive more calls, visits, and qualified local leads.",
            icon: local,
        },
        {
            title: "Conversion Rate Optimization",
            description: "Turn more site visitors into customers! Our experts utilize the latest conversion optimization techniques to help increase the percentage of passive website visitors into active users. Through A/B testing, user behavior analysis and strategic redesigns, our advertising and digital marketing agency optimizes your sales funnel.",
            icon: cro
        },
        {
            title: "Web Development",
            description: "With millions of websites on the internet, you want to be sure your website stands out, represents you well and most importantly, helps your organization grow. Our digital media agency creates visually stunning, mobile-responsive websites that provide the best possible user experience.",
            icon: webd,
        },
        {
            title: "Social Media Marketing",
            description: "Social media marketing is critical to staying connected with your audience. Working independently of, or side-by-side with you, our B2B internet marketing agency helps keep your social community engaged. We develop tailored strategies across all relevant platforms and manage targeted ad campaigns to maximize your ROI.",
            icon: social,
        },
        {
            title: "Performance Marketing",
            description: "Drive measurable growth with data-driven advertising strategies across search, social, and display platforms.We focus on ROI, conversions, and scalable customer acquisition.Every campaign is continuously optimized using real-time performance insights.Pay only for results that truly move your business forward.",
            icon: perform,
        },
        {
            title: "Video Production",
            description: "There is no more powerful way to communicate your brand message than through video. Engage your audience by telling your story and sharing your mission. Our website marketing company handles everything from concept development and filming to distribution, so you can focus on your business.",
            icon: video,
        },
        {
            title: "Content Marketing",
            description: "Attract and educate your audience with high-quality, value-driven content.We craft blogs, videos, and creatives aligned with your brand voice and goals.Every piece is optimized for SEO, engagement, and conversions.Turn content into a long-term growth engine for your business.",
            icon: content
        },
        {
            title: "Ecommerce Marketing",
            description: "Boost online sales with tailored marketing strategies built for ecommerce brands.From product discovery to checkout optimization, we cover the entire funnel.We leverage paid ads, SEO, and retention campaigns to maximize lifetime value.Turn traffic into loyal customers and repeat buyers.",
            icon: ecom
        }
    ];

    const containerRef = useRef(null);

    // Track scroll progress relative to THIS section only
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });


    // Text moves up (-150px) as you scroll down the section
    const textY = useTransform(scrollYProgress, [0, 1], [0, -150]);
    // Text fades out towards the end of the section
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div className="bg-[#00162d] overflow-hidden"> {/* Ensures no white gaps between sections */}
            <section
                ref={containerRef}
                className="relative w-screen h-screen overflow-hidden flex items-center justify-center px-6"
            >
                {/* STATIONARY BACKGROUND 
                  The background image stays fixed in place because it is not a motion element.
                */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <img
                        src={brain}
                        alt="Marketing Brain"
                        className="w-full max-w-4xl object-contain opacity-70 scale-110 md:scale-100"
                    />
                </div>

                {/* ONLY TEXT HAS MOTION
                  This div moves independently of the background based on scroll progress.
                */}
                <motion.div
                    style={{ y: textY, opacity }}
                    className="relative z-10 text-center max-w-5xl"
                >
                    <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl leading-tight drop-shadow-2xl">
                        Award-Winning Marketing Agency
                    </h1>
                    <p className="text-white font-semibold text-2xl md:text-4xl lg:text-5xl mt-4 drop-shadow-lg opacity-90">
                        We Love Website Design, SEO & PPC
                    </p>
                </motion.div>

                {/* Subtle Background Particles - Stationary */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div className="absolute top-1/4 left-10 w-2 h-2 bg-yellow-500 rounded-full blur-sm"></div>
                    <div className="absolute bottom-1/3 right-20 w-2 h-2 bg-orange-400 rounded-full blur-sm"></div>
                    <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-blue-400 rounded-full blur-sm"></div>
                </div>

            </section>

            <section className="w-full  bg-white py-16">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        {/* Top Pill */}
                        <span className="inline-block bg-orange-500 text-white text-sm md:text-xl font-semibold px-6 py-2 rounded-full mb-6">
                            WORK WITH A TRUSTED MARKETING AGENCY
                        </span>

                        {/* Description */}
                        <p className="text-gray-700 leading-relaxed mb-6">
                            <span className="font-semibold">
                                Thrive Internet Marketing Agency has been an industry-leading
                                digital marketing service provider
                            </span>{" "}
                            since 2005, delivering results-driven strategies. We’ve{" "}
                            <span className="font-semibold">
                                helped thousands of businesses grow
                            </span>{" "}
                            by leveraging our{" "}
                            <span className="font-semibold">
                                strategy-first approach and proprietary technology and tools.
                            </span>
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            Thrive works with clients of all sizes, from startups to
                            multi-location enterprises. We offer affordable pricing for any
                            size budget and believe in proving our value every day with{" "}
                            <span className="font-semibold">month-to-month contracts.</span>
                        </p>

                        {/* CTA Button */}
                        <button className="bg-orange-500 hover:bg-orange-600 transition text-white font-semibold px-8 py-4 rounded-full">
                            SEE MORE CASE STUDIES
                        </button>
                    </div>

                    {/* RIGHT IMAGE SECTION */}
                    <div className="relative flex justify-center lg:justify-end">


                        {/* Person Image */}
                        <img
                            src={men}
                            alt="Marketing Expert"
                            className="w-[500px] bottom-10 object-contain"
                        />

                        {/* laptop Image */}
                        <img
                            src={lapi}
                            alt="Website Mockup"
                            className="hidden lg:block w-[200px] absolute -bottom-2 md:right-0 "
                        />
                    </div>
                </div>

            </section>

            <Rating />

            <section className="w-full bg-white py-20">
                <div className="max-w-7xl mx-auto px-4">

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            The Best AI SEO Agency for{" "}
                            <span className="text-orange-500">AI Visibility</span>
                        </h2>
                        <p className="mt-3 text-gray-600">
                            Helping Businesses Dominate Large Language Model AI Search
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
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
                    <AIStackCards/>
                </div>
            </section >
            {/* Services */}
            <section section className="py-16 px-4 bg-gray-100 font-sans" >
                <div className="max-w-[1200px] mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
                            Our Digital Marketing Services
                        </h2>
                        <p className="max-w-4xl mx-auto text-base text-gray-500 leading-relaxed">
                            Thrive offers data-driven digital marketing solutions that get you results that matter. From small startups to enterprise-level brands, our B2C and B2B internet marketing agency brings the tools, technology and talent needed to deliver real business growth.
                        </p>
                    </div>

                    {/* Grid Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg hover:shadow-gray-200 transition-shadow duration-300 flex flex-col items-start">

                                {/* Header with Icon and Title */}
                                <div className="flex items-center mb-4 w-full">
                                    {/* Icon Circle */}
                                    <div className="w-12 h-12 flex items-center justify-center mr-4 shrink-0 cursor-pointer">
                                        <img src={service.icon} alt="" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-[#001e37]  border-[#7aa93c] cursor-pointer ">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="text-[15px] leading-relaxed text-gray-600">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section >
            {/* Testimonial */}
            <section section className="bg-gray-100 py-20 px-4 font-sans" >
                <div className="max-w-7xl mx-auto ">
                    {/* Section Heading */}
                    <div className="text-center mb-16 ">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1a2b3c] inline-block relative">
                            What our clients say
                            {/* Yellow accent underline */}
                            <span className="block h-1.5 w-3/4 bg-orange-500 rounded-full mx-auto mt-2"></span>
                        </h2>
                    </div>

                    {/* Testimonial Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                        {testimonials.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 md:p-10 rounded-xl flex flex-col items-center text-center shadow-sm hover:shadow-lg hover:shadow-gray-300 transition-shadow duration-300"
                            >
                                {/* Blue Quote Icon */}
                                <div className="text-[#001e37] text-4xl mb-6">
                                    <FaQuoteRight className="rotate-180" />
                                </div>

                                {/* Testimonial Content */}
                                <div className="flex-grow">
                                    <p className="text-[#333] text-lg leading-relaxed mb-8">
                                        {item.text}
                                    </p>
                                </div>

                                {/* Author Details */}
                                <div className="mt-auto">
                                    <h4 className="font-extrabold text-[#1a2b3c] text-lg">
                                        {item.author}
                                    </h4>
                                    <p className="text-[#444] text-sm mt-1 leading-snug">
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >
            {/* Expert */}
            <section section className="w-full py-16 px-4 bg-white" >
                <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 px-6 py-16 text-center text-white shadow-xl">

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-semibold mb-8">
                        Meet the Experts Behind Your Success
                    </h2>

                    {/* Rating + Avatars */}
                    <div className="flex flex-wrap justify-center items-center gap-4 mb-10">

                        {/* Clutch Rating */}
                        

                        {/* Avatars */}
                        <div className="flex items-center">
                            
                        </div>
                    </div>

                    {/* Button */}
                    <button onClick={() => openNewTab('https://calendly.com/growixa/30min')} className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition cursor-pointer">
                        Schedule a Meeting
                    </button>
                </div>
            </section >
            {/* Location */}
            <Location />
        </div >
    )
}
