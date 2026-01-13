import React from 'react';

export default function Term() {
    return (
        <div className="bg-white min-h-screen text-[#1a1a1a] font-sans selection:bg-red-100">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center py-16 bg-gray-50 border-b border-gray-200">
        <h1 className="text-4xl md:text-5xl font-bold text-center px-6">
          Terms & Conditions
        </h1>
        <p className="mt-4 text-gray-500 text-sm uppercase tracking-widest">
          Last Updated: January 2026
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <div className="space-y-12">
          
          {/* 1. Terms */}
          <section>
            <h2 className="text-xl font-bold mb-4">1. Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing this web site, you are agreeing to be bound by these web site Terms and Conditions of Use, 
              all applicable laws and regulations, and agree that you are responsible for compliance with any 
              applicable local laws. If you do not agree with any of these terms, you are prohibited from using 
              or accessing this site. The materials contained in this web site are protected by applicable 
              copyright and trade mark law.
            </p>
          </section>

          {/* 2. Use License */}
          <section>
            <h2 className="text-xl font-bold mb-4">2. Use License</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) 
                on Maxetra's web site for personal, non-commercial transitory viewing only. This is the 
                grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-8 space-y-2 text-[15px]">
                <li>Modify or copy the materials;</li>
                <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>Attempt to decompile or reverse engineer any software contained on Maxetra's web site;</li>
                <li>Remove any copyright or other proprietary notations from the materials; or</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
              <p>
                This license shall automatically terminate if you violate any of these restrictions and may be 
                terminated by Maxetra at any time. Upon terminating your viewing of these materials or 
                upon the termination of this license, you must destroy any downloaded materials in your 
                possession whether in electronic or printed format.
              </p>
            </div>
          </section>

          {/* 3. Disclaimer */}
          <section>
            <h2 className="text-xl font-bold mb-4">3. Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed">
              The materials on Maxetra's web site are provided "as is". Maxetra makes no warranties, 
              expressed or implied, and hereby disclaims and negates all other warranties, including without 
              limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, 
              or non-infringement of intellectual property or other violation of rights. Further, Maxetra 
              does not warrant or make any representations concerning the accuracy, likely results, or 
              reliability of the use of the materials on its Internet web site or otherwise relating to such 
              materials or on any sites linked to this site.
            </p>
          </section>

          {/* 4. Limitations */}
          <section>
            <h2 className="text-xl font-bold mb-4">4. Limitations</h2>
            <p className="text-gray-700 leading-relaxed">
              In no event shall Maxetra or its suppliers be liable for any damages (including, without 
              limitation, damages for loss of data or profit, or due to business interruption,) arising out 
              of the use or inability to use the materials on Maxetra's Internet site, even if Maxetra 
              Agency or a Maxetra authorized representative has been notified orally or in writing of 
              the possibility of such damage. Because some jurisdictions do not allow limitations on implied 
              warranties, or limitations of liability for consequential or incidental damages, these 
              limitations may not apply to you.
            </p>
          </section>

          {/* 5. Revisions and Errata */}
          <section>
            <h2 className="text-xl font-bold mb-4">5. Revisions and Errata</h2>
            <p className="text-gray-700 leading-relaxed">
              The materials appearing on Maxetra's web site could include technical, typographical, or 
              photographic errors. Maxetra does not warrant that any of the materials on its web site 
              are accurate, complete, or current. Maxetra may make changes to the materials contained 
              on its web site at any time without notice. Maxetra does not, however, make any 
              commitment to update the materials.
            </p>
          </section>

          {/* 6. Links */}
          <section>
            <h2 className="text-xl font-bold mb-4">6. Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Maxetra has not reviewed all of the sites linked to its Internet web site and is not 
              responsible for the contents of any such linked site. The inclusion of any link does not imply 
              endorsement by Maxetra of the site. Use of any such linked web site is at the user's own risk.
            </p>
          </section>

          {/* 7. Site Terms of Use Modifications */}
          <section>
            <h2 className="text-xl font-bold mb-4">7. Site Terms of Use Modifications</h2>
            <p className="text-gray-700 leading-relaxed">
              Maxetra may revise these terms of use for its web site at any time without notice. By 
              using this web site you are agreeing to be bound by the then current version of these Terms 
              and Conditions of Use.
            </p>
          </section>

          {/* 8. Governing Law */}
          <section>
            <h2 className="text-xl font-bold mb-4">8. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              Any claim relating to Maxetra's web site shall be governed by the laws of the State of 
              Texas without regard to its conflict of law provisions.
            </p>
          </section>

        </div>
      </div>
    </div>
    );
};