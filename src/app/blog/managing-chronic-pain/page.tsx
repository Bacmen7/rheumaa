"use client";

import Link from 'next/link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

export default function ManagingChronicPainPage() {
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
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full" style={{ backgroundColor: '#FEF3C7', color: '#92400E' }}>
              Lifestyle
            </span>
            <div className="flex items-center gap-1.5 text-sm opacity-50">
              <Calendar size={14} />
              <span>Nov 25, 2025</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm opacity-50">
              <Clock size={14} />
              <span>10 min read</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-title leading-tight mb-6">
            Managing Chronic Pain: What Actually Helps?
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl opacity-70 leading-relaxed max-w-2xl">
            Living with chronic pain can be exhausting. Let's talk about what works and why — beyond just painkillers.
          </p>
        </div>
      </header>

      {/* Featured Image */}
      <div className="w-full" style={{ backgroundColor: '#EEF2F9' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
          <div className="rounded-[20px] sm:rounded-[30px] overflow-hidden">
            <img
              src="/article2.png"
              alt="Managing Chronic Pain"
              className="w-full h-[280px] sm:h-[380px] lg:h-[480px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="w-full py-12 sm:py-16" style={{ backgroundColor: '#EEF2F9' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Introduction */}
          <div className="mb-10 sm:mb-14">
            <p className="text-lg leading-relaxed opacity-80 mb-5">
              Living with chronic pain can be exhausting. Not just physically, but emotionally too. When pain lasts for months or years, it starts affecting sleep, mood, work, and daily life. Many people feel stuck between temporary relief and confusing advice.
            </p>
            <p className="text-lg leading-relaxed opacity-80">
              So what really helps when it comes to managing chronic pain? Let's talk about what works and why.
            </p>
          </div>

          {/* What Is Chronic Pain */}
          <section className="mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-title mb-5">What Is Chronic Pain?</h2>
            <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-4">
              Chronic pain is pain that lasts longer than three months, often continuing even after an injury has healed. It may be constant or come and go, and it can affect joints, muscles, nerves, or the whole body.
            </p>
            <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-3">
              Common causes include:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1 mb-4">
              <li>Arthritis (rheumatoid, osteoarthritis, psoriatic arthritis)</li>
              <li>Back and neck problems</li>
              <li>Fibromyalgia</li>
              <li>Nerve-related pain</li>
              <li>Autoimmune and inflammatory conditions</li>
            </ul>
            <p className="text-base sm:text-lg leading-relaxed font-medium" style={{ color: '#2C847F' }}>
              Chronic pain is not "just in your head." It is a real medical condition that requires a structured approach.
            </p>
          </section>

          {/* Divider */}
          <hr className="border-slate-200 my-10 sm:my-14" />

          {/* Why Painkillers Alone Don't Work */}
          <section className="mb-10 sm:mb-14 p-6 sm:p-8 rounded-xl" style={{ backgroundColor: '#FEF2F2' }}>
            <h2 className="text-2xl sm:text-3xl font-title mb-4">Why Painkillers Alone Don't Solve Chronic Pain</h2>
            <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-4">
              Many people rely heavily on painkillers for relief. While they can help short term, they often:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1 mb-4">
              <li>Do not treat the underlying cause</li>
              <li>Lose effectiveness over time</li>
              <li>Cause side effects when used long-term</li>
            </ul>
            <p className="text-base sm:text-lg leading-relaxed font-medium">
              Managing chronic pain requires more than suppressing symptoms.
            </p>
          </section>

          {/* Divider */}
          <hr className="border-slate-200 my-10 sm:my-14" />

          {/* What Actually Helps */}
          <section className="mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-title mb-8">What Actually Helps in Managing Chronic Pain</h2>

            {/* Point 1 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C847F' }}>1. Understanding the Root Cause</h3>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-3">
                The most effective pain management begins with a clear diagnosis.
              </p>
              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1">
                <li>Is the pain inflammatory?</li>
                <li>Mechanical or wear-and-tear related?</li>
                <li>Nerve-related?</li>
                <li>Autoimmune?</li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mt-3 italic">
                Treating pain without understanding its source often leads to frustration.
              </p>
            </div>

            {/* Point 2 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C847F' }}>2. Targeted Medical Treatment</h3>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-3">
                Depending on the cause, treatment may include:
              </p>
              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1">
                <li>Anti-inflammatory medications</li>
                <li>Disease-modifying therapies (for autoimmune conditions)</li>
                <li>Nerve pain medications</li>
                <li>Joint-specific treatments</li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mt-3">
                The goal is <strong>control</strong>, not just relief.
              </p>
            </div>

            {/* Point 3 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C847F' }}>3. Consistent Movement (Not Complete Rest)</h3>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-3">
                Avoiding movement can actually worsen chronic pain.
              </p>
              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1">
                <li>Gentle exercise improves joint mobility</li>
                <li>Strengthens supporting muscles</li>
                <li>Reduces stiffness and inflammation over time</li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mt-3">
                Physiotherapy, stretching, and guided activity play a major role.
              </p>
            </div>

            {/* Point 4 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C847F' }}>4. Managing Inflammation Through Lifestyle</h3>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-3">
                Small daily habits make a big difference:
              </p>
              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1">
                <li>Regular sleep routines</li>
                <li>Balanced, anti-inflammatory diet</li>
                <li>Weight management</li>
                <li>Stress reduction</li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mt-3">
                These factors directly influence pain intensity and flare-ups.
              </p>
            </div>

            {/* Point 5 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C847F' }}>5. Addressing the Mind–Body Connection</h3>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-3">
                Chronic pain affects the nervous system.
              </p>
              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1 mb-3">
                <li>Stress and anxiety amplify pain signals</li>
                <li>Poor sleep lowers pain tolerance</li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-3">
                Approaches like:
              </p>
              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1">
                <li>Relaxation techniques</li>
                <li>Mindfulness</li>
                <li>Breathing exercises</li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mt-3">
                …help calm the pain response and improve coping.
              </p>
            </div>

            {/* Point 6 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C847F' }}>6. Long-Term Monitoring and Follow-Up</h3>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-3">
                Pain management is not a one-time fix.
              </p>
              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1">
                <li>Symptoms change over time</li>
                <li>Treatments need adjustment</li>
                <li>Flare-ups require proactive care</li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mt-3">
                Regular follow-ups help keep pain under control and prevent setbacks.
              </p>
            </div>
          </section>

          {/* Divider */}
          <hr className="border-slate-200 my-10 sm:my-14" />

          {/* What Doesn't Help */}
          <section className="mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-title mb-5">What Usually Doesn't Help (Long Term)</h2>
            <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-2">
              <li>Constantly switching doctors without continuity</li>
              <li>Relying only on painkillers</li>
              <li>Ignoring lifestyle factors</li>
              <li>Expecting instant or permanent fixes</li>
            </ul>
            <p className="text-base sm:text-lg leading-relaxed font-medium mt-4" style={{ color: '#2C847F' }}>
              Chronic pain improves with consistency, not shortcuts.
            </p>
          </section>

          {/* Divider */}
          <hr className="border-slate-200 my-10 sm:my-14" />

          {/* When to Seek Specialist Care */}
          <section className="mb-10 sm:mb-14 p-6 sm:p-8 rounded-xl" style={{ backgroundColor: '#FEF9E7' }}>
            <h2 className="text-2xl sm:text-3xl font-title mb-4">When Should You Seek Specialist Care?</h2>
            <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-4">
              You should consider seeing a specialist if:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1 mb-4">
              <li>Pain lasts more than 3 months</li>
              <li>Daily activities are affected</li>
              <li>Sleep is disrupted</li>
              <li>Pain keeps returning despite treatment</li>
            </ul>
            <p className="text-base sm:text-lg leading-relaxed font-medium">
              Early structured care can prevent pain from becoming disabling.
            </p>
          </section>

          {/* Divider */}
          <hr className="border-slate-200 my-10 sm:my-14" />

          {/* Living Well */}
          <section className="mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-title mb-5">Living Well Despite Chronic Pain</h2>
            <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-4">
              While chronic pain may not always be curable, it is manageable. With the right diagnosis, treatment plan, and support, many people regain function, confidence, and quality of life.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed font-medium" style={{ color: '#2C847F' }}>
              You don't have to live in constant pain — and you don't have to navigate it alone.
            </p>
          </section>

        </div>
      </article>

      {/* CTA Section */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: '#182439' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-title mb-4 text-white">
            Ready to Take Control of Your Pain?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Our rheumatology team can help you create a personalized plan for managing your chronic pain.
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
