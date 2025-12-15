"use client";

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ManagingChronicPainPage() {
  return (
    <div className="min-h-screen bg-white" style={{ color: '#182439' }}>

      {/* Hero Header */}
      <header style={{ backgroundColor: '#0d1b2a', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative Peach Circle */}
        <div style={{
          position: 'absolute',
          right: '-100px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, #e8b4a0 0%, #d4a088 100%)',
          borderRadius: '50%',
          opacity: 0.8
        }} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
          {/* Back Link */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-white opacity-70 hover:opacity-100 transition-opacity mb-8">
            <ArrowLeft size={16} />
            Back to Articles
          </Link>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8 max-w-3xl font-title">
            Managing Chronic Pain: What Actually Helps?
          </h1>

          {/* Author Section */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex -space-x-2">
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#3d5a80', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 600, fontSize: '14px', border: '2px solid #0d1b2a' }}>PS</div>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#457b9d', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 600, fontSize: '14px', border: '2px solid #0d1b2a' }}>RK</div>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#2a9d8f', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 600, fontSize: '14px', border: '2px solid #0d1b2a' }}>AP</div>
            </div>
            <div className="text-sm text-white">
              <p className="mb-1">Written by <a href="#" style={{ color: '#8ebfff', textDecoration: 'underline' }}>Priya Sharma, MSJ</a></p>
              <p className="opacity-70">Medically reviewed by <a href="#" style={{ color: '#8ebfff', textDecoration: 'underline' }}>Dr. Rajesh Kumar, MD</a> and <a href="#" style={{ color: '#8ebfff', textDecoration: 'underline' }}>Anjali Patel, MS, RD, LDN</a></p>
            </div>
          </div>

          <div className="mt-4 text-sm text-white opacity-60">
            <span>Published: November 25, 2025</span>
            <span className="mx-3">|</span>
            <span>Last Updated: December 15, 2025</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT - Article Content */}
          <article className="flex-1 lg:max-w-[calc(100%-340px)]">

            <p className="text-lg leading-relaxed opacity-80 mb-5">
              Living with <span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>chronic pain</span> can be exhausting. Not just physically, but emotionally too. When pain lasts for months or years, it starts affecting sleep, mood, work, and daily life. Many people feel stuck between temporary relief and confusing advice.
            </p>
            <p className="text-lg leading-relaxed opacity-80 mb-5">
              So what really helps when it comes to managing chronic pain?
            </p>
            <p className="text-lg leading-relaxed opacity-80 mb-10">
              Let's talk about what works and why.
            </p>

            {/* Section 1 */}
            <section id="what-is-chronic-pain" className="mb-10 scroll-mt-32">
              <h2 className="text-2xl sm:text-3xl font-bold mb-5 font-title">What Is Chronic Pain?</h2>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-4">
                <span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>Chronic pain</span> is pain that lasts longer than three months, often continuing even after an injury has healed. It may be constant or come and go, and it can affect joints, muscles, nerves, or the whole body.
              </p>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-3">Common causes include:</p>
              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1 mb-4">
                <li><span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>Arthritis</span> (rheumatoid, osteoarthritis, psoriatic arthritis)</li>
                <li>Back and neck problems</li>
                <li><span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>Fibromyalgia</span></li>
                <li>Nerve-related pain</li>
                <li><span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>Autoimmune and inflammatory conditions</span></li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed font-medium" style={{ color: '#2C847F' }}>
                Chronic pain is not "just in your head." It is a real medical condition that requires a structured approach.
              </p>
            </section>

            <hr className="border-slate-300 my-10" />

            {/* Section 2 */}
            <section id="why-painkillers-dont-work" className="mb-10 scroll-mt-32">
              <h2 className="text-2xl sm:text-3xl font-bold mb-5 font-title">Why Painkillers Alone Don't Solve Chronic Pain</h2>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-4">
                Many people rely heavily on <span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>painkillers</span> for relief. While they can help short term, they often:
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

            <hr className="border-slate-300 my-10" />

            {/* Section 3 */}
            <section id="what-actually-helps" className="mb-10 scroll-mt-32">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 font-title">What Actually Helps in Managing Chronic Pain</h2>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C847F' }}>1. Understanding the Root Cause</h3>
                <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-3">
                  The most effective <span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>pain management</span> begins with a clear diagnosis.
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

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C847F' }}>2. Targeted Medical Treatment</h3>
                <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-3">Depending on the cause, treatment may include:</p>
                <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1">
                  <li><span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>Anti-inflammatory medications</span></li>
                  <li>Disease-modifying therapies (for autoimmune conditions)</li>
                  <li>Nerve pain medications</li>
                  <li>Joint-specific treatments</li>
                </ul>
                <p className="text-base sm:text-lg leading-relaxed opacity-80 mt-3">The goal is <strong>control</strong>, not just relief.</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C847F' }}>3. Consistent Movement (Not Complete Rest)</h3>
                <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-3">Avoiding movement can actually worsen chronic pain.</p>
                <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1">
                  <li>Gentle exercise improves <span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>joint mobility</span></li>
                  <li>Strengthens supporting muscles</li>
                  <li>Reduces stiffness and inflammation over time</li>
                </ul>
                <p className="text-base sm:text-lg leading-relaxed opacity-80 mt-3">
                  <span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>Physiotherapy</span>, stretching, and guided activity play a major role.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C847F' }}>4. Managing Inflammation Through Lifestyle</h3>
                <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-3">Small daily habits make a big difference:</p>
                <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1">
                  <li>Regular sleep routines</li>
                  <li>Balanced, <span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>anti-inflammatory diet</span></li>
                  <li>Weight management</li>
                  <li>Stress reduction</li>
                </ul>
                <p className="text-base sm:text-lg leading-relaxed opacity-80 mt-3">
                  These factors directly influence pain intensity and <span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>flare-ups</span>.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C847F' }}>5. Addressing the Mind–Body Connection</h3>
                <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-3">
                  Chronic pain affects the <span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>nervous system</span>.
                </p>
                <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1 mb-3">
                  <li>Stress and anxiety amplify pain signals</li>
                  <li>Poor sleep lowers pain tolerance</li>
                </ul>
                <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-3">Approaches like:</p>
                <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1">
                  <li>Relaxation techniques</li>
                  <li><span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>Mindfulness</span></li>
                  <li>Breathing exercises</li>
                </ul>
                <p className="text-base sm:text-lg leading-relaxed opacity-80 mt-3">help calm the pain response and improve coping.</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C847F' }}>6. Long-Term Monitoring and Follow-Up</h3>
                <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-3">Pain management is not a one-time fix.</p>
                <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1">
                  <li>Symptoms change over time</li>
                  <li>Treatments need adjustment</li>
                  <li>Flare-ups require proactive care</li>
                </ul>
                <p className="text-base sm:text-lg leading-relaxed opacity-80 mt-3">Regular follow-ups help keep pain under control and prevent setbacks.</p>
              </div>
            </section>

            <hr className="border-slate-300 my-10" />

            {/* Section 4 */}
            <section id="what-doesnt-help" className="mb-10 scroll-mt-32">
              <h2 className="text-2xl sm:text-3xl font-bold mb-5 font-title">What Usually Doesn't Help (Long Term)</h2>
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

            <hr className="border-slate-300 my-10" />

            {/* Section 5 */}
            <section id="when-to-seek-specialist" className="mb-10 scroll-mt-32">
              <h2 className="text-2xl sm:text-3xl font-bold mb-5 font-title">When Should You Seek Specialist Care?</h2>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-4">
                You should consider seeing a <span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>specialist</span> if:
              </p>
              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1 mb-4">
                <li>Pain lasts more than 3 months</li>
                <li>Daily activities are affected</li>
                <li>Sleep is disrupted</li>
                <li>Pain keeps returning despite treatment</li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed font-medium">Early structured care can prevent pain from becoming disabling.</p>
            </section>

            <hr className="border-slate-300 my-10" />

            {/* Final Section */}
            <section id="takeaway" className="mb-10 scroll-mt-32">
              <h2 className="text-2xl sm:text-3xl font-bold mb-5 font-title">Living Well Despite Chronic Pain</h2>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-4">
                While chronic pain may not always be curable, it is manageable. With the right diagnosis, treatment plan, and support, many people regain function, confidence, and <span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>quality of life</span>.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed font-medium" style={{ color: '#2C847F' }}>
                You don't have to live in constant pain — and you don't have to navigate it alone.
              </p>
            </section>

          </article>

          {/* RIGHT - Sticky Table of Contents */}
          <aside className="hidden lg:block lg:w-[300px] flex-shrink-0">
            <nav className="sticky top-32 p-6 rounded-md" style={{ backgroundColor: '#EEF2F9' }}>
              <h3 className="text-xl font-bold mb-5" style={{ color: '#182439' }}>
                Table of Contents
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#what-is-chronic-pain" className="text-base hover:opacity-70 transition-opacity" style={{ color: '#182439', textDecoration: 'underline' }}>
                    Understanding chronic pain
                  </a>
                </li>
                <li>
                  <a href="#why-painkillers-dont-work" className="text-base hover:opacity-70 transition-opacity" style={{ color: '#182439', textDecoration: 'underline' }}>
                    Why painkillers don't work
                  </a>
                </li>
                <li>
                  <a href="#what-actually-helps" className="text-base hover:opacity-70 transition-opacity" style={{ color: '#182439', textDecoration: 'underline' }}>
                    What actually helps
                  </a>
                </li>
                <li>
                  <a href="#what-doesnt-help" className="text-base hover:opacity-70 transition-opacity" style={{ color: '#182439', textDecoration: 'underline' }}>
                    What doesn't help
                  </a>
                </li>
                <li>
                  <a href="#when-to-seek-specialist" className="text-base hover:opacity-70 transition-opacity" style={{ color: '#182439', textDecoration: 'underline' }}>
                    When to seek specialist
                  </a>
                </li>
                <li>
                  <a href="#takeaway" className="text-base hover:opacity-70 transition-opacity" style={{ color: '#182439', textDecoration: 'underline' }}>
                    Takeaway
                  </a>
                </li>
              </ul>
            </nav>
          </aside>

        </div>
      </div>

      {/* CTA Banner - Original Style */}
      <section className="py-16" style={{ backgroundColor: '#0d1b2a' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-title">
            Ready to Take Control of Your Pain?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Our rheumatology team can help you create a personalized plan for managing your chronic pain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-full text-white font-semibold transition-all hover:opacity-90" style={{ backgroundColor: '#2a9d8f' }}>
              Book a Consultation
            </button>
            <button className="px-8 py-4 font-semibold transition-all border-2 border-white text-white hover:bg-white hover:text-gray-900 rounded-full">
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
