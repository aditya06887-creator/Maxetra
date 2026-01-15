
import UpC from '../assets/SVG FOR Ad/UpCity.png'
import G2 from '../assets/SVG FOR Ad/G2.png'
import Clutch from '../assets/SVG FOR Ad/Clutch.png'

const stats = [
    {
        value: "15+",
        logo: Clutch,
        title: "Verified Client Reviews",
        desc: "",
    },
    {
        value: "20+",
        logo: G2,
        title: "Verified Client Reviews",
        desc: "",
    },
    {
        value: "7+",
        logo: UpC,
        title: "Verified Client Reviews",
        desc: "",
    },
];

const stats2 = [
    {
        value: "100+",
        title: "Customers",
    },
    {
        value: "3.2+",
        title: "Years and growing",
    },
    {
        value: "20+",
        title: "Countries",
    },
];


export default function (){

    return (
        <section className="bg-[#001e37] py-15">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {stats.map((item, index) => (
                            <div
                                key={index}
                                className="bg-[#37e1c6] rounded-xl p-8 min-h-48 flex flex-col justify-between transition-all duration-300 hover:shadow-lg"
                            >
                                <img src={item.logo} alt=""  className='w-36 h-auto mx-2 '/>

                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mt-4">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-gray-600 mt-1">
                                        {item.desc}
                                    </p>
                                </div>
                                <h2 className="text-5xl font-medium text-white flex justify-between">
                                    {item.value}
                                </h2>
                            </div>
                        ))}
                        {stats2.map((item, index) => (
                            <div
                                key={index}
                                className="bg-[#37e1c6] rounded-xl p-8 min-h-48 flex flex-col justify-between transition-all duration-300 hover:shadow-lg"
                            >

                                <div>
                                    <h4 className="text-3xl font-semibold text-gray-900 text-bold">
                                        {item.title}
                                    </h4>   
                                </div>
                                <h2 className="text-5xl font-medium text-white flex justify-between">
                                    {item.value}
                                </h2>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
    )
}