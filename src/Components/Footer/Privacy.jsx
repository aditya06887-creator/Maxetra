import React from "react";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
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
} from "react-icons/fi";

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
        <div className=" bg-white">
            <div className="w-full flex flex-col items-center justify-center py-16 bg-gray-50 border-b border-gray-200">
                <h1 className="text-4xl md:text-5xl font-bold text-center px-6">
                    Privacy Policy
                </h1>
                <p className="mt-4 text-gray-500 text-sm uppercase tracking-widest">
                    <strong>Last Updated:</strong> 14-Oct-2024
                </p>
                <p className="mt-4 text-gray-500 text-sm uppercase tracking-widest">
                    <strong>Effective Date:</strong> 14-Oct-2024
                </p>
            </div>
            <div className="max-w-5xl mx-auto px-4 py-16">



                {/* Intro */}
                <div className="gap-3 mb-6">
                    <p className="text-gray-700 text-sm leading-relaxed mb-10">
                        This Privacy Policy describes the policies of <strong>Maxetra</strong>, 4604 Park Springs Blvd., #140, Arlington, Texas, 76017, United States of America (the), email: privacy@maxetra.com, phone: (877) 959-9892 on the collection, use and disclosure of your information that we collect when you use our website (https://Maxetra.com). (the “Service”). By accessing or using the Service, you are consenting to the collection, use and disclosure of your information in accordance with this Privacy Policy. If you do not consent to the same, please do not access or use the Service.
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-10">
                        We may modify this Privacy Policy at any time without prior notice and will post the revised Privacy Policy on the Service. The revised Policy will be effective 180 days from the date it is posted in the Service, and your continued access to or use of the Service after such time will constitute your acceptance of the revised Privacy Policy. We therefore recommend that you periodically review this page.
                    </p>
                </div>

                {/* Information We Collect */}
                <Section icon={FiUser} title="Information We Collect">
                    <ul className="list-disc list-inside space-y-1 m-2">
                        <p>
                            We will collect and process the following personal information about you:
                        </p>
                        <li>Name</li>
                        <li>Email</li>
                        <li>Mobile</li>
                        <li>Work Address</li>
                    </ul>
                </Section>

                {/* How We Use Information */}
                <Section icon={FiInfo} title="How We Use Your Information">
                    <div className="m-2">
                        <p>We will use the information that we collect about you for the following purposes:</p>
                        <ul className="gap-6 list-disc list-inside space-y-1 m-5">
                            <li>Marketing / Promotional purposes</li>
                            <li>Customer support</li>
                        </ul>
                        <p>
                            If we want to use your information for any other purpose, we will ask you for consent. We will use your information only after receiving your consent and only for the purpose(s) for which you granted consent unless we are required to do otherwise by law.
                        </p>
                    </div>
                </Section>

                {/* Sharing */}
                <Section icon={FiShare2} title="How We Share Your Information">
                    <div className="ml-3">
                        We will not transfer your personal information to any third party without seeking your consent, except in limited circumstances as described below:
                        <ul className="list-disc list-inside space-y-1 m-5">
                            <li>Ad services</li>
                            <li>Sponsors</li>
                            <li>Marketing agencies</li>
                            <li>Analytics</li>
                            <li>Data collection & process</li>
                        </ul>
                        <p className="mt-3">
                            We require such third parties to use the personal information we transfer to them only for the purpose for which it was transferred and not to retain it for longer than is required to fulfill the said purpose.

                        </p>
                        <p className="mt-3">
                            We may also disclose your personal information for the following: (1) to comply with applicable law, regulation, court order or other legal process; (2) to enforce your agreements with us, including this Privacy Policy; or (3) to respond to claims that your use of the Service violates any third-party rights. If the Service or our Company is merged or acquired with another company, your information will be one of the assets transferred to the new owner.
                        </p>
                    </div>
                </Section>

                {/* Retention */}
                <Section icon={FiClock} title="Retention of Your Information">
                    <p>
                        We will retain your personal information with us for 90 days to 2 years after users terminate their accounts or as long as we need it to fulfill the purposes for which it was collected, as detailed in this Privacy Policy. We may need to retain certain information for longer periods, such as record-keeping/reporting in accordance with applicable law or for other legitimate reasons like enforcement of legal rights, fraud prevention, etc. Residual anonymous information and aggregate information, neither of which identifies you (directly or indirectly), may be stored indefinitely.
                    </p>
                </Section>

                {/* Text Messages */}
                <Section icon={FiMessageSquare} title="Text Message Communications">
                    <p>
                        We use text messaging to communicate with you about your Service. Standard messaging rates apply and the frequency of messages may vary. Mobile Carriers are not liable for delayed or undelivered messages.
                    </p>
                    <p>
                        No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with third parties.
                    </p>
                    <p>
                        <section className="mb-3">
                            <div className="flex items-center gap-3 mb-1">
                                <GoDotFill />
                                <h2 className="text-lg font-semibold text-gray-900">Opt-Out of Text Message Communications</h2>
                            </div>
                        </section>
                        <p className="ml-3">
                            You may opt out of text messaging at any time by replying to any message with <strong>STOP</strong> or emailing <strong>abuse@maxetra.com</strong>. This will end the communications from that particular phone number.
                        </p>
                        <p className="ml-3">
                            You may continue to receive service-related and other non-marketing text messages from other phone numbers managed by the Company, and you may opt out of those in a similar fashion.
                        </p>

                    </p>
                </Section>

                {/* Rights */}
                <Section icon={FiShield} title="Your Rights">
                    <p>
                        Depending on the law that applies, you may have a right to access and rectify or erase your personal data or receive a copy of your personal data, restrict or object to the active processing of your data, ask us to share (port) your personal information to another entity, withdraw any consent you provided to us to process your data, a right to lodge a complaint with statutory authority and such other rights as may be relevant under applicable laws. To exercise these rights, you can write to us at privacy@maxetra.com. We will respond to your request in accordance with applicable law.

                        You may opt out of direct marketing communications or the profiling we carry out for marketing purposes by writing to us at{" "}
                        <span className="text-orange-500 font-medium">
                            privacy@maxetra.com.
                        </span>
                        Opens Email Do note that if you do not allow us to collect or process the required personal information or withdraw the consent to process the same for the required purposes, you may not be able to access or use the services for which your information was sought.
                    </p>
                </Section>

                {/* Cookies */}
                <Section icon={FiAlertCircle} title="Cookies and How We Use Them:">
                    <p>
                        To learn more about how we use these and your choices in relation to these tracking technologies, please refer to our <Link to='/cookie' className="text-orange-500 font-medium">Cookie Policy</Link>.
                    </p>
                </Section>

                {/* Security */}
                <Section icon={FiLock} title="Security">
                    <p>
                        The security of your information is important to us and we will use reasonable security measures to prevent the loss, misuse or unauthorized alteration of your information under our control. However, given the inherent risks, we cannot guarantee absolute security. Consequently, we cannot ensure or warrant the security of any information you transmit to us and you do so at your own risk.
                    </p>
                </Section>

                {/* Third Party Links */}
                <Section icon={FiExternalLink} title="Third-Party Links">
                    <p>
                        Our Service may contain links to other websites that we do not operate. This Privacy Policy does not address the privacy policy and other practices of any third parties, including any third party operating any website or service that may be accessible via a link on the Service. We strongly advise you to review the privacy policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
                    </p>
                </Section>
            </div>
        </div>
    );
}
