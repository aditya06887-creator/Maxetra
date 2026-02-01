import React, { useState } from 'react';
import { RiPerplexityFill, RiGeminiFill, RiOpenaiFill } from "react-icons/ri";

import {
  FaEye,

  FaCommentDots,

  FaBrain,

  FaRegStar,

  FaChevronUp,

  FaChevronDown

} from "react-icons/fa";



/* ---------------- FIXED ICONS ---------------- */

const AiModeIcon = ({ className }) => (
  <svg viewBox="0 0 512 512" className={className} fill="currentColor">
    <path d="M211.648 89.515h-76.651A57.707 57.707 0 0077.291 147.2v242.389a57.707 57.707 0 0057.706 57.707h242.411a57.707 57.707 0 0057.707-57.707V288.128l34.624-23.744v125.227a92.35 92.35 0 01-92.331 92.33H134.997a92.349 92.349 0 01-92.33-92.33v-242.39A92.336 92.336 0 0169.702 81.92a92.33 92.33 0 0165.295-27.05h96.96l-20.309 34.645z" />
    <path d="M380.16 0c3.093 0 5.717 2.219 6.379 5.248a149.328 149.328 0 0040.533 74.325 149.332 149.332 0 0074.347 40.555c3.029.661 5.248 3.285 5.248 6.4a6.574 6.574 0 01-5.248 6.357 149.338 149.338 0 00-74.326 40.555 149.338 149.338 0 00-40.789 75.413 6.334 6.334 0 01-6.144 5.078 6.334 6.334 0 01-6.144-5.078 149.338 149.338 0 00-40.789-75.413 149.326 149.326 0 00-75.414-40.789 6.338 6.338 0 01-5.077-6.144c0-2.987 2.133-5.547 5.077-6.144a149.336 149.336 0 0075.414-40.79 149.354 149.354 0 0040.554-74.325A6.573 6.573 0 01380.16 0z" />
  </svg>
);




const data = [

  {

    id: 1,
    title: "AI Mode",
    desc: "Optimize your content for Google AI Mode, where AI answers replace traditional results. We create structured, conversational content AI understands and surfaces.",
    icon: <AiModeIcon className='w-5 h-5' />

  },
  {
    id: 2,
    title: "ChatGPT Search",
    desc: "Optimize your content for ChatGPT, where users ask questions and recommendations. We create structured, conversational content AI understands and surfaces.",
    icon: <RiOpenaiFill className="w-5 h-5" />

  },
  {
    id: 3,
    title: "Gemini Search",
    desc: "Optimize your content for Google Gemini AI, powering modern AI search experiences. We create structured, conversational content AI understands and surfaces.",
    icon: <RiGeminiFill className="w-5 h-5" />
  },
  {
    id: 4,
    title: "Perplexity AI",
    desc: "Optimize your content for Perplexity AI, an answer engine that cites trusted sources. We create structured, conversational content AI understands and surfaces.",
    icon: <RiPerplexityFill className="w-5 h-5" />
  }
];



export default function AICarousel() {

  const [active, setActive] = useState(0);



  const next = () => setActive((prev) => (prev + 1) % data.length);

  const prev = () => setActive((prev) => (prev - 1 + data.length) % data.length);



  return (

    <section className="max-w-7xl mx-auto lg:py-12">

      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start lg:gap-20">
        {/* Left Side: Text Content */}

        <div className="flex-1 mb-5 my-auto space-y-6 text-center lg:text-left">
          <p className="text-gray-600 text-lg leading-relaxed">
            The rapid advancement of generative AI is fundamentally changing how information is indexed, retrieved, and surfaced across digital ecosystems. Traditional SEO frameworks are no longer sufficient for visibility within large language models and AI-driven answer engines. Maxetra enables SaaS and enterprise brands to optimize their digital assets for AI search through structured data, entity-based optimization, semantic relevance, and citation-ready content frameworks.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our AI-first SEO strategies are built on continuous experimentation, technical analysis, and data modeling to improve discoverability across platforms like ChatGPT, Gemini, and emerging AI search interfaces. We help enterprises convert AI visibility into qualified traffic, demand generation, and scalable growth.
          </p>
        </div>



        {/* Right Side: Stacked Carousel */}

        <div className="flex-1 w-full max-w-xl">


          {/* Top Navigation Icons */}

          <div className="flex justify-center gap-5 mb-8">

            {data.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setActive(i)}
                className={`p-3 rounded-lg transition-all duration-300 ${active === i
                  ? `bg-[#001e37] text-white shadow-lg scale-110`
                  : "bg-[#37e1c6] text-[#001e37]"

                  }`}
              >
                {item.icon}
              </button>
            ))}
          </div>



          <div className="flex items-center gap-1">
            {/* The Stack Container */}
            <div className="relative w-full h-[300px] sm:h-[280px]">
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
                      transform: `translateY(${offset * 11}px) scale(${1 - offset * 0.04})`,
                      zIndex: 10 - offset,
                      opacity: 1 - offset * 0.2,

                    }}

                  >

                    {/* Gradient Border Card */}

                    <div className="rounded-[2.5rem] p-[3px] bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 shadow-xl">
                      <div className="bg-white rounded-[2.3rem] p-8 sm:p-10 h-full min-h-[220px]">
                        <div className="flex items-center gap-4 mb-4">
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