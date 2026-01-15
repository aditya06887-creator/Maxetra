import React, { useEffect, useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import {
    FiArrowRight, FiGlobe,
    FiUsers,
    FiCpu,
    FiArrowLeft,
    FiCheckCircle,
    FiAward
} from "react-icons/fi";
import Proposal from "./Proposal";
import Location from "./Location"


const trustData = [
    {
        icon: <FiGlobe />,
        title: "Proven Expertise",
        desc: "Our industry knowledge and track record make us a reliable partner for every project, big or small.",
    },
    {
        icon: <FiUsers />,
        title: "Strong Relationships",
        desc: "We build lasting bonds with our clients, grounded in transparency, integrity, and mutual success.",
    },
    {
        icon: <FiCpu />,
        title: "Modern Solutions",
        desc: "We stay ahead of trends, delivering creative and effective strategies that help our clients grow faster.",
    },
    {
        icon: <FiAward />,
        title: "Commitment To Quality",
        desc: "Every project we take on is backed by our promise of delivering top-tier quality and results.",
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
            <section className="bg-[#6f8437] py-12 px-4">
                <div className="max-auto mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <Proposal />
                    {/* RIGHT CONTENT */}
                    <div className=" text-white sm:flex sm:flex-col justify-center hidden sm:visible">
                        <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                            <FiArrowLeft />
                            Ready to Dominate Your Market?
                        </h2>

                        <p className="mb-8 text-white/90">
                            Jumpstart your digital marketing success in 3 easy steps:
                        </p>

                        {[
                            { title: "Contact Us", desc: "Fill out our brief contact form." },
                            { title: "Launch Campaigns", desc: "Implement data-driven strategies." },
                            { title: "Achieve Growth", desc: "Expand your brand reach." },
                        ].map((step, i) => (
                            <div key={i} className="flex gap-4 mb-6">
                                <FiCheckCircle className="text-xl mt-1" />
                                <div>
                                    <h4 className="font-semibold">{step.title}</h4>
                                    <p className="text-sm text-white/80">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                        Clients Trust BMDU
                    </h2>

                    <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-base md:text-lg">
                        Clients trust BMDU because we combine expertise, integrity, and innovation
                        to deliver solutions that consistently exceed expectations and build lasting relationships.
                    </p>

                    {/* Cards */}
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {trustData.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 text-left shadow-lg hover:shadow-gray-300 transition duration-300"
                            >
                                <div className="text-blue-500 text-3xl mb-4">
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

            <section className="bg-white py-20 px-4 font-sans">
                <div className="max-w-7xl mx-auto ">
                    {/* Section Heading */}
                    <div className="text-center mb-16 ">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1a2b3c] inline-block relative">
                            What our clients say
                            {/* Yellow accent underline */}
                            <span className="block h-1.5 w-3/4 bg-[#ffc107] rounded-full mx-auto mt-2"></span>
                        </h2>
                    </div>

                    {/* Testimonial Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                        {testimonials.map((item, index) => (
                            <div
                                key={index}
                                className="bg-[#f2f8fa] p-8 md:p-10 rounded-xl flex flex-col items-center text-center shadow-sm hover:shadow-lg hover:shadow-gray-300 transition-shadow duration-300"
                            >
                                {/* Blue Quote Icon */}
                                <div className="text-[#0d47a1] text-4xl mb-6">
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
            </section>
            <Location/>
        </div>
    );
}
