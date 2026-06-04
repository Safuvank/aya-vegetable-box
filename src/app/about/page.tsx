import React from "react";
import Link from "next/link";
import { siteConfig } from "../constants/site.";

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      
      {/* 1. EDITORIAL HERO - Ultra Minimalist & High Impact */}
      <section className="relative w-full pt-40 pb-24 md:pt-52 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center min-h-[70vh]">
        <div className="flex items-center gap-4 mb-8">
          <span className="w-12 h-1 bg-red-600"></span>
          <h1 className="text-sm font-bold text-red-600 tracking-[0.2em] uppercase">
            About {siteConfig.brandName} {/*[cite: 2] */}
          </h1>
        </div>
        
        <h2 className="text-5xl sm:text-6xl md:text-8xl font-black text-black tracking-tighter leading-[0.9] text-balance mb-10">
          The heavy-duty <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">
            backbone
          </span> of <br />
          agriculture.
        </h2>
        
        <p className="text-lg md:text-2xl text-neutral-500 font-light max-w-2xl leading-relaxed">
          We engineer and distribute industrial-grade crates built to survive the harshest harvest environments. No cracking. No bending. Just pure reliability.
        </p>
      </section>

      {/* 2. THE STANDARD (Dark Mode Sticky Scroll) */}
      <section className="relative bg-black text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Sticky Left Column */}
            <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
              <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Zero <br/> Compromise.</h3>
              <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                Every crate we mold is a commitment to the farmers and distributors who feed the nation. We eliminate agricultural waste caused by poor logistics.
              </p>
            </div>

            {/* Scrolling Right Column */}
            <div className="lg:w-2/3 flex flex-col gap-12">
              {[
                { title: "Premium PP Plastics", desc: "Manufactured using 100% virgin and high-grade recycled polypropylene for maximum lifespan." },
                { title: "Extreme Weather UV", desc: "Treated to resist degradation from intense sunlight, preventing brittleness over seasons of use." },
                { title: "Load-Bearing Architecture", desc: "Reinforced bases and walls designed specifically for dense, high-yield bulk transport." },
                { title: "Precision Stacking", desc: "Interlocking edges engineered for safe, space-saving vertical storage in trucks and warehouses." }
              ].map((item, i) => (
                <div key={i} className="group border-b border-neutral-800 pb-12">
                  <div className="flex items-baseline gap-6 mb-4">
                    <span className="text-3xl font-black text-red-600">0{i + 1}</span>
                    <h4 className="text-2xl md:text-3xl font-bold text-white group-hover:text-red-500 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-neutral-400 text-lg pl-14">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. LOGISTICS & INFRASTRUCTURE (Dashboard Style) */}
      <section className="py-24 md:py-32 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h2 className="text-sm font-bold text-red-600 tracking-[0.2em] uppercase mb-4">Scale</h2>
              <h3 className="text-4xl md:text-6xl font-black text-black tracking-tight">Infrastructure</h3>
            </div>
            <p className="text-neutral-500 max-w-md text-lg">
              Operating across major strategic checkpoints to ensure rapid deployment of wholesale orders.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Massive Stats Block */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              {[
                { label: "Orders Delivered", value: "5,000+" },
                { label: "B2B Partners", value: "100+" },
                { label: "Color Variants", value: "6+" },
                { label: "Major Hubs", value: "5" },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-8 border border-neutral-200 flex flex-col justify-center hover:border-black transition-colors group">
                  <span className="text-4xl md:text-6xl font-black text-black tracking-tighter mb-2 group-hover:text-red-600 transition-colors">
                    {stat.value}
                  </span>
                  <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Locations Flight-Board Style */}
            <div className="lg:col-span-5 bg-black p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-900/30 blur-[80px] rounded-full pointer-events-none" />
              <div className="relative z-10">
                <h4 className="text-sm font-bold text-red-500 uppercase tracking-widest mb-8 border-b border-neutral-800 pb-4">
                  Active Distribution Routes
                </h4>
                <ul className="space-y-6">
                  {siteConfig.locations.map((loc) => (
                    <li key={loc} className="flex items-center justify-between group">
                      <span className="text-2xl font-bold text-neutral-300 group-hover:text-white transition-colors">
                        {loc} {/*[cite: 2] */}
                      </span>
                      <span className="w-2 h-2 bg-red-600 rounded-full shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. THE ARSENAL (Hover Interaction List) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm font-bold text-red-600 tracking-[0.2em] uppercase mb-4">
            The Arsenal
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-12">
            Engineered in every color.
          </h3>
          
          <div className="flex flex-col gap-4 mb-16">
            {[
              { name: "Red 1st Series", type: "Heavy Duty", color: "bg-red-600" },
              { name: "Blue 1st Series", type: "Standard", color: "bg-blue-600" },
              { name: "Green 2nd Series", type: "Eco Grade", color: "bg-green-600" },
              { name: "Orange Series", type: "High-Vis", color: "bg-orange-500" },
              { name: "Yellow Series", type: "Premium", color: "bg-yellow-400" },
              { name: "PP Black", type: "Industrial", color: "bg-neutral-900" }
            ].map((prod, i) => (
              <div key={i} className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-neutral-50 hover:bg-black transition-all duration-300 border border-neutral-100 hover:border-black cursor-pointer">
                <div className="flex items-center gap-6 mb-4 sm:mb-0">
                  <span className={`w-6 h-6 rounded-sm shadow-inner ${prod.color}`} />
                  <span className="text-2xl font-bold text-black group-hover:text-white transition-colors">
                    {prod.name} {/*[cite: 2] */}
                  </span>
                </div>
                <span className="text-sm font-bold text-neutral-400 uppercase tracking-widest group-hover:text-red-500 transition-colors">
                  {prod.type}
                </span>
              </div>
            ))}
          </div>
          
          <Link 
            href="/products" 
            className="group inline-flex items-center gap-3 text-black font-black uppercase tracking-widest text-lg"
          >
            <span className="border-b-2 border-black group-hover:border-red-600 transition-colors">
              Explore Full Catalog
            </span>
            <svg className="w-5 h-5 text-red-600 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={3} d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* 5. MASSIVE CALL TO ACTION */}
      {/* <section className="bg-red-600 py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex flex-col items-center text-center">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        
        <div className="relative z-10 max-w-4xl">
          <h2 className="text-5xl sm:text-7xl font-black text-white tracking-tighter mb-8 leading-none">
            Ready to scale <br/> your logistics?
          </h2>
          <p className="text-red-100 text-xl md:text-2xl font-medium mb-12">
            Contact our sales team today to discuss bulk pricing, custom orders, and immediate availability.
          </p>
          
          <Link 
            href="/contact" 
            className="inline-block bg-white text-black font-black uppercase tracking-widest text-lg px-12 py-6 hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          >
            Start an Order
          </Link>
        </div>
      </section> */}

    </main>
  );
}