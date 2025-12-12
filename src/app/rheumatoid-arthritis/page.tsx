"use client";

import React, { useState } from 'react';
import { ArrowLeft, Check, Bone, Move, HandHelping, HeartPulse, UserX, ShieldOff, Dna, HeartHandshake, Cigarette, ClipboardList, TestTube, ScanLine, Activity, PenTool, Moon, Briefcase, Heart, AlertTriangle } from 'lucide-react';

const ignoreReasons = [
  {
    id: 1,
    title: "Irreversible Joint Destruction",
    description: "Chronic inflammation erodes cartilage and bone, leading to permanent joint damage that cannot be reversed even with treatment.",
    icon: Bone,
    image: "/rh1.png"
  },
  {
    id: 2,
    title: "Loss of Function & Mobility",
    description: "Progressive joint damage restricts movement, making simple tasks like walking, gripping, or climbing stairs increasingly difficult.",
    icon: Move,
    image: "/rh1.png"
  },
  {
    id: 3,
    title: "Difficulty with Daily Activities",
    description: "Stiffness and pain can interfere with work, hobbies, and self-care routines, significantly impacting quality of life.",
    icon: HandHelping,
    image: "/rh1.png"
  },
  {
    id: 4,
    title: "Cardiovascular Disease Risk",
    description: "RA-related inflammation increases the risk of heart disease, stroke, and other cardiovascular complications.",
    icon: HeartPulse,
    image: "/rh1.png"
  },
  {
    id: 5,
    title: "Long-term Disability",
    description: "Without proper management, RA can lead to severe disability, affecting independence and requiring long-term care.",
    icon: UserX,
    image: "/rh1.png"
  }
];

const symptomsData = [
  {
    id: "01",
    title: "Joint Pain & Swelling",
    image: "/rh1.png",
    description: "Persistent pain, swelling, and tenderness in the joints, especially in hands, wrists, and knees. The affected joints may feel warm to touch."
  },
  {
    id: "02",
    title: "Morning Stiffness",
    image: "/rh1.png",
    description: "Stiffness that lasts more than 30-60 minutes after waking up. This is a hallmark symptom that distinguishes RA from other types of arthritis."
  },
  {
    id: "03",
    title: "Symmetrical Involvement",
    image: "/rh1.png",
    description: "RA typically affects joints on both sides of the body equally. If one wrist is affected, the other usually is too."
  },
  {
    id: "04",
    title: "Fatigue & Weakness",
    image: "/rh1.png",
    description: "Chronic fatigue, low energy levels, and unexplained weakness that doesn't improve with rest. This systemic symptom affects overall quality of life."
  },
  {
    id: "05",
    title: "Reduced Mobility",
    image: "/rh1.png",
    description: "Decreased range of motion in affected joints, making it difficult to perform everyday tasks like gripping, bending, or walking."
  },
  {
    id: "06",
    title: "Warmth & Redness",
    image: "/rh1.png",
    description: "Inflammation causes warmth and redness around affected joints. The skin may appear flushed or feel hot compared to surrounding areas."
  },
  {
    id: "07",
    title: "Flare-ups & Remission",
    image: "/rh1.png",
    description: "Symptoms may come and go in cycles. Flare-ups bring intense symptoms, followed by periods of improvement or remission."
  }
];

function SymptomsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-8 sm:mb-12">
          <h2 className="title-section">Common Symptoms of Rheumatoid Arthritis</h2>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="flex flex-col lg:flex-row lg:gap-16">

          {/* Left Side - Sticky Image & Description */}
          <div className="lg:sticky lg:top-24 h-fit w-full lg:max-w-md space-y-6 mb-10 lg:mb-0">
            {/* Image Container with Animation */}
            <div className="relative h-72 sm:h-80 lg:h-96 rounded-2xl overflow-hidden" style={{ backgroundColor: '#EEF2F9' }}>
              <img
                key={activeIndex}
                src={symptomsData[activeIndex].image}
                alt={symptomsData[activeIndex].title}
                className="w-full h-full object-contain p-6 transition-all duration-500 ease-out"
                style={{
                  animation: 'slideIn 0.4s ease-out'
                }}
              />
            </div>

            {/* Active Symptom Title */}
            <h3 className="text-xl sm:text-2xl font-title" style={{ color: '#182439' }}>
              {symptomsData[activeIndex].title}
            </h3>

            {/* Active Symptom Description */}
            <p className="desc-normal opacity-70" style={{ color: '#182439' }}>
              {symptomsData[activeIndex].description}
            </p>

            {/* CTA Button */}
            <button className="btn-primary inline-flex items-center gap-2 mt-4">
              Learn More
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </button>
          </div>

          {/* Right Side - Symptoms List */}
          <div className="w-full lg:flex-1">
            <ul className="border-t" style={{ borderColor: '#e5e5e5' }}>
              {symptomsData.map((symptom, index) => (
                <li
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  className="border-b py-5 sm:py-6 lg:py-8 cursor-pointer transition-all duration-300 group"
                  style={{ borderColor: '#e5e5e5' }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-title font-light transition-opacity duration-300"
                      style={{
                        color: '#182439',
                        opacity: index === activeIndex ? 1 : 0.25
                      }}
                    >
                      {symptom.title}
                    </span>
                    <sup
                      className="text-xs sm:text-sm font-semibold ml-2 transition-opacity duration-300"
                      style={{
                        color: '#182439',
                        opacity: index === activeIndex ? 0.6 : 0.2
                      }}
                    >
                      {symptom.id}
                    </sup>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}

function IgnoreReasonsFeature() {
  return (
    <div>
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 sm:mb-12">
        <h2 className="title-section max-w-md">
          Why Rheumatoid Arthritis Should Not Be Ignored
        </h2>
        <div className="max-w-xl">
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            RA is progressive. Without proper treatment, ongoing inflammation can cause serious complications that may become irreversible.
          </p>
          <button className="btn-primary inline-flex items-center gap-2">
            Book Consultation
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </button>
        </div>
      </div>

      {/* Scrolling Cards */}
      <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 px-4 sm:px-6 lg:px-8 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {ignoreReasons.map((reason) => (
            <div key={reason.id} className="flex-shrink-0 w-[200px] sm:w-[240px]">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 mb-3">
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-sm sm:text-base font-medium text-center" style={{ color: '#182439' }}>
                {reason.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function RheumatoidArthritisPage() {
  const symptoms = [
    "Joint pain, swelling, and tenderness",
    "Morning stiffness lasting more than 30–60 minutes",
    "Symmetrical joint involvement (both sides of the body)",
    "Fatigue, low energy, or unexplained weakness",
    "Reduced range of motion",
    "Warmth or redness around joints",
    "Flare-ups followed by periods of improvement"
  ];

  const causes = [
    { title: "Autoimmune dysfunction", icon: ShieldOff, desc: "Immune system attacks healthy joint tissue" },
    { title: "Genetic predisposition", icon: Dna, desc: "Family history increases risk" },
    { title: "Hormonal factors", icon: HeartHandshake, desc: "More common in women" },
    { title: "Environmental triggers", icon: Cigarette, desc: "Infections, smoking, stress" }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#EEF2F9', color: '#182439' }}>
      {/* Hero Section */}
      <header className="w-full bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Text Content */}
            <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 order-2 lg:order-1">
              <div className="space-y-6 sm:space-y-8">
                <h1 className="title-hero leading-tight drop-shadow-sm text-left">
                  Rheumatoid Arthritis
                </h1>
                <p className="desc-normal opacity-90 text-left">
                  A chronic autoimmune condition that affects joints and more, but can be managed effectively with early care.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                  <button className="btn-primary flex items-center justify-center gap-2">
                    Book a Consultation
                  </button>
                  <button className="btn-secondary flex items-center justify-center gap-2">
                    Call Our Clinic
                  </button>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="h-[300px] sm:h-[400px] lg:h-[550px] order-1 lg:order-2">
              <img
                src="/hero.png"
                alt="Rheumatoid Arthritis Care"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      {/* What Is RA Section */}
      <section className="w-full py-12 sm:py-16 lg:py-24" style={{ backgroundColor: '#EEF2F9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:gap-12 lg:grid-cols-2">
            <img
              src="/rh1.png"
              alt="Rheumatoid Arthritis illustration"
              className="order-2 lg:order-1 max-h-96 w-full rounded-2xl object-contain p-8"
            />
            <div className="order-1 lg:order-2 flex flex-col">
              <h2 className="title-section mb-4 sm:mb-6">What Is Rheumatoid Arthritis?</h2>
              <p className="desc-normal opacity-70 mb-6 sm:mb-8">
                Rheumatoid Arthritis (RA) is a chronic autoimmune disease in which the body's immune system mistakenly attacks the lining of the joints.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1 p-1 rounded-full" style={{ backgroundColor: '#D4F3F2' }}>
                    <Check size={16} style={{ color: '#182439' }} />
                  </div>
                  <p className="text-base sm:text-lg opacity-70">
                    Causes persistent inflammation, pain, swelling, and stiffness
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1 p-1 rounded-full" style={{ backgroundColor: '#D4F3F2' }}>
                    <Check size={16} style={{ color: '#182439' }} />
                  </div>
                  <p className="text-base sm:text-lg opacity-70">
                    Most commonly affects hands, wrists, knees, and feet
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1 p-1 rounded-full" style={{ backgroundColor: '#D4F3F2' }}>
                    <Check size={16} style={{ color: '#182439' }} />
                  </div>
                  <p className="text-base sm:text-lg opacity-70">
                    A systemic condition that can affect lungs, heart, eyes, and blood vessels
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1 p-1 rounded-full" style={{ backgroundColor: '#D4F3F2' }}>
                    <Check size={16} style={{ color: '#182439' }} />
                  </div>
                  <p className="text-base sm:text-lg opacity-70">
                    Unlike age-related wear and tear, requires early treatment
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms Section - Interactive Hover Design */}
      <SymptomsSection />

      {/* Why RA Should Not Be Ignored Section */}
      <section className="w-full py-12 sm:py-16 lg:py-24" style={{ backgroundColor: '#EEF2F9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <IgnoreReasonsFeature />
          <p className="mt-8 sm:mt-10 text-center text-sm sm:text-base font-medium opacity-80" style={{ color: '#182439' }}>
            The good news: early diagnosis and timely treatment can significantly slow or stop disease progression.
          </p>
        </div>
      </section>

      {/* Causes Section */}
      <section className="w-full py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="title-section mb-4">What Causes Rheumatoid Arthritis?</h2>
            <p className="desc-normal opacity-70 max-w-2xl mx-auto">
              The exact cause is not fully understood, but involves a combination of factors
            </p>
          </div>

          {/* Visual Causes Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {causes.map((cause, index) => {
              const IconComponent = cause.icon;
              return (
                <div key={index} className="group relative h-full">
                  <div className="flex flex-col items-center text-center p-6 sm:p-8 rounded-3xl transition-all duration-300 hover:shadow-xl h-full" style={{ backgroundColor: '#EEF2F9' }}>
                    {/* Icon Circle */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-4 sm:mb-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: '#D4F3F2' }}>
                      <IconComponent size={28} className="sm:w-9 sm:h-9" style={{ color: '#182439' }} />
                    </div>
                    {/* Title */}
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-2" style={{ color: '#182439' }}>
                      {cause.title}
                    </h3>
                    {/* Description */}
                    <p className="text-xs sm:text-sm opacity-60 flex-grow" style={{ color: '#182439' }}>
                      {cause.desc}
                    </p>
                  </div>
                  {/* Connector line for desktop */}
                  {index < causes.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-300" />
                  )}
                </div>
              );
            })}
          </div>

          <p className="text-center text-sm sm:text-base opacity-60 italic" style={{ color: '#182439' }}>
            RA is not caused by lifestyle alone and is not simply "wear and tear."
          </p>
        </div>
      </section>

      {/* Diagnosis Section */}
      <section className="w-full py-12 sm:py-16 lg:py-24" style={{ backgroundColor: '#EEF2F9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="title-section mb-4">How Rheumatoid Arthritis Is Diagnosed</h2>
            <p className="desc-normal opacity-70 max-w-2xl mx-auto">
              Diagnosing RA requires a detailed evaluation — there is no single test that confirms it.
            </p>
          </div>

          {/* Steps - Horizontal Timeline */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
            {[
              { icon: ClipboardList, num: "01", title: "Medical History", desc: "Detailed symptom history and joint examination" },
              { icon: TestTube, num: "02", title: "Blood Tests", desc: "RF, Anti-CCP, ESR, CRP markers" },
              { icon: ScanLine, num: "03", title: "Imaging", desc: "X-ray, ultrasound, or MRI scans" },
              { icon: Activity, num: "04", title: "Assessment", desc: "Disease pattern and progression analysis" }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="relative group">
                  {/* Card */}
                  <div className="bg-white rounded-2xl p-5 sm:p-6 h-full hover:shadow-xl transition-all duration-300">
                    {/* Number + Icon Row */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl sm:text-4xl font-bold opacity-10" style={{ color: '#182439' }}>
                        {item.num}
                      </span>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#D4F3F2' }}>
                        <IconComponent size={20} className="sm:w-6 sm:h-6" style={{ color: '#182439' }} />
                      </div>
                    </div>
                    {/* Content */}
                    <h3 className="text-base sm:text-lg font-semibold mb-2" style={{ color: '#182439' }}>
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm opacity-60 leading-relaxed" style={{ color: '#182439' }}>
                      {item.desc}
                    </p>
                  </div>
                  {/* Connector Arrow - Hidden on mobile, last item */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowLeft className="w-5 h-5 rotate-180 opacity-30" style={{ color: '#182439' }} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Note */}
          <p className="text-center text-sm sm:text-base font-medium" style={{ color: '#182439' }}>
            Early diagnosis is critical to prevent long-term damage.
          </p>
        </div>
      </section>

      {/* Daily Life Impact Section */}
      <section className="w-full py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="relative mb-10 sm:mb-14">
            <h2 className="title-section text-center">How Rheumatoid Arthritis Affects Daily Life</h2>
            <p className="desc-normal opacity-60 text-center max-w-xl mx-auto mt-4">
              RA can impact more than just physical health
            </p>
          </div>

          {/* Cards Grid - Reference Style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              { image: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=500&h=600&fit=crop", title: "Routine Tasks", desc: "Difficulty with routine tasks like writing, walking, and gripping objects.", bg: "#EEF2F9" },
              { image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=500&h=600&fit=crop", title: "Sleep & Mood", desc: "Chronic pain affecting sleep quality and emotional well-being.", bg: "#D4F3F2" },
              { image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=500&h=600&fit=crop", title: "Work & Productivity", desc: "Reduced work productivity and difficulty in professional settings.", bg: "#F5EFE6" },
              { image: "https://images.unsplash.com/photo-1474418397713-7ede21d49118?w=500&h=600&fit=crop", title: "Emotional Health", desc: "Emotional stress, anxiety, and fear of long-term disability.", bg: "#E8F4F3" }
            ].map((item, index) => (
              <div key={index} className="group rounded-xl overflow-hidden border border-gray-300 bg-white transition-all duration-300 hover:shadow-lg">
                {/* Text Content - Top */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-1 mb-2">
                    <h3 className="text-base sm:text-lg font-title" style={{ color: '#182439', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                      {item.title}
                    </h3>
                    <span className="text-base" style={{ color: '#182439' }}>→</span>
                  </div>
                  <p className="text-sm leading-relaxed font-body" style={{ color: '#4a4a4a' }}>
                    {item.desc}
                  </p>
                </div>
                {/* Image - Bottom */}
                <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                  <div className="h-40 sm:h-48 lg:h-52 rounded-lg overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Message */}
          <p className="mt-10 sm:mt-12 text-center desc-normal opacity-70" style={{ color: '#182439' }}>
            A structured, long-term management plan helps patients regain control and confidence.
          </p>

        </div>
      </section>

      {/* When to See Rheumatologist Section */}
      <section className="w-full py-12 sm:py-16 lg:py-24" style={{ backgroundColor: '#D4F3F2' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left - Title */}
            <div>
              <h2 className="title-section mb-4 sm:mb-6">When Should You See a<br />Rheumatologist?</h2>
              <p className="desc-normal opacity-70">
                You should consult a specialist if you experience:
              </p>
            </div>

            {/* Right - List */}
            <div className="space-y-4 sm:space-y-5">
              {[
                "Persistent joint pain and swelling",
                "Morning stiffness lasting over 30 minutes",
                "Symptoms affecting both sides of the body",
                "Unexplained fatigue with joint symptoms"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: '#182439' }}>
                    <Check size={14} className="text-white" />
                  </div>
                  <p className="desc-normal" style={{ color: '#182439' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Note */}
          <p className="mt-10 sm:mt-12 text-center desc-normal font-semibold" style={{ color: '#182439' }}>
            Early specialist care makes a significant difference.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: '#182439' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-3 sm:mb-4 text-white" style={{ fontFamily: "'Loretta', Georgia, serif" }}>
            Take the Next Step
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl font-medium text-white mb-4 sm:mb-6">
            Early action matters.
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto">
            If you or a loved one has symptoms suggestive of Rheumatoid Arthritis, timely evaluation can prevent long-term complications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Book a Rheumatology Consultation
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base transition-all border-2 border-white text-white hover:bg-white hover:text-[#182439]" style={{ borderRadius: '25px' }}>
              Speak to Our Care Team
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 border-t border-slate-200" style={{ backgroundColor: '#EEF2F9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 opacity-60 text-xs sm:text-sm">
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
