import React from "react"
import Clutch from '../../assets/SVG FOR Ad/General/Clutch.png'

import man from '../../assets/SVG FOR Ad/General/Digital_Marketing_Home.png'





export default function Shoot({img1 }){
    return(
        <section className="bg-[#001e37]">
                <div className="max-w-7xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2  items-center">

                        {/* LEFT CONTENT */}
                        <div className="">

                            {/* Heading */}
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight lg:mb-10">
                            Performance-Focused Digital Marketing for  <span className="text-orange-500">Growing Businesses</span>
                            </h1>


                            {/* Rating Card */}
                            <div className="mt-10 ">
                <div className="
    inline-flex items-center gap-3
    bg-white shadow-md rounded-lg
    px-3 py-2
    sm:gap-4 sm:px-4 sm:py-3
    hover:shadow-inner hover:shadow-gray-400
    w-full max-w-xs sm:w-auto
  ">

                  {/* Rating */}
                  <div className="text-base sm:text-lg font-semibold text-gray-900 whitespace-nowrap">
                    4.9<span className="text-xs sm:text-sm">/5</span>
                  </div>

                  {/* Stars + Reviews */}
                  <div className="min-w-0">
                    <div className="flex text-yellow-400 text-xs sm:text-sm leading-none">
                      ★ ★ ★ ★ ★
                    </div>
                    <p className="text-[8px] sm:text-xs text-gray-500 truncate">
                      20+ Client Reviews
                    </p>
                  </div>

                  {/* Logo */}
                  <img
                    src={Clutch}
                    alt="Clutch"
                    className="w-20 sm:w-28 h-auto object-contain shrink-0"
                  />
                </div>
              </div>
                        </div>

                        {/* RIGHT ILLUSTRATION */}
                        <div className="flex justify-center lg:justify-end">
                            <img
                                src={man}
                                className="max-w-xs md:max-w-sm lg:max-w-md"
                            />
                        </div>

                    </div>
                </div>
            </section>
    )
}