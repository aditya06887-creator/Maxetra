import React, { useState } from 'react';
import {
  FaEye,
  FaCommentDots,
  FaBrain,
  FaRegStar,
  FaChevronUp,
  FaChevronDown
} from "react-icons/fa";


const data = [
  {
    id: 1,
    title: "AI Mode Visibility",
    desc: "Google AI Mode redefines how customers discover businesses, prioritizing zero-click answers over traditional search results. Thrive's AI SEO experts optimize your content for passage-level targeting and conversational queries.",
    icon: <FaEye className="w-5 h-5" />,
    color: "bg-blue-600"
  },
  {
    id: 2,
    title: "Conversational Optimization",
    desc: "We optimize your brand for voice search and chat-based interfaces. By focusing on natural language patterns, we ensure your business remains the top recommendation in AI-driven conversations.",
    icon: <FaCommentDots className="w-5 h-5" />,
    color: "bg-teal-500"
  },
  {
    id: 3,
    title: "Large Language Models",
    desc: "Our R&D team stays ahead of the curve by testing strategies specifically for LLMs like GPT-4 and Gemini, ensuring your data is structured in a way that AI models prioritize.",
    icon: <FaBrain className="w-5 h-5" />,
    color: "bg-emerald-500"
  },
  {
    id: 4,
    title: "Generative Discovery",
    desc: "Prepare for the shift from 'search' to 'discovery'. We help your brand appear in generative snapshots, earning authentic reviews and boosting your overall online authority.",
    icon: <FaRegStar className="w-5 h-5" />,
    color: "bg-green-400"
  }
];

export default function AICarousel() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % data.length);
  const prev = () => setActive((prev) => (prev - 1 + data.length) % data.length);

  return (
    <section className="max-w-7xl mx-auto lg:py-12">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 my-auto space-y-6 text-center lg:text-left">
          <p className="text-gray-600 text-lg leading-relaxed">
            Rapid advances in generative artificial intelligence (AI) models have reshaped how content is discovered and consumed. Traditional search engine optimization (SEO) is no longer enough to reach those looking for your products or services.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Thrive is one of the <span className="text-lime-600 font-semibold underline cursor-pointer">top generative engine optimization companies</span> for AI visibility. Using our internal research and development (R&D) department, we've been testing and perfecting AI SEO strategies.
          </p>
        </div>

        {/* Right Side: Stacked Carousel */}
        <div className="flex-1 w-full max-w-xl">
          
          {/* Top Navigation Icons */}
          <div className="flex justify-center gap-3 mb-8">
            {data.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setActive(i)}
                className={`p-3 rounded-full transition-all duration-300 ${
                  active === i 
                  ? `${item.color} text-white shadow-lg scale-110` 
                  : "bg-cyan-50 text-cyan-700 hover:bg-cyan-100"
                }`}
              >
                {item.icon}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-6">
            {/* The Stack Container */}
            <div className="relative w-full h-[320px] sm:h-[280px]">
              {data.map((item, index) => {
                // Calculation for the stack effect
                const isPrevious = index < active;
                const isNext = index > active;
                const offset = index - active;
                
                // Hide cards that aren't the top 3 visible ones
                if (offset < 0 || offset > 3) return null;

                return (
                  <div
                    key={item.id}
                    className="absolute top-0 left-0 w-full transition-all duration-500 ease-in-out"
                    style={{
                      transform: `translateY(${offset * 14}px) scale(${1 - offset * 0.04})`,
                      zIndex: 10 - offset,
                      opacity: 1 - offset * 0.2,
                    }}
                  >
                    {/* Gradient Border Card */}
                    <div className="rounded-[2.5rem] p-[3px] bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 shadow-xl">
                      <div className="bg-white rounded-[2.3rem] p-8 sm:p-10 h-full min-h-[220px]">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-2 bg-blue-50 rounded-full text-blue-600">
                            {item.icon}
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-800">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Vertical Arrow Controls */}
            <div className="flex flex-col gap-2">
              <button 
                onClick={prev}
                className="p-2 rounded-full bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-gray-600 transition-colors"
              >
                <FaChevronUp className="w-6 h-6" />
              </button>
              <button 
                onClick={next}
                className="p-2 rounded-full bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-gray-600 transition-colors"
              >
                <FaChevronDown className="w-6 h-6" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}