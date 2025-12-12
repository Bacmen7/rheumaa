"use client";

import Link from 'next/link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

export default function AutoimmuneDiseasesExplainedPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#EEF2F9', color: '#182439' }}>
      {/* Hero Section */}
      <header className="w-full" style={{ backgroundColor: '#EEF2F9' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
          {/* Back Link */}
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium opacity-60 hover:opacity-100 transition-opacity mb-8">
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full" style={{ backgroundColor: '#E0E7FF', color: '#3730A3' }}>
              Medical Guide
            </span>
            <div className="flex items-center gap-1.5 text-sm opacity-50">
              <Calendar size={14} />
              <span>Oct 18, 2025</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm opacity-50">
              <Clock size={14} />
              <span>12 min read</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-title leading-tight mb-6">
            Autoimmune Diseases Explained in Simple Terms
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl opacity-70 leading-relaxed max-w-2xl">
            Breaking down complex autoimmune conditions into easy-to-understand concepts so you can better manage your health.
          </p>
        </div>
      </header>

      {/* Featured Image */}
      <div className="w-full" style={{ backgroundColor: '#EEF2F9' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
          <div className="rounded-[20px] sm:rounded-[30px] overflow-hidden">
            <img
              src="/article3.png"
              alt="Autoimmune Diseases Explained"
              className="w-full h-[280px] sm:h-[380px] lg:h-[480px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="w-full py-12 sm:py-16" style={{ backgroundColor: '#EEF2F9' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* What Is an Autoimmune Disease */}
          <section className="mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-title mb-5">What Is an Autoimmune Disease?</h2>
            <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-4">
              Your immune system's job is to protect you by fighting germs, viruses, and infections. In an autoimmune disease, the immune system mistakenly attacks the body's own healthy tissues, thinking they are a threat. This leads to inflammation, pain, and damage over time.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed font-medium" style={{ color: '#2C847F' }}>
              In simple terms — the body's defence system becomes overactive and confused.
            </p>
          </section>

          {/* Divider */}
          <hr className="border-slate-200 my-10 sm:my-14" />

          {/* Why Do Autoimmune Diseases Happen */}
          <section className="mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-title mb-5">Why Do Autoimmune Diseases Happen?</h2>
            <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-4">
              There isn't a single cause. Most autoimmune conditions develop due to a combination of factors:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1 mb-4">
              <li>Genetic tendency</li>
              <li>Hormonal influences</li>
              <li>Infections that trigger immune reactions</li>
              <li>Environmental factors</li>
              <li>Smoking or long-term stress (in some cases)</li>
            </ul>
            <p className="text-base sm:text-lg leading-relaxed font-medium" style={{ color: '#2C847F' }}>
              Importantly, autoimmune diseases are not caused by something you did.
            </p>
          </section>

          {/* Divider */}
          <hr className="border-slate-200 my-10 sm:my-14" />

          {/* Common Autoimmune Diseases */}
          <section className="mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-title mb-6">Common Autoimmune Diseases</h2>
            <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-6">
              Autoimmune conditions can affect different parts of the body:
            </p>

            <div className="space-y-6">
              {/* Joint & Muscle Related */}
              <div className="p-5 sm:p-6 rounded-xl" style={{ backgroundColor: '#D4F3F2' }}>
                <h3 className="text-lg font-semibold mb-3" style={{ color: '#182439' }}>Joint & Muscle Related</h3>
                <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-2 space-y-1">
                  <li>Rheumatoid Arthritis</li>
                  <li>Ankylosing Spondylitis</li>
                  <li>Psoriatic Arthritis</li>
                </ul>
              </div>

              {/* Skin & Systemic Conditions */}
              <div className="p-5 sm:p-6 rounded-xl" style={{ backgroundColor: '#FEF3C7' }}>
                <h3 className="text-lg font-semibold mb-3" style={{ color: '#182439' }}>Skin & Systemic Conditions</h3>
                <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-2 space-y-1">
                  <li>Lupus</li>
                  <li>Psoriasis</li>
                  <li>Scleroderma</li>
                </ul>
              </div>

              {/* Other Autoimmune Disorders */}
              <div className="p-5 sm:p-6 rounded-xl" style={{ backgroundColor: '#E0E7FF' }}>
                <h3 className="text-lg font-semibold mb-3" style={{ color: '#182439' }}>Other Autoimmune Disorders</h3>
                <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-2 space-y-1">
                  <li>Thyroid disorders (Hashimoto's, Graves')</li>
                  <li>Inflammatory bowel disease</li>
                  <li>Vasculitis</li>
                </ul>
              </div>
            </div>

            <p className="text-base sm:text-lg leading-relaxed opacity-80 mt-6 italic">
              Some conditions affect one area, while others affect multiple organs.
            </p>
          </section>

          {/* Divider */}
          <hr className="border-slate-200 my-10 sm:my-14" />

          {/* Common Symptoms */}
          <section className="mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-title mb-5">Common Symptoms of Autoimmune Diseases</h2>
            <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-4">
              Symptoms vary widely, but many people experience:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1 mb-4">
              <li>Persistent fatigue</li>
              <li>Joint pain, swelling, or stiffness</li>
              <li>Muscle aches</li>
              <li>Skin rashes</li>
              <li>Fever or low-grade fever</li>
              <li>Brain fog or difficulty concentrating</li>
              <li>Flare-ups followed by periods of relief</li>
            </ul>
            <p className="text-base sm:text-lg leading-relaxed opacity-80 italic">
              Symptoms may come and go, which often delays diagnosis.
            </p>
          </section>

          {/* Divider */}
          <hr className="border-slate-200 my-10 sm:my-14" />

          {/* Are Autoimmune Diseases Curable */}
          <section className="mb-10 sm:mb-14 p-6 sm:p-8 rounded-xl" style={{ backgroundColor: '#FEF9E7' }}>
            <h2 className="text-2xl sm:text-3xl font-title mb-4">Are Autoimmune Diseases Curable?</h2>
            <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-4">
              Most autoimmune diseases cannot be cured, but they can be effectively managed. Modern treatment focuses on:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1 mb-4">
              <li>Reducing immune overactivity</li>
              <li>Controlling inflammation</li>
              <li>Preventing long-term damage</li>
              <li>Improving daily function and quality of life</li>
            </ul>
            <p className="text-base sm:text-lg leading-relaxed font-medium" style={{ color: '#2C847F' }}>
              Many patients live full, active lives with proper care.
            </p>
          </section>

          {/* Divider */}
          <hr className="border-slate-200 my-10 sm:my-14" />

          {/* How Are Autoimmune Diseases Diagnosed */}
          <section className="mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-title mb-5">How Are Autoimmune Diseases Diagnosed?</h2>
            <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-4">
              Diagnosis is based on a combination of:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1 mb-4">
              <li>Detailed symptom history</li>
              <li>Physical examination</li>
              <li>Blood tests (immune markers, inflammation levels)</li>
              <li>Imaging tests when required</li>
            </ul>
            <p className="text-base sm:text-lg leading-relaxed opacity-80">
              There is no single test — accurate diagnosis takes time and expertise.
            </p>
          </section>

          {/* Divider */}
          <hr className="border-slate-200 my-10 sm:my-14" />

          {/* How Are Autoimmune Diseases Treated */}
          <section className="mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-title mb-5">How Are Autoimmune Diseases Treated?</h2>
            <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-4">
              Treatment plans are personalised and may include:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1 mb-4">
              <li>Medications to control inflammation</li>
              <li>Immune-modulating drugs</li>
              <li>Lifestyle and activity guidance</li>
              <li>Regular monitoring and follow-up</li>
            </ul>
            <p className="text-base sm:text-lg leading-relaxed font-medium" style={{ color: '#2C847F' }}>
              The aim is disease control, not just symptom relief.
            </p>
          </section>

          {/* Divider */}
          <hr className="border-slate-200 my-10 sm:my-14" />

          {/* Living with an Autoimmune Disease */}
          <section className="mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-title mb-5">Living with an Autoimmune Disease</h2>
            <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-4">
              Being diagnosed with an autoimmune condition can be emotionally challenging. It's common to feel anxious, frustrated, or uncertain.
            </p>
            <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-3">
              What helps:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1 mb-4">
              <li>Understanding your condition</li>
              <li>Consistent medical care</li>
              <li>Open communication with your doctor</li>
              <li>Support from family and care teams</li>
            </ul>
            <p className="text-base sm:text-lg leading-relaxed font-medium" style={{ color: '#2C847F' }}>
              Knowledge reduces fear and improves outcomes.
            </p>
          </section>

          {/* Divider */}
          <hr className="border-slate-200 my-10 sm:my-14" />

          {/* When Should You See a Specialist */}
          <section className="mb-10 sm:mb-14 p-6 sm:p-8 rounded-xl" style={{ backgroundColor: '#FEF2F2' }}>
            <h2 className="text-2xl sm:text-3xl font-title mb-4">When Should You See a Specialist?</h2>
            <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-4">
              You should consult a specialist if you experience:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1 mb-4">
              <li>Ongoing unexplained fatigue</li>
              <li>Persistent joint pain or swelling</li>
              <li>Symptoms affecting multiple body systems</li>
              <li>Repeated flare-ups</li>
            </ul>
            <p className="text-base sm:text-lg leading-relaxed font-medium">
              Early specialist care can prevent long-term complications.
            </p>
          </section>

          {/* Divider */}
          <hr className="border-slate-200 my-10 sm:my-14" />

          {/* Final Thoughts */}
          <section className="mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-title mb-5">Final Thoughts</h2>
            <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-4">
              Autoimmune diseases may be complex, but understanding them doesn't have to be. With early diagnosis, the right treatment, and long-term support, most people can manage their condition effectively and live well.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed font-medium" style={{ color: '#2C847F' }}>
              If symptoms are affecting your daily life, don't ignore them.
            </p>
          </section>

        </div>
      </article>

      {/* CTA Section */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: '#182439' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-title mb-4 text-white">
            Need Expert Guidance?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Our rheumatology specialist can help diagnose and manage autoimmune conditions effectively.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-base px-8 py-4">
              Book a Consultation
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base transition-all border-2 border-white text-white hover:bg-white hover:text-[#182439]" style={{ borderRadius: '25px' }}>
              Speak to Our Care Team
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 opacity-50 text-sm">
          <p>© 2024 RheumaCare Clinic. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-80">Privacy Policy</a>
            <a href="#" className="hover:opacity-80">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
