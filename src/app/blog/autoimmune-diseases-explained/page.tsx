"use client";

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AutoimmuneDiseasesExplainedPage() {
  return (
    <div className="min-h-screen bg-white" style={{ color: '#182439' }}>

      {/* Hero Header */}
      <header style={{ backgroundColor: '#0d1b2a', position: 'relative', overflow: 'hidden' }}>
        <div className="hidden lg:block" style={{
          position: 'absolute',
          right: '-80px',
          bottom: '-100px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          overflow: 'hidden'
        }}>
          <img src="/ar3.png" alt="Autoimmune Diseases" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-white opacity-70 hover:opacity-100 transition-opacity mb-8">
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8 max-w-3xl font-title">
            Autoimmune Diseases Explained in Simple Terms
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
            <span>Published: October 18, 2025</span>
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

            {/* Section 1 */}
            <section id="what-is-autoimmune" className="mb-10 scroll-mt-32">
              <h2 className="text-2xl sm:text-3xl font-bold mb-5 font-title">What Is an Autoimmune Disease?</h2>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-4">
                Your <span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>immune system's</span> job is to protect you by fighting germs, viruses, and infections. In an <span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>autoimmune disease</span>, the immune system mistakenly attacks the body's own healthy tissues, thinking they are a threat. This leads to <span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>inflammation</span>, pain, and damage over time.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed font-medium" style={{ color: '#2C847F' }}>
                In simple terms — the body's defence system becomes overactive and confused.
              </p>
            </section>

            <hr className="border-slate-300 my-10" />

            {/* Section 2 */}
            <section id="why-autoimmune" className="mb-10 scroll-mt-32">
              <h2 className="text-2xl sm:text-3xl font-bold mb-5 font-title">Why Do Autoimmune Diseases Happen?</h2>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-4">There isn't a single cause. Most autoimmune conditions develop due to a combination of factors:</p>
              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1 mb-4">
                <li><span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>Genetic tendency</span></li>
                <li>Hormonal influences</li>
                <li>Infections that trigger immune reactions</li>
                <li>Environmental factors</li>
                <li>Smoking or long-term stress (in some cases)</li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed font-medium" style={{ color: '#2C847F' }}>
                Importantly, autoimmune diseases are not caused by something you did.
              </p>
            </section>

            <hr className="border-slate-300 my-10" />

            {/* Section 3 */}
            <section id="common-autoimmune" className="mb-10 scroll-mt-32">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 font-title">Common Autoimmune Diseases</h2>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-6">Autoimmune conditions can affect different parts of the body:</p>

              <div className="space-y-4">
                <div className="p-5 rounded-xl" style={{ backgroundColor: '#D4F3F2' }}>
                  <h3 className="text-lg font-semibold mb-3">Joint & Muscle Related</h3>
                  <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-2 space-y-1">
                    <li><span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>Rheumatoid Arthritis</span></li>
                    <li><span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>Ankylosing Spondylitis</span></li>
                    <li><span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>Psoriatic Arthritis</span></li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl" style={{ backgroundColor: '#FEF3C7' }}>
                  <h3 className="text-lg font-semibold mb-3">Skin & Systemic Conditions</h3>
                  <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-2 space-y-1">
                    <li><span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>Lupus</span></li>
                    <li><span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>Psoriasis</span></li>
                    <li><span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>Scleroderma</span></li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl" style={{ backgroundColor: '#E0E7FF' }}>
                  <h3 className="text-lg font-semibold mb-3">Other Autoimmune Disorders</h3>
                  <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-2 space-y-1">
                    <li>Thyroid disorders (<span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>Hashimoto's</span>, Graves')</li>
                    <li><span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>Inflammatory bowel disease</span></li>
                    <li><span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>Vasculitis</span></li>
                  </ul>
                </div>
              </div>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mt-4 italic">Some conditions affect one area, while others affect multiple organs.</p>
            </section>

            <hr className="border-slate-300 my-10" />

            {/* Section 4 */}
            <section id="symptoms" className="mb-10 scroll-mt-32">
              <h2 className="text-2xl sm:text-3xl font-bold mb-5 font-title">Common Symptoms of Autoimmune Diseases</h2>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-4">Symptoms vary widely, but many people experience:</p>
              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1 mb-4">
                <li><span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>Persistent fatigue</span></li>
                <li>Joint pain, swelling, or stiffness</li>
                <li>Muscle aches</li>
                <li>Skin rashes</li>
                <li>Fever or low-grade fever</li>
                <li><span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>Brain fog</span> or difficulty concentrating</li>
                <li><span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>Flare-ups</span> followed by periods of relief</li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 italic">Symptoms may come and go, which often delays diagnosis.</p>
            </section>

            <hr className="border-slate-300 my-10" />

            {/* Section 5 */}
            <section id="curable" className="mb-10 scroll-mt-32">
              <h2 className="text-2xl sm:text-3xl font-bold mb-5 font-title">Are Autoimmune Diseases Curable?</h2>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-4">Most autoimmune diseases cannot be cured, but they can be effectively managed. Modern treatment focuses on:</p>
              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1 mb-4">
                <li>Reducing immune overactivity</li>
                <li>Controlling inflammation</li>
                <li>Preventing long-term damage</li>
                <li>Improving daily function and <span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>quality of life</span></li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed font-medium" style={{ color: '#2C847F' }}>
                Many patients live full, active lives with proper care.
              </p>
            </section>

            <hr className="border-slate-300 my-10" />

            {/* Section 6 */}
            <section id="diagnosis" className="mb-10 scroll-mt-32">
              <h2 className="text-2xl sm:text-3xl font-bold mb-5 font-title">How Are Autoimmune Diseases Diagnosed?</h2>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-4">Diagnosis is based on a combination of:</p>
              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1 mb-4">
                <li>Detailed symptom history</li>
                <li>Physical examination</li>
                <li>Blood tests (immune markers, inflammation levels)</li>
                <li>Imaging tests when required</li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 italic">There is no single test — accurate diagnosis takes time and expertise.</p>
            </section>

            <hr className="border-slate-300 my-10" />

            {/* Section 7 */}
            <section id="treatment" className="mb-10 scroll-mt-32">
              <h2 className="text-2xl sm:text-3xl font-bold mb-5 font-title">How Are Autoimmune Diseases Treated?</h2>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-4">Treatment plans are personalised and may include:</p>
              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1 mb-4">
                <li>Medications to control inflammation</li>
                <li><span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>Immune-modulating drugs</span></li>
                <li>Lifestyle and activity guidance</li>
                <li>Regular monitoring and follow-up</li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed font-medium" style={{ color: '#2C847F' }}>
                The aim is disease control, not just symptom relief.
              </p>
            </section>

            <hr className="border-slate-300 my-10" />

            {/* Section 8 */}
            <section id="living-with" className="mb-10 scroll-mt-32">
              <h2 className="text-2xl sm:text-3xl font-bold mb-5 font-title">Living with an Autoimmune Disease</h2>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-4">Being diagnosed with an autoimmune condition can be emotionally challenging. It's common to feel anxious, frustrated, or uncertain.</p>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-3">What helps:</p>
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

            <hr className="border-slate-300 my-10" />

            {/* Section 9 */}
            <section id="when-see-specialist" className="mb-10 scroll-mt-32">
              <h2 className="text-2xl sm:text-3xl font-bold mb-5 font-title">When Should You See a Specialist?</h2>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-4">You should consult a <span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>specialist</span> if you experience:</p>
              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1 mb-4">
                <li>Ongoing unexplained fatigue</li>
                <li>Persistent joint pain or swelling</li>
                <li>Symptoms affecting multiple body systems</li>
                <li>Repeated flare-ups</li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed font-medium" style={{ color: '#2C847F' }}>
                Early specialist care can prevent long-term complications.
              </p>
            </section>

            <hr className="border-slate-300 my-10" />

            {/* Section 10 */}
            <section id="takeaway" className="mb-10 scroll-mt-32">
              <h2 className="text-2xl sm:text-3xl font-bold mb-5 font-title">Final Thoughts</h2>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-4">
                Autoimmune diseases may be complex, but understanding them doesn't have to be. With <span style={{ color: '#2a9d8f', fontWeight: 600, textDecoration: 'underline' }}>early diagnosis</span>, the right treatment, and long-term support, most people can manage their condition effectively and live well.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed font-medium" style={{ color: '#2C847F' }}>
                If symptoms are affecting your daily life, don't ignore them.
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
                  <a href="#why-autoimmune" className="text-base hover:opacity-70 transition-opacity" style={{ color: '#182439', textDecoration: 'underline' }}>
                    Why do autoimmune diseases happen?
                  </a>
                </li>
                <li>
                  <a href="#common-autoimmune" className="text-base hover:opacity-70 transition-opacity" style={{ color: '#182439', textDecoration: 'underline' }}>
                    Common autoimmune diseases
                  </a>
                </li>
                <li>
                  <a href="#symptoms" className="text-base hover:opacity-70 transition-opacity" style={{ color: '#182439', textDecoration: 'underline' }}>
                    Common symptoms
                  </a>
                </li>
                <li>
                  <a href="#curable" className="text-base hover:opacity-70 transition-opacity" style={{ color: '#182439', textDecoration: 'underline' }}>
                    Are autoimmune diseases curable?
                  </a>
                </li>
                <li>
                  <a href="#diagnosis" className="text-base hover:opacity-70 transition-opacity" style={{ color: '#182439', textDecoration: 'underline' }}>
                    How are they diagnosed?
                  </a>
                </li>
                <li>
                  <a href="#treatment" className="text-base hover:opacity-70 transition-opacity" style={{ color: '#182439', textDecoration: 'underline' }}>
                    How are they treated?
                  </a>
                </li>
                <li>
                  <a href="#when-see-specialist" className="text-base hover:opacity-70 transition-opacity" style={{ color: '#182439', textDecoration: 'underline' }}>
                    When to see a specialist
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
            Need Expert Guidance?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Our rheumatology specialist can help diagnose and manage autoimmune conditions effectively.
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
