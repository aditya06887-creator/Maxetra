import React from "react"
import Clutch from '../../assets/SVG FOR Ad/Clutch.png'
import { FiArrowRight } from "react-icons/fi";



export default function Shoot(){
    return(
        <section className="bg-white">
                <div className="max-w-7xl mx-auto px-4 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                        {/* LEFT CONTENT */}
                        <div>

                            {/* Heading */}
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
                                Future-Proof Your Business <br />
                                with Custom <span className="text-blue-600">Digital Marketing Solutions</span>
                            </h1>

                            {/* CTA */}
                            <div className="mt-8">
                                <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition cursor-pointer">
                                    Schedule a Meeting
                                    <FiArrowRight />
                                </button>
                            </div>

                            {/* Rating Card */}
                            <div className="mt-10 inline-flex items-center gap-4 bg-white shadow-md rounded-lg px-4 py-3 hover:shadow-inner hover:shadow-gray-400">
                                <div className="text-lg font-semibold text-gray-900">
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

                                <img src={Clutch} alt="" className="text-gray-700 font-semibold text-sm w-30 h-10" />
                            </div>
                        </div>

                        {/* RIGHT ILLUSTRATION */}
                        <div className="flex justify-center lg:justify-end">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3214/3214422.png"
                                alt="DevOps Rocket"
                                className="max-w-xs md:max-w-sm lg:max-w-md"
                            />
                        </div>

                    </div>
                </div>
            </section>
    )
}