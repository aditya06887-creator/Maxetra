import React from "react";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import Proposal from "../Proposal";
import Rating from "../Rating";
import Agile from "../Agile";
import Location from "../Location";
import {
    FaKey,
    FaLink,
    FaCog,
    FaMapMarkerAlt,
    FaRobot,
    FaFileAlt,
} from "react-icons/fa";
import Consultation from "../Consultation";
import Shoot from "./Shoot";

import amazon from '../../assets/SVG FOR Ad/seo_card/Amazon Seo.png';
import content from '../../assets/SVG FOR Ad/Card/Content writing.png';
import AI from '../../assets/SVG FOR Ad/seo_card/AI SEO.png';
import franchise from '../../assets/SVG FOR Ad/seo_card/Franchise Email Templates.png';
import link from '../../assets/SVG FOR Ad/seo_card/link-building.png';
import off from '../../assets/SVG FOR Ad/seo_card/Off-Page SEO.png';
import on from '../../assets/SVG FOR Ad/seo_card/On-Page SEO.png';
import shopify from '../../assets/SVG FOR Ad/seo_card/Shopify.png';
import seo from '../../assets/SVG FOR Ad/seo_card/Technical SEO.png';
import ecom from '../../assets/SVG FOR Ad/seo_card/eCommerce.png';
import key from '../../assets/SVG FOR Ad/seo_card/Keyword Research.png';
import lo_seo from '../../assets/SVG FOR Ad/seo_card/Local Seo.png';





const stat = [
    "Online reviews and ratings affect your rankings in local searches.",
    "Customer reviews help establish trust and authenticity.",
    "Nearly 82% of consumers make purchasing decisions based on the quality of your review responses.",
    "The more customer reviews you have, the higher your chances of converting visitors into customers.",
    "Businesses with optimal ratings increase their gross income by 28%.",
    "Companies with high review counts earn up to 54% more revenue than competitors.",
]

const services = [
    {
        title: "Keyword Research & Strategy",
        desc:
            "Thrive is an SEO agency that understands your niche and can boost your ranking for specific search terms. Your dedicated SEO specialist will review the keywords your website is currently ranking for, take your keyword wishlist and conduct additional keyword research to build a list that makes the most sense for your website and the competitive landscape.",
        icon: key,
        color: "text-blue-600",
    },
    {
        title: "Link Building",
        desc:
            "Backlinks are a huge component of ranking higher in search results, but not just any link! That’s why you should partner with a search optimization company that has a dedicated link building team and an extensive network of trusted websites. Our digital marketing SEO agency implements white-hat link building tactics to ensure your long-term SEO success.",
        icon: link,
        color: "text-green-600",
    },
    {
        title: "Technical SEO Audit",
        desc:
            "Rankings can improve with optimizations on your website’s back end, such as improving page speed. Fixing these errors makes it easier for search engines to crawl your website, increasing your chances of climbing the search results. Our technical SEO services include comprehensive site audits and on-site optimization that power your organic growth engine.",
        icon: seo,
        color: "text-teal-600",
    },
    {
        title: "Competitor Analysis",
        desc:
            "Statistics show that 64% of customers search for local businesses online. Improve your company’s local SEO rankings with Google Business Profile optimization and attract high-intent customers. Our professional SEO company optimizes your profile and manages your online reputation to grow your local following.",
        icon: lo_seo,
        color: "text-lime-600",
    },
    {
        title: "AI SEO",
        desc:
            "Thrive combines AI efficiency with the expertise of a leading SEO marketing company to build your topical authority and maximize AI visibility. Our expert SEO services analyze how AI models interpret your content and implement optimizations that strengthen your E-E-A-T signals.",
        icon: AI,
        color: "text-emerald-600",
    },
    {
        title: "On-Page SEO",
        desc:
            "Enhance your online visibility and earn high-quality traffic with data-driven on-page SEO services. We publish value-rich content, optimize headlines and HTML tags, and utilize high-resolution images to boost your website’s trustworthiness.",
        icon: on,
        color: "text-orange-600",
    },
    {
        title: "eCommerce SEO",
        desc:
            "Provide your customers with a 24/7 convenient shopping experience and increase your client retention rate. We launch targeted email marketing campaigns and optimize your site for mobile and voice search to create personalized brand experiences. Our online SEO company also offers Walmart Marketplace integrations to increase your sales.",
        icon: ecom,
        color: "text-blue-600",
    },
    {
        title: "Analytics & Reporting",
        desc:
            "We have a team of writers that produce SEO-friendly content for your website, whether that’s creating share-worthy blog posts or optimizing pre-existing service and product pages with more content. Search engines love a website that adds new content on a regular basis. Choose our SEO firm to support your content needs and bolster your search marketing.",
        icon: content,
        color: "text-green-600",
    },
    
    {
        title: "Off-Page SEO",
        desc:
            "Off-page optimization is crucial in establishing brand credibility and increasing online exposure. Partner with our SEO company and let us help you demonstrate your industry expertise. Our SEO services company leverages social media marketing, link building, reputation management and content marketing to generate qualified links and positive ratings.",
        icon: off,
        color: "text-yellow-600",
    },
];

export default function SEO() {
    return (
        <div>
            <Shoot/>
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6">
                            An SEO Marketing Company That Gets It
                        </h2>

                        <p className="text-gray-700 mb-4">
                            Let’s face it. You know what you need but you just don’t know how to
                            get it. Our SEO specialists hear that over and over from SEO clients
                            who contact Thrive Internet Marketing Agency.
                        </p>

                        <p className="text-gray-700 mb-6">
                            You’re likely here because of one or more of the following reasons:
                        </p>

                        <ul className="space-y-4">
                            {stat.map((text, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <FiCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* RIGHT IMAGE + ICONS */}
                    <div className="relative flex justify-center lg:justify-end">
                        {/* Main Image */}
                        <img
                            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
                            alt="SEO Expert"
                            className="rounded-xl w-full max-w-md object-cover h-[90vh]"
                        />
                    </div>

                </div>
            </section>
            <Rating />
            <Agile />
            <section className="bg-gray-50 py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                            Our Professional SEO Services
                        </h2>
                        <p className="text-green-700 mt-2 text-lg">
                            Increase Your Search Rankings and Get Discovered More Online
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 flex items-center justify-center">
                                            <img src={item.icon} className={`text-lg ${item.color}`} />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-800">
                                            {item.title}
                                        </h3>
                                    </div>

                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <Proposal />
            <Consultation/>
            <Location/>
        </div>
    );
}
