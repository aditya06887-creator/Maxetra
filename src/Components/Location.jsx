import React from 'react';
import US from '../assets/SVG FOR Ad/US.png'
import UK from '../assets/SVG FOR Ad/UK.png'
import Singa from '../assets/SVG FOR Ad/Singa.png'
import { TiLocationArrow } from "react-icons/ti";

const locations = [
    {
        id: 1,
        name: "SEA",
        sub: "Seattle WA.",
        email: "Seattle@maxetra.com",
        phone: "+16646794564",
        // Replace this URL with your actual image link
        bgImage: US
    },
    {
        id: 2,
        name: "LHR",
        sub: "London. UK",
        email: "London@maxetra.com",
        phone: "+446413464",
        // Replace this URL with your actual image link
        bgImage: UK
    },
    {
        id: 3,
        name: "SIN",
        sub: "Singapore",
        email: "Sin@maxetra.com",
        phone: "+6585256752",
        // Replace this URL with your actual image link
        bgImage: Singa
    }
];
export default function Location() {
    return (
        <section className="bg-[#001e37] text-white w-full px-6 py-12 md:px-12 md:py-16 font-sans overflow-hidden">

            {/* Top Section */}
            <div className="gap-12 lg:gap-6 items-start">

                {/* Responsive Card Container */}
                <div className="w-full">
                    <div className="flex lg:grid lg:grid-cols-3 gap-5 overflow-x-auto lg:overflow-visible pb-10 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                        {locations.map((loc) => (
                            <div
                                key={loc.id}
                                className="group relative h-[40vh] md:h-[60vh] flex-shrink-0 w-[65vw] sm:w-[45vw] lg:w-full rounded-2xl overflow-hidden bg-[#0d0d0d] border border-neutral-800 cursor-pointer snap-center"
                            >
                                {/* Background Image - Scale effect on hover */}
                                <div
                                    className="absolute inset-0 w-full h-full bg-cover bg-center opacity-40 sm:opacity-0 sm:group-hover:opacity-50 transition-all duration-700 ease-in-out scale-100 lg:scale-110 lg:group-hover:scale-100"
                                    style={{ backgroundImage: `url(${loc.bgImage})` }}
                                >
                            </div>

                                    {/* Content */ }
                            < div className = "relative z-10 h-full flex flex-col justify-between p-8" >

                            {/* Text Animation Logic */ }
                            < div className = "relative h-16 md:h-20 overflow-hidden" >
                            {/* Top sliding down */ }
                            < p className = "text-5xl md:text-6xl font-normal transition-all duration-500 ease-in-out transform group-hover:translate-y-[120%] opacity-100 group-hover:opacity-0" >
                            { loc.name }
                            </p>
                    {/* Bottom sliding up */}
                    <p className="text-4xl lg:text-5xl md:text-6xl font-normal absolute top-0 left-0 transition-all duration-500 ease-in-out transform -translate-y-[120%] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 text-neutral-200">
                        {loc.sub}
                    </p>
                </div>

                {/* Contact Info - Slides Up */}
                <div className="space-y-2 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    <div className="opacity-90 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <p className="text-lg font-medium tracking-tight text-neutral-100">{loc.email}</p>
                        <p className="text-lg text-neutral-400">{loc.phone}</p>

                        <div className="flex items-center gap-2 mt-4 text-white hover:text-blue-400 transition-colors">
                            <span className="text-lg font-semibold border-b border-transparent hover:border-blue-400">
                                Connect
                            </span>
                            <TiLocationArrow className="text-xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))
}
                        </div >
                    </div >
                </div >
            </section >
    )
}