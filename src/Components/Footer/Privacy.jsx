import React from "react";
import { Link } from "react-router-dom";
import {
    FiShield,
    FiUser,
    FiInfo,
    FiShare2,
    FiClock,
    FiMessageSquare,
    FiLock,
    FiExternalLink,
    FiAlertCircle,
    FiPhoneCall
} from "react-icons/fi";
import { FaChild } from "react-icons/fa";

const Section = ({ icon: Icon, title, children }) => (
    <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
            <Icon className="text-orange-500 text-xl" />
            <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
        </div>
        <div className="text-gray-700 text-sm leading-relaxed space-y-4">
            {children}
        </div>
    </section>
);

export default function Privacy() {
    return (
        <div className="bg-white">
            <div className="w-full flex flex-col items-start justify-center px-4 py-16 bg-gray-50 border-b border-gray-200">
                <h1 className="text-4xl md:text-7xl font-bold px-4 py-4">
                    Privacy Policy
                </h1>
                <p className="mt-4 text-gray-500 text-md uppercase tracking-widest px-4 ">
                    <strong>Last Updated:</strong> 11-Jan-2026
                </p>
            </div>

            <div className="max-w-5xl mx-auto px-4 py-16">

                {/* Introduction */}
                <div className="mb-12 text-gray-700 text-sm leading-relaxed space-y-6">
                    <p>
                        This Privacy Policy describes the policies of <strong>Maxetra LLC</strong>,
                        7901 4th St N STE 300, St. Petersburg, FL 33702, USA,
                        email: Hello@maxetra.com regarding the collection, use,
                        and disclosure of information when you use our services.
                    </p>
                </div>

                {/* 1. Information We Collect */}
                <Section icon={FiUser} title="1. Information We Collect">

                    <h3 className="font-semibold">A. Personal Information</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Full name</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>Business name</li>
                        <li>Website URL</li>
                        <li>Billing and payment details</li>
                        <li>Marketing account access (if provided for service purposes)</li>
                    </ul>

                    <h3 className="font-semibold mt-6">B. Marketing & Client Data</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Google Ads accounts</li>
                        <li>Facebook / Instagram Ads accounts</li>
                        <li>LinkedIn Ads accounts</li>
                        <li>Website analytics (Google Analytics, Meta Pixel, etc.)</li>
                        <li>CRM and email marketing tools</li>
                    </ul>
                    <p>
                        This data is used strictly for campaign management and performance optimization.
                    </p>

                    <h3 className="font-semibold mt-6">C. Automatically Collected Information</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>IP address</li>
                        <li>Browser type</li>
                        <li>Device type</li>
                        <li>Cookies and tracking data</li>
                        <li>Website interaction data</li>
                    </ul>
                </Section>

                {/* 2. How We Use Information */}
                <Section icon={FiInfo} title="2. How We Use Your Information">
                    <ul className="list-disc list-inside space-y-1">
                        <li>Provide digital marketing services</li>
                        <li>Manage ad campaigns and analytics</li>
                        <li>Improve website performance and conversion rates</li>
                        <li>Process invoices and payments</li>
                        <li>Communicate service updates</li>
                        <li>Send promotional emails (you may opt out anytime)</li>
                        <li>Comply with legal obligations</li>
                    </ul>
                </Section>

                {/* 3. Sharing */}
                <Section icon={FiShare2} title="3. Sharing of Information">
                    <p>We do not sell or rent your personal information.</p>
                    <p>We may share information with trusted third parties such as:</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Payment processors (e.g., Stripe, PayPal)</li>
                        <li>Advertising platforms (Google, Meta, LinkedIn)</li>
                        <li>CRM and email marketing software</li>
                        <li>Hosting providers</li>
                        <li>Legal authorities if required by law</li>
                    </ul>
                    <p>
                        All third-party providers are required to maintain confidentiality and data protection standards.
                    </p>
                </Section>

                {/* 4. Data Security */}
                <Section icon={FiLock} title="4. Data Security">
                    <ul className="list-disc list-inside space-y-1">
                        <li>Secure servers</li>
                        <li>Encrypted data transmission (SSL)</li>
                        <li>Restricted access controls</li>
                        <li>Secure third-party integrations</li>
                    </ul>
                    <p>
                        However, no method of transmission over the internet is 100% secure.
                    </p>
                </Section>

                {/* 5. Cookies */}
                <Section icon={FiAlertCircle} title="5. Cookies & Tracking Technologies">
                    <ul className="list-disc list-inside space-y-1">
                        <li>Analyze traffic and user behavior</li>
                        <li>Improve campaign performance</li>
                        <li>Run remarketing ads</li>
                        <li>Enhance user experience</li>
                    </ul>
                    <p>You can disable cookies through your browser settings.</p>
                </Section>

                {/* 6. Privacy Rights */}
                <Section icon={FiShield} title="6. Your Privacy Rights">
                    <p>
                        Depending on your location (including U.S. and international users), you may have the right to:
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Access your personal data</li>
                        <li>Request correction</li>
                        <li>Request deletion</li>
                        <li>Withdraw consent</li>
                        <li>Opt-out of marketing communications</li>
                    </ul>
                    <p>
                        To exercise these rights, contact us at: <strong>Hello@maxetra.com</strong>
                    </p>
                </Section>

                {/* 7. Data Retention */}
                <Section icon={FiClock} title="7. Data Retention">
                    <p>
                        We retain client and marketing data only as long as necessary
                        to provide services and comply with legal requirements.
                    </p>
                </Section>

                {/* 8. Third Party Links */}
                <Section icon={FiExternalLink} title="8. Third-Party Links">
                    <p>
                        Our website may contain links to third-party websites.
                        We are not responsible for their privacy policies or content.
                    </p>
                </Section>

                {/* 9. Children’s Privacy */}
                <Section icon={FaChild} title="9. Children’s Privacy">
                    <p>
                        Our services are not directed to individuals under the age of 13.
                        We do not knowingly collect personal information from children.
                    </p>
                </Section>

                {/* 10. Changes */}
                <Section icon={FiInfo} title="10. Changes to This Policy">
                    <p>
                        We may update this Privacy Policy from time to time.
                        Changes will be posted on this page with an updated effective date.
                    </p>
                </Section>

                {/* 11. Contact */}
                <Section icon={FiPhoneCall} title="11. Contact Information">
                    <p><strong>Maxetra LLC</strong></p>
                    <p>7901 4th St N STE 300</p>
                    <p>St. Petersburg, FL 33702, USA</p>
                    <p>Email: Hello@maxetra.com</p>
                </Section>

            </div>
        </div>
    );
}