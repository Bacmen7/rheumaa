"use client";

import { useState } from "react";
import { MapPin, Star, ChevronLeft, Play, X, Check, Clock } from "lucide-react";

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState("overview");
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const tabs = [
        { id: "overview", label: "Overview" },
        { id: "background", label: "Background" },
    ];

    const specializations = ["Rheumatologist", "Nephrologist"];
    const services = ["Individual Consultation", "Rheumatology"];

    const scrollToSection = (id: string) => {
        setActiveTab(id);
        const element = document.getElementById(id);
        if (element) {
            const offset = 120;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
        }
    };

    return (
        <div className="min-h-screen bg-white text-[#182439]" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>

            <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-12 lg:pb-16">
                {/* Doctor Header */}
                <div className="mb-4 sm:mb-6 mt-4 sm:mt-6 lg:mt-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div>
                            <h1 className="text-3xl sm:text-4xl lg:text-[56px] font-light mb-2 sm:mb-3 leading-tight text-[#182439]" style={{ fontFamily: "'Loretta', Georgia, serif" }}>
                                Dr. Raghavendra H
                            </h1>

                            <p className="text-gray-600 text-sm sm:text-base mb-2">
                                MBBS, MD - General Medicine, DM - Clinical Immunology and Rheumatology
                            </p>

                            <p className="text-[#182439] font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
                                13 Years Experience Overall <span className="text-gray-500 font-normal">(4 years as specialist)</span>
                            </p>

                            <div className="flex flex-wrap gap-2 sm:gap-3 mt-2">
                                <div className="flex gap-2 items-center text-sm sm:text-base text-gray-600 bg-[#EEF2F9] px-3 sm:px-4 py-2 sm:py-2.5" style={{ borderRadius: '25px' }}>
                                    <MapPin size={14} className="shrink-0 text-[#182439] sm:w-4 sm:h-4" />
                                    <span>Bangalore</span>
                                </div>
                                {/* <div className="flex gap-2 items-center text-sm text-gray-600 bg-[#EEF2F9] px-3 py-2" style={{ borderRadius: '25px' }}>
                                    <MapPin size={14} className="shrink-0 text-[#182439]" />
                                    <span>Manipal Hospital, Hebbal, Bangalore</span>
                                </div>
                                <div className="flex gap-2 items-center text-sm text-gray-600 bg-[#EEF2F9] px-3 py-2" style={{ borderRadius: '25px' }}>
                                    <MapPin size={14} className="shrink-0 text-[#182439]" />
                                    <span>Manipal Hospital, Yelahanka, Bangalore</span>
                                </div> */}
                            </div>
                        </div>

                        <div className="flex items-center gap-2 sm:gap-3 mt-4 lg:mt-8">
                            <a href="tel:+919876543210" className="px-4 sm:px-6 py-2.5 sm:py-3 border border-[#B1EFEC] text-[#182439] font-semibold hover:bg-[#D4F3F2] transition-colors text-sm sm:text-base whitespace-nowrap" style={{ borderRadius: '25px' }}>
                                +91 98765 43210
                            </a>
                            <a href="#" className="px-4 sm:px-6 py-2.5 sm:py-3 bg-[#B1EFEC] text-[#182439] font-semibold hover:bg-[#9ae5e1] transition-colors text-sm sm:text-base whitespace-nowrap" style={{ borderRadius: '25px' }}>
                                Book Online
                            </a>
                        </div>
                    </div>
                </div>

                {/* Image Gallery */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-3 mb-6 sm:mb-8">
                    <div className="lg:col-span-7 relative h-[220px] sm:h-[280px] lg:h-[380px] bg-gray-100 group cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl" onClick={() => setIsVideoOpen(true)}>
                        <img src="/image.png" alt="Dr. Raghavendra with patient" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors shrink-0">
                                <Play size={20} className="text-[#2B3445] ml-1 shrink-0" fill="#2B3445" />
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 grid grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-3 h-[140px] sm:h-[180px] lg:h-[380px]">
                        <div className="relative bg-gray-100 overflow-hidden h-full lg:h-[185px] rounded-xl sm:rounded-2xl">
                            <img src="/im2.png" alt="Doctor Portrait" className="w-full h-full object-cover object-top" />
                        </div>
                        <div className="relative bg-gray-100 overflow-hidden h-full lg:h-[185px] rounded-xl sm:rounded-2xl">
                            <img src="/image.png" alt="Clinic Interior" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* Tab Navigation */}
                <div className="border-b border-gray-200 mb-6 sm:mb-8">
                    <div className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => scrollToSection(tab.id)}
                                className={`py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors cursor-pointer ${activeTab === tab.id ? "border-[#182439] text-[#182439]" : "border-transparent text-gray-400 hover:text-gray-600"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    <div className="lg:col-span-8 space-y-8 sm:space-y-10">
                        {/* Overview */}
                        <section id="overview">
                            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-light mb-4 sm:mb-5 text-[#182439]" style={{ fontFamily: "'Loretta', Georgia, serif" }}>Overview</h2>
                            <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">About</p>
                            <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                                <p>Dr. Raghavendra H is a Rheumatologist and Nephrologist in Kalyan Nagar, Bangalore and has an experience of 13 years in these fields. Dr. Raghavendra H practices at Trilife Hospital in Kalyan Nagar, Bangalore, Manipal Hospital in Hebbal, Bangalore and Manipal Hospital in Yelahanka, Bangalore.</p>
                                <p>He completed MBBS from Father Muller Medical College, Mangalore in 2012, MD - General Medicine from Rajasthan University Of Health Sciences in 2016 and DM - Clinical Immunology and Rheumatology from The Tamil Nadu Dr. M.G.R. Medical University (TNMGRMU) in 2020.</p>
                                <p>He is a member of Indian Society of Nephrology (ISN) and Karnataka Medical Council. Some of the services provided by the doctor are: Individual Consultation and Rheumatology etc.</p>
                            </div>

                            <div className="mt-6 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                <div>
                                    <h3 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4 text-[#182439]">Specializations</h3>
                                    <ul className="space-y-2 sm:space-y-2.5">
                                        {specializations.map((spec, index) => (
                                            <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                                                <Check size={12} className="text-[#B1EFEC] mt-0.5 shrink-0 sm:w-3.5 sm:h-3.5" />
                                                <span>{spec}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4 text-[#182439]">Services</h3>
                                    <ul className="space-y-2 sm:space-y-2.5">
                                        {services.map((service, index) => (
                                            <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                                                <Check size={12} className="text-[#B1EFEC] mt-0.5 shrink-0 sm:w-3.5 sm:h-3.5" />
                                                <span>{service}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <hr className="border-gray-200" />

                        {/* Background */}
                        <section id="background">
                            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-light mb-4 sm:mb-5 text-[#182439]" style={{ fontFamily: "'Loretta', Georgia, serif" }}>Experience & Qualifications</h2>

                            <div className="mb-6 sm:mb-8">
                                <h3 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4 text-[#182439]">Education</h3>
                                <ul className="space-y-2.5 sm:space-y-3">
                                    <li className="flex gap-2.5 sm:gap-3">
                                        <div className="w-1.5 h-1.5 bg-[#182439] rounded-full mt-1.5 sm:mt-2 shrink-0"></div>
                                        <div>
                                            <p className="font-medium text-gray-800 text-sm sm:text-base">MBBS</p>
                                            <p className="text-xs sm:text-sm text-gray-500">Father Muller Medical College, Mangalore, 2012</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-2.5 sm:gap-3">
                                        <div className="w-1.5 h-1.5 bg-[#182439] rounded-full mt-1.5 sm:mt-2 shrink-0"></div>
                                        <div>
                                            <p className="font-medium text-gray-800 text-sm sm:text-base">MD - General Medicine</p>
                                            <p className="text-xs sm:text-sm text-gray-500">Rajasthan University Of Health Sciences, 2016</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-2.5 sm:gap-3">
                                        <div className="w-1.5 h-1.5 bg-[#182439] rounded-full mt-1.5 sm:mt-2 shrink-0"></div>
                                        <div>
                                            <p className="font-medium text-gray-800 text-sm sm:text-base">DM - Clinical Immunology and Rheumatology</p>
                                            <p className="text-xs sm:text-sm text-gray-500">The Tamil Nadu Dr. M.G.R. Medical University (TNMGRMU), 2020</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6 sm:mb-8">
                                <h3 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4 text-[#182439]">Memberships</h3>
                                <ul className="space-y-2">
                                    <li className="flex gap-2.5 sm:gap-3">
                                        <div className="w-1.5 h-1.5 bg-[#182439] rounded-full mt-1.5 sm:mt-2 shrink-0"></div>
                                        <span className="text-sm sm:text-base text-gray-700">Indian Society of Nephrology (ISN)</span>
                                    </li>
                                    <li className="flex gap-2.5 sm:gap-3">
                                        <div className="w-1.5 h-1.5 bg-[#182439] rounded-full mt-1.5 sm:mt-2 shrink-0"></div>
                                        <span className="text-sm sm:text-base text-gray-700">Karnataka Medical Council</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4 text-[#182439]">Registrations</h3>
                                <ul className="space-y-2">
                                    <li className="flex gap-2.5 sm:gap-3">
                                        <div className="w-1.5 h-1.5 bg-[#182439] rounded-full mt-1.5 sm:mt-2 shrink-0"></div>
                                        <span className="text-sm sm:text-base text-gray-700">94244 - Karnataka Medical Council, 2012</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <hr className="border-gray-200" />

                        {/* Patient Outcomes */}
                        <section id="outcomes">
                            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-light mb-2 text-[#182439]" style={{ fontFamily: "'Loretta', Georgia, serif" }}>Patient Outcomes</h2>
                            <p className="text-[#182439] font-medium text-xs sm:text-sm mb-4 sm:mb-6">High success rates, faster recovery, and long-term relief</p>
                            <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-5">Dr. Raghavendra H is known for delivering strong clinical outcomes such as:</p>
                            <ul className="space-y-2.5 sm:space-y-3">
                                {["Improved leg circulation and function", "Relief from pain, heaviness, swelling, and cramps", "Better skin health & ulcer healing", "Noticeable cosmetic improvement", "Minimal downtime — patients resume daily activities quickly"].map((item, idx) => (
                                    <li key={idx} className="flex gap-2.5 sm:gap-3">
                                        <Check size={16} className="text-[#B1EFEC] mt-0.5 shrink-0 sm:w-[18px] sm:h-[18px]" />
                                        <span className="text-sm sm:text-base text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <hr className="border-gray-200" />

                        {/* Patient Stories */}
                        <section id="reviews">
                            <div className="flex items-center justify-between mb-4 sm:mb-6">
                                <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-light text-[#182439]" style={{ fontFamily: "'Loretta', Georgia, serif" }}>Patient Stories</h2>
                                {/* <div className="flex items-center gap-2 bg-[#D4F3F2] px-4 py-2" style={{ borderRadius: '25px' }}>
                                    <Star size={16} className="text-yellow-500 fill-yellow-500" />
                                    <span className="font-semibold text-[#182439]">4.9</span>
                                    <span className="text-gray-500 text-sm">(28 reviews)</span>
                                </div> */}
                            </div>

                            <div className="space-y-3 sm:space-y-4">
                                {[
                                    { name: "Ramakrishna Kakumani", initial: "R", time: "5 months ago", tags: ["Doctor friendliness", "Treatment satisfaction", "Value for money"], review: "My mother-in-law had been undergoing treatment for joint pains at KIMS Ongole for over two years, but unfortunately, there was no improvement. After consulting Dr. Raghavendra, we saw significant improvement in her condition." },
                                    { name: "T V Joy", initial: "T", time: "3 years ago", review: "Dr. Raghavendra is always approachable, which is not the case with many others. I am completely satisfied with his way of treatment. Most importantly he is never in a hurry and spends lot of time to comfort the patient." },
                                    { name: "Shoma Nair", initial: "S", time: "3 years ago", review: "I have been visiting Dr. Raghavendra for a year now for my mother's Arthritis Management. He does thorough examination and is compassionate and warm towards patients." },
                                    { name: "K K Mondal", initial: "K", time: "1 year ago", visitedFor: "Systemic Sclerosis", review: "Extremely helpful appointment with Dr Raghavendra H for my mother-in-law's scleroderma treatment. The explanation of her health issues and management protocol advice was awesome." },
                                ].map((r, idx) => (
                                    <div key={idx} className="bg-[#EEF2F9] p-4 sm:p-5" style={{ borderRadius: '20px' }}>
                                        <div className="flex items-start gap-2.5 sm:gap-3">
                                            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-semibold text-xs sm:text-sm shrink-0 bg-gray-200 text-gray-600">{r.initial}</div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-start justify-between gap-2 sm:gap-3 mb-1">
                                                    <div>
                                                        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                                                            <h4 className="font-semibold text-[#182439] text-xs sm:text-sm">{r.name}</h4>
                                                            <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs bg-[#B1EFEC] text-[#182439] px-1.5 sm:px-2 py-0.5" style={{ borderRadius: '25px' }}>
                                                                <Check size={8} className="sm:w-2.5 sm:h-2.5" /> Verified
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-0.5 sm:gap-1 mt-1">
                                                            {[1, 2, 3, 4, 5].map((star) => (
                                                                <Star key={star} size={10} className="text-yellow-500 fill-yellow-500 sm:w-3 sm:h-3" />
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <span className="text-[10px] sm:text-xs text-gray-400 whitespace-nowrap">{r.time}</span>
                                                </div>
                                                {r.tags && (
                                                    <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-2 mt-2">
                                                        {r.tags.map((tag, i) => (
                                                            <span key={i} className="text-[10px] sm:text-xs bg-white border border-gray-200 text-gray-600 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full">{tag}</span>
                                                        ))}
                                                    </div>
                                                )}
                                                {r.visitedFor && (
                                                    <div className="inline-block text-[10px] sm:text-xs bg-blue-50 text-blue-700 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full mb-2 mt-2">Visited for: {r.visitedFor}</div>
                                                )}
                                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-2">{r.review}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* <a href="#" className="inline-flex items-center gap-1 mt-5 text-[#182439] text-sm font-medium hover:underline">Show all stories (28)</a> */}
                        </section>

                        <hr className="border-gray-200" />

                        {/* Clinic Locations */}
                        <section id="locations">
                            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-light mb-2 text-[#182439]" style={{ fontFamily: "'Loretta', Georgia, serif" }}>Clinic Locations</h2>
                            <p className="text-gray-500 text-sm sm:text-base mb-6 sm:mb-8">Dr. Raghavendra H currently consults and performs procedures at:</p>
                            <div className="space-y-4 sm:space-y-6">
                                {[
                                    { name: "Trilife Hospital - Kalyan Nagar", time: "Tue, Thu, Sat - 10am - 2pm", mapUrl: "https://maps.googleapis.com/maps/api/staticmap?center=Kalyan+Nagar,Bangalore&zoom=14&size=200x150&maptype=roadmap&markers=color:red%7CKalyan+Nagar,Bangalore&key=YOUR_KEY", address: "Kalyan Nagar, Bangalore" },
                                    { name: "Manipal Hospital - Hebbal", time: "Mon to Sat - 4pm - 6pm", mapUrl: "https://maps.googleapis.com/maps/api/staticmap?center=Hebbal,Bangalore&zoom=14&size=200x150&maptype=roadmap&markers=color:red%7CHebbal,Bangalore&key=YOUR_KEY", address: "Hebbal, Bangalore" },
                                    { name: "Manipal Hospital - Yelahanka", time: "Mon, Wed, Fri - 10am - 12pm", mapUrl: "https://maps.googleapis.com/maps/api/staticmap?center=Yelahanka,Bangalore&zoom=14&size=200x150&maptype=roadmap&markers=color:red%7CYelahanka,Bangalore&key=YOUR_KEY", address: "Yelahanka, Bangalore" },
                                ].map((loc, idx) => (
                                    <div key={idx} className="flex gap-3 sm:gap-4">
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-[#182439] mb-1 text-sm sm:text-base">{loc.name}</h3>
                                            <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-500 mb-2">
                                                <Clock size={12} className="shrink-0 sm:w-3.5 sm:h-3.5" />
                                                <span>{loc.time}</span>
                                            </div>
                                            <a href={`https://www.google.com/maps/search/${encodeURIComponent(loc.name + ', Bangalore')}`} target="_blank" rel="noopener noreferrer" className="text-[#182439] text-xs sm:text-sm font-medium hover:underline inline-flex items-center gap-1">
                                                <MapPin size={12} className="sm:w-3.5 sm:h-3.5" />
                                                Get Directions
                                            </a>
                                        </div>
                                        <div className="w-20 h-14 sm:w-28 sm:h-20 bg-[#EEF2F9] overflow-hidden shrink-0 rounded-lg sm:rounded-xl relative -ml-2">
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#e8f4f3] to-[#d4e8e6]">
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="relative">
                                                        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#B1EFEC] rounded-full border-2 border-[#182439] shadow-md"></div>
                                                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#182439]"></div>
                                                    </div>
                                                </div>
                                                <div className="absolute inset-0 opacity-30">
                                                    <div className="absolute top-1/4 left-0 right-0 h-[1px] bg-gray-400"></div>
                                                    <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gray-400"></div>
                                                    <div className="absolute top-3/4 left-0 right-0 h-[1px] bg-gray-400"></div>
                                                    <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-gray-400"></div>
                                                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-400"></div>
                                                    <div className="absolute left-3/4 top-0 bottom-0 w-[1px] bg-gray-400"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <hr className="border-gray-200" />

                        {/* BOOK AN APPOINTMENT CTA SECTION */}
                        {/* <section id="book-appointment" className="bg-[#182439] p-8 lg:p-10" style={{ borderRadius: '25px' }}>
                            <h2 className="text-2xl lg:text-3xl font-medium mb-3 text-white" style={{ fontFamily: "'Loretta', Georgia, serif" }}>
                                Book an Appointment
                            </h2>
                            <p className="text-gray-300 text-base lg:text-base leading-relaxed mb-8 max-w-xl">
                                Start your journey to healthier legs with a specialist who understands venous health inside-out.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3">
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center gap-2 bg-[#B1EFEC] hover:bg-[#9ae5e1] text-[#182439] font-semibold py-3.5 px-8 transition-all duration-300"
                                    style={{ borderRadius: '25px' }}
                                >
                                    Book Consultation with Dr. Raghavendra
                                </a>
                                <a
                                    href="tel:+919876543210"
                                    className="inline-flex items-center justify-center gap-2 border-2 border-[#B1EFEC] text-white font-semibold py-3.5 px-8 hover:bg-[#B1EFEC] hover:text-[#182439] transition-all duration-300"
                                    style={{ borderRadius: '25px' }}
                                >
                                    Call Clinic
                                </a>
                            </div>
                        </section> */}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 hidden lg:block">
                        <div className="sticky top-24">
                            <div className="border border-gray-200 overflow-hidden bg-white p-5 sm:p-6" style={{ borderRadius: '25px' }}>
                                <div className="w-24 h-24 sm:w-32 sm:h-32 overflow-hidden mb-4 sm:mb-6" style={{ backgroundColor: '#D4F3F2', borderRadius: '20px' }}>
                                    <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400" alt="Dr. Raghavendra H" className="w-full h-full object-cover object-top" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-medium mb-1 text-[#182439]" style={{ fontFamily: "'Loretta', Georgia, serif" }}>Dr. Raghavendra H</h3>
                                <p className="text-gray-500 text-sm sm:text-base mb-4 sm:mb-5">Rheumatologist, Nephrologist</p>
                                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                    <span className="text-sm sm:text-base text-gray-700"><span className="font-medium">13 Years</span> Experience</span>
                                </div>
                                <div className="flex gap-2">
                                    <a href="tel:+919876543210" className="flex-1 py-2 sm:py-2.5 border border-[#B1EFEC] text-center font-bold text-[#182439] hover:bg-[#D4F3F2] transition-colors text-[11px] sm:text-[13px] whitespace-nowrap" style={{ borderRadius: '25px' }}>+91 98765 43210</a>
                                    <a href="#" className="flex-1 py-2 sm:py-2.5 bg-[#B1EFEC] text-[#182439] text-center font-bold hover:bg-[#9ae5e1] transition-colors text-[11px] sm:text-[13px] whitespace-nowrap" style={{ borderRadius: '25px' }}>Book Online</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Video Modal */}
            {isVideoOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90">
                    <div className="relative w-full max-w-4xl aspect-video bg-black rounded">
                        <button onClick={() => setIsVideoOpen(false)} className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors flex items-center gap-2 cursor-pointer">
                            <span className="text-sm">Close</span>
                            <X size={24} />
                        </button>
                        <div className="w-full h-full flex items-center justify-center text-white bg-neutral-900 rounded">
                            <div className="text-center">
                                <Play size={48} className="mx-auto mb-4 opacity-50" />
                                <p className="text-gray-400">Dr. Raghavendra Introduction Video</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Book an Appointment Section */}
            <section className="py-12 sm:py-16 lg:py-24 mt-8 sm:mt-12 lg:mt-16" style={{ backgroundColor: '#182439' }}>
                <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl font-light mb-4 sm:mb-6 text-white" style={{ fontFamily: "'Loretta', Georgia, serif" }}>
                        Book an Appointment
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto leading-relaxed">
                        Start your journey to healthier legs with a specialist who understands venous health inside-out.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                        <button className="px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 font-semibold text-sm sm:text-base transition-all hover:opacity-90" style={{ backgroundColor: '#B1EFEC', color: '#182439', borderRadius: '25px' }}>
                            Book Consultation with Dr. Raghavendra
                        </button>
                        <button className="px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 font-semibold text-sm sm:text-base border-2 border-white text-white transition-all hover:bg-white/10" style={{ borderRadius: '25px' }}>
                            Call Clinic
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 sm:py-12 border-t border-slate-200" style={{ backgroundColor: '#EEF2F9' }}>
                <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 opacity-60 text-xs sm:text-sm">
                    <p>© 2024 RheumaCare Clinic. All rights reserved.</p>
                    <div className="flex gap-4 sm:gap-6">
                        <a href="#" className="hover:text-teal-800">Privacy Policy</a>
                        <a href="#" className="hover:text-teal-800">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
