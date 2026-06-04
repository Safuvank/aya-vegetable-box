import React from "react";
import Link from "next/link";
import { siteConfig } from "../constants/site.";

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white pt-24 md:pt-32">
      
      {/* 1. PAGE HERO SECTION (Dark Editorial) */}
      <section className="relative w-full bg-black py-20 md:py-32 overflow-hidden border-b-8 border-red-600">
        <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-3xl">
            <h1 className="text-sm font-bold text-red-500 tracking-[0.2em] uppercase mb-4">
              About {siteConfig.brandName} {/* */}
            </h1>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-6">
              Engineering the <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                Backbone of Agriculture.
              </span>
            </h2>
            <p className="text-lg md:text-xl text-neutral-400 font-light max-w-xl">
              We manufacture and distribute heavy-duty, industrial-grade vegetable crates designed to survive the toughest harvest environments.
            </p>
          </div>
        </div>
      </section>

      {/* 2. OUR MISSION & VISION (Grid Layout) */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
            <div>
              <h3 className="text-3xl font-black text-black mb-6">Our Mission</h3>
              <p className="text-neutral-600 leading-relaxed text-lg mb-8">
                At AYA, our mission is simple: to eliminate agricultural waste caused by poor logistics. We build crates that do not break, do not bend, and protect the harvest from farm to market. Every box we mold is a commitment to the farmers and distributors who feed the nation.
              </p>
            </div>
            <div className="bg-neutral-50 p-10 rounded-3xl border border-neutral-200 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-full blur-3xl group-hover:bg-red-200 transition-colors duration-500" />
              <h3 className="text-3xl font-black text-black mb-6 relative z-10">The Standard</h3>
              <ul className="space-y-4 relative z-10">
                {[
                  "100% Premium Virgin & Recycled PP Plastics",
                  "UV Resistant for Extreme Weather",
                  "Precision Stackable Architecture",
                  "Maximum Load-Bearing Capacity"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full" />
                    <span className="text-neutral-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BUSINESS STATISTICS (Bento Box Design) */}
      <section className="py-24 bg-neutral-950 text-white relative overflow-hidden">
        <div className="absolute -left-40 top-20 w-96 h-96 bg-red-900/20 blur-[100px] rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Scale & Infrastructure</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { label: "Orders Delivered", value: "5,000+" },
              { label: "Major Locations", value: "5+" },
              { label: "Color Variants", value: "10+" },
              { label: "B2B Partners", value: "100+" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-8 bg-neutral-900 border border-neutral-800 rounded-2xl hover:border-red-600 transition-colors">
                <span className="text-4xl md:text-6xl font-black text-white mb-2">{stat.value}</span>
                <span className="text-sm font-bold text-neutral-500 uppercase tracking-widest text-center">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SALES AREA & LOCATIONS */}
      <section className="py-24 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-sm font-bold text-red-600 tracking-[0.2em] uppercase mb-4">
                Our Reach
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-black tracking-tight leading-tight mb-6">
                Supplying the largest agricultural hubs.
              </h3>
              <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                AYA operates across major strategic checkpoints to ensure rapid deployment of wholesale crate orders to farms and distribution centers.
              </p>
              
              {/* Location Tags based on the AYA Catalog */}
              <div className="flex flex-wrap gap-3">
                {siteConfig.locations.map((loc) => (
                  <span key={loc} className="px-5 py-2 bg-white border-2 border-neutral-200 text-black font-bold rounded-full text-sm hover:border-red-600 transition-colors">
                    {loc}
                  </span>
                ))}
              </div>
            </div>

            {/* Abstract Map Graphic */}
            <div className="w-full lg:w-1/2 bg-neutral-100 rounded-3xl p-8 aspect-video flex items-center justify-center border border-neutral-200 relative overflow-hidden">
               <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
               <div className="text-center relative z-10">
                 <p className="text-2xl font-black text-neutral-300 uppercase tracking-widest mb-2">Network Active</p>
                 <p className="text-sm text-neutral-400 font-medium">South & North Indian Distribution</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRODUCT LINEUP SUMMARY */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm font-bold text-red-600 tracking-[0.2em] uppercase mb-4">
            The Arsenal
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-16">
            A crate for every requirement.
          </h3>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "Red Series", color: "bg-red-600" },
              { name: "Blue Series", color: "bg-blue-600" },
              { name: "Green Series", color: "bg-green-600" },
              { name: "Orange High-Vis", color: "bg-orange-500" },
              { name: "Yellow Premium", color: "bg-yellow-400" },
              { name: "PP Black Industrial", color: "bg-neutral-900" }
            ].map((prod, i) => (
              <div key={i} className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-sm border border-neutral-200 hover:-translate-y-1 transition-transform">
                <span className={`w-4 h-4 rounded-full ${prod.color}`} />
                <span className="font-bold text-neutral-800">{prod.name}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <Link href="/products" className="inline-block text-red-600 font-bold hover:text-black transition-colors uppercase tracking-widest border-b-2 border-red-600 hover:border-black pb-1">
              View Full Product Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-32 bg-red-600 text-white text-center px-4">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
          Ready to scale your logistics?
        </h2>
        <p className="text-red-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Contact our sales team today to discuss bulk pricing, custom orders, and immediate availability in your region.
        </p>
        <Link 
          href="/contact" 
          className="inline-block bg-white text-black font-black text-lg px-10 py-5 rounded-full hover:bg-neutral-100 hover:scale-105 transition-all shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
        >
          Contact Us Now
        </Link>
      </section>

    </main>
  );
}