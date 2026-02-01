import React from "react"
import Clutch from '../../assets/SVG FOR Ad/General/Clutch.png'

import man from '../../assets/SVG FOR Ad/General/Man_img.png'





export default function Shoot({img1 }){
    return(
        <section className="bg-white">
                <div className="max-w-7xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2  items-center">

                        {/* LEFT CONTENT */}
                        <div className="">

                            {/* Heading */}
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#001e37] leading-tight lg:mb-10">
                            Performance-Focused Digital Marketing for  <span className="text-orange-500">Growing Businesses</span>
                            </h1>


                            {/* Rating Card */}
                            <div className="mt-10 inline-flex items-center gap-4 bg-white shadow-md rounded-lg px-4 py-3 hover:shadow-inner hover:shadow-gray-400">
                                <div className="text-lg font-semibold text-[#001e37]">
                                    4.9<span className="text-sm">/5</span>
                                </div>

                                <div>
                                    <div className="flex text-yellow-400 text-sm">
                                        ★ ★ ★ ★ ★
                                    </div>
                                    <p className="text-xs text-gray-500">
                                        20 client verified reviews
                                    </p>
                                </div>

                                <img src={Clutch} alt="" className="text-[#001e37] font-semibold text-sm w-30 h-10" />
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