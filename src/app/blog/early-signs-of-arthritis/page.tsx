"use client";

import Link from 'next/link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

export default function EarlySignsOfArthritisPage() {
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
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full" style={{ backgroundColor: '#D4F3F2', color: '#182439' }}>
              Education
            </span>
            <div className="flex items-center gap-1.5 text-sm opacity-50">
              <Calendar size={14} />
              <span>Dec 10, 2025</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm opacity-50">
              <Clock size={14} />
              <span>8 min read</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-title leading-tight mb-6">
            How to Recognise Early Signs of Arthritis
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl opacity-70 leading-relaxed max-w-2xl">
            Arthritis doesn't always begin with severe pain or visible joint deformities. Recognising the early signs can help you get timely treatment and protect your joints.
          </p>
        </div>
      </header>

      {/* Featured Image */}
      <div className="w-full" style={{ backgroundColor: '#EEF2F9' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
          <div className="rounded-[20px] sm:rounded-[30px] overflow-hidden">
            <img
              src="/article1.png"
              alt="Early Signs of Arthritis"
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
              Arthritis doesn't always begin with severe pain or visible joint deformities. In many cases, the early signs are subtle and easy to dismiss as fatigue, stress, or "normal" aches.
            </p>
            <p className="text-lg leading-relaxed opacity-80">
              Recognising these early symptoms is important because early diagnosis and treatment can slow disease progression and protect your joints in the long run. So how do you know when joint pain is more than just a passing problem? Let's break it down.
            </p>
          </div>

          {/* What Is Arthritis */}
          <section className="mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-title mb-5">What Is Arthritis?</h2>
            <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-4">
              Arthritis is a broad term used to describe conditions that cause joint inflammation, pain, stiffness, and reduced movement. There are many types of arthritis, including osteoarthritis, rheumatoid arthritis, psoriatic arthritis, and gout.
            </p>
            <p className="text-base sm:text-lg leading-relaxed opacity-80">
              While each type behaves differently, many share common early warning signs.
            </p>
          </section>

          {/* Divider */}
          <hr className="border-slate-200 my-10 sm:my-14" />

          {/* Early Signs Section */}
          <section className="mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-title mb-8">Early Signs of Arthritis You Should Not Ignore</h2>

            {/* Sign 1 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C847F' }}>1. Persistent Joint Pain</h3>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-3">
                Occasional aches after activity are common. But if joint pain:
              </p>
              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1">
                <li>Keeps returning</li>
                <li>Lasts for weeks</li>
                <li>Occurs even without strain</li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mt-3 italic">
                …it may be an early sign of arthritis.
              </p>
            </div>

            {/* Sign 2 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C847F' }}>2. Morning Stiffness</h3>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-3">
                Stiffness when you wake up is a key early symptom.
              </p>
              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1">
                <li>Stiffness lasting more than 30 minutes is concerning</li>
                <li>If it improves slowly with movement, it may indicate inflammatory arthritis</li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mt-3">
                Short-lived stiffness that eases quickly is more common in wear-and-tear conditions.
              </p>
            </div>

            {/* Sign 3 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C847F' }}>3. Joint Swelling or Puffiness</h3>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-3">
                You may notice:
              </p>
              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1">
                <li>Visible swelling</li>
                <li>A "tight" feeling around joints</li>
                <li>Rings feeling tight or shoes feeling uncomfortable</li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mt-3">
                Swelling suggests inflammation and should not be ignored.
              </p>
            </div>

            {/* Sign 4 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C847F' }}>4. Reduced Range of Motion</h3>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-3">
                It could indicate early joint damage or inflammation if you find it harder to:
              </p>
              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1">
                <li>Fully bend or straighten a joint</li>
                <li>Grip objects</li>
                <li>Walk comfortably</li>
              </ul>
            </div>

            {/* Sign 5 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C847F' }}>5. Warmth or Tenderness in Joints</h3>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-3">
                Inflamed joints may feel:
              </p>
              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1">
                <li>Warm to touch</li>
                <li>Tender when pressed</li>
                <li>Painful during movement</li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mt-3">
                This is especially common in inflammatory types of arthritis.
              </p>
            </div>

            {/* Sign 6 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C847F' }}>6. Fatigue or Low Energy</h3>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-3">
                Many people don't associate fatigue with joint disease, but it's common in inflammatory arthritis.
              </p>
              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1">
                <li>Persistent tiredness</li>
                <li>Feeling drained even after rest</li>
                <li>Difficulty concentrating</li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mt-3">
                These symptoms often appear before severe joint damage.
              </p>
            </div>

            {/* Sign 7 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C847F' }}>7. Symmetrical Joint Symptoms</h3>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-3">
                If both sides of your body are affected—such as:
              </p>
              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1">
                <li>Both wrists</li>
                <li>Both hands</li>
                <li>Both knees</li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed opacity-80 mt-3 italic">
                …it may suggest an autoimmune form of arthritis like rheumatoid arthritis.
              </p>
            </div>
          </section>

          {/* Divider */}
          <hr className="border-slate-200 my-10 sm:my-14" />

          {/* Comparison Table */}
          <section className="mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-title mb-6">Early Arthritis vs Normal Joint Pain</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="py-4 px-4 text-sm font-semibold uppercase tracking-wide border-b-2" style={{ borderColor: '#D4F3F2', color: '#065F46' }}>Normal Joint Strain</th>
                    <th className="py-4 px-4 text-sm font-semibold uppercase tracking-wide border-b-2" style={{ borderColor: '#FEE2E2', color: '#991B1B' }}>Possible Arthritis</th>
                  </tr>
                </thead>
                <tbody className="text-base">
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 opacity-80">Improves with rest</td>
                    <td className="py-3 px-4 opacity-80">Persists or worsens</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 opacity-80">No swelling</td>
                    <td className="py-3 px-4 opacity-80">Swelling present</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 opacity-80">Brief stiffness</td>
                    <td className="py-3 px-4 opacity-80">Prolonged morning stiffness</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 opacity-80">One-sided pain</td>
                    <td className="py-3 px-4 opacity-80">Often affects both sides</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm italic opacity-50">
              If symptoms persist beyond 2–3 weeks, medical evaluation is recommended.
            </p>
          </section>

          {/* Divider */}
          <hr className="border-slate-200 my-10 sm:my-14" />

          {/* Why Early Detection Matters */}
          <section className="mb-10 sm:mb-14 p-6 sm:p-8 rounded-xl" style={{ backgroundColor: '#FEF9E7' }}>
            <h2 className="text-2xl sm:text-3xl font-title mb-4">Why Early Detection Matters</h2>
            <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-4">
              Ignoring early arthritis symptoms can lead to:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1 mb-4">
              <li>Permanent joint damage</li>
              <li>Reduced mobility</li>
              <li>Chronic pain</li>
              <li>Long-term disability</li>
            </ul>
            <p className="text-base sm:text-lg leading-relaxed font-medium">
              With modern treatments, early intervention can slow or even halt disease progression in many cases.
            </p>
          </section>

          {/* When Should You See a Doctor */}
          <section className="mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-title mb-5">When Should You See a Doctor?</h2>
            <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-4">
              You should consult a rheumatologist if you experience:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed opacity-80 ml-4 space-y-1 mb-4">
              <li>Joint pain lasting more than a few weeks</li>
              <li>Morning stiffness over 30 minutes</li>
              <li>Joint swelling or warmth</li>
              <li>Fatigue with joint symptoms</li>
            </ul>
            <p className="text-base sm:text-lg leading-relaxed opacity-80">
              Early assessment helps create a clear diagnosis and a personalized treatment plan.
            </p>
          </section>

          {/* Divider */}
          <hr className="border-slate-200 my-10 sm:my-14" />

          {/* Final Thoughts */}
          <section className="mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-title mb-5">Final Thoughts</h2>
            <p className="text-base sm:text-lg leading-relaxed opacity-80 mb-4">
              Joint pain is not always "normal ageing." Listening to your body and recognising early warning signs can make a significant difference in long-term joint health.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed font-medium" style={{ color: '#2C847F' }}>
              If something doesn't feel right, it's better to get it checked early rather than wait.
            </p>
          </section>

        </div>
      </article>

      {/* CTA Section */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: '#182439' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-title mb-4 text-white">
            Concerned About Joint Pain?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Early diagnosis can make a significant difference. Schedule a consultation with our rheumatology specialist today.
          </p>
          <button className="btn-primary text-base px-8 py-4">
            Book a Consultation
          </button>
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
