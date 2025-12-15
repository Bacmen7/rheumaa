"use client";

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function EarlySignsOfArthritisPage() {
  return (
    <div className="min-h-screen bg-white" style={{ color: '#182439' }}>

      {/* Hero Header */}
      <header style={{ backgroundColor: '#0d1b2a', position: 'relative', overflow: 'hidden' }}>
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
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-white opacity-70 hover:opacity-100 transition-opacity mb-8">
            <ArrowLeft size={16} />
            Back to Articles
          </Link>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8 max-w-3xl font-title">
            How to Recognise Early Signs of Arthritis
          </h1>

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
            <span>Published: December 10, 2025</span>
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
              Arthritis doesn't always begin with severe pain or visible joint deformities. In many cases, the early signs are subtle and easy to dismiss as fatigue, stress, or "normal" aches.
            </p>
            <p className="text-lg leading-relaxed opacity-80 mb-10">
              Recognising these early symptoms is important because <span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>early diagnosis and treatment</span> can slow disease progression and protect your joints in the long run.
            </p>

            <section id="what-is-arthritis" className="mb-10 scroll-mt-32">
              <h2 className="text-2xl sm:text-3xl font-bold mb-5 font-title">What Is Arthritis?</h2>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-4">
                Arthritis is a broad term used to describe conditions that cause <span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>joint inflammation</span>, pain, stiffness, and reduced movement. There are many types of arthritis, including <span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>osteoarthritis</span>, <span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>rheumatoid arthritis</span>, <span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>psoriatic arthritis</span>, and <span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>gout</span>.
              </p>
              <p className="text-base sm:text-lg leading-relaxed opacity-80">
                While each type behaves differently, many share common early warning signs.
              </p>
            </section>

            <hr className="border-slate-300 my-10" />

            <section id="early-signs" className="mb-10 scroll-mt-32">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 font-title">Early Signs of Arthritis You Should Not Ignore</h2>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C847F' }}>1. Persistent Joint Pain</h3>
                <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-3">
                  Occasional aches after activity are common. But if <span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>joint pain</span>:
                </p>
                <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1">
                  <li>Keeps returning</li>
                  <li>Lasts for weeks</li>
                  <li>Occurs even without strain</li>
                </ul>
                <p className="text-base sm:text-lg leading-relaxed opacity-80 mt-3 italic">…it may be an early sign of arthritis.</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C847F' }}>2. Morning Stiffness</h3>
                <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-3">
                  <span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>Morning stiffness</span> when you wake up is a key early symptom.
                </p>
                <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1">
                  <li>Stiffness lasting more than 30 minutes is concerning</li>
                  <li>If it improves slowly with movement, it may indicate <span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>inflammatory arthritis</span></li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C847F' }}>3. Joint Swelling or Puffiness</h3>
                <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-3">You may notice:</p>
                <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1">
                  <li>Visible <span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>joint swelling</span></li>
                  <li>A "tight" feeling around joints</li>
                  <li>Rings feeling tight or shoes feeling uncomfortable</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C847F' }}>4. Reduced Range of Motion</h3>
                <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-3">If you find it harder to:</p>
                <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1">
                  <li>Fully bend or straighten a joint</li>
                  <li>Grip objects</li>
                  <li>Walk comfortably</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C847F' }}>5. Warmth or Tenderness in Joints</h3>
                <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-3">Inflamed joints may feel:</p>
                <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1">
                  <li>Warm to touch</li>
                  <li>Tender when pressed</li>
                  <li>Painful during movement</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C847F' }}>6. Fatigue or Low Energy</h3>
                <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-3">
                  Many people don't associate <span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>chronic fatigue</span> with joint disease, but it's common in inflammatory arthritis.
                </p>
                <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1">
                  <li>Persistent tiredness</li>
                  <li>Feeling drained even after rest</li>
                  <li>Difficulty concentrating</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C847F' }}>7. Symmetrical Joint Symptoms</h3>
                <p className="text-base sm:text-lg leading-relaxed opacity-80">
                  If both sides of your body are affected—such as both wrists, both hands, or both knees—it may suggest an <span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>autoimmune form of arthritis</span> like rheumatoid arthritis.
                </p>
              </div>
            </section>

            <hr className="border-slate-300 my-10" />

            <section id="arthritis-vs-normal-pain" className="mb-10 scroll-mt-32">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 font-title">Early Arthritis vs Normal Joint Pain</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse rounded-lg overflow-hidden">
                  <thead>
                    <tr style={{ backgroundColor: '#0d1b2a' }}>
                      <th className="py-4 px-5 text-sm font-semibold text-white">Normal Joint Strain</th>
                      <th className="py-4 px-5 text-sm font-semibold text-white">Possible Arthritis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200" style={{ backgroundColor: '#f8f9fa' }}>
                      <td className="py-3 px-5 opacity-80">Improves with rest</td>
                      <td className="py-3 px-5 opacity-80">Persists or worsens</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="py-3 px-5 opacity-80">No swelling</td>
                      <td className="py-3 px-5 opacity-80">Swelling present</td>
                    </tr>
                    <tr className="border-b border-slate-200" style={{ backgroundColor: '#f8f9fa' }}>
                      <td className="py-3 px-5 opacity-80">Brief stiffness</td>
                      <td className="py-3 px-5 opacity-80">Prolonged morning stiffness</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-5 opacity-80">One-sided pain</td>
                      <td className="py-3 px-5 opacity-80">Often affects both sides</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm italic opacity-50">If symptoms persist beyond 2–3 weeks, medical evaluation is recommended.</p>
            </section>

            <hr className="border-slate-300 my-10" />

            <section id="why-early-detection" className="mb-10 scroll-mt-32">
              <h2 className="text-2xl sm:text-3xl font-bold mb-5 font-title">Why Early Detection Matters</h2>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-4">Ignoring early arthritis symptoms can lead to:</p>
              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1 mb-4">
                <li>Permanent <span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>joint damage</span></li>
                <li>Reduced mobility</li>
                <li>Chronic pain</li>
                <li>Long-term disability</li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed font-medium" style={{ color: '#2C847F' }}>
                With modern treatments, early intervention can slow or even halt disease progression in many cases.
              </p>
            </section>

            <hr className="border-slate-300 my-10" />

            <section id="when-see-doctor" className="mb-10 scroll-mt-32">
              <h2 className="text-2xl sm:text-3xl font-bold mb-5 font-title">When Should You See a Doctor?</h2>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-4">
                You should consult a <span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>rheumatologist</span> if you experience:
              </p>
              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1 mb-4">
                <li>Joint pain lasting more than a few weeks</li>
                <li>Morning stiffness over 30 minutes</li>
                <li>Joint swelling or warmth</li>
                <li>Fatigue with joint symptoms</li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed opacity-80">Early assessment helps create a clear diagnosis and a personalized treatment plan.</p>
            </section>

            <hr className="border-slate-300 my-10" />

            <section id="takeaway" className="mb-10 scroll-mt-32">
              <h2 className="text-2xl sm:text-3xl font-bold mb-5 font-title">Final Thoughts</h2>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-4">
                Joint pain is not always "normal ageing." Listening to your body and recognising early warning signs can make a significant difference in long-term joint health.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed font-medium" style={{ color: '#2C847F' }}>
                If something doesn't feel right, it's better to get it checked early rather than wait.
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
                  <a href="#what-is-arthritis" className="text-base hover:opacity-70 transition-opacity" style={{ color: '#182439', textDecoration: 'underline' }}>
                    Understanding arthritis
                  </a>
                </li>
                <li>
                  <a href="#early-signs" className="text-base hover:opacity-70 transition-opacity" style={{ color: '#182439', textDecoration: 'underline' }}>
                    Early signs of arthritis
                  </a>
                </li>
                <li>
                  <a href="#arthritis-vs-normal-pain" className="text-base hover:opacity-70 transition-opacity" style={{ color: '#182439', textDecoration: 'underline' }}>
                    Arthritis vs normal pain
                  </a>
                </li>
                <li>
                  <a href="#why-early-detection" className="text-base hover:opacity-70 transition-opacity" style={{ color: '#182439', textDecoration: 'underline' }}>
                    Why early detection matters
                  </a>
                </li>
                <li>
                  <a href="#when-see-doctor" className="text-base hover:opacity-70 transition-opacity" style={{ color: '#182439', textDecoration: 'underline' }}>
                    When to see a doctor
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
            Concerned About Joint Pain?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Early diagnosis can make a significant difference. Schedule a consultation with our rheumatology specialist today.
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
