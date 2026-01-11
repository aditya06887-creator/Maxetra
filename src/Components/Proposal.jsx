import React, { useState } from "react";
import IntlTelInput from "intl-tel-input/react";
import { FiArrowLeft, FiCheckCircle } from "react-icons/fi";

export default function Proposal() {
  const [phone, setPhone] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errorCode, setErrorCode] = useState(null);

  return (
    <section className="bg-[#6f8437] py-12 px-4">


        {/* LEFT FORM */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-lg">
          <h2 className="text-3xl font-bold text-[#6f8437]">
            Experience Real Results
          </h2>
          <p className="text-gray-600 mb-6">
            Partner with Thrive Internet Marketing Agency and scale your business.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="border rounded-lg p-3" placeholder="First Name*" />
              <input className="border rounded-lg p-3" placeholder="Last Name*" />
              <input className="border rounded-lg p-3" placeholder="Company / Organization*" />
              <input className="border rounded-lg p-3" placeholder="Website" />
            </div>

            <input className="border rounded-lg p-3 w-full" placeholder="Email Address*" />

            {/* 📞 INTERNATIONAL PHONE INPUT */}
            <div className="border rounded-lg px-2 py-1">
              <IntlTelInput
                initialValue={phone}
                onChangeNumber={setPhone}
                onChangeValidity={setIsValid}
                onChangeErrorCode={setErrorCode}
                initOptions={{
                  initialCountry: "auto",
                  geoIpLookup: (callback) => {
                    fetch("https://ipapi.co/json/")
                      .then((res) => res.json())
                      .then((data) => {
                        // ✅ MUST be lowercase ISO-2
                        callback(data.country?.toLowerCase() || "us");
                      })
                      .catch(() => callback("us"));
                  },
                  separateDialCode: true,
                  nationalMode: false,
                  utilsScript:
                    "/intl-tel-input/js/utils.js",
                }}
                inputProps={{
                  className:
                    "w-full py-3 pl-14 pr-4 outline-none",
                  placeholder: "Phone number",
                }}
              />
            </div>

            {/* ❌ Validation message */}
            {!isValid && phone && (
              <p className="text-xs text-red-500">
                Please enter a valid phone number
              </p>
            )}

            <p className="font-semibold text-lg mt-4">Services*</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
              {[
                "SEO",
                "PPC",
                "AI Search Optimization",
                "Web Design",
                "Content Writing",
                "Local SEO",
                "Social Media Ads",
                "Email Marketing",
                "Link Building",
              ].map((service) => (
                <label key={service} className="flex items-center gap-2">
                  <input type="checkbox" />
                  {service}
                </label>
              ))}
            </div>

            <textarea
              className="border rounded-lg p-3 w-full"
              placeholder="Tell us about your business"
            />

            <label className="flex items-center gap-2 text-xs">
              <input type="checkbox" />
              I consent to receive notifications and promotional messages
            </label>

            <button
              disabled={!isValid}
              className={`w-full font-semibold py-3 rounded-full transition ${
                isValid
                  ? "bg-orange-500 hover:bg-orange-600 text-white"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              SEND MY FREE PROPOSAL
            </button>
          </form>
        </div>
    </section>
  );
}
