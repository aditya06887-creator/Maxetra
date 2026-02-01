import React from "react";
import { FaQuoteRight } from 'react-icons/fa';


const testimonials = [
    {
        text: "Working with Maxetra feels like having an in-house marketing team. Communication is smooth, and results are consistent across SEO and paid campaigns.",
        author: "David Thompson",
        title: "Professional, proactive, and easy to work with.",
    },
    {
        text: "Maxetra understands business goals. They helped us generate more calls and conversions without wasting budget on ineffective strategies.",
        author: "Jennifer Martinez",
        title: "Focused on ROI, not vanity metrics.",
    },
    {
        text: "From strategy to execution, Maxetra has been reliable and performance-driven. We’ve seen steady growth month over month.",
        author: "Robert Collins",
        title: "A dependable digital marketing agency.”",
    },
];

export default function Clients() {

    return (
        <section section className="bg-gray-100 py-10 px-4 font-sans" >
            <div className="max-w-7xl mx-auto ">
                {/* Section Heading */}
                <div className="text-center mb-16 ">
                    <h2 className="text-3xl lg:text-4xl md:text-5xl font-bold text-[#1a2b3c] inline-block relative">
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
                            <div>
                                <p className=" text-xl my-4 font-bold leading-snug">
                                    {item.title}
                                </p>
                            </div>
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}