import React from "react";
import { siteConfig } from "../../constants/site.";

const features = [
  {
    id: 1,
    title: "High Durability",
    description: "Engineered to withstand harsh environments and rough handling without cracking or splintering.",
  },
  {
    id: 2,
    title: "Heavy Load Capacity",
    description: "Reinforced bases and walls designed specifically for dense, bulk agricultural yields.",
  },
  {
    id: 3,
    title: "Premium Plastic Material",
    description: "Manufactured using high-grade PP for maximum lifespan, washability, and UV resistance.",
  },
  {
    id: 4,
    title: "Stackable Design",
    description: "Precision-molded interlocking edges for safe, space-saving vertical storage in warehouses and trucks.",
  },
  {
    id: 5,
    title: "Wholesale Supply",
    description: "Scalable production capabilities to fulfill massive B2B orders for large farms and distributors.",
  },
  {
    id: 6,
    title: "Multi-State Delivery",
    description: `Fast, reliable logistics across ${siteConfig.locations.slice(0, 3).join(", ")} and beyond.`,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white border-t border-neutral-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Layout Container */}
        <div className="flex flex-col lg:flex-row gap-16 lg:items-start">

          {/* LEFT: Sticky Sidebar (Title & Image) */}
          <div className="lg:w-5/12 lg:sticky lg:top-32 lg:pb-16 flex flex-col z-10 bg-white lg:bg-transparent">
            
            <h2 className="text-sm font-bold text-red-600 tracking-[0.2em] uppercase mb-4">
              The AYA Advantage
            </h2>
            
            <p className="text-4xl md:text-5xl font-black text-black tracking-tight leading-tight mb-10">
              Engineered for <br className="hidden md:block"/>
              <span className=" bg-clip-text text-red-600">
                maximum impact.
              </span>
            </p>

            {/* Industrial Image Block */}
            <div className="relative w-full aspect-square md:aspect-video lg:aspect-[4/5] rounded-2xl overflow-hidden border border-neutral-200 shadow-2xl group">
              {/* Fallback pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:16px_16px] opacity-70 z-0" />
              
              <img 
                src="/images/industrial-factory.jpg" 
                alt="Factory Production" 
                className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Image Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20" />
              
              {/* Bottom Text inside Image */}
              <div className="absolute bottom-6 left-6 z-30 text-white">
                <div className="flex items-center gap-3 mb-1">
                  <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                  <p className="text-xs font-bold uppercase tracking-widest text-neutral-300">Certified Quality</p>
                </div>
                <p className="text-3xl font-black">100% Industrial</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Scrolling Feature Cards */}
          <div className="lg:w-7/12 flex flex-col gap-6 pt-4 lg:pt-0">
            {features.map((feature, index) => (
              <div 
                key={feature.id} 
                className="relative bg-white border border-neutral-200 p-8 sm:p-10 rounded-2xl transition-all duration-300 hover:border-red-600 hover:shadow-[0_20px_40px_-15px_rgba(220,38,38,0.15)] hover:-translate-y-1 group overflow-hidden cursor-default"
              >
                
                {/* Massive Background Number for Editorial Look */}
                <div className="absolute -right-4 -top-6 text-[140px] font-black text-neutral-50 group-hover:text-red-50 transition-colors duration-500 pointer-events-none select-none z-0 leading-none">
                  0{index + 1}
                </div>

                {/* Card Content */}
                <div className="relative z-10">
                  {/* Icon Box */}
                  <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:rotate-3 transition-all duration-300 shadow-md">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-black text-black mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-neutral-500 text-base font-medium leading-relaxed max-w-md">
                    {feature.description}
                  </p>
                </div>
                
                {/* Bottom Left Red Accent Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}