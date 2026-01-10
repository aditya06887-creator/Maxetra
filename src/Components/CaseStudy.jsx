import React from "react";
import { Outlet } from "react-router-dom";
import {
    FiSearch,
    FiMail,
    FiBarChart2,
    FiUsers,
    FiTrendingUp,
} from "react-icons/fi";

const stories = [
    {
        name: "VITRAZZA",
        stats: [
            { value: "108%", label: "increase in total site revenue" },
            { value: "940%", label: "increase in non-brand keyword traffic YOY" },
            { value: "7x", label: "ROAS on paid social advertising" },
        ],
        goals: [
            "Find new consumer audiences",
            "Get messaging communication",
            "Scale growth rapidly and efficiently",
        ],
        channels: [
            { icon: <FiSearch />, label: "Paid Search" },
            { icon: <FiUsers />, label: "Paid Social" },
            { icon: <FiMail />, label: "Email Marketing" },
            { icon: <FiBarChart2 />, label: "SEO" },
        ],
        image:
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    },

    {
        name: "KEH",
        stats: [
            { value: "75%", label: "increase in overall ROAS" },
            { value: "413%", label: "increase in ad revenue YOY" },
            { value: "11.4%", label: "increase in conversion rate from testing" },
        ],
        goals: [
            "Optimize paid search ad spend",
            "Discover new audiences",
            "Expand revenue within their industry",
        ],
        channels: [
            { icon: <FiSearch />, label: "Paid Search" },
            { icon: <FiUsers />, label: "Paid Social" },
            { icon: <FiTrendingUp />, label: "CRO" },
        ],
        image:
            "https://images.unsplash.com/photo-1519183071298-a2962be96c85",
    },
];

const wins = [
    "Content Pruning Case Study: How This Online Store Increased Strategic Content Revenue by 64%",
    "Furniture Facebook Ads Case Study: ROAS to 29.5 in 3 Months",
    "How We Lowered Cost Per Acquisition from $47 to $9 in a Google Shopping Campaign",
    "Case Study: How We Increased Google Shopping Revenue by 268% by Treating Campaigns Like a Brick and Mortar Store",
];

export default function CaseStudy() {
    return (
        <div>
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-center text-3xl font-semibold text-gray-900">
                        SUCCESS STORIES
                    </h2>

                    <div className="mt-12 space-y-10">
                        {stories.map((item, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-xl shadow-sm overflow-hidden"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-3">
                                    {/* Left Content */}
                                    <div className="lg:col-span-2 p-6">
                                        <h3 className="text-blue-700 font-semibold mb-4">
                                            {item.name}
                                        </h3>

                                        {/* Stats */}
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                            {item.stats.map((stat, idx) => (
                                                <div
                                                    key={idx}
                                                    className="bg-blue-50 rounded-lg p-4"
                                                >
                                                    <p className="text-blue-700 font-bold text-xl">
                                                        {stat.value}
                                                    </p>
                                                    <p className="text-sm text-gray-600">
                                                        {stat.label}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Goals */}
                                        <div className="mt-6">
                                            <p className="font-medium text-gray-800 mb-2">
                                                Their Goals:
                                            </p>
                                            <ul className="space-y-1 text-gray-600 text-sm list-disc list-inside">
                                                {item.goals.map((goal, g) => (
                                                    <li key={g}>{goal}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Channels */}
                                        <div className="mt-6 flex flex-wrap gap-6">
                                            {item.channels.map((c, ci) => (
                                                <div
                                                    key={ci}
                                                    className="flex flex-col items-center text-blue-600 text-sm"
                                                >
                                                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-lg">
                                                        {c.icon}
                                                    </div>
                                                    <span className="mt-1">{c.label}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Button */}
                                        <div className="mt-6">
                                            <button className="bg-blue-900 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-800 transition">
                                                How We Did It
                                            </button>
                                        </div>
                                    </div>

                                    {/* Right Image */}
                                    <div className="h-full">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section><section className="bg-white py-16">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-semibold text-gray-900">
                        CLIENT WINS
                    </h2>

                    <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                        Used to waiting years for results? Our custom strategies will
                        boost your bottom line within months.
                    </p>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                        {wins.map((item, i) => (
                            <div
                                key={i}
                                className="bg-gray-50 p-5 rounded-lg hover:shadow-sm transition cursor-pointer"
                            >
                                <p className="text-blue-700 font-medium text-sm">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Outlet/>
        </div>
    );
}
