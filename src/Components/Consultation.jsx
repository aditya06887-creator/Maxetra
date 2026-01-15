import React from "react";


export default function Consultation() {
  return (
    <section section className="w-full py-16 px-4 bg-white" >
      <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 px-6 py-16 text-center text-white shadow-xl">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">
          Meet the Experts Behind Your Success
        </h2>

        {/* Rating + Avatars */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-10">

          {/* Clutch Rating */}


          {/* Avatars */}
          <div className="flex items-center">

          </div>
        </div>

        {/* Button */}
        <button onClick={() => openNewTab('https://calendly.com/growixa/30min')} className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition cursor-pointer">
          Schedule a Meeting
        </button>
      </div>
    </section >
  );
}
