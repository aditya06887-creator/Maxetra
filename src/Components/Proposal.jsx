import React, { useState } from "react";
import IntlTelInput from "intl-tel-input/react";
import { FiArrowLeft, FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

import { FaEuroSign, FaDollarSign, FaPoundSign, FaChevronDown } from "react-icons/fa";

const currencies = [
  { code: "USD", icon: <FaDollarSign />, label: "$" },
  { code: "EUR", icon: <FaEuroSign />, label: "€" },
  { code: "GBP", icon: <FaPoundSign />, label: "£" },
];

const budgets = [
  "1,000 – 4,999",
  "5,000 – 9,999",
  "10,000 – 24,999",
  "25,000 – 99,999",
  "100,000+",
];

export default function Proposal() {
  const [phone, setPhone] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errorCode, setErrorCode] = useState(null);

  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [budgetOpen, setBudgetOpen] = useState(false);

  const [currency, setCurrency] = useState(currencies[0]);
  const [budget, setBudget] = useState("");
  const [isOpen, setIsOpen] = useState(false);


  return (
    <section className="">


      {/* LEFT FORM */}
      <div className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border-2">
        <h2 className="text-3xl font-bold text-[#001e37]">
          Ready to Scale Your Digital Presence?
        </h2>
        <p className="text-gray-600 mb-6">
          Kickstart your digital success with a simple, proven process:
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

          <div className="w-full max-w-xl">

            <div className="flex gap-3">
              {/* Currency Dropdown */}
              <div className="relative w-24">
                <button
                  type="button"
                  onClick={() => setCurrencyOpen(!currencyOpen)}
                  className="w-full h-14 bg-white border rounded-xl flex items-center justify-between px-4 shadow-sm"
                >
                  <span className="text-lg">{currency.label}</span>
                  <FaChevronDown className="text-gray-400 text-sm" />
                </button>

                {currencyOpen && (
                  <div className="absolute z-20 mt-2 w-full bg-white border rounded-xl shadow-lg">
                    {currencies.map((item) => (
                      <button
                        key={item.code}
                        onClick={() => {
                          setCurrency(item);
                          setCurrencyOpen(false);
                        }}
                        className="w-full px-4 py-3 text-left hover:bg-gray-100 flex items-center gap-2 rounded-xl"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Budget Dropdown */}
              <div className="relative flex-1">
                <button
                  type="button"
                  onClick={() => setBudgetOpen(!budgetOpen)}
                  className="w-full h-14  border rounded-xl flex items-center justify-between px-5"
                >
                  <span className={budget ? "text-gray-900" : "text-gray-400"}>
                    {budget || "Projected budget ?"}
                  </span>
                  <FaChevronDown
                    onClick={() => setIsOpen(!isOpen)}
                    className={`text-gray-400 text-sm transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                      }`}
                  />

                </button>

                {budgetOpen && (
                  <div className="absolute z-20 mt-2 w-full bg-white border rounded-xl shadow-lg">
                    {budgets.map((item) => (
                      <button
                        key={item}
                        onClick={() => {
                          setBudget(item);
                          setBudgetOpen(false);
                        }}
                        className="w-full px-5 py-3 text-left hover:bg-gray-100 rounded-xl"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <p className="font-semibold text-lg mt-4">Services*</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            {[
              "SEO",
              "PPC",
              "AI Search",
              "Web Design",
              "Content Writing",
              "Local SEO",
              "Social Media Ads",
              "Email Marketing",
              "Link Building",
              "Video Production",
              "CR0",
              "E-Commerce"
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

          <label className="flex items-center gap-2 text-xs cursor-pointer">
            <input type="checkbox" />
            <div>
              I agree to the <Link to="/term" className="underline">Term of Service </Link> and <Link to="/privacy" className="underline">Privacy Policy</Link>
            </div>
          </label>

          <div className="flex items-center">
            <button
              disabled={!isValid}
              className={`  font-semibold cursor-pointer py-3 px-10 mx-auto rounded-full transition ${isValid
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600 text-white"
                }`}
            >
              Submit Inquiry
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}
