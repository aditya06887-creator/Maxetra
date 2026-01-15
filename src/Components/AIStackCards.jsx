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
    title: "AI Mode Optimization",
    desc: "Optimize your content for Google AI Mode, where answers replace traditional search results. We structure passage-level, conversational content that AI Mode understands, selects, and surfaces instantly.",
    icon: (<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className="w-6 h-6 fill-current"
    >
      <g
        fill="#011730"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
      >
        <g transform="scale(5.12,5.12)">
          <path d="M5,5v40h40v-40zM25.399,28.028l-2.522,4.611c-0.19,0.347 -0.534,0.52 -0.877,0.52c-0.343,0 -0.688,-0.173 -0.877,-0.52l-2.522,-4.611c-0.551,-1.007 -1.378,-1.835 -2.385,-2.385l-4.611,-2.522c-0.694,-0.379 -0.694,-1.375 0,-1.755l4.611,-2.522c1.007,-0.551 1.834,-1.378 2.385,-2.385l2.522,-4.611c0.19,-0.347 0.534,-0.52 0.877,-0.52c0.343,0 0.688,0.173 0.877,0.52l2.522,4.611c0.551,1.007 1.378,1.834 2.385,2.385l4.611,2.522c0.694,0.379 0.694,1.375 0,1.755l-4.611,2.522c-1.006,0.55 -1.834,1.378 -2.385,2.385zM39.157,35.289l-2.244,1.227c-0.167,0.093 -0.305,0.23 -0.397,0.398l-1.228,2.244c-0.21,0.386 -0.613,0.625 -1.053,0.625c-0.001,0 -0.002,0 -0.003,0c-0.44,-0.001 -0.844,-0.242 -1.053,-0.631l-1.225,-2.238c-0.093,-0.169 -0.23,-0.307 -0.397,-0.397l-2.245,-1.229c-0.387,-0.212 -0.626,-0.616 -0.625,-1.056c0.002,-0.439 0.242,-0.842 0.628,-1.051l2.241,-1.227c0.169,-0.093 0.306,-0.229 0.397,-0.397l1.229,-2.246c0.207,-0.382 0.609,-0.622 1.049,-0.624c0.001,0 0.002,0 0.003,0c0.438,0 0.841,0.239 1.053,0.623v0.002l1.228,2.245c0.092,0.167 0.229,0.305 0.398,0.397l2.245,1.229c0.382,0.205 0.623,0.608 0.624,1.049c0.001,0.441 -0.237,0.846 -0.625,1.057z" />
        </g>
      </g>
    </svg>
    ),
    color: "bg-blue-600"
  },
  {
    id: 2,
    title: "ChatGPT Search Optimization",
    desc: "Optimize your content for OpenAI ChatGPT, where users ask for direct recommendations. We build strong entity signals and conversational relevance so your brand appears inside AI answers.",
    icon: <FaCommentDots className="w-5 h-5" />,
    color: "bg-teal-500"
  },
  {
    id: 3,
    title: "Gemini Search Optimization",
    desc: "Optimize your content for Google Gemini, powering AI Mode and AI Overviews. Our semantic, natural-language content helps Gemini select your pages for zero-click AI results.",
    icon: <FaBrain className="w-5 h-5" />,
    color: "bg-emerald-500"
  },
  {
    id: 4,
    title: "Perplexity AI Optimization",
    desc: "Optimize for Perplexity AI, an AI answer engine that cites sources. We create citation-ready, high-trust content that gets referenced in AI responses.",
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
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-12 lg:gap-20">

        
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

          <div className="flex items-center gap-1 sm:gap-6">
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
                      transform: `translateY(${offset * 16}px) scale(${1 - offset * 0.03})`,
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