



export default function ServiceCards( { service = {} }){

    const { heading, subText, items = [] } = service ;

    return(
        <section className="py-16 px-4 bg-gray-100 font-sans" >
                <div className="max-w-[1200px] mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <h2 className="text-2xl lg:text-4xl font-extrabold text-gray-800 mb-6">
                            {heading}
                        </h2>
                        <p className="max-w-4xl mx-auto text-base text-gray-500 leading-relaxed">
                            {subText}
                        </p>
                    </div>

                    {/* Grid Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {items.map((service, index) => (
                            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg hover:shadow-gray-200 transition-shadow duration-300 flex flex-col items-start">

                                {/* Header with Icon and Title */}
                                <div className="flex items-center mb-4 w-full">
                                    {/* Icon Circle */}
                                    <div className="w-12 h-12 flex items-center justify-center mr-4 shrink-0 cursor-pointer">
                                        <img src={service.icon} alt="" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-[#001e37]  border-[#7aa93c] cursor-pointer ">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="text-[15px] leading-relaxed text-gray-600">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section >
    )
}