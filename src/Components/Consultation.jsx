import React from "react";
import { FaUserCircle } from "react-icons/fa";

export default function Consultation() {
  return (
      <div className=" border-white/10 bg-[#001e37] px-6 py-16 text-center">
        
        {/* Avatars */}
        <div className="mb-6 flex justify-center">
          <div className="flex -space-x-3 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div
                key={i}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-neutral-800"
              >
                <FaUserCircle className="text-xl text-white/80" />
              </div>
            ))}
          </div>
        </div>

        {/* Heading */}
        <h2 className="mb-4 text-3xl font-semibold text-white md:text-4xl">
          Get your free initial consultation
        </h2>

        {/* Description */}
        <p className="mx-auto mb-8 max-w-3xl text-sm text-white/70 md:text-base">
          During the initial consultation, we challenge your approach to better
          determine whether we can be a valuable partner for collaboration.
        </p>

        {/* Button */}
        <button className="rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200 cursor-pointer">
          Free initial consultation
        </button>
      </div>
  );
}
