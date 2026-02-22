import React from 'react';

export default function Term() {
  return (
    <div className="bg-white min-h-screen text-[#1a1a1a] font-sans selection:bg-red-100">
      
      {/* Header Section */}
      <div className="flex flex-col justify-center py-16 bg-gray-50 border-b border-gray-200">
        <h1 className="text-4xl md:text-7xl font-bold px-6">
          Terms & Conditions
        </h1>
        <p className="mt-4 text-gray-500 text-sm uppercase tracking-widest px-10">
          Last Updated: January 2026
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <div className="space-y-12">

          {/* 1. Services */}
          <section>
            <h2 className="text-xl font-bold mb-4">1. Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Maxetra provides digital marketing services including but not limited to:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-gray-700">
              <li>Search Engine Optimization (SEO)</li>
              <li>Google Ads Management</li>
              <li>Social Media Marketing</li>
              <li>Website Design & Development</li>
              <li>Branding & Creative Services</li>
              <li>CRM & Automation Setup</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Service details, pricing, and scope will be defined in a separate proposal or agreement.
            </p>
          </section>

          {/* 2. No Guarantee of Results */}
          <section>
            <h2 className="text-xl font-bold mb-4">2. No Guarantee of Results</h2>
            <p className="text-gray-700 leading-relaxed">
              Maxetra does not guarantee specific rankings, sales, leads, or performance results.
              Marketing outcomes depend on various external factors including competition,
              market conditions, platform algorithms, and client cooperation.
            </p>
          </section>

          {/* 3. Payment Terms */}
          <section>
            <h2 className="text-xl font-bold mb-4">3. Payment Terms</h2>
            <ul className="list-disc pl-8 space-y-2 text-gray-700">
              <li>Payments must be made in advance unless otherwise agreed.</li>
              <li>Monthly retainers are billed at the beginning of each billing cycle.</li>
              <li>Late payments may result in service suspension.</li>
              <li>Fees are non-refundable unless otherwise stated in writing.</li>
            </ul>
          </section>

          {/* 4. Client Responsibilities */}
          <section>
            <h2 className="text-xl font-bold mb-4">4. Client Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Client agrees to:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-gray-700">
              <li>Provide required account access (Google Ads, Meta, website, hosting, etc.)</li>
              <li>Provide accurate business information</li>
              <li>Approve campaigns in a timely manner</li>
              <li>Comply with advertising platform policies</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Delays in approvals may affect campaign performance.
            </p>
          </section>

          {/* 5. Intellectual Property */}
          <section>
            <h2 className="text-xl font-bold mb-4">5. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              Marketing materials created by Maxetra remain the property of the Client upon full payment.
              Internal strategies, frameworks, and processes remain the property of Maxetra.
            </p>
          </section>

          {/* 6. Confidentiality */}
          <section>
            <h2 className="text-xl font-bold mb-4">6. Confidentiality</h2>
            <p className="text-gray-700 leading-relaxed">
              Both parties agree to maintain confidentiality of business, marketing data,
              and proprietary information.
            </p>
          </section>

          {/* 7. Limitation of Liability */}
          <section>
            <h2 className="text-xl font-bold mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Maxetra shall not be liable for:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-gray-700">
              <li>Indirect or consequential damages</li>
              <li>Loss of profits or business</li>
              <li>Platform account suspensions</li>
              <li>Third-party service failures</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Total liability shall not exceed the total fees paid to Maxetra.
            </p>
          </section>

          {/* 8. Third-Party Platforms */}
          <section>
            <h2 className="text-xl font-bold mb-4">8. Third-Party Platforms</h2>
            <p className="text-gray-700 leading-relaxed">
              Maxetra works with third-party platforms including but not limited to
              Google, Meta, LinkedIn, and other marketing tools.
              We are not responsible for changes in their policies,
              algorithms, or account suspensions.
            </p>
          </section>

          {/* 9. Termination */}
          <section>
            <h2 className="text-xl font-bold mb-4">9. Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              Either party may terminate services with written notice
              (minimum 15–30 days unless otherwise agreed).
              No refunds will be issued for services already delivered.
            </p>
          </section>

          {/* 10. Governing Law */}
          <section>
            <h2 className="text-xl font-bold mb-4">10. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              This Agreement shall be governed by and interpreted in accordance
              with the laws of the State of Florida, United States.
            </p>
          </section>

          {/* 11. Amendments */}
          <section>
            <h2 className="text-xl font-bold mb-4">11. Amendments</h2>
            <p className="text-gray-700 leading-relaxed">
              Maxetra reserves the right to update these Terms & Conditions at any time.
              Updates will be posted on the website.
            </p>
          </section>

          {/* 12. Contact Information */}
          <section>
            <h2 className="text-xl font-bold mb-4">12. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Maxetra LLC</strong><br />
              7901 4th St N STE 300<br />
              St. Petersburg, FL 33702, USA<br />
              Email: Hello@maxetra.com
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}