import React from "react";
import { FaSearch, FaChartLine, FaLightbulb, FaPlay, FaChartBar, FaFileAlt, FaSync } from "react-icons/fa";

const steps = [
    {
        id: 1,
        title: "Discover",
        icon: <FaSearch />,
        color: "bg-[#001e37] ",
        text:
            "As your search engine optimization company, we take the time to understand your business needs, demands and expectations. During the discovery phase, our SEO consultants set up a meeting with your key company stakeholders and conduct an initial site review."
    },
    {
        id: 2,
        title: "Analyze",
        icon: <FaChartLine />,
        color: "bg-[#0d496e] ",
        text:
            "Our SEO team analyzes your business data to determine the factors that affect your digital presence, including technical SEO issues, backlink strategies and competitor analysis."
    },
    {
        id: 3,
        title: "Strategize",
        icon: <FaLightbulb />,
        color: "bg-[#146c94] ",
        text:
            "We create a 60-day strategic SEO roadmap aligned with your goals, timelines and KPIs to ensure targeted and measurable results."
    },
    {
        id: 4,
        title: "Execute",
        icon: <FaPlay />,
        color: "bg-blue-900",
        text:
            "We optimize your website pages, blog posts and technical structure while deploying multi-channel strategies to improve rankings and traffic."
    },
    {
        id: 5,
        title: "Measure",
        icon: <FaChartBar />,
        color: "bg-emerald-700",
        text:
            "We track keyword rankings, traffic, conversions and KPIs using analytics tools to refine performance and uncover growth opportunities."
    },
    {
        id: 6,
        title: "Report",
        icon: <FaFileAlt />,
        color: "bg-orange-400",
        text:
            "We provide detailed SEO reports covering rankings, traffic trends and progress so you always know how your campaign is performing."
    },
    {
        id: 7,
        title: "Adjust",
        icon: <FaSync />,
        color: "bg-orange-500",
        text:
            "SEO is dynamic. We continuously refine strategies based on data insights, algorithm updates and changing market trends."
    }
];

export default function Agile() {
    return (
        <section className="bg-white py-16">
            <div className="max-w-6xl mx-auto px-6">

                {/* HEADER */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Thrive’s Agile SEO Methodology
                    </h2>
                    <p className="text-gray-600 mt-3">
                        Your First Step Towards Digital Success
                    </p>
                </div>

                {/* TIMELINE */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-[#001e37] via-[#0d496e]  to-orange-500 rounded-full" />

                    <div className="space-y-12">
                        {steps.map((step) => (
                            <div key={step.id} className="flex gap-6 items-start">

                                {/* NUMBER CIRCLE */}
                                <div className={`relative z-10 w-12 h-12 min-w-[3rem] min-h-[3rem] flex items-center justify-center rounded-full text-white font-bold text-base leading-none flex-shrink-0 ${step.color}`}>
                                    {step.id}
                                </div>

                                {/* CONTENT */}
                                <div className="bg-white">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className={`p-2 rounded-md text-white ${step.color}`}>
                                            {step.icon}
                                        </span>
                                        <h3 className="text-lg font-semibold">{step.title}</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        {step.text}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
