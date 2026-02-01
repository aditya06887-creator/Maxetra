
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";


export default function FAQ({ faqs }) {
    const [activeIndex, setActiveIndex] = useState(0); // first open by default

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === null ? index : null);
    };

    return (

        <section className="bg-white py-10 px-4">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 mt-3">
                        Here are some FAQs and answers to ease your mind.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="space-y-6">
                    {faqs.map((faq, index) => {
                        const isOpen = activeIndex === index;

                        return (
                            <div
                                key={index}
                                className="border-y-[#001e37] rounded-xl shadow-sm border overflow-hidden"
                            >
                                {/* Question */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex justify-between items-center text-left px-6 py-5 cursor-pointer"
                                >
                                    <h3 className="font-semibold text-gray-900 pr-6">
                                        {faq.question}
                                    </h3>

                                    <FiChevronDown
                                        className={`text-xl transition-transform ${isOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {/* Answer */}
                                <div
                                    className={`px-6 text-gray-600 text-sm leading-relaxed transition-all duration-300 ease-in-out ${isOpen
                                        ? "max-h-96 pb-6 opacity-100"
                                        : "max-h-0 overflow-hidden opacity-0"
                                        }`}
                                >
                                    {faq.answer}
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    )
}