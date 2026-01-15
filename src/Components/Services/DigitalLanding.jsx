import { useState } from "react";
import Consultation from "../Consultation";
import Proposal from "../Proposal";
import Rating from "../Rating";
import Shoot from "./Shoot";
import Location from "../Location";

import local from "../../assets/SVG FOR Ad/seo_card/Local Seo.png";
import seo from "../../assets/SVG FOR Ad/Card/SEO.png";
import webd from "../../assets/SVG FOR Ad/Card/Web Development.png";
import ppc from "../../assets/SVG FOR Ad/Card/PPC.png";
import cro from "../../assets/SVG FOR Ad/Card/Conversion Rate Optimization.png";
import tech from "../../assets/SVG FOR Ad/seo_card/Technical SEO.png";
import link from "../../assets/SVG FOR Ad/seo_card/link-building.png";
import graphic from "../../assets/SVG FOR Ad/seo_card/Graphic Designing.png";
import social from "../../assets/SVG FOR Ad/Card/Social media marketing.png";

import {
  FiArrowRight,
  FiChevronDown
} from "react-icons/fi";

const services = [
  {
    title: "Search Engine Optimization (SEO)",
    desc: "Our internet marketing company goes beyond surface-level SEO. We combine AI-powered automation with white-hat SEO practices to help you achieve higher organic rankings and ensure your brand remains visible in AI search results.",
    icon: seo,
    iconBg: "bg-blue-100 text-blue-600",
  },
  {
    title: "Pay Per Click (PPC) Management",
    desc: "Reach high-intent audiences through data-driven PPC campaigns. We optimize ads, landing pages and A/B testing to drive qualified leads.",
    icon: ppc,
    iconBg: "bg-cyan-100 text-cyan-600",
  },
  {
    title: "Local SEO",
    desc: "Generate more leads and sales with Maxetra’s hyperlocal digital marketing services. Our automation-driven strategies boost local visibility while maintaining a human touch.",
    icon: local,
    iconBg: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Technical SEO",
    desc: "Establish a strong online foundation with technical SEO. We fix crawl errors, HTTPS issues and duplicate content to improve scalability and indexability.",
    icon: tech,
    iconBg: "bg-lime-100 text-lime-600",
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    desc: "Our experts utilize the latest conversion optimization techniques to increase the percentage active users. Through A/B testing and strategic redesigns, our digital marketing agency optimizes your sales funnel.",
    icon: cro,
    iconBg: "bg-sky-100 text-sky-600",
  },
  {
    title: "Link Building",
    desc: "Acquire steady traffic from high-authority websites. Our link-building strategies generate quality backlinks that drive trust and conversions.",
    icon: link,
    iconBg: "bg-green-100 text-green-600",
  },
  {
    title: "Web Design & Development",
    desc: "We design mobile-ready, SEO-optimized websites with clear CTAs, simplified forms and engaging layouts that support digital campaigns.",
    icon: webd,
    iconBg: "bg-orange-100 text-orange-600",
  },
  {
    title: "Graphic Design",
    desc: "Capture your audience’s attention with professional custom designs. Our WordPress experts deliver ADA-compliant websites with ongoing maintenance.",
    icon: graphic,
    iconBg: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Social Media Marketing",
    desc: "Build strong brand awareness with data-driven social campaigns. We benchmark competitors and create strategies for measurable growth.",
    icon: social,
    iconBg: "bg-indigo-100 text-indigo-600",
  },
];

const faqs = [
  {
    question: "How do you measure the success of a digital marketing campaign?",
    answer:
      "We measure the success of a digital marketing campaign by tracking key metrics such as website traffic, conversion rates, lead generation, and revenue. By analyzing these metrics, we are able to understand how well the campaign is performing and make necessary adjustments to optimize results.",
  },
  {
    question:
      "I'm looking for an agency to take over all of our marketing channels. Can you help?",
    answer:
      "Yes, we can! Our agency has vast experience across the digital landscape and loves working on multi-channel marketing campaigns.",
  },
  {
    question:
      "How do you tailor your digital marketing approach to fit the unique needs of my business?",
    answer:
      "We begin by conducting a thorough analysis of your business, including your target audience, industry, and competitors. Using this information, we create a customized digital marketing strategy tailored to your specific needs and goals.",
  },
  {
    question:
      "Can you provide any references or testimonials from previous clients?",
    answer:
      "Yes, we can provide references and testimonials from previous clients upon request. These can give you an idea of the results we’ve achieved for other businesses and the level of service you can expect from our agency.",
  },
];



export default function DigitalLanding() {
  const [activeIndex, setActiveIndex] = useState(0); // first open by default

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === null ? index : null);
  };
  return (
    <>
      <Shoot />
      <section className="bg-white py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Maxetra <br />
              for <span className="text-blue-600">Digital Marketing</span> Services
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Since our founding in 2016, Maxetra has been a trusted{" "}
              <span className="font-semibold text-gray-800">
                Digital Marketing company
              </span>{" "}
              focused on providing smart, capable services for businesses
              of all sizes.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              By tapping into the vast pool of engineering talent across Latin
              America, we bring South America’s top Digital Marketing
              professional's directly to your doorstep.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our services integrate into your team to bring your innovative
              projects to life and maintain your core applications — efficiently
              and economically.
            </p>
          </div>

          {/* RIGHT VISUAL SECTION */}
          <div className="relative flex justify-center items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3214/3214422.png"
              alt="DevOps Rocket"
              className="max-w-xs md:max-w-sm lg:max-w-md"
            />
          </div>

        </div>
      </section>
      <Rating />
      <section className="bg-white py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Work with Azumo, a <br />
              leading <span className="text-blue-600">Java Development</span>{" "}
              Outsourcing Company
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              At Azumo, we specialize in delivering top-tier Java development
              outsourcing services.
            </p>

            <p className="text-gray-600 mb-10 leading-relaxed">
              Our approach encompasses every stage of the software development
              lifecycle, ensuring a seamless, efficient process tailored to your
              specific needs.
            </p>

            <button className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition cursor-pointer">
              GET IN TOUCH
              <FiArrowRight className="text-lg" />
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="https://www.flaticon.com/free-icon/cdn_10619709"
              alt="Image"
              className="w-full max-w-xl"
            />
          </div>

        </div>
      </section>
      <section className="bg-gray-100 py-10 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Maxetra’s Digital Marketing Services
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Build Brand Recognition as an Industry Leader and Increase Profitability
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`rounded-2xl p-6 bg-white  border- black hover:shadow-lg transition duration-300`}
                >
                  <div
                    className={` h-10 gap-2 flex items-center mb-4`}
                  >
                    <div className="w-10 h-10 flex items-center justify-center">
                      <img src={service.icon} className={`text-lg ${service.color}`} />
                    </div>
                    <h3 className="font-semibold text-gray-900 ">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>
      <section className="bg-white py-10 px-4">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Digital Marketing FAQs
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
      <Consultation/>
      <Proposal />
      <Location />
    </>
  )
}
