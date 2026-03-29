import React from "react";
import peo from '../assets/SVG FOR Ad/General/Consult_people.png'

export default function Consultation() {

  const openNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  return (
    <section section className="w-full py-7 px-4 bg-white" >
      <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 px-6 py-16 text-center text-white shadow-xl">
        <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
          {/* Avatars */}
          <div className="flex items-center">
            <img src={peo} alt="" />
          </div>
        </div>
        {/* Heading */}
        <div className="my-8">
        <h2 className="text-3xl md:text-4xl font-semibold my-4">
          Partner With a Team Built for Growth
        </h2>
        <p className="">Our specialists combine strategy, data, and execution to scale your business.</p>
        </div>

        {/* Button */}
        <button onClick={() => openNewTab('https://calendly.com/maxetra/30min?month=2026-03')} className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition cursor-pointer">
          Schedule a Meeting
        </button>
      </div>
    </section >
  );
}
