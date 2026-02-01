import React, { useState } from "react";
import IntlTelInput from "intl-tel-input/react";
import "intl-tel-input/build/css/intlTelInput.css";
import { Link } from "react-router-dom";
import { FaChevronDown, FaTimes } from "react-icons/fa";


const servicesList = ["SEO", "PPC", "Web Design", "Content Writing", "Local SEO", "Social Media Ads", "Email Marketing", "Video Production", "CRO", "E-Commerce"];

const currencies = [
    { code: "USD", label: "$" },
    { code: "EUR", label: "€" },
    { code: "GBP", label: "£" },
];

const budgets = ["1,000 – 4,999", "5,000 – 9,999", "10,000 – 24,999", "25,000 – 99,999", "100,000+"];

export default function Proposal2({phone1,phone2}) {
    // Required Fields State
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");

    // Phone State
    const [phone, setPhone] = useState("");
    const [isPhoneValid, setIsPhoneValid] = useState(false);

    // Dropdown States
    const [currencyOpen, setCurrencyOpen] = useState(false);
    const [budgetOpen, setBudgetOpen] = useState(false);
    const [currency, setCurrency] = useState(currencies[0]);
    const [budget, setBudget] = useState("");

    // Services State
    const [serviceOpen, setServiceOpen] = useState(false);
    const [selectedServices, setSelectedServices] = useState([]);

    const toggleService = (service) => {
        setSelectedServices((prev) =>
            prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
        );

        setServiceOpen(false);
    };

    // Global Validation: Check only what is strictly required
    const canSubmit =
        firstName.trim() !== "" &&
        email.includes("@") &&
        selectedServices.length > 0 &&
        (phone === "" || isPhoneValid); // Allowed if phone is empty OR valid

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!canSubmit) return;

        console.log("Form Submitted Successfully!", {
            firstName,
            email,
            phone,
            selectedServices,
            budget,
            currency: currency.code
        });
        alert("Inquiry Sent!");
    };

    return (
        <section className="flex flex-col lg:flex-row py-8 px-4 lg:px-12 gap-8 items-start justify-center max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row w-full bg-white rounded-3xl p-6 md:p-10 shadow-2xl border border-gray-100 lg:ml-10 lg:mr-10">

                {/* Image Section */}
                <img src={phone1} className=" w-full max-w-lg aspect-square bg-orange-50 rounded-3xl overflow-hidden   hidden lg:block">
                </img>

                <img src={phone2} className="w-full bg-orange-50 rounded-t-xl overflow-hidden mb-10 block lg:hidden">
                </img>

                {/* Form Section */}
                <form className="space-y-5 mx-auto w-full lg:pl-10" onSubmit={handleSubmit}>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-semibold text-gray-700">First Name*</label>
                            <input
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-orange-500 outline-none transition"
                                placeholder="John"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-semibold text-gray-700">Last Name (Optional)</label>
                            <input className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-orange-500 outline-none transition" placeholder="Doe" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-semibold text-gray-700">Company*</label>
                            <input className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-orange-500 outline-none transition" placeholder="Company Name" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-semibold text-gray-700">Website</label>
                            <input className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-orange-500 outline-none transition" placeholder="https://example.com" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold text-gray-700">Email Address*</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-orange-500 outline-none transition"
                            placeholder="john@example.com"
                            required
                        />
                    </div>

                    {/* Phone Input */}
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                        <div className={`border rounded-xl px-2 py-1 transition ${!isPhoneValid && phone ? 'border-red-500' : 'border-gray-300 focus-within:ring-2 focus-within:ring-orange-500'}`}>
                            <IntlTelInput
                                initialValue={phone}
                                onChangeNumber={setPhone}
                                onChangeValidity={setIsPhoneValid}
                                initOptions={{
                                    initialCountry: "us",
                                    separateDialCode: true,
                                    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@24.5.0/build/js/utils.js",
                                }}
                                inputProps={{
                                    className: "w-full py-3 pl-12 outline-none bg-transparent",
                                    placeholder: "Enter phone number",
                                }}
                            />
                        </div>
                        {!isPhoneValid && phone && <p className="text-xs text-red-500 mt-1">Please enter a valid phone number</p>}
                    </div>

                    {/* Budget & Currency (Validation Removed) */}
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold text-gray-700">Projected Budget (Optional)</label>
                        <div className="flex gap-3">
                            <div className="relative w-24">
                                <button type="button" onClick={() => setCurrencyOpen(!currencyOpen)} className="w-full h-[52px] bg-gray-50 border border-gray-300 rounded-xl flex items-center justify-between px-4">
                                    <span className="text-lg font-medium">{currency.label}</span>
                                    <FaChevronDown className={`text-gray-400 text-xs transition-transform ${currencyOpen ? 'rotate-180' : ''}`} />
                                </button>
                                {currencyOpen && (
                                    <div className="absolute z-50 mt-2 w-full bg-white border border-gray-100 rounded-xl shadow-xl">
                                        {currencies.map((item) => (
                                            <button key={item.code} type="button" onClick={() => { setCurrency(item); setCurrencyOpen(false); }} className="w-full px-4 py-3 text-left hover:bg-orange-50">
                                                {item.label}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="relative flex-1">
                                <button type="button" onClick={() => setBudgetOpen(!budgetOpen)} className="w-full h-[52px] bg-gray-50 border border-gray-300 rounded-xl flex items-center justify-between px-5">
                                    <span className={budget ? "text-gray-900" : "text-gray-400"}>{budget || "Select budget range"}</span>
                                    <FaChevronDown className={`text-gray-400 text-xs transition-transform ${budgetOpen ? 'rotate-180' : ''}`} />
                                </button>
                                {budgetOpen && (
                                    <div className="absolute z-50 mt-2 w-full bg-white border border-gray-100 rounded-xl shadow-xl max-h-60 overflow-y-auto">
                                        {budgets.map((item) => (
                                            <button key={item} type="button" onClick={() => { setBudget(item); setBudgetOpen(false); }} className="w-full px-5 py-3 text-left hover:bg-orange-50 border-b border-gray-50 last:border-0">
                                                {item}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Services Multi-Select */}
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold text-gray-700">Services Needed*</label>
                        <div className="relative w-full">
                            <div
                                onClick={() => setServiceOpen(!serviceOpen)}
                                className="min-h-[52px] w-full border border-gray-300 rounded-xl px-3 py-2 flex flex-wrap gap-2 items-center cursor-pointer bg-gray-50"
                            >
                                {selectedServices.length === 0 && <span className="text-gray-400 px-2">Choose services...</span>}
                                {selectedServices.map((item) => (
                                    <span key={item} className="flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-1 rounded-lg text-sm font-medium">
                                        {item}
                                        <FaTimes onClick={(e) => { e.stopPropagation(); toggleService(item); }} className="cursor-pointer" />
                                    </span>
                                ))}
                            </div>

                            {serviceOpen && (
                                <div className="absolute z-40 mt-2 w-full bg-white rounded-xl shadow-2xl border border-gray-100 max-h-64 overflow-y-auto p-2">
                                    {servicesList.map((service) => (
                                        <div
                                            key={service}
                                            onClick={() => toggleService(service)}
                                            className={`px-4 py-2.5 rounded-lg cursor-pointer mb-1 transition ${selectedServices.includes(service) ? "bg-orange-500 text-white" : "hover:bg-orange-50 text-gray-700"}`}
                                        >
                                            {service}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">

                        <label className="text-sm font-semibold text-gray-700">About Your Project</label>

                        <textarea rows="2" className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-orange-500 outline-none transition resize-none" placeholder="Briefly describe your goals..." />
                    </div>

                    <button
                        type="submit"
                        disabled={!canSubmit}
                        className={`w-full font-bold py-4 rounded-xl transition-all shadow-lg ${!canSubmit
                            ? "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none"
                            : "bg-orange-500 hover:bg-orange-600 text-white hover:-translate-y-0.5"
                            }`}
                    >
                        Submit Inquiry
                    </button>

                    <p className="text-center">
                        In a hurry? Give us a call now at <span className="font-bold underline text-orange-500">866-908-4748</span>
                    </p>
                </form>
            </div>
        </section>
    );
}