import React, { useEffect, useState } from "react";
import {
    FiGlobe,
    FiUsers,
    FiCpu,
    FiAward,
    FiPhoneCall
} from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import Proposal from "./Proposal";
import Clients from "./Clients";



const trustData = [
    {
        icon: <FiGlobe />,
        title: "Strategic Expertise",
        desc: "Our team brings deep experience across SEO, AI search, and performance marketing, helping brands make informed decisions that drive measurable growth.",
    },
    {
        icon: <FiUsers />,
        title: "Collaborative Partnerships",
        desc: "We work as an extension of your team, building strong relationships through clear communication, accountability, and shared success.",
    },
    {
        icon: <FiCpu />,
        title: "Future-Ready Solutions",
        desc: "By staying ahead of digital and AI-driven trends, we create scalable strategies that keep your brand visible and competitive.",
    },
    {
        icon: <FiAward />,
        title: "Quality Without Compromise",
        desc: "Every campaign is executed with precision, testing, and continuous optimization to ensure high standards, reliable performance, and real business impact.",
    },
];

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

export default function Contact() {

    const openNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer')
      }
      
    const offices = [
        {
            city: "Seattle WA. United States",
            address: [
                "12020 Sunrise Valley Drive,",
                "Suite 100",
                "Reston, VA 20191",
            ],
        },
        {
            city: "London. United Kingdom",
            address: [
                "287 Park Avenue South,",
                "Suite 700",
                "New York, NY 10010",
            ],
        },
        {
            city: "Changi. Singapore",
            address: [
                "325 N. St. Paul Street,",
                "Suite 3100",
                "Dallas, TX 75201",
            ],
        },
    ];

    const [countryCode, setCountryCode] = useState('us'); // Default to US

    // 1. Logic to detect country on load
    useEffect(() => {
        fetch('https://ipapi.co/json/')
            .then((res) => res.json())
            .then((data) => setCountryCode(data.country.toLowerCase()))
            .catch(() => setCountryCode('us'));
    }, []);

    const services = [
        "SEO", "PPC", "AI Search Optimization",
        "Social Media Ads", "CRO", "Web Design",
        "Reputation / Reviews", "Content Writing", "Local SEO",
        "Photography / Video", "Amazon Marketing", "Social Media Organic",
        "Email Marketing", "Link Building", "ADA Compliance"
    ];

    return (
        <div className="">
            <section className="bg-[#001e37] py-12 px-2 md:px-10">
                <div className="max-auto mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <Proposal />
                    {/* RIGHT CONTENT */}
                    <div className=" text-white sm:flex sm:flex-col justify-center mx-4 md:mx-0">
                        <h2 className="text-4xl md:text-6xl font-bold mb-4 flex items-center gap-3 ">
                            A Results-Driven Digital Marketing Agency
                        </h2>

                        <p className="my-8 text-white/90 mr-10">
                            Maxetra helps ambitious businesses grow through performance-focused digital marketing and AI-ready strategies. We partner with brands that value quality, transparency, and measurable outcomes.
                        </p>

                        <div className="flex items-center">
                            <button
                                onClick={() => openNewTab('https://calendly.com/maxetra/30min?month=2026-03')}
                                className='flex items-center justify-center gap-4 font-semibold cursor-pointer py-3 px-10 mx-auto rounded-full transition bg-orange-500  text-white"'
                            >
                                <FaArrowRightLong />
                                Schedule a Meeting
                            </button>
                        </div>
                        <div className="w-full border-t border-gray-200 my-8" />
                        <section className="text-white py-3 md:py-10 px-6">
                            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

                                {/* Left Column */}
                                <div className=" space-y-2">
                                        <h3 className="text-3xl  font-semibold mb-4">Headquarters:</h3>
                                        <p>7901 4th St N STE 300</p>
                                        <p>St. Petersburg</p>
                                        <p>FL, 33702, USA</p>
                                    
                                        <div className="flex items-center gap-2">
                                        <FiPhoneCall className="text-xl font-semibold mt-4"/>
                                        <h3 className="text-xl font-semibold mt-4">
                                            
                                            Call Us:</h3>
                                        </div>
                                        <p className="font-semibold">+1 (551) 344-1824</p>
                                    
                                </div>

                                {/* Right Column */}
                                <div className="space-y-2">
                                    <h3 className="text-3xl font-semibold mb-4">Office Hours:</h3>
                                    <p>Mon–Fri, 8:30am – 5:30pm — Central Time Zone</p>

                                    <p>Mon–Fri, 9:30am – 6:30pm — Eastern Time Zone</p>

                                </div>

                            </div>
                        </section>

                    </div>
                </div>
            </section>
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                        Clients Trust Maxetra
                    </h2>

                    <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-base md:text-lg">
                        Businesses choose Maxetra because we combine strategy, transparency, and performance-driven execution to deliver consistent results and long-term digital growth.
                    </p>

                    {/* Cards */}
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {trustData.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 text-left shadow-lg hover:shadow-gray-300 transition duration-300"
                            >
                                <div className="text-[#001e37] text-3xl mb-4">
                                    {item.icon}
                                </div>

                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <Clients />
        </div>
    );
}
