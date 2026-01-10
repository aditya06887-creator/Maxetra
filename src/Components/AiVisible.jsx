import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


const slides = [
  {
    title: "AI Mode Visibility",
    description:
      "Google AI Mode redefines how customers discover businesses..."
  },
  {
    title: "Search Traffic Growth",
    description:
      "Optimized AI search visibility boosts zero-click impressions..."
  },
  {
    title: "Conversational SEO",
    description:
      "Passage-level targeting improves AI understanding..."
  }
];

export default function AiVisible() {
  const [active, setActive] = useState(0);

  const next = () =>
    setActive((prev) => (prev + 1) % slides.length);

  const prev = () =>
    setActive((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="mx-auto w-[320px]">
      {/* Stack */}
      <div className="relative h-[240px]">
        {slides.map((slide, index) => {
          const offset = index - active;
          if (offset < -1 || offset > 2) return null;

          return (
            <div
              key={index}
              style={{
                transform: `
                  translateY(${offset * 20}px)
                  scale(${1 - offset * 0.05})
                `,
                zIndex: 10 - offset
              }}
              className={`absolute w-full rounded-2xl bg-white p-4 shadow-[0_20px_40px_rgba(0,0,0,0.15)]
                transition-all duration-400 ease-in-out
                ${offset === 0 ? "opacity-100 blur-0" : "opacity-60 blur-[1px]"}
              `}
            >
              <h3 className="mb-2 text-base font-semibold text-black">
                {slide.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {slide.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="mt-4 flex justify-between">
        <button
          onClick={prev}
          className="flex items-center justify-center rounded-lg bg-orange-500 p-2 text-white transition hover:bg-orange-600"
        >
          <FiChevronLeft size={18} />
        </button>

        <button
          onClick={next}
          className="flex items-center justify-center rounded-lg bg-orange-500 p-2 text-white transition hover:bg-orange-600"
        >
          <FiChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
