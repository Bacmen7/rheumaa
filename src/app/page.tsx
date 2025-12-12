"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Calendar, ArrowRight,
  Bone, Flame, ShieldAlert, Brain, Sun, MoveVertical, User, Hand, Check,
  Stethoscope, Pill, ChevronDown, Star
} from 'lucide-react';

export default function HomePage() {
  // Data only - no inline styles needed anymore
  const conditions = [
    { name: "Rheumatoid Arthritis (RA)", icon: Hand, desc: "Joint inflammation care", image: "/rh1.png", slug: "rheumatoid-arthritis", hasPage: true },
    { name: "Ankylosing Spondylitis (AS)", icon: MoveVertical, desc: "Spine & posture health", image: "/Ankylosing Spondylitis (AS).png", slug: "ankylosing-spondylitis" },
    { name: "Osteoarthritis", icon: Bone, desc: "Bone & cartilage support", image: "/Osteoarthritis Bone.png", slug: "osteoarthritis" },
    { name: "Lupus", icon: ShieldAlert, desc: "Autoimmune protection", image: "/Lupus.png", slug: "lupus" },
    { name: "Gout", icon: Flame, desc: "Rapid pain relief", image: "/Gout.png", slug: "gout" },
    { name: "Psoriatic Arthritis", icon: Sun, desc: "Skin & joint therapy", image: "/Psoriatic Arthritis.png", slug: "psoriatic-arthritis" },
    { name: "Fibromyalgia", icon: Brain, desc: "Pain management", image: "/Fibromyalgia.png", slug: "fibromyalgia" },
    { name: "Back & Neck Pain", icon: User, desc: "Physical therapy", image: "/backpain.png", slug: "back-neck-pain" }
  ];

  const doctors = [
    {
      name: "Dr. Raghavendra H",
      qualification: "MBBS, MD - Gen Med, DM - Rheumatology",
      bio: "13 years experience. Member of Indian Society of Nephrology (ISN) and Karnataka Medical Council. Expert in autoimmune care.",
      image: "/drraghu.avif"
    }
  ];

  const diagnosticApproach = [
    "Detailed medical history",
    "Physical musculoskeletal evaluation",
    "Blood tests & autoimmune markers",
    "Advanced imaging (X-ray, MRI)",
    "Differential diagnosis analysis"
  ];

  const treatmentOptions = [
    "Disease-Modifying Anti-Rheumatic Drugs (DMARDs)",
    "Biologics & targeted therapy",
    "Pain management & Relief",
    "Lifestyle & mobility guidance",
    "Diet & inflammation counselling"
  ];

  const services = [
    { id: 1, title: "In-clinic Consultation", description: "Experience thorough physical examinations and personalized face-to-face discussions with our specialists to understand your condition deeply and plan effective treatment.", image: "/clinic.png" },
    { id: 2, title: "Advanced Lab Testing", description: "Comprehensive autoimmune profiling and blood work analysis performed with our state-of-the-art diagnostic partners to pinpoint specific inflammatory markers.", image: "/lab.png" },
    { id: 3, title: "Imaging Guidance", description: "Utilizing high-resolution Ultrasound and coordinating X-ray/MRI scans for precise visualization of joint inflammation and structural changes.", image: "/imaging.png" },
    { id: 4, title: "Long-term Management", description: "Continuous monitoring protocols, regular follow-ups, and medication adjustments to ensure sustained remission and improve your quality of life.", image: "/Long-term Management.png" },
    { id: 5, title: "Teleconsultation", description: "Secure, remote video consultations for follow-ups and urgent queries, ensuring you stay connected with your doctor from the comfort of your home.", image: "/consutlatioon.png" }
  ];

  const articles = [
    { id: "art-1", title: "How to Recognize Early Signs of Arthritis", summary: "Early detection can prevent long-term joint damage. Learn the key symptoms like stiffness and swelling to watch out for.", date: "Dec 10, 2025", tag: "Education", image: "/article1.png", slug: "early-signs-of-arthritis" },
    { id: "art-2", title: "Managing Chronic Pain: What Actually Helps?", summary: "Discover evidence-based strategies for managing chronic pain beyond just medication, including diet and exercise.", date: "Nov 25, 2025", tag: "Lifestyle", image: "/article2.png", slug: "managing-chronic-pain" },
    { id: "art-3", title: "Autoimmune Diseases Explained in Simple Terms", summary: "Breaking down complex autoimmune conditions into easy-to-understand concepts so you can better manage your health.", date: "Oct 18, 2025", tag: "Medical Guide", image: "/article3.png", slug: "autoimmune-diseases-explained" }
  ];

  const [activeServiceId, setActiveServiceId] = useState(1);
  const [activeImage, setActiveImage] = useState(services[0].image);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#EEF2F9', color: '#182439' }}>

      {/* Hero Section */}
      <header className="w-full bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
            {/* Text Content */}
            <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-16 order-2 lg:order-1">
              <div className="space-y-6 sm:space-y-8">
                <h1 className="title-hero leading-tight drop-shadow-sm text-left">
                  Expert Rheumatology Care for <span className="relative inline-block">
                    Pain-Free Living
                    <svg className="absolute w-full h-2 sm:h-3 -bottom-1 left-0 text-teal-300 opacity-60" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00026 6.99997C35.5003 3.00003 160.003 -3.5001 198.001 2.49987" stroke="currentColor" strokeWidth="3"></path></svg>
                  </span>
                </h1>

                <p className="desc-normal opacity-90 text-left">
                  Early diagnosis, personalised treatment, and long-term support for arthritis, autoimmune diseases, and chronic joint pain.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                  <button className="btn-primary flex items-center justify-center gap-2">
                    Book an Appointment
                  </button>
                  <button className="btn-secondary flex items-center justify-center gap-2">
                    Call Our Clinic
                  </button>
                </div>

                <div className="pt-4 sm:pt-6 opacity-80">
                  <p className="italic text-sm sm:text-base lg:text-lg font-medium">Move better. Live better. We're here to help you regain comfort and confidence.</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="h-[300px] sm:h-[350px] lg:h-auto order-1 lg:order-2">
              <img
                src="/hero.png"
                alt="Rheumatology specialist providing care"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="w-full py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
            <div className="flex flex-col justify-center space-y-4 sm:space-y-6 py-4 sm:py-8 order-2 lg:order-1">
              <p className="desc-normal text-left">
                At Rheuma, we specialise in diagnosing and treating arthritis, autoimmune disorders, and complex joint and muscle conditions.
                <br /><br />
                With evidence-based care, advanced diagnostics, and a compassionate approach, our goal is to help you reduce pain, restore mobility, and improve your long-term quality of life.
              </p>
            </div>
            <div className="relative h-[280px] sm:h-[350px] lg:h-full lg:min-h-[500px] w-full rounded-[20px] sm:rounded-[30px] overflow-hidden shadow-sm order-1 lg:order-2">
              <img src="/about_section_care.png" alt="Rheumatologist consulting with patient" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Treat Section */}
      <section className="w-full py-12 sm:py-16 lg:py-28" style={{ backgroundColor: '#EEF2F9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="title-section mb-3 sm:mb-4">Conditions We Treat</h2>
          <p className="desc-normal opacity-60 mb-8 sm:mb-12 lg:mb-16 max-w-2xl mx-auto">Comprehensive care plans for a wide range of rheumatological and autoimmune conditions.</p>
          <div id="conditions" className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 lg:mb-16">
            {conditions.map((item, index) => (
              <Link key={index} href={item.hasPage ? `/${item.slug}` : '#'} className="group relative flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 transition-all duration-300 hover:shadow-lg cursor-pointer bg-white overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-transparent hover:border-teal-500">
                {item.image ? (
                  <div className="mb-2 sm:mb-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                ) : (
                  <div className="mb-2 sm:mb-4 p-2 sm:p-3 bg-slate-50 rounded-full group-hover:bg-teal-50 transition-colors">
                    <item.icon size={24} className="text-slate-400 group-hover:text-teal-600 transition-colors sm:w-7 sm:h-7" />
                  </div>
                )}
                <span className="text-sm sm:text-base lg:text-lg group-hover:text-teal-900 transition-colors mb-1 font-medium text-center leading-tight" style={{ color: '#182439' }}>{item.name}</span>
                <span className="text-[10px] sm:text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Patients Choose Us Section */}
      <section className="w-full py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="title-section text-center mb-8 sm:mb-12 lg:mb-16">Why Patients Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-x-12 lg:gap-y-12 max-w-5xl mx-auto">
            {[
              { title: "Accurate Diagnosis", desc: "Advanced tools, imaging, and targeted testing to identify conditions early and precisely." },
              { title: "Personalised Treatment Plans", desc: "Therapy tailored to your symptoms, lifestyle, and long-term goals." },
              { title: "Evidence-Based Care", desc: "Modern, guideline-driven protocols for the best outcomes." },
              { title: "Long-Term Support", desc: "Continuous monitoring, regular follow-ups, and proactive flare management." }
            ].map((item, index) => (
              <div key={index} className="flex gap-4 sm:gap-5 items-start">
                <div className="flex-shrink-0 mt-1 p-1.5 sm:p-2 rounded-full" style={{ backgroundColor: '#D4F3F2' }}>
                  <Check size={20} className="sm:w-6 sm:h-6" style={{ color: '#182439' }} />
                </div>
                <div>
                  <h3 className="font-title text-xl sm:text-2xl font-bold mb-2 sm:mb-3" style={{ color: '#182439' }}>{item.title}</h3>
                  <p className="desc-small">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Team Section */}
      <section className="w-full py-12 sm:py-16 lg:py-24" style={{ backgroundColor: '#EEF2F9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12 text-center">
            <h2 className="title-section">Meet Our Specialist</h2>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col bg-white transition-shadow hover:shadow-xl group cursor-default max-w-sm rounded-3xl border border-black/5">
              <div className="p-3">
                <div className="h-72 w-full overflow-hidden relative rounded-2xl bg-slate-100">
                  <img src={doctors[0].image} alt={doctors[0].name} className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
              <div className="px-6 pb-8 pt-2 flex flex-col flex-grow">
                <h4 className="font-title text-2xl font-bold mb-1 group-hover:text-teal-800 transition-colors leading-tight" style={{ color: '#182439' }}>{doctors[0].name}</h4>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-4">{doctors[0].qualification}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{doctors[0].bio}</p>
                <Link href="/profile" className="mt-auto w-full py-3 rounded-full font-semibold transition-colors hover:opacity-90 text-center block text-white" style={{ backgroundColor: '#182439' }}>Know More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic & Treatment Approach Section */}
      <section className="py-12 sm:py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:gap-6 text-center md:gap-8 mb-8 sm:mb-12 lg:mb-16">
            <h2 className="title-section sm:title-hero">Our Approach to Care</h2>
            <p className="desc-normal opacity-80 max-w-2xl mx-auto leading-relaxed">We combine advanced diagnostics with personalized treatment plans to ensure the best possible outcomes for your joint health.</p>
          </div>
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-[2rem] lg:rounded-[3rem] flex flex-col justify-center transition-transform hover:scale-[1.01]" style={{ backgroundColor: '#D4F3F2' }}>
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="p-2 sm:p-3 bg-white rounded-full shadow-sm">
                  <Stethoscope size={24} className="sm:w-8 sm:h-8" style={{ color: '#182439' }} />
                </div>
                <h3 className="title-card">Diagnostic Approach</h3>
              </div>
              <ul className="space-y-3 sm:space-y-4">
                {diagnosticApproach.map((text, idx) => (
                  <React.Fragment key={idx}>
                    <li className="flex items-start gap-3 sm:gap-4 py-1.5 sm:py-2">
                      <Check size={18} className="mt-1 sm:w-5 sm:h-5" style={{ color: '#182439' }} />
                      <span className="text-base sm:text-lg font-medium font-body" style={{ color: '#182439' }}>{text}</span>
                    </li>
                    {idx !== diagnosticApproach.length - 1 && <div className="h-px w-full bg-slate-400/20"></div>}
                  </React.Fragment>
                ))}
              </ul>
            </div>
            <div className="p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-[2rem] lg:rounded-[3rem] flex flex-col justify-center transition-transform hover:scale-[1.01] bg-white" style={{ border: '2px solid #D4F3F2' }}>
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="p-2 sm:p-3 rounded-full shadow-sm" style={{ backgroundColor: '#D4F3F2' }}>
                  <Pill size={24} className="sm:w-8 sm:h-8" style={{ color: '#182439' }} />
                </div>
                <h3 className="title-card">Treatment Options</h3>
              </div>
              <ul className="space-y-3 sm:space-y-4">
                {treatmentOptions.map((text, idx) => (
                  <React.Fragment key={idx}>
                    <li className="flex items-start gap-3 sm:gap-4 py-1.5 sm:py-2">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EEF2F9' }}>
                        <Check size={12} className="text-teal-600 sm:w-3.5 sm:h-3.5" />
                      </div>
                      <span className="text-base sm:text-lg font-medium opacity-80 font-body" style={{ color: '#182439' }}>{text}</span>
                    </li>
                    {idx !== treatmentOptions.length - 1 && <div className="h-px w-full bg-slate-100"></div>}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Success Stories Section */}
      <section className="py-12 sm:py-16 lg:py-24" style={{ backgroundColor: '#EEF2F9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="title-section mb-3 sm:mb-4">Patient Success Stories</h2>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className="text-yellow-500 fill-yellow-500 sm:w-5 sm:h-5" />
                ))}
              </div>
              <span className="font-semibold text-base sm:text-lg" style={{ color: '#182439' }}>4.9</span>
              <span className="text-gray-500 text-sm sm:text-base">(28 reviews on Practo)</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { name: "Ramakrishna Kakumani", initial: "R", time: "5 months ago", review: "My mother-in-law had been undergoing treatment for joint pains at KIMS Ongole for over two years, but unfortunately, there was no improvement. After consulting Dr. Raghavendra, we saw significant improvement in her condition." },
              { name: "T V Joy", initial: "T", time: "3 years ago", review: "Dr. Raghavendra is always approachable, which is not the case with many others. I am completely satisfied with his way of treatment. Most importantly he is never in a hurry and spends lot of time to comfort the patient." },
              { name: "Shoma Nair", initial: "S", time: "3 years ago", review: "I have been visiting Dr. Raghavendra for a year now for my mother's Arthritis Management. He does thorough examination and is compassionate and warm towards patients." },
            ].map((r, idx) => (
              <div key={idx} className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-semibold text-xs sm:text-sm shrink-0" style={{ backgroundColor: '#D4F3F2', color: '#182439' }}>{r.initial}</div>
                  <div>
                    <h4 className="font-semibold text-xs sm:text-sm" style={{ color: '#182439' }}>{r.name}</h4>
                    <div className="flex items-center gap-0.5 sm:gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={10} className="text-yellow-500 fill-yellow-500 sm:w-3 sm:h-3" />
                      ))}
                    </div>
                  </div>
                  <span className="text-[10px] sm:text-xs text-gray-400 ml-auto">{r.time}</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{r.review}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6 sm:mt-10">
            <a href="#" className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity font-semibold text-base sm:text-lg" style={{ color: '#182439' }}>
              <span>View All Reviews</span>
              <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Clinic Services Section (Accordion) */}
      <section className="py-12 sm:py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12 lg:mb-16 text-center">
            <h2 className="title-section">Clinic Services</h2>
            <p className="desc-normal opacity-60 mt-3 sm:mt-4 max-w-2xl mx-auto">Explore our wide range of specialized services designed for your care.</p>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-6 sm:gap-8 lg:gap-12">
            <div className="w-full md:w-1/2">
              {services.map((item) => {
                const isActive = activeServiceId === item.id;
                return (
                  <div key={item.id} className="border-b border-slate-300/60 last:border-0">
                    <button
                      onClick={() => { setActiveServiceId(item.id); setActiveImage(item.image); }}
                      className="flex w-full items-center justify-between py-4 sm:py-6 text-left transition-all hover:opacity-80 group outline-none"
                    >
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold font-title transition-colors duration-300 pr-4" style={{ color: isActive ? '#182439' : '#94a3b8' }}>{item.title}</h4>
                      <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 transition-transform duration-300 ${isActive ? 'rotate-180 text-teal-600' : 'text-slate-400'}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-[500px] opacity-100 mb-4 sm:mb-6' : 'max-h-0 opacity-0'}`}>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">{item.description}</p>
                      <div className="mt-4 sm:mt-6 md:hidden rounded-xl sm:rounded-2xl overflow-hidden shadow-lg bg-slate-50">
                        <img src={item.image} alt={item.title} className="w-full h-auto object-contain" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="hidden md:block w-1/2 sticky top-24">
              <div className="relative h-[400px] lg:h-[500px] overflow-hidden shadow-lg transition-all duration-500" style={{ borderRadius: '7px' }}>
                <img key={activeImage} src={activeImage} alt="Service Preview" className="w-full h-full object-cover animate-[fadeIn_0.5s_ease-out_forwards]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12 flex flex-col gap-2 sm:gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1 sm:space-y-2">
              <h2 className="title-section">Latest Articles</h2>
              <p className="desc-normal opacity-60">Stay updated with our latest insights and medical guides.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {articles.map((item) => (
              <div key={item.id} className="group h-full bg-white rounded-lg sm:rounded-xl border border-slate-100 shadow-sm transition-all hover:shadow-lg overflow-hidden flex flex-col">
                <Link href={`/blog/${item.slug}`} className="flex h-full flex-col">
                  <div className="aspect-[4/3] bg-slate-50 relative w-full overflow-hidden">
                    <div className="absolute right-2 sm:right-4 top-2 sm:top-4 z-10 px-2 sm:px-3 py-0.5 sm:py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] sm:text-xs font-bold shadow-sm uppercase tracking-wider" style={{ color: '#182439' }}>{item.tag}</div>
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-4 sm:p-6">
                    <div>
                      <h3 className="mb-2 sm:mb-3 text-base sm:text-lg lg:text-xl font-bold tracking-tight line-clamp-2 font-title" style={{ color: '#182439' }}>{item.title}</h3>
                      <p className="text-slate-500 text-xs sm:text-sm line-clamp-2 leading-relaxed font-body">{item.summary}</p>
                    </div>
                    <div className="mt-4 sm:mt-6 flex items-center justify-between">
                      <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-0.5 sm:py-1 bg-slate-50 rounded-full border border-slate-100">
                        <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400" />
                        <span className="text-[10px] sm:text-xs font-medium text-slate-500">{item.date}</span>
                      </div>
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center hover:bg-slate-50 transition-colors">
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-teal-600" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24" style={{ backgroundColor: '#182439' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-light mb-4 sm:mb-6 text-white" style={{ fontFamily: "'Loretta', Georgia, serif" }}>
            Start Your Journey to Better Mobility
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto leading-relaxed">
            We provide timely, expert rheumatology care to help you manage pain and regain control of your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base transition-all hover:opacity-90" style={{ backgroundColor: '#B1EFEC', color: '#182439', borderRadius: '25px' }}>
              Book Appointment Online
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base border-2 border-white text-white transition-all hover:bg-white/10" style={{ borderRadius: '25px' }}>
              Call Now
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
